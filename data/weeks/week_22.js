window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[22] = {
  week: 22,
  title: "Mol, Khối lượng mol (M) & Chuyển đổi n – m – số hạt",
  objectives: [
    "Hiểu khái niệm Mol: Lượng chất có chứa $N_A = 6,022 \\times 10^{23}$ hạt vi mô (nguyên tử hoặc phân tử).",
    "Hiểu Khối lượng mol ($M$, đơn vị $\\text{g/mol}$) có giá trị số bằng khối lượng nguyên tử hoặc phân tử khối (amu).",
    "Vận dụng thành thạo công thức chuyển đổi $n = \\frac{m}{M}$, $m = n \\cdot M$, $M = \\frac{m}{n}$ và tính số hạt."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 22 (A4). Chuẩn bị sơ đồ tam giác công thức $m - n - M$.",
    sessions: [
      {
        name: "Buổi 1: Khái niệm Mol & Số Avogadro ($N_A = 6,022 \\times 10^{23}$)",
        guide: "Ví dụ đời thường: 1 tá = 12 cái; 1 trăm = 100 cái; trong Hóa học, hạt nguyên tử quá nhỏ nên dùng 1 mol = $6,022 \\times 10^{23}$ hạt.",
        pitfalls: "Học sinh hay nhầm số mol ($n$) với khối lượng ($m$) hoặc khối lượng mol ($M$)."
      },
      {
        name: "Buổi 2: Tam giác công thức $m = n \\cdot M$",
        guide: "Dạy mẹo 'che chữ' trên tam giác: Muốn tìm $m$ che $m$ còn $n \\cdot M$; muốn tìm $n$ che $n$ còn $m / M$; muốn tìm $M$ che $M$ còn $m / n$.",
        pitfalls: "Hay lấy sai $M$ của đơn chất khí (ví dụ tính số mol khí $\\ce{O2}$ lại chia cho $16$ thay vì $32$!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán HSG về Mol",
        guide: "Chú ý 5 câu HSG: tính số mol nguyên tử trong hỗn hợp nhiều chất, tìm CTHH từ khối lượng mol trung bình.",
        pitfalls: "Nhầm giữa 'số mol phân tử $\\ce{H2O}$' và 'tổng số mol nguyên tử có trong $\\ce{H2O}$' (gấp 3 lần!)."
      }
    ]
  },
  lecture: [
    {
      title: "Mol, Số Avogadro & Khối lượng mol ($M$)",
      content: `
        <ul>
          <li><strong>Mol ($n$):</strong> Là lượng chất có chứa $N_A = 6,022 \\times 10^{23}$ nguyên tử hoặc phân tử chất đó.</li>
          <li><strong>Khối lượng mol ($M$, đơn vị $\\text{g/mol}$):</strong> Là khối lượng tính bằng gam của $1\\text{ mol}$ chất đó. Giá trị của $M$ ($\\text{g/mol}$) bằng đúng nguyên tử khối/phân tử khối (amu). Ví dụ: $M_{\\ce{H2O}} = 18\\text{ g/mol}$, $M_{\\ce{O2}} = 32\\text{ g/mol}$.</li>
        </ul>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 380 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <polygon points="110,15 35,105 185,105" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
            <line x1="66" y1="68" x2="154" y2="68" stroke="#2563eb" stroke-width="1.8"/>
            <line x1="110" y1="68" x2="110" y2="105" stroke="#2563eb" stroke-width="1.8"/>
            <text x="110" y="54" font-size="16" font-weight="bold" text-anchor="middle" fill="#dc2626">m (g)</text>
            <text x="82" y="94" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e40af">n (mol)</text>
            <text x="142" y="94" font-size="14" font-weight="bold" text-anchor="middle" fill="#15803d">M</text>
            <text x="215" y="42" font-size="12" font-weight="bold" fill="#1e293b">• n = m / M</text>
            <text x="215" y="66" font-size="12" font-weight="bold" fill="#1e293b">• m = n × M</text>
            <text x="215" y="90" font-size="12" font-weight="bold" fill="#1e293b">• M = m / n</text>
          </svg>
        </div>
      `,
      checkpoint: {
        question: "Số mol của $9,8\\text{ g}$ Sulfuric acid ($\\ce{H2SO4}$, $M = 98\\text{ g/mol}$) là:",
        options: ["0,01 mol", "0,1 mol", "0,2 mol", "1,0 mol"],
        answer: 1,
        explanation: "$n = m / M = 9,8 / 98 = 0,1\\text{ mol}$."
      }
    },
    {
      title: "Phân biệt Số mol Phân tử & Số mol Nguyên tử (Chuẩn HSG)",
      content: `
        <div class="callout hsg">
          <strong>Lưu ý quan trọng:</strong> Trong $1\\text{ mol}$ phân tử $\\ce{H2SO4}$ có chứa:<br/>
          • $2\\text{ mol}$ nguyên tử H; &nbsp; $1\\text{ mol}$ nguyên tử S; &nbsp; $4\\text{ mol}$ nguyên tử O.<br/>
          Tổng số mol nguyên tử trong $1\\text{ mol}$ $\\ce{H2SO4}$ là $2 + 1 + 4 = 7\\text{ mol}$ nguyên tử!
        </div>
      `,
      example: "Tính khối lượng của $0,25\\text{ mol}$ $\\ce{CaCO3}$ ($M = 100$) và số mol nguyên tử O có trong lượng chất này.<br/><em>Giải:</em> $m_{\\ce{CaCO3}} = 0,25 \\times 100 = 25\\text{ g}$. Mỗi phân tử $\\ce{CaCO3}$ có 3 nguyên tử O $\\Rightarrow n_{\\text{O}} = 3 \\times 0,25 = 0,75\\text{ mol}$."
    }
  ],
  questions: [
    { id: "w22_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "1 mol chất bất kỳ chứa bao nhiêu hạt vi mô (nguyên tử hoặc phân tử)?",
      options: ["A. $6,022 \\times 10^{20}$", "B. $6,022 \\times 10^{22}$", "C. $6,022 \\times 10^{23}$", "D. $10^{24}$"],
      answer: 2, solution: "Số Avogadro $N_A = 6,022 \\times 10^{23}$." },
    { id: "w22_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Khối lượng mol ($M$) của khí Carbon dioxide ($\\ce{CO2}$) là:",
      options: ["A. $28\\text{ g/mol}$", "B. $44\\text{ g/mol}$", "C. $32\\text{ g/mol}$", "D. $16\\text{ g/mol}$"],
      answer: 1, solution: "$M_{\\ce{CO2}} = 12 + 2(16) = 44\\text{ g/mol}$." },
    { id: "w22_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Số mol của $11,2\\text{ g}$ kim loại Iron ($\\text{Fe} = 56$) là:",
      options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,5\\text{ mol}$", "D. $2,0\\text{ mol}$"],
      answer: 1, solution: "$n = 11,2 / 56 = 0,2\\text{ mol}$." },
    { id: "w22_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Khối lượng của $0,5\\text{ mol}$ phân tử nước ($\\ce{H2O}$, $M = 18$) là:",
      options: ["A. $9\\text{ g}$", "B. $18\\text{ g}$", "C. $36\\text{ g}$", "D. $4,5\\text{ g}$"],
      answer: 0, solution: "$m = 0,5 \\times 18 = 9\\text{ g}$." },
    { id: "w22_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Biết $0,25\\text{ mol}$ chất X có khối lượng là $10\\text{ g}$. Khối lượng mol của X là:",
      options: ["A. $25\\text{ g/mol}$", "B. $40\\text{ g/mol}$", "C. $2,5\\text{ g/mol}$", "D. $50\\text{ g/mol}$"],
      answer: 1, solution: "$M = m / n = 10 / 0,25 = 40\\text{ g/mol}$." },
    { id: "w22_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Số mol của $1,5055 \\times 10^{23}$ nguyên tử đồng (Cu) là:",
      options: ["A. $0,25\\text{ mol}$", "B. $0,5\\text{ mol}$", "C. $1,0\\text{ mol}$", "D. $2,5\\text{ mol}$"],
      answer: 0, solution: "$n = (1,5055 \\times 10^{23}) / (6,022 \\times 10^{23}) = 0,25\\text{ mol}$." },
    { id: "w22_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Lượng chất nào sau đây có số phân tử LỚN NHẤT?",
      options: ["A. $1\\text{ mol}\\ \\ce{H2}$", "B. $1\\text{ mol}\\ \\ce{O2}$", "C. $2\\text{ mol}\\ \\ce{CO2}$", "D. $0,5\\text{ mol}\\ \\ce{N2}$"],
      answer: 2, solution: "Số phân tử tỉ lệ thuận với số mol, $2\\text{ mol}$ lớn nhất." },
    { id: "w22_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "$1\\text{ mol}$ khí $\\ce{H2}$ và $1\\text{ mol}$ khí $\\ce{O2}$ có số phân tử bằng nhau.", answer: true },
        { text: "$1\\text{ mol}$ khí $\\ce{H2}$ và $1\\text{ mol}$ khí $\\ce{O2}$ có khối lượng bằng nhau.", answer: false },
        { text: "Khối lượng mol của $\\ce{NaCl}$ ($\\text{Na}=23, \\text{Cl}=35,5$) là $58,5\\text{ g/mol}$.", answer: true },
        { text: "$0,1\\text{ mol}$ $\\ce{CaCO3}$ nặng $10\\text{ g}$.", answer: true }
      ],
      solution: "b) Sai: $1\\text{ mol}\\ \\ce{H2}$ nặng $2\\text{ g}$, còn $1\\text{ mol}\\ \\ce{O2}$ nặng $32\\text{ g}$." },
    { id: "w22_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính số mol của $16\\text{ g}$ khí Oxygen ($\\ce{O2}$, $\\text{O}=16$).",
      answer: "0.5", tolerance: 0.02,
      solution: "$n_{\\ce{O2}} = 16 / 32 = 0,5\\text{ mol}$." },
    { id: "w22_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính khối lượng (gam) của $0,2\\text{ mol}$ muối Copper(II) sulfate ($\\ce{CuSO4}$, $\\text{Cu}=64, \\text{S}=32, \\text{O}=16$).",
      answer: "32", tolerance: 0.1,
      solution: "$M_{\\ce{CuSO4}} = 160\\text{ g/mol} \\Rightarrow m = 0,2 \\times 160 = 32\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w22_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong $0,5\\text{ mol}$ phân tử $\\ce{Al2(SO4)3}$ có chứa bao nhiêu mol nguyên tử Oxygen (O)?",
      options: ["A. $2\\text{ mol}$", "B. $4\\text{ mol}$", "C. $6\\text{ mol}$", "D. $12\\text{ mol}$"],
      answer: 2, solution: "1 phân tử $\\ce{Al2(SO4)3}$ có $3 \\times 4 = 12$ nguyên tử O $\\Rightarrow n_{\\text{O}} = 0,5 \\times 12 = 6\\text{ mol}$." },
    { id: "w22_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Lượng nào sau đây chứa nhiều nguyên tử Oxygen NHẤT?",
      options: ["A. $0,5\\text{ mol}\\ \\ce{O2}$", "B. $0,4\\text{ mol}\\ \\ce{O3}$", "C. $0,25\\text{ mol}\\ \\ce{H2SO4}$", "D. $1,0\\text{ mol}\\ \\ce{H2O}$"],
      answer: 1, solution: "A: $1,0\\text{ mol O}$; B: $0,4 \\times 3 = 1,2\\text{ mol O}$; C: $0,25 \\times 4 = 1,0\\text{ mol O}$; D: $1,0\\text{ mol O}$. Vậy B nhiều nhất ($1,2\\text{ mol}$)." },
    { id: "w22_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho $8\\text{ g}$ hỗn hợp X gồm $0,1\\text{ mol}$ khí $\\ce{O2}$ và $0,15\\text{ mol}$ khí $\\ce{CO2}$ (không, $3,2 + 6,6 = 9,8\\text{ g}$). Xét $9,8\\text{ g}$ hỗn hợp X gồm $0,1\\text{ mol}\\ \\ce{O2}$ và $0,15\\text{ mol}\\ \\ce{CO2}$:",
      statements: [
        { text: "Tổng số mol khí trong hỗn hợp X là $0,25\\text{ mol}$.", answer: true },
        { text: "Tổng số mol nguyên tử O trong X là $0,5\\text{ mol}$.", answer: true },
        { text: "Khối lượng của $\\ce{CO2}$ trong X là $6,6\\text{ g}$.", answer: true },
        { text: "Khối lượng mol trung bình của X là $44\\text{ g/mol}$.", answer: false }
      ],
      solution: "d) Sai: $\\overline{M}_X = 9,8 / 0,25 = 39,2\\text{ g/mol}$." },
    { id: "w22_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tính khối lượng (gam) của một hỗn hợp gồm $0,15\\text{ mol}$ $\\ce{Fe2O3}$ ($M=160$) và $0,25\\text{ mol}$ $\\ce{CuO}$ ($M=80$).",
      answer: "44", tolerance: 0.1,
      solution: "$m = 0,15 \\times 160 + 0,25 \\times 80 = 24 + 20 = 44\\text{ g}$." },
    { id: "w22_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Biết $0,2\\text{ mol}$ hợp chất $\\ce{XO2}$ nặng $12,8\\text{ g}$. Tính khối lượng nguyên tử của X (amu).",
      answer: "32", tolerance: 0.1,
      solution: "$M_{\\ce{XO2}} = 12,8 / 0,2 = 64 \\Rightarrow M_X = 64 - 32 = 32$ (Sulfur)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w22_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Phải lấy bao nhiêu gam $\\ce{Fe3O4}$ ($M=232$) để có số nguyên tử Iron (Fe) bằng với số nguyên tử Iron có trong $32\\text{ g}$ $\\ce{Fe2O3}$ ($M=160$)?",
      quickAnswer: "30.93",
      solution: "Số mol $\\ce{Fe2O3} = 32 / 160 = 0,2\\text{ mol} \\Rightarrow n_{\\text{Fe}} = 0,2 \\times 2 = 0,4\\text{ mol}$. Trong $\\ce{Fe3O4}$, số mol $\\ce{Fe3O4} = n_{\\text{Fe}} / 3 = 0,4 / 3\\text{ mol}$. Vậy $m_{\\ce{Fe3O4}} = \\frac{0,4}{3} \\times 232 \\approx 30,93\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $n_{\\text{Fe}} = 0,4\\text{ mol}$", points: 0.5 },
        { step: "Tính đúng $m_{\\ce{Fe3O4}} = \\frac{0,4}{3} \\times 232 \\approx 30,93\\text{ g}$", points: 0.5 }
      ] },
    { id: "w22_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hỗn hợp khí gồm $a$ mol $\\ce{CO}$ và $b$ mol $\\ce{CO2}$ có tổng khối lượng là $16\\text{ g}$ và tổng số mol là $0,4\\text{ mol}$. Tính $a, b$ và số mol nguyên tử Carbon có trong hỗn hợp.",
      solution: "Ta có hệ: $a + b = 0,4$ và $28a + 44b = 16$. Giải hệ: $28a + 44(0,4 - a) = 16 \\Rightarrow 17,6 - 16a = 16 \\Rightarrow a = 0,1\\text{ mol}$ ($\\ce{CO}$) và $b = 0,3\\text{ mol}$ ($\\ce{CO2}$). Tổng số mol nguyên tử C $= a + b = 0,4\\text{ mol}$.",
      rubric: [
        { step: "Lập đúng hệ phương trình $a + b = 0,4$ và $28a + 44b = 16$", points: 0.5 },
        { step: "Giải đúng $a = 0,1$, $b = 0,3$ và $n_{\\text{C}} = 0,4\\text{ mol}$", points: 0.5 }
      ] },
    { id: "w22_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một bình chứa $24\\text{ g}$ $\\ce{CuSO4}$ khan ($M=160$) và $27\\text{ g}$ nước ($M=18$). Tính tổng số phân tử có trong bình (viết theo $N_A$) và phần trăm số mol của $\\ce{CuSO4}$ trong hỗn hợp.",
      solution: "$n_{\\ce{CuSO4}} = 24 / 160 = 0,15\\text{ mol}$; $n_{\\ce{H2O}} = 27 / 18 = 1,5\\text{ mol}$. Tổng số mol $= 1,65\\text{ mol} \\Rightarrow$ Tổng số phân tử $= 1,65 N_A$. Phần trăm số mol $\\ce{CuSO4} = \\frac{0,15}{1,65} \\times 100\\% \\approx 9,09\\%$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{CuSO4}} = 0,15$ và $n_{\\ce{H2O}} = 1,5$", points: 0.5 },
        { step: "Tính đúng tổng $1,65 N_A$ phân tử và $\\%n_{\\ce{CuSO4}} \\approx 9,09\\%$", points: 0.5 }
      ] },
    { id: "w22_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $0,15\\text{ mol}$ một muối sulfate ngậm nước $\\ce{FeSO4.xH2O}$ có khối lượng là $41,7\\text{ g}$ ($\\text{Fe}=56, \\text{S}=32, \\text{O}=16, \\text{H}=1$). Tìm giá trị của $x$.",
      quickAnswer: "7",
      solution: "Khối lượng mol của tinh thể $= 41,7 / 0,15 = 278\\text{ g/mol}$. Ta có $M_{\\ce{FeSO4}} + 18x = 152 + 18x = 278 \\Rightarrow 18x = 126 \\Rightarrow x = 7$. Công thức là $\\ce{FeSO4.7H2O}$.",
      rubric: [
        { step: "Tính đúng $M = 41,7 / 0,15 = 278\\text{ g/mol}$", points: 0.5 },
        { step: "Giải đúng $x = 7$ ($\\ce{FeSO4.7H2O}$)", points: 0.5 }
      ] },
    { id: "w22_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại tinh bột có phân tử khối trung bình khoảng $162\\,000\\text{ amu}$ (gồm nhiều mắt xích $\\ce{C6H10O5}$ ghép lại, mỗi mắt xích nặng $162\\text{ amu}$). Tính số mắt xích trung bình trong 1 phân tử tinh bột đó và khối lượng của $0,01\\text{ mol}$ tinh bột.",
      solution: "Số mắt xích $n = 162\\,000 / 162 = 1000$ mắt xích. Khối lượng $0,01\\text{ mol}$ tinh bột $= 0,01 \\times 162\\,000 = 1620\\text{ g} = 1,62\\text{ kg}$.",
      rubric: [
        { step: "Tính đúng số mắt xích $= 1000$", points: 0.5 },
        { step: "Tính đúng khối lượng $0,01\\text{ mol} = 1620\\text{ g}$", points: 0.5 }
      ] }
  ]
};
