window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[54] = {
  week: 54,
  title: "Kiểm tra cuối HK1 Năm 2: Tổng kết Hóa Hữu cơ THCS",
  objectives: [
    "Hệ thống hóa toàn bộ kiến thức Hóa học Hữu cơ THCS: Alkane, Alkene, Ethylic alcohol, Acetic acid, Ester – Chất béo, Carbohydrate, Amino acid – Protein – Polymer.",
    "Vận dụng thành thạo sơ đồ chuyển hóa hữu cơ trọng tâm (Tinh bột → Glucose → Ethanol → Acetic acid → Ethyl acetate).",
    "Phân biệt được các chất hữu cơ bằng phương pháp hóa học ($\\ce{Br2, Na, NaHCO3}$, quỳ tím, $\\ce{AgNO3/NH3, I2}$).",
    "Giải hoàn chỉnh bài kiểm tra tổng hợp chuẩn cấu trúc thi HSG lớp 9 và tuyển sinh chuyên Hóa lớp 10."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu tổng kết sơ đồ tư duy Hóa học Hữu cơ THCS, đề kiểm tra Tuần 54.",
    sessions: [
      {
        name: "Buổi 1: Hệ thống hóa sơ đồ chuyển hóa & Nhận biết chất hữu cơ",
        guide: "Vẽ chuỗi vàng hữu cơ và bảng thuốc thử đặc trưng.",
        pitfalls: "Quên điều kiện phản ứng trong chuỗi phương trình."
      },
      {
        name: "Buổi 2: Kiểm tra tổng hợp (Phần Cơ bản & Nâng cao)"
      },
      {
        name: "Buổi 3: Chữa bài & Luyện 5 câu HSG tổng hợp"
      }
    ]
  },
  lecture: [
    {
      title: "1. Sơ đồ chuyển hóa trọng tâm Hóa Hữu cơ THCS",
      content: `
<div style="text-align:center; margin: 12px 0;">
<svg width="510" height="155" viewBox="0 0 510 155" xmlns="http://www.w3.org/2000/svg" style="background:#f8fafc;border:1px solid #cbd5e1;border-radius:10px;">
  <text x="255" y="20" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Chuỗi chuyển hóa vàng Hóa Hữu cơ THCS</text>
  <rect x="15" y="36" width="90" height="34" rx="6" fill="#fef3c7" stroke="#d97706"/>
  <text x="60" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Tinh bột</text>
  <line x1="105" y1="53" x2="135" y2="53" stroke="#334155" stroke-width="2"/>
  <rect x="135" y="36" width="95" height="34" rx="6" fill="#fde68a" stroke="#d97706"/>
  <text x="182" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#92400e" text-anchor="middle">Glucose</text>
  <line x1="230" y1="53" x2="260" y2="53" stroke="#334155" stroke-width="2"/>
  <rect x="260" y="36" width="105" height="34" rx="6" fill="#dbeafe" stroke="#2563eb"/>
  <text x="312" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">C₂H₅OH</text>
  <line x1="365" y1="53" x2="395" y2="53" stroke="#334155" stroke-width="2"/>
  <rect x="395" y="36" width="100" height="34" rx="6" fill="#fee2e2" stroke="#dc2626"/>
  <text x="445" y="57" font-family="sans-serif" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">CH₃COOH</text>

  <rect x="135" y="104" width="105" height="34" rx="6" fill="#dcfce7" stroke="#16a34a"/>
  <text x="187" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">C₂H₄ (Ethene)</text>
  <line x1="240" y1="121" x2="312" y2="70" stroke="#16a34a" stroke-width="2"/>

  <rect x="355" y="104" width="140" height="34" rx="6" fill="#f3e8ff" stroke="#7e22ce"/>
  <text x="425" y="125" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6b21a8" text-anchor="middle">CH₃COOC₂H₅</text>
  <line x1="445" y1="70" x2="445" y2="104" stroke="#7e22ce" stroke-width="2"/>
</svg>
</div>
<p>Ghi nhớ bảng thuốc thử nhận biết: $\\ce{Br2}$ (alkene), Quỳ tím / $\\ce{CaCO3}$ (acetic acid), Na (alcohol), $\\ce{AgNO3/NH3}$ (glucose), $\\ce{I2}$ (hồ tinh bột).</p>`,
      example: "Phân biệt 4 dung dịch: acetic acid, ethylic alcohol, glucose, hồ tinh bột.\nGiải: Dùng I₂ nhận hồ tinh bột (xanh tím); dùng quỳ tím nhận acetic acid (đỏ); dùng AgNO₃/NH₃ đun nhẹ nhận glucose (tráng bạc); còn lại là ethylic alcohol.",
      checkpoint: {
        question: "Để phân biệt khí methane (CH₄) và khí ethylene (C₂H₄), thuốc thử thích hợp nhất là:",
        options: ["A. Nước vôi trong", "B. Dung dịch nước bromine", "C. Quỳ tím ẩm", "D. Dung dịch NaOH"],
        answer: 1,
        explanation: "Ethylene làm mất màu dung dịch nước bromine, methane không phản ứng."
      }
    }
  ],
  questions: [
    { id: "w54_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây thuộc dãy đồng đẳng alkane?", options: ["A. $\\ce{C2H4}$", "B. $\\ce{C3H8}$", "C. $\\ce{C2H2}$", "D. $\\ce{C6H6}$"], answer: 1, solution: "$\\ce{C3H8}$ là propane." },
    { id: "w54_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng đặc trưng của ethylene ($\\ce{C2H4}$) với dung dịch bromine thuộc loại:", options: ["A. Phản ứng thế", "B. Phản ứng cộng", "C. Phản ứng ester hóa", "D. Phản ứng xà phòng hóa"], answer: 1, solution: "Phản ứng cộng $\\ce{Br2}$." },
    { id: "w54_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Trong $200\\text{ mL}$ dung dịch rượu $25^\\circ$ có chứa bao nhiêu mL ethylic alcohol nguyên chất?", options: ["A. $25\\text{ mL}$", "B. $50\\text{ mL}$", "C. $75\\text{ mL}$", "D. $100\\text{ mL}$"], answer: 1, solution: "$200 \\times 25 / 100 = 50\\text{ mL}$." },
    { id: "w54_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chất nào sau đây tác dụng được với đá vôi ($\\ce{CaCO3}$) giải phóng khí $\\ce{CO2}$?", options: ["A. $\\ce{C2H5OH}$", "B. $\\ce{CH3COOH}$", "C. $\\ce{CH3COOC2H5}$", "D. $\\ce{C6H12O6}$"], answer: 1, solution: "Acetic acid." },
    { id: "w54_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Sản phẩm của phản ứng xà phòng hóa chất béo bằng dung dịch $\\ce{NaOH}$ là:", options: ["A. Acid béo và nước", "B. Muối của acid béo (xà phòng) và glycerol", "C. Glucose và fructose", "D. Ethyl acetate và nước"], answer: 1, solution: "Muối của acid béo và glycerol." },
    { id: "w54_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Carbohydrate nào vừa có trong máu người ($\\sim 0,1\\%$), vừa có phản ứng tráng bạc?", options: ["A. Saccharose", "B. Glucose", "C. Tinh bột", "D. Cellulose"], answer: 1, solution: "Glucose ($\\ce{C6H12O6}$)." },
    { id: "w54_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Đun nóng hồ tinh bột với H₂SO₄ loãng thu được sản phẩm cuối cùng là glucose.", answer: true },
      { text: "Chất dẻo PVC có monomer là vinyl chloride (CH₂=CH-Cl).", answer: true },
      { text: "Saccharose tham gia phản ứng tráng bạc trực tiếp.", answer: false },
      { text: "Protein khi đốt cháy có mùi khét như tóc cháy.", answer: true }
    ], solution: "c) Sai: saccharose không tráng bạc trực tiếp." },
    { id: "w54_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Ethylic alcohol và acetic acid đều tác dụng được với kim loại Na.", answer: true },
      { text: "CH₄ và C₂H₄ đều làm mất màu dung dịch nước bromine.", answer: false },
      { text: "Dầu thực vật là chất béo chứa chủ yếu gốc acid béo không no.", answer: true },
      { text: "Glycine có tính chất lưỡng tính.", answer: true }
    ], solution: "b) Sai: $\\ce{CH4}$ không làm mất màu dung dịch $\\ce{Br2}$." },
    { id: "w54_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Số nguyên tử hydrogen trong 1 phân tử ethyl acetate ($\\ce{CH3COOC2H5}$) là bao nhiêu?", answer: "8", tolerance: 0, solution: "$\\ce{C4H8O2}$ có $8$ nguyên tử H." },
    { id: "w54_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $6\\text{ g}$ acetic acid tác dụng hoàn toàn với kim loại $\\ce{Na}$ dư thu được bao nhiêu mol khí $\\ce{H2}$?", answer: "0.05", tolerance: 0.005, solution: "$n_{\\text{acid}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,05\\text{ mol}$." },
    { id: "w54_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn một hydrocarbon X thu được $n_{\\ce{H2O}} > n_{\\ce{CO2}}$. Chất X thuộc dãy đồng đẳng nào?", options: ["A. Alkane", "B. Alkene", "C. Alkyne", "D. Arene"], answer: 0, solution: "Đốt alkane luôn cho $n_{\\ce{H2O}} > n_{\\ce{CO2}}$." },
    { id: "w54_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Dẫn $4,958\\text{ L}$ hỗn hợp $\\ce{CH4}$ và $\\ce{C2H4}$ (đkc) qua dung dịch $\\ce{Br2}$ dư thấy có $16\\text{ g}$ $\\ce{Br2}$ phản ứng. Phần trăm thể tích của $\\ce{C2H4}$ là:", options: ["A. $25\\%$", "B. $50\\%$", "C. $60\\%$", "D. $75\\%$"], answer: 1, solution: "$n_{\\text{hh}} = 0,2$; $n_{\\ce{C2H4}} = 0,1 \\Rightarrow 50\\%$." },
    { id: "w54_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Lên men $45\\text{ g}$ glucose thành ethylic alcohol với hiệu suất $80\\%$. Thể tích khí $\\ce{CO2}$ (đkc) thu được là:", options: ["A. $9,916\\text{ L}$", "B. $4,958\\text{ L}$", "C. $12,395\\text{ L}$", "D. $7,437\\text{ L}$"], answer: 0, solution: "$n_{\\text{glucose}} = 0,25 \\Rightarrow n_{\\ce{CO2}} = 0,4\\text{ mol} \\Rightarrow V = 9,916\\text{ L}$." },
    { id: "w54_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Thủy phân hoàn toàn $17,6\\text{ g}$ ethyl acetate bằng dung dịch $\\ce{NaOH}$ vừa đủ. Khối lượng ethylic alcohol thu được là bao nhiêu gam?", answer: "9.2", tolerance: 0.1, solution: "$n = 0,2\\text{ mol} \\Rightarrow m_{\\ce{C2H5OH}} = 0,2 \\times 46 = 9,2\\text{ g}$." },
    { id: "w54_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Để điều chế $12\\text{ g}$ acetic acid bằng cách lên men giấm từ ethylic alcohol (hiệu suất $80\\%$), cần tối thiểu bao nhiêu gam ethylic alcohol nguyên chất?", answer: "11.5", tolerance: 0.1, solution: "$n_{\\text{acid}} = 0,2\\text{ mol} \\Rightarrow n_{\\text{rượu}} = 0,2/0,8 = 0,25\\text{ mol} \\Rightarrow m = 11,5\\text{ g}$." },
    { id: "w54_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $16,6\\text{ g}$ hỗn hợp X gồm ethylic alcohol và acetic acid tác dụng với kim loại $\\ce{Na}$ dư thu được $3,7185\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính phần trăm khối lượng mỗi chất trong X.", solution: "$n_{\\ce{H2}} = 0,15\\text{ mol} \\Rightarrow x + y = 0,3$; $46x + 60y = 16,6$. Giải hệ: $y = 0,2\\text{ mol}$ ($12\\text{ g} \\approx 72,29\\%$ $\\ce{CH3COOH}$); $x = 0,1\\text{ mol}$ ($4,6\\text{ g} \\approx 27,71\\%$ $\\ce{C2H5OH}$).", rubric: [
      { step: "Lập đúng hệ $x + y = 0,3$ và $46x + 60y = 16,6$", points: 0.5 },
      { step: "Giải đúng $\\%m$: $\\ce{C2H5OH}$ $27,71\\%$ và $\\ce{CH3COOH}$ $72,29\\%$", points: 0.5 }
    ] },
    { id: "w54_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $7,4\\text{ g}$ một chất hữu cơ X thu được $7,437\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $5,4\\text{ g}$ $\\ce{H2O}$. Biết tỉ khối hơi của X so với $\\ce{H2}$ là $37$ và X tác dụng với $\\ce{NaOH}$ nhưng không tác dụng với $\\ce{Na}$. Xác định CTCT của X.", solution: "$n_{\\ce{CO2}} = 0,3$; $n_{\\ce{H2O}} = 0,3$; $n_{\\text{O}} = 0,2 \\Rightarrow \\ce{C3H6O2}$ ($M=74$). Vì X là ester nên CTCT là $\\ce{HCOOC2H5}$ hoặc $\\ce{CH3COOCH3}$.", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C3H6O2}$", points: 0.5 },
      { step: "Biện luận đúng 2 CTCT ester", points: 0.5 }
    ] },
    { id: "w54_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thực hiện sơ đồ chuyển hóa sau (ghi rõ điều kiện): Tinh bột $\\rightarrow$ Glucose $\\rightarrow$ Ethylic alcohol $\\rightarrow$ Acetic acid $\\rightarrow$ Ethyl acetate.", solution: "(1) $\\ce{(C6H10O5)_n + nH2O ->[H+, t^\\circ] nC6H12O6}$\n(2) $\\ce{C6H12O6 ->[\\text{enzyme}] 2C2H5OH + 2CO2 ^}$\n(3) $\\ce{C2H5OH + O2 ->[\\text{men giấm}] CH3COOH + H2O}$\n(4) $\\ce{CH3COOH + C2H5OH <=>[\\ce{H2SO4}\\text{ đặc}, t^\\circ] CH3COOC2H5 + H2O}$.", rubric: [
      { step: "Viết đúng PTHH (1) và (2) kèm điều kiện", points: 0.5 },
      { step: "Viết đúng PTHH (3) và (4) kèm điều kiện", points: 0.5 }
    ] },
    { id: "w54_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Xà phòng hóa hoàn toàn $17,8\\text{ g}$ tristearin ($M=890$) bằng $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $0,8\\text{ M}$. Tính khối lượng muối natri stearate thu được sau phản ứng.", solution: "$n_{\\text{tristearin}} = 0,02\\text{ mol}$; $n_{\\ce{NaOH}} = 0,08\\text{ mol}$ (dư $0,02\\text{ mol}$).\nTính theo tristearin: $n_{\\text{muối}} = 3 \\times 0,02 = 0,06\\text{ mol} \\Rightarrow m_{\\text{muối}} = 0,06 \\times 306 = 18,36\\text{ g}$.", rubric: [
      { step: "Xác định đúng $\\ce{NaOH}$ dư $0,02\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{muối}} = 18,36\\text{ g}$", points: 0.5 }
    ] },
    { id: "w54_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $V\\text{ L}$ khí $\\ce{C2H4}$ (đkc) rồi dẫn toàn bộ sản phẩm cháy qua bình đựng dung dịch $\\ce{Ca(OH)2}$ dư thấy có $30\\text{ g}$ kết tủa trắng và khối lượng dung dịch sau phản ứng giảm $m\\text{ g}$ so với ban đầu. Tính $V$ và $m$.", solution: "$n_{\\ce{CO2}} = n_{\\ce{CaCO3}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{C2H4}} = 0,15\\text{ mol} \\Rightarrow V = 0,15 \\times 24,79 = 3,7185\\text{ L}$.\nVì đốt $\\ce{C2H4}$ nên $n_{\\ce{H2O}} = n_{\\ce{CO2}} = 0,3\\text{ mol}$ ($5,4\\text{ g}$); $m_{\\ce{CO2}} = 13,2\\text{ g}$.\n$m_{\\text{giảm}} = 30 - (13,2 + 5,4) = 11,4\\text{ g}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,3\\text{ mol}$ và $V = 3,7185\\text{ L}$", points: 0.5 },
      { step: "Tính đúng độ giảm khối lượng dung dịch $m = 11,4\\text{ g}$", points: 0.5 }
    ] }
  ]
};
