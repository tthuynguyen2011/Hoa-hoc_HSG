(function () {
  window.WEEK_DATA = window.WEEK_DATA || {};

  const STORAGE_KEY = "hoa_thcs_hsg_progress_v1";
  let state = {
    currentWeek: 1,
    currentTab: "lecture",
    stageFilter: "all",
    progress: loadProgress()
  };

  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : { weeks: {} };
    } catch (e) {
      return { weeks: {} };
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
    } catch (e) {
      console.warn("Cannot save to localStorage", e);
    }
    updateOverallProgress();
  }

  function getWeekProgress(weekNum) {
    if (!state.progress.weeks[weekNum]) {
      state.progress.weeks[weekNum] = {
        lectureDone: false,
        submitted: false,
        answers: {},
        rubricChecks: {},
        score: 0,
        maxScore: 0
      };
    }
    return state.progress.weeks[weekNum];
  }

  function renderMath(el) {
    if (window.renderMathInElement && el) {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn("KaTeX render error:", e);
      }
    }
  }

  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function loadWeekScript(weekNum, callback) {
    if (window.WEEK_DATA[weekNum]) {
      callback(window.WEEK_DATA[weekNum]);
      return;
    }
    const meta = findWeekMeta(weekNum);
    if (!meta || meta.status !== "ready") {
      callback(null);
      return;
    }
    const script = document.createElement("script");
    script.src = `./data/weeks/week_${pad2(weekNum)}.js`;
    script.onload = () => callback(window.WEEK_DATA[weekNum] || null);
    script.onerror = () => callback(null);
    document.body.appendChild(script);
  }

  function findWeekMeta(weekNum) {
    for (const st of window.CURRICULUM.stages) {
      for (const w of st.weeks) {
        if (w.week === weekNum) return { ...w, stageName: st.name, stageId: st.id };
      }
    }
    return null;
  }

  function updateOverallProgress() {
    const total = 72;
    let doneCount = 0;
    for (let i = 1; i <= total; i++) {
      const wp = state.progress.weeks[i];
      if (wp && (wp.submitted || wp.lectureDone)) doneCount++;
    }
    const pct = Math.round((doneCount / total) * 100);
    document.getElementById("overall-progress-text").textContent = `${doneCount} / ${total} tuần (${pct}%)`;
    document.getElementById("overall-progress-fill").style.width = `${pct}%`;
  }

  function renderSidebar() {
    const listEl = document.getElementById("week-list");
    const filter = state.stageFilter;
    let html = "";
    for (const st of window.CURRICULUM.stages) {
      if (filter !== "all" && String(st.id) !== filter) continue;
      html += `<div style="padding:8px 8px 4px;font-size:0.75rem;font-weight:700;color:#475569;text-transform:uppercase;">Giai đoạn ${st.id}</div>`;
      for (const w of st.weeks) {
        const wp = state.progress.weeks[w.week];
        const isActive = state.currentWeek === w.week;
        let badge = `<span class="week-badge badge-plan">Đề cương</span>`;
        if (wp && wp.submitted) {
          badge = `<span class="week-badge badge-done">${wp.score.toFixed(1)}đ</span>`;
        } else if (w.status === "ready") {
          badge = `<span class="week-badge badge-ready">Sẵn sàng</span>`;
        }
        html += `
          <div class="week-item ${isActive ? "active" : ""} ${w.status !== "ready" ? "locked" : ""}" data-week="${w.week}">
            <div>
              <div style="font-weight:600;">Tuần ${w.week} <span style="font-weight:400;color:#64748b;">(${w.grade})</span></div>
              <div style="font-size:0.77rem;color:#64748b;line-height:1.3;">${w.title}</div>
            </div>
            ${badge}
          </div>`;
      }
    }
    listEl.innerHTML = html;
    listEl.querySelectorAll(".week-item").forEach((el) => {
      el.addEventListener("click", () => {
        state.currentWeek = Number(el.dataset.week);
        state.appMode = "study";
        renderApp();
      });
    });
  }

  function renderHeader(meta, data) {
    const hdr = document.getElementById("week-header");
    const wp = getWeekProgress(meta.week);
    hdr.innerHTML = `
      <div>
        <div class="week-meta">
          <span class="pill">Tuần ${meta.week} / 72</span>
          <span class="pill pill-warn">${meta.grade}</span>
          <span class="pill pill-hsg">Mục tiêu: HSG 9 &amp; Chuyên Hóa 10</span>
        </div>
        <h2>${meta.title}</h2>
        <div style="font-size:0.86rem;color:#475569;">${meta.stageName}</div>
      </div>
      <div style="text-align:right;">
        ${wp.submitted ? `<div class="pill" style="background:#dcfce7;color:#166534;font-size:0.88rem;">Đã nộp: ${wp.score.toFixed(2)} / ${wp.maxScore} điểm</div>` : ""}
        ${data ? `<div style="margin-top:8px;display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;">
          <button class="btn btn-outline" onclick="window.__printMode('worksheet')">🖨️ In Phiếu BT (A4)</button>
          <button class="btn btn-outline" onclick="window.__printMode('rubric')">🖨️ In Ba rem HSG</button>
        </div>` : ""}
      </div>
    `;
  }

  function renderLecture(data, meta) {
    const wp = getWeekProgress(meta.week);
    let html = `
      <div class="card">
        <h3>🎯 Mục tiêu cần đạt</h3>
        <ul>${data.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>
      </div>
    `;
    data.lecture.forEach((sec, idx) => {
      html += `
        <div class="card">
          <h3>Phần ${idx + 1}: ${sec.title}</h3>
          <div>${sec.content}</div>
          ${sec.example ? `<div class="callout hsg"><strong>💡 Ví dụ mẫu &amp; Tư duy HSG:</strong><br/>${sec.example}</div>` : ""}
          ${sec.checkpoint ? renderCheckpoint(sec.checkpoint, idx) : ""}
        </div>
      `;
    });
    html += `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <strong>Hoàn thành bài giảng Tuần ${meta.week}?</strong>
          <div style="font-size:0.85rem;color:#64748b;">Đánh dấu đã học xong để chuyển sang làm 20 bài tập tự luyện.</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="btn ${wp.lectureDone ? "btn-success" : "btn-outline"}" id="btn-mark-lecture">
            ${wp.lectureDone ? "✅ Đã học xong bài giảng" : "☑️ Đánh dấu đã học xong"}
          </button>
          <button class="btn" id="btn-go-exercises">Làm 20 bài tập →</button>
        </div>
      </div>
    `;
    return html;
  }

  function renderCheckpoint(cp, idx) {
    return `
      <div class="callout" style="margin-top:12px;">
        <strong>⚡ Kiểm tra nhanh:</strong> ${cp.question}
        <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;">
          ${cp.options.map((opt, i) => `
            <button class="btn btn-outline cp-btn" data-cp="${idx}" data-opt="${i}" data-ans="${cp.answer}" data-exp="${encodeURIComponent(cp.explanation)}">${opt}</button>
          `).join("")}
        </div>
        <div id="cp-feedback-${idx}" style="margin-top:8px;font-size:0.88rem;"></div>
      </div>
    `;
  }

  function renderExercises(data, meta) {
    const wp = getWeekProgress(meta.week);
    const tiers = [
      { key: "basic", label: "PHẦN I. BÀI TẬP CƠ BẢN (10 câu – Nắm chắc nền tảng)", cls: "tier-basic" },
      { key: "advanced", label: "PHẦN II. BÀI TẬP TRÊN CƠ BẢN (5 câu – Vận dụng & Tính toán)", cls: "tier-advanced" },
      { key: "hsg", label: "PHẦN III. ĐÀO TẠO THI HSG (5 câu – Chấm theo Ba rem HSG)", cls: "tier-hsg" }
    ];

    let html = "";
    if (wp.submitted) {
      html += `
        <div class="score-banner">
          <div>
            <div style="font-size:0.9rem;opacity:0.9;">KẾT QUẢ TUẦN ${meta.week}</div>
            <div class="score-big">${wp.score.toFixed(2)} / ${wp.maxScore} điểm</div>
            <div style="font-size:0.84rem;opacity:0.9;">Phần tự luận HSG: tick vào từng ý đạt bên dưới để cộng điểm chuẩn theo ba rem giám khảo!</div>
          </div>
          <button class="btn btn-outline" style="background:#fff;color:#1e3a8a;" id="btn-reset-quiz">🔄 Làm lại từ đầu</button>
        </div>
      `;
    }

    tiers.forEach((tier) => {
      const qs = data.questions.filter((q) => q.tier === tier.key);
      if (!qs.length) return;
      html += `<div class="tier-header ${tier.cls}"><span>${tier.label}</span><span>${qs.reduce((s, q) => s + q.points, 0)} điểm</span></div>`;
      qs.forEach((q) => {
        html += renderQuestionCard(q, wp);
      });
    });

    if (!wp.submitted) {
      html += `
        <div class="card" style="text-align:center;">
          <button class="btn btn-success" style="font-size:1rem;padding:11px 26px;" id="btn-submit-quiz">
            ✅ Nộp bài &amp; Chấm điểm tự động
          </button>
        </div>
      `;
    }
    return html;
  }

  function renderQuestionCard(q, wp) {
    const saved = wp.answers[q.id];
    let statusCls = "";
    if (wp.submitted && q.type !== "essay_hsg") {
      const earned = gradeQuestion(q, saved);
      statusCls = earned >= q.points * 0.99 ? "correct" : "wrong";
    }
    let body = "";
    if (q.type === "mcq") {
      body = `<div class="q-options">${q.options.map((opt, idx) => `
        <label class="opt-label">
          <input type="radio" name="q_${q.id}" value="${idx}" ${saved === idx ? "checked" : ""} ${wp.submitted ? "disabled" : ""} />
          <span>${opt}</span>
        </label>`).join("")}</div>`;
    } else if (q.type === "true_false") {
      const arr = Array.isArray(saved) ? saved : [];
      body = `<div style="margin-top:8px;">${q.statements.map((st, idx) => `
        <div class="tf-row">
          <span><strong>${String.fromCharCode(97 + idx)})</strong> ${st.text}</span>
          <div class="tf-btns">
            <label><input type="radio" name="q_${q.id}_${idx}" value="true" ${arr[idx] === true ? "checked" : ""} ${wp.submitted ? "disabled" : ""}/> Đúng</label>
            <label><input type="radio" name="q_${q.id}_${idx}" value="false" ${arr[idx] === false ? "checked" : ""} ${wp.submitted ? "disabled" : ""}/> Sai</label>
          </div>
        </div>`).join("")}</div>`;
    } else if (q.type === "short_answer") {
      body = `
        <input class="short-input" type="text" id="input_${q.id}" placeholder="Nhập đáp số (ví dụ: 12.5 hoặc CaCO3)..." value="${saved ? escapeHtml(saved) : ""}" ${wp.submitted ? "disabled" : ""} />
      `;
    } else if (q.type === "essay_hsg") {
      const val = saved || { text: "", quickNum: "" };
      body = `
        <textarea class="essay-textarea" id="essay_text_${q.id}" placeholder="Ghi tóm tắt hướng giải hoặc nháp các bước làm bài..." ${wp.submitted ? "disabled" : ""}>${escapeHtml(val.text || "")}</textarea>
        ${q.quickAnswer !== undefined ? `
          <div style="margin-top:6px;">
            <label style="font-size:0.84rem;font-weight:600;">Đáp số nhanh (nếu có): </label>
            <input class="short-input" style="max-width:200px;margin-top:0;" type="text" id="essay_num_${q.id}" value="${escapeHtml(val.quickNum || "")}" ${wp.submitted ? "disabled" : ""} />
          </div>` : ""}
      `;
    }

    let solutionHtml = "";
    if (wp.submitted) {
      solutionHtml = `<div class="solution-box">`;
      if (q.type === "mcq") {
        solutionHtml += `<strong>Đáp án đúng:</strong> ${q.options[q.answer]}<br/>`;
      } else if (q.type === "true_false") {
        solutionHtml += `<strong>Đáp án đúng:</strong> ` + q.statements.map((s, i) => `${String.fromCharCode(97 + i)}) ${s.answer ? "Đúng" : "Sai"}`).join(" | ") + "<br/>";
      } else if (q.type === "short_answer") {
        solutionHtml += `<strong>Đáp án chuẩn:</strong> ${q.answer}<br/>`;
      }
      if (q.solution) {
        solutionHtml += `<div style="margin-top:4px;"><strong>Lời giải chi tiết:</strong> ${q.solution}</div>`;
      }
      if (q.rubric && q.rubric.length) {
        solutionHtml += `<div style="margin-top:8px;"><strong>📏 Ba rem chấm thi HSG (Tự chấm từng ý):</strong>`;
        q.rubric.forEach((r, rIdx) => {
          const checked = !!(wp.rubricChecks[`${q.id}_${rIdx}`]);
          solutionHtml += `
            <div class="rubric-check-row">
              <label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer;">
                <input type="checkbox" class="rubric-cb" data-qid="${q.id}" data-ridx="${rIdx}" data-pts="${r.points}" ${checked ? "checked" : ""} />
                <span>${r.step}</span>
              </label>
              <span class="pill pill-hsg">+${r.points}đ</span>
            </div>`;
        });
        solutionHtml += `</div>`;
      }
      solutionHtml += `</div>`;
    }

    return `
      <div class="q-card ${statusCls}">
        <div class="q-title">
          <span>Câu ${q.num}: ${q.prompt}</span>
          <span class="pill">${q.points}đ</span>
        </div>
        ${body}
        ${solutionHtml}
      </div>
    `;
  }

  function renderLessonPlan(data, meta) {
    const lp = data.lessonPlan;
    return `
      <div class="card" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
        <div>
          <h3 style="margin:0;">🖨️ Xuất &amp; In phiếu chuẩn khổ A4</h3>
          <div style="font-size:0.85rem;color:#64748b;">Hỗ trợ in trực tiếp ra máy in hoặc chọn "Save as PDF" trong hộp thoại in.</div>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button class="btn" onclick="window.__printMode('lesson-plan')">🖨️ In Giáo án Tuần</button>
          <button class="btn btn-success" onclick="window.__printMode('worksheet')">🖨️ In Phiếu Bài tập HS</button>
          <button class="btn btn-hsg" onclick="window.__printMode('rubric')">🖨️ In Chữa bài &amp; Ba rem HSG</button>
        </div>
      </div>

      <div class="card">
        <h3>📋 Giáo án Tuần ${meta.week}: ${meta.title}</h3>
        <p><strong>Thời lượng đề xuất:</strong> ${lp.duration}</p>
        <p><strong>Chuẩn bị của Phụ huynh / Giáo viên:</strong> ${lp.preparation}</p>
        <table class="std-table">
          <thead><tr><th style="width:18%;">Buổi / Hoạt động</th><th>Nội dung trọng tâm &amp; Phương pháp hướng dẫn</th><th style="width:24%;">Lưu ý lỗi sai thường gặp</th></tr></thead>
          <tbody>
            ${lp.sessions.map((s) => `<tr><td><strong>${s.name}</strong></td><td>${s.guide}</td><td>${s.pitfalls}</td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function renderRoadmapOverview() {
    let html = `<div class="card"><h3>🗺️ Tổng quan Đề cương 2 Năm (72 Tuần) – Đích: HSG 9 &amp; Chuyên Hóa 10</h3>`;
    window.CURRICULUM.stages.forEach((st) => {
      html += `
        <h4 style="margin:16px 0 6px;color:#1d4ed8;">${st.name}</h4>
        <p style="margin:0 0 8px;font-size:0.88rem;color:#475569;">${st.desc}</p>
        <table class="std-table">
          <thead><tr><th style="width:80px;">Tuần</th><th>Nội dung trọng tâm</th><th style="width:100px;">Phân loại</th><th style="width:110px;">Trạng thái</th></tr></thead>
          <tbody>
            ${st.weeks.map((w) => `
              <tr>
                <td><strong>Tuần ${w.week}</strong></td>
                <td>${w.title}</td>
                <td>${w.grade}</td>
                <td>${w.status === "ready" ? `<span class="week-badge badge-ready">Đã có bài</span>` : `<span class="week-badge badge-plan">Đang mở rộng</span>`}</td>
              </tr>`).join("")}
          </tbody>
        </table>`;
    });
    html += `</div>`;
    return html;
  }

  function gradeQuestion(q, ans) {
    if (ans === undefined || ans === null) return 0;
    if (q.type === "mcq") {
      return Number(ans) === Number(q.answer) ? q.points : 0;
    }
    if (q.type === "true_false") {
      if (!Array.isArray(ans)) return 0;
      let right = 0;
      q.statements.forEach((st, idx) => {
        if (ans[idx] === st.answer) right++;
      });
      if (right === 4) return q.points;
      if (right === 3) return Number((q.points * 0.5).toFixed(2));
      if (right === 2) return Number((q.points * 0.25).toFixed(2));
      if (right === 1) return Number((q.points * 0.1).toFixed(2));
      return 0;
    }
    if (q.type === "short_answer") {
      const userStr = String(ans).trim().replace(",", ".").toLowerCase();
      const targetStr = String(q.answer).trim().replace(",", ".").toLowerCase();
      if (q.tolerance !== undefined) {
        const uNum = parseFloat(userStr);
        const tNum = parseFloat(targetStr);
        if (!isNaN(uNum) && !isNaN(tNum) && Math.abs(uNum - tNum) <= q.tolerance) {
          return q.points;
        }
        return 0;
      }
      return userStr === targetStr ? q.points : 0;
    }
    return 0;
  }

  function computeTotalScore(data, wp) {
    let score = 0;
    let maxScore = 0;
    data.questions.forEach((q) => {
      maxScore += q.points;
      if (q.type === "essay_hsg") {
        if (q.rubric && q.rubric.length) {
          q.rubric.forEach((r, idx) => {
            if (wp.rubricChecks[`${q.id}_${idx}`]) score += r.points;
          });
        }
      } else {
        score += gradeQuestion(q, wp.answers[q.id]);
      }
    });
    wp.score = Number(score.toFixed(2));
    wp.maxScore = Number(maxScore.toFixed(2));
  }

  function bindExerciseEvents(data, meta) {
    const wp = getWeekProgress(meta.week);
    const submitBtn = document.getElementById("btn-submit-quiz");
    if (submitBtn) {
      submitBtn.addEventListener("click", () => {
        data.questions.forEach((q) => {
          if (q.type === "mcq") {
            const checked = document.querySelector(`input[name="q_${q.id}"]:checked`);
            wp.answers[q.id] = checked ? Number(checked.value) : null;
          } else if (q.type === "true_false") {
            wp.answers[q.id] = q.statements.map((_, idx) => {
              const c = document.querySelector(`input[name="q_${q.id}_${idx}"]:checked`);
              return c ? c.value === "true" : null;
            });
          } else if (q.type === "short_answer") {
            const inp = document.getElementById(`input_${q.id}`);
            wp.answers[q.id] = inp ? inp.value : "";
          } else if (q.type === "essay_hsg") {
            const txt = document.getElementById(`essay_text_${q.id}`);
            const num = document.getElementById(`essay_num_${q.id}`);
            wp.answers[q.id] = { text: txt ? txt.value : "", quickNum: num ? num.value : "" };
          }
        });
        wp.submitted = true;
        computeTotalScore(data, wp);
        saveProgress();
        renderApp();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    const resetBtn = document.getElementById("btn-reset-quiz");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        wp.submitted = false;
        wp.answers = {};
        wp.rubricChecks = {};
        wp.score = 0;
        saveProgress();
        renderApp();
      });
    }

    document.querySelectorAll(".rubric-cb").forEach((cb) => {
      cb.addEventListener("change", () => {
        const key = `${cb.dataset.qid}_${cb.dataset.ridx}`;
        wp.rubricChecks[key] = cb.checked;
        computeTotalScore(data, wp);
        saveProgress();
        const bannerScore = document.querySelector(".score-big");
        if (bannerScore) bannerScore.textContent = `${wp.score.toFixed(2)} / ${wp.maxScore} điểm`;
        renderSidebar();
      });
    });
  }

  function bindLectureEvents(meta) {
    document.querySelectorAll(".cp-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = btn.dataset.cp;
        const opt = Number(btn.dataset.opt);
        const ans = Number(btn.dataset.ans);
        const exp = decodeURIComponent(btn.dataset.exp);
        const fb = document.getElementById(`cp-feedback-${idx}`);
        if (opt === ans) {
          fb.innerHTML = `<span style="color:#15803d;font-weight:700;">✅ Chính xác!</span> ${exp}`;
        } else {
          fb.innerHTML = `<span style="color:#b91c1c;font-weight:700;">❌ Chưa đúng.</span> ${exp}`;
        }
        renderMath(fb);
      });
    });

    const markBtn = document.getElementById("btn-mark-lecture");
    if (markBtn) {
      markBtn.addEventListener("click", () => {
        const wp = getWeekProgress(meta.week);
        wp.lectureDone = !wp.lectureDone;
        saveProgress();
        renderApp();
      });
    }
    const goEx = document.getElementById("btn-go-exercises");
    if (goEx) {
      goEx.addEventListener("click", () => {
        state.currentTab = "exercises";
        renderApp();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }

  // Print A4 Handler
  window.__printMode = function (mode) {
    const meta = findWeekMeta(state.currentWeek);
    const data = window.WEEK_DATA[state.currentWeek];
    if (!meta || !data) return;
    const printEl = document.getElementById("print-area");

    if (mode === "lesson-plan") {
      const lp = data.lessonPlan;
      printEl.innerHTML = `
        <div class="print-header">
          <div><strong>GIÁO ÁN HÓA HỌC THCS (LỘ TRÌNH 2 NĂM HSG)</strong><br/>Tuần ${meta.week}: ${meta.title}</div>
          <div style="text-align:right;">Phân loại: ${meta.grade}<br/>Thời lượng: ${lp.duration}</div>
        </div>
        <p><strong>I. Mục tiêu cần đạt:</strong></p>
        <ul>${data.objectives.map((o) => `<li>${o}</li>`).join("")}</ul>
        <p><strong>II. Chuẩn bị:</strong> ${lp.preparation}</p>
        <p><strong>III. Tiến trình giảng dạy:</strong></p>
        <table class="std-table">
          <thead><tr><th style="width:18%;">Buổi</th><th>Nội dung &amp; Phương pháp</th><th style="width:25%;">Lỗi sai cần tránh</th></tr></thead>
          <tbody>${lp.sessions.map((s) => `<tr><td><strong>${s.name}</strong></td><td>${s.guide}</td><td>${s.pitfalls}</td></tr>`).join("")}</tbody>
        </table>
      `;
    } else if (mode === "worksheet") {
      const tiers = [
        { key: "basic", label: "PHẦN I. BÀI TẬP CƠ BẢN (10 câu)" },
        { key: "advanced", label: "PHẦN II. BÀI TẬP TRÊN CƠ BẢN (5 câu)" },
        { key: "hsg", label: "PHẦN III. ĐÀO TẠO THI HỌC SINH GIỎI (5 câu)" }
      ];
      let qsHtml = "";
      tiers.forEach((t) => {
        const qs = data.questions.filter((q) => q.tier === t.key);
        if (!qs.length) return;
        qsHtml += `<h4 style="margin:12px 0 6px;border-bottom:1px solid #000;padding-bottom:2px;">${t.label}</h4>`;
        qs.forEach((q) => {
          qsHtml += `<div class="print-q"><strong>Câu ${q.num} (${q.points}đ):</strong> ${q.prompt}`;
          if (q.type === "mcq") {
            qsHtml += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-top:4px;">${q.options.map((o) => `<div>${o}</div>`).join("")}</div>`;
          } else if (q.type === "true_false") {
            qsHtml += `<div>${q.statements.map((s, i) => `<div>${String.fromCharCode(97 + i)}) ${s.text} &nbsp;&nbsp; [Đ / S]</div>`).join("")}</div>`;
          } else if (q.type === "short_answer") {
            qsHtml += `<div style="margin-top:6px;"><em>Trả lời:</em> ......................................................................</div>`;
          } else {
            qsHtml += `<div class="print-lines ${q.tier === "hsg" ? "tall" : ""}"></div>`;
          }
          qsHtml += `</div>`;
        });
      });
      printEl.innerHTML = `
        <div class="print-header">
          <div><strong>PHIẾU BÀI TẬP HỌC SINH – TUẦN ${meta.week}</strong><br/>Chủ đề: ${meta.title}</div>
          <div style="text-align:right;">Họ và tên: ........................................<br/>Điểm: ............. / 20</div>
        </div>
        ${qsHtml}
      `;
    } else if (mode === "rubric") {
      let rows = data.questions.map((q) => {
        let ans = "";
        if (q.type === "mcq") ans = q.options[q.answer];
        else if (q.type === "true_false") ans = q.statements.map((s, i) => `${String.fromCharCode(97 + i)}) ${s.answer ? "Đ" : "S"}`).join("; ");
        else if (q.type === "short_answer") ans = q.answer;
        let rub = q.rubric && q.rubric.length
          ? q.rubric.map((r) => `• ${r.step} <strong>(${r.points}đ)</strong>`).join("<br/>")
          : (q.solution || "");
        return `<tr><td><strong>Câu ${q.num}</strong><br/>(${q.points}đ)</td><td>${ans ? `<strong>Đáp án:</strong> ${ans}<br/>` : ""}${q.solution || ""}</td><td>${rub}</td></tr>`;
      }).join("");
      printEl.innerHTML = `
        <div class="print-header">
          <div><strong>HƯỚNG DẪN CHẤM &amp; BA REM THI HSG – TUẦN ${meta.week}</strong><br/>${meta.title}</div>
          <div style="text-align:right;">Chuẩn GDPT 2018</div>
        </div>
        <table class="std-table">
          <thead><tr><th style="width:10%;">Câu</th><th style="width:45%;">Đáp án &amp; Lời giải chi tiết</th><th style="width:45%;">Ba rem điểm thành phần</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      `;
    }
    renderMath(printEl);
    setTimeout(() => window.print(), 180);
  };

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderApp() {
    updateOverallProgress();
    renderSidebar();
    const hdr = document.getElementById("week-header");
    const tabs = document.getElementById("week-tabs");
    if (state.appMode === "exam" && window.renderExamRoom) {
      window.renderExamRoom();
      return;
    }
    if (hdr) hdr.style.display = "";
    if (tabs) tabs.style.display = "";
    const meta = findWeekMeta(state.currentWeek);
    document.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.tab === state.currentTab);
    });

    const bodyEl = document.getElementById("tab-body");
    if (state.currentTab === "roadmap") {
      renderHeader(meta, window.WEEK_DATA[state.currentWeek] || null);
      bodyEl.innerHTML = renderRoadmapOverview();
      return;
    }

    loadWeekScript(state.currentWeek, (data) => {
      renderHeader(meta, data);
      if (!data) {
        bodyEl.innerHTML = `
          <div class="card">
            <h3>🚧 Tuần ${meta.week}: ${meta.title}</h3>
            <p>Nội dung chi tiết tuần này đang được biên soạn theo lộ trình 72 tuần. Hiện bạn có thể học và làm bài tập đầy đủ ở <strong>Tuần 1</strong> và <strong>Tuần 2</strong>, hoặc xem toàn bộ đề cương ở tab <strong>Đề cương 72 tuần</strong>.</p>
          </div>`;
        return;
      }
      if (state.currentTab === "lecture") {
        bodyEl.innerHTML = renderLecture(data, meta);
        bindLectureEvents(meta);
      } else if (state.currentTab === "exercises") {
        bodyEl.innerHTML = renderExercises(data, meta);
        bindExerciseEvents(data, meta);
      } else if (state.currentTab === "lesson-plan") {
        bodyEl.innerHTML = renderLessonPlan(data, meta);
      }
      renderMath(bodyEl);
    });
  }

  // Reference Modal
  function initReferenceModal() {
    const modal = document.getElementById("ref-modal");
    const body = document.getElementById("ref-modal-body");
    body.innerHTML = `
      <div class="callout">
        <strong>Hằng số chuẩn GDPT 2018:</strong> Ở điều kiện chuẩn (đkc: $25^\\circ\\text{C}$, $1\\text{ bar}$), $1\\text{ mol}$ khí bất kỳ chiếm thể tích <strong>$24,79\\text{ L}$</strong>. Số Avogadro $N_A = 6,022 \\times 10^{23}$.
      </div>
      <h4>20 Nguyên tố hóa học đầu tiên (Số hiệu $Z$, Ký hiệu, Tên IUPAC, $M$ (amu))</h4>
      <table class="std-table">
        <thead><tr><th>Z</th><th>Ký hiệu</th><th>Tên tiếng Anh (IUPAC)</th><th>NTK (amu)</th><th>Hóa trị hay gặp</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>H</td><td>Hydrogen</td><td>1</td><td>I</td></tr>
          <tr><td>2</td><td>He</td><td>Helium</td><td>4</td><td>0</td></tr>
          <tr><td>6</td><td>C</td><td>Carbon</td><td>12</td><td>II, IV</td></tr>
          <tr><td>7</td><td>N</td><td>Nitrogen</td><td>14</td><td>II, III, IV, V</td></tr>
          <tr><td>8</td><td>O</td><td>Oxygen</td><td>16</td><td>II</td></tr>
          <tr><td>11</td><td>Na</td><td>Sodium</td><td>23</td><td>I</td></tr>
          <tr><td>12</td><td>Mg</td><td>Magnesium</td><td>24</td><td>II</td></tr>
          <tr><td>13</td><td>Al</td><td>Aluminium</td><td>27</td><td>III</td></tr>
          <tr><td>15</td><td>P</td><td>Phosphorus</td><td>31</td><td>III, V</td></tr>
          <tr><td>16</td><td>S</td><td>Sulfur</td><td>32</td><td>II, IV, VI</td></tr>
          <tr><td>17</td><td>Cl</td><td>Chlorine</td><td>35,5</td><td>I</td></tr>
          <tr><td>19</td><td>K</td><td>Potassium</td><td>39</td><td>I</td></tr>
          <tr><td>20</td><td>Ca</td><td>Calcium</td><td>40</td><td>II</td></tr>
          <tr><td>26</td><td>Fe</td><td>Iron (ngoài 20)</td><td>56</td><td>II, III</td></tr>
          <tr><td>29</td><td>Cu</td><td>Copper (ngoài 20)</td><td>64</td><td>I, II</td></tr>
          <tr><td>30</td><td>Zn</td><td>Zinc (ngoài 20)</td><td>65</td><td>II</td></tr>
        </tbody>
      </table>
    `;
    document.getElementById("btn-ref-table").addEventListener("click", () => {
      modal.classList.remove("hidden");
      renderMath(body);
    });
    document.getElementById("btn-close-modal").addEventListener("click", () => modal.classList.add("hidden"));
    modal.querySelector(".modal-backdrop").addEventListener("click", () => modal.classList.add("hidden"));
  }

  // Init events
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-mode-study").addEventListener("click", () => {
      state.appMode = "study";
      renderApp();
    });
    document.getElementById("btn-mode-exam").addEventListener("click", () => {
      state.appMode = "exam";
      renderApp();
    });
    document.getElementById("btn-toggle-sidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("collapsed");
    });
    document.getElementById("stage-select").addEventListener("change", (e) => {
      state.stageFilter = e.target.value;
      renderSidebar();
    });
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.currentTab = btn.dataset.tab;
        renderApp();
      });
    });

    document.getElementById("btn-export-progress").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state.progress, null, 2)], { type: "application/json" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `tien_do_hoa_thcs_${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
    });

    document.getElementById("input-import-progress").addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          state.progress = JSON.parse(reader.result);
          saveProgress();
          renderApp();
          alert("Đã khôi phục tiến độ học tập thành công!");
        } catch (err) {
          alert("File sao lưu không hợp lệ.");
        }
      };
      reader.readAsText(file);
    });

    initReferenceModal();
    renderApp();
  });
})();
