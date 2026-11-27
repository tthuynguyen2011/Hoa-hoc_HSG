window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[30] = {
  week: 30,
  title: "Tốc độ phản ứng & Chất xúc tác",
  objectives: [
    "Hiểu khái niệm Tốc độ phản ứng hóa học và biết cách đánh giá phản ứng xảy ra nhanh hay chậm.",
    "Nắm vững 5 yếu tố ảnh hưởng đến tốc độ phản ứng: Nồng độ, Nhiệt độ, Diện tích bề mặt tiếp xúc, Áp suất (với chất khí) và Chất xúc tác.",
    "Hiểu đúng bản chất Chất xúc tác (tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng) và giải thích các ứng dụng thực tế mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 30 (A4). Chuẩn bị 2 viên C sủi (1 viên nguyên, 1 viên nghiền nhỏ) và 2 cốc nước (nóng/lạnh) để minh họa trực tiếp.",
    sessions: [
      {
        name: "Buổi 1: Khái niệm Tốc độ phản ứng & 4 yếu tố vật lý",
        guide: "Làm thí nghiệm viên C sủi: Nước nóng tan nhanh hơn nước lạnh (Nhiệt độ); Viên nghiền nhỏ sủi nhanh hơn viên nguyên (Diện tích tiếp xúc). Mở rộng: Nồng độ tăng (acid đặc vs loãng) và Áp suất khí tăng đều làm tăng số va chạm hiệu quả giữa các hạt.",
        pitfalls: "Học sinh hay nhầm rằng tăng tốc độ phản ứng sẽ làm tăng TỔNG LƯỢNG sản phẩm thu được (sai: tổng lượng sản phẩm phụ thuộc vào số mol chất tham gia ban đầu, tốc độ chỉ làm đạt đến kết thúc NHANH hơn!)."
      },
      {
        name: "Buổi 2: Chất xúc tác & Ứng dụng thực tế",
        guide: "Ví dụ kinh điển: $\\ce{2H2O2 ->[MnO2] 2H2O + O2 ^}$. $\\ce{MnO2}$ làm khí $\\ce{O2}$ thoát ra ào ạt, nhưng lọc lại vẫn thu được nguyên vẹn khối lượng $\\ce{MnO2}$ ban đầu!",
        pitfalls: "Cho rằng chất xúc tác bị tiêu hao hết sau phản ứng."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Câu hỏi thực nghiệm HSG",
        guide: "Rèn 5 câu HSG: giải thích tại sao dùng nồi áp suất hầm xương nhanh nhừ, bảo quản thực phẩm trong tủ lạnh, chẻ nhỏ củi khi nhóm bếp.",
        pitfalls: "Khi giải thích câu thực tế HSG, học sinh hay quên gọi đúng tên yếu tố (ví dụ 'diện tích bề mặt tiếp xúc' chứ không chỉ nói 'nhỏ dễ cháy')."
      }
    ]
  },
  lecture: [
    {
      title: "5 Yếu tố ảnh hưởng đến Tốc độ phản ứng",
      content: `
        <p><strong>Tốc độ phản ứng</strong> cho biết phản ứng hóa học xảy ra nhanh hay chậm. Tốc độ phản ứng <strong>tăng</strong> khi:</p>
        <table class="std-table">
          <thead><tr><th>Yếu tố</th><th>Cơ chế tác động</th><th>Ví dụ thực tế</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Nồng độ</strong></td><td>Tăng nồng độ $\\rightarrow$ mật độ hạt tăng $\\rightarrow$ va chạm nhiều hơn</td><td>Đốt sắt trong $\\ce{O2}$ nguyên chất cháy sáng hơn ngoài không khí</td></tr>
            <tr><td><strong>2. Nhiệt độ</strong></td><td>Tăng nhiệt độ $\\rightarrow$ hạt chuyển động nhanh hơn</td><td>Dùng <strong>nồi áp suất</strong> nấu nhanh nhừ; để thức ăn vào <strong>tủ lạnh</strong> để chậm hỏng</td></tr>
            <tr><td><strong>3. Diện tích tiếp xúc</strong></td><td>Nghiền nhỏ chất rắn $\\rightarrow$ tăng bề mặt tiếp xúc</td><td>Chẻ nhỏ củi để nhóm bếp; nhai kỹ thức ăn giúp tiêu hóa nhanh</td></tr>
            <tr><td><strong>4. Áp suất (chất khí)</strong></td><td>Tăng áp suất $\\rightarrow$ nén khí lại gần nhau hơn</td><td>Tổng hợp $\\ce{NH3}$ ở áp suất cao ($200\\text{ bar}$)</td></tr>
            <tr><td><strong>5. Chất xúc tác</strong></td><td>Làm tăng tốc độ nhưng <strong>còn nguyên sau phản ứng</strong></td><td>$\\ce{MnO2}$ xúc tác phân hủy $\\ce{H2O2}$; Enzyme amylase tiêu hóa tinh bột</td></tr>
          </tbody>
        </table>
      `,
      checkpoint: {
        question: "Cho cùng một lượng kẽm ($1\\text{ g}$) vào 2 ống nghiệm chứa lượng dư dung dịch $\\ce{HCl}$ $1\\text{ M}$: Ống 1 dùng kẽm viên, Ống 2 dùng kẽm bột. Nhận xét nào ĐÚNG?",
        options: [
          "Ống 1 sủi bọt khí nhanh hơn và thu được nhiều $\\ce{H2}$ hơn.",
          "Ống 2 sủi bọt khí nhanh hơn nhưng tổng lượng $\\ce{H2}$ thu được ở hai ống bằng nhau.",
          "Ống 2 thu được nhiều $\\ce{H2}$ gấp đôi ống 1.",
          "Hai ống có tốc độ như nhau."
        ],
        answer: 1,
        explanation: "Kẽm bột có diện tích tiếp xúc lớn hơn nên phản ứng nhanh hơn, nhưng vì cùng $1\\text{ g}$ Zn nên tổng số mol $\\ce{H2}$ cuối cùng bằng nhau."
      }
    }
  ],
  questions: [
    { id: "w30_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Phản ứng nào sau đây xảy ra với tốc độ NHANH NHẤT ở điều kiện thường?",
      options: ["A. Thanh sắt bị gỉ ngoài không khí", "B. Phản ứng lên men rượu", "C. Đốt cháy khí gas trong bếp", "D. Quá trình hình thành than đá trong lòng đất"],
      answer: 2, solution: "Đốt cháy khí gas xảy ra gần như tức thời." },
    { id: "w30_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Việc bảo quản thực phẩm trong tủ lạnh (nhiệt độ thấp) nhằm mục đích gì?",
      options: ["A. Tăng tốc độ phản ứng phân hủy", "B. Làm giảm tốc độ các phản ứng hóa học – sinh học gây ôi thiu", "C. Tăng diện tích tiếp xúc", "D. Cung cấp chất xúc tác"],
      answer: 1, solution: "Hạ nhiệt độ làm giảm tốc độ phản ứng." },
    { id: "w30_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi cho một ít bột $\\ce{MnO2}$ vào dung dịch $\\ce{H2O2}$ (nước oxy già), bọt khí $\\ce{O2}$ thoát ra rất mạnh. Vai trò của $\\ce{MnO2}$ là:",
      options: ["A. Chất tham gia phản ứng", "B. Chất sản phẩm", "C. Chất xúc tác", "D. Dung môi"],
      answer: 2, solution: "$\\ce{MnO2}$ là chất xúc tác làm tăng tốc độ phân hủy $\\ce{H2O2}$." },
    { id: "w30_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Đập nhỏ than đá trước khi cho vào lò đốt là vận dụng yếu tố nào để làm tăng tốc độ phản ứng?",
      options: ["A. Nồng độ", "B. Nhiệt độ", "C. Diện tích bề mặt tiếp xúc", "D. Áp suất"],
      answer: 2, solution: "Đập nhỏ làm tăng diện tích tiếp xúc giữa than và $\\ce{O2}$." },
    { id: "w30_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Yếu tố áp suất ảnh hưởng rõ rệt nhất đến tốc độ của phản ứng có sự tham gia của chất ở thể nào?",
      options: ["A. Thể rắn", "B. Thể lỏng", "C. Thể khí", "D. Cả 3 thể như nhau"],
      answer: 2, solution: "Chỉ chất khí mới dễ bị nén khi thay đổi áp suất." },
    { id: "w30_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Để làm tăng tốc độ phản ứng giữa $\\ce{CaCO3}$ rắn và dung dịch $\\ce{HCl}$, biện pháp nào sau đây KHÔNG làm tăng tốc độ?",
      options: ["A. Nghiền nhỏ $\\ce{CaCO3}$", "B. Tăng nồng độ dung dịch $\\ce{HCl}$", "C. Đun nóng nhẹ hỗn hợp", "D. Pha loãng dung dịch $\\ce{HCl}$ bằng nước"],
      answer: 3, solution: "Pha loãng làm giảm nồng độ $\\ce{HCl}$ nên tốc độ giảm." },
    { id: "w30_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Đặc điểm nào ĐÚNG với chất xúc tác?",
      options: [
        "A. Bị tiêu hao hết sau phản ứng",
        "B. Làm tăng tốc độ phản ứng và được giữ nguyên về chất và lượng sau phản ứng",
        "C. Chỉ làm giảm tốc độ phản ứng",
        "D. Luôn ở thể khí"
      ],
      answer: 1, solution: "Chất xúc tác không bị tiêu hao sau phản ứng." },
    { id: "w30_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về tốc độ phản ứng:",
      statements: [
        { text: "Nhai kỹ cơm trong miệng giúp enzyme tiêu hóa tiếp xúc nhiều hơn, tiêu hóa nhanh hơn.", answer: true },
        { text: "Dùng bình oxy tinh khiết để hàn cắt kim loại giúp ngọn lửa cháy mạnh hơn ngoài không khí.", answer: true },
        { text: "Thêm chất xúc tác sẽ làm tăng tổng lượng sản phẩm tạo thành khi phản ứng kết thúc.", answer: false },
        { text: "Sữa chua lên men nhanh hơn vào mùa hè ấm áp so với mùa đông lạnh.", answer: true }
      ],
      solution: "c) Sai: chất xúc tác chỉ giúp phản ứng đạt kết thúc NHANH hơn chứ không làm tăng tổng lượng sản phẩm." },
    { id: "w30_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong các yếu tố: (1) Nhiệt độ, (2) Nồng độ, (3) Diện tích tiếp xúc, (4) Chất xúc tác. Có bao nhiêu yếu tố có thể làm tăng tốc độ phản ứng giữa chất rắn và dung dịch?",
      answer: "4", tolerance: 0.1,
      solution: "Cả 4 yếu tố đều làm tăng tốc độ phản ứng rắn – dung dịch." },
    { id: "w30_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $0,5\\text{ g}$ $\\ce{MnO2}$ vào $50\\text{ g}$ dung dịch $\\ce{H2O2}$ $3\\%$. Sau khi $\\ce{H2O2}$ phân hủy hết hoàn toàn, lọc và sấy khô chất rắn thu được bao nhiêu gam $\\ce{MnO2}$?",
      answer: "0.5", tolerance: 0.01,
      solution: "$\\ce{MnO2}$ là chất xúc tác nên khối lượng giữ nguyên là $0,5\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w30_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Khi cho cùng một mẫu đá vôi ($2\\text{ g}$) vào 4 cốc đựng dung dịch $\\ce{HCl}$ dư: Cốc 1 ($1\\text{ M}, 25^\\circ\\text{C}$), Cốc 2 ($2\\text{ M}, 25^\\circ\\text{C}$), Cốc 3 ($2\\text{ M}, 50^\\circ\\text{C}$), Cốc 4 ($0,5\\text{ M}, 25^\\circ\\text{C}$). Cốc nào đá vôi tan hết NHANH NHẤT?",
      options: ["A. Cốc 1", "B. Cốc 2", "C. Cốc 3", "D. Cốc 4"],
      answer: 2, solution: "Cốc 3 có cả nồng độ cao ($2\\text{ M}$) và nhiệt độ cao ($50^\\circ\\text{C}$)." },
    { id: "w30_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một quy tắc kinh nghiệm cho thấy khi tăng nhiệt độ thêm $10^\\circ\\text{C}$ thì tốc độ phản ứng tăng lên $2$ lần. Nếu tăng nhiệt độ từ $20^\\circ\\text{C}$ lên $50^\\circ\\text{C}$ thì tốc độ phản ứng tăng lên bao nhiêu lần?",
      options: ["A. 4 lần", "B. 6 lần", "C. 8 lần", "D. 16 lần"],
      answer: 2, solution: "Tăng $30^\\circ\\text{C}$ (3 lần $10^\\circ\\text{C}$) $\\Rightarrow$ tốc độ tăng $2^3 = 8$ lần." },
    { id: "w30_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho $6,5\\text{ g}$ $\\text{Zn}$ tác dụng với $100\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$ (vừa đủ) ở $25^\\circ\\text{C}$:",
      statements: [
        { text: "Nếu nhỏ thêm vài giọt dung dịch $\\ce{CuSO4}$ (đóng vai trò xúc tác điện hóa), khí $\\ce{H2}$ thoát ra nhanh hơn.", answer: true },
        { text: "Nếu nghiền $\\text{Zn}$ thành bột mịn, tổng thể tích khí $\\ce{H2}$ thu được ở đkc tăng gấp đôi.", answer: false },
        { text: "Nếu thực hiện phản ứng ở $45^\\circ\\text{C}$, thời gian để $\\text{Zn}$ tan hết ngắn hơn ở $25^\\circ\\text{C}$.", answer: true },
        { text: "Nếu thay bằng $200\\text{ mL}$ $\\ce{HCl}$ $1\\text{ M}$, tốc độ ban đầu sẽ chậm hơn.", answer: true }
      ],
      solution: "b) Sai: nghiền nhỏ chỉ làm phản ứng nhanh hơn, tổng lượng khí vẫn là $0,1\\text{ mol}$ ($2,479\\text{ L}$)." },
    { id: "w30_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở $25^\\circ\\text{C}$, một phản ứng kết thúc sau $40\\text{ phút}$. Biết cứ tăng $10^\\circ\\text{C}$ tốc độ phản ứng tăng $2$ lần. Hỏi nếu thực hiện phản ứng ở $45^\\circ\\text{C}$ thì phản ứng kết thúc sau bao nhiêu phút?",
      answer: "10", tolerance: 0.1,
      solution: "Tăng $20^\\circ\\text{C}$ → tốc độ tăng $2^2 = 4$ lần → thời gian giảm 4 lần: $40 / 4 = 10\\text{ phút}$." },
    { id: "w30_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $34\\text{ g}$ dung dịch $\\ce{H2O2}$ $10\\%$ ($M=34$) phân hủy hoàn toàn khi có $1\\text{ g}$ $\\ce{MnO2}$ làm xúc tác ($\\ce{2H2O2 ->[MnO2] 2H2O + O2 ^}$). Tính số mol khí $\\ce{O2}$ thu được.",
      answer: "0.05", tolerance: 0.005,
      solution: "$n_{\\ce{H2O2}} = 3,4 / 34 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{O2}} = 0,05\\text{ mol}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w30_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Giải thích các hiện tượng thực tế sau dựa trên các yếu tố ảnh hưởng đến tốc độ phản ứng:<br/>a) Khi dùng nồi áp suất để hầm xương, thức ăn nhanh nhừ hơn nhiều so với nồi thường.<br/>b) Trong các nhà máy xay xát bột mì hoặc hầm mỏ than bụi mịn, một tia lửa nhỏ có thể gây ra vụ nổ bụi cực mạnh.",
      solution: "a) Nồi áp suất đậy kín làm tăng áp suất hơi nước bên trong, dẫn đến nhiệt độ sôi của nước tăng cao hơn $100^\\circ\\text{C}$ (lên tới $120^\\circ\\text{C}$) $\\rightarrow$ tăng nhiệt độ làm tốc độ phản ứng chín/thủy phân thức ăn tăng mạnh.<br/>b) Bột mì mịn hay bụi than có diện tích bề mặt tiếp xúc với khí $\\ce{O2}$ trong không khí cực kỳ lớn, nên khi có tia lửa mồi, phản ứng cháy xảy ra đồng loạt với tốc độ tức thời gây nổ.",
      rubric: [
        { step: "Giải thích đúng câu a) nhờ tăng áp suất $\\rightarrow$ tăng nhiệt độ sôi $> 100^\\circ\\text{C}$", points: 0.5 },
        { step: "Giải thích đúng câu b) nhờ diện tích bề mặt tiếp xúc của bụi mịn rất lớn", points: 0.5 }
      ] },
    { id: "w30_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi cho $\\text{CaCO3}$ tác dụng với dung dịch $\\ce{HCl}$ dư trong bình đặt trên cân điện tử, thấy khối lượng bình giảm dần theo thời gian (do khí $\\ce{CO2}$ thoát ra): Lúc $t = 0\\text{ s}$ bình nặng $150,00\\text{ g}$; lúc $t = 20\\text{ s}$ bình nặng $149,12\\text{ g}$. Tính tốc độ trung bình của phản ứng theo sự tạo thành khí $\\ce{CO2}$ trong $20\\text{ giây}$ đầu (theo đơn vị $\\text{mol/s}$).",
      quickAnswer: "0.001",
      solution: "Khối lượng $\\ce{CO2}$ thoát ra trong $20\\text{ s}$: $m_{\\ce{CO2}} = 150,00 - 149,12 = 0,88\\text{ g} \\Rightarrow n_{\\ce{CO2}} = 0,88 / 44 = 0,02\\text{ mol}$. Tốc độ trung bình $= \\frac{0,02}{20} = 0,001\\text{ mol/s}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{CO2}} = 0,88\\text{ g}$ ($0,02\\text{ mol}$)", points: 0.5 },
        { step: "Tính đúng tốc độ $= 0,001\\text{ mol/s}$", points: 0.5 }
      ] },
    { id: "w30_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao khi ủ sữa chua hay lên men rượu, người ta thường giữ ấm ở khoảng $35-40^\\circ\\text{C}$ chứ không để trong tủ lạnh ($4^\\circ\\text{C}$) và cũng không đun sôi ($100^\\circ\\text{C}$)?",
      solution: "Quá trình lên men nhờ chất xúc tác sinh học (enzyme) của vi khuẩn/nấm men. Nếu để ở $4^\\circ\\text{C}$, nhiệt độ quá thấp làm tốc độ phản ứng quá chậm. Nếu đun sôi ở $100^\\circ\\text{C}$, vi sinh vật bị chết và enzyme (protein) bị biến tính mất hoạt tính xúc tác. Khoảng $35-40^\\circ\\text{C}$ là nhiệt độ tối ưu cho xúc tác sinh học hoạt động mạnh nhất.",
      rubric: [
        { step: "Giải thích ở $4^\\circ\\text{C}$ nhiệt độ thấp → tốc độ quá chậm", points: 0.5 },
        { step: "Giải thích ở $100^\\circ\\text{C}$ làm chết men / biến tính enzyme xúc tác", points: 0.5 }
      ] },
    { id: "w30_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong quá trình sản xuất $\\ce{H2SO4}$, để oxi hóa khí $\\ce{SO2}$ thành $\\ce{SO3}$ ($\\ce{2SO2 + O2 <=>[V2O5, 450^\\circ C] 2SO3}$), người ta dùng chất xúc tác $\\ce{V2O5}$ ở dạng xốp có rất nhiều lỗ nhỏ li ti thay vì dạng cục đặc. Giải thích ý nghĩa kỹ thuật của việc làm này.",
      solution: "Chất xúc tác $\\ce{V2O5}$ ở thể rắn, còn $\\ce{SO2}$ và $\\ce{O2}$ ở thể khí. Tạo $\\ce{V2O5}$ dạng xốp nhiều lỗ nhỏ giúp tăng cực đại <strong>diện tích bề mặt tiếp xúc</strong> giữa các phân tử khí với chất xúc tác, làm tốc độ phản ứng tăng lên rất nhiều và tiết kiệm lượng xúc tác.",
      rubric: [
        { step: "Nêu được $\\ce{V2O5}$ là chất xúc tác rắn tiếp xúc với chất khí", points: 0.25 },
        { step: "Giải thích dạng xốp làm tăng tối đa diện tích tiếp xúc bề mặt → tăng tốc độ phản ứng", points: 0.75 }
      ] },
    { id: "w30_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một phản ứng có hệ số nhiệt độ $\\gamma = 3$ (cứ tăng $10^\\circ\\text{C}$ tốc độ phản ứng tăng $3$ lần). Ở $20^\\circ\\text{C}$, thời gian phản ứng là $54\\text{ phút}$. Hỏi cần nâng nhiệt độ lên bao nhiêu $^\\circ\\text{C}$ để thời gian phản ứng rút ngắn còn đúng $2\\text{ phút}$?",
      quickAnswer: "50",
      solution: "Thời gian giảm từ $54\\text{ phút}$ xuống $2\\text{ phút}$, tức tốc độ phải tăng $54 / 2 = 27 = 3^3$ lần. Vậy cần tăng nhiệt độ thêm $3 \\times 10 = 30^\\circ\\text{C}$, tức nâng lên $20 + 30 = 50^\\circ\\text{C}$.",
      rubric: [
        { step: "Tính được tốc độ cần tăng $54 / 2 = 27 = 3^3$ lần", points: 0.5 },
        { step: "Tính đúng nhiệt độ cần nâng lên $50^\\circ\\text{C}$", points: 0.5 }
      ] }
  ]
};
