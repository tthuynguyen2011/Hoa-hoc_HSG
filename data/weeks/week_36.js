window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[36] = {
  week: 36,
  title: "Thi đánh giá năng lực hết Năm 1 (Chuẩn đề HSG Hóa 8)",
  objectives: [
    "Hoàn thành kỳ thi tổng kết Năm 1 (bao phủ trọn vẹn KHTN 6, KHTN 7 và KHTN 8 theo GDPT 2018).",
    "Đánh giá khả năng vận dụng kiến thức nền tảng và giải các bài toán phân hóa mức HSG Hóa 8 (Độ tan, Nồng độ, Tăng giảm khối lượng, Chuỗi phản ứng, Nhận biết)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Thi thử hết Năm 1 + Chấm ba rem HSG + Tổng kết)",
    preparation: "In Đề kiểm tra Tuần 36 (A4) hoặc làm bài trực tuyến trong 90 phút.",
    sessions: [
      {
        name: "Buổi 1: Thi Đánh giá năng lực hết Năm 1 (90 phút)",
        guide: "Học sinh làm bài độc lập 20 câu. Khuyến khích làm nháp cẩn thận, trình bày đầy đủ 5 câu tự luận HSG theo đúng chuẩn ba rem.",
        pitfalls: "Nhắc học sinh kiểm tra lại đơn vị $24,79\\text{ L/mol}$, trừ khí/kết tủa khi tính $m_{\\text{dd sau}}$."
      },
      {
        name: "Buổi 2 & 3: Chữa bài chi tiết & Tổng kết Năm 1",
        guide: "Chấm điểm theo ba rem từng `0,25đ / 0,5đ`. Nếu đạt từ $15/20$ điểm trở lên, học sinh đã sẵn sàng bước vào **Năm 2 (KHTN 9 Vô cơ – Hữu cơ & Luyện đề HSG 9 / Chuyên Hóa 10)**!",
        pitfalls: "Ôn lại ngay các chuyên đề còn yếu trước khi chuyển sang Năm 2."
      }
    ]
  },
  lecture: [
    {
      title: "Tổng kết Hành trình Năm 1 (Tuần 1 → Tuần 36)",
      content: `
        <div class="callout success">
          <strong>Chúc mừng con đã hoàn thành toàn bộ chương trình Hóa học KHTN 6, 7, 8 chỉ trong 1 năm!</strong><br/>
          Trước khi bước vào Năm 2 (KHTN 9 &amp; Luyện thi HSG 9 / Chuyên Hóa 10), hãy kiểm tra lại 5 kỹ năng cốt lõi:<br/>
          1. Thành thạo cấu tạo nguyên tử, bảng tuần hoàn, liên kết và lập CTHH.<br/>
          2. Cân bằng nhanh mọi PTHH và tính toán theo mol ($24,79\\text{ L/mol}$ ở đkc).<br/>
          3. Làm chủ bài toán chất dư, hiệu suất $H\\%$, độ tan $S$ và nồng độ $C\\%, C_M$.<br/>
          4. Nắm chắc tính chất 4 loại hợp chất vô cơ: Oxide – Acid – Base – Muối.<br/>
          5. Trình bày bài tự luận rõ ràng, ăn trọn từng $0,25\\text{đ}$ theo ba rem HSG.
        </div>
      `
    }
  ],
  questions: [
    { id: "w36_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên tử X có tổng số hạt cơ bản là $34$, trong đó số hạt không mang điện là $12$. Số hiệu nguyên tử $Z$ của X là:",
      options: ["A. 10", "B. 11", "C. 12", "D. 22"],
      answer: 1, solution: "$2p = 34 - 12 = 22 \\Rightarrow p = 11$ (Sodium)." },
    { id: "w36_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Hợp chất nào sau đây có liên kết ION?",
      options: ["A. $\\ce{CO2}$", "B. $\\ce{H2O}$", "C. $\\ce{MgCl2}$", "D. $\\ce{NH3}$"],
      answer: 2, solution: "$\\ce{MgCl2}$ tạo bởi kim loại Mg và phi kim Cl." },
    { id: "w36_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Công thức hóa học của Iron(III) sulfate (Fe hóa trị III, nhóm $\\text{SO}_4$ hóa trị II) là:",
      options: ["A. $\\ce{FeSO4}$", "B. $\\ce{Fe2(SO4)3}$", "C. $\\ce{Fe3(SO4)2}$", "D. $\\ce{Fe(SO4)3}$"],
      answer: 1, solution: "$\\ce{Fe2(SO4)3}$." },
    { id: "w36_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Ở đkc ($25^\\circ\\text{C}, 1\\text{ bar}$), $0,25\\text{ mol}$ khí $\\ce{O2}$ có thể tích là:",
      options: ["A. $5,6\\text{ L}$", "B. $6,1975\\text{ L}$", "C. $12,395\\text{ L}$", "D. $24,79\\text{ L}$"],
      answer: 1, solution: "$V = 0,25 \\times 24,79 = 6,1975\\text{ L}$." },
    { id: "w36_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch nào sau đây làm giấy quỳ tím chuyển sang màu XANH?",
      options: ["A. $\\ce{HCl}$", "B. $\\ce{NaCl}$", "C. $\\ce{KOH}$", "D. $\\ce{H2SO4}$"],
      answer: 2, solution: "$\\ce{KOH}$ là dung dịch kiềm." },
    { id: "w36_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây thuộc loại OXIDE LƯỠNG TÍNH?",
      options: ["A. $\\ce{CaO}$", "B. $\\ce{CO}$", "C. $\\ce{ZnO}$", "D. $\\ce{SO2}$"],
      answer: 2, solution: "$\\ce{ZnO}$ và $\\ce{Al2O3}$ là oxide lưỡng tính." },
    { id: "w36_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Kết tủa nào sau đây có màu NÂU ĐỎ?",
      options: ["A. $\\ce{BaSO4}$", "B. $\\ce{Cu(OH)2}$", "C. $\\ce{Fe(OH)3}$", "D. $\\ce{AgCl}$"],
      answer: 2, solution: "$\\ce{Fe(OH)3}$ màu nâu đỏ." },
    { id: "w36_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Để tách dầu ăn và nước, ta dùng phễu chiết.", answer: true },
        { text: "Chất xúc tác bị tiêu hao hết sau khi phản ứng kết thúc.", answer: false },
        { text: "Phản ứng giữa Acid và Base gọi là phản ứng trung hòa.", answer: true },
        { text: "Không nên bón lẫn phân đạm ammonium với vôi bột.", answer: true }
      ],
      solution: "b) Sai: chất xúc tác không bị tiêu hao." },
    { id: "w36_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan $15\\text{ g}$ muối ăn vào $135\\text{ g}$ nước. Nồng độ phần trăm (%) của dung dịch là bao nhiêu?",
      answer: "10", tolerance: 0.1,
      solution: "$C\\% = (15 / 150) \\times 100\\% = 10\\%$." },
    { id: "w36_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $5,6\\text{ g}$ $\\text{Fe}$ tác dụng hết với dung dịch $\\ce{H2SO4}$ loãng dư. Khối lượng muối $\\ce{FeSO4}$ ($M=152$) thu được là bao nhiêu gam?",
      answer: "15.2", tolerance: 0.1,
      solution: "$n_{\\text{Fe}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{FeSO4}} = 15,2\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w36_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Dung dịch $\\ce{HCl}$ $36,5\\%$ có khối lượng riêng $D = 1,18\\text{ g/mL}$. Nồng độ mol ($C_M$) của dung dịch này là:",
      options: ["A. $10,0\\text{ M}$", "B. $11,8\\text{ M}$", "C. $12,5\\text{ M}$", "D. $5,9\\text{ M}$"],
      answer: 1, solution: "$C_M = \\frac{10 \\times 1,18 \\times 36,5}{36,5} = 11,8\\text{ M}$." },
    { id: "w36_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cần trộn dung dịch $\\ce{NaOH}$ $10\\%$ và dung dịch $\\ce{NaOH}$ $35\\%$ theo tỉ lệ khối lượng $m_1 : m_2$ bằng bao nhiêu để được dung dịch $20\\%$?",
      options: ["A. $2 : 3$", "B. $3 : 2$", "C. $1 : 2$", "D. $2 : 1$"],
      answer: 1, solution: "$\\frac{m_1}{m_2} = \\frac{35 - 20}{20 - 10} = \\frac{15}{10} = \\frac{3}{2}$." },
    { id: "w36_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Nung $100\\text{ g}$ $\\ce{CaCO3}$ ($M=100$) với hiệu suất $75\\%$ ($\\ce{CaCO3 ->[t^\\circ] CaO + CO2 ^}$):",
      statements: [
        { text: "Số mol $\\ce{CaCO3}$ đã bị phân hủy là $0,75\\text{ mol}$.", answer: true },
        { text: "Thể tích khí $\\ce{CO2}$ thu được ở đkc là $18,5925\\text{ L}$.", answer: true },
        { text: "Khối lượng chất rắn còn lại sau khi nung là $42\\text{ g}$.", answer: false },
        { text: "Hòa tan chất rắn sau nung vào lượng dư dung dịch $\\ce{HCl}$ thấy có khí thoát ra.", answer: true }
      ],
      solution: "c) Sai: rắn còn lại gồm $42\\text{ g}$ $\\ce{CaO}$ và $25\\text{ g}$ $\\ce{CaCO3}$ dư $= 67\\text{ g}$." },
    { id: "w36_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Ở $80^\\circ\\text{C}$, độ tan của muối A là $80\\text{ g}$; ở $20^\\circ\\text{C}$ là $30\\text{ g}$. Làm lạnh $360\\text{ g}$ dung dịch bão hòa A từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ thu được bao nhiêu gam tinh thể khan tách ra?",
      answer: "100", tolerance: 0.2,
      solution: "$360\\text{ g}$ dd gồm $200\\text{ g}$ nước và $160\\text{ g}$ A. Ở $20^\\circ\\text{C}$, $200\\text{ g}$ nước giữ $60\\text{ g}$ A $\\Rightarrow$ tách ra $160 - 60 = 100\\text{ g}$." },
    { id: "w36_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hỗn hợp khí gồm $\\ce{SO2}$ ($M=64$) và $\\ce{O2}$ ($M=32$) có tỉ khối đối với $\\ce{H2}$ là $24$. Tính phần trăm thể tích (%) của khí $\\ce{SO2}$ trong hỗn hợp.",
      answer: "50", tolerance: 0.2,
      solution: "$\\overline{M} = 48 = (64 + 32)/2 \\Rightarrow$ tỉ lệ mol $1 : 1 \\Rightarrow 50\\%$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w36_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $15,6\\text{ g}$ hỗn hợp X gồm $\\text{Al}$ và $\\text{MgO}$ vào dung dịch $\\ce{HCl}$ dư thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng mỗi chất trong X và tổng số mol $\\ce{HCl}$ đã phản ứng.",
      solution: "Chỉ có Al tạo khí $\\ce{H2}$: $n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow n_{\\text{Al}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$). Suy ra $m_{\\ce{MgO}} = 15,6 - 5,4 = 10,2\\text{ g}$ ($n_{\\ce{MgO}} = 10,2 / 40 = 0,255\\text{ mol}$). Tổng $n_{\\ce{HCl}} = 3n_{\\text{Al}} + 2n_{\\ce{MgO}} = 0,6 + 0,51 = 1,11\\text{ mol}$.",
      rubric: [
        { step: "Viết đúng 2 PTHH và tính được $m_{\\text{Al}} = 5,4\\text{ g}$, $m_{\\ce{MgO}} = 10,2\\text{ g}$", points: 0.5 },
        { step: "Tính đúng tổng $n_{\\ce{HCl}} = 1,11\\text{ mol}$", points: 0.5 }
      ] },
    { id: "w36_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hấp thụ hoàn toàn $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào $150\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $1\\text{ M}$. Tính khối lượng kết tủa $\\ce{BaCO3}$ ($M=197$) thu được.",
      quickAnswer: "19.7",
      solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol}$; $n_{\\ce{Ba(OH)2}} = 0,15\\text{ mol}$. Vì $0,15 < 0,2 < 0,3$ nên tạo 2 muối. Bảo toàn Ba: $x + y = 0,15$; Bảo toàn C: $x + 2y = 0,2 \\Rightarrow y = 0,05, x = 0,1\\text{ mol}$. Vậy $m_{\\ce{BaCO3}} = 0,1 \\times 197 = 19,7\\text{ g}$.",
      rubric: [
        { step: "Xác định đúng tạo 2 muối và lập hệ bảo toàn Ba, C", points: 0.5 },
        { step: "Tính đúng $n_{\\ce{BaCO3}} = 0,1\\text{ mol} \\Rightarrow m = 19,7\\text{ g}$", points: 0.5 }
      ] },
    { id: "w36_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một hợp chất khí A chứa $75\\%$ C và $25\\%$ H về khối lượng. Biết tỉ khối của A đối với khí Nitrogen ($\\ce{N2}$) là $0,5714$. Xác định CTHH của A và viết PTHH đốt cháy hoàn toàn A.",
      solution: "$M_A = 0,5714 \\times 28 \\approx 16\\text{ g/mol}$. $x = (16 \\times 75)/1200 = 1$; $y = (16 \\times 25)/100 = 4 \\Rightarrow$ CTPT là $\\ce{CH4}$ (Methane). PTHH: $\\ce{CH4 + 2O2 ->[t^\\circ] CO2 + 2H2O}$.",
      rubric: [
        { step: "Tìm đúng $M_A = 16$ và CTPT $\\ce{CH4}$", points: 0.5 },
        { step: "Viết đúng PTHH đốt cháy $\\ce{CH4}$", points: 0.5 }
      ] },
    { id: "w36_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 5 lọ mất nhãn đựng riêng biệt 5 dung dịch: $\\ce{H2SO4}$, $\\ce{NaOH}$, $\\ce{BaCl2}$, $\\ce{Na2CO3}$ và $\\ce{NaCl}$. Chỉ dùng thêm 1 thuốc thử là giấy quỳ tím, hãy trình bày cách nhận biết cả 5 dung dịch trên.",
      solution: "B1: Nhúng quỳ tím chia làm 3 nhóm: Đỏ ($\\ce{H2SO4}$); Xanh ($\\ce{NaOH}$, $\\ce{Na2CO3}$); Tím ($\\ce{BaCl2}$, $\\ce{NaCl}$). B2: Dùng $\\ce{H2SO4}$ vừa nhận được nhỏ vào nhóm Xanh: sủi khí $\\ce{CO2}$ là $\\ce{Na2CO3}$, không hiện tượng là $\\ce{NaOH}$. Nhỏ $\\ce{H2SO4}$ vào nhóm Tím: tạo kết tủa trắng $\\ce{BaSO4}$ là $\\ce{BaCl2}$, không hiện tượng là $\\ce{NaCl}$.",
      rubric: [
        { step: "Dùng quỳ tím chia đúng 3 nhóm (đỏ, xanh, tím)", points: 0.25 },
        { step: "Dùng $\\ce{H2SO4}$ nhận ra đủ 4 chất còn lại và viết PTHH minh họa", points: 0.75 }
      ] },
    { id: "w36_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $11,2\\text{ g}$ $\\text{Fe}$ tác dụng hoàn toàn với $200\\text{ g}$ dung dịch $\\ce{HCl}$ $14,6\\%$. Tính nồng độ phần trăm ($C\\%$) của các chất tan có trong dung dịch sau phản ứng.",
      solution: "$n_{\\text{Fe}} = 0,2\\text{ mol}$; $n_{\\ce{HCl}\\text{ bđ}} = (200 \\times 14,6\\%)/36,5 = 0,8\\text{ mol}$. PTHH: $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$. Vậy Fe hết, $\\ce{HCl}$ dư $0,8 - 0,4 = 0,4\\text{ mol}$ ($14,6\\text{ g}$); sinh $0,2\\text{ mol}$ $\\ce{FeCl2}$ ($25,4\\text{ g}$) và $0,2\\text{ mol}$ $\\ce{H2}$ ($0,4\\text{ g}$). $m_{\\text{dd sau}} = 11,2 + 200 - 0,4 = 210,8\\text{ g}$. Vậy $C\\%_{\\ce{FeCl2}} = \\frac{25,4}{210,8} \\times 100\\% \\approx 12,05\\%$; $C\\%_{\\ce{HCl dư}} = \\frac{14,6}{210,8} \\times 100\\% \\approx 6,93\\%$.",
      rubric: [
        { step: "Xác định $\\ce{HCl}$ dư $0,4\\text{ mol}$, tính đúng $m_{\\ce{FeCl2}} = 25,4\\text{ g}$ và $m_{\\text{dd sau}} = 210,8\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $C\\%_{\\ce{FeCl2}} \\approx 12,05\\%$ và $C\\%_{\\ce{HCl dư}} \\approx 6,93\\%$", points: 0.5 }
      ] }
  ]
};
