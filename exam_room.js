(function () {
  window.HSG_EXAMS = window.HSG_EXAMS || {};

  const EXAM_STORAGE_KEY = "hoa_thcs_exam_history_v1";
  const MAX_VIOLATIONS = 3;

  let examState = {
    view: "list", // "list" | "briefing" | "active" | "review"
    catFilter: "all",
    search: "",
    onlyWithKey: false,
    reviewFilter: "all", // "all" | "correct" | "wrong"
    currentExamId: null,
    currentExam: null,
    answers: {},
    rubricChecks: {},
    violations: 0,
    secondsLeft: 0,
    timerId: null,
    startTimeMs: 0,
    autoSubmittedReason: null,
    history: loadHistory()
  };

  function loadHistory() {
    try {
      const raw = localStorage.getItem(EXAM_STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(EXAM_STORAGE_KEY, JSON.stringify(examState.history));
    } catch (e) {
      console.warn("Cannot save exam history", e);
    }
  }

  function pad3(n) {
    return String(n).padStart(3, "0");
  }

  function formatMMSS(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function loadExamScript(examId, cb) {
    if (window.HSG_EXAMS[examId]) {
      cb(window.HSG_EXAMS[examId]);
      return;
    }
    const sc = document.createElement("script");
    sc.src = `./data/exams/exam_${pad3(examId)}.js`;
    sc.onload = () => cb(window.HSG_EXAMS[examId] || null);
    sc.onerror = () => cb(null);
    document.body.appendChild(sc);
  }

  // ===== Anti-Tab-Switch & Leave Detection =====
  function onVisibilityOrBlur() {
    if (examState.view !== "active") return;
    if (document.hidden || !document.hasFocus()) {
      registerViolation();
    }
  }

  function onBeforeUnload(e) {
    if (examState.view === "active") {
      e.preventDefault();
      e.returnValue = "Bạn đang trong giờ thi HSG. Rời trang sẽ bị tính vi phạm!";
      return e.returnValue;
    }
  }

  function registerViolation() {
    if (examState.view !== "active") return;
    examState.violations += 1;
    updateStickyBar();

    if (examState.violations >= MAX_VIOLATIONS) {
      submitExam(`Tự động nộp bài do vi phạm rời phòng thi ${MAX_VIOLATIONS}/${MAX_VIOLATIONS} lần.`);
      return;
    }

    // Show modal warning overlay
    const existing = document.getElementById("exam-violation-overlay");
    if (existing) existing.remove();
    const overlay = document.createElement("div");
    overlay.id = "exam-violation-overlay";
    overlay.className = "exam-warning-overlay";
    overlay.innerHTML = `
      <div class="exam-warning-box">
        <h2 style="color:#b91c1c;margin-top:0;">⚠️ CẢNH BÁO RỜI PHÒNG THI!</h2>
        <p>Hệ thống phát hiện bạn vừa chuyển tab hoặc rời khỏi cửa sổ làm bài.</p>
        <p style="font-size:1.1rem;font-weight:800;color:#b91c1c;">Vi phạm lần ${examState.violations} / ${MAX_VIOLATIONS}</p>
        <p style="font-size:0.88rem;color:#475569;">Nếu đạt ${MAX_VIOLATIONS} lần vi phạm, hệ thống sẽ <strong>khóa và tự động nộp bài ngay lập tức</strong>.</p>
        <button class="btn" id="btn-dismiss-violation" style="margin-top:10px;">Tôi hiểu, quay lại làm bài</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById("btn-dismiss-violation").addEventListener("click", () => {
      overlay.remove();
    });
  }

  function attachExamGuards() {
    document.addEventListener("visibilitychange", onVisibilityOrBlur);
    window.addEventListener("blur", onVisibilityOrBlur);
    window.addEventListener("beforeunload", onBeforeUnload);
  }

  function detachExamGuards() {
    document.removeEventListener("visibilitychange", onVisibilityOrBlur);
    window.removeEventListener("blur", onVisibilityOrBlur);
    window.removeEventListener("beforeunload", onBeforeUnload);
    if (examState.timerId) {
      clearInterval(examState.timerId);
      examState.timerId = null;
    }
    const overlay = document.getElementById("exam-violation-overlay");
    if (overlay) overlay.remove();
  }

  function updateStickyBar() {
    const tEl = document.getElementById("exam-timer-display");
    if (tEl) {
      tEl.textContent = formatMMSS(examState.secondsLeft);
      tEl.classList.toggle("danger", examState.secondsLeft <= 300);
    }
    const vEl = document.getElementById("exam-violation-display");
    if (vEl) {
      vEl.textContent = `⚠️ Vi phạm rời trang: ${examState.violations}/${MAX_VIOLATIONS}`;
    }
  }

  function startExam(exam) {
    examState.view = "active";
    examState.currentExam = exam;
    examState.answers = {};
    examState.rubricChecks = {};
    examState.violations = 0;
    examState.autoSubmittedReason = null;
    examState.secondsLeft = (exam.durationMinutes || 120) * 60;
    examState.startTimeMs = Date.now();

    // Hide sidebar for distraction-free exam
    const sb = document.getElementById("sidebar");
    if (sb) sb.classList.add("collapsed");

    // Request fullscreen gracefully
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }

    attachExamGuards();
    examState.timerId = setInterval(() => {
      examState.secondsLeft -= 1;
      if (examState.secondsLeft <= 0) {
        examState.secondsLeft = 0;
        submitExam("Hết thời gian làm bài – Hệ thống tự động nộp bài.");
      } else {
        updateStickyBar();
      }
    }, 1000);

    window.renderExamRoom();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function collectCurrentAnswers() {
    const exam = examState.currentExam;
    if (!exam) return;
    exam.questions.forEach((q) => {
      if (q.type === "mcq") {
        const c = document.querySelector(`input[name="ex_${q.id}"]:checked`);
        examState.answers[q.id] = c ? Number(c.value) : null;
      } else {
        const txt = document.getElementById(`ex_essay_${q.id}`);
        if (txt) examState.answers[q.id] = txt.value;
      }
    });
  }

  function submitExam(reason) {
    collectCurrentAnswers();
    detachExamGuards();
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }

    const exam = examState.currentExam;
    examState.autoSubmittedReason = reason || null;
    examState.view = "review";
    examState.reviewFilter = "all";

    const elapsedSec = Math.round((Date.now() - examState.startTimeMs) / 1000);
    const stats = computeExamStats(exam);

    const prev = examState.history[exam.id] || { attempts: 0, bestScore: 0, lastAttempt: null };
    examState.history[exam.id] = {
      attempts: prev.attempts + 1,
      bestScore: Math.max(prev.bestScore, stats.totalScore),
      lastAttempt: {
        score: stats.totalScore,
        maxScore: exam.totalPoints,
        correctMcq: stats.correctMcq,
        totalMcq: stats.totalMcq,
        violations: examState.violations,
        elapsedSec,
        date: new Date().toISOString()
      }
    };
    saveHistory();
    window.renderExamRoom();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function computeExamStats(exam) {
    let mcqScore = 0;
    let essayScore = 0;
    let correctMcq = 0;
    let wrongMcq = 0;
    let totalMcq = 0;

    exam.questions.forEach((q) => {
      if (q.type === "mcq") {
        totalMcq++;
        const ans = examState.answers[q.id];
        if (q.answer !== null && q.answer !== undefined) {
          if (ans === q.answer) {
            correctMcq++;
            mcqScore += q.points;
          } else {
            wrongMcq++;
          }
        }
      } else if (q.rubric && q.rubric.length) {
        q.rubric.forEach((r, idx) => {
          if (examState.rubricChecks[`${q.id}_${idx}`]) {
            essayScore += r.points;
          }
        });
      }
    });

    return {
      mcqScore: Number(mcqScore.toFixed(2)),
      essayScore: Number(essayScore.toFixed(2)),
      totalScore: Number((mcqScore + essayScore).toFixed(2)),
      correctMcq,
      wrongMcq,
      totalMcq
    };
  }

  function renderList(container) {
    const idx = window.HSG_EXAMS_INDEX || [];
    const cats = Array.from(new Set(idx.map((e) => e.category)));
    const filtered = idx.filter((e) => {
      if (examState.catFilter !== "all" && e.category !== examState.catFilter) return false;
      if (examState.onlyWithKey && !e.hasKey) return false;
      if (examState.search && !e.title.toLowerCase().includes(examState.search.toLowerCase())) return false;
      return true;
    });

    const attemptedCount = Object.keys(examState.history).length;

    container.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
          <div>
            <h2 style="margin:0;color:#7e22ce;">🏆 Kho Đề Thi HSG &amp; Chuyên Hóa (${idx.length} đề)</h2>
            <p style="margin:4px 0 0;font-size:0.88rem;color:#475569;">
              Làm bài trực tuyến • Giới hạn thời gian • Chống rời trang (${MAX_VIOLATIONS} lần tự nộp) • Chấm điểm &amp; Xem lại đáp án chi tiết
            </p>
          </div>
          <div class="pill pill-hsg" style="font-size:0.88rem;padding:6px 12px;">Đã thử sức: ${attemptedCount} / ${idx.length} đề</div>
        </div>
        <div class="filter-bar" style="margin-top:14px;">
          <input type="text" id="ex-search" placeholder="🔍 Tìm tên tỉnh / trường / đề..." value="${examState.search}" style="flex:1;min-width:210px;" />
          <select id="ex-cat">
            <option value="all">Tất cả cấp độ (${idx.length} đề)</option>
            ${cats.map((c) => `<option value="${c}" ${examState.catFilter === c ? "selected" : ""}>${c}</option>`).join("")}
          </select>
          <label style="display:flex;align-items:center;gap:6px;font-size:0.86rem;cursor:pointer;">
            <input type="checkbox" id="ex-only-key" ${examState.onlyWithKey ? "checked" : ""} />
            Chỉ đề có Đáp án / HDC
          </label>
        </div>
      </div>

      <div class="exam-grid">
        ${filtered.map((e) => {
          const h = examState.history[e.id];
          return `
            <div class="exam-card">
              <div>
                <div style="display:flex;justify-content:space-between;gap:6px;flex-wrap:wrap;">
                  <span class="pill pill-hsg">${e.category}</span>
                  ${e.hasKey ? `<span class="week-badge badge-ready">Có Đáp án/HDC</span>` : `<span class="week-badge badge-plan">Đề tự luyện</span>`}
                </div>
                <h4>Đề #${e.id}: ${e.title}</h4>
                <div style="font-size:0.82rem;color:#64748b;">
                  ⏱️ ${e.durationMinutes} phút • 📝 ${e.questionCount} câu (${e.mcqCount} TN, ${e.essayCount} TL) • Thang ${e.totalPoints}đ
                </div>
                ${h ? `<div style="margin-top:6px;font-size:0.82rem;color:#15803d;font-weight:600;">✅ Đã thi ${h.attempts} lần • Cao nhất: ${h.bestScore}đ</div>` : ""}
              </div>
              <button class="btn btn-hsg btn-open-briefing" data-id="${e.id}" style="width:100%;justify-content:center;">
                Vào phòng thi →
              </button>
            </div>`;
        }).join("")}
      </div>
    `;

    document.getElementById("ex-search").addEventListener("input", (ev) => {
      examState.search = ev.target.value;
      renderList(container);
    });
    document.getElementById("ex-cat").addEventListener("change", (ev) => {
      examState.catFilter = ev.target.value;
      renderList(container);
    });
    document.getElementById("ex-only-key").addEventListener("change", (ev) => {
      examState.onlyWithKey = ev.target.checked;
      renderList(container);
    });
    container.querySelectorAll(".btn-open-briefing").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        loadExamScript(id, (exam) => {
          if (!exam) return alert("Không tải được dữ liệu đề thi.");
          examState.currentExamId = id;
          examState.currentExam = exam;
          examState.view = "briefing";
          window.renderExamRoom();
        });
      });
    });
  }

  function renderBriefing(container) {
    const ex = examState.currentExam;
    container.innerHTML = `
      <div class="card" style="max-width:680px;margin:20px auto;">
        <span class="pill pill-hsg">${ex.category}</span>
        <h2 style="margin:8px 0;">Đề #${ex.id}: ${ex.title}</h2>
        <div class="callout warn">
          <strong>📜 NỘI QUY PHÒNG THI TRỰC TUYẾN:</strong>
          <ul style="margin:6px 0 0;">
            <li><strong>Thời gian làm bài:</strong> ${ex.durationMinutes} phút (hết giờ hệ thống tự động nộp).</li>
            <li><strong>Cấu trúc đề:</strong> ${ex.questions.length} câu (Tổng ${ex.totalPoints} điểm).</li>
            <li><strong>Không được rời trang:</strong> Tuyệt đối không chuyển tab, mở ứng dụng khác hoặc thu nhỏ cửa sổ. Nếu vi phạm <strong>${MAX_VIOLATIONS} lần</strong>, bài thi sẽ bị khóa và tự động nộp.</li>
            <li>Sau khi nộp bài, bạn sẽ được chấm điểm ngay, lọc xem lại câu Đúng / Sai và xem đáp án / ba rem HSG chi tiết.</li>
          </ul>
        </div>
        <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:16px;">
          <button class="btn btn-outline" id="btn-back-exam-list">← Quay lại kho đề</button>
          <button class="btn btn-hsg" id="btn-start-exam" style="font-size:1rem;padding:10px 22px;">🚀 Bắt đầu tính giờ &amp; Làm bài</button>
        </div>
      </div>
    `;
    document.getElementById("btn-back-exam-list").addEventListener("click", () => {
      examState.view = "list";
      window.renderExamRoom();
    });
    document.getElementById("btn-start-exam").addEventListener("click", () => {
      startExam(ex);
    });
  }

  function renderActiveExam(container) {
    const ex = examState.currentExam;
    container.innerHTML = `
      <div class="exam-sticky-bar">
        <div>
          <div style="font-size:0.78rem;opacity:0.85;">${ex.category} • Đang làm bài</div>
          <div style="font-weight:700;">Đề #${ex.id}: ${ex.title}</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <span class="exam-violation-badge" id="exam-violation-display">⚠️ Vi phạm rời trang: ${examState.violations}/${MAX_VIOLATIONS}</span>
          <span class="exam-timer" id="exam-timer-display">${formatMMSS(examState.secondsLeft)}</span>
          <button class="btn btn-success" id="btn-finish-exam">✅ Nộp bài ngay</button>
        </div>
      </div>

      <div class="exam-lock-nosel" id="exam-questions-wrap">
        ${ex.questions.map((q) => {
          if (q.type === "mcq") {
            const saved = examState.answers[q.id];
            return `
              <div class="q-card">
                <div class="q-title"><span>Câu ${q.num}: ${q.prompt}</span><span class="pill">${q.points}đ</span></div>
                <div class="q-options">
                  ${q.options.map((o, idx) => `
                    <label class="opt-label">
                      <input type="radio" name="ex_${q.id}" value="${idx}" ${saved === idx ? "checked" : ""} />
                      <span>${o}</span>
                    </label>`).join("")}
                </div>
              </div>`;
          }
          const savedTxt = examState.answers[q.id] || "";
          return `
            <div class="q-card">
              <div class="q-title"><span>Câu ${q.num}: ${q.prompt}</span><span class="pill pill-hsg">${q.points}đ</span></div>
              <textarea class="essay-textarea" id="ex_essay_${q.id}" placeholder="Nhập bài làm / các bước giải chính của bạn (hoặc làm ra giấy để đối chiếu ba rem sau khi nộp)...">${savedTxt}</textarea>
            </div>`;
        }).join("")}
      </div>
    `;

    // Prevent right-click copy on exam questions
    document.getElementById("exam-questions-wrap").addEventListener("contextmenu", (e) => e.preventDefault());
    document.getElementById("btn-finish-exam").addEventListener("click", () => {
      if (confirm("Bạn chắc chắn muốn nộp bài thi ngay bây giờ?")) {
        submitExam(null);
      }
    });
  }

  function renderReview(container) {
    const ex = examState.currentExam;
    const stats = computeExamStats(ex);
    const h = examState.history[ex.id];
    const last = h ? h.lastAttempt : null;
    const minsUsed = last ? Math.floor(last.elapsedSec / 60) : 0;
    const secsUsed = last ? last.elapsedSec % 60 : 0;

    const filteredQs = ex.questions.filter((q) => {
      if (examState.reviewFilter === "all") return true;
      if (q.type === "mcq" && q.answer !== null && q.answer !== undefined) {
        const isCorrect = examState.answers[q.id] === q.answer;
        return examState.reviewFilter === "correct" ? isCorrect : !isCorrect;
      }
      return examState.reviewFilter === "wrong";
    });

    container.innerHTML = `
      <div class="score-banner" style="background:linear-gradient(135deg,#4c1d95,#7e22ce);">
        <div>
          <div style="font-size:0.86rem;opacity:0.9;">KẾT QUẢ BÀI THI • Đề #${ex.id}: ${ex.title}</div>
          <div class="score-big">${stats.totalScore} / ${ex.totalPoints} điểm</div>
          <div style="font-size:0.85rem;margin-top:4px;">
            Trắc nghiệm đúng: <strong>${stats.correctMcq}/${stats.totalMcq}</strong> •
            Thời gian làm: <strong>${minsUsed}p ${secsUsed}s</strong> •
            Vi phạm rời trang: <strong>${examState.violations}/${MAX_VIOLATIONS}</strong>
          </div>
          ${examState.autoSubmittedReason ? `<div style="margin-top:6px;background:rgba(220,38,38,0.85);padding:4px 10px;border-radius:6px;font-size:0.84rem;">⚠️ ${examState.autoSubmittedReason}</div>` : ""}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn btn-outline" style="background:#fff;color:#4c1d95;" id="btn-retake-exam">🔄 Thi lại đề này</button>
          <button class="btn btn-outline" style="background:#fff;color:#4c1d95;" id="btn-back-list">← Về kho đề</button>
        </div>
      </div>

      <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <strong>🔍 Xem lại bài làm &amp; Đáp án chi tiết:</strong>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn ${examState.reviewFilter === "all" ? "" : "btn-outline"} rev-f" data-f="all">Tất cả (${ex.questions.length})</button>
          <button class="btn ${examState.reviewFilter === "correct" ? "btn-success" : "btn-outline"} rev-f" data-f="correct">✅ Câu đúng (${stats.correctMcq})</button>
          <button class="btn ${examState.reviewFilter === "wrong" ? "" : "btn-outline"} rev-f" data-f="wrong">❌ Câu sai / Tự luận</button>
        </div>
      </div>

      ${filteredQs.map((q) => {
        if (q.type === "mcq") {
          const userAns = examState.answers[q.id];
          const hasKey = q.answer !== null && q.answer !== undefined;
          const isOk = hasKey && userAns === q.answer;
          const cls = hasKey ? (isOk ? "correct" : "wrong") : "";
          return `
            <div class="q-card ${cls}">
              <div class="q-title">
                <span>Câu ${q.num}: ${q.prompt}</span>
                <span class="pill">${hasKey ? (isOk ? `+${q.points}đ ✅` : `0đ ❌`) : `${q.points}đ`}</span>
              </div>
              <div style="font-size:0.88rem;margin-top:6px;">
                <div><strong>Bạn chọn:</strong> ${userAns !== null && userAns !== undefined ? q.options[userAns] : "<em>Chưa chọn</em>"}</div>
                ${hasKey ? `<div style="color:#15803d;"><strong>Đáp án đúng:</strong> ${q.options[q.answer]}</div>` : `<div style="color:#64748b;"><em>Đề gốc không đính kèm bảng đáp án trắc nghiệm.</em></div>`}
              </div>
            </div>`;
        }
        const userTxt = examState.answers[q.id] || "";
        return `
          <div class="q-card">
            <div class="q-title"><span>Câu ${q.num}: ${q.prompt}</span><span class="pill pill-hsg">${q.points}đ</span></div>
            ${userTxt ? `<div style="background:#f8fafc;padding:8px 10px;border-radius:6px;margin-bottom:8px;font-size:0.88rem;"><strong>Bài làm của bạn:</strong><br/>${userTxt}</div>` : ""}
            <div class="solution-box">
              ${q.rubric && q.rubric.length ? `
                <strong>📏 Ba rem Hướng dẫn chấm (Tự chấm điểm):</strong>
                ${q.rubric.map((r, rIdx) => `
                  <div class="rubric-check-row">
                    <label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer;">
                      <input type="checkbox" class="ex-rubric-cb" data-qid="${q.id}" data-ridx="${rIdx}" ${examState.rubricChecks[`${q.id}_${rIdx}`] ? "checked" : ""} />
                      <span>${r.step}</span>
                    </label>
                    <span class="pill pill-hsg">+${r.points}đ</span>
                  </div>`).join("")}
              ` : ""}
              ${q.solution ? `<div style="margin-top:6px;">${q.solution}</div>` : (!q.rubric || !q.rubric.length ? `<em>Đề gốc không đính kèm hướng dẫn chấm chi tiết cho câu này.</em>` : "")}
            </div>
          </div>`;
      }).join("")}
    `;

    document.getElementById("btn-back-list").addEventListener("click", () => {
      examState.view = "list";
      window.renderExamRoom();
    });
    document.getElementById("btn-retake-exam").addEventListener("click", () => {
      examState.view = "briefing";
      window.renderExamRoom();
    });
    container.querySelectorAll(".rev-f").forEach((btn) => {
      btn.addEventListener("click", () => {
        examState.reviewFilter = btn.dataset.f;
        renderReview(container);
      });
    });
    container.querySelectorAll(".ex-rubric-cb").forEach((cb) => {
      cb.addEventListener("change", () => {
        examState.rubricChecks[`${cb.dataset.qid}_${cb.dataset.ridx}`] = cb.checked;
        const newStats = computeExamStats(ex);
        if (examState.history[ex.id]) {
          examState.history[ex.id].bestScore = Math.max(examState.history[ex.id].bestScore, newStats.totalScore);
          if (examState.history[ex.id].lastAttempt) {
            examState.history[ex.id].lastAttempt.score = newStats.totalScore;
          }
          saveHistory();
        }
        renderReview(container);
      });
    });
  }

  window.renderExamRoom = function () {
    const main = document.getElementById("main-content");
    const hdr = document.getElementById("week-header");
    const tabs = document.getElementById("week-tabs");
    const body = document.getElementById("tab-body");
    if (!body) return;
    if (hdr) hdr.style.display = "none";
    if (tabs) tabs.style.display = "none";

    if (examState.view === "list") renderList(body);
    else if (examState.view === "briefing") renderBriefing(body);
    else if (examState.view === "active") renderActiveExam(body);
    else if (examState.view === "review") renderReview(body);

    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(body, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) {}
    }
  };
})();
