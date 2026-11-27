window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[59] = {
  week: 59,
  title: "CĐ 3A: Sơ đồ chuyển hóa chất vô cơ & Biện luận tìm chất A1..An",
  objectives: [
    "Nắm vững các chuỗi chuyển hóa vô cơ trọng tâm của $\\ce{Fe, Al, Cu, Ca, Na, S, C, Cl2}$.",
    "Thành thạo kỹ năng suy luận ngược từ dấu hiệu đặc trưng (màu kết tủa, mùi khí, nguyên tử khối $M$) để tìm các chất ẩn $A_1, A_2, \\dots, A_n$ trong đề thi HSG.",
    "Viết đúng và cân bằng chuẩn xác các PTHH kèm đầy đủ điều kiện phản ứng."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bảng tổng hợp màu sắc kết tủa, khí và sơ đồ chuyển hóa vô cơ.",
    sessions: [
      {
        name: "Buổi 1: Dấu hiệu 'Mắt xích vàng' để giải mã sơ đồ A1..An",
        guide: "Tổng hợp các từ khóa nhận diện: kết tủa nâu đỏ ($\\ce{Fe(OH)3}$), trắng xanh hóa nâu ($\\ce{Fe(OH)2}$), xanh lam ($\\ce{Cu(OH)2}$), keo trắng tan trong kiềm dư ($\\ce{Al(OH)3}$), trắng không tan trong acid ($\\ce{BaSO4, AgCl}$), khí mùi trứng thối ($\\ce{H2S}$), mùi khai ($\\ce{NH3}$).",
        pitfalls: "HS hay đoán mò chất mà không kiểm tra lại tính nhất quán của toàn bộ sơ đồ."
      },
      {
        name: "Buổi 2: Luyện giải các sơ đồ chuyển hóa đặc trưng từ đề HSG các tỉnh",
        pitfalls: "Quên điều kiện nhiệt độ, xúc tác hoặc viết sai hóa trị sắt."
      },
      {
        name: "Buổi 3: Thi thử chuyên đề Chuỗi phản ứng & Biện luận chất"
      }
    ]
  },
  lecture: [
    {
      title: "1. Bí kíp giải mã sơ đồ vô cơ A1 → A2 → ... → An",
      content: `
<p>Trong đề thi HSG 9 và Chuyên Hóa 10, bài toán sơ đồ chữ cái ($A, B, C, D...$) luôn chiếm $1,5 - 2,5$ điểm. Quy trình 3 bước giải chuẩn:</p>
<ol>
  <li><strong>Tìm "mắt xích khóa":</strong> Dựa vào <em>phân tử khối $M$</em>, <em>màu sắc kết tủa/dung dịch</em>, hoặc <em>ứng dụng thực tế</em> (ví dụ: thành phần chính đá vôi là $\\ce{CaCO3}$, thành phần chính quặng pyrite là $\\ce{FeS2}$, khí gây mưa acid là $\\ce{SO2}$).</li>
  <li><strong>Lần theo mũi tên thuận và ngược:</strong> Chú ý các phản ứng đặc trưng như nhiệt phân hydroxide không tan ra oxide, nhiệt phân muối carbonate, điện phân dung dịch muối $\\ce{NaCl}$.</li>
  <li><strong>Kiểm tra chéo &amp; Viết PTHH:</strong> Đảm bảo mọi nhánh trong sơ đồ đều khớp 100%, ghi rõ điều kiện ($t^\\circ$, xúc tác, đpnc/đpdd).</li>
</ol>`,
      example: "Cho sơ đồ: X₁ →(t°) X₂ + CO₂; X₂ + H₂O → X₃; X₃ + Na₂CO₃ → X₁ + X₄; X₄ + HCl → NaCl + H₂O.\nGiải: X₁ là CaCO₃ → X₂ là CaO → X₃ là Ca(OH)₂ → X₄ là NaOH.",
      checkpoint: {
        question: "Trong sơ đồ: FeS₂ → A → B → H₂SO₄. Hai chất A và B lần lượt là:",
        options: ["A. Fe₂O₃ và Fe(OH)₃", "B. SO₂ và SO₃", "C. H₂S và SO₂", "D. SO₃ và SO₂"],
        answer: 1,
        explanation: "4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂ (A); 2SO₂ + O₂ ⇌ 2SO₃ (B); SO₃ + H₂O → H₂SO₄."
      }
    }
  ],
  questions: [
    { id: "w59_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Cho chuỗi: $\\ce{CaCO3 ->[t^\\circ] X ->[+H2O] Y ->[+CO2] CaCO3}$. X và Y lần lượt là:", options: ["A. $\\ce{CaO}$ và $\\ce{Ca(OH)2}$", "B. $\\ce{Ca}$ và $\\ce{CaO}$", "C. $\\ce{Ca(OH)2}$ và $\\ce{CaO}$", "D. $\\ce{CaCl2}$ và $\\ce{Ca(OH)2}$"], answer: 0, solution: "$\\ce{CaCO3 -> CaO (X) -> Ca(OH)2 (Y) -> CaCO3}$." },
    { id: "w59_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Cho sơ đồ: $\\ce{Cu ->[+O2, t^\\circ] A ->[+HCl] B ->[+NaOH] C ->[t^\\circ] A}$. Chất C là:", options: ["A. $\\ce{CuCl2}$", "B. $\\ce{Cu(OH)2}$", "C. $\\ce{CuO}$", "D. $\\ce{CuSO4}$"], answer: 1, solution: "A: $\\ce{CuO}$; B: $\\ce{CuCl2}$; C: $\\ce{Cu(OH)2}$." },
    { id: "w59_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Kết tủa màu nâu đỏ xuất hiện khi nhỏ dung dịch $\\ce{NaOH}$ vào dung dịch $\\ce{FeCl3}$ là:", options: ["A. $\\ce{Fe(OH)2}$", "B. $\\ce{Fe(OH)3}$", "C. $\\ce{Fe2O3}$", "D. $\\ce{Cu(OH)2}$"], answer: 1, solution: "$\\ce{Fe(OH)3}$ màu nâu đỏ." },
    { id: "w59_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Cho sơ đồ: $\\ce{Fe ->[+Cl2, t^\\circ] X ->[+NaOH] Y ->[t^\\circ] Z}$. Chất Z là:", options: ["A. $\\ce{FeO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Fe3O4}$", "D. $\\ce{FeCl2}$"], answer: 1, solution: "X: $\\ce{FeCl3}$; Y: $\\ce{Fe(OH)3}$; Z: $\\ce{Fe2O3}$." },
    { id: "w59_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Chất X vừa tác dụng với dung dịch $\\ce{HCl}$, vừa tác dụng với dung dịch $\\ce{NaOH}$ là:", options: ["A. $\\ce{MgO}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{Al2O3}$", "D. $\\ce{CuO}$"], answer: 2, solution: "$\\ce{Al2O3}$ là oxide lưỡng tính." },
    { id: "w59_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Cho phản ứng: $\\ce{NaCl + H2O ->[\\text{đpdd có màng ngăn}] X + H2 ^ + Cl2 ^}$. Chất X là:", options: ["A. $\\ce{Na}$", "B. $\\ce{NaOH}$", "C. $\\ce{NaClO}$", "D. $\\ce{Na2O}$"], answer: 1, solution: "Điện phân dung dịch NaCl có màng ngăn thu được $\\ce{NaOH, H2, Cl2}$." },
    { id: "w59_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Nhiệt phân Cu(OH)₂ thu được CuO và H₂O.", answer: true },
      { text: "Nhiệt phân Fe(OH)₂ trong không khí thu được FeO tinh khiết.", answer: false },
      { text: "Nhôm tác dụng được với dung dịch NaOH giải phóng khí H₂.", answer: true },
      { text: "BaSO₄ tan tốt trong dung dịch HCl đặc.", answer: false }
    ], solution: "b) Sai (tạo $\\ce{Fe2O3}$ do có $\\ce{O2}$); d) Sai ($\\ce{BaSO4}$ không tan trong acid)." },
    { id: "w59_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Dung dịch FeCl₂ có màu lục nhạt, dung dịch FeCl₃ có màu vàng nâu.", answer: true },
      { text: "Khí CO₂ tác dụng với Na₂O tạo thành Na₂CO₃.", answer: true },
      { text: "Cho Fe tác dụng với H₂SO₄ loãng thu được muối Fe₂(SO₄)₃.", answer: false },
      { text: "Cặp chất Na₂CO₃ và CaCl₂ không cùng tồn tại trong một dung dịch.", answer: true }
    ], solution: "c) Sai: tạo $\\ce{FeSO4}$." },
    { id: "w59_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho sơ đồ: $\\ce{Al ->[+O2] A ->[\\text{đpnc}] Al ->[+HCl] B}$. Phân tử khối của chất B là bao nhiêu amu?", answer: "133.5", tolerance: 0.2, solution: "B là $\\ce{AlCl3}$, $M = 27 + 3\\times 35,5 = 133,5$." },
    { id: "w59_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Trong phản ứng $4\\ce{Fe(OH)2} + \\ce{O2} \\xrightarrow{t^\\circ} 2\\ce{Fe2O3} + 4\\ce{H2O}$, tổng các hệ số cân bằng (nguyên tối giản) của cả phương trình là bao nhiêu?", answer: "11", tolerance: 0, solution: "$4 + 1 + 2 + 4 = 11$." },
    { id: "w59_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Thực hiện sơ đồ: $\\ce{X ->[+HCl] Y ->[+NaOH] Z (kt trắng xanh) ->[+O2 + H2O] T (kt nâu đỏ)}$. Chất X có thể là:", options: ["A. $\\ce{Fe}$", "B. $\\ce{Fe2O3}$", "C. $\\ce{FeCl3}$", "D. $\\ce{Cu}$"], answer: 0, solution: "X: $\\ce{Fe}$; Y: $\\ce{FeCl2}$; Z: $\\ce{Fe(OH)2}$; T: $\\ce{Fe(OH)3}$." },
    { id: "w59_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cho chuỗi: $\\ce{Na ->[+H2O] A ->[+CO2 (tỉ lệ 2:1)] B ->[+Ca(OH)2] C v + A}$. Hai chất B và C lần lượt là:", options: ["A. $\\ce{NaHCO3}$ và $\\ce{CaCO3}$", "B. $\\ce{Na2CO3}$ và $\\ce{CaCO3}$", "C. $\\ce{Na2O}$ và $\\ce{CaO}$", "D. $\\ce{Na2CO3}$ và $\\ce{NaOH}$"], answer: 1, solution: "A: $\\ce{NaOH}$; B: $\\ce{Na2CO3}$; C: $\\ce{CaCO3}$." },
    { id: "w59_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Chất rắn X màu đen không tan trong nước, tan trong $\\ce{HCl}$ tạo dung dịch màu xanh lam. X là:", options: ["A. $\\ce{FeO}$", "B. $\\ce{CuO}$", "C. $\\ce{MnO2}$", "D. $\\ce{C}$"], answer: 1, solution: "$\\ce{CuO}$ màu đen, tan trong HCl tạo $\\ce{CuCl2}$ màu xanh lam." },
    { id: "w59_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho phản ứng: $\\ce{Fe3O4 + 8HCl -> aFeCl2 + bFeCl3 + 4H2O}$. Tổng $a + b$ bằng bao nhiêu?", answer: "3", tolerance: 0, solution: "$\\ce{Fe3O4 + 8HCl -> FeCl2 + 2FeCl3 + 4H2O} \\Rightarrow a=1, b=2 \\Rightarrow a+b=3$." },
    { id: "w59_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Hợp chất X của natri có phân tử khối $106\\text{ amu}$, tác dụng với $\\ce{HCl}$ giải phóng khí làm đục nước vôi trong. Phần trăm khối lượng của Na trong X là bao nhiêu % (làm tròn 1 chữ số thập phân)?", answer: "43.4", tolerance: 0.2, solution: "X là $\\ce{Na2CO3} \\Rightarrow \\%\\text{Na} = (46/106) \\times 100\\% \\approx 43,4\\%$." },
    { id: "w59_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Xác định các chất $A, B, C, D, E$ và viết các PTHH theo sơ đồ: (1) $\\ce{Fe + HCl -> A + B ^}$; (2) $\\ce{A + Cl2 -> C}$; (3) $\\ce{C + NaOH -> D v + E}$; (4) $\\ce{D ->[t^\\circ] Fe2O3 + H2O}$.", solution: "A: $\\ce{FeCl2}$; B: $\\ce{H2}$; C: $\\ce{FeCl3}$; D: $\\ce{Fe(OH)3}$; E: $\\ce{NaCl}$.\n(1) $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$\n(2) $2\\ce{FeCl2 + Cl2 -> 2FeCl3}$\n(3) $\\ce{FeCl3 + 3NaOH -> Fe(OH)3 v + 3NaCl}$\n(4) $2\\ce{Fe(OH)3 ->[t^\\circ] Fe2O3 + 3H2O}$.", rubric: [
      { step: "Xác định đúng cả 5 chất $A, B, C, D, E$", points: 0.5 },
      { step: "Viết và cân bằng đúng cả 4 PTHH", points: 0.5 }
    ] },
    { id: "w59_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hợp chất A được tạo thành từ 2 nguyên tố, có khối lượng mol là $120\\text{ g/mol}$. Đốt cháy hoàn toàn A trong oxi dư thu được chất rắn B màu đỏ nâu ($\\ce{Fe2O3}$) và khí C có mùi hắc làm mất màu dung dịch bromine. Xác định A và viết PTHH đốt cháy A.", solution: "B là $\\ce{Fe2O3}$, C là $\\ce{SO2} \\Rightarrow$ A chứa Fe và S ($\\ce{Fe}_x\\ce{S}_y$).\n$56x + 32y = 120 \\Rightarrow x = 1, y = 2 \\Rightarrow$ A là $\\ce{FeS2}$ (Quặng pyrite sắt).\nPTHH: $4\\ce{FeS2 + 11O2 ->[t^\\circ] 2Fe2O3 + 8SO2}$.", rubric: [
      { step: "Xác định đúng A là $\\ce{FeS2}$ ($M=120$)", points: 0.5 },
      { step: "Viết và cân bằng đúng PTHH đốt cháy $\\ce{FeS2}$", points: 0.5 }
    ] },
    { id: "w59_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho biết X là một muối có ứng dụng làm bột nở trong làm bánh, khi đun nóng nhẹ bị phân hủy tạo ra 3 chất: $\\ce{X ->[t^\\circ] Y + CO2 ^ + H2O}$ (trong đó Y tác dụng với dung dịch $\\ce{CaCl2}$ tạo kết tủa trắng). Xác định X, Y và viết các PTHH.", solution: "X là $\\ce{NaHCO3}$ (baking soda); Y là $\\ce{Na2CO3}$.\n$2\\ce{NaHCO3 ->[t^\\circ] Na2CO3 + CO2 ^ + H2O}$.\n$\\ce{Na2CO3 + CaCl2 -> CaCO3 v + 2NaCl}$.", rubric: [
      { step: "Xác định đúng X ($\\ce{NaHCO3}$) và Y ($\\ce{Na2CO3}$)", points: 0.5 },
      { step: "Viết đúng 2 PTHH", points: 0.5 }
    ] },
    { id: "w59_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Viết 4 PTHH điều chế trực tiếp $\\ce{CuCl2}$ từ 4 loại hợp chất khác nhau (kim loại, oxide, base, muối).", solution: "1) Từ kim loại: $\\ce{Cu + Cl2 ->[t^\\circ] CuCl2}$\n2) Từ oxide: $\\ce{CuO + 2HCl -> CuCl2 + H2O}$\n3) Từ base: $\\ce{Cu(OH)2 + 2HCl -> CuCl2 + 2H2O}$\n4) Từ muối: $\\ce{CuSO4 + BaCl2 -> CuCl2 + BaSO4 v}$.", rubric: [
      { step: "Viết đúng mỗi PTHH được 0,25đ (đủ 4 loại chất)", points: 1.0 }
    ] },
    { id: "w59_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Nung $1\\text{ mol}$ muối $\\ce{KMnO4}$ để điều chế khí $\\ce{O2}$, cho lượng khí $\\ce{O2}$ thu được tác dụng hết với bột $\\ce{Mg}$ dư thu được chất rắn A. Hòa tan A vào dung dịch $\\ce{HCl}$ dư thu được muối B. Viết các PTHH và tính khối lượng muối B thu được (hiệu suất $100\\%$).", solution: "$2\\ce{KMnO4 ->[t^\\circ] K2MnO4 + MnO2 + O2 ^} \\Rightarrow n_{\\ce{O2}} = 0,5\\text{ mol}$.\n$2\\ce{Mg + O2 ->[t^\\circ] 2MgO} \\Rightarrow n_{\\ce{MgO}} = 1\\text{ mol}$.\n$\\ce{MgO + 2HCl -> MgCl2 + H2O} \\Rightarrow n_{\\ce{MgCl2}} = 1\\text{ mol} \\Rightarrow m_{\\ce{MgCl2}} = 95\\text{ g}$.", rubric: [
      { step: "Viết đúng 3 PTHH", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{MgCl2}} = 95\\text{ g}$", points: 0.5 }
    ] }
  ]
};
