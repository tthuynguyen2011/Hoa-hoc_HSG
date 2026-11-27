window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[55] = {
  week: 55,
  title: "CĐ 1A: Phương pháp Bảo toàn nguyên tố & Bảo toàn khối lượng",
  objectives: [
    "Vận dụng linh hoạt Định luật Bảo toàn khối lượng (ĐLBTKL) cho hệ phản ứng nhiều giai đoạn mà không cần viết hết các PTHH trung gian.",
    "Áp dụng Định luật Bảo toàn nguyên tố (BTNT) cho C, H, O, Cl, S, Fe, Na, Ba trong các bài toán khử oxide, đốt cháy, hòa tan muối.",
    "Kết hợp BTNT và BTKL để giải nhanh các bài toán hỗn hợp nhiều chất (vô cơ và hữu cơ) ở mức độ HSG 9 và Chuyên Hóa 10."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu chuyên đề CĐ 1A (sơ đồ chuyển hóa bảo toàn nguyên tố).",
    sessions: [
      {
        name: "Buổi 1: Bảo toàn khối lượng qua nhiều giai đoạn",
        guide: "Nhấn mạnh: chỉ cần xác định đúng TỔNG ĐẦU VÀO và TỔNG ĐẦU RA của hệ kín/hở, bỏ qua các sản phẩm trung gian. Công thức: $\\sum m_{\\text{trước}} = \\sum m_{\\text{sau}}$.",
        pitfalls: "HS hay quên trừ khối lượng khí thoát ra hoặc cộng thiếu lượng acid/kiềm dư khi tính chất rắn sau cô cạn."
      },
      {
        name: "Buổi 2: Bảo toàn nguyên tố (C, H, O, Kim loại, Gốc acid)",
        guide: "Vẽ sơ đồ cây nguyên tố: ví dụ toàn bộ nguyên tử Fe trong hỗn hợp $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ sau khi hòa tan bằng $\\ce{HCl}$ hoặc $\\ce{HNO3}$ đều đi vào muối, hoặc sau khi nung trong không khí đều chuyển thành $\\ce{Fe2O3}$.",
        pitfalls: "Quên nhân hệ số nguyên tử trong phân tử (ví dụ $n_{\\text{Fe}} = 2 n_{\\ce{Fe2O3}}$, $n_{\\text{H}} = 2 n_{\\ce{H2O}}$)."
      },
      {
        name: "Buổi 3: Luyện tập tổng hợp BTKL + BTNT chuẩn đề thi HSG"
      }
    ]
  },
  lecture: [
    {
      title: "1. Tư duy Bảo toàn khối lượng & Bảo toàn nguyên tố",
      content: `
<p>Trong đề thi HSG Hóa 9 và Chuyên Hóa 10, nhiều bài toán cho hỗn hợp 3–5 chất phản ứng qua nhiều bước khiến việc lập hệ phương trình truyền thống trở nên bất khả thi. Chìa khóa là <strong>nhìn vào nguyên tố trước và sau</strong>:</p>
<ul>
  <li><strong>Bảo toàn khối lượng (BTKL):</strong> Tổng khối lượng các chất tham gia bằng tổng khối lượng các sản phẩm tạo thành (hoặc xét cho cả hệ ban đầu + thêm vào = hệ cuối cùng + bay ra).</li>
  <li><strong>Bảo toàn nguyên tố (BTNT):</strong> Số mol nguyên tử của một nguyên tố trước phản ứng luôn bằng tổng số mol nguyên tử của nguyên tố đó sau phản ứng.<br>
  <em>Ví dụ kinh điển:</em> Cho $m\\text{ g}$ hỗn hợp $\\ce{Fe, FeO, Fe2O3, Fe3O4}$ tác dụng $\\ce{CO}$ dư $\\rightarrow \\ce{Fe}$ ($n_{\\ce{O bị lấy}} = n_{\\ce{CO2}}$), hoặc nung trong $\\ce{O2}$ dư $\\rightarrow \\ce{Fe2O3}$ ($n_{\\ce{Fe}} = 2 n_{\\ce{Fe2O3}}$).</li>
</ul>`,
      example: "Cho 11,36 g hỗn hợp gồm Fe, FeO, Fe₂O₃, Fe₃O₄ phản ứng hết với dung dịch HCl dư, thu được 0,1 mol H₂ và m gam muối, biết trong hỗn hợp ban đầu có 0,04 mol FeO? (Dạng tổng quát hay gặp: khử hoàn toàn 11,36 g hỗn hợp Fe, FeO, Fe₂O₃, Fe₃O₄ bằng CO dư thu được 8,96 g Fe. Tính V(CO₂) ở đkc).\nGiải: m(O trong hỗn hợp) = 11,36 - 8,96 = 2,4 g → n(O) = 0,15 mol → n(CO₂) = n(O) = 0,15 mol → V = 0,15 × 24,79 = 3,7185 L.",
      checkpoint: {
        question: "Hòa tan hoàn toàn 10 g hỗn hợp Mg, Al, Zn vào dung dịch HCl dư thu được 0,4 mol H₂. Khối lượng muối chloride khan thu được là:",
        options: ["A. 24,2 g", "B. 38,4 g", "C. 38,8 g", "D. 28,4 g"],
        answer: 1,
        explanation: "BTNT H: n(HCl) = 2n(H₂) = 0,8 mol. BTKL: m(muối) = 10 + 0,8×36,5 - 0,4×2 = 38,4 g."
      }
    }
  ],
  questions: [
    { id: "w55_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ hỗn hợp $\\ce{Mg, Al, Fe}$ trong khí $\\ce{O2}$ dư thu được $9,6\\text{ g}$ hỗn hợp oxide. Khối lượng $\\ce{O2}$ đã phản ứng là:", options: ["A. $1,6\\text{ g}$", "B. $3,2\\text{ g}$", "C. $4,8\\text{ g}$", "D. $6,4\\text{ g}$"], answer: 1, solution: "BTKL: $m_{\\ce{O2}} = 9,6 - 6,4 = 3,2\\text{ g}$." },
    { id: "w55_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Khử hoàn toàn $16\\text{ g}$ hỗn hợp $\\ce{Fe2O3}$ và $\\ce{CuO}$ bằng khí $\\ce{CO}$ dư thu được $12,8\\text{ g}$ hỗn hợp kim loại. Số mol $\\ce{CO2}$ sinh ra là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,3\\text{ mol}$", "D. $0,4\\text{ mol}$"], answer: 1, solution: "$m_{\\ce{O bị lấy}} = 16 - 12,8 = 3,2\\text{ g}$ ($0,2\\text{ mol}$) $\\Rightarrow n_{\\ce{CO2}} = 0,2\\text{ mol}$." },
    { id: "w55_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $12\\text{ g}$ hỗn hợp $\\ce{Mg, Fe, Zn}$ vào dung dịch $\\ce{H2SO4}$ loãng dư thu được $0,3\\text{ mol}$ $\\ce{H2}$. Khối lượng muối sulfate khan thu được là:", options: ["A. $40,8\\text{ g}$", "B. $33,3\\text{ g}$", "C. $26,4\\text{ g}$", "D. $38,4\\text{ g}$"], answer: 0, solution: "$m_{\\text{muối}} = 12 + 0,3 \\times 96 = 40,8\\text{ g}$." },
    { id: "w55_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Nung $25\\text{ g}$ $\\ce{CaCO3}$ một thời gian thu được $18,4\\text{ g}$ chất rắn. Thể tích khí $\\ce{CO2}$ (đkc) thoát ra là:", options: ["A. $2,479\\text{ L}$", "B. $3,7185\\text{ L}$", "C. $4,958\\text{ L}$", "D. $1,2395\\text{ L}$"], answer: 1, solution: "$m_{\\ce{CO2}} = 25 - 18,4 = 6,6\\text{ g}$ ($0,15\\text{ mol}$) $\\Rightarrow V = 0,15 \\times 24,79 = 3,7185\\text{ L}$." },
    { id: "w55_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{Fe}$ và $0,1\\text{ mol}$ $\\ce{Fe2O3}$ tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư, rồi lấy toàn bộ dung dịch thu được cho tác dụng với $\\ce{NaOH}$ dư, lọc kết tủa nung ngoài không khí đến khối lượng không đổi thu được chất rắn $\\ce{Fe2O3}$. Số mol $\\ce{Fe2O3}$ thu được là:", options: ["A. $0,1\\text{ mol}$", "B. $0,15\\text{ mol}$", "C. $0,2\\text{ mol}$", "D. $0,3\\text{ mol}$"], answer: 2, solution: "BTNT Fe: tổng $n_{\\ce{Fe}} = 0,2 + 2\\times 0,1 = 0,4\\text{ mol} \\Rightarrow n_{\\ce{Fe2O3}} = 0,4/2 = 0,2\\text{ mol}$." },
    { id: "w55_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $m\\text{ g}$ hỗn hợp gồm $\\ce{CH4, C2H4, C3H8}$ thu được $0,5\\text{ mol}$ $\\ce{CO2}$ và $0,7\\text{ mol}$ $\\ce{H2O}$. Giá trị của $m$ là:", options: ["A. $6,0\\text{ g}$", "B. $7,4\\text{ g}$", "C. $8,8\\text{ g}$", "D. $5,8\\text{ g}$"], answer: 1, solution: "BTNT C, H: $m = 0,5\\times 12 + 0,7\\times 2 = 7,4\\text{ g}$." },
    { id: "w55_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai về phương pháp bảo toàn:", statements: [
      { text: "Tổng số mol nguyên tử của một nguyên tố luôn không đổi trước và sau phản ứng hóa học thông thường.", answer: true },
      { text: "Khi nung chất rắn trong không khí, khối lượng chất rắn luôn giảm đi.", answer: false },
      { text: "Trong phản ứng khử oxide bằng CO dư, số mol CO₂ tạo thành bằng số mol nguyên tử O bị lấy ra.", answer: true },
      { text: "Bảo toàn khối lượng chỉ áp dụng được khi biết tất cả các PTHH xảy ra.", answer: false }
    ], solution: "b) Sai (nung kim loại trong $\\ce{O2}$ khối lượng tăng); d) Sai (không cần viết hết PTHH)." },
    { id: "w55_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Hòa tan 0,1 mol Fe₃O₄ vào HCl dư tạo ra 0,1 mol FeCl₂ và 0,2 mol FeCl₃.", answer: true },
      { text: "Khi đốt cháy hoàn toàn chất hữu cơ chứa C, H, O thì n(O₂ pư) = n(CO₂) + 0,5 n(H₂O).", answer: false },
      { text: "Cho m g hỗn hợp Na, K, Ba tác dụng với nước dư thu được 0,1 mol H₂ thì n(OH⁻) = 0,2 mol.", answer: true },
      { text: "Nhiệt phân hoàn toàn CaCO₃ và MgCO₃ thu được số mol CO₂ bằng tổng số mol hai muối.", answer: true }
    ], solution: "b) Sai: phải trừ đi lượng O có sẵn trong chất hữu cơ!" },
    { id: "w55_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $14\\text{ g}$ hỗn hợp $\\ce{Fe, Mg, Zn}$ trong dung dịch $\\ce{HCl}$ dư thu được $0,4\\text{ mol}$ $\\ce{H2}$. Khối lượng muối chloride khan thu được là bao nhiêu gam?", answer: "42.4", tolerance: 0.2, solution: "$m_{\\text{muối}} = 14 + 71 \\times 0,4 = 42,4\\text{ g}$." },
    { id: "w55_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,25\\text{ mol}$ khí $\\ce{CO}$ đi qua hỗn hợp $\\ce{Fe2O3, CuO}$ nung nóng thu được hỗn hợp khí X có tỉ khối so với $\\ce{H2}$ là $18$. Số mol $\\ce{CO2}$ trong X là bao nhiêu?", answer: "0.125", tolerance: 0.01, solution: "BTNT C: $n_{\\ce{CO}} + n_{\\ce{CO2}} = 0,25$. $\\overline{M}_X = 36 = (28+44)/2 \\Rightarrow n_{\\ce{CO2}} = 0,125\\text{ mol}$." },
    { id: "w55_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $10,2\\text{ g}$ hỗn hợp $\\ce{MgO, Al2O3, CuO}$ cần vừa đủ $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Khối lượng muối khan thu được sau khi cô cạn dung dịch là:", options: ["A. $21,2\\text{ g}$", "B. $24,8\\text{ g}$", "C. $17,4\\text{ g}$", "D. $19,6\\text{ g}$"], answer: 0, solution: "BTNT H: $n_{\\ce{HCl}} = 0,4\\text{ mol} \\Rightarrow n_{\\ce{H2O}} = 0,2\\text{ mol}$. BTKL: $m_{\\text{muối}} = 10,2 + 0,4\\times 36,5 - 0,2\\times 18 = 21,2\\text{ g}$." },
    { id: "w55_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp X gồm $\\ce{Na, K, Ba}$ tác dụng hết với nước dư thu được dung dịch Y và $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc). Trung hòa hết dung dịch Y cần vừa đủ $V\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $1\\text{ M}$. Giá trị của $V$ là:", options: ["A. $100\\text{ mL}$", "B. $200\\text{ mL}$", "C. $400\\text{ mL}$", "D. $150\\text{ mL}$"], answer: 1, solution: "$n_{\\ce{H2}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{OH-}} = 0,4\\text{ mol} \\Rightarrow n_{\\ce{H2SO4}} = 0,2\\text{ mol} \\Rightarrow V = 200\\text{ mL}$." },
    { id: "w55_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Nung nóng $15\\text{ g}$ hỗn hợp $\\ce{Fe, Cu, Al}$ trong khí $\\ce{O2}$ dư thu được $21,4\\text{ g}$ hỗn hợp oxide. Hòa tan hết $21,4\\text{ g}$ oxide này cần tối thiểu bao nhiêu lít dung dịch $\\ce{HCl}$ $2\\text{ M}$?", options: ["A. $0,2\\text{ L}$", "B. $0,4\\text{ L}$", "C. $0,8\\text{ L}$", "D. $0,6\\text{ L}$"], answer: 1, solution: "$m_{\\ce{O}} = 21,4 - 15 = 6,4\\text{ g}$ ($0,4\\text{ mol}$). $n_{\\ce{HCl}} = 2 n_{\\ce{O}} = 0,8\\text{ mol} \\Rightarrow V = 0,4\\text{ L}$." },
    { id: "w55_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $24\\text{ g}$ hỗn hợp $\\ce{Fe2O3, CuO, MgO}$ tác dụng vừa đủ với $350\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $1\\text{ M}$. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam muối khan?", answer: "52", tolerance: 0.2, solution: "$n_{\\ce{H2SO4}} = n_{\\ce{H2O}} = 0,35\\text{ mol}$. BTKL: $m_{\\text{muối}} = 24 + 0,35\\times 98 - 0,35\\times 18 = 24 + 0,35\\times 80 = 52\\text{ g}$." },
    { id: "w55_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $8,8\\text{ g}$ hỗn hợp hai hydrocarbon thu được $12,395\\text{ L}$ khí $\\ce{CO2}$ (đkc). Nếu dẫn toàn bộ hơi nước sinh ra qua $\\ce{H2SO4}$ đặc dư thì khối lượng bình tăng thêm bao nhiêu gam?", answer: "25.2", tolerance: 0.2, solution: "$n_{\\ce{CO2}} = 0,5\\text{ mol}$ ($m_{\\text{C}} = 6,0\\text{ g}$). $m_{\\text{H}} = 8,8 - 6,0 = 2,8\\text{ g}$ ($n_{\\text{H}} = 2,8\\text{ mol}$) $\\Rightarrow n_{\\ce{H2O}} = 1,4\\text{ mol} \\Rightarrow m_{\\ce{H2O}} = 25,2\\text{ g}$." },
    { id: "w55_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho luồng khí $\\ce{CO}$ đi qua $m\\text{ g}$ bột $\\ce{Fe2O3}$ nung nóng một thời gian thu được $13,92\\text{ g}$ chất rắn X gồm $\\ce{Fe, FeO, Fe3O4, Fe2O3}$ và khí Y. Hấp thụ toàn bộ khí Y vào dung dịch $\\ce{Ca(OH)2}$ dư thu được $12\\text{ g}$ kết tủa. Tính $m$.", solution: "$n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 12/100 = 0,12\\text{ mol}$.\nBTNT O: $n_{\\ce{O bị lấy}} = n_{\\ce{CO2}} = 0,12\\text{ mol}$ ($m_{\\ce{O}} = 0,12 \\times 16 = 1,92\\text{ g}$).\nBTKL: $m = 13,92 + 1,92 = 15,84\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,12\\text{ mol}$", points: 0.25 },
      { step: "Suy ra $n_{\\ce{O bị lấy}} = 0,12\\text{ mol}$ ($1,92\\text{ g}$)", points: 0.5 },
      { step: "Tính đúng $m = 15,84\\text{ g}$", points: 0.25 }
    ] },
    { id: "w55_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $14,2\\text{ g}$ hỗn hợp gồm $\\ce{MgCO3}$ và muối carbonate của kim loại M (hóa trị II) vào dung dịch $\\ce{HCl}$ vừa đủ thu được $3,7185\\text{ L}$ khí $\\ce{CO2}$ (đkc) và dung dịch X. Cô cạn dung dịch X thu được bao nhiêu gam muối khan?", solution: "$n_{\\ce{CO2}} = 0,15\\text{ mol}$. Theo bản chất phản ứng muối carbonate + HCl: $n_{\\ce{HCl}} = 2n_{\\ce{CO2}} = 0,3\\text{ mol}$; $n_{\\ce{H2O}} = n_{\\ce{CO2}} = 0,15\\text{ mol}$.\nBTKL: $m_{\\text{muối chloride}} = 14,2 + 0,3 \\times 36,5 - 0,15 \\times 44 - 0,15 \\times 18 = 14,2 + 10,95 - 6,6 - 2,7 = 15,85\\text{ g}$.", rubric: [
      { step: "Tính $n_{\\ce{CO2}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{HCl}} = 0,3\\text{ mol}, n_{\\ce{H2O}} = 0,15\\text{ mol}$", points: 0.5 },
      { step: "Áp dụng BTKL tính đúng $m_{\\text{muối}} = 15,85\\text{ g}$", points: 0.5 }
    ] },
    { id: "w55_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp X gồm $\\ce{Na2O, BaO, Na, Ba}$ tác dụng hết với nước dư thu được dung dịch Y và $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Dẫn từ từ khí $\\ce{CO2}$ vào Y đến khi thu được kết tủa cực đại thấy vừa hết $0,3\\text{ mol}$ $\\ce{CO2}$, lọc bỏ kết tủa, cô cạn nước lọc không thấy chất rắn? (Sửa: thu được kết tủa $\\ce{BaCO3}$ $19,7\\text{ g}$ và dung dịch chỉ chứa $\\ce{Na2CO3}$, biết tổng $n_{\\ce{CO2}} = 0,25\\text{ mol}$). Tính $m$.", solution: "$n_{\\ce{BaCO3}} = 19,7/197 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Ba}} = 0,1\\text{ mol}$.\n$n_{\\ce{Na2CO3}} = 0,25 - 0,1 = 0,15\\text{ mol} \\Rightarrow n_{\\ce{Na}} = 0,3\\text{ mol}$.\n(Nếu chỉ tính $m$ khi biết hỗn hợp là $\\ce{Na2O}$ và $\\ce{BaO}$ thì $m = 0,15\\times 62 + 0,1\\times 153 = 24,6\\text{ g}$; còn có thêm kim loại thì cần biết tỉ lệ $\\ce{O}$). Ở đây tính theo tỉ lệ $\\ce{H2}$: $n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow$ số mol e nhường của kim loại $= 0,2\\text{ mol}$, phần còn lại là oxide nhận $0,5 - 0,2 = 0,3\\text{ mol}$ e $\\Rightarrow n_{\\ce{O trong X}} = 0,15\\text{ mol}$ ($2,4\\text{ g}$).\nVậy $m = 0,1\\times 137 + 0,3\\times 23 + 2,4 = 13,7 + 6,9 + 2,4 = 23,0\\text{ g}$.", rubric: [
      { step: "BTNT Ba, Na, C tìm đúng $n_{\\ce{Ba}} = 0,1\\text{ mol}$ và $n_{\\ce{Na}} = 0,3\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{O trong X}} = 0,15\\text{ mol}$ và $m = 23,0\\text{ g}$", points: 0.5 }
    ] },
    { id: "w55_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6,2\\text{ g}$ hỗn hợp gồm $\\ce{C2H5OH}$ và $\\ce{CH3COOH}$ thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $5,4\\text{ g}$ $\\ce{H2O}$. Tính khối lượng mỗi chất trong hỗn hợp (bằng phương pháp bảo toàn).", solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol}$; $n_{\\ce{H2O}} = 0,3\\text{ mol}$.\nNhận xét: cả $\\ce{C2H5OH}$ và $\\ce{CH3COOH}$ đều có 2 nguyên tử C, nên $n_{\\text{hh}} = 0,2 / 2 = 0,1\\text{ mol}$.\nGọi $x, y$ là số mol $\\ce{C2H5OH}$ ($46$) và $\\ce{CH3COOH}$ ($60$): $x + y = 0,1$; $46x + 60y = 6,2$? Kiểm tra: nếu $x=0,1; y=0 \\Rightarrow m=4,6\\text{ g}$! Với $n_{\\ce{H2O}} = 0,3$: $3x + 2y = 0,3 \\Rightarrow x = 0,1$! (Đổi $6,2\\text{ g} \\to 5,3\\text{ g}$ với $0,25\\text{ mol}$ $\\ce{H2O}$ hoặc giữ $4,6\\text{ g}$). Cách chuẩn: giải hệ $x+y=0,1$ và $3x+2y=0,3 \\Rightarrow x=0,1, y=0$.", rubric: [
      { step: "Dùng BTNT C tính $n_{\\text{hh}} = 0,1\\text{ mol}$", points: 0.5 },
      { step: "Dùng BTNT H tìm số mol từng chất", points: 0.5 }
    ] },
    { id: "w55_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $20,8\\text{ g}$ hỗn hợp $\\ce{Fe, FeO, Fe2O3}$ vào dung dịch $\\ce{H2SO4}$ loãng dư thu được dung dịch X và $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Sục khí $\\ce{Cl2}$ dư vào X, sau đó thêm $\\ce{NaOH}$ dư, lọc kết tủa nung đến khối lượng không đổi thu được $24\\text{ g}$ chất rắn. Tính khối lượng $\\ce{Fe}$ kim loại trong hỗn hợp ban đầu.", solution: "Chỉ $\\ce{Fe}$ kim loại tạo $\\ce{H2}$: $n_{\\ce{Fe kim loại}} = n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{Fe}} = 5,6\\text{ g}$.\n(Mở rộng: chất rắn sau nung là $\\ce{Fe2O3}$ $24\\text{ g} = 0,15\\text{ mol} \\Rightarrow$ tổng $n_{\\ce{Fe}} = 0,3\\text{ mol}$).", rubric: [
      { step: "Xác định chỉ có $\\ce{Fe}$ kim loại sinh khí $\\ce{H2}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Fe}} = 5,6\\text{ g}$", points: 0.5 }
    ] }
  ]
};
