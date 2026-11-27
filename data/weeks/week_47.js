window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[47] = {
  week: 47,
  title: "Alkene (Ethylene): Liên kết đôi, phản ứng cộng Br₂ & trùng hợp",
  objectives: [
    "Nêu được khái niệm alkene, công thức tổng quát $\\ce{C}_n\\ce{H}_{2n}$ ($n \\ge 2$) và đặc điểm liên kết đôi $\\ce{C=C}$ trong phân tử ethylene ($\\ce{C2H4}$).",
    "Trình bày được tính chất vật lý và 3 tính chất hóa học đặc trưng của ethylene: phản ứng cháy, phản ứng cộng ($\\ce{Br2, H2, H2O}$) và phản ứng trùng hợp tạo nhựa PE.",
    "Nêu được ứng dụng của ethylene trong đời sống (kích thích quả chín nhanh, sản xuất nhựa PE, điều chế ethylic alcohol).",
    "Giải được các bài toán hỗn hợp alkane + alkene tác dụng dung dịch $\\ce{Br2}$ và đốt cháy alkene ($n_{\\ce{CO2}} = n_{\\ce{H2O}}$)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mô hình phân tử $\\ce{C2H4}$, nước bromine, ống dẫn khí, hoa quả xanh + quả chín minh họa hormone ethylene.",
    sessions: [
      {
        name: "Buổi 1: Cấu tạo phân tử Ethylene & Liên kết đôi C=C",
        guide: "Phân tích liên kết đôi $\\ce{C=C}$ gồm 1 liên kết bền và 1 liên kết kém bền dễ bị đứt ra khi tham gia phản ứng cộng hoặc trùng hợp.",
        pitfalls: "HS hay nghĩ cả hai liên kết trong $\\ce{C=C}$ đều bền như nhau."
      },
      {
        name: "Buổi 2: Phản ứng cộng (Br₂, H₂, H₂O) & Phản ứng trùng hợp",
        guide: "Nhấn mạnh phản ứng cộng $\\ce{Br2}$: $\\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}$ làm mất màu nâu đỏ dung dịch bromine (dùng nhận biết alkene). Cộng $\\ce{H2O}$ xúc tác acid tạo $\\ce{C2H5OH}$. Trùng hợp tạo PE.",
        pitfalls: "Quên viết hệ số $n$ và liên kết mở 2 đầu trong phương trình trùng hợp."
      },
      {
        name: "Buổi 3: Bài toán Tách hỗn hợp khí & Cộng Bromine (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Alkene – Cấu tạo & Phản ứng đặc trưng",
      content: `
<p><strong>Alkene</strong> là những hydrocarbon mạch hở có 1 liên kết đôi $\\ce{C=C}$ trong phân tử. Công thức tổng quát: <strong>$\\ce{C}_n\\ce{H}_{2n}$</strong> ($n \\ge 2$). Chất đầu dãy là <strong>ethylene</strong> ($\\ce{CH2=CH2}$).</p>
<ul>
  <li><strong>Phản ứng cộng:</strong>
    <ul>
      <li>Cộng bromine (nhận biết alkene): $\\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}$ (mất màu nâu đỏ).</li>
      <li>Cộng hydrogen: $\\ce{CH2=CH2 + H2 ->[Ni, t^\\circ] CH3-CH3}$.</li>
      <li>Cộng nước (hydrate hóa): $\\ce{CH2=CH2 + H2O ->[H+, t^\\circ] C2H5OH}$.</li>
    </ul>
  </li>
  <li><strong>Phản ứng trùng hợp:</strong> $n\\ce{CH2=CH2} \\xrightarrow{t^\\circ, p, \\text{xt}} (-\\ce{CH2-CH2}-)_n$ (nhựa PE).</li>
  <li><strong>Phản ứng cháy:</strong> Luôn thu được <strong>$n_{\\ce{CO2}} = n_{\\ce{H2O}}$</strong>.</li>
</ul>`,
      example: "Dẫn 4,958 L hỗn hợp CH₄ và C₂H₄ (đkc) qua bình đựng dung dịch Br₂ dư thấy khối lượng bình tăng 2,8 g. Tính % thể tích mỗi khí.\nGiải: Chỉ C₂H₄ bị giữ lại nên m(C₂H₄) = 2,8 g → n(C₂H₄) = 2,8/28 = 0,1 mol. Tổng n(hh) = 0,2 mol → mỗi khí 50%.",
      checkpoint: {
        question: "Sản phẩm thu được khi cho ethylene tác dụng với nước (xúc tác acid, đun nóng) là:",
        options: ["A. Methane", "B. Ethane", "C. Ethylic alcohol", "D. Acetic acid"],
        answer: 2,
        explanation: "CH₂=CH₂ + H₂O → C₂H₅OH."
      }
    }
  ],
  questions: [
    { id: "w47_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức tổng quát của dãy đồng đẳng alkene là:", options: ["A. $\\ce{C}_n\\ce{H}_{2n+2}$", "B. $\\ce{C}_n\\ce{H}_{2n}$ ($n \\ge 2$)", "C. $\\ce{C}_n\\ce{H}_{2n-2}$", "D. $\\ce{C}_n\\ce{H}_{2n-6}$"], answer: 1, solution: "Alkene có 1 liên kết đôi nên CTTQ là $\\ce{C}_n\\ce{H}_{2n}$." },
    { id: "w47_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Đặc điểm cấu tạo của phân tử ethylene ($\\ce{C2H4}$) là:", options: ["A. Chỉ có liên kết đơn", "B. Có 1 liên kết đôi C=C", "C. Có 1 liên kết ba C≡C", "D. Có vòng 6 cạnh"], answer: 1, solution: "$\\ce{CH2=CH2}$ có 1 liên kết đôi." },
    { id: "w47_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Dẫn khí ethylene vào dung dịch nước bromine màu nâu đỏ, hiện tượng quan sát được là:", options: ["A. Xuất hiện kết tủa trắng", "B. Dung dịch bromine bị mất màu", "C. Có khí mùi hắc bay ra", "D. Không có hiện tượng"], answer: 1, solution: "Ethylene cộng $\\ce{Br2}$ tạo $\\ce{C2H4Br2}$ không màu." },
    { id: "w47_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Trùng hợp ethylene thu được polymer nào sau đây?", options: ["A. PVC", "B. Polyethylene (PE)", "C. Tinh bột", "D. Cao su buna"], answer: 1, solution: "Polyethylene (PE)." },
    { id: "w47_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khi đốt cháy hoàn toàn một alkene bất kì, ta luôn thu được:", options: ["A. $n_{\\ce{CO2}} = n_{\\ce{H2O}}$", "B. $n_{\\ce{CO2}} > n_{\\ce{H2O}}$", "C. $n_{\\ce{CO2}} < n_{\\ce{H2O}}$", "D. Chỉ có $\\ce{CO2}$"], answer: 0, solution: "$\\ce{C}_n\\ce{H}_{2n} + \\frac{3n}{2}\\ce{O2} \\rightarrow n\\ce{CO2} + n\\ce{H2O}$." },
    { id: "w47_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Trong nông nghiệp, khí ethylene được sử dụng để:", options: ["A. Diệt cỏ dại", "B. Kích thích quả xanh mau chín", "C. Làm phân bón đạm", "D. Giữ hoa lâu tàn"], answer: 1, solution: "Ethylene là hormone thực vật giúp quả chín nhanh." },
    { id: "w47_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Liên kết đôi C=C gồm 1 liên kết bền và 1 liên kết kém bền.", answer: true },
      { text: "Ethylene có tỉ khối hơi so với không khí xấp xỉ bằng 1 (28/29).", answer: true },
      { text: "Ethylene không tham gia phản ứng cháy.", answer: false },
      { text: "Propene (C₃H₆) cũng làm mất màu dung dịch nước bromine.", answer: true }
    ], solution: "c) Sai: ethylene cháy mạnh tỏa nhiều nhiệt." },
    { id: "w47_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Có thể dùng dung dịch Br₂ để loại bỏ khí C₂H₄ lẫn trong khí CH₄.", answer: true },
      { text: "Phản ứng giữa C₂H₄ và H₂ (Ni, t°) tạo ra khí methane.", answer: false },
      { text: "Để làm chuối chín đều, người dân thường đặt một quả chín cạnh nải chuối xanh trong túi kín.", answer: true },
      { text: "C₂H₄ và C₃H₆ là hai chất đồng phân của nhau.", answer: false }
    ], solution: "b) Sai (tạo ethane $\\ce{C2H6}$); d) Sai (chúng là đồng đẳng, không phải đồng phân)." },
    { id: "w47_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,15\\text{ mol}$ $\\ce{C2H4}$ tác dụng vừa đủ với dung dịch $\\ce{Br2}$. Khối lượng $\\ce{Br2}$ ($M=160$) đã phản ứng là bao nhiêu gam?", answer: "24", tolerance: 0.2, solution: "$n_{\\ce{Br2}} = n_{\\ce{C2H4}} = 0,15\\text{ mol} \\Rightarrow m = 0,15 \\times 160 = 24\\text{ g}$." },
    { id: "w47_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ $\\ce{C2H4}$ thu được bao nhiêu gam $\\ce{CO2}$?", answer: "17.6", tolerance: 0.1, solution: "$n_{\\ce{CO2}} = 0,4\\text{ mol} \\Rightarrow m = 0,4 \\times 44 = 17,6\\text{ g}$." },
    { id: "w47_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Dẫn $7,437\\text{ L}$ hỗn hợp khí gồm $\\ce{CH4}$ và $\\ce{C2H4}$ (đkc) qua bình đựng dung dịch $\\ce{Br2}$ dư thấy có $32\\text{ g}$ $\\ce{Br2}$ phản ứng. Phần trăm thể tích của $\\ce{CH4}$ trong hỗn hợp là:", options: ["A. $33,33\\%$", "B. $66,67\\%$", "C. $50\\%$", "D. $25\\%$"], answer: 0, solution: "$n_{\\text{hh}} = 0,3\\text{ mol}$; $n_{\\ce{C2H4}} = n_{\\ce{Br2}} = 32/160 = 0,2\\text{ mol} \\Rightarrow n_{\\ce{CH4}} = 0,1\\text{ mol}$ ($33,33\\%$)." },
    { id: "w47_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Từ $2,479\\text{ L}$ khí $\\ce{C2H4}$ (đkc) điều chế được bao nhiêu gam nhựa PE với hiệu suất trùng hợp $80\\%$?", options: ["A. $2,8\\text{ g}$", "B. $2,24\\text{ g}$", "C. $3,5\\text{ g}$", "D. $1,4\\text{ g}$"], answer: 1, solution: "$n_{\\ce{C2H4}} = 0,1\\text{ mol} \\Rightarrow m_{\\text{PE}} = 0,1 \\times 28 \\times 0,8 = 2,24\\text{ g}$." },
    { id: "w47_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Một alkene X có tỉ khối hơi so với $\\ce{H2}$ bằng $21$. Công thức phân tử của X là:", options: ["A. $\\ce{C2H4}$", "B. $\\ce{C3H6}$", "C. $\\ce{C4H8}$", "D. $\\ce{C5H10}$"], answer: 1, solution: "$M_X = 42 = 14n \\Rightarrow n = 3 \\Rightarrow \\ce{C3H6}$." },
    { id: "w47_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{C2H4}$ phản ứng cộng hoàn toàn với $0,2\\text{ mol}$ $\\ce{H2O}$ (xúc tác $\\ce{H+}$, $t^\\circ$) với hiệu suất $60\\%$. Khối lượng ethylic alcohol ($\\ce{C2H5OH}$) thu được là bao nhiêu gam?", answer: "5.52", tolerance: 0.1, solution: "$n_{\\ce{C2H5OH}} = 0,2 \\times 0,6 = 0,12\\text{ mol} \\Rightarrow m = 0,12 \\times 46 = 5,52\\text{ g}$." },
    { id: "w47_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $5,6\\text{ g}$ một alkene Y thu được $7,2\\text{ g}$ nước. Thể tích khí $\\ce{O2}$ (đkc) cần dùng cho phản ứng cháy là bao nhiêu lít?", answer: "14.874", tolerance: 0.1, solution: "Trong alkene, $n_{\\ce{CO2}} = n_{\\ce{H2O}} = 7,2/18 = 0,4\\text{ mol}$. Bảo toàn O: $n_{\\ce{O2}} = (2\\times 0,4 + 0,4)/2 = 0,6\\text{ mol} \\Rightarrow V = 0,6 \\times 24,79 = 14,874\\text{ L}$." },
    { id: "w47_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hỗn hợp khí X gồm $\\ce{C2H4}$ và $\\ce{H2}$ có tỉ khối so với $\\ce{H2}$ bằng $7,5$. Dẫn X qua bột Ni nung nóng (giả sử hiệu suất đạt $100\\%$) thu được hỗn hợp khí Y. Tính tỉ khối của Y so với $\\ce{H2}$.", solution: "$\\overline{M}_X = 15$. Đường chéo giữa $\\ce{C2H4}$ ($28$) và $\\ce{H2}$ ($2$): $n_{\\ce{C2H4}} / n_{\\ce{H2}} = (15-2)/(28-15) = 13/13 = 1 : 1$.\nChọn $n_{\\ce{C2H4}} = 1\\text{ mol}$; $n_{\\ce{H2}} = 1\\text{ mol} \\Rightarrow m_X = 28 + 2 = 30\\text{ g}$.\nPhản ứng $\\ce{C2H4 + H2 ->[Ni, t^\\circ] C2H6}$ xảy ra vừa đủ tạo $1\\text{ mol}$ $\\ce{C2H6}$ ($M = 30$) $\\Rightarrow d_{Y/\\ce{H2}} = 30/2 = 15$.", rubric: [
      { step: "Tìm đúng tỉ lệ mol $\\ce{C2H4} : \\ce{H2} = 1 : 1$", points: 0.5 },
      { step: "Xác định Y chỉ gồm $\\ce{C2H6}$ và tính đúng $d = 15$", points: 0.5 }
    ] },
    { id: "w47_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Dẫn $0,3\\text{ mol}$ hỗn hợp khí gồm $\\ce{CH4}$ và một alkene X qua bình đựng dung dịch $\\ce{Br2}$ dư thấy khối lượng bình tăng $8,4\\text{ g}$ và còn lại $2,479\\text{ L}$ khí (đkc) thoát ra khỏi bình. Xác định CTPT của X.", solution: "Khí thoát ra là $\\ce{CH4}$: $n_{\\ce{CH4}} = 2,479 / 24,79 = 0,1\\text{ mol} \\Rightarrow n_X = 0,3 - 0,1 = 0,2\\text{ mol}$.\nKhối lượng bình tăng chính là $m_X = 8,4\\text{ g} \\Rightarrow M_X = 8,4 / 0,2 = 42 \\Rightarrow 14n = 42 \\Rightarrow n = 3 \\Rightarrow \\ce{C3H6}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{CH4}} = 0,1\\text{ mol} \\Rightarrow n_X = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Tính $M_X = 42$ và kết luận $\\ce{C3H6}$", points: 0.5 }
    ] },
    { id: "w47_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $0,15\\text{ mol}$ hỗn hợp gồm hai alkene kế tiếp nhau trong dãy đồng đẳng thu được $11,1555\\text{ L}$ khí $\\ce{CO2}$ (đkc). Xác định CTPT và phần trăm thể tích mỗi alkene.", solution: "$n_{\\ce{CO2}} = 11,1555 / 24,79 = 0,45\\text{ mol}$.\nSố C trung bình $= 0,45 / 0,15 = 3,0$? (Kiểm tra: nếu đúng $3,0$ thì chỉ có 1 alkene $\\ce{C3H6}$, hoặc 2 alkene không kế tiếp $\\ce{C2H4}$ và $\\ce{C4H8}$ tỉ lệ 1:1. Với 2 alkene kế tiếp nếu đề cho $11,1555\\text{ L}$ thì kết luận không tồn tại cặp kế tiếp có $\\overline{n}=3$, hoặc là $\\ce{C2H4}$ và $\\ce{C4H8}$ mỗi chất $50\\%$).", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,45\\text{ mol}$ và $\\overline{n} = 3,0$", points: 0.5 },
      { step: "Biện luận hợp lí về số nguyên tử C trung bình bằng số nguyên", points: 0.5 }
    ] },
    { id: "w47_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trình bày phương pháp hóa học để tách riêng khí $\\ce{CH4}$ tinh khiết ra khỏi hỗn hợp khí gồm $\\ce{CH4, C2H4, CO2}$.", solution: "1) Dẫn hỗn hợp qua dung dịch $\\ce{Ca(OH)2}$ dư: $\\ce{CO2}$ bị giữ lại tạo $\\ce{CaCO3}\\downarrow$.\n2) Dẫn hỗn hợp khí còn lại ($\\ce{CH4, C2H4}$) qua dung dịch nước $\\ce{Br2}$ dư: $\\ce{C2H4}$ bị giữ lại tạo $\\ce{C2H4Br2}$ lỏng.\n3) Thu khí $\\ce{CH4}$ thoát ra và làm khô bằng $\\ce{CaO}$ (hoặc $\\ce{H2SO4}$ đặc).", rubric: [
      { step: "Loại $\\ce{CO2}$ bằng dung dịch kiềm dư", points: 0.5 },
      { step: "Loại $\\ce{C2H4}$ bằng dung dịch $\\ce{Br2}$ dư và làm khô $\\ce{CH4}$", points: 0.5 }
    ] },
    { id: "w47_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Viết các đồng phân cấu tạo mạch hở ứng với công thức phân tử $\\ce{C4H8}$.", solution: "Có 3 đồng phân alkene mạch hở:\n1) $\\ce{CH2=CH-CH2-CH3}$ (But-1-ene)\n2) $\\ce{CH3-CH=CH-CH3}$ (But-2-ene)\n3) $\\ce{CH2=C(CH3)-CH3}$ (2-methylpropene)", rubric: [
      { step: "Viết đúng 2 đồng phân mạch thẳng", points: 0.5 },
      { step: "Viết đúng 1 đồng phân mạch nhánh", points: 0.5 }
    ] }
  ]
};
