(function () {
  const REACTIONS = [
    {
      id: "rxn_mg_o2",
      title: "1. Đốt cháy Magnesium trong khí Oxygen",
      equation: "$$\\ce{2Mg + O2 ->[t^\\circ] 2MgO}$$",
      phenomenon: "Dây Magnesium cháy sáng chói với ngọn lửa màu trắng rực, tỏa nhiều nhiệt và tạo thành khói trắng (bột $\\ce{MgO}$).",
      type: "Phản ứng hóa hợp (Tỏa nhiệt)",
      renderAnim: (progress) => `
        <svg viewBox="0 0 360 180" style="width:100%;max-width:360px;background:#0f172a;border-radius:10px;">
          <rect x="120" y="30" width="120" height="130" rx="8" fill="rgba(226,232,240,0.08)" stroke="#94a3b8" stroke-width="2"/>
          <text x="180" y="20" fill="#94a3b8" font-size="11" text-anchor="middle">Bình chứa khí O₂</text>
          <!-- Mg ribbon -->
          <path d="M 180 30 L 180 100" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>
          ${progress > 0.1 ? `
            <circle cx="180" cy="100" r="${12 + Math.sin(progress * 20) * 8}" fill="#ffffff" opacity="${Math.min(1, progress * 1.5)}"/>
            <circle cx="180" cy="100" r="${24 + Math.sin(progress * 15) * 10}" fill="#fef08a" opacity="0.45"/>
          ` : ""}
          ${progress > 0.35 ? `
            <ellipse cx="180" cy="${95 - progress * 45}" rx="28" ry="14" fill="rgba(255,255,255,0.35)"/>
            <rect x="145" y="148" width="70" height="${Math.min(10, progress * 12)}" rx="3" fill="#f8fafc"/>
          ` : ""}
        </svg>`
    },
    {
      id: "rxn_na_h2o",
      title: "2. Sodium tác dụng với Nước (có Phenolphthalein)",
      equation: "$$\\ce{2Na + 2H2O -> 2NaOH + H2 ^}$$",
      phenomenon: "Mẩu Na nóng chảy thành giọt tròn chạy trên mặt nước, sủi bọt khí $\\ce{H2}$ mạnh. Dung dịch chuyển từ không màu sang màu hồng (do tạo kiềm $\\ce{NaOH}$).",
      type: "Phản ứng thế (Tỏa nhiệt mạnh)",
      renderAnim: (progress) => {
        const pinkAlpha = Math.min(0.7, progress * 0.85);
        const naX = 180 + Math.sin(progress * 18) * 55;
        return `
        <svg viewBox="0 0 360 180" style="width:100%;max-width:360px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
          <!-- Beaker -->
          <rect x="75" y="45" width="210" height="115" rx="6" fill="none" stroke="#475569" stroke-width="2.5"/>
          <!-- Water turning pink -->
          <rect x="77" y="85" width="206" height="73" fill="rgba(236, 72, 153, ${0.08 + pinkAlpha})" />
          <!-- Na sphere -->
          <circle cx="${naX}" cy="85" r="${Math.max(3, 9 - progress * 5)}" fill="#94a3b8" stroke="#334155"/>
          ${progress > 0.05 ? `
            <circle cx="${naX - 6}" cy="${75 - progress * 25}" r="3" fill="#e2e8f0" stroke="#64748b"/>
            <circle cx="${naX + 8}" cy="${70 - progress * 35}" r="4" fill="#e2e8f0" stroke="#64748b"/>
            <text x="${naX}" y="58" font-size="10" fill="#475569" text-anchor="middle">H₂ ↑</text>
          ` : ""}
          <text x="180" y="135" font-size="11" font-weight="bold" fill="${progress > 0.3 ? "#be185d" : "#0369a1"}" text-anchor="middle">
            ${progress > 0.3 ? "Dung dịch NaOH hóa hồng!" : "Nước + Phenolphthalein"}
          </text>
        </svg>`;
      }
    },
    {
      id: "rxn_fe_cuso4",
      title: "3. Đinh sắt (Fe) tác dụng với dung dịch Copper(II) sulfate",
      equation: "$$\\ce{Fe + CuSO4 -> FeSO4 + Cu v}$$",
      phenomenon: "Đinh sắt có lớp kim loại đồng (Cu) màu đỏ cam bám ngoài; màu xanh lam của dung dịch $\\ce{CuSO4}$ nhạt dần chuyển sang màu xanh lục nhạt ($\\ce{FeSO4}$).",
      type: "Phản ứng thế kim loại",
      renderAnim: (progress) => {
        const r = Math.round(59 + progress * 75);
        const g = Math.round(130 + progress * 60);
        const b = Math.round(246 - progress * 110);
        return `
        <svg viewBox="0 0 360 180" style="width:100%;max-width:360px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
          <rect x="95" y="35" width="170" height="125" rx="6" fill="none" stroke="#475569" stroke-width="2.5"/>
          <rect x="97" y="65" width="166" height="93" fill="rgba(${r}, ${g}, ${b}, 0.45)"/>
          <!-- Iron nail -->
          <rect x="172" y="30" width="16" height="110" rx="3" fill="#64748b" transform="rotate(14 180 85)"/>
          <!-- Copper coating -->
          ${progress > 0.15 ? `<rect x="172" y="65" width="16" height="75" rx="3" fill="#ea580c" opacity="${Math.min(0.95, progress * 1.1)}" transform="rotate(14 180 85)"/>` : ""}
          <text x="180" y="173" font-size="11" fill="#334155" text-anchor="middle">
            ${progress > 0.5 ? "Cu đỏ bám trên đinh sắt, dung dịch nhạt màu xanh" : "Dung dịch CuSO₄ màu xanh lam"}
          </text>
        </svg>`;
      }
    },
    {
      id: "rxn_zn_hcl",
      title: "4. Kẽm (Zn) tác dụng với dung dịch Hydrochloric acid",
      equation: "$$\\ce{Zn + 2HCl -> ZnCl2 + H2 ^}$$",
      phenomenon: "Viên kẽm tan dần và có rất nhiều bọt khí không màu ($\\ce{H2}$) sủi lên liên tục trên bề mặt kẽm.",
      type: "Kim loại + Acid → Muối + Khí H₂",
      renderAnim: (progress) => {
        const znR = Math.max(4, 15 - progress * 9);
        return `
        <svg viewBox="0 0 360 180" style="width:100%;max-width:360px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
          <rect x="125" y="25" width="110" height="135" rx="18" fill="none" stroke="#475569" stroke-width="2.5"/>
          <rect x="127" y="70" width="106" height="88" rx="14" fill="rgba(186, 230, 253, 0.55)"/>
          <circle cx="180" cy="142" r="${znR}" fill="#94a3b8" stroke="#475569"/>
          ${progress > 0.05 ? `
            <circle cx="172" cy="${130 - ((progress * 90) % 60)}" r="3.5" fill="#fff" stroke="#0284c7"/>
            <circle cx="185" cy="${125 - ((progress * 110) % 55)}" r="4" fill="#fff" stroke="#0284c7"/>
            <circle cx="178" cy="${120 - ((progress * 70) % 50)}" r="3" fill="#fff" stroke="#0284c7"/>
            <text x="180" y="55" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Bọt khí H₂ ↑</text>
          ` : ""}
        </svg>`;
      }
    },
    {
      id: "rxn_acid_base",
      title: "5. Phản ứng Trung hòa (NaOH + HCl)",
      equation: "$$\\ce{NaOH + HCl -> NaCl + H2O}$$",
      phenomenon: "Dung dịch $\\ce{NaOH}$ ban đầu có màu hồng (với phenolphthalein). Khi nhỏ từ từ dung dịch $\\ce{HCl}$ vào, màu hồng nhạt dần rồi mất hẳn (trở về trong suốt, pH = 7).",
      type: "Phản ứng trao đổi / Trung hòa",
      renderAnim: (progress) => {
        const alpha = Math.max(0, 0.7 - progress * 0.75);
        return `
        <svg viewBox="0 0 360 180" style="width:100%;max-width:360px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
          <!-- Dropper -->
          <path d="M 176 15 L 184 15 L 181 45 L 179 45 Z" fill="#94a3b8"/>
          <circle cx="180" cy="${52 + ((progress * 120) % 35)}" r="3.5" fill="#38bdf8"/>
          <text x="235" y="34" font-size="11" fill="#0284c7">Nhỏ từng giọt HCl</text>
          <!-- Flask -->
          <rect x="115" y="75" width="130" height="85" rx="8" fill="none" stroke="#475569" stroke-width="2.5"/>
          <rect x="117" y="100" width="126" height="58" fill="rgba(236, 72, 153, ${alpha})"/>
          <text x="180" y="135" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">
            ${progress > 0.85 ? "Đã trung hòa (mất màu hồng)!" : "Dung dịch kiềm + Phenolphthalein"}
          </text>
        </svg>`;
      }
    }
  ];

  let activeIdx = 0;
  let rxnTimer = null;
  let progress = 0;

  function stopRxnAnim() {
    if (rxnTimer) {
      cancelAnimationFrame(rxnTimer);
      rxnTimer = null;
    }
  }

  function playCurrentReaction() {
    stopRxnAnim();
    progress = 0;
    const rxn = REACTIONS[activeIdx];
    const stage = document.getElementById("rxn-anim-stage");
    if (!stage) return;

    function step() {
      if (!document.getElementById("rxn-anim-stage")) {
        stopRxnAnim();
        return;
      }
      progress += 0.008;
      if (progress > 1) progress = 1;
      stage.innerHTML = rxn.renderAnim(progress);
      if (progress < 1) {
        rxnTimer = requestAnimationFrame(step);
      }
    }
    step();
  }

  window.renderReactionsLabView = function () {
    const hdr = document.getElementById("week-header");
    const tabs = document.getElementById("week-tabs");
    const body = document.getElementById("tab-body");
    if (hdr) hdr.style.display = "none";
    if (tabs) tabs.style.display = "none";

    const rxn = REACTIONS[activeIdx];
    body.innerHTML = `
      <div class="card">
        <h2 style="margin:0;color:#15803d;">🎬 Thí Nghiệm &amp; Phản Ứng Hóa Học Động (Offline)</h2>
        <p style="margin:4px 0 0;font-size:0.86rem;color:#475569;">Quan sát trực quan hiện tượng thí nghiệm, màu sắc kết tủa, sủi bọt khí và phương trình hóa học chuẩn.</p>
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px;">
          ${REACTIONS.map((r, i) => `
            <button class="btn ${i === activeIdx ? "btn-success" : "btn-outline"} rxn-sel-btn" data-idx="${i}">${r.title}</button>
          `).join("")}
        </div>
      </div>

      <div class="card" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:18px;align-items:center;">
        <div style="text-align:center;">
          <div id="rxn-anim-stage"></div>
          <button class="btn btn-success" id="btn-replay-rxn" style="margin-top:10px;">🔄 Chạy lại thí nghiệm</button>
        </div>
        <div>
          <span class="pill" style="background:#dcfce7;color:#166534;">${rxn.type}</span>
          <h3 style="margin:8px 0;">${rxn.title}</h3>
          <div class="callout">${rxn.equation}</div>
          <p><strong>Hiện tượng quan sát được:</strong> ${rxn.phenomenon}</p>
        </div>
      </div>
    `;

    body.querySelectorAll(".rxn-sel-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeIdx = Number(btn.dataset.idx);
        window.renderReactionsLabView();
      });
    });
    document.getElementById("btn-replay-rxn").addEventListener("click", playCurrentReaction);

    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(body, {
          delimiters: [{ left: "$$", right: "$$", display: true }, { left: "$", right: "$", display: false }],
          throwOnError: false
        });
      } catch (e) {}
    }
    playCurrentReaction();
  };
})();
