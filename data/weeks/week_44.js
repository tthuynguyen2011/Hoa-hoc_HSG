window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[44] = {
  week: 44,
  title: "Kiểm tra Vô cơ lớp 9 (Chuỗi phản ứng, Nhận biết & Tách chất)",
  objectives: [
    "Hệ thống hóa toàn bộ kiến thức Hóa học Vô cơ KHTN 9: Kim loại, Dãy hoạt động, Tách kim loại, Hợp kim, Phi kim và Tài nguyên vỏ Trái Đất.",
    "Thành thạo kỹ năng viết chuỗi chuyển hóa vô cơ nhiều bước kèm điều kiện phản ứng.",
    "Làm chủ phương pháp nhận biết chất rắn, dung dịch và chất khí bằng thuốc thử giới hạn.",
    "Hoàn thành bài kiểm tra tổng hợp Vô cơ lớp 9 chuẩn cấu trúc thi HSG."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu sơ đồ tư duy Vô cơ 9, đề kiểm tra 20 câu Tuần 44.",
    sessions: [
      {
        name: "Buổi 1: Tổng ôn Chuỗi phản ứng & Nhận biết Vô cơ",
        guide: "Ôn lại các chuyển hóa kinh điển của $\\ce{Fe, Al, Cu, Ca, C, S, Cl2}$ và các thuốc thử kinh điển ($\\ce{BaCl2}$, $\\ce{AgNO3}$, $\\ce{NaOH}$, $\\ce{H2SO4}$, quỳ tím).",
        pitfalls: "HS hay viết sai sản phẩm của $\\ce{Fe}$ khi cộng $\\ce{Cl2}$ vs $\\ce{HCl}$."
      },
      {
        name: "Buổi 2: Thi thử Vô cơ lớp 9 (15 câu đầu trong 45 phút)"
      },
      {
        name: "Buổi 3: Chữa bài & Luyện 5 câu HSG Vô cơ tổng hợp"
      }
    ]
  },
  lecture: [
    {
      title: "1. Bảng tổng kết Nhận biết & Chuỗi chuyển hóa Vô cơ 9",
      content: `
<table style="width:100%;border-collapse:collapse;margin:10px 0;font-size:13.5px;">
  <tr style="background:#e2e8f0;"><th style="border:1px solid #cbd5e1;padding:6px;">Ion / Chất cần nhận</th><th style="border:1px solid #cbd5e1;padding:6px;">Thuốc thử</th><th style="border:1px solid #cbd5e1;padding:6px;">Hiện tượng đặc trưng</th></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Fe^{2+}}$ / $\\ce{Fe^{3+}}$</td><td style="border:1px solid #cbd5e1;padding:6px;">Dung dịch $\\ce{NaOH}$</td><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Fe(OH)2}$ trắng xanh (hóa nâu) / $\\ce{Fe(OH)3}$ nâu đỏ</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Al^{3+}}$</td><td style="border:1px solid #cbd5e1;padding:6px;">Dung dịch $\\ce{NaOH}$ nhỏ từ từ đến dư</td><td style="border:1px solid #cbd5e1;padding:6px;">Kết tủa keo trắng $\\ce{Al(OH)3}$, sau đó tan trong kiềm dư</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{Cu^{2+}}$</td><td style="border:1px solid #cbd5e1;padding:6px;">Dung dịch $\\ce{NaOH}$</td><td style="border:1px solid #cbd5e1;padding:6px;">Kết tủa xanh lam $\\ce{Cu(OH)2}$</td></tr>
  <tr><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{SO4^{2-}}$ / $\\ce{Cl-}$</td><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{BaCl2}$ / $\\ce{AgNO3}$</td><td style="border:1px solid #cbd5e1;padding:6px;">$\\ce{BaSO4}$ trắng (không tan acid) / $\\ce{AgCl}$ trắng</td></tr>
</table>`,
      example: "Chỉ dùng dung dịch NaOH, phân biệt 3 dung dịch: MgCl₂, AlCl₃, FeCl₃.\nGiải: Nhỏ từ từ NaOH đến dư:\n- Kết tủa nâu đỏ: FeCl₃.\n- Kết tủa trắng không tan trong NaOH dư: MgCl₂.\n- Kết tủa keo trắng sau đó tan dần thành dung dịch trong suốt: AlCl₃.",
      checkpoint: {
        question: "Dung dịch chất nào sau đây tác dụng với NaOH dư tạo kết tủa rồi kết tủa tan lại?",
        options: ["A. MgCl₂", "B. FeCl₂", "C. AlCl₃", "D. CuSO₄"],
        answer: 2,
        explanation: "Al(OH)₃ là hydroxide lưỡng tính nên tan trong NaOH dư tạo NaAlO₂."
      }
    }
  ],
  questions: [
    { id: "w44_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Kim loại dẫn điện tốt nhất là:", options: ["A. Cu", "B. Ag", "C. Al", "D. Au"], answer: 1, solution: "Ag > Cu > Au > Al > Fe." },
    { id: "w44_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Dãy kim loại nào tác dụng được với dung dịch $\\ce{H2SO4}$ loãng?", options: ["A. Fe, Cu, Mg", "B. Zn, Fe, Al", "C. Ag, Cu, Pb", "D. Au, Ag, Mg"], answer: 1, solution: "Zn, Fe, Al đều đứng trước H." },
    { id: "w44_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Để điều chế kim loại $\\ce{Ca}$ từ $\\ce{CaCl2}$, phương pháp phù hợp nhất là:", options: ["A. Nhiệt luyện bằng CO", "B. Thủy luyện bằng Na", "C. Điện phân nóng chảy $\\ce{CaCl2}$", "D. Điện phân dung dịch $\\ce{CaCl2}$"], answer: 2, solution: "Ca là kim loại kiềm thổ mạnh, dùng điện phân nóng chảy." },
    { id: "w44_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Thành phần chính của quặng hematite dùng để luyện gang là:", options: ["A. $\\ce{FeS2}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Al2O3}$", "D. $\\ce{CuFeS2}$"], answer: 1, solution: "Hematite chứa $\\ce{Fe2O3}$." },
    { id: "w44_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khí nào làm mất màu dung dịch nước bromine?", options: ["A. $\\ce{CO2}$", "B. $\\ce{SO2}$", "C. $\\ce{O2}$", "D. $\\ce{N2}$"], answer: 1, solution: "$\\ce{SO2 + Br2 + 2H2O -> H2SO4 + 2HBr}$." },
    { id: "w44_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Hiện tượng xảy ra khi cho kim loại $\\ce{K}$ vào dung dịch $\\ce{FeCl3}$ là:", options: ["A. Có kim loại Fe bám vào", "B. Sủi bọt khí không màu và có kết tủa nâu đỏ", "C. Chỉ có kết tủa trắng", "D. Không phản ứng"], answer: 1, solution: "K tác dụng nước sinh $\\ce{H2}\\uparrow$ và $\\ce{KOH}$, sau đó tạo $\\ce{Fe(OH)3}\\downarrow$ nâu đỏ." },
    { id: "w44_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Gang có hàm lượng carbon cao hơn thép.", answer: true },
      { text: "Than hoạt tính có khả năng hấp phụ cao.", answer: true },
      { text: "Dùng CO khử được MgO ở nhiệt độ cao.", answer: false },
      { text: "Cu đẩy được Fe ra khỏi dung dịch FeSO₄.", answer: false }
    ], solution: "c) Sai (MgO không bị CO khử); d) Sai (Cu yếu hơn Fe)." },
    { id: "w44_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nước Javel chứa NaCl và NaClO.", answer: true },
      { text: "Thủy tinh được sản xuất từ cát trắng, đá vôi và soda.", answer: true },
      { text: "Sắt tác dụng với dung dịch HCl tạo FeCl₃.", answer: false },
      { text: "Silicon là vật liệu bán dẫn quan trọng.", answer: true }
    ], solution: "c) Sai: tạo $\\ce{FeCl2}$." },
    { id: "w44_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $11,2\\text{ g}$ $\\ce{Fe}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư thu được bao nhiêu lít khí $\\ce{H2}$ ở đkc?", answer: "4.958", tolerance: 0.05, solution: "$n_{\\ce{Fe}} = 0,2\\text{ mol} \\Rightarrow V_{\\ce{H2}} = 0,2 \\times 24,79 = 4,958\\text{ L}$." },
    { id: "w44_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Khử hoàn toàn $16\\text{ g}$ $\\ce{CuO}$ bằng khí $\\ce{CO}$ dư ở nhiệt độ cao thu được bao nhiêu gam $\\ce{Cu}$?", answer: "12.8", tolerance: 0.1, solution: "$n_{\\ce{CuO}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{Cu}} = 0,2 \\times 64 = 12,8\\text{ g}$." },
    { id: "w44_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho hỗn hợp $\\ce{Fe}$ và $\\ce{Cu}$ vào dung dịch $\\ce{AgNO3}$ dư. Sau khi phản ứng hoàn toàn, dung dịch thu được chứa muối nào?", options: ["A. $\\ce{Fe(NO3)2, Cu(NO3)2}$", "B. $\\ce{Fe(NO3)3, Cu(NO3)2, AgNO3}$", "C. Chỉ có $\\ce{AgNO3}$", "D. $\\ce{Fe(NO3)2, AgNO3}$"], answer: 1, solution: "Vì $\\ce{AgNO3}$ dư nên $\\ce{Fe^{2+}}$ bị oxi hóa tiếp lên $\\ce{Fe^{3+}}$, dung dịch có $\\ce{Fe(NO3)3, Cu(NO3)2, AgNO3}$ dư." },
    { id: "w44_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Chỉ dùng một thuốc thử nào sau đây để phân biệt 4 dung dịch: $\\ce{HCl, NaOH, Ba(OH)2, Na2SO4}$?", options: ["A. Quỳ tím", "B. Phenolphthalein", "C. Dung dịch $\\ce{Na2CO3}$", "D. Dung dịch $\\ce{H2SO4}$"], answer: 0, solution: "Quỳ tím chia 3 nhóm: đỏ ($\\ce{HCl}$), tím ($\\ce{Na2SO4}$), xanh ($\\ce{NaOH, Ba(OH)2}$). Sau đó dùng chính $\\ce{Na2SO4}$ vừa nhận được nhỏ vào nhóm xanh: có kết tủa trắng là $\\ce{Ba(OH)2}$." },
    { id: "w44_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Hấp thụ hoàn toàn $0,2\\text{ mol}$ $\\ce{CO2}$ vào dung dịch chứa $0,3\\text{ mol}$ $\\ce{NaOH}$. Cô cạn dung dịch thu được bao nhiêu gam muối khan?", options: ["A. $19\\text{ g}$", "B. $21,2\\text{ g}$", "C. $16,8\\text{ g}$", "D. $25,2\\text{ g}$"], answer: 0, solution: "Tạo $0,1\\text{ mol}$ $\\ce{Na2CO3}$ ($10,6\\text{ g}$) và $0,1\\text{ mol}$ $\\ce{NaHCO3}$ ($8,4\\text{ g}$) $\\Rightarrow 19\\text{ g}$." },
    { id: "w44_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $9,2\\text{ g}$ hỗn hợp $\\ce{Mg}$ và $\\ce{Fe}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư thu được $0,3\\text{ mol}$ $\\ce{H2}$. Khối lượng muối khan thu được là bao nhiêu gam?", answer: "30.5", tolerance: 0.1, solution: "$m_{\\text{muối}} = 9,2 + 71 \\times 0,3 = 30,5\\text{ g}$." },
    { id: "w44_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Nung $50\\text{ g}$ $\\ce{CaCO3}$ với hiệu suất $80\\%$ thu được bao nhiêu gam chất rắn còn lại?", answer: "32.4", tolerance: 0.2, solution: "$n_{\\ce{CO2}} = 0,5 \\times 0,8 = 0,4\\text{ mol}$ ($17,6\\text{ g}$) $\\Rightarrow m_{\\text{rắn}} = 50 - 17,6 = 32,4\\text{ g}$." },
    { id: "w44_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hoàn thành chuỗi chuyển hóa sau (ghi rõ điều kiện): $\\ce{FeS2 -> SO2 -> SO3 -> H2SO4 -> FeSO4 -> Fe(OH)2 -> Fe2O3 -> Fe}$.", solution: "1) $4\\ce{FeS2} + 11\\ce{O2} \\xrightarrow{t^\\circ} 2\\ce{Fe2O3} + 8\\ce{SO2}$\n2) $2\\ce{SO2} + \\ce{O2} \\xrightleftharpoons[t^\\circ, \\ce{V2O5}]{} 2\\ce{SO3}$\n3) $\\ce{SO3 + H2O -> H2SO4}$\n4) $\\ce{Fe + H2SO4 (l) -> FeSO4 + H2 ^}$\n5) $\\ce{FeSO4 + 2NaOH -> Fe(OH)2 v + Na2SO4}$\n6) $4\\ce{Fe(OH)2} + \\ce{O2} \\xrightarrow{t^\\circ} 2\\ce{Fe2O3} + 4\\ce{H2O}$\n7) $\\ce{Fe2O3 + 3CO ->[t^\\circ] 2Fe + 3CO2}$.", rubric: [
      { step: "Viết đúng các PTHH 1, 2, 3, 4", points: 0.5 },
      { step: "Viết đúng các PTHH 5, 6, 7 (đúng phản ứng oxi hóa $\\ce{Fe(OH)2}$ trong không khí)", points: 0.5 }
    ] },
    { id: "w44_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Không dùng thêm thuốc thử nào khác, hãy nhận biết 4 dung dịch mất nhãn sau: $\\ce{NaOH, HCl, MgCl2, AlCl3}$.", solution: "Cho các dung dịch tác dụng từng đôi một:\n- Tạo kết tủa trắng, sau đó kết tủa tan khi dư một chất: cặp $\\ce{NaOH}$ và $\\ce{AlCl3}$.\n- Tạo kết tủa trắng không tan khi dư: cặp $\\ce{NaOH}$ và $\\ce{MgCl2}$.\nVậy chất tạo kết tủa với 2 chất khác là $\\ce{NaOH}$; chất tạo kết tủa rồi tan là $\\ce{AlCl3}$; chất tạo kết tủa không tan là $\\ce{MgCl2}$; chất không hiện tượng với chất nào là $\\ce{HCl}$ (kiểm chứng bằng cách nhỏ $\\ce{HCl}$ vào kết tủa thấy tan).", rubric: [
      { step: "Lập bảng tác dụng từng đôi một", points: 0.5 },
      { step: "Biện luận nhận đúng cả 4 dung dịch và viết PTHH", points: 0.5 }
    ] },
    { id: "w44_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $13,44\\text{ g}$ bột $\\ce{Fe}$ vào $200\\text{ mL}$ dung dịch chứa $\\ce{CuSO4}$ $1\\text{ M}$ và $\\ce{H2SO4}$ $0,5\\text{ M}$. Sau khi các phản ứng xảy ra hoàn toàn, thu được $m\\text{ g}$ chất rắn và $V\\text{ L}$ khí (đkc). Tính $m$ và $V$ (biết $\\ce{CuSO4}$ phản ứng trước $\\ce{H2SO4}$ loãng hoặc ngược lại đều cho kết quả cuối cùng như nhau nếu $\\ce{Fe}$ dư).", solution: "$n_{\\ce{Fe}} = 13,44 / 56 = 0,24\\text{ mol}$; $n_{\\ce{CuSO4}} = 0,2\\text{ mol}$; $n_{\\ce{H2SO4}} = 0,1\\text{ mol}$.\nTổng số mol $\\ce{Fe}$ cần để phản ứng hết cả 2 chất $= 0,2 + 0,1 = 0,3\\text{ mol} > 0,24\\text{ mol} \\Rightarrow$ $\\ce{Fe}$ hết!\nTheo thứ tự tính oxi hóa ($\\ce{Cu^{2+} > H^+}$): $\\ce{Fe}$ khử hết $0,2\\text{ mol}$ $\\ce{CuSO4}$ tạo $0,2\\text{ mol}$ $\\ce{Cu}$ ($12,8\\text{ g}$). Lượng $\\ce{Fe}$ còn lại $= 0,24 - 0,2 = 0,04\\text{ mol}$ tác dụng với $\\ce{H2SO4}$ tạo $0,04\\text{ mol}$ $\\ce{H2}$ ($V = 0,04 \\times 24,79 = 0,9916\\text{ L}$).", rubric: [
      { step: "Tính đúng số mol các chất và xác định $\\ce{Fe}$ hết", points: 0.25 },
      { step: "Xác định $\\ce{Fe}$ phản ứng $\\ce{CuSO4}$ trước tạo $12,8\\text{ g}$ $\\ce{Cu}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{H2}} = 0,04\\text{ mol}$ và $V = 0,9916\\text{ L}$", points: 0.25 }
    ] },
    { id: "w44_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan hoàn toàn $12,1\\text{ g}$ hỗn hợp bột $\\ce{CuO}$ và $\\ce{ZnO}$ cần vừa đủ $150\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Tính phần trăm khối lượng mỗi oxide trong hỗn hợp.", solution: "$n_{\\ce{HCl}} = 0,3\\text{ mol} \\Rightarrow n_{\\text{oxide}} = 0,15\\text{ mol}$.\nGọi $x, y$ là số mol $\\ce{CuO}$ ($80$) và $\\ce{ZnO}$ ($81$): $x + y = 0,15$; $80x + 81y = 12,1$.\nGiải hệ: $y = 12,1 - 12 = 0,1\\text{ mol}$ ($8,1\\text{ g} \\approx 66,94\\%$); $x = 0,05\\text{ mol}$ ($4,0\\text{ g} \\approx 33,06\\%$).", rubric: [
      { step: "Lập đúng hệ phương trình", points: 0.5 },
      { step: "Giải đúng $m_{\\ce{CuO}} = 4\\text{ g}$ ($33,06\\%$) và $m_{\\ce{ZnO}} = 8,1\\text{ g}$ ($66,94\\%$)", points: 0.5 }
    ] },
    { id: "w44_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Từ hỗn hợp muối rắn gồm $\\ce{NaCl, CaCl2, MgCl2}$, hãy trình bày phương pháp hóa học để thu được $\\ce{NaCl}$ tinh khiết.", solution: "1) Hòa tan hỗn hợp vào nước dư.\n2) Thêm dung dịch $\\ce{Na2CO3}$ dư vào để kết tủa hết $\\ce{Ca^{2+}}$ và $\\ce{Mg^{2+}}$ dưới dạng $\\ce{CaCO3}\\downarrow$ và $\\ce{MgCO3}\\downarrow$, lọc bỏ kết tủa.\n3) Nước lọc chứa $\\ce{NaCl}$ và $\\ce{Na2CO3}$ dư. Thêm dung dịch $\\ce{HCl}$ dư để chuyển hết $\\ce{Na2CO3}$ thành $\\ce{NaCl} + \\ce{CO2}\\uparrow + \\ce{H2O}$.\n4) Cô cạn dung dịch (khi đun nóng $\\ce{HCl}$ dư và $\\ce{H2O}$ bay hơi hết) thu được $\\ce{NaCl}$ tinh khiết.", rubric: [
      { step: "Dùng $\\ce{Na2CO3}$ dư kết tủa hết $\\ce{Ca^{2+}}$ và $\\ce{Mg^{2+}}$", points: 0.5 },
      { step: "Dùng $\\ce{HCl}$ dư loại $\\ce{Na2CO3}$ dư rồi cô cạn thu $\\ce{NaCl}$ tinh khiết", points: 0.5 }
    ] }
  ]
};
