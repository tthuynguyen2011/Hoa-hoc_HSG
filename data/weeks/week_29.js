window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[29] = {
  week: 29,
  title: "Bài toán pha trộn dung dịch & Quy tắc đường chéo (HSG 8)",
  objectives: [
    "Giải thành thạo bài toán pha loãng, cô đặc và pha trộn 2 dung dịch cùng chất tan (tính $C\\%$ hoặc $C_M$).",
    "Làm chủ <strong>Quy tắc đường chéo</strong> để tìm nhanh tỉ lệ khối lượng hoặc thể tích khi trộn 2 dung dịch đạt nồng độ mong muốn (dạng bài tủ thi HSG Hóa 8–9)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 29 (A4). Chuẩn bị sơ đồ đường chéo cho cả $C\\%$ và $C_M$.",
    sessions: [
      {
        name: "Buổi 1: Phương pháp Bảo toàn chất tan khi Pha trộn",
        guide: "Nguyên tắc bất biến: Khi trộn 2 dung dịch cùng chất tan (không xảy ra phản ứng): $m_{\\text{ct tổng}} = m_1 + m_2$ và $m_{\\text{dd tổng}} = m_{\\text{dd1}} + m_{\\text{dd2}}$. Nếu pha thêm nước cất, coi nước có nồng độ $C\\% = 0\\%$.",
        pitfalls: "Học sinh hay lấy trung bình cộng nồng độ $(C_1 + C_2)/2$ bất chấp khối lượng hai dung dịch khác nhau!"
      },
      {
        name: "Buổi 2: Quy tắc Đường chéo (Tăng tốc giải HSG)",
        guide: "Vẽ sơ đồ đường chéo: $\\frac{m_1}{m_2} = \\frac{|C_2 - C|}{ |C - C_1|}$ (với $C_1 < C < C_2$). Mở rộng: nước nguyên chất có $C = 0\\%$, chất tan rắn khan có $C = 100\\%$!",
        pitfalls: "Nhầm lẫn vị trí: Đường chéo với $C\\%$ ra tỉ lệ KHỐI LƯỢNG ($m_1/m_2$); Đường chéo với $C_M$ ra tỉ lệ THỂ TÍCH ($V_1/V_2$)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Rèn 5 câu HSG: pha trộn dung dịch $\\ce{H2SO4}$ hoặc $\\ce{NaOH}$ từ dung dịch đặc và nước, hoặc trộn 2 dung dịch có phản ứng nhẹ (như $\\ce{Na2O}$ vào dd $\\ce{NaOH}$).",
        pitfalls: "Quên kiểm tra xem trong dung dịch pha trộn có thêm chất tan rắn khan ($C = 100\\%$) hay tinh thể ngậm nước ($C\\%_{\\text{tinh thể}}$)."
      }
    ]
  },
  lecture: [
    {
      title: "Quy tắc Đường chéo trong Pha trộn Dung dịch",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 480 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <text x="85" y="32" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">m₁ (C₁%)</text>
            <text x="85" y="96" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">m₂ (C₂%)</text>
            <line x1="125" y1="30" x2="265" y2="90" stroke="#475569" stroke-width="2"/>
            <line x1="125" y1="90" x2="265" y2="30" stroke="#475569" stroke-width="2"/>
            <circle cx="195" cy="60" r="18" fill="#fef3c7" stroke="#d97706"/>
            <text x="195" y="64" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">C%</text>
            <text x="330" y="34" font-size="12" font-weight="bold" fill="#1e293b">|C₂ − C|</text>
            <text x="330" y="96" font-size="12" font-weight="bold" fill="#1e293b">|C − C₁|</text>
            <text x="415" y="64" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">m₁/m₂ = |C₂−C| / |C−C₁|</text>
          </svg>
        </div>
        <div class="callout">
          <strong>Quy ước đặc biệt để dùng Đường chéo mọi lúc:</strong><br/>
          • Nước nguyên chất: $C\\% = 0\\%$, $C_M = 0\\text{ M}$.<br/>
          • Chất tan rắn nguyên chất (khan): $C\\% = 100\\%$.<br/>
          • Với $C_M$: tỉ lệ thu được là tỉ lệ <strong>thể tích</strong> ($V_1 / V_2$).
        </div>
      `,
      example: "Cần trộn dung dịch $\\ce{NaCl}$ $10\\%$ và dung dịch $\\ce{NaCl}$ $40\\%$ theo tỉ lệ khối lượng nào để thu được dung dịch $\\ce{NaCl}$ $20\\%$?<br/><em>Giải:</em> Áp dụng quy tắc đường chéo: $\\frac{m_1}{m_2} = \\frac{40 - 20}{20 - 10} = \\frac{20}{10} = \\frac{2}{1}$. Vậy trộn theo tỉ lệ $2 : 1$.",
      checkpoint: {
        question: "Trộn $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $1\\text{ M}$ với $300\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Nồng độ mol của dung dịch mới là:",
        options: ["1,5 M", "1,6 M", "1,4 M", "1,8 M"],
        answer: 1,
        explanation: "Tổng $n_{\\ce{HCl}} = 0,2(1) + 0,3(2) = 0,8\\text{ mol}$. Tổng $V = 0,5\\text{ L} \\Rightarrow C_M = 0,8 / 0,5 = 1,6\\text{ M}$."
      }
    }
  ],
  questions: [
    { id: "w29_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Trộn $100\\text{ g}$ dung dịch $\\ce{NaOH}$ $10\\%$ với $100\\text{ g}$ dung dịch $\\ce{NaOH}$ $30\\%$. Nồng độ % của dung dịch thu được là:",
      options: ["A. $15\\%$", "B. $20\\%$", "C. $25\\%$", "D. $40\\%$"],
      answer: 1, solution: "Khối lượng chất tan $= 10 + 30 = 40\\text{ g}$; $m_{\\text{dd}} = 200\\text{ g} \\Rightarrow C\\% = 20\\%$." },
    { id: "w29_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Thêm $100\\text{ g}$ nước cất vào $100\\text{ g}$ dung dịch đường $20\\%$. Nồng độ % của dung dịch mới là:",
      options: ["A. $5\\%$", "B. $10\\%$", "C. $15\\%$", "D. $20\\%$"],
      answer: 1, solution: "$m_{\\text{đường}} = 20\\text{ g}$; $m_{\\text{dd mới}} = 200\\text{ g} \\Rightarrow C\\% = 10\\%$." },
    { id: "w29_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Trộn $100\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $2\\text{ M}$ với $100\\text{ mL}$ nước cất. Nồng độ mol của dung dịch thu được là:",
      options: ["A. $0,5\\text{ M}$", "B. $1,0\\text{ M}$", "C. $1,5\\text{ M}$", "D. $2,0\\text{ M}$"],
      answer: 1, solution: "$n = 0,2\\text{ mol}$; $V_{\\text{mới}} = 0,2\\text{ L} \\Rightarrow C_M = 1,0\\text{ M}$." },
    { id: "w29_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi sử dụng quy tắc đường chéo cho nước cất nguyên chất, nồng độ của nước cất được coi là:",
      options: ["A. $100\\%$", "B. $50\\%$", "C. $0\\%$", "D. $10\\%$"],
      answer: 2, solution: "Nước cất không chứa chất tan nên $C\\% = 0\\%$." },
    { id: "w29_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Trộn $300\\text{ g}$ dung dịch $\\ce{KCl}$ $10\\%$ với $200\\text{ g}$ dung dịch $\\ce{KCl}$ $25\\%$. Nồng độ % của dung dịch thu được là:",
      options: ["A. $16\\%$", "B. $17,5\\%$", "C. $18\\%$", "D. $20\\%$"],
      answer: 0, solution: "$m_{\\text{ct}} = 30 + 50 = 80\\text{ g}$; $m_{\\text{dd}} = 500\\text{ g} \\Rightarrow C\\% = (80/500)\\times 100\\% = 16\\%$." },
    { id: "w29_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Thêm $25\\text{ g}$ muối ăn khan vào $175\\text{ g}$ dung dịch muối ăn $10\\%$. Nồng độ % của dung dịch mới là:",
      options: ["A. $15\\%$", "B. $20\\%$", "C. $21,25\\%$", "D. $25\\%$"],
      answer: 2, solution: "$m_{\\text{ct}} = 25 + 17,5 = 42,5\\text{ g}$; $m_{\\text{dd}} = 200\\text{ g} \\Rightarrow C\\% = 21,25\\%$." },
    { id: "w29_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Cô cạn bớt $100\\text{ g}$ nước (làm bay hơi nước) từ $300\\text{ g}$ dung dịch muối $10\\%$. Nồng độ % của dung dịch còn lại là:",
      options: ["A. $12\\%$", "B. $15\\%$", "C. $20\\%$", "D. $30\\%$"],
      answer: 1, solution: "$m_{\\text{muối}} = 30\\text{ g}$ không đổi; $m_{\\text{dd còn}} = 200\\text{ g} \\Rightarrow C\\% = 15\\%$." },
    { id: "w29_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét $200\\text{ g}$ dung dịch $\\ce{NaOH}$ $20\\%$:",
      statements: [
        { text: "Nếu thêm $200\\text{ g}$ nước thì nồng độ giảm đi một nửa còn $10\\%$.", answer: true },
        { text: "Nếu thêm $50\\text{ g}$ $\\ce{NaOH}$ rắn thì nồng độ mới là $36\\%$.", answer: true },
        { text: "Nếu trộn với $200\\text{ g}$ dung dịch $\\ce{NaOH}$ $40\\%$ thì được dung dịch $30\\%$.", answer: true },
        { text: "Nếu cô đặc bớt $100\\text{ g}$ nước thì nồng độ giảm xuống $10\\%$.", answer: false }
      ],
      solution: "d) Sai: cô đặc mất nước làm nồng độ TĂNG lên gấp đôi ($40\\%$)." },
    { id: "w29_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trộn $400\\text{ mL}$ dung dịch $\\ce{HNO3}$ $0,5\\text{ M}$ với $100\\text{ mL}$ dung dịch $\\ce{HNO3}$ $2,0\\text{ M}$. Nồng độ mol ($\\text{M}$) của dung dịch thu được là bao nhiêu?",
      answer: "0.8", tolerance: 0.02,
      solution: "$n = 0,4(0,5) + 0,1(2) = 0,4\\text{ mol}$; $V = 0,5\\text{ L} \\Rightarrow C_M = 0,8\\text{ M}$." },
    { id: "w29_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cần thêm bao nhiêu gam nước vào $200\\text{ g}$ dung dịch $\\ce{NaCl}$ $25\\%$ để thu được dung dịch $\\ce{NaCl}$ $10\\%$?",
      answer: "300", tolerance: 0.5,
      solution: "$m_{\\text{ct}} = 50\\text{ g} \\Rightarrow m_{\\text{dd mới}} = 50 / 0,1 = 500\\text{ g} \\Rightarrow m_{\\text{nước thêm}} = 500 - 200 = 300\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w29_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cần trộn dung dịch $\\ce{H2SO4}$ $10\\%$ với dung dịch $\\ce{H2SO4}$ $40\\%$ theo tỉ lệ khối lượng $m_1 : m_2$ bằng bao nhiêu để được dung dịch $22\\%$?",
      options: ["A. $3 : 2$", "B. $2 : 3$", "C. $1 : 2$", "D. $2 : 1$"],
      answer: 0, solution: "$\\frac{m_1}{m_2} = \\frac{40 - 22}{22 - 10} = \\frac{18}{12} = \\frac{3}{2}$." },
    { id: "w29_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cần trộn bao nhiêu mL dung dịch $\\ce{HCl}$ $3\\text{ M}$ với $400\\text{ mL}$ dung dịch $\\ce{HCl}$ $0,5\\text{ M}$ để thu được dung dịch $\\ce{HCl}$ $1,5\\text{ M}$?",
      options: ["A. $200\\text{ mL}$", "B. $266,7\\text{ mL}$", "C. $300\\text{ mL}$", "D. $400\\text{ mL}$"],
      answer: 1, solution: "Đường chéo: $\\frac{V_1}{400} = \\frac{1,5 - 0,5}{3 - 1,5} = \\frac{1}{1,5} = \\frac{2}{3} \\Rightarrow V_1 = 800/3 \\approx 266,7\\text{ mL}$." },
    { id: "w29_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cần pha $500\\text{ g}$ dung dịch $\\ce{CuSO4}$ $12\\%$ từ dung dịch $\\ce{CuSO4}$ $20\\%$ ($m_1$ gam) và nước cất ($m_2$ gam):",
      statements: [
        { text: "Khối lượng chất tan $\\ce{CuSO4}$ cần có là $60\\text{ g}$.", answer: true },
        { text: "Tỉ lệ $m_1 : m_2$ theo đường chéo là $3 : 2$.", answer: true },
        { text: "Cần lấy $m_1 = 300\\text{ g}$ dung dịch $20\\%$.", answer: true },
        { text: "Cần lấy $m_2 = 150\\text{ g}$ nước cất.", answer: false }
      ],
      solution: "d) Sai: $m_2 = 500 - 300 = 200\\text{ g}$ nước." },
    { id: "w29_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cần thêm bao nhiêu gam $\\ce{KOH}$ rắn nguyên chất vào $150\\text{ g}$ dung dịch $\\ce{KOH}$ $10\\%$ để thu được dung dịch $\\ce{KOH}$ $25\\%$?",
      answer: "30", tolerance: 0.2,
      solution: "Đường chéo ($C_1=10, C_2=100, C=25$): $\\frac{150}{m_{\\ce{KOH}}} = \\frac{100 - 25}{25 - 10} = \\frac{75}{15} = 5 \\Rightarrow m_{\\ce{KOH}} = 30\\text{ g}$." },
    { id: "w29_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trộn $V_1\\text{ mL}$ dung dịch $\\ce{NaOH}$ $4\\text{ M}$ với $V_2\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$ để thu được $600\\text{ mL}$ dung dịch $\\ce{NaOH}$ $2\\text{ M}$. Tính $V_1$ (mL).",
      answer: "200", tolerance: 0.5,
      solution: "$\\frac{V_1}{V_2} = \\frac{2 - 1}{4 - 2} = \\frac{1}{2} \\Rightarrow V_1 = 600 \\times \\frac{1}{3} = 200\\text{ mL}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w29_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cần hòa tan bao nhiêu gam $\\ce{SO3}$ ($M=80$) vào $400\\text{ g}$ dung dịch $\\ce{H2SO4}$ $24,5\\%$ để thu được dung dịch $\\ce{H2SO4}$ $49\\%$?",
      quickAnswer: "100",
      solution: "Gọi $n_{\\ce{SO3}} = x\\text{ mol}$ ($m = 80x$). $\\ce{SO3 + H2O -> H2SO4}$ tạo thêm $98x\\text{ g}$ $\\ce{H2SO4}$ (nói cách khác $\\ce{SO3}$ tương đương dung dịch $\\ce{H2SO4}$ nồng độ $\\frac{98}{80} \\times 100\\% = 122,5\\%$!). Dùng phương trình: $m_{\\ce{H2SO4}\\text{ bđ}} = 400 \\times 24,5\\% = 98\\text{ g}$. Ta có $\\frac{98 + 98x}{400 + 80x} = 0,49 \\Rightarrow 98 + 98x = 196 + 39,2x \\Rightarrow 58,8x = 98 \\Rightarrow x = 5/3\\text{ mol}$? Khoan: tính lại: $58,8x = 98 \\Rightarrow x = 1,6667 \\Rightarrow m_{\\ce{SO3}} = 80 \\times 5/3 \\approx 133,33\\text{ g}$! (Nếu dùng đường chéo: $\\frac{400}{m_{\\ce{SO3}}} = \\frac{122,5 - 49}{49 - 24,5} = \\frac{73,5}{24,5} = 3 \\Rightarrow m_{\\ce{SO3}} = 400/3 \\approx 133,33\\text{ g}$!).",
      rubric: [
        { step: "Viết đúng PTHH $\\ce{SO3 + H2O -> H2SO4}$ và tính $m_{\\ce{H2SO4}\\text{ bđ}} = 98\\text{ g}$", points: 0.25 },
        { step: "Lập phương trình (hoặc quy đổi $C\\%_{\\ce{SO3}} = 122,5\\%$) và giải đúng $m_{\\ce{SO3}} = 400/3 \\approx 133,33\\text{ g}$", points: 0.75 }
      ] },
    { id: "w29_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cần lấy bao nhiêu gam tinh thể $\\ce{FeSO4.7H2O}$ ($M=278$) hòa tan vào $300\\text{ g}$ dung dịch $\\ce{FeSO4}$ $10\\%$ để thu được dung dịch $\\ce{FeSO4}$ $20\\%$? (Làm tròn 2 chữ số thập phân)",
      quickAnswer: "86.52",
      solution: "Coi tinh thể $\\ce{FeSO4.7H2O}$ là dung dịch có nồng độ $\\frac{152}{278} \\times 100\\% \\approx 54,68\\%$. Dùng phương trình đặt $n_{\\text{tinh thể}} = x\\text{ mol}$ ($m = 278x$, chứa $152x\\text{ g}$ $\\ce{FeSO4}$). Ta có $\\frac{30 + 152x}{300 + 278x} = 0,2 \\Rightarrow 30 + 152x = 60 + 55,6x \\Rightarrow 96,4x = 30 \\Rightarrow x = \\frac{30}{96,4} \\approx 0,3112\\text{ mol}$. Vậy $m = 278 \\times 0,3112 \\approx 86,52\\text{ g}$.",
      rubric: [
        { step: "Lập đúng phương trình bảo toàn khối lượng $\\ce{FeSO4}$: $\\frac{30 + 152x}{300 + 278x} = 0,2$", points: 0.5 },
        { step: "Giải đúng $m \\approx 86,52\\text{ g}$", points: 0.5 }
      ] },
    { id: "w29_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có hai dung dịch $\\ce{HCl}$ nồng độ $C_1\\%$ và $C_2\\%$ ($C_1 < C_2$). Nếu trộn theo tỉ lệ khối lượng $m_1 : m_2 = 1 : 2$ thì được dung dịch $20\\%$. Nếu trộn theo tỉ lệ $m_1 : m_2 = 2 : 1$ thì được dung dịch $15\\%$. Tìm $C_1$ và $C_2$.",
      solution: "Trường hợp 1: $\\frac{C_1 + 2C_2}{3} = 20 \\Rightarrow C_1 + 2C_2 = 60$. Trường hợp 2: $\\frac{2C_1 + C_2}{3} = 15 \\Rightarrow 2C_1 + C_2 = 45$. Giải hệ: $C_1 = 10\\%$ và $C_2 = 25\\%$.",
      rubric: [
        { step: "Lập đúng hệ 2 phương trình $C_1 + 2C_2 = 60$ và $2C_1 + C_2 = 45$", points: 0.5 },
        { step: "Giải đúng $C_1 = 10\\%$ và $C_2 = 25\\%$", points: 0.5 }
      ] },
    { id: "w29_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan $m$ gam $\\ce{K2O}$ ($M=94$) vào $150\\text{ g}$ dung dịch $\\ce{KOH}$ $10\\%$ thu được dung dịch $\\ce{KOH}$ $20\\%$. Tìm $m$ (làm tròn 2 chữ số thập phân).",
      quickAnswer: "15.1",
      solution: "$n_{\\ce{K2O}} = x\\text{ mol}$ ($94x\\text{ g}$) $\\xrightarrow{+\\ce{H2O}} 2x\\text{ mol}$ $\\ce{KOH}$ ($112x\\text{ g}$). $m_{\\ce{KOH}\\text{ bđ}} = 15\\text{ g}$. Ta có $\\frac{15 + 112x}{150 + 94x} = 0,2 \\Rightarrow 15 + 112x = 30 + 18,8x \\Rightarrow 93,2x = 15 \\Rightarrow x \\approx 0,1609\\text{ mol}$. Vậy $m = 94x \\approx 15,13\\text{ g}$.",
      rubric: [
        { step: "Viết đúng $\\ce{K2O + H2O -> 2KOH}$ và lập phương trình $\\frac{15 + 112x}{150 + 94x} = 0,2$", points: 0.5 },
        { step: "Giải đúng $m \\approx 15,13\\text{ g}$", points: 0.5 }
      ] },
    { id: "w29_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một học sinh trộn $100\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $1,5\\text{ M}$ ($D_1 = 1,09\\text{ g/mL}$) với $200\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $3,0\\text{ M}$ ($D_2 = 1,18\\text{ g/mL}$). Tính nồng độ phần trăm ($C\\%$) của dung dịch thu được (làm tròn 2 chữ số thập phân).",
      quickAnswer: "21.3",
      solution: "Tổng $n_{\\ce{H2SO4}} = 0,1(1,5) + 0,2(3,0) = 0,75\\text{ mol} \\Rightarrow m_{\\ce{H2SO4}} = 0,75 \\times 98 = 73,5\\text{ g}$. Tổng khối lượng dung dịch $= 100 \\times 1,09 + 200 \\times 1,18 = 109 + 236 = 345\\text{ g}$. Vậy $C\\% = \\frac{73,5}{345} \\times 100\\% \\approx 21,30\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{H2SO4}} = 73,5\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{dd}} = 345\\text{ g}$ và $C\\% \\approx 21,30\\%$", points: 0.5 }
      ] }
  ]
};
