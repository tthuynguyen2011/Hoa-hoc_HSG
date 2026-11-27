window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[9] = {
  week: 9,
  title: "Ôn tập & Kiểm tra định kỳ Giai đoạn 1A (Chuẩn CV 7991 + HSG)",
  objectives: [
    "Hệ thống hóa toàn bộ kiến thức Tuần 1–8: An toàn PTN, Ba thể của chất, Oxygen & Không khí, Hỗn hợp & Tách chất, Nguyên tử, Đồng vị & Bảng tuần hoàn.",
    "Hoàn thành bài Kiểm tra định kỳ Giai đoạn 1A gồm 20 câu (10 câu cơ bản chuẩn CV 7991 + 5 câu vận dụng + 5 câu tự luận HSG có ba rem 0,25đ)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Ôn tập tổng hợp + Làm bài kiểm tra nghiêm túc)",
    preparation: "In Phiếu Kiểm tra Tuần 9 (A4) nếu cho con làm trên giấy, hoặc cho con làm trực tiếp trên Web App trong 60 phút.",
    sessions: [
      {
        name: "Buổi 1: Sơ đồ tư duy Tổng ôn Tuần 1–8",
        guide: "Cùng con rà soát lại 4 mảng lớn: (1) Chất & Sự chuyển thể; (2) Hỗn hợp & 4 phương pháp tách chất; (3) Cấu tạo nguyên tử ($2p+n=S$, đồng vị amu); (4) Phân bố electron & Bảng tuần hoàn.",
        pitfalls: "Kiểm tra lại các lỗi hay sai từ Tuần 1–8 (như đọc đáy mặt khum, quên $21\\%$ là theo thể tích, viết sai ký hiệu K/P/Na)."
      },
      {
        name: "Buổi 2: Làm bài Kiểm tra định kỳ Giai đoạn 1A (20 câu – 60 phút)",
        guide: "Cho con làm bài nghiêm túc, không mở tài liệu. Chú ý cách trình bày sạch sẽ 5 câu tự luận HSG.",
        pitfalls: "Học sinh hay vội vàng ở câu Đúng/Sai 4 ý dẫn đến mất điểm đáng tiếc."
      },
      {
        name: "Buổi 3: Chữa bài & Tổng kết điểm Giai đoạn 1A",
        guide: "Chấm điểm theo ba rem, phân tích các câu sai và chốt mục tiêu trước khi bước sang Tuần 10 (Liên kết hóa học & Hóa trị).",
        pitfalls: "Nếu con đạt dưới $14/20$ điểm, cho con ôn lại các tuần bị hổng trước khi sang Tuần 10."
      }
    ]
  },
  lecture: [
    {
      title: "Tổng hợp Công thức & Quy tắc Vàng (Tuần 1 → Tuần 8)",
      content: `
        <table class="std-table">
          <thead><tr><th>Chủ đề</th><th>Kiến thức cốt lõi phải nhớ</th></tr></thead>
          <tbody>
            <tr><td><strong>Chuyển thể</strong></td><td>Thu nhiệt: Nóng chảy, Bay hơi, Sôi, Thăng hoa. Tỏa nhiệt: Đông đặc, Ngưng tụ.</td></tr>
            <tr><td><strong>Không khí</strong></td><td>$78\\%\\ \\ce{N2}$, $21\\%\\ \\ce{O2}$, $1\\%$ khí khác (theo thể tích). Tam giác cháy: Chất cháy + $\\ce{O2}$ + Nguồn nhiệt.</td></tr>
            <tr><td><strong>Tách chất</strong></td><td>Lọc (rắn không tan), Cô cạn (rắn tan bền nhiệt), Chiết (2 lỏng không tan), Chưng cất (2 lỏng tan, khác $T_{\\text{sôi}}$).</td></tr>
            <tr><td><strong>Nguyên tử</strong></td><td>$p = e = Z$; $S = 2p + n$; Điều kiện bền: $1 \\le n/p \\le 1,5$. $\\overline{M} = \\frac{A_1 x + A_2(100-x)}{100}$.</td></tr>
            <tr><td><strong>Bảng tuần hoàn</strong></td><td>$\\text{Ô} = Z$; $\\text{Chu kỳ} = \\text{Số lớp } e$; $\\text{Nhóm A} = \\text{Số } e\\text{ lớp ngoài cùng}$ (trừ He).</td></tr>
          </tbody>
        </table>
      `
    }
  ],
  questions: [
    // 10 CÂU CƠ BẢN (1đ x 10 = 10đ)
    { id: "w9_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Hiện tượng nào sau đây là sự ngưng tụ?",
      options: ["A. Nước đá tan trên bàn", "B. Quần áo ướt phơi nắng bị khô", "C. Sương đọng trên lá cây vào sáng sớm", "D. Băng phiến nhỏ dần trong tủ quần áo"],
      answer: 2, solution: "Hơi nước trong không khí gặp lạnh ngưng tụ thành giọt sương." },
    { id: "w9_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong không khí sạch, khí Oxygen chiếm tỉ lệ thể tích khoảng:",
      options: ["A. $1\\%$", "B. $21\\%$", "C. $50\\%$", "D. $78\\%$"],
      answer: 1, solution: "Oxygen chiếm $21\\%$ thể tích không khí." },
    { id: "w9_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Hỗn hợp nào sau đây là một huyền phù?",
      options: ["A. Nước muối sinh lý", "B. Nước sông có nhiều phù sa", "C. Sữa tươi", "D. Rượu pha nước"],
      answer: 1, solution: "Phù sa rắn lơ lửng trong nước tạo huyền phù." },
    { id: "w9_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Để tách dầu ăn ra khỏi nước, phương pháp thích hợp nhất là:",
      options: ["A. Lọc", "B. Cô cạn", "C. Chiết", "D. Chưng cất"],
      answer: 2, solution: "Dầu ăn và nước không tan vào nhau, tách lớp → dùng phễu chiết." },
    { id: "w9_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Hạt mang điện tích dương trong nguyên tử là:",
      options: ["A. Proton", "B. Neutron", "C. Electron", "D. Phân tử"],
      answer: 0, solution: "Proton mang điện tích $+1$." },
    { id: "w9_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Ký hiệu hóa học của nguyên tố Potassium là:",
      options: ["A. P", "B. Po", "C. K", "D. Na"],
      answer: 2, solution: "Potassium ký hiệu là K." },
    { id: "w9_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử Magnesium ($Z = 12$) có phân bố electron theo từng lớp là:",
      options: ["A. $2/10$", "B. $2/8/2$", "C. $2/6/4$", "D. $8/4$"],
      answer: 1, solution: "Lớp 1 tối đa 2e, lớp 2 tối đa 8e, lớp 3 còn 2e: $2/8/2$." },
    { id: "w9_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Đánh giá Đúng/Sai cho các kiến thức tổng hợp sau:",
      statements: [
        { text: "Nước cất là chất tinh khiết có nhiệt độ sôi $100^\\circ\\text{C}$ ở 1 atm.", answer: true },
        { text: "Khối lượng nguyên tử tập trung chủ yếu ở lớp vỏ electron.", answer: false },
        { text: "Các nguyên tố cùng một chu kỳ có cùng số lớp electron.", answer: true },
        { text: "Dùng nước phun vào đám cháy xăng dầu sẽ dập tắt lửa nhanh nhất.", answer: false }
      ],
      solution: "b) Sai: tập trung ở hạt nhân; d) Sai: xăng nổi trên nước và cháy lan." },
    { id: "w9_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Một nguyên tử có $11$ proton và $12$ neutron. Tổng số hạt cơ bản ($p, n, e$) trong nguyên tử đó là bao nhiêu?",
      answer: "34", tolerance: 0.1,
      solution: "$S = 2(11) + 12 = 34$." },
    { id: "w9_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tố X nằm ở chu kỳ 2, nhóm VIIA. Số hiệu nguyên tử $Z$ của X là bao nhiêu?",
      answer: "9", tolerance: 0.1,
      solution: "2 lớp e, lớp ngoài 7e → $2/7 \\Rightarrow Z = 9$ (Fluorine)." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w9_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một chất rắn X có nhiệt độ nóng chảy $5^\\circ\\text{C}$ và nhiệt độ sôi $80^\\circ\\text{C}$. Ở nhiệt độ phòng ($25^\\circ\\text{C}$), chất X tồn tại ở thể nào?",
      options: ["A. Thể rắn", "B. Thể lỏng", "C. Thể khí", "D. Vừa rắn vừa lỏng"],
      answer: 1, solution: "Vì $5^\\circ\\text{C} < 25^\\circ\\text{C} < 80^\\circ\\text{C}$ nên X ở thể lỏng." },
    { id: "w9_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Để tách riêng hỗn hợp gồm 2 chất lỏng tan hoàn toàn vào nhau là acetone ($T_{\\text{sôi}} = 56^\\circ\\text{C}$) và nước ($T_{\\text{sôi}} = 100^\\circ\\text{C}$), ta dùng phương pháp nào?",
      options: ["A. Chiết bằng phễu chiết", "B. Lọc qua giấy lọc", "C. Chưng cất", "D. Dùng nam châm"],
      answer: 2, solution: "Hai chất lỏng tan vào nhau, khác nhau nhiều về nhiệt độ sôi → Chưng cất." },
    { id: "w9_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho 2 nguyên tử X ($Z = 12$) và Y ($Z = 17$):",
      statements: [
        { text: "X và Y thuộc cùng một chu kỳ 3.", answer: true },
        { text: "X là kim loại, Y là phi kim.", answer: true },
        { text: "Tính kim loại của X yếu hơn Y.", answer: false },
        { text: "X có 2e lớp ngoài cùng, Y có 7e lớp ngoài cùng.", answer: true }
      ],
      solution: "c) Sai vì X là kim loại (Mg), Y là phi kim (Cl)." },
    { id: "w9_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tính thể tích không khí (theo Lít, chứa $21\\%$ $\\ce{O2}$) cần để cung cấp đủ $63\\text{ L}$ khí oxygen.",
      answer: "300", tolerance: 0.5,
      solution: "$V_{\\text{kk}} = 63 / 0,21 = 300\\text{ L}$." },
    { id: "w9_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Nguyên tử M có tổng số hạt là $48$, trong đó số hạt mang điện gấp $2$ lần số hạt không mang điện. Số electron của M là bao nhiêu?",
      answer: "16", tolerance: 0.1,
      solution: "$2p + n = 48$ và $2p = 2n \\Rightarrow n = 16, p = e = 16$ (Sulfur)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w9_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trình bày cách tách riêng từng chất ra khỏi hỗn hợp rắn gồm: <strong>bột sắt, đá vôi (không tan trong nước) và muối ăn (tan trong nước)</strong>.",
      solution: "B1: Dùng nam châm hút hết bột sắt ra khỏi hỗn hợp. B2: Hòa tan phần còn lại vào nước dư, khuấy đều cho muối ăn tan hết. B3: Lọc qua phễu lọc: trên giấy lọc thu được đá vôi (rửa sạch, sấy khô). B4: Cô cạn nước lọc thu được muối ăn khan.",
      rubric: [
        { step: "Dùng nam châm tách riêng bột sắt", points: 0.25 },
        { step: "Hòa tan vào nước, lọc thu được đá vôi trên giấy lọc", points: 0.5 },
        { step: "Cô cạn nước lọc thu được muối ăn", points: 0.25 }
      ] },
    { id: "w9_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tổng số hạt cơ bản ($p, n, e$) trong nguyên tử X là $34$. Tìm số hạt mỗi loại, viết phân bố electron và xác định vị trí của X trong Bảng tuần hoàn.",
      quickAnswer: "11",
      solution: "$2p + n = 34 \\Rightarrow n = 34 - 2p$. Áp dụng $1 \\le \\frac{34 - 2p}{p} \\le 1,5 \\Rightarrow 9,71 \\le p \\le 11,33$. Chọn $p = 11 \\Rightarrow n = 12, e = 11$ (Sodium, hợp lý; $p = 10 \\Rightarrow n = 14$ loại vì Ne bền có $n=10$). Phân bố $2/8/1 \\Rightarrow$ Ô 11, Chu kỳ 3, Nhóm IA.",
      rubric: [
        { step: "Áp dụng điều kiện bền tìm đúng $p = e = 11$, $n = 12$", points: 0.5 },
        { step: "Viết phân bố $2/8/1$ và xác định Ô 11, Chu kỳ 3, Nhóm IA (Sodium)", points: 0.5 }
      ] },
    { id: "w9_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong tự nhiên, nguyên tố Silver (Ag) có hai đồng vị là $\\ce{^107Ag}$ chiếm $51,8\\%$ và $\\ce{^109Ag}$ chiếm $48,2\\%$ số nguyên tử. Tính khối lượng nguyên tử trung bình của Silver (làm tròn 2 chữ số thập phân).",
      quickAnswer: "107.96",
      solution: "$\\overline{M}_{\\text{Ag}} = \\frac{107 \\times 51,8 + 109 \\times 48,2}{100} = 107,964 \\approx 107,96\\text{ amu}$.",
      rubric: [
        { step: "Thiết lập đúng công thức tính $\\overline{M}_{\\text{Ag}}$", points: 0.5 },
        { step: "Tính đúng kết quả $107,96\\text{ amu}$", points: 0.5 }
      ] },
    { id: "w9_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hai nguyên tố A, B ($Z_A < Z_B$) đứng kế tiếp nhau trong cùng một chu kỳ của Bảng tuần hoàn và có tổng số hiệu nguyên tử là $33$. Xác định vị trí của A, B và cho biết A, B là kim loại hay phi kim.",
      solution: "$Z_A + Z_B = 33$ và $Z_B - Z_A = 1 \\Rightarrow Z_A = 16$ (Sulfur: Ô 16, CK 3, Nhóm VIA, phi kim) và $Z_B = 17$ (Chlorine: Ô 17, CK 3, Nhóm VIIA, phi kim).",
      rubric: [
        { step: "Giải đúng $Z_A = 16$ và $Z_B = 17$", points: 0.5 },
        { step: "Nêu đúng vị trí (CK 3, nhóm VIA & VIIA) và đều là phi kim", points: 0.5 }
      ] },
    { id: "w9_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một bình kín chứa $20\\text{ L}$ không khí ($20\\%$ $\\ce{O2}$, $80\\%$ $\\ce{N2}$ theo thể tích). Người ta đốt hết $1/4$ lượng khí $\\ce{O2}$ trong bình bằng khí $\\ce{CO}$ (cứ $1\\text{ L}$ $\\ce{O2}$ phản ứng với $2\\text{ L}$ $\\ce{CO}$ tạo ra $2\\text{ L}$ $\\ce{CO2}$). Tính thể tích mỗi khí có trong bình sau phản ứng (coi thể tích đo ở cùng điều kiện nhiệt độ, áp suất).",
      solution: "Ban đầu: $V_{\\ce{O2}} = 4\\text{ L}$, $V_{\\ce{N2}} = 16\\text{ L}$. Đốt $1/4$ lượng $\\ce{O2}$ tức là $1\\text{ L}$ $\\ce{O2}$ phản ứng → tạo ra $2\\text{ L}$ $\\ce{CO2}$. Vậy sau phản ứng trong bình có: $V_{\\ce{N2}} = 16\\text{ L}$, $V_{\\ce{O2\\ dư}} = 3\\text{ L}$, $V_{\\ce{CO2}} = 2\\text{ L}$ (tổng $21\\text{ L}$).",
      rubric: [
        { step: "Tính đúng lượng khí ban đầu ($4\\text{ L}\\ \\ce{O2}$, $16\\text{ L}\\ \\ce{N2}$)", points: 0.25 },
        { step: "Tính đúng $1\\text{ L}\\ \\ce{O2}$ phản ứng sinh $2\\text{ L}\\ \\ce{CO2}$", points: 0.5 },
        { step: "Kết luận đúng: $16\\text{ L}\\ \\ce{N2}$, $3\\text{ L}\\ \\ce{O2}$, $2\\text{ L}\\ \\ce{CO2}$", points: 0.25 }
      ] }
  ]
};
