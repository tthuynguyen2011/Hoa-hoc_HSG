window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[72] = {
  week: 72,
  title: "Thi thử Tổng kết Toàn khóa (Vòng 1 HSG + Vòng 2 Chuyên Hóa)",
  objectives: [
    "Hoàn thành kỳ thi Tổng kết Toàn khóa sau 72 tuần học tập (bao phủ 100% chương trình Hóa học THCS KHTN 6–9 và toàn bộ chuyên đề HSG 9 / Chuyên Hóa vào 10).",
    "Đánh giá toàn diện năng lực: Lý thuyết cốt lõi, Thực hành thí nghiệm, Toán thực tế, Bảo toàn nguyên tố/khối lượng/electron, và Biện luận hữu cơ.",
    "Chuẩn bị tâm thế tự tin nhất bước vào kỳ thi HSG cấp Tỉnh/Thành phố và kỳ thi tuyển sinh lớp 10 Chuyên Hóa."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Đề thi Tổng kết Toàn khóa Tuần 72 + Phòng Thi HSG trực tuyến (79 đề thi chính thức).",
    sessions: [
      { name: "Buổi 1: Thi thử Tổng kết Toàn khóa (20 câu chuẩn cấu trúc)" },
      { name: "Buổi 2: Chấm điểm chi tiết theo ba rem & Tổng kết điểm số" },
      { name: "Buổi 3: Định hướng ôn tập nước rút trong Phòng Thi HSG" }
    ]
  },
  lecture: [
    {
      title: "1. Chúc mừng hoàn thành Lộ trình 72 Tuần Chinh phục HSG & Chuyên Hóa!",
      content: `
<div class="callout success">
  <strong>Chúc mừng con đã đi trọn vẹn hành trình 2 năm (72 Tuần) từ nền tảng KHTN 6 đến đỉnh cao HSG Hóa 9 &amp; Chuyên Hóa vào 10!</strong><br/>
  Trước khi bước vào phòng thi chính thức, hãy giữ vững 3 nguyên tắc vàng:<br/>
  1. <strong>Bình tĩnh đọc kĩ đề</strong> (đặc biệt điều kiện $24,79\\text{ L/mol}$, chất dư/hết, hiệu suất).<br/>
  2. <strong>Trình bày tự luận sạch sẽ</strong>, viết đủ điều kiện PTHH để không mất từng $0,25\\text{đ}$ ba rem.<br/>
  3. <strong>Tiếp tục luyện đều đặn</strong> trong mục <em>Phòng Thi HSG (79 đề thi các tỉnh &amp; Chuyên Hóa)</em> để đạt phong độ cao nhất!
</div>`,
      example: "Mục tiêu điểm số Tuần 72: ≥ 16/20 điểm là đã đủ năng lực tự tin dự thi HSG cấp Tỉnh/Thành phố và thi tuyển vào các lớp Chuyên Hóa trên toàn quốc!",
      checkpoint: {
        question: "Thể tích của 0,5 mol khí bất kì ở điều kiện chuẩn (25°C, 1 bar) theo GDPT 2018 là:",
        options: ["A. 11,2 L", "B. 12,395 L", "C. 24,79 L", "D. 12,0 L"],
        answer: 1,
        explanation: "0,5 × 24,79 = 12,395 L."
      }
    }
  ],
  questions: [
    { id: "w72_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Nguyên tố hóa học nào có kí hiệu là $\\ce{K}$?", options: ["A. Calcium", "B. Potassium", "C. Phosphorus", "D. Krypton"], answer: 1, solution: "Potassium ($\\ce{K}$)." },
    { id: "w72_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây dẫn điện tốt nhất?", options: ["A. Cu", "B. Ag", "C. Au", "D. Al"], answer: 1, solution: "$\\ce{Ag > Cu > Au > Al > Fe}$." },
    { id: "w72_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Dung dịch nào sau đây có giá trị $\\text{pH} > 7$?", options: ["A. $\\ce{HCl}$", "B. $\\ce{CH3COOH}$", "C. $\\ce{NaOH}$", "D. $\\ce{NaCl}$"], answer: 2, solution: "$\\ce{NaOH}$ là dung dịch kiềm có $\\text{pH} > 7$." },
    { id: "w72_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào làm đục nước vôi trong và là nguyên nhân chính gây hiệu ứng nhà kính?", options: ["A. $\\ce{CO}$", "B. $\\ce{CO2}$", "C. $\\ce{SO2}$", "D. $\\ce{CH4}$"], answer: 1, solution: "$\\ce{CO2}$." },
    { id: "w72_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng cộng $\\ce{Br2}$ làm mất màu nâu đỏ dung dịch bromine là phản ứng đặc trưng của:", options: ["A. Alkane", "B. Alkene", "C. Ethylic alcohol", "D. Acetic acid"], answer: 1, solution: "Alkene có liên kết đôi $\\ce{C=C}$." },
    { id: "w72_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây vừa có phản ứng tráng bạc, vừa có thể lên men tạo ethylic alcohol?", options: ["A. Saccharose", "B. Glucose", "C. Tinh bột", "D. Cellulose"], answer: 1, solution: "Glucose ($\\ce{C6H12O6}$)." },
    { id: "w72_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Ở đkc, 1 mol khí chiếm thể tích 24,79 L.", answer: true },
      { text: "Nhôm tác dụng được với cả dung dịch HCl và dung dịch NaOH.", answer: true },
      { text: "Chất béo là triester của glycerol và acid béo.", answer: true },
      { text: "Khí CH₄ làm mất màu dung dịch nước bromine ở điều kiện thường.", answer: false }
    ], solution: "d) Sai: $\\ce{CH4}$ không làm mất màu nước bromine." },
    { id: "w72_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Muối BaSO₄ không tan trong nước và không tan trong dung dịch acid mạnh.", answer: true },
      { text: "Hồ tinh bột tạo màu xanh tím với dung dịch iodine.", answer: true },
      { text: "Gang có hàm lượng carbon thấp hơn thép.", answer: false },
      { text: "Đốt cháy protein (tóc, lông gà, tơ tằm) có mùi khét đặc trưng.", answer: true }
    ], solution: "c) Sai: gang ($2-5\\%$ C) cao hơn thép ($<2\\%$ C)." },
    { id: "w72_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $5,6\\text{ g}$ $\\ce{Fe}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{Fe}} = 0,1\\text{ mol} \\Rightarrow V_{\\ce{H2}} = 2,479\\text{ L}$." },
    { id: "w72_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Thủy phân hoàn toàn $8,8\\text{ g}$ ethyl acetate bằng dung dịch $\\ce{NaOH}$ vừa đủ thu được bao nhiêu gam muối $\\ce{CH3COONa}$?", answer: "8.2", tolerance: 0.1, solution: "$n = 0,1\\text{ mol} \\Rightarrow m = 8,2\\text{ g}$." },
    { id: "w72_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $15\\text{ g}$ hỗn hợp $\\ce{CaCO3}$ và $\\ce{MgCO3}$ trong dung dịch $\\ce{HCl}$ dư thu được $16,65\\text{ g}$ muối chloride khan. Số mol khí $\\ce{CO2}$ thoát ra là:", options: ["A. $0,1\\text{ mol}$", "B. $0,15\\text{ mol}$", "C. $0,2\\text{ mol}$", "D. $0,25\\text{ mol}$"], answer: 1, solution: "$n_{\\ce{CO2}} = (16,65 - 15) / 11 = 0,15\\text{ mol}$." },
    { id: "w72_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Hấp thụ hoàn toàn $0,25\\text{ mol}$ $\\ce{CO2}$ vào $200\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1\\text{ M}$. Khối lượng kết tủa $\\ce{BaCO3}$ thu được là:", options: ["A. $29,55\\text{ g}$", "B. $19,7\\text{ g}$", "C. $39,4\\text{ g}$", "D. $9,85\\text{ g}$"], answer: 0, solution: "$n_{\\ce{BaCO3}} = 2(0,2) - 0,25 = 0,15\\text{ mol} \\Rightarrow m = 29,55\\text{ g}$." },
    { id: "w72_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $12\\text{ g}$ $\\ce{CH3COOH}$ với $9,2\\text{ g}$ $\\ce{C2H5OH}$ (H₂SO₄ đặc, t°), hiệu suất $80\\%$. Khối lượng ester thu được là:", options: ["A. $14,08\\text{ g}$", "B. $17,6\\text{ g}$", "C. $13,2\\text{ g}$", "D. $10,56\\text{ g}$"], answer: 0, solution: "$0,2 \\times 0,8 \\times 88 = 14,08\\text{ g}$." },
    { id: "w72_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Ở $80^\\circ\\text{C}$ độ tan của muối A là $60\\text{ g}$, ở $20^\\circ\\text{C}$ là $20\\text{ g}$. Làm lạnh $320\\text{ g}$ dung dịch bão hòa A từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ thu được bao nhiêu gam muối khan kết tinh?", answer: "80", tolerance: 0.5, solution: "$200\\text{ g}$ nước giữ $40\\text{ g}$ A $\\Rightarrow$ tách $120 - 40 = 80\\text{ g}$." },
    { id: "w72_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Lên men $180\\text{ g}$ glucose thành ethylic alcohol với hiệu suất $80\\%$. Thể tích khí $\\ce{CO2}$ (đkc) thu được là bao nhiêu lít?", answer: "39.664", tolerance: 0.2, solution: "$n_{\\ce{CO2}} = 2 \\times 1 \\times 0,8 = 1,6\\text{ mol} \\Rightarrow V = 1,6 \\times 24,79 = 39,664\\text{ L}$." },
    { id: "w72_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp X gồm $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ tác dụng hoàn toàn với khí $\\ce{CO}$ dư nung nóng thu được $16,8\\text{ g}$ $\\ce{Fe}$ và $9,916\\text{ L}$ khí $\\ce{CO2}$ (đkc). Tính $m$.", solution: "Quy đổi hỗn hợp X thành $\\ce{Fe}$ ($16,8\\text{ g}$) và $\\ce{O}$ ($n_{\\ce{O}} = n_{\\ce{CO2}} = 0,4\\text{ mol} = 6,4\\text{ g}$).\nVậy $m = 16,8 + 6,4 = 23,2\\text{ g}$.", rubric: [
      { step: "Quy đổi hoặc dùng BTNT O tính đúng $m_{\\ce{O}} = 6,4\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $m = 23,2\\text{ g}$", points: 0.5 }
    ] },
    { id: "w72_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $11,9\\text{ g}$ hỗn hợp gồm $\\ce{Al}$ và $\\ce{Zn}$ tác dụng hoàn toàn với dung dịch $\\ce{H2SO4}$ loãng dư thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính phần trăm khối lượng mỗi kim loại.", solution: "$27x + 65y = 11,9$; $1,5x + y = 0,4 \\Rightarrow x = 0,2\\text{ mol}$ ($\\ce{Al}$, $5,4\\text{ g} \\approx 45,38\\%$); $y = 0,1\\text{ mol}$ ($\\ce{Zn}$, $6,5\\text{ g} \\approx 54,62\\%$).", rubric: [
      { step: "Lập và giải hệ tìm đúng $x = 0,2; y = 0,1\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $\\%$ mỗi kim loại", points: 0.5 }
    ] },
    { id: "w72_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6,2\\text{ g}$ hợp chất hữu cơ X thu được $4,958\\text{ L}$ $\\ce{CO2}$ (đkc) và $5,4\\text{ g}$ $\\ce{H2O}$. Xác định CTPT của X (không cho trước khối lượng mol).", solution: "$n_{\\text{C}} = 0,2$; $n_{\\text{H}} = 0,6$; $n_{\\text{O}} = 0,2 \\Rightarrow (\\ce{CH3O})_n$.\nĐiều kiện $3n$ chẵn và $3n \\le 2n+2 \\Rightarrow n = 2 \\Rightarrow \\ce{C2H6O2}$.", rubric: [
      { step: "Tìm đúng CTĐGN $\\ce{CH3O}$", points: 0.5 },
      { step: "Biện luận đúng CTPT $\\ce{C2H6O2}$", points: 0.5 }
    ] },
    { id: "w72_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Chỉ dùng một thuốc thử duy nhất, hãy nhận biết 4 dung dịch mất nhãn: $\\ce{H2SO4, Na2CO3, BaCl2, NaNO3}$.", solution: "Dùng quỳ tím:\n- Hóa đỏ: $\\ce{H2SO4}$.\n- Hóa xanh: $\\ce{Na2CO3}$.\n- Không đổi màu: $\\ce{BaCl2, NaNO3}$.\nNhỏ $\\ce{H2SO4}$ vào 2 chất còn lại: tạo kết tủa trắng là $\\ce{BaCl2}$, không hiện tượng là $\\ce{NaNO3}$.", rubric: [
      { step: "Chọn đúng quỳ tím nhận $\\ce{H2SO4}$ và $\\ce{Na2CO3}$", points: 0.5 },
      { step: "Dùng $\\ce{H2SO4}$ phân biệt $\\ce{BaCl2}$ và $\\ce{NaNO3}$ kèm PTHH", points: 0.5 }
    ] },
    { id: "w72_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hoàn thành chuỗi chuyển hóa: $\\ce{Tinh bột -> Glucose -> C2H5OH -> CH3COOH -> CH3COOC2H5 -> CH3COONa}$.", solution: "1) $\\ce{(C6H10O5)_n + nH2O ->[H+, t^\\circ] nC6H12O6}$\n2) $\\ce{C6H12O6 ->[\\text{enzyme}] 2C2H5OH + 2CO2 ^}$\n3) $\\ce{C2H5OH + O2 ->[\\text{men giấm}] CH3COOH + H2O}$\n4) $\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$\n5) $\\ce{CH3COOC2H5 + NaOH ->[t^\\circ] CH3COONa + C2H5OH}$.", rubric: [
      { step: "Viết đúng 3 PTHH đầu kèm điều kiện", points: 0.5 },
      { step: "Viết đúng 2 PTHH sau kèm điều kiện", points: 0.5 }
    ] }
  ]
};
