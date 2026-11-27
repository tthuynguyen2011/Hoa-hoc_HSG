window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[15] = {
  week: 15,
  title: "Lập Công thức hóa học (CTHH) & Tính % khối lượng nguyên tố",
  objectives: [
    "Lập nhanh và chính xác Công thức hóa học của hợp chất gồm 2 nguyên tố (hoặc 1 kim loại + 1 nhóm nguyên tử) theo Quy tắc hóa trị (phương pháp đường chéo).",
    "Tính được thành phần phần trăm (%) theo khối lượng của mỗi nguyên tố trong hợp chất.",
    "Vận dụng tính % dinh dưỡng trong phân bón hóa học thực tế (đạm $\\text{N}$, lân $\\text{P}_2\\text{O}_5$, kali $\\text{K}_2\\text{O}$) mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 15 (A4). Chuẩn bị bảng hóa trị + nguyên tử khối.",
    sessions: [
      {
        name: "Buổi 1: Lập nhanh CTHH theo Quy tắc đường chéo",
        guide: "Dạy 3 bước chuẩn: B1: Đặt công thức chung $A_x^a B_y^b$; B2: Lập tỉ lệ $\\frac{x}{y} = \\frac{b}{a} = \\frac{b'}{a'}$ (rút gọn tối giản!); B3: Chọn $x = b', y = a'$. Lưu ý: Nếu chỉ số nhóm $\\ge 2$ phải đóng mở ngoặc (vd $\\ce{Ca(NO3)2}$), nếu chỉ số $= 1$ không cần ngoặc (vd $\\ce{NaNO3}$).",
        pitfalls: "Học sinh hay quên RÚT GỌN phân số $b/a$ (ví dụ $\\text{C(IV)}$ và $\\text{O(II)}$ lại viết thành $\\ce{C2O4}$ thay vì rút gọn thành $\\ce{CO2}$!)."
      },
      {
        name: "Buổi 2: Tính % khối lượng các nguyên tố trong hợp chất",
        guide: "Công thức: $\\%A = \\frac{x \\cdot M_A}{M_{\\text{hợp chất}}} \\times 100\\%$. Mẹo kiểm tra: Tổng % tất cả các nguyên tố luôn phải bằng $100\\%$.",
        pitfalls: "Quên nhân với số nguyên tử $x$ của nguyên tố trong phân tử (ví dụ trong $\\ce{Fe2O3}$, khối lượng Fe phải là $2 \\times 56 = 112$, không phải $56$!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán phân bón HSG",
        guide: "Chú ý 5 câu HSG: so sánh độ dinh dưỡng (%N) của các loại phân đạm ($\\ce{NH4NO3, (NH4)2SO4, CO(NH2)2}$) — đây là dạng bài rất hay gặp trong đề thi HSG 9!",
        pitfalls: "Quên nhân 2 nguyên tử N trong $\\ce{NH4NO3}$ và $\\ce{(NH2)2CO}$."
      }
    ]
  },
  lecture: [
    {
      title: "3 Bước Lập nhanh Công thức hóa học (Quy tắc đường chéo)",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 460 110" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <text x="110" y="34" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">III (Al)</text>
            <text x="220" y="34" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">II (SO₄)</text>
            <line x1="120" y1="42" x2="210" y2="75" stroke="#2563eb" stroke-width="2"/>
            <line x1="210" y1="42" x2="120" y2="75" stroke="#dc2626" stroke-width="2"/>
            <text x="110" y="92" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">x = 2</text>
            <text x="220" y="92" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">y = 3</text>
            <text x="275" y="64" font-size="18" font-weight="bold" fill="#334155">→</text>
            <text x="370" y="66" font-size="18" font-weight="bold" fill="#15803d" text-anchor="middle">Al₂(SO₄)₃</text>
          </svg>
        </div>
        <ol>
          <li>Đặt công thức dạng chung: $\\overset{a}{A}_x \\overset{b}{B}_y$.</li>
          <li>Theo quy tắc hóa trị: $x \\cdot a = y \\cdot b \\Rightarrow \\frac{x}{y} = \\frac{b}{a}$ (<strong>rút gọn phân số đến tối giản!</strong>).</li>
          <li>Chọn $x = b'$ và $y = a'$ (nếu $y = 1$ thì bỏ qua không viết; nếu nhóm nguyên tử có chỉ số $\\ge 2$ phải đặt trong ngoặc).</li>
        </ol>
      `,
      checkpoint: {
        question: "Công thức hóa học đúng của hợp chất tạo bởi Sulfur hóa trị VI và Oxygen hóa trị II là:",
        options: ["$\\ce{S2O6}$", "$\\ce{SO3}$", "$\\ce{S6O2}$", "$\\ce{SO2}$"],
        answer: 1,
        explanation: "$\\frac{x}{y} = \\frac{2}{6} = \\frac{1}{3}$ (rút gọn tối giản!) $\\Rightarrow \\ce{SO3}$."
      }
    },
    {
      title: "Tính Phần trăm khối lượng (%) của Nguyên tố",
      content: `
        <p>Cho hợp chất $A_x B_y C_z$ có phân tử khối $M$:</p>
        <p style="text-align:center;">$$\\%m_A = \\frac{x \\cdot M_A}{M} \\times 100\\%$$</p>
        <div class="callout">
          <strong>Ví dụ mẫu:</strong> Tính $\\%m$ các nguyên tố trong $\\ce{CaCO3}$ ($M = 40 + 12 + 3 \\times 16 = 100\\text{ amu}$):<br/>
          • $\\%\\text{Ca} = \\frac{40}{100} \\times 100\\% = 40\\%$<br/>
          • $\\%\\text{C} = \\frac{12}{100} \\times 100\\% = 12\\%$<br/>
          • $\\%\\text{O} = 100\\% - 40\\% - 12\\% = 48\\%$
        </div>
      `,
      example: "So sánh hàm lượng nguyên tố Nitrogen (%N) trong 2 loại phân đạm: Ammonium nitrate ($\\ce{NH4NO3}$) và Urea ($\\ce{(NH2)2CO}$).<br/><em>Giải:</em> • Trong $\\ce{NH4NO3}$ ($M = 80$): $\\%\\text{N} = \\frac{2 \\times 14}{80} \\times 100\\% = 35\\%$. • Trong $\\ce{(NH2)2CO}$ ($M = 60$): $\\%\\text{N} = \\frac{2 \\times 14}{60} \\times 100\\% \\approx 46,67\\%$. Vậy Urea có hàm lượng đạm cao hơn."
    }
  ],
  questions: [
    { id: "w15_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của hợp chất tạo bởi $\\text{Mg}$ (hóa trị II) và $\\text{Cl}$ (hóa trị I) là:",
      options: ["A. $\\ce{MgCl}$", "B. $\\ce{MgCl2}$", "C. $\\ce{Mg2Cl}$", "D. $\\ce{Mg2Cl2}$"],
      answer: 1, solution: "$x/y = 1/2 \\Rightarrow \\ce{MgCl2}$." },
    { id: "w15_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của hợp chất tạo bởi $\\text{Al}$ (hóa trị III) và $\\text{O}$ (hóa trị II) là:",
      options: ["A. $\\ce{AlO}$", "B. $\\ce{Al3O2}$", "C. $\\ce{Al2O3}$", "D. $\\ce{AlO3}$"],
      answer: 2, solution: "$x/y = 2/3 \\Rightarrow \\ce{Al2O3}$." },
    { id: "w15_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của hợp chất tạo bởi $\\text{Ca}$ (hóa trị II) và nhóm $\\text{NO}_3$ (hóa trị I) là:",
      options: ["A. $\\ce{CaNO3}$", "B. $\\ce{Ca(NO3)2}$", "C. $\\ce{Ca2NO3}$", "D. $\\ce{Ca(NO3)3}$"],
      answer: 1, solution: "$x/y = 1/2 \\Rightarrow \\ce{Ca(NO3)2}$." },
    { id: "w15_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của hợp chất tạo bởi $\\text{C}$ (hóa trị IV) và $\\text{O}$ (hóa trị II) là:",
      options: ["A. $\\ce{C2O4}$", "B. $\\ce{CO}$", "C. $\\ce{CO2}$", "D. $\\ce{C4O2}$"],
      answer: 2, solution: "$x/y = 2/4 = 1/2 \\Rightarrow \\ce{CO2}$." },
    { id: "w15_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Phần trăm khối lượng của nguyên tố Oxygen trong nước ($\\ce{H2O}$, biết $\\text{H}=1, \\text{O}=16$) là:",
      options: ["A. $11,11\\%$", "B. $50\\%$", "C. $88,89\\%$", "D. $94,12\\%$"],
      answer: 2, solution: "$\\%\\text{O} = (16 / 18) \\times 100\\% \\approx 88,89\\%$." },
    { id: "w15_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của Potassium phosphate (tạo bởi $\\text{K}$ hóa trị I và nhóm $\\text{PO}_4$ hóa trị III) là:",
      options: ["A. $\\ce{KPO4}$", "B. $\\ce{K2PO4}$", "C. $\\ce{K3PO4}$", "D. $\\ce{K(PO4)3}$"],
      answer: 2, solution: "$\\ce{K3PO4}$." },
    { id: "w15_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong hợp chất $\\ce{CuO}$ ($\text{Cu}=64, \\text{O}=16$), nguyên tố Copper chiếm bao nhiêu phần trăm khối lượng?",
      options: ["A. $20\\%$", "B. $50\\%$", "C. $80\\%$", "D. $90\\%$"],
      answer: 2, solution: "$\\%\\text{Cu} = (64 / 80) \\times 100\\% = 80\\%$." },
    { id: "w15_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Hợp chất tạo bởi $\\text{Fe(III)}$ và nhóm $\\text{OH(I)}$ là $\\ce{Fe(OH)3}$.", answer: true },
        { text: "Hợp chất tạo bởi $\\text{Ba(II)}$ và nhóm $\\text{CO}_3\\text{(II)}$ là $\\ce{Ba2(CO3)2}$.", answer: false },
        { text: "Trong khí $\\ce{CH4}$, Carbon chiếm $75\\%$ khối lượng.", answer: true },
        { text: "Trong $\\ce{SO2}$, nguyên tố S và nguyên tố O đều chiếm $50\\%$ khối lượng.", answer: true }
      ],
      solution: "b) Sai vì $2/2 = 1/1$ nên phải rút gọn thành $\\ce{BaCO3}$. c, d) Đúng: $\\%\\text{C} = 12/16 = 75\\%$; $\\%\\text{S} = 32/64 = 50\\%$." },
    { id: "w15_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phần trăm khối lượng (%) của nguyên tố Magnesium trong hợp chất $\\ce{MgO}$ ($\text{Mg}=24, \\text{O}=16$).",
      answer: "60", tolerance: 0.1,
      solution: "$\\%\\text{Mg} = (24 / 40) \\times 100\\% = 60\\%$." },
    { id: "w15_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phần trăm khối lượng (%) của nguyên tố Oxygen trong $\\ce{SO3}$ ($\text{S}=32, \\text{O}=16$).",
      answer: "60", tolerance: 0.1,
      solution: "$\\%\\text{O} = (48 / 80) \\times 100\\% = 60\\%$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w15_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong các oxide của sắt sau đây, oxide nào có hàm lượng phần trăm khối lượng Iron (Fe) CAO NHẤT?",
      options: ["A. $\\ce{FeO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Fe3O4}$", "D. Bằng nhau hết"],
      answer: 0, solution: "$\\%\\text{Fe}$ trong $\\ce{FeO} = 56/72 = 77,78\\%$; trong $\\ce{Fe3O4} = 168/232 = 72,41\\%$; trong $\\ce{Fe2O3} = 112/160 = 70\\%$." },
    { id: "w15_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một loại quặng chứa $60\\%$ $\\ce{Fe2O3}$ (còn lại không chứa sắt). Hàm lượng sắt có trong $1\\text{ tấn}$ quặng là:",
      options: ["A. $420\\text{ kg}$", "B. $480\\text{ kg}$", "C. $600\\text{ kg}$", "D. $700\\text{ kg}$"],
      answer: 0, solution: "$m_{\\ce{Fe2O3}} = 600\\text{ kg} \\Rightarrow m_{\\text{Fe}} = 600 \\times 70\\% = 420\\text{ kg}$." },
    { id: "w15_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho hợp chất Ammonium carbonate $\\ce{(NH4)2CO3}$ ($\text{N}=14, \\text{H}=1, \\text{C}=12, \\text{O}=16$):",
      statements: [
        { text: "Phân tử khối của $\\ce{(NH4)2CO3}$ là $96\\text{ amu}$.", answer: true },
        { text: "Trong 1 phân tử có 2 nguyên tử N và 8 nguyên tử H.", answer: true },
        { text: "Phần trăm khối lượng của Oxygen trong hợp chất là $50\\%$.", answer: true },
        { text: "Phần trăm khối lượng của Nitrogen trong hợp chất là $14,58\\%$.", answer: false }
      ],
      solution: "d) Sai: $\\%\\text{N} = (28 / 96) \\times 100\\% \\approx 29,17\\%$." },
    { id: "w15_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tính phần trăm khối lượng (%) của nguyên tố Iron (Fe) trong muối $\\ce{FeSO4}$ ($\text{Fe}=56, \\text{S}=32, \\text{O}=16$, làm tròn 2 chữ số thập phân).",
      answer: "36.84", tolerance: 0.05,
      solution: "$M_{\\ce{FeSO4}} = 56 + 32 + 64 = 152$. $\\%\\text{Fe} = (56 / 152) \\times 100\\% \\approx 36,84\\%$." },
    { id: "w15_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cần lấy bao nhiêu gam $\\ce{CuO}$ để trong đó có chứa đúng $16\\text{ g}$ nguyên tố Copper ($\text{Cu}=64, \\text{O}=16$)?",
      answer: "20", tolerance: 0.1,
      solution: "$\\%\\text{Cu}$ trong $\\ce{CuO} = 80\\% \\Rightarrow m_{\\ce{CuO}} = 16 / 0,8 = 20\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w15_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một bác nông dân muốn chọn mua loại phân đạm có hàm lượng dinh dưỡng (%N) cao nhất trong 3 loại sau: $\\ce{NH4Cl}$, $\\ce{(NH4)2SO4}$ và $\\ce{CO(NH2)2}$ (urea). Bằng tính toán cụ thể, em hãy tư vấn cho bác nông dân.",
      solution: "• $\\ce{NH4Cl}$ ($M = 53,5$): $\\%\\text{N} = \\frac{14}{53,5} \\times 100\\% \\approx 26,17\\%$. • $\\ce{(NH4)2SO4}$ ($M = 132$): $\\%\\text{N} = \\frac{28}{132} \\times 100\\% \\approx 21,21\\%$. • $\\ce{CO(NH2)2}$ ($M = 60$): $\\%\\text{N} = \\frac{28}{60} \\times 100\\% \\approx 46,67\\%$. Vậy nên chọn phân đạm Urea $\\ce{CO(NH2)2}$.",
      rubric: [
        { step: "Tính đúng %N trong cả 3 loại phân bón (mỗi loại 0,25đ)", points: 0.75 },
        { step: "Kết luận đúng nên chọn Urea $\\ce{CO(NH2)2}$", points: 0.25 }
      ] },
    { id: "w15_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất X có công thức $\\ce{R2O3}$, trong đó Oxygen chiếm $30\\%$ về khối lượng. Tìm khối lượng nguyên tử và tên nguyên tố R.",
      quickAnswer: "56",
      solution: "Vì Oxygen chiếm $30\\%$ nên R chiếm $70\\%$. Ta có tỉ lệ: $\\frac{2M_R}{3 \\times 16} = \\frac{70}{30} \\Rightarrow \\frac{2M_R}{48} = \\frac{7}{3} \\Rightarrow 2M_R = 112 \\Rightarrow M_R = 56\\text{ amu}$ (Iron, Fe). Hợp chất là $\\ce{Fe2O3}$.",
      rubric: [
        { step: "Lập đúng tỉ lệ khối lượng $\\frac{2M_R}{48} = \\frac{70}{30}$", points: 0.5 },
        { step: "Giải đúng $M_R = 56$ (Iron, Fe) và CTHH $\\ce{Fe2O3}$", points: 0.5 }
      ] },
    { id: "w15_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cần trộn hai loại phân bón $\\ce{NH4NO3}$ ($35\\%$ N) và $\\ce{(NH2)2CO}$ ($46,67\\%$ N) theo tỉ lệ khối lượng như thế nào để thu được hỗn hợp phân bón có hàm lượng Nitrogen là $42\\%$? (Hoặc tính khối lượng mỗi loại để có $100\\text{ kg}$ hỗn hợp $42\\%$ N).",
      solution: "Gọi khối lượng $\\ce{NH4NO3}$ là $a\\text{ kg}$, khối lượng $\\ce{(NH2)2CO}$ là $b\\text{ kg}$. Theo quy tắc đường chéo (hoặc phương trình): $35a + 46,67b = 42(a + b) \\Rightarrow 4,67b = 7a \\Rightarrow \\frac{a}{b} = \\frac{4,67}{7} \\approx \\frac{2}{3}$ (tức $40\\text{ kg}$ $\\ce{NH4NO3}$ và $60\\text{ kg}$ $\\ce{(NH2)2CO}$).",
      rubric: [
        { step: "Lập phương trình bảo toàn khối lượng N: $0,35a + 0,4667b = 0,42(a+b)$", points: 0.5 },
        { step: "Giải đúng tỉ lệ $a : b \\approx 2 : 3$", points: 0.5 }
      ] },
    { id: "w15_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại đá vôi chứa $80\\%$ $\\ce{CaCO3}$ (còn lại là tạp chất trơ không chứa Ca và C). Để thu được lượng nguyên tố Carbon bằng với lượng Carbon có trong $88\\text{ g}$ khí $\\ce{CO2}$, cần lấy bao nhiêu gam đá vôi trên?",
      quickAnswer: "250",
      solution: "Trong $88\\text{ g}$ $\\ce{CO2}$ ($M=44$), khối lượng C là: $m_{\\text{C}} = 88 \\times \\frac{12}{44} = 24\\text{ g}$. Để có $24\\text{ g}$ C trong $\\ce{CaCO3}$ ($M=100$), lượng $\\ce{CaCO3}$ nguyên chất cần là: $m_{\\ce{CaCO3}} = 24 \\times \\frac{100}{12} = 200\\text{ g}$. Vì đá vôi chỉ chứa $80\\%$ $\\ce{CaCO3}$ nên khối lượng đá vôi cần lấy $= 200 / 0,8 = 250\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $m_{\\text{C}} = 24\\text{ g}$", points: 0.25 },
        { step: "Tính đúng $m_{\\ce{CaCO3}} = 200\\text{ g}$", points: 0.5 },
        { step: "Tính đúng khối lượng đá vôi $= 250\\text{ g}$", points: 0.25 }
      ] },
    { id: "w15_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Công thức hóa học của một muối ngậm nước là $\\ce{Na2CO3.xH2O}$. Biết trong muối ngậm nước này, nguyên tố Sodium (Na) chiếm $16,08\\%$ về khối lượng. Tìm giá trị nguyên của $x$.",
      quickAnswer: "10",
      solution: "Ta có $M = 2(23) + 12 + 48 + 18x = 106 + 18x$. Theo đề bài: $\\frac{46}{106 + 18x} = 0,1608 \\Rightarrow 106 + 18x \\approx 286,07 \\Rightarrow 18x \\approx 180 \\Rightarrow x = 10$. Công thức là $\\ce{Na2CO3.10H2O}$ (Soda ngậm 10 nước).",
      rubric: [
        { step: "Lập đúng biểu thức $M = 106 + 18x$ và phương trình $\\%\\text{Na}$", points: 0.5 },
        { step: "Giải đúng $x = 10$ và viết $\\ce{Na2CO3.10H2O}$", points: 0.5 }
      ] }
  ]
};
