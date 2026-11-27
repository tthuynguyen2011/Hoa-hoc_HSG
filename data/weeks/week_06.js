window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[6] = {
  week: 6,
  title: "Nguyên tố hóa học, Đồng vị sơ lược & Khối lượng nguyên tử (amu)",
  objectives: [
    "Hiểu khái niệm nguyên tố hóa học: Tập hợp những nguyên tử có cùng số proton ($Z$) trong hạt nhân.",
    "Viết đúng ký hiệu hóa học (1 hoặc 2 chữ cái) và gọi đúng tên IUPAC của 20 nguyên tố đầu + một số kim loại phổ biến (Fe, Cu, Zn, Ag, Ba, Pb).",
    "Hiểu khái niệm đồng vị và tính được khối lượng nguyên tử trung bình (amu) ở mức độ HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 6 (A4). Dùng Bảng tra cứu 20 nguyên tố trên Web App để học sinh luyện nhớ ký hiệu + tên IUPAC.",
    sessions: [
      {
        name: "Buổi 1: Nguyên tố hóa học & Ký hiệu IUPAC",
        guide: "Nhấn mạnh: Số proton ($Z$) là 'chứng minh thư' quyết định nguyên tố đó là gì. Quy tắc viết ký hiệu hóa học: chữ cái đầu viết HOA, chữ cái thứ hai (nếu có) viết thường (vd: $\\text{Na}$, $\\text{Cl}$, không viết $\\text{NA}$, $\\text{CL}$). Đọc tên theo IUPAC (Sodium, Potassium, Iron, Copper, Sulfur...).",
        pitfalls: "Học sinh hay viết sai $\\text{Ca}$ thành $\\text{CA}$, $\\text{Al}$ thành $\\text{AL}$, hoặc nhầm $\\text{K}$ (Potassium) với $\\text{P}$ (Phosphorus), $\\text{Na}$ (Sodium) với $\\text{N}$ (Nitrogen)."
      },
      {
        name: "Buổi 2: Đồng vị & Khối lượng nguyên tử trung bình (amu)",
        guide: "Giải thích tại sao Chlorine có $M = 35,5\\text{ amu}$ (không nguyên): vì trong tự nhiên có 2 đồng vị $\\ce{^35Cl}$ (75%) và $\\ce{^37Cl}$ (25%). Hướng dẫn công thức $\\overline{A} = \\frac{A_1 \\cdot a\\% + A_2 \\cdot b\\%}{100}$.",
        pitfalls: "Quên kiểm tra tổng phần trăm các đồng vị phải bằng $100\\%$."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Chú ý 5 câu HSG: tính khối lượng nguyên tử trung bình, tìm % số nguyên tử mỗi đồng vị (như bài đồng vị Cu hoặc Cl), và tính số nguyên tử trong một mẫu vật.",
        pitfalls: "Nhầm lẫn giữa phần trăm SỐ NGUYÊN TỬ đồng vị với phần trăm KHỐI LƯỢNG đồng vị trong hợp chất (dạng bài HSG 9)."
      }
    ]
  },
  lecture: [
    {
      title: "Nguyên tố hóa học & Ký hiệu hóa học (Chuẩn GDPT 2018)",
      content: `
        <ul>
          <li><strong>Nguyên tố hóa học</strong> là tập hợp những nguyên tử có <strong>cùng số proton</strong> trong hạt nhân. Các nguyên tử thuộc cùng một nguyên tố có tính chất hóa học giống nhau.</li>
          <li><strong>Ký hiệu hóa học:</strong> Biểu diễn bằng 1 chữ cái in hoa (vd: $\\text{H, C, N, O, S, P, K}$) hoặc 2 chữ cái với chữ đầu viết hoa, chữ sau viết thường (vd: $\\text{He, Na, Mg, Al, Cl, Ca, Fe, Cu, Zn}$).</li>
        </ul>
        <div class="callout warn">
          <strong>Lưu ý các ký hiệu 'bẫy' hay nhầm (tên Latinh vs tên IUPAC):</strong><br/>
          • $\\text{Na}$: <strong>Sodium</strong> (Natri) &nbsp;|&nbsp; $\\text{K}$: <strong>Potassium</strong> (Kali)<br/>
          • $\\text{Fe}$: <strong>Iron</strong> (Sắt) &nbsp;|&nbsp; $\\text{Cu}$: <strong>Copper</strong> (Đồng)<br/>
          • $\\text{Ag}$: <strong>Silver</strong> (Bạc) &nbsp;|&nbsp; $\\text{Au}$: <strong>Gold</strong> (Vàng)
        </div>
      `,
      checkpoint: {
        question: "Hai nguyên tử X ($17p, 18n, 17e$) và Y ($17p, 20n, 17e$) có thuộc cùng một nguyên tố hóa học không?",
        options: [
          "Không, vì số neutron khác nhau (18 và 20)",
          "Có, vì chúng có cùng số proton ($Z = 17$)",
          "Không, vì khối lượng nguyên tử khác nhau",
          "Chưa thể kết luận được"
        ],
        answer: 1,
        explanation: "Cùng số proton ($Z = 17$) thì thuộc cùng một nguyên tố hóa học (Chlorine). X và Y là hai đồng vị của Chlorine."
      }
    },
    {
      title: "Đồng vị & Khối lượng nguyên tử trung bình (amu)",
      content: `
        <p><strong>Đồng vị</strong> là các nguyên tử của cùng một nguyên tố hóa học (cùng số $p$), nhưng <strong>khác nhau về số neutron ($n$)</strong> nên có số khối ($A = p + n$) khác nhau.</p>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 500 115" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- H-1 -->
            <circle cx="85" cy="48" r="28" fill="none" stroke="#94a3b8" stroke-dasharray="3 2"/>
            <circle cx="85" cy="48" r="8" fill="#ef4444"/><text x="85" y="51" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">p</text>
            <circle cx="113" cy="48" r="4" fill="#2563eb"/>
            <text x="85" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">¹H (1p, 0n)</text>
            <!-- H-2 -->
            <circle cx="250" cy="48" r="28" fill="none" stroke="#94a3b8" stroke-dasharray="3 2"/>
            <circle cx="244" cy="48" r="8" fill="#ef4444"/><text x="244" y="51" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">p</text>
            <circle cx="257" cy="48" r="8" fill="#64748b"/><text x="257" y="51" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">n</text>
            <circle cx="278" cy="48" r="4" fill="#2563eb"/>
            <text x="250" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">²H (1p, 1n)</text>
            <!-- H-3 -->
            <circle cx="415" cy="48" r="28" fill="none" stroke="#94a3b8" stroke-dasharray="3 2"/>
            <circle cx="409" cy="44" r="7" fill="#ef4444"/><text x="409" y="47" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">p</text>
            <circle cx="421" cy="44" r="7" fill="#64748b"/><text x="421" y="47" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">n</text>
            <circle cx="415" cy="56" r="7" fill="#64748b"/><text x="415" y="59" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">n</text>
            <circle cx="443" cy="48" r="4" fill="#2563eb"/>
            <text x="415" y="96" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">³H (1p, 2n)</text>
          </svg>
        </div>
        <p>Công thức tính <strong>khối lượng nguyên tử trung bình</strong> của nguyên tố có 2 đồng vị $A_1$ (chiếm $x\\%$) và $A_2$ (chiếm $(100-x)\\%$):</p>
        <p style="text-align:center;">$$\\overline{M} = \\frac{A_1 \\cdot x + A_2 \\cdot (100 - x)}{100}$$</p>
      `,
      example: "Trong tự nhiên, Copper (Cu) có hai đồng vị bền là $\\ce{^63Cu}$ ($73\\%$) và $\\ce{^65Cu}$ ($27\\%$). Tính khối lượng nguyên tử trung bình của Cu.<br/><em>Giải:</em> $\\overline{M}_{\\text{Cu}} = \\frac{63 \\times 73 + 65 \\times 27}{100} = 63,54\\text{ amu}$."
    }
  ],
  questions: [
    { id: "w6_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Yếu tố nào quyết định bản chất của một nguyên tố hóa học?",
      options: ["A. Số neutron", "B. Số proton trong hạt nhân", "C. Tổng số $p + n$", "D. Khối lượng nguyên tử"],
      answer: 1, solution: "Các nguyên tử cùng số proton thuộc cùng một nguyên tố hóa học." },
    { id: "w6_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Ký hiệu hóa học của nguyên tố Sodium là:",
      options: ["A. S", "B. So", "C. Na", "D. K"],
      answer: 2, solution: "Sodium có ký hiệu hóa học là Na (từ tên Latinh Natrium)." },
    { id: "w6_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Tên gọi theo danh pháp IUPAC của nguyên tố có ký hiệu hóa học $\\text{P}$ là:",
      options: ["A. Potassium", "B. Phosphorus", "C. Platinum", "D. Lead"],
      answer: 1, solution: "P là Phosphorus ($M = 31\\text{ amu}$). Potassium ký hiệu là K." },
    { id: "w6_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Cách viết ký hiệu hóa học nào sau đây ĐÚNG quy tắc?",
      options: ["A. CL", "B. al", "C. Mg", "D. ca"],
      answer: 2, solution: "Chữ cái đầu viết hoa, chữ cái thứ hai viết thường: Mg (Magnesium)." },
    { id: "w6_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Khối lượng nguyên tử của Oxygen (O) tính theo đơn vị amu là:",
      options: ["A. 8", "B. 12", "C. 14", "D. 16"],
      answer: 3, solution: "Oxygen có $8p + 8n = 16\\text{ amu}$." },
    { id: "w6_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố nào phổ biến nhất trong vỏ Trái Đất (chiếm khoảng $49,4\\%$ khối lượng vỏ Trái Đất)?",
      options: ["A. Iron", "B. Oxygen", "C. Silicon", "D. Aluminium"],
      answer: 1, solution: "Oxygen chiếm gần một nửa khối lượng vỏ Trái Đất." },
    { id: "w6_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Ký hiệu hóa học của Iron (Sắt) và Copper (Đồng) lần lượt là:",
      options: ["A. Ir và Co", "B. Fe và Cu", "C. Fe và Co", "D. In và Cu"],
      answer: 1, solution: "Iron = Fe, Copper = Cu." },
    { id: "w6_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về nguyên tố hóa học và đồng vị:",
      statements: [
        { text: "Các đồng vị của cùng một nguyên tố có số proton giống nhau.", answer: true },
        { text: "Các đồng vị của cùng một nguyên tố có số neutron giống nhau.", answer: false },
        { text: "Nguyên tố Calcium ký hiệu là Ca, khối lượng nguyên tử $40\\text{ amu}$.", answer: true },
        { text: "Ký hiệu hóa học $\\text{N}$ biểu diễn cho nguyên tố Sodium.", answer: false }
      ],
      solution: "b) Sai vì đồng vị khác nhau số neutron; d) Sai vì N là Nitrogen, Sodium là Na." },
    { id: "w6_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tử nguyên tố X nặng gấp $2$ lần nguyên tử Carbon-12 ($12\\text{ amu}$). Khối lượng nguyên tử của X là bao nhiêu amu?",
      answer: "24", tolerance: 0.1,
      solution: "$M_X = 2 \\times 12 = 24\\text{ amu}$ (Magnesium)." },
    { id: "w6_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho 4 nguyên tử sau: A ($6p, 6n$), B ($7p, 7n$), C ($6p, 7n$), D ($8p, 8n$). Có bao nhiêu nguyên tố hóa học trong 4 nguyên tử trên?",
      answer: "3", tolerance: 0.1,
      solution: "A và C có cùng $p = 6$ nên thuộc cùng 1 nguyên tố (Carbon). B ($p=7$, N) và D ($p=8$, O) là 2 nguyên tố khác → Tổng cộng 3 nguyên tố." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w6_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một nguyên tử X nặng bằng $1,75$ lần nguyên tử Oxygen ($16\\text{ amu}$). X là nguyên tố nào sau đây?",
      options: ["A. Sodium (Na = 23)", "B. Silicon (Si = 28)", "C. Sulfur (S = 32)", "D. Calcium (Ca = 40)"],
      answer: 1, solution: "$M_X = 1,75 \\times 16 = 28\\text{ amu} \\Rightarrow$ Silicon (Si)." },
    { id: "w6_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong tự nhiên, nguyên tố Bromine (Br) có 2 đồng vị là $\\ce{^79Br}$ ($50,69\\%$) và $\\ce{^81Br}$ ($49,31\\%$). Khối lượng nguyên tử trung bình của Br là:",
      options: ["A. $79,5\\text{ amu}$", "B. $79,99\\text{ amu}$", "C. $80,5\\text{ amu}$", "D. $80,9\\text{ amu}$"],
      answer: 1, solution: "$\\overline{M} = (79 \\times 50,69 + 81 \\times 49,31)/100 = 79,9862 \\approx 79,99\\text{ amu}$." },
    { id: "w6_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét 3 đồng vị của nguyên tố Hydrogen: Protium ($\\ce{^1_1H}$), Deuterium ($\\ce{^2_1H}$) và Tritium ($\\ce{^3_1H}$):",
      statements: [
        { text: "Cả 3 đồng vị đều có 1 proton và 1 electron.", answer: true },
        { text: "Số neutron của $\\ce{^1_1H}$, $\\ce{^2_1H}$, $\\ce{^3_1H}$ lần lượt là $0, 1, 2$.", answer: true },
        { text: "Nước nặng ($\\ce{D2O}$) tạo bởi Deuterium có phân tử khối là $18\\text{ amu}$.", answer: false },
        { text: "Cả 3 đồng vị đều thuộc nguyên tố Hydrogen.", answer: true }
      ],
      solution: "c) Sai: $M_{\\ce{D2O}} = 2 \\times 2 + 16 = 20\\text{ amu}$." },
    { id: "w6_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Nguyên tố Boron (B) có khối lượng nguyên tử trung bình là $10,81\\text{ amu}$, gồm 2 đồng vị $\\ce{^10B}$ và $\\ce{^11B}$. Tính phần trăm số nguyên tử (%) của đồng vị $\\ce{^11B}$?",
      answer: "81", tolerance: 0.2,
      solution: "Gọi $\\%\\ce{^11B} = x \\Rightarrow \\%\\ce{^10B} = 100 - x$. Ta có $\\frac{11x + 10(100-x)}{100} = 10,81 \\Rightarrow x = 81\\%$." },
    { id: "w6_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Biết 1 nguyên tử $\\ce{Fe}$ có khối lượng $56\\text{ amu}$ và $1\\text{ amu} = 1,6605 \\times 10^{-24}\\text{ g}$. Tính khối lượng (theo gam) của $10^{23}$ nguyên tử Fe (làm tròn 1 chữ số thập phân).",
      answer: "9.3", tolerance: 0.1,
      solution: "$m = 10^{23} \\times 56 \\times 1,6605 \\times 10^{-24} \\approx 9,3\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w6_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong tự nhiên, nguyên tố Chlorine (Cl) có hai đồng vị là $\\ce{^35Cl}$ và $\\ce{^37Cl}$. Biết khối lượng nguyên tử trung bình của Cl là $35,5\\text{ amu}$. Tính phần trăm số nguyên tử của mỗi đồng vị.",
      quickAnswer: "75",
      solution: "Gọi phần trăm số nguyên tử của $\\ce{^35Cl}$ là $x\\%$ ($0 < x < 100$), của $\\ce{^37Cl}$ là $(100 - x)\\%$. Ta có: $\\frac{35x + 37(100 - x)}{100} = 35,5 \\Rightarrow 3700 - 2x = 3550 \\Rightarrow x = 75\\%$. Vậy $\\ce{^35Cl}$ chiếm $75\\%$, $\\ce{^37Cl}$ chiếm $25\\%$.",
      rubric: [
        { step: "Đặt ẩn đúng và lập phương trình $\\frac{35x + 37(100 - x)}{100} = 35,5$", points: 0.5 },
        { step: "Giải đúng $\\%\\ce{^35Cl} = 75\\%$ và $\\%\\ce{^37Cl} = 25\\%$", points: 0.5 }
      ] },
    { id: "w6_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nguyên tố X có khối lượng nguyên tử trung bình là $35,5\\text{ amu}$ (gồm $75\\%$ $\\ce{^35Cl}$ và $25\\%$ $\\ce{^37Cl}$). Hỏi trong hợp chất $\\ce{HClO4}$ (biết $M_{\\text{H}} = 1$, $M_{\\text{O}} = 16$), đồng vị $\\ce{^37Cl}$ chiếm bao nhiêu phần trăm về <strong>khối lượng</strong>? (Làm tròn 2 chữ số thập phân)",
      quickAnswer: "9.2",
      solution: "Xét $1\\text{ mol}$ $\\ce{HClO4}$: $M_{\\ce{HClO4}} = 1 + 35,5 + 4 \\times 16 = 100,5\\text{ g}$. Trong $1\\text{ mol}$ Cl có $0,25\\text{ mol}$ $\\ce{^37Cl}$ nặng $0,25 \\times 37 = 9,25\\text{ g}$. Vậy $\\%m_{\\ce{^37Cl}} = \\frac{9,25}{100,5} \\times 100\\% \\approx 9,20\\%$.",
      rubric: [
        { step: "Tính đúng phân tử khối $\\ce{HClO4} = 100,5\\text{ amu}$", points: 0.25 },
        { step: "Tính đúng khối lượng phần đóng góp của $\\ce{^37Cl}$ là $0,25 \\times 37 = 9,25$", points: 0.5 },
        { step: "Tính đúng $\\%m_{\\ce{^37Cl}} \\approx 9,20\\%$", points: 0.25 }
      ] },
    { id: "w6_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một nguyên tố R có 2 đồng vị $A_1$ và $A_2$. Tỉ lệ số nguyên tử của $A_1 : A_2 = 27 : 23$. Hạt nhân $A_1$ có $35$ proton và $44$ neutron. Hạt nhân $A_2$ nhiều hơn $A_1$ là $2$ neutron. Tính khối lượng nguyên tử trung bình của R.",
      quickAnswer: "79.92",
      solution: "Số khối $A_1 = 35 + 44 = 79$. Số khối $A_2 = 79 + 2 = 81$. Khối lượng nguyên tử trung bình: $\\overline{M}_R = \\frac{79 \\times 27 + 81 \\times 23}{27 + 23} = \\frac{2133 + 1863}{50} = 79,92\\text{ amu}$ (Bromine).",
      rubric: [
        { step: "Tìm đúng số khối $A_1 = 79$ và $A_2 = 81$", points: 0.5 },
        { step: "Tính đúng $\\overline{M}_R = 79,92\\text{ amu}$", points: 0.5 }
      ] },
    { id: "w6_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một loại quặng chứa $80\\%$ $\\ce{Fe2O3}$ về khối lượng (còn lại là tạp chất không chứa sắt). Biết $M_{\\text{Fe}} = 56$, $M_{\\text{O}} = 16$. Tính khối lượng nguyên tố Iron (Fe) có trong $1\\text{ tấn}$ ($1000\\text{ kg}$) quặng trên.",
      quickAnswer: "560",
      solution: "Khối lượng $\\ce{Fe2O3}$ trong $1000\\text{ kg}$ quặng $= 1000 \\times 80\\% = 800\\text{ kg}$. Phân tử khối $\\ce{Fe2O3} = 2 \\times 56 + 3 \\times 16 = 160\\text{ amu}$. Trong $160\\text{ kg}$ $\\ce{Fe2O3}$ có $112\\text{ kg}$ Fe. Vậy $m_{\\text{Fe}} = 800 \\times \\frac{112}{160} = 560\\text{ kg}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{Fe2O3}} = 800\\text{ kg}$", points: 0.25 },
        { step: "Tính đúng $M_{\\ce{Fe2O3}} = 160$ và $\\%\\text{Fe} = 112/160 = 70\\%$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{Fe}} = 560\\text{ kg}$", points: 0.25 }
      ] },
    { id: "w6_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vì sao khối lượng nguyên tử hầu hết các nguyên tố ghi trong Bảng tuần hoàn đều là số thập phân (ví dụ Chlorine $= 35,45$; Copper $= 63,55$) dù số proton và số neutron đều là số nguyên?",
      solution: "Vì mỗi nguyên tố hóa học trong tự nhiên thường là hỗn hợp của nhiều đồng vị bền có số neutron (do đó số khối) khác nhau. Khối lượng nguyên tử ghi trong bảng tuần hoàn là giá trị trung bình cộng có trọng số theo tỉ lệ phần trăm số nguyên tử của các đồng vị trong tự nhiên.",
      rubric: [
        { step: "Nêu được trong tự nhiên mỗi nguyên tố thường tồn tại nhiều đồng vị có số khối khác nhau", points: 0.5 },
        { step: "Giải thích giá trị ghi trong bảng là khối lượng nguyên tử trung bình theo tỉ lệ % các đồng vị", points: 0.5 }
      ] }
  ]
};
