window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[28] = {
  week: 28,
  title: "Nồng độ phần trăm (C%) & Nồng độ mol (CM) – Quy đổi C% và CM",
  objectives: [
    "Nắm vững công thức tính Nồng độ phần trăm ($C\\% = \\frac{m_{\\text{ct}}}{m_{\\text{dd}}} \\times 100\\%$) và Nồng độ mol ($C_M = \\frac{n}{V_{\\text{dd}}}$).",
    "Biết cách pha chế dung dịch theo nồng độ cho trước.",
    "Vận dụng công thức liên hệ giữa $C\\%$, $C_M$ và khối lượng riêng $D$: $C_M = \\frac{10 \\cdot D \\cdot C\\%}{M}$ (kỹ năng giải nhanh HSG)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 28 (A4). Chuẩn bị sơ đồ công thức $C\\%$, $C_M$ và công thức quy đổi.",
    sessions: [
      {
        name: "Buổi 1: Nồng độ phần trăm (C%) & Nồng độ mol (CM)",
        guide: "Phân biệt kỹ đơn vị: $C\\%$ dùng khối lượng dung dịch ($m_{\\text{dd}} = m_{\\text{ct}} + m_{\\text{dm}}$, tính bằng gam); $C_M$ dùng thể tích dung dịch ($V_{\\text{dd}}$, BẮT BUỘC đổi sang Lít!).",
        pitfalls: "Học sinh hay quên đổi $mL \\to L$ khi tính $C_M$ (nhầm gấp 1000 lần!) hoặc lấy $m_{\\text{dd}}$ thay cho $m_{\\text{nước}}$."
      },
      {
        name: "Buổi 2: Quy đổi giữa $C\\%$ và $C_M$ qua Khối lượng riêng $D$",
        guide: "Chứng minh công thức $C_M = \\frac{10 \\cdot D \\cdot C\\%}{M}$ từ $1\\text{ L}$ dung dịch ($1000\\text{ mL}$): $m_{\\text{dd}} = 1000D \\Rightarrow m_{\\text{ct}} = 10 D \\cdot C\\% \\Rightarrow n = \\frac{10 D \\cdot C\\%}{M}$.",
        pitfalls: "Thay nhầm đơn vị của $D$ (phải dùng $D$ tính bằng $\\text{g/mL}$ hoặc $\\text{g/cm}^3$)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán HSG tính nồng độ sau phản ứng",
        guide: "Chú ý 5 câu HSG: tính $C\\%$ dung dịch thu được sau khi cho kim loại / oxide / muối tác dụng với dung dịch acid (phải nhớ trừ khí bay ra hoặc kết tủa khỏi $m_{\\text{dd sau}}$!).",
        pitfalls: "Quên trừ khối lượng khí $\\ce{H2}$ hoặc $\\ce{CO2}$ thoát ra khi tính $m_{\\text{dd sau}}$."
      }
    ]
  },
  lecture: [
    {
      title: "Hai loại Nồng độ Dung dịch & Công thức Quy đổi",
      content: `
        <div class="callout">
          <strong>1. Nồng độ phần trăm ($C\\%$):</strong> Số gam chất tan có trong $100\\text{ g}$ dung dịch.<br/>
          $$C\\% = \\frac{m_{\\text{ct}}}{m_{\\text{dd}}} \\times 100\\% \\quad (m_{\\text{dd}} = m_{\\text{ct}} + m_{\\text{dm}})$$<br/>
          <strong>2. Nồng độ mol ($C_M$, đơn vị $\\text{mol/L}$ hoặc $\\text{M}$):</strong> Số mol chất tan có trong $1\\text{ L}$ dung dịch.<br/>
          $$C_M = \\frac{n}{V_{\\text{dd (L)}}} \\quad \\Longrightarrow \\quad n = C_M \\times V_{\\text{dd (L)}}$$<br/>
          <strong>3. Công thức quy đổi (với $D$ tính bằng $\\text{g/mL}$):</strong>
          $$C_M = \\frac{10 \\cdot D \\cdot C\\%}{M} \\quad \\Longleftrightarrow \\quad C\\% = \\frac{C_M \\cdot M}{10 \\cdot D}$$
        </div>
      `,
      checkpoint: {
        question: "Hòa tan $0,5\\text{ mol}$ $\\ce{NaCl}$ vào nước để thu được $250\\text{ mL}$ dung dịch. Nồng độ mol ($C_M$) của dung dịch thu được là:",
        options: ["0,2 M", "0,5 M", "2,0 M", "2,5 M"],
        answer: 2,
        explanation: "Đổi $V = 250\\text{ mL} = 0,25\\text{ L}$. Vậy $C_M = 0,5 / 0,25 = 2,0\\text{ M}$."
      }
    },
    {
      title: "Kỹ năng HSG: Tính $C\\%$ dung dịch sau phản ứng",
      content: `
        <p>Khi cho chất rắn A tác dụng với dung dịch B, khối lượng dung dịch sau phản ứng được tính theo ĐLBTKL:</p>
        <p style="text-align:center;">$$m_{\\text{dd sau}} = m_A + m_{\\text{dd } B} - m_{\\text{khí bay ra}} - m_{\\text{kết tủa (nếu có)}}$$</p>
      `,
      example: "Cho $6,5\\text{ g}$ Zn ($0,1\\text{ mol}$) tan hết trong $100\\text{ g}$ dung dịch $\\ce{HCl}$ dư, thu được $0,1\\text{ mol}$ khí $\\ce{H2}$ ($0,2\\text{ g}$) và $0,1\\text{ mol}$ $\\ce{ZnCl2}$ ($13,6\\text{ g}$). Tính $C\\%$ của $\\ce{ZnCl2}$ trong dung dịch sau phản ứng.<br/><em>Giải:</em> $m_{\\text{dd sau}} = 6,5 + 100 - 0,2 = 106,3\\text{ g}$. Vậy $C\\%_{\\ce{ZnCl2}} = \\frac{13,6}{106,3} \\times 100\\% \\approx 12,79\\%$."
    }
  ],
  questions: [
    { id: "w28_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Hòa tan $20\\text{ g}$ đường vào $180\\text{ g}$ nước thu được dung dịch đường có nồng độ phần trăm là:",
      options: ["A. $10\\%$", "B. $11,11\\%$", "C. $20\\%$", "D. $18\\%$"],
      answer: 0, solution: "$m_{\\text{dd}} = 20 + 180 = 200\\text{ g} \\Rightarrow C\\% = (20 / 200) \\times 100\\% = 10\\%$." },
    { id: "w28_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong $200\\text{ g}$ dung dịch $\\ce{NaOH}$ $15\\%$ có chứa bao nhiêu gam $\\ce{NaOH}$ nguyên chất?",
      options: ["A. $15\\text{ g}$", "B. $30\\text{ g}$", "C. $45\\text{ g}$", "D. $170\\text{ g}$"],
      answer: 1, solution: "$m_{\\ce{NaOH}} = 200 \\times 15\\% = 30\\text{ g}$." },
    { id: "w28_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Số mol $\\ce{HCl}$ có trong $500\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$ là:",
      options: ["A. $0,5\\text{ mol}$", "B. $1,0\\text{ mol}$", "C. $2,0\\text{ mol}$", "D. $4,0\\text{ mol}$"],
      answer: 1, solution: "$n = C_M \\cdot V = 2 \\times 0,5 = 1,0\\text{ mol}$." },
    { id: "w28_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Hòa tan $5,85\\text{ g}$ $\\ce{NaCl}$ ($M=58,5$) vào nước thành $200\\text{ mL}$ dung dịch. Nồng độ mol của dung dịch thu được là:",
      options: ["A. $0,1\\text{ M}$", "B. $0,2\\text{ M}$", "C. $0,5\\text{ M}$", "D. $1,0\\text{ M}$"],
      answer: 2, solution: "$n = 0,1\\text{ mol}$; $V = 0,2\\text{ L} \\Rightarrow C_M = 0,1 / 0,2 = 0,5\\text{ M}$." },
    { id: "w28_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Để có $0,4\\text{ mol}$ $\\ce{H2SO4}$ từ dung dịch $\\ce{H2SO4}$ $0,8\\text{ M}$, cần lấy thể tích dung dịch là:",
      options: ["A. $200\\text{ mL}$", "B. $400\\text{ mL}$", "C. $500\\text{ mL}$", "D. $800\\text{ mL}$"],
      answer: 2, solution: "$V = n / C_M = 0,4 / 0,8 = 0,5\\text{ L} = 500\\text{ mL}$." },
    { id: "w28_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi thêm nước cất vào một dung dịch muối ăn (giữ nguyên lượng muối), đại lượng nào sau đây GIẢM đi?",
      options: ["A. Khối lượng chất tan", "B. Số mol chất tan", "C. Nồng độ của dung dịch", "D. Khối lượng dung dịch"],
      answer: 2, solution: "Pha loãng làm lượng chất tan không đổi nhưng thể tích/khối lượng dung dịch tăng nên nồng độ giảm." },
    { id: "w28_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Khối lượng $\\ce{CuSO4}$ ($M=160$) cần để pha $250\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $0,4\\text{ M}$ là:",
      options: ["A. $8\\text{ g}$", "B. $16\\text{ g}$", "C. $32\\text{ g}$", "D. $40\\text{ g}$"],
      answer: 1, solution: "$n = 0,25 \\times 0,4 = 0,1\\text{ mol} \\Rightarrow m = 0,1 \\times 160 = 16\\text{ g}$." },
    { id: "w28_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét $300\\text{ g}$ dung dịch $\\ce{H2SO4}$ $9,8\\%$ ($M = 98$):",
      statements: [
        { text: "Khối lượng $\\ce{H2SO4}$ nguyên chất trong dung dịch là $29,4\\text{ g}$.", answer: true },
        { text: "Số mol $\\ce{H2SO4}$ có trong dung dịch là $0,3\\text{ mol}$.", answer: true },
        { text: "Khối lượng nước trong dung dịch là $270,6\\text{ g}$.", answer: true },
        { text: "Nồng độ mol của dung dịch trên chắc chắn là $0,3\\text{ M}$.", answer: false }
      ],
      solution: "d) Sai vì chưa biết khối lượng riêng $D$ (thể tích dung dịch $V \\ne 1\\text{ L}$)." },
    { id: "w28_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan $12\\text{ g}$ $\\ce{MgSO4}$ vào $138\\text{ g}$ nước. Tính nồng độ phần trăm (%) của dung dịch thu được.",
      answer: "8", tolerance: 0.1,
      solution: "$C\\% = (12 / 150) \\times 100\\% = 8\\%$." },
    { id: "w28_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cần lấy bao nhiêu gam dung dịch $\\ce{KOH}$ $10\\%$ để trong đó có chứa $5,6\\text{ g}$ $\\ce{KOH}$ nguyên chất?",
      answer: "56", tolerance: 0.1,
      solution: "$m_{\\text{dd}} = 5,6 / 0,1 = 56\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w28_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Dung dịch $\\ce{H2SO4}$ $98\\%$ có khối lượng riêng $D = 1,84\\text{ g/mL}$. Nồng độ mol ($C_M$) của dung dịch này là:",
      options: ["A. $18,4\\text{ M}$", "B. $9,2\\text{ M}$", "C. $10,0\\text{ M}$", "D. $15,0\\text{ M}$"],
      answer: 0, solution: "$C_M = \\frac{10 \\times 1,84 \\times 98}{98} = 18,4\\text{ M}$." },
    { id: "w28_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Dung dịch $\\ce{NaOH}$ $2\\text{ M}$ có khối lượng riêng $D = 1,08\\text{ g/mL}$. Nồng độ phần trăm của dung dịch này gần nhất với:",
      options: ["A. $5,4\\%$", "B. $7,41\\%$", "C. $8,0\\%$", "D. $10,8\\%$"],
      answer: 1, solution: "$C\\% = \\frac{2 \\times 40}{10 \\times 1,08} \\approx 7,41\\%$." },
    { id: "w28_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho $2,4\\text{ g}$ $\\text{Mg}$ ($0,1\\text{ mol}$) tan hoàn toàn trong $100\\text{ g}$ dung dịch $\\ce{HCl}$ $7,3\\%$ (vừa đủ):",
      statements: [
        { text: "Số mol $\\ce{HCl}$ trong dung dịch là $0,2\\text{ mol}$.", answer: true },
        { text: "Khối lượng khí $\\ce{H2}$ thoát ra là $0,2\\text{ g}$.", answer: true },
        { text: "Khối lượng dung dịch sau phản ứng là $102,4\\text{ g}$.", answer: false },
        { text: "Nồng độ % của $\\ce{MgCl2}$ ($M=95$) sau phản ứng là $9,30\\%$.", answer: true }
      ],
      solution: "c) Sai: phải trừ $0,2\\text{ g}$ khí $\\ce{H2}$ bay ra $\\Rightarrow m_{\\text{dd}} = 2,4 + 100 - 0,2 = 102,2\\text{ g}$." },
    { id: "w28_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $150\\text{ mL}$ dung dịch $\\ce{BaCl2}$ $1\\text{ M}$ tác dụng vừa đủ với $250\\text{ mL}$ dung dịch $\\ce{Na2SO4}$ tạo kết tủa $\\ce{BaSO4}$ và $\\ce{NaCl}$. Tính nồng độ mol của $\\ce{NaCl}$ trong dung dịch sau phản ứng (coi thể tích dung dịch bằng tổng thể tích 2 dung dịch ban đầu).",
      answer: "0.75", tolerance: 0.02,
      solution: "$n_{\\ce{BaCl2}} = 0,15\\text{ mol} \\Rightarrow n_{\\ce{NaCl}} = 0,3\\text{ mol}$. $V_{\\text{dd sau}} = 0,15 + 0,25 = 0,4\\text{ L} \\Rightarrow C_M = 0,3 / 0,4 = 0,75\\text{ M}$." },
    { id: "w28_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $4,6\\text{ g}$ Sodium ($\\text{Na}=23$) vào $95,6\\text{ g}$ nước thu được dung dịch $\\ce{NaOH}$ và khí $\\ce{H2}$. Tính nồng độ phần trăm (%) của dung dịch $\\ce{NaOH}$ thu được.",
      answer: "8", tolerance: 0.1,
      solution: "$n_{\\text{Na}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,2\\text{ mol}$ ($8\\text{ g}$) và $n_{\\ce{H2}} = 0,1\\text{ mol}$ ($0,2\\text{ g}$). $m_{\\text{dd}} = 4,6 + 95,6 - 0,2 = 100\\text{ g} \\Rightarrow C\\% = 8\\%$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w28_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $10\\text{ g}$ $\\ce{CaCO3}$ ($0,1\\text{ mol}$) tác dụng hoàn toàn với $100\\text{ g}$ dung dịch $\\ce{HCl}$ $14,6\\%$ theo PTHH $\\ce{CaCO3 + 2HCl -> CaCl2 + CO2 ^ + H2O}$. Tính nồng độ phần trăm của các chất tan có trong dung dịch thu được sau phản ứng.",
      solution: "$n_{\\ce{HCl}\\text{ bđ}} = \\frac{100 \\times 14,6\\%}{36,5} = 0,4\\text{ mol}$. Vì $0,1 < 0,4/2 \\Rightarrow \\ce{CaCO3}$ hết, $\\ce{HCl}$ dư $0,4 - 0,2 = 0,2\\text{ mol}$ ($7,3\\text{ g}$). Sinh ra $0,1\\text{ mol}$ $\\ce{CaCl2}$ ($11,1\\text{ g}$) và $0,1\\text{ mol}$ $\\ce{CO2}$ ($4,4\\text{ g}$). $m_{\\text{dd sau}} = 10 + 100 - 4,4 = 105,6\\text{ g}$. Vậy $C\\%_{\\ce{CaCl2}} = \\frac{11,1}{105,6} \\times 100\\% \\approx 10,51\\%$; $C\\%_{\\ce{HCl dư}} = \\frac{7,3}{105,6} \\times 100\\% \\approx 6,91\\%$.",
      rubric: [
        { step: "Xác định đúng $\\ce{HCl}$ dư $0,2\\text{ mol}$, tính $m_{\\ce{CaCl2}} = 11,1\\text{ g}$", points: 0.25 },
        { step: "Tính đúng $m_{\\text{dd sau}} = 10 + 100 - 4,4 = 105,6\\text{ g}$", points: 0.25 },
        { step: "Tính đúng cả $C\\%_{\\ce{CaCl2}} \\approx 10,51\\%$ và $C\\%_{\\ce{HCl dư}} \\approx 6,91\\%$", points: 0.5 }
      ] },
    { id: "w28_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hấp thụ hoàn toàn $16\\text{ g}$ khí $\\ce{SO3}$ ($M=80$) vào $184\\text{ g}$ dung dịch $\\ce{H2SO4}$ $10\\%$ (biết $\\ce{SO3 + H2O -> H2SO4}$). Tính nồng độ phần trăm của dung dịch $\\ce{H2SO4}$ thu được.",
      quickAnswer: "18.8",
      solution: "$n_{\\ce{SO3}} = 16/80 = 0,2\\text{ mol} \\Rightarrow$ tạo thêm $0,2\\text{ mol}$ $\\ce{H2SO4}$ ($19,6\\text{ g}$). Lượng $\\ce{H2SO4}$ có sẵn trong dd $= 184 \\times 10\\% = 18,4\\text{ g}$. Tổng $m_{\\ce{H2SO4}} = 19,6 + 18,4 = 38,0\\text{ g}$. Tổng $m_{\\text{dd sau}} = 16 + 184 = 200\\text{ g}$. Vậy $C\\% = \\frac{38,0}{200} \\times 100\\% = 19\\%$! (Kiểm tra lại phép tính: $19,6 + 18,4 = 38,0$; $38/200 = 19\\%$).",
      rubric: [
        { step: "Tính đúng lượng $\\ce{H2SO4}$ tạo thêm $= 19,6\\text{ g}$ và có sẵn $= 18,4\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{dd}} = 200\\text{ g}$ và $C\\% = 19\\%$", points: 0.5 }
      ] },
    { id: "w28_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Từ dung dịch $\\ce{H2SO4}$ $98\\%$ ($D = 1,84\\text{ g/mL}$), hãy trình bày cách pha chế $500\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $0,92\\text{ M}$ trong phòng thí nghiệm (tính rõ thể tích acid đặc cần lấy và thao tác an toàn).",
      solution: "Số mol $\\ce{H2SO4}$ cần $= 0,5 \\times 0,92 = 0,46\\text{ mol}$. Nồng độ mol của acid $98\\%$ là $C_M = \\frac{10 \\times 1,84 \\times 98}{98} = 18,4\\text{ M}$. Thể tích acid đặc cần lấy $= 0,46 / 18,4 = 0,025\\text{ L} = 25\\text{ mL}$. Thao tác: Đong khoảng $300\\text{ mL}$ nước cất vào bình định mức $500\\text{ mL}$, rót TỪ TỪ $25\\text{ mL}$ $\\ce{H2SO4}$ đặc vào nước và khuấy nhẹ, để nguội rồi thêm nước cất đến vạch $500\\text{ mL}$.",
      rubric: [
        { step: "Tính đúng $V_{\\text{acid đặc}} = 25\\text{ mL}$", points: 0.5 },
        { step: "Nêu đúng thao tác an toàn: rót từ từ acid vào nước, để nguội, định mức tới vạch $500\\text{ mL}$", points: 0.5 }
      ] },
    { id: "w28_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $m$ gam kim loại $\\text{Fe}$ tác dụng vừa đủ với $200\\text{ g}$ dung dịch $\\ce{H2SO4}$ loãng thu được dung dịch $\\ce{FeSO4}$ có nồng độ $15,2\\%$ ($\\ce{Fe + H2SO4 -> FeSO4 + H2 ^}$). Tìm giá trị của $m$.",
      quickAnswer: "12.5",
      solution: "Đặt $n_{\\text{Fe}} = x\\text{ mol} \\Rightarrow m_{\\text{Fe}} = 56x$, $n_{\\ce{FeSO4}} = x$ ($152x\\text{ g}$), $n_{\\ce{H2}} = x$ ($2x\\text{ g}$). $m_{\\text{dd sau}} = 200 + 56x - 2x = 200 + 54x$. Ta có $\\frac{152x}{200 + 54x} = 0,152 \\Rightarrow 152x = 30,4 + 8,208x \\Rightarrow 143,792x = 30,4 \\Rightarrow x \\approx 0,2114\\text{ mol} \\Rightarrow m = 56x \\approx 11,84\\text{ g}$.",
      rubric: [
        { step: "Đặt $n_{\\text{Fe}} = x$, lập đúng $m_{\\text{dd sau}} = 200 + 54x$", points: 0.5 },
        { step: "Giải đúng $x \\approx 0,2114\\text{ mol}$ và $m \\approx 11,84\\text{ g}$", points: 0.5 }
      ] },
    { id: "w28_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Sục $2,479\\text{ L}$ khí $\\ce{HCl}$ (đkc) vào $196,35\\text{ g}$ nước thu được dung dịch hydrochloric acid. Tính nồng độ phần trăm của dung dịch thu được.",
      quickAnswer: "1.825",
      solution: "$n_{\\ce{HCl}} = 2,479 / 24,79 = 0,1\\text{ mol} \\Rightarrow m_{\\ce{HCl}} = 0,1 \\times 36,5 = 3,65\\text{ g}$. $m_{\\text{dd}} = 3,65 + 196,35 = 200\\text{ g}$. Vậy $C\\% = \\frac{3,65}{200} \\times 100\\% = 1,825\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{HCl}} = 3,65\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{dd}} = 200\\text{ g}$ và $C\\% = 1,825\\%$", points: 0.5 }
      ] }
  ]
};
