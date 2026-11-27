window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[52] = {
  week: 52,
  title: "Carbohydrate: Glucose, Saccharose, Tinh bột & Cellulose",
  objectives: [
    "Phân loại được carbohydrate thành monosaccharide (glucose), disaccharide (saccharose) và polysaccharide (tinh bột, cellulose).",
    "Trình bày được tính chất hóa học đặc trưng của glucose (tráng bạc, lên men rượu), saccharose (thủy phân), tinh bột (hồ tinh bột + iodine, thủy phân) và cellulose (thủy phân).",
    "Viết được PTHH của các phản ứng thủy phân, lên men và nhận biết được các dung dịch carbohydrate.",
    "Giải được các bài toán chuỗi chuyển hóa (cellulose/tinh bột → glucose → ethanol) có hiệu suất từng giai đoạn."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Dung dịch glucose, hồ tinh bột, dung dịch iodine, bông y tế, dung dịch $\\ce{AgNO3/NH3}$.",
    sessions: [
      {
        name: "Buổi 1: Glucose & Saccharose",
        guide: "Glucose ($\\ce{C6H12O6}$, $M=180$) có phản ứng tráng bạc (1 glucose : 2 Ag) và lên men rượu. Saccharose ($\\ce{C12H22O11}$, $M=342$) không tráng bạc nhưng thủy phân tạo glucose + fructose.",
        pitfalls: "HS hay nhầm saccharose tham gia phản ứng tráng bạc trực tiếp."
      },
      {
        name: "Buổi 2: Tinh bột & Cellulose",
        guide: "Đều có công thức $\\ce{(C6H10O5)}_n$ ($M_{\\text{mắt xích}} = 162$). Hồ tinh bột tạo màu xanh tím với $\\ce{I2}$.",
        pitfalls: "Nhầm tinh bột và cellulose là đồng phân của nhau."
      },
      {
        name: "Buổi 3: Bài toán Chuỗi hiệu suất & Tráng bạc (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Phân loại & Tính chất Carbohydrate",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="480" height="120" viewBox="0 0 480 120" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="240" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Phân loại Carbohydrate trong chương trình KHTN 9</text>
  <rect x="18" y="34" width="135" height="72" rx="8" fill="#fef3c7" stroke="#d97706"/>
  <text x="85" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Monosaccharide</text>
  <text x="85" y="72" font-family="sans-serif" font-size="12" fill="#78350f" text-anchor="middle">Glucose (C₆H₁₂O₆)</text>
  <text x="85" y="92" font-family="sans-serif" font-size="11" fill="#92400e" text-anchor="middle">M = 180 | Tráng bạc</text>

  <rect x="172" y="34" width="135" height="72" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="240" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Disaccharide</text>
  <text x="240" y="72" font-family="sans-serif" font-size="12" fill="#1e3a8a" text-anchor="middle">Saccharose (C₁₂H₂₂O₁₁)</text>
  <text x="240" y="92" font-family="sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">M = 342 | Thủy phân</text>

  <rect x="326" y="34" width="136" height="72" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="394" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Polysaccharide</text>
  <text x="394" y="72" font-family="sans-serif" font-size="11.5" fill="#14532d" text-anchor="middle">Tinh bột, Cellulose</text>
  <text x="394" y="92" font-family="sans-serif" font-size="11" fill="#166534" text-anchor="middle">(C₆H₁₀O₅)ₙ | Mₓ = 162</text>
</svg>
</div>
<ul>
  <li><strong>Glucose:</strong> Tráng bạc ($1\\text{ glucose} \\rightarrow 2\\ce{Ag}$) và lên men rượu ($\\ce{C6H12O6 ->[\\text{enzyme}] 2C2H5OH + 2CO2 ^}$).</li>
  <li><strong>Saccharose:</strong> Thủy phân ($\\ce{C12H22O11 + H2O ->[H+] C6H12O6 (glucose) + C6H12O6 (fructose)}$).</li>
  <li><strong>Tinh bột &amp; Cellulose:</strong> Thủy phân hoàn toàn tạo glucose. Hồ tinh bột tác dụng với dung dịch $\\ce{I2}$ tạo màu <strong>xanh tím</strong>.</li>
</ul>`,
      example: "Lên men 162 kg tinh bột thành ethylic alcohol với hiệu suất 80%. Tính khối lượng alcohol thu được.\nGiải: m(C₂H₅OH) = (162/162) × 2 × 46 × 0,8 = 73,6 kg.",
      checkpoint: {
        question: "Thuốc thử đặc trưng để nhận biết hồ tinh bột là:",
        options: ["A. Dung dịch AgNO₃/NH₃", "B. Dung dịch iodine (I₂)", "C. Dung dịch NaOH", "D. Quỳ tím"],
        answer: 1,
        explanation: "Hồ tinh bột tác dụng với I₂ tạo màu xanh tím đặc trưng."
      }
    }
  ],
  questions: [
    { id: "w52_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức phân tử của glucose là:", options: ["A. $\\ce{C12H22O11}$", "B. $\\ce{C6H12O6}$", "C. $\\ce{(C6H10O5)}_n$", "D. $\\ce{C2H5OH}$"], answer: 1, solution: "Glucose là $\\ce{C6H12O6}$." },
    { id: "w52_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây thuộc loại disaccharide?", options: ["A. Glucose", "B. Tinh bột", "C. Saccharose", "D. Cellulose"], answer: 2, solution: "Saccharose là disaccharide." },
    { id: "w52_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nhỏ vài giọt dung dịch iodine vào mặt cắt củ khoai lang thấy xuất hiện màu xanh tím vì trong khoai lang có chứa:", options: ["A. Glucose", "B. Saccharose", "C. Tinh bột", "D. Cellulose"], answer: 2, solution: "Tinh bột tạo màu xanh tím với $\\ce{I2}$." },
    { id: "w52_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây không tan trong nước nóng và là thành phần chính của sợi bông?", options: ["A. Tinh bột", "B. Cellulose", "C. Glucose", "D. Saccharose"], answer: 1, solution: "Bông chứa $\\sim 98\\%$ cellulose." },
    { id: "w52_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Sản phẩm cuối cùng khi thủy phân hoàn toàn tinh bột hoặc cellulose trong môi trường acid là:", options: ["A. Saccharose", "B. Ethanol", "C. Glucose", "D. Acetic acid"], answer: 2, solution: "Đều tạo glucose." },
    { id: "w52_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Trong công nghiệp tráng gương, tráng ruột phích, người ta dùng chất nào để khử $\\ce{AgNO3/NH3}$ thành bạc?", options: ["A. Saccharose", "B. Glucose", "C. Tinh bột", "D. Cellulose"], answer: 1, solution: "Glucose có phản ứng tráng bạc." },
    { id: "w52_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Saccharose không tráng bạc, nhưng sản phẩm thủy phân saccharose có thể tráng bạc.", answer: true },
      { text: "Tinh bột và cellulose là hai chất đồng phân của nhau.", answer: false },
      { text: "Trong máu người có chứa một lượng nhỏ glucose với nồng độ ổn định khoảng 0,1%.", answer: true },
      { text: "Khi lên men 1 mol glucose thu được 2 mol C₂H₅OH và 2 mol CO₂.", answer: true }
    ], solution: "b) Sai: hệ số $n$ khác nhau nên không phải đồng phân." },
    { id: "w52_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi nhai kĩ cơm, bánh mì thấy vị ngọt là do tinh bột bị enzyme amylase thủy phân một phần.", answer: true },
      { text: "Saccharose có nhiều trong cây mía và củ cải đường.", answer: true },
      { text: "Cellulose tan tốt trong nước nóng tạo hồ.", answer: false },
      { text: "Glucose có vị ngọt và tan tốt trong nước.", answer: true }
    ], solution: "c) Sai: cellulose không tan trong nước." },
    { id: "w52_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Phân tử khối của saccharose ($\\ce{C12H22O11}$) là bao nhiêu amu?", answer: "342", tolerance: 0, solution: "$12\\times 12 + 22 + 11\\times 16 = 342$." },
    { id: "w52_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $18\\text{ g}$ glucose tác dụng hoàn toàn với lượng dư dung dịch $\\ce{AgNO3/NH3}$ thu được bao nhiêu gam bạc ($\\ce{Ag}=108$)?", answer: "21.6", tolerance: 0.1, solution: "$n_{\\text{glucose}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Ag}} = 0,2\\text{ mol} \\Rightarrow m = 21,6\\text{ g}$." },
    { id: "w52_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $36\\text{ g}$ glucose lên men rượu với hiệu suất $75\\%$. Khối lượng ethylic alcohol thu được là:", options: ["A. $18,4\\text{ g}$", "B. $13,8\\text{ g}$", "C. $9,2\\text{ g}$", "D. $27,6\\text{ g}$"], answer: 1, solution: "$n_{\\text{glucose}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{C2H5OH}} = 2\\times 0,2\\times 0,75 = 0,3\\text{ mol} \\Rightarrow m = 13,8\\text{ g}$." },
    { id: "w52_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Để phân biệt 3 dung dịch không màu: glucose, hồ tinh bột và acetic acid, có thể dùng cặp thuốc thử nào?", options: ["A. Quỳ tím và dung dịch $\\ce{I2}$", "B. Dung dịch NaCl và nước", "C. Phenolphthalein và $\\ce{NaOH}$", "D. Kim loại Cu và nước"], answer: 0, solution: "Quỳ tím nhận acetic acid; $\\ce{I2}$ nhận hồ tinh bột; còn lại là glucose." },
    { id: "w52_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Thủy phân hoàn toàn $34,2\\text{ g}$ saccharose trong môi trường acid, trung hòa acid rồi cho toàn bộ sản phẩm tác dụng với lượng dư $\\ce{AgNO3/NH3}$. Khối lượng Ag thu được là:", options: ["A. $21,6\\text{ g}$", "B. $43,2\\text{ g}$", "C. $10,8\\text{ g}$", "D. $32,4\\text{ g}$"], answer: 1, solution: "$0,1\\text{ mol}$ saccharose $\\rightarrow 0,1$ glucose $+ 0,1$ fructose $\\rightarrow 0,4\\text{ mol}$ Ag $= 43,2\\text{ g}$." },
    { id: "w52_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Từ $1\\text{ tấn}$ tinh bột chứa $19\\%$ tạp chất trơ, sản xuất ethylic alcohol với hiệu suất $80\\%$. Khối lượng alcohol thu được là bao nhiêu kg?", answer: "368", tolerance: 1, solution: "$m_{\\text{tinh bột}} = 810\\text{ kg} \\Rightarrow n_{\\text{mắt xích}} = 5\\text{ kmol} \\Rightarrow m_{\\ce{C2H5OH}} = 5 \\times 92 \\times 0,8 = 368\\text{ kg}$." },
    { id: "w52_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $m\\text{ g}$ glucose tác dụng với $\\ce{AgNO3/NH3}$ dư thu được $10,8\\text{ g}$ Ag (hiệu suất $100\\%$). Giá trị của $m$ là bao nhiêu gam?", answer: "9", tolerance: 0.1, solution: "$n_{\\ce{Ag}} = 0,1\\text{ mol} \\Rightarrow n_{\\text{glucose}} = 0,05\\text{ mol} \\Rightarrow m = 9\\text{ g}$." },
    { id: "w52_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Lên men $m\\text{ g}$ glucose tạo ethylic alcohol với hiệu suất $80\\%$. Dẫn toàn bộ khí $\\ce{CO2}$ sinh ra hấp thụ hết vào dung dịch $\\ce{Ca(OH)2}$ dư thu được $40\\text{ g}$ kết tủa. Tính $m$.", solution: "$n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 0,4\\text{ mol} \\Rightarrow n_{\\text{glucose pư}} = 0,2\\text{ mol}$.\nVì $H = 80\\% \\Rightarrow n_{\\text{glucose bđ}} = 0,2 / 0,8 = 0,25\\text{ mol} \\Rightarrow m = 0,25 \\times 180 = 45\\text{ g}$.", rubric: [
      { step: "Tính $n_{\\ce{CO2}} = 0,4\\text{ mol}$ và $n_{\\text{glucose pư}} = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Chia hiệu suất $80\\%$ tính đúng $m = 45\\text{ g}$", points: 0.5 }
    ] },
    { id: "w52_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thủy phân $32,4\\text{ g}$ tinh bột với hiệu suất $75\\%$ thu được dung dịch X. Trung hòa acid rồi cho X tác dụng với lượng dư $\\ce{AgNO3/NH3}$ thu được $m\\text{ g}$ Ag. Tính $m$.", solution: "$n_{\\text{mắt xích}} = 32,4 / 162 = 0,2\\text{ mol} \\Rightarrow n_{\\text{glucose}} = 0,2 \\times 0,75 = 0,15\\text{ mol} \\Rightarrow n_{\\ce{Ag}} = 0,3\\text{ mol} \\Rightarrow m = 32,4\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\text{glucose}} = 0,15\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Ag}} = 32,4\\text{ g}$", points: 0.5 }
    ] },
    { id: "w52_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Từ $10\\text{ kg}$ gạo nếp chứa $81\\%$ tinh bột, nấu rượu với hiệu suất thủy phân $80\\%$ và hiệu suất lên men $75\\%$. Tính thể tích rượu $40^\\circ$ thu được ($D_{\\text{rượu}} = 0,8\\text{ g/mL}$).", solution: "$n_{\\text{mắt xích}} = 8100/162 = 50\\text{ mol} \\Rightarrow n_{\\ce{C2H5OH}} = 50 \\times 2 \\times 0,8 \\times 0,75 = 60\\text{ mol}$.\n$m = 2760\\text{ g} \\Rightarrow V_{\\text{nc}} = 3,45\\text{ L} \\Rightarrow V_{40^\\circ} = 3,45 / 0,4 = 8,625\\text{ L}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C2H5OH}} = 60\\text{ mol}$ ($2760\\text{ g}$)", points: 0.5 },
      { step: "Tính đúng $V_{40^\\circ} = 8,625\\text{ L}$", points: 0.5 }
    ] },
    { id: "w52_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho hỗn hợp glucose và saccharose tác dụng với $\\ce{AgNO3/NH3}$ dư thu được $21,6\\text{ g}$ Ag. Nếu thủy phân hoàn toàn lượng hỗn hợp trên rồi mới tráng bạc thì thu được $64,8\\text{ g}$ Ag. Tính khối lượng mỗi chất ban đầu.", solution: "TN1: $n_{\\text{glucose}} = 0,2 / 2 = 0,1\\text{ mol}$ ($18\\text{ g}$).\nTN2: $n_{\\ce{Ag tổng}} = 0,6\\text{ mol} \\Rightarrow n_{\\ce{Ag từ saccharose}} = 0,4\\text{ mol} \\Rightarrow n_{\\text{saccharose}} = 0,1\\text{ mol}$ ($34,2\\text{ g}$).", rubric: [
      { step: "Tính đúng $m_{\\text{glucose}} = 18\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{saccharose}} = 34,2\\text{ g}$", points: 0.5 }
    ] },
    { id: "w52_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một cây xanh có diện tích lá $2\\text{ m}^2$ quang hợp tạo glucose ($6\\ce{CO2} + 6\\ce{H2O} \\rightarrow \\ce{C6H12O6} + 6\\ce{O2}$). Mỗi giờ, $1\\text{ m}^2$ lá tổng hợp được $0,9\\text{ g}$ glucose. Tính thể tích khí $\\ce{O2}$ (đkc) giải phóng sau $5\\text{ giờ}$.", solution: "$m_{\\text{glucose}} = 2 \\times 5 \\times 0,9 = 9\\text{ g}$ ($0,05\\text{ mol}$) $\\Rightarrow n_{\\ce{O2}} = 6 \\times 0,05 = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\times 24,79 = 7,437\\text{ L}$.", rubric: [
      { step: "Tính đúng $n_{\\text{glucose}} = 0,05\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $V_{\\ce{O2}} = 7,437\\text{ L}$", points: 0.5 }
    ] }
  ]
};
