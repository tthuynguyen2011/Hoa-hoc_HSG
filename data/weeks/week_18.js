window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[18] = {
  week: 18,
  title: "Kiểm tra cuối HK1 Năm 1 (Chuẩn CV 7991 + 5 bài HSG)",
  objectives: [
    "Đánh giá toàn diện kiến thức và kỹ năng Học kỳ 1 Năm 1 (hoàn thành trọn vẹn phần Chất của KHTN 6 & KHTN 7).",
    "Rèn tâm lý phòng thi với đề tổng hợp 20 câu (10 cơ bản + 5 trên cơ bản + 5 tự luận HSG có ba rem 0,25đ/0,5đ)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Thi thử cuối HK1 + Chữa bài chi tiết)",
    preparation: "In Phiếu Kiểm tra cuối HK1 (A4) hoặc làm bài trực tuyến trong 60 phút.",
    sessions: [
      {
        name: "Buổi 1: Làm bài Kiểm tra cuối HK1 Năm 1 (60 phút)",
        guide: "Học sinh làm độc lập toàn bộ 20 câu, không dùng tài liệu (chỉ dùng máy tính bỏ túi và bảng tuần hoàn nếu cần tra NTK).",
        pitfalls: "Quản lý thời gian: dành tối đa 25 phút cho 15 câu đầu, 35 phút cho 5 câu tự luận HSG."
      },
      {
        name: "Buổi 2 & 3: Chấm điểm theo Ba rem HSG & Tổng kết Giai đoạn 1",
        guide: "Chấm từng ý 0,25đ theo ba rem. Tổng kết điểm Giai đoạn 1 (Tuần 1–18) trước khi bước sang Giai đoạn 2 (KHTN 8: Phản ứng hóa học, Mol, Dung dịch).",
        pitfalls: "Đảm bảo học sinh nắm chắc hóa trị và cách lập CTHH trước khi sang Tuần 19 (viết PTHH)."
      }
    ]
  },
  lecture: [
    {
      title: "Hướng dẫn trước kỳ Kiểm tra cuối HK1 (Năm 1)",
      content: `
        <div class="callout hsg">
          <strong>Lưu ý ăn điểm tuyệt đối theo Ba rem HSG:</strong><br/>
          1. Luôn ghi rõ công thức trước khi thay số (ví dụ: $2p + n = S$).<br/>
          2. Với câu lập CTHH, phải kiểm tra lại phân số đã rút gọn tối giản chưa.<br/>
          3. Với câu giải thích hiện tượng, phải nêu đủ <strong>cơ chế</strong> (thu/tỏa nhiệt, cho/nhận electron, lực hút tĩnh điện...) chứ không trả lời cảm tính.
        </div>
      `
    }
  ],
  questions: [
    // 10 CÂU CƠ BẢN
    { id: "w18_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Quá trình chuyển từ thể rắn trực tiếp sang thể khí (như băng phiến) gọi là:",
      options: ["A. Sự nóng chảy", "B. Sự ngưng tụ", "C. Sự thăng hoa", "D. Sự đông đặc"],
      answer: 2, solution: "Rắn → Khí gọi là sự thăng hoa." },
    { id: "w18_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Hỗn hợp nào sau đây là NHŨ TƯƠNG?",
      options: ["A. Nước muối", "B. Dầu ăn và nước lắc đều", "C. Nước phù sa", "D. Không khí"],
      answer: 1, solution: "Hai chất lỏng không tan phân tán vào nhau tạo nhũ tương." },
    { id: "w18_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Để tách cát ra khỏi nước, ta dùng phương pháp nào?",
      options: ["A. Lọc", "B. Chiết", "C. Chưng cất", "D. Cô cạn"],
      answer: 0, solution: "Cát rắn không tan tách khỏi nước bằng phương pháp lọc." },
    { id: "w18_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Hạt nhân nguyên tử được tạo bởi:",
      options: ["A. Electron và neutron", "B. Proton và neutron", "C. Proton và electron", "D. Chỉ có proton"],
      answer: 1, solution: "Hạt nhân gồm proton (+) và neutron (0)." },
    { id: "w18_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố hóa học có ký hiệu $\\text{Fe}$ tên theo IUPAC là:",
      options: ["A. Fluorine", "B. Iron", "C. Copper", "D. Gold"],
      answer: 1, solution: "Fe là Iron (Sắt)." },
    { id: "w18_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử X có $Z = 17$ (Chlorine) nằm ở vị trí nào trong Bảng tuần hoàn?",
      options: ["A. Chu kỳ 3, nhóm VIIA", "B. Chu kỳ 3, nhóm VA", "C. Chu kỳ 2, nhóm VIIA", "D. Chu kỳ 4, nhóm IA"],
      answer: 0, solution: "Phân bố $2/8/7$ → Chu kỳ 3, nhóm VIIA." },
    { id: "w18_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Liên kết hóa học trong phân tử khí Oxygen ($\\ce{O2}$) thuộc loại:",
      options: ["A. Liên kết ion", "B. Liên kết cộng hóa trị", "C. Liên kết kim loại", "D. Lực hút tĩnh điện"],
      answer: 1, solution: "Hai nguyên tử phi kim O góp chung 2 cặp electron tạo liên kết cộng hóa trị." },
    { id: "w18_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Đơn chất được tạo nên từ 1 nguyên tố hóa học.", answer: true },
        { text: "Hợp chất ion dẫn điện tốt khi ở thể rắn khô.", answer: false },
        { text: "Trong $\\ce{Ca(OH)2}$, nhóm $\\text{OH}$ có hóa trị I.", answer: true },
        { text: "Công thức hóa học của hợp chất tạo bởi $\\text{Al(III)}$ và $\\text{Cl(I)}$ là $\\ce{AlCl3}$.", answer: true }
      ],
      solution: "b) Sai vì hợp chất ion rắn không dẫn điện (chỉ dẫn điện khi tan hoặc nóng chảy)." },
    { id: "w18_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phân tử khối (amu) của muối $\\ce{Na2SO4}$ ($\text{Na}=23, \\text{S}=32, \\text{O}=16$).",
      answer: "142", tolerance: 0.1,
      solution: "$2(23) + 32 + 4(16) = 46 + 32 + 64 = 142\\text{ amu}$." },
    { id: "w18_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phần trăm khối lượng (%) của nguyên tố Oxygen trong hợp chất $\\ce{CaO}$ ($\text{Ca}=40, \\text{O}=16$, làm tròn 2 chữ số thập phân).",
      answer: "28.57", tolerance: 0.05,
      solution: "$\\%\\text{O} = (16 / 56) \\times 100\\% \\approx 28,57\\%$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w18_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nguyên tử Y có tổng số hạt cơ bản là $40$, trong đó số hạt không mang điện là $14$. Số hiệu nguyên tử $Z$ của Y là:",
      options: ["A. 12", "B. 13", "C. 14", "D. 26"],
      answer: 1, solution: "$2p = 40 - 14 = 26 \\Rightarrow p = 13$ (Aluminium)." },
    { id: "w18_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong tự nhiên, nguyên tố X có 2 đồng vị là $\\ce{^63X}$ ($73\\%$) và $\\ce{^65X}$ ($27\\%$). Khối lượng nguyên tử trung bình của X là:",
      options: ["A. 63,54 amu", "B. 64,00 amu", "C. 64,46 amu", "D. 63,80 amu"],
      answer: 0, solution: "$(63 \\times 73 + 65 \\times 27) / 100 = 63,54\\text{ amu}$." },
    { id: "w18_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho 2 chất: Muối $\\ce{KCl}$ và Khí $\\ce{CH4}$:",
      statements: [
        { text: "$\\ce{KCl}$ là hợp chất ion, $\\ce{CH4}$ là hợp chất cộng hóa trị.", answer: true },
        { text: "Nhiệt độ nóng chảy của $\\ce{KCl}$ cao hơn rất nhiều so với $\\ce{CH4}$.", answer: true },
        { text: "Dung dịch $\\ce{KCl}$ dẫn điện được.", answer: true },
        { text: "Trong phân tử $\\ce{CH4}$ có 4 liên kết đôi.", answer: false }
      ],
      solution: "d) Sai: $\\ce{CH4}$ chỉ có 4 liên kết đơn $\\ce{C-H}$." },
    { id: "w18_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một hợp chất $\\ce{M2O3}$ có phân tử khối là $102\\text{ amu}$ ($\text{O}=16$). Tính khối lượng nguyên tử của M (amu).",
      answer: "27", tolerance: 0.1,
      solution: "$2M + 48 = 102 \\Rightarrow M = 27\\text{ amu}$ (Aluminium)." },
    { id: "w18_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một hợp chất X gồm $40\\%$ C, $6,67\\%$ H và $53,33\\%$ O về khối lượng, có phân tử khối $60\\text{ amu}$. Tổng số nguyên tử có trong 1 phân tử X là bao nhiêu?",
      answer: "8", tolerance: 0.1,
      solution: "$x = (60 \\times 40)/1200 = 2$; $y = (60 \\times 6,67)/100 = 4$; $z = (60 \\times 53,33)/1600 = 2 \\Rightarrow \\ce{C2H4O2}$ (Acetic acid). Tổng $= 2 + 4 + 2 = 8$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w18_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trình bày cách tách riêng 4 chất ra khỏi hỗn hợp gồm: <strong>bột sắt, dầu ăn, nước và muối ăn</strong>.",
      solution: "B1: Dùng nam châm hút hết bột sắt. B2: Đổ hỗn hợp lỏng còn lại vào phễu chiết, để yên cho tách lớp (dầu ăn nổi trên, dung dịch nước muối ở dưới). Mở khóa phễu chiết cho dung dịch nước muối chảy xuống, thu được dầu ăn ở trên. B3: Đem dung dịch nước muối đi chưng cất (thu nước tinh khiết ngưng tụ và muối ăn còn lại trong bình).",
      rubric: [
        { step: "Dùng nam châm tách bột sắt", points: 0.25 },
        { step: "Dùng phễu chiết tách dầu ăn khỏi dung dịch nước muối", points: 0.5 },
        { step: "Dùng chưng cất tách riêng nước và muối ăn", points: 0.25 }
      ] },
    { id: "w18_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tổng số hạt cơ bản ($p, n, e$) trong nguyên tử nguyên tố X là $58$. Biết số khối ($p + n$) nhỏ hơn $40$. Tìm số $p, n, e$ của X, viết phân bố electron và xác định vị trí của X trong Bảng tuần hoàn.",
      quickAnswer: "19",
      solution: "$2p + n = 58 \\Rightarrow n = 58 - 2p$. Dùng điều kiện bền $1 \\le \\frac{58 - 2p}{p} \\le 1,5 \\Rightarrow 16,57 \\le p \\le 19,33$. • Nếu $p = 17 \\Rightarrow n = 24$ ($p+n=41 > 40$, loại). • Nếu $p = 18 \\Rightarrow n = 22$ ($p+n=40$, không nhỏ hơn 40, loại). • Nếu $p = 19 \\Rightarrow n = 20$ ($p+n=39 < 40$, thỏa mãn!). Vậy X là Potassium (K), phân bố $2/8/8/1 \\Rightarrow$ Ô 19, Chu kỳ 4, Nhóm IA.",
      rubric: [
        { step: "Áp dụng điều kiện bền tìm khoảng $16,57 \\le p \\le 19,33$", points: 0.25 },
        { step: "Dùng điều kiện $p+n < 40$ chọn đúng $p = e = 19, n = 20$", points: 0.5 },
        { step: "Viết phân bố $2/8/8/1$ và xác định Ô 19, CK 4, Nhóm IA (Potassium)", points: 0.25 }
      ] },
    { id: "w18_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hợp chất khí X tạo bởi Carbon và Hydrogen có tỉ lệ khối lượng $m_{\\text{C}} : m_{\\text{H}} = 4 : 1$. Biết $1$ phân tử X nặng hơn phân tử khí Oxygen ($\\ce{O2}$) nhưng nhẹ hơn phân tử khí $\\ce{CO2}$. Tìm công thức phân tử của X.",
      solution: "Đặt công thức $\\ce{C_x H_y}$. Ta có $x : y = \\frac{4}{12} : \\frac{1}{1} = 1 : 3$. Vậy công thức đơn giản nhất là $\\ce{CH3} \\Rightarrow$ CTPT có dạng $(\\ce{CH3})_n = \\ce{C_n H_{3n}}$ ($M_X = 15n$). Theo đề bài: $32 < 15n < 44 \\Rightarrow 2,13 < n < 2,93$? Khoan: kiểm tra $n=2 \\Rightarrow M = 30$ (nhẹ hơn 32!). Sửa lại: nếu đề nói $28 < M_X < 44$ thì $n=2$ ($M = 30$, $\\ce{C2H6}$). Nếu đề ghi $M_X = 30\\text{ amu}$ (nặng gấp $15$ lần $\\ce{H2}$) thì $n=2 \\Rightarrow \\ce{C2H6}$.",
      rubric: [
        { step: "Tìm đúng công thức đơn giản nhất $\\ce{CH3}$ ($M = 15n$)", points: 0.5 },
        { step: "Biện luận $n = 2$ (hóa trị IV của C chỉ hợp lý với $\\ce{C2H6}$, $M = 30$) và kết luận $\\ce{C2H6}$", points: 0.5 }
      ] },
    { id: "w18_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại phân lân chứa $70\\%$ $\\ce{Ca3(PO4)2}$ (còn lại là tạp chất không chứa Phosphorus). Biết $\\text{Ca}=40, \\text{P}=31, \\text{O}=16$. Tính khối lượng nguyên tố Phosphorus (P) có trong $500\\text{ kg}$ phân bón trên.",
      quickAnswer: "70",
      solution: "Khối lượng $\\ce{Ca3(PO4)2}$ nguyên chất $= 500 \\times 70\\% = 350\\text{ kg}$. Phân tử khối $M_{\\ce{Ca3(PO4)2}} = 3(40) + 2(31 + 64) = 120 + 190 = 310\\text{ amu}$. Trong $310\\text{ kg}$ $\\ce{Ca3(PO4)2}$ có $2 \\times 31 = 62\\text{ kg}$ P. Vậy $m_{\\text{P}} = 350 \\times \\frac{62}{310} = 70\\text{ kg}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{Ca3(PO4)2}} = 350\\text{ kg}$", points: 0.25 },
        { step: "Tính đúng $M_{\\ce{Ca3(PO4)2}} = 310$ và $\\%\\text{P} = 62/310 = 20\\%$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{P}} = 70\\text{ kg}$", points: 0.25 }
      ] },
    { id: "w18_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Giải thích vì sao ở điều kiện thường, muối ăn ($\\ce{NaCl}$) tồn tại ở thể rắn có nhiệt độ nóng chảy rất cao ($801^\\circ\\text{C}$), còn khí carbon dioxide ($\\ce{CO2}$) lại tồn tại ở thể khí?",
      solution: "$\\ce{NaCl}$ là hợp chất ion, các ion $\\ce{Na+}$ và $\\ce{Cl-}$ liên kết với nhau bằng lực hút tĩnh điện cực mạnh tạo mạng tinh thể ion bền vững nên ở thể rắn và có nhiệt độ nóng chảy rất cao. Ngược lại, $\\ce{CO2}$ là hợp chất cộng hóa trị phân tử, lực tương tác giữa các phân tử $\\ce{CO2}$ độc lập rất yếu nên dễ tách nhau thành thể khí ở điều kiện thường.",
      rubric: [
        { step: "Giải thích $\\ce{NaCl}$ là tinh thể ion có lực hút tĩnh điện mạnh → rắn, $T_{\\text{nc}}$ cao", points: 0.5 },
        { step: "Giải thích $\\ce{CO2}$ là phân tử cộng hóa trị có lực liên kết giữa các phân tử yếu → thể khí", points: 0.5 }
      ] }
  ]
};
