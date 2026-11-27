window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[43] = {
  week: 43,
  title: "Khai thác tài nguyên từ vỏ Trái Đất (Đá vôi, Nhiên liệu hóa thạch)",
  objectives: [
    "Nêu được thành phần chính của vỏ Trái Đất (silicon, aluminium, iron, oxygen...) và dạng tồn tại của khoáng vật, quặng.",
    "Trình bày được ứng dụng của đá vôi ($\\ce{CaCO3}$), quá trình sản xuất vôi sống ($\\ce{CaO}$), xi măng và thủy tinh.",
    "Trình bày được nguồn gốc, thành phần và tác động môi trường của nhiên liệu hóa thạch (than mỏ, dầu mỏ, khí thiên nhiên).",
    "Giải được các bài toán nung đá vôi có hiệu suất, hấp thụ $\\ce{CO2}$ và nhiệt lượng tỏa ra khi đốt nhiên liệu."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mẫu đá vôi, vôi sống, cát thạch anh, sơ đồ chưng cất dầu mỏ.",
    sessions: [
      {
        name: "Buổi 1: Vỏ Trái Đất & Công nghiệp Silicate (Đá vôi, Xi măng, Thủy tinh)",
        guide: "Làm rõ chu trình đá vôi: $\\ce{CaCO3 ->[t^\\circ] CaO + CO2}$; $\\ce{CaO + H2O -> Ca(OH)2}$; $\\ce{Ca(OH)2 + CO2 -> CaCO3 + H2O}$ (vữa vôi đông cứng). Thành phần thủy tinh thường: $\\ce{Na2O.CaO.6SiO2}$.",
        pitfalls: "HS hay nhầm thành phần chính của đá vôi là $\\ce{CaO}$ thay vì $\\ce{CaCO3}$."
      },
      {
        name: "Buổi 2: Nhiên liệu hóa thạch & Khai thác bền vững",
        guide: "Chưng cất phân đoạn dầu mỏ (dựa vào nhiệt độ sôi khác nhau) thu được khí đốt, xăng, dầu hỏa, dầu diesel, nhựa đường. Phân biệt nhiên liệu hóa thạch (không tái tạo) và năng lượng tái tạo.",
        pitfalls: "Nhầm lẫn giữa chưng cất dầu mỏ (biến đổi vật lý) và cracking (biến đổi hóa học)."
      },
      {
        name: "Buổi 3: Bài toán Nung đá vôi & Nhiệt lượng nhiên liệu (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Đá vôi, Công nghiệp Silicate & Nhiên liệu hóa thạch",
      content: `
<ul>
  <li><strong>Vỏ Trái Đất:</strong> Chứa chủ yếu các nguyên tố O ($\\sim 47\\%$), Si ($\\sim 28\\%$), Al ($\\sim 8\\%$), Fe ($\\sim 5\\%$) ở dạng oxide và muối silicate, carbonate.</li>
  <li><strong>Đá vôi ($\\ce{CaCO3}$):</strong>
    <ul>
      <li>Nung đá vôi ở $900 - 1000^\\circ\\text{C}$ tạo vôi sống: $\\ce{CaCO3 ->[t^\\circ] CaO + CO2 ^}$.</li>
      <li>Tôi vôi (tỏa nhiệt mạnh): $\\ce{CaO + H2O -> Ca(OH)2}$.</li>
      <li>Sản xuất xi măng (nung đá vôi + đất sét + thạch cao) và thủy tinh (nung cát trắng $\\ce{SiO2}$ + đá vôi + $\\ce{Na2CO3}$).</li>
    </ul>
  </li>
  <li><strong>Nhiên liệu hóa thạch:</strong> Than mỏ, dầu mỏ, khí thiên nhiên (chủ yếu $\\ce{CH4}$). Là nguồn năng lượng <em>không tái tạo</em>, khi đốt cháy phát thải $\\ce{CO2, SO2, NO}_x$ gây hiệu ứng nhà kính và mưa acid.</li>
</ul>`,
      example: "Nung 200 g đá vôi chứa 80% CaCO₃ (tạp chất trơ không bị phân hủy) với hiệu suất 75%. Tính thể tích khí CO₂ (đkc) thu được.\nGiải: m(CaCO₃) = 160 g → n(CaCO₃) = 1,6 mol → n(CO₂) = 1,6 × 75% = 1,2 mol → V = 1,2 × 24,79 = 29,748 L.",
      checkpoint: {
        question: "Phương pháp tách các phân đoạn như xăng, dầu hỏa, dầu diesel từ dầu mỏ dựa trên tính chất nào?",
        options: ["A. Khối lượng riêng khác nhau", "B. Nhiệt độ sôi khác nhau", "C. Độ tan trong nước khác nhau", "D. Màu sắc khác nhau"],
        answer: 1,
        explanation: "Chưng cất phân đoạn dầu mỏ tách các cấu tử dựa vào sự khác nhau về nhiệt độ sôi."
      }
    }
  ],
  questions: [
    { id: "w43_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần hóa học chính của đá vôi, đá phấn, đá hoa là:", options: ["A. $\\ce{CaO}$", "B. $\\ce{CaCO3}$", "C. $\\ce{Ca(OH)2}$", "D. $\\ce{CaSO4}$"], answer: 1, solution: "Đá vôi có thành phần chính là $\\ce{CaCO3}$." },
    { id: "w43_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Hai nguyên tố chiếm tỉ lệ khối lượng lớn nhất trong vỏ Trái Đất là:", options: ["A. Iron và Aluminium", "B. Oxygen và Silicon", "C. Carbon và Hydrogen", "D. Nitrogen và Oxygen"], answer: 1, solution: "Oxygen ($\\sim 47\\%$) và Silicon ($\\sim 28\\%$)." },
    { id: "w43_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nguyên liệu chính để sản xuất thủy tinh thông thường là:", options: ["A. Cát thạch anh ($\\ce{SiO2}$), đá vôi ($\\ce{CaCO3}$), soda ($\\ce{Na2CO3}$)", "B. Đất sét và thạch cao", "C. Quặng bauxite và cryolite", "D. Than đá và lưu huỳnh"], answer: 0, solution: "Thủy tinh được nấu từ cát trắng, đá vôi và $\\ce{Na2CO3}$." },
    { id: "w43_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần chính của khí thiên nhiên và khí mỏ dầu là:", options: ["A. $\\ce{C2H4}$", "B. $\\ce{CH4}$", "C. $\\ce{CO}$", "D. $\\ce{H2}$"], answer: 1, solution: "Methane ($\\ce{CH4}$) chiếm $75-95\\%$ khí thiên nhiên." },
    { id: "w43_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Sản phẩm thu được khi tôi vôi sống ($\\ce{CaO}$) bằng nước là:", options: ["A. $\\ce{CaCO3}$", "B. $\\ce{Ca(OH)2}$", "C. $\\ce{CaCl2}$", "D. $\\ce{CaSiO3}$"], answer: 1, solution: "$\\ce{CaO + H2O -> Ca(OH)2}$." },
    { id: "w43_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Nguồn năng lượng nào sau đây KHÔNG phải nhiên liệu hóa thạch?", options: ["A. Than đá", "B. Dầu mỏ", "C. Khí thiên nhiên", "D. Năng lượng gió và mặt trời"], answer: 3, solution: "Gió và mặt trời là năng lượng tái tạo." },
    { id: "w43_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nhiên liệu hóa thạch là nguồn tài nguyên tái tạo nhanh.", answer: false },
      { text: "Đốt than đá chứa lưu huỳnh có thể sinh ra khí SO₂ gây mưa acid.", answer: true },
      { text: "Vữa vôi đông cứng dần trong không khí nhờ hấp thụ khí CO₂ tạo CaCO₃.", answer: true },
      { text: "Đất sét dùng làm đồ gốm chứa thành phần chính là silicate nhôm ngậm nước.", answer: true }
    ], solution: "a) Sai: nhiên liệu hóa thạch mất hàng triệu năm mới hình thành." },
    { id: "w43_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Quá trình tôi vôi tỏa ra nhiệt lượng rất lớn.", answer: true },
      { text: "Không thể dùng giấm ăn để tẩy cặn CaCO₃ trong ấm đun nước.", answer: false },
      { text: "Trong chưng cất dầu mỏ, xăng nhẹ hơn và sôi ở nhiệt độ thấp hơn dầu diesel.", answer: true },
      { text: "Xi măng cần được bảo quản nơi khô ráo vì dễ hút ẩm và đông cứng.", answer: true }
    ], solution: "b) Sai: giấm ăn (acetic acid) hòa tan tốt cặn $\\ce{CaCO3}$." },
    { id: "w43_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Nung hoàn toàn $50\\text{ g}$ $\\ce{CaCO3}$ ($M=100$) thu được bao nhiêu gam vôi sống $\\ce{CaO}$ ($M=56$)?", answer: "28", tolerance: 0.2, solution: "$n_{\\ce{CaCO3}} = 0,5\\text{ mol} \\Rightarrow m_{\\ce{CaO}} = 0,5 \\times 56 = 28\\text{ g}$." },
    { id: "w43_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $12\\text{ kg}$ than đá chứa $80\\%$ carbon (tạp chất không cháy). Khối lượng khí $\\ce{CO2}$ sinh ra là bao nhiêu kg?", answer: "35.2", tolerance: 0.2, solution: "$m_{\\text{C}} = 9,6\\text{ kg} \\Rightarrow n_{\\text{C}} = 0,8\\text{ kmol} \\Rightarrow m_{\\ce{CO2}} = 0,8 \\times 44 = 35,2\\text{ kg}$." },
    { id: "w43_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Nung $100\\text{ g}$ $\\ce{CaCO3}$ một thời gian thu được $78\\text{ g}$ chất rắn. Hiệu suất phản ứng phân hủy $\\ce{CaCO3}$ là:", options: ["A. $50\\%$", "B. $60\\%$", "C. $75\\%$", "D. $80\\%$"], answer: 0, solution: "$m_{\\ce{CO2}} = 100 - 78 = 22\\text{ g}$ ($0,5\\text{ mol}$). $n_{\\ce{CaCO3 pư}} = 0,5\\text{ mol}$ ($50\\text{ g}$) $\\Rightarrow H = 50\\%$." },
    { id: "w43_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Khi đun sôi nước tự nhiên (chứa $\\ce{Ca(HCO3)2}$), dưới đáy ấm xuất hiện lớp cặn trắng không tan là:", options: ["A. $\\ce{CaO}$", "B. $\\ce{CaCO3}$", "C. $\\ce{Ca(OH)2}$", "D. $\\ce{CaCl2}$"], answer: 1, solution: "$\\ce{Ca(HCO3)2 ->[t^\\circ] CaCO3 v + CO2 ^ + H2O}$." },
    { id: "w43_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Một mẫu đá vôi chứa $85\\%$ $\\ce{CaCO3}$. Để điều chế $56\\text{ kg}$ vôi sống $\\ce{CaO}$ với hiệu suất nung $80\\%$, cần dùng bao nhiêu kg đá vôi?", options: ["A. $100\\text{ kg}$", "B. $147,06\\text{ kg}$", "C. $125\\text{ kg}$", "D. $117,65\\text{ kg}$"], answer: 1, solution: "$n_{\\ce{CaO}} = 1\\text{ kmol} \\Rightarrow m_{\\ce{CaCO3 cần}} = 100 / 0,8 = 125\\text{ kg} \\Rightarrow m_{\\text{đá vôi}} = 125 / 0,85 \\approx 147,06\\text{ kg}$." },
    { id: "w43_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $1\\text{ mol}$ $\\ce{CH4}$ tỏa ra nhiệt lượng $890\\text{ kJ}$. Để đun nóng nước cần $4450\\text{ kJ}$ (hiệu suất hấp thụ nhiệt $100\\%$), cần đốt tối thiểu bao nhiêu lít khí $\\ce{CH4}$ (đkc)?", answer: "123.95", tolerance: 0.5, solution: "$n_{\\ce{CH4}} = 4450 / 890 = 5\\text{ mol} \\Rightarrow V = 5 \\times 24,79 = 123,95\\text{ L}$." },
    { id: "w43_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $20\\text{ g}$ đá vôi tác dụng với dung dịch $\\ce{HCl}$ dư thu được $3,7185\\text{ L}$ khí $\\ce{CO2}$ (đkc). Độ tinh khiết ($\\%m_{\\ce{CaCO3}}$) của đá vôi là bao nhiêu %?", answer: "75", tolerance: 0.5, solution: "$n_{\\ce{CO2}} = 0,15\\text{ mol} \\Rightarrow m_{\\ce{CaCO3}} = 15\\text{ g} \\Rightarrow 15/20 = 75\\%$." },
    { id: "w43_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nung $40\\text{ g}$ đá vôi (chứa $90\\%$ $\\ce{CaCO3}$, còn lại là tạp chất trơ) một thời gian thu được chất rắn X và khí $\\ce{CO2}$. Hấp thụ toàn bộ khí $\\ce{CO2}$ vào $250\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1\\text{ M}$ thu được $39,4\\text{ g}$ kết tủa. Tính hiệu suất phản ứng nung đá vôi (xét cả 2 trường hợp nếu có).", solution: "$n_{\\ce{CaCO3 bđ}} = (40 \\times 0,9)/100 = 0,36\\text{ mol}$. $n_{\\ce{Ba(OH)2}} = 0,25\\text{ mol}$; $n_{\\ce{BaCO3}} = 39,4/197 = 0,2\\text{ mol}$.\nTH1: $\\ce{Ba(OH)2}$ dư $\\Rightarrow n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow H = (0,2/0,36) \\times 100\\% = 55,56\\%$.\nTH2: Kết tủa tan một phần $\\Rightarrow n_{\\ce{CO2}} = 2n_{\\ce{Ba(OH)2}} - n_{\\ce{BaCO3}} = 0,5 - 0,2 = 0,3\\text{ mol} \\Rightarrow H = (0,3/0,36) \\times 100\\% = 83,33\\%$.", rubric: [
      { step: "Tính đúng $n_{\\ce{CaCO3 bđ}} = 0,36\\text{ mol}$ và $n_{\\ce{BaCO3}} = 0,2\\text{ mol}$", points: 0.25 },
      { step: "Giải đúng TH1 ($n_{\\ce{CO2}} = 0,2 \\Rightarrow H = 55,56\\%$)", points: 0.25 },
      { step: "Giải đúng TH2 ($n_{\\ce{CO2}} = 0,3 \\Rightarrow H = 83,33\\%$)", points: 0.5 }
    ] },
    { id: "w43_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một loại thủy tinh thường có thành phần phần trăm khối lượng là: $13\\%$ $\\ce{Na2O}$, $11,7\\%$ $\\ce{CaO}$ và $75,3\\%$ $\\ce{SiO2}$. Hãy xác định công thức hóa học của loại thủy tinh này dưới dạng các oxide.", solution: "Xét $100\\text{ g}$ thủy tinh: $n_{\\ce{Na2O}} = 13/62 \\approx 0,2097\\text{ mol}$; $n_{\\ce{CaO}} = 11,7/56 \\approx 0,2089\\text{ mol}$; $n_{\\ce{SiO2}} = 75,3/60 = 1,255\\text{ mol}$.\nChia cho $0,209$: $n_{\\ce{Na2O}} : n_{\\ce{CaO}} : n_{\\ce{SiO2}} = 1 : 1 : 6 \\Rightarrow \\ce{Na2O.CaO.6SiO2}$.", rubric: [
      { step: "Tính đúng số mol từng oxide trong $100\\text{ g}$", points: 0.5 },
      { step: "Lập đúng tỉ lệ $1 : 1 : 6$ và kết luận $\\ce{Na2O.CaO.6SiO2}$", points: 0.5 }
    ] },
    { id: "w43_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một gia đình dùng bếp gas đốt cháy khí propane ($\\ce{C3H8}$, tỏa $2220\\text{ kJ/mol}$) để đun sôi $2\\text{ L}$ nước từ $25^\\circ\\text{C}$ lên $100^\\circ\\text{C}$. Biết nhiệt dung riêng của nước là $4,2\\text{ kJ/(kg.K)}$ và hiệu suất truyền nhiệt của bếp là $60\\%$. Tính khối lượng gas $\\ce{C3H8}$ cần dùng.", solution: "Nhiệt lượng nước cần thu: $Q_{\\text{ích}} = m \\cdot c \\cdot \\Delta t = 2 \\times 4,2 \\times (100 - 25) = 630\\text{ kJ}$.\nNhiệt lượng bếp cần tỏa: $Q_{\\text{tỏa}} = 630 / 0,6 = 1050\\text{ kJ}$.\n$n_{\\ce{C3H8}} = 1050 / 2220 \\approx 0,473\\text{ mol} \\Rightarrow m_{\\ce{C3H8}} = 0,473 \\times 44 \\approx 20,81\\text{ g}$.", rubric: [
      { step: "Tính đúng $Q_{\\text{ích}} = 630\\text{ kJ}$ và $Q_{\\text{tỏa}} = 1050\\text{ kJ}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{C3H8}} \\approx 20,81\\text{ g}$", points: 0.5 }
    ] },
    { id: "w43_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Vì sao nước mưa chảy qua các vùng núi đá vôi lại tạo ra được các hang động kì vĩ với thạch nhũ và măng đá (như Động Phong Nha, Vịnh Hạ Long)? Viết PTHH minh họa.", solution: "Nước mưa hòa tan khí $\\ce{CO2}$ trong không khí tạo thành acid yếu làm tan dần đá vôi ($\\ce{CaCO3}$) theo phản ứng thuận:\n$\\ce{CaCO3 + CO2 + H2O -> Ca(HCO3)2}$ (xói mòn tạo hang động).\nKhi dung dịch $\\ce{Ca(HCO3)2}$ nhỏ giọt từ trần hang xuống, gặp nhiệt độ và áp suất thay đổi sẽ phân hủy ngược lại:\n$\\ce{Ca(HCO3)2 -> CaCO3 v + CO2 ^ + H2O}$ (tạo thạch nhũ trên trần và măng đá dưới nền).", rubric: [
      { step: "Viết đúng PTHH hòa tan $\\ce{CaCO3}$ tạo hang động", points: 0.5 },
      { step: "Viết đúng PTHH kết tủa lại $\\ce{CaCO3}$ tạo thạch nhũ", points: 0.5 }
    ] },
    { id: "w43_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $28,4\\text{ g}$ hỗn hợp $\\ce{CaCO3}$ và $\\ce{MgCO3}$ trong dung dịch $\\ce{HCl}$ dư thu được $7,437\\text{ L}$ khí $\\ce{CO2}$ (đkc). Tính khối lượng mỗi muối trong hỗn hợp ban đầu.", solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol}$. Gọi $x, y$ là số mol $\\ce{CaCO3}$ ($M=100$) và $\\ce{MgCO3}$ ($M=84$):\n$x + y = 0,3$; $100x + 84y = 28,4$.\nGiải hệ: $16x = 28,4 - 25,2 = 3,2 \\Rightarrow x = 0,2\\text{ mol}$ ($20\\text{ g}$ $\\ce{CaCO3}$); $y = 0,1\\text{ mol}$ ($8,4\\text{ g}$ $\\ce{MgCO3}$).", rubric: [
      { step: "Lập đúng hệ $x + y = 0,3$ và $100x + 84y = 28,4$", points: 0.5 },
      { step: "Giải đúng $m_{\\ce{CaCO3}} = 20\\text{ g}$ và $m_{\\ce{MgCO3}} = 8,4\\text{ g}$", points: 0.5 }
    ] }
  ]
};
