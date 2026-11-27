window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[7] = {
  week: 7,
  title: "Lớp electron & Cấu hình đơn giản (20 nguyên tố đầu)",
  objectives: [
    "Biết cách sắp xếp các electron thành từng lớp xung quanh hạt nhân (lớp 1 tối đa 2e, lớp 2 tối đa 8e, lớp 3 tối đa 8e với 20 nguyên tố đầu).",
    "Vẽ và viết được sơ đồ phân bố electron (ví dụ $2/8/1$ cho Na) cho 20 nguyên tố đầu tiên ($Z = 1 \\to 20$).",
    "Dựa vào số electron lớp ngoài cùng để dự đoán nhanh nguyên tố đó là Kim loại (1, 2, 3e), Phi kim (5, 6, 7e) hay Khí hiếm (8e, riêng He 2e)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 7 (A4). Vẽ sẵn mẫu sơ đồ các vòng tròn đồng tâm biểu diễn lớp electron.",
    sessions: [
      {
        name: "Buổi 1: Quy tắc điền electron vào các lớp",
        guide: "Quy tắc đơn giản cho THCS ($Z \\le 20$): Lớp trong cùng (lớp 1) tối đa $2e$, lớp 2 tối đa $8e$, lớp 3 tối đa $8e$ (cho $Z \\le 20$), phần còn lại sang lớp 4. Ví dụ Ca ($Z = 20$): $2 / 8 / 8 / 2$.",
        pitfalls: "Học sinh hay nhầm $Z = 19$ (K) và $Z = 20$ (Ca) điền $2/8/9$ hoặc $2/8/10$ (sai: lớp ngoài cùng không bao giờ vượt quá $8e$, nên K là $2/8/8/1$, Ca là $2/8/8/2$)."
      },
      {
        name: "Buổi 2: Electron lớp ngoài cùng & Tính chất nguyên tố",
        guide: "Nhấn mạnh quy luật: Lớp ngoài cùng có $8e$ (hoặc $2e$ với He) là cấu hình bền vững (Khí hiếm). Có $1, 2, 3e$ lớp ngoài cùng thường là Kim loại (trừ H, He, B). Có $5, 6, 7e$ thường là Phi kim.",
        pitfalls: "Quên trường hợp ngoại lệ: Hydrogen ($1e$ lớp ngoài cùng) và Helium ($2e$ lớp ngoài cùng) là phi kim và khí hiếm, KHÔNG phải kim loại!"
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Rèn 5 câu HSG: suy luận vị trí và tính chất từ sơ đồ nguyên tử, và làm quen sơ lược với ion dương/âm khi nguyên tử nhường/nhận electron để đạt 8e bền vững.",
        pitfalls: "Khi viết cấu hình ion (mức HSG), học sinh hay quên thay đổi số electron lớp ngoài cùng."
      }
    ]
  },
  lecture: [
    {
      title: "Sự sắp xếp Electron theo lớp (Với $Z = 1 \\to 20$)",
      content: `
        <p>Các electron chuyển động xung quanh hạt nhân và sắp xếp thành <strong>từng lớp</strong> từ trong ra ngoài:</p>
        <ul>
          <li><strong>Lớp thứ 1</strong> (gần hạt nhân nhất): chứa tối đa <strong>$2$ electron</strong>.</li>
          <li><strong>Lớp thứ 2</strong>: chứa tối đa <strong>$8$ electron</strong>.</li>
          <li><strong>Lớp thứ 3</strong> (đối với 20 nguyên tố đầu): chứa tối đa <strong>$8$ electron</strong> trước khi điền sang lớp thứ 4.</li>
        </ul>
        <div class="callout">
          <strong>Ví dụ phân bố electron:</strong><br/>
          • Carbon ($Z = 6$): $2 / 4$ (2 lớp, 4e lớp ngoài cùng)<br/>
          • Oxygen ($Z = 8$): $2 / 6$ (2 lớp, 6e lớp ngoài cùng)<br/>
          • Aluminium ($Z = 13$): $2 / 8 / 3$ (3 lớp, 3e lớp ngoài cùng)<br/>
          • Calcium ($Z = 20$): $2 / 8 / 8 / 2$ (4 lớp, 2e lớp ngoài cùng)
        </div>
      `,
      checkpoint: {
        question: "Nguyên tử Potassium (K) có $Z = 19$. Cách phân bố electron vào các lớp của K là:",
        options: ["2 / 8 / 9", "2 / 9 / 8", "2 / 8 / 8 / 1", "2 / 8 / 7 / 2"],
        answer: 2,
        explanation: "Lớp ngoài cùng không vượt quá 8e. Sau khi điền $2 / 8 / 8 = 18e$, electron thứ 19 sang lớp thứ 4: $2 / 8 / 8 / 1$."
      }
    },
    {
      title: "Dự đoán tính chất từ số Electron lớp ngoài cùng",
      content: `
        <p>Số electron ở <strong>lớp ngoài cùng</strong> quyết định tính chất hóa học của nguyên tố:</p>
        <ul>
          <li><strong>$8e$</strong> (hoặc $2e$ ở Helium): Cấu hình bền vững $\\rightarrow$ <strong>Khí hiếm</strong> (Ne, Ar, He) – hầu như không phản ứng.</li>
          <li><strong>$1, 2, 3e$</strong>: Dễ nhường electron $\\rightarrow$ Thường là <strong>Kim loại</strong> (Na, Mg, Al, K, Ca...; trừ H, He, B).</li>
          <li><strong>$5, 6, 7e$</strong>: Dễ nhận thêm electron $\\rightarrow$ Thường là <strong>Phi kim</strong> (N, O, F, P, S, Cl...).</li>
          <li><strong>$4e$</strong>: Có thể là phi kim (C, Si) hoặc kim loại.</li>
        </ul>
      `,
      example: "Nguyên tử Mg ($Z = 12$, cấu hình $2/8/2$) có xu hướng gì khi tham gia phản ứng? <br/><em>Phân tích:</em> Mg có $2e$ lớp ngoài cùng nên dễ <strong>nhường đi 2 electron</strong> để lớp vỏ ngoài còn lại đạt $8e$ bền vững (giống khí hiếm Ne), tạo thành ion $\\ce{Mg^{2+}}$."
    }
  ],
  questions: [
    { id: "w7_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Lớp electron thứ nhất (trong cùng) chứa tối đa bao nhiêu electron?",
      options: ["A. 1", "B. 2", "C. 8", "D. 18"],
      answer: 1, solution: "Lớp 1 chứa tối đa 2 electron." },
    { id: "w7_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Lớp electron thứ hai chứa tối đa bao nhiêu electron?",
      options: ["A. 2", "B. 6", "C. 8", "D. 10"],
      answer: 2, solution: "Lớp 2 chứa tối đa 8 electron." },
    { id: "w7_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Nitrogen ($Z = 7$) có bao nhiêu lớp electron?",
      options: ["A. 1 lớp", "B. 2 lớp", "C. 3 lớp", "D. 4 lớp"],
      answer: 1, solution: "Nitrogen ($Z = 7$) phân bố $2 / 5$ → có 2 lớp electron." },
    { id: "w7_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Chlorine ($Z = 17$) có bao nhiêu electron ở lớp ngoài cùng?",
      options: ["A. 1", "B. 5", "C. 7", "D. 8"],
      answer: 2, solution: "Chlorine phân bố $2 / 8 / 7$ → có 7 electron lớp ngoài cùng." },
    { id: "w7_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử nào sau đây có lớp electron ngoài cùng bền vững của khí hiếm?",
      options: ["A. Sodium ($Z=11$)", "B. Neon ($Z=10$)", "C. Oxygen ($Z=8$)", "D. Carbon ($Z=6$)"],
      answer: 1, solution: "Neon ($2/8$) có 8 electron lớp ngoài cùng bền vững." },
    { id: "w7_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tố có phân bố electron $2 / 8 / 3$ thuộc loại nào?",
      options: ["A. Kim loại", "B. Phi kim", "C. Khí hiếm", "D. Không xác định được"],
      answer: 0, solution: "Có 3e lớp ngoài cùng (3 lớp) là Aluminium (Al) – Kim loại." },
    { id: "w7_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Số electron tối đa có trong một nguyên tử chỉ có 2 lớp electron là:",
      options: ["A. 8", "B. 10", "C. 12", "D. 18"],
      answer: 1, solution: "Lớp 1 tối đa 2e + Lớp 2 tối đa 8e = 10 electron (Neon)." },
    { id: "w7_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về lớp electron:",
      statements: [
        { text: "Nguyên tử Sulfur ($Z = 16$) có 3 lớp electron và 6 electron lớp ngoài cùng.", answer: true },
        { text: "Mọi nguyên tử có 2 electron lớp ngoài cùng đều là kim loại.", answer: false },
        { text: "Nguyên tử Argon ($Z = 18$) có 8 electron lớp ngoài cùng.", answer: true },
        { text: "Lớp electron ở gần hạt nhân nhất có năng lượng cao nhất.", answer: false }
      ],
      solution: "b) Sai vì Helium ($Z=2$) có 2e lớp ngoài cùng nhưng là khí hiếm; d) Sai vì lớp gần hạt nhân nhất có mức năng lượng thấp nhất." },
    { id: "w7_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Một nguyên tử X có 3 lớp electron, lớp ngoài cùng có 5 electron. Tổng số proton trong hạt nhân nguyên tử X là bao nhiêu?",
      answer: "15", tolerance: 0.1,
      solution: "Phân bố: $2 / 8 / 5 \\Rightarrow Z = 2 + 8 + 5 = 15$ (Phosphorus)." },
    { id: "w7_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tử Calcium ($Z = 20$) có bao nhiêu lớp electron?",
      answer: "4", tolerance: 0.1,
      solution: "Calcium phân bố $2 / 8 / 8 / 2 \\Rightarrow 4$ lớp electron." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w7_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cặp nguyên tố nào sau đây có cùng số electron ở lớp ngoài cùng?",
      options: [
        "A. Carbon ($Z=6$) và Nitrogen ($Z=7$)",
        "B. Lithium ($Z=3$) và Sodium ($Z=11$)",
        "C. Oxygen ($Z=8$) và Fluorine ($Z=9$)",
        "D. Magnesium ($Z=12$) và Aluminium ($Z=13$)"
      ],
      answer: 1, solution: "Li ($2/1$) và Na ($2/8/1$) đều có 1 electron lớp ngoài cùng." },
    { id: "w7_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Hai nguyên tử X ($Z=8$) và Y ($Z=16$) có tính chất hóa học tương tự nhau vì:",
      options: [
        "A. Có cùng số lớp electron.",
        "B. Có cùng số neutron.",
        "C. Có cùng số electron ở lớp ngoài cùng (đều có 6e).",
        "D. Có cùng khối lượng nguyên tử."
      ],
      answer: 2, solution: "O ($2/6$) và S ($2/8/6$) đều có 6 electron lớp ngoài cùng." },
    { id: "w7_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho nguyên tử X có tổng số hạt cơ bản là $36$, trong đó số hạt mang điện gấp đôi số hạt không mang điện:",
      statements: [
        { text: "Số proton của X là $12$.", answer: true },
        { text: "Nguyên tử X có 3 lớp electron.", answer: true },
        { text: "Lớp ngoài cùng của X có 4 electron.", answer: false },
        { text: "X là nguyên tố kim loại (Magnesium).", answer: true }
      ],
      solution: "$2p + n = 36$ và $2p = 2n \\Rightarrow 3n = 36 \\Rightarrow n = 12, p = 12$. Phân bố $2/8/2$ → 2e lớp ngoài cùng." },
    { id: "w7_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tổng số electron lớp ngoài cùng của nguyên tử Oxygen ($Z=8$) và Sodium ($Z=11$) là bao nhiêu?",
      answer: "7", tolerance: 0.1,
      solution: "O ($2/6$) có $6e$, Na ($2/8/1$) có $1e \\Rightarrow 6 + 1 = 7$." },
    { id: "w7_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ion $\\ce{Al^{3+}}$ được tạo thành khi nguyên tử Aluminium ($Z = 13$) nhường đi $3$ electron. Số electron còn lại trong ion $\\ce{Al^{3+}}$ là bao nhiêu?",
      answer: "10", tolerance: 0.1,
      solution: "$13 - 3 = 10$ electron (đạt cấu hình bền $2/8$ giống khí hiếm Neon)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w7_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Ba nguyên tử X, Y, Z có số hiệu nguyên tử lần lượt là $9, 10, 11$. Hãy viết phân bố electron theo từng lớp của X, Y, Z và giải thích xu hướng nhường/nhận electron của X và Z để đạt cấu hình bền vững giống Y.",
      solution: "X ($Z=9$): $2/7$ (7e ngoài cùng, phi kim F) → có xu hướng nhận 1e thành ion $\\ce{F^-}$ ($2/8$). Y ($Z=10$): $2/8$ (8e ngoài cùng, khí hiếm Ne, đã bền vững). Z ($Z=11$): $2/8/1$ (1e ngoài cùng, kim loại Na) → có xu hướng nhường 1e thành ion $\\ce{Na^+}$ ($2/8$).",
      rubric: [
        { step: "Viết đúng phân bố electron của X ($2/7$), Y ($2/8$), Z ($2/8/1$)", points: 0.5 },
        { step: "Giải thích đúng X nhận 1e, Z nhường 1e để đạt 8e lớp ngoài cùng giống Y", points: 0.5 }
      ] },
    { id: "w7_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nguyên tử của nguyên tố R có 3 lớp electron. Biết hiệu số giữa số electron ở lớp thứ 2 và số electron ở lớp thứ 3 là $2$. Xác định số hiệu nguyên tử $Z$, tên nguyên tố (IUPAC) và tính chất (kim loại/phi kim) của R.",
      quickAnswer: "16",
      solution: "R có 3 lớp nên lớp 1 có $2e$, lớp 2 đã bão hòa có $8e$. Số electron lớp 3 $= 8 - 2 = 6e$. Vậy $Z = 2 + 8 + 6 = 16$ (Sulfur). Do có 6e lớp ngoài cùng nên R là phi kim.",
      rubric: [
        { step: "Xác định lớp 1 có $2e$, lớp 2 có $8e$, suy ra lớp 3 có $8 - 2 = 6e$", points: 0.5 },
        { step: "Kết luận $Z = 16$, tên Sulfur (S), là phi kim", points: 0.5 }
      ] },
    { id: "w7_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hai nguyên tử A và B đều có phân lớp/lớp electron ngoài cùng chứa $2$ electron ($Z_A < Z_B \\le 20$). Biết $Z_B - Z_A = 16$. Xác định A và B, giải thích sự khác biệt về tính chất hóa học giữa A và B.",
      solution: "Với $Z \\le 20$, các nguyên tử có 2e lớp ngoài cùng là: He ($Z=2$), Be ($Z=4$), Mg ($Z=12$), Ca ($Z=20$). Ta thấy $Z_{\\text{Ca}} - Z_{\\text{Be}} = 20 - 4 = 16$ (hoặc $18$? Không: $20-4=16$). Vậy A là Beryllium ($Z=4$, $2/2$) và B là Calcium ($Z=20$, $2/8/8/2$). (Nếu tính A là He $Z=2$ thì $Z_B = 18$ là Ar có 8e ngoài cùng → loại). Cả Be và Ca đều có 2e lớp ngoài cùng nên đều là kim loại, nhưng Ca có 4 lớp e (bán kính lớn hơn) nên hoạt động hóa học mạnh hơn Be rất nhiều.",
      rubric: [
        { step: "Liệt kê các nguyên tố có 2e ngoài cùng ($Z \\le 20$): He (2), Be (4), Mg (12), Ca (20)", points: 0.25 },
        { step: "Tìm đúng cặp $Z_A = 4$ (Be) và $Z_B = 20$ (Ca) thỏa mãn $Z_B - Z_A = 16$", points: 0.5 },
        { step: "So sánh tính kim loại: Ca hoạt động mạnh hơn Be do bán kính nguyên tử lớn hơn", points: 0.25 }
      ] },
    { id: "w7_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Ion $\\ce{X^{2-}}$ (do nguyên tử X nhận thêm 2 electron) và ion $\\ce{Y^+}$ (do nguyên tử Y nhường đi 1 electron) đều có tổng số electron là $18$. Viết phân bố electron của nguyên tử X, Y và cho biết tên nguyên tố.",
      solution: "Nguyên tử X trước khi nhận 2e có: $Z_X = 18 - 2 = 16$ (Sulfur, phân bố $2/8/6$). Nguyên tử Y trước khi nhường 1e có: $Z_Y = 18 + 1 = 19$ (Potassium, phân bố $2/8/8/1$).",
      rubric: [
        { step: "Tìm đúng $Z_X = 16$ (Sulfur, $2/8/6$)", points: 0.5 },
        { step: "Tìm đúng $Z_Y = 19$ (Potassium, $2/8/8/1$)", points: 0.5 }
      ] },
    { id: "w7_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vì sao các nguyên tố khí hiếm (như Helium, Neon, Argon) tồn tại trong tự nhiên dưới dạng các nguyên tử độc lập (đơn nguyên tử), còn Oxygen hay Chlorine lại tồn tại dạng phân tử gồm 2 nguyên tử ($\\ce{O2}$, $\\ce{Cl2}$)?",
      solution: "Các khí hiếm đã có lớp vỏ electron ngoài cùng bão hòa bền vững ($2e$ với He; $8e$ với Ne, Ar) nên chúng không có nhu cầu nhường, nhận hay góp chung electron với nguyên tử khác. Ngược lại, O ($6e$) và Cl ($7e$) chưa đạt $8e$ bền vững nên 2 nguyên tử phải liên kết (góp chung electron) tạo phân tử $\\ce{O2}$, $\\ce{Cl2}$ để đạt lớp vỏ bền vững.",
      rubric: [
        { step: "Nêu được khí hiếm có lớp vỏ ngoài cùng bền vững ($2e$ với He, $8e$ với Ne, Ar) nên không liên kết", points: 0.5 },
        { step: "Giải thích O và Cl chưa đạt 8e ngoài cùng nên phải liên kết tạo phân tử $\\ce{O2}, \\ce{Cl2}$", points: 0.5 }
      ] }
  ]
};
