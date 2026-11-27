window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[53] = {
  week: 53,
  title: "Amino acid, Protein & Polymer (Chất dẻo, Tơ, Cao su)",
  objectives: [
    "Nêu được khái niệm amino acid (nhận biết glycine $\\ce{H2N-CH2-COOH}$), tính chất lưỡng tính và khái niệm peptide, protein.",
    "Trình bày được tính chất hóa học của protein (thủy phân, sự đông tụ bởi nhiệt/acid/base/muối kim loại nặng) và vai trò sinh học.",
    "Trình bày được khái niệm polymer, monomer, mắt xích, phản ứng trùng hợp; phân biệt được chất dẻo, tơ, cao su.",
    "Nêu được tác hại của rác thải nhựa khó phân hủy và đề xuất giải pháp giảm thiểu ô nhiễm nhựa (3R, nhựa sinh học)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Lòng trắng trứng gà, chanh, mẫu sợi bông, sợi tơ tằm, sợi nilon, ống nhựa PVC.",
    sessions: [
      {
        name: "Buổi 1: Amino acid & Protein",
        guide: "Amino acid có cả nhóm $-\\ce{NH2}$ (base) và $-\\ce{COOH}$ (acid) nên có tính lưỡng tính. Protein bị đông tụ khi đun nóng hoặc gặp acid/base/muối kim loại nặng; đốt cháy có mùi khét như tóc.",
        pitfalls: "HS hay nhầm hiện tượng cháy khét của tơ tằm với nhựa tổng hợp."
      },
      {
        name: "Buổi 2: Polymer – Chất dẻo, Tơ, Cao su & Môi trường",
        guide: "Phân biệt PE, PP, PVC; tơ thiên nhiên vs tơ hóa học; cao su thiên nhiên vs cao su tổng hợp. Nguyên tắc 3R giảm rác thải nhựa.",
        pitfalls: "Viết sai phương trình trùng hợp thiếu chữ $n$ hoặc giữ nguyên liên kết đôi."
      },
      {
        name: "Buổi 3: Bài tập Amino acid & Polymer (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Amino acid, Protein & Polymer",
      content: `
<ul>
  <li><strong>Amino acid:</strong> Chứa nhóm $-\\ce{NH2}$ và $-\\ce{COOH}$, có <strong>tính lưỡng tính</strong> (tác dụng cả $\\ce{HCl}$ và $\\ce{NaOH}$). Ví dụ: Glycine $\\ce{H2N-CH2-COOH}$ ($M = 75$).</li>
  <li><strong>Protein:</strong> Polypeptide cao phân tử tạo từ các $\\alpha$-amino acid qua liên kết peptide ($-\\ce{CO-NH}-$). Bị thủy phân tạo amino acid; bị <strong>đông tụ</strong> khi đun nóng hoặc gặp acid, base, muối kim loại nặng; đốt cháy có <strong>mùi khét như tóc cháy</strong>.</li>
  <li><strong>Polymer:</strong> Tạo từ nhiều mắt xích (từ monomer). Ví dụ: $n\\ce{CH2=CH-Cl} \\xrightarrow{t^\\circ, p, \\text{xt}} (-\\ce{CH2-CHCl}-)_n$ (PVC). Gồm: <strong>Chất dẻo</strong> (PE, PP, PVC), <strong>Tơ</strong> (bông, tơ tằm, nilon), <strong>Cao su</strong> (cao su thiên nhiên, buna).</li>
</ul>`,
      example: "Cho 7,5 g glycine (H₂N-CH₂-COOH) tác dụng vừa đủ với NaOH. Tính khối lượng muối thu được.\nGiải: n(glycine) = 7,5/75 = 0,1 mol → m(H₂N-CH₂-COONa) = 0,1 × 97 = 9,7 g.",
      checkpoint: {
        question: "Monomer dùng để điều chế nhựa PVC (poly(vinyl chloride)) là:",
        options: ["A. CH₂=CH₂", "B. CH₂=CH-Cl", "C. CH₂=CH-CH₃", "D. CF₂=CF₂"],
        answer: 1,
        explanation: "Trùng hợp vinyl chloride CH₂=CH-Cl thu được PVC."
      }
    }
  ],
  questions: [
    { id: "w53_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Trong các chất sau, chất nào là protein?", options: ["A. Tinh bột", "B. Lòng trắng trứng (albumin)", "C. Cellulose", "D. Polyethylene"], answer: 1, solution: "Lòng trắng trứng chứa protein." },
    { id: "w53_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Để phân biệt sợi tơ tằm (protein) và sợi nilon, cách đơn giản nhất là:", options: ["A. Cho vào nước", "B. Đốt cháy và ngửi mùi (tơ tằm có mùi khét như tóc cháy)", "C. Nhỏ dung dịch iodine", "D. Cho tác dụng NaCl"], answer: 1, solution: "Tơ tằm đốt có mùi khét đặc trưng của protein." },
    { id: "w53_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Polymer nào sau đây là polymer thiên nhiên?", options: ["A. Nhựa PE", "B. Nhựa PVC", "C. Tinh bột và tơ tằm", "D. Cao su buna"], answer: 2, solution: "Tinh bột và tơ tằm có sẵn trong tự nhiên." },
    { id: "w53_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Vật liệu polymer có tính đàn hồi được gọi là:", options: ["A. Chất dẻo", "B. Tơ", "C. Cao su", "D. Keo dán"], answer: 2, solution: "Cao su có tính đàn hồi." },
    { id: "w53_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Ống dẫn nước bằng nhựa cứng thông dụng hiện nay thường làm từ loại nhựa nào?", options: ["A. PE", "B. PVC", "C. Cao su buna", "D. Tơ visco"], answer: 1, solution: "PVC (poly(vinyl chloride))." },
    { id: "w53_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Thủy phân hoàn toàn protein thu được hỗn hợp các:", options: ["A. Glucose", "B. Amino acid", "C. Acid béo", "D. Ester"], answer: 1, solution: "Protein cấu tạo từ các $\\alpha$-amino acid." },
    { id: "w53_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Glycine (H₂N-CH₂-COOH) tác dụng được với cả dung dịch HCl và NaOH.", answer: true },
      { text: "Không nên đốt rác thải nhựa PVC vì sinh ra khí HCl độc hại.", answer: true },
      { text: "Khi nấu canh cua, gạch cua nổi lên là do sự đông tụ protein.", answer: true },
      { text: "Nhựa PE rất dễ phân hủy sinh học ngoài môi trường trong vài tuần.", answer: false }
    ], solution: "d) Sai: nhựa PE mất hàng trăm năm mới phân hủy." },
    { id: "w53_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nguyên tắc 3R gồm Reduce (Giảm thiểu), Reuse (Tái sử dụng), Recycle (Tái chế).", answer: true },
      { text: "Sợi bông thuộc loại tơ tổng hợp.", answer: false },
      { text: "Protein có phân tử khối rất lớn.", answer: true },
      { text: "Monomer của PE là ethylene.", answer: true }
    ], solution: "b) Sai: sợi bông là tơ thiên nhiên (cellulose)." },
    { id: "w53_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Mắt xích của nhựa polyethylene (PE) có phân tử khối bằng bao nhiêu amu?", answer: "28", tolerance: 0, solution: "$-\\ce{CH2-CH2}-$ có $M = 28$." },
    { id: "w53_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Phân tử khối của vinyl chloride ($\\ce{CH2=CH-Cl}$) là bao nhiêu amu?", answer: "62.5", tolerance: 0.1, solution: "$24 + 3 + 35,5 = 62,5$." },
    { id: "w53_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Một đoạn mạch polymer PVC có phân tử khối là $125\\ 000\\text{ amu}$. Hệ số trùng hợp $n$ là:", options: ["A. 1000", "B. 2000", "C. 2500", "D. 3000"], answer: 1, solution: "$n = 125\\ 000 / 62,5 = 2000$." },
    { id: "w53_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho $15\\text{ g}$ glycine ($\\ce{H2N-CH2-COOH}$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Khối lượng muối thu được là:", options: ["A. $22,3\\text{ g}$", "B. $19,4\\text{ g}$", "C. $18,65\\text{ g}$", "D. $25,4\\text{ g}$"], answer: 0, solution: "$n = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times (75 + 36,5) = 22,3\\text{ g}$." },
    { id: "w53_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Từ $10\\text{ tấn}$ vinyl chloride tiến hành trùng hợp với hiệu suất $85\\%$, khối lượng nhựa PVC thu được là:", options: ["A. $8,5\\text{ tấn}$", "B. $10\\text{ tấn}$", "C. $7,5\\text{ tấn}$", "D. $6,25\\text{ tấn}$"], answer: 0, solution: "$10 \\times 85\\% = 8,5\\text{ tấn}$." },
    { id: "w53_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Một đoạn phân tử tơ tằm chứa $1500$ mắt xích, mỗi mắt xích nặng trung bình $75\\text{ amu}$. Khối lượng phân tử đoạn tơ tằm đó là bao nhiêu nghìn amu?", answer: "112.5", tolerance: 0.5, solution: "$1500 \\times 75 = 112\\ 500\\text{ amu} = 112,5\\text{ nghìn amu}$." },
    { id: "w53_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một amino acid X thu được $0,3\\text{ mol}$ $\\ce{CO2}$. Phân tử X có bao nhiêu nguyên tử carbon?", answer: "3", tolerance: 0, solution: "Số C $= 0,3 / 0,1 = 3$." },
    { id: "w53_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Để sản xuất $1,25\\text{ tấn}$ nhựa PVC cần dùng bao nhiêu $\\text{m}^3$ khí ethylene (đkc), biết hiệu suất cả quá trình là $80\\%$?", solution: "$n_{\\text{mắt xích PVC}} = 1\\ 250\\ 000 / 62,5 = 20\\ 000\\text{ mol} = 20\\text{ kmol}$.\n$n_{\\ce{C2H4 cần}} = 20 / 0,8 = 25\\text{ kmol} = 25\\ 000\\text{ mol} \\Rightarrow V = 25\\ 000 \\times 24,79 = 619\\ 750\\text{ L} = 619,75\\text{ m}^3$.", rubric: [
      { step: "Tính đúng số kmol mắt xích PVC $= 20\\text{ kmol}$", points: 0.5 },
      { step: "Tính đúng $V_{\\ce{C2H4}} = 619,75\\text{ m}^3$", points: 0.5 }
    ] },
    { id: "w53_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $0,15\\text{ mol}$ hỗn hợp X gồm acetic acid và glycine tác dụng vừa đủ với $150\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$, thu được $13,5\\text{ g}$ hỗn hợp muối. Tính số mol mỗi chất trong X.", solution: "$x + y = 0,15$; $82x + 97y = 13,5 \\Rightarrow 15y = 1,2 \\Rightarrow y = 0,08\\text{ mol}$ (glycine), $x = 0,07\\text{ mol}$ (acetic acid).", rubric: [
      { step: "Lập đúng hệ phương trình $x + y = 0,15$ và $82x + 97y = 13,5$", points: 0.5 },
      { step: "Giải đúng $n_{\\text{acetic acid}} = 0,07\\text{ mol}$; $n_{\\text{glycine}} = 0,08\\text{ mol}$", points: 0.5 }
    ] },
    { id: "w53_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một loại protein X chứa $0,32\\%$ lưu huỳnh (S) về khối lượng. Giả sử mỗi phân tử X chỉ chứa $1$ nguyên tử S. Tính phân tử khối của protein X.", solution: "$M_X = (32 \\times 100) / 0,32 = 10\\ 000\\text{ amu}$.", rubric: [
      { step: "Thiết lập đúng $\\%m_{\\text{S}} = 32 / M_X \\times 100\\%$", points: 0.5 },
      { step: "Tính đúng $M_X = 10\\ 000\\text{ amu}$", points: 0.5 }
    ] },
    { id: "w53_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ glycine tác dụng hoàn toàn với dung dịch chứa $0,2\\text{ mol}$ $\\ce{HCl}$ thu được dung dịch Y. Để tác dụng hết với các chất trong Y cần dùng vừa đủ $350\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Tính $m$.", solution: "$n_{\\ce{NaOH}} = n_{\\text{glycine}} + n_{\\ce{HCl}} \\Rightarrow n_{\\text{glycine}} = 0,35 - 0,2 = 0,15\\text{ mol} \\Rightarrow m = 0,15 \\times 75 = 11,25\\text{ g}$.", rubric: [
      { step: "Thiết lập đúng $n_{\\ce{NaOH}} = n_{\\text{glycine}} + n_{\\ce{HCl}}$", points: 0.5 },
      { step: "Tính đúng $m = 11,25\\text{ g}$", points: 0.5 }
    ] },
    { id: "w53_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Giải thích: (a) Vì sao nhỏ chanh vào sữa đậu nành lại có kết tủa trắng? (b) Vì sao không nên dùng túi nilon (PE) đựng thức ăn đang rất nóng?", solution: "(a) Sữa đậu nành chứa nhiều protein; chanh chứa citric acid làm đông tụ protein tạo kết tủa trắng.\n(b) Nhựa PE là nhựa nhiệt dẻo, ở nhiệt độ cao dễ mềm chảy và thôi nhiễm chất phụ gia/vi nhựa độc hại vào thức ăn.", rubric: [
      { step: "Giải thích đúng sự đông tụ protein bởi acid", points: 0.5 },
      { step: "Giải thích đúng nguy cơ thôi nhiễm phụ gia/vi nhựa ở nhiệt độ cao", points: 0.5 }
    ] }
  ]
};
