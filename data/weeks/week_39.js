window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[39] = {
  week: 39,
  title: "Phương pháp tách kim loại (Nhiệt luyện, Thủy luyện, Điện phân)",
  objectives: [
    "Nêu được nguyên tắc chung điều chế kim loại: khử ion kim loại trong hợp chất thành nguyên tử kim loại ($\\ce{M^{n+} + ne -> M}$).",
    "Phân biệt được 3 phương pháp tách kim loại phổ biến: Điện phân nóng chảy (kim loại mạnh $\\ce{K -> Al}$), Nhiệt luyện (kim loại trung bình $\\ce{Zn -> Cu}$), Thủy luyện (kim loại yếu $\\ce{Cu, Ag, Au}$).",
    "Trình bày được quy trình tách $\\ce{Al}$ từ quặng bauxite ($\\ce{Al2O3}$), $\\ce{Fe}$ từ quặng hematite ($\\ce{Fe2O3}$) và $\\ce{Zn}$ từ quặng zinc blende ($\\ce{ZnS}$).",
    "Giải được các bài toán nhiệt luyện (khử oxide bằng $\\ce{CO}$, $\\ce{H2}$, $\\ce{C}$, $\\ce{Al}$) có hiệu suất."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mẫu quặng bauxite, hematite, sơ đồ lò cao luyện gang, sơ đồ thùng điện phân nóng chảy $\\ce{Al2O3}$.",
    sessions: [
      {
        name: "Buổi 1: Nguyên tắc & Phân loại 3 phương pháp tách kim loại",
        guide: "Gắn liền với dãy hoạt động hóa học: Đầu dãy ($\\ce{K, Na, Ca, Mg, Al}$) chỉ dùng điện phân nóng chảy; Giữa dãy ($\\ce{Zn, Fe, Sn, Pb, Cu}$) dùng nhiệt luyện (khử oxide bằng $\\ce{C, CO, H2, Al}$); Cuối dãy dùng thủy luyện.",
        pitfalls: "HS hay nhầm $\\ce{CO}$ khử được $\\ce{Al2O3}$ hoặc $\\ce{MgO}$ ở nhiệt độ cao."
      },
      {
        name: "Buổi 2: Sản xuất Nhôm, Sắt, Kẽm trong công nghiệp",
        guide: "Nhấn mạnh vai trò của cryolite ($\\ce{Na3AlF6}$) khi điện phân $\\ce{Al2O3}$: hạ nhiệt độ nóng chảy từ $2050^\\circ\\text{C}$ xuống $900^\\circ\\text{C}$, tăng độ dẫn điện và nổi lên trên ngăn $\\ce{Al}$ bị oxi hóa.",
        pitfalls: "Quên bước đốt quặng sulfide ($2\\ce{ZnS} + 3\\ce{O2} \\xrightarrow{t^\\circ} 2\\ce{ZnO} + 2\\ce{SO2}$) trước khi khử $\\ce{ZnO}$ bằng $\\ce{C}$."
      },
      {
        name: "Buổi 3: Bài toán Nhiệt luyện & Bảo toàn nguyên tố Oxi (HSG)",
        guide: "Công thức giải nhanh: $n_{\\ce{CO pư}} = n_{\\ce{CO2}} = n_{\\ce{O bị lấy}}$; $m_{\\text{oxide}} = m_{\\text{rắn sau}} + m_{\\ce{O bị lấy}}$."
      }
    ]
  },
  lecture: [
    {
      title: "1. Ba phương pháp tách kim loại từ hợp chất",
      content: `
<p>Trong tự nhiên, hầu hết kim loại tồn tại ở dạng hợp chất trong quặng (trừ $\\ce{Au, Pt}$ ở dạng đơn chất). Nguyên tắc tách kim loại là <strong>khử hợp chất của kim loại thành đơn chất</strong>.</p>
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:13.5px;">
  <tr style="background:#e2e8f0;"><th style="border:1px solid #cbd5e1;padding:6px;">Phương pháp</th><th style="border:1px solid #cbd5e1;padding:6px;">Phạm vi áp dụng</th><th style="border:1px solid #cbd5e1;padding:6px;">Ví dụ PTHH tiêu biểu</th></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;"><strong>Điện phân nóng chảy</strong></td><td style="border:1px solid #cbd5e1;padding:6px;">Kim loại mạnh ($\\ce{K, Na, Ca, Mg, Al}$)</td><td style="border:1px solid #cbd5e1;padding:6px;">$2\\ce{Al2O3} \\xrightarrow{\\text{đpnc, cryolite}} 4\\ce{Al} + 3\\ce{O2}\\uparrow$</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;"><strong>Nhiệt luyện</strong></td><td style="border:1px solid #cbd5e1;padding:6px;">Kim loại trung bình ($\\ce{Zn, Fe, Pb, Cu}$)</td><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Fe2O3} + 3\\ce{CO} \\xrightarrow{t^\\circ} 2\\ce{Fe} + 3\\ce{CO2}\\uparrow$</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;"><strong>Thủy luyện</strong></td><td style="border:1px solid #cbd5e1;padding:6px;">Kim loại yếu ($\\ce{Cu, Ag, Au}$)</td><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Fe} + \\ce{CuSO4} \\rightarrow \\ce{FeSO4} + \\ce{Cu}\\downarrow$</td></tr>
</table>`,
      example: "Cho luồng khí CO dư đi qua 16 g Fe₂O₃ nung nóng. Tính khối lượng Fe thu được (H = 100%).\nGiải: n(Fe₂O₃) = 16/160 = 0,1 mol → n(Fe) = 0,2 mol → m(Fe) = 0,2 × 56 = 11,2 g.",
      checkpoint: {
        question: "Trong công nghiệp, kim loại nhôm (Al) được sản xuất bằng phương pháp nào?",
        options: ["A. Khử Al₂O₃ bằng CO ở nhiệt độ cao", "B. Điện phân dung dịch AlCl₃", "C. Điện phân nóng chảy Al₂O₃ (có mặt cryolite)", "D. Dùng kim loại Mg đẩy Al ra khỏi Al₂(SO₄)₃"],
        answer: 2,
        explanation: "Al là kim loại hoạt động mạnh, chỉ điều chế được bằng điện phân nóng chảy Al₂O₃."
      }
    }
  ],
  questions: [
    { id: "w39_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại nào sau đây chỉ có thể điều chế bằng phương pháp điện phân nóng chảy?", options: ["A. Fe", "B. Cu", "C. Mg", "D. Ag"], answer: 2, solution: "Mg thuộc nhóm kim loại hoạt động mạnh (từ K đến Al)." },
    { id: "w39_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Quặng bauxite là nguồn nguyên liệu chính để sản xuất kim loại nào?", options: ["A. Sắt", "B. Nhôm", "C. Kẽm", "D. Đồng"], answer: 1, solution: "Quặng bauxite chứa thành phần chính là $\\ce{Al2O3}$." },
    { id: "w39_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Khí $\\ce{CO}$ ở nhiệt độ cao KHÔNG khử được oxide nào sau đây?", options: ["A. $\\ce{Fe2O3}$", "B. $\\ce{CuO}$", "C. $\\ce{ZnO}$", "D. $\\ce{Al2O3}$"], answer: 3, solution: "$\\ce{CO}$ không khử được oxide của kim loại đứng trước $\\ce{Zn}$ (như $\\ce{Al2O3, MgO, CaO}$)." },
    { id: "w39_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Phương pháp dùng kim loại hoạt động mạnh đẩy kim loại yếu hơn ra khỏi dung dịch muối được gọi là:", options: ["A. Nhiệt luyện", "B. Thủy luyện", "C. Điện phân", "D. Nhiệt phân"], answer: 1, solution: "Đó là phương pháp thủy luyện." },
    { id: "w39_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Trong quá trình điện phân nóng chảy $\\ce{Al2O3}$, chất nào được thêm vào để hạ nhiệt độ nóng chảy xuống khoảng $900^\\circ\\text{C}$?", options: ["A. Đá vôi ($\\ce{CaCO3}$)", "B. Cryolite ($\\ce{Na3AlF6}$)", "C. Than cốc ($\\ce{C}$)", "D. Nước ($\\ce{H2O}$)"], answer: 1, solution: "Cryolite giúp hạ nhiệt độ nóng chảy và tăng độ dẫn điện." },
    { id: "w39_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Quặng hematite chứa thành phần chính là $\\ce{Fe2O3}$ dùng để sản xuất kim loại:", options: ["A. Nhôm", "B. Sắt", "C. Kẽm", "D. Vàng"], answer: 1, solution: "Hematite là quặng sắt phổ biến nhất." },
    { id: "w39_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Vàng (Au) thường tồn tại ở dạng đơn chất trong tự nhiên.", answer: true },
      { text: "Có thể điều chế Na bằng cách điện phân dung dịch NaCl.", answer: false },
      { text: "Khí H₂ có thể khử CuO nung nóng thành Cu kim loại.", answer: true },
      { text: "Đốt quặng ZnS trong không khí thu được ZnO và khí SO₂.", answer: true }
    ], solution: "b) Sai: điện phân dung dịch NaCl tạo NaOH, H₂, Cl₂; muốn có Na phải điện phân nóng chảy NaCl." },
    { id: "w39_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nguyên tắc chung điều chế kim loại là khử hợp chất kim loại thành đơn chất.", answer: true },
      { text: "Dùng khí CO khử hỗn hợp FeO và MgO nung nóng thu được Fe và Mg.", answer: false },
      { text: "Khi điện phân nóng chảy Al₂O₃ ở cực âm (cathode) thu được Al.", answer: true },
      { text: "Thủy luyện thường dùng cho kim loại yếu như Cu, Ag, Au.", answer: true }
    ], solution: "b) Sai: MgO không bị CO khử." },
    { id: "w39_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Khử hoàn toàn $8\\text{ g}$ $\\ce{CuO}$ ($M=80$) bằng khí $\\ce{H2}$ dư đun nóng. Khối lượng $\\ce{Cu}$ thu được là bao nhiêu gam?", answer: "6.4", tolerance: 0.1, solution: "$n_{\\ce{CuO}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{Cu}} = 0,1 \\times 64 = 6,4\\text{ g}$." },
    { id: "w39_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Điện phân nóng chảy hoàn toàn $102\\text{ kg}$ $\\ce{Al2O3}$ ($M=102$) thu được bao nhiêu kg kim loại $\\ce{Al}$?", answer: "54", tolerance: 0.2, solution: "$n_{\\ce{Al2O3}} = 1\\text{ kmol} \\Rightarrow n_{\\ce{Al}} = 2\\text{ kmol} \\Rightarrow m = 54\\text{ kg}$." },
    { id: "w39_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Thổi luồng khí $\\ce{CO}$ dư qua ống sứ đựng hỗn hợp $\\ce{Fe2O3, CuO, MgO, Al2O3}$ nung nóng. Chất rắn còn lại trong ống sứ sau phản ứng là:", options: ["A. $\\ce{Fe, Cu, Mg, Al}$", "B. $\\ce{Fe, Cu, MgO, Al2O3}$", "C. $\\ce{Fe2O3, Cu, MgO, Al2O3}$", "D. $\\ce{Fe, CuO, MgO, Al2O3}$"], answer: 1, solution: "$\\ce{CO}$ chỉ khử được $\\ce{Fe2O3}$ và $\\ce{CuO}$ thành kim loại; $\\ce{MgO, Al2O3}$ không bị khử." },
    { id: "w39_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Khử hoàn toàn $23,2\\text{ g}$ $\\ce{Fe3O4}$ bằng khí $\\ce{CO}$ dư thu được $m\\text{ g}$ $\\ce{Fe}$ và khí $\\ce{CO2}$. Giá trị của $m$ là:", options: ["A. $16,8\\text{ g}$", "B. $11,2\\text{ g}$", "C. $22,4\\text{ g}$", "D. $8,4\\text{ g}$"], answer: 0, solution: "$n_{\\ce{Fe3O4}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Fe}} = 0,3\\text{ mol} \\Rightarrow m = 0,3 \\times 56 = 16,8\\text{ g}$." },
    { id: "w39_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Từ $1\\text{ tấn}$ quặng bauxite chứa $60\\%$ $\\ce{Al2O3}$ (còn lại là tạp chất trơ) đem điện phân nóng chảy với hiệu suất $90\\%$, khối lượng nhôm thu được là:", options: ["A. $285,88\\text{ kg}$", "B. $317,65\\text{ kg}$", "C. $540\\text{ kg}$", "D. $243\\text{ kg}$"], answer: 0, solution: "$m_{\\ce{Al2O3}} = 600\\text{ kg} \\Rightarrow m_{\\ce{Al}} = (600/102) \\times 54 \\times 0,9 = 285,88\\text{ kg}$." },
    { id: "w39_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Dẫn $4,958\\text{ L}$ khí $\\ce{CO}$ (đkc) đi qua bột $\\ce{Fe2O3}$ dư nung nóng (hiệu suất $100\\%$). Khối lượng $\\ce{Fe}$ thu được tối đa là bao nhiêu gam?", answer: "7.47", tolerance: 0.05, solution: "$n_{\\ce{CO}} = 0,2\\text{ mol}$. $\\ce{Fe2O3} + 3\\ce{CO} \\rightarrow 2\\ce{Fe} + 3\\ce{CO2} \\Rightarrow n_{\\ce{Fe}} = 0,4/3\\text{ mol} \\Rightarrow m = (0,4/3) \\times 56 \\approx 7,47\\text{ g}$." },
    { id: "w39_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Khử hoàn toàn $16\\text{ g}$ một oxide sắt $\\ce{Fe}_x\\ce{O}_y$ bằng $\\ce{CO}$ dư thu được $11,2\\text{ g}$ $\\ce{Fe}$. Khối lượng $\\ce{O}$ trong oxide ban đầu là bao nhiêu gam?", answer: "4.8", tolerance: 0.1, solution: "$m_{\\ce{O}} = 16 - 11,2 = 4,8\\text{ g}$." },
    { id: "w39_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Dẫn luồng khí $\\ce{CO}$ đi qua $20\\text{ g}$ hỗn hợp X gồm $\\ce{Fe2O3, CuO, FeO}$ nung nóng một thời gian thu được $16,8\\text{ g}$ chất rắn Y và hỗn hợp khí Z. Dẫn toàn bộ khí Z qua dung dịch $\\ce{Ca(OH)2}$ dư thu được $m\\text{ g}$ kết tủa. Tính $m$.", solution: "Theo bảo toàn khối lượng / nguyên tử O: khối lượng chất rắn giảm chính là khối lượng O bị CO lấy đi tạo $\\ce{CO2}$.\n$m_{\\ce{O bị lấy}} = 20 - 16,8 = 3,2\\text{ g} \\Rightarrow n_{\\ce{O}} = 3,2/16 = 0,2\\text{ mol}$.\nVì $\\ce{CO} + \\text{O} \\rightarrow \\ce{CO2}$ nên $n_{\\ce{CO2}} = n_{\\ce{O}} = 0,2\\text{ mol}$.\n$n_{\\ce{CaCO3}} = n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 100 = 20\\text{ g}$.", rubric: [
      { step: "Tính được khối lượng O bị khử $= 20 - 16,8 = 3,2\\text{ g}$ ($0,2\\text{ mol}$)", points: 0.5 },
      { step: "Suy ra $n_{\\ce{CO2}} = 0,2\\text{ mol}$ và tính đúng $m_{\\ce{CaCO3}} = 20\\text{ g}$", points: 0.5 }
    ] },
    { id: "w39_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Từ $1\\text{ tấn}$ quặng zinc blende chứa $77,6\\%$ $\\ce{ZnS}$ ($M=97$), người ta sản xuất kẽm qua 2 giai đoạn: (1) Đốt $\\ce{ZnS}$ thành $\\ce{ZnO}$ (hiệu suất $90\\%$); (2) Khử $\\ce{ZnO}$ bằng than cốc $\\ce{C}$ thu $\\ce{Zn}$ (hiệu suất $80\\%$). Tính khối lượng $\\ce{Zn}$ thu được.", solution: "$m_{\\ce{ZnS}} = 776\\text{ kg} \\Rightarrow n_{\\ce{ZnS}} = 776 / 97 = 8\\text{ kmol}$.\nTheo bảo toàn Zn: $n_{\\ce{Zn}} = 8 \\times 0,9 \\times 0,8 = 5,76\\text{ kmol}$.\n$m_{\\ce{Zn}} = 5,76 \\times 65 = 374,4\\text{ kg}$.", rubric: [
      { step: "Viết đúng 2 PTHH và tính $n_{\\ce{ZnS}} = 8\\text{ kmol}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{Zn}} = 5,76\\text{ kmol}$ và $m_{\\ce{Zn}} = 374,4\\text{ kg}$", points: 0.5 }
    ] },
    { id: "w39_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Khử hoàn toàn $17,6\\text{ g}$ hỗn hợp gồm $\\ce{Fe, FeO, Fe2O3}$ cần dùng vừa đủ $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng sắt kim loại thu được sau phản ứng.", solution: "$n_{\\ce{H2}} = 4,958 / 24,79 = 0,2\\text{ mol}$.\nVì $\\ce{H2} + \\text{O (trong oxide)} \\rightarrow \\ce{H2O}$ nên $n_{\\ce{O}} = n_{\\ce{H2}} = 0,2\\text{ mol}$ ($3,2\\text{ g}$).\nKhối lượng $\\ce{Fe}$ thu được $= 17,6 - 3,2 = 14,4\\text{ g}$.", rubric: [
      { step: "Tính $n_{\\ce{H2}} = 0,2\\text{ mol}$ và suy ra $n_{\\ce{O trong oxit}} = 0,2\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Fe}} = 14,4\\text{ g}$", points: 0.5 }
    ] },
    { id: "w39_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ bột $\\ce{Al}$ tác dụng với $16\\text{ g}$ $\\ce{Fe2O3}$ ở nhiệt độ cao (phản ứng nhiệt nhôm, hiệu suất $100\\%$) thu được chất rắn X. Hòa tan hoàn toàn X trong dung dịch $\\ce{HCl}$ dư thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). Biết $\\ce{Fe2O3}$ đã phản ứng hết. Tính $m$.", solution: "$n_{\\ce{Fe2O3}} = 0,1\\text{ mol} \\Rightarrow 2\\ce{Al} + \\ce{Fe2O3} \\xrightarrow{t^\\circ} \\ce{Al2O3} + 2\\ce{Fe}$.\n$n_{\\ce{Al pư}} = 0,2\\text{ mol}$, $n_{\\ce{Fe tạo thành}} = 0,2\\text{ mol}$.\nKhi cho X tác dụng $\\ce{HCl}$ dư: $\\ce{Al2O3}$ không sinh khí, chỉ có $\\ce{Fe}$ ($0,2\\text{ mol}$) và $\\ce{Al}$ dư ($x\\text{ mol}$) sinh $\\ce{H2}$:\n$n_{\\ce{H2}} = 0,2 + 1,5x = 7,437 / 24,79 = 0,3\\text{ mol} \\Rightarrow 1,5x = 0,1 \\Rightarrow x = 1/15\\text{ mol}$.\nTổng $n_{\\ce{Al}} = 0,2 + 1/15 = 4/15\\text{ mol} \\Rightarrow m = (4/15) \\times 27 = 7,2\\text{ g}$.", rubric: [
      { step: "Viết đúng PTHH nhiệt nhôm và tính $n_{\\ce{Fe}} = 0,2\\text{ mol}$", points: 0.25 },
      { step: "Tính $n_{\\ce{H2}} = 0,3\\text{ mol}$ và lập PT $0,2 + 1,5x = 0,3$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Al}} = 7,2\\text{ g}$", points: 0.25 }
    ] },
    { id: "w39_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Vì sao trong công nghiệp luyện kim, người ta không dùng khí $\\ce{CO}$ để khử $\\ce{Al2O3}$ mà bắt buộc phải dùng phương pháp điện phân nóng chảy dù tiêu tốn rất nhiều điện năng?", solution: "Vì nhôm ($\\ce{Al}$) là kim loại hoạt động hóa học mạnh, liên kết giữa $\\ce{Al}$ và $\\ce{O}$ trong $\\ce{Al2O3}$ cực kì bền vững. Chất khử thông thường như $\\ce{C, CO, H2}$ không đủ mạnh để khử ion $\\ce{Al^{3+}}$ thành kim loại $\\ce{Al}$ (ngay cả ở nhiệt độ rất cao), nên bắt buộc phải dùng dòng điện một chiều trong điện phân nóng chảy.", rubric: [
      { step: "Nêu được $\\ce{Al}$ là kim loại mạnh, $\\ce{Al2O3}$ rất bền nhiệt", points: 0.5 },
      { step: "Giải thích các chất khử $\\ce{C, CO, H2}$ không khử được $\\ce{Al2O3}$ nên phải điện phân nóng chảy", points: 0.5 }
    ] }
  ]
};
