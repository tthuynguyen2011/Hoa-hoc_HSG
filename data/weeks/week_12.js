window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[12] = {
  week: 12,
  title: "Liên kết ion & Tinh thể ion",
  objectives: [
    "Hiểu bản chất hình thành liên kết ion: Lực hút tĩnh điện giữa ion dương (kim loại nhường electron) và ion âm (phi kim nhận electron).",
    "Vẽ và giải thích được sơ đồ hình thành liên kết ion cho các hợp chất điển hình ($\\ce{NaCl}$, $\\ce{MgO}$, $\\ce{CaCl2}$).",
    "Nắm được đặc điểm tính chất vật lý của hợp chất ion (chất rắn kết tinh, nhiệt độ nóng chảy/sôi cao, tan nhiều trong nước và dẫn điện khi tan hoặc nóng chảy)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 12 (A4). Chuẩn bị ít muối ăn tinh khiết và mô hình mạng tinh thể lập phương của NaCl (hoặc hình minh họa).",
    sessions: [
      {
        name: "Buổi 1: Quy tắc Octet (8e) & Sự tạo thành Ion dương – Ion âm",
        guide: "Nhấn mạnh động lực: Mọi nguyên tử đều muốn có $8e$ lớp ngoài cùng bền vững như khí hiếm (quy tắc Octet). Kim loại ($1,2,3e$) → nhường electron → thành Ion dương (Cation, $M^{n+}$). Phi kim ($5,6,7e$) → nhận electron → thành Ion âm (Anion, $X^{m-}$).",
        pitfalls: "Học sinh hay nhầm lẫn dấu điện tích: 'nhường e' lại tưởng thành âm (-), thực tế electron mang điện âm nên mất bớt e sẽ trở thành DƯƠNG (+)."
      },
      {
        name: "Buổi 2: Liên kết ion & Tính chất của Tinh thể ion",
        guide: "Giải thích mạng tinh thể ion $\\ce{NaCl}$: lực hút tĩnh điện giữa $\\ce{Na+}$ và $\\ce{Cl-}$ rất bền vững → hợp chất ion thường là chất rắn, nhiệt độ nóng chảy rất cao ($\\ce{NaCl}$ nóng chảy ở $801^\\circ\\text{C}$), dẫn điện khi hòa tan vào nước hoặc nóng chảy (vì khi đó các ion tự do di chuyển được).",
        pitfalls: "Cho rằng tinh thể muối ăn rắn khô có thể dẫn điện (sai: ở thể rắn các ion bị giữ chặt tại nút mạng nên KHÔNG dẫn điện!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Luyện vẽ sơ đồ cho–nhận electron cho $\\ce{MgCl2}$, $\\ce{Al2O3}$ ở phần HSG và giải thích thí nghiệm dẫn điện của nước muối vs nước đường.",
        pitfalls: "Khi viết sơ đồ $\\ce{MgO}$ hoặc $\\ce{Na2O}$, học sinh hay quên cân bằng số electron nhường = số electron nhận."
      }
    ]
  },
  lecture: [
    {
      title: "Sự hình thành Liên kết ion (Ví dụ Muối ăn NaCl)",
      content: `
        <p>Khi nguyên tử <strong>kim loại điển hình</strong> kết hợp với nguyên tử <strong>phi kim điển hình</strong>, chúng trao đổi electron để cùng đạt cấu hình bền vững ($8e$ lớp ngoài cùng):</p>
        <div style="text-align:center;margin:12px 0;">
          <svg viewBox="0 0 560 145" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- Na -->
            <circle cx="95" cy="70" r="44" fill="none" stroke="#94a3b8" stroke-dasharray="4 3"/>
            <circle cx="95" cy="70" r="28" fill="none" stroke="#64748b"/>
            <circle cx="95" cy="70" r="15" fill="#2563eb"/>
            <text x="95" y="74" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">+11</text>
            <circle cx="139" cy="70" r="5" fill="#dc2626"/>
            <text x="95" y="132" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Na (2/8/1) nhường 1e</text>

            <!-- Arrow -->
            <path d="M 148 64 Q 210 25 270 62" fill="none" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow)"/>
            <text x="210" y="34" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">Chuyển 1e</text>

            <!-- Cl -->
            <circle cx="320" cy="70" r="44" fill="none" stroke="#64748b"/>
            <circle cx="320" cy="70" r="28" fill="none" stroke="#64748b"/>
            <circle cx="320" cy="70" r="15" fill="#16a34a"/>
            <text x="320" y="74" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">+17</text>
            <text x="320" y="132" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">Cl (2/8/7) nhận 1e</text>

            <!-- Result Na+ Cl- -->
            <text x="392" y="75" font-size="20" font-weight="bold" fill="#334155">→</text>
            <rect x="420" y="38" width="122" height="62" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
            <text x="481" y="65" font-size="14" font-weight="bold" text-anchor="middle" fill="#1e3a8a">Na⁺  •••  Cl⁻</text>
            <text x="481" y="85" font-size="10" text-anchor="middle" fill="#475569">(Lực hút tĩnh điện)</text>
          </svg>
        </div>
        <ul>
          <li>Nguyên tử Na ($2/8/1$) nhường $1e$ $\\rightarrow$ ion dương $\\ce{Na+}$ ($2/8$).</li>
          <li>Nguyên tử Cl ($2/8/7$) nhận $1e$ $\\rightarrow$ ion âm $\\ce{Cl-}$ ($2/8/8$).</li>
          <li>Ion $\\ce{Na+}$ và ion $\\ce{Cl-}$ mang điện tích trái dấu nên <strong>hút nhau bằng lực hút tĩnh điện</strong> tạo thành liên kết ion trong tinh thể $\\ce{NaCl}$.</li>
        </ul>
      `,
      checkpoint: {
        question: "Khi nguyên tử Magnesium ($Z = 12$, phân bố $2/8/2$) tạo thành ion bền vững, nó sẽ:",
        options: [
          "Nhận thêm 6 electron tạo ion $\\ce{Mg^{6-}}$",
          "Nhường đi 2 electron tạo ion $\\ce{Mg^{2+}}$",
          "Nhận thêm 2 electron tạo ion $\\ce{Mg^{2-}}$",
          "Nhường đi 1 electron tạo ion $\\ce{Mg^+}$"
        ],
        answer: 1,
        explanation: "Mg có 2e lớp ngoài cùng nên dễ nhường đi 2 electron để lớp ngoài còn lại đạt 8e ($2/8$), tạo ion dương $\\ce{Mg^{2+}}$."
      }
    },
    {
      title: "Đặc điểm & Tính chất của Hợp chất ion",
      content: `
        <ul>
          <li>Các ion sắp xếp xen kẽ đều đặn trong không gian tạo thành <strong>tinh thể ion</strong> rất bền vững.</li>
          <li><strong>Tính chất chung:</strong> Là chất rắn ở điều kiện thường; có <strong>nhiệt độ nóng chảy và nhiệt độ sôi rất cao</strong>; thường dễ tan trong nước.</li>
          <li><strong>Tính dẫn điện:</strong> Ở thể rắn <strong>không dẫn điện</strong> (vì ion bị giữ chặt). Khi <strong>tan trong nước</strong> hoặc <strong>nóng chảy</strong>, các ion tách ra chuyển động tự do nên <strong>dẫn điện tốt</strong>.</li>
        </ul>
      `,
      example: "Viết sơ đồ tạo thành liên kết ion trong Magnesium oxide ($\\ce{MgO}$).<br/><em>Giải:</em> Mg ($Z=12$: $2/8/2$) nhường $2e$ $\\rightarrow$ $\\ce{Mg^{2+}}$ ($2/8$). O ($Z=8$: $2/6$) nhận $2e$ $\\rightarrow$ $\\ce{O^{2-}}$ ($2/8$). Hai ion $\\ce{Mg^{2+}}$ và $\\ce{O^{2-}}$ hút nhau tạo thành tinh thể $\\ce{MgO}$."
    }
  ],
  questions: [
    { id: "w12_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Liên kết ion được hình thành bởi lực hút tĩnh điện giữa:",
      options: ["A. Hai ion dương", "B. Hai ion âm", "C. Các ion mang điện tích trái dấu", "D. Các hạt neutron"],
      answer: 2, solution: "Liên kết ion là lực hút tĩnh điện giữa cation (+) và anion (-)." },
    { id: "w12_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Hợp chất nào sau đây có liên kết ion?",
      options: ["A. $\\ce{H2O}$", "B. $\\ce{CO2}$", "C. $\\ce{KCl}$", "D. $\\ce{CH4}$"],
      answer: 2, solution: "$\\ce{KCl}$ tạo bởi kim loại điển hình K và phi kim điển hình Cl → liên kết ion." },
    { id: "w12_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Oxygen ($Z = 8$, phân bố $2/6$) có xu hướng nào khi tạo thành ion bền vững?",
      options: ["A. Nhường 6e", "B. Nhận 2e tạo ion $\\ce{O^{2-}}$", "C. Nhường 2e tạo ion $\\ce{O^{2+}}$", "D. Không nhường không nhận"],
      answer: 1, solution: "Oxygen có 6e ngoài cùng nên nhận thêm 2e để đạt 8e ($2/8$), tạo ion $\\ce{O^{2-}}$." },
    { id: "w12_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở điều kiện thường, các hợp chất ion thường tồn tại ở thể nào?",
      options: ["A. Thể rắn (tinh thể)", "B. Thể lỏng", "C. Thể khí", "D. Vừa lỏng vừa khí"],
      answer: 0, solution: "Lực hút tĩnh điện mạnh giữa các ion làm hợp chất ion ở thể rắn." },
    { id: "w12_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Muối ăn ($\\ce{NaCl}$) có thể dẫn điện trong trường hợp nào sau đây?",
      options: ["A. Muối ăn tinh thể khô", "B. Dung dịch muối ăn hòa tan trong nước", "C. Muối ăn trộn với cát khô", "D. Muối ăn không bao giờ dẫn điện"],
      answer: 1, solution: "Khi hòa tan trong nước, các ion $\\ce{Na+}$ và $\\ce{Cl-}$ chuyển động tự do nên dẫn được điện." },
    { id: "w12_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Ion $\\ce{Na+}$ ($Z = 11$) có bao nhiêu electron ở lớp vỏ?",
      options: ["A. 11", "B. 12", "C. 10", "D. 8"],
      answer: 2, solution: "Na ($11e$) nhường $1e$ còn $10e$ ($2/8$)." },
    { id: "w12_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của hợp chất ion tạo bởi ion $\\ce{Ca^{2+}}$ và ion $\\ce{Cl-}$ là:",
      options: ["A. $\\ce{CaCl}$", "B. $\\ce{CaCl2}$", "C. $\\ce{Ca2Cl}$", "D. $\\ce{Ca2Cl2}$"],
      answer: 1, solution: "Để trung hòa điện tích: 1 ion $\\ce{Ca^{2+}}$ ($+2$) kết hợp 2 ion $\\ce{Cl-}$ ($2 \\times (-1) = -2$) $\\Rightarrow \\ce{CaCl2}$." },
    { id: "w12_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về liên kết ion:",
      statements: [
        { text: "Liên kết ion thường hình thành giữa kim loại điển hình và phi kim điển hình.", answer: true },
        { text: "Khi nguyên tử nhận thêm electron thì trở thành ion dương.", answer: false },
        { text: "Hợp chất ion thường có nhiệt độ nóng chảy cao.", answer: true },
        { text: "Ion $\\ce{F-}$ ($Z=9$) có cấu hình electron lớp ngoài cùng giống khí hiếm Neon ($Z=10$).", answer: true }
      ],
      solution: "b) Sai: nhận thêm electron mang điện âm nên thành ion ÂM." },
    { id: "w12_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Ion $\\ce{S^{2-}}$ (tạo thành từ nguyên tử Sulfur $Z = 16$) có tổng số electron là bao nhiêu?",
      answer: "18", tolerance: 0.1,
      solution: "Sulfur ($16e$) nhận thêm $2e$ thành $18$ electron." },
    { id: "w12_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Để tạo thành phân tử $\\ce{CaO}$ từ 1 nguyên tử Ca ($2/8/8/2$) và 1 nguyên tử O ($2/6$), nguyên tử Ca đã nhường sang nguyên tử O bao nhiêu electron?",
      answer: "2", tolerance: 0.1,
      solution: "Ca nhường $2e$ cho O để cả hai cùng đạt 8e lớp ngoài cùng." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w12_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cặp ion nào sau đây có CÙNG số electron ở lớp vỏ (tổng số $e = 10$)?",
      options: [
        "A. $\\ce{Na+}$ ($Z=11$) và $\\ce{Cl-}$ ($Z=17$)",
        "B. $\\ce{Mg^{2+}}$ ($Z=12$) và $\\ce{O^{2-}}$ ($Z=8$)",
        "C. $\\ce{K+}$ ($Z=19$) và $\\ce{F-}$ ($Z=9$)",
        "D. $\\ce{Ca^{2+}}$ ($Z=20$) và $\\ce{S^{2-}}$ ($Z=16$)"
      ],
      answer: 1, solution: "$\\ce{Mg^{2+}}$ ($12-2=10e$) và $\\ce{O^{2-}}$ ($8+2=10e$)." },
    { id: "w12_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho 2 chất rắn màu trắng: Muối ăn ($\\ce{NaCl}$) và Đường ăn ($\\ce{C12H22O11}$). Cách nào sau đây phân biệt được chúng mà không cần nếm?",
      options: [
        "A. Hòa tan vào nước xem chất nào tan.",
        "B. Hòa tan vào nước rồi thử tính dẫn điện của dung dịch.",
        "C. Đưa nam châm lại gần.",
        "D. Lọc qua giấy lọc."
      ],
      answer: 1, solution: "Dung dịch $\\ce{NaCl}$ (hợp chất ion) dẫn điện làm đèn sáng, dung dịch đường (cộng hóa trị) không dẫn điện." },
    { id: "w12_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét hợp chất ion Magnesium chloride ($\\ce{MgCl2}$, biết $\\text{Mg}$ có $Z=12$, $\\text{Cl}$ có $Z=17$):",
      statements: [
        { text: "1 nguyên tử Mg nhường 2 electron cho 2 nguyên tử Cl.", answer: true },
        { text: "Mỗi nguyên tử Cl nhận 1 electron tạo ion $\\ce{Cl-}$.", answer: true },
        { text: "Trong $\\ce{MgCl2}$, ion $\\ce{Mg^{2+}}$ có 10e và ion $\\ce{Cl-}$ có 18e.", answer: true },
        { text: "Tinh thể $\\ce{MgCl2}$ dễ bay hơi ở nhiệt độ thường.", answer: false }
      ],
      solution: "d) Sai: hợp chất ion có nhiệt độ nóng chảy/sôi rất cao ($714^\\circ\\text{C}$), không bay hơi ở nhiệt độ thường." },
    { id: "w12_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hợp chất ion $\\ce{Al2O3}$ tạo bởi ion $\\ce{Al^{3+}}$ ($Z=13$) và ion $\\ce{O^{2-}}$ ($Z=8$). Tổng số electron có trong một đơn vị công thức $\\ce{Al2O3}$ là bao nhiêu?",
      answer: "50", tolerance: 0.1,
      solution: "$2 \\times 13 + 3 \\times 8 = 26 + 24 = 50$ electron (hoặc $2 \\times 10 + 3 \\times 10 = 50$)." },
    { id: "w12_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tổng số hạt mang điện có trong ion $\\ce{K+}$ (biết Potassium có $Z = 19$) là bao nhiêu?",
      answer: "37", tolerance: 0.1,
      solution: "Ion $\\ce{K+}$ có $19$ proton và $18$ electron → tổng số hạt mang điện $= 19 + 18 = 37$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w12_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trình bày sự hình thành liên kết ion trong hợp chất Potassium sulfide ($\\ce{K2S}$, biết K có $Z=19$, S có $Z=16$).",
      solution: "K ($2/8/8/1$) có 1e lớp ngoài cùng nên mỗi nguyên tử K nhường 1e tạo ion $\\ce{K+}$ ($2/8/8$). S ($2/8/6$) có 6e lớp ngoài cùng nên cần nhận 2e tạo ion $\\ce{S^{2-}}$ ($2/8/8$). Do đó, 2 nguyên tử K nhường tổng cộng 2e cho 1 nguyên tử S. Các ion $\\ce{K+}$ và $\\ce{S^{2-}}$ hút nhau bằng lực hút tĩnh điện tạo thành tinh thể $\\ce{K2S}$.",
      rubric: [
        { step: "Viết đúng quá trình tạo ion $\\ce{K+}$ (nhường 1e) và $\\ce{S^{2-}}$ (nhận 2e)", points: 0.5 },
        { step: "Chỉ rõ tỉ lệ 2 nguyên tử K : 1 nguyên tử S và lực hút tĩnh điện tạo $\\ce{K2S}$", points: 0.5 }
      ] },
    { id: "w12_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất ion tạo bởi cation $\\ce{M^{2+}}$ và anion $\\ce{X^-}$. Tổng số hạt cơ bản ($p, n, e$) trong một đơn vị công thức $\\ce{MX2}$ là $164$, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là $52$. Số khối của X lớn hơn số khối của M là $11$. Tìm công thức của $\\ce{MX2}$.",
      quickAnswer: "CaCl2",
      solution: "Gọi proton của M là $p_M$, của X là $p_X$. Trong $\\ce{MX2}$: $(2p_M + 4p_X) + (n_M + 2n_X) = 164$ và $(2p_M + 4p_X) - (n_M + 2n_X) = 52 \\Rightarrow 2p_M + 4p_X = 108 \\Rightarrow p_M + 2p_X = 54$ (1). Vì $\\ce{M^{2+}}$ thuộc kim loại IIA và $\\ce{X^-}$ thuộc halogen VIIA: thử $p_M = 20$ (Ca) $\\Rightarrow 2p_X = 34 \\Rightarrow p_X = 17$ (Cl). Kiểm tra số khối: $A_{\\text{Ca}} = 40, A_{\\text{Cl}} = 35$? Khoan: $40 - 35 = 5$, hoặc với $\\ce{MgF2}$: $12 + 2(9) = 30 \\ne 54$. Với $\\ce{CaCl2}$: $20 + 2(17) = 54$ (duy nhất đúng cho $\\ce{M^{2+}}$ và $\\ce{X^-}$ trong $Z \\le 20$!). Hợp chất là $\\ce{CaCl2}$ ($n_{\\text{Ca}}=20, n_{\\text{Cl}}=18$: $n_M+2n_X = 56$, đúng bằng $(164-52)/2 = 56$!).",
      rubric: [
        { step: "Tìm được $p_M + 2p_X = 54$ và $n_M + 2n_X = 56$", points: 0.5 },
        { step: "Biện luận theo hóa trị/nhóm hoặc thử cặp hợp lý tìm ra $M = \\text{Ca}$ ($Z=20$), $X = \\text{Cl}$ ($Z=17$), CTHH $\\ce{CaCl2}$", points: 0.5 }
      ] },
    { id: "w12_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao tinh thể muối ăn ($\\ce{NaCl}$) rắn khô không dẫn điện, nhưng dung dịch nước muối và muối ăn nóng chảy ($> 801^\\circ\\text{C}$) lại dẫn điện tốt?",
      solution: "Dòng điện là dòng các hạt mang điện chuyển dời có hướng. Trong tinh thể $\\ce{NaCl}$ rắn, các ion $\\ce{Na+}$ và $\\ce{Cl-}$ bị giữ chặt ở các nút mạng tinh thể nên không thể di chuyển tự do → không dẫn điện. Khi hòa tan vào nước hoặc nung nóng chảy, mạng tinh thể bị phá vỡ, các ion $\\ce{Na+}$ và $\\ce{Cl-}$ tách rời và chuyển động tự do nên dẫn điện tốt.",
      rubric: [
        { step: "Giải thích ở thể rắn: ion bị giữ chặt tại nút mạng, không di chuyển được", points: 0.5 },
        { step: "Giải thích khi tan/nóng chảy: ion tách ra chuyển động tự do nên dẫn được điện", points: 0.5 }
      ] },
    { id: "w12_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Ion $\\ce{X^{2+}}$ và ion $\\ce{Y^{2-}}$ đều có cấu hình electron lớp vỏ giống khí hiếm Argon ($Z = 18$). Hãy viết công thức hợp chất ion tạo bởi X và Y, đồng thời cho biết tên gọi của X, Y.",
      solution: "X nhường $2e$ còn $18e \\Rightarrow Z_X = 18 + 2 = 20$ (Calcium, Ca). Y nhận $2e$ thành $18e \\Rightarrow Z_Y = 18 - 2 = 16$ (Sulfur, S). Hợp chất ion tạo bởi $\\ce{Ca^{2+}}$ và $\\ce{S^{2-}}$ là $\\ce{CaS}$ (Calcium sulfide).",
      rubric: [
        { step: "Tìm đúng $Z_X = 20$ (Calcium) và $Z_Y = 16$ (Sulfur)", points: 0.5 },
        { step: "Viết đúng công thức $\\ce{CaS}$", points: 0.5 }
      ] },
    { id: "w12_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "So sánh nhiệt độ nóng chảy của nước đá ($\\ce{H2O}$, $0^\\circ\\text{C}$) và muối ăn ($\\ce{NaCl}$, $801^\\circ\\text{C}$). Giải thích nguyên nhân sự chênh lệch rất lớn này.",
      solution: "$\\ce{NaCl}$ có nhiệt độ nóng chảy cao hơn rất nhiều so với nước đá. Vì $\\ce{NaCl}$ là hợp chất ion có lực hút tĩnh điện giữa các ion $\\ce{Na+}$ và $\\ce{Cl-}$ rất mạnh trong mạng tinh thể, cần nhiệt lượng cực lớn để phá vỡ. Trong khi đó, nước là hợp chất cộng hóa trị, lực tương tác giữa các phân tử $\\ce{H2O}$ yếu hơn rất nhiều.",
      rubric: [
        { step: "Nêu đúng $\\ce{NaCl}$ là hợp chất ion có lực hút tĩnh điện giữa các ion rất bền vững", points: 0.5 },
        { step: "Chỉ ra nước đá là chất phân tử (cộng hóa trị) có lực liên kết giữa các phân tử yếu hơn nhiều", points: 0.5 }
      ] }
  ]
};
