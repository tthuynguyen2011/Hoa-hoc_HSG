window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[37] = {
  week: 37,
  title: "Tính chất vật lý & Tính chất hóa học chung của Kim loại",
  objectives: [
    "Trình bày được 4 tính chất vật lý chung của kim loại (tính dẻo, dẫn điện, dẫn nhiệt, ánh kim) và giải thích được nguyên nhân do electron tự do.",
    "Nêu được các tính chất hóa học chung của kim loại: tác dụng với phi kim ($\\ce{O2}$, $\\ce{Cl2}$, $\\ce{S}$), nước, dung dịch acid ($\\ce{HCl}$, $\\ce{H2SO4}$ loãng) và dung dịch muối.",
    "Viết đúng PTHH minh họa cho $\\ce{Fe}$, $\\ce{Al}$, $\\ce{Cu}$, $\\ce{Zn}$, $\\ce{Mg}$, $\\ce{Na}$, $\\ce{Ca}$ (lưu ý hóa trị của $\\ce{Fe}$ khi tác dụng $\\ce{HCl}$ vs $\\ce{Cl2}$).",
    "Giải được các bài toán kim loại tác dụng với phi kim, nước và dung dịch acid."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mẫu dây đồng, lá nhôm, đinh sắt, mẩu $\\ce{Na}$, dung dịch $\\ce{HCl}$, $\\ce{CuSO4}$, đèn cồn.",
    sessions: [
      {
        name: "Buổi 1: Tính chất vật lý chung & Sự khác biệt",
        guide: "Liên hệ thực tế: $\\ce{Ag}$ dẫn điện tốt nhất ($\\ce{Ag > Cu > Au > Al > Fe}$), $\\ce{Au}$ dẻo nhất, $\\ce{W}$ nóng chảy cao nhất ($3410^\\circ\\text{C}$), $\\ce{Hg}$ là kim loại duy nhất ở thể lỏng ở điều kiện thường, $\\ce{Li}$ nhẹ nhất, $\\ce{Os}$ nặng nhất, $\\ce{Cr}$ cứng nhất.",
        pitfalls: "HS hay nhầm $\\ce{Cu}$ dẫn điện tốt hơn $\\ce{Ag}$, hoặc quên $\\ce{Hg}$ là kim loại lỏng."
      },
      {
        name: "Buổi 2: Tính chất hóa học chung của Kim loại",
        guide: "Nhấn mạnh quy tắc hóa trị của sắt: $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$ (hóa trị II), nhưng $2\\ce{Fe} + 3\\ce{Cl2} \\xrightarrow{t^\\circ} 2\\ce{FeCl3}$ (hóa trị III). Kim loại kiềm/kiềm thổ ($\\ce{K, Na, Ca, Ba}$) tác dụng với nước ở nhiệt độ thường tạo base tan và $\\ce{H2}$.",
        pitfalls: "HS hay viết $\\ce{Fe + HCl -> FeCl3}$ hoặc cho $\\ce{Cu}$ phản ứng với $\\ce{HCl}$ loãng."
      },
      {
        name: "Buổi 3: Luyện tập & Bài toán HSG Kim loại + Acid / Nước",
        guide: "Rèn kỹ năng tính theo số mol $e$ nhường/nhận sơ cấp, tăng giảm khối lượng khi kim loại tác dụng với dung dịch muối, và bài toán $\\ce{Fe}$ tác dụng $\\ce{O2}$ tạo $\\ce{Fe3O4}$."
      }
    ]
  },
  lecture: [
    {
      title: "1. Tính chất vật lý chung của Kim loại",
      content: `
<p>Ở điều kiện thường, hầu hết kim loại là chất rắn (trừ thủy ngân $\\ce{Hg}$ ở thể lỏng) và có <strong>4 tính chất vật lý chung</strong> do sự có mặt của các <strong>electron tự do</strong> trong mạng tinh thể kim loại:</p>
<ul>
  <li><strong>Tính dẻo:</strong> Dễ rèn, dát mỏng, kéo sợi (dẻo nhất là vàng $\\ce{Au}$, rồi đến $\\ce{Ag, Al, Cu}$).</li>
  <li><strong>Tính dẫn điện:</strong> Thứ tự dẫn điện giảm dần: $\\ce{Ag > Cu > Au > Al > Fe}$ (dây điện thường làm bằng $\\ce{Cu}$ hoặc $\\ce{Al}$ vì rẻ và nhẹ hơn $\\ce{Ag}$).</li>
  <li><strong>Tính dẫn nhiệt:</strong> Kim loại dẫn điện tốt thường dẫn nhiệt tốt.</li>
  <li><strong>Ánh kim:</strong> Phản xạ tốt ánh sáng tạo vẻ sáng lấp lánh (làm đồ trang sức, gương).</li>
</ul>`,
      example: "Tại sao dây điện cao thế thường làm bằng nhôm (Al) mà không làm bằng đồng (Cu) hay bạc (Ag)?\nGiải: Tuy Ag và Cu dẫn điện tốt hơn Al, nhưng Al nhẹ hơn nhiều (D = 2,7 g/cm³ so với Cu là 8,96 g/cm³) và giá thành rẻ hơn, giúp giảm tải trọng cho cột điện.",
      checkpoint: {
        question: "Kim loại nào dẫn điện tốt nhất trong tất cả các kim loại?",
        options: ["A. Đồng (Cu)", "B. Vàng (Au)", "C. Bạc (Ag)", "D. Nhôm (Al)"],
        answer: 2,
        explanation: "Thứ tự dẫn điện tốt nhất: Ag > Cu > Au > Al > Fe."
      }
    },
    {
      title: "2. Tính chất hóa học chung của Kim loại",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="490" height="145" viewBox="0 0 490 145" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="245" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">4 Tính chất hóa học chung của Kim loại (M)</text>
  <rect x="195" y="54" width="100" height="38" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="245" y="78" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">KIM LOẠI</text>
  <rect x="15" y="34" width="145" height="36" rx="6" fill="#fef3c7" stroke="#d97706"/>
  <text x="87" y="56" font-family="sans-serif" font-size="11.5" fill="#92400e" text-anchor="middle">+ Phi kim (O₂, Cl₂, S)</text>
  <rect x="15" y="84" width="145" height="36" rx="6" fill="#dcfce7" stroke="#16a34a"/>
  <text x="87" y="106" font-family="sans-serif" font-size="11.5" fill="#166534" text-anchor="middle">+ Nước (K, Na, Ca, Ba)</text>
  <rect x="330" y="34" width="145" height="36" rx="6" fill="#fee2e2" stroke="#dc2626"/>
  <text x="402" y="56" font-family="sans-serif" font-size="11.5" fill="#991b1b" text-anchor="middle">+ Acid (HCl, H₂SO₄ l)</text>
  <rect x="330" y="84" width="145" height="36" rx="6" fill="#f3e8ff" stroke="#7e22ce"/>
  <text x="402" y="106" font-family="sans-serif" font-size="11.5" fill="#6b21a8" text-anchor="middle">+ Dung dịch muối</text>
  <line x1="160" y1="52" x2="195" y2="68" stroke="#475569" stroke-width="1.5"/>
  <line x1="160" y1="102" x2="195" y2="78" stroke="#475569" stroke-width="1.5"/>
  <line x1="295" y1="68" x2="330" y2="52" stroke="#475569" stroke-width="1.5"/>
  <line x1="295" y1="78" x2="330" y2="102" stroke="#475569" stroke-width="1.5"/>
</svg>
</div>
<ol>
  <li><strong>Tác dụng với phi kim:</strong> Hầu hết kim loại (trừ $\\ce{Au, Pt}$) tác dụng với $\\ce{O2}$ tạo oxide (ví dụ $3\\ce{Fe} + 2\\ce{O2} \\xrightarrow{t^\\circ} \\ce{Fe3O4}$); tác dụng với $\\ce{Cl2}$ tạo muối chloride ($2\\ce{Fe} + 3\\ce{Cl2} \\xrightarrow{t^\\circ} 2\\ce{FeCl3}$); tác dụng với $\\ce{S}$ tạo muối sulfide ($\\ce{Fe} + \\ce{S} \\xrightarrow{t^\\circ} \\ce{FeS}$).</li>
  <li><strong>Tác dụng với nước:</strong> Kim loại kiềm/kiềm thổ ($\\ce{K, Na, Ca, Ba}$) phản ứng mạnh ở nhiệt độ thường tạo dung dịch kiềm và $\\ce{H2}$: $2\\ce{Na} + 2\\ce{H2O} \\rightarrow 2\\ce{NaOH} + \\ce{H2}\\uparrow$.</li>
  <li><strong>Tác dụng với dung dịch acid ($\\ce{HCl, H2SO4}$ loãng):</strong> Kim loại đứng trước H tạo muối và giải phóng khí $\\ce{H2}$: $\\ce{Fe} + 2\\ce{HCl} \\rightarrow \\ce{FeCl2} + \\ce{H2}\\uparrow$. (Lưu ý $\\ce{Cu, Ag, Au}$ không phản ứng).</li>
  <li><strong>Tác dụng với dung dịch muối:</strong> Kim loại hoạt động mạnh hơn (trừ $\\ce{K, Na, Ca, Ba}$) đẩy kim loại yếu hơn ra khỏi dung dịch muối: $\\ce{Fe} + \\ce{CuSO4} \\rightarrow \\ce{FeSO4} + \\ce{Cu}\\downarrow$.</li>
</ol>`,
      example: "Cho 5,4 g Al tác dụng hoàn toàn với dung dịch HCl dư. Tính thể tích khí H₂ thu được ở đkc.\nGiải: 2Al + 6HCl → 2AlCl₃ + 3H₂↑. n(Al) = 5,4/27 = 0,2 mol → n(H₂) = 0,3 mol → V = 0,3 × 24,79 = 7,437 L.",
      checkpoint: {
        question: "Cho Fe lần lượt tác dụng với: (1) khí Cl₂ đun nóng; (2) dung dịch HCl. Muối sắt thu được lần lượt là:",
        options: ["A. FeCl₂ và FeCl₂", "B. FeCl₃ và FeCl₃", "C. FeCl₃ và FeCl₂", "D. FeCl₂ và FeCl₃"],
        answer: 2,
        explanation: "Cl₂ oxi hóa Fe lên hóa trị III (FeCl₃), còn HCl chỉ đưa Fe lên hóa trị II (FeCl₂)."
      }
    }
  ],
  questions: [
    { id: "w37_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây tồn tại ở trạng thái lỏng ở điều kiện thường?", options: ["A. Sắt (Fe)", "B. Thủy ngân (Hg)", "C. Nhôm (Al)", "D. Chì (Pb)"], answer: 1, solution: "Hg nóng chảy ở $-38,8^\\circ\\text{C}$ nên ở thể lỏng ở điều kiện thường." },
    { id: "w37_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại có tính dẻo cao nhất (có thể dát thành lá siêu mỏng) là:", options: ["A. Vàng (Au)", "B. Đồng (Cu)", "C. Sắt (Fe)", "D. Kẽm (Zn)"], answer: 0, solution: "Au là kim loại dẻo nhất." },
    { id: "w37_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây phản ứng mãnh liệt với nước ở nhiệt độ thường?", options: ["A. Cu", "B. Fe", "C. Na", "D. Ag"], answer: 2, solution: "$2\\ce{Na} + 2\\ce{H2O} \\rightarrow 2\\ce{NaOH} + \\ce{H2}\\uparrow$." },
    { id: "w37_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây KHÔNG tác dụng với dung dịch $\\ce{HCl}$ loãng?", options: ["A. Mg", "B. Zn", "C. Fe", "D. Cu"], answer: 3, solution: "Cu đứng sau H nên không đẩy được H ra khỏi acid $\\ce{HCl}$." },
    { id: "w37_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy dây sắt trong bình đựng khí $\\ce{O2}$ dư thu được chất rắn màu nâu đen là:", options: ["A. $\\ce{FeO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Fe3O4}$", "D. $\\ce{Fe(OH)3}$"], answer: 2, solution: "$3\\ce{Fe} + 2\\ce{O2} \\xrightarrow{t^\\circ} \\ce{Fe3O4}$." },
    { id: "w37_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Nhúng một đinh sắt sạch vào dung dịch $\\ce{CuSO4}$ màu xanh lam, hiện tượng quan sát được là:", options: ["A. Không có hiện tượng", "B. Có lớp kim loại màu đỏ bám lên đinh sắt", "C. Có khí thoát ra", "D. Dung dịch chuyển màu hồng"], answer: 1, solution: "$\\ce{Fe} + \\ce{CuSO4} \\rightarrow \\ce{FeSO4} + \\ce{Cu}\\downarrow$ (đỏ)." },
    { id: "w37_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai về tính chất kim loại:", statements: [
      { text: "Các tính chất vật lý chung của kim loại do electron tự do gây ra.", answer: true },
      { text: "Kim loại dẫn điện tốt nhất là Đồng (Cu).", answer: false },
      { text: "Kim loại Fe tác dụng với S đun nóng tạo muối FeS.", answer: true },
      { text: "Kim loại Al không phản ứng với dung dịch H₂SO₄ loãng.", answer: false }
    ], solution: "b) Sai (Ag tốt nhất); d) Sai (Al phản ứng mạnh tạo Al₂(SO₄)₃ + H₂)." },
    { id: "w37_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Dây tóc bóng đèn sợi đốt thường làm bằng Tungsten (W) vì có nhiệt độ nóng chảy rất cao.", answer: true },
      { text: "Cho mẩu Ca vào nước có nhỏ phenolphthalein thì dung dịch hóa hồng.", answer: true },
      { text: "Ag tác dụng được với khí O₂ ở nhiệt độ thường.", answer: false },
      { text: "Mọi kim loại đều có màu trắng bạc.", answer: false }
    ], solution: "c) Sai (Ag không tác dụng với O₂); d) Sai (Cu màu đỏ, Au màu vàng)." },
    { id: "w37_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $6,5\\text{ g}$ $\\ce{Zn}$ ($M=65$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Số mol khí $\\ce{H2}$ thu được là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$n_{\\ce{Zn}} = 6,5/65 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol}$." },
    { id: "w37_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $4,6\\text{ g}$ $\\ce{Na}$ ($M=23$) tác dụng hoàn toàn với nước dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{Na}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w37_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $11,2\\text{ g}$ $\\ce{Fe}$ tác dụng hoàn toàn với khí $\\ce{Cl2}$ dư ở nhiệt độ cao. Khối lượng muối thu được là:", options: ["A. $25,4\\text{ g}$", "B. $32,5\\text{ g}$", "C. $16,25\\text{ g}$", "D. $12,7\\text{ g}$"], answer: 1, solution: "$n_{\\ce{Fe}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{FeCl3}} = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 162,5 = 32,5\\text{ g}$." },
    { id: "w37_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Ngâm một lá kẽm ($\\ce{Zn}=65$) trong dung dịch $\\ce{CuSO4}$ dư. Sau khi phản ứng kết thúc, khối lượng lá kẽm thay đổi như thế nào?", options: ["A. Tăng $1\\text{ g}$ cho mỗi mol Zn tan", "B. Giảm $1\\text{ g}$ cho mỗi mol Zn tan", "C. Không đổi", "D. Tăng $64\\text{ g}$"], answer: 1, solution: "Cứ $1\\text{ mol}$ $\\ce{Zn}$ ($65\\text{ g}$) tan ra thì $1\\text{ mol}$ $\\ce{Cu}$ ($64\\text{ g}$) bám vào $\\Rightarrow$ giảm $1\\text{ g}$." },
    { id: "w37_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan hoàn toàn $7,8\\text{ g}$ hỗn hợp $\\ce{Al}$ và $\\ce{Mg}$ vào dung dịch $\\ce{HCl}$ dư thu được $8,6765\\text{ L}$ $\\ce{H2}$ (đkc). Khối lượng muối chloride khan thu được là:", options: ["A. $24,85\\text{ g}$", "B. $32,65\\text{ g}$", "C. $20,5\\text{ g}$", "D. $30,2\\text{ g}$"], answer: 1, solution: "$n_{\\ce{H2}} = 0,35\\text{ mol} \\Rightarrow n_{\\ce{HCl}} = 0,7\\text{ mol}$. BTKL: $m_{\\text{muối}} = 7,8 + 0,7 \\times 35,5 = 32,65\\text{ g}$." },
    { id: "w37_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $8,4\\text{ g}$ $\\ce{Fe}$ trong bình chứa khí $\\ce{O2}$ dư thu được bao nhiêu gam $\\ce{Fe3O4}$?", answer: "11.6", tolerance: 0.1, solution: "$n_{\\ce{Fe}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{Fe3O4}} = 0,05\\text{ mol} \\Rightarrow m = 0,05 \\times 232 = 11,6\\text{ g}$." },
    { id: "w37_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $1,37\\text{ g}$ kim loại $\\ce{Ba}$ ($M=137$) vào $100\\text{ g}$ nước thu được dung dịch $\\ce{Ba(OH)2}$ và khí $\\ce{H2}$. Khối lượng dung dịch sau phản ứng là bao nhiêu gam?", answer: "101.35", tolerance: 0.05, solution: "$n_{\\ce{Ba}} = 0,01\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,01\\text{ mol}$ ($0,02\\text{ g}$). $m_{\\text{dd}} = 1,37 + 100 - 0,02 = 101,35\\text{ g}$." },
    { id: "w37_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $11\\text{ g}$ hỗn hợp gồm $\\ce{Fe}$ và $\\ce{Al}$ trong dung dịch $\\ce{HCl}$ dư thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính phần trăm khối lượng mỗi kim loại trong hỗn hợp.", solution: "$n_{\\ce{H2}} = 9,916 / 24,79 = 0,4\\text{ mol}$. Gọi $x, y$ là số mol $\\ce{Fe, Al}$: $56x + 27y = 11$ và $x + 1,5y = 0,4$. Giải hệ: $x = 0,1\\text{ mol}$ ($5,6\\text{ g} \\approx 50,91\\%$); $y = 0,2\\text{ mol}$ ($5,4\\text{ g} \\approx 49,09\\%$).", rubric: [
      { step: "Tính đúng $n_{\\ce{H2}} = 0,4\\text{ mol}$ và viết đúng 2 PTHH", points: 0.25 },
      { step: "Lập đúng hệ phương trình $56x + 27y = 11$ và $x + 1,5y = 0,4$", points: 0.25 },
      { step: "Giải đúng $x = 0,1; y = 0,2\\text{ mol}$", points: 0.25 },
      { step: "Tính đúng $\\%m_{\\ce{Fe}} = 50,91\\%$ và $\\%m_{\\ce{Al}} = 49,09\\%$", points: 0.25 }
    ] },
    { id: "w37_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nhúng một thanh $\\ce{Fe}$ nặng $50\\text{ g}$ vào $200\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $1\\text{ M}$. Sau khi phản ứng xảy ra hoàn toàn, lấy thanh $\\ce{Fe}$ ra rửa nhẹ, sấy khô cân lại thấy nặng bao nhiêu gam?", solution: "$n_{\\ce{CuSO4}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{Fe pư}} = 0,2\\text{ mol}$ ($11,2\\text{ g}$), $n_{\\ce{Cu bám}} = 0,2\\text{ mol}$ ($12,8\\text{ g}$). Khối lượng thanh tăng: $\\Delta m = 12,8 - 11,2 = 1,6\\text{ g} \\Rightarrow m_{\\text{sau}} = 50 + 1,6 = 51,6\\text{ g}$.", rubric: [
      { step: "Viết đúng PTHH và tính $n_{\\ce{CuSO4}} = 0,2\\text{ mol}$", points: 0.25 },
      { step: "Tính đúng $\\Delta m = m_{\\ce{Cu}} - m_{\\ce{Fe}} = 1,6\\text{ g}$", points: 0.5 },
      { step: "Kết luận khối lượng thanh sau phản ứng $= 51,6\\text{ g}$", points: 0.25 }
    ] },
    { id: "w37_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ kim loại R (hóa trị II không đổi) tác dụng hoàn toàn với dung dịch $\\ce{H2SO4}$ loãng dư thu được $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc). Cô cạn dung dịch sau phản ứng thu được $32,2\\text{ g}$ muối sulfate khan. Xác định kim loại R.", solution: "$n_{\\ce{H2}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{RSO4}} = 0,2\\text{ mol}$. $M_{\\ce{RSO4}} = 32,2 / 0,2 = 161 \\Rightarrow R + 96 = 161 \\Rightarrow R = 65$ ($\\ce{Zn}$).", rubric: [
      { step: "Tính $n_{\\ce{H2}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{RSO4}} = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Tính $M_{\\ce{RSO4}} = 161 \\Rightarrow R = 65$ (Kẽm, $\\ce{Zn}$)", points: 0.5 }
    ] },
    { id: "w37_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $8,5\\text{ g}$ hỗn hợp gồm hai kim loại kiềm thuộc 2 chu kì liên tiếp tác dụng hết với nước thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Xác định tên hai kim loại kiềm đó.", solution: "$n_{\\ce{H2}} = 3,7185 / 24,79 = 0,15\\text{ mol} \\Rightarrow n_{\\text{kim loại}} = 0,3\\text{ mol}$. $\\overline{M} = 8,5 / 0,3 = 28,33$. Hai kim loại kiềm liên tiếp kẹp giữa $28,33$ là $\\ce{Na}$ ($23$) và $\\ce{K}$ ($39$).", rubric: [
      { step: "Tính đúng $n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow n_{\\text{KL}} = 0,3\\text{ mol}$", points: 0.5 },
      { step: "Tính $\\overline{M} = 28,33$ và kết luận $\\ce{Na}$ ($23$), $\\ce{K}$ ($39$)", points: 0.5 }
    ] },
    { id: "w37_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Giải thích tại sao không thể dùng nước để dập tắt đám cháy của kim loại kiềm (như Natri) hoặc Magie đang cháy ở nhiệt độ cao?", solution: "Vì $\\ce{Na}$ phản ứng mãnh liệt với nước ở nhiệt độ thường ($2\\ce{Na} + 2\\ce{H2O} \\rightarrow 2\\ce{NaOH} + \\ce{H2}\\uparrow$) và $\\ce{Mg}$ phản ứng với hơi nước nóng ($\\ce{Mg} + \\ce{H2O} \\xrightarrow{t^\\circ} \\ce{MgO} + \\ce{H2}\\uparrow$), đều sinh ra khí $\\ce{H2}$ dễ cháy nổ làm đám cháy bùng phát dữ dội hơn. Phải dùng cát khô để dập.", rubric: [
      { step: "Viết đúng PTHH $\\ce{Na}$ và $\\ce{Mg}$ tác dụng với nước sinh ra khí $\\ce{H2}$", points: 0.5 },
      { step: "Giải thích $\\ce{H2}$ cháy nổ làm đám cháy lớn hơn và nêu biện pháp dùng cát khô", points: 0.5 }
    ] }
  ]
};
