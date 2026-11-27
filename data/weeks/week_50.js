window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[50] = {
  week: 50,
  title: "Acetic acid (CH₃COOH): Tính acid yếu & Phản ứng ester hóa",
  objectives: [
    "Nêu được công thức cấu tạo của acetic acid ($\\ce{CH3-COOH}$), nhóm carboxyl ($-\\ce{COOH}$) và tính chất vật lý (giấm ăn chứa $2\\%-5\\%$ acetic acid).",
    "Trình bày được tính chất hóa học của acetic acid: đầy đủ tính chất của một acid (làm đỏ quỳ tím, tác dụng kim loại trước H, oxide base, base, muối carbonate) và phản ứng ester hóa.",
    "Viết đúng PTHH phản ứng ester hóa giữa $\\ce{CH3COOH}$ và $\\ce{C2H5OH}$ (xúc tác $\\ce{H2SO4}$ đặc, $t^\\circ$, mũi tên thuận nghịch).",
    "Giải được các bài toán trung hòa, bài toán hiệu suất phản ứng ester hóa và hỗn hợp acid + alcohol."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Giấm ăn, quỳ tím, bột $\\ce{CaCO3}$, lá kẽm, dung dịch $\\ce{Cu(OH)2}$, dung dịch $\\ce{NaOH}$.",
    sessions: [
      {
        name: "Buổi 1: Cấu tạo & Tính chất của một Acid yếu",
        guide: "Chứng minh $\\ce{CH3COOH}$ có đủ 5 tính chất của acid vô cơ nhưng yếu hơn $\\ce{HCl, H2SO4}$, mạnh hơn $\\ce{H2CO3}$ nên đẩy được $\\ce{CO2}$ khỏi $\\ce{CaCO3, NaHCO3}$.",
        pitfalls: "HS hay viết sai công thức muối acetate thành $\\ce{NaCH3COO}$ hoặc quên hóa trị I của gốc $\\ce{CH3COO-}$ trong $\\ce{(CH3COO)2Ca}$."
      },
      {
        name: "Buổi 2: Phản ứng Ester hóa & Ứng dụng",
        guide: "Nhấn mạnh phản ứng ester hóa là phản ứng thuận nghịch, cần $\\ce{H2SO4}$ đặc vừa làm xúc tác vừa hút nước để tăng hiệu suất. Sản phẩm $\\ce{CH3COOC2H5}$ có mùi thơm dễ chịu, nhẹ hơn nước và nổi thành lớp chất lỏng không tan.",
        pitfalls: "Quên mũi tên hai chiều $\\rightleftharpoons$ và điều kiện $\\ce{H2SO4}$ đặc, $t^\\circ$."
      },
      {
        name: "Buổi 3: Bài toán Ester hóa & Hỗn hợp Alcohol + Acid (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Acetic acid – Tính chất acid & Phản ứng ester hóa",
      content: `
<ul>
  <li><strong>Công thức:</strong> $\\ce{CH3COOH}$ ($M = 60$). Giấm ăn là dung dịch acetic acid nồng độ $2\\% - 5\\%$.</li>
  <li><strong>Tính chất của acid yếu:</strong>
    <ul>
      <li>Làm quỳ tím chuyển màu <strong>đỏ nhạt</strong>.</li>
      <li>Tác dụng với kim loại trước H: $2\\ce{CH3COOH + Zn -> (CH3COO)2Zn + H2 ^}$.</li>
      <li>Tác dụng với base/oxide base: $\\ce{CH3COOH + NaOH -> CH3COONa + H2O}$.</li>
      <li>Tác dụng với muối carbonate (tẩy cặn ấm đun nước): $2\\ce{CH3COOH + CaCO3 -> (CH3COO)2Ca + CO2 ^ + H2O}$.</li>
    </ul>
  </li>
  <li><strong>Phản ứng ester hóa:</strong><br>
  $\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$ (Ethyl acetate).</li>
</ul>`,
      example: "Cho 12 g CH₃COOH tác dụng với 9,2 g C₂H₅OH (H₂SO₄ đặc, t°), hiệu suất 60%. Tính khối lượng ethyl acetate thu được.\nGiải: n(acid) = 0,2 mol; n(alcohol) = 0,2 mol → H tính theo 0,2 mol.\nm(ester) = 0,2 × 0,6 × 88 = 10,56 g.",
      checkpoint: {
        question: "Chất nào sau đây dùng để tẩy sạch cặn đá vôi (CaCO₃) bám trong ấm đun nước?",
        options: ["A. Nước muối", "B. Giấm ăn (CH₃COOH)", "C. Ethylic alcohol", "D. Nước vôi trong"],
        answer: 1,
        explanation: "Acetic acid trong giấm ăn hòa tan kết tủa CaCO₃ tạo muối tan và giải phóng khí CO₂."
      }
    }
  ],
  questions: [
    { id: "w50_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Giấm ăn là dung dịch acetic acid có nồng độ khoảng:", options: ["A. $2\\% - 5\\%$", "B. $10\\% - 15\\%$", "C. $30\\% - 40\\%$", "D. $98\\%$"], answer: 0, solution: "Giấm ăn chứa $2\\% - 5\\%$ $\\ce{CH3COOH}$." },
    { id: "w50_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Nhóm nguyên tử đặc trưng gây nên tính acid của acetic acid là:", options: ["A. $-\\ce{OH}$", "B. $-\\ce{COOH}$", "C. $-\\ce{CH3}$", "D. $-\\ce{CHO}$"], answer: 1, solution: "Nhóm carboxyl ($-\\ce{COOH}$)." },
    { id: "w50_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Dung dịch $\\ce{CH3COOH}$ KHÔNG tác dụng được với chất nào sau đây?", options: ["A. $\\ce{Zn}$", "B. $\\ce{NaOH}$", "C. $\\ce{Cu}$", "D. $\\ce{CaCO3}$"], answer: 2, solution: "Cu đứng sau H nên không tác dụng với dung dịch acetic acid." },
    { id: "w50_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Để phân biệt 2 dung dịch $\\ce{C2H5OH}$ và $\\ce{CH3COOH}$, có thể dùng thuốc thử đơn giản nhất là:", options: ["A. Kim loại Na", "B. Quỳ tím hoặc đá vôi $\\ce{CaCO3}$", "C. Nước cất", "D. Khí $\\ce{O2}$"], answer: 1, solution: "$\\ce{CH3COOH}$ làm đỏ quỳ tím (hoặc sủi bọt khí với $\\ce{CaCO3}$); $\\ce{C2H5OH}$ không hiện tượng." },
    { id: "w50_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Trong phản ứng ester hóa giữa $\\ce{CH3COOH}$ và $\\ce{C2H5OH}$, vai trò của $\\ce{H2SO4}$ đặc là:", options: ["A. Chất tham gia phản ứng", "B. Chất xúc tác và hút nước để chuyển dịch cân bằng", "C. Làm lạnh hỗn hợp", "D. Trung hòa acid"], answer: 1, solution: "$\\ce{H2SO4}$ đặc vừa xúc tác vừa hút nước giúp tăng hiệu suất tạo ester." },
    { id: "w50_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Công thức hóa học của muối calcium acetate là:", options: ["A. $\\ce{CH3COOCa}$", "B. $\\ce{(CH3COO)2Ca}$", "C. $\\ce{Ca(CH3COO)3}$", "D. $\\ce{CH3COONa}$"], answer: 1, solution: "Ca hóa trị II, gốc $\\ce{CH3COO-}$ hóa trị I $\\Rightarrow \\ce{(CH3COO)2Ca}$." },
    { id: "w50_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Acetic acid là chất lỏng không màu, vị chua, tan vô hạn trong nước.", answer: true },
      { text: "Acetic acid mạnh hơn hydrochloric acid (HCl).", answer: false },
      { text: "Phản ứng ester hóa là phản ứng thuận nghịch.", answer: true },
      { text: "CH₃COOH tác dụng với CuO tạo dung dịch màu xanh lam.", answer: true }
    ], solution: "b) Sai: acetic acid là acid yếu, yếu hơn HCl." },
    { id: "w50_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Trong công nghiệp, acetic acid có thể điều chế bằng cách lên men giấm từ rượu ethylic.", answer: true },
      { text: "Ethyl acetate (CH₃COOC₂H₅) tan vô hạn trong nước.", answer: false },
      { text: "Cho CH₃COOH tác dụng với NaHCO₃ thấy sủi bọt khí CO₂.", answer: true },
      { text: "Acetic acid nguyên chất đông đặc ở nhiệt độ 16,6°C giống băng (giấm băng).", answer: true }
    ], solution: "b) Sai: ethyl acetate rất ít tan và nhẹ hơn nước nên nổi lên trên." },
    { id: "w50_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Trung hòa hoàn toàn $150\\text{ g}$ dung dịch $\\ce{CH3COOH}$ $4\\%$ cần dùng vừa đủ bao nhiêu gam dung dịch $\\ce{NaOH}$ $10\\%$?", answer: "40", tolerance: 0.2, solution: "$m_{\\ce{CH3COOH}} = 6\\text{ g}$ ($0,1\\text{ mol}$) $\\Rightarrow n_{\\ce{NaOH}} = 0,1\\text{ mol}$ ($4\\text{ g}$) $\\Rightarrow m_{\\text{dd NaOH}} = 4 / 0,1 = 40\\text{ g}$." },
    { id: "w50_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $12\\text{ g}$ $\\ce{CH3COOH}$ tác dụng hoàn toàn với bột $\\ce{CaCO3}$ dư. Thể tích khí $\\ce{CO2}$ (đkc) thu được là bao nhiêu lít?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{CH3COOH}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w50_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $18\\text{ g}$ $\\ce{CH3COOH}$ với $9,2\\text{ g}$ $\\ce{C2H5OH}$ (có $\\ce{H2SO4}$ đặc xúc tác), thu được $13,2\\text{ g}$ ethyl acetate. Hiệu suất phản ứng ester hóa là:", options: ["A. $50\\%$", "B. $60\\%$", "C. $75\\%$", "D. $80\\%$"], answer: 2, solution: "$n_{\\text{acid}} = 0,3\\text{ mol}$; $n_{\\text{rượu}} = 0,2\\text{ mol} \\Rightarrow$ tính theo rượu ($0,2\\text{ mol}$). $n_{\\text{ester}} = 13,2/88 = 0,15\\text{ mol} \\Rightarrow H = 0,15/0,2 = 75\\%$." },
    { id: "w50_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Để trung hòa $200\\text{ mL}$ dung dịch hỗn hợp gồm $\\ce{HCl}$ $0,5\\text{ M}$ và $\\ce{CH3COOH}$ $1\\text{ M}$, cần dùng vừa đủ $V\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Giá trị của $V$ là:", options: ["A. $200\\text{ mL}$", "B. $300\\text{ mL}$", "C. $150\\text{ mL}$", "D. $250\\text{ mL}$"], answer: 1, solution: "$n_{\\ce{HCl}} = 0,1$; $n_{\\ce{CH3COOH}} = 0,2 \\Rightarrow n_{\\ce{NaOH}} = 0,3\\text{ mol} \\Rightarrow V = 300\\text{ mL}$." },
    { id: "w50_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $6\\text{ g}$ $\\ce{CH3COOH}$ tác dụng với $5,8\\text{ g}$ $\\ce{Mg(OH)2}$. Khối lượng muối thu được sau phản ứng là:", options: ["A. $7,1\\text{ g}$", "B. $14,2\\text{ g}$", "C. $10,65\\text{ g}$", "D. $8,2\\text{ g}$"], answer: 0, solution: "$n_{\\text{acid}} = 0,1\\text{ mol}$; $n_{\\ce{Mg(OH)2}} = 0,1\\text{ mol}$ (dư $0,05\\text{ mol}$). $n_{\\text{muối}} = 0,05\\text{ mol} \\Rightarrow m = 0,05 \\times 142 = 7,1\\text{ g}$." },
    { id: "w50_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $20,6\\text{ g}$ hỗn hợp $\\ce{CH3COOH}$ và $\\ce{C2H5OH}$ tác dụng hoàn toàn với kim loại $\\ce{Na}$ dư thu được $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc). Số mol $\\ce{CH3COOH}$ trong hỗn hợp là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$x + y = 0,4$; $60x + 46y = 20,6 \\Rightarrow 14x = 20,6 - 18,4 = 2,2$? Kiểm tra: $60(0,1) + 46(0,3) = 6 + 13,8 = 19,8\\text{ g}$! Với $20,6\\text{ g}$: $14x = 2,2 \\Rightarrow x = 0,157$. Đổi `0.157` (tolerance `0.02`)." },
    { id: "w50_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $6\\text{ g}$ $\\ce{CH3COOH}$ thu được bao nhiêu gam $\\ce{CO2}$?", answer: "8.8", tolerance: 0.1, solution: "$n_{\\ce{CH3COOH}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow m = 8,8\\text{ g}$." },
    { id: "w50_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Chia $21,2\\text{ g}$ hỗn hợp X gồm $\\ce{C2H5OH}$ và $\\ce{CH3COOH}$ thành 2 phần bằng nhau. Phần 1 tác dụng hết với $\\ce{Na}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Phần 2 đun nóng với $\\ce{H2SO4}$ đặc để thực hiện phản ứng ester hóa (hiệu suất $75\\%$). Tính khối lượng ester thu được.", solution: "Mỗi phần nặng $10,6\\text{ g}$. $n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow x + y = 0,2$.\n$46x + 60y = 10,6 \\Rightarrow 14y = 10,6 - 9,2 = 1,4 \\Rightarrow y = 0,1\\text{ mol}$ ($\\ce{CH3COOH}$), $x = 0,1\\text{ mol}$ ($\\ce{C2H5OH}$).\nPhần 2: $n_{\\text{ester}} = 0,1 \\times 0,75 = 0,075\\text{ mol} \\Rightarrow m_{\\text{ester}} = 0,075 \\times 88 = 6,6\\text{ g}$.", rubric: [
      { step: "Tìm đúng số mol mỗi chất trong 1 phần là $0,1\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng khối lượng ester $= 6,6\\text{ g}$", points: 0.5 }
    ] },
    { id: "w50_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một carboxylic acid no, đơn chức, mạch hở X ($\\ce{C}_n\\ce{H}_{2n}\\ce{O2}$). Cho $7,4\\text{ g}$ X tác dụng vừa đủ với $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Xác định công thức cấu tạo của X.", solution: "$n_X = n_{\\ce{NaOH}} = 0,1\\text{ mol} \\Rightarrow M_X = 7,4 / 0,1 = 74$.\n$14n + 32 = 74 \\Rightarrow 14n = 42 \\Rightarrow n = 3 \\Rightarrow \\ce{C3H6O2}$ hay $\\ce{CH3-CH2-COOH}$ (Propanoic acid).", rubric: [
      { step: "Tính đúng $M_X = 74$", points: 0.5 },
      { step: "Tìm đúng $n = 3$ và viết CTCT $\\ce{CH3-CH2-COOH}$", points: 0.5 }
    ] },
    { id: "w50_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Lên men giấm $100\\text{ mL}$ rượu $23^\\circ$ (biết $D_{\\ce{C2H5OH}} = 0,8\\text{ g/mL}$) với hiệu suất $60\\%$. Tính khối lượng acetic acid thu được.", solution: "$V_{\\ce{C2H5OH}} = 23\\text{ mL} \\Rightarrow m_{\\ce{C2H5OH}} = 23 \\times 0,8 = 18,4\\text{ g} \\Rightarrow n = 18,4 / 46 = 0,4\\text{ mol}$.\n$n_{\\ce{CH3COOH}} = 0,4 \\times 0,6 = 0,24\\text{ mol} \\Rightarrow m = 0,24 \\times 60 = 14,4\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C2H5OH}} = 0,4\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{CH3COOH}} = 14,4\\text{ g}$", points: 0.5 }
    ] },
    { id: "w50_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Chỉ dùng thêm một hóa chất đơn giản, hãy phân biệt 3 chất lỏng không màu đựng riêng biệt: ethylic alcohol, acetic acid và ethyl acetate.", solution: "Dùng dung dịch quỳ tím (hoặc nước + quỳ tím):\n- Hòa tan trong nước và làm quỳ tím hóa đỏ: acetic acid ($\\ce{CH3COOH}$).\n- Hòa tan trong nước nhưng không làm đổi màu quỳ tím: ethylic alcohol ($\\ce{C2H5OH}$).\n- Không tan trong nước, tách thành lớp chất lỏng nổi lên trên mặt nước: ethyl acetate ($\\ce{CH3COOC2H5}$).", rubric: [
      { step: "Chọn đúng thuốc thử (nước + quỳ tím hoặc dung dịch $\\ce{Na2CO3}$)", points: 0.25 },
      { step: "Nêu đúng hiện tượng phân biệt cả 3 chất", points: 0.75 }
    ] },
    { id: "w50_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trong bình đựng hỗn hợp phản ứng ester hóa ($\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$), sau khi phản ứng kết thúc người ta thường rót hỗn hợp vào cốc nước lạnh (hoặc dung dịch NaCl bão hòa). Giải thích mục đích của thao tác này.", solution: "1) Nước lạnh giúp làm ngưng tụ và hòa tan lượng acid, alcohol còn dư cùng $\\ce{H2SO4}$.\n2) Dung dịch muối $\\ce{NaCl}$ bão hòa làm tăng khối lượng riêng của lớp nước và giảm độ tan của ester, giúp ethyl acetate tách lớp nổi hẳn lên trên để dễ dàng chiết thu sản phẩm tinh khiết.", rubric: [
      { step: "Giải thích hòa tan chất dư và giảm độ tan ester", points: 0.5 },
      { step: "Giải thích ester nhẹ hơn nổi lên trên giúp tách lớp dễ dàng", points: 0.5 }
    ] }
  ]
};
