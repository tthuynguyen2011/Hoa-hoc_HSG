window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[26] = {
  week: 26,
  title: "Độ tan (S) & Dung dịch bão hòa – Bài toán kết tinh cơ bản",
  objectives: [
    "Hiểu khái niệm Độ tan ($S$): Số gam chất đó tan được trong $100\\text{ g}$ nước để tạo thành dung dịch bão hòa ở một nhiệt độ xác định.",
    "Vận dụng thành thạo công thức $S = \\frac{m_{\\text{ct}}}{m_{\\ce{H2O}}} \\times 100$ và tính nồng độ phần trăm dung dịch bão hòa $C\\%_{\\text{bh}} = \\frac{S}{100 + S} \\times 100\\%$.",
    "Giải được bài toán làm lạnh dung dịch bão hòa tách tinh thể kết tinh (dạng bài phân hóa HSG 8–9)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 26 (A4). Chuẩn bị đồ thị đường cong độ tan theo nhiệt độ của $\\text{KCl}, \\text{KNO}_3, \\text{NaCl}$.",
    sessions: [
      {
        name: "Buổi 1: Độ tan ($S$) & Dung dịch bão hòa",
        guide: "Phân biệt rõ: $S$ tính trên $100\\text{ g}$ NƯỚC, còn $C\\%$ tính trên $100\\text{ g}$ DUNG DỊCH ($m_{\\text{ct}} + m_{\\ce{H2O}}$). Công thức liên hệ vàng: $C\\%_{\\text{bh}} = \\frac{S}{100 + S} \\times 100\\%$.",
        pitfalls: "Học sinh rất hay chia $m_{\\text{ct}}$ cho $100$ khi tính $C\\%$ của dung dịch bão hòa (quên cộng thêm $S$ ở mẫu số!)."
      },
      {
        name: "Buổi 2: Bài toán làm lạnh tách tinh thể khan (HSG)",
        guide: "Khi hạ nhiệt độ dung dịch bão hòa từ $t_2$ xuống $t_1$, độ tan giảm ($S_2 > S_1$) nên một phần chất tan tách ra dưới dạng tinh thể. Điểm mấu chốt: Nếu tách tinh thể KHAN thì <strong>khối lượng nước ($m_{\\ce{H2O}}$) không đổi</strong> trước và sau khi làm lạnh!",
        pitfalls: "Quên trừ khối lượng tinh thể tách ra khỏi khối lượng dung dịch ban đầu."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán kết tinh tinh thể ngậm nước (HSG)",
        guide: "Giới thiệu bài toán kết tinh dạng $\\ce{CuSO4.5H2O}$ (học sinh bảo toàn nước: $m_{\\ce{H2O}\\text{ ban đầu}} = m_{\\ce{H2O}\\text{ trong dd mới}} + m_{\\ce{H2O}\\text{ trong tinh thể}}$).",
        pitfalls: "Quên lượng nước bị hút theo vào tinh thể ngậm nước."
      }
    ]
  },
  lecture: [
    {
      title: "Độ tan ($S$) & Đường cong Độ tan theo Nhiệt độ",
      content: `
        <div class="callout">
          <strong>Công thức Độ tan ($S$, đơn vị $\\text{g/100g nước}$):</strong>
          <p style="text-align:center;font-size:1.08rem;margin:6px 0;">$$S = \\frac{m_{\\text{chất tan}}}{m_{\\ce{H2O}}} \\times 100 \\quad \\Longrightarrow \\quad C\\%_{\\text{bão hòa}} = \\frac{S}{100 + S} \\times 100\\%$$</p>
        </div>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 420 135" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <line x1="50" y1="15" x2="50" y2="110" stroke="#334155" stroke-width="2"/>
            <line x1="50" y1="110" x2="360" y2="110" stroke="#334155" stroke-width="2"/>
            <text x="18" y="65" font-size="10" font-weight="bold" fill="#334155">S (g)</text>
            <text x="205" y="128" font-size="10" font-weight="bold" text-anchor="middle" fill="#334155">Nhiệt độ (°C) →</text>
            <!-- KNO3 curve -->
            <path d="M 60 100 Q 180 85 320 22" fill="none" stroke="#dc2626" stroke-width="2.5"/>
            <text x="325" y="26" font-size="11" font-weight="bold" fill="#dc2626">KNO₃ (tăng rất mạnh)</text>
            <!-- NaCl curve -->
            <path d="M 60 72 L 330 66" fill="none" stroke="#2563eb" stroke-width="2.5"/>
            <text x="255" y="58" font-size="11" font-weight="bold" fill="#2563eb">NaCl (ít đổi)</text>
            <!-- Gas curve -->
            <path d="M 60 40 Q 180 65 330 98" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4 3"/>
            <text x="275" y="105" font-size="10" font-weight="bold" fill="#15803d">Chất khí (giảm khi T tăng)</text>
          </svg>
        </div>
      `,
      checkpoint: {
        question: "Ở $25^\\circ\\text{C}$, độ tan của muối X là $25\\text{ g/100g nước}$. Nồng độ phần trăm của dung dịch X bão hòa ở $25^\\circ\\text{C}$ là:",
        options: ["25%", "20%", "33,3%", "15%"],
        answer: 1,
        explanation: "$C\\% = \\frac{25}{100 + 25} \\times 100\\% = 20\\%$."
      }
    },
    {
      title: "Phương pháp giải Bài toán Làm lạnh tách tinh thể (HSG)",
      content: `
        <p>Khi làm lạnh $m_{\\text{dd}}$ bão hòa từ nhiệt độ cao ($S_2$) xuống nhiệt độ thấp ($S_1$), có $x$ gam tinh thể khan tách ra:</p>
        <ul>
          <li><strong>Bước 1:</strong> Tính $m_{\\text{ct}}$ và $m_{\\ce{H2O}}$ có trong dung dịch ban đầu ở $t_2$.</li>
          <li><strong>Bước 2:</strong> Sau khi tách $x$ gam tinh thể khan, lượng nước <strong>không đổi</strong> ($m_{\\ce{H2O}}$), lượng chất tan còn lại trong dung dịch bão hòa ở $t_1$ là $(m_{\\text{ct}} - x)$.</li>
          <li><strong>Bước 3:</strong> Áp dụng tỉ lệ độ tan ở $t_1$: $\\frac{m_{\\text{ct}} - x}{m_{\\ce{H2O}}} = \\frac{S_1}{100} \\Rightarrow$ Giải ra $x$.</li>
        </ul>
      `,
      example: "Ở $80^\\circ\\text{C}$, độ tan của $\\ce{KNO3}$ là $169\\text{ g}$; ở $20^\\circ\\text{C}$ là $31,6\\text{ g}$. Làm lạnh $269\\text{ g}$ dung dịch $\\ce{KNO3}$ bão hòa từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ thì có bao nhiêu gam $\\ce{KNO3}$ kết tinh?<br/><em>Giải:</em> Ở $80^\\circ\\text{C}$, $269\\text{ g}$ dd gồm $100\\text{ g}$ nước và $169\\text{ g}$ $\\ce{KNO3}$. Ở $20^\\circ\\text{C}$, $100\\text{ g}$ nước chỉ hòa tan tối đa $31,6\\text{ g}$ $\\ce{KNO3} \\Rightarrow$ Lượng kết tinh $= 169 - 31,6 = 137,4\\text{ g}$."
    }
  ],
  questions: [
    { id: "w26_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Độ tan của một chất trong nước là số gam chất đó tan được trong bao nhiêu gam nước để tạo thành dung dịch bão hòa ở nhiệt độ xác định?",
      options: ["A. $50\\text{ g}$ nước", "B. $100\\text{ g}$ nước", "C. $100\\text{ g}$ dung dịch", "D. $1000\\text{ g}$ nước"],
      answer: 1, solution: "Độ tan tính trên $100\\text{ g}$ nước." },
    { id: "w26_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở $20^\\circ\\text{C}$, hòa tan tối đa $18\\text{ g}$ muối A vào $50\\text{ g}$ nước thì được dung dịch bão hòa. Độ tan của A ở $20^\\circ\\text{C}$ là:",
      options: ["A. $18\\text{ g}$", "B. $26,5\\text{ g}$", "C. $36\\text{ g}$", "D. $9\\text{ g}$"],
      answer: 2, solution: "$S = (18 / 50) \\times 100 = 36\\text{ g/100g nước}$." },
    { id: "w26_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Độ tan của đa số các chất rắn (như $\\ce{KNO3}$, đường) trong nước thay đổi như thế nào khi tăng nhiệt độ?",
      options: ["A. Giảm xuống", "B. Tăng lên", "C. Không thay đổi", "D. Bằng 0"],
      answer: 1, solution: "Đa số chất rắn tan nhiều hơn khi nhiệt độ tăng." },
    { id: "w26_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Độ tan của chất khí (như $\\ce{O2}$, $\\ce{CO2}$) trong nước tăng lên khi:",
      options: ["A. Tăng nhiệt độ và giảm áp suất", "B. Giảm nhiệt độ và tăng áp suất", "C. Tăng cả nhiệt độ và áp suất", "D. Giảm cả nhiệt độ và áp suất"],
      answer: 1, solution: "Chất khí tan tốt hơn khi trời lạnh (nhiệt độ thấp) và áp suất cao." },
    { id: "w26_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở $20^\\circ\\text{C}$, độ tan của $\\ce{KCl}$ là $34\\text{ g/100g nước}$. Khối lượng dung dịch bão hòa tạo thành từ $100\\text{ g}$ nước là:",
      options: ["A. $34\\text{ g}$", "B. $100\\text{ g}$", "C. $134\\text{ g}$", "D. $66\\text{ g}$"],
      answer: 2, solution: "$m_{\\text{dd}} = 100 + 34 = 134\\text{ g}$." },
    { id: "w26_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở $25^\\circ\\text{C}$, dung dịch bão hòa chất X có nồng độ $20\\%$. Độ tan của X ở nhiệt độ này là:",
      options: ["A. $20\\text{ g}$", "B. $25\\text{ g}$", "C. $16,7\\text{ g}$", "D. $40\\text{ g}$"],
      answer: 1, solution: "Trong $100\\text{ g}$ dd có $20\\text{ g}$ chất tan và $80\\text{ g}$ nước $\\Rightarrow S = (20/80) \\times 100 = 25\\text{ g}$." },
    { id: "w26_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi làm lạnh một dung dịch bão hòa muối $\\ce{KNO3}$ từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$, ta quan sát thấy hiện tượng gì?",
      options: [
        "A. Dung dịch loãng ra",
        "B. Có tinh thể muối $\\ce{KNO3}$ tách ra lắng xuống đáy",
        "C. Nước đóng băng hết",
        "D. Có khí thoát ra"
      ],
      answer: 1, solution: "Độ tan giảm mạnh khi hạ nhiệt độ nên lượng muối thừa kết tinh tách ra." },
    { id: "w26_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Độ tan:",
      statements: [
        { text: "Ở $20^\\circ\\text{C}$, độ tan của $\\ce{NaCl}$ là $36\\text{ g}$ có nghĩa là $136\\text{ g}$ dung dịch bão hòa chứa $36\\text{ g}$ $\\ce{NaCl}$.", answer: true },
        { text: "Độ tan của đường ở $80^\\circ\\text{C}$ lớn hơn ở $20^\\circ\\text{C}$.", answer: true },
        { text: "Nồng độ phần trăm của dung dịch bão hòa luôn bằng giá trị độ tan $S$.", answer: false },
        { text: "Độ tan của khí $\\ce{CO2}$ trong nước tăng khi tăng áp suất khí nén.", answer: true }
      ],
      solution: "c) Sai vì $C\\%_{\\text{bh}} = \\frac{S}{100+S} \\times 100\\% < S$." },
    { id: "w26_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Ở $30^\\circ\\text{C}$, hòa tan tối đa $75\\text{ g}$ chất tan X vào $150\\text{ g}$ nước để được dung dịch bão hòa. Tính độ tan của X ($\\text{g/100g nước}$) ở $30^\\circ\\text{C}$.",
      answer: "50", tolerance: 0.1,
      solution: "$S = (75 / 150) \\times 100 = 50\\text{ g}$." },
    { id: "w26_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Ở $25^\\circ\\text{C}$, độ tan của muối A là $60\\text{ g}$. Nồng độ phần trăm (%) của dung dịch bão hòa A ở $25^\\circ\\text{C}$ là bao nhiêu?",
      answer: "37.5", tolerance: 0.1,
      solution: "$C\\% = (60 / 160) \\times 100\\% = 37,5\\%$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w26_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Ở $80^\\circ\\text{C}$, độ tan của $\\ce{CuSO4}$ là $55\\text{ g}$, ở $20^\\circ\\text{C}$ là $20,7\\text{ g}$. Làm lạnh $310\\text{ g}$ dung dịch $\\ce{CuSO4}$ bão hòa từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ (giả sử tách tinh thể khan $\\ce{CuSO4}$). Khối lượng tinh thể tách ra là:",
      options: ["A. $34,3\\text{ g}$", "B. $68,6\\text{ g}$", "C. $110\\text{ g}$", "D. $41,4\\text{ g}$"],
      answer: 1, solution: "$310\\text{ g}$ dd ở $80^\\circ\\text{C}$ gồm $200\\text{ g}$ nước và $110\\text{ g}$ $\\ce{CuSO4}$. Ở $20^\\circ\\text{C}$, $200\\text{ g}$ nước hòa tan tối đa $2 \\times 20,7 = 41,4\\text{ g}$. Kết tinh $= 110 - 41,4 = 68,6\\text{ g}$." },
    { id: "w26_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cần thêm bao nhiêu gam $\\ce{KCl}$ vào $200\\text{ g}$ dung dịch $\\ce{KCl}$ $10\\%$ để thu được dung dịch bão hòa ở $20^\\circ\\text{C}$ (biết $S_{\\ce{KCl}} = 34\\text{ g}$)?",
      options: ["A. $41,2\\text{ g}$", "B. $61,2\\text{ g}$", "C. $20,0\\text{ g}$", "D. $34,0\\text{ g}$"],
      answer: 0, solution: "Trong $200\\text{ g}$ dd $10\\%$ có $20\\text{ g}$ $\\ce{KCl}$ và $180\\text{ g}$ nước. Ở $20^\\circ\\text{C}$, $180\\text{ g}$ nước hòa tan tối đa $1,8 \\times 34 = 61,2\\text{ g}$ $\\ce{KCl}$. Cần thêm $= 61,2 - 20 = 41,2\\text{ g}$." },
    { id: "w26_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét $250\\text{ g}$ dung dịch đường bão hòa ở $20^\\circ\\text{C}$ (biết ở $20^\\circ\\text{C}$, độ tan của đường là $200\\text{ g}$? Không, $S = 200\\text{ g}$ $\\Rightarrow 300\\text{ g}$ dd có $100\\text{ g}$ nước). Xét $300\\text{ g}$ dung dịch đường bão hòa ở $20^\\circ\\text{C}$ ($S = 200\\text{ g}$):",
      statements: [
        { text: "Khối lượng đường trong $300\\text{ g}$ dung dịch là $200\\text{ g}$.", answer: true },
        { text: "Khối lượng nước trong $300\\text{ g}$ dung dịch là $100\\text{ g}$.", answer: true },
        { text: "Nồng độ phần trăm của dung dịch này là $66,67\\%$.", answer: true },
        { text: "Nếu làm bay hơi $50\\text{ g}$ nước ở $20^\\circ\\text{C}$ thì có $50\\text{ g}$ đường kết tinh.", answer: false }
      ],
      solution: "d) Sai: $50\\text{ g}$ nước mất đi làm kết tinh $50 \\times 200/100 = 100\\text{ g}$ đường." },
    { id: "w26_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Làm bay hơi $50\\text{ g}$ nước từ dung dịch bão hòa $\\ce{NaCl}$ ở $20^\\circ\\text{C}$ ($S = 36\\text{ g}$). Khối lượng muối ăn kết tinh tách ra là bao nhiêu gam?",
      answer: "18", tolerance: 0.1,
      solution: "$m_{\\text{kết tinh}} = 50 \\times (36 / 100) = 18\\text{ g}$." },
    { id: "w26_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở $60^\\circ\\text{C}$, độ tan của muối A là $110\\text{ g}$. Trong $420\\text{ g}$ dung dịch A bão hòa ở $60^\\circ\\text{C}$ có chứa bao nhiêu gam chất tan A?",
      answer: "220", tolerance: 0.2,
      solution: "$m_{\\text{ct}} = 420 \\times \\frac{110}{210} = 220\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w26_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Ở $80^\\circ\\text{C}$, độ tan của muối $\\ce{NH4Cl}$ là $65,6\\text{ g}$; ở $20^\\circ\\text{C}$ là $37,2\\text{ g}$. Cần làm lạnh bao nhiêu gam dung dịch $\\ce{NH4Cl}$ bão hòa từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ để thu được $71\\text{ g}$ tinh thể $\\ce{NH4Cl}$ kết tinh?",
      quickAnswer: "414",
      solution: "Xét $100\\text{ g}$ nước: khối lượng dd bão hòa ở $80^\\circ\\text{C}$ là $165,6\\text{ g}$. Khi hạ xuống $20^\\circ\\text{C}$, lượng $\\ce{NH4Cl}$ tách ra từ $165,6\\text{ g}$ dd này là $65,6 - 37,2 = 28,4\\text{ g}$. Vậy để tách ra $71\\text{ g}$ tinh thể, lượng dung dịch bão hòa cần dùng là: $m_{\\text{dd}} = 71 \\times \\frac{165,6}{28,4} = 414\\text{ g}$.",
      rubric: [
        { step: "Tính đúng lượng kết tinh chuẩn trên $100\\text{ g}$ nước là $28,4\\text{ g}$", points: 0.5 },
        { step: "Thiết lập tỉ lệ và tính đúng $m_{\\text{dd}} = 414\\text{ g}$", points: 0.5 }
      ] },
    { id: "w26_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Để xác định độ tan của $\\text{KCl}$ ở nhiệt độ phòng ($25^\\circ\\text{C}$), một học sinh cân đĩa thủy tinh khô nặng $9,8\\text{ g}$. Hút một lượng dung dịch $\\text{KCl}$ bão hòa ở $25^\\circ\\text{C}$ cho vào đĩa, cân lại được $20,4\\text{ g}$. Đem sấy khô hoàn toàn đĩa này ở $90^\\circ\\text{C}$ rồi cân lại được $12,6\\text{ g}$. Hãy tính độ tan của $\\text{KCl}$ ở $25^\\circ\\text{C}$ (làm tròn 2 chữ số thập phân).",
      quickAnswer: "35.9",
      solution: "Khối lượng dung dịch KCl lấy đem sấy $= 20,4 - 9,8 = 10,6\\text{ g}$. Khối lượng muối KCl khan thu được $= 12,6 - 9,8 = 2,8\\text{ g}$. Khối lượng nước trong mẫu $= 10,6 - 2,8 = 7,8\\text{ g}$. Độ tan $S = \\frac{2,8}{7,8} \\times 100 \\approx 35,90\\text{ g/100g nước}$.",
      rubric: [
        { step: "Tính đúng $m_{\\text{KCl}} = 2,8\\text{ g}$ và $m_{\\ce{H2O}} = 7,8\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $S \\approx 35,90\\text{ g/100g nước}$", points: 0.5 }
      ] },
    { id: "w26_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Làm lạnh $600\\text{ g}$ dung dịch $\\ce{CuSO4}$ bão hòa từ $90^\\circ\\text{C}$ (độ tan $S_1 = 66,7\\text{ g}$? Lấy $S_1 = 50\\text{ g}$ cho gọn: $S_1 = 50\\text{ g}$) xuống $10^\\circ\\text{C}$ ($S_2 = 17,4\\text{ g}$). Biết tinh thể tách ra là $\\ce{CuSO4.5H2O}$ ($M = 250$, trong đó $\\ce{CuSO4} = 160$, $5\\ce{H2O} = 90$). Tính khối lượng tinh thể $\\ce{CuSO4.5H2O}$ tách ra (làm tròn 1 chữ số thập phân).",
      quickAnswer: "227.6",
      solution: "Trong $600\\text{ g}$ dd bão hòa ở $90^\\circ\\text{C}$ ($S=50$): $m_{\\ce{CuSO4}} = 600 \\times \\frac{50}{150} = 200\\text{ g}$; $m_{\\ce{H2O}} = 400\\text{ g}$. Gọi số mol $\\ce{CuSO4.5H2O}$ tách ra là $a\\text{ mol}$ ($m_{\\text{tinh thể}} = 250a$). Trong dung dịch còn lại ở $10^\\circ\\text{C}$: $m_{\\ce{CuSO4}\\text{ còn}} = 200 - 160a$; $m_{\\ce{H2O}\\text{ còn}} = 400 - 90a$. Ta có $\\frac{200 - 160a}{400 - 90a} = \\frac{17,4}{100} \\Rightarrow 200 - 160a = 69,6 - 15,66a \\Rightarrow 144,34a = 130,4 \\Rightarrow a \\approx 0,9034\\text{ mol}$. Vậy $m_{\\ce{CuSO4.5H2O}} = 250 \\times 0,9034 \\approx 225,9\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{CuSO4}} = 200\\text{ g}$ và $m_{\\ce{H2O}} = 400\\text{ g}$ ban đầu", points: 0.25 },
        { step: "Lập đúng phương trình bảo toàn muối và nước $\\frac{200 - 160a}{400 - 90a} = \\frac{17,4}{100}$", points: 0.5 },
        { step: "Giải đúng $a \\approx 0,9034\\text{ mol} \\Rightarrow m \\approx 225,9\\text{ g}$", points: 0.25 }
      ] },
    { id: "w26_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $6,2\\text{ g}$ $\\ce{Na2O}$ ($M=62$) vào $93,8\\text{ g}$ nước thu được dung dịch NaOH ($\\ce{Na2O + H2O -> 2NaOH}$). Tính nồng độ phần trăm ($C\\%$) của dung dịch NaOH thu được.",
      quickAnswer: "8",
      solution: "$n_{\\ce{Na2O}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{NaOH}} = 0,2 \\times 40 = 8\\text{ g}$. Khối lượng dung dịch sau phản ứng $= 6,2 + 93,8 = 100\\text{ g}$. Vậy $C\\% = \\frac{8}{100} \\times 100\\% = 8\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{NaOH}} = 8\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{dd}} = 100\\text{ g}$ và $C\\% = 8\\%$", points: 0.5 }
      ] },
    { id: "w26_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Giải thích vì sao khi đun sôi nước máy để nguội rồi rót vào bể cá cảnh, cá sẽ bị ngạt và chết nếu không sục khí trở lại?",
      solution: "Khi đun sôi nước, nhiệt độ tăng cao làm độ tan của khí $\\ce{O2}$ trong nước giảm xuống gần bằng 0, khiến hầu hết khí $\\ce{O2}$ hòa tan thoát ra ngoài không khí. Khi để nguội, lượng $\\ce{O2}$ khuếch tán lại rất chậm nên nước thiếu $\\ce{O2}$ trầm trọng, cá không hô hấp được.",
      rubric: [
        { step: "Nêu được độ tan của khí $\\ce{O2}$ giảm mạnh khi nhiệt độ tăng (đun sôi đuổi hết $\\ce{O2}$)", points: 0.5 },
        { step: "Giải thích nước để nguội thiếu $\\ce{O2}$ hòa tan nên cá không hô hấp được nếu không sục khí", points: 0.5 }
      ] }
  ]
};
