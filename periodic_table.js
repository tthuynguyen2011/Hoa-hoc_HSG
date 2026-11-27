(function () {
  // 118 nguyên tố: [Z, Sym, NameIUPAC, Mass, Period, Group(1..18, 0=La/Ac), Cat, Shells]
  const ELEMENTS = [
    [1,"H","Hydrogen",1.008,1,1,"nonmetal",[1]],
    [2,"He","Helium",4.003,1,18,"noble",[2]],
    [3,"Li","Lithium",6.94,2,1,"alkali",[2,1]],
    [4,"Be","Beryllium",9.012,2,2,"alkaline",[2,2]],
    [5,"B","Boron",10.81,2,13,"metalloid",[2,3]],
    [6,"C","Carbon",12.011,2,14,"nonmetal",[2,4]],
    [7,"N","Nitrogen",14.007,2,15,"nonmetal",[2,5]],
    [8,"O","Oxygen",15.999,2,16,"nonmetal",[2,6]],
    [9,"F","Fluorine",18.998,2,17,"halogen",[2,7]],
    [10,"Ne","Neon",20.18,2,18,"noble",[2,8]],
    [11,"Na","Sodium",22.99,3,1,"alkali",[2,8,1]],
    [12,"Mg","Magnesium",24.305,3,2,"alkaline",[2,8,2]],
    [13,"Al","Aluminium",26.982,3,13,"post",[2,8,3]],
    [14,"Si","Silicon",28.085,3,14,"metalloid",[2,8,4]],
    [15,"P","Phosphorus",30.974,3,15,"nonmetal",[2,8,5]],
    [16,"S","Sulfur",32.06,3,16,"nonmetal",[2,8,6]],
    [17,"Cl","Chlorine",35.45,3,17,"halogen",[2,8,7]],
    [18,"Ar","Argon",39.948,3,18,"noble",[2,8,8]],
    [19,"K","Potassium",39.098,4,1,"alkali",[2,8,8,1]],
    [20,"Ca","Calcium",40.078,4,2,"alkaline",[2,8,8,2]],
    [21,"Sc","Scandium",44.956,4,3,"transition",[2,8,9,2]],
    [22,"Ti","Titanium",47.867,4,4,"transition",[2,8,10,2]],
    [23,"V","Vanadium",50.942,4,5,"transition",[2,8,11,2]],
    [24,"Cr","Chromium",51.996,4,6,"transition",[2,8,13,1]],
    [25,"Mn","Manganese",54.938,4,7,"transition",[2,8,13,2]],
    [26,"Fe","Iron",55.845,4,8,"transition",[2,8,14,2]],
    [27,"Co","Cobalt",58.933,4,9,"transition",[2,8,15,2]],
    [28,"Ni","Nickel",58.693,4,10,"transition",[2,8,16,2]],
    [29,"Cu","Copper",63.546,4,11,"transition",[2,8,18,1]],
    [30,"Zn","Zinc",65.38,4,12,"transition",[2,8,18,2]],
    [31,"Ga","Gallium",69.723,4,13,"post",[2,8,18,3]],
    [32,"Ge","Germanium",72.63,4,14,"metalloid",[2,8,18,4]],
    [33,"As","Arsenic",74.922,4,15,"metalloid",[2,8,18,5]],
    [34,"Se","Selenium",78.971,4,16,"nonmetal",[2,8,18,6]],
    [35,"Br","Bromine",79.904,4,17,"halogen",[2,8,18,7]],
    [36,"Kr","Krypton",83.798,4,18,"noble",[2,8,18,8]],
    [37,"Rb","Rubidium",85.468,5,1,"alkali",[2,8,18,8,1]],
    [38,"Sr","Strontium",87.62,5,2,"alkaline",[2,8,18,8,2]],
    [39,"Y","Yttrium",88.906,5,3,"transition",[2,8,18,9,2]],
    [40,"Zr","Zirconium",91.224,5,4,"transition",[2,8,18,10,2]],
    [41,"Nb","Niobium",92.906,5,5,"transition",[2,8,18,12,1]],
    [42,"Mo","Molybdenum",95.95,5,6,"transition",[2,8,18,13,1]],
    [43,"Tc","Technetium",98,5,7,"transition",[2,8,18,13,2]],
    [44,"Ru","Ruthenium",101.07,5,8,"transition",[2,8,18,15,1]],
    [45,"Rh","Rhodium",102.91,5,9,"transition",[2,8,18,16,1]],
    [46,"Pd","Palladium",106.42,5,10,"transition",[2,8,18,18]],
    [47,"Ag","Silver",107.87,5,11,"transition",[2,8,18,18,1]],
    [48,"Cd","Cadmium",112.41,5,12,"transition",[2,8,18,18,2]],
    [49,"In","Indium",114.82,5,13,"post",[2,8,18,18,3]],
    [50,"Sn","Tin",118.71,5,14,"post",[2,8,18,18,4]],
    [51,"Sb","Antimony",121.76,5,15,"metalloid",[2,8,18,18,5]],
    [52,"Te","Tellurium",127.6,5,16,"metalloid",[2,8,18,18,6]],
    [53,"I","Iodine",126.9,5,17,"halogen",[2,8,18,18,7]],
    [54,"Xe","Xenon",131.29,5,18,"noble",[2,8,18,18,8]],
    [55,"Cs","Caesium",132.91,6,1,"alkali",[2,8,18,18,8,1]],
    [56,"Ba","Barium",137.33,6,2,"alkaline",[2,8,18,18,8,2]],
    [57,"La","Lanthanum",138.91,6,0,"lanthanide",[2,8,18,18,9,2]],
    [58,"Ce","Cerium",140.12,6,0,"lanthanide",[2,8,18,19,9,2]],
    [59,"Pr","Praseodymium",140.91,6,0,"lanthanide",[2,8,18,21,8,2]],
    [60,"Nd","Neodymium",144.24,6,0,"lanthanide",[2,8,18,22,8,2]],
    [61,"Pm","Promethium",145,6,0,"lanthanide",[2,8,18,23,8,2]],
    [62,"Sm","Samarium",150.36,6,0,"lanthanide",[2,8,18,24,8,2]],
    [63,"Eu","Europium",151.96,6,0,"lanthanide",[2,8,18,25,8,2]],
    [64,"Gd","Gadolinium",157.25,6,0,"lanthanide",[2,8,18,25,9,2]],
    [65,"Tb","Terbium",158.93,6,0,"lanthanide",[2,8,18,27,8,2]],
    [66,"Dy","Dysprosium",162.5,6,0,"lanthanide",[2,8,18,28,8,2]],
    [67,"Ho","Holmium",164.93,6,0,"lanthanide",[2,8,18,29,8,2]],
    [68,"Er","Erbium",167.26,6,0,"lanthanide",[2,8,18,30,8,2]],
    [69,"Tm","Thulium",168.93,6,0,"lanthanide",[2,8,18,31,8,2]],
    [70,"Yb","Ytterbium",173.05,6,0,"lanthanide",[2,8,18,32,8,2]],
    [71,"Lu","Lutetium",174.97,6,0,"lanthanide",[2,8,18,32,9,2]],
    [72,"Hf","Hafnium",178.49,6,4,"transition",[2,8,18,32,10,2]],
    [73,"Ta","Tantalum",180.95,6,5,"transition",[2,8,18,32,11,2]],
    [74,"W","Tungsten",183.84,6,6,"transition",[2,8,18,32,12,2]],
    [75,"Re","Rhenium",186.21,6,7,"transition",[2,8,18,32,13,2]],
    [76,"Os","Osmium",190.23,6,8,"transition",[2,8,18,32,14,2]],
    [77,"Ir","Iridium",192.22,6,9,"transition",[2,8,18,32,15,2]],
    [78,"Pt","Platinum",195.08,6,10,"transition",[2,8,18,32,17,1]],
    [79,"Au","Gold",196.97,6,11,"transition",[2,8,18,32,18,1]],
    [80,"Hg","Mercury",200.59,6,12,"transition",[2,8,18,32,18,2]],
    [81,"Tl","Thallium",204.38,6,13,"post",[2,8,18,32,18,3]],
    [82,"Pb","Lead",207.2,6,14,"post",[2,8,18,32,18,4]],
    [83,"Bi","Bismuth",208.98,6,15,"post",[2,8,18,32,18,5]],
    [84,"Po","Polonium",209,6,16,"metalloid",[2,8,18,32,18,6]],
    [85,"At","Astatine",210,6,17,"halogen",[2,8,18,32,18,7]],
    [86,"Rn","Radon",222,6,18,"noble",[2,8,18,32,18,8]],
    [87,"Fr","Francium",223,7,1,"alkali",[2,8,18,32,18,8,1]],
    [88,"Ra","Radium",226,7,2,"alkaline",[2,8,18,32,18,8,2]],
    [89,"Ac","Actinium",227,7,0,"actinide",[2,8,18,32,18,9,2]],
    [90,"Th","Thorium",232.04,7,0,"actinide",[2,8,18,32,18,10,2]],
    [91,"Pa","Protactinium",231.04,7,0,"actinide",[2,8,18,32,20,9,2]],
    [92,"U","Uranium",238.03,7,0,"actinide",[2,8,18,32,21,9,2]],
    [93,"Np","Neptunium",237,7,0,"actinide",[2,8,18,32,22,9,2]],
    [94,"Pu","Plutonium",244,7,0,"actinide",[2,8,18,32,24,8,2]],
    [95,"Am","Americium",243,7,0,"actinide",[2,8,18,32,25,8,2]],
    [96,"Cm","Curium",247,7,0,"actinide",[2,8,18,32,25,9,2]],
    [97,"Bk","Berkelium",247,7,0,"actinide",[2,8,18,32,27,8,2]],
    [98,"Cf","Californium",251,7,0,"actinide",[2,8,18,32,28,8,2]],
    [99,"Es","Einsteinium",252,7,0,"actinide",[2,8,18,32,29,8,2]],
    [100,"Fm","Fermium",257,7,0,"actinide",[2,8,18,32,30,8,2]],
    [101,"Md","Mendelevium",258,7,0,"actinide",[2,8,18,32,31,8,2]],
    [102,"No","Nobelium",259,7,0,"actinide",[2,8,18,32,32,8,2]],
    [103,"Lr","Lawrencium",266,7,0,"actinide",[2,8,18,32,32,8,3]],
    [104,"Rf","Rutherfordium",267,7,4,"transition",[2,8,18,32,32,10,2]],
    [105,"Db","Dubnium",268,7,5,"transition",[2,8,18,32,32,11,2]],
    [106,"Sg","Seaborgium",269,7,6,"transition",[2,8,18,32,32,12,2]],
    [107,"Bh","Bohrium",270,7,7,"transition",[2,8,18,32,32,13,2]],
    [108,"Hs","Hassium",277,7,8,"transition",[2,8,18,32,32,14,2]],
    [109,"Mt","Meitnerium",278,7,9,"transition",[2,8,18,32,32,15,2]],
    [110,"Ds","Darmstadtium",281,7,10,"transition",[2,8,18,32,32,17,1]],
    [111,"Rg","Roentgenium",282,7,11,"transition",[2,8,18,32,32,18,1]],
    [112,"Cn","Copernicium",285,7,12,"transition",[2,8,18,32,32,18,2]],
    [113,"Nh","Nihonium",286,7,13,"post",[2,8,18,32,32,18,3]],
    [114,"Fl","Flerovium",289,7,14,"post",[2,8,18,32,32,18,4]],
    [115,"Mc","Moscovium",290,7,15,"post",[2,8,18,32,32,18,5]],
    [116,"Lv","Livermorium",293,7,16,"post",[2,8,18,32,32,18,6]],
    [117,"Ts","Tennessine",294,7,17,"halogen",[2,8,18,32,32,18,7]],
    [118,"Og","Oganesson",294,7,18,"noble",[2,8,18,32,32,18,8]]
  ];

  const CAT_LABELS = {
    alkali: "Kim loại kiềm (IA)",
    alkaline: "Kim loại kiềm thổ (IIA)",
    transition: "Kim loại chuyển tiếp",
    post: "Kim loại sau chuyển tiếp",
    metalloid: "Á kim",
    nonmetal: "Phi kim",
    halogen: "Halogen (VIIA)",
    noble: "Khí hiếm (VIIIA)",
    lanthanide: "Họ Lanthanide",
    actinide: "Họ Actinide"
  };

  let selectedZ = 11; // Default Sodium (Na)
  let animFrameId = null;
  let rotAngle = 0.45;
  let autoRotate = true;

  function stopAtomAnim() {
    if (animFrameId) {
      cancelAnimationFrame(animFrameId);
      animFrameId = null;
    }
  }

  function startAtom3D(elData) {
    stopAtomAnim();
    const canvas = document.getElementById("atom-3d-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const shells = elData[7];
    const maxR = Math.min(W, H) * 0.42;
    const minR = 34;

    let t = 0;
    function draw() {
      if (!document.getElementById("atom-3d-canvas")) {
        stopAtomAnim();
        return;
      }
      ctx.clearRect(0, 0, W, H);
      // Dark space background with subtle radial glow
      const bg = ctx.createRadialGradient(cx, cy, 10, cx, cy, W * 0.55);
      bg.addColorStop(0, "#1e293b");
      bg.addColorStop(1, "#0f172a");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      if (autoRotate) rotAngle += 0.004;
      t += 0.025;

      const drawList = [];

      // Nucleus
      drawList.push({
        z: 0,
        fn: () => {
          const ng = ctx.createRadialGradient(cx - 4, cy - 4, 2, cx, cy, 18);
          ng.addColorStop(0, "#fbbf24");
          ng.addColorStop(0.5, "#ef4444");
          ng.addColorStop(1, "#991b1b");
          ctx.beginPath();
          ctx.arc(cx, cy, 16, 0, Math.PI * 2);
          ctx.fillStyle = ng;
          ctx.fill();
          ctx.fillStyle = "#fff";
          ctx.font = "bold 10px Segoe UI, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(`+${elData[0]}`, cx, cy);
        }
      });

      // Shells (tilted 3D orbits)
      shells.forEach((eCount, sIdx) => {
        const r = shells.length === 1 ? maxR * 0.65 : minR + ((maxR - minR) * (sIdx + 1)) / shells.length;
        const tiltX = 0.55 + (sIdx % 3) * 0.22;
        const tiltZ = (sIdx * 0.65) + rotAngle * (sIdx % 2 === 0 ? 1 : -0.7);

        // Draw orbit ring
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(tiltZ);
        ctx.scale(1, Math.cos(tiltX));
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(148, 163, 184, 0.35)";
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();

        // Electrons on this shell
        const speed = 1.2 / (sIdx + 1);
        for (let k = 0; k < eCount; k++) {
          const ang = (Math.PI * 2 * k) / eCount + t * speed * (sIdx % 2 === 0 ? 1 : -1);
          const lx = r * Math.cos(ang);
          const ly = r * Math.sin(ang) * Math.cos(tiltX);
          const lz = r * Math.sin(ang) * Math.sin(tiltX);

          const rx = lx * Math.cos(tiltZ) - ly * Math.sin(tiltZ);
          const ry = lx * Math.sin(tiltZ) + ly * Math.cos(tiltZ);
          const depthScale = 1 + lz / (maxR * 3);

          drawList.push({
            z: lz,
            fn: () => {
              const er = Math.max(2.5, 4.4 * depthScale);
              ctx.beginPath();
              ctx.arc(cx + rx, cy + ry, er, 0, Math.PI * 2);
              ctx.fillStyle = sIdx === shells.length - 1 ? "#38bdf8" : "#60a5fa";
              ctx.shadowColor = "#38bdf8";
              ctx.shadowBlur = 8;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          });
        }
      });

      drawList.sort((a, b) => a.z - b.z);
      drawList.forEach((d) => d.fn());
      animFrameId = requestAnimationFrame(draw);
    }
    draw();
  }

  function renderSelectedDetail(el) {
    const detailEl = document.getElementById("pt-detail-panel");
    if (!detailEl) return;
    const shells = el[7];
    const nEst = Math.round(el[3]) - el[0];
    detailEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <div>
          <span class="pill">${CAT_LABELS[el[6]] || el[6]}</span>
          <h3 style="margin:4px 0 0;font-size:1.3rem;">${el[0]}. ${el[2]} (${el[1]})</h3>
        </div>
        <div style="text-align:right;font-size:0.86rem;color:#475569;">
          <div>NTK: <strong>${el[3]} amu</strong></div>
          <div>Chu kỳ ${el[4]} ${el[5] > 0 ? `• Cột ${el[5]}` : "• Họ La/Ac"}</div>
        </div>
      </div>

      <div style="text-align:center;position:relative;">
        <canvas id="atom-3d-canvas" width="280" height="240" style="border-radius:12px;width:100%;max-width:280px;height:auto;cursor:grab;"></canvas>
        <div style="margin-top:6px;display:flex;justify-content:center;gap:8px;">
          <button class="btn btn-outline" id="btn-pt-toggle-rot" style="font-size:0.78rem;padding:4px 10px;">${autoRotate ? "⏸️ Tạm dừng xoay 3D" : "▶️ Tiếp tục xoay 3D"}</button>
        </div>
      </div>

      <table class="std-table" style="margin-top:10px;font-size:0.84rem;">
        <tbody>
          <tr><td><strong>Số proton ($p$) = electron ($e$)</strong></td><td>${el[0]}</td></tr>
          <tr><td><strong>Số neutron ($n$) ước tính</strong></td><td>${Math.max(0, nEst)}</td></tr>
          <tr><td><strong>Phân bố lớp electron</strong></td><td><strong>${shells.join(" / ")}</strong> (${shells.length} lớp)</td></tr>
          <tr><td><strong>Số electron lớp ngoài cùng</strong></td><td><strong>${shells[shells.length - 1]}e</strong></td></tr>
        </tbody>
      </table>
    `;

    document.getElementById("btn-pt-toggle-rot").addEventListener("click", () => {
      autoRotate = !autoRotate;
      document.getElementById("btn-pt-toggle-rot").textContent = autoRotate ? "⏸️ Tạm dừng xoay 3D" : "▶️ Tiếp tục xoay 3D";
    });

    startAtom3D(el);
  }

  window.renderPeriodicTableView = function () {
    const hdr = document.getElementById("week-header");
    const tabs = document.getElementById("week-tabs");
    const body = document.getElementById("tab-body");
    if (hdr) hdr.style.display = "none";
    if (tabs) tabs.style.display = "none";

    // Build 18-col main grid
    const gridCells = [];
    for (let p = 1; p <= 7; p++) {
      for (let g = 1; g <= 18; g++) {
        const found = ELEMENTS.find((e) => e[4] === p && e[5] === g);
        if (found) {
          gridCells.push(`
            <div class="pt-cell pt-${found[6]} ${found[0] === selectedZ ? "selected" : ""}" data-z="${found[0]}" title="${found[0]}. ${found[2]} (${found[3]} amu)">
              <span class="pt-z">${found[0]}</span>
              <span class="pt-sym">${found[1]}</span>
              <span class="pt-name">${found[2]}</span>
            </div>`);
        } else if (p === 6 && g === 3) {
          gridCells.push(`<div class="pt-placeholder pt-lanthanide">57–71<br/>La–Lu</div>`);
        } else if (p === 7 && g === 3) {
          gridCells.push(`<div class="pt-placeholder pt-actinide">89–103<br/>Ac–Lr</div>`);
        } else {
          gridCells.push(`<div class="pt-empty"></div>`);
        }
      }
    }

    const lan = ELEMENTS.filter((e) => e[6] === "lanthanide");
    const act = ELEMENTS.filter((e) => e[6] === "actinide");

    body.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
          <div>
            <h2 style="margin:0;color:#1d4ed8;">⚛️ Bảng Tuần Hoàn 118 Nguyên Tố &amp; Mô Hình Nguyên Tử 3D</h2>
            <p style="margin:4px 0 0;font-size:0.86rem;color:#475569;">Bấm vào bất kỳ nguyên tố nào để xem cấu trúc lớp electron và mô hình nguyên tử 3D chuyển động.</p>
          </div>
          <input type="text" id="pt-search" placeholder="🔍 Tìm tên / ký hiệu (vd: Fe, Oxygen, 29)..." style="padding:7px 12px;border:1px solid #cbd5e1;border-radius:8px;min-width:230px;" />
        </div>
        <div class="pt-legend">
          ${Object.entries(CAT_LABELS).map(([k, v]) => `<span class="pt-leg-item"><i class="pt-dot pt-${k}"></i>${v}</span>`).join("")}
        </div>
      </div>

      <div class="pt-layout">
        <div class="card pt-table-wrap">
          <div class="pt-grid" id="pt-main-grid">${gridCells.join("")}</div>
          <div class="pt-sub-label">Họ Lanthanide (57–71) &amp; Actinide (89–103)</div>
          <div class="pt-sub-grid">
            ${lan.map((e) => `<div class="pt-cell pt-${e[6]} ${e[0] === selectedZ ? "selected" : ""}" data-z="${e[0]}"><span class="pt-z">${e[0]}</span><span class="pt-sym">${e[1]}</span><span class="pt-name">${e[2]}</span></div>`).join("")}
            ${act.map((e) => `<div class="pt-cell pt-${e[6]} ${e[0] === selectedZ ? "selected" : ""}" data-z="${e[0]}"><span class="pt-z">${e[0]}</span><span class="pt-sym">${e[1]}</span><span class="pt-name">${e[2]}</span></div>`).join("")}
          </div>
        </div>

        <div class="card pt-detail-card" id="pt-detail-panel"></div>
      </div>
    `;

    const bindClicks = () => {
      body.querySelectorAll(".pt-cell").forEach((cell) => {
        cell.addEventListener("click", () => {
          selectedZ = Number(cell.dataset.z);
          body.querySelectorAll(".pt-cell").forEach((c) => c.classList.toggle("selected", Number(c.dataset.z) === selectedZ));
          const el = ELEMENTS.find((e) => e[0] === selectedZ);
          if (el) renderSelectedDetail(el);
        });
      });
    };
    bindClicks();

    document.getElementById("pt-search").addEventListener("input", (ev) => {
      const q = ev.target.value.trim().toLowerCase();
      body.querySelectorAll(".pt-cell").forEach((c) => {
        if (!q) {
          c.style.opacity = "1";
          return;
        }
        const z = Number(c.dataset.z);
        const el = ELEMENTS.find((e) => e[0] === z);
        const match = el && (String(el[0]) === q || el[1].toLowerCase().includes(q) || el[2].toLowerCase().includes(q));
        c.style.opacity = match ? "1" : "0.22";
      });
    });

    const initEl = ELEMENTS.find((e) => e[0] === selectedZ) || ELEMENTS[0];
    renderSelectedDetail(initEl);
  };
})();
