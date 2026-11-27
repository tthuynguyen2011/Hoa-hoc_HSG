window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[63] = {
  week: 63,
  title: "CĐ 5B: Bài toán Thủy phân Ester, Chất béo & Lên men Carbohydrate",
  objectives: [
    "Giải thành thạo các bài toán thủy phân ester đơn chức, ester 2 chức và chất béo bằng dung dịch kiềm (chú ý trường hợp kiềm dư khi cô cạn).",
    "Nắm vững phương pháp tính nhanh theo sơ đồ chuỗi chuyển hóa carbohydrate: Tinh bột / Cellulose $\\rightarrow$ Glucose $\\rightarrow$ Ethanol $\\rightarrow$ Acetic acid (nhân/chia hiệu suất từng bước).",
    "Kết hợp bài toán lên men sinh khí $\\ce{CO2}$ hấp thụ vào dung dịch kiềm ($\\ce{Ca(OH)2, Ba(OH)2}$)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu bài tập chuyên đề CĐ 5B.",
    sessions: [
      {
        name: "Buổi 1: Thủy phân Ester & Chất béo nâng cao",
        guide: "Chú ý công thức BTKL: $m_{\\text{ester}} + m_{\\text{NaOH pư}} = m_{\\text{muối}} + m_{\\text{alcohol}}$; khi cô cạn có kiềm dư thì $m_{\\text{rắn}} = m_{\\text{muối}} + m_{\\text{NaOH dư}}$.",
        pitfalls: "HS hay quên trừ glycerol ($M=92$) hoặc quên cộng kiềm dư vào chất rắn khan."
      },
      {
        name: "Buổi 2: Chuỗi lên men Carbohydrate & Hiệu suất nhiều bước",
        guide: "Nhấn mạnh quy tắc: Tính XUÔI (từ nguyên liệu $\\rightarrow$ sản phẩm) thì NHÂN hiệu suất; tính NGƯỢC (từ sản phẩm $\\rightarrow$ nguyên liệu cần dùng) thì CHIA hiệu suất.",
        pitfalls: "Quên hệ số 2 ở phương trình $1\\text{ glucose} \\rightarrow 2\\text{ C}_2\\text{H}_5\\text{OH} + 2\\text{ CO}_2$."
      },
      {
        name: "Buổi 3: Luyện đề Chuyên Hóa vào 10 phần Dẫn xuất & Carbohydrate"
      }
    ]
  },
  lecture: [
    {
      title: "1. Chuyên sâu Thủy phân Ester & Lên men Carbohydrate",
      content: `
<ul>
  <li><strong>Ester + Kiềm:</strong> $n_{\\text{ester đơn}} = n_{\\ce{NaOH pư}} = n_{\\text{muối}} = n_{\\text{alcohol}}$.<br>
  Với <strong>chất béo</strong>: $n_{\\ce{NaOH pư}} = 3 n_{\\text{chất béo}} = 3 n_{\\text{glycerol}}$.<br>
  $m_{\\text{muối}} = m_{\\text{chất béo}} + 40 n_{\\ce{NaOH pư}} - 92 n_{\\text{glycerol}}$.</li>
  <li><strong>Chuỗi Carbohydrate:</strong> $\\ce{C6H10O5} \\text{ (162)} \\xrightarrow{H_1} \\ce{C6H12O6} \\text{ (180)} \\xrightarrow{H_2} 2\\ce{C2H5OH} \\text{ (92)} + 2\\ce{CO2}$.</li>
</ul>`,
      example: "Xà phòng hóa hoàn toàn 17,24 g một chất béo cần vừa đủ 0,06 mol NaOH. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam xà phòng?\nGiải: n(glycerol) = 0,06/3 = 0,02 mol (1,84 g). BTKL: m(muối) = 17,24 + 0,06×40 - 1,84 = 17,8 g.",
      checkpoint: {
        question: "Từ 162 g tinh bột, qua 2 giai đoạn thủy phân (H₁ = 80%) và lên men (H₂ = 75%), khối lượng ethylic alcohol thu được là:",
        options: ["A. 92 g", "B. 55,2 g", "C. 73,6 g", "D. 69 g"],
        answer: 1,
        explanation: "m = (162/162) × 92 × 0,8 × 0,75 = 55,2 g."
      }
    }
  ],
  questions: [
    { id: "w63_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Thủy phân hoàn toàn $0,1\\text{ mol}$ ethyl acetate bằng dung dịch $\\ce{NaOH}$ dư thu được khối lượng muối là:", options: ["A. $8,2\\text{ g}$", "B. $6,8\\text{ g}$", "C. $9,6\\text{ g}$", "D. $4,6\\text{ g}$"], answer: 0, solution: "$0,1 \\times 82 = 8,2\\text{ g}$." },
    { id: "w63_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Xà phòng hóa hoàn toàn $0,05\\text{ mol}$ triolein bằng dung dịch $\\ce{KOH}$ vừa đủ. Số mol $\\ce{KOH}$ đã phản ứng là:", options: ["A. $0,05\\text{ mol}$", "B. $0,10\\text{ mol}$", "C. $0,15\\text{ mol}$", "D. $0,20\\text{ mol}$"], answer: 2, solution: "$3 \\times 0,05 = 0,15\\text{ mol}$." },
    { id: "w63_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Lên men $90\\text{ g}$ glucose ($H=100\\%$) thu được thể tích khí $\\ce{CO2}$ (đkc) là:", options: ["A. $12,395\\text{ L}$", "B. $24,79\\text{ L}$", "C. $49,58\\text{ L}$", "D. $37,185\\text{ L}$"], answer: 1, solution: "$n_{\\text{glucose}} = 0,5\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 1\\text{ mol} \\Rightarrow 24,79\\text{ L}$." },
    { id: "w63_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Thủy phân hoàn toàn $17,1\\text{ g}$ saccharose rồi cho toàn bộ sản phẩm tráng bạc thu được số mol Ag là:", options: ["A. $0,1\\text{ mol}$", "B. $0,2\\text{ mol}$", "C. $0,4\\text{ mol}$", "D. $0,3\\text{ mol}$"], answer: 1, solution: "$0,05\\text{ mol}$ saccharose $\\rightarrow 0,1\\text{ mol}$ monosaccharide $\\rightarrow 0,2\\text{ mol}$ Ag." },
    { id: "w63_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Cho $7,4\\text{ g}$ ester X tác dụng vừa đủ với $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Phân tử khối của ester đơn chức X là:", options: ["A. $60$", "B. $74$", "C. $88$", "D. $102$"], answer: 1, solution: "$M_X = 7,4 / 0,1 = 74$." },
    { id: "w63_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Để sản xuất $46\\text{ kg}$ ethylic alcohol từ glucose ($H=100\\%$), cần dùng tối thiểu bao nhiêu kg glucose?", options: ["A. $90\\text{ kg}$", "B. $45\\text{ kg}$", "C. $180\\text{ kg}$", "D. $135\\text{ kg}$"], answer: 0, solution: "$n_{\\ce{C2H5OH}} = 1\\text{ kmol} \\Rightarrow n_{\\text{glucose}} = 0,5\\text{ kmol} = 90\\text{ kg}$." },
    { id: "w63_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "1 mol chất béo luôn phản ứng tối đa với 3 mol NaOH.", answer: true },
      { text: "Đun nóng ester với dung dịch H₂SO₄ loãng thu được muối và alcohol.", answer: false },
      { text: "Từ 1 mol tinh bột (1 mắt xích C₆H₁₀O₅) lên men thu được tối đa 2 mol C₂H₅OH.", answer: true },
      { text: "Khi cho 0,1 mol ester đơn chức tác dụng với 0,15 mol NaOH, chất rắn khan sau cô cạn chỉ gồm muối.", answer: false }
    ], solution: "b) Sai (thu được acid và alcohol); d) Sai (còn $0,05\\text{ mol}$ $\\ce{NaOH}$ dư)." },
    { id: "w63_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Phản ứng xà phòng hóa chất béo luôn tạo sản phẩm phụ là glycerol.", answer: true },
      { text: "Hiệu suất toàn quá trình nhiều bước bằng tích hiệu suất các bước.", answer: true },
      { text: "Thủy phân cellulose thu được fructose.", answer: false },
      { text: "Glucose và fructose đều tham gia phản ứng tráng bạc tạo 2Ag.", answer: true }
    ], solution: "c) Sai (thủy phân cellulose chỉ tạo glucose)." },
    { id: "w63_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Xà phòng hóa hoàn toàn $26,7\\text{ g}$ tristearin ($M=890$) bằng $\\ce{NaOH}$ vừa đủ. Khối lượng glycerol thu được là bao nhiêu gam?", answer: "2.76", tolerance: 0.05, solution: "$n = 0,03\\text{ mol} \\Rightarrow m_{\\text{glycerol}} = 0,03 \\times 92 = 2,76\\text{ g}$." },
    { id: "w63_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Lên men $180\\text{ g}$ glucose thành ethylic alcohol với hiệu suất $75\\%$. Khối lượng ethylic alcohol thu được là bao nhiêu gam?", answer: "69", tolerance: 0.2, solution: "$n_{\\text{glucose}} = 1\\text{ mol} \\Rightarrow m_{\\ce{C2H5OH}} = 2 \\times 46 \\times 0,75 = 69\\text{ g}$." },
    { id: "w63_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $8,8\\text{ g}$ ethyl acetate tác dụng với $150\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam chất rắn khan?", options: ["A. $8,2\\text{ g}$", "B. $10,2\\text{ g}$", "C. $6,2\\text{ g}$", "D. $12,2\\text{ g}$"], answer: 1, solution: "$n_{\\text{ester}} = 0,1\\text{ mol}$; $n_{\\ce{NaOH}} = 0,15\\text{ mol}$ (dư $0,05\\text{ mol}$). $m_{\\text{rắn}} = 0,1\\times 82 + 0,05\\times 40 = 8,2 + 2,0 = 10,2\\text{ g}$." },
    { id: "w63_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Để sản xuất $100\\text{ L}$ rượu $46^\\circ$ ($D_{\\text{rượu}} = 0,8\\text{ g/mL}$) từ sắn khô chứa $72\\%$ tinh bột với hiệu suất cả quá trình là $80\\%$, cần dùng bao nhiêu kg sắn khô?", options: ["A. $100\\text{ kg}$", "B. $112,5\\text{ kg}$", "C. $125\\text{ kg}$", "D. $90\\text{ kg}$"], answer: 1, solution: "$V_{\\text{rượu}} = 46\\text{ L} \\Rightarrow m = 36,8\\text{ kg}$ ($0,8\\text{ kmol}$). $n_{\\text{tinh bột}} = 0,4 / 0,8 = 0,5\\text{ kmol}$ ($81\\text{ kg}$) $\\Rightarrow m_{\\text{sắn}} = 81 / 0,72 = 112,5\\text{ kg}$." },
    { id: "w63_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đun nóng $13,2\\text{ g}$ hỗn hợp X gồm $\\ce{CH3COOC2H5}$ và $\\ce{C2H5COOCH3}$ với dung dịch $\\ce{NaOH}$ vừa đủ. Số mol $\\ce{NaOH}$ đã phản ứng là:", options: ["A. $0,1\\text{ mol}$", "B. $0,15\\text{ mol}$", "C. $0,2\\text{ mol}$", "D. $0,25\\text{ mol}$"], answer: 1, solution: "Cả hai chất đều là đồng phân của $\\ce{C4H8O2}$ ($M=88$) $\\Rightarrow n = 13,2 / 88 = 0,15\\text{ mol}$." },
    { id: "w63_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Xà phòng hóa hoàn toàn $25,86\\text{ g}$ một chất béo X bằng lượng vừa đủ $0,09\\text{ mol}$ $\\ce{NaOH}$. Khối lượng muối thu được là bao nhiêu gam?", answer: "26.7", tolerance: 0.2, solution: "$n_{\\text{glycerol}} = 0,03\\text{ mol}$ ($2,76\\text{ g}$). $m_{\\text{muối}} = 25,86 + 0,09\\times 40 - 2,76 = 26,7\\text{ g}$." },
    { id: "w63_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Lên men $m\\text{ g}$ glucose với hiệu suất $90\\%$, dẫn toàn bộ $\\ce{CO2}$ sinh ra vào nước vôi trong dư thu được $36\\text{ g}$ kết tủa. Giá trị của $m$ là bao nhiêu gam?", answer: "36", tolerance: 0.2, solution: "$n_{\\ce{CO2}} = 0,36\\text{ mol} \\Rightarrow n_{\\text{glucose pư}} = 0,18\\text{ mol} \\Rightarrow n_{\\text{glucose bđ}} = 0,18 / 0,9 = 0,2\\text{ mol} \\Rightarrow m = 36\\text{ g}$." },
    { id: "w63_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $14,8\\text{ g}$ hỗn hợp X gồm hai ester đồng phân $\\ce{HCOOC2H5}$ và $\\ce{CH3COOCH3}$ tác dụng vừa đủ với dung dịch $\\ce{NaOH}$ đun nóng, thu được dung dịch chứa $15,0\\text{ g}$ hỗn hợp hai muối và $m\\text{ g}$ hỗn hợp hai alcohol. Tính $m$ và phần trăm khối lượng mỗi ester trong X.", solution: "$n_X = 14,8 / 74 = 0,2\\text{ mol} \\Rightarrow n_{\\ce{NaOH}} = 0,2\\text{ mol}$.\nGọi $x, y$ là số mol $\\ce{HCOOC2H5}$ (muối $\\ce{HCOONa}$, $68$) và $\\ce{CH3COOCH3}$ (muối $\\ce{CH3COONa}$, $82$):\n$x + y = 0,2$; $68x + 82y = 15,0 \\Rightarrow 14y = 15,0 - 13,6 = 1,4 \\Rightarrow y = 0,1; x = 0,1\\text{ mol}$ (mỗi ester chiếm $50\\%$).\nBTKL: $m_{\\text{alcohol}} = 14,8 + 0,2\\times 40 - 15,0 = 7,8\\text{ g}$.", rubric: [
      { step: "Tìm đúng $x = y = 0,1\\text{ mol}$ ($50\\%$ mỗi ester)", points: 0.5 },
      { step: "Tính đúng $m_{\\text{alcohol}} = 7,8\\text{ g}$", points: 0.5 }
    ] },
    { id: "w63_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thủy phân $34,2\\text{ g}$ saccharose với hiệu suất $80\\%$ thu được dung dịch X. Cho toàn bộ dung dịch X tác dụng với lượng dư dung dịch $\\ce{AgNO3/NH3}$ đun nóng thu được $m\\text{ g}$ Ag. Tính $m$ (biết saccharose không tráng bạc).", solution: "$n_{\\text{saccharose bđ}} = 34,2 / 342 = 0,1\\text{ mol} \\Rightarrow n_{\\text{saccharose pư}} = 0,08\\text{ mol}$.\nTạo $0,08\\text{ mol}$ glucose và $0,08\\text{ mol}$ fructose $\\Rightarrow$ tổng $0,16\\text{ mol}$ monosaccharide tráng bạc.\n$n_{\\ce{Ag}} = 2 \\times 0,16 = 0,32\\text{ mol} \\Rightarrow m_{\\ce{Ag}} = 0,32 \\times 108 = 34,56\\text{ g}$.", rubric: [
      { step: "Tính đúng số mol glucose và fructose tạo thành $= 0,08\\text{ mol}$ mỗi chất", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Ag}} = 34,56\\text{ g}$", points: 0.5 }
    ] },
    { id: "w63_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hợp chất hữu cơ X mạch hở có công thức phân tử $\\ce{C4H6O4}$ (ester 2 chức tạo từ một alcohol và hai carboxylic acid hoặc ngược lại). Đun nóng $11,8\\text{ g}$ X với $250\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$, cô cạn dung dịch sau phản ứng thu được $15,4\\text{ g}$ chất rắn khan và một alcohol duy nhất Y. Xác định CTCT của X và Y.", solution: "$n_X = 11,8 / 118 = 0,1\\text{ mol}$; $n_{\\ce{NaOH}} = 0,25\\text{ mol}$ (dư $0,05\\text{ mol}$ vì X 2 chức cần $0,2\\text{ mol}$).\n$m_{\\text{muối}} = 15,4 - 0,05\\times 40 = 13,4\\text{ g}$.\nBTKL: $m_Y = 11,8 + 0,2\\times 40 - 13,4 = 6,4\\text{ g}$.\nNếu Y là $\\ce{CH3OH}$ ($32$): $n_Y = 0,2\\text{ mol}$ (2 gốc methyl) $\\Rightarrow$ X tạo từ oxalic acid $\\ce{(COOH)2}$ và $2\\ce{CH3OH}$: $\\ce{CH3OOC-COOCH3}$ (kiểm tra $M_{\\ce{(COONa)2}} = 134 \\Rightarrow 0,1 \\times 134 = 13,4\\text{ g}$, khớp 100%!).", rubric: [
      { step: "Tính đúng $m_{\\text{muối}} = 13,4\\text{ g}$ và $m_Y = 6,4\\text{ g}$", points: 0.5 },
      { step: "Xác định đúng Y là $\\ce{CH3OH}$ và X là $\\ce{CH3OOC-COOCH3}$", points: 0.5 }
    ] },
    { id: "w63_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Lên men $m\\text{ g}$ tinh bột thành ethylic alcohol với hiệu suất cả quá trình là $75\\%$. Lượng $\\ce{CO2}$ sinh ra hấp thụ hoàn toàn vào $2\\text{ L}$ dung dịch $\\ce{Ca(OH)2}$ $0,5\\text{ M}$ thu được $60\\text{ g}$ kết tủa và dung dịch Y; đun nóng Y lại thấy xuất hiện thêm kết tủa. Tính $m$.", solution: "Đun nóng Y lại có kết tủa chứng tỏ tạo muối $\\ce{Ca(HCO3)2}$ (kết tủa tan một phần).\n$n_{\\ce{Ca(OH)2}} = 1\\text{ mol}$; $n_{\\ce{CaCO3}} = 0,6\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 2(1) - 0,6 = 1,4\\text{ mol}$.\n$n_{\\text{mắt xích tinh bột}} = (1,4 / 2) / 0,75 = 14/15\\text{ mol} \\Rightarrow m = (14/15) \\times 162 = 151,2\\text{ g}$.", rubric: [
      { step: "Biện luận đúng trường hợp tạo $\\ce{Ca(HCO3)2}$ và tính $n_{\\ce{CO2}} = 1,4\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{tinh bột}} = 151,2\\text{ g}$", points: 0.5 }
    ] },
    { id: "w63_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đun nóng $30\\text{ g}$ dung dịch $\\ce{CH3COOH}$ $20\\%$ với $20\\text{ g}$ dung dịch $\\ce{C2H5OH}$ $46\\%$ (có $\\ce{H2SO4}$ đặc xúc tác), thu được $4,4\\text{ g}$ ethyl acetate. Tính hiệu suất phản ứng ester hóa.", solution: "$m_{\\ce{CH3COOH}} = 6\\text{ g}$ ($0,1\\text{ mol}$); $m_{\\ce{C2H5OH}} = 9,2\\text{ g}$ ($0,2\\text{ mol}$).\nTính hiệu suất theo chất ít hơn là $\\ce{CH3COOH}$ ($0,1\\text{ mol}$).\n$n_{\\text{ester}} = 4,4 / 88 = 0,05\\text{ mol} \\Rightarrow H = (0,05 / 0,1) \\times 100\\% = 50\\%$.", rubric: [
      { step: "Tính đúng số mol 2 chất và xác định tính H theo $\\ce{CH3COOH}$", points: 0.5 },
      { step: "Tính đúng hiệu suất $H = 50\\%$", points: 0.5 }
    ] }
  ]
};
