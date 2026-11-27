window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[4] = {
  week: 4,
  title: "Các phương pháp tách chất (Lọc, Cô cạn, Chiết, Chưng cất)",
  objectives: [
    "Nắm vững nguyên tắc của 4 phương pháp tách chất cơ bản: Lọc, Cô cạn, Chiết và Chưng cất.",
    "Lựa chọn đúng phương pháp tách chất dựa trên sự khác nhau về tính chất vật lý (tính tan, kích thước hạt, khối lượng riêng, nhiệt độ sôi).",
    "Thiết kế được quy trình nhiều bước để tách hỗn hợp gồm 3–4 chất (dạng bài thực nghiệm kinh điển trong đề thi HSG)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 4 (A4). Chuẩn bị giấy lọc/phễu lọc và hình vẽ sơ đồ phễu chiết, bộ chưng cất.",
    sessions: [
      {
        name: "Buổi 1: Lọc & Cô cạn",
        guide: "Lọc dùng để tách chất rắn KHÔNG tan khỏi chất lỏng (dựa vào kích thước hạt). Cô cạn dùng để tách chất rắn TAN, bền nhiệt (như muối ăn) khỏi dung môi bay hơi.",
        pitfalls: "Học sinh hay dùng phương pháp lọc để tách muối ăn ra khỏi nước biển (sai vì muối tan hoàn toàn, đi qua được lỗ giấy lọc!)."
      },
      {
        name: "Buổi 2: Chiết & Chưng cất",
        guide: "Chiết dùng tách 2 chất lỏng KHÔNG tan vào nhau, tách lớp (dầu ăn + nước) bằng phễu chiết (chất nặng hơn nằm dưới mở khóa chảy ra trước). Chưng cất dùng tách 2 chất lỏng TAN vào nhau nhưng khác nhiệt độ sôi (cồn $78^\\circ\\text{C}$ + nước $100^\\circ\\text{C}$).",
        pitfalls: "Nhầm giữa chiết (2 lỏng không tan) và chưng cất (2 lỏng tan vào nhau, khác nhiệt độ sôi)."
      },
      {
        name: "Buổi 3: Thiết kế sơ đồ tách hỗn hợp nhiều chất (HSG)",
        guide: "Rèn tư duy lập sơ đồ nhánh cho 5 câu HSG: tách hỗn hợp Cát + Muối ăn + Dầu ăn + Nước, hoặc Bột sắt + Bột gỗ + Muối ăn.",
        pitfalls: "Khi tách hỗn hợp nhiều chất, học sinh hay quên bước làm khô hoặc không chỉ rõ chất nào thu được ở phễu lọc, chất nào ở nước lọc."
      }
    ]
  },
  lecture: [
    {
      title: "Bốn phương pháp tách chất dựa vào tính chất vật lý",
      content: `
        <table class="std-table">
          <thead><tr><th>Phương pháp</th><th>Đối tượng áp dụng</th><th>Cơ sở khoa học</th><th>Ví dụ thực tế</th></tr></thead>
          <tbody>
            <tr><td><strong>1. Lọc</strong></td><td>Rắn không tan + Lỏng</td><td>Khác nhau về kích thước hạt</td><td>Tách cát khỏi nước, pha cà phê phin</td></tr>
            <tr><td><strong>2. Cô cạn</strong></td><td>Rắn tan (bền nhiệt) + Lỏng</td><td>Chất lỏng bay hơi, rắn kết tinh lại</td><td>Làm muối ăn từ nước biển</td></tr>
            <tr><td><strong>3. Chiết</strong></td><td>Hai chất lỏng <strong>không tan</strong> vào nhau</td><td>Khác nhau về khối lượng riêng (tách lớp)</td><td>Tách dầu ăn ra khỏi nước bằng phễu chiết</td></tr>
            <tr><td><strong>4. Chưng cất</strong></td><td>Hai chất lỏng <strong>tan</strong> vào nhau</td><td>Khác nhau về <strong>nhiệt độ sôi</strong></td><td>Tách cồn ($78^\\circ\\text{C}$) khỏi nước ($100^\\circ\\text{C}$)</td></tr>
          </tbody>
        </table>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 130" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- Loc -->
            <polygon points="45,22 125,22 92,65 78,65" fill="#e2e8f0" stroke="#475569" stroke-width="1.8"/>
            <line x1="85" y1="65" x2="85" y2="82" stroke="#0284c7" stroke-width="3"/>
            <rect x="60" y="84" width="50" height="24" rx="4" fill="#bae6fd" stroke="#0284c7"/>
            <text x="85" y="122" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">1. Lọc (Cát + Nước)</text>

            <!-- Chiet -->
            <polygon points="225,20 295,20 270,68 250,68" fill="#fef08a" stroke="#ca8a04" stroke-width="1.8"/>
            <rect x="249" y="45" width="22" height="22" fill="#93c5fd"/>
            <circle cx="260" cy="76" r="5" fill="#475569"/>
            <rect x="235" y="84" width="50" height="24" rx="4" fill="#dbeafe" stroke="#2563eb"/>
            <text x="260" y="122" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">2. Phễu chiết (Dầu + Nước)</text>

            <!-- Chung cat -->
            <circle cx="405" cy="75" r="24" fill="#fef2f2" stroke="#dc2626" stroke-width="1.8"/>
            <path d="M 405 51 L 405 30 L 475 58" fill="none" stroke="#475569" stroke-width="4"/>
            <rect x="465" y="65" width="40" height="35" rx="4" fill="#dcfce7" stroke="#16a34a"/>
            <text x="445" y="122" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">3. Chưng cất (Khác T°sôi)</text>
          </svg>
        </div>
      `,
      checkpoint: {
        question: "Để tách riêng hỗn hợp gồm rượu (ethanol, sôi ở $78^\\circ\\text{C}$) và nước (sôi ở $100^\\circ\\text{C}$), ta dùng phương pháp nào?",
        options: ["Lọc qua giấy lọc", "Cô cạn cho bay hơi hết", "Dùng phễu chiết", "Chưng cất phân đoạn"],
        answer: 3,
        explanation: "Ethanol và nước tan vô hạn vào nhau nên không dùng lọc hay chiết được; ta phải dùng chưng cất dựa vào sự chênh lệch nhiệt độ sôi."
      }
    },
    {
      title: "Tư duy HSG: Tách hỗn hợp nhiều chất & Nam châm",
      content: `
        <p>Trong đề thi HSG, hỗn hợp thường có 3–4 chất. Nguyên tắc vàng là: <strong>Tách chất có tính chất đặc biệt nhất trước</strong>:</p>
        <ul>
          <li>Có <strong>sắt (Fe)</strong> → Dùng <strong>nam châm</strong> hút riêng bột sắt ngay từ đầu.</li>
          <li>Có <strong>băng phiến / iodine</strong> → Lợi dụng tính <strong>thăng hoa</strong> khi đun nhẹ.</li>
          <li>Hỗn hợp rắn (muối ăn + cát) → <strong>Hòa tan vào nước</strong> → <strong>Lọc</strong> (thu cát trên giấy lọc) → <strong>Cô cạn</strong> nước lọc (thu muối ăn).</li>
        </ul>
      `,
      example: "Khi dùng phễu chiết để tách hỗn hợp dầu ăn ($D = 0,8\\text{ g/mL}$) và nước ($D = 1,0\\text{ g/mL}$), chất nào chảy ra trước khi mở khóa phễu? <br/><em>Phân tích:</em> Nước nặng hơn nên chìm ở lớp dưới, dầu ăn nhẹ hơn nổi ở lớp trên. Khi mở khóa phễu chiết, <strong>nước chảy ra trước</strong>, khóa lại đúng lúc mặt phân cách chạm khóa sẽ thu được dầu ăn ở trên."
    }
  ],
  questions: [
    { id: "w4_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Diêm dân làm muối ăn từ nước biển bằng cách phơi nắng trên ruộng muối là ứng dụng của phương pháp nào?",
      options: ["A. Lọc", "B. Cô cạn (bay hơi)", "C. Chiết", "D. Chưng cất"],
      answer: 1, solution: "Ánh nắng làm nước biển bay hơi, muối ăn kết tinh lại (cô cạn)." },
    { id: "w4_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Để tách bã trà ra khỏi nước trà khi pha trà, ta dùng phương pháp nào?",
      options: ["A. Lọc", "B. Chiết", "C. Cô cạn", "D. Chưng cất"],
      answer: 0, solution: "Rây lọc giữ bã trà rắn lại, cho nước trà đi qua." },
    { id: "w4_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Dụng cụ chính dùng để tách hai chất lỏng không tan vào nhau (như xăng và nước) là:",
      options: ["A. Giấy lọc", "B. Phễu chiết", "C. Cốc thủy tinh", "D. Bình chia độ"],
      answer: 1, solution: "Phễu chiết dùng để tách các chất lỏng không hòa tan và phân lớp." },
    { id: "w4_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Phương pháp chưng cất dựa trên sự khác nhau về tính chất nào của các chất trong hỗn hợp?",
      options: ["A. Màu sắc", "B. Kích thước hạt", "C. Nhiệt độ sôi", "D. Khả năng bị nam châm hút"],
      answer: 2, solution: "Chất có nhiệt độ sôi thấp hơn sẽ bay hơi và ngưng tụ trước." },
    { id: "w4_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Để tách riêng bột sắt bị lẫn trong bột lưu huỳnh (cả hai đều không tan trong nước), cách nhanh nhất là:",
      options: ["A. Hòa tan vào nước rồi lọc", "B. Đưa nam châm lại gần hỗn hợp", "C. Đem hỗn hợp đi cô cạn", "D. Dùng phễu chiết"],
      answer: 1, solution: "Sắt có từ tính bị nam châm hút ra khỏi lưu huỳnh." },
    { id: "w4_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong quá trình lọc hỗn hợp cát và nước bằng phễu có lót giấy lọc, phần chất thu được ở cốc hứng bên dưới gọi là:",
      options: ["A. Bã lọc", "B. Huyền phù", "C. Nước lọc", "D. Kết tủa"],
      answer: 2, solution: "Chất lỏng đi qua giấy lọc xuống cốc hứng gọi là nước lọc." },
    { id: "w4_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Cách nào sau đây tách được đường ăn ra khỏi dung dịch nước đường?",
      options: ["A. Dùng giấy lọc", "B. Dùng phễu chiết", "C. Cô cạn nhẹ (đun cách thủy cho nước bay hơi)", "D. Dùng nam châm"],
      answer: 2, solution: "Đường tan trong nước nên phải làm bay hơi nước (cô cạn nhẹ để đường không bị cháy)." },
    { id: "w4_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai của các nhận định về tách chất:",
      statements: [
        { text: "Có thể dùng giấy lọc để tách muối ăn ra khỏi nước biển.", answer: false },
        { text: "Chưng cất nước tự nhiên giúp thu được nước cất tinh khiết.", answer: true },
        { text: "Khi chiết dầu ăn và nước, dầu ăn nổi lên trên do nhẹ hơn nước.", answer: true },
        { text: "Cô cạn là phương pháp dùng để tách 2 chất lỏng tan vào nhau.", answer: false }
      ],
      solution: "a) Sai vì muối tan đi qua giấy lọc; d) Sai vì 2 chất lỏng tan vào nhau phải dùng chưng cất." },
    { id: "w4_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong một quy trình lọc $250\\text{ g}$ hỗn hợp gồm cát và nước, người ta thu được $215\\text{ g}$ nước lọc trong suốt (coi lượng nước thấm ướt giấy lọc không đáng kể). Khối lượng cát khô thu được là bao nhiêu gam?",
      answer: "35", tolerance: 0.2,
      solution: "$m_{\\text{cát}} = 250 - 215 = 35\\text{ g}$." },
    { id: "w4_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cô cạn $400\\text{ g}$ nước biển có độ mặn $3,5\\%$ (tức $100\\text{ g}$ nước biển chứa $3,5\\text{ g}$ muối). Lượng muối thu được là bao nhiêu gam?",
      answer: "14", tolerance: 0.1,
      solution: "$m_{\\text{muối}} = 400 \\times 3,5 / 100 = 14\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w4_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Để tách riêng hỗn hợp gồm: bột đá vôi (không tan trong nước) và muối ăn (tan trong nước), thứ tự các bước thực hiện đúng là:",
      options: [
        "A. Cô cạn → Lọc → Hòa tan vào nước.",
        "B. Hòa tan vào nước → Lọc (thu đá vôi) → Cô cạn nước lọc (thu muối ăn).",
        "C. Dùng phễu chiết → Cô cạn.",
        "D. Chưng cất → Lọc."
      ],
      answer: 1, solution: "Hòa tan muối vào nước, lọc giữ đá vôi trên phễu, cô cạn nước lọc thu muối." },
    { id: "w4_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong bộ dụng cụ chưng cất nước từ hỗn hợp nước và cồn, chất nào bay hơi và ngưng tụ thành chất lỏng ở bình hứng đầu tiên (nhiệt kế chỉ khoảng $78^\\circ\\text{C}$)?",
      options: ["A. Nước ($100^\\circ\\text{C}$)", "B. Cồn ethanol ($78^\\circ\\text{C}$)", "C. Cả hai cùng bay hơi hết một lúc", "D. Không có chất nào bay hơi"],
      answer: 1, solution: "Ethanol có nhiệt độ sôi thấp hơn ($78^\\circ\\text{C} < 100^\\circ\\text{C}$) nên hóa hơi và ngưng tụ trước." },
    { id: "w4_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Một học sinh dùng phễu chiết để tách hỗn hợp gồm chloroform (lỏng, $D = 1,49\\text{ g/mL}$, không tan trong nước) và nước ($D = 1,0\\text{ g/mL}$):",
      statements: [
        { text: "Hỗn hợp tách thành hai lớp chất lỏng rõ rệt.", answer: true },
        { text: "Lớp nước nổi ở phía trên, lớp chloroform chìm ở phía dưới.", answer: true },
        { text: "Khi mở khóa phễu chiết, chloroform chảy ra trước.", answer: true },
        { text: "Có thể thay phễu chiết bằng giấy lọc để tách 2 chất lỏng này.", answer: false }
      ],
      solution: "Chloroform ($D = 1,49\\text{ g/mL}$) nặng hơn nước ($D = 1,0\\text{ g/mL}$) nên chìm ở dưới, nước nổi ở trên; khi mở khóa phễu chiết chloroform chảy ra trước. Không thể dùng giấy lọc để tách 2 chất lỏng." },
    { id: "w4_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một hỗn hợp X nặng $120\\text{ g}$ gồm bột sắt, cát và muối ăn. Dùng nam châm hút hết bột sắt thì khối lượng phần còn lại là $96\\text{ g}$. Hòa tan phần còn lại vào nước dư, lọc lấy cát sấy khô cân được $42\\text{ g}$. Tính phần trăm khối lượng (%) của muối ăn trong hỗn hợp X ban đầu.",
      answer: "45", tolerance: 0.2,
      solution: "$m_{\\text{Fe}} = 120 - 96 = 24\\text{ g}$. $m_{\\text{muối}} = 96 - 42 = 54\\text{ g}$. $\\%m_{\\text{muối}} = (54 / 120) \\times 100\\% = 45\\%$." },
    { id: "w4_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Để thu được $21\\text{ kg}$ muối ăn từ nước biển chứa $3,5\\%$ muối (giả sử hiệu suất thu hồi đạt $100\\%$), cần đưa vào ruộng muối bao nhiêu kg nước biển?",
      answer: "600", tolerance: 0.5,
      solution: "$m_{\\text{nước biển}} = 21 / 0,035 = 600\\text{ kg}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w4_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trình bày quy trình tách riêng từng chất ra khỏi hỗn hợp gồm 4 chất: <strong>bột sắt, mùn cưa (gỗ mịn), cát và muối ăn</strong> (biết mùn cưa nhẹ hơn nước và không tan trong nước).",
      solution: "B1: Dùng nam châm hút riêng bột sắt. B2: Cho hỗn hợp còn lại vào nước dư, khuấy cho muối tan hết. Mùn cưa nhẹ nổi lên trên, vớt lấy mùn cưa đem phơi khô. B3: Lọc phần còn lại qua phễu lọc: trên giấy lọc thu được cát (rửa sạch, sấy khô). B4: Đem nước lọc đi cô cạn thu được muối ăn khan.",
      rubric: [
        { step: "Dùng nam châm tách riêng bột sắt", points: 0.25 },
        { step: "Hòa tan vào nước: vớt mùn cưa nổi trên mặt nước", points: 0.25 },
        { step: "Lọc thu được cát trên giấy lọc", points: 0.25 },
        { step: "Cô cạn nước lọc thu được muối ăn", points: 0.25 }
      ] },
    { id: "w4_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong bộ dụng cụ chưng cất ở phòng thí nghiệm, ống sinh hàn (ống làm lạnh) có 2 đầu ống dẫn nước vào và nước ra. Tại sao nước làm mát phải cho đi vào từ <strong>đầu thấp</strong> và đi ra ở <strong>đầu cao</strong> (ngược chiều với dòng hơi)?",
      solution: "Nếu cho nước vào từ đầu thấp và ra ở đầu cao, nước sẽ luôn điền đầy toàn bộ khoang ống sinh hàn (tránh bị rỗng/bọt khí), đồng thời tạo dòng trao đổi nhiệt ngược chiều giúp hơi nóng tiếp xúc với nước mát dần đều, đạt hiệu quả ngưng tụ cao nhất.",
      rubric: [
        { step: "Giải thích nước đi từ dưới lên giúp điền đầy hoàn toàn ống sinh hàn, không bị đọng bọt khí", points: 0.5 },
        { step: "Nêu được nguyên lý trao đổi nhiệt ngược chiều giúp làm lạnh và ngưng tụ hơi hiệu quả nhất", points: 0.5 }
      ] },
    { id: "w4_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Để tách riêng hỗn hợp lỏng gồm: dầu ăn, nước và muối ăn đã hòa tan trong nước, em hãy đề xuất các bước thí nghiệm theo đúng trình tự hợp lý.",
      solution: "B1: Cho hỗn hợp vào phễu chiết, để yên cho tách thành 2 lớp (dầu ăn nổi trên, dung dịch nước muối ở dưới). B2: Mở khóa phễu chiết cho lớp dung dịch nước muối chảy xuống cốc trước, thu được dầu ăn còn lại trong phễu. B3: Đem dung dịch nước muối đi chưng cất (nếu cần thu cả nước tinh khiết và muối) hoặc cô cạn (nếu chỉ cần thu muối).",
      rubric: [
        { step: "Dùng phễu chiết tách riêng lớp dầu ăn (ở trên) và dung dịch nước muối (ở dưới)", points: 0.5 },
        { step: "Dùng phương pháp chưng cất (hoặc cô cạn) tách riêng nước và muối ăn", points: 0.5 }
      ] },
    { id: "w4_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi lọc nước đục bằng phễu thủy tinh và giấy lọc, vì sao cần gấp giấy lọc vừa khít phễu, không để bọt khí và rót nước dọc theo đũa thủy tinh (mực nước luôn thấp hơn mép giấy lọc)?",
      solution: "Gấp khít không để bọt khí giúp nước chảy qua nhanh và đều. Rót dọc theo đũa thủy tinh tránh làm rách giấy lọc. Giữ mực nước thấp hơn mép giấy lọc để nước đục không tràn qua khe giữa giấy và thành phễu làm đục nước lọc.",
      rubric: [
        { step: "Gấp khít tránh bọt khí giúp lọc nhanh; rót theo đũa thủy tinh tránh rách giấy lọc", points: 0.5 },
        { step: "Mực nước thấp hơn mép giấy lọc để tránh nước đục tràn qua kẽ hở xuống bình hứng", points: 0.5 }
      ] },
    { id: "w4_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một mẫu muối ăn thô có lẫn $8\\%$ cát và $2\\%$ tạp chất tan độc hại (không bay hơi). Nếu chỉ dùng phương pháp hòa tan vào nước, lọc bỏ cát rồi cô cạn hoàn toàn nước lọc thì muối thu được đã tinh khiết chưa? Giải thích.",
      solution: "Muối thu được VẪN CHƯA tinh khiết. Vì $2\\%$ tạp chất tan đã đi qua giấy lọc cùng với muối ăn; khi cô cạn hoàn toàn, cả muối ăn và tạp chất tan đều kết tinh lại cùng nhau.",
      rubric: [
        { step: "Khẳng định đúng: Muối thu được vẫn chưa tinh khiết", points: 0.25 },
        { step: "Giải thích tạp chất tan đi qua được giấy lọc cùng dung dịch muối", points: 0.5 },
        { step: "Khi cô cạn hoàn toàn, tạp chất tan kết tinh lẫn vào muối ăn", points: 0.25 }
      ] }
  ]
};
