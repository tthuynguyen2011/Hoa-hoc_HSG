window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[5] = {
  week: 5,
  title: "Cấu tạo Nguyên tử: Hạt nhân (p, n) & Lớp vỏ electron",
  objectives: [
    "Nắm vững mô hình nguyên tử Rutherford – Bohr: Gồm hạt nhân mang điện dương ở tâm và lớp vỏ gồm các electron mang điện âm chuyển động xung quanh.",
    "Nhớ chính xác điện tích và khối lượng tương đối (amu) của 3 loại hạt cơ bản: proton ($p$), neutron ($n$), electron ($e$).",
    "Vận dụng thành thạo công thức trung hòa điện ($p = e$) và giải được bài toán tổng số hạt cơ bản ($2p + n = S$) mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 5 (A4). Chuẩn bị mô hình hoặc hình vẽ cấu tạo nguyên tử Helium, Carbon.",
    sessions: [
      {
        name: "Buổi 1: Ba loại hạt cơ bản & Sự trung hòa điện",
        guide: "Lập bảng so sánh p (+1, 1 amu), n (0, 1 amu), e (-1, ~0,00055 amu). Nhấn mạnh: Khối lượng nguyên tử tập trung hầu hết ở hạt nhân; nguyên tử trung hòa điện nên số $p =$ số $e$.",
        pitfalls: "Học sinh hay nhầm hạt nhân mang điện âm hoặc quên rằng khối lượng electron quá nhỏ nên được bỏ qua khi tính khối lượng nguyên tử."
      },
      {
        name: "Buổi 2: Bài toán tổng số hạt cơ bản ($2p + n = S$)",
        guide: "Hướng dẫn 2 dạng toán kinh điển: (1) Cho tổng số hạt $S$ và hiệu số hạt mang điện – không mang điện; (2) Chỉ cho tổng số hạt $S$ (với các nguyên tố nhẹ $Z \\le 20$, dùng bất đẳng thức bền $1 \\le n/p \\le 1,5$ hoặc công thức nhanh $p = [S/3]$).",
        pitfalls: "Quên điều kiện nguyên tố bền hoặc quên chia 2 khi tìm số $p$ từ số hạt mang điện ($2p$)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Chú ý 5 câu HSG cuối tuần: bài toán tổng số hạt của phân tử hợp chất $AB_2$ hoặc tìm số hạt khi biết tỉ lệ phần trăm.",
        pitfalls: "Khi trình bày tự luận HSG, học sinh hay viết tắt thiếu câu 'Vì nguyên tử trung hòa điện nên $p = e$' (mất 0,25đ ba rem!)."
      }
    ]
  },
  lecture: [
    {
      title: "Thành phần cấu tạo của Nguyên tử",
      content: `
        <p><strong>Nguyên tử</strong> là hạt vô cùng nhỏ, trung hòa về điện, gồm 2 phần:</p>
        <ul>
          <li><strong>Hạt nhân</strong> (ở tâm, mang điện tích dương): chứa <strong>proton ($p$)</strong> và <strong>neutron ($n$)</strong> (riêng nguyên tử Hydrogen thường chỉ có 1 proton, không có neutron).</li>
          <li><strong>Lớp vỏ</strong> (mang điện tích âm): chứa các <strong>electron ($e$)</strong> chuyển động rất nhanh xung quanh hạt nhân.</li>
        </ul>
        <table class="std-table">
          <thead><tr><th>Loại hạt</th><th>Ký hiệu</th><th>Điện tích tương đối</th><th>Khối lượng (amu)</th></tr></thead>
          <tbody>
            <tr><td>Proton</td><td>$p$</td><td>$+1$</td><td>$\\approx 1\\text{ amu}$</td></tr>
            <tr><td>Neutron</td><td>$n$</td><td>$0$ (không mang điện)</td><td>$\\approx 1\\text{ amu}$</td></tr>
            <tr><td>Electron</td><td>$e$</td><td>$-1$</td><td>$\\approx 0,00055\\text{ amu}$ (rất nhỏ)</td></tr>
          </tbody>
        </table>
        <div class="callout">
          <strong>Công thức cốt lõi:</strong><br/>
          • Nguyên tử trung hòa điện $\\Rightarrow$ <strong>Số $p$ = Số $e$</strong> ($= Z$, số hiệu nguyên tử).<br/>
          • Tổng số hạt cơ bản trong nguyên tử: $S = p + n + e = 2p + n$.<br/>
          • Số hạt mang điện: $2p$; Số hạt không mang điện: $n$.
        </div>
      `,
      checkpoint: {
        question: "Một nguyên tử Sodium (Na) có 11 proton và 12 neutron trong hạt nhân. Tổng số hạt cơ bản ($p, n, e$) của nguyên tử Na là bao nhiêu?",
        options: ["23", "24", "34", "35"],
        answer: 2,
        explanation: "Vì $p = e = 11$ nên tổng số hạt $= 11 + 12 + 11 = 34$."
      }
    },
    {
      title: "Phương pháp giải bài toán Tổng số hạt (Chuẩn HSG)",
      content: `
        <p>Khi đề bài chỉ cho tổng số hạt $S = 2p + n$ (và biết $p \\le 20$ hoặc là nguyên tố bền nhẹ), ta dùng điều kiện bền của hạt nhân:</p>
        <p style="text-align:center;">$$1 \\le \\frac{n}{p} \\le 1,5 \\iff \\frac{S}{3,5} \\le p \\le \\frac{S}{3}$$</p>
        <p>(Với nguyên tử nhẹ $Z \\le 20$, thường $1 \\le n/p \\le 1,25$ nên $p$ là số nguyên duy nhất nằm trong khoảng $[S/3,5 ; S/3]$).</p>
      `,
      example: "Tổng số hạt cơ bản trong nguyên tử X là 40. Xác định số $p, n, e$ của X.<br/><em>Giải:</em> Ta có $2p + n = 40 \\Rightarrow n = 40 - 2p$. Áp dụng $1 \\le \\frac{40 - 2p}{p} \\le 1,5 \\Rightarrow 11,43 \\le p \\le 13,33$.<br/>• Nếu $p = 12 \\Rightarrow n = 16$ ($n/p = 1,33$, loại vì Mg có $n=12$).<br/>• Nếu $p = 13 \\Rightarrow n = 14$ (hợp lý: Aluminium, $M = 27\\text{ amu}$). Vậy $p = e = 13, n = 14$."
    }
  ],
  questions: [
    { id: "w5_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Hạt nhân của hầu hết các nguyên tử được tạo thành từ những loại hạt nào?",
      options: ["A. Proton và electron", "B. Proton và neutron", "C. Neutron và electron", "D. Chỉ có electron"],
      answer: 1, solution: "Hạt nhân chứa proton (+) và neutron (không mang điện)." },
    { id: "w5_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Loại hạt nào mang điện tích âm trong nguyên tử?",
      options: ["A. Proton", "B. Neutron", "C. Electron", "D. Hạt nhân"],
      answer: 2, solution: "Electron mang điện tích $-1$." },
    { id: "w5_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong một nguyên tử trung hòa về điện, luôn có mối quan hệ nào sau đây?",
      options: ["A. Số $p$ = số $n$", "B. Số $p$ = số $e$", "C. Số $n$ = số $e$", "D. Số $p$ = số $n$ + số $e$"],
      answer: 1, solution: "Điện tích dương của $p$ cân bằng với điện tích âm của $e$ nên số $p =$ số $e$." },
    { id: "w5_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Khối lượng của nguyên tử tập trung chủ yếu ở đâu?",
      options: ["A. Lớp vỏ electron", "B. Hạt nhân nguyên tử", "C. Khoảng trống giữa vỏ và hạt nhân", "D. Chia đều cho vỏ và hạt nhân"],
      answer: 1, solution: "Khối lượng electron rất nhỏ ($0,00055\\text{ amu}$) nên khối lượng nguyên tử coi như tập trung ở hạt nhân." },
    { id: "w5_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Carbon có 6 proton. Số electron ở lớp vỏ của nguyên tử Carbon là:",
      options: ["A. 3", "B. 6", "C. 12", "D. 18"],
      answer: 1, solution: "Số $e =$ số $p = 6$." },
    { id: "w5_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử nhẹ nhất (Hydrogen thường, $\\ce{^1H}$) không chứa loại hạt nào sau đây?",
      options: ["A. Proton", "B. Electron", "C. Neutron", "D. Cả proton và electron"],
      answer: 2, solution: "Hạt nhân $\\ce{^1H}$ chỉ có 1 proton, 0 neutron." },
    { id: "w5_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Nếu coi hạt nhân như một quả bóng bàn đặt ở giữa sân vận động, thì kích thước nguyên tử tương đương với:",
      options: ["A. Một quả bóng đá", "B. Toàn bộ sân vận động", "C. Một hạt cát", "D. Một chiếc bàn học"],
      answer: 1, solution: "Đường kính nguyên tử lớn gấp khoảng $10\\,000$ lần đường kính hạt nhân → nguyên tử có cấu tạo rỗng." },
    { id: "w5_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về cấu tạo nguyên tử:",
      statements: [
        { text: "Hạt nhân nguyên tử luôn mang điện tích dương.", answer: true },
        { text: "Khối lượng của 1 proton xấp xỉ bằng khối lượng của 1 neutron (khoảng $1\\text{ amu}$).", answer: true },
        { text: "Số neutron luôn bằng số proton trong mọi nguyên tử.", answer: false },
        { text: "Electron chuyển động theo các lớp xung quanh hạt nhân.", answer: true }
      ],
      solution: "c) Sai vì nhiều nguyên tử có $n > p$ (như Na có $11p, 12n$)." },
    { id: "w5_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tử Calcium (Ca) có $20$ proton và $20$ neutron. Tổng số hạt cơ bản trong nguyên tử Ca là bao nhiêu?",
      answer: "60", tolerance: 0.1,
      solution: "$S = 2p + n = 2(20) + 20 = 60$ hạt." },
    { id: "w5_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Một nguyên tử có tổng số hạt cơ bản là $24$, trong đó số hạt không mang điện là $8$. Số proton trong hạt nhân nguyên tử đó là bao nhiêu?",
      answer: "8", tolerance: 0.1,
      solution: "$2p = 24 - 8 = 16 \\Rightarrow p = 8$ (Oxygen)." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w5_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Hạt nhân của nguyên tử nguyên tố X có $24$ hạt, trong đó số hạt không mang điện là $12$. Số electron trong nguyên tử X là:",
      options: ["A. 12", "B. 24", "C. 13", "D. 6"],
      answer: 0, solution: "Hạt nhân gồm $p + n = 24$, mà $n = 12 \\Rightarrow p = 12 \\Rightarrow e = 12$." },
    { id: "w5_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nguyên tử Y có tổng số hạt là $34$. Số hạt mang điện nhiều hơn số hạt không mang điện là $10$. Số proton của Y là:",
      options: ["A. 10", "B. 11", "C. 12", "D. 22"],
      answer: 1, solution: "$2p + n = 34$ và $2p - n = 10 \\Rightarrow 4p = 44 \\Rightarrow p = 11$ (Sodium)." },
    { id: "w5_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho nguyên tử Z có $17$ proton và $18$ neutron. Xét các nhận định sau:",
      statements: [
        { text: "Số electron ở lớp vỏ của Z là $17$.", answer: true },
        { text: "Số hạt mang điện trong Z nhiều hơn số hạt không mang điện là $16$.", answer: true },
        { text: "Khối lượng hạt nhân của Z xấp xỉ $35\\text{ amu}$.", answer: true },
        { text: "Điện tích hạt nhân của Z là $-17$.", answer: false }
      ],
      solution: "b) Đúng: $2p - n = 34 - 18 = 16$. d) Sai: Điện tích hạt nhân là $+17$." },
    { id: "w5_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Nguyên tử M có tổng số hạt cơ bản là $52$. Trong đó số hạt mang điện nhiều hơn số hạt không mang điện là $16$. Tính số neutron trong hạt nhân M.",
      answer: "18", tolerance: 0.1,
      solution: "$2p + n = 52$ và $2p - n = 16 \\Rightarrow 2n = 52 - 16 = 36 \\Rightarrow n = 18$ (Chlorine)." },
    { id: "w5_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Phân tử $\\ce{CO2}$ gồm 1 nguyên tử C ($6p, 6n$) và 2 nguyên tử O ($8p, 8n$). Tổng số hạt electron có trong 1 phân tử $\\ce{CO2}$ là bao nhiêu?",
      answer: "22", tolerance: 0.1,
      solution: "Số $e = 6 + 2 \\times 8 = 22$ electron." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w5_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tổng số hạt proton, neutron, electron trong nguyên tử nguyên tố X là $28$. Tìm số hạt mỗi loại của X.",
      quickAnswer: "9",
      solution: "Vì nguyên tử trung hòa điện nên $p = e \\Rightarrow 2p + n = 28 \\Rightarrow n = 28 - 2p$. Áp dụng điều kiện bền $1 \\le \\frac{n}{p} \\le 1,5 \\Rightarrow \\frac{28}{3,5} \\le p \\le \\frac{28}{3} \\Rightarrow 8 \\le p \\le 9,33$. Với $p = 8 \\Rightarrow n = 12$ ($n/p = 1,5$, loại vì O bền có $n=8$). Với $p = 9 \\Rightarrow n = 10$ (Fluorine, thỏa mãn). Vậy $p = e = 9, n = 10$.",
      rubric: [
        { step: "Lập đúng phương trình $2p + n = 28$ (nêu $p = e$)", points: 0.25 },
        { step: "Áp dụng bất đẳng thức bền $1 \\le n/p \\le 1,5$ tìm ra $8 \\le p \\le 9,33$", points: 0.5 },
        { step: "Biện luận chọn đúng $p = e = 9, n = 10$ (Fluorine)", points: 0.25 }
      ] },
    { id: "w5_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nguyên tử của nguyên tố R có tổng số hạt cơ bản là $46$. Trong nguyên tử R, số hạt không mang điện bằng $8/15$ số hạt mang điện. Xác định số $p, n, e$ của R.",
      quickAnswer: "15",
      solution: "Ta có $2p + n = 46$ và $n = \\frac{8}{15}(2p) = \\frac{16}{15}p$. Thay vào: $2p + \\frac{16}{15}p = 46 \\Rightarrow \\frac{46}{15}p = 46 \\Rightarrow p = 15$. Suy ra $e = 15$, $n = 46 - 30 = 16$ (Phosphorus).",
      rubric: [
        { step: "Lập hệ phương trình $2p + n = 46$ và $n = \\frac{8}{15}(2p)$", points: 0.5 },
        { step: "Giải đúng $p = e = 15$, $n = 16$", points: 0.5 }
      ] },
    { id: "w5_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một phân tử $\\ce{M2X}$ có tổng số hạt cơ bản ($p, n, e$) là $140$, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là $44$. Số khối (tổng $p + n$) của nguyên tử M lớn hơn của X là $23$. Tổng số hạt cơ bản trong nguyên tử M nhiều hơn trong nguyên tử X là $34$. Tìm số proton của M và X.",
      quickAnswer: "19",
      solution: "Trong $\\ce{M2X}$: $(4p_M + 2p_X) + (2n_M + n_X) = 140$ và $(4p_M + 2p_X) - (2n_M + n_X) = 44 \\Rightarrow 2p_M + p_X = 46$ (1) và $2n_M + n_X = 48$. Mặt khác: $(p_M + n_M) - (p_X + n_X) = 23$ và $(2p_M + n_M) - (2p_X + n_X) = 34$. Trừ vế theo vế 2 phương trình sau được $p_M - p_X = 11$ (2). Từ (1) và (2) $\\Rightarrow 3p_M = 57 \\Rightarrow p_M = 19$ (K), $p_X = 8$ (O). Hợp chất là $\\ce{K2O}$.",
      rubric: [
        { step: "Tính được $2p_M + p_X = 46$ từ tổng số hạt của $\\ce{M2X}$", points: 0.5 },
        { step: "Tìm được $p_M - p_X = 11$ từ hiệu số khối và tổng số hạt của M và X", points: 0.25 },
        { step: "Giải đúng $p_M = 19$ (K) và $p_X = 8$ (O)", points: 0.25 }
      ] },
    { id: "w5_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Biết khối lượng 1 nguyên tử Carbon-12 là $1,9926 \\times 10^{-23}\\text{ g}$ (tương ứng $12\\text{ amu}$). Một nguyên tử Aluminium (Al) có khối lượng thực là $4,482 \\times 10^{-23}\\text{ g}$. Hãy tính khối lượng nguyên tử Al theo đơn vị amu (làm tròn 1 chữ số thập phân).",
      quickAnswer: "27.0",
      solution: "$1\\text{ amu} = \\frac{1}{12} \\times 1,9926 \\times 10^{-23} = 1,6605 \\times 10^{-24}\\text{ g}$. Khối lượng nguyên tử Al theo amu $= \\frac{4,482 \\times 10^{-23}}{1,6605 \\times 10^{-24}} \\approx 27,0\\text{ amu}$.",
      rubric: [
        { step: "Tính đúng giá trị $1\\text{ amu} = 1,6605 \\times 10^{-24}\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $M_{\\text{Al}} \\approx 27,0\\text{ amu}$", points: 0.5 }
      ] },
    { id: "w5_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao trong nguyên tử, các electron mang điện âm chuyển động xung quanh hạt nhân mang điện dương mà không bị hút dính vào hạt nhân?",
      solution: "Các electron chuyển động cực kỳ nhanh quanh hạt nhân trên các lớp/quỹ đạo với năng lượng xác định (lực hút tĩnh điện đóng vai trò lực hướng tâm giữ electron chuyển động quanh hạt nhân chứ không rơi vào tâm, tương tự các hành tinh quay quanh Mặt Trời).",
      rubric: [
        { step: "Nêu được lực hút tĩnh điện giữa hạt nhân (+) và electron (-) đóng vai trò lực hướng tâm", points: 0.5 },
        { step: "Chỉ ra electron chuyển động với tốc độ rất lớn theo các lớp có mức năng lượng xác định", points: 0.5 }
      ] }
  ]
};
