window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[13] = {
  week: 13,
  title: "Liên kết cộng hóa trị & So sánh tính chất vật lý",
  objectives: [
    "Hiểu bản chất liên kết cộng hóa trị: Được tạo nên bởi một hay nhiều đôi electron dùng chung giữa hai nguyên tử (thường là phi kim với phi kim).",
    "Vẽ được công thức electron / công thức cấu tạo đơn giản của $\\ce{H2}$, $\\ce{Cl2}$, $\\ce{O2}$, $\\ce{N2}$, $\\ce{H2O}$, $\\ce{NH3}$, $\\ce{CH4}$, $\\ce{CO2}$.",
    "So sánh được tính chất vật lý giữa chất cộng hóa trị và chất ion."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 13 (A4). Dùng sơ đồ chấm electron trong bài giảng.",
    sessions: [
      {
        name: "Buổi 1: Liên kết cộng hóa trị & Đôi electron dùng chung",
        guide: "Giải thích: Khi 2 phi kim gặp nhau, cả 2 đều thiếu electron và muốn nhận thêm → không bên nào nhường hẳn được, nên chúng 'góp chung' electron để cùng đạt 8e (riêng H đạt 2e giống He). 1 cặp e chung = liên kết đơn (-); 2 cặp = liên kết đôi (=); 3 cặp = liên kết ba (≡).",
        pitfalls: "Học sinh hay đếm nhầm số electron của Hydrogen thành 8e (thực tế H chỉ cần đạt 2e ở lớp 1 giống Helium là bền vững!)."
      },
      {
        name: "Buổi 2: So sánh Chất ion vs Chất cộng hóa trị",
        guide: "Lập bảng so sánh 2 loại chất: Chất cộng hóa trị (như $\\ce{CO2, H2O, CH4}$, đường ăn) thường ở thể khí/lỏng hoặc rắn dễ nóng chảy, không dẫn điện khi tan trong nước (trừ một số acid như $\\ce{HCl}$).",
        pitfalls: "Nhầm lẫn rằng mọi chất cộng hóa trị đều không tan trong nước (thực tế đường, cồn, $\\ce{HCl}$, $\\ce{NH3}$ tan rất tốt trong nước!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Ba rem HSG",
        guide: "Rèn vẽ công thức chấm electron và phân biệt nhanh chất ion / cộng hóa trị từ dữ kiện nhiệt độ nóng chảy và độ dẫn điện (dạng bài thực nghiệm HSG).",
        pitfalls: "Quên viết các cặp electron chưa tham gia liên kết (cặp e tự do) trên nguyên tử O, N, Cl khi vẽ công thức electron."
      }
    ]
  },
  lecture: [
    {
      title: "Bản chất Liên kết cộng hóa trị & Sơ đồ góp chung Electron",
      content: `
        <p><strong>Liên kết cộng hóa trị</strong> được hình thành giữa các nguyên tử (thường là <strong>phi kim với phi kim</strong>) bằng cách <strong>góp chung các đôi electron</strong> để mỗi nguyên tử đều đạt cấu hình bền vững ($2e$ với H; $8e$ với các nguyên tố khác).</p>
        <div style="text-align:center;margin:12px 0;">
          <svg viewBox="0 0 560 130" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <!-- H2 -->
            <circle cx="65" cy="58" r="24" fill="none" stroke="#2563eb" stroke-width="1.8"/>
            <circle cx="95" cy="58" r="24" fill="none" stroke="#2563eb" stroke-width="1.8"/>
            <text x="53" y="62" font-size="11" font-weight="bold" fill="#1e40af">H</text>
            <text x="103" y="62" font-size="11" font-weight="bold" fill="#1e40af">H</text>
            <circle cx="80" cy="53" r="3" fill="#dc2626"/><circle cx="80" cy="63" r="3" fill="#dc2626"/>
            <text x="80" y="106" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">H₂ (H–H: 1 cặp e chung)</text>

            <!-- H2O -->
            <circle cx="265" cy="58" r="28" fill="none" stroke="#dc2626" stroke-width="1.8"/>
            <circle cx="232" cy="58" r="18" fill="none" stroke="#2563eb" stroke-width="1.5"/>
            <circle cx="298" cy="58" r="18" fill="none" stroke="#2563eb" stroke-width="1.5"/>
            <text x="265" y="62" font-size="12" font-weight="bold" text-anchor="middle" fill="#b91c1c">O</text>
            <text x="223" y="62" font-size="10" font-weight="bold" fill="#1e40af">H</text>
            <text x="302" y="62" font-size="10" font-weight="bold" fill="#1e40af">H</text>
            <circle cx="244" cy="54" r="2.8" fill="#16a34a"/><circle cx="244" cy="62" r="2.8" fill="#16a34a"/>
            <circle cx="286" cy="54" r="2.8" fill="#16a34a"/><circle cx="286" cy="62" r="2.8" fill="#16a34a"/>
            <text x="265" y="106" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">H₂O (H–O–H: 2 liên kết đơn)</text>

            <!-- N2 -->
            <circle cx="445" cy="58" r="26" fill="none" stroke="#7c3aed" stroke-width="1.8"/>
            <circle cx="483" cy="58" r="26" fill="none" stroke="#7c3aed" stroke-width="1.8"/>
            <text x="431" y="62" font-size="11" font-weight="bold" fill="#5b21b6">N</text>
            <text x="493" y="62" font-size="11" font-weight="bold" fill="#5b21b6">N</text>
            <circle cx="464" cy="48" r="2.8" fill="#dc2626"/><circle cx="464" cy="58" r="2.8" fill="#dc2626"/><circle cx="464" cy="68" r="2.8" fill="#dc2626"/>
            <text x="464" y="106" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e293b">N₂ (N≡N: liên kết ba)</text>
          </svg>
        </div>
        <ul>
          <li><strong>1 cặp e chung</strong> $\\rightarrow$ Liên kết đơn (ví dụ: $\\ce{H-H}$, $\\ce{Cl-Cl}$, $\\ce{H-O-H}$).</li>
          <li><strong>2 cặp e chung</strong> $\\rightarrow$ Liên kết đôi (ví dụ: $\\ce{O=O}$, $\\ce{O=C=O}$).</li>
          <li><strong>3 cặp e chung</strong> $\\rightarrow$ Liên kết ba (ví dụ: $\\ce{N#N}$ — cực kỳ bền nên $\\ce{N2}$ rất trơ ở nhiệt độ thường!).</li>
        </ul>
      `,
      checkpoint: {
        question: "Trong phân tử Carbon dioxide ($\\ce{CO2}$: $\\ce{O=C=O}$), giữa nguyên tử C và mỗi nguyên tử O có bao nhiêu cặp electron dùng chung?",
        options: ["1 cặp", "2 cặp", "3 cặp", "4 cặp"],
        answer: 1,
        explanation: "Mỗi liên kết đôi ($=$) ứng với 2 cặp electron dùng chung."
      }
    },
    {
      title: "So sánh Hợp chất Ion và Hợp chất Cộng hóa trị",
      content: `
        <table class="std-table">
          <thead><tr><th>Tiêu chí</th><th>Hợp chất Ion</th><th>Chất Cộng hóa trị</th></tr></thead>
          <tbody>
            <tr><td><strong>Thành phần</strong></td><td>Kim loại điển hình + Phi kim</td><td>Phi kim + Phi kim</td></tr>
            <tr><td><strong>Cách tạo liên kết</strong></td><td>Cho – nhận electron (hút tĩnh điện)</td><td>Góp chung đôi electron</td></tr>
            <tr><td><strong>Trạng thái ($25^\\circ\\text{C}$)</strong></td><td>Luôn là <strong>chất rắn</strong></td><td>Có thể là <strong>rắn, lỏng hoặc khí</strong></td></tr>
            <tr><td><strong>$T_{\\text{nc}}$ và $T_{\\text{sôi}}$</strong></td><td><strong>Rất cao</strong> (thường $> 500^\\circ\\text{C}$)</td><td><strong>Thấp</strong> (dễ bay hơi, dễ nóng chảy)</td></tr>
            <tr><td><strong>Tính dẫn điện</strong></td><td>Dẫn điện khi tan trong nước hoặc nóng chảy</td><td>Thường <strong>không dẫn điện</strong> (cả rắn, lỏng, dung dịch đường/cồn)</td></tr>
          </tbody>
        </table>
      `,
      example: "Tại sao khí Nitrogen ($\\ce{N2}$) chiếm $78\\%$ không khí nhưng rất khó tham gia phản ứng ở nhiệt độ thường? <br/><em>Phân tích:</em> Trong phân tử $\\ce{N2}$, hai nguyên tử N góp chung tới 3 cặp electron tạo thành <strong>liên kết ba ($\\ce{N#N}$)</strong> có năng lượng liên kết cực lớn, rất khó bị phá vỡ ở nhiệt độ thường."
    }
  ],
  questions: [
    { id: "w13_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Liên kết cộng hóa trị được hình thành bằng cách nào?",
      options: ["A. Nhường hẳn electron", "B. Lực hút tĩnh điện giữa hai ion trái dấu", "C. Dùng chung một hay nhiều cặp electron", "D. Trao đổi proton"],
      answer: 2, solution: "Liên kết cộng hóa trị tạo bởi các cặp electron dùng chung." },
    { id: "w13_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây có liên kết cộng hóa trị?",
      options: ["A. $\\ce{NaCl}$", "B. $\\ce{MgO}$", "C. $\\ce{H2O}$", "D. $\\ce{KBr}$"],
      answer: 2, solution: "$\\ce{H2O}$ tạo bởi hai phi kim H và O nên có liên kết cộng hóa trị." },
    { id: "w13_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong phân tử $\\ce{H2}$, hai nguyên tử Hydrogen liên kết với nhau bằng:",
      options: ["A. Liên kết ion", "B. 1 cặp electron dùng chung (liên kết đơn)", "C. 2 cặp electron dùng chung", "D. 3 cặp electron dùng chung"],
      answer: 1, solution: "Mỗi nguyên tử H góp 1e tạo thành 1 cặp e chung ($\\ce{H-H}$)." },
    { id: "w13_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Phân tử nào sau đây có chứa liên kết ba ($\\equiv$)?",
      options: ["A. $\\ce{O2}$", "B. $\\ce{N2}$", "C. $\\ce{Cl2}$", "D. $\\ce{H2O}$"],
      answer: 1, solution: "Nitrogen ($2/5$) thiếu 3e nên 2 nguyên tử N góp chung 3 cặp electron tạo $\\ce{N#N}$." },
    { id: "w13_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây tồn tại ở thể khí ở điều kiện thường và có liên kết cộng hóa trị?",
      options: ["A. $\\ce{CaO}$", "B. $\\ce{CH4}$", "C. $\\ce{Na2O}$", "D. $\\ce{AlCl3}$"],
      answer: 1, solution: "Methane ($\\ce{CH4}$) là chất khí cộng hóa trị." },
    { id: "w13_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong phân tử $\\ce{O2}$, hai nguyên tử Oxygen góp chung bao nhiêu electron tất cả (tổng số e của các cặp dùng chung)?",
      options: ["A. 2 electron", "B. 4 electron", "C. 6 electron", "D. 8 electron"],
      answer: 1, solution: "Liên kết đôi $\\ce{O=O}$ có 2 cặp e dùng chung = 4 electron." },
    { id: "w13_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch nào sau đây KHÔNG dẫn điện?",
      options: ["A. Nước muối ($\\ce{NaCl}$)", "B. Nước đường ($\\ce{C12H22O11}$)", "C. Dung dịch $\\ce{KCl}$", "D. Dung dịch $\\ce{MgCl2}$"],
      answer: 1, solution: "Đường là hợp chất cộng hóa trị, khi tan trong nước vẫn tồn tại dạng phân tử trung hòa nên không dẫn điện." },
    { id: "w13_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về liên kết cộng hóa trị:",
      statements: [
        { text: "Liên kết cộng hóa trị thường gặp giữa các nguyên tử phi kim.", answer: true },
        { text: "Các chất cộng hóa trị thường có nhiệt độ sôi thấp hơn hợp chất ion.", answer: true },
        { text: "Trong phân tử $\\ce{NH3}$, nguyên tử Nitrogen liên kết với 3 nguyên tử H bằng 3 liên kết đơn.", answer: true },
        { text: "Tất cả các chất cộng hóa trị đều không tan trong nước.", answer: false }
      ],
      solution: "d) Sai vì đường, ethanol, $\\ce{NH3}$ là chất cộng hóa trị nhưng tan rất tốt trong nước." },
    { id: "w13_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong một phân tử Methane ($\\ce{CH4}$) có tất cả bao nhiêu liên kết đơn $\\ce{C-H}$?",
      answer: "4", tolerance: 0.1,
      solution: "Carbon góp 4e với 4 nguyên tử H tạo 4 liên kết đơn $\\ce{C-H}$." },
    { id: "w13_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Trong phân tử $\\ce{CO2}$ ($\\ce{O=C=O}$), có tổng cộng bao nhiêu cặp electron dùng chung giữa nguyên tử C và 2 nguyên tử O?",
      answer: "4", tolerance: 0.1,
      solution: "Mỗi nối đôi có 2 cặp → 2 nối đôi có 4 cặp electron dùng chung." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w13_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho bảng số liệu nhiệt độ nóng chảy của 2 chất A và B: Chất A ($T_{\\text{nc}} = 801^\\circ\\text{C}$, dung dịch dẫn điện tốt); Chất B ($T_{\\text{nc}} = -114^\\circ\\text{C}$, dung dịch không dẫn điện). Nhận xét nào đúng?",
      options: [
        "A. A là chất cộng hóa trị, B là chất ion.",
        "B. A là chất ion, B là chất cộng hóa trị.",
        "C. Cả A và B đều là chất ion.",
        "D. Cả A và B đều là chất cộng hóa trị."
      ],
      answer: 1, solution: "$T_{\\text{nc}}$ cao + dung dịch dẫn điện là đặc trưng của chất ion (A: $\\ce{NaCl}$); $T_{\\text{nc}}$ thấp + không dẫn điện là chất cộng hóa trị (B: ethanol)." },
    { id: "w13_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nguyên tử Chlorine ($Z = 17$, có 7e lớp ngoài cùng). Khi 2 nguyên tử Cl liên kết tạo phân tử $\\ce{Cl2}$, mỗi nguyên tử Cl còn lại bao nhiêu cặp electron lớp ngoài cùng KHÔNG tham gia liên kết?",
      options: ["A. 1 cặp", "B. 2 cặp", "C. 3 cặp", "D. 4 cặp"],
      answer: 2, solution: "Mỗi Cl có 7e ngoài cùng, dùng 1e để góp chung → còn 6e (= 3 cặp e tự do) chưa tham gia liên kết." },
    { id: "w13_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét phân tử Ammonia ($\\ce{NH3}$, biết N có $Z=7$, H có $Z=1$):",
      statements: [
        { text: "Nguyên tử N góp chung với mỗi nguyên tử H một cặp electron.", answer: true },
        { text: "Sau khi liên kết, nguyên tử N có đủ 8 electron ở lớp ngoài cùng.", answer: true },
        { text: "Trên nguyên tử N còn 1 cặp electron chưa tham gia liên kết.", answer: true },
        { text: "Liên kết trong phân tử $\\ce{NH3}$ là liên kết ion.", answer: false }
      ],
      solution: "d) Sai: N và H đều là phi kim nên tạo liên kết cộng hóa trị." },
    { id: "w13_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trong phân tử $\\ce{C2H4}$ (Ethylene: $\\ce{H2C=CH2}$), có tổng cộng bao nhiêu cặp electron dùng chung trong toàn phân tử?",
      answer: "6", tolerance: 0.1,
      solution: "4 liên kết đơn $\\ce{C-H}$ (4 cặp) + 1 liên kết đôi $\\ce{C=C}$ (2 cặp) = 6 cặp electron dùng chung." },
    { id: "w13_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho các chất: $\\ce{K2O, HCl, MgCl2, CO2, NH3, CaF2}$. Có bao nhiêu chất thuộc loại hợp chất cộng hóa trị?",
      answer: "3", tolerance: 0.1,
      solution: "3 chất cộng hóa trị là $\\ce{HCl, CO2, NH3}$. (3 chất còn lại là hợp chất ion)." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w13_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Vẽ/Mô tả sự hình thành liên kết cộng hóa trị trong phân tử $\\ce{H2O}$ ($Z_{\\text{H}}=1, Z_{\\text{O}}=8$) và $\\ce{CO2}$ ($Z_{\\text{C}}=6, Z_{\\text{O}}=8$). Chỉ rõ số cặp electron dùng chung và số cặp electron tự do trên mỗi nguyên tử O.",
      solution: "• Trong $\\ce{H2O}$: O ($6e$ ngoài cùng) góp chung 2e với 2 nguyên tử H (mỗi H góp 1e) tạo 2 liên kết đơn $\\ce{H-O-H}$ (2 cặp e dùng chung); trên O còn lại 2 cặp e tự do. • Trong $\\ce{CO2}$: C ($4e$ ngoài cùng) góp chung với mỗi nguyên tử O ($6e$) 2 cặp electron tạo 2 liên kết đôi $\\ce{O=C=O}$ (4 cặp e dùng chung); trên mỗi O còn lại 2 cặp e tự do.",
      rubric: [
        { step: "Mô tả đúng cấu tạo $\\ce{H2O}$ (2 cặp e chung, 2 cặp e tự do trên O)", points: 0.5 },
        { step: "Mô tả đúng cấu tạo $\\ce{CO2}$ (4 cặp e chung dạng $\\ce{O=C=O}$, mỗi O còn 2 cặp e tự do)", points: 0.5 }
      ] },
    { id: "w13_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 3 chất rắn màu trắng đựng trong 3 lọ riêng biệt: (1) Đường mía $\\ce{C12H22O11}$, (2) Muối ăn $\\ce{NaCl}$, (3) Bột đá vôi $\\ce{CaCO3}$. Trình bày cách nhận biết 3 chất trên chỉ bằng nước và dụng cụ thử điện.",
      solution: "B1: Lấy mẫu thử cho vào 3 cốc nước khuấy đều: mẫu không tan lắng xuống đáy là bột đá vôi ($\\ce{CaCO3}$). B2: Hai mẫu tan hết tạo dung dịch trong suốt là đường mía và muối ăn. Dùng dụng cụ thử điện nhúng vào 2 dung dịch: dung dịch làm bóng đèn sáng (dẫn điện) là muối ăn $\\ce{NaCl}$ (hợp chất ion); dung dịch không dẫn điện là đường mía (chất cộng hóa trị).",
      rubric: [
        { step: "Hòa tan vào nước nhận biết được $\\ce{CaCO3}$ (không tan)", points: 0.5 },
        { step: "Thử tính dẫn điện của 2 dung dịch: $\\ce{NaCl}$ dẫn điện, đường không dẫn điện", points: 0.5 }
      ] },
    { id: "w13_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong phân tử hợp chất khí $\\ce{XY3}$ (tạo bởi 2 phi kim X và Y), tổng số proton là $10$. Hãy xác định công thức phân tử của $\\ce{XY3}$ và cho biết có bao nhiêu liên kết đơn trong phân tử này.",
      solution: "Ta có $Z_X + 3Z_Y = 10$. Vì $Z_Y \\ge 1$: nếu $Z_Y = 1$ (H) $\\Rightarrow Z_X = 7$ (Nitrogen) $\\Rightarrow$ Công thức $\\ce{NH3}$ (thỏa mãn!). Nếu $Z_Y \\ge 2 \\Rightarrow Z_X \\le 4$ (không có phi kim nào hóa trị III với $Z \\le 4$). Vậy hợp chất là $\\ce{NH3}$ (Ammonia), có 3 liên kết đơn $\\ce{N-H}$.",
      rubric: [
        { step: "Lập phương trình $Z_X + 3Z_Y = 10$ và biện luận tìm đúng $Z_Y = 1$ (H), $Z_X = 7$ (N)", points: 0.5 },
        { step: "Kết luận $\\ce{NH3}$ và có 3 liên kết đơn", points: 0.5 }
      ] },
    { id: "w13_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Giải thích vì sao hợp chất $\\ce{NaOH}$ (Sodium hydroxide) lại chứa đồng thời cả <strong>liên kết ion</strong> và <strong>liên kết cộng hóa trị</strong>?",
      solution: "Trong $\\ce{NaOH}$: giữa nguyên tử kim loại Na ($\\ce{Na+}$) và nhóm hydroxide ($\\ce{OH-}$) là <strong>liên kết ion</strong> (lực hút tĩnh điện). Còn bên trong nhóm $\\ce{OH-}$, nguyên tử phi kim O liên kết với nguyên tử phi kim H bằng <strong>liên kết cộng hóa trị</strong> (góp chung 1 cặp electron).",
      rubric: [
        { step: "Chỉ ra liên kết ion giữa $\\ce{Na+}$ và nhóm $\\ce{OH-}$", points: 0.5 },
        { step: "Chỉ ra liên kết cộng hóa trị giữa O và H trong nhóm $\\ce{OH-}$", points: 0.5 }
      ] },
    { id: "w13_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho biết năng lượng liên kết của $\\ce{O2}$ ($\\ce{O=O}$) là $498\\text{ kJ/mol}$ và của $\\ce{N2}$ ($\\ce{N#N}$) là $945\\text{ kJ/mol}$. Giải thích sự chênh lệch này và liên hệ tới độ bền của hai khí trong không khí.",
      solution: "$\\ce{N2}$ có liên kết ba (3 cặp electron dùng chung) còn $\\ce{O2}$ có liên kết đôi (2 cặp electron dùng chung). Liên kết ba bền vững hơn liên kết đôi rất nhiều nên năng lượng cần để phá vỡ $\\ce{N2}$ lớn gần gấp đôi $\\ce{O2}$. Vì vậy trong không khí, $\\ce{O2}$ hoạt động hóa học mạnh (duy trì sự cháy, hô hấp), còn $\\ce{N2}$ rất trơ ở nhiệt độ thường.",
      rubric: [
        { step: "So sánh cấu tạo: $\\ce{N2}$ là liên kết ba, $\\ce{O2}$ là liên kết đôi", points: 0.5 },
        { step: "Giải thích liên kết ba bền hơn nhiều → $\\ce{N2}$ trơ hơn $\\ce{O2}$ ở nhiệt độ thường", points: 0.5 }
      ] }
  ]
};
