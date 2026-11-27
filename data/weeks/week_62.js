window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[62] = {
  week: 62,
  title: "CĐ 5A: Biện luận CTPT, CTCT chất hữu cơ từ dữ kiện đốt cháy",
  objectives: [
    "Thành thạo các bước lập công thức đơn giản nhất (CTĐGN) và công thức phân tử (CTPT) của hợp chất hữu cơ $\\ce{C}_x\\ce{H}_y\\ce{O}_z$ từ sản phẩm cháy $\\ce{CO2, H2O}$.",
    "Biết cách biện luận tìm CTPT khi không biết trước phân tử khối $M$ (dùng điều kiện hóa trị $y \\le 2x + 2$ và $y$ chẵn đối với $\\ce{C}_x\\ce{H}_y\\ce{O}_z$).",
    "Xác định đúng công thức cấu tạo (CTCT) dựa vào tính chất hóa học (tác dụng với $\\ce{Na, NaOH, NaHCO3, Br2, AgNO3/NH3}$)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu bài tập chuyên đề CĐ 5A.",
    sessions: [
      {
        name: "Buổi 1: Lập CTPT từ dữ kiện đốt cháy & Tỉ khối hơi",
        guide: "Kiểm tra nhanh sự có mặt của O: $m_{\\text{O}} = m_{\\text{chất}} - (m_{\\text{C}} + m_{\\text{H}})$. Nếu $m_{\\text{O}} = 0$ thì chỉ có C, H.",
        pitfalls: "HS hay quên kiểm tra $m_{\\text{O}}$ hoặc lấy $m_{\\ce{CO2}}$ thay cho $m_{\\text{C}}$."
      },
      {
        name: "Buổi 2: Biện luận CTPT khi KHÔNG cho trước M (dùng $y \\le 2x + 2$)",
        guide: "Với $\\ce{C}_x\\ce{H}_y\\ce{O}_z$, luôn có $y$ là số chẵn và $y \\le 2x + 2$. Ví dụ CTĐGN $(\\ce{CH3O})_n \\Rightarrow 3n \\le 2n + 2 \\Rightarrow n \\le 2$; vì $3n$ chẵn nên $n = 2 \\Rightarrow \\ce{C2H6O2}$.",
        pitfalls: "Quên điều kiện $y$ chẵn dẫn đến chọn nhầm nghiệm lẻ."
      },
      {
        name: "Buổi 3: Kết hợp dữ kiện phản ứng để chốt CTCT duy nhất (Chuyên 10)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Quy trình 3 bước xác định CTPT & Biện luận CTCT",
      content: `
<ol>
  <li><strong>Bước 1 (Tìm $n_{\\text{C}}, n_{\\text{H}}, n_{\\text{O}}$):</strong><br>
  $n_{\\text{C}} = n_{\\ce{CO2}}$; $n_{\\text{H}} = 2 n_{\\ce{H2O}}$; $m_{\\text{O}} = m_X - 12n_{\\text{C}} - n_{\\text{H}} \\Rightarrow n_{\\text{O}} = m_{\\text{O}}/16$.</li>
  <li><strong>Bước 2 (Tìm CTĐGN và CTPT):</strong><br>
  Lập tỉ lệ $x : y : z = n_{\\text{C}} : n_{\\text{H}} : n_{\\text{O}}$ tối giản $\\Rightarrow$ CTĐGN $(\\ce{C}_a\\ce{H}_b\\ce{O}_c)_n$.<br>
  Nếu không có $M_X$, dùng điều kiện bền của $\\ce{C}_x\\ce{H}_y\\ce{O}_z$: <strong>$y$ chẵn</strong> và <strong>$y \\le 2x + 2$</strong>.</li>
  <li><strong>Bước 3 (Biện luận CTCT):</strong> Tác dụng $\\ce{Na}$ ($-\\ce{OH}$ hoặc $-\\ce{COOH}$); tác dụng $\\ce{NaHCO3}$/quỳ đỏ ($-\\ce{COOH}$); tác dụng $\\ce{NaOH}$ không tác dụng $\\ce{Na}$ (ester $-\\ce{COO}-$); tráng bạc ($-\\ce{CHO}$).</li>
</ol>`,
      example: "Đốt cháy hoàn toàn 3,1 g chất hữu cơ X thu được 0,1 mol CO₂ và 0,15 mol H₂O. Tìm CTPT của X (không cho trước M).\nGiải: n(C) = 0,1; n(H) = 0,3; m(O) = 3,1 - 1,2 - 0,3 = 1,6 g → n(O) = 0,1.\nTỉ lệ C:H:O = 1:3:1 → (CH₃O)ₙ. Điều kiện: 3n ≤ 2n + 2 → n ≤ 2, và 3n chẵn → n = 2 → C₂H₆O₂.",
      checkpoint: {
        question: "Chất hữu cơ X có công thức đơn giản nhất là C₂H₃O₂. Công thức phân tử của X (biết X chỉ chứa C, H, O) là:",
        options: ["A. C₂H₃O₂", "B. C₄H₆O₄", "C. C₆H₉O₆", "D. C₂H₆O₂"],
        answer: 1,
        explanation: "(C₂H₃O₂)ₙ có số H = 3n phải chẵn và 3n ≤ 4n + 2 → n = 2 → C₄H₆O₄ (hoặc n = 4 nhưng n = 2 là trường hợp phổ biến nhất)."
      }
    }
  ],
  questions: [
    { id: "w62_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn chất hữu cơ X thu được $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,3\\text{ mol}$ $\\ce{H2O}$. Tỉ lệ số nguyên tử $C : H$ trong X là:", options: ["A. $1 : 3$", "B. $2 : 3$", "C. $1 : 2$", "D. $3 : 8$"], answer: 0, solution: "$n_{\\text{C}} : n_{\\text{H}} = 0,2 : 0,6 = 1 : 3$." },
    { id: "w62_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Chất hữu cơ A có CTĐGN là $\\ce{CH2O}$ và tỉ khối hơi so với $\\ce{H2}$ là $30$. CTPT của A là:", options: ["A. $\\ce{CH2O}$", "B. $\\ce{C2H4O2}$", "C. $\\ce{C3H6O3}$", "D. $\\ce{C4H8O4}$"], answer: 1, solution: "$M_A = 60 = 30n \\Rightarrow n = 2 \\Rightarrow \\ce{C2H4O2}$." },
    { id: "w62_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Với hợp chất hữu cơ $\\ce{C}_x\\ce{H}_y\\ce{O}_z$ mạch hở, điều kiện đúng của $y$ là:", options: ["A. $y$ lẻ và $y \\le 2x$", "B. $y$ chẵn và $y \\le 2x + 2$", "C. $y$ luôn bằng $2x$", "D. $y \\ge 2x + 2$"], answer: 1, solution: "Số H trong $\\ce{C}_x\\ce{H}_y\\ce{O}_z$ luôn chẵn và tối đa bằng $2x + 2$." },
    { id: "w62_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chất hữu cơ X có CTPT $\\ce{C2H4O2}$, tác dụng được với $\\ce{NaHCO3}$ giải phóng khí $\\ce{CO2}$. CTCT của X là:", options: ["A. $\\ce{HCOOCH3}$", "B. $\\ce{CH3COOH}$", "C. $\\ce{HO-CH2-CHO}$", "D. $\\ce{CH3-O-CHO}$"], answer: 1, solution: "Tác dụng $\\ce{NaHCO3}$ chứng tỏ X có nhóm $-\\ce{COOH}$ ($\\ce{CH3COOH}$)." },
    { id: "w62_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Chất hữu cơ Y có CTPT $\\ce{C3H6O2}$, tác dụng với dung dịch $\\ce{NaOH}$ đun nóng tạo muối $\\ce{CH3COONa}$ và alcohol. CTCT của Y là:", options: ["A. $\\ce{C2H5COOH}$", "B. $\\ce{HCOOC2H5}$", "C. $\\ce{CH3COOCH3}$", "D. $\\ce{CH3-CH(OH)-CHO}$"], answer: 2, solution: "Muối $\\ce{CH3COONa}$ chứng tỏ Y là $\\ce{CH3COOCH3}$." },
    { id: "w62_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $3\\text{ g}$ một hợp chất hữu cơ thu được $4,4\\text{ g}$ $\\ce{CO2}$ và $1,8\\text{ g}$ $\\ce{H2O}$. Khối lượng oxygen có trong $3\\text{ g}$ chất đó là:", options: ["A. $0\\text{ g}$", "B. $1,6\\text{ g}$", "C. $0,8\\text{ g}$", "D. $3,2\\text{ g}$"], answer: 1, solution: "$m_{\\text{C}} = 1,2\\text{ g}$; $m_{\\text{H}} = 0,2\\text{ g} \\Rightarrow m_{\\text{O}} = 3 - 1,4 = 1,6\\text{ g}$." },
    { id: "w62_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Đốt chất hữu cơ X chỉ thu được CO₂ và H₂O thì X chắc chắn chỉ chứa C và H.", answer: false },
      { text: "Chất có công thức C₃H₆O₂ tác dụng được với NaOH đun nóng có thể là carboxylic acid hoặc ester.", answer: true },
      { text: "Công thức đơn giản nhất của C₆H₁₂O₆ là CH₂O.", answer: true },
      { text: "Mọi chất có công thức CₙH₂ₙ đều là alkene.", answer: false }
    ], solution: "a) Sai (X có thể chứa O); d) Sai (có thể là cycloalkane mạch vòng)." },
    { id: "w62_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Chất hữu cơ X (C, H, O) tác dụng được với Na nhưng không tác dụng với NaOH có thể là alcohol.", answer: true },
      { text: "Ester đơn chức no mạch hở có công thức phân tử dạng CₙH₂ₙO₂ (n ≥ 2).", answer: true },
      { text: "Khi đốt chất hữu cơ X thấy n(CO₂) = n(H₂O) thì X không thể là alkane.", answer: true },
      { text: "Tất cả các chất có nhóm -OH đều làm quỳ tím hóa đỏ.", answer: false }
    ], solution: "d) Sai (alcohol có nhóm $-\\ce{OH}$ nhưng trung tính)." },
    { id: "w62_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Một hợp chất hữu cơ chứa $52,17\\%$ C; $13,04\\%$ H; còn lại là O. Biết $M = 46$. Số nguyên tử Carbon trong một phân tử chất này là bao nhiêu?", answer: "2", tolerance: 0, solution: "$n_{\\text{C}} = (46 \\times 52,17\\%)/12 = 2$." },
    { id: "w62_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ một chất hữu cơ X cần dùng $0,3\\text{ mol}$ $\\ce{O2}$, thu được $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,3\\text{ mol}$ $\\ce{H2O}$. Số nguyên tử Oxygen trong một phân tử X là bao nhiêu?", answer: "1", tolerance: 0, solution: "BTNT O: $n_{\\text{O trong X}} = 2(0,2) + 0,3 - 2(0,3) = 0,1\\text{ mol} \\Rightarrow 1$ nguyên tử O ($\\ce{C2H6O}$)." },
    { id: "w62_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $m\\text{ g}$ chất hữu cơ X thu được $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,2\\text{ mol}$ $\\ce{H2O}$, đồng thời tiêu tốn $0,2\\text{ mol}$ $\\ce{O2}$. Công thức đơn giản nhất của X là:", options: ["A. $\\ce{CH2O}$", "B. $\\ce{C2H4O}$", "C. $\\ce{CH2O2}$", "D. $\\ce{C2H2O}$"], answer: 0, solution: "BTNT O: $n_{\\text{O trong X}} = 0,4 + 0,2 - 0,4 = 0,2\\text{ mol}$. Tỉ lệ C:H:O $= 0,2 : 0,4 : 0,2 = 1 : 2 : 1 \\Rightarrow \\ce{CH2O}$." },
    { id: "w62_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Chất hữu cơ X có CTĐGN là $\\ce{C2H5O}$. Công thức phân tử của X là:", options: ["A. $\\ce{C2H5O}$", "B. $\\ce{C4H10O2}$", "C. $\\ce{C6H15O3}$", "D. $\\ce{C4H10O}$"], answer: 1, solution: "$5n$ chẵn và $5n \\le 4n + 2 \\Rightarrow n = 2 \\Rightarrow \\ce{C4H10O2}$." },
    { id: "w62_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ ester no đơn chức mạch hở X thu được $0,4\\text{ mol}$ $\\ce{CO2}$. Nếu X tác dụng với $\\ce{NaOH}$ tạo muối $\\ce{HCOONa}$ thì tên gọi của X là:", options: ["A. Ethyl acetate", "B. Propyl formate", "C. Methyl propionate", "D. Methyl acetate"], answer: 1, solution: "Số C $= 4 \\Rightarrow \\ce{C4H8O2}$. Tạo muối $\\ce{HCOONa}$ nên là $\\ce{HCOOC3H7}$ (propyl formate)." },
    { id: "w62_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $4,4\\text{ g}$ một carboxylic acid no đơn chức mạch hở X thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc). Phân tử khối của X là bao nhiêu amu?", answer: "88", tolerance: 0.5, solution: "$n_{\\ce{CO2}} = 0,2\\text{ mol}$. $\\ce{C}_n\\ce{H}_{2n}\\ce{O2}$ cho $n_{\\ce{CO2}} = n \\cdot n_X \\Rightarrow M_X = \\frac{4,4}{0,2/n} = 22n = 14n + 32 \\Rightarrow 8n = 32 \\Rightarrow n = 4 \\Rightarrow M_X = 88$." },
    { id: "w62_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Hợp chất X ($\\ce{C4H8O2}$) tác dụng với $\\ce{NaOH}$ tạo muối $\\ce{C2H5COONa}$ và alcohol Y. Phân tử khối của Y là bao nhiêu amu?", answer: "32", tolerance: 0, solution: "X là $\\ce{C2H5COOCH3} \\Rightarrow$ Y là $\\ce{CH3OH}$ ($M=32$)." },
    { id: "w62_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $3,7\\text{ g}$ chất hữu cơ X (chứa C, H, O) bằng lượng khí $\\ce{O2}$ vừa đủ thu được $3,7185\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $2,7\\text{ g}$ $\\ce{H2O}$. Biết X tác dụng được với dung dịch $\\ce{NaOH}$ nhưng không tác dụng với $\\ce{Na}$ và $M_X < 100$. Xác định tất cả các CTCT có thể có của X.", solution: "$n_{\\ce{CO2}} = 0,15\\text{ mol}$ ($m_{\\text{C}} = 1,8\\text{ g}$); $n_{\\ce{H2O}} = 0,15\\text{ mol}$ ($m_{\\text{H}} = 0,3\\text{ g}$).\n$m_{\\text{O}} = 3,7 - 1,8 - 0,3 = 1,6\\text{ g} \\Rightarrow n_{\\text{O}} = 0,1\\text{ mol}$.\nTỉ lệ C:H:O $= 0,15 : 0,3 : 0,1 = 3 : 6 : 2 \\Rightarrow (\\ce{C3H6O2})_n$. Vì $M_X < 100 \\Rightarrow n = 1 \\Rightarrow \\ce{C3H6O2}$.\nVì X tác dụng $\\ce{NaOH}$ nhưng không tác dụng $\\ce{Na}$ nên X là ester: $\\ce{HCOOC2H5}$ và $\\ce{CH3COOCH3}$.", rubric: [
      { step: "Tìm đúng CTPT $\\ce{C3H6O2}$", points: 0.5 },
      { step: "Biện luận ester và viết đúng 2 CTCT", points: 0.5 }
    ] },
    { id: "w62_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6,2\\text{ g}$ chất hữu cơ X thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $5,4\\text{ g}$ $\\ce{H2O}$. Xác định CTPT của X (không cho trước khối lượng mol) và viết CTCT của X, biết X tác dụng với $\\ce{Na}$ giải phóng $\\ce{H2}$ theo tỉ lệ $1 : 1$.", solution: "$n_{\\ce{C}} = 0,2\\text{ mol}$ ($2,4\\text{ g}$); $n_{\\text{H}} = 0,6\\text{ mol}$ ($0,6\\text{ g}$); $m_{\\text{O}} = 6,2 - 3,0 = 3,2\\text{ g}$ ($0,2\\text{ mol}$).\nTỉ lệ C:H:O $= 1:3:1 \\Rightarrow (\\ce{CH3O})_n$. Điều kiện $3n$ chẵn và $3n \\le 2n+2 \\Rightarrow n = 2 \\Rightarrow \\ce{C2H6O2}$.\nTác dụng Na tỉ lệ 1:1 $\\Rightarrow$ có 2 nhóm $-\\ce{OH}$: $\\ce{HO-CH2-CH2-OH}$ (Ethylene glycol).", rubric: [
      { step: "Tìm đúng CTĐGN $\\ce{CH3O}$ và biện luận ra $\\ce{C2H6O2}$", points: 0.5 },
      { step: "Viết đúng CTCT $\\ce{HO-CH2-CH2-OH}$", points: 0.5 }
    ] },
    { id: "w62_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $0,1\\text{ mol}$ chất hữu cơ X ($\\ce{C4H8O3}$) tác dụng vừa đủ với $100\\text{ mL}$ dung dịch $\\ce{NaOH}$ $1\\text{ M}$. Mặt khác, $0,1\\text{ mol}$ X tác dụng với $\\ce{Na}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Biết X mạch không nhánh và các nhóm chức nằm ở hai đầu mạch. Xác định CTCT của X.", solution: "$0,1\\text{ mol}$ X tác dụng $0,1\\text{ mol}$ $\\ce{NaOH}$ (1 nhóm $-\\ce{COOH}$), tác dụng $\\ce{Na}$ tạo $0,1\\text{ mol}$ $\\ce{H2}$ (tổng 2 H linh động $\\Rightarrow$ có 1 nhóm $-\\ce{COOH}$ và 1 nhóm $-\\ce{OH}$).\nMạch không nhánh, ở 2 đầu mạch $\\Rightarrow \\ce{HO-CH2-CH2-CH2-COOH}$.", rubric: [
      { step: "Xác định đúng X có 1 nhóm $-\\ce{COOH}$ và 1 nhóm $-\\ce{OH}$", points: 0.5 },
      { step: "Viết đúng CTCT $\\ce{HO-CH2-CH2-CH2-COOH}$", points: 0.5 }
    ] },
    { id: "w62_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $1,8\\text{ g}$ một hợp chất hữu cơ X cần vừa đủ $1,4874\\text{ L}$ khí $\\ce{O2}$ (đkc), chỉ thu được $\\ce{CO2}$ và $\\ce{H2O}$ với tỉ lệ thể tích $V_{\\ce{CO2}} : V_{\\ce{H2O (hơi)}} = 1 : 1$. Biết $M_X = 180$. Xác định CTPT của X.", solution: "$n_{\\ce{O2}} = 0,06\\text{ mol}$ ($1,92\\text{ g}$). BTKL: $m_{\\ce{CO2}} + m_{\\ce{H2O}} = 1,8 + 1,92 = 3,72\\text{ g}$.\nĐặt $n_{\\ce{CO2}} = n_{\\ce{H2O}} = a \\Rightarrow 44a + 18a = 3,72 \\Rightarrow 62a = 3,72 \\Rightarrow a = 0,06\\text{ mol}$.\nBTNT O: $n_{\\text{O trong X}} = 2(0,06) + 0,06 - 2(0,06) = 0,06\\text{ mol}$.\nTỉ lệ C:H:O $= 0,06 : 0,12 : 0,06 = 1 : 2 : 1$. $M_X = 180 \\Rightarrow \\ce{C6H12O6}$.", rubric: [
      { step: "Áp dụng BTKL tìm đúng $n_{\\ce{CO2}} = n_{\\ce{H2O}} = 0,06\\text{ mol}$", points: 0.5 },
      { step: "Tìm đúng CTPT $\\ce{C6H12O6}$", points: 0.5 }
    ] },
    { id: "w62_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Oxi hóa hoàn toàn $m\\text{ g}$ hỗn hợp X gồm 2 carboxylic acid no, đơn chức, mạch hở thu được $6,1975\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $a\\text{ g}$ $\\ce{H2O}$. Tính giá trị của $a$.", solution: "Đặc điểm của carboxylic acid no, đơn chức, mạch hở ($\\ce{C}_n\\ce{H}_{2n}\\ce{O2}$) là khi đốt cháy luôn cho $n_{\\ce{H2O}} = n_{\\ce{CO2}}$.\n$n_{\\ce{CO2}} = 6,1975 / 24,79 = 0,25\\text{ mol} \\Rightarrow n_{\\ce{H2O}} = 0,25\\text{ mol} \\Rightarrow a = 0,25 \\times 18 = 4,5\\text{ g}$.", rubric: [
      { step: "Nhận xét đúng $n_{\\ce{H2O}} = n_{\\ce{CO2}} = 0,25\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng $a = 4,5\\text{ g}$", points: 0.5 }
    ] }
  ]
};
