window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[60] = {
  week: 60,
  title: "CĐ 3B: Thực hành thí nghiệm, lắp dụng cụ thu khí & Phân tích sai số",
  objectives: [
    "Lựa chọn đúng phương pháp thu khí: dời nước (khí ít tan trong nước như $\\ce{H2, O2, CH4, C2H4}$), dời không khí đặt ngửa bình (khí nặng hơn không khí: $\\ce{CO2, Cl2, SO2}$), dời không khí đặt úp bình (khí nhẹ hơn không khí: $\\ce{H2, NH3, CH4}$).",
    "Chọn đúng chất làm khô khí (không phản ứng với khí cần làm khô): $\\ce{H2SO4}$ đặc, $\\ce{CaO}$, $\\ce{P2O5}$, $\\ce{CaCl2}$ khan.",
    "Nhận biết và giải thích các lỗi thao tác thí nghiệm thường gặp (nghiêng ống nghiệm khi nung chất rắn, rút ống dẫn khí trước khi tắt đèn cồn, bông tẩm $\\ce{NaOH}$ ở miệng bình thu $\\ce{Cl2/SO2}$).",
    "Phân tích được nguyên nhân sai số trong thí nghiệm định lượng (đo thể tích khí, chuẩn độ acid-base)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Hình vẽ bộ dụng cụ điều chế & thu khí $\\ce{O2, H2, CO2, Cl2, C2H4}$.",
    sessions: [
      {
        name: "Buổi 1: Nguyên tắc lắp dụng cụ điều chế & Thu khí",
        guide: "Nhấn mạnh 3 quy tắc an toàn: (1) Đun chất rắn chứa ẩm ($\\ce{KMnO4, CaCO3}$) phải đặt miệng ống nghiệm hơi chúi xuống dưới để hơi nước không chảy ngược làm vỡ đáy ống; (2) Thu khí qua nước xong phải rút ống dẫn khí ra trước khi tắt đèn cồn để tránh nước bị hút ngược; (3) Khí độc ($\\ce{Cl2, SO2}$) phải có bông tẩm $\\ce{NaOH}$ trên miệng bình.",
        pitfalls: "HS hay chọn $\\ce{CaO}$ để làm khô khí $\\ce{CO2}$ (sai vì $\\ce{CaO + CO2 -> CaCO3}$)."
      },
      {
        name: "Buổi 2: Chọn chất làm khô khí & Phân tích sai số thực nghiệm",
        guide: "Nguyên tắc làm khô: chất hút ẩm phải KHÔNG phản ứng với khí ($\\ce{H2SO4}$ đặc không làm khô được $\\ce{NH3}$; $\\ce{CaO}$ không làm khô được $\\ce{CO2, SO2, Cl2, HCl}$).",
        pitfalls: "Nhầm lẫn giữa phương pháp thu khí dời nước và dời không khí."
      },
      {
        name: "Buổi 3: Giải bài tập Thực hành thí nghiệm chuẩn đề HSG 9 & Chuyên Hóa"
      }
    ]
  },
  lecture: [
    {
      title: "1. Sơ đồ lắp dụng cụ thu khí & Chất làm khô chuẩn",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="490" height="120" viewBox="0 0 490 120" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="245" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">3 Cách thu khí trong phòng thí nghiệm</text>
  <rect x="15" y="34" width="145" height="72" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="87" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">1. Dời nước</text>
  <text x="87" y="74" font-family="sans-serif" font-size="11" fill="#1e3a8a" text-anchor="middle">Khí ít tan trong H₂O:</text>
  <text x="87" y="92" font-family="monospace" font-size="11.5" font-weight="bold" fill="#1e40af" text-anchor="middle">H₂, O₂, CH₄, C₂H₄</text>

  <rect x="172" y="34" width="145" height="72" rx="8" fill="#fef3c7" stroke="#d97706"/>
  <text x="245" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">2. Ngửa bình</text>
  <text x="245" y="74" font-family="sans-serif" font-size="11" fill="#78350f" text-anchor="middle">Nặng hơn KK (M &gt; 29):</text>
  <text x="245" y="92" font-family="monospace" font-size="11.5" font-weight="bold" fill="#92400e" text-anchor="middle">CO₂, Cl₂, SO₂, O₂</text>

  <rect x="330" y="34" width="145" height="72" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="402" y="54" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">3. Úp bình</text>
  <text x="402" y="74" font-family="sans-serif" font-size="11" fill="#14532d" text-anchor="middle">Nhẹ hơn KK (M &lt; 29):</text>
  <text x="402" y="92" font-family="monospace" font-size="11.5" font-weight="bold" fill="#166534" text-anchor="middle">H₂, CH₄, NH₃</text>
</svg>
</div>
<ul>
  <li><strong>Chất làm khô:</strong> Dùng $\\ce{H2SO4}$ đặc hoặc $\\ce{P2O5}$ cho khí có tính acid/trung tính ($\\ce{CO2, SO2, Cl2, HCl, O2, H2}$); dùng $\\ce{CaO}$ hoặc $\\ce{NaOH}$ rắn cho khí có tính base/trung tính ($\\ce{NH3, H2, O2, CH4}$).</li>
</ul>`,
      example: "Để điều chế khí Cl₂ tinh khiết và khô từ MnO₂ và HCl đặc, người ta dẫn khí sinh ra lần lượt qua bình 1 đựng dung dịch NaCl bão hòa và bình 2 đựng H₂SO₄ đặc. Nêu vai trò mỗi bình.\nGiải: Bình 1 (NaCl bão hòa) giữ lại khí HCl bay hơi (mà ít hòa tan Cl₂); Bình 2 (H₂SO₄ đặc) hút hơi nước để làm khô khí Cl₂.",
      checkpoint: {
        question: "Chất nào sau đây KHÔNG thể dùng để làm khô khí CO₂ ẩm?",
        options: ["A. H₂SO₄ đặc", "B. P₂O₅", "C. CaO (vôi sống)", "D. CaCl₂ khan"],
        answer: 2,
        explanation: "CaO tác dụng với CO₂ tạo CaCO₃ nên làm mất khí CO₂."
      }
    }
  ],
  questions: [
    { id: "w60_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào sau đây có thể thu bằng cách ĐẶT ÚP BÌNH (đẩy không khí)?", options: ["A. $\\ce{CO2}$", "B. $\\ce{Cl2}$", "C. $\\ce{H2}$", "D. $\\ce{SO2}$"], answer: 2, solution: "$\\ce{H2}$ ($M=2$) nhẹ hơn không khí ($29$) nên bay lên trên, phải úp bình." },
    { id: "w60_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào sau đây KHÔNG thể thu bằng phương pháp dời nước vì tan nhiều trong nước?", options: ["A. $\\ce{O2}$", "B. $\\ce{H2}$", "C. $\\ce{HCl}$", "D. $\\ce{CH4}$"], answer: 2, solution: "Khí $\\ce{HCl}$ tan rất nhiều trong nước tạo dung dịch hydrochloric acid." },
    { id: "w60_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Khi thu khí $\\ce{Cl2}$ hoặc $\\ce{SO2}$ bằng cách đẩy không khí, người ta đặt một miếng bông tẩm dung dịch gì ở miệng bình để tránh khí độc bay ra?", options: ["A. Nước cất", "B. Dung dịch $\\ce{NaOH}$", "C. Dung dịch $\\ce{HCl}$", "D. Dung dịch $\\ce{NaCl}$"], answer: 1, solution: "$\\ce{NaOH}$ hấp thụ triệt để $\\ce{Cl2}$ và $\\ce{SO2}$." },
    { id: "w60_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Để làm khô khí $\\ce{NH3}$ (có tính base), ta nên dùng chất hút ẩm nào sau đây?", options: ["A. $\\ce{H2SO4}$ đặc", "B. $\\ce{P2O5}$", "C. $\\ce{CaO}$ (vôi sống)", "D. Dung dịch $\\ce{HCl}$"], answer: 2, solution: "$\\ce{CaO}$ có tính base nên không phản ứng với $\\ce{NH3}$." },
    { id: "w60_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khi kết thúc thí nghiệm điều chế $\\ce{O2}$ từ $\\ce{KMnO4}$ bằng cách thu qua nước, thao tác đúng là:", options: ["A. Tắt đèn cồn trước rồi mới rút ống dẫn khí", "B. Rút ống dẫn khí ra khỏi chậu nước trước rồi mới tắt đèn cồn", "C. Đổ nước lạnh vào ống nghiệm đang nóng", "D. Bịt kín miệng ống nghiệm"], answer: 1, solution: "Nếu tắt đèn cồn trước, áp suất giảm sẽ hút nước lạnh vào ống nghiệm nóng gây nổ vỡ." },
    { id: "w60_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Khi pha loãng dung dịch $\\ce{H2SO4}$ đặc, thao tác an toàn bắt buộc là:", options: ["A. Rót nhanh nước vào acid", "B. Rót từ từ acid đặc vào nước và khuấy đều", "C. Đổ đồng thời vào bình kín", "D. Đun sôi nước trước khi rót"], answer: 1, solution: "Luôn rót từ từ acid vào nước để tản nhiệt an toàn." },
    { id: "w60_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai về thực hành thí nghiệm:", statements: [
      { text: "Khi nung chất rắn trong ống nghiệm, miệng ống nghiệm phải hơi chúc xuống dưới.", answer: true },
      { text: "Có thể dùng H₂SO₄ đặc để làm khô khí CO₂.", answer: true },
      { text: "Để thử xem bình thu khí O₂ đã đầy chưa, đưa que đóm còn tàn đỏ vào miệng bình.", answer: true },
      { text: "Có thể dùng CaO để làm khô khí SO₂ ẩm.", answer: false }
    ], solution: "d) Sai: $\\ce{CaO + SO2 -> CaSO3}$." },
    { id: "w60_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khí C₂H₄ điều chế trong PTN từ C₂H₅OH thường lẫn SO₂, CO₂; cần dẫn qua dung dịch NaOH để làm sạch.", answer: true },
      { text: "Trước khi đốt khí H₂ điều chế từ Zn + HCl, cần thử độ tinh khiết của khí H₂ để tránh nổ.", answer: true },
      { text: "Để lấy hóa chất rắn dạng bột, ta dùng tay trần bốc trực tiếp.", answer: false },
      { text: "Phễu chiết dùng để tách hai chất lỏng không tan vào nhau như dầu ăn và nước.", answer: true }
    ], solution: "c) Sai: phải dùng thìa thủy tinh hoặc thìa nhựa chuyên dụng." },
    { id: "w60_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Trong các khí sau: $\\ce{O2, CO2, H2, Cl2, SO2}$, có bao nhiêu khí thu được bằng cách đặt NGỬA bình (đẩy không khí)?", answer: "4", tolerance: 0, solution: "Có 4 khí nặng hơn không khí ($M > 29$): $\\ce{O2}$ ($32$), $\\ce{CO2}$ ($44$), $\\ce{Cl2}$ ($71$), $\\ce{SO2}$ ($64$)." },
    { id: "w60_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Nung $31,6\\text{ g}$ $\\ce{KMnO4}$ ($M=158$) thu được tối đa bao nhiêu lít khí $\\ce{O2}$ ở đkc?", answer: "2.479", tolerance: 0.02, solution: "$n_{\\ce{KMnO4}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{O2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w60_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Điều chế khí $\\ce{CO2}$ từ $\\ce{CaCO3}$ và dung dịch $\\ce{HCl}$ thường có lẫn hơi nước và khí $\\ce{HCl}$ bay theo. Để thu được $\\ce{CO2}$ tinh khiết và khô, ta dẫn khí lần lượt qua:", options: ["A. Bình 1 đựng $\\ce{NaOH}$, bình 2 đựng $\\ce{H2SO4}$ đặc", "B. Bình 1 đựng $\\ce{NaHCO3}$ bão hòa, bình 2 đựng $\\ce{H2SO4}$ đặc", "C. Bình 1 đựng $\\ce{H2SO4}$ đặc, bình 2 đựng $\\ce{CaO}$", "D. Bình 1 đựng $\\ce{Ca(OH)2}$, bình 2 đựng $\\ce{P2O5}$"], answer: 1, solution: "Dung dịch $\\ce{NaHCO3}$ giữ lại $\\ce{HCl}$ ($\\ce{NaHCO3 + HCl -> NaCl + CO2 + H2O}$) mà không hấp thụ $\\ce{CO2}$; sau đó $\\ce{H2SO4}$ đặc làm khô." },
    { id: "w60_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Trong thí nghiệm chuẩn độ dung dịch $\\ce{HCl}$ bằng dung dịch $\\ce{NaOH}$ chuẩn dùng chỉ thị phenolphthalein, nếu sau khi tráng bình tam giác bằng nước cất mà học sinh KHÔNG làm khô, kết quả đo nồng độ $\\ce{HCl}$ sẽ:", options: ["A. Tăng lên", "B. Giảm đi", "C. Không bị ảnh hưởng", "D. Không xác định được"], answer: 2, solution: "Nước cất không làm thay đổi số mol $\\ce{HCl}$ đã hút vào bình tam giác, nên lượng $\\ce{NaOH}$ chuẩn độ không đổi." },
    { id: "w60_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Trong thí nghiệm đốt cháy mẩu $\\ce{Na}$ trong bình khí $\\ce{O2}$, tại sao người ta cho một lớp cát khô mỏng dưới đáy bình thủy tinh?", options: ["A. Để tăng tốc độ phản ứng", "B. Để hấp thụ nhiệt tránh làm nứt vỡ đáy bình thủy tinh", "C. Để xúc tác cho Na cháy", "D. Để tạo màu đẹp"], answer: 1, solution: "Lớp cát khô cách nhiệt tránh giọt $\\ce{Na}$ nóng chảy rơi xuống làm nứt vỡ đáy bình." },
    { id: "w60_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ $\\ce{KClO3}$ nhiệt phân hoàn toàn (xúc tác $\\ce{MnO2}$, $t^\\circ$) thu được bao nhiêu lít khí $\\ce{O2}$ (đkc)?", answer: "7.437", tolerance: 0.05, solution: "$2\\ce{KClO3 -> 2KCl + 3O2} \\Rightarrow n_{\\ce{O2}} = 0,3\\text{ mol} \\Rightarrow V = 7,437\\text{ L}$." },
    { id: "w60_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Khi điều chế khí $\\ce{CO2}$ trong bình Kipp từ $\\ce{CaCO3}$ và $\\ce{HCl}$, học sinh dùng nhầm dung dịch $\\ce{H2SO4}$ loãng thay cho $\\ce{HCl}$ thì thấy khí thoát ra rất chậm rồi ngừng hẳn. Nguyên nhân là do tạo lớp kết tủa ít tan nào bám quanh đá vôi (viết CTHH)?", answer: "CaSO4", tolerance: 0, solution: "$\\ce{CaSO4}$ ít tan bám lên bề mặt $\\ce{CaCO3}$ ngăn cản phản ứng tiếp diễn." },
    { id: "w60_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trong phòng thí nghiệm, khi điều chế khí $\\ce{C2H4}$ từ $\\ce{C2H5OH}$ và $\\ce{H2SO4}$ đặc ở $170^\\circ\\text{C}$, ngoài $\\ce{C2H4}$ còn sinh ra một lượng nhỏ khí $\\ce{SO2}$ và $\\ce{CO2}$. (a) Giải thích vì sao lại sinh ra $\\ce{SO2}$ và $\\ce{CO2}$. (b) Cần dẫn hỗn hợp khí qua bình đựng dung dịch nào trước khi thử tính chất làm mất màu nước bromine?", solution: "(a) Một phần $\\ce{C2H5OH}$ bị $\\ce{H2SO4}$ đặc oxi hóa thành $\\ce{CO2}$ và $\\ce{C}$, đồng thời $\\ce{H2SO4}$ đặc bị khử thành $\\ce{SO2}$.\n(b) Dẫn qua dung dịch $\\ce{NaOH}$ dư (hoặc $\\ce{Ca(OH)2}$ dư) để giữ lại $\\ce{SO2}$ và $\\ce{CO2}$ (vì $\\ce{SO2}$ cũng làm mất màu nước $\\ce{Br2}$, gây sai lệch kết quả).", rubric: [
      { step: "Giải thích đúng nguyên nhân sinh ra $\\ce{SO2}$ và $\\ce{CO2}$", points: 0.5 },
      { step: "Chọn đúng dung dịch $\\ce{NaOH}$ (hoặc kiềm dư) và giải thích loại nhiễu $\\ce{SO2}$", points: 0.5 }
    ] },
    { id: "w60_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một học sinh lắp bộ dụng cụ điều chế khí $\\ce{O2}$ từ $\\ce{KMnO4}$ để thu qua nước nhưng quên đặt bông ở gần miệng ống nghiệm và quên rút ống dẫn khí trước khi tắt đèn cồn. Hãy phân tích 2 hậu quả có thể xảy ra.", solution: "1) Quên đặt bông: bột $\\ce{KMnO4}$ nhẹ có thể bị dòng khí $\\ce{O2}$ cuốn theo ống dẫn khí làm tắc ống hoặc làm nước trong chậu thu khí bị nhuộm tím.\n2) Quên rút ống dẫn khí trước khi tắt đèn cồn: khi ngừng đun, không khí trong ống nghiệm nguội đi và co lại, áp suất giảm làm nước lạnh bị hút ngược vào ống nghiệm đang nóng gây nứt vỡ, nguy hiểm.", rubric: [
      { step: "Nêu đúng hậu quả của việc quên đặt bông", points: 0.5 },
      { step: "Nêu đúng hiện tượng hút ngược nước gây vỡ ống nghiệm", points: 0.5 }
    ] },
    { id: "w60_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Có một hỗn hợp khí gồm $\\ce{CO2, SO2, H2, O2}$ có lẫn hơi nước. Hãy thiết kế thí nghiệm (nêu thứ tự các bình rửa khí) để thu được khí $\\ce{H2}$ và $\\ce{O2}$ hoàn toàn khô và tinh khiết? (Không tách riêng $\\ce{H2}$ và $\\ce{O2}$).", solution: "Bước 1: Dẫn hỗn hợp qua bình đựng dung dịch $\\ce{NaOH}$ dư (hoặc $\\ce{KOH}$ dư) để hấp thụ hoàn toàn $\\ce{CO2}$ và $\\ce{SO2}$.\nBước 2: Dẫn khí thoát ra (gồm $\\ce{H2, O2}$ và hơi nước) qua bình đựng $\\ce{H2SO4}$ đặc (hoặc $\\ce{CaO}$ rắn) để hút sạch hơi nước, thu được hỗn hợp $\\ce{H2, O2}$ khô.", rubric: [
      { step: "Dùng dung dịch kiềm dư loại $\\ce{CO2, SO2}$ trước", points: 0.5 },
      { step: "Dùng chất hút ẩm ($\\ce{H2SO4}$ đặc hoặc $\\ce{CaO}$) làm khô sau", points: 0.5 }
    ] },
    { id: "w60_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trong phòng thí nghiệm, có 2 lọ mất nhãn đựng riêng biệt hai dung dịch $\\ce{Na2CO3}$ và $\\ce{HCl}$. Không dùng thêm bất kỳ hóa chất hay chất chỉ thị nào khác, hãy trình bày cách nhận biết hai dung dịch đó bằng thao tác thí nghiệm.", solution: "Nhỏ từ từ vài giọt dung dịch (1) vào ống nghiệm đựng lượng dư dung dịch (2), đồng thời làm thí nghiệm ngược lại (nhỏ từ từ (2) vào (1)):\n- Nếu thấy bọt khí thoát ra NGAY LẬP TỨC từ những giọt đầu tiên: ống nghiệm đang chứa $\\ce{HCl}$ dư và chất nhỏ vào là $\\ce{Na2CO3}$ ($\\ce{Na2CO3 + 2HCl -> 2NaCl + CO2 ^ + H2O}$).\n- Nếu lúc đầu KHÔNG thấy khí, nhỏ một lúc sau mới thấy bọt khí: ống nghiệm đang chứa $\\ce{Na2CO3}$ và chất nhỏ vào là $\\ce{HCl}$ ($\\ce{HCl + Na2CO3 -> NaHCO3 + NaCl}$, sau đó mới tạo $\\ce{CO2}$).", rubric: [
      { step: "Nêu đúng thao tác nhỏ từ từ theo 2 chiều ngược nhau", points: 0.5 },
      { step: "Giải thích đúng hiện tượng sủi bọt ngay vs sủi bọt muộn kèm PTHH", points: 0.5 }
    ] },
    { id: "w60_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Khi đo thể tích khí $\\ce{H2}$ thu được bằng phương pháp dời nước trong ống đong úp ngược, để đọc kết quả thể tích chính xác nhất ở áp suất khí quyển, học sinh cần lưu ý điều chỉnh mực nước trong ống đong và ngoài chậu như thế nào?", solution: "Cần nâng hoặc hạ ống đong sao cho <strong>mực nước bên trong ống đong ngang bằng với mực nước bên ngoài chậu</strong> trước khi đọc vạch thể tích, để áp suất khí trong ống đong cân bằng đúng với áp suất khí quyển bên ngoài.", rubric: [
      { step: "Nêu được thao tác điều chỉnh mực nước trong và ngoài ngang bằng nhau", points: 0.5 },
      { step: "Giải thích đúng mục đích cân bằng áp suất khí quyển", points: 0.5 }
    ] }
  ]
};
