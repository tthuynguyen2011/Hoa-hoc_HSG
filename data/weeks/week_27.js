window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[27] = {
  week: 27,
  title: "Kiểm tra giữa HK2 Năm 1 (Mol – PTHH – Độ tan)",
  objectives: [
    "Kiểm tra tổng hợp toàn bộ kiến thức nửa đầu Giai đoạn 2 (Tuần 19 → 26): Biến đổi lý/hóa, ĐLBTKL, Cân bằng PTHH, Mol, Thể tích khí đkc ($24,79\\text{ L/mol}$), Tỉ khối, Tính theo PTHH (chất dư – hiệu suất) và Độ tan.",
    "Đánh giá năng lực giải quyết bài toán định lượng và tự luận ba rem HSG 8."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Ôn tập + Thi giữa HK2 + Chữa bài chi tiết)",
    preparation: "In Phiếu Kiểm tra giữa HK2 (A4) hoặc làm bài trực tuyến trong 60 phút.",
    sessions: [
      {
        name: "Buổi 1: Tổng hợp Công thức Định lượng (Tuần 19–26)",
        guide: "Cho con tự viết lại 6 công thức cốt lõi: ĐLBTKL, $n = m/M$, $V_{\\text{đkc}} = 24,79n$, $d_{A/B} = M_A/M_B$, Hiệu suất $H\\%$, Độ tan $S$ & $C\\%_{\\text{bh}}$.",
        pitfalls: "Kiểm tra lại xem con còn nhầm $22,4$ với $24,79$ hay không."
      },
      {
        name: "Buổi 2: Làm bài Kiểm tra giữa HK2 (20 câu – 60 phút)",
        guide: "Làm bài nghiêm túc, trình bày rõ ràng các bước tính số mol, viết PTHH, so sánh dư hết.",
        pitfalls: "Quên cân bằng PTHH trước khi kéo số mol."
      },
      {
        name: "Buổi 3: Chấm điểm theo Ba rem HSG & Tổng kết",
        guide: "Chấm từng ý `0,25đ / 0,5đ` và rà soát các lỗi tính toán trước khi sang Tuần 28 (Nồng độ dung dịch $C\\%, C_M$).",
        pitfalls: "Nếu con mất điểm ở phần ĐLBTKL hay Độ tan, cho ôn lại Tuần 20 và 26."
      }
    ]
  },
  lecture: [
    {
      title: "Bảng Vàng Công thức Định lượng Hóa học (Tuần 19 → 26)",
      content: `
        <table class="std-table">
          <thead><tr><th>Đại lượng</th><th>Công thức chuẩn GDPT 2018</th><th>Lưu ý</th></tr></thead>
          <tbody>
            <tr><td><strong>ĐLBTKL</strong></td><td>$\\sum m_{\\text{tham gia PƯ}} = \\sum m_{\\text{sản phẩm}}$</td><td>Trừ phần chất dư (nếu có)</td></tr>
            <tr><td><strong>Số mol (chất)</strong></td><td>$n = \\frac{m}{M}$</td><td>$M$ tính bằng $\\text{g/mol}$</td></tr>
            <tr><td><strong>Thể tích khí (đkc)</strong></td><td>$V = 24,79 \\times n$</td><td>Chỉ dùng cho chất khí ở $25^\\circ\\text{C}, 1\\text{ bar}$</td></tr>
            <tr><td><strong>Tỉ khối khí</strong></td><td>$d_{A/B} = \\frac{M_A}{M_B}$; $d_{A/\\text{kk}} = \\frac{M_A}{29}$</td><td>$M > 29$: nặng hơn không khí</td></tr>
            <tr><td><strong>Hiệu suất</strong></td><td>$H\\% = \\frac{n_{\\text{TT}}}{n_{\\text{LT}}} \\times 100\\%$</td><td>Phải Nhân – Trái Chia</td></tr>
            <tr><td><strong>Độ tan</strong></td><td>$S = \\frac{m_{\\text{ct}}}{m_{\\ce{H2O}}} \\times 100$</td><td>$C\\%_{\\text{bh}} = \\frac{S}{100+S} \\times 100\\%$</td></tr>
          </tbody>
        </table>
      `
    }
  ],
  questions: [
    { id: "w27_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Quá trình nào sau đây là biến đổi HÓA HỌC?",
      options: ["A. Uốn cong dây sắt", "B. Hòa tan muối vào nước", "C. Đốt cháy khí methane tạo $\\ce{CO2}$ và $\\ce{H2O}$", "D. Nước đóng băng"],
      answer: 2, solution: "Đốt cháy tạo chất mới là $\\ce{CO2}$ và $\\ce{H2O}$." },
    { id: "w27_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Đốt cháy $3,6\\text{ g}$ Magnesium thu được $6,0\\text{ g}$ $\\ce{MgO}$. Khối lượng Oxygen đã phản ứng là:",
      options: ["A. $2,4\\text{ g}$", "B. $3,6\\text{ g}$", "C. $9,6\\text{ g}$", "D. $1,2\\text{ g}$"],
      answer: 0, solution: "$m_{\\ce{O2}} = 6,0 - 3,6 = 2,4\\text{ g}$." },
    { id: "w27_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Hệ số cân bằng tối giản của phương trình $\\ce{?Fe + ?O2 ->[t^\\circ] ?Fe3O4}$ lần lượt là:",
      options: ["A. 3, 2, 1", "B. 2, 3, 1", "C. 1, 2, 1", "D. 3, 4, 1"],
      answer: 0, solution: "$\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}$." },
    { id: "w27_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Số mol của $20\\text{ g}$ $\\ce{NaOH}$ ($M=40$) là:",
      options: ["A. $0,2\\text{ mol}$", "B. $0,5\\text{ mol}$", "C. $1,0\\text{ mol}$", "D. $2,0\\text{ mol}$"],
      answer: 1, solution: "$n = 20 / 40 = 0,5\\text{ mol}$." },
    { id: "w27_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Thể tích của $0,4\\text{ mol}$ khí $\\ce{N2}$ đo ở đkc ($24,79\\text{ L/mol}$) là:",
      options: ["A. $8,96\\text{ L}$", "B. $9,916\\text{ L}$", "C. $12,395\\text{ L}$", "D. $24,79\\text{ L}$"],
      answer: 1, solution: "$V = 0,4 \\times 24,79 = 9,916\\text{ L}$." },
    { id: "w27_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí nào sau đây NẶNG hơn không khí ($M_{\\text{kk}} \\approx 29$)?",
      options: ["A. $\\ce{H2}$", "B. $\\ce{NH3}$", "C. $\\ce{CH4}$", "D. $\\ce{Cl2}$ ($M=71$)"],
      answer: 3, solution: "$M_{\\ce{Cl2}} = 71 > 29$." },
    { id: "w27_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở $20^\\circ\\text{C}$, độ tan của muối A là $25\\text{ g}$. Nồng độ % dung dịch bão hòa A ở $20^\\circ\\text{C}$ là:",
      options: ["A. $20\\%$", "B. $25\\%$", "C. $30\\%$", "D. $15\\%$"],
      answer: 0, solution: "$C\\% = (25 / 125) \\times 100\\% = 20\\%$." },
    { id: "w27_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Trong phản ứng hóa học, số nguyên tử mỗi nguyên tố luôn bảo toàn.", answer: true },
        { text: "Ở đkc, $1\\text{ mol}$ $\\ce{H2}$ và $1\\text{ mol}$ $\\ce{CO2}$ có khối lượng bằng nhau.", answer: false },
        { text: "Muốn thu khí $\\ce{CO2}$ bằng phương pháp đẩy không khí phải đặt ngửa bình.", answer: true },
        { text: "Hiệu suất phản ứng không bao giờ vượt quá $100\\%$.", answer: true }
      ],
      solution: "b) Sai vì $1\\text{ mol}\\ \\ce{H2}$ nặng $2\\text{ g}$, $1\\text{ mol}\\ \\ce{CO2}$ nặng $44\\text{ g}$." },
    { id: "w27_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $5,6\\text{ g}$ Iron ($\\text{Fe}=56$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Tính thể tích khí $\\ce{H2}$ (Lít, ở đkc) thu được.",
      answer: "2.479", tolerance: 0.01,
      solution: "$n_{\\text{Fe}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },
    { id: "w27_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nung $100\\text{ g}$ $\\ce{CaCO3}$ với hiệu suất $85\\%$. Khối lượng $\\ce{CaO}$ ($M=56$) thu được là bao nhiêu gam?",
      answer: "47.6", tolerance: 0.1,
      solution: "$m_{\\ce{CaO}} = 1 \\times 56 \\times 0,85 = 47,6\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w27_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho $0,3\\text{ mol}$ $\\text{Al}$ tác dụng với $0,6\\text{ mol}$ $\\ce{HCl}$ ($\\ce{2Al + 6HCl -> 2AlCl3 + 3H2 ^}$). Số mol khí $\\ce{H2}$ thu được là:",
      options: ["A. $0,45\\text{ mol}$", "B. $0,30\\text{ mol}$", "C. $0,60\\text{ mol}$", "D. $0,15\\text{ mol}$"],
      answer: 1, solution: "$0,3/2 = 0,15 > 0,6/6 = 0,1 \\Rightarrow$ HCl hết, $n_{\\ce{H2}} = 0,6 / 2 = 0,30\\text{ mol}$." },
    { id: "w27_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cân bằng PTHH: $\\ce{?FeS2 + ?O2 ->[t^\\circ] ?Fe2O3 + ?SO2}$. Tổng hệ số tối giản của các chất sản phẩm là:",
      options: ["A. 10", "B. 11", "C. 15", "D. 25"],
      answer: 0, solution: "$\\ce{4FeS2 + 11O2 ->[t^\\circ] 2Fe2O3 + 8SO2} \\Rightarrow 2 + 8 = 10$." },
    { id: "w27_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Đốt cháy hoàn toàn $8,8\\text{ g}$ hỗn hợp Mg và Fe trong khí $\\ce{O2}$ dư thu được $12,0\\text{ g}$ hỗn hợp oxide:",
      statements: [
        { text: "Khối lượng khí $\\ce{O2}$ đã phản ứng là $3,2\\text{ g}$.", answer: true },
        { text: "Số mol khí $\\ce{O2}$ đã phản ứng là $0,1\\text{ mol}$.", answer: true },
        { text: "Thể tích $\\ce{O2}$ đã phản ứng ở đkc là $2,479\\text{ L}$.", answer: true },
        { text: "Tổng số mol nguyên tử O trong oxide là $0,1\\text{ mol}$.", answer: false }
      ],
      solution: "d) Sai: $n_{\\text{O}} = 2n_{\\ce{O2}} = 0,2\\text{ mol}$." },
    { id: "w27_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở $80^\\circ\\text{C}$, độ tan của $\\ce{KNO3}$ là $169\\text{ g}$; ở $20^\\circ\\text{C}$ là $31,6\\text{ g}$. Làm lạnh $538\\text{ g}$ dung dịch $\\ce{KNO3}$ bão hòa từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ thu được bao nhiêu gam tinh thể kết tinh?",
      answer: "274.8", tolerance: 0.2,
      solution: "$538\\text{ g}$ dd gồm $200\\text{ g}$ nước và $338\\text{ g}$ muối. Ở $20^\\circ\\text{C}$, $200\\text{ g}$ nước giữ lại $63,2\\text{ g}$ $\\Rightarrow$ kết tinh $= 338 - 63,2 = 274,8\\text{ g}$." },
    { id: "w27_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hỗn hợp khí X gồm $\\ce{CO}$ ($M=28$) và $\\ce{CO2}$ ($M=44$) có tỉ khối đối với $\\ce{H2}$ là $18$. Tính phần trăm thể tích (%) của khí $\\ce{CO}$ trong hỗn hợp X.",
      answer: "50", tolerance: 0.2,
      solution: "$\\overline{M} = 36 = (28 + 44)/2 \\Rightarrow$ tỉ lệ mol $1 : 1 \\Rightarrow 50\\%$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w27_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $11\\text{ g}$ hỗn hợp gồm $\\text{Al}$ và $\\text{Fe}$ vào dung dịch $\\ce{HCl}$ dư thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính phần trăm khối lượng mỗi kim loại trong hỗn hợp.",
      quickAnswer: "49.09",
      solution: "$n_{\\ce{H2}} = 9,916 / 24,79 = 0,4\\text{ mol}$. Đặt $n_{\\text{Al}} = x, n_{\\text{Fe}} = y$. Hệ: $27x + 56y = 11$ và $1,5x + y = 0,4 \\Rightarrow x = 0,2\\text{ mol}$ ($5,4\\text{ g}$ Al), $y = 0,1\\text{ mol}$ ($5,6\\text{ g}$ Fe). Vậy $\\%\\text{Al} = 49,09\\%$, $\\%\\text{Fe} = 50,91\\%$.",
      rubric: [
        { step: "Viết đúng 2 PTHH và tính $n_{\\ce{H2}} = 0,4\\text{ mol}$", points: 0.25 },
        { step: "Giải hệ tìm đúng $n_{\\text{Al}} = 0,2\\text{ mol}$, $n_{\\text{Fe}} = 0,1\\text{ mol}$", points: 0.5 },
        { step: "Tính đúng $\\%\\text{Al} = 49,09\\%$, $\\%\\text{Fe} = 50,91\\%$", points: 0.25 }
      ] },
    { id: "w27_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ một hợp chất khí A trong khí $\\ce{O2}$ dư thu được $9,916\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $14,4\\text{ g}$ nước. Biết tỉ khối của A đối với $\\ce{H2}$ là $8$. Xác định công thức phân tử của A.",
      solution: "$M_A = 8 \\times 2 = 16\\text{ g/mol}$. $n_{\\ce{CO2}} = 0,4\\text{ mol} \\Rightarrow n_{\\text{C}} = 0,4\\text{ mol}$ ($4,8\\text{ g}$); $n_{\\ce{H2O}} = 14,4/18 = 0,8\\text{ mol} \\Rightarrow n_{\\text{H}} = 1,6\\text{ mol}$ ($1,6\\text{ g}$). Tổng $m_{\\text{C}} + m_{\\text{H}} = 4,8 + 1,6 = 6,4\\text{ g} = m_A \\Rightarrow$ A chỉ chứa C và H. Tỉ lệ $x : y = 0,4 : 1,6 = 1 : 4$. Với $M_A = 16 \\Rightarrow$ CTPT là $\\ce{CH4}$ (Methane).",
      rubric: [
        { step: "Tính đúng $n_{\\text{C}} = 0,4\\text{ mol}$, $n_{\\text{H}} = 1,6\\text{ mol}$ và chứng minh không có O", points: 0.5 },
        { step: "Tìm đúng CTPT $\\ce{CH4}$ từ $M_A = 16$", points: 0.5 }
      ] },
    { id: "w27_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nung nóng $15,8\\text{ g}$ $\\ce{KMnO4}$ ($M=158$) một thời gian thu được $14,52\\text{ g}$ chất rắn. Tính hiệu suất của phản ứng nhiệt phân $\\ce{KMnO4}$.",
      quickAnswer: "80",
      solution: "$n_{\\ce{KMnO4}\\text{ bđ}} = 15,8/158 = 0,1\\text{ mol}$. ĐLBTKL: $m_{\\ce{O2}} = 15,8 - 14,52 = 1,28\\text{ g} \\Rightarrow n_{\\ce{O2}} = 1,28/32 = 0,04\\text{ mol}$. PTHH: $\\ce{2KMnO4 -> K2MnO4 + MnO2 + O2 ^} \\Rightarrow n_{\\ce{KMnO4}\\text{ PƯ}} = 2 \\times 0,04 = 0,08\\text{ mol}$. Vậy $H = \\frac{0,08}{0,1} \\times 100\\% = 80\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{O2}} = 1,28\\text{ g}$ ($0,04\\text{ mol}$)", points: 0.5 },
        { step: "Tính đúng $n_{\\ce{KMnO4}\\text{ PƯ}} = 0,08\\text{ mol}$ và $H = 80\\%$", points: 0.5 }
      ] },
    { id: "w27_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cần lấy bao nhiêu gam tinh thể $\\ce{CuSO4.5H2O}$ ($M=250$) hòa tan vào $175\\text{ g}$ nước để thu được dung dịch $\\ce{CuSO4}$ có nồng độ $16\\%$?",
      quickAnswer: "58.33",
      solution: "Gọi số mol $\\ce{CuSO4.5H2O}$ cần dùng là $x\\text{ mol}$ ($m = 250x$, trong đó $m_{\\ce{CuSO4}} = 160x$). Tổng khối lượng dung dịch $= 250x + 175$. Theo đề bài: $\\frac{160x}{250x + 175} = 0,16 \\Rightarrow 160x = 40x + 28 \\Rightarrow 120x = 28 \\Rightarrow x = \\frac{7}{30}\\text{ mol}$. Vậy $m = 250 \\times \\frac{7}{30} \\approx 58,33\\text{ g}$.",
      rubric: [
        { step: "Đặt ẩn $x$ mol tinh thể, viết đúng $m_{\\ce{CuSO4}} = 160x$ và $m_{\\text{dd}} = 250x + 175$", points: 0.5 },
        { step: "Giải đúng $x = 7/30\\text{ mol}$ và $m \\approx 58,33\\text{ g}$", points: 0.5 }
      ] },
    { id: "w27_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại phân đạm ammonium nitrate $\\ce{NH4NO3}$ có lẫn tạp chất trơ (không chứa N). Phân tích thấy nguyên tố Nitrogen chiếm $31,5\\%$ khối lượng mẫu phân bón. Tính độ tinh khiết (% khối lượng $\\ce{NH4NO3}$) của mẫu phân bón trên.",
      quickAnswer: "90",
      solution: "Trong $\\ce{NH4NO3}$ nguyên chất ($M = 80$), $\\%\\text{N} = \\frac{28}{80} \\times 100\\% = 35\\%$. Gọi độ tinh khiết là $a\\%$: ta có $35\\% \\times a\\% = 31,5\\% \\Rightarrow a = \\frac{31,5}{35} \\times 100\\% = 90\\%$.",
      rubric: [
        { step: "Tính đúng $\\%\\text{N}$ trong $\\ce{NH4NO3}$ nguyên chất $= 35\\%$", points: 0.5 },
        { step: "Tính đúng độ tinh khiết $= 90\\%$", points: 0.5 }
      ] }
  ]
};
