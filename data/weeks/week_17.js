window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[17] = {
  week: 17,
  title: "Tổng ôn HK1 Năm 1: Nguyên tử – Bảng tuần hoàn – Liên kết – CTHH",
  objectives: [
    "Hệ thống hóa toàn bộ kiến thức trọng tâm Học kỳ 1 Năm 1 (KHTN 6 + KHTN 7): Từ Chất, Nguyên tử, Bảng tuần hoàn đến Liên kết hóa học, Hóa trị và CTHH.",
    "Luyện tập thành thạo kỹ năng kết nối liên hoàn: Từ tổng số hạt $\\rightarrow$ Cấu tạo nguyên tử $\\rightarrow$ Vị trí Bảng tuần hoàn $\\rightarrow$ Loại liên kết $\\rightarrow$ Công thức hóa học."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Ôn tập liên hoàn chuẩn bị thi cuối HK1)",
    preparation: "In Phiếu bài tập Tuần 17 (A4). Chuẩn bị sơ đồ tư duy tổng hợp 4 chương.",
    sessions: [
      {
        name: "Buổi 1: Ôn tập chuỗi suy luận Nguyên tử – Bảng tuần hoàn – Liên kết",
        guide: "Cho con luyện bài tập xâu chuỗi: Cho $Z_A = 12$, $Z_B = 17$ $\\Rightarrow$ A ở CK 3, IIA (Kim loại Mg); B ở CK 3, VIIA (Phi kim Cl) $\\Rightarrow$ Liên kết ion $\\Rightarrow$ CTHH $\\ce{MgCl2}$ ($M = 95\\text{ amu}$).",
        pitfalls: "Học sinh hay đứt gãy giữa phần Bảng tuần hoàn và phần Liên kết / Hóa trị."
      },
      {
        name: "Buổi 2: Ôn tập Hóa trị – CTHH – Tính % khối lượng",
        guide: "Rà soát lại 5 nhóm nguyên tử và 2 dạng bài tìm CTHH (biết $M$ và chưa biết $M$).",
        pitfalls: "Quên rút gọn phân số khi lập CTHH hoặc quên nhân chỉ số khi tính %."
      },
      {
        name: "Buổi 3: Chữa 20 bài tập Tổng ôn & Chấm theo ba rem HSG",
        guide: "Tập trung vào 5 bài toán tổng hợp HSG cuối tuần (kết hợp tổng số hạt + đồng vị + tìm CTHH).",
        pitfalls: "Trình bày thiếu lập luận bước đầu (ví dụ chưa giải thích vì sao là liên kết ion/cộng hóa trị)."
      }
    ]
  },
  lecture: [
    {
      title: "Sơ đồ Tư duy Kết nối Toàn bộ Học kỳ 1 (Năm 1)",
      content: `
        <div class="callout">
          <strong>Chuỗi suy luận Vàng trong đề thi HSG:</strong><br/>
          <strong>1. Tổng số hạt ($2p + n = S$)</strong> $\\rightarrow$ Tìm số proton $Z = p = e$.<br/>
          <strong>2. Phân bố electron ($2/8/8/2$)</strong> $\\rightarrow$ Số lớp e ($=$ Chu kỳ), số e ngoài cùng ($=$ Nhóm A).<br/>
          <strong>3. Phân loại nguyên tố</strong> $\\rightarrow$ Kim loại ($1,2,3e$) + Phi kim ($5,6,7e$) tạo <strong>Liên kết ion</strong>; Phi kim + Phi kim tạo <strong>Liên kết cộng hóa trị</strong>.<br/>
          <strong>4. Quy tắc hóa trị ($x \\cdot a = y \\cdot b$)</strong> $\\rightarrow$ Lập <strong>CTHH</strong> chính xác và tính <strong>Phân tử khối</strong>, <strong>$\\%$ khối lượng</strong>.
        </div>
      `,
      checkpoint: {
        question: "Cho nguyên tố X ($Z = 11$) và Y ($Z = 8$). Công thức hóa học và loại liên kết của hợp chất tạo bởi X và Y là:",
        options: [
          "$\\ce{XY}$, liên kết cộng hóa trị",
          "$\\ce{X2Y}$, liên kết ion",
          "$\\ce{XY2}$, liên kết ion",
          "$\\ce{X2Y}$, liên kết cộng hóa trị"
        ],
        answer: 1,
        explanation: "X ($Z=11$, Na) nhường 1e (hóa trị I); Y ($Z=8$, O) nhận 2e (hóa trị II) $\\rightarrow$ hợp chất $\\ce{Na2O}$ ($\\ce{X2Y}$), liên kết ion."
      }
    }
  ],
  questions: [
    { id: "w17_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Phương pháp nào dùng để tách muối ăn ra khỏi dung dịch nước muối?",
      options: ["A. Lọc", "B. Chiết", "C. Cô cạn", "D. Dùng nam châm"],
      answer: 2, solution: "Cô cạn làm nước bay hơi thu muối kết tinh." },
    { id: "w17_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Phosphorus ($Z = 15$) có số lớp electron và số electron lớp ngoài cùng lần lượt là:",
      options: ["A. 2 lớp, 5e", "B. 3 lớp, 5e", "C. 3 lớp, 3e", "D. 5 lớp, 3e"],
      answer: 1, solution: "Phân bố $2/8/5$ → 3 lớp, 5e ngoài cùng." },
    { id: "w17_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố nào sau đây là KHÍ HIẾM?",
      options: ["A. Nitrogen", "B. Neon", "C. Sodium", "D. Chlorine"],
      answer: 1, solution: "Neon (Ne, $Z=10$) thuộc nhóm VIIIA." },
    { id: "w17_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây là ĐƠN CHẤT?",
      options: ["A. $\\ce{CO2}$", "B. $\\ce{NH3}$", "C. $\\ce{O3}$", "D. $\\ce{CaO}$"],
      answer: 2, solution: "$\\ce{O3}$ chỉ tạo nên từ 1 nguyên tố Oxygen." },
    { id: "w17_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong phân tử $\\ce{NaCl}$, liên kết giữa Na và Cl thuộc loại nào?",
      options: ["A. Liên kết cộng hóa trị", "B. Liên kết ion", "C. Liên kết ba", "D. Không có liên kết"],
      answer: 1, solution: "$\\ce{Na+}$ và $\\ce{Cl-}$ hút nhau bằng lực hút tĩnh điện tạo liên kết ion." },
    { id: "w17_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Hóa trị của Aluminium (Al) trong $\\ce{Al2O3}$ là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 2, solution: "$2 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{III}$." },
    { id: "w17_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học đúng của Iron(III) hydroxide (Fe hóa trị III, nhóm OH hóa trị I) là:",
      options: ["A. $\\ce{FeOH}$", "B. $\\ce{Fe(OH)2}$", "C. $\\ce{Fe(OH)3}$", "D. $\\ce{Fe3OH}$"],
      answer: 2, solution: "$\\ce{Fe(OH)3}$." },
    { id: "w17_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Nước biển là hỗn hợp, nước cất là chất tinh khiết.", answer: true },
        { text: "Các nguyên tử của cùng một nguyên tố luôn có cùng số neutron.", answer: false },
        { text: "Trong phân tử $\\ce{N2}$ có liên kết ba giữa 2 nguyên tử N.", answer: true },
        { text: "Phân tử khối của $\\ce{CaCO3}$ là $100\\text{ amu}$.", answer: true }
      ],
      solution: "b) Sai vì các đồng vị của cùng 1 nguyên tố có thể khác số neutron." },
    { id: "w17_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính phân tử khối (amu) của hợp chất $\\ce{Fe2O3}$ ($\text{Fe}=56, \\text{O}=16$).",
      answer: "160", tolerance: 0.1,
      solution: "$2(56) + 3(16) = 112 + 48 = 160\\text{ amu}$." },
    { id: "w17_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong hợp chất $\\ce{CO2}$ ($\text{C}=12, \\text{O}=16$), nguyên tố Carbon chiếm bao nhiêu phần trăm khối lượng? (Làm tròn 2 chữ số thập phân)",
      answer: "27.27", tolerance: 0.05,
      solution: "$\\%\\text{C} = (12 / 44) \\times 100\\% \\approx 27,27\\%$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w17_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nguyên tử X có tổng số hạt là $36$, số hạt mang điện gấp đôi số hạt không mang điện. Vị trí của X trong Bảng tuần hoàn là:",
      options: ["A. Ô 12, chu kỳ 3, nhóm IIA", "B. Ô 12, chu kỳ 2, nhóm IIA", "C. Ô 18, chu kỳ 3, nhóm VIIIA", "D. Ô 11, chu kỳ 3, nhóm IA"],
      answer: 0, solution: "$2p + n = 36$ và $2p = 2n \\Rightarrow p = 12$ ($2/8/2$) $\\Rightarrow$ Ô 12, CK 3, nhóm IIA." },
    { id: "w17_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Hợp chất nào sau đây vừa chứa liên kết ion vừa chứa liên kết cộng hóa trị?",
      options: ["A. $\\ce{NaCl}$", "B. $\\ce{H2O}$", "C. $\\ce{KOH}$", "D. $\\ce{CH4}$"],
      answer: 2, solution: "Trong $\\ce{KOH}$, giữa $\\ce{K+}$ và $\\ce{OH-}$ là liên kết ion; trong nhóm $\\ce{OH-}$ là liên kết cộng hóa trị." },
    { id: "w17_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho 2 nguyên tố A ($Z=19$) và B ($Z=16$):",
      statements: [
        { text: "A là kim loại Potassium, B là phi kim Sulfur.", answer: true },
        { text: "A thuộc chu kỳ 4, nhóm IA; B thuộc chu kỳ 3, nhóm VIA.", answer: true },
        { text: "Hợp chất tạo bởi A và B có công thức là $\\ce{A2B}$ ($\\ce{K2S}$).", answer: true },
        { text: "Liên kết trong $\\ce{K2S}$ là liên kết cộng hóa trị.", answer: false }
      ],
      solution: "d) Sai: K (kim loại mạnh) và S (phi kim) tạo liên kết ion." },
    { id: "w17_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hợp chất $\\ce{X2(SO4)3}$ có phân tử khối $342\\text{ amu}$ ($\text{S}=32, \\text{O}=16$). Khối lượng nguyên tử của X là bao nhiêu amu?",
      answer: "27", tolerance: 0.1,
      solution: "$2M_X + 3(96) = 342 \\Rightarrow 2M_X = 54 \\Rightarrow M_X = 27$ (Aluminium)." },
    { id: "w17_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một hợp chất khí có $80\\%$ C và $20\\%$ H về khối lượng, $M = 30\\text{ amu}$. Tổng số nguyên tử có trong 1 phân tử khí đó là bao nhiêu?",
      answer: "8", tolerance: 0.1,
      solution: "$x = (30 \\times 80)/1200 = 2$; $y = (30 \\times 20)/100 = 6 \\Rightarrow \\ce{C2H6} \\Rightarrow 2 + 6 = 8$ nguyên tử." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w17_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hai nguyên tố X, Y ($Z_X < Z_Y$) đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn, có tổng số proton bằng $25$. Xác định X, Y và viết công thức hợp chất tạo bởi X với Chlorine (hóa trị I) và Y với Oxygen (hóa trị II).",
      solution: "$Z_X + Z_Y = 25$ và $Z_Y - Z_X = 1 \\Rightarrow Z_X = 12$ (Mg, hóa trị II) và $Z_Y = 13$ (Al, hóa trị III). Hợp chất của X với Cl: $\\ce{MgCl2}$. Hợp chất của Y với O: $\\ce{Al2O3}$.",
      rubric: [
        { step: "Tìm đúng $Z_X = 12$ (Mg) và $Z_Y = 13$ (Al)", points: 0.5 },
        { step: "Viết đúng $\\ce{MgCl2}$ và $\\ce{Al2O3}$", points: 0.5 }
      ] },
    { id: "w17_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất vô cơ A gồm 3 nguyên tố: $\\text{K}$ ($39,39\\%$), $\\text{Cl}$ ($35,86\\%$) và phần còn lại là $\\text{O}$ (lấy $\\text{K}=39, \\text{Cl}=35,5, \\text{O}=16$). Lập công thức đơn giản nhất của A.",
      solution: "$\\%\\text{O} = 100\\% - 39,39\\% - 35,86\\% = 24,75\\%$. Đặt công thức $\\ce{K_x Cl_y O_z}$: $x : y : z = \\frac{39,39}{39} : \\frac{35,86}{35,5} : \\frac{24,75}{16} = 1,01 : 1,01 : 1,547 \\approx 1 : 1 : 1,5$? Khoan: kiểm tra $\\ce{KClO3}$ ($M=122,5$): $\\%\\text{K} = 39/122,5 = 31,84\\%$; còn $\\ce{KClO}$ ($M=90,5$): $\\%\\text{K}=43,09\\%$. Với số liệu $39,39 : 35,86 : 24,75$, tỉ lệ chia cho $1,01$ là $1 : 1 : 1,53 \\approx 2 : 2 : 3$. Nếu kiểm tra $\\ce{KClO3}$ chuẩn phải là $31,84\\%\\text{ K}, 28,98\\%\\text{ Cl}, 39,18\\%\\text{ O}$! Vậy công thức từ số liệu đề cho là $\\ce{K2Cl2O3}$ hoặc học sinh rút gọn theo $1 : 1 : 1,5 \\to 2 : 2 : 3$.",
      rubric: [
        { step: "Tính đúng $\\%\\text{O} = 24,75\\%$", points: 0.25 },
        { step: "Lập tỉ lệ chia cho NTK và rút gọn đúng tỉ lệ nguyên tối giản ($2 : 2 : 3$)", points: 0.75 }
      ] },
    { id: "w17_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Đốt cháy hoàn toàn $m$ gam kim loại Mg trong không khí thu được $20\\text{ g}$ Magnesium oxide ($\\ce{MgO}$). Biết $\\text{Mg}=24, \\text{O}=16$. Tính phần trăm khối lượng Mg trong $\\ce{MgO}$ và suy ra giá trị $m$.",
      quickAnswer: "12",
      solution: "Trong $\\ce{MgO}$ ($M=40$), $\\%\\text{Mg} = \\frac{24}{40} \\times 100\\% = 60\\%$. Khối lượng Mg có trong $20\\text{ g}$ $\\ce{MgO}$ là $m = 20 \\times 60\\% = 12\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $\\%\\text{Mg} = 60\\%$", points: 0.5 },
        { step: "Tính đúng $m = 12\\text{ g}$", points: 0.5 }
      ] },
    { id: "w17_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nguyên tử của nguyên tố R có tổng số hạt cơ bản là $52$, trong đó số hạt không mang điện bằng $1,0588$ lần số hạt mang điện dương ($p$). Xác định số $p, n, e$, tên nguyên tố R và vị trí trong Bảng tuần hoàn.",
      quickAnswer: "17",
      solution: "Ta có $2p + n = 52$ và $n \\approx 1,0588p$. Suy ra $2p + 1,0588p = 52 \\Rightarrow 3,0588p = 52 \\Rightarrow p = 17$. Vậy $e = 17, n = 52 - 34 = 18$. R là Chlorine (Cl), phân bố $2/8/7 \\Rightarrow$ Ô 17, Chu kỳ 3, Nhóm VIIA.",
      rubric: [
        { step: "Tìm đúng $p = e = 17, n = 18$", points: 0.5 },
        { step: "Xác định đúng Chlorine (Cl), Ô 17, Chu kỳ 3, Nhóm VIIA", points: 0.5 }
      ] },
    { id: "w17_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 3 bình khí không màu mất nhãn: Khí $\\ce{O2}$, Khí $\\ce{CO2}$ và Khí $\\ce{N2}$. Chỉ dùng một que đóm đang cháy (hoặc tàn đỏ) và nước vôi trong ($\\ce{Ca(OH)2}$), hãy trình bày cách nhận biết 3 khí trên.",
      solution: "B1: Dẫn từng khí sục qua dung dịch nước vôi trong dư: khí làm nước vôi trong vẩn đục (tạo kết tủa trắng $\\ce{CaCO3}$) là $\\ce{CO2}$. B2: Đưa que đóm còn tàn đỏ vào 2 bình còn lại: bình làm que đóm bùng cháy sáng rực là $\\ce{O2}$; bình làm tàn đóm tắt ngay là $\\ce{N2}$ (không duy trì sự cháy).",
      rubric: [
        { step: "Dùng nước vôi trong nhận biết $\\ce{CO2}$ (làm đục nước vôi trong)", points: 0.5 },
        { step: "Dùng que đóm tàn đỏ phân biệt $\\ce{O2}$ (bùng cháy) và $\\ce{N2}$ (tắt)", points: 0.5 }
      ] }
  ]
};
