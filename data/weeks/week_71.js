window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[71] = {
  week: 71,
  title: "Luyện đề Chuyên Hóa vào 10 – Đề số 5 & 6 (Phan Bội Châu / Lê Quý Đôn)",
  objectives: [
    "Luyện tập đề thi Chuyên Hóa vào 10 chuẩn Trường THPT Chuyên Phan Bội Châu (Nghệ An) và Chuyên Lê Quý Đôn (Đà Nẵng / Bà Rịa - Vũng Tàu).",
    "Rèn kỹ năng giải nhanh bài toán điện phân, nhiệt nhôm, thủy phân đa chức và bài toán đồ thị.",
    "Hoàn thiện tốc độ và độ chính xác trước kỳ thi tổng kết."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Đề luyện tập Tuần 71 và Phòng Thi HSG.",
    sessions: [
      { name: "Buổi 1: Thi thử Đề Chuyên Phan Bội Châu" },
      { name: "Buổi 2: Chữa bài toán nhiệt nhôm & đồ thị" },
      { name: "Buổi 3: Thi thử Đề Chuyên Lê Quý Đôn" }
    ]
  },
  lecture: [
    {
      title: "1. Bí kíp giải nhanh Bài toán Nhiệt nhôm & Đồ thị",
      content: `
<ul>
  <li><strong>Phản ứng nhiệt nhôm:</strong> $2\\ce{Al} + \\ce{Fe2O3} \\xrightarrow{t^\\circ} \\ce{Al2O3} + 2\\ce{Fe}$.<br>
  <em>Dấu hiệu nhận biết chất dư sau nhiệt nhôm:</em> Cho chất rắn sau phản ứng tác dụng với $\\ce{NaOH}$ dư: nếu có khí $\\ce{H2}$ thoát ra $\\Rightarrow$ <strong>$\\ce{Al}$ còn dư</strong> ($\\ce{Fe2O3}$ đã hết nếu phản ứng hoàn toàn).</li>
  <li><strong>Bài toán đồ thị $\\ce{CO2} + \\ce{Ca(OH)2}$:</strong> Quan sát đỉnh tam giác ($n_{\\text{kt max}} = n_{\\ce{Ca(OH)2}}$) và chân tam giác ($n_{\\ce{CO2 max}} = 2 n_{\\ce{Ca(OH)2}}$).</li>
</ul>`,
      example: "Thực hiện phản ứng nhiệt nhôm hỗn hợp Al và Fe₂O₃ thu được rắn X. Cho X vào NaOH dư thấy có khí H₂ thoát ra. Suy ra trong X có chứa Al dư!",
      checkpoint: {
        question: "Sau phản ứng nhiệt nhôm hoàn toàn giữa Al và Fe₂O₃, cho hỗn hợp rắn thu được tác dụng với dung dịch NaOH dư thấy có khí H₂ thoát ra. Điều này chứng tỏ:",
        options: ["A. Fe₂O₃ còn dư", "B. Al còn dư", "C. Cả hai đều hết", "D. Có FeO sinh ra"],
        answer: 1,
        explanation: "Chỉ có Al kim loại tác dụng với dung dịch NaOH sinh ra khí H₂."
      }
    }
  ],
  questions: [
    { id: "w71_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng nhiệt nhôm là phản ứng dùng kim loại $\\ce{Al}$ khử:", options: ["A. Oxide của kim loại kiềm", "B. Oxide của kim loại trung bình/yếu (như $\\ce{Fe2O3, Cr2O3}$)", "C. Dung dịch muối", "D. Nước"], answer: 1, solution: "$\\ce{Al}$ khử được các oxide kim loại đứng sau $\\ce{Al}$ ở nhiệt độ cao." },
    { id: "w71_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Chất rắn $\\ce{Al2O3}$ sinh ra trong phản ứng nhiệt nhôm tan được trong dung dịch nào sau đây?", options: ["A. Chỉ dung dịch HCl", "B. Chỉ dung dịch NaOH", "C. Cả dung dịch HCl và NaOH", "D. Nước cất"], answer: 2, solution: "$\\ce{Al2O3}$ là oxide lưỡng tính." },
    { id: "w71_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Khi điện phân dung dịch $\\ce{NaCl}$ có màng ngăn xốp thu được:", options: ["A. $\\ce{Na}$ và $\\ce{Cl2}$", "B. $\\ce{NaOH, H2}$ và $\\ce{Cl2}$", "C. Nước Javel", "D. $\\ce{Na2O}$ và $\\ce{HCl}$"], answer: 1, solution: "Có màng ngăn nên $\\ce{NaOH}$ không tiếp xúc với $\\ce{Cl2}$." },
    { id: "w71_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Hỗn hợp tecmit dùng để hàn đường ray tàu hỏa gồm bột nhôm và:", options: ["A. $\\ce{Fe2O3}$", "B. $\\ce{CuO}$", "C. $\\ce{MgO}$", "D. $\\ce{CaO}$"], answer: 0, solution: "Hỗn hợp bột $\\ce{Al}$ và $\\ce{Fe2O3}$." },
    { id: "w71_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Số đồng phân cấu tạo của ester có công thức phân tử $\\ce{C4H8O2}$ là:", options: ["A. 2", "B. 3", "C. 4", "D. 5"], answer: 2, solution: "Gồm: $\\ce{HCOOC3H7}$ (2 đồng phân), $\\ce{CH3COOC2H5}$ (1), $\\ce{C2H5COOCH3}$ (1) $\\Rightarrow 4$ đồng phân." },
    { id: "w71_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây có nhiệt độ sôi CAO NHẤT?", options: ["A. $\\ce{C2H5OH}$", "B. $\\ce{CH3COOH}$", "C. $\\ce{CH3COOC2H5}$", "D. $\\ce{C2H4}$"], answer: 1, solution: "$\\ce{CH3COOH}$ ($118^\\circ\\text{C}$) > $\\ce{C2H5OH}$ ($78,3^\\circ\\text{C}$)." },
    { id: "w71_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Trong phản ứng nhiệt nhôm, tổng khối lượng hỗn hợp rắn trước và sau phản ứng bằng nhau.", answer: true },
      { text: "Điện phân dung dịch CuSO₄ thu được kim loại Cu ở cực âm (cathode).", answer: true },
      { text: "Hợp chất C₄H₈O₂ có 4 đồng phân ester và 2 đồng phân carboxylic acid.", answer: true },
      { text: "Cho Cu vào dung dịch AgNO₃ thì khối lượng dung dịch sau phản ứng tăng lên.", answer: false }
    ], solution: "d) Sai: $1\\text{ mol}$ Cu ($64\\text{ g}$) vào dung dịch, $2\\text{ mol}$ Ag ($216\\text{ g}$) kết tủa ra $\\Rightarrow$ khối lượng dung dịch giảm." },
    { id: "w71_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Thủy phân chất béo trong môi trường kiềm luôn thu được glycerol.", answer: true },
      { text: "Đốt cháy hoàn toàn tinh bột thu được số mol CO₂ lớn hơn số mol H₂O.", answer: true },
      { text: "Có thể dùng dung dịch NaOH để phân biệt Al và Fe.", answer: true },
      { text: "Nhựa PE được điều chế từ phản ứng trùng ngưng.", answer: false }
    ], solution: "d) Sai: PE điều chế từ phản ứng trùng hợp." },
    { id: "w71_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Nung nóng hỗn hợp gồm $5,4\\text{ g}$ $\\ce{Al}$ và $16\\text{ g}$ $\\ce{Fe2O3}$ trong điều kiện không có không khí đến khi phản ứng hoàn toàn. Khối lượng $\\ce{Fe}$ thu được là bao nhiêu gam?", answer: "11.2", tolerance: 0.1, solution: "$n_{\\ce{Al}} = 0,2$; $n_{\\ce{Fe2O3}} = 0,1$ (vừa đủ) $\\Rightarrow n_{\\ce{Fe}} = 0,2\\text{ mol} = 11,2\\text{ g}$." },
    { id: "w71_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $8,8\\text{ g}$ hỗn hợp $\\ce{CH3COOC2H5}$ và $\\ce{C2H5COOCH3}$ tác dụng vừa đủ với dung dịch $\\ce{NaOH}$. Số mol $\\ce{NaOH}$ đã phản ứng là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$8,8 / 88 = 0,1\\text{ mol}$." },
    { id: "w71_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Thực hiện phản ứng nhiệt nhôm hỗn hợp gồm $0,3\\text{ mol}$ $\\ce{Al}$ và $0,1\\text{ mol}$ $\\ce{Fe2O3}$ (hiệu suất $100\\%$) thu được chất rắn X. Cho X tác dụng với dung dịch $\\ce{NaOH}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ (đkc)?", options: ["A. $3,7185\\text{ L}$", "B. $2,479\\text{ L}$", "C. $7,437\\text{ L}$", "D. $1,2395\\text{ L}$"], answer: 0, solution: "$0,1\\text{ mol}$ $\\ce{Fe2O3}$ cần $0,2\\text{ mol}$ $\\ce{Al}$, còn dư $0,1\\text{ mol}$ $\\ce{Al} \\Rightarrow n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow V = 3,7185\\text{ L}$." },
    { id: "w71_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $3,42\\text{ g}$ saccharose ($\\ce{C12H22O11}$) rồi hấp thụ toàn bộ $\\ce{CO2}$ vào nước vôi trong dư. Khối lượng kết tủa thu được là:", options: ["A. $12\\text{ g}$", "B. $6\\text{ g}$", "C. $10\\text{ g}$", "D. $24\\text{ g}$"], answer: 0, solution: "$n_{\\text{saccharose}} = 0,01\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,12\\text{ mol} \\Rightarrow m_{\\ce{CaCO3}} = 12\\text{ g}$." },
    { id: "w71_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Fe3O4}$ tác dụng hoàn toàn với dung dịch $\\ce{H2SO4}$ đặc nóng dư thu được bao nhiêu lít khí $\\ce{SO2}$ (đkc, sản phẩm khử duy nhất)?", options: ["A. $2,479\\text{ L}$", "B. $1,2395\\text{ L}$", "C. $3,7185\\text{ L}$", "D. $4,958\\text{ L}$"], answer: 1, solution: "$2\\ce{Fe3O4 + 10H2SO4 -> 3Fe2(SO4)3 + SO2 + 10H2O} \\Rightarrow n_{\\ce{SO2}} = 0,05\\text{ mol} \\Rightarrow 1,2395\\text{ L}$." },
    { id: "w71_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Hỗn hợp khí gồm $\\ce{CO}$ và $\\ce{CO2}$ có tỉ khối đối với $\\ce{H2}$ là $20$. Phần trăm thể tích của khí $\\ce{CO2}$ trong hỗn hợp là bao nhiêu %?", answer: "75", tolerance: 0.5, solution: "$\\overline{M} = 40$. Đường chéo ($28$ và $44$): $n_{\\ce{CO}} : n_{\\ce{CO2}} = (44-40) : (40-28) = 4 : 12 = 1 : 3 \\Rightarrow \\ce{CO2}$ chiếm $75\\%$." },
    { id: "w71_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,15\\text{ mol}$ hỗn hợp $\\ce{C2H4}$ và $\\ce{C2H2}$ tác dụng hết với lượng dư dung dịch $\\ce{Br2}$ thấy có $32\\text{ g}$ $\\ce{Br2}$ phản ứng. Số mol $\\ce{C2H4}$ trong hỗn hợp là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$x + y = 0,15$; $x + 2y = 0,2 \\Rightarrow y = 0,05; x = 0,1\\text{ mol}$." },
    { id: "w71_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nung $m\\text{ g}$ hỗn hợp X gồm $\\ce{Al}$ và $\\ce{Fe2O3}$ (không có không khí) đến khi phản ứng hoàn toàn thu được chất rắn Y. Chia Y thành 2 phần bằng nhau: Phần 1 tác dụng với dung dịch $\\ce{NaOH}$ dư thu được $1,2395\\text{ L}$ khí $\\ce{H2}$ (đkc); Phần 2 tác dụng với dung dịch $\\ce{HCl}$ dư thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính $m$.", solution: "Ở Phần 1: $n_{\\ce{H2}} = 0,05\\text{ mol} \\Rightarrow n_{\\ce{Al dư}} = 0,05 / 1,5 = 1/30\\text{ mol}$.\nỞ Phần 2: tổng $n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{H2 do Fe}} = 0,15 - 0,05 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Fe}} = 0,1\\text{ mol}$.\nBTNT Fe: $n_{\\ce{Fe2O3}} = 0,05\\text{ mol}$ (trong 1 phần), nên cả 2 phần là $0,1\\text{ mol}$ $\\ce{Fe2O3}$ ($16\\text{ g}$).\n$n_{\\ce{Al pư ở 1 phần}} = 0,1\\text{ mol} \\Rightarrow$ tổng $n_{\\ce{Al ở 1 phần}} = 0,1 + 1/30 = 2/15\\text{ mol} \\Rightarrow$ cả 2 phần có $4/15\\text{ mol}$ $\\ce{Al}$ ($7,2\\text{ g}$).\nVậy $m = 16 + 7,2 = 23,2\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Al dư}}$ và $n_{\\ce{Fe}}$ trong mỗi phần", points: 0.5 },
      { step: "Tính đúng $m = 23,2\\text{ g}$", points: 0.5 }
    ] },
    { id: "w71_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $10\\text{ g}$ hỗn hợp $\\ce{Fe}$ và $\\ce{Fe2O3}$ tác dụng với lượng dư dung dịch $\\ce{HCl}$ thu được $1,2395\\text{ L}$ khí $\\ce{H2}$ (đkc) và dung dịch X. Cho dung dịch $\\ce{NaOH}$ dư vào X, lọc kết tủa nung ngoài không khí đến khối lượng không đổi thu được $m\\text{ g}$ chất rắn. Tính $m$.", solution: "$n_{\\ce{Fe}} = n_{\\ce{H2}} = 0,05\\text{ mol}$ ($2,8\\text{ g}$) $\\Rightarrow m_{\\ce{Fe2O3 bđ}} = 10 - 2,8 = 7,2\\text{ g}$ ($0,045\\text{ mol}$).\nBTNT Fe: tổng $n_{\\ce{Fe}} = 0,05 + 2(0,045) = 0,14\\text{ mol} \\Rightarrow n_{\\ce{Fe2O3 cuối}} = 0,07\\text{ mol} \\Rightarrow m = 0,07 \\times 160 = 11,2\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{Fe}} = 0,05\\text{ mol}$ và $n_{\\ce{Fe2O3 bđ}} = 0,045\\text{ mol}$", points: 0.5 },
      { step: "Dùng BTNT Fe tính đúng $m = 11,2\\text{ g}$", points: 0.5 }
    ] },
    { id: "w71_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6\\text{ g}$ một hợp chất hữu cơ X (chứa C, H, O) thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $3,6\\text{ g}$ $\\ce{H2O}$. Biết X tác dụng được với $\\ce{NaHCO3}$ giải phóng khí $\\ce{CO2}$ và $M_X < 100$. Xác định CTCT của X.", solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol}$ ($2,4\\text{ g}$ C); $n_{\\ce{H2O}} = 0,2\\text{ mol}$ ($0,4\\text{ g}$ H).\n$m_{\\text{O}} = 6 - 2,8 = 3,2\\text{ g}$ ($0,2\\text{ mol}$ O) $\\Rightarrow$ CTĐGN: $\\ce{CH2O}$.\nVì X tác dụng $\\ce{NaHCO3}$ nên có nhóm $-\\ce{COOH}$ (ít nhất 2 nguyên tử O) và $M_X < 100 \\Rightarrow n = 2 \\Rightarrow \\ce{C2H4O2}$ ($\\ce{CH3COOH}$) hoặc $n = 3 \\Rightarrow \\ce{C3H6O3}$ ($M=90$, $\\ce{HO-CH2-CH2-COOH}$ hoặc $\\ce{CH3-CH(OH)-COOH}$).", rubric: [
      { step: "Tìm đúng CTĐGN $\\ce{CH2O}$", points: 0.5 },
      { step: "Biện luận có nhóm $-\\ce{COOH}$ và $M_X < 100$ ra $\\ce{C2H4O2}$ và $\\ce{C3H6O3}$", points: 0.5 }
    ] },
    { id: "w71_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hấp thụ hoàn toàn $V\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $100\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1,5\\text{ M}$ thu được $19,7\\text{ g}$ kết tủa. Tính các giá trị có thể có của $V$.", solution: "$n_{\\ce{Ba(OH)2}} = 0,15\\text{ mol}$; $n_{\\ce{BaCO3}} = 19,7/197 = 0,1\\text{ mol}$.\nTH1 ($\\ce{Ba(OH)2}$ dư): $n_{\\ce{CO2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$.\nTH2 (kết tủa tan một phần): $n_{\\ce{CO2}} = 2(0,15) - 0,1 = 0,2\\text{ mol} \\Rightarrow V = 4,958\\text{ L}$.", rubric: [
      { step: "Tính đúng TH1: $V = 2,479\\text{ L}$", points: 0.5 },
      { step: "Tính đúng TH2: $V = 4,958\\text{ L}$", points: 0.5 }
    ] },
    { id: "w71_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Không dùng thêm thuốc thử ngoài, hãy nhận biết 4 dung dịch: $\\ce{NaOH, FeCl3, HCl, NaCl}$.", solution: "1) Quan sát màu sắc: dung dịch màu vàng nâu là $\\ce{FeCl3}$.\n2) Dùng $\\ce{FeCl3}$ vừa nhận được nhỏ vào 3 dung dịch còn lại: tạo kết tủa nâu đỏ là $\\ce{NaOH}$.\n3) Lấy kết tủa $\\ce{Fe(OH)3}$ vừa thu được cho tác dụng với 2 dung dịch còn lại: làm tan kết tủa tạo dung dịch vàng nâu là $\\ce{HCl}$; không hiện tượng là $\\ce{NaCl}$.", rubric: [
      { step: "Nhận biết $\\ce{FeCl3}$ bằng màu sắc và $\\ce{NaOH}$ bằng kết tủa nâu đỏ", points: 0.5 },
      { step: "Dùng kết tủa $\\ce{Fe(OH)3}$ phân biệt $\\ce{HCl}$ và $\\ce{NaCl}$ kèm PTHH", points: 0.5 }
    ] }
  ]
};
