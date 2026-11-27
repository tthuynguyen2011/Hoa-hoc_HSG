window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[16] = {
  week: 16,
  title: "Bài toán tìm CTHH từ % khối lượng & Phân tử khối (Mức HSG)",
  objectives: [
    "Thành thạo 2 phương pháp tìm Công thức hóa học (CTHH) của hợp chất $A_x B_y C_z$: (1) Dùng trực tiếp Phân tử khối $M$; (2) Lập tỉ lệ tối giản $x : y : z = \\frac{\\%A}{M_A} : \\frac{\\%B}{M_B} : \\frac{\\%C}{M_C}$.",
    "Giải được các bài toán biện luận tìm CTHH khi chưa biết phân tử khối (chỉ biết % khối lượng hoặc tỉ lệ khối lượng) – dạng bài trọng tâm thi HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 16 (A4). Chuẩn bị máy tính bỏ túi cho học sinh thực hành chia tỉ lệ.",
    sessions: [
      {
        name: "Buổi 1: Tìm CTHH khi biết % khối lượng và Phân tử khối ($M$)",
        guide: "Dạy công thức siêu nhanh: $x = \\frac{M \\cdot \\%A}{100 \\cdot M_A}$, $y = \\frac{M \\cdot \\%B}{100 \\cdot M_B}$. Chỉ 2 phép tính là ra ngay CTHH chính xác!",
        pitfalls: "Học sinh hay chia nhầm cho số khối lượng khác hoặc làm tròn số vội vàng khi bấm máy."
      },
      {
        name: "Buổi 2: Tìm CTHH khi CHƯA biết $M$ (Lập tỉ lệ nguyên tử)",
        guide: "Lập tỉ lệ $x : y : z = \\frac{\\%A}{M_A} : \\frac{\\%B}{M_B} : \\frac{\\%C}{M_C}$. Chia tất cả các số cho số nhỏ nhất trong 3 số đó để đưa về tỉ lệ số nguyên đơn giản nhất (Công thức đơn giản nhất).",
        pitfalls: "Khi ra tỉ lệ dạng $1 : 1,5$ hoặc $1 : 1,33$, học sinh hay làm tròn bừa thành $1:1$ (sai: phải nhân đôi thành $2:3$, hoặc nhân ba thành $3:4$!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Luyện 5 câu HSG: tìm CTHH của tinh thể khoáng vật, chất hữu cơ, hoặc hợp chất khi biết tỉ lệ khối lượng các nguyên tố.",
        pitfalls: "Quên kiểm tra tổng phần trăm có đủ $100\\%$ chưa (nếu đề chỉ cho 2 nguyên tố trong hợp chất 3 nguyên tố thì phần còn lại là nguyên tố thứ 3!)."
      }
    ]
  },
  lecture: [
    {
      title: "Dạng 1: Tìm CTHH khi biết % khối lượng và Phân tử khối $M$",
      content: `
        <p>Đặt công thức hợp chất là $A_x B_y C_z$ có phân tử khối $M$. Ta tính trực tiếp số nguyên tử $x, y, z$:</p>
        <p style="text-align:center;">$$x = \\frac{M \\times \\%A}{100 \\times M_A}; \\quad y = \\frac{M \\times \\%B}{100 \\times M_B}; \\quad z = \\frac{M \\times \\%C}{100 \\times M_C}$$</p>
      `,
      example: "Hợp chất X gồm $40\\%$ Ca, $12\\%$ C và $48\\%$ O theo khối lượng, có phân tử khối là $100\\text{ amu}$. Tìm CTHH của X.<br/><em>Giải:</em> $x = \\frac{100 \\times 40}{100 \\times 40} = 1$; $y = \\frac{100 \\times 12}{100 \\times 12} = 1$; $z = \\frac{100 \\times 48}{100 \\times 16} = 3$. Vậy CTHH là $\\ce{CaCO3}$.",
      checkpoint: {
        question: "Hợp chất Y gồm $50\\%$ S và $50\\%$ O về khối lượng, có $M_Y = 64\\text{ amu}$. CTHH của Y là:",
        options: ["$\\ce{SO}$", "$\\ce{SO2}$", "$\\ce{SO3}$", "$\\ce{S2O3}$"],
        answer: 1,
        explanation: "$x = \\frac{64 \\times 50}{100 \\times 32} = 1$; $y = \\frac{64 \\times 50}{100 \\times 16} = 2 \\Rightarrow \\ce{SO2}$."
      }
    },
    {
      title: "Dạng 2: Tìm CTHH khi CHƯA biết Phân tử khối (Chuẩn HSG)",
      content: `
        <p>Ta lập tỉ lệ số nguyên tử theo công thức:</p>
        <p style="text-align:center;">$$x : y : z = \\frac{\\%A}{M_A} : \\frac{\\%B}{M_B} : \\frac{\\%C}{M_C}$$</p>
        <div style="text-align:center;margin:8px 0;">
          <svg viewBox="0 0 500 72" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="12" y="16" width="125" height="40" rx="6" fill="#eff6ff" stroke="#2563eb"/><text x="74" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">1. Chia % cho NTK</text>
            <text x="152" y="41" font-size="16" font-weight="bold" fill="#475569">→</text>
            <rect x="170" y="16" width="145" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="242" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">2. Chia cho số nhỏ nhất</text>
            <text x="330" y="41" font-size="16" font-weight="bold" fill="#475569">→</text>
            <rect x="348" y="16" width="140" height="40" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="418" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">3. Nhân về số nguyên</text>
          </svg>
        </div>
        <div class="callout warn">
          <strong>Mẹo xử lý số thập phân:</strong> Chia cả dãy tỉ lệ cho số nhỏ nhất. Nếu xuất hiện $1,5$ thì nhân tất cả với $2$; nếu xuất hiện $1,33$ hoặc $1,67$ thì nhân tất cả với $3$!
        </div>
      `,
      example: "Một oxide của sắt gồm $70\\%$ Fe và $30\\%$ O về khối lượng. Tìm CTHH của oxide đó.<br/><em>Giải:</em> Đặt công thức $\\ce{Fe_x O_y}$. Ta có $x : y = \\frac{70}{56} : \\frac{30}{16} = 1,25 : 1,875$. Chia cả 2 cho $1,25$ được $1 : 1,5$. Nhân đôi lên được $2 : 3$. Vậy CTHH là $\\ce{Fe2O3}$."
    }
  ],
  questions: [
    { id: "w16_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Hợp chất X gồm $80\\%$ Cu và $20\\%$ O, có phân tử khối $80\\text{ amu}$. Công thức hóa học của X là:",
      options: ["A. $\\ce{Cu2O}$", "B. $\\ce{CuO}$", "C. $\\ce{CuO2}$", "D. $\\ce{Cu2O3}$"],
      answer: 1, solution: "$x = (80 \\times 80)/(100 \\times 64) = 1$; $y = (80 \\times 20)/(100 \\times 16) = 1 \\Rightarrow \\ce{CuO}$." },
    { id: "w16_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí Y gồm $75\\%$ C và $25\\%$ H về khối lượng, có phân tử khối $16\\text{ amu}$. CTHH của Y là:",
      options: ["A. $\\ce{C2H2}$", "B. $\\ce{C2H4}$", "C. $\\ce{CH4}$", "D. $\\ce{C2H6}$"],
      answer: 2, solution: "$x = (16 \\times 75)/(100 \\times 12) = 1$; $y = (16 \\times 25)/(100 \\times 1) = 4 \\Rightarrow \\ce{CH4}$." },
    { id: "w16_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Tỉ lệ $x : y$ trong hợp chất $\\ce{C_x H_y}$ biết $x : y = 1 : 2,5$ tương ứng với cặp số nguyên tối giản nào?",
      options: ["A. $1 : 2$", "B. $2 : 5$", "C. $1 : 3$", "D. $3 : 5$"],
      answer: 1, solution: "Nhân cả 2 vế cho $2$ được $2 : 5$." },
    { id: "w16_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Một hợp chất chứa $2,04\\%$ H, $32,65\\%$ S và $65,31\\%$ O, có $M = 98\\text{ amu}$. CTHH của hợp chất là:",
      options: ["A. $\\ce{H2SO3}$", "B. $\\ce{H2SO4}$", "C. $\\ce{H2S2O7}$", "D. $\\ce{H2S}$"],
      answer: 1, solution: "$x \\approx 2, y = 1, z = 4 \\Rightarrow \\ce{H2SO4}$." },
    { id: "w16_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Oxide của Magnesium gồm $60\\%$ Mg và $40\\%$ O về khối lượng. Tỉ lệ nguyên tử $\\text{Mg} : \\text{O}$ là:",
      options: ["A. $1 : 1$", "B. $1 : 2$", "C. $2 : 1$", "D. $2 : 3$"],
      answer: 0, solution: "$60/24 : 40/16 = 2,5 : 2,5 = 1 : 1 \\Rightarrow \\ce{MgO}$." },
    { id: "w16_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Hợp chất gồm $40\\%$ S và $60\\%$ O về khối lượng, có $M = 80\\text{ amu}$. CTHH là:",
      options: ["A. $\\ce{SO}$", "B. $\\ce{SO2}$", "C. $\\ce{SO3}$", "D. $\\ce{S2O3}$"],
      answer: 2, solution: "$x = (80 \\times 40)/3200 = 1$; $y = (80 \\times 60)/1600 = 3 \\Rightarrow \\ce{SO3}$." },
    { id: "w16_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Một hợp chất khí có tỉ lệ khối lượng $m_{\\text{C}} : m_{\\text{O}} = 3 : 8$. Công thức đơn giản nhất của khí đó là:",
      options: ["A. $\\ce{CO}$", "B. $\\ce{CO2}$", "C. $\\ce{C2O3}$", "D. $\\ce{C3O8}$"],
      answer: 1, solution: "$x : y = 3/12 : 8/16 = 0,25 : 0,5 = 1 : 2 \\Rightarrow \\ce{CO2}$." },
    { id: "w16_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét phương pháp lập CTHH của hợp chất $A_x B_y$:",
      statements: [
        { text: "Tổng phần trăm khối lượng của các nguyên tố trong một hợp chất tinh khiết luôn bằng $100\\%$.", answer: true },
        { text: "Nếu $x : y = 1 : 1,333$ thì cặp số nguyên tối giản là $3 : 4$.", answer: true },
        { text: "Hai chất khác nhau có thể có cùng công thức đơn giản nhất (ví dụ $\\ce{C2H2}$ và $\\ce{C6H6}$ đều có tỉ lệ $1:1$).", answer: true },
        { text: "Tỉ lệ phần trăm khối lượng chính là tỉ lệ số nguyên tử trong phân tử.", answer: false }
      ],
      solution: "d) Sai: phải chia phần trăm khối lượng cho nguyên tử khối tương ứng mới ra tỉ lệ số nguyên tử." },
    { id: "w16_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hợp chất $\\ce{N_x O_y}$ có phân tử khối $44\\text{ amu}$, biết N chiếm $63,64\\%$ khối lượng. Tìm chỉ số $x$ của nguyên tử N.",
      answer: "2", tolerance: 0.1,
      solution: "$x = \\frac{44 \\times 63,64}{100 \\times 14} \\approx 2$ (Công thức $\\ce{N2O}$)." },
    { id: "w16_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hợp chất $\\ce{Fe_x O_y}$ có tỉ lệ khối lượng $m_{\\text{Fe}} : m_{\\text{O}} = 21 : 8$. Tìm tổng số nguyên tử ($x + y$) trong công thức đơn giản nhất.",
      answer: "7", tolerance: 0.1,
      solution: "$x : y = 21/56 : 8/16 = 0,375 : 0,5 = 3 : 4 \\Rightarrow \\ce{Fe3O4} \\Rightarrow x + y = 7$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w16_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một hợp chất A tạo bởi 2 nguyên tố là Nitrogen và Oxygen. Biết trong A, nguyên tố Oxygen chiếm $69,565\\%$ về khối lượng và $M_A = 46\\text{ amu}$. CTHH của A là:",
      options: ["A. $\\ce{NO}$", "B. $\\ce{N2O}$", "C. $\\ce{NO2}$", "D. $\\ce{N2O5}$"],
      answer: 2, solution: "$y = \\frac{46 \\times 69,565}{100 \\times 16} = 2$; $x = (46 - 32)/14 = 1 \\Rightarrow \\ce{NO2}$." },
    { id: "w16_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Đốt cháy hoàn toàn một hydrocarbon (chứa C và H) thu được hợp chất có $85,71\\%$ C và $14,29\\%$ H về khối lượng, biết phân tử khối bằng $28\\text{ amu}$. CTHH của chất đó là:",
      options: ["A. $\\ce{CH2}$", "B. $\\ce{C2H4}$", "C. $\\ce{C3H6}$", "D. $\\ce{C2H6}$"],
      answer: 1, solution: "$x = (28 \\times 85,71)/1200 = 2$; $y = (28 \\times 14,29)/100 = 4 \\Rightarrow \\ce{C2H4}$ (Ethylene)." },
    { id: "w16_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Một hợp chất X chứa 3 nguyên tố: $\\text{Na}$ ($43,4\\%$), $\\text{C}$ ($11,32\\%$) và phần còn lại là $\\text{O}$:",
      statements: [
        { text: "Phần trăm khối lượng của Oxygen trong X là $45,28\\%$.", answer: true },
        { text: "Tỉ lệ số nguyên tử $\\text{Na} : \\text{C} : \\text{O}$ là $2 : 1 : 3$.", answer: true },
        { text: "Công thức đơn giản nhất của X là $\\ce{Na2CO3}$.", answer: true },
        { text: "Phân tử khối tối thiểu của X là $83\\text{ amu}$.", answer: false }
      ],
      solution: "d) Sai: $M_{\\ce{Na2CO3}} = 46 + 12 + 48 = 106\\text{ amu}$." },
    { id: "w16_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một hợp chất có thành phần gồm $52,17\\%$ C, $13,04\\%$ H và $34,79\\%$ O về khối lượng. Biết phân tử khối của hợp chất là $46\\text{ amu}$. Tổng số nguyên tử có trong 1 phân tử hợp chất là bao nhiêu?",
      answer: "9", tolerance: 0.1,
      solution: "$x = (46 \\times 52,17)/1200 = 2$; $y = (46 \\times 13,04)/100 = 6$; $z = (46 \\times 34,79)/1600 = 1 \\Rightarrow \\ce{C2H6O}$ (Ethanol). Tổng $= 2 + 6 + 1 = 9$." },
    { id: "w16_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hợp chất khí $\\ce{X2O5}$ có phân tử khối nặng gấp $2,4545$ lần phân tử khí $\\ce{CO2}$ ($M = 44$). Tính khối lượng nguyên tử của X (amu).",
      answer: "14", tolerance: 0.2,
      solution: "$M = 2,4545 \\times 44 = 108\\text{ amu}$. $2M_X + 80 = 108 \\Rightarrow M_X = 14\\text{ amu}$ (Nitrogen, $\\ce{N2O5}$)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w16_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Phân tích một khoáng vật tự nhiên thấy chứa $34,62\\%$ Cu, $30,52\\%$ Fe và $34,86\\%$ S về khối lượng (biết $\\text{Cu}=64, \\text{Fe}=56, \\text{S}=32$). Hãy lập công thức hóa học đơn giản nhất của khoáng vật đó (quặng chalcopyrite).",
      solution: "Đặt công thức $\\ce{Cu_x Fe_y S_z}$. Lập tỉ lệ: $x : y : z = \\frac{34,62}{64} : \\frac{30,52}{56} : \\frac{34,86}{32} = 0,541 : 0,545 : 1,089$. Chia cả 3 số cho $0,541$ được $1 : 1 : 2$. Vậy công thức đơn giản nhất của quặng là $\\ce{CuFeS2}$.",
      rubric: [
        { step: "Lập đúng tỉ lệ chia cho nguyên tử khối ($0,541 : 0,545 : 1,089$)", points: 0.5 },
        { step: "Rút gọn ra tỉ lệ $1 : 1 : 2$ và kết luận $\\ce{CuFeS2}$", points: 0.5 }
      ] },
    { id: "w16_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Citric acid (có nhiều trong quả chanh) chứa 3 nguyên tố C, H, O với tỉ lệ khối lượng $m_{\\text{C}} : m_{\\text{H}} : m_{\\text{O}} = 9 : 1 : 14$. Biết phân tử khối của citric acid là $192\\text{ amu}$. Tìm công thức phân tử của citric acid.",
      solution: "Tỉ lệ số nguyên tử: $x : y : z = \\frac{9}{12} : \\frac{1}{1} : \\frac{14}{16} = 0,75 : 1 : 0,875$. Chia cho $0,75$ được $1 : 1,333 : 1,167$ — hoặc nhân tất cả với $8$: $0,75 \\times 8 : 1 \\times 8 : 0,875 \\times 8 = 6 : 8 : 7$. Vậy công thức đơn giản nhất là $(\\ce{C6H8O7})_n$. Do $(72 + 8 + 112)n = 192n = 192 \\Rightarrow n = 1$. Công thức phân tử là $\\ce{C6H8O7}$.",
      rubric: [
        { step: "Lập đúng tỉ lệ $x : y : z = 0,75 : 1 : 0,875 = 6 : 8 : 7$", points: 0.5 },
        { step: "Dùng $M = 192$ tìm đúng CTPT $\\ce{C6H8O7}$", points: 0.5 }
      ] },
    { id: "w16_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất A tạo bởi 2 nguyên tố là Lưu huỳnh (S) và Oxygen (O). Biết trong A, tỉ lệ $\\%m_{\\text{S}} : \\%m_{\\text{O}} = 2 : 3$. Xác định CTHH của A và cho biết hóa trị của S trong A.",
      solution: "Đặt công thức $\\ce{S_x O_y}$. Ta có $x : y = \\frac{2}{32} : \\frac{3}{16} = \\frac{1}{16} : \\frac{3}{16} = 1 : 3$. Vậy CTHH là $\\ce{SO3}$. Theo quy tắc hóa trị: $1 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{VI}$. S có hóa trị VI.",
      rubric: [
        { step: "Tìm đúng tỉ lệ $x : y = 1 : 3 \\Rightarrow \\ce{SO3}$", points: 0.5 },
        { step: "Xác định đúng hóa trị VI của S", points: 0.5 }
      ] },
    { id: "w16_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất X có công thức dạng $\\ce{M_x O_y}$ có phân tử khối là $160\\text{ amu}$, trong đó kim loại M chiếm $70\\%$ về khối lượng. Hãy xác định công thức hóa học của X.",
      solution: "Khối lượng của M trong 1 phân tử X $= 160 \\times 70\\% = 112\\text{ amu} \\Rightarrow x \\cdot M_M = 112$. Khối lượng O $= 160 - 112 = 48\\text{ amu} \\Rightarrow 16y = 48 \\Rightarrow y = 3$. Vậy công thức là $\\ce{M_x O_3}$. Với $x = 2 \\Rightarrow M_M = 56$ (Iron, Fe, hóa trị III, thỏa mãn!). CTHH là $\\ce{Fe2O3}$.",
      rubric: [
        { step: "Tìm đúng $y = 3$ và $x \\cdot M_M = 112$", points: 0.5 },
        { step: "Biện luận $x = 2 \\Rightarrow M_M = 56$ (Fe) và kết luận $\\ce{Fe2O3}$", points: 0.5 }
      ] },
    { id: "w16_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Thạch cao sống là muối calcium sulfate ngậm nước có công thức $\\ce{CaSO4.nH2O}$ ($\\text{Ca}=40, \\text{S}=32, \\text{O}=16, \\text{H}=1$). Biết phân tử khối của thạch cao sống là $172\\text{ amu}$. Tìm $n$ và tính phần trăm khối lượng nguyên tố Oxygen có trong thạch cao sống.",
      quickAnswer: "2",
      solution: "$M_{\\ce{CaSO4}} = 40 + 32 + 64 = 136\\text{ amu}$. Ta có $136 + 18n = 172 \\Rightarrow 18n = 36 \\Rightarrow n = 2$. Vậy công thức là $\\ce{CaSO4.2H2O}$. Trong 1 phân tử có $4 + 2 = 6$ nguyên tử O ($6 \\times 16 = 96\\text{ amu}$). Vậy $\\%\\text{O} = \\frac{96}{172} \\times 100\\% \\approx 55,81\\%$.",
      rubric: [
        { step: "Tìm đúng $n = 2$ ($\\ce{CaSO4.2H2O}$)", points: 0.5 },
        { step: "Tính đúng $\\%\\text{O} = 96/172 \\times 100\\% \\approx 55,81\\%$", points: 0.5 }
      ] }
  ]
};
