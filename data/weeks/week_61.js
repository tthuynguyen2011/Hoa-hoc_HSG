window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[61] = {
  week: 61,
  title: "CĐ 4: Bài toán thực tế (Phân bón NPK, Khí thải ppmv, Xử lý nước)",
  objectives: [
    "Tính toán được hàm lượng dinh dưỡng ($\\text{N}$, $\\text{P}_2\\text{O}_5$, $\\text{K}_2\\text{O}$) trong phân bón NPK và phối trộn phân bón cho cây trồng.",
    "Hiểu và quy đổi được đơn vị nồng độ khí thải $\\text{ppm}$, $\\text{ppmv}$ (phần triệu theo thể tích) và tính lượng $\\ce{CO2, SO2}$ phát thải từ đốt nhiên liệu.",
    "Giải được các bài toán thực tế về xử lý nước cứng, trung hòa đất chua bằng vôi bột, khử trùng nước bằng chlorine."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bao bì phân bón NPK thực tế, phiếu bài tập toán thực tế GDPT 2018.",
    sessions: [
      {
        name: "Buổi 1: Bài toán Phân bón hóa học & Phối trộn NPK",
        guide: "Nhấn mạnh quy ước đánh giá độ dinh dưỡng: đạm theo $\\%\\text{N}$, lân theo $\\%\\ce{P2O5}$, kali theo $\\%\\ce{K2O}$. Ví dụ NPK 20-20-15 nghĩa là $20\\%\\text{N}, 20\\%\\ce{P2O5}, 15\\%\\ce{K2O}$.",
        pitfalls: "HS hay tính độ dinh dưỡng phân lân theo $\\%\\text{P}$ thay vì $\\%\\ce{P2O5}$."
      },
      {
        name: "Buổi 2: Khí thải môi trường (ppm, ppmv) & Xử lý đất, nước",
        guide: "$1\\text{ ppmv} = 1\\text{ mL}$ khí ô nhiễm trong $1\\text{ m}^3$ ($10^6\\text{ mL}$) không khí. Quy đổi nồng độ $\\ce{SO2}$ sang mưa acid và lượng vôi $\\ce{Ca(OH)2}$ cần để xử lý.",
        pitfalls: "Nhầm lẫn giữa ppm theo khối lượng (mg/kg) và ppmv theo thể tích (mL/m³)."
      },
      {
        name: "Buổi 3: Luyện đề HSG bài toán Hóa học gắn với Thực tiễn"
      }
    ]
  },
  lecture: [
    {
      title: "1. Công thức bài toán Phân bón & Khí thải ppmv",
      content: `
<ul>
  <li><strong>Độ dinh dưỡng của phân bón:</strong>
    <ul>
      <li>Phân đạm: $\\%\\text{N}$; Phân lân: $\\%\\ce{P2O5}$; Phân kali: $\\%\\ce{K2O}$.</li>
      <li>Trên bao bì ghi <strong>NPK 16-16-8</strong> nghĩa là trong $100\\text{ kg}$ phân có $16\\text{ kg N}$, $16\\text{ kg }\\ce{P2O5}$ và $8\\text{ kg }\\ce{K2O}$.</li>
    </ul>
  </li>
  <li><strong>Đơn vị $\\text{ppmv}$ (parts per million by volume):</strong> $1\\text{ ppmv} = \\frac{1\\text{ thể tích khí độc}}{10^6\\text{ thể tích không khí}} = 1\\text{ mL}/\\text{m}^3$.</li>
  <li><strong>Xử lý đất chua / nước thải acid:</strong> Dùng vôi sống ($\\ce{CaO}$) hoặc vôi tôi ($\\ce{Ca(OH)2}$) để trung hòa acid dư.</li>
</ul>`,
      example: "Một loại phân đạm urea chứa 96% (NH₂)₂CO (M = 60). Tính độ dinh dưỡng (%N) của loại phân đạm này.\nGiải: %N = (28 / 60) × 96% = 44,8%.",
      checkpoint: {
        question: "Độ dinh dưỡng của phân kali KCl được tính theo phần trăm khối lượng của:",
        options: ["A. Nguyên tố K", "B. Oxide K₂O", "C. Muối KCl", "D. Ion Cl⁻"],
        answer: 1,
        explanation: "Độ dinh dưỡng của phân kali quy ước tính theo %K₂O tương ứng."
      }
    }
  ],
  questions: [
    { id: "w61_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Trên một bao phân bón có ghi NPK 20-20-15. Số $15$ biểu thị phần trăm khối lượng của:", options: ["A. Nguyên tố K", "B. $\\ce{K2O}$", "C. $\\ce{P2O5}$", "D. $\\ce{N}$"], answer: 1, solution: "Thứ tự NPK ứng với $\\%\\text{N} - \\%\\ce{P2O5} - \\%\\ce{K2O}$." },
    { id: "w61_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Nông dân thường bón chất nào sau đây để khử chua cho đất trồng?", options: ["A. Muối ăn NaCl", "B. Vôi bột ($\\ce{CaO}$ hoặc $\\ce{Ca(OH)2}$)", "C. Phân đạm ammonium", "D. Dầu hỏa"], answer: 1, solution: "Vôi có tính base giúp trung hòa acid trong đất chua." },
    { id: "w61_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Độ dinh dưỡng của phân đạm ammonium nitrate ($\\ce{NH4NO3}$, $M=80$) nguyên chất là:", options: ["A. $17,5\\%$", "B. $35\\%$", "C. $46,67\\%$", "D. $21,2\\%$"], answer: 1, solution: "$28/80 \\times 100\\% = 35\\%$." },
    { id: "w61_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Nồng độ khí $\\ce{CO}$ trong một nhà xưởng là $50\\text{ ppmv}$. Điều đó có nghĩa là trong $1\\text{ m}^3$ không khí của nhà xưởng có chứa bao nhiêu mL khí $\\ce{CO}$?", options: ["A. $0,5\\text{ mL}$", "B. $5\\text{ mL}$", "C. $50\\text{ mL}$", "D. $500\\text{ mL}$"], answer: 2, solution: "$1\\text{ ppmv} = 1\\text{ mL/m}^3 \\Rightarrow 50\\text{ ppmv} = 50\\text{ mL/m}^3$." },
    { id: "w61_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Để làm sạch nước đục sau lũ lụt, người dân thường dùng chất nào sau đây để làm trong nước (tạo kết tủa keo kéo chất bẩn lắng xuống)?", options: ["A. Phèn chua", "B. Giấm ăn", "C. Xăng", "D. Phân lân"], answer: 0, solution: "Phèn chua thủy phân tạo kết tủa keo $\\ce{Al(OH)3}$ kéo hạt bùn đất lắng xuống." },
    { id: "w61_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Khí thải nào sau đây là nguyên nhân chính gây ra hiện tượng mưa acid?", options: ["A. $\\ce{CH4}$", "B. $\\ce{SO2}$ và $\\ce{NO}_x$", "C. $\\ce{H2}$", "D. $\\ce{N2}$"], answer: 1, solution: "$\\ce{SO2}$ và $\\ce{NO}_x$ tạo $\\ce{H2SO4}$ và $\\ce{HNO3}$ trong nước mưa." },
    { id: "w61_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Không nên trộn phân đạm ammonium với vôi bột vì sẽ làm mất đạm dưới dạng khí NH₃.", answer: true },
      { text: "Urea (NH₂)₂CO nguyên chất có độ dinh dưỡng khoảng 46,67%.", answer: true },
      { text: "Nước cứng chứa nhiều ion Ca²⁺ và Mg²⁺ gây đóng cặn ấm đun và tốn xà phòng.", answer: true },
      { text: "Đun sôi nước có thể làm mềm mọi loại nước cứng.", answer: false }
    ], solution: "d) Sai: đun sôi chỉ khử được nước cứng tạm thời (chứa $\\ce{HCO3-}$)." },
    { id: "w61_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Trong 50 kg phân NPK 16-16-8 có chứa 8 kg nguyên tố Nitơ (N).", answer: true },
      { text: "1 ppm theo khối lượng tương đương 1 mg chất tan trong 1 kg dung dịch.", answer: true },
      { text: "Bón quá nhiều phân đạm hóa học làm đất bị chua và ô nhiễm nguồn nước ngầm.", answer: true },
      { text: "Khí CO₂ ở nồng độ 400 ppmv nghĩa là chiếm 4% thể tích không khí.", answer: false }
    ], solution: "d) Sai: $400 / 10^6 = 0,04\\%$." },
    { id: "w61_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Một bao phân bón NPK 15-15-15 nặng $50\\text{ kg}$ chứa bao nhiêu kg nguyên tố Nitrogen (N)?", answer: "7.5", tolerance: 0.1, solution: "$50 \\times 15\\% = 7,5\\text{ kg}$." },
    { id: "w61_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Một mẫu phân kali chỉ chứa $\\ce{KCl}$ ($M=74,5$) với hàm lượng $74,5\\%$ và tạp chất không chứa kali. Độ dinh dưỡng ($\\%\\ce{K2O}$, $M=94$) của mẫu phân này là bao nhiêu %?", answer: "47", tolerance: 0.2, solution: "Trong $100\\text{ g}$ phân có $74,5\\text{ g}$ $\\ce{KCl}$ ($1\\text{ mol}$ $\\ce{K}$) $\\Rightarrow n_{\\ce{K2O}} = 0,5\\text{ mol} \\Rightarrow m_{\\ce{K2O}} = 0,5 \\times 94 = 47\\text{ g}$ ($47\\%$)." },
    { id: "w61_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Để bón cho $1\\text{ ha}$ lúa cần $90\\text{ kg N}$, $60\\text{ kg }\\ce{P2O5}$ và $60\\text{ kg }\\ce{K2O}$. Nếu dùng phân NPK 20-20-15 kết hợp với phân kali chứa $60\\%$ $\\ce{K2O}$, lượng phân NPK cần dùng vừa đủ cho N và P là:", options: ["A. $300\\text{ kg}$", "B. $450\\text{ kg}$", "C. $400\\text{ kg}$", "D. $250\\text{ kg}$"], answer: 0, solution: "Cần $60\\text{ kg }\\ce{P2O5} \\Rightarrow m_{\\text{NPK}} = 60 / 0,2 = 300\\text{ kg}$ (cung cấp $60\\text{ kg N}$, $60\\text{ kg P}_2\\text{O}_5$, $45\\text{ kg K}_2\\text{O}$; phần N và K còn thiếu bổ sung bằng đạm đơn và kali đơn)." },
    { id: "w61_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Một hồ nước rộng $1000\\text{ m}^2$, sâu trung bình $2\\text{ m}$ bị nhiễm phèn có $\\text{pH} = 3$ (xem như dung dịch $\\ce{H2SO4}$ có $C_M = 5\\cdot 10^{-4}\\text{ M}$). Khối lượng vôi sống $\\ce{CaO}$ tối thiểu cần để trung hòa hết lượng acid trong hồ là:", options: ["A. $56\\text{ kg}$", "B. $28\\text{ kg}$", "C. $112\\text{ kg}$", "D. $14\\text{ kg}$"], answer: 0, solution: "$V_{\\text{nước}} = 2000\\text{ m}^3 = 2\\cdot 10^6\\text{ L}$. $n_{\\ce{H2SO4}} = 2\\cdot 10^6 \\times 5\\cdot 10^{-4} = 1000\\text{ mol} \\Rightarrow n_{\\ce{CaO}} = 1000\\text{ mol} \\Rightarrow m = 56\\text{ kg}$." },
    { id: "w61_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Theo quy chuẩn kỹ thuật quốc gia, hàm lượng arsenic tối đa cho phép trong nước sinh hoạt là $0,01\\text{ mg/L}$. Giá trị này tương đương với bao nhiêu ppm (coi $D_{\\text{nước}} = 1\\text{ g/mL}$)?", options: ["A. $0,01\\text{ ppm}$", "B. $0,1\\text{ ppm}$", "C. $1\\text{ ppm}$", "D. $10\\text{ ppm}$"], answer: 0, solution: "$1\\text{ L}$ nước nặng $1\\text{ kg}$, nên $0,01\\text{ mg/L} = 0,01\\text{ mg/kg} = 0,01\\text{ ppm}$." },
    { id: "w61_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Một nhà máy nhiệt điện đốt $100\\text{ tấn}$ than đá chứa $1,6\\%$ lưu huỳnh mỗi ngày. Khối lượng khí $\\ce{SO2}$ phát thải ra môi trường mỗi ngày là bao nhiêu tấn?", answer: "3.2", tolerance: 0.1, solution: "$m_{\\text{S}} = 1,6\\text{ tấn} \\Rightarrow n_{\\text{S}} = 0,05\\text{ Mmol} \\Rightarrow m_{\\ce{SO2}} = 3,2\\text{ tấn}$." },
    { id: "w61_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Để khử trùng $1000\\text{ m}^3$ nước sạch cần dùng nồng độ chlorine hoạt tính $2\\text{ ppm}$ ($2\\text{ g/m}^3$). Khối lượng khí $\\ce{Cl2}$ cần dùng là bao nhiêu kg?", answer: "2", tolerance: 0.1, solution: "$1000 \\times 2\\text{ g} = 2000\\text{ g} = 2\\text{ kg}$." },
    { id: "w61_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Bác nông dân cần bón cho một sào Bắc Bộ ($360\\text{ m}^2$) lượng dinh dưỡng gồm $3,6\\text{ kg N}$, $1,8\\text{ kg }\\ce{P2O5}$ và $2,7\\text{ kg }\\ce{K2O}$. Bác sử dụng đồng thời 3 loại phân: NPK 15-15-15, phân đạm urea ($46\\%$ N) và phân kali KCl ($60\\%$ $\\ce{K2O}$). Tính khối lượng mỗi loại phân cần dùng.", solution: "1) Tính lượng NPK 15-15-15 theo $\\ce{P2O5}$: $m_{\\text{NPK}} = 1,8 / 0,15 = 12\\text{ kg}$.\nTrong $12\\text{ kg}$ NPK có $1,8\\text{ kg N}$, $1,8\\text{ kg }\\ce{P2O5}$, $1,8\\text{ kg }\\ce{K2O}$.\n2) Lượng N còn thiếu $= 3,6 - 1,8 = 1,8\\text{ kg} \\Rightarrow m_{\\text{urea}} = 1,8 / 0,46 \\approx 3,91\\text{ kg}$.\n3) Lượng $\\ce{K2O}$ còn thiếu $= 2,7 - 1,8 = 0,9\\text{ kg} \\Rightarrow m_{\\text{kali}} = 0,9 / 0,6 = 1,5\\text{ kg}$.", rubric: [
      { step: "Tính đúng $m_{\\text{NPK}} = 12\\text{ kg}$ theo $\\ce{P2O5}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{urea}} \\approx 3,91\\text{ kg}$ và $m_{\\text{kali}} = 1,5\\text{ kg}$", points: 0.5 }
    ] },
    { id: "w61_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Không khí trong một phòng thí nghiệm rộng $50\\text{ m}^3$ (ở đkc) bị rò rỉ $12,395\\text{ L}$ khí $\\ce{Cl2}$. (a) Tính nồng độ khí $\\ce{Cl2}$ trong phòng theo đơn vị $\\text{ppmv}$. (b) Biết ngưỡng an toàn cho phép là $0,5\\text{ ppmv}$, không khí trong phòng có nguy hiểm không?", solution: "(a) $12,395\\text{ L} = 12\\ 395\\text{ mL}$. Nồng độ $= 12\\ 395 / 50 = 247,9\\text{ ppmv}$.\n(b) $247,9\\text{ ppmv} \\gg 0,5\\text{ ppmv}$ (gấp gần 500 lần ngưỡng cho phép) $\\Rightarrow$ cực kì nguy hiểm, phải sơ tán và thông gió ngay.", rubric: [
      { step: "Tính đúng nồng độ $= 247,9\\text{ ppmv}$", points: 0.5 },
      { step: "So sánh với ngưỡng $0,5\\text{ ppmv}$ và kết luận", points: 0.5 }
    ] },
    { id: "w61_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một loại nước thải công nghiệp chứa $\\ce{H2SO4}$ nồng độ $0,49\\%$ (khối lượng riêng $1\\text{ g/mL}$). Để xử lý $10\\text{ m}^3$ nước thải này đạt $\\text{pH} = 7$, người ta dùng sữa vôi chứa $74\\%$ $\\ce{Ca(OH)2}$. Tính khối lượng sữa vôi cần dùng.", solution: "$10\\text{ m}^3$ nước nặng $10\\ 000\\text{ kg} \\Rightarrow m_{\\ce{H2SO4}} = 10\\ 000 \\times 0,49\\% = 49\\text{ kg} = 0,5\\text{ kmol}$.\n$\\ce{H2SO4 + Ca(OH)2 -> CaSO4 + 2H2O} \\Rightarrow n_{\\ce{Ca(OH)2}} = 0,5\\text{ kmol}$ ($37\\text{ kg}$).\n$m_{\\text{sữa vôi}} = 37 / 0,74 = 50\\text{ kg}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{H2SO4}} = 0,5\\text{ kmol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{sữa vôi}} = 50\\text{ kg}$", points: 0.5 }
    ] },
    { id: "w61_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một xe máy tiêu thụ hết $2,28\\text{ kg}$ xăng (xem như hoàn toàn là octane $\\ce{C8H18}$, $M=114$). Tính thể tích khí $\\ce{CO2}$ (đkc) mà xe máy đó thải ra môi trường.", solution: "$n_{\\ce{C8H18}} = 2280 / 114 = 20\\text{ mol}$.\nBTNT C: $n_{\\ce{CO2}} = 8 \\times 20 = 160\\text{ mol}$.\n$V_{\\ce{CO2}} = 160 \\times 24,79 = 3966,4\\text{ L} \\approx 3,97\\text{ m}^3$.", rubric: [
      { step: "Tính đúng $n_{\\ce{C8H18}} = 20\\text{ mol}$ và $n_{\\ce{CO2}} = 160\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $V_{\\ce{CO2}} = 3966,4\\text{ L}$", points: 0.5 }
    ] },
    { id: "w61_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Vì sao các chuyên gia nông nghiệp khuyến cáo người nông dân không nên đốt rơm rạ trực tiếp trên đồng ruộng sau thu hoạch?", solution: "1) Đốt rơm rạ phát thải lượng lớn khí $\\ce{CO2}$, $\\ce{CO}$ độc hại, bụi mịn $\\text{PM}_{2.5}$ gây ô nhiễm không khí và khói mù.\n2) Nhiệt độ cao làm chết hệ vi sinh vật có ích trong đất, làm đất chai cứng và mất chất hữu cơ (nên ủ làm phân hữu cơ hoặc trồng nấm).", rubric: [
      { step: "Nêu tác hại đối với không khí (khí độc, bụi mịn, hiệu ứng nhà kính)", points: 0.5 },
      { step: "Nêu tác hại đối với đất trồng và hướng xử lý thay thế", points: 0.5 }
    ] }
  ]
};
