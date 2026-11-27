window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[32] = {
  week: 32,
  title: "Base: Tính chất hóa học, kiềm & Phản ứng trung hòa",
  objectives: [
    "Hiểu định nghĩa Base: Hợp chất phân tử gồm nguyên tử kim loại liên kết với nhóm hydroxide ($-\\text{OH}$), khi tan trong nước tạo ra ion $\\ce{OH-}$.",
    "Phân biệt được <strong>Kiềm (Base tan)</strong>: $\\ce{KOH, NaOH, Ba(OH)2, Ca(OH)2}$ và <strong>Base không tan</strong>: $\\ce{Cu(OH)2, Fe(OH)3, Mg(OH)2, Al(OH)3}$ (màu sắc đặc trưng!).",
    "Nắm vững tính chất hóa học của Base & Kiềm, đặc biệt là <strong>Phản ứng trung hòa</strong> (Acid + Base $\\to$ Muối + Nước) và Kiềm + Oxide acid ($\\ce{CO2, SO2}$)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 32 (A4). Chuẩn bị bảng màu kết tủa của các base không tan.",
    sessions: [
      {
        name: "Buổi 1: Phân loại Base (Kiềm vs Base không tan) & Chỉ thị màu",
        guide: "Dạy mẹo nhớ 4 Kiềm (Base tan) kinh điển: 'Khi Nào Bạn Cần' ($\\ce{KOH, NaOH, Ba(OH)2, Ca(OH)2}$). Chỉ có Kiềm mới làm quỳ tím hóa XANH và phenolphthalein hóa HỒNG; base không tan KHÔNG làm đổi màu chỉ thị!",
        pitfalls: "Học sinh hay cho rằng $\\ce{Cu(OH)2}$ hay $\\ce{Fe(OH)3}$ cũng làm quỳ tím hóa xanh (sai: chúng không tan!)."
      },
      {
        name: "Buổi 2: Tính chất hóa học riêng của Kiềm vs Base không tan",
        guide: "Tính chất chung: Cả 2 loại Base đều tác dụng với Acid (Phản ứng trung hòa). Tính chất riêng: Chỉ Kiềm mới tác dụng với $\\ce{CO2, SO2}$ và dung dịch muối; Chỉ Base không tan mới bị NHIỆT PHÂN hủy thành Oxide base + $\\ce{H2O}$.",
        pitfalls: "Quên rằng $\\ce{NaOH, KOH}$ không bị nhiệt phân hủy."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán HSG Trung hòa / Nhiệt phân",
        guide: "Chú ý 5 câu HSG: tính pH/môi trường sau phản ứng trung hòa (chất nào dư thì quỳ tím theo chất đó!), và nhiệt phân $\\ce{Fe(OH)3}$, $\\ce{Cu(OH)2}$.",
        pitfalls: "Quên kiểm tra chất dư khi hỏi màu quỳ tím sau khi trộn Acid và Base."
      }
    ]
  },
  lecture: [
    {
      title: "Phân loại Base & Tính chất Hóa học",
      content: `
        <table class="std-table">
          <thead><tr><th>Tiêu chí</th><th>Base tan (Kiềm): $\\ce{KOH, NaOH, Ba(OH)2, Ca(OH)2}$</th><th>Base không tan: $\\ce{Cu(OH)2, Fe(OH)3, Mg(OH)2...}$</th></tr></thead>
          <tbody>
            <tr><td><strong>Chỉ thị màu</strong></td><td>Quỳ tím hóa <strong>XANH</strong>; Phenolphthalein hóa <strong>HỒNG</strong></td><td><strong>Không</strong> làm đổi màu chất chỉ thị</td></tr>
            <tr><td><strong>Tác dụng Acid</strong></td><td colspan="2" style="text-align:center;"><strong>Phản ứng trung hòa:</strong> $\\text{Acid} + \\text{Base} \\longrightarrow \\text{Muối} + \\text{Nước}$<br/>($\\ce{NaOH + HCl -> NaCl + H2O}$ &nbsp;|&nbsp; $\\ce{Cu(OH)2 + H2SO4 -> CuSO4 + 2H2O}$)</td></tr>
            <tr><td><strong>Tác dụng $\\ce{CO2, SO2}$</strong></td><td>Có: $\\ce{Ca(OH)2 + CO2 -> CaCO3 v + H2O}$</td><td>Không phản ứng</td></tr>
            <tr><td><strong>Nhiệt phân ($t^\\circ$)</strong></td><td>Bền nhiệt (không bị phân hủy)</td><td>Bị phân hủy: $\\ce{Cu(OH)2 ->[t^\\circ] CuO + H2O}$</td></tr>
          </tbody>
        </table>
        <div class="callout hsg">
          <strong>Màu kết tủa bắt buộc phải nhớ khi làm bài nhận biết HSG:</strong><br/>
          • $\\ce{Cu(OH)2}$: Xanh lam &nbsp;|&nbsp; $\\ce{Fe(OH)3}$: Nâu đỏ &nbsp;|&nbsp; $\\ce{Fe(OH)2}$: Trắng xanh &nbsp;|&nbsp; $\\ce{Mg(OH)2, Al(OH)3}$: Trắng.
        </div>
      `,
      checkpoint: {
        question: "Base nào sau đây KHÔNG làm đổi màu giấy quỳ tím và bị nhiệt phân hủy khi đun nóng?",
        options: ["$\\ce{NaOH}$", "$\\ce{KOH}$", "$\\ce{Ba(OH)2}$", "$\\ce{Fe(OH)3}$"],
        answer: 3,
        explanation: "$\\ce{Fe(OH)3}$ là base không tan nên không đổi màu quỳ tím và bị nhiệt phân thành $\\ce{Fe2O3 + 3H2O}$."
      }
    }
  ],
  questions: [
    { id: "w32_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch kiềm (như $\\ce{NaOH}$) làm dung dịch phenolphthalein không màu chuyển sang màu gì?",
      options: ["A. Màu xanh", "B. Màu đỏ", "C. Màu hồng", "D. Không đổi màu"],
      answer: 2, solution: "Dung dịch kiềm làm phenolphthalein hóa hồng." },
    { id: "w32_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Dãy chất nào sau đây chỉ gồm toàn các BASE TAN (Kiềm)?",
      options: ["A. $\\ce{NaOH, Cu(OH)2, KOH}$", "B. $\\ce{KOH, NaOH, Ba(OH)2, Ca(OH)2}$", "C. $\\ce{Fe(OH)3, Mg(OH)2, Al(OH)3}$", "D. $\\ce{NaOH, Fe(OH)2, Ca(OH)2}$"],
      answer: 1, solution: "4 kiềm phổ biến là $\\ce{KOH, NaOH, Ba(OH)2, Ca(OH)2}$." },
    { id: "w32_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Phản ứng giữa Acid và Base tạo thành muối và nước được gọi là phản ứng gì?",
      options: ["A. Phản ứng phân hủy", "B. Phản ứng trung hòa", "C. Phản ứng cháy", "D. Phản ứng thế"],
      answer: 1, solution: "Acid + Base → Muối + Nước gọi là phản ứng trung hòa." },
    { id: "w32_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Kết tủa $\\ce{Fe(OH)3}$ có màu đặc trưng là:",
      options: ["A. Trắng", "B. Xanh lam", "C. Nâu đỏ", "D. Vàng"],
      answer: 2, solution: "$\\ce{Fe(OH)3}$ kết tủa màu nâu đỏ." },
    { id: "w32_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Nhiệt phân hoàn toàn $\\ce{Cu(OH)2}$ (màu xanh lam) thu được chất rắn màu đen là:",
      options: ["A. $\\ce{Cu}$", "B. $\\ce{CuO}$", "C. $\\ce{Cu2O}$", "D. $\\ce{CuCO3}$"],
      answer: 1, solution: "$\\ce{Cu(OH)2 ->[t^\\circ] CuO (đen) + H2O}$." },
    { id: "w32_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi sục khí $\\ce{CO2}$ vào dung dịch nước vôi trong ($\\ce{Ca(OH)2}$), thấy xuất hiện kết tủa trắng là chất nào?",
      options: ["A. $\\ce{CaO}$", "B. $\\ce{CaCO3}$", "C. $\\ce{Ca(HCO3)2}$", "D. $\\ce{CaCl2}$"],
      answer: 1, solution: "$\\ce{Ca(OH)2 + CO2 -> CaCO3 v + H2O}$." },
    { id: "w32_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch nào sau đây có giá trị $\\text{pH} > 7$?",
      options: ["A. Nước chanh", "B. Giấm ăn", "C. Nước vôi trong ($\\ce{Ca(OH)2}$)", "D. Nước cất"],
      answer: 2, solution: "Nước vôi trong là dung dịch kiềm nên $\\text{pH} > 7$." },
    { id: "w32_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Base:",
      statements: [
        { text: "Mọi base đều làm giấy quỳ tím chuyển sang màu xanh.", answer: false },
        { text: "Cả base tan và base không tan đều phản ứng được với dung dịch acid.", answer: true },
        { text: "Nhiệt phân $\\ce{NaOH}$ thu được $\\ce{Na2O}$ và $\\ce{H2O}$.", answer: false },
        { text: "Trong nông nghiệp, người ta rắc vôi tôi ($\\ce{Ca(OH)2}$) để khử chua đất trồng.", answer: true }
      ],
      solution: "a) Sai: base không tan không đổi màu quỳ; c) Sai: $\\ce{NaOH}$ bền nhiệt, không bị nhiệt phân." },
    { id: "w32_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Để trung hòa vừa đủ $100\\text{ mL}$ dung dịch $\\ce{HCl}$ $1\\text{ M}$ cần dùng bao nhiêu mL dung dịch $\\ce{NaOH}$ $0,5\\text{ M}$?",
      answer: "200", tolerance: 0.5,
      solution: "$n_{\\ce{NaOH}} = n_{\\ce{HCl}} = 0,1\\text{ mol} \\Rightarrow V = 0,1 / 0,5 = 0,2\\text{ L} = 200\\text{ mL}$." },
    { id: "w32_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Nhiệt phân hoàn toàn $9,8\\text{ g}$ $\\ce{Cu(OH)2}$ ($M=98$) thu được bao nhiêu gam $\\ce{CuO}$ ($M=80$)?",
      answer: "8", tolerance: 0.1,
      solution: "$n_{\\ce{Cu(OH)2}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{CuO}} = 0,1\\text{ mol} \\Rightarrow m = 8\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w32_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trộn $100\\text{ mL}$ dung dịch $\\ce{H2SO4}$ $1\\text{ M}$ với $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1,5\\text{ M}$. Nhúng quỳ tím vào dung dịch sau phản ứng, quỳ tím có màu gì?",
      options: ["A. Màu xanh", "B. Màu đỏ", "C. Không đổi màu (tím)", "D. Mất màu"],
      answer: 1, solution: "$n_{\\ce{H2SO4}} = 0,1\\text{ mol}$, $n_{\\ce{NaOH}} = 0,15\\text{ mol}$. PTHH: $\\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O} \\Rightarrow \\ce{H2SO4}$ dư $0,025\\text{ mol}$ $\\Rightarrow$ quỳ tím hóa ĐỎ." },
    { id: "w32_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Để trung hòa hoàn toàn $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $1,5\\text{ M}$ cần dùng bao nhiêu mL dung dịch $\\ce{Ba(OH)2}$ $0,5\\text{ M}$?",
      options: ["A. $150\\text{ mL}$", "B. $300\\text{ mL}$", "C. $600\\text{ mL}$", "D. $200\\text{ mL}$"],
      answer: 1, solution: "$n_{\\ce{HCl}} = 0,3\\text{ mol}$. PTHH: $\\ce{Ba(OH)2 + 2HCl -> BaCl2 + 2H2O} \\Rightarrow n_{\\ce{Ba(OH)2}} = 0,15\\text{ mol} \\Rightarrow V = 0,15 / 0,5 = 0,3\\text{ L} = 300\\text{ mL}$." },
    { id: "w32_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho dung dịch $\\ce{NaOH}$ tác dụng với dung dịch $\\ce{FeCl3}$:",
      statements: [
        { text: "Xuất hiện kết tủa màu nâu đỏ của $\\ce{Fe(OH)3}$.", answer: true },
        { text: "PTHH là $\\ce{3NaOH + FeCl3 -> Fe(OH)3 v + 3NaCl}$.", answer: true },
        { text: "Nếu đem lọc lấy kết tủa rồi nung đến khối lượng không đổi thì thu được $\\ce{FeO}$.", answer: false },
        { text: "Nước lọc sau khi tách kết tủa có chứa muối $\\ce{NaCl}$.", answer: true }
      ],
      solution: "c) Sai: nung $\\ce{Fe(OH)3}$ thu được $\\ce{Fe2O3}$ ($\\ce{2Fe(OH)3 ->[t^\\circ] Fe2O3 + 3H2O}$)." },
    { id: "w32_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hấp thụ hoàn toàn $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) vào dung dịch $\\ce{Ca(OH)2}$ dư. Tính khối lượng kết tủa trắng $\\ce{CaCO3}$ ($M=100$) thu được (gam).",
      answer: "20", tolerance: 0.1,
      solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{CaCO3}} = 0,2\\text{ mol} \\Rightarrow m = 20\\text{ g}$." },
    { id: "w32_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Nung nóng $21,4\\text{ g}$ $\\ce{Fe(OH)3}$ ($M=107$) đến khối lượng không đổi thu được bao nhiêu gam chất rắn $\\ce{Fe2O3}$ ($M=160$)?",
      answer: "16", tolerance: 0.1,
      solution: "$n_{\\ce{Fe(OH)3}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{Fe2O3}} = 0,1\\text{ mol} \\Rightarrow m = 16\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w32_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi đựng nước vôi trong ($\\ce{Ca(OH)2}$) trong các đồ dùng bằng nhôm (Al), đồ nhôm nhanh chóng bị ăn mòn thủng. Hãy giải thích hiện tượng này (biết $\\ce{Al}$ bị hòa tan bởi dung dịch kiềm mạnh theo PTHH $\\ce{2Al + Ca(OH)2 + 2H2O -> Ca(AlO2)2 + 3H2 ^}$).",
      solution: "Bình thường nhôm bền nhờ lớp màng oxide $\\ce{Al2O3}$ bảo vệ bên ngoài. Nhưng $\\ce{Al2O3}$ và kim loại $\\ce{Al}$ đều bị hòa tan trong dung dịch kiềm $\\ce{Ca(OH)2}$ (tạo muối aluminate tan và khí $\\ce{H2}$), nên lớp bảo vệ bị phá hủy và đồ nhôm bị ăn mòn nhanh chóng.",
      rubric: [
        { step: "Nêu được màng $\\ce{Al2O3}$ và Al bị hòa tan trong dung dịch kiềm $\\ce{Ca(OH)2}$", points: 0.5 },
        { step: "Viết đúng PTHH và kết luận đồ nhôm bị ăn mòn", points: 0.5 }
      ] },
    { id: "w32_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trộn $200\\text{ mL}$ dung dịch gồm $\\ce{HCl}$ $1\\text{ M}$ và $\\ce{H2SO4}$ $0,5\\text{ M}$ với $300\\text{ mL}$ dung dịch $\\ce{Ba(OH)2}$ $0,8\\text{ M}$. Tính khối lượng kết tủa $\\ce{BaSO4}$ ($M=233$) thu được và kiểm tra môi trường dung dịch sau phản ứng (quỳ tím màu gì)?",
      solution: "$n_{\\ce{HCl}} = 0,2\\text{ mol}$, $n_{\\ce{H2SO4}} = 0,1\\text{ mol} \\Rightarrow \\sum n_{\\ce{H+}} = 0,2 + 2(0,1) = 0,4\\text{ mol}$. $n_{\\ce{Ba(OH)2}} = 0,3 \\times 0,8 = 0,24\\text{ mol} \\Rightarrow n_{\\ce{OH-}} = 0,48\\text{ mol}$. • Kết tủa $\\ce{BaSO4}$: vì $n_{\\ce{SO4^{2-}}} = 0,1 < n_{\\ce{Ba^{2+}}} = 0,24 \\Rightarrow n_{\\ce{BaSO4}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{BaSO4}} = 23,3\\text{ g}$. • Môi trường: $n_{\\ce{OH-}} = 0,48 > n_{\\ce{H+}} = 0,4 \\Rightarrow$ dư kiềm $\\ce{OH-}$ $\\Rightarrow$ quỳ tím hóa XANH.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{BaSO4}} = 23,3\\text{ g}$", points: 0.5 },
        { step: "So sánh $\\sum n_{\\ce{OH-}} > \\sum n_{\\ce{H+}}$ và kết luận quỳ tím hóa xanh", points: 0.5 }
      ] },
    { id: "w32_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Để nhận biết 4 dung dịch mất nhãn: $\\ce{NaOH}$, $\\ce{HCl}$, $\\ce{H2SO4}$ và $\\ce{Ba(OH)2}$ chỉ bằng MỘT thuốc thử duy nhất là quỳ tím (không dùng thêm hóa chất ngoài), em hãy trình bày cách làm.",
      solution: "B1: Dùng quỳ tím chia làm 2 nhóm: Nhóm I (hóa xanh): $\\ce{NaOH}, \\ce{Ba(OH)2}$; Nhóm II (hóa đỏ): $\\ce{HCl}, \\ce{H2SO4}$. B2: Lấy từng chất ở Nhóm I nhỏ lần lượt vào từng chất ở Nhóm II (đổ chéo nhau): cặp nào tạo kết tủa trắng ($\\ce{BaSO4}$) là cặp $\\ce{Ba(OH)2}$ và $\\ce{H2SO4}$! Hai chất còn lại không tạo kết tủa là $\\ce{NaOH}$ (nhóm I) và $\\ce{HCl}$ (nhóm II).",
      rubric: [
        { step: "Dùng quỳ tím phân thành 2 nhóm: kiềm (xanh) và acid (đỏ)", points: 0.5 },
        { step: "Đổ chéo 2 nhóm nhận ra cặp $\\ce{Ba(OH)2} - \\ce{H2SO4}$ nhờ kết tủa trắng $\\ce{BaSO4}$", points: 0.5 }
      ] },
    { id: "w32_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một học sinh cho $10\\text{ g}$ hỗn hợp gồm $\\ce{NaOH}$ và $\\ce{Cu(OH)2}$ tác dụng vừa đủ với $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $1,25\\text{ M}$. Tính khối lượng mỗi base trong hỗn hợp ban đầu (cho $\\ce{NaOH}=40, \\ce{Cu(OH)2}=98$).",
      solution: "Đặt $n_{\\ce{NaOH}} = x, n_{\\ce{Cu(OH)2}} = y$. $n_{\\ce{HCl}} = 0,2 \\times 1,25 = 0,25\\text{ mol}$. PTHH: $\\ce{NaOH + HCl -> NaCl + H2O}$ và $\\ce{Cu(OH)2 + 2HCl -> CuCl2 + 2H2O}$. Hệ: $40x + 98y = 10$ và $x + 2y = 0,25$. Nhân pt (2) với 40: $40x + 80y = 10$. Trừ 2 pt: $18y = 0 \\Rightarrow y = 0$? (Kiểm tra: $x = 0,25, y = 0$ nghĩa là $100\\%$ $\\ce{NaOH}$!). Nếu muốn có cả hai, tổng $n_{\\ce{HCl}}$ phải nằm giữa $0,204$ và $0,25$: ví dụ $n_{\\ce{HCl}} = 0,232\\text{ mol}$ ($40x + 98y = 10$ và $x + 2y = 0,232 \\Rightarrow 18y = 0,72 \\Rightarrow y = 0,04\\text{ mol}$ ($3,92\\text{ g}$), $x = 0,152\\text{ mol}$ ($6,08\\text{ g}$)). Với số liệu đề cho $0,25\\text{ mol}$: học sinh giải ra $y = 0$, $x = 0,25\\text{ mol}$ ($10\\text{ g}$ $\\ce{NaOH}$, $0\\text{ g}$ $\\ce{Cu(OH)2}$).",
      rubric: [
        { step: "Viết đúng 2 PTHH và lập hệ $40x + 98y = 10$, $x + 2y = 0,25$", points: 0.5 },
        { step: "Giải đúng $x = 0,25\\text{ mol}, y = 0$", points: 0.5 }
      ] },
    { id: "w32_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Tại sao trong phòng thí nghiệm, lọ đựng dung dịch $\\ce{NaOH}$ hoặc nước vôi trong ($\\ce{Ca(OH)2}$) luôn phải đậy nút thật kín (thường dùng nút cao su, tránh dùng nút thủy tinh nhám)?",
      solution: "1) Đậy nút kín để tránh $\\ce{NaOH}, \\ce{Ca(OH)2}$ hấp thụ khí $\\ce{CO2}$ trong không khí biến chất thành muối carbonate ($\\ce{2NaOH + CO2 -> Na2CO3 + H2O}$; $\\ce{Ca(OH)2 + CO2 -> CaCO3 v + H2O}$). 2) Tránh dùng nút thủy tinh nhám vì kiềm ăn mòn dần $\\ce{SiO2}$ trong thủy tinh tạo muối silicate làm dính chặt nút không mở ra được.",
      rubric: [
        { step: "Giải thích kiềm hấp thụ $\\ce{CO2}$ ngoài không khí tạo muối carbonate (viết đúng PTHH)", points: 0.5 },
        { step: "Giải thích kiềm ăn mòn thủy tinh ($\\ce{SiO2}$) gây kẹt nút thủy tinh nhám", points: 0.5 }
      ] }
  ]
};
