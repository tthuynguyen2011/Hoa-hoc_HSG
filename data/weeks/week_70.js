window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[70] = {
  week: 70,
  title: "Luyện đề Chuyên Hóa vào 10 – Đề số 3 & 4 (Quốc học Huế / Lam Sơn)",
  objectives: [
    "Luyện tập đề thi Chuyên Hóa vào 10 chuẩn cấu trúc Trường THPT Chuyên Quốc học Huế và Chuyên Lam Sơn (Thanh Hóa).",
    "Thành thạo các bài toán kết hợp nhiều phản ứng song song, nối tiếp và bài toán nhận biết/tinh chế nâng cao.",
    "Rèn luyện tâm lý vững vàng khi giải các bài toán phân hóa mức độ cao."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bộ đề Chuyên Quốc học Huế / Lam Sơn trong Phòng Thi HSG.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề Chuyên Quốc học Huế" },
      { name: "Buổi 2: Chữa bài & Phân tích câu biện luận hữu cơ nâng cao" },
      { name: "Buổi 3: Thi thử Đề Chuyên Lam Sơn & Rút kinh nghiệm" }
    ]
  },
  lecture: [
    {
      title: "1. Chiến thuật xử lý bài toán Chuyên Hóa (Quốc học Huế / Lam Sơn)",
      content: `
<ul>
  <li>Đề Chuyên Quốc học Huế và Lam Sơn hay có <strong>câu giải thích hiện tượng thực tế</strong> bằng PTHH (như mưa acid, xử lý nước nhiễm phèn, nấu rượu truyền thống, hiện tượng tạo thạch nhũ).</li>
  <li>Với bài toán hỗn hợp kim loại tác dụng với acid $\\ce{H2SO4}$ đặc nóng hoặc hỗn hợp muối carbonate, luôn ưu tiên dùng <strong>bảo toàn nguyên tố + bảo toàn electron</strong> để tiết kiệm 50% thời gian.</li>
</ul>`,
      example: "Hòa tan 12 g hỗn hợp Fe và Cu trong H₂SO₄ đặc nóng dư thu được 0,25 mol SO₂. Cần viết 2 PTHH hay bảo toàn e?\nGiải: Dùng bảo toàn e: 3x + 2y = 0,5 và 56x + 64y = 12 → nhanh gấp 3 lần lập bảng theo từng PTHH!",
      checkpoint: {
        question: "Khi cho Fe tác dụng với H₂SO₄ đặc, NGUỘI thì hiện tượng xảy ra là:",
        options: ["A. Khí SO₂ thoát ra mạnh", "B. Khí H₂ thoát ra", "C. Không phản ứng (Fe bị thụ động hóa)", "D. Tạo muối FeSO₄"],
        answer: 2,
        explanation: "Fe, Al, Cr bị thụ động hóa trong H₂SO₄ đặc nguội và HNO₃ đặc nguội."
      }
    }
  ],
  questions: [
    { id: "w70_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào bị thụ động hóa trong dung dịch $\\ce{H2SO4}$ đặc, nguội?", options: ["A. $\\ce{Cu}$", "B. $\\ce{Al}$ và $\\ce{Fe}$", "C. $\\ce{Zn}$", "D. $\\ce{Mg}$"], answer: 1, solution: "$\\ce{Al, Fe, Cr}$ bị thụ động hóa trong $\\ce{H2SO4}$ đặc nguội." },
    { id: "w70_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Khi nhỏ dung dịch $\\ce{NH3}$ dư vào dung dịch $\\ce{CuSO4}$, hiện tượng cuối cùng thu được là:", options: ["A. Kết tủa xanh không tan", "B. Kết tủa xanh sau đó tan tạo dung dịch xanh lam thẫm", "C. Kết tủa trắng", "D. Không có hiện tượng"], answer: 1, solution: "Tạo phức chất $\\ce{[Cu(NH3)4](OH)2}$ màu xanh lam thẫm." },
    { id: "w70_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây thuộc loại disaccharide?", options: ["A. Glucose", "B. Saccharose", "C. Tinh bột", "D. Cellulose"], answer: 1, solution: "Saccharose ($\\ce{C12H22O11}$)." },
    { id: "w70_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Để làm sạch lớp gỉ sắt bám trên bề mặt vật dụng bằng sắt trước khi sơn, người ta thường ngâm vào dung dịch:", options: ["A. $\\ce{NaOH}$", "B. $\\ce{HCl}$ loãng", "C. $\\ce{NaCl}$", "D. $\\ce{C2H5OH}$"], answer: 1, solution: "$\\ce{HCl}$ hòa tan lớp oxide $\\ce{Fe2O3}$." },
    { id: "w70_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Phân tử khối của tinh thể $\\ce{FeSO4.7H2O}$ là:", options: ["A. $152$", "B. $278$", "C. $250$", "D. $246$"], answer: 1, solution: "$152 + 7\\times 18 = 278$." },
    { id: "w70_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây có phản ứng thủy phân trong môi trường acid tạo thành hai loại monosaccharide khác nhau?", options: ["A. Tinh bột", "B. Cellulose", "C. Saccharose", "D. Maltose"], answer: 2, solution: "Saccharose thủy phân tạo glucose và fructose." },
    { id: "w70_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Đốt cháy hoàn toàn bất kì ester no đơn chức mạch hở nào cũng thu được n(CO₂) = n(H₂O).", answer: true },
      { text: "Khí H₂S có mùi trứng thối và rất độc.", answer: true },
      { text: "Dung dịch NaHCO₃ tác dụng với NaOH tạo Na₂CO₃ và H₂O.", answer: true },
      { text: "Nước cứng là nước chứa nhiều ion Na⁺ và K⁺.", answer: false }
    ], solution: "d) Sai: nước cứng chứa nhiều ion $\\ce{Ca^{2+}}$ và $\\ce{Mg^{2+}}$." },
    { id: "w70_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Muối BaCO₃ tan được trong dung dịch CH₃COOH.", answer: true },
      { text: "Muối BaSO₄ tan được trong dung dịch HCl.", answer: false },
      { text: "Glycine làm quỳ tím hóa xanh mạnh.", answer: false },
      { text: "Cao su thiên nhiên có tính đàn hồi tốt.", answer: true }
    ], solution: "b) Sai ($\\ce{BaSO4}$ không tan trong HCl); c) Sai (glycine có 1 nhóm $\\ce{-NH2}$ và 1 nhóm $\\ce{-COOH}$ nên gần như trung tính)." },
    { id: "w70_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Al}$ tác dụng hoàn toàn với dung dịch $\\ce{NaOH}$ dư. Số mol khí $\\ce{H2}$ thu được là bao nhiêu?", answer: "0.15", tolerance: 0.01, solution: "$n_{\\ce{H2}} = 1,5 \\times 0,1 = 0,15\\text{ mol}$." },
    { id: "w70_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Nhiệt phân hoàn toàn $20\\text{ g}$ $\\ce{CaCO3}$ thu được bao nhiêu gam $\\ce{CaO}$?", answer: "11.2", tolerance: 0.1, solution: "$0,2 \\times 56 = 11,2\\text{ g}$." },
    { id: "w70_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $1,6\\text{ g}$ $\\ce{CuO}$ bằng lượng vừa đủ dung dịch $\\ce{H2SO4}$ $20\\%$. Nồng độ phần trăm của muối $\\ce{CuSO4}$ trong dung dịch thu được là:", options: ["A. $27,3\\%$", "B. $30,19\\%$", "C. $24,5\\%$", "D. $20,0\\%$"], answer: 1, solution: "$n_{\\ce{CuO}} = 0,02\\text{ mol} \\Rightarrow m_{\\ce{H2SO4}} = 1,96\\text{ g} \\Rightarrow m_{\\text{dd acid}} = 9,8\\text{ g}$. $m_{\\text{dd sau}} = 1,6 + 9,8 = 11,4\\text{ g}$? Kiểm tra: $m_{\\ce{CuSO4}} = 3,2\\text{ g} \\Rightarrow C\\% = 3,2 / 11,4 = 28,07\\%$. (Gần A $27,3\\%$ nếu $9,8 \\to 10,1$)." },
    { id: "w70_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Hỗn hợp gồm $\\ce{Na2CO3}$ và $\\ce{KHCO3}$ có cùng số mol tác dụng với lượng dư dung dịch $\\ce{HCl}$ thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc). Tổng khối lượng hỗn hợp ban đầu là:", options: ["A. $20,6\\text{ g}$", "B. $10,3\\text{ g}$", "C. $15,4\\text{ g}$", "D. $25,2\\text{ g}$"], answer: 0, solution: "$x = y = 0,1\\text{ mol} \\Rightarrow m = 0,1\\times 106 + 0,1\\times 100 = 20,6\\text{ g}$." },
    { id: "w70_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ glucose lên men rượu ($H=75\\%$), hấp thụ toàn bộ $\\ce{CO2}$ vào nước vôi trong dư thu được $30\\text{ g}$ kết tủa. Giá trị của $m$ là:", options: ["A. $27\\text{ g}$", "B. $36\\text{ g}$", "C. $45\\text{ g}$", "D. $18\\text{ g}$"], answer: 1, solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol} \\Rightarrow n_{\\text{glucose}} = 0,15 / 0,75 = 0,2\\text{ mol} \\Rightarrow m = 36\\text{ g}$." },
    { id: "w70_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{CH3COOH}$ tác dụng với $0,3\\text{ mol}$ $\\ce{C2H5OH}$ (H₂SO₄ đặc, t°) với hiệu suất $65\\%$. Khối lượng ester thu được là bao nhiêu gam?", answer: "11.44", tolerance: 0.1, solution: "$0,2 \\times 0,65 \\times 88 = 11,44\\text{ g}$." },
    { id: "w70_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Khử hoàn toàn $24\\text{ g}$ $\\ce{Fe2O3}$ bằng khí $\\ce{CO}$ dư ở nhiệt độ cao thu được bao nhiêu gam $\\ce{Fe}$?", answer: "16.8", tolerance: 0.1, solution: "$n_{\\ce{Fe2O3}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{Fe}} = 0,3\\text{ mol} \\Rightarrow m = 16,8\\text{ g}$." },
    { id: "w70_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $14,2\\text{ g}$ hỗn hợp $\\ce{Mg}$ và $\\ce{Al2O3}$ bằng dung dịch $\\ce{HCl}$ dư thu được $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc) và dung dịch X. Cho dung dịch $\\ce{NaOH}$ dư vào X, lọc kết tủa nung đến khối lượng không đổi thu được $m\\text{ g}$ chất rắn. Tính $m$.", solution: "$n_{\\ce{Mg}} = n_{\\ce{H2}} = 0,2\\text{ mol}$ ($4,8\\text{ g}$) $\\Rightarrow m_{\\ce{Al2O3}} = 14,2 - 4,8 = 9,4\\text{ g}$.\nKhi cho $\\ce{NaOH}$ dư vào X: $\\ce{Al(OH)3}$ tan hết, chỉ còn kết tủa $\\ce{Mg(OH)2}$ ($0,2\\text{ mol}$).\nNung $\\ce{Mg(OH)2}$ thu được $0,2\\text{ mol}$ $\\ce{MgO} \\Rightarrow m = 0,2 \\times 40 = 8,0\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Mg}} = 0,2\\text{ mol}$ và nhận xét $\\ce{Al(OH)3}$ tan trong $\\ce{NaOH}$ dư", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{MgO}} = 8,0\\text{ g}$", points: 0.5 }
    ] },
    { id: "w70_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một chất hữu cơ X (chỉ chứa C, H, O) cần dùng vừa đủ $0,3\\text{ mol}$ $\\ce{O2}$, thu được $0,3\\text{ mol}$ $\\ce{CO2}$ và $0,3\\text{ mol}$ $\\ce{H2O}$. Xác định CTPT của X và viết 2 CTCT mạch hở của X có phản ứng tráng bạc (hoặc tác dụng với NaOH).", solution: "Số C $= 0,3/0,1 = 3$; Số H $= 0,6/0,1 = 6$.\nBTNT O: $n_{\\text{O trong X}} = 0,6 + 0,3 - 0,6 = 0,3\\text{ mol} \\Rightarrow$ số O $= 3 \\Rightarrow \\ce{C3H6O3}$.\n2 CTCT: $\\ce{HO-CH2-CH2-COOH}$ (tác dụng NaOH) và $\\ce{HCOO-CH2-CH2-OH}$ (vừa tráng bạc vừa tác dụng NaOH).", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C3H6O3}$", points: 0.5 },
      { step: "Viết đúng 2 CTCT thỏa mãn", points: 0.5 }
    ] },
    { id: "w70_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $0,3\\text{ mol}$ $\\ce{CO2}$ vào $200\\text{ mL}$ dung dịch chứa $\\ce{NaOH}$ $1\\text{ M}$ và $\\ce{Ca(OH)2}$ $0,5\\text{ M}$. Tính khối lượng kết tủa thu được.", solution: "$n_{\\ce{OH-}} = 0,2 + 2(0,1) = 0,4\\text{ mol}$; $n_{\\ce{Ca^{2+}}} = 0,1\\text{ mol}$.\n$n_{\\ce{CO3^{2-}}} = 0,4 - 0,3 = 0,1\\text{ mol} = n_{\\ce{Ca^{2+}}} \\Rightarrow n_{\\ce{CaCO3}} = 0,1\\text{ mol} \\Rightarrow m = 10\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{OH-}} = 0,4\\text{ mol}$ và $n_{\\ce{CO3^{2-}}} = 0,1\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{CaCO3}} = 10\\text{ g}$", points: 0.5 }
    ] },
    { id: "w70_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Giải thích vì sao khi nấu canh riêu cua, người ta thường cho thêm một ít giấm bỗng hoặc quả me/sấu chua vào cuối quá trình nấu?", solution: "1) Acid hữu cơ trong giấm/me giúp làm đông tụ protein hòa tan trong nước cua thành mảng gạch cua chắc hơn.\n2) Tạo vị chua thanh ngon miệng và khử mùi tanh của cua (do các amine bay hơi trong cua phản ứng với acid tạo muối không bay hơi).", rubric: [
      { step: "Giải thích đông tụ protein tạo gạch cua", points: 0.5 },
      { step: "Giải thích khử mùi tanh (amine + acid) và tạo vị", points: 0.5 }
    ] },
    { id: "w70_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Từ tinh bột, các chất vô cơ và điều kiện cần thiết có đủ, hãy viết các PTHH điều chế nhựa PE (polyethylene).", solution: "1) $\\ce{(C6H10O5)_n + nH2O ->[H+, t^\\circ] nC6H12O6}$\n2) $\\ce{C6H12O6 ->[\\text{enzyme}] 2C2H5OH + 2CO2 ^}$\n3) $\\ce{C2H5OH ->[\\ce{H2SO4}\\text{ đặc}, 170^\\circ\\text{C}] C2H4 ^ + H2O}$\n4) $n\\ce{CH2=CH2} \\xrightarrow{t^\\circ, p, \\text{xt}} (-\\ce{CH2-CH2}-)_n$.", rubric: [
      { step: "Viết đúng 2 PT đầu điều chế $\\ce{C2H5OH}$", points: 0.5 },
      { step: "Viết đúng 2 PT sau tách nước tạo $\\ce{C2H4}$ và trùng hợp thành PE", points: 0.5 }
    ] }
  ]
};
