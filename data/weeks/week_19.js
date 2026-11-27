window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[19] = {
  week: 19,
  title: "Biến đổi vật lý & Biến đổi hóa học – Phản ứng tỏa nhiệt, thu nhiệt",
  objectives: [
    "Phân biệt rõ biến đổi vật lý (không tạo chất mới) và biến đổi hóa học (có tạo ra chất mới).",
    "Hiểu bản chất phản ứng hóa học: Liên kết giữa các nguyên tử thay đổi làm phân tử này biến thành phân tử khác; số nguyên tử mỗi nguyên tố được bảo toàn.",
    "Phân biệt phản ứng tỏa nhiệt và phản ứng thu nhiệt cùng các ứng dụng thực tế."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 19 (A4). Chuẩn bị đường ăn + đèn cồn hoặc nến để minh họa phân biệt tan đường (vật lý) và thắng đường thành caramen (hóa học).",
    sessions: [
      {
        name: "Buổi 1: Biến đổi vật lý vs Biến đổi hóa học",
        guide: "Dùng tiêu chí duy nhất: 'Có tạo ra CHẤT MỚI hay không?'. Nung chảy nến, hòa tan đường, bay hơi nước → Vật lý. Đốt cháy nến, đường cháy thành than đen, sắt gỉ → Hóa học.",
        pitfalls: "Học sinh hay nhầm đun nước sôi bốc hơi là biến đổi hóa học vì thấy có 'khí' bay lên (thực chất hơi nước vẫn là $\\ce{H2O}$)."
      },
      {
        name: "Buổi 2: Bản chất phản ứng hóa học & Tỏa/Thu nhiệt",
        guide: "Dùng sơ đồ SVG đứt liên kết cũ – tạo liên kết mới trong phản ứng $\\ce{2H2 + O2 -> 2H2O}$. Phân biệt phản ứng tỏa nhiệt (đốt than, cồn, vôi sống tác dụng nước) và thu nhiệt (nung đá vôi $\\ce{CaCO3}$, điện phân nước).",
        pitfalls: "Quên rằng một số phản ứng tỏa nhiệt (như đốt than, đốt khí gas) vẫn cần 'mồi lửa' ban đầu để kích hoạt, nhưng sau đó tự duy trì và tỏa nhiệt mạnh."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Chú ý 5 câu HSG: phân tích 2 giai đoạn vật lý và hóa học khi đốt một cây nến, và bài tập nhận biết dấu hiệu phản ứng hóa học.",
        pitfalls: "Trong câu HSG đốt nến, học sinh hay bỏ sót giai đoạn nóng chảy & bay hơi sáp nến (vật lý) trước khi hơi sáp cháy (hóa học)."
      }
    ]
  },
  lecture: [
    {
      title: "Biến đổi Vật lý và Biến đổi Hóa học",
      content: `
        <ul>
          <li><strong>Biến đổi vật lý:</strong> Chất chỉ thay đổi về <strong>trạng thái, hình dạng, kích thước</strong>, hoàn toàn <strong>không tạo ra chất mới</strong>. Ví dụ: nước đóng băng, hòa tan muối vào nước, uốn cong dây đồng.</li>
          <li><strong>Biến đổi hóa học (Phản ứng hóa học):</strong> Có sự biến đổi từ chất này thành <strong>chất mới</strong> (có tính chất khác hẳn chất ban đầu). Ví dụ: sắt bị gỉ trong không khí ẩm, đốt cháy than, lên men rượu.</li>
        </ul>
        <div class="callout">
          <strong>4 dấu hiệu nhận biết có phản ứng hóa học xảy ra:</strong> (1) Đổi màu sắc; (2) Có chất khí sủi bọt; (3) Xuất hiện chất rắn kết tủa; (4) Tỏa nhiệt hoặc phát sáng.
        </div>
      `,
      checkpoint: {
        question: "Quá trình nào sau đây là BIẾN ĐỔI HÓA HỌC?",
        options: [
          "Nước lỏng bay hơi thành hơi nước",
          "Hòa tan đường vào nước tạo nước đường",
          "Thổi hơi thở vào nước vôi trong làm xuất hiện vẩn đục trắng",
          "Cắt nhỏ một tờ giấy thành nhiều mảnh"
        ],
        answer: 2,
        explanation: "Khí $\\ce{CO2}$ trong hơi thở tác dụng với $\\ce{Ca(OH)2}$ tạo chất mới không tan là $\\ce{CaCO3}$ (vẩn đục trắng)."
      }
    },
    {
      title: "Bản chất Phản ứng hóa học & Năng lượng (Tỏa nhiệt / Thu nhiệt)",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 540 115" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <circle cx="50" cy="45" r="11" fill="#3b82f6"/><circle cx="72" cy="45" r="11" fill="#3b82f6"/>
            <circle cx="50" cy="75" r="11" fill="#3b82f6"/><circle cx="72" cy="75" r="11" fill="#3b82f6"/>
            <text x="108" y="65" font-size="16" font-weight="bold" fill="#334155">+</text>
            <circle cx="145" cy="60" r="15" fill="#ef4444"/><circle cx="174" cy="60" r="15" fill="#ef4444"/>
            <text x="218" y="65" font-size="18" font-weight="bold" fill="#15803d">→</text>
            <!-- 2 H2O -->
            <circle cx="290" cy="58" r="15" fill="#ef4444"/>
            <circle cx="272" cy="72" r="10" fill="#3b82f6"/><circle cx="308" cy="72" r="10" fill="#3b82f6"/>
            <circle cx="380" cy="58" r="15" fill="#ef4444"/>
            <circle cx="362" cy="72" r="10" fill="#3b82f6"/><circle cx="398" cy="72" r="10" fill="#3b82f6"/>
            <text x="440" y="54" font-size="11" font-weight="bold" fill="#1e293b">2H₂ + O₂ → 2H₂O</text>
            <text x="440" y="74" font-size="10" fill="#475569">Số nguyên tử H (4)</text>
            <text x="440" y="88" font-size="10" fill="#475569">và O (2) KHÔNG ĐỔI!</text>
          </svg>
        </div>
        <ul>
          <li>Trong phản ứng hóa học, chỉ có <strong>liên kết giữa các nguyên tử thay đổi</strong>, còn <strong>số lượng nguyên tử của mỗi nguyên tố giữ nguyên</strong> trước và sau phản ứng.</li>
          <li><strong>Phản ứng tỏa nhiệt:</strong> Giải phóng năng lượng dưới dạng nhiệt ra môi trường (đốt cháy nhiên liệu, tôi vôi $\\ce{CaO + H2O -> Ca(OH)2}$).</li>
          <li><strong>Phản ứng thu nhiệt:</strong> Hấp thụ năng lượng nhiệt từ môi trường (nung đá vôi $\\ce{CaCO3 ->[t^\\circ] CaO + CO2}$, quang hợp).</li>
        </ul>
      `,
      example: "Khi cho một viên sủi vitamin C vào cốc nước, thấy sủi bọt khí mạnh. Đây là biến đổi vật lý hay hóa học? <br/><em>Phân tích:</em> Viên sủi chứa acid (citric acid) và muối $\\ce{NaHCO3}$. Khi gặp nước, chúng phản ứng với nhau tạo ra chất mới là khí $\\ce{CO2}$ sủi bọt → <strong>Biến đổi hóa học</strong>."
    }
  ],
  questions: [
    { id: "w19_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Quá trình nào sau đây là biến đổi VẬT LÝ?",
      options: ["A. Đốt cháy cồn trong đèn cồn", "B. Nước đá tan chảy thành nước lỏng", "C. Cơm để lâu ngày bị ôi thiu", "D. Đinh sắt để ngoài mưa bị gỉ sét"],
      answer: 1, solution: "Nước đá tan chảy chỉ đổi thể rắn sang lỏng, không tạo chất mới." },
    { id: "w19_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong một phản ứng hóa học, đại lượng nào sau đây KHÔNG THAY ĐỔI?",
      options: ["A. Số lượng phân tử", "B. Liên kết giữa các nguyên tử", "C. Số nguyên tử của mỗi nguyên tố", "D. Tính chất của chất"],
      answer: 2, solution: "Trong phản ứng hóa học, số nguyên tử mỗi nguyên tố được bảo toàn." },
    { id: "w19_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất tham gia phản ứng (chất ban đầu) trong quá trình quang hợp của cây xanh là:",
      options: ["A. Tinh bột và Oxygen", "B. Carbon dioxide và Nước", "C. Glucose và Nước", "D. Oxygen và Nước"],
      answer: 1, solution: "Cây xanh hấp thụ $\\ce{CO2}$ và $\\ce{H2O}$ dưới ánh sáng tạo tinh bột và $\\ce{O2}$." },
    { id: "w19_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Phản ứng nào sau đây là phản ứng TỎA NHIỆT?",
      options: ["A. Nung đá vôi tạo vôi sống", "B. Đốt cháy khí gas ($\\ce{C3H8}, \\ce{C4H10}$) để đun nấu", "C. Điện phân nước", "D. Quang hợp của cây xanh"],
      answer: 1, solution: "Đốt cháy nhiên liệu giải phóng nhiệt lượng lớn ra môi trường." },
    { id: "w19_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi cho vôi sống ($\\ce{CaO}$) vào nước, nước nóng lên sôi sục tạo thành vôi tôi ($\\ce{Ca(OH)2}$). Phản ứng này thuộc loại:",
      options: ["A. Biến đổi vật lý", "B. Phản ứng thu nhiệt", "C. Phản ứng tỏa nhiệt", "D. Không có phản ứng"],
      answer: 2, solution: "Làm nước nóng lên chứng tỏ phản ứng tỏa nhiệt." },
    { id: "w19_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Dấu hiệu nào KHÔNG phải là dấu hiệu nhận biết phản ứng hóa học?",
      options: ["A. Xuất hiện kết tủa", "B. Có bọt khí thoát ra", "C. Kích thước viên phấn bị bẻ đôi nhỏ đi", "D. Có sự thay đổi màu sắc"],
      answer: 2, solution: "Bẻ đôi viên phấn chỉ đổi hình dạng (biến đổi vật lý)." },
    { id: "w19_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong phản ứng: $\\text{Kẽm} + \\text{Hydrochloric acid} \\to \\text{Zinc chloride} + \\text{Hydrogen}$, sản phẩm là:",
      options: ["A. Kẽm và Hydrochloric acid", "B. Zinc chloride và Hydrogen", "C. Chỉ có Hydrogen", "D. Chỉ có Kẽm"],
      answer: 1, solution: "Sản phẩm là các chất mới tạo thành ở vế phải." },
    { id: "w19_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Làm muối ăn từ nước biển bằng cách phơi nắng là biến đổi vật lý.", answer: true },
        { text: "Đun nóng đường đến khi chuyển thành màu đen và có mùi khét là biến đổi hóa học.", answer: true },
        { text: "Phản ứng thu nhiệt làm tăng nhiệt độ của môi trường xung quanh.", answer: false },
        { text: "Khi sắt tác dụng với lưu huỳnh tạo sắt(II) sulfide, số nguyên tử Fe trước và sau phản ứng bằng nhau.", answer: true }
      ],
      solution: "c) Sai vì phản ứng thu nhiệt hấp thụ nhiệt từ môi trường nên làm nhiệt độ môi trường giảm đi." },
    { id: "w19_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho các quá trình: (1) Sắt bị gỉ; (2) Nước bay hơi; (3) Nến cháy; (4) Nghiền nhỏ hạt tiêu; (5) Sữa bị chua. Có bao nhiêu quá trình là BIẾN ĐỔI HÓA HỌC?",
      answer: "3", tolerance: 0.1,
      solution: "3 biến đổi hóa học là: (1) Sắt gỉ, (3) Nến cháy, (5) Sữa chua." },
    { id: "w19_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong phản ứng giữa $2$ phân tử $\\ce{H2}$ và $1$ phân tử $\\ce{O2}$ tạo thành $2$ phân tử $\\ce{H2O}$, tổng số nguyên tử tham gia phản ứng là bao nhiêu?",
      answer: "6", tolerance: 0.1,
      solution: "$2 \\times 2\\ (\\text{H}) + 1 \\times 2\\ (\\text{O}) = 6$ nguyên tử." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w19_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Khi đốt nóng hỗn hợp bột sắt (Fe) và bột lưu huỳnh (S) tạo thành chất rắn màu đen là Iron(II) sulfide ($\\ce{FeS}$). Nhận xét nào sau đây ĐÚNG?",
      options: [
        "A. $\\ce{FeS}$ vẫn bị nam châm hút mạnh như bột sắt ban đầu.",
        "B. Đây chỉ là quá trình trộn lẫn vật lý.",
        "C. $\\ce{FeS}$ là chất mới, không bị nam châm hút và có tính chất khác hẳn Fe và S.",
        "D. Số nguyên tử S bị mất đi một nửa."
      ],
      answer: 2, solution: "Sản phẩm $\\ce{FeS}$ là hợp chất mới có tính chất khác hoàn toàn Fe và S." },
    { id: "w19_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong quá trình đốt một cây nến (paraffin), xảy ra các hiện tượng: (1) Sáp nến nóng chảy thành lỏng; (2) Sáp lỏng thấm lên bấc và hóa hơi; (3) Hơi sáp cháy tạo $\\ce{CO2}$ và hơi nước. Nhận định nào đúng?",
      options: [
        "A. Cả (1), (2), (3) đều là biến đổi hóa học.",
        "B. (1), (2) là biến đổi vật lý; (3) là biến đổi hóa học.",
        "C. (1) là vật lý; (2), (3) là hóa học.",
        "D. Cả (1), (2), (3) đều là biến đổi vật lý."
      ],
      answer: 1, solution: "Nóng chảy và hóa hơi sáp chỉ đổi thể (vật lý); cháy tạo $\\ce{CO2}$ và $\\ce{H2O}$ là biến đổi hóa học." },
    { id: "w19_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét phản ứng nung đá vôi trong lò: $\\text{Calcium carbonate} \\xrightarrow{t^\\circ} \\text{Calcium oxide} + \\text{Carbon dioxide}$:",
      statements: [
        { text: "Đây là phản ứng thu nhiệt (phải cung cấp nhiệt liên tục).", answer: true },
        { text: "Nếu ngừng cung cấp nhiệt, phản ứng sẽ tự động dừng lại.", answer: true },
        { text: "Chất tham gia phản ứng là Calcium oxide.", answer: false },
        { text: "Khí sinh ra làm đục nước vôi trong.", answer: true }
      ],
      solution: "c) Sai: Chất tham gia là Calcium carbonate ($\\ce{CaCO3}$), còn Calcium oxide ($\\ce{CaO}$) là sản phẩm." },
    { id: "w19_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Đốt cháy hoàn toàn $1$ phân tử khí methane ($\\ce{CH4}$) cần $2$ phân tử $\\ce{O2}$, thu được $1$ phân tử $\\ce{CO2}$ và $x$ phân tử $\\ce{H2O}$. Dựa vào bảo toàn số nguyên tử H, tìm $x$.",
      answer: "2", tolerance: 0.1,
      solution: "Vế trái có $4$ nguyên tử H $\\Rightarrow$ vế phải phải có $2$ phân tử $\\ce{H2O}$ ($x = 2$)." },
    { id: "w19_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Khi cho $6,5\\text{ g}$ kẽm phản ứng với $7,3\\text{ g}$ acid HCl thu được $13,6\\text{ g}$ muối $\\ce{ZnCl2}$ và khí $\\ce{H2}$. Theo kinh nghiệm thực tế (khối lượng chất tham gia = sản phẩm), khối lượng khí $\\ce{H2}$ bay ra là bao nhiêu gam?",
      answer: "0.2", tolerance: 0.02,
      solution: "$6,5 + 7,3 - 13,6 = 0,2\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w19_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Phân tích rõ các giai đoạn biến đổi vật lý và biến đổi hóa học xảy ra trong quá trình <strong>nấu rượu gạo truyền thống</strong> (gồm các bước: nấu chín cơm nếp → rắc men ủ lên men thành rượu → đun chưng cất lấy rượu lỏng).",
      solution: "• Nấu chín cơm: Tinh bột hồ hóa/chín (biến đổi hóa học/sinh hóa nhẹ). • Ủ men rượu: Tinh bột chuyển hóa thành glucose rồi lên men thành ethanol và khí $\\ce{CO2}$ (biến đổi hóa học, tạo chất mới). • Chưng cất rượu: Đun nóng cho ethanol bay hơi rồi làm lạnh ngưng tụ thành lỏng (biến đổi vật lý, không tạo chất mới).",
      rubric: [
        { step: "Chỉ ra quá trình lên men tạo ethanol và $\\ce{CO2}$ là biến đổi hóa học", points: 0.5 },
        { step: "Chỉ ra quá trình chưng cất (bay hơi – ngưng tụ) là biến đổi vật lý", points: 0.5 }
      ] },
    { id: "w19_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong y tế có 'túi chườm nóng tức thì' (chứa bột sắt, than hoạt tính, muối ăn tiếp xúc với không khí) và 'túi chườm lạnh tức thì' (chứa muối $\\ce{NH4NO3}$ và túi nước; khi bóp vỡ túi nước để muối hòa tan thì túi lạnh buốt). Hãy giải thích cơ chế nhiệt của 2 loại túi này.",
      solution: "• Túi chườm nóng: Bột sắt bị oxi hóa (gỉ nhanh nhờ xúc tác muối và than) là phản ứng/quá trình TỎA NHIỆT mạnh làm ấm túi. • Túi chườm lạnh: Quá trình hòa tan muối $\\ce{NH4NO3}$ trong nước là quá trình THU NHIỆT, hấp thụ nhiệt từ vùng da tiếp xúc nên làm lạnh nhanh.",
      rubric: [
        { step: "Giải thích túi nóng dựa vào quá trình oxi hóa sắt TỎA NHIỆT", points: 0.5 },
        { step: "Giải thích túi lạnh dựa vào quá trình hòa tan $\\ce{NH4NO3}$ THU NHIỆT", points: 0.5 }
      ] },
    { id: "w19_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một học sinh nói: <em>'Mọi quá trình đun nóng đều là biến đổi hóa học vì có sự thay đổi nhiệt độ'</em>. Nhận định đó đúng hay sai? Lấy 2 ví dụ chứng minh.",
      solution: "Nhận định đó SAI. Đun nóng có thể chỉ gây biến đổi vật lý nếu không tạo chất mới (ví dụ: đun nước sôi hóa hơi, đun nóng chảy sáp nến hoặc đường). Đun nóng chỉ là biến đổi hóa học khi tạo thành chất mới (ví dụ: đun đường bị cháy khét thành than đen, nung đá vôi tạo vôi sống và $\\ce{CO2}$).",
      rubric: [
        { step: "Khẳng định SAI và nêu tiêu chí có tạo chất mới hay không", points: 0.5 },
        { step: "Lấy đúng 1 ví dụ đun nóng là biến đổi vật lý và 1 ví dụ là biến đổi hóa học", points: 0.5 }
      ] },
    { id: "w19_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vì sao phản ứng đốt cháy than ($\\ce{C + O2 ->[t^\\circ] CO2}$) là phản ứng tỏa nhiệt mạnh, nhưng ban đầu ta vẫn phải dùng lửa mồi để nhóm bếp than?",
      solution: "Ở nhiệt độ thường, các phân tử $\\ce{O2}$ và nguyên tử C chưa đủ năng lượng (chưa đạt năng lượng hoạt hóa) để phá vỡ liên kết cũ và va chạm hiệu quả. Lửa mồi cung cấp nhiệt lượng ban đầu để phản ứng khởi phát; sau khi cháy, nhiệt lượng tỏa ra từ phản ứng đủ để duy trì sự cháy liên tục.",
      rubric: [
        { step: "Giải thích cần cung cấp nhiệt ban đầu để đạt nhiệt độ bắt cháy / khởi phát phản ứng", points: 0.5 },
        { step: "Nêu được sau khi khởi phát, phản ứng tự tỏa nhiệt để duy trì liên tục", points: 0.5 }
      ] },
    { id: "w19_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một phản ứng xảy ra theo sơ đồ: $2$ phân tử $\\ce{X2}$ tác dụng với $1$ phân tử $\\ce{Y2}$ tạo thành $2$ phân tử hợp chất A. Biết trong 1 phân tử A có $2$ nguyên tử X và $1$ nguyên tử Y. Hãy viết công thức của A và kiểm tra sự bảo toàn số nguyên tử mỗi nguyên tố.",
      solution: "Công thức của A là $\\ce{X2Y}$. Trước phản ứng: $2$ phân tử $\\ce{X2}$ có $4$ nguyên tử X; $1$ phân tử $\\ce{Y2}$ có $2$ nguyên tử Y. Sau phản ứng: $2$ phân tử $\\ce{X2Y}$ có $2 \\times 2 = 4$ nguyên tử X và $2 \\times 1 = 2$ nguyên tử Y. Số nguyên tử X và Y đều được bảo toàn.",
      rubric: [
        { step: "Viết đúng công thức $\\ce{X2Y}$", points: 0.5 },
        { step: "Chứng minh số nguyên tử X ($4$) và Y ($2$) trước và sau phản ứng bằng nhau", points: 0.5 }
      ] }
  ]
};
