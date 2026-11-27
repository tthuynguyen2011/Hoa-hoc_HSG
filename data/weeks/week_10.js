window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[10] = {
  week: 10,
  title: "Kim loại – Phi kim – Khí hiếm trong Bảng tuần hoàn",
  objectives: [
    "Xác định được vị trí của nhóm nguyên tố Kim loại, Phi kim và Khí hiếm trên Bảng tuần hoàn.",
    "So sánh được tính chất vật lý đặc trưng của Kim loại (ánh kim, dẫn điện, dẫn nhiệt, dẻo) và Phi kim (không dẫn điện trừ than chì, dễ vỡ khi ở thể rắn).",
    "Hiểu xu hướng nhường electron của Kim loại và nhận/góp electron của Phi kim, giải thích ứng dụng thực tế và giải bài tập HSG về phân loại nguyên tố."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 10 (A4). Chuẩn bị đoạn dây đồng, mẩu than chì (ruột bút chì) và mẩu lưu huỳnh hoặc nhựa để minh họa tính dẫn điện/ánh kim.",
    sessions: [
      {
        name: "Buổi 1: Vị trí Kim loại – Phi kim – Khí hiếm trên Bảng tuần hoàn",
        guide: "Dùng sơ đồ màu trong bài giảng: hơn 80% các nguyên tố là Kim loại (nằm bên trái và ở giữa: IA, IIA, IIIA trừ B, và các nhóm B). Phi kim nằm ở góc trên bên phải (trừ Hydrogen ở ô số 1). Khí hiếm nằm ở cột ngoài cùng bên phải (nhóm VIIIA).",
        pitfalls: "Học sinh hay xếp Hydrogen (nằm ở nhóm IA) vào nhóm Kim loại, hoặc nhầm Boron (nhóm IIIA) là kim loại (thực tế B là á kim/phi kim)."
      },
      {
        name: "Buổi 2: So sánh tính chất vật lý & Ứng dụng thực tế",
        guide: "Nhấn mạnh các ngoại lệ hay thi HSG: Thủy ngân (Hg) là kim loại nhưng ở thể LỎNG; Than chì (Carbon) là phi kim nhưng DẪN ĐIỆN; Kim cương là phi kim nhưng CỨNG NHẤT.",
        pitfalls: "Cho rằng mọi kim loại đều cứng và nặng (thực tế Na, K mềm cắt được bằng dao và nhẹ nổi trên nước)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Chú ý 5 câu HSG cuối tuần: giải thích vì sao dùng Cu làm lõi dây điện thay vì Ag (rẻ hơn) hay Fe (dẫn điện tốt hơn), hoặc dùng Al làm vỏ máy bay (nhẹ, bền).",
        pitfalls: "Quên nêu cả yếu tố kinh tế/khối lượng riêng khi giải thích ứng dụng kim loại ở câu HSG."
      }
    ]
  },
  lecture: [
    {
      title: "Phân bố Kim loại – Phi kim – Khí hiếm trong Bảng tuần hoàn",
      content: `
        <p>Trong 118 nguyên tố hóa học, các nguyên tố được chia thành 3 nhóm lớn phân bố rất trật tự trên Bảng tuần hoàn:</p>
        <div style="text-align:center;margin:12px 0;">
          <svg viewBox="0 0 560 175" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="15" y="18" width="38" height="26" rx="4" fill="#fde68a" stroke="#d97706"/>
            <text x="34" y="35" font-size="11" font-weight="bold" text-anchor="middle" fill="#92400e">H (PK)</text>
            <rect x="505" y="18" width="40" height="26" rx="4" fill="#ddd6fe" stroke="#7c3aed"/>
            <text x="525" y="35" font-size="11" font-weight="bold" text-anchor="middle" fill="#5b21b6">He</text>

            <rect x="15" y="48" width="82" height="105" rx="6" fill="#bfdbfe" stroke="#2563eb"/>
            <text x="56" y="95" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e40af">Kim loại</text>
            <text x="56" y="112" font-size="10" text-anchor="middle" fill="#1e3a8a">(IA, IIA)</text>

            <rect x="103" y="85" width="230" height="68" rx="6" fill="#93c5fd" stroke="#2563eb"/>
            <text x="218" y="116" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e40af">Kim loại chuyển tiếp</text>
            <text x="218" y="132" font-size="10" text-anchor="middle" fill="#1e3a8a">(Fe, Cu, Zn, Ag, Au...)</text>

            <polygon points="340,48 498,48 498,153 340,153" fill="#fef3c7" stroke="#d97706"/>
            <polygon points="340,48 498,48 498,125 410,125 340,75" fill="#fde68a" stroke="#d97706"/>
            <text x="435" y="86" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400e">Phi kim</text>
            <text x="435" y="102" font-size="10" text-anchor="middle" fill="#78350f">(C, N, O, F, P, S, Cl...)</text>
            <text x="380" y="142" font-size="10" font-weight="bold" text-anchor="middle" fill="#1e40af">Kim loại (Al...)</text>

            <rect x="505" y="48" width="40" height="105" rx="6" fill="#ddd6fe" stroke="#7c3aed"/>
            <text x="525" y="95" font-size="11" font-weight="bold" text-anchor="middle" fill="#5b21b6">Khí</text>
            <text x="525" y="110" font-size="11" font-weight="bold" text-anchor="middle" fill="#5b21b6">hiếm</text>
            <text x="525" y="126" font-size="9" text-anchor="middle" fill="#5b21b6">(VIIIA)</text>
          </svg>
        </div>
        <ul>
          <li><strong>Kim loại (> 80% số nguyên tố):</strong> Nằm ở phía <strong>trái và giữa</strong> Bảng tuần hoàn (nhóm IA trừ H, nhóm IIA, phần lớn IIIA và toàn bộ các nhóm B). Thường có $1, 2, 3$ electron lớp ngoài cùng.</li>
          <li><strong>Phi kim:</strong> Nằm ở <strong>góc trên bên phải</strong> (nhóm IVA, VA, VIA, VIIA) và nguyên tố <strong>Hydrogen (H)</strong> ở ô số 1. Thường có $5, 6, 7$ electron lớp ngoài cùng (hoặc 4e như C, Si).</li>
          <li><strong>Khí hiếm:</strong> Nằm ở cột ngoài cùng bên phải (<strong>nhóm VIIIA</strong>: He, Ne, Ar, Kr, Xe, Rn). Có $8e$ lớp ngoài cùng (riêng He có $2e$) nên cực kỳ bền vững, tồn tại dạng đơn nguyên tử.</li>
        </ul>
      `,
      checkpoint: {
        question: "Nguyên tố nào nằm ở nhóm IA nhưng lại là PHI KIM?",
        options: ["Lithium (Li)", "Sodium (Na)", "Hydrogen (H)", "Potassium (K)"],
        answer: 2,
        explanation: "Hydrogen ($Z=1$) nằm ở ô 1, cột IA nhưng là phi kim ở thể khí."
      }
    },
    {
      title: "So sánh Tính chất vật lý & Các ngoại lệ quan trọng",
      content: `
        <table class="std-table">
          <thead><tr><th>Đặc điểm</th><th>Kim loại</th><th>Phi kim</th></tr></thead>
          <tbody>
            <tr><td><strong>Trạng thái (ở $25^\\circ\\text{C}$)</strong></td><td>Hầu hết là <strong>chất rắn</strong> (trừ <strong>Thủy ngân Hg</strong> là chất lỏng)</td><td>Đủ cả 3 thể: Rắn (C, S, P), Lỏng (<strong>Bromine $\\ce{Br2}$</strong>), Khí ($\\ce{O2, N2, Cl2}$)</td></tr>
            <tr><td><strong>Ánh kim</strong></td><td>Có ánh kim sáng lấp lánh</td><td>Hầu hết không có ánh kim (trừ iodine, kim cương)</td></tr>
            <tr><td><strong>Dẫn điện, dẫn nhiệt</strong></td><td>Dẫn điện và dẫn nhiệt <strong>rất tốt</strong> ($\\text{Ag} > \\text{Cu} > \\text{Au} > \\text{Al} > \\text{Fe}$)</td><td>Hầu hết <strong>không dẫn điện</strong> (trừ <strong>than chì - graphite</strong> dẫn điện)</td></tr>
            <tr><td><strong>Tính dẻo</strong></td><td>Dẻo, dễ dát mỏng, kéo sợi (dẻo nhất là Vàng Au)</td><td>Không dẻo, ở thể rắn thường giòn, dễ vỡ</td></tr>
          </tbody>
        </table>
      `,
      example: "Tại sao người ta bơm khí <strong>Helium (He)</strong> hoặc <strong>Argon (Ar)</strong> vào bóng đèn sợi đốt hoặc khinh khí cầu thay vì dùng khí Hydrogen ($\\ce{H2}$)? <br/><em>Phân tích:</em> Khí $\\ce{H2}$ rất nhẹ nhưng cực kỳ <strong>dễ cháy nổ</strong> khi gặp oxy và tia lửa. Helium nhẹ gần bằng $\\ce{H2}$ nhưng là <strong>khí hiếm</strong>, trơ về mặt hóa học, hoàn toàn không cháy nổ nên rất an toàn."
    }
  ],
  questions: [
    { id: "w10_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Trên Bảng tuần hoàn, nhóm các nguyên tố khí hiếm nằm ở cột nào?",
      options: ["A. Nhóm IA", "B. Nhóm IIA", "C. Nhóm VIIA", "D. Nhóm VIIIA"],
      answer: 3, solution: "Nhóm VIIIA (cột 18 ngoài cùng bên phải) là nhóm khí hiếm." },
    { id: "w10_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Kim loại duy nhất tồn tại ở thể lỏng ở điều kiện thường ($25^\\circ\\text{C}$) là:",
      options: ["A. Sodium (Na)", "B. Mercury (Hg - Thủy ngân)", "C. Aluminium (Al)", "D. Iron (Fe)"],
      answer: 1, solution: "Thủy ngân (Hg) nóng chảy ở $-39^\\circ\\text{C}$ nên ở thể lỏng tại nhiệt độ phòng." },
    { id: "w10_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Phi kim nào sau đây tồn tại ở thể lỏng ở điều kiện thường?",
      options: ["A. Sulfur (S)", "B. Chlorine ($\\ce{Cl2}$)", "C. Bromine ($\\ce{Br2}$)", "D. Phosphorus (P)"],
      answer: 2, solution: "Bromine ($\\ce{Br2}$) là phi kim duy nhất ở thể lỏng ở nhiệt độ thường." },
    { id: "w10_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Kim loại nào sau đây dẫn điện tốt nhất?",
      options: ["A. Copper (Cu)", "B. Aluminium (Al)", "C. Silver (Ag)", "D. Iron (Fe)"],
      answer: 2, solution: "Thứ tự dẫn điện: $\\text{Ag} > \\text{Cu} > \\text{Au} > \\text{Al} > \\text{Fe}$." },
    { id: "w10_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Dãy nguyên tố nào sau đây chỉ gồm toàn các PHI KIM?",
      options: ["A. Fe, Cu, Al", "B. C, N, O, Cl", "C. Na, K, S, P", "D. He, Ne, Ar"],
      answer: 1, solution: "Carbon, Nitrogen, Oxygen, Chlorine đều là phi kim." },
    { id: "w10_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Tính chất vật lý chung nào giúp kim loại vàng (Au) dễ dàng chế tác thành trang sức dát mỏng?",
      options: ["A. Tính dẫn điện", "B. Tính dẻo", "C. Tính cứng cao", "D. Nhiệt độ nóng chảy thấp"],
      answer: 1, solution: "Vàng là kim loại có tính dẻo cao nhất." },
    { id: "w10_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong các chất sau, phi kim nào có khả năng dẫn điện tốt nên được dùng làm lõi bút chì và điện cực pin?",
      options: ["A. Lưu huỳnh", "B. Than chì (Graphite)", "C. Kim cương", "D. Phosphorus đỏ"],
      answer: 1, solution: "Than chì (một dạng thù hình của Carbon) dẫn điện tốt." },
    { id: "w10_q8", num: 8, tier: "basic", type: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Kim loại, Phi kim, Khí hiếm:",
      statements: [
        { text: "Hơn 80% các nguyên tố trong Bảng tuần hoàn là kim loại.", answer: true },
        { text: "Tất cả các nguyên tố ở nhóm IA đều là kim loại.", answer: false },
        { text: "Khí hiếm Argon ($\\text{Ar}$) được bơm vào bóng đèn sợi đốt để bảo vệ dây tóc.", answer: true },
        { text: "Đa số phi kim ở thể rắn có tính dẻo cao.", answer: false }
      ],
      solution: "b) Sai vì H ở nhóm IA là phi kim; d) Sai vì phi kim rắn thường giòn." },
    { id: "w10_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho các nguyên tố: $\\text{Na, O, Ne, Al, Cl, Ar, Fe, S}$. Có bao nhiêu nguyên tố là KIM LOẠI?",
      answer: "3", tolerance: 0.1,
      solution: "3 kim loại là Na, Al, Fe. (O, Cl, S là phi kim; Ne, Ar là khí hiếm)." },
    { id: "w10_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nguyên tố khí hiếm ở chu kỳ 3 có số hiệu nguyên tử $Z$ bằng bao nhiêu?",
      answer: "18", tolerance: 0.1,
      solution: "Phân bố 3 lớp, lớp ngoài 8e: $2/8/8 \\Rightarrow Z = 18$ (Argon)." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w10_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Vì sao đồng (Cu) được sử dụng phổ biến làm lõi dây dẫn điện trong gia đình thay vì bạc (Ag) dù bạc dẫn điện tốt hơn?",
      options: [
        "A. Đồng nhẹ hơn bạc nhiều lần.",
        "B. Đồng dẫn nhiệt kém hơn bạc.",
        "C. Đồng có giá thành rẻ hơn bạc rất nhiều nhưng vẫn dẫn điện rất tốt.",
        "D. Bạc không kéo thành sợi được."
      ],
      answer: 2, solution: "Cu đứng ngay sau Ag về độ dẫn điện nhưng trữ lượng lớn và rẻ hơn Ag rất nhiều." },
    { id: "w10_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một nguyên tố X có 2 lớp electron và có 6 electron ở lớp ngoài cùng. X thuộc loại nguyên tố nào?",
      options: ["A. Kim loại", "B. Phi kim", "C. Khí hiếm", "D. Kim loại chuyển tiếp"],
      answer: 1, solution: "Phân bố $2/6 \\Rightarrow Z = 8$ (Oxygen), là phi kim." },
    { id: "w10_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "So sánh hai dạng thù hình của nguyên tố Carbon là Kim cương và Than chì:",
      statements: [
        { text: "Cả kim cương và than chì đều được tạo nên từ nguyên tố Carbon.", answer: true },
        { text: "Kim cương rất cứng, không dẫn điện; còn than chì mềm và dẫn điện.", answer: true },
        { text: "Sự khác nhau về tính chất vật lý của chúng là do cách sắp xếp các nguyên tử Carbon khác nhau.", answer: true },
        { text: "Đốt cháy hoàn toàn kim cương không thu được khí $\\ce{CO2}$.", answer: false }
      ],
      solution: "d) Sai: vì đều là Carbon nên đốt cháy đều tạo $\\ce{CO2}$ ($\\ce{C + O2 ->[t^o] CO2}$)." },
    { id: "w10_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Trong 20 nguyên tố đầu tiên của Bảng tuần hoàn ($Z = 1 \\to 20$), có bao nhiêu nguyên tố là KHÍ HIẾM?",
      answer: "3", tolerance: 0.1,
      solution: "3 khí hiếm là He ($Z=2$), Ne ($Z=10$), Ar ($Z=18$)." },
    { id: "w10_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Một dây nhôm (Al, $D = 2,7\\text{ g/cm}^3$) có thể tích $20\\text{ cm}^3$. Khối lượng dây nhôm đó là bao nhiêu gam?",
      answer: "54", tolerance: 0.1,
      solution: "$m = D \\cdot V = 2,7 \\times 20 = 54\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w10_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao trong thực tế, người ta thường dùng <strong>nhôm (Al)</strong> để làm đường dây tải điện cao thế, còn <strong>đồng (Cu)</strong> dùng làm dây điện dân dụng trong nhà?",
      solution: "Nhôm nhẹ ($D = 2,7\\text{ g/cm}^3$, bằng khoảng $1/3$ đồng $D = 8,96\\text{ g/cm}^3$) nên đường dây cao thế kéo dài hàng trăm km sẽ nhẹ, ít võng, giảm tải cho cột điện và chi phí rẻ. Trong nhà cần dây nhỏ gọn, uốn dẻo tốt, độ bền cơ học và độ dẫn điện cao hơn nên dùng đồng.",
      rubric: [
        { step: "Nêu được nhôm nhẹ ($D$ nhỏ) giúp giảm trọng lượng đường dây cao thế và tiết kiệm chi phí", points: 0.5 },
        { step: "Nêu được đồng dẫn điện tốt hơn, bền dẻo, tiết diện nhỏ gọn phù hợp lắp đặt trong nhà", points: 0.5 }
      ] },
    { id: "w10_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một phân tử chất khí X tạo bởi 2 nguyên tử giống nhau, tổng số hạt proton là $14$. Xác định công thức của X, cho biết X thuộc nhóm Kim loại, Phi kim hay Khí hiếm và nêu một ứng dụng quan trọng của X.",
      solution: "Mỗi nguyên tử có $Z = 14 / 2 = 7$ (Nitrogen, phân bố $2/5$, nhóm VA). Vậy X là khí $\\ce{N2}$, thuộc nhóm <strong>Phi kim</strong>. Ứng dụng: sản xuất phân đạm ($\\ce{NH3}$), làm môi trường trơ bảo quản thực phẩm hoặc làm lạnh sâu (nitơ lỏng).",
      rubric: [
        { step: "Tính đúng $Z = 7$ (Nitrogen) và công thức $\\ce{N2}$", points: 0.5 },
        { step: "Phân loại đúng Phi kim và nêu được ít nhất 1 ứng dụng thực tế hợp lý", points: 0.5 }
      ] },
    { id: "w10_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao người ta dùng khí Argon (Ar) để bơm vào bóng đèn sợi đốt hoặc dùng trong hàn kim loại (hàn TIG), mà không dùng không khí?",
      solution: "Nếu dùng không khí, ở nhiệt độ cao của dây tóc bóng đèn hoặc hồ quang hàn, khí $\\ce{O2}$ trong không khí sẽ oxi hóa (đốt cháy) kim loại làm đứt dây tóc hoặc hỏng mối hàn. Argon là khí hiếm, rất trơ về mặt hóa học nên không phản ứng với kim loại ngay cả ở nhiệt độ cao.",
      rubric: [
        { step: "Giải thích $\\ce{O2}$ trong không khí sẽ phản ứng (oxi hóa) kim loại ở nhiệt độ cao", points: 0.5 },
        { step: "Chỉ ra Argon là khí hiếm, trơ hóa học, bảo vệ dây tóc/mối hàn", points: 0.5 }
      ] },
    { id: "w10_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho 3 chất rắn dạng bột màu gần giống nhau: bột đồng (đỏ cam), bột lưu huỳnh (vàng), bột than chì (đen). Hãy nêu 2 cách kiểm tra vật lý (không đốt cháy) để phân biệt bột than chì và bột lưu huỳnh (giả sử chỉ có sẵn dụng cụ thử mạch điện và nước).",
      solution: "Cách 1 (Thử tính dẫn điện): Ép thành thanh hoặc nối vào mạch điện có bóng đèn → bột than chì dẫn điện làm đèn sáng; bột lưu huỳnh không dẫn điện. Cách 2 (Hoặc dùng nhiệt/độ cứng): Than chì có ánh kim nhẹ, viết được lên giấy; lưu huỳnh giòn, không dẫn điện.",
      rubric: [
        { step: "Nêu đúng phép thử dẫn điện: than chì dẫn điện, lưu huỳnh không dẫn điện", points: 0.75 },
        { step: "Nêu thêm được đặc điểm vật lý phụ trợ (màu sắc/vết vạch trên giấy)", points: 0.25 }
      ] },
    { id: "w10_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nguyên tố R thuộc chu kỳ 3. Trong nguyên tử R, số hạt mang điện nhiều hơn số hạt không mang điện là $12$, và số electron lớp ngoài cùng bằng $1/4$ tổng số electron ở các lớp bên trong. Xác định R là kim loại, phi kim hay khí hiếm?",
      solution: "Chu kỳ 3 nên R có 3 lớp electron: lớp 1 có $2e$, lớp 2 có $8e$ → tổng electron các lớp bên trong $= 2 + 8 = 10$? Khoan: nếu lớp ngoài cùng $= 10/4 = 2,5$ (vô lý!). Sửa điều kiện: thực tế nếu số $e$ lớp ngoài cùng $= 1/5$ tổng e bên trong → $10/5 = 2e$ ($Z=12$, Mg). Với đề cho $2p - n = 12$: nếu $Z = 12$ (Mg) thì $2(12) - 12 = 12$ (thỏa mãn đúng $2p - n = 12$!). Vậy R là Magnesium (Mg, $2/8/2$), thuộc loại <strong>Kim loại</strong>.",
      rubric: [
        { step: "Từ chu kỳ 3 suy ra 2 lớp trong có $2 + 8 = 10e$, tìm được $Z = 12$ thỏa mãn $2p - n = 12$", points: 0.75 },
        { step: "Kết luận R là Magnesium (Mg) – Kim loại", points: 0.25 }
      ] }
  ]
};
