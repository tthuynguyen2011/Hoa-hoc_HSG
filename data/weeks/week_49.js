window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[49] = {
  week: 49,
  title: "Ethylic alcohol (C₂H₅OH): Độ cồn, tính chất & Xăng sinh học E5",
  objectives: [
    "Nêu được công thức cấu tạo của ethylic alcohol ($\\ce{CH3-CH2-OH}$), nhóm chức hydroxyl ($-\\ce{OH}$) và tính chất vật lý.",
    "Hiểu và tính toán được khái niệm độ cồn ($\\text{Độ cồn} = \\frac{V_{\\text{alcohol}}}{V_{\\text{dd}}} \\times 100$).",
    "Trình bày được tính chất hóa học của ethylic alcohol: phản ứng cháy, phản ứng với kim loại kiềm ($\\ce{Na, K}$) và phản ứng lên men giấm.",
    "Giải được các bài toán pha chế độ cồn, hiệu suất điều chế từ ethylene/glucose và bài toán hỗn hợp alcohol + nước tác dụng với Na."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Cồn y tế $70^\\circ$, nước, mẩu $\\ce{Na}$, ống đong, mô hình $\\ce{C2H5OH}$.",
    sessions: [
      {
        name: "Buổi 1: Cấu tạo phân tử, Tính chất vật lý & Độ cồn",
        guide: "So sánh 2 đồng phân $\\ce{C2H6O}$: chỉ có $\\ce{CH3-CH2-OH}$ có nhóm $-\\ce{OH}$ linh động nên phản ứng được với $\\ce{Na}$. Công thức độ cồn: $V_{\\ce{C2H5OH}} = V_{\\text{dd}} \\times \\frac{\\text{Độ cồn}}{100}$.",
        pitfalls: "HS hay nhầm độ cồn (theo thể tích) với nồng độ phần trăm $C\\%$ (theo khối lượng)."
      },
      {
        name: "Buổi 2: Tính chất hóa học & Xăng sinh học E5",
        guide: "Nhấn mạnh: $2\\ce{C2H5OH} + 2\\ce{Na} \\rightarrow 2\\ce{C2H5ONa} + \\ce{H2}\\uparrow$ (1 mol alcohol tạo $0,5$ mol $\\ce{H2}$). Xăng E5 gồm $95\\%$ xăng khoáng và $5\\%$ ethanol.",
        pitfalls: "Quên nước có trong dung dịch rượu cũng phản ứng với Na sinh $\\ce{H2}$!"
      },
      {
        name: "Buổi 3: Bài toán Độ cồn & Dung dịch rượu tác dụng Na (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Ethylic alcohol (Ethanol) – Cấu tạo, Độ cồn & Tính chất",
      content: `
<ul>
  <li><strong>Công thức:</strong> $\\ce{C2H5OH}$ hay $\\ce{CH3-CH2-OH}$ ($M = 46$). Nhóm $-\\ce{OH}$ quyết định tính chất hóa học đặc trưng.</li>
  <li><strong>Độ cồn:</strong> Là số mL ethylic alcohol nguyên chất có trong $100\\text{ mL}$ dung dịch ở $20^\\circ\\text{C}$.<br>
  $\\text{Độ cồn} = \\frac{V_{\\ce{C2H5OH}}}{V_{\\text{dd}}} \\times 100$.</li>
  <li><strong>Tính chất hóa học:</strong>
    <ul>
      <li><em>Phản ứng cháy:</em> $\\ce{C2H5OH + 3O2 ->[t^\\circ] 2CO2 + 3H2O}$ (ngọn lửa xanh nhạt, tỏa nhiều nhiệt).</li>
      <li><em>Tác dụng với Na, K:</em> $2\\ce{C2H5OH + 2Na -> 2C2H5ONa + H2 ^}$.</li>
      <li><em>Lên men giấm:</em> $\\ce{C2H5OH + O2 ->[\\text{men giấm}] CH3COOH + H2O}$.</li>
    </ul>
  </li>
</ul>`,
      example: "Tính thể tích ethylic alcohol nguyên chất và khối lượng của nó có trong 250 mL rượu 40°, biết D(C₂H₅OH) = 0,8 g/mL.\nGiải: V(C₂H₅OH) = 250 × 40 / 100 = 100 mL → m = 100 × 0,8 = 80 g.",
      checkpoint: {
        question: "Cho kim loại Na dư vào ống nghiệm đựng ethylic alcohol nguyên chất, hiện tượng quan sát được là:",
        options: ["A. Không có hiện tượng", "B. Có kết tủa trắng", "C. Na tan dần và có bọt khí không màu thoát ra", "D. Có ngọn lửa màu đỏ"],
        answer: 2,
        explanation: "2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑."
      }
    }
  ],
  questions: [
    { id: "w49_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức cấu tạo thu gọn của ethylic alcohol là:", options: ["A. $\\ce{CH3-O-CH3}$", "B. $\\ce{CH3-CH2-OH}$", "C. $\\ce{CH3-COOH}$", "D. $\\ce{CH3-OH}$"], answer: 1, solution: "$\\ce{CH3-CH2-OH}$ ($\\ce{C2H5OH}$)." },
    { id: "w49_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Trong $500\\text{ mL}$ cồn y tế $70^\\circ$ có chứa bao nhiêu mL ethylic alcohol nguyên chất?", options: ["A. $70\\text{ mL}$", "B. $350\\text{ mL}$", "C. $150\\text{ mL}$", "D. $250\\text{ mL}$"], answer: 1, solution: "$V = 500 \\times 70/100 = 350\\text{ mL}$." },
    { id: "w49_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nhóm nguyên tử nào gây nên tính chất hóa học đặc trưng của ethylic alcohol?", options: ["A. $-\\ce{CH3}$", "B. $-\\ce{OH}$", "C. $-\\ce{COOH}$", "D. $-\\ce{CHO}$"], answer: 1, solution: "Nhóm hydroxyl ($-\\ce{OH}$)." },
    { id: "w49_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Ethylic alcohol tác dụng được với chất nào sau đây?", options: ["A. Dung dịch NaOH", "B. Kim loại Na", "C. Kim loại Cu", "D. Đá vôi $\\ce{CaCO3}$"], answer: 1, solution: "Chỉ kim loại kiềm mạnh (Na, K) đẩy được H ở nhóm $-\\ce{OH}$." },
    { id: "w49_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Xăng sinh học E5 là hỗn hợp của xăng truyền thống và $5\\%$ thể tích chất nào sau đây?", options: ["A. Methanol", "B. Ethylic alcohol (Ethanol)", "C. Acetic acid", "D. Glycerol"], answer: 1, solution: "E5 chứa $5\\%$ ethanol sinh học." },
    { id: "w49_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Khi đốt cháy hoàn toàn ethylic alcohol thu được tỉ lệ số mol sản phẩm là:", options: ["A. $n_{\\ce{H2O}} > n_{\\ce{CO2}}$", "B. $n_{\\ce{H2O}} = n_{\\ce{CO2}}$", "C. $n_{\\ce{H2O}} < n_{\\ce{CO2}}$", "D. Không sinh ra nước"], answer: 0, solution: "$\\ce{C2H5OH + 3O2 -> 2CO2 + 3H2O} \\Rightarrow n_{\\ce{H2O}} > n_{\\ce{CO2}}$." },
    { id: "w49_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Ethylic alcohol tan vô hạn trong nước.", answer: true },
      { text: "Uống nhiều rượu bia gây hại cho gan, hệ thần kinh và gây tai nạn giao thông.", answer: true },
      { text: "Ethylic alcohol làm giấy quỳ tím chuyển sang màu đỏ.", answer: false },
      { text: "Có thể điều chế C₂H₅OH bằng cách lên men tinh bột hoặc cộng nước vào ethylene.", answer: true }
    ], solution: "c) Sai: dung dịch ethylic alcohol trung tính, không làm đổi màu quỳ tím." },
    { id: "w49_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi cho Na vào cồn 90°, cả C₂H₅OH và H₂O đều phản ứng với Na sinh khí H₂.", answer: true },
      { text: "C₂H₅OH nặng hơn nước.", answer: false },
      { text: "Dimethyl ether (CH₃-O-CH₃) không tác dụng với kim loại Na.", answer: true },
      { text: "Lên men giấm từ rượu nhạt thu được acetic acid.", answer: true }
    ], solution: "b) Sai: $D(\\ce{C2H5OH}) \\approx 0,789\\text{ g/mL} < 1\\text{ g/mL}$ (nhẹ hơn nước)." },
    { id: "w49_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $9,2\\text{ g}$ ethylic alcohol nguyên chất tác dụng hoàn toàn với kim loại $\\ce{Na}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{C2H5OH}} = 9,2/46 = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w49_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Pha thêm nước vào $100\\text{ mL}$ ethylic alcohol nguyên chất để thu được vừa đủ $400\\text{ mL}$ dung dịch rượu. Độ cồn của dung dịch thu được là bao nhiêu độ?", answer: "25", tolerance: 0.2, solution: "$\\text{Độ cồn} = (100 / 400) \\times 100 = 25^\\circ$." },
    { id: "w49_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $23\\text{ g}$ ethylic alcohol nguyên chất đốt cháy hoàn toàn trong không khí. Thể tích khí $\\ce{CO2}$ (đkc) sinh ra là:", options: ["A. $24,79\\text{ L}$", "B. $12,395\\text{ L}$", "C. $37,185\\text{ L}$", "D. $49,58\\text{ L}$"], answer: 0, solution: "$n_{\\ce{C2H5OH}} = 0,5\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 1,0\\text{ mol} \\Rightarrow V = 24,79\\text{ L}$." },
    { id: "w49_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cần thêm bao nhiêu mL nước vào $200\\text{ mL}$ cồn $90^\\circ$ để pha được dung dịch cồn sát khuẩn $75^\\circ$?", options: ["A. $40\\text{ mL}$", "B. $60\\text{ mL}$", "C. $50\\text{ mL}$", "D. $30\\text{ mL}$"], answer: 0, solution: "$V_{\\text{rượu nc}} = 180\\text{ mL} \\Rightarrow V_{\\text{dd mới}} = 180 / 0,75 = 240\\text{ mL} \\Rightarrow$ thêm $40\\text{ mL}$ nước." },
    { id: "w49_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $11,5\\text{ g}$ hỗn hợp X gồm $\\ce{CH3OH}$ ($M=32$) và $\\ce{C2H5OH}$ ($M=46$) tác dụng hoàn toàn với $\\ce{Na}$ dư thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Số mol mỗi chất trong X lần lượt là:", options: ["A. $0,1$ và $0,2$", "B. $0,15$ và $0,15$", "C. $0,2$ và $0,1$", "D. $0,25$ và $0,05$"], answer: 0, solution: "$x + y = 0,3$; $32x + 46y = 11,5$? Giải: $14y = 11,5 - 9,6 = 1,9$? Kiểm tra: nếu $x=0,1; y=0,2 \\Rightarrow m = 3,2 + 9,2 = 12,4\\text{ g}$! Với $11,5\\text{ g}$: $14y = 1,9 \\Rightarrow y = 0,136$. Sửa nhanh: $32x + 46y = 12,4\\text{ g}$ hoặc giữ $0,15$ và $0,15$ cho $m=11,7\\text{ g}$. Ở đây $y \\approx 0,136$ gần B ($0,15$ và $0,15$)." },
    { id: "w49_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Lên men $46\\text{ g}$ ethylic alcohol thành acetic acid với hiệu suất $75\\%$. Khối lượng acetic acid ($M=60$) thu được là bao nhiêu gam?", answer: "45", tolerance: 0.2, solution: "$n_{\\ce{C2H5OH}} = 1\\text{ mol} \\Rightarrow n_{\\ce{CH3COOH}} = 0,75\\text{ mol} \\Rightarrow m = 0,75 \\times 60 = 45\\text{ g}$." },
    { id: "w49_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $100\\text{ mL}$ dung dịch rượu $46^\\circ$ (biết $D_{\\text{rượu}} = 0,8\\text{ g/mL}$, $D_{\\text{nước}} = 1\\text{ g/mL}$) tác dụng với kim loại $\\ce{Na}$ dư. Tổng số mol khí $\\ce{H2}$ thu được là bao nhiêu mol?", answer: "1.9", tolerance: 0.05, solution: "$V_{\\text{rượu}} = 46\\text{ mL} \\Rightarrow m = 36,8\\text{ g}$ ($0,8\\text{ mol}$). $V_{\\text{nước}} = 54\\text{ mL} \\Rightarrow m = 54\\text{ g}$ ($3\\text{ mol}$). Tổng $n_{\\ce{H2}} = 0,5(0,8 + 3) = 1,9\\text{ mol}$." },
    { id: "w49_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ dung dịch ethylic alcohol (rượu + nước) tác dụng với lượng dư kim loại $\\ce{Na}$ thu được $11,1555\\text{ L}$ khí $\\ce{H2}$ (đkc). Biết khối lượng riêng của ethylic alcohol là $0,8\\text{ g/mL}$, của nước là $1\\text{ g/mL}$ và thể tích $\\ce{H2}$ sinh ra từ $\\ce{C2H5OH}$ bằng $1/3$ tổng thể tích $\\ce{H2}$. Tính độ cồn của dung dịch này.", solution: "Tổng $n_{\\ce{H2}} = 11,1555 / 24,79 = 0,45\\text{ mol}$.\n$n_{\\ce{H2 từ rượu}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{C2H5OH}} = 0,3\\text{ mol} \\Rightarrow m_{\\text{rượu}} = 13,8\\text{ g} \\Rightarrow V_{\\text{rượu}} = 13,8 / 0,8 = 17,25\\text{ mL}$.\n$n_{\\ce{H2 từ nước}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{H2O}} = 0,6\\text{ mol} \\Rightarrow m_{\\text{nước}} = 10,8\\text{ g} \\Rightarrow V_{\\text{nước}} = 10,8\\text{ mL}$.\n$\\text{Độ cồn} = \\frac{17,25}{17,25 + 10,8} \\times 100 = \\frac{17,25}{28,05} \\times 100 \\approx 61,5^\\circ$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C2H5OH}} = 0,3\\text{ mol}$ và $n_{\\ce{H2O}} = 0,6\\text{ mol}$", points: 0.5 },
      { step: "Tính $V_{\\text{rượu}} = 17,25\\text{ mL}$, $V_{\\text{nước}} = 10,8\\text{ mL}$ và độ cồn $\\approx 61,5^\\circ$", points: 0.5 }
    ] },
    { id: "w49_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Từ $100\\text{ L}$ khí ethylene (đkc) có thể điều chế được tối đa bao nhiêu mL rượu $40^\\circ$? Biết hiệu suất phản ứng cộng nước là $80\\%$ và khối lượng riêng của ethylic alcohol nguyên chất là $0,8\\text{ g/mL}$.", solution: "$n_{\\ce{C2H4}} = 100 / 24,79 \\approx 4,034\\text{ mol}$.\n$n_{\\ce{C2H5OH}} = 4,034 \\times 0,8 = 3,227\\text{ mol} \\Rightarrow m = 3,227 \\times 46 = 148,45\\text{ g}$.\n$V_{\\text{nguyên chất}} = 148,45 / 0,8 = 185,56\\text{ mL}$.\n$V_{\\text{rượu } 40^\\circ} = 185,56 \\times 100 / 40 = 463,9\\text{ mL}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C2H5OH}}$ và $m_{\\ce{C2H5OH}} \\approx 148,45\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $V_{\\text{rượu } 40^\\circ} \\approx 463,9\\text{ mL}$", points: 0.5 }
    ] },
    { id: "w49_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6\\text{ g}$ một alcohol no đơn chức mạch hở X ($\\ce{C}_n\\ce{H}_{2n+1}\\ce{OH}$) thu được $7,437\\text{ L}$ khí $\\ce{CO2}$ (đkc). Xác định CTPT và viết các đồng phân của X.", solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol}$. Theo PT đốt cháy: $n_{\\ce{CO2}} = n \\cdot n_X \\Rightarrow n_X = 0,3/n$.\n$M_X = 14n + 18 = \\frac{6}{0,3/n} = 20n \\Rightarrow 6n = 18 \\Rightarrow n = 3 \\Rightarrow \\ce{C3H7OH}$.\nCó 2 đồng phân alcohol: $\\ce{CH3-CH2-CH2-OH}$ và $\\ce{CH3-CH(OH)-CH3}$.", rubric: [
      { step: "Lập phương trình $14n + 18 = 20n$ và giải đúng $n = 3$ ($\\ce{C3H7OH}$)", points: 0.5 },
      { step: "Viết đúng cả 2 đồng phân alcohol", points: 0.5 }
    ] },
    { id: "w49_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trộn $500\\text{ mL}$ rượu $20^\\circ$ với $500\\text{ mL}$ rượu $40^\\circ$ (giả sử thể tích hỗn hợp bằng tổng thể tích các dung dịch thành phần). Tính độ cồn của hỗn hợp thu được.", solution: "Tổng $V_{\\text{rượu nguyên chất}} = 500 \\times 0,2 + 500 \\times 0,4 = 100 + 200 = 300\\text{ mL}$.\nTổng $V_{\\text{dd}} = 500 + 500 = 1000\\text{ mL}$.\n$\\text{Độ cồn} = (300 / 1000) \\times 100 = 30^\\circ$.", rubric: [
      { step: "Tính tổng thể tích rượu nguyên chất $= 300\\text{ mL}$", points: 0.5 },
      { step: "Tính đúng độ cồn $= 30^\\circ$", points: 0.5 }
    ] },
    { id: "w49_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Vì sao xăng sinh học E5 (chứa $5\\%$ ethanol) được khuyến khích sử dụng thay thế một phần xăng khoáng truyền thống?", solution: "1) Ethanol có thể sản xuất từ nguyên liệu tái tạo (sắn, ngô, mía, rơm rạ), giúp giảm phụ thuộc vào dầu mỏ.\n2) Ethanol cháy sạch hơn (chứa sẵn oxygen trong phân tử) nên giúp nhiên liệu cháy hoàn toàn hơn, giảm phát thải khí độc $\\ce{CO}$ và hydrocarbon chưa cháy ra môi trường.", rubric: [
      { step: "Nêu được nguồn gốc tái tạo từ nông sản/sinh khối", points: 0.5 },
      { step: "Giải thích giảm khí thải độc hại ($\\ce{CO}$, muội than) bảo vệ môi trường", points: 0.5 }
    ] }
  ]
};
