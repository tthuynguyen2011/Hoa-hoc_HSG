window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[33] = {
  week: 33,
  title: "Oxide: Phân loại (Acidic, Basic, Amphoteric, Neutral) & Tính chất",
  objectives: [
    "Hiểu định nghĩa Oxide: Hợp chất gồm 2 nguyên tố, trong đó có một nguyên tố là Oxygen.",
    "Phân loại chính xác 4 loại Oxide theo GDPT 2018: Oxide base (Basic oxide), Oxide acid (Acidic oxide), Oxide lưỡng tính (Amphoteric oxide: $\\ce{Al2O3, ZnO}$) và Oxide trung tính (Neutral oxide: $\\ce{CO, NO}$).",
    "Nắm vững tính chất hóa học của Oxide base & Oxide acid và giải bài toán khí $\\ce{CO2}/\\ce{SO2}$ tác dụng với dung dịch kiềm."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 33 (A4). Chuẩn bị bảng phân loại 4 loại oxide.",
    sessions: [
      {
        name: "Buổi 1: Phân loại 4 loại Oxide (Bắt buộc nhớ các ngoại lệ!)",
        guide: "Dạy mẹo phân biệt: Oxide kim loại thường là Oxide base ($\\ce{CaO, CuO, Fe2O3}$), NHƯNG $\\ce{Al2O3, ZnO}$ là Oxide lưỡng tính (tác dụng cả acid và kiềm). Oxide phi kim thường là Oxide acid ($\\ce{CO2, SO2, P2O5}$), NHƯNG $\\ce{CO, NO}$ là Oxide trung tính (không tác dụng acid, kiềm, nước).",
        pitfalls: "Học sinh hay xếp $\\ce{CO}$ và $\\ce{NO}$ vào oxide acid vì thấy có phi kim C, N!"
      },
      {
        name: "Buổi 2: Tính chất hóa học của Oxide base & Oxide acid",
        guide: "Oxide base + Acid $\\to$ Muối + $\\ce{H2O}$ ($\\ce{CuO + H2SO4 -> CuSO4 + H2O}$). Chỉ 4 oxide kiềm ($\\ce{Na2O, K2O, CaO, BaO}$) tác dụng được với nước tạo kiềm! Oxide acid + Kiềm $\\to$ Muối + $\\ce{H2O}$ ($\\ce{CO2 + 2NaOH -> Na2CO3 + H2O}$).",
        pitfalls: "Cho $\\ce{Fe2O3}$ hay $\\ce{CuO}$ tác dụng với nước tạo base (sai: chúng không tan trong nước!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán $\\ce{CO2}$ vào Kiềm (HSG)",
        guide: "Chú ý 5 câu HSG: sục $\\ce{CO2}$ vào $\\ce{NaOH}$ hoặc $\\ce{Ca(OH)2}$ tạo muối trung hòa / muối acid tùy tỉ lệ mol ($T = n_{\\ce{OH-}}/n_{\\ce{CO2}}$).",
        pitfalls: "Quên khả năng tạo muối acid $\\ce{NaHCO3}$ hoặc $\\ce{Ca(HCO3)2}$ khi $\\ce{CO2}$ dư."
      }
    ]
  },
  lecture: [
    {
      title: "Phân loại 4 nhóm Oxide & Tính chất Hóa học",
      content: `
        <table class="std-table">
          <thead><tr><th>Loại Oxide</th><th>Ví dụ điển hình</th><th>Tính chất hóa học đặc trưng</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Oxide base</strong> (Basic oxide)</td><td>$\\ce{Na2O, K2O, CaO, BaO, MgO, Fe2O3, CuO}$</td><td>• Tác dụng với Acid $\\to$ Muối + $\\ce{H2O}$<br/>• 4 oxide ($\\ce{Na2O, K2O, CaO, BaO}$) + $\\ce{H2O} \\to$ Kiềm</td></tr>
            <tr><td><strong>2. Oxide acid</strong> (Acidic oxide)</td><td>$\\ce{CO2, SO2, SO3, P2O5, N2O5}$</td><td>• Tác dụng với Kiềm $\\to$ Muối + $\\ce{H2O}$<br/>• Đa số + $\\ce{H2O} \\to$ Acid (trừ $\\ce{SiO2}$)</td></tr>
            <tr><td><strong>3. Oxide lưỡng tính</strong> (Amphoteric)</td><td>$\\ce{Al2O3, ZnO, Cr2O3}$</td><td>Tác dụng được với <strong>cả Acid và Kiềm</strong></td></tr>
            <tr><td><strong>4. Oxide trung tính</strong> (Neutral)</td><td>$\\ce{CO, NO, N2O}$</td><td>Không tác dụng với nước, acid hay kiềm</td></tr>
          </tbody>
        </table>
      `,
      checkpoint: {
        question: "Dãy oxide nào sau đây chỉ gồm toàn các OXIDE ACID?",
        options: ["$\\ce{CO2, SO2, P2O5}$", "$\\ce{CO, CO2, SO2}$", "$\\ce{CaO, CuO, Fe2O3}$", "$\\ce{Al2O3, ZnO, NO}$"],
        answer: 0,
        explanation: "$\\ce{CO2, SO2, P2O5}$ đều là oxide acid (còn $\\ce{CO, NO}$ là oxide trung tính; $\\ce{Al2O3, ZnO}$ là oxide lưỡng tính)."
      }
    }
  ],
  questions: [
    { id: "w33_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây là OXIDE BASE?",
      options: ["A. $\\ce{SO2}$", "B. $\\ce{CO2}$", "C. $\\ce{CaO}$", "D. $\\ce{P2O5}$"],
      answer: 2, solution: "$\\ce{CaO}$ (Calcium oxide) là oxide base." },
    { id: "w33_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Oxide nào sau đây là OXIDE TRUNG TÍNH (không tạo muối)?",
      options: ["A. $\\ce{CO2}$", "B. $\\ce{CO}$", "C. $\\ce{SO3}$", "D. $\\ce{Na2O}$"],
      answer: 1, solution: "$\\ce{CO}$ (Carbon monoxide) là oxide trung tính." },
    { id: "w33_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Oxide nào sau đây tác dụng với nước tạo thành dung dịch làm quỳ tím hóa XANH?",
      options: ["A. $\\ce{CuO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{CaO}$", "D. $\\ce{CO2}$"],
      answer: 2, solution: "$\\ce{CaO + H2O -> Ca(OH)2}$ (kiềm, làm quỳ tím hóa xanh)." },
    { id: "w33_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Oxide nào sau đây tác dụng với nước tạo thành dung dịch làm quỳ tím hóa ĐỎ?",
      options: ["A. $\\ce{Na2O}$", "B. $\\ce{P2O5}$", "C. $\\ce{MgO}$", "D. $\\ce{BaO}$"],
      answer: 1, solution: "$\\ce{P2O5 + 3H2O -> 2H3PO4}$ (acid, làm quỳ tím hóa đỏ)." },
    { id: "w33_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Oxide nào sau đây thuộc loại OXIDE LƯỠNG TÍNH?",
      options: ["A. $\\ce{MgO}$", "B. $\\ce{Al2O3}$", "C. $\\ce{FeO}$", "D. $\\ce{SO2}$"],
      answer: 1, solution: "$\\ce{Al2O3}$ là oxide lưỡng tính (tác dụng cả acid và base mạnh)." },
    { id: "w33_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Sản phẩm của phản ứng giữa bột $\\ce{CuO}$ màu đen và dung dịch $\\ce{H2SO4}$ loãng là:",
      options: ["A. $\\ce{CuSO4}$ và $\\ce{H2}$", "B. $\\ce{CuSO4}$ (dung dịch xanh lam) và $\\ce{H2O}$", "C. $\\ce{Cu}$ và $\\ce{H2O}$", "D. Không phản ứng"],
      answer: 1, solution: "$\\ce{CuO + H2SO4 -> CuSO4 + H2O}$." },
    { id: "w33_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Để làm khô khí $\\ce{CO2}$ có lẫn hơi nước, ta KHÔNG thể dùng chất hút ẩm nào sau đây?",
      options: ["A. $\\ce{H2SO4}$ đặc", "B. $\\ce{CaCl2}$ khan", "C. $\\ce{CaO}$ (vôi sống)", "D. $\\ce{P2O5}$"],
      answer: 2, solution: "$\\ce{CaO}$ là oxide base nên sẽ phản ứng giữ luôn khí $\\ce{CO2}$ ($\\ce{CaO + CO2 -> CaCO3}$)." },
    { id: "w33_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Oxide:",
      statements: [
        { text: "Mọi oxide đều phản ứng được với nước ở nhiệt độ thường.", answer: false },
        { text: "$\\ce{Fe2O3}$ tan trong dung dịch $\\ce{HCl}$ tạo dung dịch $\\ce{FeCl3}$ màu vàng nâu.", answer: true },
        { text: "$\\ce{SiO2}$ là oxide acid nhưng không tan trong nước.", answer: true },
        { text: "Khí $\\ce{SO2}$ phản ứng với dung dịch $\\ce{NaOH}$ tạo muối $\\ce{Na2SO3}$ và nước.", answer: true }
      ],
      solution: "a) Sai: $\\ce{CuO, Fe2O3, SiO2, CO...}$ không tác dụng với nước." },
    { id: "w33_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $8\\text{ g}$ $\\ce{CuO}$ ($M=80$) cần vừa đủ bao nhiêu mL dung dịch $\\ce{HCl}$ $1\\text{ M}$?",
      answer: "200", tolerance: 0.5,
      solution: "$n_{\\ce{CuO}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{HCl}} = 0,2\\text{ mol} \\Rightarrow V = 200\\text{ mL}$." },
    { id: "w33_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $16\\text{ g}$ $\\ce{Fe2O3}$ ($M=160$) tác dụng hết với dung dịch $\\ce{H2SO4}$ loãng dư. Khối lượng muối $\\ce{Fe2(SO4)3}$ ($M=400$) thu được là bao nhiêu gam?",
      answer: "40", tolerance: 0.2,
      solution: "$n_{\\ce{Fe2O3}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Fe2(SO4)3}} = 0,1\\text{ mol} \\Rightarrow m = 40\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w33_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho $2,479\\text{ L}$ khí $\\ce{CO2}$ (đkc) hấp thụ hoàn toàn vào $150\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Muối nào thu được sau phản ứng?",
      options: ["A. Chỉ có $\\ce{Na2CO3}$", "B. Chỉ có $\\ce{NaHCO3}$", "C. Cả $\\ce{Na2CO3}$ và $\\ce{NaHCO3}$", "D. $\\ce{Na2CO3}$ và $\\ce{NaOH}$ dư"],
      answer: 2, solution: "$n_{\\ce{CO2}} = 0,1\\text{ mol}$, $n_{\\ce{NaOH}} = 0,15\\text{ mol}$. Tỉ lệ $T = \\frac{0,15}{0,1} = 1,5$ (nằm giữa $1$ và $2$) $\\Rightarrow$ tạo cả 2 muối $\\ce{Na2CO3}$ và $\\ce{NaHCO3}$." },
    { id: "w33_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho các oxide: $\\ce{CaO, Fe2O3, SO3, CO2, Al2O3, CO}$. Có bao nhiêu oxide tác dụng được với dung dịch $\\ce{HCl}$?",
      options: ["A. 2", "B. 3", "C. 4", "D. 5"],
      answer: 1, solution: "3 oxide tác dụng với $\\ce{HCl}$ là $\\ce{CaO, Fe2O3, Al2O3}$." },
    { id: "w33_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho hỗn hợp $12\\text{ g}$ gồm $\\ce{MgO}$ và $\\ce{CuO}$ tác dụng vừa đủ với $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$:",
      statements: [
        { text: "Số mol $\\ce{HCl}$ đã phản ứng là $0,4\\text{ mol}$.", answer: true },
        { text: "Tổng số mol của $\\ce{MgO}$ và $\\ce{CuO}$ trong hỗn hợp là $0,2\\text{ mol}$.", answer: true },
        { text: "Khối lượng $\\ce{MgO}$ trong hỗn hợp là $4,0\\text{ g}$ ($0,1\\text{ mol}$).", answer: true },
        { text: "Khối lượng muối khan thu được sau phản ứng là $25\\text{ g}$.", answer: false }
      ],
      solution: "d) Sai: $n_{\\ce{H2O}} = 0,2\\text{ mol}$ ($3,6\\text{ g}$) $\\Rightarrow m_{\\text{muối}} = 12 + 0,4(36,5) - 3,6 = 23,0\\text{ g}$." },
    { id: "w33_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Khử hoàn toàn $24\\text{ g}$ hỗn hợp $\\ce{CuO}$ và $\\ce{Fe2O3}$ bằng khí $\\ce{CO}$ dư ở nhiệt độ cao thu được $17,6\\text{ g}$ hỗn hợp kim loại. Tính khối lượng khí $\\ce{CO2}$ (gam) sinh ra.",
      answer: "17.6", tolerance: 0.1,
      solution: "Khối lượng O trong oxide bị lấy đi $= 24 - 17,6 = 6,4\\text{ g} \\Rightarrow n_{\\text{O}} = 0,4\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,4\\text{ mol} \\Rightarrow m_{\\ce{CO2}} = 0,4 \\times 44 = 17,6\\text{ g}$." },
    { id: "w33_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $10,2\\text{ g}$ $\\ce{Al2O3}$ ($M=102$) bằng dung dịch $\\ce{NaOH}$ dư ($\\ce{Al2O3 + 2NaOH -> 2NaAlO2 + H2O}$). Tính số mol $\\ce{NaOH}$ đã phản ứng.",
      answer: "0.2", tolerance: 0.02,
      solution: "$n_{\\ce{Al2O3}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,2\\text{ mol}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w33_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hấp thụ hoàn toàn $7,437\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $250\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $0,8\\text{ M}$. Tính khối lượng kết tủa $\\ce{CaCO3}$ thu được.",
      quickAnswer: "10",
      solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol}$; $n_{\\ce{Ca(OH)2}} = 0,25 \\times 0,8 = 0,2\\text{ mol}$. Vì $0,2 < 0,3 < 2 \\times 0,2 = 0,4$ nên kết tủa bị hòa tan một phần (tạo cả $\\ce{CaCO3}$ và $\\ce{Ca(HCO3)2}$). Đặt $n_{\\ce{CaCO3}} = x, n_{\\ce{Ca(HCO3)2}} = y$. Bảo toàn Ca: $x + y = 0,2$; Bảo toàn C: $x + 2y = 0,3 \\Rightarrow y = 0,1, x = 0,1\\text{ mol}$. Vậy $m_{\\ce{CaCO3}} = 0,1 \\times 100 = 10\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{CO2}} = 0,3$ và $n_{\\ce{Ca(OH)2}} = 0,2\\text{ mol}$, xác định tạo 2 muối", points: 0.5 },
        { step: "Giải đúng $n_{\\ce{CaCO3}} = 0,1\\text{ mol}$ và $m = 10\\text{ g}$", points: 0.5 }
      ] },
    { id: "w33_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 4 chất rắn màu trắng mất nhãn: $\\ce{Na2O}$, $\\ce{P2O5}$, $\\ce{Al2O3}$ và $\\ce{MgO}$. Chỉ dùng thêm nước và giấy quỳ tím, hãy trình bày cách nhận biết cả 4 chất trên (viết PTHH minh họa).",
      solution: "B1: Cho 4 chất vào nước dư rồi nhúng quỳ tím: • Tan và làm quỳ tím hóa XANH là $\\ce{Na2O}$ ($\\ce{Na2O + H2O -> 2NaOH}$). • Tan và làm quỳ tím hóa ĐỎ là $\\ce{P2O5}$ ($\\ce{P2O5 + 3H2O -> 2H3PO4}$). • Hai chất không tan là $\\ce{Al2O3}$ và $\\ce{MgO}$. B2: Lấy dung dịch $\\ce{NaOH}$ vừa tạo thành ở trên cho tác dụng với 2 chất không tan: chất rắn tan hết tạo dung dịch trong suốt là $\\ce{Al2O3}$ (oxide lưỡng tính: $\\ce{Al2O3 + 2NaOH -> 2NaAlO2 + H2O}$); chất không tan là $\\ce{MgO}$.",
      rubric: [
        { step: "Dùng nước + quỳ tím nhận ra $\\ce{Na2O}$ (xanh) và $\\ce{P2O5}$ (đỏ)", points: 0.5 },
        { step: "Dùng chính dung dịch $\\ce{NaOH}$ thu được để phân biệt $\\ce{Al2O3}$ (tan) và $\\ce{MgO}$ (không tan)", points: 0.5 }
      ] },
    { id: "w33_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hỗn hợp khí A gồm $\\ce{CO}$ và $\\ce{CO2}$. Dẫn $4,958\\text{ L}$ hỗn hợp A (đkc) đi qua dung dịch $\\ce{Ca(OH)2}$ dư thấy thu được $15\\text{ g}$ kết tủa trắng. Tính phần trăm theo thể tích của mỗi khí trong A.",
      quickAnswer: "75",
      solution: "$n_A = 4,958 / 24,79 = 0,2\\text{ mol}$. Chỉ có $\\ce{CO2}$ phản ứng với $\\ce{Ca(OH)2}$ ($\\ce{CO}$ là oxide trung tính không phản ứng!): $n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 15/100 = 0,15\\text{ mol}$. Suy ra $n_{\\ce{CO}} = 0,2 - 0,15 = 0,05\\text{ mol}$. Vậy $\\%V_{\\ce{CO2}} = 75\\%$, $\\%V_{\\ce{CO}} = 25\\%$.",
      rubric: [
        { step: "Giải thích $\\ce{CO}$ không phản ứng, tính đúng $n_{\\ce{CO2}} = 0,15\\text{ mol}$", points: 0.5 },
        { step: "Tính đúng $75\\%\\ \\ce{CO2}$ và $25\\%\\ \\ce{CO}$", points: 0.5 }
      ] },
    { id: "w33_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $1,53\\text{ g}$ một oxide của kim loại M hóa trị II ($\\ce{MO}$) cần vừa đủ $20\\text{ mL}$ dung dịch $\\ce{HCl}$ $1\\text{ M}$ (không, sửa số liệu: $M_{\\ce{BaO}} = 153\\text{ g/mol} \\Rightarrow 0,01\\text{ mol}$ $\\ce{BaO}$ nặng $1,53\\text{ g}$!). Xác định công thức của oxide trên.",
      solution: "PTHH: $\\ce{MO + 2HCl -> MCl2 + H2O}$. $n_{\\ce{HCl}} = 0,02\\text{ mol} \\Rightarrow n_{\\ce{MO}} = 0,01\\text{ mol}$. Suy ra $M_{\\ce{MO}} = 1,53 / 0,01 = 153\\text{ g/mol} \\Rightarrow M_M = 153 - 16 = 137\\text{ g/mol}$ (Barium, Ba). Oxide là $\\ce{BaO}$.",
      rubric: [
        { step: "Viết đúng PTHH và tính $n_{\\ce{MO}} = 0,01\\text{ mol}$", points: 0.5 },
        { step: "Tìm đúng $M_M = 137$ (Ba) và CTHH $\\ce{BaO}$", points: 0.5 }
      ] },
    { id: "w33_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nêu hiện tượng và viết PTHH khi cho từ từ đến dư khí $\\ce{CO2}$ sục vào dung dịch nước vôi trong ($\\ce{Ca(OH)2}$).",
      solution: "Hiện tượng: Ban đầu xuất hiện kết tủa trắng ($\\ce{CaCO3}$) tăng dần đến cực đại; nếu tiếp tục sục $\\ce{CO2}$ dư, kết tủa trắng tan dần tạo thành dung dịch trong suốt ($\\ce{Ca(HCO3)2}$). PTHH: (1) $\\ce{CO2 + Ca(OH)2 -> CaCO3 v + H2O}$; (2) $\\ce{CaCO3 + CO2 + H2O -> Ca(HCO3)2}$.",
      rubric: [
        { step: "Nêu đúng hiện tượng 2 giai đoạn: kết tủa trắng xuất hiện rồi tan dần khi $\\ce{CO2}$ dư", points: 0.5 },
        { step: "Viết đúng 2 PTHH", points: 0.5 }
      ] }
  ]
};
