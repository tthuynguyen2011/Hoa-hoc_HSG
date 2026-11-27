window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[68] = {
  week: 68,
  title: "Tổng kết kỹ năng ăn điểm tối đa theo Ba rem chấm thi HSG",
  objectives: [
    "Nắm vững tiêu chí chấm điểm của giám khảo thi HSG Hóa học 9 & Chuyên Hóa vào 10 (từng bước `0,25đ / 0,5đ`).",
    "Nhận diện và khắc phục 10 lỗi mất điểm oan phổ biến nhất (thiếu điều kiện phản ứng, quên cân bằng, nhầm đơn vị `24,79 L/mol`, không kiểm tra chất dư, quên trừ khí/kết tủa khi tính $m_{\\text{dd sau}}$).",
    "Rèn kỹ năng trình bày bài giải tự luận mạch lạc, khoa học và kiểm tra chéo kết quả."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu Checklist 10 lỗi mất điểm oan & Đề kiểm tra rà soát kỹ năng Tuần 68.",
    sessions: [
      { name: "Buổi 1: Giải mã Ba rem chấm thi HSG (Cách tính từng 0,25đ)" },
      { name: "Buổi 2: Thực hành sửa lỗi sai trên các bài giải mẫu" },
      { name: "Buổi 3: Thi thử rà soát kỹ năng trình bày sạch – chuẩn – không mất điểm oan" }
    ]
  },
  lecture: [
    {
      title: "1. Checklist 10 nguyên tắc vàng để KHÔNG BAO GIỜ mất điểm oan",
      content: `
<ol>
  <li><strong>Cân bằng &amp; điều kiện PTHH:</strong> Thiếu điều kiện ($t^\\circ$, xúc tác, ánh sáng, $\\ce{H2SO4}$ đặc) hoặc thiếu mũi tên $\\uparrow, \\downarrow$ bị trừ ngay $0,125 - 0,25\\text{đ}$ mỗi phương trình!</li>
  <li><strong>Đơn vị thể tích khí:</strong> Luôn đọc kỹ đề xem ở <strong>đkc ($25^\\circ\\text{C}, 1\\text{ bar} \\Rightarrow 24,79\\text{ L/mol}$)</strong> hay đktc cũ ($22,4$).</li>
  <li><strong>Tính $m_{\\text{dd sau phản ứng}}$:</strong> Nhớ công thức <strong>$m_{\\text{dd sau}} = \\sum m_{\\text{ban đầu}} - m_{\\text{khí}} - m_{\\text{kết tủa}}$</strong>.</li>
  <li><strong>Bài toán 2 chất tham gia:</strong> Luôn lập tỉ lệ số mol để kiểm tra chất nào dư, chất nào hết trước khi tính sản phẩm.</li>
  <li><strong>Bài toán $\\ce{CO2} + \\text{kiềm}$:</strong> Khi chưa biết kiềm dư hay không, luôn xét đủ 2 trường hợp (hoặc dùng tỉ lệ $T$).</li>
</ol>`,
      example: "Một thí sinh viết PTHH ester hóa: CH₃COOH + C₂H₅OH → CH₃COOC₂H₅ + H₂O (dùng mũi tên 1 chiều và thiếu H₂SO₄ đặc, t°). Theo ba rem HSG, thí sinh bị trừ 50% số điểm của PTHH này!",
      checkpoint: {
        question: "Khi tính khối lượng dung dịch sau phản ứng giữa BaCl₂ và Na₂SO₄, công thức đúng là:",
        options: ["A. m(dd sau) = m(dd BaCl₂) + m(dd Na₂SO₄)", "B. m(dd sau) = m(dd BaCl₂) + m(dd Na₂SO₄) - m(BaSO₄)", "C. m(dd sau) = m(dd BaCl₂) + m(dd Na₂SO₄) + m(BaSO₄)", "D. Chỉ tính bằng khối lượng NaCl"],
        answer: 1,
        explanation: "Phải trừ đi khối lượng kết tủa BaSO₄ tách ra khỏi dung dịch."
      }
    }
  ],
  questions: [
    { id: "w68_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Khi viết PTHH nhiệt phân $\\ce{CaCO3}$, điều kiện bắt buộc cần ghi trên mũi tên là:", options: ["A. Ánh sáng", "B. $t^\\circ$ (nhiệt độ cao)", "C. Men giấm", "D. Điện phân"], answer: 1, solution: "$\\ce{CaCO3 ->[t^\\circ] CaO + CO2 ^}$." },
    { id: "w68_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Trong phản ứng ester hóa giữa $\\ce{CH3COOH}$ và $\\ce{C2H5OH}$, ký hiệu mũi tên chuẩn xác là:", options: ["A. $\\rightarrow$", "B. $\\rightleftharpoons$ kèm $\\ce{H2SO4}$ đặc, $t^\\circ$", "C. $\\leftarrow$", "D. Không cần điều kiện"], answer: 1, solution: "Phản ứng thuận nghịch cần $\\ce{H2SO4}$ đặc, $t^\\circ$." },
    { id: "w68_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Cho $5,6\\text{ g}$ $\\ce{Fe}$ vào dung dịch chứa $0,15\\text{ mol}$ $\\ce{HCl}$. Để tính số mol $\\ce{H2}$, ta phải tính theo:", options: ["A. $\\ce{Fe}$", "B. $\\ce{HCl}$", "C. Tổng cả hai", "D. Không phản ứng"], answer: 1, solution: "$n_{\\ce{Fe}} = 0,1$ cần $0,2\\text{ mol}$ $\\ce{HCl}$, nên $\\ce{HCl}$ hết, tính theo $\\ce{HCl}$." },
    { id: "w68_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Khi tính khối lượng dung dịch sau khi cho kim loại $\\ce{Zn}$ tan hết vào dung dịch $\\ce{HCl}$, ta phải trừ đi khối lượng chất nào?", options: ["A. $\\ce{ZnCl2}$", "B. $\\ce{H2}$", "C. $\\ce{HCl}$", "D. $\\ce{H2O}$"], answer: 1, solution: "Khí $\\ce{H2}$ bay ra khỏi dung dịch." },
    { id: "w68_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Trong bài toán nhận biết các dung dịch, thao tác đầu tiên cần ghi trong bài làm tự luận là:", options: ["A. Đổ chung các lọ vào nhau", "B. Trích mỗi dung dịch một ít ra các ống nghiệm làm mẫu thử", "C. Đem đi cân", "D. Viết ngay PTHH"], answer: 1, solution: "Luôn phải trích mẫu thử trước khi cho thuốc thử." },
    { id: "w68_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Khi nung kết tủa $\\ce{Fe(OH)2}$ trong không khí đến khối lượng không đổi, chất rắn thu được là:", options: ["A. $\\ce{FeO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Fe3O4}$", "D. $\\ce{Fe}$"], answer: 1, solution: "Trong không khí có $\\ce{O2}$ nên tạo $\\ce{Fe2O3}$." },
    { id: "w68_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai về kỹ năng làm bài HSG:", statements: [
      { text: "Viết đúng PTHH nhưng quên cân bằng vẫn bị mất điểm theo ba rem.", answer: true },
      { text: "Nếu không nhớ rõ số liệu, nên làm tròn sớm ngay từ bước tính số mol đầu tiên (làm tròn 1 chữ số).", answer: false },
      { text: "Khi đề bài không nói kim loại hay muối dư, cần phải kiểm tra hoặc biện luận các trường hợp.", answer: true },
      { text: "Ở phản ứng nhiệt phân muối amonium hoặc KMnO₄, phải ghi đủ dấu mũi tên khí bay lên (↑).", answer: true }
    ], solution: "b) Sai: làm tròn quá sớm gây sai số dây chuyền; nên giữ 3–4 chữ số có nghĩa ở bước trung gian." },
    { id: "w68_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi cho Al vào dung dịch NaOH, sản phẩm muối viết đúng là NaAlO₂ (hoặc Na[Al(OH)₄]).", answer: true },
      { text: "Khí CO₂ tác dụng với Ca(OH)₂ luôn chỉ tạo duy nhất một muối CaCO₃.", answer: false },
      { text: "Khi tính độ cồn, ta lấy V(alcohol) chia cho V(nước) nhân 100.", answer: false },
      { text: "Cần ghi rõ đơn vị (g, mol, L, %, M) ở kết quả cuối cùng.", answer: true }
    ], solution: "b) Sai (có thể tạo $\\ce{Ca(HCO3)2}$); c) Sai (chia cho $V_{\\text{dung dịch}}$)." },
    { id: "w68_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $6,5\\text{ g}$ $\\ce{Zn}$ tác dụng hết với $100\\text{ g}$ dung dịch $\\ce{HCl}$ $14,6\\%$. Khối lượng dung dịch thu được sau phản ứng là bao nhiêu gam?", answer: "106.3", tolerance: 0.1, solution: "$n_{\\ce{Zn}} = 0,1$; $n_{\\ce{HCl}} = 0,4$ (dư) $\\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol}$ ($0,2\\text{ g}$). $m_{\\text{dd sau}} = 6,5 + 100 - 0,2 = 106,3\\text{ g}$." },
    { id: "w68_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{Fe}$ vào dung dịch chứa $0,3\\text{ mol}$ $\\ce{HCl}$. Số mol khí $\\ce{H2}$ thu được là bao nhiêu mol?", answer: "0.15", tolerance: 0.01, solution: "$\\ce{HCl}$ hết $\\Rightarrow n_{\\ce{H2}} = 0,3 / 2 = 0,15\\text{ mol}$." },
    { id: "w68_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $100\\text{ g}$ dung dịch $\\ce{BaCl2}$ $20,8\\%$ tác dụng với $100\\text{ g}$ dung dịch $\\ce{Na2SO4}$ $28,4\\%$. Khối lượng dung dịch thu được sau khi lọc bỏ kết tủa là:", options: ["A. $200\\text{ g}$", "B. $176,7\\text{ g}$", "C. $153,4\\text{ g}$", "D. $188,3\\text{ g}$"], answer: 1, solution: "$n_{\\ce{BaCl2}} = 0,1\\text{ mol} < n_{\\ce{Na2SO4}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{BaSO4}} = 23,3\\text{ g}$. $m_{\\text{dd sau}} = 100 + 100 - 23,3 = 176,7\\text{ g}$." },
    { id: "w68_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $6\\text{ g}$ $\\ce{CH3COOH}$ với $6,9\\text{ g}$ $\\ce{C2H5OH}$ thu được $6,6\\text{ g}$ ester. Hiệu suất phản ứng phải tính theo chất nào và bằng bao nhiêu?", options: ["A. Tính theo alcohol, $50\\%$", "B. Tính theo acid, $75\\%$", "C. Tính theo acid, $60\\%$", "D. Tính theo alcohol, $75\\%$"], answer: 1, solution: "$n_{\\text{acid}} = 0,1 < n_{\\text{rượu}} = 0,15 \\Rightarrow$ tính theo acid: $H = 0,075 / 0,1 = 75\\%$." },
    { id: "w68_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Fe}$ vào $200\\text{ mL}$ dung dịch $\\ce{AgNO3}$ $1\\text{ M}$. Dung dịch sau phản ứng chứa muối nào?", options: ["A. Chỉ có $\\ce{Fe(NO3)2}$", "B. Chỉ có $\\ce{Fe(NO3)3}$", "C. Cả $\\ce{Fe(NO3)2}$ và $\\ce{Fe(NO3)3}$", "D. $\\ce{AgNO3}$ dư"], answer: 0, solution: "$n_{\\ce{AgNO3}} = 0,2\\text{ mol} = 2 n_{\\ce{Fe}}$, vừa đủ tạo $0,1\\text{ mol}$ $\\ce{Fe(NO3)2}$ và $0,2\\text{ mol}$ $\\ce{Ag}$." },
    { id: "w68_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Hấp thụ $0,15\\text{ mol}$ $\\ce{CO2}$ vào $100\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $1\\text{ M}$. Khối lượng kết tủa thu được là bao nhiêu gam?", answer: "5", tolerance: 0.1, solution: "$n_{\\ce{CaCO3}} = 2(0,1) - 0,15 = 0,05\\text{ mol} \\Rightarrow m = 5\\text{ g}$." },
    { id: "w68_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Nung $10\\text{ g}$ $\\ce{CaCO3}$ với hiệu suất $60\\%$. Khối lượng chất rắn còn lại sau khi nung là bao nhiêu gam?", answer: "7.36", tolerance: 0.1, solution: "$n_{\\ce{CO2}} = 0,1 \\times 0,6 = 0,06\\text{ mol}$ ($2,64\\text{ g}$) $\\Rightarrow m_{\\text{rắn}} = 10 - 2,64 = 7,36\\text{ g}$." },
    { id: "w68_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Dưới đây là bài giải của một học sinh: 'Cho $10\\text{ g}$ $\\ce{CaCO3}$ vào $100\\text{ g}$ dung dịch $\\ce{HCl}$ $10,95\\%$. Tính $C\\%$ dung dịch sau: $n_{\\ce{CaCO3}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{CaCl2}} = 11,1\\text{ g}$; $m_{\\text{dd sau}} = 110\\text{ g} \\Rightarrow C\\% = 10,09\\%$.' Hãy chỉ ra 2 lỗi sai nghiêm trọng của học sinh này và tính lại kết quả đúng.", solution: "2 lỗi sai: (1) Không kiểm tra chất dư/hết: $n_{\\ce{HCl}} = 10,95/36,5 = 0,3\\text{ mol}$ (dư $0,1\\text{ mol}$), may mắn $\\ce{CaCO3}$ hết nhưng vẫn thiếu bước so sánh; (2) Quên trừ $m_{\\ce{CO2}}$ ($4,4\\text{ g}$) khi tính $m_{\\text{dd sau}}$!\nKết quả đúng: $m_{\\text{dd sau}} = 10 + 100 - 4,4 = 105,6\\text{ g} \\Rightarrow C\\%(\\ce{CaCl2}) = (11,1 / 105,6) \\times 100\\% \\approx 10,51\\%$; $C\\%(\\ce{HCl dư}) = (3,65 / 105,6) \\times 100\\% \\approx 3,46\\%$.", rubric: [
      { step: "Chỉ ra đúng 2 lỗi sai (thiếu so sánh dư/hết và quên trừ $m_{\\ce{CO2}}$)", points: 0.5 },
      { step: "Tính lại đúng $m_{\\text{dd sau}} = 105,6\\text{ g}$ và nồng độ $\\ce{CaCl2}, \\ce{HCl}$ dư", points: 0.5 }
    ] },
    { id: "w68_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một học sinh viết 4 PTHH sau đều bị mất điểm vì sai bản chất hoặc thiếu điều kiện. Hãy sửa lại cho đúng hoàn toàn:\n(1) $\\ce{Fe + HCl -> FeCl3 + H2}$\n(2) $\\ce{2Na + CuSO4 -> Na2SO4 + Cu}$\n(3) $\\ce{CH4 + Cl2 -> CH3Cl + HCl}$\n(4) $\\ce{CH3COOH + C2H5OH -> CH3COOC2H5 + H2O}$.", solution: "(1) $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$\n(2) $2\\ce{Na + 2H2O -> 2NaOH + H2 ^}$ và $2\\ce{NaOH + CuSO4 -> Cu(OH)2 v + Na2SO4}$\n(3) $\\ce{CH4 + Cl2 ->[\\text{ánh sáng}] CH3Cl + HCl}$\n(4) $\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$.", rubric: [
      { step: "Sửa đúng mỗi PTHH được 0,25đ", points: 1.0 }
    ] },
    { id: "w68_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Khi trình bày bài toán tìm CTPT chất hữu cơ từ dữ kiện đốt cháy, tại sao nếu không có phân tử khối $M_X$, ta không được phép kết luận ngay CTĐGN là CTPT mà phải thêm bước biện luận?", solution: "Vì nhiều chất khác nhau có cùng CTĐGN (ví dụ $\\ce{CH2O}$ và $\\ce{C2H4O2}$ và $\\ce{C6H12O6}$). Cần dùng thêm điều kiện hóa trị ($y$ chẵn, $y \\le 2x + 2$) hoặc tính chất hóa học đặc trưng để chốt hệ số $n$ duy nhất.", rubric: [
      { step: "Nêu ví dụ nhiều chất có cùng CTĐGN", points: 0.5 },
      { step: "Nêu điều kiện biện luận ($y$ chẵn, $y \\le 2x+2$, tính chất hóa học)", points: 0.5 }
    ] },
    { id: "w68_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $5,6\\text{ g}$ $\\ce{Fe}$ tác dụng với $100\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $1\\text{ M}$ thu được dung dịch X. Tính nồng độ mol của các chất tan trong X (coi thể tích dung dịch không đổi).", solution: "$n_{\\ce{Fe}} = 0,1\\text{ mol}$; $n_{\\ce{H2SO4}} = 0,1\\text{ mol}$ (vừa đủ).\n$n_{\\ce{FeSO4}} = 0,1\\text{ mol} \\Rightarrow C_M(\\ce{FeSO4}) = 0,1 / 0,1 = 1\\text{ M}$.", rubric: [
      { step: "Kiểm tra tỉ lệ mol vừa đủ ($0,1\\text{ mol}$)", points: 0.5 },
      { step: "Tính đúng $C_M(\\ce{FeSO4}) = 1\\text{ M}$", points: 0.5 }
    ] },
    { id: "w68_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Viết đầy đủ câu kết luận và PTHH cho bài toán nhận biết 3 khí: $\\ce{CH4, C2H4, CO2}$.", solution: "1) Trích mẫu thử.\n2) Dẫn từng khí qua dung dịch nước vôi trong dư: khí làm đục nước vôi trong là $\\ce{CO2}$ ($\\ce{CO2 + Ca(OH)2 -> CaCO3 v + H2O}$).\n3) Hai khí còn lại dẫn qua dung dịch nước bromine: khí làm mất màu nâu đỏ của dung dịch bromine là $\\ce{C2H4}$ ($\\ce{C2H4 + Br2 -> C2H4Br2}$); khí không hiện tượng là $\\ce{CH4}$.", rubric: [
      { step: "Trích mẫu thử và nhận biết $\\ce{CO2}$ kèm PTHH", points: 0.5 },
      { step: "Nhận biết $\\ce{C2H4}$ và $\\ce{CH4}$ kèm PTHH", points: 0.5 }
    ] }
  ]
};
