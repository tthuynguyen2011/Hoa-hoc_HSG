window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[66] = {
  week: 66,
  title: "Luyện đề HSG KHTN 9 – Đề số 3 & 4 (Đề thi thử cô Yến AMS 25-26)",
  objectives: [
    "Luyện tập các dạng bài trọng tâm trong bộ đề thi thử HSG KHTN 9 của cô Yến – THPT Chuyên Hà Nội - Amsterdam (2025–2026).",
    "Rèn tư duy giải bài toán hỗn hợp 2 muối/2 kim loại kết hợp đồ thị và bài toán phân tích mẫu thực tế (giấm ăn, thuốc dạ dày, quặng).",
    "Nâng cao độ chính xác khi trình bày tự luận chi tiết để đạt điểm tối đa."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bộ đề thi thử cô Yến AMS trong Phòng Thi HSG.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề số 3 (Chuẩn phong cách AMS)" },
      { name: "Buổi 2: Phân tích kỹ thuật giải nhanh & Tránh bẫy đề AMS" },
      { name: "Buổi 3: Luyện tập Đề số 4 và chấm chéo theo ba rem" }
    ]
  },
  lecture: [
    {
      title: "1. Đặc trưng bộ đề HSG KHTN 9 (Phong cách Chuyên Amsterdam)",
      content: `
<ul>
  <li>Đề thường có 1 câu <strong>ứng dụng thực tế</strong> (tính hàm lượng $\\ce{NaHCO3}$ trong thuốc đau dạ dày, nồng độ $\\ce{CH3COOH}$ trong giấm ăn, hoặc hiệu suất pin nhiên liệu/nhiệt lượng).</li>
  <li>Câu vô cơ thường gài bẫy thứ tự phản ứng ($\\ce{H+}$ tác dụng $\\ce{OH-}$ trước rồi mới đến $\\ce{CO3^{2-}}$, hoặc $\\ce{CO2}$ vào hỗn hợp kiềm).</li>
  <li>Câu hữu cơ hay yêu cầu biện luận nhiều trường hợp CTCT từ dữ kiện đốt cháy và thủy phân.</li>
</ul>`,
      example: "Một viên thuốc giảm đau dạ dày chứa NaHCO₃ (còn lại là tá dược trơ). Hòa tan 1 viên nặng 1 g vào lượng dư HCl thu được 0,12395 L CO₂ (đkc). Tính % khối lượng NaHCO₃ trong viên thuốc.\nGiải: n(CO₂) = 0,005 mol → n(NaHCO₃) = 0,005 mol → m = 0,005 × 84 = 0,42 g → 42%.",
      checkpoint: {
        question: "Khi nhỏ từ từ từng giọt dung dịch HCl vào dung dịch chứa hỗn hợp NaOH và Na₂CO₃, phản ứng nào xảy ra TRƯỚC?",
        options: ["A. HCl + Na₂CO₃ → NaHCO₃ + NaCl", "B. HCl + NaOH → NaCl + H₂O", "C. Giải phóng ngay khí CO₂", "D. Không có phản ứng"],
        answer: 1,
        explanation: "Phản ứng trung hòa giữa acid mạnh và base mạnh (HCl + NaOH) luôn xảy ra trước tiên."
      }
    }
  ],
  questions: [
    { id: "w66_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần chính của thuốc muối Nabica dùng để giảm đau dạ dày do dư acid HCl là:", options: ["A. $\\ce{Na2CO3}$", "B. $\\ce{NaHCO3}$", "C. $\\ce{NaOH}$", "D. $\\ce{NaCl}$"], answer: 1, solution: "$\\ce{NaHCO3 + HCl -> NaCl + CO2 ^ + H2O}$." },
    { id: "w66_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây vừa tan trong dung dịch $\\ce{HCl}$, vừa tan trong dung dịch $\\ce{NaOH}$?", options: ["A. $\\ce{Fe}$", "B. $\\ce{Mg}$", "C. $\\ce{Al}$", "D. $\\ce{Cu}$"], answer: 2, solution: "Nhôm ($\\ce{Al}$) tan được trong cả acid và kiềm." },
    { id: "w66_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nhỏ dung dịch $\\ce{BaCl2}$ vào dung dịch nào sau đây thu được kết tủa trắng không tan trong acid $\\ce{HNO3}$?", options: ["A. $\\ce{Na2CO3}$", "B. $\\ce{Na2SO4}$", "C. $\\ce{NaCl}$", "D. $\\ce{NaOH}$"], answer: 1, solution: "$\\ce{BaSO4}$ không tan trong acid mạnh." },
    { id: "w66_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây có nhiệt độ sôi thấp nhất?", options: ["A. Nước ($\\ce{H2O}$)", "B. Ethylic alcohol ($\\ce{C2H5OH}$)", "C. Acetic acid ($\\ce{CH3COOH}$)", "D. Khí methane ($\\ce{CH4}$)"], answer: 3, solution: "$\\ce{CH4}$ là chất khí ở điều kiện thường (sôi ở $-161,5^\\circ\\text{C}$)." },
    { id: "w66_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng nào sau đây KHÔNG phải phản ứng trao đổi?", options: ["A. $\\ce{NaOH + HCl -> NaCl + H2O}$", "B. $\\ce{BaCl2 + H2SO4 -> BaSO4 v + 2HCl}$", "C. $\\ce{Fe + CuSO4 -> FeSO4 + Cu}$", "D. $\\ce{CaCO3 + 2HCl -> CaCl2 + CO2 + H2O}$"], answer: 2, solution: "$\\ce{Fe + CuSO4}$ là phản ứng thế." },
    { id: "w66_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Để làm sạch lớp cặn $\\ce{CaCO3}$ trong bình đun siêu tốc, ta dùng dung dịch:", options: ["A. Nước muối", "B. Giấm ăn", "C. Cồn $70^\\circ$", "D. Nước vôi trong"], answer: 1, solution: "Giấm ăn ($\\ce{CH3COOH}$) hòa tan cặn $\\ce{CaCO3}$." },
    { id: "w66_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Cặp chất NaHSO₄ và Na₂CO₃ phản ứng với nhau sinh ra khí CO₂.", answer: true },
      { text: "Dung dịch FeSO₄ có thể hòa tan kim loại Cu.", answer: false },
      { text: "Tất cả các ester đều nhẹ hơn nước và ít tan trong nước.", answer: true },
      { text: "Có thể phân biệt glucose và saccharose bằng dung dịch AgNO₃/NH₃.", answer: true }
    ], solution: "b) Sai: Cu yếu hơn Fe." },
    { id: "w66_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi cho từ từ HCl vào dung dịch Na₂CO₃ thì ban đầu chưa có khí thoát ra ngay.", answer: true },
      { text: "Khi cho từ từ Na₂CO₃ vào dung dịch HCl thì có khí thoát ra ngay lập tức.", answer: true },
      { text: "Sục khí CO₂ vào dung dịch NaCl thu được kết tủa Na₂CO₃.", answer: false },
      { text: "Nhiệt phân NaHCO₃ thu được Na₂CO₃, CO₂ và H₂O.", answer: true }
    ], solution: "c) Sai: không phản ứng." },
    { id: "w66_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{NaHCO3}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư thu được bao nhiêu lít khí $\\ce{CO2}$ ở đkc?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{CO2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w66_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Trung hòa hoàn toàn $200\\text{ mL}$ dung dịch $\\ce{CH3COOH}$ $0,5\\text{ M}$ cần bao nhiêu mL dung dịch $\\ce{NaOH}$ $1\\text{ M}$?", answer: "100", tolerance: 1, solution: "$n = 0,1\\text{ mol} \\Rightarrow V = 100\\text{ mL}$." },
    { id: "w66_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Nhỏ từ từ đến dư dung dịch $\\ce{HCl}$ chứa $0,15\\text{ mol}$ $\\ce{HCl}$ vào dung dịch chứa $0,1\\text{ mol}$ $\\ce{Na2CO3}$. Số mol khí $\\ce{CO2}$ thu được là:", options: ["A. $0,1\\text{ mol}$", "B. $0,05\\text{ mol}$", "C. $0,075\\text{ mol}$", "D. $0,15\\text{ mol}$"], answer: 1, solution: "Bước 1: $0,1\\text{ mol}$ $\\ce{HCl}$ tạo $0,1\\text{ mol}$ $\\ce{NaHCO3}$. Bước 2: $0,05\\text{ mol}$ $\\ce{HCl}$ còn lại tạo $0,05\\text{ mol}$ $\\ce{CO2}$." },
    { id: "w66_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ bột $\\ce{Al}$ tác dụng với dung dịch $\\ce{HCl}$ dư thu được $V_1\\text{ L}$ khí $\\ce{H2}$. Nếu cho $m\\text{ g}$ bột $\\ce{Al}$ tác dụng với dung dịch $\\ce{NaOH}$ dư thu được $V_2\\text{ L}$ khí $\\ce{H2}$ (cùng điều kiện). Tỉ lệ $V_1 : V_2$ là:", options: ["A. $1 : 1$", "B. $2 : 3$", "C. $3 : 2$", "D. $1 : 2$"], answer: 0, solution: "Cả hai phản ứng đều giải phóng $1,5\\text{ mol}$ $\\ce{H2}$ trên $1\\text{ mol}$ $\\ce{Al} \\Rightarrow V_1 : V_2 = 1 : 1$." },
    { id: "w66_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Một mẫu giấm ăn có khối lượng riêng $1\\text{ g/mL}$. Để trung hòa $10\\text{ mL}$ giấm ăn này cần vừa đủ $25\\text{ mL}$ dung dịch $\\ce{NaOH}$ $0,2\\text{ M}$. Nồng độ phần trăm của acetic acid trong giấm là:", options: ["A. $3\\%$", "B. $4\\%$", "C. $5\\%$", "D. $2\\%$"], answer: 0, solution: "$n_{\\ce{CH3COOH}} = 0,025 \\times 0,2 = 0,005\\text{ mol}$ ($0,3\\text{ g}$). $C\\% = (0,3 / 10) \\times 100\\% = 3\\%$." },
    { id: "w66_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $10\\text{ g}$ hỗn hợp bột $\\ce{Fe, Cu}$ vào dung dịch $\\ce{H2SO4}$ loãng dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Khối lượng $\\ce{Cu}$ trong hỗn hợp là bao nhiêu gam?", answer: "4.4", tolerance: 0.1, solution: "$n_{\\ce{Fe}} = 0,1\\text{ mol}$ ($5,6\\text{ g}$) $\\Rightarrow m_{\\ce{Cu}} = 10 - 5,6 = 4,4\\text{ g}$." },
    { id: "w66_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ hỗn hợp $\\ce{CH4}$ và $\\ce{C2H2}$ thu được $0,3\\text{ mol}$ $\\ce{CO2}$. Số mol $\\ce{CH4}$ trong hỗn hợp là bao nhiêu mol?", answer: "0.1", tolerance: 0.01, solution: "$x + y = 0,2$; $x + 2y = 0,3 \\Rightarrow y = 0,1; x = 0,1\\text{ mol}$." },
    { id: "w66_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một viên thuốc dạ dày nặng $1\\text{ g}$ chứa $\\ce{NaHCO3}$ và tá dược trơ. Hòa tan hoàn toàn 2 viên thuốc vào $50\\text{ mL}$ dung dịch $\\ce{HCl}$ $0,4\\text{ M}$. Để trung hòa lượng $\\ce{HCl}$ còn dư cần dùng vừa đủ $20\\text{ mL}$ dung dịch $\\ce{NaOH}$ $0,5\\text{ M}$. Tính phần trăm khối lượng $\\ce{NaHCO3}$ trong viên thuốc.", solution: "$n_{\\ce{HCl bđ}} = 0,05 \\times 0,4 = 0,02\\text{ mol}$; $n_{\\ce{HCl dư}} = n_{\\ce{NaOH}} = 0,02 \\times 0,5 = 0,01\\text{ mol}$.\n$n_{\\ce{HCl pư với NaHCO3}} = 0,02 - 0,01 = 0,01\\text{ mol} \\Rightarrow n_{\\ce{NaHCO3}} = 0,01\\text{ mol}$ ($0,84\\text{ g}$ trong 2 viên).\n$\\%m_{\\ce{NaHCO3}} = (0,84 / 2) \\times 100\\% = 42\\%$.", rubric: [
      { step: "Tính đúng $n_{\\ce{HCl pư}} = 0,01\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $\\%m_{\\ce{NaHCO3}} = 42\\%$", points: 0.5 }
    ] },
    { id: "w66_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $200\\text{ mL}$ dung dịch X chứa $\\ce{NaOH}$ $0,5\\text{ M}$ và $\\ce{Na2CO3}$ $0,5\\text{ M}$. Nhỏ từ từ đến hết $150\\text{ mL}$ dung dịch $\\ce{HCl}$ $1\\text{ M}$ vào dung dịch X. Tính thể tích khí $\\ce{CO2}$ (đkc) thoát ra.", solution: "$n_{\\ce{NaOH}} = 0,1\\text{ mol}$; $n_{\\ce{Na2CO3}} = 0,1\\text{ mol}$; $n_{\\ce{HCl}} = 0,15\\text{ mol}$.\nThứ tự: (1) $\\ce{NaOH + HCl -> NaCl + H2O}$ (tốn $0,1\\text{ mol}$ $\\ce{HCl}$, còn $0,05\\text{ mol}$).\n(2) $\\ce{Na2CO3 + HCl -> NaHCO3 + NaCl}$ ($0,05\\text{ mol}$ $\\ce{HCl}$ chỉ đủ chuyển một nửa $\\ce{Na2CO3}$ thành $\\ce{NaHCO3}$, chưa sinh $\\ce{CO2}$).\nVậy $V_{\\ce{CO2}} = 0\\text{ L}$.", rubric: [
      { step: "Nêu đúng thứ tự phản ứng (1) trước rồi đến (2)", points: 0.5 },
      { step: "Chứng minh $\\ce{HCl}$ chưa đủ tạo khí $\\Rightarrow V_{\\ce{CO2}} = 0\\text{ L}$", points: 0.5 }
    ] },
    { id: "w66_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $7,6\\text{ g}$ hỗn hợp gồm $\\ce{Fe}$ và $\\ce{MgO}$ trong dung dịch $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc) và dung dịch X. Cho $\\ce{NaOH}$ dư vào X, lọc lấy kết tủa nung ngoài không khí đến khối lượng không đổi thu được $m\\text{ g}$ chất rắn. Tính $m$.", solution: "$n_{\\ce{Fe}} = n_{\\ce{H2}} = 0,1\\text{ mol}$ ($5,6\\text{ g}$) $\\Rightarrow m_{\\ce{MgO}} = 7,6 - 5,6 = 2,0\\text{ g}$ ($n_{\\ce{MgO}} = 0,05\\text{ mol}$).\nNung kết tủa ngoài không khí: $\\ce{Fe}$ chuyển thành $\\ce{Fe2O3}$ ($0,05\\text{ mol} = 8,0\\text{ g}$), $\\ce{Mg}$ chuyển thành $\\ce{MgO}$ ($0,05\\text{ mol} = 2,0\\text{ g}$).\nTổng $m = 8,0 + 2,0 = 10,0\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Fe}} = 0,1\\text{ mol}$ và $n_{\\ce{MgO}} = 0,05\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng chất rắn gồm $\\ce{Fe2O3}$ ($8\\text{ g}$) + $\\ce{MgO}$ ($2\\text{ g}$) $= 10\\text{ g}$", points: 0.5 }
    ] },
    { id: "w66_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $8,6\\text{ g}$ một alkane X thu được $14,874\\text{ L}$ khí $\\ce{CO2}$ (đkc). Xác định CTPT của X và viết công thức cấu tạo của đồng phân mạch nhánh nhiều nhánh nhất của X.", solution: "$n_{\\ce{CO2}} = 14,874 / 24,79 = 0,6\\text{ mol}$ ($m_{\\text{C}} = 7,2\\text{ g}$); $m_{\\text{H}} = 8,6 - 7,2 = 1,4\\text{ g}$ ($1,4\\text{ mol}$).\nTỉ lệ C:H $= 0,6 : 1,4 = 3 : 7 = 6 : 14 \\Rightarrow \\ce{C6H14}$ ($M=86$).\nĐồng phân nhiều nhánh nhất: $\\ce{(CH3)3C-CH2-CH3}$ (2,2-dimethylbutane).", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C6H14}$", points: 0.5 },
      { step: "Viết đúng CTCT 2,2-dimethylbutane", points: 0.5 }
    ] },
    { id: "w66_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ tinh bột lên men thành ethylic alcohol (hiệu suất $80\\%$), rồi oxi hóa toàn bộ lượng alcohol thu được thành acetic acid bằng men giấm (hiệu suất $75\\%$). Để trung hòa toàn bộ lượng acetic acid tạo ra cần dùng vừa đủ $300\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Tính $m$.", solution: "$n_{\\ce{CH3COOH}} = n_{\\ce{NaOH}} = 0,3\\text{ mol}$.\n$n_{\\ce{C2H5OH}} = 0,3 / 0,75 = 0,4\\text{ mol}$.\n$n_{\\text{mắt xích tinh bột}} = (0,4 / 2) / 0,8 = 0,25\\text{ mol} \\Rightarrow m = 0,25 \\times 162 = 40,5\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C2H5OH}} = 0,4\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{tinh bột}} = 40,5\\text{ g}$", points: 0.5 }
    ] }
  ]
};
