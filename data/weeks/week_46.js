window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[46] = {
  week: 46,
  title: "Alkane (Methane & đồng đẳng): Cấu tạo, phản ứng thế, đốt cháy",
  objectives: [
    "Nêu được khái niệm alkane, công thức tổng quát $\\ce{C}_n\\ce{H}_{2n+2}$ ($n \\ge 1$) và gọi tên 4 alkane đầu dãy (methane, ethane, propane, butane).",
    "Trình bày được cấu tạo phân tử tứ diện của methane ($\\ce{CH4}$), tính chất vật lý và 2 phản ứng đặc trưng: phản ứng đốt cháy và phản ứng thế với $\\ce{Cl2}$ (ánh sáng).",
    "Nêu được ứng dụng của alkane làm nhiên liệu (khí thiên nhiên, gas LPG) và nguyên nhân nổ khí mỏ than.",
    "Giải được các bài toán đốt cháy alkane ($n_{\\ce{H2O}} - n_{\\ce{CO2}} = n_{\\text{alkane}}$) và tìm hỗn hợp 2 alkane kế tiếp."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mô hình tứ diện $\\ce{CH4}$, video thí nghiệm $\\ce{CH4 + Cl2}$ ngoài ánh sáng.",
    sessions: [
      {
        name: "Buổi 1: Alkane – Cấu tạo & Tính chất vật lý",
        guide: "Giới thiệu 4 alkane đầu dãy: $\\ce{CH4}$ (methane), $\\ce{C2H6}$ (ethane), $\\ce{C3H8}$ (propane), $\\ce{C4H10}$ (butane). Tất cả đều là hydrocarbon no (chỉ chứa liên kết đơn C-C và C-H).",
        pitfalls: "HS hay viết nhầm góc liên kết $\\ce{H-C-H}$ là $90^\\circ$ thay vì $109,5^\\circ$ (tứ diện đều)."
      },
      {
        name: "Buổi 2: Phản ứng cháy & Phản ứng thế Halogen",
        guide: "Nhấn mạnh phản ứng thế là phản ứng ĐẶC TRƯNG của alkane: $\\ce{CH4 + Cl2 ->[as] CH3Cl + HCl}$ (làm nhạt màu vàng lục $\\ce{Cl2}$ và làm quỳ tím ẩm hóa đỏ).",
        pitfalls: "HS hay nhầm $\\ce{CH4}$ làm mất màu dung dịch nước bromine như ethylene."
      },
      {
        name: "Buổi 3: Bài toán Đốt cháy Alkane & Đồng đẳng kế tiếp (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Alkane – Cấu tạo & Tính chất hóa học",
      content: `
<p><strong>Alkane</strong> là những hydrocarbon mạch hở, trong phân tử chỉ chứa các liên kết đơn. Công thức tổng quát: <strong>$\\ce{C}_n\\ce{H}_{2n+2}$</strong> ($n \\ge 1$).</p>
<ul>
  <li><strong>Phản ứng cháy (oxi hóa hoàn toàn):</strong> Tỏa nhiều nhiệt, luôn cho <strong>$n_{\\ce{H2O}} > n_{\\ce{CO2}}$</strong> và <strong>$n_{\\text{alkane}} = n_{\\ce{H2O}} - n_{\\ce{CO2}}$</strong>.<br>
  $\\ce{C}_n\\ce{H}_{2n+2} + \\frac{3n+1}{2}\\ce{O2} \\xrightarrow{t^\\circ} n\\ce{CO2} + (n+1)\\ce{H2O}$</li>
  <li><strong>Phản ứng thế với $\\ce{Cl2}$ (ánh sáng):</strong><br>
  $\\ce{CH4 + Cl2 ->[as] CH3Cl + HCl}$ (có thể thế tiếp tạo $\\ce{CH2Cl2, CHCl3, CCl4}$).</li>
  <li>Alkane <strong>KHÔNG</strong> làm mất màu dung dịch nước bromine ở điều kiện thường.</li>
</ul>`,
      example: "Đốt cháy hoàn toàn một alkane X thu được 0,3 mol CO₂ và 0,4 mol H₂O. Tìm CTPT của X.\nGiải: n(X) = n(H₂O) - n(CO₂) = 0,4 - 0,3 = 0,1 mol → số C = 0,3 / 0,1 = 3 → X là C₃H₈ (propane).",
      checkpoint: {
        question: "Phản ứng hóa học đặc trưng của methane (CH₄) và các alkane là:",
        options: ["A. Phản ứng cộng Br₂", "B. Phản ứng thế với Cl₂ (ánh sáng)", "C. Phản ứng trùng hợp", "D. Phản ứng tráng bạc"],
        answer: 1,
        explanation: "Alkane chỉ có liên kết đơn bền vững nên phản ứng đặc trưng là phản ứng thế."
      }
    }
  ],
  questions: [
    { id: "w46_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức tổng quát của dãy đồng đẳng alkane là:", options: ["A. $\\ce{C}_n\\ce{H}_{2n}$", "B. $\\ce{C}_n\\ce{H}_{2n+2}$ ($n \\ge 1$)", "C. $\\ce{C}_n\\ce{H}_{2n-2}$", "D. $\\ce{C}_n\\ce{H}_{2n-6}$"], answer: 1, solution: "Alkane có CTTQ $\\ce{C}_n\\ce{H}_{2n+2}$." },
    { id: "w46_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Tên gọi theo danh pháp IUPAC của chất $\\ce{C3H8}$ là:", options: ["A. Methane", "B. Ethane", "C. Propane", "D. Butane"], answer: 2, solution: "$n=3$ là Propane." },
    { id: "w46_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Trong phân tử methane ($\\ce{CH4}$), có bao nhiêu liên kết đơn C-H?", options: ["A. 2", "B. 3", "C. 4", "D. 1"], answer: 2, solution: "4 liên kết đơn C-H hướng về 4 đỉnh tứ diện đều." },
    { id: "w46_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào sau đây KHÔNG làm mất màu dung dịch nước bromine?", options: ["A. $\\ce{C2H4}$", "B. $\\ce{C2H2}$", "C. $\\ce{CH4}$", "D. $\\ce{SO2}$"], answer: 2, solution: "$\\ce{CH4}$ là alkane no nên không cộng $\\ce{Br2}$." },
    { id: "w46_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khi đốt cháy hoàn toàn bất kì alkane nào, tỉ lệ số mol sản phẩm luôn thỏa mãn:", options: ["A. $n_{\\ce{H2O}} > n_{\\ce{CO2}}$", "B. $n_{\\ce{H2O}} < n_{\\ce{CO2}}$", "C. $n_{\\ce{H2O}} = n_{\\ce{CO2}}$", "D. Không sinh ra $\\ce{H2O}$"], answer: 0, solution: "$n_{\\ce{H2O}} = (n+1)a > na = n_{\\ce{CO2}}$." },
    { id: "w46_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần chính của khí gas (LPG) dùng để đun nấu trong gia đình là:", options: ["A. Methane và Ethane", "B. Propane và Butane", "C. Ethylene và Acetylene", "D. Carbon monoxide và Hydrogen"], answer: 1, solution: "LPG chứa chủ yếu Propane ($\\ce{C3H8}$) và Butane ($\\ce{C4H10}$) hóa lỏng." },
    { id: "w46_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Methane nhẹ hơn không khí (d = 16/29) và rất ít tan trong nước.", answer: true },
      { text: "Ở điều kiện thường, 4 alkane đầu (từ C₁ đến C₄) đều là chất khí.", answer: true },
      { text: "Phản ứng của CH₄ với Cl₂ xảy ra dễ dàng ngay trong bóng tối.", answer: false },
      { text: "Hỗn hợp khí CH₄ và O₂ theo tỉ lệ thể tích 1 : 2 là hỗn hợp nổ mạnh.", answer: true }
    ], solution: "c) Sai: phản ứng thế $\\ce{CH4 + Cl2}$ cần ánh sáng khuếch tán." },
    { id: "w46_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Phản ứng cháy của alkane tỏa ra nhiệt lượng lớn.", answer: true },
      { text: "Khi thế hết H trong CH₄ bằng Cl thu được CCl₄.", answer: true },
      { text: "Methane có mùi trứng thối đặc trưng.", answer: false },
      { text: "Khí biogas sinh ra từ hầm ủ chất thải chăn nuôi chứa chủ yếu CH₄.", answer: true }
    ], solution: "c) Sai: $\\ce{CH4}$ không màu, không mùi." },
    { id: "w46_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ $\\ce{CH4}$ cần dùng tối thiểu bao nhiêu mol khí $\\ce{O2}$?", answer: "0.4", tolerance: 0.01, solution: "$\\ce{CH4 + 2O2 -> CO2 + 2H2O} \\Rightarrow n_{\\ce{O2}} = 0,4\\text{ mol}$." },
    { id: "w46_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ $\\ce{C3H8}$ thu được bao nhiêu gam $\\ce{CO2}$?", answer: "13.2", tolerance: 0.1, solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol} \\Rightarrow m = 0,3 \\times 44 = 13,2\\text{ g}$." },
    { id: "w46_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $2,479\\text{ L}$ khí $\\ce{CH4}$ (đkc). Thể tích không khí (đkc, chứa $20\\%$ $\\ce{O2}$ về thể tích) cần dùng là:", options: ["A. $4,958\\text{ L}$", "B. $24,79\\text{ L}$", "C. $12,395\\text{ L}$", "D. $49,58\\text{ L}$"], answer: 1, solution: "$V_{\\ce{O2}} = 2 V_{\\ce{CH4}} = 4,958\\text{ L} \\Rightarrow V_{\\text{kk}} = 5 \\times 4,958 = 24,79\\text{ L}$." },
    { id: "w46_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn một alkane X thu được $0,4\\text{ mol}$ $\\ce{CO2}$ và $0,5\\text{ mol}$ $\\ce{H2O}$. Công thức phân tử của X là:", options: ["A. $\\ce{C2H6}$", "B. $\\ce{C3H8}$", "C. $\\ce{C4H10}$", "D. $\\ce{C5H12}$"], answer: 2, solution: "$n_X = 0,5 - 0,4 = 0,1\\text{ mol} \\Rightarrow$ số C $= 0,4 / 0,1 = 4 \\Rightarrow \\ce{C4H10}$." },
    { id: "w46_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Để phân biệt 2 bình khí mất nhãn chứa $\\ce{CH4}$ và $\\ce{CO2}$, ta dùng thuốc thử đơn giản nhất là:", options: ["A. Que đóm đang cháy hoặc nước vôi trong", "B. Khí $\\ce{O2}$", "C. Nước cất", "D. Dung dịch NaCl"], answer: 0, solution: "$\\ce{CO2}$ làm đục nước vôi trong; $\\ce{CH4}$ không làm đục." },
    { id: "w46_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,5\\text{ mol}$ $\\ce{CH4}$ tác dụng với $0,5\\text{ mol}$ $\\ce{Cl2}$ ngoài ánh sáng (giả sử chỉ tạo sản phẩm thế một lần $\\ce{CH3Cl}$ với hiệu suất $80\\%$). Khối lượng $\\ce{CH3Cl}$ ($M=50,5$) thu được là bao nhiêu gam?", answer: "20.2", tolerance: 0.2, solution: "$n_{\\ce{CH3Cl}} = 0,5 \\times 0,8 = 0,4\\text{ mol} \\Rightarrow m = 0,4 \\times 50,5 = 20,2\\text{ g}$." },
    { id: "w46_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Một hỗn hợp khí gồm $0,1\\text{ mol}$ $\\ce{CH4}$ và $0,2\\text{ mol}$ $\\ce{C2H6}$. Đốt cháy hoàn toàn hỗn hợp trên thu được bao nhiêu gam nước ($\\ce{H2O}$)?", answer: "14.4", tolerance: 0.1, solution: "$n_{\\ce{H2O}} = 2(0,1) + 3(0,2) = 0,8\\text{ mol} \\Rightarrow m = 0,8 \\times 18 = 14,4\\text{ g}$." },
    { id: "w46_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $0,3\\text{ mol}$ hỗn hợp X gồm 2 alkane đồng đẳng kế tiếp thu được $18,5925\\text{ L}$ khí $\\ce{CO2}$ (đkc). Xác định công thức phân tử của 2 alkane và phần trăm số mol của mỗi chất trong X.", solution: "$n_{\\ce{CO2}} = 18,5925 / 24,79 = 0,75\\text{ mol}$. Số nguyên tử Carbon trung bình: $\\overline{n} = \\frac{0,75}{0,3} = 2,5$. Vì 2 alkane kế tiếp nhau nên 2 alkane là $\\ce{C2H6}$ (ethane) và $\\ce{C3H8}$ (propane). Giải hệ $x+y=0,3$ và $2x+3y=0,75 \\Rightarrow x = y = 0,15\\text{ mol}$ ($50\\%$ mỗi chất).", rubric: [
      { step: "Tính đúng $\\overline{n} = 2,5$", points: 0.5 },
      { step: "Biện luận đúng $\\ce{C2H6}$ ($50\\%$) và $\\ce{C3H8}$ ($50\\%$)", points: 0.5 }
    ] },
    { id: "w46_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho hỗn hợp khí gồm $\\ce{CH4}$ và $\\ce{Cl2}$ vào bình thủy tinh đậy nút kín rồi đưa ra ngoài ánh sáng khuếch tán. Nêu các hiện tượng quan sát được và giải thích (kèm PTHH).", solution: "1) Màu vàng lục của khí $\\ce{Cl2}$ nhạt dần rồi mất màu.\n2) Khi đặt quỳ tím ẩm vào miệng bình, quỳ tím hóa ĐỎ do có khí $\\ce{HCl}$ sinh ra tan vào nước tạo acid: $\\ce{CH4 + Cl2 ->[as] CH3Cl + HCl}$.", rubric: [
      { step: "Nêu đúng hiện tượng mất màu vàng lục $\\ce{Cl2}$ và quỳ tím ẩm hóa đỏ", points: 0.5 },
      { step: "Viết đúng PTHH $\\ce{CH4 + Cl2 ->[as] CH3Cl + HCl}$", points: 0.5 }
    ] },
    { id: "w46_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Khi thực hiện phản ứng thế 1 nguyên tử H bằng 1 nguyên tử Cl (tỉ lệ $1:1$, ánh sáng) đối với Isobutane $\\ce{CH3-CH(CH3)-CH3}$, thu được tối đa bao nhiêu sản phẩm thế monocloro ($\\ce{C4H9Cl}$) khác nhau? Viết CTCT của chúng.", solution: "Có 2 loại H khác nhau (9 H ở 3 nhóm $-\\ce{CH3}$ tương đương và 1 H ở nhóm $-\\ce{CH}-$ giữa) nên thu được tối đa 2 sản phẩm thế:\n1) $\\ce{CH3-CH(CH3)-CH2-Cl}$\n2) $\\ce{CH3-CCl(CH3)-CH3}$.", rubric: [
      { step: "Xác định đúng có 2 sản phẩm thế khác nhau", points: 0.5 },
      { step: "Viết đúng CTCT cả 2 sản phẩm", points: 0.5 }
    ] },
    { id: "w46_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $1,44\\text{ g}$ một alkane X thu được $2,479\\text{ L}$ khí $\\ce{CO2}$ (đkc). Xác định CTPT của X và viết tất cả các đồng phân mạch hở của X.", solution: "$n_{\\text{C}} = 0,1\\text{ mol}$ ($1,2\\text{ g}$); $m_{\\text{H}} = 1,44 - 1,2 = 0,24\\text{ g}$ ($0,24\\text{ mol}$). Tỉ lệ $0,1 : 0,24 = 5 : 12 \\Rightarrow$ CTPT: $\\ce{C5H12}$. Có 3 đồng phân: $\\ce{CH3-CH2-CH2-CH2-CH3}$, $\\ce{CH3-CH(CH3)-CH2-CH3}$ và $\\ce{C(CH3)4}$.", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C5H12}$", points: 0.5 },
      { step: "Viết đúng cả 3 đồng phân của $\\ce{C5H12}$", points: 0.5 }
    ] },
    { id: "w46_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Tại sao trong bình gas đun nấu (chứa Propane và Butane không mùi), nhà sản xuất luôn pha thêm một lượng nhỏ hợp chất lưu huỳnh có mùi hắc khó chịu?", solution: "Propane và Butane nguyên chất không màu, không mùi. Pha thêm chất tạo mùi đặc trưng giúp người dùng phát hiện ngay lập tức khi có sự cố rò rỉ gas, phòng tránh nguy cơ ngộ độc và cháy nổ.", rubric: [
      { step: "Nêu được gas tinh khiết không màu, không mùi", points: 0.5 },
      { step: "Giải thích chất tạo mùi giúp cảnh báo sớm rò rỉ tránh cháy nổ", points: 0.5 }
    ] }
  ]
};
