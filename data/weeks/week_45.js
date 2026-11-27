window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[45] = {
  week: 45,
  title: "Đại cương Hóa học hữu cơ: Liên kết, CTPT, CTCT & Đồng phân",
  objectives: [
    "Nêu được khái niệm hợp chất hữu cơ, phân biệt được hợp chất hữu cơ và hợp chất vô cơ; phân loại thành hydrocarbon và dẫn xuất hydrocarbon.",
    "Trình bày được thuyết cấu tạo hóa học: hóa trị trong hợp chất hữu cơ (C hóa trị IV, H hóa trị I, O hóa trị II, N hóa trị III), mạch carbon và khái niệm đồng phân.",
    "Viết được công thức cấu tạo đầy đủ và thu gọn của các hợp chất đơn giản ($\\ce{C4H10}$, $\\ce{C2H6O}$, $\\ce{C3H8O}$).",
    "Giải được bài toán xác định công thức phân tử (CTPT) từ phần trăm khối lượng nguyên tố và từ phản ứng đốt cháy."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bộ mô hình lắp ghép phân tử (bi cầu C đen, H trắng, O đỏ).",
    sessions: [
      {
        name: "Buổi 1: Hợp chất hữu cơ & Phân loại",
        guide: "Nhấn mạnh: Hợp chất hữu cơ là hợp chất của Carbon (TRỪ $\\ce{CO, CO2, H2CO3}$, muối carbonate, cyanide, carbide). Chia làm 2 nhóm lớn: Hydrocarbon (chỉ gồm C, H) và Dẫn xuất hydrocarbon (có thêm O, N, Cl...).",
        pitfalls: "HS hay xếp $\\ce{CaCO3, CO2}$ vào hợp chất hữu cơ."
      },
      {
        name: "Buổi 2: Hóa trị, Mạch Carbon & Đồng phân",
        guide: "Cho HS thực hành viết đồng phân mạch hở (mạch thẳng, mạch nhánh) và đồng phân nhóm chức ($\\ce{C2H6O}$ có ethyl alcohol $\\ce{CH3-CH2-OH}$ và dimethyl ether $\\ce{CH3-O-CH3}$).",
        pitfalls: "Viết trùng đồng phân do bẻ góc mạch thẳng thành chữ L."
      },
      {
        name: "Buổi 3: Bài toán lập CTĐGN & CTPT (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Hợp chất hữu cơ & Cấu tạo phân tử",
      content: `
<ul>
  <li><strong>Hợp chất hữu cơ</strong> là hợp chất của carbon (trừ $\\ce{CO, CO2}$, muối carbonate, carbide...).</li>
  <li><strong>Phân loại:</strong>
    <ul>
      <li><em>Hydrocarbon:</em> Chỉ chứa C và H (ví dụ: $\\ce{CH4, C2H4, C6H6}$).</li>
      <li><em>Dẫn xuất của hydrocarbon:</em> Ngoài C, H còn có O, N, Cl... (ví dụ: $\\ce{C2H5OH, CH3COOH, CH3Cl}$).</li>
    </ul>
  </li>
  <li><strong>Hóa trị & Mạch carbon:</strong> Trong hợp chất hữu cơ, C luôn có hóa trị <strong>IV</strong>, H hóa trị <strong>I</strong>, O hóa trị <strong>II</strong>. Các nguyên tử C liên kết với nhau tạo mạch hở không nhánh, mạch nhánh hoặc mạch vòng.</li>
  <li><strong>Đồng phân:</strong> Những chất khác nhau nhưng có cùng công thức phân tử gọi là các chất đồng phân (ví dụ $\\ce{C2H6O}$ có 2 đồng phân là $\\ce{CH3-CH2-OH}$ và $\\ce{CH3-O-CH3}$).</li>
</ul>`,
      example: "Đốt cháy hoàn toàn 3 g chất hữu cơ X thu được 4,4 g CO₂ và 1,8 g H₂O. Biết M(X) = 60. Tìm CTPT của X.\nGiải: n(C) = n(CO₂) = 0,1 mol (1,2 g); n(H) = 2n(H₂O) = 0,2 mol (0,2 g).\nm(O trong X) = 3 - 1,2 - 0,2 = 1,6 g → n(O) = 0,1 mol.\nTỉ lệ C:H:O = 1:2:1 → CTĐGN: (CH₂O)ₙ = 60 → n = 2 → CTPT: C₂H₄O₂.",
      checkpoint: {
        question: "Dãy chất nào sau đây chỉ gồm các hợp chất hữu cơ?",
        options: ["A. CH₄, CO₂, C₂H₅OH", "B. CH₄, C₂H₄, CH₃COOH", "C. CaCO₃, C₆H₁₂O₆, CH₃Cl", "D. CO, C₂H₂, C₆H₆"],
        answer: 1,
        explanation: "CO₂, CaCO₃, CO là các hợp chất vô cơ."
      }
    }
  ],
  questions: [
    { id: "w45_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây là hợp chất VÔ CƠ?", options: ["A. $\\ce{CH4}$", "B. $\\ce{C2H5OH}$", "C. $\\ce{Na2CO3}$", "D. $\\ce{CH3COOH}$"], answer: 2, solution: "Muối carbonate $\\ce{Na2CO3}$ là hợp chất vô cơ." },
    { id: "w45_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây thuộc loại HYDROCARBON?", options: ["A. $\\ce{CH3Cl}$", "B. $\\ce{C2H6}$", "C. $\\ce{C2H5OH}$", "D. $\\ce{CH3COOH}$"], answer: 1, solution: "$\\ce{C2H6}$ chỉ chứa nguyên tố C và H." },
    { id: "w45_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Trong hợp chất hữu cơ, nguyên tố Carbon luôn có hóa trị bằng:", options: ["A. II", "B. III", "C. IV", "D. I"], answer: 2, solution: "Carbon luôn có hóa trị IV trong hợp chất hữu cơ." },
    { id: "w45_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Công thức phân tử $\\ce{C4H10}$ có bao nhiêu đồng phân cấu tạo mạch hở?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], answer: 1, solution: "Có 2 đồng phân: butane mạch thẳng và isobutane mạch nhánh." },
    { id: "w45_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cặp chất $\\ce{CH3-CH2-OH}$ và $\\ce{CH3-O-CH3}$ là:", options: ["A. Hai chất giống hệt nhau", "B. Hai chất đồng phân của nhau", "C. Hai hợp chất vô cơ", "D. Hai hydrocarbon"], answer: 1, solution: "Cùng CTPT $\\ce{C2H6O}$ nhưng khác CTCT nên là đồng phân." },
    { id: "w45_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Liên kết hóa học chủ yếu trong phân tử các hợp chất hữu cơ là:", options: ["A. Liên kết ion", "B. Liên kết cộng hóa trị", "C. Liên kết kim loại", "D. Liên kết hydrogen"], answer: 1, solution: "Hợp chất hữu cơ chủ yếu có liên kết cộng hóa trị." },
    { id: "w45_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Hợp chất hữu cơ nhất thiết phải chứa nguyên tố Carbon.", answer: true },
      { text: "Khí CO₂ là hợp chất hữu cơ vì có chứa Carbon.", answer: false },
      { text: "Hợp chất hữu cơ thường dễ bay hơi, dễ cháy và kém bền nhiệt hơn hợp chất vô cơ.", answer: true },
      { text: "Phản ứng hóa học của hợp chất hữu cơ thường xảy ra chậm và theo nhiều hướng.", answer: true }
    ], solution: "b) Sai: $\\ce{CO2}$ là hợp chất vô cơ." },
    { id: "w45_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "C₂H₅OH là dẫn xuất của hydrocarbon.", answer: true },
      { text: "CH₃-CH₂-CH₃ là mạch carbon phân nhánh.", answer: false },
      { text: "Các chất đồng phân có cùng công thức phân tử nhưng khác công thức cấu tạo.", answer: true },
      { text: "Công thức C₂H₄ có 1 liên kết đôi C=C.", answer: true }
    ], solution: "b) Sai: $\\ce{CH3-CH2-CH3}$ là mạch không nhánh." },
    { id: "w45_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Tính phân tử khối của hợp chất hữu cơ $\\ce{C2H5OH}$ (theo đơn vị amu).", answer: "46", tolerance: 0, solution: "$2\\times 12 + 6\\times 1 + 16 = 46$." },
    { id: "w45_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Trong phân tử $\\ce{CH3-CH=CH2}$ có bao nhiêu liên kết đơn C-H?", answer: "6", tolerance: 0, solution: "Có 6 nguyên tử H nên có 6 liên kết đơn C-H." },
    { id: "w45_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hợp chất hữu cơ X có phần trăm khối lượng: $40\\%$ C; $6,67\\%$ H; $53,33\\%$ O. Biết $M_X = 60$. Công thức phân tử của X là:", options: ["A. $\\ce{CH2O}$", "B. $\\ce{C2H4O2}$", "C. $\\ce{C3H6O}$", "D. $\\ce{C2H6O2}$"], answer: 1, solution: "$n_{\\text{C}} : n_{\\text{H}} : n_{\\text{O}} = \\frac{40}{12} : \\frac{6,67}{1} : \\frac{53,33}{16} = 1 : 2 : 1 \\Rightarrow (\\ce{CH2O})_n = 60 \\Rightarrow \\ce{C2H4O2}$." },
    { id: "w45_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Công thức cấu tạo nào sau đây viết SAI hóa trị của các nguyên tố?", options: ["A. $\\ce{CH3-CH2-OH}$", "B. $\\ce{CH2=CH-CH3}$", "C. $\\ce{CH3-CH3-OH}$", "D. $\\ce{H-C#C-H}$"], answer: 2, solution: "C ở giữa trong C không thể có hóa trị V ($\\ce{-CH3-}$)." },
    { id: "w45_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một hydrocarbon X thu được $0,3\\text{ mol}$ $\\ce{CO2}$ và $0,4\\text{ mol}$ $\\ce{H2O}$. Công thức phân tử của X là:", options: ["A. $\\ce{C3H6}$", "B. $\\ce{C3H8}$", "C. $\\ce{C3H4}$", "D. $\\ce{C2H6}$"], answer: 1, solution: "Số C $= 0,3/0,1 = 3$; Số H $= (2\\times 0,4)/0,1 = 8 \\Rightarrow \\ce{C3H8}$." },
    { id: "w45_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Công thức phân tử $\\ce{C3H8O}$ có tổng cộng bao nhiêu đồng phân cấu tạo mạch hở (cả alcohol và ether)?", answer: "3", tolerance: 0, solution: "Gồm 2 alcohol ($\\ce{CH3-CH2-CH2-OH}$, $\\ce{CH3-CH(OH)-CH3}$) và 1 ether ($\\ce{CH3-O-C2H5}$)." },
    { id: "w45_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $4,6\\text{ g}$ chất hữu cơ X thu được $8,8\\text{ g}$ $\\ce{CO2}$ và $5,4\\text{ g}$ $\\ce{H2O}$. Khối lượng nguyên tố Oxygen có trong $4,6\\text{ g}$ X là bao nhiêu gam?", answer: "1.6", tolerance: 0.1, solution: "$m_{\\text{C}} = 0,2\\times 12 = 2,4\\text{ g}$; $m_{\\text{H}} = 0,3\\times 2 = 0,6\\text{ g} \\Rightarrow m_{\\text{O}} = 4,6 - 2,4 - 0,6 = 1,6\\text{ g}$." },
    { id: "w45_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6\\text{ g}$ một hợp chất hữu cơ A thu được $7,437\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $7,2\\text{ g}$ $\\ce{H2O}$. Biết tỉ khối hơi của A so với $\\ce{H2}$ là $30$. Xác định CTPT và viết các CTCT có thể có của A.", solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol}$ ($m_{\\text{C}} = 3,6\\text{ g}$); $n_{\\ce{H2O}} = 0,4\\text{ mol}$ ($m_{\\text{H}} = 0,8\\text{ g}$).\n$m_{\\text{O}} = 6 - 3,6 - 0,8 = 1,6\\text{ g} \\Rightarrow n_{\\text{O}} = 0,1\\text{ mol}$.\n$n_{\\text{C}} : n_{\\text{H}} : n_{\\text{O}} = 0,3 : 0,8 : 0,1 = 3 : 8 : 1$. $M_A = 60 \\Rightarrow$ CTPT: $\\ce{C3H8O}$.\n3 CTCT: $\\ce{CH3-CH2-CH2-OH}$, $\\ce{CH3-CH(OH)-CH3}$, $\\ce{CH3-O-C2H5}$.", rubric: [
      { step: "Tính đúng $n_{\\text{C}}, n_{\\text{H}}, n_{\\text{O}}$ và tìm CTPT $\\ce{C3H8O}$", points: 0.5 },
      { step: "Viết đúng đủ 3 CTCT của $\\ce{C3H8O}$", points: 0.5 }
    ] },
    { id: "w45_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Phân tích định lượng một hydrocarbon X thấy chứa $85,71\\%$ carbon về khối lượng. Biết $1\\text{ L}$ khí X (đkc) có khối lượng khoảng $1,694\\text{ g}$. Xác định CTPT của X.", solution: "$M_X \\approx 1,694 \\times 24,79 \\approx 42\\text{ g/mol}$.\nTrong $1\\text{ mol}$ X: $m_{\\text{C}} = 42 \\times 85,71\\% = 36\\text{ g} \\Rightarrow 3$ nguyên tử C.\n$m_{\\text{H}} = 42 - 36 = 6\\text{ g} \\Rightarrow 6$ nguyên tử H $\\Rightarrow$ CTPT: $\\ce{C3H6}$.", rubric: [
      { step: "Tính đúng $M_X \\approx 42$", points: 0.5 },
      { step: "Tính số C $= 3$, số H $= 6$ và kết luận $\\ce{C3H6}$", points: 0.5 }
    ] },
    { id: "w45_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Viết tất cả các công thức cấu tạo mạch hở ứng với công thức phân tử $\\ce{C3H6O}$ (chỉ xét các chất bền có chứa nhóm chức aldehyde, ketone hoặc nối đôi C=C).", solution: "1) $\\ce{CH3-CH2-CH=O}$ (Propanal - aldehyde)\n2) $\\ce{CH3-C(=O)-CH3}$ (Acetone - ketone)\n3) $\\ce{CH2=CH-CH2-OH}$ (Allyl alcohol)\n4) $\\ce{CH2=CH-O-CH3}$ (Methyl vinyl ether)", rubric: [
      { step: "Viết đúng 2 đồng phân $\\ce{C=O}$ (aldehyde và ketone)", points: 0.5 },
      { step: "Viết đúng 2 đồng phân có nối đôi $\\ce{C=C}$ (alcohol và ether)", points: 0.5 }
    ] },
    { id: "w45_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $2,2\\text{ g}$ một chất hữu cơ Y thu được sản phẩm chỉ gồm $\\ce{CO2}$ và $\\ce{H2O}$. Dẫn toàn bộ sản phẩm qua bình 1 đựng $\\ce{H2SO4}$ đặc thấy khối lượng bình 1 tăng $1,8\\text{ g}$; bình 2 đựng $\\ce{Ca(OH)2}$ dư thấy có $10\\text{ g}$ kết tủa. Xác định công thức đơn giản nhất của Y.", solution: "Bình 1 hấp thụ $\\ce{H2O}$: $m_{\\ce{H2O}} = 1,8\\text{ g} \\Rightarrow n_{\\ce{H2O}} = 0,1\\text{ mol} \\Rightarrow n_{\\text{H}} = 0,2\\text{ mol}$ ($0,2\\text{ g}$).\nBình 2 hấp thụ $\\ce{CO2}$: $n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 10/100 = 0,1\\text{ mol} \\Rightarrow n_{\\text{C}} = 0,1\\text{ mol}$ ($1,2\\text{ g}$).\n$m_{\\text{O}} = 2,2 - 1,2 - 0,2 = 0,8\\text{ g} \\Rightarrow n_{\\text{O}} = 0,05\\text{ mol}$.\nTỉ lệ C:H:O $= 0,1 : 0,2 : 0,05 = 2 : 4 : 1 \\Rightarrow$ CTĐGN là $\\ce{C2H4O}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{H2O}} = 0,1\\text{ mol}$ và $n_{\\ce{CO2}} = 0,1\\text{ mol}$", points: 0.5 },
      { step: "Tính $n_{\\text{O}} = 0,05\\text{ mol}$ và kết luận CTĐGN $\\ce{C2H4O}$", points: 0.5 }
    ] },
    { id: "w45_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho biết công thức $\\ce{C3H4}$ có bao nhiêu đồng phân mạch hở? Viết công thức cấu tạo của chúng.", solution: "Có 2 đồng phân mạch hở:\n1) $\\ce{CH#C-CH3}$ (Propyne - có 1 liên kết ba)\n2) $\\ce{CH2=C=CH2}$ (Propadiene - có 2 liên kết đôi)", rubric: [
      { step: "Nêu đúng có 2 đồng phân mạch hở", points: 0.25 },
      { step: "Viết đúng cả 2 CTCT", points: 0.75 }
    ] }
  ]
};
