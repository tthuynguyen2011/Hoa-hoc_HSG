window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[58] = {
  week: 58,
  title: "CĐ 2B: Bài toán Khí CO₂/SO₂ tác dụng với dung dịch Kiềm",
  objectives: [
    "Nắm vững phương pháp lập tỉ lệ $T = \\frac{n_{\\ce{OH-}}}{n_{\\ce{CO2}}}$ để xác định chính xác sản phẩm muối tạo thành ($\\ce{CO3^{2-}}$ và/hoặc $\\ce{HCO3-}$).",
    "Giải thành thạo bài toán ngược: biết khối lượng kết tủa $\\ce{CaCO3}$ hoặc $\\ce{BaCO3}$ và số mol kiềm $\\rightarrow$ tìm $V_{\\ce{CO2}}$ (xét đủ 2 trường hợp: kiềm dư hoặc kết tủa tan một phần).",
    "Vận dụng đồ thị biểu diễn số mol kết tủa theo số mol $\\ce{CO2}$ (hình tam giác cân / hình thang) để giải nhanh bài toán trắc nghiệm và tự luận HSG."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu chuyên đề CĐ 2B kèm đồ thị $\\ce{CO2} + \\ce{Ca(OH)2}$.",
    sessions: [
      {
        name: "Buổi 1: Bài toán thuận — Lập tỉ lệ T = n(OH⁻) / n(CO₂)",
        guide: "Nếu $T \\le 1$: chỉ tạo $\\ce{HCO3-}$; $1 < T < 2$: tạo cả 2 muối; $T \\ge 2$: chỉ tạo $\\ce{CO3^{2-}}$. Công thức giải nhanh khi tạo 2 muối: $n_{\\ce{CO3^{2-}}} = n_{\\ce{OH-}} - n_{\\ce{CO2}}$.",
        pitfalls: "Quên nhân 2 cho $n_{\\ce{OH-}}$ khi kiềm là $\\ce{Ca(OH)2}$ hoặc $\\ce{Ba(OH)2}$!"
      },
      {
        name: "Buổi 2: Bài toán ngược (2 nghiệm) & Đồ thị kết tủa",
        guide: "Khi $n_{\\text{kết tủa}} < n_{\\text{kiềm}}$, luôn có 2 giá trị $n_{\\ce{CO2}}$ thỏa mãn: (1) $n_{\\ce{CO2}} = n_{\\text{kt}}$ (kiềm dư); (2) $n_{\\ce{CO2}} = 2 n_{\\text{kiềm}} - n_{\\text{kt}}$ (kết tủa tan một phần).",
        pitfalls: "HS hay bỏ sót nghiệm thứ 2 (kết tủa bị hòa tan một phần)."
      },
      {
        name: "Buổi 3: Hỗn hợp kiềm NaOH + Ba(OH)₂ & Chuyên đề HSG"
      }
    ]
  },
  lecture: [
    {
      title: "1. Quy tắc Tỉ lệ T & Công thức giải nhanh CO₂ + Kiềm",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="460" height="125" viewBox="0 0 460 125" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="230" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Trục tỉ lệ T = n(OH⁻) / n(CO₂)</text>
  <line x1="40" y1="62" x2="420" y2="62" stroke="#334155" stroke-width="2.5"/>
  <circle cx="150" cy="62" r="5" fill="#dc2626"/>
  <circle cx="310" cy="62" r="5" fill="#2563eb"/>
  <text x="150" y="84" font-family="sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">T = 1</text>
  <text x="310" y="84" font-family="sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">T = 2</text>
  <text x="95" y="45" font-family="sans-serif" font-size="12" fill="#991b1b" text-anchor="middle">Chỉ tạo HCO₃⁻</text>
  <text x="230" y="45" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Cả HCO₃⁻ và CO₃²⁻</text>
  <text x="365" y="45" font-family="sans-serif" font-size="12" fill="#1e40af" text-anchor="middle">Chỉ tạo CO₃²⁻</text>
  <text x="230" y="108" font-family="sans-serif" font-size="11.5" fill="#166534" text-anchor="middle">Công thức giải nhanh (1 &lt; T &lt; 2): n(CO₃²⁻) = n(OH⁻) − n(CO₂)</text>
</svg>
</div>
<p><strong>Bài toán ngược (sục $\\ce{CO2}$ vào $a\\text{ mol}$ $\\ce{Ca(OH)2}$ hoặc $\\ce{Ba(OH)2}$ thu được $b\\text{ mol}$ kết tủa, với $b < a$):</strong></p>
<ul>
  <li>Trường hợp 1 (kiềm dư): $n_{\\ce{CO2}} = b$.</li>
  <li>Trường hợp 2 (kết tủa tan một phần): $n_{\\ce{CO2}} = 2a - b$.</li>
</ul>`,
      example: "Sục V lít khí CO₂ (đkc) vào 200 mL dung dịch Ca(OH)₂ 1M thu được 15 g kết tủa. Tính các giá trị của V.\nGiải: a = n(Ca(OH)₂) = 0,2 mol; b = n(CaCO₃) = 15/100 = 0,15 mol.\nTH1: n(CO₂) = 0,15 mol → V = 3,7185 L.\nTH2: n(CO₂) = 2×0,2 - 0,15 = 0,25 mol → V = 6,1975 L.",
      checkpoint: {
        question: "Hấp thụ hoàn toàn 0,25 mol CO₂ vào dung dịch chứa 0,4 mol NaOH. Số mol muối Na₂CO₃ thu được là:",
        options: ["A. 0,25 mol", "B. 0,15 mol", "C. 0,10 mol", "D. 0,20 mol"],
        answer: 1,
        explanation: "T = 0,4/0,25 = 1,6 (tạo 2 muối) → n(CO₃²⁻) = 0,4 - 0,25 = 0,15 mol."
      }
    }
  ],
  questions: [
    { id: "w58_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Hấp thụ $0,1\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,25\\text{ mol}$ $\\ce{NaOH}$. Muối thu được là:", options: ["A. Chỉ có $\\ce{Na2CO3}$", "B. Chỉ có $\\ce{NaHCO3}$", "C. Cả $\\ce{Na2CO3}$ và $\\ce{NaHCO3}$", "D. Không phản ứng"], answer: 0, solution: "$T = 0,25 / 0,1 = 2,5 > 2 \\Rightarrow$ chỉ tạo $\\ce{Na2CO3}$." },
    { id: "w58_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Hấp thụ $0,3\\text{ mol}$ $\\ce{SO2}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{KOH}$. Muối thu được là:", options: ["A. Chỉ có $\\ce{K2SO3}$", "B. Chỉ có $\\ce{KHSO3}$", "C. Cả $\\ce{K2SO3}$ và $\\ce{KHSO3}$", "D. $\\ce{K2SO4}$"], answer: 1, solution: "$T = 0,2 / 0,3 < 1 \\Rightarrow$ chỉ tạo $\\ce{KHSO3}$." },
    { id: "w58_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Sục $0,1\\text{ mol}$ $\\ce{CO2}$ vào $200\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $1\\text{ M}$. Khối lượng kết tủa $\\ce{CaCO3}$ thu được là:", options: ["A. $10\\text{ g}$", "B. $20\\text{ g}$", "C. $5\\text{ g}$", "D. $15\\text{ g}$"], answer: 0, solution: "$n_{\\ce{Ca(OH)2}} = 0,2\\text{ mol}$ (dư) $\\Rightarrow m_{\\ce{CaCO3}} = 0,1 \\times 100 = 10\\text{ g}$." },
    { id: "w58_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Để thu được kết tủa cực đại khi sục khí $\\ce{CO2}$ vào $0,2\\text{ mol}$ $\\ce{Ba(OH)2}$, cần dùng vừa đủ bao nhiêu mol $\\ce{CO2}$?", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,4\\text{ mol}$", "D. $0,3\\text{ mol}$"], answer: 1, solution: "$\\ce{Ba(OH)2 + CO2 -> BaCO3 v + H2O} \\Rightarrow 0,2\\text{ mol}$." },
    { id: "w58_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho dung dịch $\\ce{Ca(HCO3)2}$ tác dụng với dung dịch $\\ce{NaOH}$ dư, hiện tượng thu được là:", options: ["A. Không hiện tượng", "B. Có kết tủa trắng $\\ce{CaCO3}$", "C. Có khí thoát ra", "D. Dung dịch hóa xanh"], answer: 1, solution: "$\\ce{Ca(HCO3)2 + 2NaOH -> CaCO3 v + Na2CO3 + 2H2O}$." },
    { id: "w58_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Hấp thụ $0,2\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,3\\text{ mol}$ $\\ce{NaOH}$. Số mol $\\ce{NaHCO3}$ tạo thành là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,15\\text{ mol}$", "D. $0,05\\text{ mol}$"], answer: 0, solution: "$n_{\\ce{Na2CO3}} = 0,3 - 0,2 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{NaHCO3}} = 0,2 - 0,1 = 0,1\\text{ mol}$." },
    { id: "w58_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Sục CO₂ đến dư vào nước vôi trong thì kết tủa xuất hiện rồi tan hết thành dung dịch trong suốt.", answer: true },
      { text: "Đun nóng dung dịch Ca(HCO₃)₂ sẽ xuất hiện lại kết tủa trắng CaCO₃.", answer: true },
      { text: "Sục 0,15 mol CO₂ vào 0,1 mol Ca(OH)₂ thu được 0,15 mol CaCO₃.", answer: false },
      { text: "Khí SO₂ có tính chất tương tự CO₂ khi tác dụng với dung dịch kiềm.", answer: true }
    ], solution: "c) Sai: kết tủa chỉ còn $2(0,1) - 0,15 = 0,05\\text{ mol}$." },
    { id: "w58_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Dung dịch NaHCO₃ tác dụng được với cả dung dịch HCl và dung dịch NaOH.", answer: true },
      { text: "Dung dịch Na₂CO₃ không tác dụng với dung dịch CaCl₂.", answer: false },
      { text: "Để hấp thụ hết khí thải SO₂, có thể dùng dung dịch nước vôi trong dư.", answer: true },
      { text: "Khi T = n(OH⁻)/n(CO₂) = 1,5 thì số mol 2 muối CO₃²⁻ và HCO₃⁻ bằng nhau.", answer: true }
    ], solution: "b) Sai: tạo kết tủa $\\ce{CaCO3}$." },
    { id: "w58_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Hấp thụ hoàn toàn $0,3\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,5\\text{ mol}$ $\\ce{NaOH}$. Số mol $\\ce{Na2CO3}$ thu được là bao nhiêu mol?", answer: "0.2", tolerance: 0.01, solution: "$n_{\\ce{CO3^{2-}}} = 0,5 - 0,3 = 0,2\\text{ mol}$." },
    { id: "w58_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Sục $0,25\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,15\\text{ mol}$ $\\ce{Ba(OH)2}$. Khối lượng kết tủa $\\ce{BaCO3}$ ($M=197$) thu được là bao nhiêu gam?", answer: "9.85", tolerance: 0.1, solution: "$n_{\\ce{BaCO3}} = 2(0,15) - 0,25 = 0,05\\text{ mol} \\Rightarrow m = 0,05 \\times 197 = 9,85\\text{ g}$." },
    { id: "w58_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hấp thụ hoàn toàn $V\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $200\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $1\\text{ M}$ thu được $10\\text{ g}$ kết tủa. Giá trị LỚN NHẤT của $V$ là:", options: ["A. $2,479\\text{ L}$", "B. $4,958\\text{ L}$", "C. $7,437\\text{ L}$", "D. $6,1975\\text{ L}$"], answer: 2, solution: "$n_{\\ce{CO2 max}} = 2(0,2) - 0,1 = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\times 24,79 = 7,437\\text{ L}$." },
    { id: "w58_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Sục $0,3\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{NaOH}$ và $0,15\\text{ mol}$ $\\ce{Ba(OH)2}$. Khối lượng kết tủa $\\ce{BaCO3}$ thu được là:", options: ["A. $29,55\\text{ g}$", "B. $19,7\\text{ g}$", "C. $39,4\\text{ g}$", "D. $9,85\\text{ g}$"], answer: 0, solution: "Tổng $n_{\\ce{OH-}} = 0,2 + 2\\times 0,15 = 0,5\\text{ mol} \\Rightarrow n_{\\ce{CO3^{2-}}} = 0,5 - 0,3 = 0,2\\text{ mol} > n_{\\ce{Ba^{2+}}} = 0,15\\text{ mol} \\Rightarrow$ kết tủa tính theo $\\ce{Ba^{2+}}$: $0,15 \\times 197 = 29,55\\text{ g}$." },
    { id: "w58_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Sục $0,2\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,1\\text{ mol}$ $\\ce{Ca(OH)2}$, lọc bỏ kết tủa rồi đun nóng nước lọc lại thu thêm bao nhiêu gam kết tủa nữa?", options: ["A. $10\\text{ g}$", "B. $5\\text{ g}$", "C. $20\\text{ g}$", "D. $0\\text{ g}$"], answer: 0, solution: "$n_{\\ce{CO2}} = 2 n_{\\ce{Ca(OH)2}} \\Rightarrow$ kết tủa tan hết thành $0,1\\text{ mol}$ $\\ce{Ca(HCO3)2}$. Đun nóng tạo $0,1\\text{ mol}$ $\\ce{CaCO3} = 10\\text{ g}$." },
    { id: "w58_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Hấp thụ $0,15\\text{ mol}$ $\\ce{SO2}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{NaOH}$. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam muối khan?", answer: "11.5", tolerance: 0.2, solution: "$n_{\\ce{Na2SO3}} = 0,2 - 0,15 = 0,05\\text{ mol}$ ($6,3\\text{ g}$); $n_{\\ce{NaHSO3}} = 0,15 - 0,05 = 0,1\\text{ mol}$ ($10,4\\text{ g}$) $\\Rightarrow 16,7\\text{ g}$! (Kiểm tra: $0,05\\times 126 + 0,1\\times 104 = 6,3 + 10,4 = 16,7\\text{ g}$)." },
    { id: "w58_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Sục $0,4\\text{ mol}$ $\\ce{CO2}$ vào $250\\text{ mL}$ dung dịch hỗn hợp $\\ce{NaOH}$ $1\\text{ M}$ và $\\ce{Ba(OH)2}$ $0,5\\text{ M}$. Số mol kết tủa $\\ce{BaCO3}$ thu được là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$n_{\\ce{OH-}} = 0,25 + 2(0,125) = 0,5\\text{ mol} \\Rightarrow n_{\\ce{CO3^{2-}}} = 0,5 - 0,4 = 0,1\\text{ mol} < n_{\\ce{Ba^{2+}}} = 0,125\\text{ mol} \\Rightarrow n_{\\ce{BaCO3}} = 0,1\\text{ mol}$." },
    { id: "w58_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hấp thụ hoàn toàn $6,1975\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $200\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1\\text{ M}$ thu được kết tủa và dung dịch X. Tính khối lượng kết tủa và nồng độ mol chất tan trong dung dịch X (coi thể tích dung dịch không đổi).", solution: "$n_{\\ce{CO2}} = 0,25\\text{ mol}$; $n_{\\ce{Ba(OH)2}} = 0,2\\text{ mol}$.\n$n_{\\ce{BaCO3}} = 2(0,2) - 0,25 = 0,15\\text{ mol} \\Rightarrow m_{\\ce{BaCO3}} = 0,15 \\times 197 = 29,55\\text{ g}$.\nBTNT Ba: $n_{\\ce{Ba(HCO3)2}} = 0,2 - 0,15 = 0,05\\text{ mol} \\Rightarrow C_M = 0,05 / 0,2 = 0,25\\text{ M}$.", rubric: [
      { step: "Tính đúng $m_{\\ce{BaCO3}} = 29,55\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $C_M(\\ce{Ba(HCO3)2}) = 0,25\\text{ M}$", points: 0.5 }
    ] },
    { id: "w58_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Sục từ từ khí $\\ce{CO2}$ đến dư vào dung dịch chứa $a\\text{ mol}$ $\\ce{Ca(OH)2}$. Khi lượng $\\ce{CO2}$ hấp thụ là $0,1\\text{ mol}$ và $0,5\\text{ mol}$ thì lượng kết tủa thu được trong hai thí nghiệm đều bằng nhau. Tính $a$.", solution: "Ở thí nghiệm 1 ($n_{\\ce{CO2}} = 0,1\\text{ mol}$): kết tủa chưa đạt cực đại $\\Rightarrow n_{\\text{kt}} = 0,1\\text{ mol}$.\nỞ thí nghiệm 2 ($n_{\\ce{CO2}} = 0,5\\text{ mol}$): kết tủa đã tan một phần $\\Rightarrow n_{\\text{kt}} = 2a - 0,5 = 0,1 \\Rightarrow 2a = 0,6 \\Rightarrow a = 0,3\\text{ mol}$.", rubric: [
      { step: "Biện luận đúng 2 vị trí đối xứng trên đồ thị kết tủa", points: 0.5 },
      { step: "Giải đúng $a = 0,3\\text{ mol}$", points: 0.5 }
    ] },
    { id: "w58_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hấp thụ $0,25\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,15\\text{ mol}$ $\\ce{KOH}$ và $0,15\\text{ mol}$ $\\ce{Ba(OH)2}$. Sau phản ứng, lọc bỏ kết tủa rồi cho nước lọc tác dụng với dung dịch $\\ce{NaOH}$ dư thì thu thêm bao nhiêu gam kết tủa nữa?", solution: "$n_{\\ce{OH-}} = 0,15 + 0,3 = 0,45\\text{ mol} \\Rightarrow n_{\\ce{CO3^{2-}}} = 0,45 - 0,25 = 0,2\\text{ mol} > n_{\\ce{Ba^{2+}}} = 0,15\\text{ mol}$.\nVậy $\\ce{Ba^{2+}}$ kết tủa HẾT ngay từ đầu ($0,15\\text{ mol}$), trong nước lọc không còn $\\ce{Ba^{2+}}$ nên thêm $\\ce{NaOH}$ dư thu được $0\\text{ g}$ kết tủa!", rubric: [
      { step: "Tính đúng $n_{\\ce{CO3^{2-}}} = 0,2\\text{ mol} > n_{\\ce{Ba^{2+}}} = 0,15\\text{ mol}$", points: 0.5 },
      { step: "Kết luận $\\ce{Ba^{2+}}$ hết nên thu thêm $0\\text{ g}$ kết tủa", points: 0.5 }
    ] },
    { id: "w58_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $0,3\\text{ mol}$ $\\ce{CO2}$ vào $500\\text{ mL}$ dung dịch $\\ce{NaOH}$ thu được dung dịch X chứa $27,4\\text{ g}$ hỗn hợp hai muối $\\ce{Na2CO3}$ và $\\ce{NaHCO3}$. Tính nồng độ mol của dung dịch $\\ce{NaOH}$ ban đầu.", solution: "Gọi $x, y$ là số mol $\\ce{Na2CO3}$ ($106$) và $\\ce{NaHCO3}$ ($84$):\n$x + y = 0,3$; $106x + 84y = 27,4$.\nGiải hệ: $22x = 27,4 - 25,2 = 2,2 \\Rightarrow x = 0,1\\text{ mol}$; $y = 0,2\\text{ mol}$.\nBTNT Na: $n_{\\ce{NaOH}} = 2x + y = 0,4\\text{ mol} \\Rightarrow C_M = 0,4 / 0,5 = 0,8\\text{ M}$.", rubric: [
      { step: "Lập và giải hệ tìm đúng $x = 0,1; y = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{NaOH}} = 0,4\\text{ mol}$ và $C_M = 0,8\\text{ M}$", points: 0.5 }
    ] },
    { id: "w58_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $10\\text{ g}$ $\\ce{CaCO3}$ bằng $\\ce{HCl}$ dư, dẫn toàn bộ khí $\\ce{CO2}$ sinh ra hấp thụ vào $150\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $0,5\\text{ M}$. Tính khối lượng dung dịch $\\ce{Ba(OH)2}$ thay đổi như thế nào sau phản ứng?", solution: "$n_{\\ce{CO2}} = 0,1\\text{ mol}$ ($4,4\\text{ g}$); $n_{\\ce{Ba(OH)2}} = 0,075\\text{ mol}$.\n$n_{\\ce{BaCO3}} = 2(0,075) - 0,1 = 0,05\\text{ mol}$ ($m_{\\text{kt}} = 0,05 \\times 197 = 9,85\\text{ g}$).\n$\\Delta m_{\\text{dd}} = 4,4 - 9,85 = -5,45\\text{ g}$ (khối lượng dung dịch giảm $5,45\\text{ g}$).", rubric: [
      { step: "Tính đúng $m_{\\ce{BaCO3}} = 9,85\\text{ g}$", points: 0.5 },
      { step: "Tính đúng độ giảm khối lượng dung dịch $= 5,45\\text{ g}$", points: 0.5 }
    ] }
  ]
};
