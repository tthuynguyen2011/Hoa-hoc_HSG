window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[11] = {
  week: 11,
  title: "Phân tử, Đơn chất & Hợp chất – Phân tử khối",
  objectives: [
    "Phân biệt rõ Đơn chất (tạo nên từ 1 nguyên tố hóa học) và Hợp chất (tạo nên từ 2 nguyên tố hóa học trở lên).",
    "Hiểu khái niệm Phân tử: Hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hóa học của chất.",
    "Tính thành thạo Phân tử khối (PTK, đơn vị `amu`) của mọi đơn chất và hợp chất, giải được bài toán tìm nguyên tố từ PTK mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 11 (A4). Chuẩn bị bộ mô hình lắp ghép phân tử (hoặc đất nặn 2 màu) để minh họa $\\ce{O2}$, $\\ce{H2O}$, $\\ce{CO2}$.",
    sessions: [
      {
        name: "Buổi 1: Đơn chất vs Hợp chất",
        guide: "Nhấn mạnh dấu hiệu nhận biết cực nhanh: Đếm số nguyên tố trong công thức! $\\ce{O2}$, $\\ce{O3}$, $\\ce{Fe}$, $\\ce{Cl2}$ chỉ có 1 nguyên tố → Đơn chất. $\\ce{H2O}$, $\\ce{NaCl}$, $\\ce{H2SO4}$ có từ 2 nguyên tố trở lên → Hợp chất.",
        pitfalls: "Học sinh hay nhầm khí Ozone ($\\ce{O3}$) là hợp chất vì có 3 nguyên tử (thực chất $\\ce{O3}$ chỉ có 1 nguyên tố O nên là ĐƠN CHẤT!)."
      },
      {
        name: "Buổi 2: Phân tử & Cách tính Phân tử khối (amu)",
        guide: "Luyện kỹ năng nhân và cộng phân tử khối, đặc biệt các công thức có dấu ngoặc như $\\ce{Ca(OH)2}$, $\\ce{Al2(SO4)3}$, $\\ce{(NH4)2CO3}$.",
        pitfalls: "Quên nhân chỉ số ngoài ngoặc cho tất cả các nguyên tố bên trong ngoặc (ví dụ $\\ce{Ca(OH)2}$ có 2 O và 2 H)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán tìm nguyên tố từ PTK (HSG)",
        guide: "Chú ý 5 câu HSG cuối tuần: bài toán 'Phân tử hợp chất $X_2O$ nặng gấp ... lần phân tử $\\ce{H2}$', lập phương trình tìm $M_X$ và suy ra tên nguyên tố.",
        pitfalls: "Hay quên nhân đôi khi phân tử khí ở dạng $X_2$ (như $\\ce{H2} = 2\\text{ amu}$, $\\ce{O2} = 32\\text{ amu}$)."
      }
    ]
  },
  lecture: [
    {
      title: "Đơn chất, Hợp chất & Mô hình Phân tử",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- O2 -->
            <circle cx="55" cy="50" r="18" fill="#ef4444"/><text x="55" y="54" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">O</text>
            <circle cx="88" cy="50" r="18" fill="#ef4444"/><text x="88" y="54" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">O</text>
            <text x="71" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">Đơn chất O₂ (1 nguyên tố)</text>

            <!-- H2O -->
            <circle cx="245" cy="45" r="18" fill="#ef4444"/><text x="245" y="49" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">O</text>
            <circle cx="222" cy="64" r="12" fill="#3b82f6"/><text x="222" y="68" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
            <circle cx="268" cy="64" r="12" fill="#3b82f6"/><text x="268" y="68" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">H</text>
            <text x="245" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">Hợp chất H₂O (2 nguyên tố)</text>

            <!-- CO2 -->
            <circle cx="430" cy="50" r="17" fill="#334155"/><text x="430" y="54" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">C</text>
            <circle cx="398" cy="50" r="16" fill="#ef4444"/><text x="398" y="54" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">O</text>
            <circle cx="462" cy="50" r="16" fill="#ef4444"/><text x="462" y="54" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">O</text>
            <text x="430" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">Hợp chất CO₂ (2 nguyên tố)</text>
          </svg>
        </div>
        <ul>
          <li><strong>Đơn chất:</strong> Tạo nên từ <strong>1 nguyên tố hóa học</strong> (ví dụ: kim loại $\\text{Fe, Cu, Al}$; phi kim $\\ce{H2, O2, O3, C, S}$).</li>
          <li><strong>Hợp chất:</strong> Tạo nên từ <strong>2 nguyên tố hóa học trở lên</strong> (ví dụ: $\\ce{H2O, NaCl, CaCO3, H2SO4}$).</li>
          <li><strong>Phân tử:</strong> Là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hóa học của chất đó.</li>
        </ul>
      `,
      checkpoint: {
        question: "Chất nào sau đây là ĐƠN CHẤT?",
        options: ["Nước ($\\ce{H2O}$)", "Khí Ozone ($\\ce{O3}$)", "Muối ăn ($\\ce{NaCl}$)", "Đá vôi ($\\ce{CaCO3}$)"],
        answer: 1,
        explanation: "Ozone ($\\ce{O3}$) chỉ tạo nên từ duy nhất 1 nguyên tố Oxygen nên là đơn chất."
      }
    },
    {
      title: "Cách tính Phân tử khối (amu)",
      content: `
        <p><strong>Phân tử khối (PTK)</strong> bằng <strong>tổng khối lượng nguyên tử</strong> của các nguyên tử có trong phân tử (đơn vị: <code>amu</code>).</p>
        <div class="callout">
          <strong>Ví dụ mẫu:</strong><br/>
          • $M_{\\ce{H2SO4}} = 2 \\times 1 + 32 + 4 \\times 16 = 98\\text{ amu}$.<br/>
          • $M_{\\ce{Ca(OH)2}} = 40 + 2 \\times (16 + 1) = 40 + 34 = 74\\text{ amu}$.<br/>
          • $M_{\\ce{Al2(SO4)3}} = 2 \\times 27 + 3 \\times (32 + 4 \\times 16) = 54 + 3 \\times 96 = 342\\text{ amu}$.
        </div>
      `,
      example: "Hợp chất $\\ce{X2O}$ có phân tử khối nặng gấp $31$ lần phân tử khí Hydrogen ($\\ce{H2}$). Tìm nguyên tố X.<br/><em>Giải:</em> $M_{\\ce{H2}} = 2\\text{ amu} \\Rightarrow M_{\\ce{X2O}} = 31 \\times 2 = 62\\text{ amu}$. Ta có $2M_X + 16 = 62 \\Rightarrow 2M_X = 46 \\Rightarrow M_X = 23\\text{ amu}$ (Sodium, $\\text{Na}$). Hợp chất là $\\ce{Na2O}$."
    }
  ],
  questions: [
    { id: "w11_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Đơn chất là những chất được tạo nên từ bao nhiêu nguyên tố hóa học?",
      options: ["A. 1 nguyên tố", "B. 2 nguyên tố", "C. 3 nguyên tố", "D. Từ 2 nguyên tố trở lên"],
      answer: 0, solution: "Đơn chất chỉ gồm 1 nguyên tố hóa học." },
    { id: "w11_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Dãy chất nào sau đây chỉ gồm toàn các HỢP CHẤT?",
      options: ["A. $\\ce{O2, H2, Cl2}$", "B. $\\ce{H2O, NaCl, CO2}$", "C. $\\ce{Fe, Cu, CaO}$", "D. $\\ce{O3, N2, NH3}$"],
      answer: 1, solution: "$\\ce{H2O, NaCl, CO2}$ đều gồm 2 nguyên tố hóa học trở lên." },
    { id: "w11_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Phân tử khối của khí Carbon dioxide ($\\ce{CO2}$, biết $\\text{C}=12, \\text{O}=16$) là:",
      options: ["A. 28 amu", "B. 32 amu", "C. 44 amu", "D. 64 amu"],
      answer: 2, solution: "$12 + 2 \\times 16 = 44\\text{ amu}$." },
    { id: "w11_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Phân tử khối của Sulfuric acid ($\\ce{H2SO4}$, biết $\\text{H}=1, \\text{S}=32, \\text{O}=16$) là:",
      options: ["A. 49 amu", "B. 82 amu", "C. 98 amu", "D. 100 amu"],
      answer: 2, solution: "$2(1) + 32 + 4(16) = 98\\text{ amu}$." },
    { id: "w11_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong các chất sau, chất nào có phân tử gồm 1 nguyên tử kim loại và 1 nguyên tử phi kim?",
      options: ["A. $\\ce{HCl}$", "B. $\\ce{NaCl}$", "C. $\\ce{CaCl2}$", "D. $\\ce{O2}$"],
      answer: 1, solution: "$\\ce{NaCl}$ gồm 1 Na (kim loại) và 1 Cl (phi kim)." },
    { id: "w11_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí Methane ($\\ce{CH4}$) là thành phần chính của khí biogas. Phân tử khối của $\\ce{CH4}$ là:",
      options: ["A. 13 amu", "B. 16 amu", "C. 17 amu", "D. 28 amu"],
      answer: 1, solution: "$12 + 4(1) = 16\\text{ amu}$." },
    { id: "w11_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Hạt đại diện cho chất tinh khiết, thể hiện đầy đủ tính chất hóa học của chất được gọi là:",
      options: ["A. Electron", "B. Neutron", "C. Phân tử", "D. Hạt nhân"],
      answer: 2, solution: "Phân tử là hạt đại diện cho chất." },
    { id: "w11_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Đơn chất, Hợp chất và Phân tử khối:",
      statements: [
        { text: "Kim cương và than chì đều là đơn chất của nguyên tố Carbon.", answer: true },
        { text: "Nước cất ($\\ce{H2O}$) là một hợp chất.", answer: true },
        { text: "Phân tử khối của khí Oxygen ($\\ce{O2}$) là $16\\text{ amu}$.", answer: false },
        { text: "Hợp chất luôn có từ 2 nguyên tố hóa học trở lên.", answer: true }
      ],
      solution: "c) Sai vì phân tử $\\ce{O2}$ có 2 nguyên tử O nên PTK $= 2 \\times 16 = 32\\text{ amu}$." },
    { id: "w11_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phân tử khối (amu) của Calcium carbonate ($\\ce{CaCO3}$, biết $\\text{Ca}=40, \\text{C}=12, \\text{O}=16$).",
      answer: "100", tolerance: 0.1,
      solution: "$40 + 12 + 3(16) = 100\\text{ amu}$." },
    { id: "w11_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phân tử khối (amu) của Calcium hydroxide ($\\ce{Ca(OH)2}$, biết $\\text{Ca}=40, \\text{O}=16, \\text{H}=1$).",
      answer: "74", tolerance: 0.1,
      solution: "$40 + 2(16 + 1) = 74\\text{ amu}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w11_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Phân tử khối của muối Aluminium sulfate $\\ce{Al2(SO4)3}$ (biết $\\text{Al}=27, \\text{S}=32, \\text{O}=16$) là:",
      options: ["A. 150 amu", "B. 246 amu", "C. 342 amu", "D. 396 amu"],
      answer: 2, solution: "$2(27) + 3(32 + 64) = 54 + 288 = 342\\text{ amu}$." },
    { id: "w11_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Phân tử hợp chất $\\ce{XO2}$ có phân tử khối bằng $64\\text{ amu}$. Nguyên tố X là:",
      options: ["A. Carbon ($\text{C}=12$)", "B. Nitrogen ($\text{N}=14$)", "C. Sulfur ($\text{S}=32$)", "D. Silicon ($\text{Si}=28$)"],
      answer: 2, solution: "$M_X + 2(16) = 64 \\Rightarrow M_X = 32\\text{ amu}$ (Sulfur)." },
    { id: "w11_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho 4 chất: $\\ce{O3}$ (ozone), $\\ce{NH3}$ (ammonia), $\\ce{P4}$ (phosphorus trắng), $\\ce{C6H12O6}$ (glucose):",
      statements: [
        { text: "$\\ce{O3}$ và $\\ce{P4}$ đều là đơn chất.", answer: true },
        { text: "$\\ce{NH3}$ có phân tử khối bằng $17\\text{ amu}$ ($\\text{N}=14, \\text{H}=1$).", answer: true },
        { text: "Một phân tử glucose ($\\ce{C6H12O6}$) gồm 24 nguyên tử của 3 nguyên tố.", answer: true },
        { text: "Phân tử khối của glucose là $160\\text{ amu}$.", answer: false }
      ],
      solution: "d) Sai: $M_{\\ce{C6H12O6}} = 6(12) + 12(1) + 6(16) = 180\\text{ amu}$." },
    { id: "w11_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Phân tử đạm urea $\\ce{(NH2)2CO}$ (biết $\\text{N}=14, \\text{H}=1, \\text{C}=12, \\text{O}=16$) có phân tử khối bằng bao nhiêu amu?",
      answer: "60", tolerance: 0.1,
      solution: "$2(14 + 2) + 12 + 16 = 32 + 28 = 60\\text{ amu}$." },
    { id: "w11_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hợp chất $\\ce{M2(SO4)3}$ có phân tử khối là $400\\text{ amu}$ (biết $\\text{S}=32, \\text{O}=16$). Tính khối lượng nguyên tử của kim loại M (amu).",
      answer: "56", tolerance: 0.1,
      solution: "$2M_M + 3(96) = 400 \\Rightarrow 2M_M = 112 \\Rightarrow M_M = 56\\text{ amu}$ (Iron, Fe)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w11_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất A tạo bởi 1 nguyên tử nguyên tố X liên kết với 2 nguyên tử Hydrogen ($\\ce{XH2}$? Hay $\\ce{H2X}$). Biết phân tử A nặng bằng phân tử khí Chlorine ($\\ce{Cl2}$? Không, nặng gấp $17$ lần phân tử $\\ce{H2}$). Hãy xác định nguyên tố X và công thức của A.",
      quickAnswer: "32",
      solution: "Phân tử khối của A $= 17 \\times M_{\\ce{H2}} = 17 \\times 2 = 34\\text{ amu}$. Ta có $M_X + 2 \\times 1 = 34 \\Rightarrow M_X = 32\\text{ amu}$ (Sulfur, S). Công thức hợp chất là $\\ce{H2S}$ (Hydrogen sulfide).",
      rubric: [
        { step: "Tính đúng $M_A = 17 \\times 2 = 34\\text{ amu}$", points: 0.5 },
        { step: "Tìm đúng $M_X = 32$ (Sulfur) và công thức $\\ce{H2S}$", points: 0.5 }
      ] },
    { id: "w11_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một phân tử tinh thể phèn chua ngậm nước có công thức $\\ce{CuSO4.5H2O}$ (biết $\\text{Cu}=64, \\text{S}=32, \\text{O}=16, \\text{H}=1$). Tính phân tử khối của tinh thể trên và phần trăm khối lượng của nước kết tinh có trong tinh thể.",
      quickAnswer: "250",
      solution: "$M_{\\ce{CuSO4.5H2O}} = 64 + 32 + 4(16) + 5 \\times 18 = 160 + 90 = 250\\text{ amu}$. Phần trăm khối lượng nước $= \\frac{90}{250} \\times 100\\% = 36\\%$.",
      rubric: [
        { step: "Tính đúng phân tử khối $\\ce{CuSO4.5H2O} = 250\\text{ amu}$", points: 0.5 },
        { step: "Tính đúng $\\%m_{\\ce{H2O}} = \\frac{90}{250} \\times 100\\% = 36\\%$", points: 0.5 }
      ] },
    { id: "w11_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại phân bón ammonium sulfate $\\ce{(NH4)2SO4}$ có độ tinh khiết $90\\%$ (tạp chất không chứa Nitrogen). Tính khối lượng nguyên tố Nitrogen có trong $100\\text{ kg}$ phân bón trên (làm tròn 2 chữ số thập phân).",
      quickAnswer: "19.09",
      solution: "Khối lượng $\\ce{(NH4)2SO4}$ nguyên chất $= 100 \\times 90\\% = 90\\text{ kg}$. $M_{\\ce{(NH4)2SO4}} = 2(14 + 4) + 32 + 64 = 132\\text{ amu}$. Trong $132\\text{ kg}$ $\\ce{(NH4)2SO4}$ có $28\\text{ kg}$ N. Vậy $m_{\\text{N}} = 90 \\times \\frac{28}{132} \\approx 19,09\\text{ kg}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{(NH4)2SO4}} = 90\\text{ kg}$ và $M = 132$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{N}} \\approx 19,09\\text{ kg}$", points: 0.5 }
      ] },
    { id: "w11_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hợp chất khí X có công thức $\\ce{C_n H_{2n+2}}$ (alkane). Biết phân tử khối của X nặng gấp $2,75$ lần phân tử khí Oxygen ($\\ce{O2}$)? (Đính chính: nặng gấp $1,375$ lần $\\ce{O2}$). Tìm công thức phân tử của X.",
      quickAnswer: "44",
      solution: "$M_X = 1,375 \\times 32 = 44\\text{ amu}$. Ta có $12n + (2n + 2) = 44 \\Rightarrow 14n = 42 \\Rightarrow n = 3$. Vậy công thức của X là $\\ce{C3H8}$ (Propane).",
      rubric: [
        { step: "Tính đúng $M_X = 1,375 \\times 32 = 44\\text{ amu}$", points: 0.5 },
        { step: "Giải đúng $n = 3$ và công thức $\\ce{C3H8}$", points: 0.5 }
      ] },
    { id: "w11_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hỗn hợp khí A gồm khí $\\ce{CO2}$ và $\\ce{CH4}$ có tỉ lệ số phân tử tương ứng là $1 : 3$. Tính phân tử khối trung bình (amu) của hỗn hợp khí A.",
      quickAnswer: "23",
      solution: "Xét 4 phân tử hỗn hợp A gồm 1 phân tử $\\ce{CO2}$ ($M = 44$) và 3 phân tử $\\ce{CH4}$ ($M = 16$). Phân tử khối trung bình: $\\overline{M}_A = \\frac{1 \\times 44 + 3 \\times 16}{1 + 3} = \\frac{92}{4} = 23\\text{ amu}$.",
      rubric: [
        { step: "Thiết lập đúng biểu thức trung bình cộng theo tỉ lệ số phân tử $1 : 3$", points: 0.5 },
        { step: "Tính đúng $\\overline{M}_A = 23\\text{ amu}$", points: 0.5 }
      ] }
  ]
};
