window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[3] = {
  week: 3,
  title: "Chất tinh khiết, Hỗn hợp, Dung dịch – Huyền phù – Nhũ tương",
  objectives: [
    "Phân biệt được chất tinh khiết và hỗn hợp dựa trên tính chất vật lý nhất định (nhiệt độ sôi, nhiệt độ nóng chảy).",
    "Phân biệt được hỗn hợp đồng nhất (dung dịch) và hỗn hợp không đồng nhất (huyền phù, nhũ tương).",
    "Hiểu các yếu tố ảnh hưởng đến tốc độ hòa tan chất rắn và biết cách pha chế dung dịch cơ bản.",
    "Giải thích được các hiện tượng thực tế (phù sa sông, sữa, nước muối sinh lý) và bài toán nồng độ/độ tan sơ lược mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 3 (A4). Chuẩn bị 3 cốc nước: (1) pha muối ăn, (2) khuấy bột sắn/đất mịn, (3) lắc dầu ăn với nước.",
    sessions: [
      {
        name: "Buổi 1: Chất tinh khiết vs Hỗn hợp",
        guide: "Cho con so sánh nước cất (sôi đúng $100^\\circ\\text{C}$) và nước biển/nước muối (sôi $> 100^\\circ\\text{C}$, đông đặc $< 0^\\circ\\text{C}$). Nhấn mạnh: 'nước khoáng' hay 'nước tự nhiên' là hỗn hợp, KHÔNG phải chất tinh khiết.",
        pitfalls: "Học sinh hay nhầm nước trong suốt, sạch sẽ (như nước khoáng đóng chai, nước giếng lọc) là chất tinh khiết."
      },
      {
        name: "Buổi 2: Dung dịch – Huyền phù – Nhũ tương",
        guide: "Dùng bảng so sánh 3 cột: Dung dịch (rắn/lỏng/khí tan hoàn toàn, đồng nhất, trong suốt), Huyền phù (rắn không tan lơ lửng trong lỏng, để yên lắng xuống), Nhũ tương (lỏng không tan phân tán trong lỏng khác, như dầu + nước, sữa).",
        pitfalls: "Nhầm lẫn giữa nước đường (dung dịch) với nước bột sắn dây (huyền phù) hoặc sữa tươi (nhũ tương)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Hướng dẫn con làm 20 câu. Chú ý 5 câu HSG: giải thích tại sao rắc muối lên đường băng tuyết vào mùa đông, hoặc tại sao pha nước chanh đường cần hòa tan đường trước khi cho đá.",
        pitfalls: "Quên nêu cơ chế nhiệt độ làm tăng độ tan và tốc độ khuếch tán khi giải thích câu HSG."
      }
    ]
  },
  lecture: [
    {
      title: "Chất tinh khiết & Hỗn hợp",
      content: `
        <ul>
          <li><strong>Chất tinh khiết (chất nguyên chất):</strong> Chỉ gồm <strong>một chất duy nhất</strong>, không lẫn tạp chất. Có tính chất vật lý (nhiệt độ nóng chảy, nhiệt độ sôi, khối lượng riêng) <strong>xác định và không đổi</strong>. Ví dụ: nước cất, khí oxygen tinh khiết, đường saccharose tinh khiết.</li>
          <li><strong>Hỗn hợp:</strong> Gồm <strong>hai hay nhiều chất</strong> trộn lẫn vào nhau. Tính chất của hỗn hợp thay đổi tùy thuộc vào tỉ lệ thành phần. Ví dụ: nước biển (nước + muối khoáng), không khí ($\\ce{N2}$, $\\ce{O2}$, $\\ce{CO2}$...), nước khoáng.</li>
        </ul>
      `,
      checkpoint: {
        question: "Chất nào sau đây là CHẤT TINH KHIẾT?",
        options: ["Nước khoáng Lavie", "Nước cất dùng trong y tế", "Không khí sạch", "Nước chanh đường"],
        answer: 1,
        explanation: "Nước cất chỉ chứa duy nhất phân tử nước ($\\ce{H2O}$), còn nước khoáng chứa nhiều muối khoáng hòa tan."
      }
    },
    {
      title: "Dung dịch, Huyền phù & Nhũ tương",
      content: `
        <table class="std-table">
          <thead><tr><th>Loại hỗn hợp</th><th>Đặc điểm cấu tạo</th><th>Tính đồng nhất</th><th>Ví dụ</th></tr></thead>
          <tbody>
            <tr><td><strong>Dung dịch</strong></td><td>Chất tan (rắn/lỏng/khí) tan hoàn toàn trong dung môi</td><td><strong>Đồng nhất</strong> (trong suốt, không lắng)</td><td>Nước muối, nước đường, cồn $70^\\circ$</td></tr>
            <tr><td><strong>Huyền phù</strong></td><td>Hạt chất rắn <strong>không tan</strong> lơ lửng trong chất lỏng</td><td>Không đồng nhất (để yên bị lắng)</td><td>Nước phù sa, nước bột sắn, thuốc ho dạng lắc</td></tr>
            <tr><td><strong>Nhũ tương</strong></td><td>Giọt chất lỏng <strong>không tan</strong> lơ lửng trong chất lỏng khác</td><td>Không đồng nhất (dễ tách lớp)</td><td>Dầu ăn + nước, sữa tươi, sốt mayonnaise</td></tr>
          </tbody>
        </table>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 125" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- Dung dich -->
            <rect x="35" y="18" width="110" height="75" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
            <text x="90" y="58" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Trong suốt, đồng nhất</text>
            <text x="90" y="112" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Dung dịch (Muối + Nước)</text>

            <!-- Huyen phu -->
            <rect x="215" y="18" width="110" height="75" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
            <g fill="#92400e"><circle cx="240" cy="78" r="4"/><circle cx="258" cy="83" r="5"/><circle cx="275" cy="75" r="4"/><circle cx="295" cy="82" r="5"/><circle cx="265" cy="52" r="3"/><circle cx="285" cy="44" r="3"/></g>
            <text x="270" y="112" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">Huyền phù (Hạt rắn lắng)</text>

            <!-- Nhu tuong -->
            <rect x="395" y="18" width="110" height="75" rx="6" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
            <rect x="397" y="20" width="106" height="24" fill="#fde047"/>
            <text x="450" y="36" font-size="10" font-weight="bold" text-anchor="middle" fill="#854d0e">Dầu (nhẹ, nổi)</text>
            <text x="450" y="68" font-size="10" font-weight="bold" text-anchor="middle" fill="#0369a1">Nước (dưới)</text>
            <text x="450" y="112" font-size="11" font-weight="bold" text-anchor="middle" fill="#0369a1">Nhũ tương (Tách lớp)</text>
          </svg>
        </div>
        <div class="callout">
          <strong>3 cách làm chất rắn tan nhanh hơn trong nước:</strong> (1) Khuấy đều, (2) Đun nóng (tăng nhiệt độ), (3) Nghiền nhỏ chất rắn (tăng diện tích tiếp xúc).
        </div>
      `,
      example: "Tại sao trên chai thuốc ho siro hoặc sữa đậu nành thường ghi dòng chữ <em>'Lắc đều trước khi uống'</em>? <br/><em>Phân tích:</em> Vì chúng là <strong>huyền phù</strong> (hoặc nhũ tương), khi để yên các hạt không tan nặng hơn sẽ lắng xuống đáy. Lắc đều giúp phân tán đều các hạt thuốc/dinh dưỡng trước khi dùng."
    }
  ],
  questions: [
    { id: "w3_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Hỗn hợp nào sau đây là dung dịch?",
      options: ["A. Nước pha bột sắn dây", "B. Nước đường khuấy tan hết", "C. Dầu ăn khuấy trong nước", "D. Nước sông có phù sa"],
      answer: 1, solution: "Đường tan hoàn toàn trong nước tạo hỗn hợp đồng nhất gọi là dung dịch." },
    { id: "w3_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Nước phù sa (nước sông đục) thuộc loại hỗn hợp nào?",
      options: ["A. Dung dịch", "B. Chất tinh khiết", "C. Huyền phù", "D. Nhũ tương"],
      answer: 2, solution: "Các hạt đất mịn rắn không tan lơ lửng trong nước tạo thành huyền phù." },
    { id: "w3_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Lắc mạnh hỗn hợp gồm giấm ăn và dầu thực vật, ta thu được:",
      options: ["A. Dung dịch", "B. Nhũ tương", "C. Huyền phù", "D. Chất tinh khiết"],
      answer: 1, solution: "Hai chất lỏng không tan vào nhau phân tán vào nhau tạo nhũ tương." },
    { id: "w3_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong nước muối sinh lý ($\\ce{NaCl}$ $0,9\\%$), chất đóng vai trò là dung môi là:",
      options: ["A. Muối ăn ($\\ce{NaCl}$)", "B. Nước ($\\ce{H2O}$)", "C. Cả muối và nước", "D. Không có dung môi"],
      answer: 1, solution: "Nước là dung môi hòa tan muối ăn (chất tan)." },
    { id: "w3_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Biện pháp nào KHÔNG làm muối ăn tan nhanh hơn trong nước?",
      options: ["A. Nghiền nhỏ hạt muối", "B. Dùng đũa khuấy đều", "C. Dùng nước nóng", "D. Cho thêm đá lạnh vào cốc"],
      answer: 3, solution: "Hạ nhiệt độ làm giảm tốc độ chuyển động của phân tử nước nên muối tan chậm hơn." },
    { id: "w3_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khẳng định nào sau đây ĐÚNG về chất tinh khiết?",
      options: ["A. Có nhiệt độ sôi thay đổi tùy lượng chất", "B. Nước khoáng là chất tinh khiết", "C. Có tính chất vật lý xác định", "D. Luôn ở thể lỏng"],
      answer: 2, solution: "Chất tinh khiết có nhiệt độ sôi, nóng chảy và khối lượng riêng xác định." },
    { id: "w3_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Sữa tươi hoặc nước cốt dừa là ví dụ quen thuộc của:",
      options: ["A. Huyền phù", "B. Nhũ tương", "C. Dung dịch khí", "D. Chất tinh khiết"],
      answer: 1, solution: "Chất béo lỏng phân tán trong nước tạo hệ nhũ tương." },
    { id: "w3_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai của các nhận định sau:",
      statements: [
        { text: "Dung dịch luôn là hỗn hợp đồng nhất.", answer: true },
        { text: "Mọi chất khí đều không tan trong nước.", answer: false },
        { text: "Huyền phù để yên một thời gian sẽ có hiện tượng lắng cặn.", answer: true },
        { text: "Nước biển tinh khiết hơn nước cất.", answer: false }
      ],
      solution: "b) Sai vì nhiều khí tan trong nước như $\\ce{O2}$, $\\ce{CO2}$, $\\ce{NH3}$; d) Sai vì nước biển là hỗn hợp nhiều muối." },
    { id: "w3_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $15\\text{ g}$ đường vào $135\\text{ g}$ nước. Khối lượng dung dịch nước đường thu được là bao nhiêu gam?",
      answer: "150", tolerance: 0.1,
      solution: "$m_{\\text{dd}} = m_{\\text{chất tan}} + m_{\\text{dung môi}} = 15 + 135 = 150\\text{ g}$." },
    { id: "w3_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Để pha $500\\text{ g}$ nước muối sinh lý $0,9\\%$ (cứ $100\\text{ g}$ dung dịch có $0,9\\text{ g}$ muối), cần dùng bao nhiêu gam muối ăn?",
      answer: "4.5", tolerance: 0.05,
      solution: "$m_{\\text{muối}} = 500 \\times 0,9 / 100 = 4,5\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w3_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Khi mở nắp chai nước ngọt có gas, ta thấy nhiều bọt khí sủi lên mạnh. Hiện tượng này chứng tỏ:",
      options: [
        "A. Nước ngọt là huyền phù.",
        "B. Khí $\\ce{CO2}$ tan nhiều hơn khi áp suất cao và thoát ra khi giảm áp suất.",
        "C. Nước ngọt đang sôi ở nhiệt độ phòng.",
        "D. Đường bị phân hủy thành khí."
      ],
      answer: 1, solution: "Độ tan của khí tỉ lệ thuận với áp suất. Mở nắp làm giảm áp suất đột ngột nên khí $\\ce{CO2}$ thoát ra." },
    { id: "w3_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nhận xét nào đúng khi đun sôi một mẫu nước máy (nước sinh hoạt) so với nước cất ở cùng áp suất 1 atm?",
      options: [
        "A. Cả hai đều sôi ở đúng $100^\\circ\\text{C}$.",
        "B. Nước cất sôi ở đúng $100^\\circ\\text{C}$, nước máy sôi ở nhiệt độ cao hơn $100^\\circ\\text{C}$ một chút.",
        "C. Nước máy sôi ở $90^\\circ\\text{C}$.",
        "D. Nước máy không thể sôi được."
      ],
      answer: 1, solution: "Nước máy là hỗn hợp có hòa tan một lượng nhỏ chất khoáng nên nhiệt độ sôi $> 100^\\circ\\text{C}$." },
    { id: "w3_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Một học sinh làm thí nghiệm hòa tan $10\\text{ g}$ đường phèn (dạng viên to) và $10\\text{ g}$ đường cát mịn vào hai cốc nước giống nhau:",
      statements: [
        { text: "Đường cát mịn tan nhanh hơn đường phèn viên to.", answer: true },
        { text: "Cốc dùng nước nóng $70^\\circ\\text{C}$ sẽ hòa tan đường nhanh hơn cốc nước lạnh $15^\\circ\\text{C}$.", answer: true },
        { text: "Khi đường đã tan hết, phần nước ở đáy cốc ngọt hơn phần nước ở trên mặt.", answer: false },
        { text: "Nếu tiếp tục thêm đường đến khi không tan thêm được nữa thì thu được dung dịch bão hòa.", answer: true }
      ],
      solution: "c) Sai vì dung dịch là hỗn hợp đồng nhất, mọi vị trí đều có độ ngọt như nhau." },
    { id: "w3_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở $20^\\circ\\text{C}$, tối đa $36\\text{ g}$ muối ăn tan được trong $100\\text{ g}$ nước. Hỏi ở nhiệt độ này, hòa tan tối đa bao nhiêu gam muối ăn vào $250\\text{ g}$ nước?",
      answer: "90", tolerance: 0.1,
      solution: "$m_{\\text{muối}} = 36 \\times (250 / 100) = 90\\text{ g}$." },
    { id: "w3_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trộn $200\\text{ g}$ dung dịch nước đường $10\\%$ với $300\\text{ g}$ dung dịch nước đường $20\\%$. Nồng độ phần trăm (%) của dung dịch thu được là bao nhiêu?",
      answer: "16", tolerance: 0.1,
      solution: "Tổng lượng đường $= 200 \\times 10\\% + 300 \\times 20\\% = 20 + 60 = 80\\text{ g}$. Tổng khối lượng dung dịch $= 500\\text{ g}$. Vậy $C\\% = (80 / 500) \\times 100\\% = 16\\%$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w3_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi pha nước chanh đường giải khát, tại sao người ta phải khuấy cho đường tan hết trong nước ấm/nguội trước rồi mới cho đá lạnh vào sau, mà không cho đá vào ngay từ đầu?",
      solution: "Độ tan và tốc độ hòa tan của đường trong nước phụ thuộc mạnh vào nhiệt độ. Nếu cho đá vào ngay, nhiệt độ nước giảm xuống gần $0^\\circ\\text{C}$ làm các phân tử chuyển động chậm, độ tan giảm khiến đường rất khó tan và lắng xuống đáy.",
      rubric: [
        { step: "Nêu được độ tan và tốc độ tan của chất rắn (đường) giảm khi nhiệt độ giảm", points: 0.5 },
        { step: "Giải thích cho đá vào trước làm nước lạnh đi, đường khó tan/lắng đáy", points: 0.25 },
        { step: "Kết luận khuấy tan trước khi cho đá giúp đường tan nhanh và hoàn toàn", points: 0.25 }
      ] },
    { id: "w3_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Ở các nước xứ lạnh vào mùa đông, người ta thường rắc muối ăn (NaCl) lên mặt đường bị đóng băng tuyết. Hãy giải thích cơ sở khoa học của việc làm này.",
      solution: "Nước tinh khiết đóng băng ở $0^\\circ\\text{C}$. Khi rắc muối vào tuyết, muối hòa tan tạo thành dung dịch nước muối (hỗn hợp). Dung dịch nước muối có nhiệt độ đông đặc thấp hơn $0^\\circ\\text{C}$ (có thể xuống tới $-10^\\circ\\text{C}$ đến $-18^\\circ\\text{C}$), làm băng tuyết tan chảy thành nước và ngăn đường đóng băng trở lại.",
      rubric: [
        { step: "Nêu được nước tinh khiết đông đặc ở $0^\\circ\\text{C}$", points: 0.25 },
        { step: "Chỉ ra muối + nước tạo dung dịch (hỗn hợp) có nhiệt độ đông đặc thấp hơn $0^\\circ\\text{C}$", points: 0.5 },
        { step: "Kết luận băng tan ra và hạn chế trơn trượt", points: 0.25 }
      ] },
    { id: "w3_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 3 ống nghiệm không nhãn chứa riêng biệt: nước cất, dung dịch nước muối loãng và nước vôi đục (huyền phù $\\ce{Ca(OH)2}$). Không dùng hóa chất khác, chỉ dùng phương pháp vật lý (để yên quan sát và đun nóng/cô cạn), hãy trình bày cách nhận biết 3 ống nghiệm trên.",
      solution: "B1: Để yên cả 3 ống nghiệm một thời gian: ống nào có cặn trắng lắng xuống đáy (huyền phù) là nước vôi đục. B2: Lấy một ít chất lỏng ở 2 ống còn lại đem cô cạn (hoặc đun bay hơi hết nước) trên đĩa thủy tinh: ống nào để lại tinh thể rắn màu trắng là dung dịch nước muối; ống bay hơi hoàn toàn không để lại cặn là nước cất.",
      rubric: [
        { step: "Để yên phân biệt được huyền phù (nước vôi đục) nhờ hiện tượng lắng cặn", points: 0.5 },
        { step: "Cô cạn 2 ống còn lại: có cặn trắng là nước muối, không có cặn là nước cất", points: 0.5 }
      ] },
    { id: "w3_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vì sao khi làm sạch vết dầu mỡ bám trên tay hoặc bát đĩa, rửa bằng nước lã thông thường không sạch được mà phải dùng nước rửa chén (xà phòng)?",
      solution: "Dầu mỡ không tan trong nước (chúng tạo lớp tách biệt). Nước rửa chén đóng vai trò là chất hoạt động bề mặt (chất nhũ hóa): một đầu ưa dầu bám vào giọt dầu mỡ, đầu ưa nước hướng ra nước, giúp phân tán dầu mỡ thành các giọt nhũ tương siêu nhỏ lơ lửng và bị nước cuốn trôi.",
      rubric: [
        { step: "Nêu được dầu mỡ không tan trong nước", points: 0.25 },
        { step: "Giải thích nước rửa chén/xà phòng là chất nhũ hóa giúp chia nhỏ dầu mỡ thành nhũ tương phân tán vào nước", points: 0.5 },
        { step: "Kết luận dễ dàng rửa trôi bằng nước", points: 0.25 }
      ] },
    { id: "w3_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một học sinh có $100\\text{ g}$ dung dịch muối ăn bão hòa ở $20^\\circ\\text{C}$ (biết ở $20^\\circ\\text{C}$, $100\\text{ g}$ nước hòa tan tối đa $36\\text{ g}$ muối). Nếu cô cạn hoàn toàn $100\\text{ g}$ dung dịch bão hòa này để nước bay hơi hết thì thu được bao nhiêu gam muối khan? (Làm tròn đến 2 chữ số thập phân)",
      quickAnswer: "26.47",
      solution: "Cứ $100\\text{ g}$ nước + $36\\text{ g}$ muối = $136\\text{ g}$ dung dịch bão hòa chứa $36\\text{ g}$ muối. Vậy trong $100\\text{ g}$ dung dịch bão hòa có: $m_{\\text{muối}} = \\frac{100 \\times 36}{136} \\approx 26,47\\text{ g}$.",
      rubric: [
        { step: "Tính được khối lượng dung dịch bão hòa chuẩn $= 100 + 36 = 136\\text{ g}$", points: 0.5 },
        { step: "Thiết lập tỉ lệ và tính đúng $m_{\\text{muối}} = \\frac{100 \\times 36}{136} \\approx 26,47\\text{ g}$", points: 0.5 }
      ] }
  ]
};
