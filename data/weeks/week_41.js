window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[41] = {
  week: 41,
  title: "Bài toán Kim loại tác dụng với Acid & Dung dịch Muối (HSG)",
  objectives: [
    "Thành thạo các định luật bảo toàn (khối lượng, nguyên tố, electron sơ cấp) trong bài toán kim loại tác dụng với $\\ce{HCl}$, $\\ce{H2SO4}$ loãng.",
    "Giải được bài toán xác định tên kim loại dựa vào hóa trị và bảng nguyên tử khối.",
    "Giải được bài toán tăng giảm khối lượng kim loại trong dung dịch muối và bài toán 1 kim loại + 2 muối / 2 kim loại + 1 muối.",
    "Nắm vững phương pháp quy đổi và biện luận chất dư/hết trong các bài thi HSG lớp 9."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu chuyên đề 5 dạng toán HSG kim loại, bảng nguyên tử khối và hóa trị thường gặp.",
    sessions: [
      {
        name: "Buổi 1: Bảo toàn khối lượng & Bảo toàn nguyên tố H, Cl, SO₄",
        guide: "Chốt 2 công thức vàng: (1) $m_{\\text{muối chloride}} = m_{\\text{KL}} + 71 \\cdot n_{\\ce{H2}}$; (2) $m_{\\text{muối sulfate}} = m_{\\text{KL}} + 96 \\cdot n_{\\ce{H2}}$.",
        pitfalls: "Quên kiểm tra xem acid hay kim loại hết trước khi áp dụng công thức."
      },
      {
        name: "Buổi 2: Bài toán Tăng – Giảm khối lượng & Thứ tự phản ứng",
        guide: "Luyện tập bài toán nhúng thanh $\\ce{Fe/Zn/Cu}$ vào dung dịch muối và bài toán hỗn hợp 2 kim loại tác dụng với 1 muối (hoặc 1 kim loại với 2 muối).",
        pitfalls: "Quên trường hợp thanh kim loại có độ tăng/giảm tỉ lệ theo phân số mol."
      },
      {
        name: "Buổi 3: Luyện đề chuyên đề HSG Kim loại"
      }
    ]
  },
  lecture: [
    {
      title: "1. Bộ công thức giải nhanh HSG Kim loại + Acid",
      content: `
<ul>
  <li>Khi cho hỗn hợp kim loại đứng trước H tác dụng hoàn toàn với acid loãng:
    <ul>
      <li>Với $\\ce{HCl}$: $n_{\\ce{HCl pư}} = 2n_{\\ce{H2}}$ $\\Rightarrow$ <strong>$m_{\\text{muối}} = m_{\\text{KL}} + 71 \\cdot n_{\\ce{H2}}$</strong>.</li>
      <li>Với $\\ce{H2SO4}$ loãng: $n_{\\ce{H2SO4 pư}} = n_{\\ce{H2}}$ $\\Rightarrow$ <strong>$m_{\\text{muối}} = m_{\\text{KL}} + 96 \\cdot n_{\\ce{H2}}$</strong>.</li>
    </ul>
  </li>
  <li>Nếu đề cho lượng acid thiếu (kim loại còn dư): Số mol $\\ce{H2}$ tính theo <strong>số mol acid</strong>, và $m_{\\text{KL pư}} + m_{\\text{acid}} = m_{\\text{muối}} + m_{\\ce{H2}}$.</li>
</ul>`,
      example: "Hòa tan hoàn toàn 15,3 g hỗn hợp Mg, Al, Fe, Zn trong dung dịch H₂SO₄ loãng dư thu được 9,916 L H₂ (đkc). Tính khối lượng muối sulfate khan thu được.\nGiải: n(H₂) = 9,916 / 24,79 = 0,4 mol → m(muối) = 15,3 + 96 × 0,4 = 53,7 g.",
      checkpoint: {
        question: "Hòa tan 10 g hỗn hợp Mg, Fe, Zn trong dung dịch HCl dư thu được 0,3 mol H₂. Khối lượng muối chloride khan thu được là:",
        options: ["A. 21,3 g", "B. 31,3 g", "C. 38,8 g", "D. 20,65 g"],
        answer: 1,
        explanation: "m(muối) = 10 + 71 × 0,3 = 31,3 g."
      }
    }
  ],
  questions: [
    { id: "w41_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Cho $2,4\\text{ g}$ $\\ce{Mg}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư. Số mol $\\ce{HCl}$ đã phản ứng là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,3\\text{ mol}$", "D. $0,4\\text{ mol}$"], answer: 1, solution: "$n_{\\ce{Mg}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{HCl}} = 0,2\\text{ mol}$." },
    { id: "w41_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $5,6\\text{ g}$ $\\ce{Fe}$ trong dung dịch $\\ce{H2SO4}$ loãng dư thu được thể tích khí $\\ce{H2}$ (đkc) là:", options: ["A. $2,24\\text{ L}$", "B. $2,479\\text{ L}$", "C. $4,958\\text{ L}$", "D. $1,2395\\text{ L}$"], answer: 1, solution: "$n_{\\ce{Fe}} = 0,1\\text{ mol} \\Rightarrow V_{\\ce{H2}} = 2,479\\text{ L}$." },
    { id: "w41_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Cho $13\\text{ g}$ $\\ce{Zn}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{HCl}$. Chất nào còn dư sau phản ứng?", options: ["A. $\\ce{HCl}$ dư", "B. $\\ce{Zn}$ dư", "C. Cả hai đều hết", "D. Không phản ứng"], answer: 1, solution: "$n_{\\ce{Zn}} = 0,2\\text{ mol}$ cần $0,4\\text{ mol}$ $\\ce{HCl}$, mà chỉ có $0,2\\text{ mol}$ $\\ce{HCl}$ $\\Rightarrow$ $\\ce{Zn}$ dư $0,1\\text{ mol}$." },
    { id: "w41_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Nhúng thanh $\\ce{Zn}$ vào dung dịch $\\ce{AgNO3}$, hiện tượng xảy ra là:", options: ["A. Thanh Zn nặng lên", "B. Thanh Zn nhẹ đi", "C. Khối lượng không đổi", "D. Có khí thoát ra"], answer: 0, solution: "$1\\text{ mol}$ $\\ce{Zn}$ ($65\\text{ g}$) tạo $2\\text{ mol}$ $\\ce{Ag}$ ($216\\text{ g}$) $\\Rightarrow$ thanh Zn nặng lên." },
    { id: "w41_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho $2,7\\text{ g}$ $\\ce{Al}$ tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Khối lượng muối $\\ce{AlCl3}$ thu được là:", options: ["A. $13,35\\text{ g}$", "B. $26,7\\text{ g}$", "C. $6,675\\text{ g}$", "D. $10,68\\text{ g}$"], answer: 0, solution: "$n_{\\ce{Al}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{AlCl3}} = 0,1 \\times 133,5 = 13,35\\text{ g}$." },
    { id: "w41_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại X (hóa trị II) tác dụng hết với dung dịch $\\ce{HCl}$ tạo $0,1\\text{ mol}$ $\\ce{H2}$ và $9,5\\text{ g}$ muối $\\ce{XCl2}$. X là:", options: ["A. $\\ce{Ca}$", "B. $\\ce{Mg}$", "C. $\\ce{Zn}$", "D. $\\ce{Fe}$"], answer: 1, solution: "$M_{\\ce{XCl2}} = 9,5/0,1 = 95 \\Rightarrow X = 95 - 71 = 24$ ($\\ce{Mg}$)." },
    { id: "w41_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Cùng số mol, Al tác dụng với HCl dư sinh ra nhiều khí H₂ hơn Fe.", answer: true },
      { text: "Cùng khối lượng (ví dụ 10 g), Mg tác dụng với HCl dư sinh ra nhiều khí H₂ hơn Fe.", answer: true },
      { text: "Nhúng thanh Fe vào dung dịch MgSO₄ thì thanh Fe tăng khối lượng.", answer: false },
      { text: "Khi cho hỗn hợp kim loại tác dụng với H₂SO₄ loãng dư, n(H₂SO₄ pư) = n(H₂).", answer: true }
    ], solution: "c) Sai: Fe yếu hơn Mg nên không có phản ứng." },
    { id: "w41_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Cho 0,1 mol Fe vào dung dịch chứa 0,15 mol HCl thì thu được 0,075 mol H₂.", answer: true },
      { text: "Cho Cu vào dung dịch FeCl₃ không xảy ra phản ứng.", answer: false },
      { text: "Hòa tan 1 mol Fe trong HCl dư thu được 1 mol muối FeCl₂.", answer: true },
      { text: "Khối lượng muối chloride khan bằng khối lượng kim loại phản ứng cộng 71 × n(H₂).", answer: true }
    ], solution: "b) Sai (ở THPT có Cu + 2FeCl₃ → CuCl₂ + 2FeCl₂)." },
    { id: "w41_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Hòa tan hoàn toàn $8,4\\text{ g}$ hỗn hợp $\\ce{Mg}$ và $\\ce{Fe}$ bằng dung dịch $\\ce{HCl}$ dư thu được $0,25\\text{ mol}$ $\\ce{H2}$. Khối lượng muối khan thu được là bao nhiêu gam?", answer: "26.15", tolerance: 0.1, solution: "$m_{\\text{muối}} = 8,4 + 71 \\times 0,25 = 26,15\\text{ g}$." },
    { id: "w41_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Hòa tan $10\\text{ g}$ hỗn hợp $\\ce{Zn}$ và $\\ce{Al}$ trong dung dịch $\\ce{H2SO4}$ loãng dư thu được $0,2\\text{ mol}$ $\\ce{H2}$. Khối lượng muối sulfate khan thu được là bao nhiêu gam?", answer: "29.2", tolerance: 0.1, solution: "$m_{\\text{muối}} = 10 + 96 \\times 0,2 = 29,2\\text{ g}$." },
    { id: "w41_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ $\\ce{Fe}$ vào $200\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $1\\text{ M}$. Sau khi phản ứng hoàn toàn thu được $14\\text{ g}$ chất rắn. Biết $\\ce{Fe}$ dư. Giá trị của $m$ là:", options: ["A. $12,4\\text{ g}$", "B. $11,2\\text{ g}$", "C. $16,8\\text{ g}$", "D. $13,2\\text{ g}$"], answer: 0, solution: "$n_{\\ce{CuSO4}} = 0,2\\text{ mol}$ phản ứng hết làm thanh tăng $0,2 \\times (64 - 56) = 1,6\\text{ g}$. Vậy $m = 14 - 1,6 = 12,4\\text{ g}$." },
    { id: "w41_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $11,9\\text{ g}$ hỗn hợp $\\ce{Al}$ và $\\ce{Zn}$ tác dụng hoàn toàn với dung dịch $\\ce{H2SO4}$ loãng dư thu được $9,916\\text{ L}$ $\\ce{H2}$ (đkc). Số mol $\\ce{Al}$ và $\\ce{Zn}$ lần lượt là:", options: ["A. $0,1$ và $0,2$", "B. $0,2$ và $0,1$", "C. $0,15$ và $0,15$", "D. $0,25$ và $0,05$"], answer: 1, solution: "$27x + 65y = 11,9$; $1,5x + y = 0,4 \\Rightarrow x = 0,2; y = 0,1$." },
    { id: "w41_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Hai thanh kim loại giống nhau đều bằng $\\ce{Zn}$ có cùng khối lượng. Thanh 1 nhúng vào $\\ce{Cu(NO3)2}$, thanh 2 nhúng vào $\\ce{Pb(NO3)2}$. Sau cùng thời gian (số mol $\\ce{Zn}$ tan như nhau ở 2 thanh):", options: ["A. Cả 2 thanh đều giảm", "B. Thanh 1 giảm, thanh 2 tăng", "C. Thanh 1 tăng, thanh 2 giảm", "D. Cả 2 đều tăng"], answer: 1, solution: "Thanh 1: $64 - 65 = -1\\text{ g}$ (giảm). Thanh 2: $207 - 65 = +142\\text{ g}$ (tăng)." },
    { id: "w41_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Hòa tan hết $3,6\\text{ g}$ một kim loại R (hóa trị II) trong dung dịch $\\ce{HCl}$ dư thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Nguyên tử khối của R là bao nhiêu?", answer: "24", tolerance: 0.2, solution: "$n_{\\ce{R}} = n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow M_R = 3,6 / 0,15 = 24$ ($\\ce{Mg}$)." },
    { id: "w41_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $5,4\\text{ g}$ $\\ce{Al}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{CuCl2}$. Sau khi phản ứng hoàn toàn thu được bao nhiêu gam kim loại?", answer: "14.6", tolerance: 0.1, solution: "$n_{\\ce{Al}} = 0,2\\text{ mol}$; $2\\ce{Al} + 3\\ce{CuCl2} \\rightarrow 2\\ce{AlCl3} + 3\\ce{Cu}$. $0,2\\text{ mol}$ $\\ce{CuCl2}$ phản ứng với $0,4/3\\text{ mol}$ $\\ce{Al}$, còn dư $0,2/3\\text{ mol}$ $\\ce{Al}$ ($1,8\\text{ g}$) và tạo $0,2\\text{ mol}$ $\\ce{Cu}$ ($12,8\\text{ g}$). Tổng $= 14,6\\text{ g}$." },
    { id: "w41_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $7,8\\text{ g}$ hỗn hợp X gồm $\\ce{Mg}$ và $\\ce{Al}$ tác dụng hoàn toàn với $500\\text{ mL}$ dung dịch $\\ce{HCl}$ $1,8\\text{ M}$. Chứng minh hỗn hợp X tan hết hay còn dư, rồi tính thể tích khí $\\ce{H2}$ (đkc) thu được.", solution: "Giả sử X toàn $\\ce{Al}$ (kim loại cần nhiều HCl nhất trên 1 gam): $n_{\\ce{Al}} = 7,8/27 = 0,289\\text{ mol} \\Rightarrow n_{\\ce{HCl max}} = 3 \\times 0,289 = 0,867\\text{ mol}$.\nSố mol $\\ce{HCl}$ có sẵn $= 0,5 \\times 1,8 = 0,9\\text{ mol} > 0,867\\text{ mol} \\Rightarrow$ Acid dư, hỗn hợp X tan hết.\n(Vì không cho thêm dữ kiện tỉ lệ Mg:Al nên đề không tính được 1 giá trị $V_{\\ce{H2}}$ duy nhất mà chỉ chứng minh tan hết và tìm khoảng $V$: $0,325\\text{ mol} < n_{\\ce{H2}} < 0,433\\text{ mol} \\Rightarrow 8,06\\text{ L} < V < 10,74\\text{ L}$).", rubric: [
      { step: "Tính $n_{\\ce{HCl}} = 0,9\\text{ mol}$ và chặn trên $n_{\\ce{HCl max}} = 0,867\\text{ mol}$", points: 0.5 },
      { step: "Kết luận đúng X tan hết và tìm khoảng thể tích khí $\\ce{H2}$", points: 0.5 }
    ] },
    { id: "w41_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nhúng một thanh kim loại M hóa trị II (nặng $m\\text{ g}$) vào $100\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $0,5\\text{ M}$. Sau khi phản ứng hoàn toàn, lấy thanh kim loại ra cân thấy khối lượng giảm $0,05\\text{ g}$ so với ban đầu. Biết toàn bộ $\\ce{Cu}$ sinh ra bám hết lên thanh M. Xác định kim loại M.", solution: "$n_{\\ce{CuSO4}} = 0,05\\text{ mol} \\Rightarrow n_{\\ce{M pư}} = n_{\\ce{Cu}} = 0,05\\text{ mol}$.\nKhối lượng giảm: $0,05 \\times (M - 64) = 0,05 \\Rightarrow M - 64 = 1 \\Rightarrow M = 65$ ($\\ce{Zn}$).", rubric: [
      { step: "Tính $n_{\\ce{CuSO4}} = 0,05\\text{ mol}$ và viết PTHH", points: 0.5 },
      { step: "Lập phương trình $0,05(M - 64) = 0,05 \\Rightarrow M = 65$ (Kẽm)", points: 0.5 }
    ] },
    { id: "w41_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp X gồm $\\ce{Mg, Al, Fe}$ vào dung dịch $\\ce{H2SO4}$ loãng dư thu được $8,6765\\text{ L}$ khí $\\ce{H2}$ (đkc). Mặt khác, nếu đốt cháy hoàn toàn $m\\text{ g}$ X trong khí $\\ce{Cl2}$ dư thu được $46,75\\text{ g}$ muối chloride. Biết số mol $\\ce{Fe}$ trong X bằng $0,1\\text{ mol}$. Tính $m$.", solution: "$n_{\\ce{H2}} = 0,35\\text{ mol}$. Khi tác dụng $\\ce{H2SO4}$ loãng: $2n_{\\ce{Mg}} + 3n_{\\ce{Al}} + 2n_{\\ce{Fe}} = 2n_{\\ce{H2}} = 0,7\\text{ mol}$.\nKhi tác dụng $\\ce{Cl2}$ dư, $\\ce{Fe}$ lên hóa trị III nên: $n_{\\ce{Cl trong muối}} = 2n_{\\ce{Mg}} + 3n_{\\ce{Al}} + 3n_{\\ce{Fe}} = 0,7 + n_{\\ce{Fe}} = 0,7 + 0,1 = 0,8\\text{ mol}$.\nVậy $m = m_{\\text{muối}} - m_{\\ce{Cl}} = 46,75 - 0,8 \\times 35,5 = 46,75 - 28,4 = 18,35\\text{ g}$.", rubric: [
      { step: "Thiết lập liên hệ số mol e nhường với $\\ce{H2SO4}$ ($0,7\\text{ mol}$) và với $\\ce{Cl2}$ ($0,8\\text{ mol}$)", points: 0.5 },
      { step: "Tính đúng $m = 46,75 - 0,8 \\times 35,5 = 18,35\\text{ g}$", points: 0.5 }
    ] },
    { id: "w41_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $4,4\\text{ g}$ hỗn hợp $\\ce{Mg}$ và $\\ce{MgO}$ tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng muối $\\ce{MgCl2}$ thu được.", solution: "Chỉ có $\\ce{Mg}$ tạo $\\ce{H2}$: $n_{\\ce{Mg}} = n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{Mg}} = 2,4\\text{ g}$.\n$m_{\\ce{MgO}} = 4,4 - 2,4 = 2,0\\text{ g} \\Rightarrow n_{\\ce{MgO}} = 2,0 / 40 = 0,05\\text{ mol}$.\nBảo toàn Mg: $n_{\\ce{MgCl2}} = 0,1 + 0,05 = 0,15\\text{ mol} \\Rightarrow m_{\\ce{MgCl2}} = 0,15 \\times 95 = 14,25\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Mg}} = 0,1\\text{ mol}$ và $n_{\\ce{MgO}} = 0,05\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{MgCl2}} = 14,25\\text{ g}$", points: 0.5 }
    ] },
    { id: "w41_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $16,2\\text{ g}$ kim loại M (hóa trị III) vào $500\\text{ g}$ dung dịch $\\ce{HCl}$ $18,25\\%$. Tính nồng độ phần trăm của muối thu được trong dung dịch sau phản ứng (biết $M=27$).", solution: "$n_{\\ce{Al}} = 16,2 / 27 = 0,6\\text{ mol}$; $n_{\\ce{HCl}} = (500 \\times 18,25\\%) / 36,5 = 2,5\\text{ mol}$ (dư).\n$2\\ce{Al} + 6\\ce{HCl} \\rightarrow 2\\ce{AlCl3} + 3\\ce{H2}\\uparrow$.\n$n_{\\ce{AlCl3}} = 0,6\\text{ mol}$ ($m = 0,6 \\times 133,5 = 80,1\\text{ g}$); $n_{\\ce{H2}} = 0,9\\text{ mol}$ ($m = 1,8\\text{ g}$).\n$m_{\\text{dd sau}} = 16,2 + 500 - 1,8 = 514,4\\text{ g}$.\n$C\\%(\\ce{AlCl3}) = (80,1 / 514,4) \\times 100\\% \\approx 15,57\\%$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Al}} = 0,6\\text{ mol}$ và $m_{\\ce{AlCl3}} = 80,1\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{dd sau}} = 514,4\\text{ g}$ và $C\\% = 15,57\\%$", points: 0.5 }
    ] }
  ]
};
