window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[14] = {
  week: 14,
  title: "Hóa trị & Quy tắc hóa trị",
  objectives: [
    "Hiểu khái niệm hóa trị của nguyên tố và nhóm nguyên tử trong hợp chất (dựa trên hóa trị của Hydrogen là I và Oxygen là II).",
    "Ghi nhớ hóa trị thường gặp của các nguyên tố phổ biến và 5 nhóm nguyên tử quan trọng ($\\text{OH}, \\text{NO}_3, \\text{SO}_4, \\text{CO}_3, \\text{PO}_4$).",
    "Vận dụng thành thạo Quy tắc hóa trị ($x \\cdot a = y \\cdot b$) để xác định hóa trị của một nguyên tố trong hợp chất và kiểm tra công thức hóa học đúng/sai."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 14 (A4). In hoặc mở Bảng hóa trị chuẩn cho học sinh đối chiếu trong tuần đầu tiên.",
    sessions: [
      {
        name: "Buổi 1: Khái niệm Hóa trị & Bảng hóa trị chuẩn",
        guide: "Lấy chuẩn $\\text{H}$ hóa trị $\\text{I}$, $\\text{O}$ hóa trị $\\text{II}$. Dạy bài thơ/mẹo nhớ hóa trị các kim loại & nhóm nguyên tử: Hóa trị I ($\text{H, Li, Na, K, Ag, F, Cl}, -\\text{OH}, -\\text{NO}_3$); Hóa trị II ($\text{O, Mg, Ca, Ba, Zn, Cu, Fe(II)}, =\\text{SO}_4, =\\text{CO}_3$); Hóa trị III ($\text{Al, Fe(III)}, \\equiv\\text{PO}_4$).",
        pitfalls: "Học sinh hay quên rằng một số nguyên tố có NHIỀU hóa trị (như Fe có II và III; S có II, IV, VI; C có II, IV; N có I, II, III, IV, V)."
      },
      {
        name: "Buổi 2: Quy tắc hóa trị ($x \\cdot a = y \\cdot b$)",
        guide: "Với hợp chất $\\overset{a}{A}_x \\overset{b}{B}_y$: tích chỉ số và hóa trị của nguyên tố này bằng tích chỉ số và hóa trị của nguyên tố kia: $x \\cdot a = y \\cdot b$. Dùng quy tắc này để tính hóa trị của nguyên tố chưa biết hoặc kiểm tra CTHH viết đúng hay sai.",
        pitfalls: "Quên rút gọn hóa trị hoặc nhầm số nguyên tử trong nhóm (ví dụ $\\ce{Fe2(SO4)3}$ phải xem cả nhóm $\\text{SO}_4$ có hóa trị II, chỉ số là 3)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Chú ý 5 câu HSG: xác định hóa trị trong hợp chất phức tạp ($\\ce{Fe3O4}$, $\\ce{NH4NO3}$, $\\ce{KMnO4}$) và bài toán biện luận hóa trị của kim loại M.",
        pitfalls: "Trong $\\ce{NH4NO3}$, hai nguyên tử N có hóa trị khác nhau (hoặc số oxi hóa khác nhau), cần giải thích rõ cho học sinh giỏi."
      }
    ]
  },
  lecture: [
    {
      title: "Hóa trị của Nguyên tố & Nhóm nguyên tử",
      content: `
        <p><strong>Hóa trị</strong> là con số biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác (lấy $\\text{H}$ làm đơn vị: hóa trị $\\text{I}$; $\\text{O}$ có hóa trị $\\text{II}$).</p>
        <table class="std-table">
          <thead><tr><th>Hóa trị</th><th>Nguyên tố phổ biến</th><th>Nhóm nguyên tử quan trọng</th></tr></thead>
          <tbody>
            <tr><td><strong>I</strong></td><td>$\\text{H, Li, Na, K, Ag, F, Cl, Br}$</td><td>$-\\text{OH}$ (hydroxide), $-\\text{NO}_3$ (nitrate), $-\\text{NH}_4$ (ammonium)</td></tr>
            <tr><td><strong>II</strong></td><td>$\\text{O, Mg, Ca, Ba, Zn, Cu, Fe(II), S(II)}$</td><td>$=\\text{SO}_4$ (sulfate), $=\\text{CO}_3$ (carbonate), $=\\text{SO}_3$ (sulfite)</td></tr>
            <tr><td><strong>III</strong></td><td>$\\text{Al, Fe(III), N(III), P(III)}$</td><td>$\\equiv\\text{PO}_4$ (phosphate)</td></tr>
            <tr><td><strong>IV, V, VI</strong></td><td>$\\text{C(IV), Si(IV), S(IV, VI), P(V), N(V)}$</td><td>—</td></tr>
          </tbody>
        </table>
      `,
      checkpoint: {
        question: "Nhóm nguyên tử sulfate ($=\\text{SO}_4$) và phosphate ($\\equiv\\text{PO}_4$) có hóa trị lần lượt là:",
        options: ["I và II", "II và III", "II và IV", "I và III"],
        answer: 1,
        explanation: "Trong $\\ce{H2SO4}$ có 2 H nên $=\\text{SO}_4$ hóa trị II; trong $\\ce{H3PO4}$ có 3 H nên $\\equiv\\text{PO}_4$ hóa trị III."
      }
    },
    {
      title: "Quy tắc Hóa trị",
      content: `
        <div class="callout">
          <strong>Quy tắc hóa trị:</strong> Trong công thức hóa học $\\overset{a}{A}_x \\overset{b}{B}_y$ (với $a, b$ là hóa trị của A, B; $x, y$ là chỉ số):
          <p style="text-align:center;font-size:1.1rem;margin:6px 0;">$$x \\times a = y \\times b$$</p>
        </div>
        <div style="text-align:center;margin:8px 0;">
          <svg viewBox="0 0 420 80" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <text x="140" y="28" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">III</text>
            <text x="180" y="28" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">II</text>
            <text x="160" y="52" font-size="22" font-weight="bold" fill="#1e293b" text-anchor="middle">Fe₂O₃</text>
            <text x="235" y="48" font-size="12" font-weight="bold" fill="#15803d">⇒  2 × III = 3 × II (= 6, ĐÚNG!)</text>
          </svg>
        </div>
        <p><strong>Ứng dụng 1 – Tính hóa trị:</strong> Tìm hóa trị của S trong $\\ce{SO3}$ (biết O hóa trị II):<br/>
        Gọi hóa trị của S là $a$. Theo quy tắc hóa trị: $1 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{VI}$.</p>
        <p><strong>Ứng dụng 2 – Kiểm tra CTHH đúng hay sai:</strong> Công thức $\\ce{AlCl2}$ đúng hay sai (Al hóa trị III, Cl hóa trị I)?<br/>
        Ta có $1 \\times \\text{III} \\ne 2 \\times \\text{I}$ $\\rightarrow$ <strong>Sai</strong> (đúng phải là $\\ce{AlCl3}$).</p>
      `,
      example: "Tìm hóa trị của Fe trong hợp chất $\\ce{Fe2(SO4)3}$, biết nhóm $\\text{SO}_4$ hóa trị II.<br/><em>Giải:</em> Gọi hóa trị của Fe là $a$. Áp dụng quy tắc hóa trị: $2 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{III}$. Vậy Fe có hóa trị III."
    }
  ],
  questions: [
    { id: "w14_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Theo quy ước, nguyên tố Oxygen (O) trong hợp chất thường có hóa trị mấy?",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 1, solution: "Oxygen có hóa trị II (lấy làm chuẩn cùng Hydrogen hóa trị I)." },
    { id: "w14_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong phân tử $\\ce{NH3}$, biết H có hóa trị I. Hóa trị của Nitrogen (N) là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 2, solution: "$1 \\times a = 3 \\times \\text{I} \\Rightarrow a = \\text{III}$." },
    { id: "w14_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Hóa trị của Carbon (C) trong khí Carbon dioxide ($\\ce{CO2}$) là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 3, solution: "$1 \\times a = 2 \\times \\text{II} \\Rightarrow a = \\text{IV}$." },
    { id: "w14_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Nhóm nguyên tử hydroxide ($-\\text{OH}$) và nitrate ($-\\text{NO}_3$) đều có hóa trị mấy?",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 0, solution: "Cả $-\\text{OH}$ và $-\\text{NO}_3$ đều có hóa trị I." },
    { id: "w14_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong công thức $\\ce{Fe2O3}$, hóa trị của nguyên tố Iron (Fe) là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 2, solution: "$2 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{III}$." },
    { id: "w14_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học nào sau đây viết SAI quy tắc hóa trị (biết $\\text{Na(I), Ca(II), Al(III), Cl(I), O(II)}$)?",
      options: ["A. $\\ce{NaCl}$", "B. $\\ce{CaO}$", "C. $\\ce{AlO}$", "D. $\\ce{AlCl3}$"],
      answer: 2, solution: "$\\ce{AlO}$ sai vì $1 \\times \\text{III} \\ne 1 \\times \\text{II}$ (đúng là $\\ce{Al2O3}$)." },
    { id: "w14_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Hóa trị của nhóm carbonate ($=\\text{CO}_3$) trong hợp chất $\\ce{CaCO3}$ (biết Ca hóa trị II) là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 1, solution: "$1 \\times \\text{II} = 1 \\times b \\Rightarrow b = \\text{II}$." },
    { id: "w14_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về hóa trị:",
      statements: [
        { text: "Hóa trị của Sulfur (S) trong $\\ce{SO2}$ là IV.", answer: true },
        { text: "Kim loại Aluminium (Al) luôn có hóa trị II.", answer: false },
        { text: "Trong đơn chất, các nguyên tố không có hóa trị (hoặc hóa trị bằng 0).", answer: true },
        { text: "Hóa trị của Phosphorus (P) trong $\\ce{P2O5}$ là V.", answer: true }
      ],
      solution: "b) Sai vì Aluminium (Al) luôn có hóa trị III." },
    { id: "w14_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Xác định hóa trị (nhập số tự nhiên: 1, 2, 3...) của nguyên tố Manganese (Mn) trong hợp chất $\\ce{MnO2}$ (biết O hóa trị II).",
      answer: "4", tolerance: 0.1,
      solution: "$1 \\times a = 2 \\times 2 \\Rightarrow a = 4$ (hóa trị IV)." },
    { id: "w14_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Xác định hóa trị (nhập số tự nhiên) của nguyên tố Chromium (Cr) trong hợp chất $\\ce{Cr2O3}$.",
      answer: "3", tolerance: 0.1,
      solution: "$2 \\times a = 3 \\times 2 \\Rightarrow a = 3$ (hóa trị III)." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w14_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong dãy hợp chất $\\ce{N2O, NO, N2O3, NO2, N2O5}$, hóa trị của Nitrogen (N) lần lượt tăng dần là:",
      options: [
        "A. I, II, III, IV, V",
        "B. II, II, III, IV, V",
        "C. I, II, III, IV, VI",
        "D. I, III, IV, V, VI"
      ],
      answer: 0, solution: "Áp dụng quy tắc hóa trị với O(II): $\\ce{N2O}$ (I), $\\ce{NO}$ (II), $\\ce{N2O3}$ (III), $\\ce{NO2}$ (IV), $\\ce{N2O5}$ (V)." },
    { id: "w14_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong hợp chất $\\ce{Cu(NO3)2}$ (biết nhóm $\\text{NO}_3$ hóa trị I), hóa trị của Copper (Cu) là:",
      options: ["A. I", "B. II", "C. III", "D. IV"],
      answer: 1, solution: "$1 \\times a = 2 \\times \\text{I} \\Rightarrow a = \\text{II}$." },
    { id: "w14_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Kiểm tra các công thức hóa học sau đây dựa vào quy tắc hóa trị (biết $\\text{K(I), Ba(II), Fe(II, III), SO}_4\\text{(II), PO}_4\\text{(III)}$):",
      statements: [
        { text: "Công thức $\\ce{BaSO4}$ viết đúng.", answer: true },
        { text: "Công thức $\\ce{K2PO4}$ viết đúng.", answer: false },
        { text: "Công thức $\\ce{Fe(OH)3}$ viết đúng.", answer: true },
        { text: "Công thức $\\ce{BaCl}$ viết đúng.", answer: false }
      ],
      solution: "b) Sai vì $\\text{K(I)}$ và $\\text{PO}_4\\text{(III)}$ phải là $\\ce{K3PO4}$; d) Sai vì $\\text{Ba(II)}$ và $\\text{Cl(I)}$ phải là $\\ce{BaCl2}$." },
    { id: "w14_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trong hợp chất $\\ce{FeS2}$ (quặng pyrite), nếu coi Fe có hóa trị II thì Sulfur có hóa trị tương ứng là bao nhiêu? Không, hỏi chuẩn: Trong hợp chất $\\ce{SF6}$, hóa trị của Sulfur (S) là bao nhiêu (biết F hóa trị I)?",
      answer: "6", tolerance: 0.1,
      solution: "$1 \\times a = 6 \\times 1 \\Rightarrow a = 6$ (hóa trị VI)." },
    { id: "w14_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Biết nguyên tố M có hóa trị $n$ không đổi trong hợp chất $\\ce{M2O_n}$ và phân tử khối của $\\ce{M2O_3}$ là $102\\text{ amu}$. Tính khối lượng nguyên tử của M (amu).",
      answer: "27", tolerance: 0.1,
      solution: "$2M_M + 3 \\times 16 = 102 \\Rightarrow 2M_M = 54 \\Rightarrow M_M = 27\\text{ amu}$ (Aluminium)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w14_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Sắp xếp các hợp chất sau theo chiều TĂNG DẦN hóa trị của nguyên tố Sulfur (S): $\\ce{H2S, SO2, SO3, FeS}$. Giải thích bằng quy tắc hóa trị.",
      solution: "Tính hóa trị của S: • Trong $\\ce{H2S}$: $2 \\times \\text{I} = 1 \\times a \\Rightarrow a = \\text{II}$. • Trong $\\ce{FeS}$ (Fe hóa trị II): $1 \\times \\text{II} = 1 \\times a \\Rightarrow a = \\text{II}$. • Trong $\\ce{SO2}$: $1 \\times a = 2 \\times \\text{II} \\Rightarrow a = \\text{IV}$. • Trong $\\ce{SO3}$: $1 \\times a = 3 \\times \\text{II} \\Rightarrow a = \\text{VI}$. Thứ tự tăng dần: $\\ce{H2S} = \\ce{FeS} (\\text{II}) < \\ce{SO2} (\\text{IV}) < \\ce{SO3} (\\text{VI})$.",
      rubric: [
        { step: "Tính đúng hóa trị của S trong cả 4 chất (II, II, IV, VI)", points: 0.75 },
        { step: "Sắp xếp đúng thứ tự tăng dần", points: 0.25 }
      ] },
    { id: "w14_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong các công thức hóa học sau đây, công thức nào viết sai? Hãy sửa lại cho đúng: $\\ce{Ca(OH)2, AlSO4, Na2CO3, Fe2(NO3)3, K3PO4}$.",
      solution: "Các công thức sai là $\\ce{AlSO4}$ và $\\ce{Fe2(NO3)3}$. Sửa lại: • Al(III) và $\\text{SO}_4$(II) $\\rightarrow \\ce{Al2(SO4)3}$. • Fe(III) (hoặc Fe(II)) và $\\text{NO}_3$(I) $\\rightarrow \\ce{Fe(NO3)3}$ hoặc $\\ce{Fe(NO3)2}$. (Các công thức $\\ce{Ca(OH)2, Na2CO3, K3PO4}$ đều đúng).",
      rubric: [
        { step: "Chỉ đúng 2 công thức sai là $\\ce{AlSO4}$ và $\\ce{Fe2(NO3)3}$", points: 0.5 },
        { step: "Sửa đúng thành $\\ce{Al2(SO4)3}$ và $\\ce{Fe(NO3)3}$ (hoặc $\\ce{Fe(NO3)2}$)", points: 0.5 }
      ] },
    { id: "w14_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Oxide cao nhất của một nguyên tố kim loại R có dạng $\\ce{R2O3}$. Hãy viết công thức hóa học của hợp chất tạo bởi R với gốc chloride ($-\\text{Cl}$, hóa trị I) và với gốc sulfate ($=\\text{SO}_4$, hóa trị II).",
      solution: "Từ $\\ce{R2O3}$ (O hóa trị II) $\\Rightarrow$ hóa trị của R là III. • Với gốc $-\\text{Cl}$ (hóa trị I): $\\ce{RCl3}$. • Với gốc $=\\text{SO}_4$ (hóa trị II): $\\ce{R2(SO4)3}$.",
      rubric: [
        { step: "Tìm đúng hóa trị của R là III", points: 0.25 },
        { step: "Viết đúng $\\ce{RCl3}$ (0,375đ) và $\\ce{R2(SO4)3}$ (0,375đ)", points: 0.75 }
      ] },
    { id: "w14_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong tinh thể sắt từ $\\ce{Fe3O4}$ (hợp chất oxit sắt từ), sắt tồn tại đồng thời ở cả hai hóa trị là II và III. Hãy chứng minh $\\ce{Fe3O4}$ có thể viết dưới dạng hỗn hợp của $\\ce{FeO}$ và $\\ce{Fe2O3}$ theo tỉ lệ mol $1 : 1$.",
      solution: "Trong $\\ce{FeO}$, Fe có hóa trị II. Trong $\\ce{Fe2O3}$, Fe có hóa trị III. Nếu ghép 1 phân tử $\\ce{FeO}$ với 1 phân tử $\\ce{Fe2O3}$ theo tỉ lệ $1:1$ ta được: $(1 + 2)$ nguyên tử Fe và $(1 + 3)$ nguyên tử O $\\Rightarrow \\ce{Fe3O4}$ (tức $\\ce{FeO.Fe2O3}$).",
      rubric: [
        { step: "Chỉ ra hóa trị II trong $\\ce{FeO}$ và hóa trị III trong $\\ce{Fe2O3}$", points: 0.5 },
        { step: "Cộng tỉ lệ $1:1$ ra đúng công thức $\\ce{Fe3O4}$", points: 0.5 }
      ] },
    { id: "w14_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một kim loại M tạo hợp chất với nhóm $\\text{SO}_4$ có công thức $\\ce{M2(SO4)}_n$ có phân tử khối là $342\\text{ amu}$ (biết $n$ là hóa trị của M, $1 \\le n \\le 3$; $\\text{S}=32, \\text{O}=16$). Xác định hóa trị $n$ và tên kim loại M.",
      quickAnswer: "27",
      solution: "Ta có $2M_M + 96n = 342 \\Rightarrow M_M = 171 - 48n$. Lập bảng thử $n = 1, 2, 3$: • $n = 1 \\Rightarrow M_M = 123$ (loại). • $n = 2 \\Rightarrow M_M = 75$ (loại, As là phi kim). • $n = 3 \\Rightarrow M_M = 171 - 144 = 27\\text{ amu}$ (Aluminium, $\\text{Al}$, hợp lý!). Công thức là $\\ce{Al2(SO4)3}$.",
      rubric: [
        { step: "Lập đúng phương trình $2M_M + 96n = 342$", points: 0.5 },
        { step: "Biện luận $n = 1, 2, 3$ chọn đúng $n = 3$, $M = 27$ (Aluminium)", points: 0.5 }
      ] }
  ]
};
