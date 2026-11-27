window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[38] = {
  week: 38,
  title: "Dãy hoạt động hóa học của kim loại & Ý nghĩa dự đoán phản ứng",
  objectives: [
    "Ghi nhớ chính xác thứ tự dãy hoạt động hóa học của các kim loại phổ biến: $\\ce{K, Na, Ca, Mg, Al, Zn, Fe, Pb, (H), Cu, Ag, Au}$.",
    "Vận dụng 4 ý nghĩa của dãy hoạt động hóa học để dự đoán khả năng phản ứng của kim loại với nước, acid và dung dịch muối.",
    "Giải thích được hiện tượng thực tế khi cho kim loại kiềm ($\\ce{Na, K}$) vào dung dịch muối ($\\ce{CuSO4}$, $\\ce{FeCl3}$).",
    "Giải được các bài toán thứ tự phản ứng khi cho 1 kim loại tác dụng với hỗn hợp muối hoặc hỗn hợp kim loại với 1 muối."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bảng dãy hoạt động hóa học, ống nghiệm, đinh sắt, dây đồng, dung dịch $\\ce{HCl}$, $\\ce{AgNO3}$, $\\ce{CuSO4}$, mẩu $\\ce{Na}$.",
    sessions: [
      {
        name: "Buổi 1: Xây dựng Dãy hoạt động hóa học bằng thực nghiệm",
        guide: "Cho HS nhớ câu thần chú: 'Khi Nào Cần May Áo Záp Sắt Nên Sang Phố Hỏi Cửa Hàng Á Phi Âu' ($\\ce{K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Hg, Ag, Pt, Au}$).",
        pitfalls: "HS hay đảo vị trí của $\\ce{Al}$ và $\\ce{Mg}$ hoặc $\\ce{Pb}$ và $\\ce{Cu}$."
      },
      {
        name: "Buổi 2: 4 Ý nghĩa cốt lõi & Trường hợp đặc biệt của Na, K",
        guide: "Nhấn mạnh: $\\ce{Na}$ cho vào dung dịch $\\ce{CuSO4}$ KHÔNG đẩy $\\ce{Cu}$ ra mà tác dụng với nước trước tạo $\\ce{NaOH} + \\ce{H2}\\uparrow$, sau đó $\\ce{NaOH}$ kết tủa $\\ce{Cu(OH)2}$ màu xanh!",
        pitfalls: "HS hay viết $\\ce{2Na + CuSO4 -> Na2SO4 + Cu}$ (Sai hoàn toàn!)."
      },
      {
        name: "Buổi 3: Thứ tự phản ứng HSG (Quy tắc Alpha sơ cấp)",
        guide: "Khi cho 1 kim loại tác dụng với hỗn hợp nhiều muối, muối của kim loại yếu nhất phản ứng trước; khi cho nhiều kim loại tác dụng với 1 muối, kim loại mạnh nhất phản ứng trước."
      }
    ]
  },
  lecture: [
    {
      title: "1. Dãy hoạt động hóa học của kim loại",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="510" height="115" viewBox="0 0 510 115" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="255" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Dãy hoạt động hóa học (Mức độ hoạt động giảm dần →)</text>
  <rect x="12" y="32" width="115" height="40" rx="6" fill="#fee2e2" stroke="#dc2626"/>
  <text x="69" y="56" font-family="monospace" font-size="13" font-weight="bold" fill="#991b1b" text-anchor="middle">K  Na  Ca</text>
  <text x="69" y="92" font-family="sans-serif" font-size="10.5" fill="#991b1b" text-anchor="middle">Tác dụng H₂O thường</text>

  <rect x="135" y="32" width="175" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/>
  <text x="222" y="56" font-family="monospace" font-size="13" font-weight="bold" fill="#92400e" text-anchor="middle">Mg  Al  Zn  Fe  Pb</text>
  <text x="222" y="92" font-family="sans-serif" font-size="10.5" fill="#92400e" text-anchor="middle">Đẩy được H khỏi acid</text>

  <rect x="318" y="32" width="38" height="40" rx="6" fill="#e2e8f0" stroke="#475569"/>
  <text x="337" y="56" font-family="monospace" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">(H)</text>

  <rect x="364" y="32" width="134" height="40" rx="6" fill="#dcfce7" stroke="#16a34a"/>
  <text x="431" y="56" font-family="monospace" font-size="13" font-weight="bold" fill="#166534" text-anchor="middle">Cu  Ag  Au</text>
  <text x="431" y="92" font-family="sans-serif" font-size="10.5" fill="#166534" text-anchor="middle">Không tác dụng acid thường</text>
</svg>
</div>
<ul>
  <li><strong>Ý nghĩa 1:</strong> Mức độ hoạt động hóa học của kim loại giảm dần từ trái sang phải.</li>
  <li><strong>Ý nghĩa 2:</strong> Kim loại đứng trước Mg ($\\ce{K, Na, Ca, Ba}$) tác dụng với nước ở nhiệt độ thường tạo kiềm và $\\ce{H2}$.</li>
  <li><strong>Ý nghĩa 3:</strong> Kim loại đứng trước H tác dụng với dung dịch acid ($\\ce{HCl, H2SO4}$ loãng) giải phóng $\\ce{H2}$.</li>
  <li><strong>Ý nghĩa 4:</strong> Từ $\\ce{Mg}$ trở đi, kim loại đứng trước đẩy kim loại đứng sau ra khỏi dung dịch muối.</li>
</ul>`,
      example: "Cho mẩu kim loại Na vào dung dịch CuSO₄ dư. Nêu hiện tượng và viết PTHH.\nGiải: Na tác dụng với nước trước: 2Na + 2H₂O → 2NaOH + H₂↑ (sủi bọt khí).\nSau đó: 2NaOH + CuSO₄ → Cu(OH)₂↓ + Na₂SO₄ (xuất hiện kết tủa xanh lam, không có Cu đỏ).",
      checkpoint: {
        question: "Dãy các kim loại được sắp xếp theo chiều hoạt động hóa học TĂNG DẦN là:",
        options: ["A. Fe, Zn, Cu, Mg", "B. Cu, Fe, Zn, Mg", "C. Mg, Zn, Fe, Cu", "D. Cu, Zn, Fe, Mg"],
        answer: 1,
        explanation: "Giảm dần: Mg > Zn > Fe > Cu → Tăng dần: Cu < Fe < Zn < Mg."
      }
    }
  ],
  questions: [
    { id: "w38_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Trong dãy hoạt động hóa học, kim loại nào hoạt động mạnh nhất?", options: ["A. K", "B. Mg", "C. Fe", "D. Cu"], answer: 0, solution: "K đứng đầu dãy hoạt động hóa học thông dụng." },
    { id: "w38_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Cặp kim loại nào sau đây đều KHÔNG phản ứng với dung dịch $\\ce{HCl}$?", options: ["A. Fe, Cu", "B. Cu, Ag", "C. Zn, Ag", "D. Mg, Au"], answer: 1, solution: "Cu và Ag đều đứng sau H." },
    { id: "w38_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại $\\ce{Fe}$ đẩy được kim loại nào sau đây ra khỏi dung dịch muối?", options: ["A. Mg", "B. Al", "C. Zn", "D. Cu"], answer: 3, solution: "Fe đứng trước Cu nên đẩy được Cu ra khỏi dung dịch muối." },
    { id: "w38_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Cho dây đồng ($\\ce{Cu}$) vào dung dịch $\\ce{AgNO3}$, hiện tượng quan sát được là:", options: ["A. Không có hiện tượng", "B. Có kết tủa trắng và dung dịch hóa xanh", "C. Có kim loại màu trắng xám bám lên dây đồng và dung dịch chuyển màu xanh lam", "D. Có khí thoát ra"], answer: 2, solution: "$\\ce{Cu} + 2\\ce{AgNO3} \\rightarrow \\ce{Cu(NO3)2} \\text{ (xanh)} + 2\\ce{Ag}\\downarrow$." },
    { id: "w38_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây tác dụng với nước ở nhiệt độ thường?", options: ["A. Ca", "B. Fe", "C. Zn", "D. Cu"], answer: 0, solution: "Ca đứng trước Mg nên tác dụng với nước ở nhiệt độ thường." },
    { id: "w38_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Dung dịch $\\ce{FeSO4}$ có lẫn tạp chất là $\\ce{CuSO4}$. Để loại bỏ $\\ce{CuSO4}$ thu được $\\ce{FeSO4}$ tinh khiết, ta dùng lượng dư kim loại nào?", options: ["A. Zn", "B. Mg", "C. Fe", "D. Cu"], answer: 2, solution: "$\\ce{Fe} + \\ce{CuSO4} \\rightarrow \\ce{FeSO4} + \\ce{Cu}\\downarrow$, sau đó lọc bỏ Cu và Fe dư." },
    { id: "w38_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Zn đẩy được Fe ra khỏi dung dịch FeCl₂.", answer: true },
      { text: "Na đẩy được Cu ra khỏi dung dịch CuSO₄ tạo kim loại Cu màu đỏ.", answer: false },
      { text: "Au không tan trong dung dịch HCl và H₂SO₄ loãng.", answer: true },
      { text: "Al hoạt động hóa học mạnh hơn Fe.", answer: true }
    ], solution: "b) Sai: Na tác dụng nước tạo NaOH rồi kết tủa Cu(OH)₂ xanh." },
    { id: "w38_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Cho Mg vào dung dịch ZnCl₂ thu được kim loại Zn.", answer: true },
      { text: "Cho Cu vào dung dịch FeCl₂ thu được kim loại Fe.", answer: false },
      { text: "Mọi kim loại đứng trước H đều tác dụng được với nước ở nhiệt độ thường.", answer: false },
      { text: "Có thể dùng thìa bằng Al để khuấy dung dịch HCl.", answer: false }
    ], solution: "b) Sai (Cu yếu hơn Fe); c) Sai (Fe, Zn không tác dụng nước thường); d) Sai (Al tan trong HCl)." },
    { id: "w38_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Trong các kim loại $\\ce{Mg, Fe, Cu, Ag}$, có bao nhiêu kim loại tác dụng được với dung dịch $\\ce{H2SO4}$ loãng?", answer: "2", tolerance: 0, solution: "Có 2 kim loại là $\\ce{Mg}$ và $\\ce{Fe}$." },
    { id: "w38_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $0,1\\text{ mol}$ $\\ce{Cu}$ tác dụng hoàn toàn với dung dịch $\\ce{AgNO3}$ dư. Số mol $\\ce{Ag}$ thu được là bao nhiêu?", answer: "0.2", tolerance: 0.01, solution: "$\\ce{Cu} + 2\\ce{AgNO3} \\rightarrow \\ce{Cu(NO3)2} + 2\\ce{Ag} \\Rightarrow n_{\\ce{Ag}} = 0,2\\text{ mol}$." },
    { id: "w38_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho hỗn hợp bột gồm $\\ce{Mg}$ và $\\ce{Fe}$ vào dung dịch $\\ce{CuSO4}$ dư, khuấy đều đến khi phản ứng hoàn toàn. Chất rắn thu được sau phản ứng là:", options: ["A. $\\ce{Mg, Fe}$", "B. $\\ce{Cu}$", "C. $\\ce{Fe, Cu}$", "D. $\\ce{Mg, Cu}$"], answer: 1, solution: "Do $\\ce{CuSO4}$ dư nên cả Mg và Fe đều tan hết, chỉ còn kim loại $\\ce{Cu}$." },
    { id: "w38_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho bột $\\ce{Fe}$ dư vào dung dịch chứa đồng thời $\\ce{AgNO3}$ và $\\ce{Cu(NO3)2}$. Kim loại nào được tạo thành ĐẦU TIÊN?", options: ["A. $\\ce{Cu}$", "B. $\\ce{Ag}$", "C. Cả hai cùng lúc", "D. $\\ce{Fe}$"], answer: 1, solution: "Ag yếu hơn Cu nên $\\ce{AgNO3}$ phản ứng trước, tạo $\\ce{Ag}$ trước." },
    { id: "w38_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp $\\ce{Al, Cu}$ vào dung dịch $\\ce{HCl}$ dư thấy có $6,4\\text{ g}$ chất rắn không tan và thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). Giá trị của $m$ là:", options: ["A. $11,8\\text{ g}$", "B. $9,1\\text{ g}$", "C. $14,5\\text{ g}$", "D. $10,8\\text{ g}$"], answer: 0, solution: "Chất rắn không tan là $\\ce{Cu}$ ($6,4\\text{ g}$). $n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{Al}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$). $m = 5,4 + 6,4 = 11,8\\text{ g}$." },
    { id: "w38_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho một lá đồng nặng $10\\text{ g}$ vào dung dịch $\\ce{AgNO3}$. Sau một thời gian lấy lá đồng ra rửa sạch, sấy khô cân nặng $13,04\\text{ g}$. Số mol $\\ce{Ag}$ bám lên lá đồng là bao nhiêu?", answer: "0.04", tolerance: 0.002, solution: "$\\ce{Cu} + 2\\ce{AgNO3} \\rightarrow \\ce{Cu(NO3)2} + 2\\ce{Ag}$. Cứ $1\\text{ mol}$ Cu tan ra tạo $2\\text{ mol}$ Ag, khối lượng tăng $2\\times 108 - 64 = 152\\text{ g}$. Tăng $3,04\\text{ g} \\Rightarrow n_{\\ce{Cu pư}} = 0,02\\text{ mol} \\Rightarrow n_{\\ce{Ag}} = 0,04\\text{ mol}$." },
    { id: "w38_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $2,3\\text{ g}$ $\\ce{Na}$ vào $100\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $1\\text{ M}$. Sau khi các phản ứng xảy ra hoàn toàn, lọc lấy kết tủa nung đến khối lượng không đổi thu được bao nhiêu gam chất rắn?", answer: "4", tolerance: 0.1, solution: "$n_{\\ce{Na}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,1\\text{ mol}$; $n_{\\ce{CuSO4}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Cu(OH)2}} = 0,05\\text{ mol} \\Rightarrow n_{\\ce{CuO}} = 0,05\\text{ mol} \\Rightarrow m = 0,05 \\times 80 = 4\\text{ g}$." },
    { id: "w38_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $5,6\\text{ g}$ bột $\\ce{Fe}$ vào $200\\text{ mL}$ dung dịch chứa hỗn hợp $\\ce{AgNO3}$ $0,5\\text{ M}$ và $\\ce{Cu(NO3)2}$ $0,5\\text{ M}$. Sau khi các phản ứng xảy ra hoàn toàn, thu được $m\\text{ g}$ chất rắn. Tính $m$.", solution: "$n_{\\ce{Fe}} = 0,1\\text{ mol}$; $n_{\\ce{AgNO3}} = 0,1\\text{ mol}$; $n_{\\ce{Cu(NO3)2}} = 0,1\\text{ mol}$.\n(1) $\\ce{Fe} + 2\\ce{AgNO3} \\rightarrow \\ce{Fe(NO3)2} + 2\\ce{Ag}$: $0,05\\text{ mol}$ Fe phản ứng hết với $0,1\\text{ mol}$ $\\ce{AgNO3}$, tạo $0,1\\text{ mol}$ $\\ce{Ag}$.\n(2) $\\ce{Fe} + \\ce{Cu(NO3)2} \\rightarrow \\ce{Fe(NO3)2} + \\ce{Cu}$: $0,05\\text{ mol}$ Fe còn lại phản ứng với $0,05\\text{ mol}$ $\\ce{Cu(NO3)2}$ (dư $0,05\\text{ mol}$), tạo $0,05\\text{ mol}$ $\\ce{Cu}$.\n$m_{\\text{rắn}} = 0,1 \\times 108 + 0,05 \\times 64 = 10,8 + 3,2 = 14,0\\text{ g}$.", rubric: [
      { step: "Tính đúng số mol các chất và xác định thứ tự $\\ce{AgNO3}$ phản ứng trước", points: 0.25 },
      { step: "Tính đúng lượng $\\ce{Ag} = 0,1\\text{ mol}$ và Fe dư $0,05\\text{ mol}$", points: 0.25 },
      { step: "Tính đúng lượng $\\ce{Cu} = 0,05\\text{ mol}$", points: 0.25 },
      { step: "Tính đúng $m = 14,0\\text{ g}$", points: 0.25 }
    ] },
    { id: "w38_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $1,52\\text{ g}$ hỗn hợp bột gồm $\\ce{Mg}$ và $\\ce{Fe}$ vào $100\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $0,3\\text{ M}$. Sau khi phản ứng hoàn toàn thu được $2,12\\text{ g}$ chất rắn và dung dịch X. Tính phần trăm khối lượng mỗi kim loại trong hỗn hợp ban đầu.", solution: "$n_{\\ce{CuSO4}} = 0,03\\text{ mol}$. Nếu $\\ce{CuSO4}$ hết hoàn toàn tạo $0,03\\text{ mol}$ $\\ce{Cu}$ ($1,92\\text{ g} < 2,12\\text{ g}$) $\\Rightarrow$ kim loại dư ($\\ce{Fe}$ dư $2,12 - 1,92 = 0,2\\text{ g}$).\nGọi $x$ là mol $\\ce{Mg}$, $y$ là mol $\\ce{Fe pư}$: $x + y = 0,03$ và $24x + 56y + 0,2 = 1,52 \\Rightarrow 24x + 56y = 1,32$.\nGiải hệ: $32y = 1,32 - 0,72 = 0,6 \\Rightarrow y = 0,01875$; $x = 0,01125$.\n$m_{\\ce{Mg}} = 0,27\\text{ g}$ ($17,76\\%$); $m_{\\ce{Fe}} = 1,25\\text{ g}$ ($82,24\\%$).", rubric: [
      { step: "Biện luận đúng $\\ce{CuSO4}$ hết và kim loại dư là $\\ce{Fe}$", points: 0.25 },
      { step: "Tính khối lượng $\\ce{Fe}$ dư $= 0,2\\text{ g}$", points: 0.25 },
      { step: "Lập và giải đúng hệ tìm $n_{\\ce{Mg}}$ và $n_{\\ce{Fe pư}}$", points: 0.25 },
      { step: "Tính đúng $\\%m_{\\ce{Mg}} = 17,76\\%$ và $\\%m_{\\ce{Fe}} = 82,24\\%$", points: 0.25 }
    ] },
    { id: "w38_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Có 3 kim loại là $\\ce{Al, Fe, Cu}$ ở dạng bột trộn lẫn với nhau. Hãy trình bày phương pháp hóa học để tách riêng từng kim loại nguyên chất ra khỏi hỗn hợp (khối lượng không đổi).", solution: "1) Dùng dung dịch $\\ce{NaOH}$ dư: $\\ce{Al}$ tan tạo $\\ce{NaAlO2}$ ($2\\ce{Al} + 2\\ce{NaOH} + 2\\ce{H2O} \\rightarrow 2\\ce{NaAlO2} + 3\\ce{H2}$), lọc tách $\\ce{Fe, Cu}$. Sục $\\ce{CO2}$ dư vào nước lọc thu $\\ce{Al(OH)3}\\downarrow$, nung thu $\\ce{Al2O3}$ rồi điện phân nóng chảy thu $\\ce{Al}$.\n2) Cho hỗn hợp $\\ce{Fe, Cu}$ tác dụng với $\\ce{HCl}$ dư: $\\ce{Fe}$ tan thành $\\ce{FeCl2}$, lọc thu $\\ce{Cu}$ tinh khiết.\n3) Cho $\\ce{Zn}$ dư (hoặc điện phân) vào dung dịch $\\ce{FeCl2}$ rồi tách (hoặc kết tủa $\\ce{Fe(OH)2}$, nung trong chân không thành $\\ce{FeO}$, khử bằng $\\ce{CO}$ thu $\\ce{Fe}$).", rubric: [
      { step: "Tách $\\ce{Al}$ bằng $\\ce{NaOH}$ dư và tái tạo lại $\\ce{Al}$", points: 0.5 },
      { step: "Tách $\\ce{Cu}$ và $\\ce{Fe}$ bằng $\\ce{HCl}$ dư và tái tạo $\\ce{Fe}$", points: 0.5 }
    ] },
    { id: "w38_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Bằng một thuốc thử duy nhất, hãy nhận biết 4 kim loại: $\\ce{Ba, Al, Fe, Ag}$ đựng trong 4 lọ mất nhãn.", solution: "Dùng dung dịch $\\ce{H2SO4}$ loãng dư:\n- Tan, sủi bọt khí và xuất hiện kết tủa trắng: $\\ce{Ba}$ ($\\ce{Ba} + \\ce{H2SO4} \\rightarrow \\ce{BaSO4}\\downarrow + \\ce{H2}\\uparrow$).\n- Tan, sủi bọt khí, dung dịch không màu: $\\ce{Al}$.\n- Tan, sủi bọt khí, dung dịch màu lục nhạt: $\\ce{Fe}$.\n- Không tan, không hiện tượng: $\\ce{Ag}$.", rubric: [
      { step: "Chọn đúng thuốc thử là dung dịch $\\ce{H2SO4}$ loãng", points: 0.25 },
      { step: "Nêu đúng hiện tượng nhận biết cả 4 kim loại kèm PTHH", points: 0.75 }
    ] },
    { id: "w38_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho 3 kim loại X, Y, Z và các thông tin sau: X đẩy được Y ra khỏi dung dịch muối; Z tác dụng được với nước ở nhiệt độ thường; Y tác dụng được với dung dịch HCl nhưng X thì không? (Sửa dữ kiện hợp lý: X tác dụng với HCl, Y không tác dụng với HCl; Z tác dụng với nước ở nhiệt độ thường). Hãy sắp xếp X, Y, Z theo chiều hoạt động hóa học giảm dần.", solution: "Z tác dụng với nước ở nhiệt độ thường nên Z mạnh nhất.\nX tác dụng được với HCl, Y không tác dụng với HCl nên X đứng trước H, Y đứng sau H (X mạnh hơn Y).\nVậy thứ tự giảm dần là: Z > X > Y.", rubric: [
      { step: "Biện luận đúng Z mạnh nhất vì tác dụng với nước thường", points: 0.5 },
      { step: "Biện luận đúng X > Y và kết luận Z > X > Y", points: 0.5 }
    ] }
  ]
};
