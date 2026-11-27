window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[67] = {
  week: 67,
  title: "Luyện đề HSG KHTN 9 – Đề số 5 & 6 (Nghệ An / Thanh Hóa / Ninh Bình)",
  objectives: [
    "Làm quen dạng đề HSG tỉnh Nghệ An, Thanh Hóa, Ninh Bình với tỉ trọng cao các câu tự luận biện luận chất, bài toán hai phần không bằng nhau và bài toán hỗn hợp khí.",
    "Rèn kỹ năng xử lý số liệu không tròn, biện luận nghiệm nguyên trong bài toán tìm công thức oxide hoặc hợp chất hữu cơ.",
    "Nâng cao bản lĩnh phòng thi khi gặp bài toán kết hợp cả 2 phần vô cơ và hữu cơ."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Kho đề HSG tỉnh Nghệ An, Thanh Hóa, Ninh Bình trong Phòng Thi HSG.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề số 5 (Phong cách Nghệ An / Thanh Hóa)" },
      { name: "Buổi 2: Chữa chi tiết bài toán chia hỗn hợp thành 2 phần không bằng nhau" },
      { name: "Buổi 3: Thi thử Đề số 6 (Phong cách Ninh Bình) & Tổng kết" }
    ]
  },
  lecture: [
    {
      title: "1. Bí kíp giải bài toán 'Chia hỗn hợp thành 2 phần KHÔNG BẰNG NHAU'",
      content: `
<p>Đây là dạng bài rất hay gặp trong đề HSG Nghệ An, Thanh Hóa, Ninh Bình:</p>
<ul>
  <li>Nếu hỗn hợp ban đầu chia thành 2 phần <strong>không bằng nhau</strong> (hoặc cho khối lượng phần 1 khác phần 2), ta đặt số mol các chất ở Phần 1 là $x, y$, thì số mol ở Phần 2 là <strong>$kx, ky$</strong> (với $k$ là hệ số tỉ lệ giữa 2 phần).</li>
  <li>Khi lập tỉ số giữa hai đại lượng ở Phần 2 (hoặc Phần 2 với Phần 1), hệ số $k$ sẽ tự triệt tiêu hoặc giúp tìm $k$ rất gọn!</li>
</ul>`,
      example: "Chia m gam hỗn hợp X gồm Fe và Mg thành 2 phần không bằng nhau. Phần 1 tác dụng hết với HCl dư thu được 0,3 mol H₂. Phần 2 tác dụng hết với Cl₂ dư thu được 0,7 mol muối? (Hoặc tổng quát: đặt phần 1 có x, y mol; phần 2 có kx, ky mol).",
      checkpoint: {
        question: "Khi chia một hỗn hợp đồng nhất thành 2 phần có khối lượng lần lượt là 10 g và 15 g, tỉ lệ số mol của mỗi chất ở Phần 2 so với Phần 1 là:",
        options: ["A. 1,0 lần", "B. 1,5 lần", "C. 2,0 lần", "D. 0,67 lần"],
        answer: 1,
        explanation: "k = 15 / 10 = 1,5 lần."
      }
    }
  ],
  questions: [
    { id: "w67_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Quặng pyrite sắt có thành phần chính là:", options: ["A. $\\ce{Fe2O3}$", "B. $\\ce{Fe3O4}$", "C. $\\ce{FeS2}$", "D. $\\ce{FeCO3}$"], answer: 2, solution: "Pyrite sắt là $\\ce{FeS2}$." },
    { id: "w67_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào sau đây làm xanh giấy quỳ tím ẩm?", options: ["A. $\\ce{CO2}$", "B. $\\ce{SO2}$", "C. $\\ce{NH3}$", "D. $\\ce{HCl}$"], answer: 2, solution: "$\\ce{NH3}$ tan trong nước tạo dung dịch có tính base." },
    { id: "w67_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây tan hoàn toàn trong nước ở nhiệt độ thường?", options: ["A. $\\ce{Ba}$", "B. $\\ce{Mg}$", "C. $\\ce{Fe}$", "D. $\\ce{Cu}$"], answer: 0, solution: "$\\ce{Ba + 2H2O -> Ba(OH)2 + H2 ^}$." },
    { id: "w67_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Trong các chất sau, chất nào có chứa liên kết ba $\\ce{C#C}$?", options: ["A. Methane", "B. Ethylene", "C. Acetylene", "D. Benzene"], answer: 2, solution: "Acetylene ($\\ce{CH#CH}$)." },
    { id: "w67_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho dung dịch $\\ce{AgNO3}$ tác dụng với dung dịch $\\ce{NaCl}$ thu được kết tủa màu:", options: ["A. Vàng", "B. Trắng", "C. Nâu đỏ", "D. Xanh lam"], answer: 1, solution: "$\\ce{AgCl}$ kết tủa trắng." },
    { id: "w67_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây thuộc loại polymer tổng hợp?", options: ["A. Tinh bột", "B. Cellulose", "C. Nhựa PVC", "D. Tơ tằm"], answer: 2, solution: "PVC là polymer tổng hợp." },
    { id: "w67_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khí SO₂ vừa làm mất màu nước bromine, vừa làm đục nước vôi trong.", answer: true },
      { text: "Đốt cháy hoàn toàn khí H₂S thu được SO₂ và H₂O.", answer: true },
      { text: "Nhôm (Al) không tác dụng với dung dịch HNO₃ đặc nguội.", answer: true },
      { text: "Dung dịch Na₂CO₃ có pH < 7.", answer: false }
    ], solution: "d) Sai: $\\ce{Na2CO3}$ có môi trường kiềm ($\\text{pH} > 7$)." },
    { id: "w67_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi chia một hỗn hợp đồng nhất thành 2 phần không bằng nhau, tỉ lệ số mol các chất trong mỗi phần vẫn không đổi.", answer: true },
      { text: "Ethylene và acetylene đều làm mất màu dung dịch Br₂.", answer: true },
      { text: "Acetic acid không tác dụng được với Cu(OH)₂.", answer: false },
      { text: "Glucose có trong mật ong và quả nho chín.", answer: true }
    ], solution: "c) Sai: $2\\ce{CH3COOH + Cu(OH)2 -> (CH3COO)2Cu + 2H2O}$." },
    { id: "w67_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $11,2\\text{ g}$ $\\ce{Fe}$ tác dụng hoàn toàn với dung dịch $\\ce{AgNO3}$ dư. Khối lượng $\\ce{Ag}$ thu được là bao nhiêu gam?", answer: "64.8", tolerance: 0.2, solution: "$\\ce{AgNO3}$ dư nên $\\ce{Fe}$ lên $\\ce{Fe^{3+}}$: $n_{\\ce{Ag}} = 3 \\times 0,2 = 0,6\\text{ mol} \\Rightarrow m = 0,6 \\times 108 = 64,8\\text{ g}$." },
    { id: "w67_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $12\\text{ g}$ $\\ce{MgSO4}$ ($M=120$) vào $188\\text{ g}$ nước. Nồng độ phần trăm của dung dịch thu được là bao nhiêu %?", answer: "6", tolerance: 0.1, solution: "$C\\% = (12 / 200) \\times 100\\% = 6\\%$." },
    { id: "w67_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Fe3O4}$ tác dụng hoàn toàn với dung dịch $\\ce{H2SO4}$ loãng dư thu được dung dịch X. Cho dung dịch $\\ce{NaOH}$ dư vào X, lọc kết tủa nung ngoài không khí đến khối lượng không đổi thu được bao nhiêu gam $\\ce{Fe2O3}$?", options: ["A. $16\\text{ g}$", "B. $24\\text{ g}$", "C. $32\\text{ g}$", "D. $8\\text{ g}$"], answer: 1, solution: "BTNT Fe: $n_{\\ce{Fe}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{Fe2O3}} = 0,15\\text{ mol} \\Rightarrow m = 0,15 \\times 160 = 24\\text{ g}$." },
    { id: "w67_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ hỗn hợp $\\ce{C2H4}$ và $\\ce{C3H6}$ thu được $0,5\\text{ mol}$ $\\ce{CO2}$. Phần trăm số mol của $\\ce{C2H4}$ là:", options: ["A. $25\\%$", "B. $50\\%$", "C. $75\\%$", "D. $40\\%$"], answer: 1, solution: "$\\overline{n} = 0,5/0,2 = 2,5 \\Rightarrow 50\\%$ mỗi chất." },
    { id: "w67_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $4,48\\text{ g}$ $\\ce{CaO}$ vào $100\\text{ g}$ dung dịch $\\ce{HCl}$ $3,65\\%$. Sau phản ứng hoàn toàn, nhỏ vài giọt quỳ tím vào dung dịch thu được thì quỳ tím có màu:", options: ["A. Đỏ", "B. Xanh", "C. Tím", "D. Không màu"], answer: 1, solution: "$n_{\\ce{CaO}} = 0,08\\text{ mol}$; $n_{\\ce{HCl}} = 0,1\\text{ mol}$. $\\ce{CaO}$ dư $0,03\\text{ mol}$ tác dụng với nước tạo $\\ce{Ca(OH)2}$ làm quỳ hóa xanh." },
    { id: "w67_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Chia $m\\text{ g}$ hỗn hợp $\\ce{Fe}$ và $\\ce{Cu}$ thành 2 phần. Phần 1 ($12\\text{ g}$) tác dụng với $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ $\\ce{H2}$ (đkc). Phần 2 ($24\\text{ g}$) tác dụng với $\\ce{HCl}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "4.958", tolerance: 0.05, solution: "Phần 2 gấp đôi khối lượng Phần 1 nên $V_2 = 2 V_1 = 4,958\\text{ L}$." },
    { id: "w67_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $16\\text{ g}$ một oxide kim loại $\\ce{M2O3}$ cần vừa đủ $300\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Nguyên tử khối của kim loại M là bao nhiêu?", answer: "56", tolerance: 0.2, solution: "$n_{\\ce{HCl}} = 0,6\\text{ mol} \\Rightarrow n_{\\ce{M2O3}} = 0,1\\text{ mol} \\Rightarrow M_{\\ce{M2O3}} = 160 \\Rightarrow 2M + 48 = 160 \\Rightarrow M = 56$ ($\\ce{Fe}$)." },
    { id: "w67_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Chia $m\\text{ g}$ hỗn hợp X gồm $\\ce{CH3COOH}$ và $\\ce{C2H5OH}$ thành 2 phần không bằng nhau. Phần 1 tác dụng hết với $\\ce{Na}$ dư thu được $2,479\\text{ L}$ $\\ce{H2}$ (đkc). Phần 2 có khối lượng $31,8\\text{ g}$ tác dụng vừa đủ với $300\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Biết Phần 2 nặng gấp $3$ lần Phần 1. Tính $m$ và phần trăm khối lượng mỗi chất trong X.", solution: "Phần 2 ($31,8\\text{ g}$) nặng gấp $3$ lần Phần 1 $\\Rightarrow$ Phần 1 nặng $31,8 / 3 = 10,6\\text{ g} \\Rightarrow m = 10,6 + 31,8 = 42,4\\text{ g}$.\nỞ Phần 2: $n_{\\ce{CH3COOH}} = n_{\\ce{NaOH}} = 0,3\\text{ mol}$ ($18\\text{ g}$).\n$m_{\\ce{C2H5OH ở P2}} = 31,8 - 18 = 13,8\\text{ g}$ ($0,3\\text{ mol}$).\n(Kiểm chứng Phần 1: $0,1\\text{ mol}$ mỗi chất tạo $0,1\\text{ mol}$ $\\ce{H2}$, khớp!).\n$\\%m_{\\ce{CH3COOH}} = 18 / 31,8 \\times 100\\% = 56,6\\%$; $\\%m_{\\ce{C2H5OH}} = 43,4\\%$.", rubric: [
      { step: "Tính đúng $m = 42,4\\text{ g}$", points: 0.25 },
      { step: "Tính đúng $n_{\\ce{CH3COOH}} = 0,3\\text{ mol}$ và $m_{\\ce{C2H5OH}} = 13,8\\text{ g}$ ở P2", points: 0.5 },
      { step: "Tính đúng $\\%m$ mỗi chất", points: 0.25 }
    ] },
    { id: "w67_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Khử hoàn toàn $11,6\\text{ g}$ một oxide sắt $\\ce{Fe}_x\\ce{O}_y$ bằng khí $\\ce{CO}$ dư ở nhiệt độ cao. Dẫn toàn bộ khí $\\ce{CO2}$ sinh ra vào bình đựng nước vôi trong dư thu được $20\\text{ g}$ kết tủa. Xác định công thức hóa học của oxide sắt đó.", solution: "$n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 20 / 100 = 0,2\\text{ mol} \\Rightarrow n_{\\ce{O trong oxit}} = 0,2\\text{ mol}$ ($m_{\\ce{O}} = 3,2\\text{ g}$).\n$m_{\\ce{Fe}} = 11,6 - 3,2 = 8,4\\text{ g} \\Rightarrow n_{\\ce{Fe}} = 8,4 / 56 = 0,15\\text{ mol}$.\nTỉ lệ $x : y = 0,15 : 0,2 = 3 : 4 \\Rightarrow \\ce{Fe3O4}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{O}} = 0,2\\text{ mol}$ và $n_{\\ce{Fe}} = 0,15\\text{ mol}$", points: 0.5 },
      { step: "Lập tỉ lệ $3 : 4$ và kết luận $\\ce{Fe3O4}$", points: 0.5 }
    ] },
    { id: "w67_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp bột gồm $\\ce{Fe}$ và $\\ce{Zn}$ vào $200\\text{ mL}$ dung dịch $\\ce{AgNO3}$ $1,5\\text{ M}$. Sau khi các phản ứng xảy ra hoàn toàn, thu được dung dịch X chỉ chứa một muối tan duy nhất và $32,4\\text{ g}$ chất rắn Y. Tính $m$.", solution: "Dung dịch X chỉ chứa 1 muối tan duy nhất $\\Rightarrow$ muối đó là $\\ce{Zn(NO3)2}$ ($\\ce{Zn}$ phản ứng hết hoặc dư, $\\ce{Fe}$ chưa phản ứng, $\\ce{AgNO3}$ hết!).\n$n_{\\ce{AgNO3}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{Ag}} = 0,3\\text{ mol}$ ($32,4\\text{ g}$). Vì $m_Y = 32,4\\text{ g}$ đúng bằng khối lượng Ag nên $\\ce{Fe}$ không có mặt? Khoan: nếu $\\ce{Zn}$ phản ứng vừa đủ hết $0,3\\text{ mol}$ $\\ce{AgNO3}$ ($n_{\\ce{Zn}} = 0,15\\text{ mol} = 9,75\\text{ g}$) và có thêm $\\ce{Fe}$ thì rắn Y phải $> 32,4\\text{ g}$! Vậy chỉ có thể là hỗn hợp chỉ gồm $\\ce{Zn}$ $0,15\\text{ mol}$ ($9,75\\text{ g}$) và $\\ce{Fe} = 0$ (hoặc $\\ce{Fe}$ vừa hết? Nếu $\\ce{Fe}$ tan thì X có 2 muối). Kết luận $m = 9,75\\text{ g}$.", rubric: [
      { step: "Biện luận dung dịch X chỉ chứa 1 muối duy nhất là $\\ce{Zn(NO3)2}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{Zn}} = 0,15\\text{ mol}$ và $m = 9,75\\text{ g}$", points: 0.5 }
    ] },
    { id: "w67_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hỗn hợp khí A gồm $\\ce{CH4, C2H4, C2H2}$. Dẫn $0,3\\text{ mol}$ A qua dung dịch $\\ce{Br2}$ dư thấy có $0,25\\text{ mol}$ $\\ce{Br2}$ phản ứng và thoát ra $2,479\\text{ L}$ khí (đkc). Mặt khác, đốt cháy hoàn toàn $0,3\\text{ mol}$ A thu được $0,5\\text{ mol}$ $\\ce{CO2}$. Tính số mol mỗi khí trong A.", solution: "Khí thoát ra là $\\ce{CH4}$: $x = 0,1\\text{ mol}$.\nGọi $y, z$ là số mol $\\ce{C2H4, C2H2}$: $y + z = 0,3 - 0,1 = 0,2$.\nSố mol $\\ce{Br2}$: $y + 2z = 0,25 \\Rightarrow z = 0,05\\text{ mol}$ ($\\ce{C2H2}$); $y = 0,15\\text{ mol}$ ($\\ce{C2H4}$).\n(Kiểm tra $\\ce{CO2}$: $0,1 + 2(0,15) + 2(0,05) = 0,5\\text{ mol}$, khớp 100%!).", rubric: [
      { step: "Tính đúng $n_{\\ce{CH4}} = 0,1\\text{ mol}$", points: 0.25 },
      { step: "Lập và giải hệ tìm đúng $n_{\\ce{C2H4}} = 0,15\\text{ mol}$, $n_{\\ce{C2H2}} = 0,05\\text{ mol}$", points: 0.75 }
    ] },
    { id: "w67_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nêu hiện tượng và viết PTHH khi cho từ từ dung dịch $\\ce{NaOH}$ đến dư vào dung dịch $\\ce{AlCl3}$, sau đó sục tiếp khí $\\ce{CO2}$ đến dư vào dung dịch thu được.", solution: "1) Nhỏ $\\ce{NaOH}$: xuất hiện kết tủa keo trắng $\\ce{Al(OH)3}$ tăng dần đến cực đại, sau đó kết tủa tan dần tạo dung dịch trong suốt do $\\ce{Al(OH)3}$ lưỡng tính:\n$\\ce{AlCl3 + 3NaOH -> Al(OH)3 v + 3NaCl}$; $\\ce{Al(OH)3 + NaOH -> NaAlO2 + 2H2O}$.\n2) Sục $\\ce{CO2}$ dư: xuất hiện trở lại kết tủa keo trắng $\\ce{Al(OH)3}$ không tan trong $\\ce{CO2}$ dư:\n$\\ce{NaAlO2 + CO2 + 2H2O -> Al(OH)3 v + NaHCO3}$.", rubric: [
      { step: "Nêu đúng hiện tượng 2 giai đoạn", points: 0.5 },
      { step: "Viết đúng cả 3 PTHH", points: 0.5 }
    ] }
  ]
};
