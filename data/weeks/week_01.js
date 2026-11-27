window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[1] = {
  week: 1,
  title: "Giới thiệu KHTN, An toàn PTN & Các thể của chất",
  objectives: [
    "Nắm vững các quy tắc an toàn khi làm thí nghiệm Hóa học và nhận biết các biển báo nguy hiểm.",
    "Sử dụng đúng dụng cụ đo thể tích (ống đong, pipet, cốc chia độ), đo khối lượng (cân điện tử), đo nhiệt độ.",
    "Phân biệt được 3 thể cơ bản của chất (rắn, lỏng, khí) theo mô hình sắp xếp hạt và giải thích các quá trình chuyển thể (nóng chảy, đông đặc, bay hơi, ngưng tụ, sôi).",
    "Bước đầu rèn tư duy giải thích hiện tượng thực tế và đọc đồ thị nhiệt độ chuyển thể (dạng bài HSG)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 1 (A4); chuẩn bị cốc nước đá, nhiệt kế hoặc video minh họa sự chuyển thể.",
    sessions: [
      {
        name: "Buổi 1: An toàn PTN & Dụng cụ đo",
        guide: "Cho con tự đọc Phần 1 & 2 trên Web App, trả lời 2 câu kiểm tra nhanh. Nhấn mạnh quy tắc: KHÔNG nếm/ngửi trực tiếp hóa chất, cách pha loãng acid (rót từ từ acid vào nước), cách đọc vạch chia ống đong ngang tầm mắt (đáy khum).",
        pitfalls: "Học sinh lớp 6 hay đọc sai mực chất lỏng ở mép trên thay vì đáy mặt khum; nhầm giữa cốc đong (ước lượng) và ống đong/pipet (đo chính xác)."
      },
      {
        name: "Buổi 2: Ba thể của chất & Sự chuyển thể",
        guide: "Giảng bằng mô hình hạt: Rắn (hạt xếp sát, dao động tại chỗ) → Lỏng (hạt trượt lên nhau) → Khí (hạt chuyển động tự do, khoảng cách lớn). Phân biệt bay hơi (mọi nhiệt độ, trên mặt thoáng) và sôi (nhiệt độ xác định, cả trong lòng chất lỏng).",
        pitfalls: "Nhầm lẫn giữa 'hơi nước' (khí, không nhìn thấy) với 'làn khói trắng/sương mù' (các giọt nước lỏng nhỏ li ti do ngưng tụ)."
      },
      {
        name: "Buổi 3: Chữa 20 bài tập & Chấm theo ba rem HSG",
        guide: "Cho con tự làm 20 câu (trên app hoặc in phiếu A4). Chú ý hướng dẫn con cách trình bày 5 câu HSG đủ ý: Nêu hiện tượng → Giải thích bằng cơ chế hạt/nhiệt độ → Kết luận.",
        pitfalls: "Khi giải thích hiện tượng ở câu HSG, học sinh thường trả lời cụt lủn thiếu từ khóa khoa học (ví dụ quên nói 'thu nhiệt' hoặc 'tỏa nhiệt')."
      }
    ]
  },
  lecture: [
    {
      title: "An toàn phòng thí nghiệm & Dụng cụ đo lường Hóa học",
      content: `
        <p>Trong phòng thí nghiệm (PTN) Hóa học, mọi thao tác đều phải tuân thủ <strong>nguyên tắc an toàn</strong>:</p>
        <ul>
          <li>Mặc áo blouse, đeo kính bảo hộ và găng tay khi tiếp xúc với hóa chất ăn mòn.</li>
          <li><strong>Tuyệt đối không</strong> nếm, ngửi trực tiếp hóa chất. Khi cần ngửi, dùng tay phẩy nhẹ hơi hóa chất về phía mũi.</li>
          <li><strong>Đọc thể tích chất lỏng bằng ống đong:</strong> Đặt ống đong thẳng đứng trên mặt phẳng ngang, mắt nhìn ngang bằng với <strong>đáy của mặt khum</strong> chất lỏng.</li>
        </ul>
        <table class="std-table">
          <thead><tr><th>Biển báo</th><th>Ý nghĩa</th><th>Ví dụ hóa chất</th></tr></thead>
          <tbody>
            <tr><td>🔥 Ngọn lửa</td><td>Chất dễ cháy</td><td>Ethanol (cồn), xăng, khí hydrogen</td></tr>
            <tr><td>🧪 Giọt rơi ăn mòn tay/kim loại</td><td>Chất ăn mòn</td><td>Acid đặc ($\\ce{H2SO4}$, $\\ce{HCl}$), kiềm đặc ($\\ce{NaOH}$)</td></tr>
            <tr><td>☠️ Đầu lâu xương chéo</td><td>Chất độc</td><td>Methanol, muối thủy ngân, khí chlorine</td></tr>
          </tbody>
        </table>
      `,
      checkpoint: {
        question: "Khi đo 25 mL nước bằng ống đong, mắt cần đặt ở vị trí nào?",
        options: [
          "Nhìn từ trên xuống vào mép trên chất lỏng",
          "Đặt mắt ngang bằng với đáy mặt khum của nước",
          "Đặt mắt ngang bằng với đỉnh mặt khum",
          "Cầm ống đong nghiêng lên ngang mắt"
        ],
        answer: 1,
        explanation: "Với nước trong ống đong thủy tinh, mặt thoáng bị lõm xuống (mặt khum). Phải đặt ống đong thẳng đứng và nhìn ngang với điểm thấp nhất (đáy mặt khum) để tránh sai số thị sai."
      }
    },
    {
      title: "Ba thể của chất & Các quá trình chuyển thể",
      content: `
        <p>Mọi chất đều được cấu tạo từ những hạt vô cùng nhỏ bé (phân tử, nguyên tử). Sự khác nhau giữa 3 thể nằm ở <strong>khoảng cách</strong> và <strong>lực liên kết</strong> giữa các hạt:</p>
        <ul>
          <li><strong>Thể rắn:</strong> Các hạt xếp sát nhau theo trật tự, chỉ dao động tại chỗ → Có hình dạng và thể tích xác định, rất khó nén.</li>
          <li><strong>Thể lỏng:</strong> Các hạt gần nhau nhưng trượt lên nhau được → Có thể tích xác định, không có hình dạng riêng (chảy được), khó nén.</li>
          <li><strong>Thể khí (hơi):</strong> Các hạt ở rất xa nhau, chuyển động hỗn loạn mọi hướng → Không có hình dạng và thể tích riêng, dễ nén.</li>
        </ul>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="20" y="15" width="140" height="80" rx="8" fill="#eff6ff" stroke="#2563eb"/>
            <g fill="#2563eb"><circle cx="65" cy="40" r="8"/><circle cx="85" cy="40" r="8"/><circle cx="105" cy="40" r="8"/><circle cx="65" cy="60" r="8"/><circle cx="85" cy="60" r="8"/><circle cx="105" cy="60" r="8"/><circle cx="65" cy="80" r="8"/><circle cx="85" cy="80" r="8"/><circle cx="105" cy="80" r="8"/></g>
            <text x="90" y="110" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Thể Rắn (Xếp sát)</text>

            <rect x="200" y="15" width="140" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a"/>
            <g fill="#16a34a"><circle cx="225" cy="75" r="8"/><circle cx="248" cy="70" r="8"/><circle cx="272" cy="78" r="8"/><circle cx="295" cy="68" r="8"/><circle cx="315" cy="77" r="8"/><circle cx="236" cy="52" r="8"/><circle cx="262" cy="48" r="8"/><circle cx="288" cy="54" r="8"/></g>
            <text x="270" y="110" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">Thể Lỏng (Trượt lên nhau)</text>

            <rect x="380" y="15" width="140" height="80" rx="8" fill="#fef3c7" stroke="#d97706"/>
            <g fill="#d97706"><circle cx="405" cy="34" r="7"/><circle cx="465" cy="28" r="7"/><circle cx="430" cy="65" r="7"/><circle cx="495" cy="55" r="7"/><circle cx="470" cy="82" r="7"/></g>
            <text x="450" y="110" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">Thể Khí (Cách xa, tự do)</text>
          </svg>
        </div>
        <div class="callout">
          <strong>Quy luật nhiệt lượng khi chuyển thể:</strong><br/>
          • <strong>Thu nhiệt:</strong> Nóng chảy (Rắn → Lỏng), Bay hơi / Sôi (Lỏng → Khí), Thăng hoa (Rắn → Khí).<br/>
          • <strong>Tỏa nhiệt:</strong> Đông đặc (Lỏng → Rắn), Ngưng tụ (Khí → Lỏng).
        </div>
      `,
      example: "Tại sao khi mở nắp nồi nước đang sôi, ta thấy 'làn khói trắng' bay lên? <br/><em>Phân tích:</em> Hơi nước ở thể khí là <strong>vô hình</strong>. Khi hơi nước nóng bay lên gặp không khí lạnh bên ngoài, nó <strong>ngưng tụ (tỏa nhiệt)</strong> thành hàng triệu giọt nước lỏng li ti lơ lửng tạo thành làn khói trắng ta nhìn thấy.",
      checkpoint: {
        question: "Quá trình nào sau đây là quá trình TỎA NHIỆT?",
        options: [
          "Nước đá tan chảy thành nước lỏng",
          "Cồn bay hơi trên da tay làm tay mát",
          "Hơi nước ngưng tụ thành giọt sương trên lá cây",
          "Băng phiến (long não) thăng hoa"
        ],
        answer: 2,
        explanation: "Ngưng tụ (Khí → Lỏng) chuyển từ trạng thái các hạt chuyển động nhanh sang chậm hơn nên giải phóng (tỏa) nhiệt ra môi trường."
      }
    }
  ],
  questions: [
    // 10 CÂU CƠ BẢN (1đ x 10 = 10đ)
    { id: "w1_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Dụng cụ nào sau đây dùng để đo thể tích chất lỏng chính xác nhất trong phòng thí nghiệm?",
      options: ["A. Cốc thủy tinh không chia vạch", "B. Bình tam giác", "C. Ống đong hoặc pipet", "D. Ống nghiệm"],
      answer: 2, solution: "Ống đong và pipet có vạch chia chính xác dùng để đo thể tích chất lỏng." },
    { id: "w1_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Biển báo có hình ngọn lửa trên nền tam giác/hình thoi cảnh báo hóa chất thuộc nhóm nào?",
      options: ["A. Chất ăn mòn", "B. Chất dễ cháy", "C. Chất độc hại", "D. Chất phóng xạ"],
      answer: 1, solution: "Biểu tượng ngọn lửa là cảnh báo chất dễ cháy (flammable)." },
    { id: "w1_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Đặc điểm nào sau đây đúng với chất ở thể rắn?",
      options: ["A. Dễ bị nén khi tác dụng lực", "B. Không có hình dạng xác định", "C. Có hình dạng và thể tích xác định", "D. Các hạt chuyển động tự do về mọi phía"],
      answer: 2, solution: "Chất rắn có các hạt liên kết chặt chẽ nên có hình dạng và thể tích xác định." },
    { id: "w1_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Quá trình chuyển từ thể lỏng sang thể rắn được gọi là:",
      options: ["A. Sự nóng chảy", "B. Sự đông đặc", "C. Sự bay hơi", "D. Sự ngưng tụ"],
      answer: 1, solution: "Lỏng → Rắn là sự đông đặc." },
    { id: "w1_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Hiện tượng giọt nước đọng bên ngoài thành cốc nước đá là do quá trình nào?",
      options: ["A. Nước đá thấm qua thành cốc", "B. Sự bay hơi", "C. Sự ngưng tụ hơi nước trong không khí", "D. Sự nóng chảy"],
      answer: 2, solution: "Hơi nước trong không khí gặp thành cốc lạnh ngưng tụ thành giọt nước." },
    { id: "w1_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Hành động nào sau đây ĐÚNG quy tắc an toàn trong phòng thí nghiệm?",
      options: ["A. Ngửi trực tiếp miệng lọ hóa chất", "B. Đổ hóa chất thừa lại vào lọ gốc", "C. Đeo kính bảo hộ và đọc kỹ nhãn trước khi lấy hóa chất", "D. Dùng tay trần cầm hóa chất rắn"],
      answer: 2, solution: "Luôn đọc kỹ nhãn hóa chất và mang đồ bảo hộ (kính, găng tay)." },
    { id: "w1_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở áp suất khí quyển tiêu chuẩn, nước tinh khiết sôi ở nhiệt độ bao nhiêu?",
      options: ["A. $0^\\circ\\text{C}$", "B. $50^\\circ\\text{C}$", "C. $100^\\circ\\text{C}$", "D. $120^\\circ\\text{C}$"],
      answer: 2, solution: "Nước tinh khiết nóng chảy ở $0^\\circ\\text{C}$ và sôi ở $100^\\circ\\text{C}$ (ở áp suất 1 atm)." },
    { id: "w1_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai của các phát biểu về các thể của chất:",
      statements: [
        { text: "Chất ở thể khí có thể nén dễ dàng hơn chất lỏng.", answer: true },
        { text: "Sự bay hơi chỉ xảy ra ở nhiệt độ sôi của chất lỏng.", answer: false },
        { text: "Khi nước đang sôi, nhiệt độ của nước tăng liên tục.", answer: false },
        { text: "Các hạt trong chất lỏng có thể trượt lên nhau.", answer: true }
      ],
      solution: "b) Sai vì bay hơi xảy ra ở mọi nhiệt độ; c) Sai vì trong suốt quá trình sôi nhiệt độ chất tinh khiết giữ không đổi." },
    { id: "w1_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Một ống đong ban đầu chứa $45\\text{ mL}$ nước. Khi thả chìm hoàn toàn một viên bi sắt vào, mực nước dâng lên vạch $62,5\\text{ mL}$. Thể tích viên bi sắt là bao nhiêu mL? (Chỉ nhập số)",
      answer: "17.5", tolerance: 0.05,
      solution: "$V_{\\text{bi}} = 62,5 - 45 = 17,5\\text{ mL}$." },
    { id: "w1_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Chuyển đổi nhiệt độ nóng chảy của đồng ($1085^\\circ\\text{C}$) sang thang Kelvin ($K = ^\\circ\\text{C} + 273$). (Chỉ nhập số)",
      answer: "1358", tolerance: 0.5,
      solution: "$T(\\text{K}) = 1085 + 273 = 1358\\text{ K}$." },

    // 5 CÂU TRÊN CƠ BẢN (1đ x 5 = 5đ)
    { id: "w1_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "So sánh sự bay hơi và sự sôi, phát biểu nào sau đây SAI?",
      options: [
        "A. Cả hai đều là quá trình chuyển từ thể lỏng sang thể khí.",
        "B. Sự bay hơi chỉ xảy ra trên bề mặt thoáng, sự sôi xảy ra cả trong lòng chất lỏng.",
        "C. Cả hai đều cần cung cấp nhiệt lượng (thu nhiệt).",
        "D. Tốc độ bay hơi không phụ thuộc vào diện tích mặt thoáng."
      ],
      answer: 3, solution: "Tốc độ bay hơi phụ thuộc vào 3 yếu tố: nhiệt độ, gió và diện tích mặt thoáng." },
    { id: "w1_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong một bình kín chứa khí oxygen, khi ta đẩy pit-tông nén thể tích bình giảm đi một nửa (giữ nguyên nhiệt độ) thì điều gì xảy ra với các phân tử khí?",
      options: [
        "A. Kích thước mỗi phân tử khí giảm đi một nửa.",
        "B. Số lượng phân tử khí giảm đi một nửa.",
        "C. Khoảng cách trung bình giữa các phân tử khí giảm đi.",
        "D. Các phân tử khí biến thành thể rắn ngay lập tức."
      ],
      answer: 2, solution: "Khi nén khí, kích thước và số lượng phân tử không đổi, chỉ có khoảng cách giữa các phân tử thu hẹp lại." },
    { id: "w1_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho bảng nhiệt độ nóng chảy ($T_{\\text{nc}}$) và nhiệt độ sôi ($T_{\\text{sôi}}$) ở 1 atm: Chất X ($T_{\\text{nc}} = -114^\\circ\\text{C}, T_{\\text{sôi}} = 78^\\circ\\text{C}$); Chất Y ($T_{\\text{nc}} = -39^\\circ\\text{C}, T_{\\text{sôi}} = 357^\\circ\\text{C}$); Chất Z ($T_{\\text{nc}} = 801^\\circ\\text{C}, T_{\\text{sôi}} = 1465^\\circ\\text{C}$). Xét các nhận định ở $25^\\circ\\text{C}$:",
      statements: [
        { text: "Ở $25^\\circ\\text{C}$, chất X tồn tại ở thể lỏng.", answer: true },
        { text: "Ở $25^\\circ\\text{C}$, chất Y tồn tại ở thể rắn.", answer: false },
        { text: "Ở $100^\\circ\\text{C}$, chất X tồn tại ở thể khí.", answer: true },
        { text: "Chất Z là muối ăn (NaCl) tồn tại ở thể rắn ở điều kiện thường.", answer: true }
      ],
      solution: "Một chất ở thể lỏng khi $T_{\\text{nc}} < T < T_{\\text{sôi}}$. Ở $25^\\circ\\text{C}$, Y có $-39 < 25 < 357$ nên Y ở thể lỏng (Thủy ngân)." },
    { id: "w1_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một học sinh cân 1 cốc thủy tinh khô được $42,4\\text{ g}$. Rót $50\\text{ mL}$ một chất lỏng A vào cốc rồi cân lại được $81,9\\text{ g}$. Tính khối lượng riêng của chất lỏng A theo đơn vị $\\text{g/mL}$? (Nhập số thập phân)",
      answer: "0.79", tolerance: 0.01,
      solution: "$m_A = 81,9 - 42,4 = 39,5\\text{ g}$. Khối lượng riêng $D = m/V = 39,5 / 50 = 0,79\\text{ g/mL}$ (chính là cồn ethanol)." },
    { id: "w1_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Đổ $50\\text{ mL}$ nước vào $50\\text{ mL}$ cồn rồi lắc đều, thể tích hỗn hợp thu được khoảng $96\\text{ mL}$ (nhỏ hơn $100\\text{ mL}$). Số mL thể tích bị 'hụt đi' là bao nhiêu?",
      answer: "4", tolerance: 0.1,
      solution: "$100 - 96 = 4\\text{ mL}$. Do giữa các phân tử nước và cồn có khoảng trống, chúng xen kẽ vào nhau." },

    // 5 CÂU ĐÀO TẠO HSG (1đ x 5 = 5đ)
    { id: "w1_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi thoa một ít cồn y tế lên mu bàn tay, ta cảm thấy mát lạnh rất nhanh, trong khi thoa nước cùng nhiệt độ lại thấy ít mát hơn. Hãy giải thích hiện tượng trên dựa vào kiến thức chuyển thể và nhiệt lượng.",
      solution: "Cồn có nhiệt độ sôi thấp ($78^\\circ\\text{C}$) nên bay hơi rất nhanh ở nhiệt độ phòng. Khi bay hơi, cồn thu nhiệt từ da tay làm da tay mất nhiệt nhanh, tạo cảm giác mát lạnh rõ rệt hơn nước.",
      rubric: [
        { step: "Nêu được cồn bay hơi nhanh hơn nước ở nhiệt độ phòng", points: 0.25 },
        { step: "Chỉ rõ quá trình bay hơi là quá trình THU NHIỆT", points: 0.5 },
        { step: "Kết luận cồn lấy nhiệt từ da tay nhanh hơn nước nên gây cảm giác mát lạnh hơn", points: 0.25 }
      ] },
    { id: "w1_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong phòng thí nghiệm, tại sao khi pha loãng dung dịch $\\ce{H2SO4}$ đặc, người ta phải rót từ từ acid vào nước và khuấy nhẹ, tuyệt đối không làm ngược lại?",
      solution: "Quá trình hòa tan $\\ce{H2SO4}$ đặc vào nước tỏa một lượng nhiệt rất lớn. Acid đặc nặng hơn nước ($D \\approx 1,84\\text{ g/mL}$). Nếu rót nước vào acid, nước nhẹ nổi lên trên, sôi đột ngột tại bề mặt tiếp xúc và bắn tung tóe mang theo acid gây bỏng nguy hiểm.",
      rubric: [
        { step: "Nêu được quá trình pha loãng $\\ce{H2SO4}$ đặc tỏa nhiệt rất mạnh", points: 0.25 },
        { step: "Giải thích $\\ce{H2SO4}$ đặc nặng hơn nước nên khi rót nước vào acid, nước nổi trên bề mặt", points: 0.25 },
        { step: "Chỉ ra nước sôi đột ngột bắn acid ra ngoài gây nguy hiểm (ngược lại acid chìm xuống phân tán nhiệt đều)", points: 0.5 }
      ] },
    { id: "w1_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một chất rắn tinh khiết X được đun nóng đều đặn từ $20^\\circ\\text{C}$. Từ phút 0 đến phút 4 nhiệt độ tăng từ $20^\\circ\\text{C}$ lên $80^\\circ\\text{C}$; từ phút 4 đến phút 9 nhiệt độ giữ nguyên ở $80^\\circ\\text{C}$; từ phút 9 đến phút 12 nhiệt độ tăng từ $80^\\circ\\text{C}$ lên $110^\\circ\\text{C}$. Xác định nhiệt độ nóng chảy và trạng thái của X ở phút thứ 6 và phút thứ 11.",
      quickAnswer: "80",
      solution: "Trong khoảng phút 4–9 nhiệt độ không đổi dù vẫn đun → đây là quá trình nóng chảy, $T_{\\text{nc}} = 80^\\circ\\text{C}$ (băng phiến/naphthalene). Phút 6 đang nóng chảy nên X tồn tại đồng thời ở thể rắn và lỏng. Phút 11 nhiệt độ $> 80^\\circ\\text{C}$ nên X ở thể lỏng.",
      rubric: [
        { step: "Xác định đúng nhiệt độ nóng chảy $T_{\\text{nc}} = 80^\\circ\\text{C}$ (do nhiệt độ không đổi)", points: 0.25 },
        { step: "Trạng thái phút thứ 6: tồn tại cả 2 thể Rắn và Lỏng", points: 0.5 },
        { step: "Trạng thái phút thứ 11: thể Lỏng", points: 0.25 }
      ] },
    { id: "w1_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vào mùa đông lạnh, khi thở ra ngoài trời hoặc khi ngồi trong ô tô đóng kín cửa, kính xe thường bị mờ ở mặt trong. Giải thích hiện tượng và nêu cách làm hết mờ nhanh.",
      solution: "Hơi thở chứa nhiều hơi nước ấm. Khi gặp mặt kính lạnh, hơi nước ngưng tụ thành các giọt nước li ti bám trên mặt trong kính làm mờ kính. Bật điều hòa/quạt gió ấm thổi vào kính để tăng nhiệt độ kính và tăng tốc độ bay hơi làm kính trong trở lại.",
      rubric: [
        { step: "Nêu đúng hơi nước trong hơi thở gặp mặt kính lạnh bị NGƯNG TỤ thành giọt nước nhỏ", points: 0.5 },
        { step: "Giải thích được nguyên nhân mờ ở mặt trong là do hơi ẩm bên trong xe", points: 0.25 },
        { step: "Đề xuất biện pháp hợp lý (bật sưởi kính / thổi gió khô làm bay hơi nhanh)", points: 0.25 }
      ] },
    { id: "w1_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có một bình chia độ (ống đong) vạch chia nhỏ nhất là $1\\text{ mL}$, một cân điện tử chính xác tới $0,1\\text{ g}$ và nước sạch. Hãy trình bày các bước thí nghiệm để xác định khối lượng riêng của một viên sỏi không thấm nước và viết công thức tính.",
      solution: "B1: Cân viên sỏi khô trên cân điện tử được khối lượng $m$ (g). B2: Đổ một lượng nước vào ống đong, đọc thể tích $V_1$ (mL). B3: Thả nhẹ viên sỏi ngập hoàn toàn trong nước, đọc thể tích $V_2$ (mL). Thể tích sỏi $V = V_2 - V_1$. B4: Tính $D = \\frac{m}{V_2 - V_1}\\text{ (g/mL)}$.",
      rubric: [
        { step: "Bước cân khối lượng $m$ của viên sỏi khô", points: 0.25 },
        { step: "Bước đo thể tích bằng phương pháp dời chỗ nước ($V = V_2 - V_1$, thả ngập hoàn toàn)", points: 0.5 },
        { step: "Viết đúng công thức $D = m / (V_2 - V_1)$ kèm đơn vị", points: 0.25 }
      ] }
  ]
};
