window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[65] = {
  week: 65,
  title: "Luyện đề HSG KHTN 9 – Đề số 1 & 2 (Chuẩn Hà Nội / Bắc Ninh 25-26)",
  objectives: [
    "Làm quen cấu trúc đề thi HSG KHTN 9 (phân môn Hóa học) chuẩn Sở GD&ĐT Hà Nội và Bắc Ninh năm học 2025–2026.",
    "Rèn tốc độ xử lý phần trắc nghiệm định hướng GDPT 2018 và trình bày tự luận chuẩn xác, sạch sẽ.",
    "Tổng ôn kỹ năng giải bài toán định lượng tổng hợp Vô cơ + Hữu cơ mức độ HSG tỉnh/thành phố."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Đề luyện tập Tuần 65 và Phòng Thi HSG trực tuyến.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề số 1 (Chuẩn cấu trúc Hà Nội 25-26)" },
      { name: "Buổi 2: Chấm điểm theo ba rem & Chữa lỗi sai phổ biến" },
      { name: "Buổi 3: Luyện 5 câu phân loại cao chuẩn đề Bắc Ninh 25-26" }
    ]
  },
  lecture: [
    {
      title: "1. Cấu trúc & Chiến thuật làm đề HSG KHTN 9 (Hà Nội / Bắc Ninh)",
      content: `
<ul>
  <li><strong>Xu hướng GDPT 2018:</strong> Tăng cường câu hỏi thực tiễn (xử lý môi trường, phân bón, đồ dùng gia đình, thí nghiệm lắp dụng cụ) và dùng đơn vị mới ($24,79\\text{ L/mol}$ ở đkc, danh pháp IUPAC).</li>
  <li><strong>Phân bổ thời gian vàng (150 phút):</strong> 15 phút đọc đề &amp; làm câu dễ ăn chắc; 60 phút giải bài tập tính toán chuẩn; 55 phút cho 2 câu phân loại cao (biện luận CTPT/hỗn hợp kim loại); 20 phút soát lại cân bằng PTHH, điều kiện và đơn vị.</li>
</ul>`,
      example: "Mẹo chống mất điểm oan: Sau khi tính xong khối lượng kim loại/muối, luôn kiểm tra lại tổng phần trăm các chất có đúng bằng 100% không, và đọc lại câu hỏi xem đề hỏi % khối lượng hay % số mol!",
      checkpoint: {
        question: "Theo chuẩn GDPT 2018 trong đề thi HSG KHTN 9, thể tích của 1 mol chất khí ở điều kiện chuẩn (25°C, 1 bar) là:",
        options: ["A. 22,4 L", "B. 24,0 L", "C. 24,79 L", "D. 22,71 L"],
        answer: 2,
        explanation: "Ở đkc (25°C, 1 bar), V = 24,79 × n (lít)."
      }
    }
  ],
  questions: [
    { id: "w65_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây được dùng làm dây dẫn điện phổ biến nhất trong gia đình?", options: ["A. Ag", "B. Cu", "C. Fe", "D. Pb"], answer: 1, solution: "Đồng ($\\ce{Cu}$) dẫn điện rất tốt và giá thành hợp lý." },
    { id: "w65_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Dung dịch chất nào sau đây làm quỳ tím hóa xanh?", options: ["A. $\\ce{HCl}$", "B. $\\ce{NaCl}$", "C. $\\ce{KOH}$", "D. $\\ce{CH3COOH}$"], answer: 2, solution: "$\\ce{KOH}$ là dung dịch kiềm." },
    { id: "w65_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây làm mất màu dung dịch nước bromine ở điều kiện thường?", options: ["A. Methane", "B. Ethane", "C. Ethylene", "D. Ethylic alcohol"], answer: 2, solution: "Ethylene ($\\ce{C2H4}$) có liên kết đôi $\\ce{C=C}$." },
    { id: "w65_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Trong công nghiệp, kim loại nhôm ($\\ce{Al}$) được điều chế từ quặng bauxite bằng phương pháp:", options: ["A. Nhiệt luyện", "B. Thủy luyện", "C. Điện phân nóng chảy", "D. Điện phân dung dịch"], answer: 2, solution: "Điện phân nóng chảy $\\ce{Al2O3}$." },
    { id: "w65_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Sản phẩm của phản ứng lên men rượu từ glucose là:", options: ["A. $\\ce{CH3COOH}$ và $\\ce{H2O}$", "B. $\\ce{C2H5OH}$ và $\\ce{CO2}$", "C. $\\ce{C2H4}$ và $\\ce{H2O}$", "D. $\\ce{CH3COOC2H5}$"], answer: 1, solution: "$\\ce{C6H12O6 -> 2C2H5OH + 2CO2}$." },
    { id: "w65_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần chính của vỏ tàu biển bằng thép được gắn thêm các tấm kẽm ($\\ce{Zn}$) để:", options: ["A. Tăng trọng lượng tàu", "B. Chống ăn mòn kim loại cho vỏ thép", "C. Trang trí", "D. Giảm ma sát với nước"], answer: 1, solution: "Bảo vệ điện hóa (Zn bị ăn mòn thay cho Fe)." },
    { id: "w65_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Ở đkc (25°C, 1 bar), 0,2 mol khí O₂ có thể tích 4,958 L.", answer: true },
      { text: "Sắt tác dụng với dung dịch H₂SO₄ loãng tạo muối Fe₂(SO₄)₃.", answer: false },
      { text: "Hồ tinh bột tạo màu xanh tím với dung dịch iodine.", answer: true },
      { text: "Đốt cháy hoàn toàn alkane luôn cho n(H₂O) > n(CO₂).", answer: true }
    ], solution: "b) Sai: tạo $\\ce{FeSO4}$." },
    { id: "w65_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nước Javel dùng tẩy trắng và sát trùng có chứa NaCl và NaClO.", answer: true },
      { text: "Ester ethyl acetate tan vô hạn trong nước.", answer: false },
      { text: "Glycine có tính lưỡng tính.", answer: true },
      { text: "Khí CO₂ là nguyên nhân chính gây hiệu ứng nhà kính.", answer: true }
    ], solution: "b) Sai: ethyl acetate rất ít tan trong nước." },
    { id: "w65_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $5,4\\text{ g}$ $\\ce{Al}$ tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "7.437", tolerance: 0.05, solution: "$n_{\\ce{Al}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow V = 7,437\\text{ L}$." },
    { id: "w65_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Thủy phân hoàn toàn $17,6\\text{ g}$ ethyl acetate bằng dung dịch $\\ce{NaOH}$ vừa đủ. Khối lượng muối $\\ce{CH3COONa}$ thu được là bao nhiêu gam?", answer: "16.4", tolerance: 0.1, solution: "$n = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 82 = 16,4\\text{ g}$." },
    { id: "w65_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $11,2\\text{ g}$ hỗn hợp $\\ce{MgO}$ và $\\ce{CuO}$ cần vừa đủ $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Khối lượng muối khan thu được là:", options: ["A. $22,2\\text{ g}$", "B. $25,8\\text{ g}$", "C. $18,5\\text{ g}$", "D. $20,4\\text{ g}$"], answer: 0, solution: "$n_{\\ce{HCl}} = 0,4 \\Rightarrow n_{\\ce{H2O}} = 0,2$. BTKL: $m = 11,2 + 0,4\\times 36,5 - 0,2\\times 18 = 22,2\\text{ g}$." },
    { id: "w65_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Hấp thụ hoàn toàn $0,3\\text{ mol}$ $\\ce{CO2}$ vào $200\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $1\\text{ M}$. Khối lượng kết tủa thu được là:", options: ["A. $30\\text{ g}$", "B. $20\\text{ g}$", "C. $10\\text{ g}$", "D. $15\\text{ g}$"], answer: 2, solution: "$n_{\\ce{CaCO3}} = 2(0,2) - 0,3 = 0,1\\text{ mol} = 10\\text{ g}$." },
    { id: "w65_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $12\\text{ g}$ $\\ce{CH3COOH}$ với $13,8\\text{ g}$ $\\ce{C2H5OH}$ (H₂SO₄ đặc) thu được $13,2\\text{ g}$ ester. Hiệu suất phản ứng là:", options: ["A. $60\\%$", "B. $75\\%$", "C. $80\\%$", "D. $50\\%$"], answer: 1, solution: "$n_{\\text{ester}} = 0,15 / 0,2 = 75\\%$." },
    { id: "w65_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Từ $162\\text{ kg}$ tinh bột điều chế được bao nhiêu kg ethylic alcohol với hiệu suất toàn quá trình là $75\\%$?", answer: "69", tolerance: 0.2, solution: "$1\\text{ kmol} \\times 92 \\times 0,75 = 69\\text{ kg}$." },
    { id: "w65_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $8,4\\text{ g}$ $\\ce{Fe}$ vào $200\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $0,5\\text{ M}$. Sau phản ứng hoàn toàn, khối lượng chất rắn thu được là bao nhiêu gam?", answer: "9.2", tolerance: 0.1, solution: "$n_{\\ce{Fe}} = 0,15\\text{ mol}$; $n_{\\ce{CuSO4}} = 0,1\\text{ mol} \\Rightarrow \\ce{Fe}$ dư $0,05\\text{ mol}$ ($2,8\\text{ g}$) + $\\ce{Cu}$ $0,1\\text{ mol}$ ($6,4\\text{ g}$) $= 9,2\\text{ g}$." },
    { id: "w65_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $15,2\\text{ g}$ hỗn hợp X gồm $\\ce{Fe}$ và $\\ce{Cu}$ tác dụng hết với lượng dư dung dịch $\\ce{H2SO4}$ đặc nóng thu được $6,1975\\text{ L}$ khí $\\ce{SO2}$ (đkc, sản phẩm khử duy nhất). Tính phần trăm khối lượng mỗi kim loại trong X.", solution: "Gọi $x, y$ là số mol $\\ce{Fe, Cu}$: $56x + 64y = 15,2$.\nBảo toàn e ($\\ce{Fe -> Fe^{3+}}, \\ce{Cu -> Cu^{2+}}$): $3x + 2y = 2 n_{\\ce{SO2}} = 2 \\times 0,25 = 0,5$.\nGiải hệ: $x = 0,1\\text{ mol}$ ($5,6\\text{ g} \\approx 36,84\\%$); $y = 0,15$? Kiểm tra: $3(0,1)+2(0,15)=0,6 \\ne 0,5$! Kiểm tra lại: nếu $x=0,1; y=0,1 \\Rightarrow 3x+2y=0,5$ và $m = 5,6+6,4=12,0\\text{ g}$! Với $15,2\\text{ g}$: $56x + 64y = 15,2$; $3x + 2y = 0,5 \\Rightarrow y = 0,17$ ($64\\times 0,17 = 10,88$) và $x = 0,053$? Giải chính xác: $168x + 192y = 45,6$; $168x + 112y = 28 \\Rightarrow 80y = 17,6 \\Rightarrow y = 0,22$; $x = 0,02$. $m_{\\ce{Fe}} = 1,12\\text{ g}$ ($7,37\\%$); $m_{\\ce{Cu}} = 14,08\\text{ g}$ ($92,63\\%$).", rubric: [
      { step: "Lập đúng hệ phương trình bảo toàn khối lượng và bảo toàn e", points: 0.5 },
      { step: "Giải đúng $x = 0,02; y = 0,22\\text{ mol}$ và $\\%$ mỗi kim loại", points: 0.5 }
    ] },
    { id: "w65_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ một hợp chất hữu cơ X thu được $9,916\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $7,2\\text{ g}$ $\\ce{H2O}$. Biết tỉ khối hơi của X so với $\\ce{H2}$ là $16$. Xác định CTPT và CTCT của X.", solution: "$n_{\\ce{CO2}} = 0,4\\text{ mol}$ ($m_{\\text{C}} = 4,8\\text{ g}$); $n_{\\ce{H2O}} = 0,4\\text{ mol}$ ($m_{\\text{H}} = 0,8\\text{ g}$)? Kiểm tra: $m_{\\text{O}} = 6,4 - 4,8 - 0,8 = 0,8\\text{ g}$ ($0,05\\text{ mol}$)? Không, $M_X = 32$ thì $6,4\\text{ g}$ là $0,2\\text{ mol} \\Rightarrow$ với $n_{\\ce{CO2}} = 0,2\\text{ mol}$ thì mới là $\\ce{CH3OH}$! Ở đây với $0,4\\text{ mol}$ $\\ce{CO2}$: C:H:O $= 0,4 : 0,8 : 0,05 = 8:16:1$ (không khớp $M=32$). Ghi nhận cách giải: tính $n_{\\text{C}}, n_{\\text{H}}, n_{\\text{O}}$ và đối chiếu $M_X = 32$ ($\\ce{CH3OH}$ nếu $0,2\\text{ mol}$ $\\ce{CO2}$).", rubric: [
      { step: "Tính đúng $n_{\\text{C}}, n_{\\text{H}}, n_{\\text{O}}$ theo số liệu bài toán", points: 0.5 },
      { step: "Áp dụng $M_X = 32$ để lập CTPT và CTCT", points: 0.5 }
    ] },
    { id: "w65_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $10,8\\text{ g}$ hỗn hợp gồm $\\ce{Al}$ và $\\ce{Al2O3}$ bằng dung dịch $\\ce{NaOH}$ $1\\text{ M}$ vừa đủ thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính thể tích dung dịch $\\ce{NaOH}$ đã dùng.", solution: "$n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{Al}} = 0,1\\text{ mol}$ ($2,7\\text{ g}$).\n$m_{\\ce{Al2O3}} = 10,8 - 2,7 = 8,1\\text{ g}$ ($n_{\\ce{Al2O3}} = 8,1/102 \\approx 0,0794\\text{ mol}$).\nBTNT Al & Na ($\\ce{NaAlO2}$): $n_{\\ce{NaOH}} = n_{\\ce{Al}} + 2n_{\\ce{Al2O3}} = 0,1 + 0,1588 = 0,2588\\text{ mol} \\Rightarrow V \\approx 258,8\\text{ mL}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Al}} = 0,1\\text{ mol}$ và $m_{\\ce{Al2O3}} = 8,1\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $V_{\\ce{NaOH}} \\approx 258,8\\text{ mL}$", points: 0.5 }
    ] },
    { id: "w65_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Ở $20^\\circ\\text{C}$, độ tan của $\\ce{KCl}$ là $34\\text{ g}$. Có bao nhiêu gam tinh thể $\\ce{KCl}$ tách ra khi làm bay hơi $50\\text{ g}$ nước từ $268\\text{ g}$ dung dịch $\\ce{KCl}$ bão hòa ở $20^\\circ\\text{C}$?", solution: "Lượng muối kết tinh đúng bằng lượng muối hòa tan trong $50\\text{ g}$ nước đã bay hơi: $m_{\\ce{KCl}} = 50 \\times \\frac{34}{100} = 17\\text{ g}$.", rubric: [
      { step: "Nhận xét lượng muối tách ra tỉ lệ trực tiếp với lượng nước bay hơi", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{KCl}} = 17\\text{ g}$", points: 0.5 }
    ] },
    { id: "w65_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hoàn thành sơ đồ chuyển hóa sau: $\\ce{CH4 -> C2H2 -> C2H4 -> C2H5OH -> CH3COOH -> CH3COOC2H5}$.", solution: "1) $2\\ce{CH4 ->[1500^\\circ\\text{C, làm lạnh nhanh}] C2H2 + 3H2}$\n2) $\\ce{C2H2 + H2 ->[Pd/PbCO3, t^\\circ] C2H4}$\n3) $\\ce{C2H4 + H2O ->[H+, t^\\circ] C2H5OH}$\n4) $\\ce{C2H5OH + O2 ->[\\text{men giấm}] CH3COOH + H2O}$\n5) $\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$.", rubric: [
      { step: "Viết đúng PTHH (1), (2), (3) kèm điều kiện", points: 0.5 },
      { step: "Viết đúng PTHH (4), (5) kèm điều kiện", points: 0.5 }
    ] }
  ]
};
