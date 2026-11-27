window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[24] = {
  week: 24,
  title: "Tính toán theo PTHH – Bài toán chất dư, chất hết",
  objectives: [
    "Thực hiện thành thạo 4 bước tính toán theo PTHH: (1) Đổi số liệu về mol; (2) Viết & cân bằng PTHH; (3) Kéo số mol qua PTHH; (4) Tính khối lượng hoặc thể tích khí theo yêu cầu.",
    "Giải quyết chính xác bài toán lượng dư – chất hết: Lập tỉ lệ $\\frac{n_A}{a}$ và $\\frac{n_B}{b}$ để biết chất nào hết (tính sản phẩm theo chất hết!), chất nào dư."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 24 (A4). Chuẩn bị sơ đồ 4 bước tính theo PTHH.",
    sessions: [
      {
        name: "Buổi 1: Bài toán cơ bản (Cho 1 chất, tìm các chất còn lại)",
        guide: "Rèn thói quen viết PTHH 3 dòng: 'Ban đầu / Phản ứng / Sau phản ứng' (hoặc dòng PTHH tỉ lệ mol). Luôn kiểm tra đơn vị ($\\text{g}$, $\\text{L}$ ở đkc $24,79$) trước khi đổi mol.",
        pitfalls: "Học sinh hay quên hệ số cân bằng khi nhân chéo tìm số mol chất khác."
      },
      {
        name: "Buổi 2: Bài toán Chất dư – Chất hết",
        guide: "Cho $n_A$ và $n_B$ cùng lúc $\\Rightarrow$ Lập tỉ lệ $\\frac{n_A}{\\text{hệ số } A}$ so với $\\frac{n_B}{\\text{hệ số } B}$. Tỉ lệ nào NHỎ HƠN thì chất đó HẾT, mọi tính toán sản phẩm PHẢI tính theo chất HẾT!",
        pitfalls: "Thấy $n_A < n_B$ vội kết luận A hết mà quên chia cho hệ số cân bằng!"
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán HSG hỗn hợp 2 kim loại",
        guide: "Chú ý 5 câu HSG: giải hệ 2 phương trình 2 ẩn ($x, y$) cho hỗn hợp 2 kim loại tác dụng với acid/oxygen.",
        pitfalls: "Đặt nhầm ẩn là khối lượng thay vì số mol (luôn khuyên học sinh đặt ẩn $x, y$ là SỐ MOL để hệ phương trình cực kỳ gọn đẹp!)."
      }
    ]
  },
  lecture: [
    {
      title: "Quy trình 4 Bước Tính toán theo PTHH & Bài toán Chất dư – Chất hết",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 72" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="10" y="16" width="115" height="40" rx="6" fill="#eff6ff" stroke="#2563eb"/><text x="67" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">1. Tính số mol (n)</text>
            <text x="135" y="41" font-size="15" font-weight="bold" fill="#475569">→</text>
            <rect x="150" y="16" width="115" height="40" rx="6" fill="#fef3c7" stroke="#d97706"/><text x="207" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">2. Cân bằng PTHH</text>
            <text x="275" y="41" font-size="15" font-weight="bold" fill="#475569">→</text>
            <rect x="290" y="16" width="115" height="40" rx="6" fill="#f3e8ff" stroke="#7c3aed"/><text x="347" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#5b21b6">3. Kéo mol (hết)</text>
            <text x="415" y="41" font-size="15" font-weight="bold" fill="#475569">→</text>
            <rect x="430" y="16" width="100" height="40" rx="6" fill="#dcfce7" stroke="#16a34a"/><text x="480" y="40" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">4. Tính m hoặc V</text>
          </svg>
        </div>
        <div class="callout warn">
          <strong>Cách nhận biết chất dư – chất hết:</strong> Cho phương trình $aA + bB \\longrightarrow cC + dD$.<br/>
          So sánh $\\frac{n_A}{a}$ và $\\frac{n_B}{b}$: tỉ lệ nào <strong>nhỏ hơn</strong> thì chất đó <strong>phản ứng hết</strong>; tính sản phẩm theo chất hết!
        </div>
      `,
      example: "Cho $4,8\\text{ g}$ Mg tác dụng với $4,958\\text{ L}$ khí $\\ce{O2}$ (đkc). Tính khối lượng $\\ce{MgO}$ tạo thành.<br/><em>Giải:</em> $n_{\\text{Mg}} = 4,8/24 = 0,2\\text{ mol}$; $n_{\\ce{O2}} = 4,958/24,79 = 0,2\\text{ mol}$. PTHH: $\\ce{2Mg + O2 ->[t^\\circ] 2MgO}$. So sánh $\\frac{0,2}{2} = 0,1 < \\frac{0,2}{1} = 0,2 \\Rightarrow$ Mg hết, $\\ce{O2}$ dư. Vậy $n_{\\ce{MgO}} = n_{\\text{Mg}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{MgO}} = 0,2 \\times 40 = 8,0\\text{ g}$.",
      checkpoint: {
        question: "Cho $0,4\\text{ mol}$ Zn tác dụng với $0,6\\text{ mol}$ HCl theo PTHH $\\ce{Zn + 2HCl -> ZnCl2 + H2 ^}$. Chất nào dư và dư bao nhiêu mol?",
        options: [
          "HCl dư 0,2 mol",
          "Zn dư 0,1 mol",
          "Zn dư 0,2 mol",
          "Phản ứng vừa đủ"
        ],
        answer: 1,
        explanation: "So sánh $\\frac{0,4}{1} = 0,4 > \\frac{0,6}{2} = 0,3 \\Rightarrow$ HCl hết, Zn phản ứng $0,3\\text{ mol}$, dư $0,4 - 0,3 = 0,1\\text{ mol}$."
      }
    }
  ],
  questions: [
    { id: "w24_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho $6,5\\text{ g}$ Zn ($\\text{Zn}=65$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Số mol khí $\\ce{H2}$ thu được là:",
      options: ["A. $0,05\\text{ mol}$", "B. $0,1\\text{ mol}$", "C. $0,2\\text{ mol}$", "D. $0,4\\text{ mol}$"],
      answer: 1, solution: "$n_{\\text{Zn}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol}$." },
    { id: "w24_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Đốt cháy hoàn toàn $2,4\\text{ g}$ Carbon ($\\text{C}=12$) trong khí $\\ce{O2}$ dư. Thể tích khí $\\ce{CO2}$ thu được ở đkc ($24,79\\text{ L/mol}$) là:",
      options: ["A. $2,479\\text{ L}$", "B. $4,958\\text{ L}$", "C. $7,437\\text{ L}$", "D. $12,395\\text{ L}$"],
      answer: 1, solution: "$n_{\\text{C}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow V = 4,958\\text{ L}$." },
    { id: "w24_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Để điều chế $0,3\\text{ mol}$ khí $\\ce{O2}$ từ phản ứng nhiệt phân $\\ce{2KClO3 ->[t^\\circ] 2KCl + 3O2 ^}$, số mol $\\ce{KClO3}$ cần dùng là:",
      options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,3\\text{ mol}$", "D. $0,45\\text{ mol}$"],
      answer: 1, solution: "$n_{\\ce{KClO3}} = \\frac{2}{3} n_{\\ce{O2}} = 0,2\\text{ mol}$." },
    { id: "w24_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho $5,4\\text{ g}$ Aluminium ($\\text{Al}=27$) tác dụng vừa đủ với dung dịch $\\ce{H2SO4}$ loãng theo PTHH $\\ce{2Al + 3H2SO4 -> Al2(SO4)3 + 3H2 ^}$. Số mol $\\ce{H2SO4}$ đã phản ứng là:",
      options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,3\\text{ mol}$", "D. $0,4\\text{ mol}$"],
      answer: 2, solution: "$n_{\\text{Al}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2SO4}} = \\frac{3}{2}(0,2) = 0,3\\text{ mol}$." },
    { id: "w24_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi cho $0,5\\text{ mol}$ khí $\\ce{H2}$ tác dụng với $0,5\\text{ mol}$ khí $\\ce{O2}$ theo PTHH $\\ce{2H2 + O2 ->[t^\\circ] 2H2O}$, chất nào còn dư sau phản ứng?",
      options: ["A. $\\ce{H2}$ dư", "B. $\\ce{O2}$ dư", "C. Cả hai cùng hết", "D. Không xác định"],
      answer: 1, solution: "$\\frac{0,5}{2} = 0,25 < \\frac{0,5}{1} = 0,5 \\Rightarrow \\ce{H2}$ hết, $\\ce{O2}$ dư $0,25\\text{ mol}$." },
    { id: "w24_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nung nóng hoàn toàn $20\\text{ g}$ $\\ce{CaCO3}$ ($M=100$) thu được $m$ gam $\\ce{CaO}$ ($M=56$). Giá trị của $m$ là:",
      options: ["A. $5,6\\text{ g}$", "B. $11,2\\text{ g}$", "C. $14,0\\text{ g}$", "D. $22,4\\text{ g}$"],
      answer: 1, solution: "$n_{\\ce{CaCO3}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{CaO}} = 0,2 \\times 56 = 11,2\\text{ g}$." },
    { id: "w24_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho $5,6\\text{ g}$ Iron ($\\text{Fe}=56$) cháy hết trong khí $\\ce{Cl2}$ dư theo PTHH $\\ce{2Fe + 3Cl2 ->[t^\\circ] 2FeCl3}$. Khối lượng muối $\\ce{FeCl3}$ ($M=162,5$) thu được là:",
      options: ["A. $12,7\\text{ g}$", "B. $16,25\\text{ g}$", "C. $32,5\\text{ g}$", "D. $8,125\\text{ g}$"],
      answer: 1, solution: "$n_{\\text{Fe}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{FeCl3}} = 0,1\\text{ mol} \\Rightarrow m = 16,25\\text{ g}$." },
    { id: "w24_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Cho $0,2\\text{ mol}$ $\\text{Mg}$ tác dụng với $0,3\\text{ mol}$ $\\ce{HCl}$ theo PTHH $\\ce{Mg + 2HCl -> MgCl2 + H2 ^}$:",
      statements: [
        { text: "$\\ce{HCl}$ phản ứng hết, $\\text{Mg}$ còn dư.", answer: true },
        { text: "Số mol khí $\\ce{H2}$ thu được là $0,15\\text{ mol}$.", answer: true },
        { text: "Khối lượng $\\text{Mg}$ còn dư sau phản ứng là $1,2\\text{ g}$.", answer: true },
        { text: "Số mol muối $\\ce{MgCl2}$ thu được là $0,2\\text{ mol}$.", answer: false }
      ],
      solution: "d) Sai: tính theo chất hết là $\\ce{HCl} \\Rightarrow n_{\\ce{MgCl2}} = 0,15\\text{ mol}$." },
    { id: "w24_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Đốt cháy hoàn toàn $6,2\\text{ g}$ Phosphorus ($\\text{P}=31$) trong khí $\\ce{O2}$ dư theo PTHH $\\ce{4P + 5O2 ->[t^\\circ] 2P2O5}$. Tính khối lượng $\\ce{P2O5}$ ($M=142$) thu được (gam).",
      answer: "14.2", tolerance: 0.1,
      solution: "$n_{\\text{P}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{P2O5}} = 0,1\\text{ mol} \\Rightarrow m = 14,2\\text{ g}$." },
    { id: "w24_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $11,2\\text{ g}$ $\\ce{CaO}$ ($M=56$) tác dụng vừa đủ với nước thu được bao nhiêu gam $\\ce{Ca(OH)2}$ ($M=74$)?",
      answer: "14.8", tolerance: 0.1,
      solution: "$n_{\\ce{CaO}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{Ca(OH)2}} = 0,2 \\times 74 = 14,8\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w24_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho $8,4\\text{ g}$ Iron ($\\text{Fe}=56$) cháy trong bình chứa $2,479\\text{ L}$ khí $\\ce{O2}$ (đkc) theo PTHH $\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}$. Khối lượng $\\ce{Fe3O4}$ ($M=232$) thu được là:",
      options: ["A. $11,6\\text{ g}$", "B. $23,2\\text{ g}$", "C. $17,4\\text{ g}$", "D. $5,8\\text{ g}$"],
      answer: 0, solution: "$n_{\\text{Fe}} = 0,15\\text{ mol}$; $n_{\\ce{O2}} = 0,1\\text{ mol}$. So sánh $\\frac{0,15}{3} = 0,05 = \\frac{0,1}{2}$ (vừa đủ!) $\\Rightarrow n_{\\ce{Fe3O4}} = 0,05\\text{ mol} \\Rightarrow m = 11,6\\text{ g}$." },
    { id: "w24_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Dẫn $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc) đi qua $16\\text{ g}$ bột $\\ce{CuO}$ ($M=80$) nung nóng ($\\ce{CuO + H2 ->[t^\\circ] Cu + H2O}$). Khối lượng chất rắn thu được sau phản ứng là:",
      options: ["A. $12,8\\text{ g}$", "B. $14,4\\text{ g}$", "C. $19,2\\text{ g}$", "D. $6,4\\text{ g}$"],
      answer: 0, solution: "$n_{\\ce{H2}} = 0,3\\text{ mol}$, $n_{\\ce{CuO}} = 0,2\\text{ mol} \\Rightarrow \\ce{CuO}$ hết, $\\ce{H2}$ dư. Rắn chỉ có $\\text{Cu}$ ($0,2 \\times 64 = 12,8\\text{ g}$)." },
    { id: "w24_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho $5,4\\text{ g}$ Al tác dụng với $14,6\\text{ g}$ HCl ($\\ce{2Al + 6HCl -> 2AlCl3 + 3H2 ^}$):",
      statements: [
        { text: "Số mol Al ban đầu là $0,2\\text{ mol}$, số mol HCl ban đầu là $0,4\\text{ mol}$.", answer: true },
        { text: "Sau phản ứng, Al hết và HCl còn dư.", answer: false },
        { text: "Thể tích khí $\\ce{H2}$ thu được ở đkc là $4,958\\text{ L}$.", answer: true },
        { text: "Khối lượng Al còn dư là $1,8\\text{ g}$.", answer: true }
      ],
      solution: "$0,2/2 = 0,1 > 0,4/6 = 0,0667 \\Rightarrow \\text{HCl}$ hết, Al phản ứng $0,4/3 = 2/15\\text{ mol}$ (dư $1/15\\text{ mol} = 1,8\\text{ g}$); $n_{\\ce{H2}} = 0,2\\text{ mol} \\Rightarrow 4,958\\text{ L}$." },
    { id: "w24_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $11\\text{ g}$ hỗn hợp gồm $\\text{Al}$ ($27$) và $\\text{Fe}$ ($56$) bằng dung dịch $\\ce{HCl}$ dư, thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng của Al (gam) trong hỗn hợp.",
      answer: "5.4", tolerance: 0.1,
      solution: "Đặt $n_{\\text{Al}} = x, n_{\\text{Fe}} = y$. Hệ: $27x + 56y = 11$ và $1,5x + y = 0,4 \\Rightarrow x = 0,2\\text{ mol}$ ($5,4\\text{ g}$ Al) và $y = 0,1\\text{ mol}$ ($5,6\\text{ g}$ Fe)." },
    { id: "w24_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Nung nóng $2,4\\text{ g}$ Mg trong bình chứa $4,958\\text{ L}$ khí $\\ce{O2}$ (đkc) đến khi phản ứng hoàn toàn. Tính tổng khối lượng chất rắn (gam) thu được sau phản ứng.",
      answer: "4", tolerance: 0.05,
      solution: "$n_{\\text{Mg}} = 0,1\\text{ mol} < 2n_{\\ce{O2}} = 0,4 \\Rightarrow$ Mg hết, rắn chỉ có $\\ce{MgO}$ ($0,1 \\times 40 = 4,0\\text{ g}$)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w24_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $11,9\\text{ g}$ hỗn hợp gồm $\\text{Al}$ và $\\text{Zn}$ ($\\text{Al}=27, \\text{Zn}=65$) vào dung dịch $\\ce{H2SO4}$ loãng dư, thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính thành phần phần trăm khối lượng mỗi kim loại trong hỗn hợp.",
      quickAnswer: "45.38",
      solution: "Đặt $n_{\\text{Al}} = x, n_{\\text{Zn}} = y$. $n_{\\ce{H2}} = 9,916 / 24,79 = 0,4\\text{ mol}$. PTHH: $\\ce{2Al + 3H2SO4 -> Al2(SO4)3 + 3H2 ^}$ và $\\ce{Zn + H2SO4 -> ZnSO4 + H2 ^}$. Hệ: $27x + 65y = 11,9$ và $1,5x + y = 0,4 \\Rightarrow x = 0,2\\text{ mol}$ ($5,4\\text{ g}$ Al) và $y = 0,1\\text{ mol}$ ($6,5\\text{ g}$ Zn). Vậy $\\%m_{\\text{Al}} = \\frac{5,4}{11,9} \\times 100\\% \\approx 45,38\\%$; $\\%m_{\\text{Zn}} = 54,62\\%$.",
      rubric: [
        { step: "Viết đúng 2 PTHH và tính được $n_{\\ce{H2}}$", points: 0.25 },
        { step: "Lập và giải hệ phương trình tìm đúng số mol Al và Zn", points: 0.5 },
        { step: "Tính đúng $\\%m_{\\text{Al}}$ và $\\%m_{\\text{Zn}}$", points: 0.25 }
      ] },
    { id: "w24_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $19,5\\text{ g}$ kẽm ($\\text{Zn}=65$) tác dụng với dung dịch chứa $29,4\\text{ g}$ $\\ce{H2SO4}$ ($M=98$).<br/>a) Chất nào còn dư sau phản ứng và dư bao nhiêu gam?<br/>b) Dẫn toàn bộ khí $\\ce{H2}$ sinh ra đi qua $16\\text{ g}$ bột $\\ce{CuO}$ nung nóng. Tính khối lượng kim loại đồng (Cu) thu được.",
      quickAnswer: "12.8",
      solution: "a) $n_{\\text{Zn}} = 0,3\\text{ mol}$; $n_{\\ce{H2SO4}} = 0,3\\text{ mol}$. PTHH: $\\ce{Zn + H2SO4 -> ZnSO4 + H2 ^}$ $\\Rightarrow$ phản ứng vừa đủ, $n_{\\ce{H2}} = 0,3\\text{ mol}$ (không chất nào dư). b) $n_{\\ce{CuO}} = 16/80 = 0,2\\text{ mol}$. PTHH: $\\ce{CuO + H2 ->[t^\\circ] Cu + H2O}$. Vì $0,2 < 0,3$ nên $\\ce{CuO}$ hết, $\\ce{H2}$ dư $\\Rightarrow n_{\\text{Cu}} = 0,2\\text{ mol} \\Rightarrow m_{\\text{Cu}} = 12,8\\text{ g}$.",
      rubric: [
        { step: "Tính đúng số mol và kết luận phần a) phản ứng vừa đủ, $n_{\\ce{H2}} = 0,3\\text{ mol}$", points: 0.5 },
        { step: "So sánh dư hết ở phần b) và tính đúng $m_{\\text{Cu}} = 12,8\\text{ g}$", points: 0.5 }
      ] },
    { id: "w24_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nhiệt phân hoàn toàn $31,6\\text{ g}$ $\\ce{KMnO4}$ ($M=158$) theo PTHH $\\ce{2KMnO4 ->[t^\\circ] K2MnO4 + MnO2 + O2 ^}$. Toàn bộ khí $\\ce{O2}$ thu được dùng để đốt cháy $2,4\\text{ g}$ bột Carbon. Tính khối lượng khí $\\ce{CO2}$ tạo thành.",
      quickAnswer: "4.4",
      solution: "$n_{\\ce{KMnO4}} = 31,6/158 = 0,2\\text{ mol} \\Rightarrow n_{\\ce{O2}} = 0,1\\text{ mol}$. $n_{\\text{C}} = 2,4/12 = 0,2\\text{ mol}$. PTHH: $\\ce{C + O2 ->[t^\\circ] CO2}$. Vì $0,1 < 0,2$ nên $\\ce{O2}$ hết, C dư $\\Rightarrow n_{\\ce{CO2}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{CO2}} = 4,4\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{O2}} = 0,1\\text{ mol}$", points: 0.5 },
        { step: "So sánh $\\ce{O2}$ hết, C dư và tính đúng $m_{\\ce{CO2}} = 4,4\\text{ g}$", points: 0.5 }
      ] },
    { id: "w24_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $m$ gam kim loại M (hóa trị II) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư thu được $4,958\\text{ L}$ khí $\\ce{H2}$ (đkc). Nếu cô cạn dung dịch sau phản ứng thu được $27,2\\text{ g}$ muối khan $\\ce{MCl2}$. Tìm tên kim loại M và giá trị $m$.",
      quickAnswer: "13",
      solution: "$n_{\\ce{H2}} = 4,958 / 24,79 = 0,2\\text{ mol}$. PTHH: $\\ce{M + 2HCl -> MCl2 + H2 ^} \\Rightarrow n_{\\ce{MCl2}} = 0,2\\text{ mol}$. Ta có $M_{\\ce{MCl2}} = 27,2 / 0,2 = 136\\text{ g/mol} \\Rightarrow M_M = 136 - 71 = 65\\text{ g/mol}$ (Zinc, Zn). Vậy $m = 0,2 \\times 65 = 13\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $n_{\\ce{MCl2}} = 0,2\\text{ mol} \\Rightarrow M_{\\ce{MCl2}} = 136$", points: 0.5 },
        { step: "Tìm đúng Zn ($M=65$) và $m = 13\\text{ g}$", points: 0.5 }
      ] },
    { id: "w24_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $11,2\\text{ g}$ kim loại Iron (Fe) tác dụng với dung dịch chứa $0,3\\text{ mol}$ $\\ce{HCl}$. Tính thể tích khí $\\ce{H2}$ thu được (đkc) và khối lượng muối tạo thành.",
      solution: "$n_{\\text{Fe}} = 11,2/56 = 0,2\\text{ mol}$; $n_{\\ce{HCl}} = 0,3\\text{ mol}$. PTHH: $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$. So sánh $\\frac{0,2}{1} > \\frac{0,3}{2} \\Rightarrow$ HCl hết, Fe dư. $n_{\\ce{H2}} = n_{\\ce{FeCl2}} = 0,15\\text{ mol}$. Vậy $V_{\\ce{H2}} = 0,15 \\times 24,79 = 3,7185\\text{ L}$ và $m_{\\ce{FeCl2}} = 0,15 \\times 127 = 19,05\\text{ g}$.",
      rubric: [
        { step: "Xác định đúng HCl hết, Fe dư", points: 0.5 },
        { step: "Tính đúng $V_{\\ce{H2}} = 3,7185\\text{ L}$ và $m_{\\ce{FeCl2}} = 19,05\\text{ g}$", points: 0.5 }
      ] }
  ]
};
