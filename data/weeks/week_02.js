window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[2] = {
  week: 2,
  title: "Oxygen, Không khí & Sự cháy – Vật liệu, Nhiên liệu",
  objectives: [
    "Nắm vững tính chất vật lý, vai trò của khí oxygen ($\\ce{O2}$) và thành phần phần trăm thể tích của không khí.",
    "Hiểu rõ 3 điều kiện phát sinh và duy trì sự cháy (tam giác cháy) để vận dụng vào phòng cháy chữa cháy.",
    "Giải được các bài toán tính thể tích không khí – oxygen theo tỉ lệ % và phân tích bài toán thực nghiệm xác định % oxygen trong không khí (mức HSG)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 2 (A4). Chuẩn bị 1 cây nến nhỏ và 1 cốc thủy tinh úp ngược để minh họa sự cháy hết oxygen.",
    sessions: [
      {
        name: "Buổi 1: Tính chất của Oxygen & Thành phần không khí",
        guide: "Nhấn mạnh tính chất của $\\ce{O2}$: không màu, không mùi, ít tan trong nước, nặng hơn không khí một chút ($32 > 29$). Ghi nhớ tỷ lệ vàng của không khí: $78\\%\\ \\ce{N2}$, $21\\%\\ \\ce{O2}$, $1\\%$ khí khác ($\\ce{CO2}$, hơi nước, khí hiếm).",
        pitfalls: "Học sinh hay nhầm $21\\%$ là theo khối lượng (thực tế là theo THỂ TÍCH) và quên rằng $\\ce{O2}$ tan ít trong nước chứ không phải hoàn toàn không tan (cá vẫn hô hấp được nhờ $\\ce{O2}$ hòa tan)."
      },
      {
        name: "Buổi 2: Tam giác cháy & Chữa cháy – Nhiên liệu xanh",
        guide: "Phân tích 3 yếu tố của sự cháy: Chất cháy + Nguồn nhiệt đạt nhiệt độ cháy + Oxygen. Muốn dập lửa chỉ cần loại bỏ 1 trong 3 yếu tố. Giải thích tại sao KHÔNG dùng nước dập cháy xăng dầu hay thiết bị điện.",
        pitfalls: "Cho rằng cháy xăng dầu dùng nước sẽ mát và tắt (sai: xăng nhẹ hơn nước nên nổi lên trên và cháy lan rộng)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Kỹ năng bài toán thí nghiệm HSG",
        guide: "Chú ý 5 câu HSG cuối tuần: bài toán úp ống thủy tinh lên cây nến đang cháy (tính % $\\ce{O2}$ dựa vào mực nước dâng lên) và bài toán tính lượng $\\ce{O2}$ tiêu thụ khi hô hấp/đốt cháy.",
        pitfalls: "Trong bài toán úp nến, học sinh thường quên trừ sai số do không khí giãn nở vì nhiệt lúc đầu hoặc có sinh ra khí $\\ce{CO2}$."
      }
    ]
  },
  lecture: [
    {
      title: "Khí Oxygen & Thành phần của Không khí",
      content: `
        <ul>
          <li><strong>Oxygen ($\\ce{O2}$):</strong> Là chất khí không màu, không mùi, không vị, nặng hơn không khí ($M_{\\ce{O2}} = 32 > M_{\\text{kk}} \\approx 29$), <strong>ít tan trong nước</strong> (khoảng $31\\text{ mL}$ khí $\\ce{O2}$ tan trong $1\\text{ L}$ nước ở $20^\\circ\\text{C}$).</li>
          <li><strong>Vai trò:</strong> Duy trì sự hô hấp của sinh vật và duy trì sự cháy của nhiên liệu.</li>
          <li><strong>Thành phần theo thể tích của không khí khô:</strong>
            <ul>
              <li><strong>$78\\%$</strong> khí Nitrogen ($\\ce{N2}$)</li>
              <li><strong>$21\\%$</strong> khí Oxygen ($\\ce{O2}$)</li>
              <li><strong>$1\\%$</strong> các khí khác (Carbon dioxide $\\ce{CO2}$, Argon, hơi nước...)</li>
            </ul>
          </li>
        </ul>
      `,
      checkpoint: {
        question: "Trong $200\\text{ L}$ không khí sạch, thể tích khí Oxygen chiếm khoảng bao nhiêu lít?",
        options: ["21 L", "42 L", "78 L", "156 L"],
        answer: 1,
        explanation: "$V_{\\ce{O2}} = 21\\% \\times 200 = 42\\text{ L}$."
      }
    },
    {
      title: "Sự cháy, Tam giác cháy & Nguyên tắc chữa cháy",
      content: `
        <p>Để sự cháy xảy ra và duy trì, cần đủ <strong>3 điều kiện (Tam giác cháy)</strong>:</p>
        <ol>
          <li>Có <strong>chất cháy</strong> (gỗ, giấy, xăng, gas...).</li>
          <li>Có <strong>chất oxi hóa</strong> (thường là khí oxygen).</li>
          <li>Đạt tới <strong>nhiệt độ bắt cháy</strong> (nguồn nhiệt).</li>
        </ol>
        <div class="callout warn">
          <strong>Nguyên tắc dập tắt đám cháy:</strong> Chỉ cần <strong>loại bỏ ít nhất 1 trong 3 yếu tố</strong> trên.<br/>
          • <strong>Đám cháy xăng, dầu:</strong> KHÔNG dùng nước (xăng dầu nhẹ hơn nước, nổi lên trên và cháy lan). Phải dùng cát, chăn ẩm hoặc bình chữa cháy bọt/$\ce{CO2}$.<br/>
          • <strong>Đám cháy điện:</strong> Ngắt cầu dao điện trước, dùng bình $\\ce{CO2}$ hoặc bột khô (không dùng nước vì nước dẫn điện).
        </div>
      `,
      example: "Tại sao khi nhóm bếp than, người ta thường quạt nhẹ nhưng khi thổi mạnh vào ngọn nến thì nến lại tắt? <br/><em>Phân tích:</em> Quạt nhẹ vào bếp than giúp cung cấp thêm $\\ce{O2}$ cho sự cháy. Ngược lại, thổi mạnh vào ngọn nến làm <strong>giảm nhiệt độ</strong> vùng cháy xuống dưới nhiệt độ bắt cháy và thổi bạt hơi sáp cháy → thiếu nguồn nhiệt nên nến tắt."
    }
  ],
  questions: [
    // 10 CÂU CƠ BẢN (1đ x 10 = 10đ)
    { id: "w2_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí nào chiếm tỉ lệ thể tích lớn nhất trong không khí?",
      options: ["A. Oxygen ($\\ce{O2}$)", "B. Carbon dioxide ($\\ce{CO2}$)", "C. Nitrogen ($\\ce{N2}$)", "D. Hơi nước"],
      answer: 2, solution: "Nitrogen chiếm khoảng $78\\%$ thể tích không khí." },
    { id: "w2_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Tính chất vật lý nào sau đây của khí oxygen là ĐÚNG?",
      options: ["A. Tan rất nhiều trong nước", "B. Nặng hơn không khí", "C. Có màu xanh nhạt ở điều kiện thường", "D. Có mùi hắc đặc trưng"],
      answer: 1, solution: "Ở điều kiện thường, $\\ce{O2}$ không màu, không mùi, ít tan trong nước và nặng hơn không khí ($32 > 29$)." },
    { id: "w2_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong các chất sau, chất nào là nhiên liệu?",
      options: ["A. Đá vôi", "B. Than đá", "C. Cát trắng", "D. Thép xây dựng"],
      answer: 1, solution: "Nhiên liệu là những chất cháy được và khi cháy tỏa nhiều nhiệt (than đá, xăng, gas, củi...)." },
    { id: "w2_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Để dập tắt đám cháy do xăng dầu gây ra, ta KHÔNG nên dùng cách nào?",
      options: ["A. Phủ cát lên đám cháy", "B. Trùm chăn ướt lên đám cháy", "C. Phun nước trực tiếp vào đám cháy", "D. Dùng bình chữa cháy bọt/$\ce{CO2}$"],
      answer: 2, solution: "Xăng dầu nhẹ hơn nước và không tan trong nước, phun nước sẽ làm xăng dầu nổi lên và cháy lan rộng." },
    { id: "w2_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Bình khí nén dùng cho thợ lặn hoặc bệnh nhân khó thở chứa chủ yếu khí nào?",
      options: ["A. Nitrogen", "B. Carbon dioxide", "C. Oxygen", "D. Hydrogen"],
      answer: 2, solution: "Oxygen duy trì sự hô hấp." },
    { id: "w2_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên nhân chính gây ra sự ô nhiễm không khí ở các đô thị lớn là:",
      options: ["A. Cây xanh quang hợp ban ngày", "B. Khí thải từ phương tiện giao thông và nhà máy", "C. Gió thổi từ biển vào", "D. Hơi nước bốc lên từ sông hồ"],
      answer: 1, solution: "Khí thải động cơ, công nghiệp chứa bụi mịn, $\\ce{CO}$, $\\ce{SO2}$, $\\ce{NO_x}$ gây ô nhiễm không khí." },
    { id: "w2_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Vật liệu nào sau đây có tính dẻo, dẫn điện tốt và có thể rèn, dát mỏng?",
      options: ["A. Gốm sứ", "B. Thủy tinh", "C. Kim loại (như đồng, nhôm)", "D. Gỗ khô"],
      answer: 2, solution: "Kim loại có tính dẻo, dẫn điện và dẫn nhiệt tốt." },
    { id: "w2_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Đánh giá Đúng/Sai cho các phát biểu về Oxygen và Không khí:",
      statements: [
        { text: "Khí oxygen tự cháy được khi có tia lửa điện.", answer: false },
        { text: "Không khí chứa khoảng $21\\%$ thể tích là oxygen.", answer: true },
        { text: "Quá trình quang hợp của cây xanh giúp bổ sung oxygen cho không khí.", answer: true },
        { text: "Tắt đèn cồn bằng cách đậy nắp là loại bỏ nguồn nhiệt.", answer: false }
      ],
      solution: "a) Sai: Oxygen duy trì sự cháy chứ bản thân nó không tự cháy. d) Sai: Đậy nắp đèn cồn là cách ly chất cháy với oxygen." },
    { id: "w2_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Tính thể tích khí oxygen (tính bằng Lít) có trong $500\\text{ L}$ không khí (coi $\\ce{O2}$ chiếm $21\\%$ thể tích).",
      answer: "105", tolerance: 0.1,
      solution: "$V_{\\ce{O2}} = 500 \\times 21\\% = 105\\text{ L}$." },
    { id: "w2_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Một phòng học có thể tích $150\\text{ m}^3$. Thể tích khí nitrogen (tính bằng $\\text{m}^3$, coi $\\ce{N2}$ chiếm $78\\%$) trong phòng là bao nhiêu?",
      answer: "117", tolerance: 0.1,
      solution: "$V_{\\ce{N2}} = 150 \\times 78\\% = 117\\text{ m}^3$." },

    // 5 CÂU TRÊN CƠ BẢN (1đ x 5 = 5đ)
    { id: "w2_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Khi đốt một cây nến trong lọ thủy tinh đậy kín, ngọn nến sẽ tắt sau một thời gian ngắn. Nguyên nhân chính là:",
      options: [
        "A. Sáp nến đã cháy hết hoàn toàn.",
        "B. Khí oxygen trong lọ giảm xuống dưới mức duy trì sự cháy.",
        "C. Nhiệt độ trong lọ giảm xuống dưới $0^\\circ\\text{C}$.",
        "D. Khí nitrogen trong lọ dập tắt ngọn lửa."
      ],
      answer: 1, solution: "Sự cháy tiêu thụ $\\ce{O2}$ và sinh ra $\\ce{CO2}$. Khi nồng độ $\\ce{O2}$ giảm xuống quá thấp (dưới ~15%), nến tắt." },
    { id: "w2_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Để sử dụng nhiên liệu (như than đá, củi) tiết kiệm và hiệu quả hơn, người ta thường làm gì?",
      options: [
        "A. Đốt ở nơi hoàn toàn kín gió.",
        "B. Chẻ nhỏ củi hoặc tạo lỗ thoáng trên viên than tổ ong để tăng diện tích tiếp xúc với oxygen.",
        "C. Tưới thêm nước vào than trước khi đốt.",
        "D. Chất đống thật dày để giữ nhiệt."
      ],
      answer: 1, solution: "Tăng diện tích tiếp xúc giữa nhiên liệu và không khí giúp nhiên liệu cháy hoàn toàn, tỏa nhiều nhiệt và ít khói." },
    { id: "w2_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Khi nuôi cá cảnh trong bể kính, người ta thường lắp máy sục khí và trồng thêm rong thủy sinh. Xét các nhận định sau:",
      statements: [
        { text: "Máy sục khí giúp tăng lượng oxygen hòa tan trong nước cho cá hô hấp.", answer: true },
        { text: "Cây rong thủy sinh quang hợp ban ngày giải phóng khí $\\ce{O2}$ vào nước.", answer: true },
        { text: "Cá có thể sống khỏe trong nước đun sôi để nguội đóng kín nắp.", answer: false },
        { text: "Ở nhiệt độ càng cao, khí oxygen hòa tan trong nước càng nhiều.", answer: false }
      ],
      solution: "c) Sai vì đun sôi làm đuổi hết khí $\\ce{O2}$ hòa tan; d) Sai vì độ tan của chất khí giảm khi nhiệt độ tăng." },
    { id: "w2_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Để đốt cháy hoàn toàn $1\\text{ L}$ khí methane ($\\ce{CH4}$) cần dùng $2\\text{ L}$ khí oxygen (đo ở cùng điều kiện). Hỏi cần tối thiểu bao nhiêu Lít không khí (chứa $21\\%$ $\\ce{O2}$) để đốt cháy hoàn toàn $4,2\\text{ L}$ khí methane?",
      answer: "40", tolerance: 0.2,
      solution: "Lượng $\\ce{O2}$ cần $= 2 \\times 4,2 = 8,4\\text{ L}$. Lượng không khí $= 8,4 / 0,21 = 40\\text{ L}$." },
    { id: "w2_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trung bình một người trưởng thành hít thở $20\\text{ lần/phút}$, mỗi lần hít vào $0,5\\text{ L}$ không khí. Biết không khí hít vào chứa $21\\%$ $\\ce{O2}$ và thở ra chứa $16\\%$ $\\ce{O2}$. Tính số Lít khí $\\ce{O2}$ cơ thể đã hấp thụ trong $1\\text{ giờ}$ ($60\\text{ phút}$).",
      answer: "30", tolerance: 0.2,
      solution: "Thể tích không khí hít vào trong 1 giờ: $20 \\times 0,5 \\times 60 = 600\\text{ L}$. Tỉ lệ $\\ce{O2}$ hấp thụ $= 21\\% - 16\\% = 5\\%$. Vậy $V_{\\ce{O2}} = 600 \\times 5\\% = 30\\text{ L}$." },

    // 5 CÂU ĐÀO TẠO HSG (1đ x 5 = 5đ)
    { id: "w2_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong thí nghiệm xác định phần trăm thể tích oxygen trong không khí: Úp một ống thủy tinh chia làm 5 phần bằng nhau (chứa không khí) lên một chậu nước có đặt miếng phốt pho đỏ (hoặc cây nến) đang cháy. Sau khi ngọn lửa tắt và để nguội về nhiệt độ ban đầu, mực nước trong ống dâng lên khoảng vạch số 1 (tức $1/5$ thể tích ống). Hãy giải thích hiện tượng mực nước dâng lên và nêu vai trò của việc chờ ống nguội.",
      solution: "Phốt pho cháy tiêu thụ hết khí $\\ce{O2}$ trong ống tạo ra chất rắn ($\\ce{P2O5}$) tan trong nước → làm giảm lượng khí và giảm áp suất trong ống. Áp suất khí quyển bên ngoài đẩy nước dâng vào chiếm chỗ của $\\ce{O2}$ đã mất (khoảng $1/5 = 20\\%$). Cần chờ nguội về nhiệt độ ban đầu vì khi cháy khí giãn nở do nhiệt, nếu đo ngay kết quả sẽ sai lệch (thấp hơn thực tế).",
      rubric: [
        { step: "Giải thích $\\ce{O2}$ bị tiêu thụ làm giảm áp suất trong ống nên nước dâng lên chiếm chỗ", points: 0.5 },
        { step: "Liên hệ $1/5$ thể tích tương ứng $\\approx 20\\%$ (gần bằng $21\\%$ thực tế)", points: 0.25 },
        { step: "Giải thích phải chờ nguội để loại bỏ sai số do sự giãn nở nhiệt của không khí", points: 0.25 }
      ] },
    { id: "w2_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vào mùa hè nắng nóng, cá nuôi trong ao hồ chật hẹp thường nổi đầu lên mặt nước vào lúc sáng sớm (trước khi mặt trời mọc), đặc biệt sau những đêm oi bức. Hãy giải thích nguyên nhân hóa học – sinh học của hiện tượng này.",
      solution: "1) Nhiệt độ nước mùa hè cao làm độ tan của khí $\\ce{O2}$ trong nước giảm. 2) Ban đêm không có ánh sáng, tảo và rong rêu ngừng quang hợp mà chỉ hô hấp tiêu thụ $\\ce{O2}$ và thải $\\ce{CO2}$. Đến gần sáng, lượng $\\ce{O2}$ hòa tan xuống thấp nhất khiến cá phải nổi đầu đớp không khí trên mặt thoáng.",
      rubric: [
        { step: "Nêu được độ tan của khí $\\ce{O2}$ giảm khi nhiệt độ nước tăng", points: 0.25 },
        { step: "Nêu được ban đêm thực vật/tảo không quang hợp mà cùng cá hô hấp tiêu thụ $\\ce{O2}$", points: 0.5 },
        { step: "Kết luận hàm lượng $\\ce{O2}$ thấp nhất vào sáng sớm nên cá nổi đầu", points: 0.25 }
      ] },
    { id: "w2_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi xảy ra cháy rừng, lực lượng kiểm lâm thường tạo ra các 'đường băng cản lửa' (chặt hạ, phát quang cây cỏ tạo một dải đất trống rộng ngăn cách khu rừng đang cháy với phần rừng còn lại). Hãy giải thích biện pháp này dựa trên Tam giác cháy.",
      solution: "Cây cỏ khô là 'chất cháy'. Việc phát quang tạo dải đất trống nhằm loại bỏ hoàn toàn chất cháy trên đường lan truyền của ngọn lửa. Khi lửa cháy đến đường băng cản lửa, do không còn chất cháy tiếp nối nên đám cháy tự tắt, không lan sang khu rừng bên cạnh.",
      rubric: [
        { step: "Xác định cây cỏ là yếu tố 'chất cháy' trong tam giác cháy", points: 0.25 },
        { step: "Chỉ ra đường băng cản lửa giúp cắt đứt/loại bỏ chất cháy", points: 0.5 },
        { step: "Kết luận đám cháy không thể tiếp tục lan rộng", points: 0.25 }
      ] },
    { id: "w2_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 3 bình thủy tinh đậy nút kín giống hệt nhau, mỗi bình chứa riêng biệt một trong 3 khí không màu: Oxygen ($\\ce{O2}$), Carbon dioxide ($\\ce{CO2}$) và Không khí. Chỉ dùng một que đóm còn tàn đỏ, hãy trình bày cách nhận biết 3 bình khí trên.",
      solution: "Đưa que đóm còn tàn đỏ lần lượt vào từng bình: - Bình làm que đóm bùng cháy thành ngọn lửa sáng rực là bình chứa $\\ce{O2}$. - Bình làm que đóm tắt ngay là bình chứa $\\ce{CO2}$ (không duy trì sự cháy). - Bình mà tàn đóm không bùng cháy cũng không tắt ngay (cháy âm ỉ bình thường) là bình chứa không khí.",
      rubric: [
        { step: "Nêu đúng thao tác đưa que đóm còn tàn đỏ vào từng bình", points: 0.25 },
        { step: "Nhận biết đúng $\\ce{O2}$ (que đóm bùng cháy sáng rực)", points: 0.25 },
        { step: "Nhận biết đúng $\\ce{CO2}$ (tàn đóm tắt ngay) và Không khí (không đổi / cháy âm ỉ bình thường)", points: 0.5 }
      ] },
    { id: "w2_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một bình kín dung tích $10\\text{ L}$ chứa không khí (giả sử chỉ gồm $20\\%$ $\\ce{O2}$ và $80\\%$ $\\ce{N2}$ theo thể tích). Người ta đốt cháy một lượng than vừa đủ để tiêu thụ hết một nửa lượng $\\ce{O2}$ trong bình (biết cứ $1\\text{ L}$ $\\ce{O2}$ phản ứng tạo ra đúng $1\\text{ L}$ khí $\\ce{CO2}$ ở cùng điều kiện). Tính thành phần % theo thể tích của các khí còn lại trong bình sau khi đưa về nhiệt độ ban đầu.",
      quickAnswer: "10",
      solution: "Ban đầu: $V_{\\ce{O2}} = 2\\text{ L}$, $V_{\\ce{N2}} = 8\\text{ L}$. Tiêu thụ hết một nửa $\\ce{O2}$ tức là $1\\text{ L}$ $\\ce{O2}$ phản ứng → sinh ra $1\\text{ L}$ $\\ce{CO2}$. Sau phản ứng: $V_{\\ce{O2}} = 1\\text{ L}$, $V_{\\ce{CO2}} = 1\\text{ L}$, $V_{\\ce{N2}} = 8\\text{ L}$ (tổng vẫn $10\\text{ L}$). Vậy $\\%V_{\\ce{N2}} = 80\\%$, $\\%V_{\\ce{O2}} = 10\\%$, $\\%V_{\\ce{CO2}} = 10\\%$.",
      rubric: [
        { step: "Tính đúng thể tích ban đầu: $V_{\\ce{O2}} = 2\\text{ L}$, $V_{\\ce{N2}} = 8\\text{ L}$", points: 0.25 },
        { step: "Tính đúng lượng khí sau phản ứng: $\\ce{O2}$ dư $1\\text{ L}$, $\\ce{CO2}$ sinh ra $1\\text{ L}$, tổng thể tích vẫn $10\\text{ L}$", points: 0.5 },
        { step: "Tính đúng phần trăm: $80\\%\\ \\ce{N2}$, $10\\%\\ \\ce{O2}$, $10\\%\\ \\ce{CO2}$", points: 0.25 }
      ] }
  ]
};
