window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[23] = {
  week: 23,
  title: "Thể tích mol chất khí ở đkc (24,79 L/mol) & Tỉ khối chất khí",
  objectives: [
    "Nắm vững chuẩn GDPT 2018: Ở điều kiện chuẩn (đkc: $25^\\circ\\text{C}$, $1\\text{ bar}$), $1\\text{ mol}$ chất khí bất kỳ đều chiếm thể tích $24,79\\text{ L}$.",
    "Vận dụng thành thạo công thức $V = 24,79 \\cdot n$ và $n = \\frac{V}{24,79}$.",
    "Tính được Tỉ khối của khí A đối với khí B ($d_{A/B} = \\frac{M_A}{M_B}$) và đối với không khí ($d_{A/\\text{kk}} = \\frac{M_A}{29}$) để biết khí nào nặng/nhẹ hơn không khí."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 23 (A4). Nhấn mạnh chuẩn mới 24,79 L/mol (khác với sách cũ 22,4 L/mol ở 0°C, 1 atm).",
    sessions: [
      {
        name: "Buổi 1: Thể tích mol chất khí ở đkc ($24,79\\text{ L/mol}$)",
        guide: "Giải thích định luật Avogadro: Các chất khí khác nhau ($\\ce{H2, O2, CO2}$) dù kích thước phân tử khác nhau nhưng ở cùng nhiệt độ, áp suất thì khoảng cách giữa các phân tử rất lớn nên $1\\text{ mol}$ khí nào cũng chiếm $24,79\\text{ L}$ ở đkc ($25^\\circ\\text{C}, 1\\text{ bar}$).",
        pitfalls: "Học sinh đọc tài liệu cũ hay dùng nhầm $22,4\\text{ L/mol}$ (sai chuẩn thi GDPT 2018 hiện nay!) hoặc áp dụng công thức $V = 24,79 \\cdot n$ cho chất RẮN / LỎNG (cực kỳ sai!)."
      },
      {
        name: "Buổi 2: Tỉ khối chất khí & Cách thu khí trong PTN",
        guide: "Khí nặng hơn không khí ($M > 29$: $\\ce{CO2}, \\ce{O2}, \\ce{SO2}, \\ce{Cl2}$) $\\rightarrow$ thu bằng cách đặt bình NGỬA (đẩy không khí hướng xuống). Khí nhẹ hơn không khí ($M < 29$: $\\ce{H2}, \\ce{CH4}, \\ce{NH3}$) $\\rightarrow$ đặt bình ÚP NGƯỢC.",
        pitfalls: "Nhầm lẫn vị trí ống dẫn khí khi thu bằng phương pháp đẩy không khí (khí nặng đặt ngửa bình, khí nhẹ úp bình)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán hỗn hợp khí HSG",
        guide: "Rèn 5 câu HSG: tính $\\overline{M}$ của hỗn hợp khí, áp dụng sơ đồ đường chéo tính % thể tích hỗn hợp 2 khí.",
        pitfalls: "Quên rằng với chất khí đo ở cùng điều kiện, tỉ lệ thể tích chính là tỉ lệ số mol!"
      }
    ]
  },
  lecture: [
    {
      title: "Thể tích Mol chất khí ở điều kiện chuẩn (đkc: $25^\\circ\\text{C}$, $1\\text{ bar}$)",
      content: `
        <div class="callout">
          <strong>Công thức chuẩn GDPT 2018:</strong> Ở đkc ($25^\\circ\\text{C}, 1\\text{ bar}$), $1\\text{ mol}$ mọi chất khí đều có thể tích $24,79\\text{ L}$:
          <p style="text-align:center;font-size:1.08rem;margin:6px 0;">$$V_{\\text{khí (đkc)}} = 24,79 \\times n \\quad \\Longleftrightarrow \\quad n = \\frac{V_{\\text{khí (đkc)}}}{24,79}$$</p>
        </div>
        <p><strong>Chú ý:</strong> Công thức trên <strong>chỉ áp dụng cho chất KHÍ</strong>, tuyệt đối không áp dụng cho chất rắn hay chất lỏng (như nước, sắt, muối).</p>
      `,
      checkpoint: {
        question: "Ở điều kiện chuẩn ($25^\\circ\\text{C}$, $1\\text{ bar}$), $0,5\\text{ mol}$ khí $\\ce{CO2}$ có thể tích là:",
        options: ["11,2 L", "12,395 L", "24,79 L", "49,58 L"],
        answer: 1,
        explanation: "$V = 0,5 \\times 24,79 = 12,395\\text{ L}$."
      }
    },
    {
      title: "Tỉ khối chất khí & Phương pháp thu khí trong PTN",
      content: `
        <p><strong>Tỉ khối của khí A đối với khí B:</strong> $d_{A/B} = \\frac{M_A}{M_B}$.<br/>
        <strong>Tỉ khối của khí A đối với không khí ($\\overline{M}_{\\text{kk}} \\approx 29$):</strong> $d_{A/\\text{kk}} = \\frac{M_A}{29}$.</p>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 480 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- Ngửa bình: khí nặng -->
            <rect x="60" y="25" width="56" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
            <line x1="60" y1="25" x2="116" y2="25" stroke="#f8fafc" stroke-width="3"/>
            <path d="M 88 10 L 88 85" stroke="#dc2626" stroke-width="2.5"/>
            <text x="88" y="112" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#1e40af">Đặt NGỬA bình (M > 29: CO₂, O₂)</text>

            <!-- Úp bình: khí nhẹ -->
            <rect x="310" y="25" width="56" height="70" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
            <line x1="310" y1="95" x2="366" y2="95" stroke="#f8fafc" stroke-width="3"/>
            <path d="M 338 105 L 338 35" stroke="#16a34a" stroke-width="2.5"/>
            <text x="338" y="112" font-size="10.5" font-weight="bold" text-anchor="middle" fill="#92400e">ÚP NGƯỢC bình (M < 29: H₂, NH₃)</text>
          </svg>
        </div>
      `,
      example: "Khí Sulfur dioxide ($\\ce{SO2}$, $M = 64$) nặng hay nhẹ hơn không khí bao nhiêu lần? Để thu khí $\\ce{SO2}$ bằng phương pháp đẩy không khí ta đặt bình như thế nào?<br/><em>Giải:</em> $d_{\\ce{SO2}/\\text{kk}} = \\frac{64}{29} \\approx 2,21 > 1 \\Rightarrow \\ce{SO2}$ nặng hơn không khí $2,21$ lần. Thu bằng cách <strong>đặt ngửa bình</strong>."
    }
  ],
  questions: [
    { id: "w23_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở điều kiện chuẩn ($25^\\circ\\text{C}$, $1\\text{ bar}$), $1\\text{ mol}$ khí bất kỳ chiếm thể tích bằng:",
      options: ["A. $22,4\\text{ L}$", "B. $24,0\\text{ L}$", "C. $24,79\\text{ L}$", "D. $29,0\\text{ L}$"],
      answer: 2, solution: "Theo chuẩn GDPT 2018, $V_{\\text{mol (đkc)}} = 24,79\\text{ L}$." },
    { id: "w23_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Thể tích (ở đkc) của $0,2\\text{ mol}$ khí Oxygen ($\\ce{O2}$) là:",
      options: ["A. $4,958\\text{ L}$", "B. $4,48\\text{ L}$", "C. $2,479\\text{ L}$", "D. $24,79\\text{ L}$"],
      answer: 0, solution: "$V = 0,2 \\times 24,79 = 4,958\\text{ L}$." },
    { id: "w23_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Số mol của $7,437\\text{ L}$ khí Nitrogen ($\\ce{N2}$) đo ở đkc là:",
      options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,3\\text{ mol}$", "D. $0,4\\text{ mol}$"],
      answer: 2, solution: "$n = 7,437 / 24,79 = 0,3\\text{ mol}$." },
    { id: "w23_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí nào sau đây NHẸ hơn không khí ($M_{\\text{kk}} \\approx 29$)?",
      options: ["A. $\\ce{CO2}$ ($M=44$)", "B. $\\ce{SO2}$ ($M=64$)", "C. $\\ce{CH4}$ ($M=16$)", "D. $\\ce{O2}$ ($M=32$)"],
      answer: 2, solution: "$M_{\\ce{CH4}} = 16 < 29$ nên nhẹ hơn không khí." },
    { id: "w23_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Tỉ khối của khí Carbon dioxide ($\\ce{CO2}$) đối với khí Hydrogen ($\\ce{H2}$) là:",
      options: ["A. $11$", "B. $22$", "C. $44$", "D. $1,52$"],
      answer: 1, solution: "$d_{\\ce{CO2}/\\ce{H2}} = 44 / 2 = 22$." },
    { id: "w23_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi thu khí $\\ce{H2}$ ($M=2$) bằng phương pháp đẩy không khí, ta phải đặt bình thu như thế nào?",
      options: ["A. Đặt ngửa bình", "B. Đặt úp ngược bình", "C. Đặt nằm ngang", "D. Không thu được"],
      answer: 1, solution: "Khí $\\ce{H2}$ rất nhẹ ($2 < 29$) sẽ bay lên trên nên phải úp ngược bình." },
    { id: "w23_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở cùng điều kiện nhiệt độ và áp suất, $1\\text{ mol}$ $\\ce{CO2}$ và $1\\text{ mol}$ $\\ce{H2}$ có:",
      options: ["A. Khối lượng bằng nhau", "B. Thể tích bằng nhau", "C. Phân tử khối bằng nhau", "D. Tỉ khối bằng 1"],
      answer: 1, solution: "Cùng số mol khí ở cùng điều kiện thì thể tích bằng nhau ($24,79\\text{ L}$ ở đkc)." },
    { id: "w23_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Ở đkc, $0,1\\text{ mol}$ khí $\\ce{Cl2}$ chiếm thể tích $2,479\\text{ L}$.", answer: true },
        { text: "Ở đkc, $1\\text{ mol}$ nước lỏng ($\\ce{H2O}$) chiếm thể tích $24,79\\text{ L}$.", answer: false },
        { text: "Khí $\\ce{NH3}$ ($M=17$) nhẹ hơn không khí.", answer: true },
        { text: "Khí $\\ce{O2}$ ($M=32$) nặng gấp $16$ lần khí $\\ce{H2}$ ($M=2$).", answer: true }
      ],
      solution: "b) Sai vì công thức $24,79\\text{ L/mol}$ chỉ áp dụng cho chất KHÍ." },
    { id: "w23_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính khối lượng (gam) của $4,958\\text{ L}$ khí $\\ce{CO2}$ đo ở đkc ($\\text{C}=12, \\text{O}=16$).",
      answer: "8.8", tolerance: 0.05,
      solution: "$n = 4,958 / 24,79 = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 44 = 8,8\\text{ g}$." },
    { id: "w23_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Ở đkc, $6,4\\text{ g}$ khí $\\ce{SO2}$ ($M=64$) chiếm thể tích bao nhiêu lít?",
      answer: "2.479", tolerance: 0.01,
      solution: "$n = 6,4 / 64 = 0,1\\text{ mol} \\Rightarrow V = 0,1 \\times 24,79 = 2,479\\text{ L}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w23_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Khí X có tỉ khối đối với khí Oxygen ($\\ce{O2}$) là $1,375$. Khí X có thể là khí nào sau đây?",
      options: ["A. $\\ce{CO}$ ($M=28$)", "B. $\\ce{CO2}$ ($M=44$)", "C. $\\ce{SO2}$ ($M=64$)", "D. $\\ce{CH4}$ ($M=16$)"],
      answer: 1, solution: "$M_X = 1,375 \\times 32 = 44\\text{ g/mol} \\Rightarrow \\ce{CO2}$." },
    { id: "w23_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một hỗn hợp khí gồm $0,3\\text{ mol}\\ \\ce{N2}$ và $0,2\\text{ mol}\\ \\ce{CO2}$. Thể tích của hỗn hợp khí này ở đkc là:",
      options: ["A. $4,958\\text{ L}$", "B. $7,437\\text{ L}$", "C. $12,395\\text{ L}$", "D. $24,79\\text{ L}$"],
      answer: 2, solution: "$n_{\\text{hh}} = 0,3 + 0,2 = 0,5\\text{ mol} \\Rightarrow V = 0,5 \\times 24,79 = 12,395\\text{ L}$." },
    { id: "w23_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét 2 bình kín có cùng thể tích $2,479\\text{ L}$ ở đkc: Bình 1 chứa khí $\\ce{O2}$, Bình 2 chứa khí $\\ce{CH4}$:",
      statements: [
        { text: "Số mol khí trong hai bình đều bằng $0,1\\text{ mol}$.", answer: true },
        { text: "Số phân tử khí trong hai bình bằng nhau.", answer: true },
        { text: "Khối lượng khí ở Bình 1 nặng gấp đôi Bình 2.", answer: true },
        { text: "Số nguyên tử trong Bình 1 nhiều hơn Bình 2.", answer: false }
      ],
      solution: "d) Sai: Bình 1 có $0,1 \\times 2 = 0,2\\text{ mol}$ nguyên tử; Bình 2 có $0,1 \\times 5 = 0,5\\text{ mol}$ nguyên tử." },
    { id: "w23_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở đkc, một bình chứa $12,395\\text{ L}$ khí X có khối lượng là $14\\text{ g}$. Tính khối lượng mol ($\\text{g/mol}$) của khí X.",
      answer: "28", tolerance: 0.1,
      solution: "$n_X = 12,395 / 24,79 = 0,5\\text{ mol} \\Rightarrow M_X = 14 / 0,5 = 28\\text{ g/mol}$ ($\\ce{N2}$ hoặc $\\ce{CO}$)." },
    { id: "w23_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hỗn hợp khí gồm $0,1\\text{ mol}\\ \\ce{H2}$ và $0,1\\text{ mol}\\ \\ce{O2}$ có tỉ khối đối với không khí ($M_{\\text{kk}} = 29$) là bao nhiêu? (Làm tròn 2 chữ số thập phân)",
      answer: "0.59", tolerance: 0.02,
      solution: "$\\overline{M} = \\frac{0,1 \\times 2 + 0,1 \\times 32}{0,2} = 17\\text{ g/mol} \\Rightarrow d = 17 / 29 \\approx 0,59$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w23_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hỗn hợp khí X gồm $\\ce{CO2}$ và $\\ce{CH4}$ có tỉ khối đối với khí $\\ce{H2}$ là $15$. Tính phần trăm theo thể tích của mỗi khí trong hỗn hợp X.",
      quickAnswer: "50",
      solution: "$\\overline{M}_X = 15 \\times 2 = 30\\text{ g/mol}$. Gọi $a, b$ là số mol $\\ce{CO2}$ ($M=44$) và $\\ce{CH4}$ ($M=16$). Ta có $\\frac{44a + 16b}{a + b} = 30 \\Rightarrow 14a = 14b \\Rightarrow a = b$. Vậy mỗi khí chiếm $50\\%$ về thể tích.",
      rubric: [
        { step: "Tính đúng $\\overline{M}_X = 30\\text{ g/mol}$", points: 0.25 },
        { step: "Lập phương trình/đường chéo suy ra $a = b$", points: 0.5 },
        { step: "Kết luận $50\\%\\ \\ce{CO2}$ và $50\\%\\ \\ce{CH4}$", points: 0.25 }
      ] },
    { id: "w23_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao trong thực tế, khí $\\ce{CO2}$ ($M = 44$) lại thường tích tụ ở đáy các hang động sâu hoặc đáy giếng khô, gây nguy hiểm cho người bước xuống; còn khí $\\ce{CH4}$ ($M = 16$) trong hầm mỏ than lại bay lên tích tụ ở trần lò?",
      solution: "Vì $d_{\\ce{CO2}/\\text{kk}} = 44/29 \\approx 1,52 > 1$ nên khí $\\ce{CO2}$ nặng hơn không khí khoảng 1,5 lần và chìm xuống đáy giếng/hang sâu. Ngược lại, $d_{\\ce{CH4}/\\text{kk}} = 16/29 \\approx 0,55 < 1$ nên khí $\\ce{CH4}$ nhẹ hơn không khí và bay lên tích tụ ở trần hầm lò.",
      rubric: [
        { step: "Tính tỉ khối $\\ce{CO2}$ nặng hơn không khí ($44/29 > 1$) nên chìm xuống đáy", points: 0.5 },
        { step: "Tính tỉ khối $\\ce{CH4}$ nhẹ hơn không khí ($16/29 < 1$) nên bay lên trần lò", points: 0.5 }
      ] },
    { id: "w23_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cần trộn khí $\\ce{O2}$ ($M=32$) và khí $\\ce{N2}$ ($M=28$) theo tỉ lệ thể tích như thế nào để thu được một hỗn hợp khí có khối lượng mol trung bình bằng đúng $29\\text{ g/mol}$ (bằng không khí)?",
      solution: "Gọi $V_{\\ce{O2}} = a$, $V_{\\ce{N2}} = b$ (cùng đk nên tỉ lệ thể tích = tỉ lệ số mol). Ta có $\\frac{32a + 28b}{a + b} = 29 \\Rightarrow 3a = b \\Rightarrow \\frac{a}{b} = \\frac{1}{3}$ (tức $25\\%\\ \\ce{O2}$ và $75\\%\\ \\ce{N2}$).",
      rubric: [
        { step: "Lập đúng phương trình trung bình mol/đường chéo", points: 0.5 },
        { step: "Giải đúng tỉ lệ $V_{\\ce{O2}} : V_{\\ce{N2}} = 1 : 3$", points: 0.5 }
      ] },
    { id: "w23_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một bình kín dung tích $24,79\\text{ L}$ ở đkc chứa đầy một hỗn hợp gồm $0,4\\text{ mol}$ khí $\\ce{CO}$ và $x$ gam khí $\\ce{CO2}$. Tính $x$ và tỉ khối của hỗn hợp khí trong bình so với khí $\\ce{H2}$.",
      quickAnswer: "26.4",
      solution: "Tổng số mol khí trong bình $= 24,79 / 24,79 = 1\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 1 - 0,4 = 0,6\\text{ mol} \\Rightarrow x = 0,6 \\times 44 = 26,4\\text{ g}$. Tổng khối lượng khí $= 0,4 \\times 28 + 26,4 = 37,6\\text{ g} \\Rightarrow \\overline{M} = 37,6 / 1 = 37,6\\text{ g/mol}$. Tỉ khối so với $\\ce{H2} = 37,6 / 2 = 18,8$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{CO2}} = 0,6\\text{ mol}$ và $x = 26,4\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $\\overline{M} = 37,6$ và $d_{\\text{hh}/\\ce{H2}} = 18,8$", points: 0.5 }
      ] },
    { id: "w23_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ chất rắn X trong khí $\\ce{O2}$ dư thu được $4,958\\text{ L}$ khí $\\ce{XO2}$ (đo ở đkc). Xác định nguyên tố X.",
      quickAnswer: "32",
      solution: "$n_{\\ce{XO2}} = 4,958 / 24,79 = 0,2\\text{ mol}$. Bảo toàn nguyên tố X $\\Rightarrow n_X = 0,2\\text{ mol}$. Vậy $M_X = 6,4 / 0,2 = 32\\text{ g/mol}$ (Sulfur, S). Khí thu được là $\\ce{SO2}$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{XO2}} = 0,2\\text{ mol} \\Rightarrow n_X = 0,2\\text{ mol}$", points: 0.5 },
        { step: "Tính đúng $M_X = 32$ (Sulfur, S)", points: 0.5 }
      ] }
  ]
};
