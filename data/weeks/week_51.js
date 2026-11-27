window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[51] = {
  week: 51,
  title: "Ester – Chất béo (Lipid) & Phản ứng xà phòng hóa",
  objectives: [
    "Nêu được khái niệm ester, công thức tổng quát của ester no đơn chức mạch hở ($\\ce{C}_n\\ce{H}_{2n}\\ce{O2}, n \\ge 2$) và cách gọi tên ester đơn giản (ethyl acetate).",
    "Trình bày được tính chất vật lý và tính chất hóa học đặc trưng của ester (thủy phân trong môi trường acid và môi trường kiềm – xà phòng hóa).",
    "Phân biệt được lipid và chất béo (triester của glycerol với acid béo); viết được công thức chung $\\ce{(RCOO)3C3H5}$ và các gốc acid béo phổ biến.",
    "Giải được các bài toán HSG về phản ứng ester hóa, thủy phân ester/chất béo bằng kiềm (bảo toàn khối lượng, tăng giảm khối lượng)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Dầu ăn, nước, xà phòng, ống nghiệm, mô hình phân tử ethyl acetate.",
    sessions: [
      {
        name: "Buổi 1: Ester – Cấu tạo, tính chất & Phản ứng thủy phân",
        guide: "Từ phản ứng ester hóa ở Tuần 50, rút ra công thức chung $\\ce{RCOOR'}$. So sánh thủy phân trong acid (thuận nghịch) và thủy phân trong kiềm (một chiều – xà phòng hóa).",
        pitfalls: "HS hay nhầm tên gốc $R'$ với gốc $R$."
      },
      {
        name: "Buổi 2: Chất béo (Lipid) & Phản ứng xà phòng hóa",
        guide: "Giới thiệu 4 acid béo kinh điển: palmitic ($\\ce{C15H31COOH}$), stearic ($\\ce{C17H35COOH}$), oleic ($\\ce{C17H33COOH}$), linoleic ($\\ce{C17H31COOH}$). Tỉ lệ 1 chất béo : 3 NaOH : 1 glycerol ($M = 92$).",
        pitfalls: "Quên hệ số 3 ở $\\ce{NaOH}$ khi xà phòng hóa chất béo."
      },
      {
        name: "Buổi 3: Chuyên đề HSG Ester – Chất béo"
      }
    ]
  },
  lecture: [
    {
      title: "1. Ester & Chất béo (Lipid)",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="460" height="115" viewBox="0 0 460 115" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="230" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Cấu tạo Ethyl Acetate (CH₃COOC₂H₅) — Mùi lê / sơn móng tay</text>
  <rect x="25" y="38" width="115" height="42" rx="8" fill="#dbeafe" stroke="#2563eb"/>
  <text x="82" y="64" font-family="monospace" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">CH₃ - C(=O)</text>
  <text x="82" y="100" font-family="sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Gốc acid (acetate)</text>
  <line x1="140" y1="59" x2="178" y2="59" stroke="#334155" stroke-width="2"/>
  <circle cx="196" cy="59" r="17" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
  <text x="196" y="64" font-family="monospace" font-size="15" font-weight="bold" fill="#991b1b" text-anchor="middle">O</text>
  <line x1="213" y1="59" x2="255" y2="59" stroke="#334155" stroke-width="2"/>
  <rect x="255" y="38" width="175" height="42" rx="8" fill="#dcfce7" stroke="#16a34a"/>
  <text x="342" y="64" font-family="monospace" font-size="14" font-weight="bold" fill="#166534" text-anchor="middle">CH₂ - CH₃ (C₂H₅)</text>
  <text x="342" y="100" font-family="sans-serif" font-size="11" fill="#166534" text-anchor="middle">Gốc rượu (ethyl)</text>
</svg>
</div>
<ul>
  <li><strong>Ester:</strong> Công thức chung $\\ce{RCOOR'}$ ($R' \\ne \\ce{H}$). Thủy phân trong kiềm (xà phòng hóa): $\\ce{CH3COOC2H5 + NaOH ->[t^\\circ] CH3COONa + C2H5OH}$.</li>
  <li><strong>Chất béo:</strong> Triester của glycerol $\\ce{C3H5(OH)3}$ với các acid béo: $\\ce{(RCOO)3C3H5}$.</li>
  <li><strong>Phản ứng xà phòng hóa chất béo:</strong> $\\ce{(RCOO)3C3H5 + 3NaOH ->[t^\\circ] 3RCOONa + C3H5(OH)3}$.</li>
  <li><strong>Hydrogen hóa dầu thực vật:</strong> $\\ce{(C17H33COO)3C3H5 (lỏng) + 3H2 ->[Ni, t^\\circ] (C17H35COO)3C3H5 (rắn)}$.</li>
</ul>`,
      example: "Xà phòng hóa hoàn toàn 17,68 g triolein (M = 884) cần vừa đủ bao nhiêu mL dung dịch NaOH 1M?\nGiải: n(triolein) = 17,68/884 = 0,02 mol → n(NaOH) = 3×0,02 = 0,06 mol → V = 60 mL.",
      checkpoint: {
        question: "Sản phẩm thu được khi đun nóng ethyl acetate (CH₃COOC₂H₅) với dung dịch NaOH dư là:",
        options: ["A. CH₃COOH và C₂H₅OH", "B. CH₃COONa và C₂H₅OH", "C. C₂H₅COONa và CH₃OH", "D. CH₃COONa và H₂O"],
        answer: 1,
        explanation: "CH₃COOC₂H₅ + NaOH → CH₃COONa + C₂H₅OH."
      }
    }
  ],
  questions: [
    { id: "w51_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức cấu tạo của ethyl acetate là:", options: ["A. $\\ce{HCOOC2H5}$", "B. $\\ce{CH3COOCH3}$", "C. $\\ce{CH3COOC2H5}$", "D. $\\ce{C2H5COOCH3}$"], answer: 2, solution: "$\\ce{CH3COOC2H5}$." },
    { id: "w51_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Ester nào sau đây có công thức phân tử $\\ce{C3H6O2}$?", options: ["A. Ethyl acetate", "B. Methyl acetate", "C. Ethyl formate", "D. Cả B và C đều đúng"], answer: 3, solution: "$\\ce{CH3COOCH3}$ và $\\ce{HCOOC2H5}$ đều có CTPT $\\ce{C3H6O2}$." },
    { id: "w51_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Tính chất vật lý nào sau đây KHÔNG đúng với ester thông thường?", options: ["A. Nhẹ hơn nước", "B. Rất ít tan trong nước", "C. Có mùi thơm đặc trưng", "D. Tan vô hạn trong nước như ethylic alcohol"], answer: 3, solution: "Ester ít tan và nổi lên trên mặt nước." },
    { id: "w51_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng giữa ester với dung dịch kiềm ($\\ce{NaOH, KOH}$) khi đun nóng được gọi là:", options: ["A. Phản ứng ester hóa", "B. Phản ứng xà phòng hóa", "C. Phản ứng trùng hợp", "D. Phản ứng lên men"], answer: 1, solution: "Phản ứng xà phòng hóa." },
    { id: "w51_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây là chất béo ở trạng thái lỏng ở điều kiện thường?", options: ["A. Tristearin", "B. Tripalmitin", "C. Triolein", "D. Ethyl acetate"], answer: 2, solution: "Triolein chứa gốc acid béo không no nên ở trạng thái lỏng." },
    { id: "w51_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Để chuyển hóa dầu thực vật (lỏng) thành bơ nhân tạo (rắn), người ta cho dầu thực vật tác dụng với:", options: ["A. Dung dịch NaOH", "B. Khí $\\ce{H2}$ (xúc tác Ni, $t^\\circ$)", "C. Dung dịch $\\ce{H2SO4}$", "D. Khí $\\ce{O2}$"], answer: 1, solution: "Phản ứng cộng $\\ce{H2}$ vào nối đôi $\\ce{C=C}$." },
    { id: "w51_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Đun nóng chất béo với dung dịch NaOH luôn thu được glycerol và muối của acid béo.", answer: true },
      { text: "Chất béo nhẹ hơn nước và không tan trong nước.", answer: true },
      { text: "Phản ứng thủy phân ester trong môi trường kiềm là phản ứng thuận nghịch.", answer: false },
      { text: "Isoamyl acetate là ester có mùi chuối chín.", answer: true }
    ], solution: "c) Sai: thủy phân trong kiềm là phản ứng một chiều." },
    { id: "w51_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Chất béo là triester của glycerol với acid béo.", answer: true },
      { text: "Ăn quá nhiều chất béo no động vật dễ gây béo phì và bệnh tim mạch.", answer: true },
      { text: "Dầu ăn và dầu hỏa đều là chất béo.", answer: false },
      { text: "Xà phòng giặt tẩy được vết dầu mỡ nhờ đầu ưa nước và đuôi kị nước.", answer: true }
    ], solution: "c) Sai: dầu hỏa là hỗn hợp hydrocarbon từ dầu mỏ, không phải chất béo." },
    { id: "w51_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Thủy phân hoàn toàn $1\\text{ mol}$ tristearin trong dung dịch $\\ce{NaOH}$ dư thu được bao nhiêu mol glycerol?", answer: "1", tolerance: 0, solution: "$1\\text{ mol}$ chất béo luôn tạo $1\\text{ mol}$ glycerol." },
    { id: "w51_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Phân tử khối của ethyl acetate ($\\ce{CH3COOC2H5}$) là bao nhiêu amu?", answer: "88", tolerance: 0, solution: "$4\\times 12 + 8 + 32 = 88$." },
    { id: "w51_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Thủy phân hoàn toàn $8,8\\text{ g}$ ethyl acetate bằng dung dịch $\\ce{NaOH}$ dư, đun nóng. Khối lượng muối $\\ce{CH3COONa}$ thu được là:", options: ["A. $8,2\\text{ g}$", "B. $6,8\\text{ g}$", "C. $9,6\\text{ g}$", "D. $4,1\\text{ g}$"], answer: 0, solution: "$n_{\\text{ester}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{CH3COONa}} = 0,1 \\times 82 = 8,2\\text{ g}$." },
    { id: "w51_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $12\\text{ g}$ acetic acid với $13,8\\text{ g}$ ethylic alcohol (có $\\ce{H2SO4}$ đặc xúc tác), thu được $11\\text{ g}$ ester. Hiệu suất của phản ứng ester hóa là:", options: ["A. $50\\%$", "B. $62,5\\%$", "C. $75\\%$", "D. $80\\%$"], answer: 1, solution: "$n_{\\text{acid}} = 0,2\\text{ mol} < n_{\\text{rượu}} = 0,3\\text{ mol}$. $n_{\\text{ester}} = 11/88 = 0,125\\text{ mol} \\Rightarrow H = 0,125/0,2 = 62,5\\%$." },
    { id: "w51_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Để tẩy sạch vết dầu mỡ dính trên quần áo, dùng chất nào sau đây hiệu quả nhất?", options: ["A. Nước lạnh", "B. Nước nóng", "C. Nước xà phòng hoặc xăng", "D. Giấm ăn"], answer: 2, solution: "Xà phòng nhũ tương hóa dầu mỡ; xăng hòa tan dầu mỡ." },
    { id: "w51_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Xà phòng hóa hoàn toàn $17,8\\text{ g}$ tristearin ($M=890$) bằng dung dịch $\\ce{KOH}$ dư. Khối lượng glycerol thu được là bao nhiêu gam?", answer: "1.84", tolerance: 0.05, solution: "$n_{\\text{tristearin}} = 0,02\\text{ mol} \\Rightarrow m_{\\text{glycerol}} = 0,02 \\times 92 = 1,84\\text{ g}$." },
    { id: "w51_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đun nóng $7,4\\text{ g}$ một ester no, đơn chức, mạch hở X với dung dịch $\\ce{NaOH}$ vừa đủ thu được $6,8\\text{ g}$ muối $\\ce{HCOONa}$. Phân tử khối của alcohol tạo nên X là bao nhiêu amu?", answer: "46", tolerance: 0, solution: "$n_{\\ce{HCOONa}} = 0,1\\text{ mol} \\Rightarrow M_X = 74$ ($\\ce{HCOOC2H5}$). Alcohol là $\\ce{C2H5OH}$ ($M = 46$)." },
    { id: "w51_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đun nóng $26,7\\text{ g}$ tristearin ($M=890$) với dung dịch $\\ce{NaOH}$ vừa đủ thu được $2,76\\text{ g}$ glycerol và $m\\text{ g}$ xà phòng nguyên chất. Tính $m$.", solution: "$n_{\\text{glycerol}} = 2,76/92 = 0,03\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,09\\text{ mol}$.\nTheo ĐLBTKL: $m_{\\text{xà phòng}} = 26,7 + 0,09 \\times 40 - 2,76 = 27,54\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\text{glycerol}} = 0,03\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,09\\text{ mol}$", points: 0.5 },
      { step: "Áp dụng ĐLBTKL tính đúng $m = 27,54\\text{ g}$", points: 0.5 }
    ] },
    { id: "w51_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hỗn hợp X gồm hai ester đơn chức, mạch hở tác dụng vừa đủ với $200\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$, thu được $16,4\\text{ g}$ một muối duy nhất và $7,8\\text{ g}$ hỗn hợp hai alcohol no đơn chức. Xác định CTCT của hai ester.", solution: "$n_{\\ce{NaOH}} = 0,2\\text{ mol} \\Rightarrow M_{\\text{muối}} = 16,4/0,2 = 82$ ($\\ce{CH3COONa}$).\n$\\overline{M}_{\\text{alcohol}} = 7,8/0,2 = 39 \\Rightarrow$ có $\\ce{CH3OH}$ ($32$) và $\\ce{C2H5OH}$ ($46$).\nVậy hai ester là $\\ce{CH3COOCH3}$ và $\\ce{CH3COOC2H5}$.", rubric: [
      { step: "Tìm đúng muối $\\ce{CH3COONa}$ ($M=82$)", points: 0.25 },
      { step: "Tính $\\overline{M}_{\\text{alcohol}} = 39$ và suy ra $\\ce{CH3OH, C2H5OH}$", points: 0.5 },
      { step: "Kết luận đúng 2 ester", points: 0.25 }
    ] },
    { id: "w51_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $4,4\\text{ g}$ một ester no, đơn chức, mạch hở X thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc). Mặt khác, cho $4,4\\text{ g}$ X tác dụng với $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$ rồi cô cạn dung dịch sau phản ứng thu được $6,1\\text{ g}$ chất rắn khan. Xác định CTCT của X.", solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2O}} = 0,2\\text{ mol} \\Rightarrow m_{\\text{O trong X}} = 4,4 - 2,4 - 0,4 = 1,6\\text{ g} \\Rightarrow n_X = 0,05\\text{ mol} \\Rightarrow \\ce{C4H8O2}$.\n$0,05\\text{ mol}$ X + $0,1\\text{ mol}$ $\\ce{NaOH} \\rightarrow 0,05\\text{ mol}$ $\\ce{RCOONa} + 0,05\\text{ mol}$ $\\ce{NaOH}$ dư.\n$0,05(R + 67) + 0,05\\times 40 = 6,1 \\Rightarrow R = 15$ ($\\ce{CH3}-$) $\\Rightarrow$ X là $\\ce{CH3COOC2H5}$.", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C4H8O2}$ ($0,05\\text{ mol}$)", points: 0.5 },
      { step: "Tính chất rắn gồm muối + NaOH dư $\\Rightarrow$ CTCT $\\ce{CH3COOC2H5}$", points: 0.5 }
    ] },
    { id: "w51_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thủy phân hoàn toàn $17,6\\text{ g}$ hỗn hợp gồm methyl acetate ($\\ce{C3H6O2}$) và ethyl propionate ($\\ce{C5H10O2}$) bằng dung dịch $\\ce{NaOH}$ vừa đủ. Tổng số mol $\\ce{NaOH}$ đã phản ứng là $0,2\\text{ mol}$. Tính phần trăm khối lượng mỗi ester.", solution: "Gọi $x, y$ là số mol $\\ce{CH3COOCH3}$ ($74$) và $\\ce{C2H5COOC2H5}$ ($102$): $x + y = 0,2$; $74x + 102y = 17,6$.\nGiải hệ: $28y = 2,8 \\Rightarrow y = 0,1\\text{ mol}$ ($10,2\\text{ g} \\approx 57,95\\%$); $x = 0,1\\text{ mol}$ ($7,4\\text{ g} \\approx 42,05\\%$).", rubric: [
      { step: "Lập đúng hệ phương trình", points: 0.5 },
      { step: "Giải đúng $x = y = 0,1\\text{ mol}$ và $\\%$ mỗi chất", points: 0.5 }
    ] },
    { id: "w51_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một loại mỡ động vật chứa $40\\%$ tristearin ($890$), $30\\%$ tripalmitin ($806$) và $30\\%$ triolein ($884$) về khối lượng. Cần dùng bao nhiêu kg $\\ce{NaOH}$ để xà phòng hóa hoàn toàn $1\\text{ tấn}$ loại mỡ trên (hiệu suất $100\\%$)?", solution: "$n_{\\text{tristearin}} = 400/890 = 0,4494\\text{ kmol}$; $n_{\\text{tripalmitin}} = 300/806 = 0,3722\\text{ kmol}$; $n_{\\text{triolein}} = 300/884 = 0,3394\\text{ kmol}$.\nTổng $n_{\\text{chất béo}} = 1,161\\text{ kmol} \\Rightarrow n_{\\ce{NaOH}} = 3 \\times 1,161 = 3,483\\text{ kmol} \\Rightarrow m_{\\ce{NaOH}} = 3,483 \\times 40 = 139,32\\text{ kg}$.", rubric: [
      { step: "Tính đúng số kmol từng chất béo", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{NaOH}} \\approx 139,32\\text{ kg}$", points: 0.5 }
    ] }
  ]
};
