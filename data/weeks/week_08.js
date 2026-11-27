window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[8] = {
  week: 8,
  title: "Sơ lược Bảng tuần hoàn: Ô, Chu kỳ, Nhóm",
  objectives: [
    "Nắm vững nguyên tắc sắp xếp các nguyên tố trong Bảng tuần hoàn (theo chiều tăng dần điện tích hạt nhân $Z$).",
    "Xác định nhanh vị trí của nguyên tố (Ô, Chu kỳ, Nhóm A) từ cấu tạo nguyên tử và ngược lại: Số ô $= Z$; Số thứ tự chu kỳ $=$ Số lớp electron; Số thứ tự nhóm A $=$ Số electron lớp ngoài cùng.",
    "Giải được các bài toán xác định 2 nguyên tố kế tiếp trong cùng chu kỳ hoặc cùng nhóm (dạng bài HSG kinh điển)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 8 (A4). Dùng Bảng tra cứu trên Web App để học sinh đối chiếu ô – chu kỳ – nhóm.",
    sessions: [
      {
        name: "Buổi 1: Nguyên tắc sắp xếp & 3 thông số vị trí",
        guide: "Cho con thuộc lòng bộ 3 quy tắc vàng (áp dụng cho 20 nguyên tố đầu): (1) Số thứ tự Ô $=$ Số $p$ ($Z$); (2) Số thứ tự Chu kỳ $=$ Số lớp electron; (3) Số thứ tự Nhóm A $=$ Số electron lớp ngoài cùng (trừ He thuộc nhóm VIIIA).",
        pitfalls: "Học sinh hay nhầm Helium ($Z=2$, 2e lớp ngoài cùng) nằm ở nhóm IIA (thực tế He nằm ở nhóm VIIIA cùng các khí hiếm!)."
      },
      {
        name: "Buổi 2: Quy luật biến đổi trong Chu kỳ & Nhóm",
        guide: "Trong một chu kỳ (từ trái sang phải): điện tích hạt nhân tăng, số e lớp ngoài cùng tăng từ $1 \\to 8$, tính kim loại giảm dần – tính phi kim tăng dần. Trong một nhóm A (từ trên xuống dưới): tính chất tương tự nhau do cùng số e lớp ngoài cùng.",
        pitfalls: "Quên chiều biến đổi tính kim loại/phi kim trong chu kỳ."
      },
      {
        name: "Buổi 3: Bài toán HSG xác định 2 nguyên tố trong Bảng tuần hoàn",
        guide: "Dạy kỹ 2 công thức HSG: 2 nguyên tố kế tiếp cùng chu kỳ thì $Z_B - Z_A = 1$; 2 nguyên tố kế tiếp cùng nhóm A (ở chu kỳ nhỏ $Z \\le 20$) thì $Z_B - Z_A = 8$ (hoặc $2$ nếu là H/Li hoặc He/Ne).",
        pitfalls: "Khi giải bài toán $Z_A + Z_B = S$ ở mức HSG, học sinh hay bỏ sót trường hợp $Z_B - Z_A = 18$ nếu đề không giới hạn chu kỳ nhỏ."
      }
    ]
  },
  lecture: [
    {
      title: "Cấu tạo Bảng tuần hoàn: Ô, Chu kỳ và Nhóm",
      content: `
        <p>Bảng tuần hoàn hiện đại sắp xếp các nguyên tố theo chiều <strong>tăng dần của điện tích hạt nhân ($Z$)</strong>:</p>
        <ul>
          <li><strong>Ô nguyên tố:</strong> Cho biết số hiệu nguyên tử ($Z =$ số $p =$ số $e$), ký hiệu, tên nguyên tố và khối lượng nguyên tử.</li>
          <li><strong>Chu kỳ (hàng ngang):</strong> Gồm các nguyên tố có <strong>cùng số lớp electron</strong>. Bảng tuần hoàn có 7 chu kỳ (3 chu kỳ nhỏ: 1, 2, 3 và 4 chu kỳ lớn: 4, 5, 6, 7).</li>
          <li><strong>Nhóm (cột dọc):</strong> Gồm các nguyên tố có tính chất hóa học tương tự nhau do có <strong>cùng số electron lớp ngoài cùng</strong> (với các nhóm A; trừ Helium có 2e nhưng xếp ở nhóm VIIIA).</li>
        </ul>
        <div class="callout">
          <strong>Quy tắc vàng tìm vị trí (với $Z = 1 \\to 20$):</strong><br/>
          1. $\\text{STT Ô} = Z$<br/>
          2. $\\text{STT Chu kỳ} = \\text{Số lớp electron}$<br/>
          3. $\\text{STT Nhóm A} = \\text{Số electron lớp ngoài cùng}$ (trừ He ở VIIIA)
        </div>
      `,
      checkpoint: {
        question: "Nguyên tố X có $Z = 13$ (phân bố $2 / 8 / 3$). Vị trí của X trong Bảng tuần hoàn là:",
        options: [
          "Ô 13, chu kỳ 3, nhóm IIIA",
          "Ô 13, chu kỳ 3, nhóm VA",
          "Ô 13, chu kỳ 2, nhóm IIIA",
          "Ô 27, chu kỳ 3, nhóm IIIA"
        ],
        answer: 0,
        explanation: "$Z = 13 \\Rightarrow$ Ô 13; có 3 lớp e $\\Rightarrow$ Chu kỳ 3; có 3e lớp ngoài cùng $\\Rightarrow$ Nhóm IIIA (Aluminium)."
      }
    },
    {
      title: "Bài toán HSG: Hai nguyên tố kế tiếp trong Bảng tuần hoàn",
      content: `
        <ul>
          <li>Nếu X, Y đứng <strong>kế tiếp nhau trong cùng một chu kỳ</strong>: $Z_Y - Z_X = 1$.</li>
          <li>Nếu X, Y thuộc <strong>cùng một nhóm A và ở 2 chu kỳ nhỏ liên tiếp</strong> ($Z \\le 20$): $Z_Y - Z_X = 8$ (riêng cặp H–Li hoặc He–Ne là $2$).</li>
        </ul>
      `,
      example: "Hai nguyên tố X, Y đứng kế tiếp nhau trong cùng một chu kỳ có tổng số hiệu nguyên tử là $23$. Xác định X, Y.<br/><em>Giải:</em> $Z_X + Z_Y = 23$ và $Z_Y - Z_X = 1 \\Rightarrow Z_X = 11$ (Na), $Z_Y = 12$ (Mg)."
    }
  ],
  questions: [
    { id: "w8_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong Bảng tuần hoàn, các nguyên tố hóa học được sắp xếp theo chiều tăng dần của:",
      options: ["A. Khối lượng nguyên tử", "B. Điện tích hạt nhân ($Z$)", "C. Số neutron", "D. Độ dài tên gọi"],
      answer: 1, solution: "Nguyên tắc sắp xếp là theo chiều tăng dần của điện tích hạt nhân nguyên tử." },
    { id: "w8_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Số thứ tự của chu kỳ trong Bảng tuần hoàn cho biết điều gì?",
      options: ["A. Số electron lớp ngoài cùng", "B. Số lớp electron của nguyên tử", "C. Số neutron", "D. Hóa trị cao nhất"],
      answer: 1, solution: "STT chu kỳ = Số lớp electron." },
    { id: "w8_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Bảng tuần hoàn hiện nay có bao nhiêu chu kỳ?",
      options: ["A. 5", "B. 6", "C. 7", "D. 8"],
      answer: 2, solution: "Có 7 chu kỳ (3 chu kỳ nhỏ và 4 chu kỳ lớn)." },
    { id: "w8_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố Oxygen ($Z = 8$, phân bố $2/6$) nằm ở chu kỳ nào và nhóm nào?",
      options: ["A. Chu kỳ 2, nhóm VIA", "B. Chu kỳ 2, nhóm IIA", "C. Chu kỳ 3, nhóm VIA", "D. Chu kỳ 6, nhóm IIA"],
      answer: 0, solution: "2 lớp e → Chu kỳ 2; 6e lớp ngoài cùng → Nhóm VIA." },
    { id: "w8_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Chu kỳ 1 trong Bảng tuần hoàn gồm bao nhiêu nguyên tố?",
      options: ["A. 2 nguyên tố (H, He)", "B. 8 nguyên tố", "C. 18 nguyên tố", "D. 32 nguyên tố"],
      answer: 0, solution: "Chu kỳ 1 chỉ có 2 nguyên tố là H và He." },
    { id: "w8_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Các nguyên tố ở nhóm VIIIA (cột ngoài cùng bên phải) có đặc điểm chung là:",
      options: ["A. Đều là kim loại kiềm mạnh", "B. Đều là khí hiếm rất bền về mặt hóa học", "C. Đều là chất rắn ở điều kiện thường", "D. Đều có 1 electron lớp ngoài cùng"],
      answer: 1, solution: "Nhóm VIIIA là nhóm khí hiếm." },
    { id: "w8_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố X ở ô số $19$, chu kỳ $4$, nhóm IA. Số proton trong hạt nhân của X là:",
      options: ["A. 4", "B. 19", "C. 20", "D. 39"],
      answer: 1, solution: "Số thứ tự ô = $Z =$ số proton $= 19$ (Potassium)." },
    { id: "w8_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Bảng tuần hoàn:",
      statements: [
        { text: "Các nguyên tố trong cùng một nhóm A có số electron lớp ngoài cùng bằng nhau (trừ He).", answer: true },
        { text: "Chu kỳ 2 và chu kỳ 3 đều có 8 nguyên tố.", answer: true },
        { text: "Helium ($Z = 2$) nằm ở nhóm IIA.", answer: false },
        { text: "Ở đầu mỗi chu kỳ (trừ chu kỳ 1) là một kim loại kiềm hoạt động mạnh.", answer: true }
      ],
      solution: "c) Sai vì Helium là khí hiếm nằm ở nhóm VIIIA." },
    { id: "w8_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tố X thuộc chu kỳ 3, nhóm VIIA. Số hiệu nguyên tử $Z$ của X là bao nhiêu?",
      answer: "17", tolerance: 0.1,
      solution: "3 lớp e, lớp ngoài cùng 7e → phân bố $2/8/7 \\Rightarrow Z = 17$ (Chlorine)." },
    { id: "w8_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tố Y thuộc chu kỳ 4, nhóm IIA. Số hiệu nguyên tử $Z$ của Y là bao nhiêu?",
      answer: "20", tolerance: 0.1,
      solution: "4 lớp e, lớp ngoài cùng 2e → phân bố $2/8/8/2 \\Rightarrow Z = 20$ (Calcium)." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w8_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong một chu kỳ (từ trái sang phải), quy luật biến đổi tính chất của các nguyên tố là:",
      options: [
        "A. Tính kim loại tăng dần, tính phi kim giảm dần.",
        "B. Tính kim loại giảm dần, tính phi kim tăng dần.",
        "C. Số lớp electron tăng dần.",
        "D. Số electron lớp ngoài cùng giữ nguyên."
      ],
      answer: 1, solution: "Từ trái sang phải trong một chu kỳ, tính kim loại yếu dần và tính phi kim mạnh dần, kết thúc bằng một khí hiếm." },
    { id: "w8_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho 4 nguyên tố: $\\text{Na } (Z=11)$, $\\text{Mg } (Z=12)$, $\\text{Al } (Z=13)$, $\\text{K } (Z=19)$. Cặp nguyên tố nào thuộc cùng một nhóm A?",
      options: ["A. Na và Mg", "B. Mg và Al", "C. Na và K", "D. Al và K"],
      answer: 2, solution: "Na ($2/8/1$) và K ($2/8/8/1$) đều có 1e lớp ngoài cùng nên cùng thuộc nhóm IA." },
    { id: "w8_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho nguyên tố X ở ô số $15$ trong Bảng tuần hoàn:",
      statements: [
        { text: "X thuộc chu kỳ 3, nhóm VA.", answer: true },
        { text: "X là một kim loại điển hình.", answer: false },
        { text: "X có 5 electron ở lớp ngoài cùng.", answer: true },
        { text: "Công thức oxide cao nhất của X dạng $\\ce{P2O5}$ (X là Phosphorus).", answer: true }
      ],
      solution: "b) Sai vì Phosphorus ($Z=15$, 5e ngoài cùng) là phi kim." },
    { id: "w8_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hai nguyên tố X và Y đứng kế tiếp nhau trong cùng một chu kỳ, có tổng số proton là $27$. Tìm số hiệu nguyên tử của nguyên tố lớn hơn ($Z_Y$)?",
      answer: "14", tolerance: 0.1,
      solution: "$Z_X + Z_Y = 27$ và $Z_Y - Z_X = 1 \\Rightarrow Z_Y = 14$ (Silicon), $Z_X = 13$ (Aluminium)." },
    { id: "w8_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hai nguyên tố A và B thuộc cùng một nhóm A và ở hai chu kỳ nhỏ liên tiếp ($Z_A < Z_B \\le 20$). Biết tổng số proton của A và B là $26$. Tìm $Z_B$.",
      answer: "17", tolerance: 0.1,
      solution: "$Z_A + Z_B = 26$ và $Z_B - Z_A = 8 \\Rightarrow Z_B = 17$ (Cl), $Z_A = 9$ (F)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w8_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hai nguyên tố X, Y ($Z_X < Z_Y$) thuộc cùng một nhóm A và ở hai chu kỳ liên tiếp trong Bảng tuần hoàn. Tổng số hạt proton trong hạt nhân của X và Y là $32$. Xác định vị trí (Ô, Chu kỳ, Nhóm) của X và Y.",
      solution: "Do X, Y ở 2 chu kỳ liên tiếp cùng nhóm A và $Z_X + Z_Y = 32$ (chu kỳ nhỏ), nên $Z_Y - Z_X = 8$ (nếu $Z_Y - Z_X = 18$ thì $2Z_X = 14 \\Rightarrow Z_X = 7, Z_Y = 25$ loại vì N thuộc nhóm VA còn Mn thuộc nhóm VIIB). Giải $Z_X + Z_Y = 32$ và $Z_Y - Z_X = 8 \\Rightarrow Z_X = 12$ (Mg: Ô 12, CK 3, Nhóm IIA) và $Z_Y = 20$ (Ca: Ô 20, CK 4, Nhóm IIA).",
      rubric: [
        { step: "Lập hệ $Z_X + Z_Y = 32$ và $Z_Y - Z_X = 8$ (có kiểm tra loại trường hợp $18$)", points: 0.5 },
        { step: "Xác định đúng Mg (Ô 12, CK 3, IIA) và Ca (Ô 20, CK 4, IIA)", points: 0.5 }
      ] },
    { id: "w8_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hợp chất khí với hydrogen của một nguyên tố phi kim R có công thức $\\ce{RH3}$. Trong oxide cao nhất tương ứng ($\\ce{R2O5}$), nguyên tố R chiếm $43,66\\%$ về khối lượng. Tìm khối lượng nguyên tử của R và vị trí của R trong Bảng tuần hoàn.",
      quickAnswer: "31",
      solution: "Trong $\\ce{R2O5}$: $\\frac{2M_R}{2M_R + 5 \\times 16} = 0,4366 \\Rightarrow 2M_R = 0,4366(2M_R + 80) \\Rightarrow 1,1268M_R = 34,928 \\Rightarrow M_R \\approx 31$ (Phosphorus, $Z = 15$). Phân bố $2/8/5 \\Rightarrow$ Ô 15, Chu kỳ 3, Nhóm VA.",
      rubric: [
        { step: "Lập đúng phương trình $\\%m_R = \\frac{2M_R}{2M_R + 80} = 43,66\\%$", points: 0.5 },
        { step: "Giải đúng $M_R = 31$ (Phosphorus) và nêu đúng vị trí Ô 15, CK 3, Nhóm VA", points: 0.5 }
      ] },
    { id: "w8_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tổng số hạt cơ bản ($p, n, e$) trong một nguyên tử nguyên tố X là $40$. Xác định tên nguyên tố X (IUPAC) và vị trí của X trong Bảng tuần hoàn.",
      solution: "Ta có $2p + n = 40 \\Rightarrow n = 40 - 2p$. Áp dụng $1 \\le \\frac{40 - 2p}{p} \\le 1,5 \\Rightarrow 11,43 \\le p \\le 13,33$. Chọn $p = 13 \\Rightarrow n = 14$ (Aluminium, $M = 27$). Phân bố $2/8/3 \\Rightarrow$ Ô 13, Chu kỳ 3, Nhóm IIIA.",
      rubric: [
        { step: "Giải điều kiện bền tìm đúng $p = 13$ ($n = 14$)", points: 0.5 },
        { step: "Xác định đúng tên Aluminium và vị trí Ô 13, CK 3, Nhóm IIIA", points: 0.5 }
      ] },
    { id: "w8_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho 3 nguyên tố X ($Z=11$), Y ($Z=17$), T ($Z=19$). Hãy sắp xếp tính kim loại của X, T theo thứ tự tăng dần và giải thích dựa vào vị trí trong Bảng tuần hoàn. Cho biết sản phẩm hợp chất tạo bởi X và Y.",
      solution: "X (Na, CK 3, IA) và T (K, CK 4, IA) cùng thuộc nhóm IA. Khi đi từ trên xuống dưới trong cùng nhóm A, bán kính nguyên tử tăng, khả năng nhường electron tăng nên tính kim loại tăng: $\\text{Na} < \\text{K}$. Hợp chất tạo bởi X và Y (Cl, nhóm VIIA) là Sodium chloride ($\\ce{NaCl}$).",
      rubric: [
        { step: "Sắp xếp đúng tính kim loại: $\\text{Na} < \\text{K}$ và giải thích theo chiều tăng bán kính trong nhóm IA", points: 0.75 },
        { step: "Nêu đúng hợp chất $\\ce{NaCl}$ (Sodium chloride)", points: 0.25 }
      ] },
    { id: "w8_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Phân tử hợp chất $\\ce{XY2}$ có tổng số proton bằng $22$. Biết X và Y đều thuộc chu kỳ 2 trong Bảng tuần hoàn. Xác định vị trí của X, Y và viết công thức của $\\ce{XY2}$.",
      solution: "Ta có $Z_X + 2Z_Y = 22$. Vì X, Y thuộc chu kỳ 2 nên $3 \\le Z_X, Z_Y \\le 10$. Trung bình $\\overline{Z} = 22/3 \\approx 7,33$. Thử $Z_X = 6$ (Carbon, CK 2, IVA) $\\Rightarrow 2Z_Y = 16 \\Rightarrow Z_Y = 8$ (Oxygen, CK 2, VIA). Hợp chất là $\\ce{CO2}$ (hoặc $Z_X = 4$ Be, $Z_Y = 9$ F $\\Rightarrow \\ce{BeF2}$ cũng thỏa mãn toán học, nhưng $\\ce{CO2}$ là khí phổ biến nhất).",
      rubric: [
        { step: "Lập phương trình $Z_X + 2Z_Y = 22$ với điều kiện chu kỳ 2 ($3 \\le Z \\le 10$)", points: 0.5 },
        { step: "Tìm đúng X là Carbon (Ô 6, CK 2, IVA), Y là Oxygen (Ô 8, CK 2, VIA) và CTHH $\\ce{CO2}$", points: 0.5 }
      ] }
  ]
};
