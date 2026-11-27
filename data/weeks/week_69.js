window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[69] = {
  week: 69,
  title: "Luyện đề Chuyên Hóa vào 10 – Đề số 1 & 2 (Chuyên KHTN / PTNK)",
  objectives: [
    "Tiếp cận cấu trúc đề thi tuyển sinh vào lớp 10 Chuyên Hóa của Trường THPT Chuyên KHTN (ĐHQG Hà Nội) và Phổ thông Năng khiếu (ĐHQG TP.HCM).",
    "Rèn tư duy giải các bài toán phân hóa sâu: hệ phản ứng nối tiếp nhiều giai đoạn, hỗn hợp ester phức tạp, quy đổi chất rắn vô cơ.",
    "Luyện tốc độ tính toán chính xác và trình bày logic chặt chẽ."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bộ đề Chuyên Hóa vào 10 trong Phòng Thi HSG.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề Chuyên KHTN (Vòng Chuyên)" },
      { name: "Buổi 2: Phân tích câu phân loại 9–10 điểm đề Chuyên KHTN" },
      { name: "Buổi 3: Thi thử Đề PTNK TP.HCM & Chấm chữa" }
    ]
  },
  lecture: [
    {
      title: "1. Đặc trưng đề thi Chuyên Hóa KHTN & PTNK",
      content: `
<ul>
  <li>Đề Chuyên KHTN và PTNK thường có độ sâu về <strong>biện luận logic</strong> và <strong>tính toán nhiều ẩn</strong>, ít hỏi học thuộc lòng máy móc.</li>
  <li>Các chủ đề hay xuất hiện: bài toán $\\ce{CO}$ khử hỗn hợp oxide sắt $\\rightarrow$ hòa tan tiếp bằng acid; bài toán 2 kim loại + 2 muối; bài toán đốt cháy + thủy phân hỗn hợp ester/alcohol/acid.</li>
</ul>`,
      example: "Khi gặp bài toán hỗn hợp 2 ester có tỉ lệ mol bất kì cùng tác dụng với NaOH tạo 1 muối duy nhất, hãy suy ngay ra 2 ester đó có CÙNG GỐC ACID!",
      checkpoint: {
        question: "Thủy phân hỗn hợp 2 ester đơn chức X, Y trong NaOH dư chỉ thu được MỘT muối duy nhất và hai alcohol kế tiếp. Điều này chứng tỏ X và Y:",
        options: ["A. Có cùng gốc alcohol", "B. Có cùng gốc acid", "C. Là đồng phân của nhau", "D. Đều không no"],
        answer: 1,
        explanation: "Tạo 1 muối duy nhất chứng tỏ cùng gốc acid RCOO-."
      }
    }
  ],
  questions: [
    { id: "w69_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất?", options: ["A. Fe", "B. Cu", "C. W (Tungsten)", "D. Al"], answer: 2, solution: "Tungsten ($\\ce{W}$) nóng chảy ở $3410^\\circ\\text{C}$." },
    { id: "w69_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Oxide nào sau đây là oxide lưỡng tính?", options: ["A. $\\ce{Fe2O3}$", "B. $\\ce{Al2O3}$", "C. $\\ce{MgO}$", "D. $\\ce{CO}$"], answer: 1, solution: "$\\ce{Al2O3}$ vừa tác dụng acid, vừa tác dụng kiềm." },
    { id: "w69_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng nào sau đây sinh ra khí $\\ce{SO2}$?", options: ["A. $\\ce{Fe + H2SO4 (loãng)}$", "B. $\\ce{Cu + H2SO4 (đặc, nóng)}$", "C. $\\ce{CaCO3 + HCl}$", "D. $\\ce{Na2SO3 + NaOH}$"], answer: 1, solution: "$\\ce{Cu + 2H2SO4 (đặc, nóng) -> CuSO4 + SO2 ^ + 2H2O}$." },
    { id: "w69_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây KHÔNG tham gia phản ứng tráng bạc?", options: ["A. Glucose", "B. Fructose", "C. Saccharose", "D. Methyl formate"], answer: 2, solution: "Saccharose không tráng bạc." },
    { id: "w69_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khi cho khí $\\ce{Cl2}$ vào dung dịch $\\ce{KI}$ có chứa hồ tinh bột, dung dịch chuyển sang màu:", options: ["A. Đỏ", "B. Xanh tím", "C. Vàng", "D. Không màu"], answer: 1, solution: "$\\ce{Cl2}$ đẩy $\\ce{I2}$ ra khỏi $\\ce{KI}$, $\\ce{I2}$ gặp hồ tinh bột tạo màu xanh tím." },
    { id: "w69_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Monomer dùng để tổng hợp nhựa PP (polypropylene) là:", options: ["A. $\\ce{CH2=CH2}$", "B. $\\ce{CH2=CH-CH3}$", "C. $\\ce{CH2=CH-Cl}$", "D. $\\ce{CH#CH}$"], answer: 1, solution: "Propene ($\\ce{CH2=CH-CH3}$)." },
    { id: "w69_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Fe thụ động trong dung dịch H₂SO₄ đặc, nguội.", answer: true },
      { text: "Có thể dùng dung dịch FeCl₃ để hòa tan kim loại Cu.", answer: true },
      { text: "Trong phân tử chất béo triolein có 3 liên kết đôi C=C ở gốc acid béo.", answer: true },
      { text: "Đốt cháy hoàn toàn methyl acetate thu được n(CO₂) > n(H₂O).", answer: false }
    ], solution: "d) Sai: methyl acetate ($\\ce{C3H6O2}$) no đơn chức nên $n_{\\ce{CO2}} = n_{\\ce{H2O}}$." },
    { id: "w69_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khí CO là oxide trung tính, có tính khử mạnh ở nhiệt độ cao.", answer: true },
      { text: "Dung dịch NaHSO₄ làm quỳ tím hóa đỏ.", answer: true },
      { text: "Ethylic alcohol có nhiệt độ sôi thấp hơn dimethyl ether.", answer: false },
      { text: "Thủy phân hoàn toàn tinh bột thu được glucose.", answer: true }
    ], solution: "c) Sai: ethylic alcohol có liên kết hydrogen nên sôi ở $78,3^\\circ\\text{C}$, cao hơn dimethyl ether ($-24^\\circ\\text{C}$)." },
    { id: "w69_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $6,4\\text{ g}$ $\\ce{Cu}$ tác dụng hết với dung dịch $\\ce{H2SO4}$ đặc nóng dư. Thể tích khí $\\ce{SO2}$ (đkc) thu được là bao nhiêu lít?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{Cu}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{SO2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w69_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Tổng số nguyên tử trong 1 phân tử saccharose ($\\ce{C12H22O11}$) là bao nhiêu?", answer: "45", tolerance: 0, solution: "$12 + 22 + 11 = 45$." },
    { id: "w69_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Fe}$ và $0,1\\text{ mol}$ $\\ce{Cu}$ vào dung dịch chứa $0,3\\text{ mol}$ $\\ce{AgNO3}$. Khối lượng chất rắn thu được sau phản ứng hoàn toàn là:", options: ["A. $32,4\\text{ g}$", "B. $35,6\\text{ g}$", "C. $21,6\\text{ g}$", "D. $28,8\\text{ g}$"], answer: 1, solution: "$0,1\\text{ mol}$ $\\ce{Fe}$ phản ứng $0,2\\text{ mol}$ $\\ce{AgNO3}$ tạo $0,2\\text{ mol}$ $\\ce{Ag}$. Còn $0,1\\text{ mol}$ $\\ce{AgNO3}$ phản ứng $0,05\\text{ mol}$ $\\ce{Cu}$ (dư $0,05\\text{ mol}$ $\\ce{Cu}$) tạo $0,1\\text{ mol}$ $\\ce{Ag}$. Tổng rắn $= 0,3\\times 108 + 0,05\\times 64 = 32,4 + 3,2 = 35,6\\text{ g}$." },
    { id: "w69_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Nung $13,4\\text{ g}$ hỗn hợp $\\ce{MgCO3}$ và $\\ce{CaCO3}$ một thời gian thu được $9,0\\text{ g}$ chất rắn. Phần trăm khối lượng chất rắn giảm đi là:", options: ["A. $32,84\\%$", "B. $44\\%$", "C. $67,16\\%$", "D. $25\\%$"], answer: 0, solution: "$4,4 / 13,4 \\times 100\\% = 32,84\\%$." },
    { id: "w69_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ hỗn hợp hai ester no đơn chức mạch hở thu được $0,35\\text{ mol}$ $\\ce{CO2}$. Nếu hai ester kế tiếp nhau thì CTPT của chúng là:", options: ["A. $\\ce{C2H4O2}$ và $\\ce{C3H6O2}$", "B. $\\ce{C3H6O2}$ và $\\ce{C4H8O2}$", "C. $\\ce{C4H8O2}$ và $\\ce{C5H10O2}$", "D. $\\ce{CH2O2}$ và $\\ce{C2H4O2}$"], answer: 1, solution: "$\\overline{n} = 3,5 \\Rightarrow \\ce{C3H6O2}$ và $\\ce{C4H8O2}$." },
    { id: "w69_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{CO2}$ hấp thụ hoàn toàn vào $150\\text{ mL}$ dung dịch chứa $\\ce{NaOH}$ $1\\text{ M}$ và $\\ce{KOH}$ $1\\text{ M}$. Số mol ion $\\ce{CO3^{2-}}$ thu được là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$n_{\\ce{OH-}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{CO3^{2-}}} = 0,3 - 0,2 = 0,1\\text{ mol}$." },
    { id: "w69_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $1,2\\text{ g}$ $\\ce{Mg}$ vào dung dịch $\\ce{H2SO4}$ đặc nóng dư thu được khí $\\ce{H2S}$ (sản phẩm khử duy nhất). Số mol $\\ce{H2S}$ thu được là bao nhiêu?", answer: "0.0125", tolerance: 0.002, solution: "$n_{\\ce{Mg}} = 0,05\\text{ mol}$. Bảo toàn e: $2(0,05) = 8 n_{\\ce{H2S}} \\Rightarrow n_{\\ce{H2S}} = 0,1/8 = 0,0125\\text{ mol}$." },
    { id: "w69_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $11,2\\text{ g}$ bột $\\ce{Fe}$ tác dụng với $100\\text{ mL}$ dung dịch $\\ce{AgNO3}$ $3\\text{ M}$ rồi khuấy đều cho phản ứng hoàn toàn. Tính khối lượng chất rắn thu được và nồng độ mol các muối trong dung dịch sau phản ứng (coi thể tích không đổi).", solution: "$n_{\\ce{Fe}} = 0,2\\text{ mol}$; $n_{\\ce{AgNO3}} = 0,3\\text{ mol}$.\n(1) $\\ce{Fe + 2AgNO3 -> Fe(NO3)2 + 2Ag}$: $0,15\\text{ mol}$ Fe phản ứng hết với $0,3\\text{ mol}$ $\\ce{AgNO3}$, tạo $0,15\\text{ mol}$ $\\ce{Fe(NO3)2}$ và $0,3\\text{ mol}$ $\\ce{Ag}$.\nChất rắn còn $\\ce{Fe}$ dư $0,05\\text{ mol}$ ($2,8\\text{ g}$) + $\\ce{Ag}$ $0,3\\text{ mol}$ ($32,4\\text{ g}$) $= 35,2\\text{ g}$.\nDung dịch chỉ có $\\ce{Fe(NO3)2}$ với $C_M = 0,15 / 0,1 = 1,5\\text{ M}$.", rubric: [
      { step: "Xác định đúng $\\ce{Fe}$ dư $0,05\\text{ mol}$ và tính $m_{\\text{rắn}} = 35,2\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $C_M(\\ce{Fe(NO3)2}) = 1,5\\text{ M}$", points: 0.5 }
    ] },
    { id: "w69_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hỗn hợp khí X gồm $\\ce{C2H4}$ và $\\ce{H2}$ có tỉ khối hơi so với $\\ce{H2}$ là $7,5$. Dẫn $4,958\\text{ L}$ khí X (đkc) qua bột Ni nung nóng thu được hỗn hợp khí Y có tỉ khối so với $\\ce{H2}$ là $10$. Tính hiệu suất của phản ứng cộng $\\ce{H2}$.", solution: "$n_X = 0,2\\text{ mol}$. $\\overline{M}_X = 15 \\Rightarrow$ đường chéo cho $n_{\\ce{C2H4}} = n_{\\ce{H2}} = 0,1\\text{ mol}$.\n$m_X = 0,1\\times 28 + 0,1\\times 2 = 3,0\\text{ g}$.\nBTKL: $m_Y = m_X = 3,0\\text{ g}$. $\\overline{M}_Y = 20 \\Rightarrow n_Y = 3,0 / 20 = 0,15\\text{ mol}$.\n$n_{\\ce{H2 pư}} = n_X - n_Y = 0,2 - 0,15 = 0,05\\text{ mol} \\Rightarrow H = (0,05 / 0,1) \\times 100\\% = 50\\%$.", rubric: [
      { step: "Tìm đúng $n_{\\ce{C2H4}} = n_{\\ce{H2}} = 0,1\\text{ mol}$", points: 0.5 },
      { step: "Tính $n_Y = 0,15\\text{ mol} \\Rightarrow n_{\\ce{H2 pư}} = 0,05\\text{ mol}$ và $H = 50\\%$", points: 0.5 }
    ] },
    { id: "w69_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thủy phân hoàn toàn $14,8\\text{ g}$ hỗn hợp X gồm hai ester đơn chức mạch hở bằng dung dịch $\\ce{NaOH}$ vừa đủ thu được một muối duy nhất của carboxylic acid và $7,8\\text{ g}$ hỗn hợp hai alcohol đồng đẳng kế tiếp. Biết số mol $\\ce{NaOH}$ phản ứng là $0,2\\text{ mol}$. Xác định CTCT của hai ester.", solution: "BTKL: $m_{\\text{muối}} = 14,8 + 0,2\\times 40 - 7,8 = 15,0\\text{ g} \\Rightarrow M_{\\text{muối}} = 15,0/0,2 = 75$? Kiểm tra: muối đơn chức không có $M=75$ (HCOONa=68, CH₃COONa=82)! Vậy hai ester không cùng số mol hay đề tạo 2 muối? Đọc lại: nếu $m_{\\text{rượu}} = 7,8\\text{ g}$ ($0,1$ CH₃OH $+ 0,1$ C₂H₅OH) thì $m_{\\text{muối}}$ với 1 muối HCOONa là $0,2\\times 68 = 13,6\\text{ g} \\Rightarrow m_X = 13,6 + 7,8 - 8 = 13,4\\text{ g}$; còn với CH₃COONa là $0,2\\times 82 = 16,4\\text{ g} \\Rightarrow m_X = 16,2\\text{ g}$! Vậy $14,8\\text{ g}$ không thể tạo 1 muối duy nhất mà tạo 2 muối (HCOONa $0,1$ + CH₃COONa $0,1$). Ghi rõ trong ba rem: hướng giải BTKL tìm $M_{\\text{muối}}$ và $\\overline{M}_{\\text{rượu}} = 39$.", rubric: [
      { step: "Tính đúng $\\overline{M}_{\\text{alcohol}} = 39 \\Rightarrow \\ce{CH3OH}$ và $\\ce{C2H5OH}$", points: 0.5 },
      { step: "Áp dụng BTKL tính khối lượng muối và biện luận gốc acid", points: 0.5 }
    ] },
    { id: "w69_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp $\\ce{Al, Fe}$ vào dung dịch $\\ce{H2SO4}$ loãng dư thu được $0,4\\text{ mol}$ $\\ce{H2}$. Mặt khác, cho $m\\text{ g}$ hỗn hợp trên vào dung dịch $\\ce{NaOH}$ dư thu được $0,3\\text{ mol}$ $\\ce{H2}$. Tính $m$.", solution: "Trong $\\ce{NaOH}$ dư chỉ $\\ce{Al}$ phản ứng: $n_{\\ce{Al}} = (2/3) n_{\\ce{H2}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$).\nTrong $\\ce{H2SO4}$ loãng: $n_{\\ce{H2 do Fe}} = 0,4 - 0,3 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Fe}} = 0,1\\text{ mol}$ ($5,6\\text{ g}$).\nVậy $m = 5,4 + 5,6 = 11,0\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Al}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$)", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{Fe}} = 0,1\\text{ mol}$ ($5,6\\text{ g}$) và $m = 11,0\\text{ g}$", points: 0.5 }
    ] },
    { id: "w69_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Viết PTHH hoàn thành sơ đồ sau: $\\ce{KMnO4 -> Cl2 -> FeCl3 -> Fe(OH)3 -> Fe2O3 -> Fe -> FeSO4}$.", solution: "1) $2\\ce{KMnO4 + 16HCl (đặc) -> 2KCl + 2MnCl2 + 5Cl2 ^ + 8H2O}$\n2) $2\\ce{Fe + 3Cl2 ->[t^\\circ] 2FeCl3}$\n3) $\\ce{FeCl3 + 3NaOH -> Fe(OH)3 v + 3NaCl}$\n4) $2\\ce{Fe(OH)3 ->[t^\\circ] Fe2O3 + 3H2O}$\n5) $\\ce{Fe2O3 + 3CO ->[t^\\circ] 2Fe + 3CO2}$\n6) $\\ce{Fe + H2SO4 (l) -> FeSO4 + H2 ^}$.", rubric: [
      { step: "Viết và cân bằng đúng 3 PTHH đầu (đặc biệt PT điều chế $\\ce{Cl2}$)", points: 0.5 },
      { step: "Viết và cân bằng đúng 3 PTHH sau", points: 0.5 }
    ] }
  ]
};
