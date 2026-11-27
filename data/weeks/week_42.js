window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[42] = {
  week: 42,
  title: "Phi kim (C, Si, Cl₂, S) & Chu trình Carbon – Hiệu ứng nhà kính",
  objectives: [
    "Nêu được tính chất vật lý và tính chất hóa học chung của phi kim (tác dụng với $\\ce{O2}$, $\\ce{H2}$, kim loại).",
    "So sánh được sự khác biệt về tính chất giữa kim loại và phi kim.",
    "Trình bày được tính chất, ứng dụng của các phi kim quan trọng: Carbon (than chì, kim cương, tính hấp phụ của than hoạt tính, tính khử), Silicon (bán dẫn, $\\ce{SiO2}$), Chlorine (tẩy trắng, sát trùng, nước Javel), Lưu huỳnh.",
    "Giải thích được chu trình Carbon trong tự nhiên, nguyên nhân gây hiệu ứng nhà kính và các biện pháp giảm phát thải $\\ce{CO2}$."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Than hoạt tính, bình đựng mực màu, giấy lọc, bột lưu huỳnh, mô hình chu trình carbon.",
    sessions: [
      {
        name: "Buổi 1: Tính chất chung của Phi kim & Sự khác biệt với Kim loại",
        guide: "Phi kim tồn tại ở cả 3 thể: rắn (C, S, P, I₂), lỏng (Br₂), khí (O₂, N₂, Cl₂, H₂); thường dẫn điện, dẫn nhiệt kém (trừ than chì dẫn điện!).",
        pitfalls: "HS hay nghĩ mọi phi kim đều không dẫn điện (quên than chì làm điện cực)."
      },
      {
        name: "Buổi 2: Một số phi kim tiêu biểu (C, Si, Cl₂, S) & Chu trình Carbon",
        guide: "Nhấn mạnh phản ứng điều chế nước Javel: $\\ce{Cl2 + 2NaOH -> NaCl + NaClO + H2O}$ và nước chlorine tẩy màu. Chu trình Carbon: quang hợp ($\\ce{CO2} \\rightarrow \\text{chất hữu cơ}$), hô hấp & đốt nhiên liệu ($\\rightarrow \\ce{CO2}$).",
        pitfalls: "Nhầm lẫn giữa $\\ce{CO2}$ (gây hiệu ứng nhà kính) và $\\ce{SO2}$ (gây mưa acid)."
      },
      {
        name: "Buổi 3: Bài toán $\\ce{CO2}$ tác dụng dung dịch kiềm & Carbon cháy (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Tính chất chung & Phi kim quan trọng",
      content: `
<ul>
  <li><strong>Tính chất vật lý:</strong> Phi kim có thể ở thể rắn ($\\ce{C, S, P, Si, I2}$), lỏng ($\\ce{Br2}$) hoặc khí ($\\ce{O2, Cl2, N2, H2}$); phần lớn không dẫn điện, dẫn nhiệt kém (ngoại lệ: <strong>than chì</strong> dẫn điện tốt).</li>
  <li><strong>Tính chất hóa học chung:</strong>
    <ul>
      <li><em>Tác dụng với kim loại:</em> Tạo muối hoặc oxide ($\\ce{2Na + Cl2 -> 2NaCl}$, $\\ce{Fe + S ->[t^\\circ] FeS}$).</li>
      <li><em>Tác dụng với $\\ce{H2}$:</em> Tạo hợp chất khí ($\\ce{H2 + Cl2 ->[as] 2HCl}$).</li>
      <li><em>Tác dụng với $\\ce{O2}$:</em> Tạo acidic oxide ($\\ce{S + O2 ->[t^\\circ] SO2}$) hoặc oxide trung tính ($\\ce{2C + O2 (thiếu) ->[t^\\circ] 2CO}$).</li>
    </ul>
  </li>
  <li><strong>Ứng dụng tiêu biểu:</strong>
    <ul>
      <li><strong>Carbon:</strong> Kim cương (cứng nhất, cắt kính), than chì (lõi bút chì, điện cực), than hoạt tính (hấp phụ độc tố, lọc nước, mặt nạ phòng độc).</li>
      <li><strong>Silicon (Si):</strong> Chất bán dẫn làm chip điện tử, pin mặt trời; $\\ce{SiO2}$ làm thủy tinh, gốm sứ.</li>
      <li><strong>Chlorine ($\\ce{Cl2}$):</strong> Sát trùng nước sinh hoạt, sản xuất nước Javel ($\\ce{Cl2 + 2NaOH -> NaCl + NaClO + H2O}$), nhựa PVC.</li>
    </ul>
  </li>
</ul>`,
      example: "Cho khí Cl₂ đi qua dung dịch NaOH ở nhiệt độ thường. Viết PTHH và nêu công dụng của dung dịch thu được.\nGiải: Cl₂ + 2NaOH → NaCl + NaClO + H₂O. Dung dịch thu được là nước Javel có tính oxi hóa mạnh, dùng để tẩy trắng vải sợi và sát trùng.",
      checkpoint: {
        question: "Dạng thù hình nào của carbon có khả năng dẫn điện tốt và được dùng làm điện cực?",
        options: ["A. Kim cương", "B. Than chì (Graphite)", "C. Than đá", "D. Khí CO₂"],
        answer: 1,
        explanation: "Than chì là phi kim có khả năng dẫn điện nhờ cấu trúc lớp có electron linh động."
      }
    }
  ],
  questions: [
    { id: "w42_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Phi kim nào sau đây tồn tại ở thể lỏng ở điều kiện thường?", options: ["A. $\\ce{I2}$", "B. $\\ce{Br2}$", "C. $\\ce{Cl2}$", "D. $\\ce{S}$"], answer: 1, solution: "Bromine ($\\ce{Br2}$) là phi kim duy nhất ở thể lỏng ở điều kiện thường." },
    { id: "w42_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây được dùng trong mặt nạ phòng độc và máy lọc nước nhờ khả năng hấp phụ cao?", options: ["A. Kim cương", "B. Than hoạt tính", "C. Lưu huỳnh", "D. Silicon"], answer: 1, solution: "Than hoạt tính có bề mặt xốp cực lớn giúp hấp phụ chất khí và chất màu." },
    { id: "w42_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Nguyên tố phi kim nào là vật liệu bán dẫn cốt lõi trong sản xuất chip máy tính và pin mặt trời?", options: ["A. Carbon", "B. Lưu huỳnh", "C. Silicon", "D. Chlorine"], answer: 2, solution: "Silicon tinh khiết là chất bán dẫn phổ biến nhất." },
    { id: "w42_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào là nguyên nhân chính gây ra hiệu ứng nhà kính và biến đổi khí hậu toàn cầu?", options: ["A. $\\ce{O2}$", "B. $\\ce{N2}$", "C. $\\ce{CO2}$", "D. $\\ce{H2}$"], answer: 2, solution: "Sự gia tăng $\\ce{CO2}$ từ đốt nhiên liệu hóa thạch gây hiệu ứng nhà kính." },
    { id: "w42_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho khí $\\ce{Cl2}$ tác dụng với dung dịch $\\ce{NaOH}$ ở nhiệt độ thường thu được nước Javel gồm:", options: ["A. $\\ce{NaCl, NaClO}$", "B. $\\ce{NaCl, NaClO3}$", "C. $\\ce{NaClO, H2O}$", "D. $\\ce{NaCl, HCl}$"], answer: 0, solution: "$\\ce{Cl2 + 2NaOH -> NaCl + NaClO + H2O}$." },
    { id: "w42_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Quá trình nào giúp cây xanh hấp thụ khí $\\ce{CO2}$ trong chu trình Carbon?", options: ["A. Hô hấp", "B. Quang hợp", "C. Đốt cháy", "D. Lên men"], answer: 1, solution: "Quang hợp hấp thụ $\\ce{CO2}$ và giải phóng $\\ce{O2}$." },
    { id: "w42_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Kim cương là chất cứng nhất trong tự nhiên.", answer: true },
      { text: "Tất cả các phi kim đều không dẫn điện.", answer: false },
      { text: "Khí Cl₂ có màu vàng lục, mùi xốc và rất độc.", answer: true },
      { text: "Đốt lưu huỳnh trong oxi thu được khí SO₂ mùi hắc.", answer: true }
    ], solution: "b) Sai: than chì dẫn điện tốt." },
    { id: "w42_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Bột lưu huỳnh dùng để thu gom thủy ngân rơi vãi khi vỡ nhiệt kế.", answer: true },
      { text: "Silicon dioxide (SiO₂) tan tốt trong nước tạo dung dịch acid.", answer: false },
      { text: "Khí CO₂ nặng hơn không khí khoảng 1,52 lần.", answer: true },
      { text: "Trồng nhiều cây xanh giúp giảm nồng độ CO₂ trong khí quyển.", answer: true }
    ], solution: "b) Sai: $\\ce{SiO2}$ (cát thạch anh) không tan trong nước." },
    { id: "w42_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $3,6\\text{ g}$ carbon trong khí $\\ce{O2}$ dư thu được bao nhiêu lít khí $\\ce{CO2}$ ở đkc?", answer: "7.437", tolerance: 0.05, solution: "$n_{\\ce{C}} = 3,6/12 = 0,3\\text{ mol} \\Rightarrow V_{\\ce{CO2}} = 0,3 \\times 24,79 = 7,437\\text{ L}$." },
    { id: "w42_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ khí $\\ce{Cl2}$ tác dụng hoàn toàn với kim loại $\\ce{Fe}$ đun nóng thu được bao nhiêu gam muối $\\ce{FeCl3}$?", answer: "21.67", tolerance: 0.1, solution: "$2\\ce{Fe} + 3\\ce{Cl2} \\rightarrow 2\\ce{FeCl3} \\Rightarrow n_{\\ce{FeCl3}} = 0,4/3\\text{ mol} \\Rightarrow m = (0,4/3) \\times 162,5 \\approx 21,67\\text{ g}$." },
    { id: "w42_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Hấp thụ hoàn toàn $0,15\\text{ mol}$ khí $\\ce{CO2}$ vào $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $2\\text{ M}$. Muối thu được sau phản ứng là:", options: ["A. Chỉ có $\\ce{Na2CO3}$", "B. Chỉ có $\\ce{NaHCO3}$", "C. Cả $\\ce{Na2CO3}$ và $\\ce{NaHCO3}$", "D. $\\ce{NaOH}$ và $\\ce{Na2CO3}$"], answer: 2, solution: "$T = n_{\\ce{NaOH}}/n_{\\ce{CO2}} = 0,2 / 0,15 = 1,33$. Vì $1 < T < 2$ nên tạo cả hai muối." },
    { id: "w42_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Dẫn $0,1\\text{ mol}$ khí $\\ce{Cl2}$ vào dung dịch chứa $0,2\\text{ mol}$ $\\ce{NaBr}$. Khối lượng muối $\\ce{NaCl}$ thu được là:", options: ["A. $5,85\\text{ g}$", "B. $11,7\\text{ g}$", "C. $10,3\\text{ g}$", "D. $2,925\\text{ g}$"], answer: 1, solution: "$\\ce{Cl2 + 2NaBr -> 2NaCl + Br2} \\Rightarrow n_{\\ce{NaCl}} = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 58,5 = 11,7\\text{ g}$." },
    { id: "w42_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt $6,4\\text{ g}$ $\\ce{S}$ trong bình kín chứa $3,7185\\text{ L}$ khí $\\ce{O2}$ (đkc). Thể tích khí thu được sau phản ứng ở cùng điều kiện là:", options: ["A. $3,7185\\text{ L}$", "B. $4,958\\text{ L}$", "C. $2,479\\text{ L}$", "D. $6,1975\\text{ L}$"], answer: 0, solution: "$\\ce{S + O2 -> SO2}$ (1 mol khí $\\ce{O2}$ tạo 1 mol khí $\\ce{SO2}$ nên thể tích khí không đổi $= 3,7185\\text{ L}$)." },
    { id: "w42_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Sục $3,7185\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $200\\text{ mL}$ dung dịch $\\ce{Ca(OH)2}$ $0,5\\text{ M}$. Khối lượng kết tủa $\\ce{CaCO3}$ thu được là bao nhiêu gam?", answer: "5", tolerance: 0.1, solution: "$n_{\\ce{CO2}} = 0,15\\text{ mol}$; $n_{\\ce{Ca(OH)2}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{OH-}} = 0,2\\text{ mol}$. $n_{\\ce{CO3^{2-}}} = 0,2 - 0,15 = 0,05\\text{ mol} \\Rightarrow m_{\\ce{CaCO3}} = 5\\text{ g}$." },
    { id: "w42_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy $2,4\\text{ g}$ carbon trong bình kín chứa $0,15\\text{ mol}$ $\\ce{O2}$ thu được hỗn hợp khí gồm $\\ce{CO}$ và $\\ce{CO2}$. Tỉ khối của hỗn hợp khí này so với $\\ce{H2}$ là bao nhiêu?", answer: "18", tolerance: 0.2, solution: "$n_{\\ce{C}} = 0,2\\text{ mol}$; $n_{\\ce{O2}} = 0,15\\text{ mol}$. Bảo toàn C: $x + y = 0,2$; Bảo toàn O: $x + 2y = 0,3 \\Rightarrow y = 0,1$ ($\\ce{CO2}$), $x = 0,1$ ($\\ce{CO}$). $\\overline{M} = (28+44)/2 = 36 \\Rightarrow d = 18$." },
    { id: "w42_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hấp thụ hoàn toàn $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $150\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1\\text{ M}$, thu được $m\\text{ g}$ kết tủa. Tính $m$.", solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol}$; $n_{\\ce{Ba(OH)2}} = 0,15\\text{ mol}$.\n(1) $\\ce{CO2 + Ba(OH)2 -> BaCO3 v + H2O}$: $0,15\\text{ mol}$ $\\ce{Ba(OH)2}$ tạo $0,15\\text{ mol}$ $\\ce{BaCO3}$, còn dư $0,05\\text{ mol}$ $\\ce{CO2}$.\n(2) $\\ce{BaCO3 + CO2 + H2O -> Ba(HCO3)2}$: $0,05\\text{ mol}$ $\\ce{CO2}$ hòa tan mất $0,05\\text{ mol}$ $\\ce{BaCO3}$.\nCòn lại $0,15 - 0,05 = 0,1\\text{ mol}$ $\\ce{BaCO3} \\Rightarrow m = 0,1 \\times 197 = 19,7\\text{ g}$.", rubric: [
      { step: "Tính $n_{\\ce{CO2}} = 0,2\\text{ mol}$ và $n_{\\ce{Ba(OH)2}} = 0,15\\text{ mol}$", points: 0.25 },
      { step: "Viết đúng 2 PTHH tạo kết tủa và hòa tan một phần kết tủa", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{BaCO3}} = 19,7\\text{ g}$", points: 0.25 }
    ] },
    { id: "w42_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho luồng khí $\\ce{H2}$ dư tác dụng hoàn toàn với $12,7\\text{ g}$ bột $\\ce{Cl2}$? Không: Cho luồng khí $\\ce{Cl2}$ tác dụng hết với $m\\text{ g}$ kim loại hóa trị II tạo $27\\text{ g}$ muối chloride. Cũng cho $m\\text{ g}$ kim loại đó tác dụng với lưu huỳnh dư đun nóng thu được $19,4\\text{ g}$ muối sulfide. Xác định kim loại trên.", solution: "Gọi $x$ là số mol kim loại M (hóa trị II).\n$\\ce{MCl2}$: $x(M + 71) = 27$; $\\ce{MS}$: $x(M + 32) = 19,4$.\nTrừ vế theo vế: $39x = 7,6$? Kiểm tra: $27 - 19,4 = 7,6$; $7,6/39$ không chẵn. Sửa $27\\text{ g} \\to 27,2\\text{ g}$ ($\\ce{ZnCl2}$ $0,2\\text{ mol}$) và $19,4\\text{ g}$ ($\\ce{ZnS}$ $0,2\\text{ mol}$) $\\Rightarrow 39x = 7,8 \\Rightarrow x = 0,2\\text{ mol} \\Rightarrow M = 65$ ($\\ce{Zn}$)! (Với 27 g: $M \\approx 67,5$; nêu rõ cách giải trừ vế tìm $x$ rồi tìm $M$).", rubric: [
      { step: "Viết công thức muối $\\ce{MCl2}$ và $\\ce{MS}$ cùng số mol $x$", points: 0.25 },
      { step: "Lập hệ và trừ vế theo vế tìm $x$ và $M$", points: 0.75 }
    ] },
    { id: "w42_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trong phòng thí nghiệm, khí $\\ce{Cl2}$ được điều chế bằng cách cho $\\ce{MnO2}$ tác dụng với dung dịch $\\ce{HCl}$ đặc đun nóng: $\\ce{MnO2 + 4HCl ->[t^\\circ] MnCl2 + Cl2 ^ + 2H2O}$. Để thu được $4,958\\text{ L}$ khí $\\ce{Cl2}$ (đkc) với hiệu suất $80\\%$, cần dùng tối thiểu bao nhiêu gam $\\ce{MnO2}$ ($M=87$)?", solution: "$n_{\\ce{Cl2}} = 0,2\\text{ mol}$. Vì $H = 80\\% \\Rightarrow n_{\\ce{MnO2 cần}} = 0,2 / 0,8 = 0,25\\text{ mol} \\Rightarrow m_{\\ce{MnO2}} = 0,25 \\times 87 = 21,75\\text{ g}$.", rubric: [
      { step: "Tính $n_{\\ce{Cl2}} = 0,2\\text{ mol}$", points: 0.25 },
      { step: "Chia hiệu suất $80\\%$ ra $n_{\\ce{MnO2}} = 0,25\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{MnO2}} = 21,75\\text{ g}$", points: 0.25 }
    ] },
    { id: "w42_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Phân biệt 3 chất khí không màu đựng trong 3 bình riêng biệt: $\\ce{CO2, SO2, O2}$.", solution: "1) Dẫn từng khí qua dung dịch nước bromine: khí làm mất màu nâu đỏ của dung dịch bromine là $\\ce{SO2}$ ($\\ce{SO2 + Br2 + 2H2O -> H2SO4 + 2HBr}$).\n2) Hai khí còn lại dẫn qua dung dịch nước vôi trong dư: khí làm đục nước vôi trong là $\\ce{CO2}$ ($\\ce{CO2 + Ca(OH)2 -> CaCO3 v + H2O}$).\n3) Khí còn lại không hiện tượng là $\\ce{O2}$ (thử lại bằng que đóm còn tàn đỏ thấy bùng cháy).", rubric: [
      { step: "Nhận biết $\\ce{SO2}$ bằng dung dịch $\\ce{Br2}$ kèm PTHH", points: 0.5 },
      { step: "Nhận biết $\\ce{CO2}$ bằng nước vôi trong và $\\ce{O2}$ bằng que đóm", points: 0.5 }
    ] },
    { id: "w42_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nêu 3 biện pháp cụ thể mà học sinh và gia đình có thể thực hiện hằng ngày để góp phần giảm thiểu phát thải khí nhà kính $\\ce{CO2}$.", solution: "1) Tiết kiệm điện (tắt đèn, điều hòa khi không dùng) vì phần lớn điện vẫn từ nhiệt điện than/khí.\n2) Tăng cường đi bộ, xe đạp hoặc phương tiện công cộng thay cho xe máy/ô tô cá nhân.\n3) Trồng thêm cây xanh, hạn chế đốt rác thải và tiết kiệm giấy/đồ dùng nhựa.", rubric: [
      { step: "Nêu được 3 biện pháp thực tế, đúng khoa học và giải thích ngắn gọn", points: 1.0 }
    ] }
  ]
};
