window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[56] = {
  week: 56,
  title: "CĐ 1B: Phương pháp Tăng giảm khối lượng & Quy đổi hỗn hợp",
  objectives: [
    "Thành thạo phương pháp Tăng – Giảm khối lượng khi chuyển từ chất này sang chất khác (nhúng kim loại vào muối, muối carbonate $\\rightarrow$ muối chloride/sulfate, nung muối).",
    "Biết cách Quy đổi hỗn hợp nhiều chất phức tạp (như $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ quy về $\\ce{Fe}$ và $\\ce{O}$, hoặc chất béo/hydrocarbon quy về thành phần đơn giản).",
    "Giải được các bài toán HSG 9 và Chuyên Hóa 10 bằng 2–3 dòng tính toán thay vì lập hệ 4 ẩn."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu bài tập CĐ 1B (bảng độ tăng giảm khối lượng chuẩn).",
    sessions: [
      {
        name: "Buổi 1: Phương pháp Tăng – Giảm khối lượng",
        guide: "Chốt các cặp chuyển đổi kinh điển: (1) $\\ce{MCO3 -> MCl2}$ tăng $71 - 60 = 11\\text{ g/mol}$; (2) $\\ce{M2CO3 -> 2MCl}$ tăng $71 - 60 = 11\\text{ g/mol}$; (3) $\\ce{MCO3 -> MSO4}$ tăng $96 - 60 = 36\\text{ g/mol}$; (4) $\\ce{Fe + Cu^{2+} -> Cu}$ tăng $8\\text{ g/mol}$.",
        pitfalls: "HS hay quên chia cho độ chênh lệch trên 1 mol phản ứng."
      },
      {
        name: "Buổi 2: Phương pháp Quy đổi hỗn hợp",
        guide: "Hướng dẫn quy đổi $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ thành $x\\text{ mol Fe}$ và $y\\text{ mol O}$; hoặc quy đổi $\\ce{FeS, FeS2, S}$ thành $\\ce{Fe}$ và $\\ce{S}$.",
        pitfalls: "Khi quy đổi, HS hay quên rằng lượng nguyên tố sau quy đổi phải bảo toàn khối lượng và số mol nguyên tử của hỗn hợp gốc."
      },
      {
        name: "Buổi 3: Luyện đề HSG chuyên sâu CĐ 1B"
      }
    ]
  },
  lecture: [
    {
      title: "1. Tăng – Giảm khối lượng & Quy đổi hỗn hợp",
      content: `
<ul>
  <li><strong>Tăng – Giảm khối lượng:</strong> Dựa vào sự chênh lệch khối lượng giữa chất sản phẩm và chất ban đầu cho $1\\text{ mol}$ phản ứng:<br>
  $n_{\\text{phản ứng}} = \\frac{|m_{\\text{sau}} - m_{\\text{trước}}|}{\\Delta M_{\\text{1 mol}}}$.<br>
  <em>Ví dụ:</em> Thay nhóm $\\ce{CO3^{2-}}$ ($60$) bằng $2\\ce{Cl-}$ ($71$) $\\Rightarrow$ khối lượng muối tăng $11\\text{ g}$ cho mỗi mol $\\ce{CO3^{2-}}$.</li>
  <li><strong>Quy đổi hỗn hợp:</strong> Biến hỗn hợp nhiều chất có chung nguyên tố thành ít thành phần hơn. Ví dụ: hỗn hợp $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ quy về <strong>$\\ce{Fe}$ ($x\\text{ mol}$) và $\\ce{O}$ ($y\\text{ mol}$)</strong> sao cho $56x + 16y = m_{\\text{hh}}$.</li>
</ul>`,
      example: "Hòa tan hoàn toàn 20 g hỗn hợp MgCO₃, CaCO₃, BaCO₃ trong dung dịch HCl dư thu được 22,2 g muối chloride khan. Tính thể tích khí CO₂ (đkc) thoát ra.\nGiải: Muối tăng 22,2 - 20 = 2,2 g → n(CO₂) = 2,2 / 11 = 0,2 mol → V = 0,2 × 24,79 = 4,958 L.",
      checkpoint: {
        question: "Khi chuyển 1 mol muối CaCO₃ thành muối CaSO₄, khối lượng muối thay đổi như thế nào?",
        options: ["A. Tăng 11 g", "B. Giảm 36 g", "C. Tăng 36 g", "D. Tăng 25 g"],
        answer: 2,
        explanation: "M(SO₄) - M(CO₃) = 96 - 60 = +36 g/mol."
      }
    }
  ],
  questions: [
    { id: "w56_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Khi chuyển $1\\text{ mol}$ $\\ce{Na2CO3}$ thành $2\\text{ mol}$ $\\ce{NaCl}$ bằng dung dịch $\\ce{HCl}$, khối lượng muối thay đổi:", options: ["A. Tăng $11\\text{ g}$", "B. Giảm $11\\text{ g}$", "C. Tăng $22\\text{ g}$", "D. Tăng $36\\text{ g}$"], answer: 0, solution: "$2\\times 58,5 - 106 = 117 - 106 = +11\\text{ g}$." },
    { id: "w56_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Nhúng một thanh $\\ce{Fe}$ vào dung dịch $\\ce{CuSO4}$. Cứ $0,1\\text{ mol}$ $\\ce{Fe}$ phản ứng thì khối lượng thanh $\\ce{Fe}$:", options: ["A. Tăng $0,8\\text{ g}$", "B. Giảm $0,8\\text{ g}$", "C. Tăng $6,4\\text{ g}$", "D. Không đổi"], answer: 0, solution: "$0,1 \\times (64 - 56) = +0,8\\text{ g}$." },
    { id: "w56_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nhúng thanh $\\ce{Zn}$ vào dung dịch $\\ce{Cu(NO3)2}$. Cứ $0,2\\text{ mol}$ $\\ce{Zn}$ tan ra thì khối lượng thanh $\\ce{Zn}$:", options: ["A. Tăng $0,2\\text{ g}$", "B. Giảm $0,2\\text{ g}$", "C. Tăng $1,6\\text{ g}$", "D. Giảm $1,6\\text{ g}$"], answer: 1, solution: "$0,2 \\times (64 - 65) = -0,2\\text{ g}$ (giảm $0,2\\text{ g}$)." },
    { id: "w56_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Hỗn hợp gồm $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ có thể quy đổi thành:", options: ["A. $\\ce{Fe}$ và $\\ce{O}$", "B. $\\ce{Fe}$ và $\\ce{H2O}$", "C. $\\ce{FeO}$ và $\\ce{O}$", "D. $\\ce{Fe}$ và $\\ce{CO2}$"], answer: 0, solution: "Tất cả chỉ chứa 2 nguyên tố là $\\ce{Fe}$ và $\\ce{O}$." },
    { id: "w56_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Nung $0,1\\text{ mol}$ $\\ce{CaCO3}$ đến hoàn toàn thành $\\ce{CaO}$ thì khối lượng chất rắn giảm đi:", options: ["A. $4,4\\text{ g}$", "B. $5,6\\text{ g}$", "C. $10\\text{ g}$", "D. $2,2\\text{ g}$"], answer: 0, solution: "Khối lượng giảm chính là $m_{\\ce{CO2}} = 0,1 \\times 44 = 4,4\\text{ g}$." },
    { id: "w56_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $15\\text{ g}$ hỗn hợp $\\ce{CaCO3, MgCO3}$ trong $\\ce{H2SO4}$ loãng dư thu được $18,6\\text{ g}$ muối sulfate khan. Số mol $\\ce{CO2}$ thoát ra là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,15\\text{ mol}$", "D. $0,3\\text{ mol}$"], answer: 0, solution: "$n_{\\ce{CO2}} = (18,6 - 15) / (96 - 60) = 3,6 / 36 = 0,1\\text{ mol}$." },
    { id: "w56_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nhúng Cu vào dung dịch AgNO₃ làm khối lượng thanh Cu tăng lên.", answer: true },
      { text: "Nhúng Fe vào dung dịch AgNO₃ làm khối lượng thanh Fe giảm xuống.", answer: false },
      { text: "Khi chuyển muối RCl₂ thành R(NO₃)₂, khối lượng muối tăng thêm 53 g cho mỗi mol.", answer: true },
      { text: "Có thể quy đổi hỗn hợp FeS và FeS₂ thành Fe và S.", answer: true }
    ], solution: "b) Sai: $1\\text{ mol}$ Fe ($56$) đẩy $2\\text{ mol}$ Ag ($216$) $\\Rightarrow$ thanh Fe tăng mạnh." },
    { id: "w56_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nhiệt phân Fe(OH)₃ thành Fe₂O₃ làm khối lượng chất rắn giảm.", answer: true },
      { text: "Khử CuO bằng CO làm khối lượng chất rắn tăng.", answer: false },
      { text: "Khi chuyển 1 mol K₂CO₃ thành 2 mol KCl, khối lượng muối tăng 11 g.", answer: true },
      { text: "Phương pháp quy đổi có thể dùng cho cả hợp chất hữu cơ (như quy alkene về CH₂).", answer: true }
    ], solution: "b) Sai: $\\ce{CuO -> Cu}$ khối lượng rắn giảm đi lượng O bị lấy." },
    { id: "w56_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Nhúng một thanh $\\ce{Fe}$ nặng $20\\text{ g}$ vào dung dịch $\\ce{AgNO3}$. Sau một thời gian lấy thanh $\\ce{Fe}$ ra cân nặng $28\\text{ g}$ (toàn bộ Ag bám hết lên thanh). Số mol $\\ce{Fe}$ đã phản ứng là bao nhiêu?", answer: "0.05", tolerance: 0.005, solution: "$\\ce{Fe} + 2\\ce{AgNO3} \\rightarrow \\ce{Fe(NO3)2} + 2\\ce{Ag}$. 1 mol Fe làm tăng $216 - 56 = 160\\text{ g}$. Tăng $8\\text{ g} \\Rightarrow n_{\\ce{Fe}} = 8/160 = 0,05\\text{ mol}$." },
    { id: "w56_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $30\\text{ g}$ hỗn hợp gồm $\\ce{Na2CO3, K2CO3, CaCO3}$ bằng dung dịch $\\ce{HCl}$ dư thu được $33,3\\text{ g}$ muối chloride khan. Thể tích khí $\\ce{CO2}$ (đkc) thoát ra là bao nhiêu lít?", answer: "7.437", tolerance: 0.05, solution: "$n_{\\ce{CO2}} = (33,3 - 30)/11 = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\times 24,79 = 7,437\\text{ L}$." },
    { id: "w56_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ tác dụng hoàn toàn với khí $\\ce{CO}$ dư nung nóng thu được $11,2\\text{ g}$ $\\ce{Fe}$ và $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc). Giá trị của $m$ là:", options: ["A. $14,4\\text{ g}$", "B. $12,8\\text{ g}$", "C. $16,0\\text{ g}$", "D. $13,6\\text{ g}$"], answer: 0, solution: "Quy đổi hỗn hợp thành $\\ce{Fe}$ ($11,2\\text{ g}$) và $\\ce{O}$ ($n_{\\ce{O}} = n_{\\ce{CO2}} = 0,2\\text{ mol} = 3,2\\text{ g}$) $\\Rightarrow m = 11,2 + 3,2 = 14,4\\text{ g}$." },
    { id: "w56_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Nhúng một lá kim loại M (hóa trị II) vào dung dịch $\\ce{CuSO4}$ dư, sau khi $0,1\\text{ mol}$ M tan hết thì khối lượng lá kim loại tăng $4\\text{ g}$. Kim loại M là:", options: ["A. $\\ce{Fe}$", "B. $\\ce{Zn}$", "C. $\\ce{Mg}$", "D. $\\ce{Pb}$"], answer: 2, solution: "$0,1 \\times (64 - M) = 4 \\Rightarrow 64 - M = 40 \\Rightarrow M = 24$ ($\\ce{Mg}$)." },
    { id: "w56_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Nung $10\\text{ g}$ $\\ce{Fe(OH)3}$ một thời gian thu được $8,2\\text{ g}$ chất rắn. Số mol $\\ce{H2O}$ bay hơi là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,05\\text{ mol}$", "D. $0,15\\text{ mol}$"], answer: 0, solution: "$m_{\\ce{H2O}} = 10 - 8,2 = 1,8\\text{ g} \\Rightarrow n = 0,1\\text{ mol}$." },
    { id: "w56_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{BaCl2}$ tác dụng vừa đủ với muối $\\ce{Na2SO4}$ tạo kết tủa $\\ce{BaSO4}$ và $\\ce{NaCl}$. Tổng khối lượng muối trong dung dịch sau phản ứng giảm đi bao nhiêu gam so với $\\ce{BaCl2}$ ban đầu?", answer: "18.2", tolerance: 0.2, solution: "$0,2\\text{ mol}$ $\\ce{BaCl2}$ ($41,6\\text{ g}$) tạo $0,4\\text{ mol}$ $\\ce{NaCl}$ ($23,4\\text{ g}$) $\\Rightarrow$ giảm $41,6 - 23,4 = 18,2\\text{ g}$." },
    { id: "w56_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Quy đổi $10,8\\text{ g}$ hỗn hợp gồm $\\ce{FeS}$ và $\\ce{FeS2}$ thành $\\ce{Fe}$ ($0,1\\text{ mol}$) và $\\ce{S}$. Đốt cháy hoàn toàn lượng hỗn hợp trên trong $\\ce{O2}$ dư thu được bao nhiêu lít khí $\\ce{SO2}$ ở đkc?", answer: "4.028", tolerance: 0.1, solution: "$m_{\\text{S}} = 10,8 - 0,1\\times 56 = 5,2\\text{ g} \\Rightarrow n_{\\text{S}} = 5,2/32 = 0,1625\\text{ mol} \\Rightarrow V_{\\ce{SO2}} = 0,1625 \\times 24,79 \\approx 4,028\\text{ L}$." },
    { id: "w56_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ hòa tan hết vào dung dịch $\\ce{H2SO4}$ đặc nóng dư thu được $4,958\\text{ L}$ khí $\\ce{SO2}$ (đkc, sản phẩm khử duy nhất) và $40\\text{ g}$ muối $\\ce{Fe2(SO4)3}$. Tính $m$.", solution: "Quy đổi hỗn hợp thành $\\ce{Fe}$ ($x\\text{ mol}$) và $\\ce{O}$ ($y\\text{ mol}$).\nBTNT Fe: $n_{\\ce{Fe2(SO4)3}} = 40/400 = 0,1\\text{ mol} \\Rightarrow x = 0,2\\text{ mol}$.\nBảo toàn electron: $3x = 2y + 2 n_{\\ce{SO2}} \\Rightarrow 3(0,2) = 2y + 2(0,2) \\Rightarrow 2y = 0,2 \\Rightarrow y = 0,1\\text{ mol}$.\nVậy $m = 0,2 \\times 56 + 0,1 \\times 16 = 11,2 + 1,6 = 12,8\\text{ g}$.", rubric: [
      { step: "Quy đổi thành $\\ce{Fe, O}$ và tính đúng $n_{\\ce{Fe}} = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Áp dụng bảo toàn e tìm $n_{\\ce{O}} = 0,1\\text{ mol}$ và $m = 12,8\\text{ g}$", points: 0.5 }
    ] },
    { id: "w56_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nhúng thanh $\\ce{Zn}$ nặng $50\\text{ g}$ vào $200\\text{ mL}$ dung dịch $\\ce{AgNO3}$ $1\\text{ M}$. Sau một thời gian lấy thanh $\\ce{Zn}$ ra rửa sạch sấy khô cân nặng $61,325\\text{ g}$. Tính nồng độ mol của muối $\\ce{Zn(NO3)2}$ tạo thành trong dung dịch (xem thể tích dung dịch không đổi).", solution: "$\\ce{Zn} + 2\\ce{AgNO3} \\rightarrow \\ce{Zn(NO3)2} + 2\\ce{Ag}$. Cứ $1\\text{ mol}$ $\\ce{Zn}$ tan làm thanh tăng $2\\times 108 - 65 = 151\\text{ g}$.\nKhối lượng thanh tăng $= 61,325 - 50 = 11,325\\text{ g} \\Rightarrow n_{\\ce{Zn pư}} = 11,325 / 151 = 0,075\\text{ mol}$.\n$C_M(\\ce{Zn(NO3)2}) = 0,075 / 0,2 = 0,375\\text{ M}$.", rubric: [
      { step: "Tính đúng độ tăng khối lượng $11,325\\text{ g}$ và $n_{\\ce{Zn pư}} = 0,075\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $C_M = 0,375\\text{ M}$", points: 0.5 }
    ] },
    { id: "w56_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $10\\text{ g}$ hỗn hợp hai muối $\\ce{RCO3}$ và $\\ce{R'2(CO3)3}$ bằng dung dịch $\\ce{HCl}$ dư thu được dung dịch X và $1,2395\\text{ L}$ khí $\\ce{CO2}$ (đkc). Cô cạn dung dịch X thu được bao nhiêu gam muối khan?", solution: "$n_{\\ce{CO2}} = 1,2395 / 24,79 = 0,05\\text{ mol}$.\nCứ $1\\text{ mol}$ $\\ce{CO3^{2-}}$ chuyển thành $2\\text{ mol}$ $\\ce{Cl-}$ làm khối lượng muối tăng $71 - 60 = 11\\text{ g}$.\nVậy $m_{\\text{muối khan}} = 10 + 0,05 \\times 11 = 10,55\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,05\\text{ mol}$", points: 0.5 },
      { step: "Áp dụng tăng giảm khối lượng tính đúng $m = 10,55\\text{ g}$", points: 0.5 }
    ] },
    { id: "w56_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nung $10\\text{ g}$ hỗn hợp gồm $\\ce{MgCO3}$ và $\\ce{CaCO3}$ đến khi khối lượng chất rắn không đổi thu được $5,6\\text{ g}$ chất rắn gồm hai oxide. Tính tổng số mol khí $\\ce{CO2}$ thoát ra.", solution: "Khối lượng chất rắn giảm chính là khối lượng $\\ce{CO2}$ bay ra: $m_{\\ce{CO2}} = 10 - 5,6 = 4,4\\text{ g} \\Rightarrow n_{\\ce{CO2}} = 4,4 / 44 = 0,1\\text{ mol}$.", rubric: [
      { step: "Xác định độ giảm khối lượng rắn bằng $m_{\\ce{CO2}} = 4,4\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,1\\text{ mol}$", points: 0.5 }
    ] },
    { id: "w56_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Quy đổi $8,4\\text{ g}$ hỗn hợp gồm 3 alkene $\\ce{C2H4, C3H6, C4H8}$ thành nhóm $\\ce{CH2}$ ($M=14$). Đốt cháy hoàn toàn hỗn hợp trên cần bao nhiêu lít khí $\\ce{O2}$ (đkc)?", solution: "$n_{\\ce{CH2}} = 8,4 / 14 = 0,6\\text{ mol}$.\n$\\ce{CH2 + 1,5O2 -> CO2 + H2O} \\Rightarrow n_{\\ce{O2}} = 0,6 \\times 1,5 = 0,9\\text{ mol} \\Rightarrow V_{\\ce{O2}} = 0,9 \\times 24,79 = 22,311\\text{ L}$.", rubric: [
      { step: "Quy đổi thành $0,6\\text{ mol}$ $\\ce{CH2}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{O2}} = 0,9\\text{ mol}$ và $V = 22,311\\text{ L}$", points: 0.5 }
    ] }
  ]
};
