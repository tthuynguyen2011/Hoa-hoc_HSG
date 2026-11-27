window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[21] = {
  week: 21,
  title: "Lập và cân bằng Phương trình hóa học (PTHH) cơ bản & nâng cao",
  objectives: [
    "Nắm vững 3 bước lập Phương trình hóa học: (1) Viết sơ đồ phản ứng; (2) Cân bằng số nguyên tử mỗi nguyên tố bằng hệ số; (3) Viết thành PTHH hoàn chỉnh.",
    "Thành thạo các mẹo cân bằng nhanh: quy tắc chẵn–lẻ, cân bằng theo nhóm nguyên tử ($\\text{SO}_4, \\text{NO}_3, \\text{OH}$), và cân bằng phản ứng đốt cháy hợp chất hữu cơ.",
    "Hiểu ý nghĩa của PTHH (tỉ lệ số nguyên tử/phân tử và tỉ lệ số mol các chất) để chuẩn bị cho tính toán hóa học."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 21 (A4). Chuẩn bị bộ bài tập cân bằng từ dễ đến khó.",
    sessions: [
      {
        name: "Buổi 1: Quy tắc vàng khi cân bằng PTHH",
        guide: "Nhấn mạnh quy tắc sống còn: CHỈ ĐƯỢC thêm hệ số ở TRƯỚC công thức hóa học, TUYỆT ĐỐI KHÔNG được sửa chỉ số dưới chân! Ví dụ: $\\ce{H2 + O2 -> H2O}$ phải thêm hệ số $2$ trước $\\ce{H2}$ và $\\ce{H2O}$, KHÔNG được sửa $\\ce{H2O}$ thành $\\ce{H2O2}$.",
        pitfalls: "Học sinh mới học hay tự ý sửa chỉ số (ví dụ viết $\\ce{Fe + Cl2 -> FeCl2}$ thay vì $\\ce{FeCl3}$, hoặc sửa $\\ce{O2}$ thành $\\ce{O3}$ cho bằng số nguyên tử)."
      },
      {
        name: "Buổi 2: 3 Mẹo cân bằng nhanh cho HSG",
        guide: "Mẹo 1: Chẵn – Lẻ (gặp $\\ce{O2}$ hay $\\ce{Fe2O3}$ có số lẻ ở một bên thì nhân 2 làm chẵn). Mẹo 2: Giữ nguyên nhóm $\\text{SO}_4, \\text{NO}_3, \\text{PO}_4$ để đếm 1 lần. Mẹo 3: Đốt cháy $\\ce{C_x H_y O_z}$ theo thứ tự C → H → O.",
        pitfalls: "Đếm thiếu nguyên tử O khi O xuất hiện ở nhiều chất bên vế phải (như $\\ce{CO2}$ và $\\ce{H2O}$)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Cân bằng phương trình ẩn chữ (HSG)",
        guide: "Chú ý 5 câu HSG: cân bằng phương trình có ẩn $x, y, n$ (như $\\ce{Fe_x O_y + CO}$, $\\ce{C_n H_{2n+2} + O2}$) — kỹ năng bắt buộc cho thi HSG 8–9.",
        pitfalls: "Quên rút gọn bộ hệ số về tối giản (ví dụ để $4, 2, 4$ thay vì $2, 1, 2$)."
      }
    ]
  },
  lecture: [
    {
      title: "3 Bước lập Phương trình Hóa học & Quy tắc Bất di bất dịch",
      content: `
        <ol>
          <li><strong>Bước 1:</strong> Viết sơ đồ phản ứng (CTHH đúng của chất tham gia và sản phẩm).</li>
          <li><strong>Bước 2:</strong> Cân bằng số nguyên tử của mỗi nguyên tố bằng cách đặt <strong>hệ số thích hợp ở phía trước CTHH</strong>.</li>
          <li><strong>Bước 3:</strong> Thay mũi tên nét đứt ($\\dashrightarrow$) bằng mũi tên liền ($\\longrightarrow$) kèm điều kiện ($t^\\circ$, xúc tác nếu có).</li>
        </ol>
        <div class="callout warn">
          <strong>Cấm kỵ tuyệt đối:</strong> KHÔNG BAO GIỜ thay đổi chỉ số nhỏ ở chân công thức (ví dụ $\\ce{H2O}$ luôn là $\\ce{H2O}$, không được sửa thành $\\ce{H2O2}$ hay $\\ce{H4O2}$).
        </div>
      `,
      checkpoint: {
        question: "Hệ số cân bằng tối giản lần lượt của phương trình $\\ce{Al + O2 -> Al2O3}$ là:",
        options: ["2, 3, 1", "4, 3, 2", "2, 1, 1", "4, 2, 2"],
        answer: 1,
        explanation: "Làm chẵn số nguyên tử O bên phải bằng cách đặt $2$ trước $\\ce{Al2O3}$ $\\Rightarrow 6\\text{ O}$ và $4\\text{ Al}$ $\\Rightarrow \\ce{4Al + 3O2 ->[t^\\circ] 2Al2O3}$."
      }
    },
    {
      title: "3 Mẹo cân bằng nhanh (Chuẩn HSG)",
      content: `
        <ul>
          <li><strong>Mẹo 1 (Nhóm nguyên tử):</strong> Nếu nhóm $\\text{SO}_4, \\text{NO}_3, \\text{CO}_3, \\text{PO}_4$ không bị tách ra, hãy đếm cả nhóm như 1 đơn vị! Ví dụ: $\\ce{2Al + 3H2SO4 -> Al2(SO4)3 + 3H2 ^}$.</li>
          <li><strong>Mẹo 2 (Đốt cháy hữu cơ theo thứ tự C → H → O):</strong><br/>
          $\\ce{C_x H_y + (x + y/4)O2 ->[t^\\circ] xCO2 + (y/2)H2O}$ (nếu có phân số thì nhân đôi cả phương trình).</li>
          <li><strong>Mẹo 3 (Cân bằng theo ẩn $x, y$):</strong><br/>
          $\\ce{Fe_x O_y + yCO ->[t^\\circ] xFe + yCO2}$ (mỗi nguyên tử O lấy đi 1 phân tử CO thành $\\ce{CO2}$!).</li>
        </ul>
      `,
      example: "Cân bằng phương trình đốt cháy Butane: $\\ce{C4H10 + O2 ->[t^\\circ] CO2 + H2O}$.<br/><em>Giải:</em> Đặt $4$ trước $\\ce{CO2}$ (4 C), đặt $5$ trước $\\ce{H2O}$ (10 H). Tổng O bên phải $= 4 \\times 2 + 5 = 13$ (lẻ!) $\\Rightarrow$ Nhân đôi toàn bộ: $\\ce{2C4H10 + 13O2 ->[t^\\circ] 8CO2 + 10H2O}$."
    }
  ],
  questions: [
    { id: "w21_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong các bước lập phương trình hóa học, hệ số cân bằng được viết ở đâu?",
      options: ["A. Ở phía sau công thức hóa học", "B. Ở phía trước công thức hóa học", "C. Ở chân nguyên tử", "D. Ở trên mũi tên"],
      answer: 1, solution: "Hệ số được viết ngang hàng, phía trước công thức hóa học." },
    { id: "w21_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Phương trình hóa học nào sau đây đã được cân bằng ĐÚNG?",
      options: [
        "A. $\\ce{Fe + O2 -> Fe3O4}$",
        "B. $\\ce{2Na + Cl2 -> 2NaCl}$",
        "C. $\\ce{H2 + O2 -> H2O}$",
        "D. $\\ce{Mg + HCl -> MgCl2 + H2}$"
      ],
      answer: 1, solution: "$\\ce{2Na + Cl2 -> 2NaCl}$ có 2 Na và 2 Cl ở cả hai vế." },
    { id: "w21_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Hệ số cân bằng của $\\ce{HCl}$ trong phương trình $\\ce{Zn + ?HCl -> ZnCl2 + H2}$ là:",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: 1, solution: "$\\ce{Zn + 2HCl -> ZnCl2 + H2 ^}$." },
    { id: "w21_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Tổng hệ số (nguyên, tối giản) của các chất trong phương trình $\\ce{4P + 5O2 ->[t^\\circ] 2P2O5}$ là:",
      options: ["A. 9", "B. 10", "C. 11", "D. 12"],
      answer: 2, solution: "$4 + 5 + 2 = 11$." },
    { id: "w21_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho phương trình $\\ce{2KClO3 ->[t^\\circ] 2KCl + ?O2}$. Hệ số thích hợp điền vào dấu `?` là:",
      options: ["A. 1", "B. 2", "C. 3", "D. 6"],
      answer: 2, solution: "Vế trái có $2 \\times 3 = 6$ nguyên tử O $\\Rightarrow$ cần $3\\ce{O2}$." },
    { id: "w21_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Tỉ lệ số nguyên tử/phân tử $\\text{Fe} : \\ce{O2} : \\ce{Fe3O4}$ trong PTHH $\\ce{3Fe + 2O2 ->[t^\\circ] Fe3O4}$ là:",
      options: ["A. $1 : 1 : 1$", "B. $3 : 2 : 1$", "C. $2 : 3 : 1$", "D. $3 : 4 : 1$"],
      answer: 1, solution: "Tỉ lệ đúng bằng tỉ lệ hệ số cân bằng: $3 : 2 : 1$." },
    { id: "w21_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Cân bằng phương trình $\\ce{Na2O + H2O -> ?NaOH}$. Hệ số của $\\ce{NaOH}$ là:",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: 1, solution: "$\\ce{Na2O + H2O -> 2NaOH}$." },
    { id: "w21_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Kiểm tra các phương trình hóa học sau đã cân bằng Đúng hay Sai:",
      statements: [
        { text: "$\\ce{2K + 2H2O -> 2KOH + H2 ^}$", answer: true },
        { text: "$\\ce{CH4 + 2O2 ->[t^\\circ] CO2 + 2H2O}$", answer: true },
        { text: "$\\ce{Fe2O3 + 3HCl -> 2FeCl3 + 3H2O}$", answer: false },
        { text: "$\\ce{BaCl2 + H2SO4 -> BaSO4 v + 2HCl}$", answer: true }
      ],
      solution: "c) Sai vì thiếu Cl và H (đúng là $\\ce{Fe2O3 + 6HCl -> 2FeCl3 + 3H2O}$)." },
    { id: "w21_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cân bằng PTHH: $\\ce{?Fe + ?Cl2 ->[t^\\circ] ?FeCl3}$. Tổng tất cả các hệ số (nguyên, tối giản) của phương trình là bao nhiêu?",
      answer: "7", tolerance: 0.1,
      solution: "$\\ce{2Fe + 3Cl2 ->[t^\\circ] 2FeCl3} \\Rightarrow 2 + 3 + 2 = 7$." },
    { id: "w21_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cân bằng PTHH: $\\ce{?Fe(OH)3 ->[t^\\circ] ?Fe2O3 + ?H2O}$. Tổng tất cả các hệ số tối giản là bao nhiêu?",
      answer: "6", tolerance: 0.1,
      solution: "$\\ce{2Fe(OH)3 ->[t^\\circ] Fe2O3 + 3H2O} \\Rightarrow 2 + 1 + 3 = 6$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w21_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Hệ số của $\\ce{NaOH}$ khi cân bằng phương trình $\\ce{Fe2(SO4)3 + ?NaOH -> ?Fe(OH)3 v + ?Na2SO4}$ là:",
      options: ["A. 2", "B. 3", "C. 6", "D. 4"],
      answer: 2, solution: "$\\ce{Fe2(SO4)3 + 6NaOH -> 2Fe(OH)3 v + 3Na2SO4}$." },
    { id: "w21_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Đốt cháy hoàn toàn khí Ethane ($\\ce{C2H6}$) trong khí oxygen thu được $\\ce{CO2}$ và $\\ce{H2O}$. Hệ số tối giản của $\\ce{O2}$ trong PTHH là:",
      options: ["A. 3", "B. 5", "C. 7", "D. 9"],
      answer: 2, solution: "$\\ce{2C2H6 + 7O2 ->[t^\\circ] 4CO2 + 6H2O}$." },
    { id: "w21_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho phương trình: $\\ce{Al2O3 + 3H2SO4 -> Al2(SO4)3 + 3H2O}$:",
      statements: [
        { text: "Phương trình đã được cân bằng đúng số nguyên tử các nguyên tố.", answer: true },
        { text: "Cứ 1 phân tử $\\ce{Al2O3}$ phản ứng vừa đủ với 3 phân tử $\\ce{H2SO4}$.", answer: true },
        { text: "Số nhóm $\\text{SO}_4$ ở hai vế đều bằng 3.", answer: true },
        { text: "Tổng hệ số của sản phẩm là 3.", answer: false }
      ],
      solution: "d) Sai: tổng hệ số sản phẩm $= 1 + 3 = 4$." },
    { id: "w21_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cân bằng PTHH: $\\ce{?FeS2 + ?O2 ->[t^\\circ] ?Fe2O3 + ?SO2}$. Nhập hệ số nguyên tối giản của $\\ce{O2}$.",
      answer: "11", tolerance: 0.1,
      solution: "$\\ce{4FeS2 + 11O2 ->[t^\\circ] 2Fe2O3 + 8SO2}$." },
    { id: "w21_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cân bằng PTHH: $\\ce{?KMnO4 + ?HCl -> ?KCl + ?MnCl2 + ?Cl2 ^ + ?H2O}$. Nhập hệ số nguyên tối giản của $\\ce{HCl}$.",
      answer: "16", tolerance: 0.1,
      solution: "$\\ce{2KMnO4 + 16HCl -> 2KCl + 2MnCl2 + 5Cl2 ^ + 8H2O}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w21_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hoàn thành và cân bằng các phương trình hóa học có ẩn số sau:<br/>a) $\\ce{Fe_x O_y + CO ->[t^\\circ] Fe + CO2}$<br/>b) $\\ce{C_n H_{2n+2} + O2 ->[t^\\circ] CO2 + H2O}$",
      solution: "a) $\\ce{Fe_x O_y + yCO ->[t^\\circ] xFe + yCO2}$.<br/>b) $\\ce{C_n H_{2n+2} + \\frac{3n+1}{2}O2 ->[t^\\circ] nCO2 + (n+1)H2O}$ (hoặc $\\ce{2C_n H_{2n+2} + (3n+1)O2 ->[t^\\circ] 2nCO2 + (2n+2)H2O}$).",
      rubric: [
        { step: "Cân bằng đúng câu a) với hệ số $y\\text{ CO}$, $x\\text{ Fe}$, $y\\text{ CO}_2$", points: 0.5 },
        { step: "Cân bằng đúng câu b) với hệ số $(3n+1)/2\\text{ O}_2$ (hoặc nhân đôi)", points: 0.5 }
      ] },
    { id: "w21_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Lập phương trình hóa học cho phản ứng khử oxide sắt bằng nhôm (phản ứng nhiệt nhôm): $\\ce{Fe3O4 + Al ->[t^\\circ] Fe + Al2O3}$ và giải thích cách cân bằng nhanh.",
      solution: "Bước 1: Thấy $\\ce{Fe3O4}$ có $4$ O, $\\ce{Al2O3}$ có $3$ O $\\Rightarrow$ BCNN của 4 và 3 là $12$. Đặt $3$ trước $\\ce{Fe3O4}$ và $4$ trước $\\ce{Al2O3}$. Bước 2: Cân bằng $3 \\times 3 = 9$ Fe và $4 \\times 2 = 8$ Al. PTHH: $\\ce{3Fe3O4 + 8Al ->[t^\\circ] 9Fe + 4Al2O3}$.",
      rubric: [
        { step: "Cân bằng đúng nguyên tử O (tìm BCNN = 12)", points: 0.5 },
        { step: "Viết đúng PTHH hoàn chỉnh $\\ce{3Fe3O4 + 8Al ->[t^\\circ] 9Fe + 4Al2O3}$", points: 0.5 }
      ] },
    { id: "w21_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho sơ đồ phản ứng: $\\ce{M + H2SO4(đặc, nóng) -> M2(SO4)_n + SO2 ^ + H2O}$ (với $n$ là hóa trị của kim loại M). Hãy cân bằng phương trình trên theo ẩn $n$.",
      solution: "Đặt $2$ trước M để cân bằng $M_2$ trong $\\ce{M2(SO4)_n}$. Số nguyên tử H ở vế trái bằng $2$ lần số phân tử $\\ce{H2O}$. Theo bảo toàn electron/hóa trị: $2M$ nhường $2n$ electron, mỗi $\\ce{SO2}$ nhận $2$ electron $\\Rightarrow$ có $n$ phân tử $\\ce{SO2}$. Tổng S bên phải $= n + n = 2n \\Rightarrow$ cần $2n\\ \\ce{H2SO4}$ và $2n\\ \\ce{H2O}$. PTHH: $\\ce{2M + 2nH2SO4 ->[t^\\circ] M2(SO4)_n + nSO2 ^ + 2nH2O}$.",
      rubric: [
        { step: "Xác định đúng hệ số $n\\text{ SO}_2$ và $2n\\text{ H}_2\\text{SO}_4$", points: 0.5 },
        { step: "Viết đúng PTHH hoàn chỉnh và kiểm tra lại số O hai vế ($8n = 4n + 2n + 2n$)", points: 0.5 }
      ] },
    { id: "w21_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Xác định công thức của chất X và cân bằng PTHH: $\\ce{FeS2 + O2 ->[t^\\circ] Fe2O3 + X}$ (biết X là khí gây mưa acid có phân tử khối $64\\text{ amu}$).",
      solution: "Khí gây mưa acid tạo từ S và O có $M = 64\\text{ amu}$ là Sulfur dioxide ($\\ce{SO2}$). PTHH: $\\ce{4FeS2 + 11O2 ->[t^\\circ] 2Fe2O3 + 8SO2 ^}$.",
      rubric: [
        { step: "Xác định đúng X là $\\ce{SO2}$", points: 0.5 },
        { step: "Cân bằng đúng PTHH $\\ce{4FeS2 + 11O2 ->[t^\\circ] 2Fe2O3 + 8SO2 ^}$", points: 0.5 }
      ] },
    { id: "w21_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hãy giải thích ý nghĩa định lượng của PTHH $\\ce{N2 + 3H2 <=>[t^\\circ, xt, p] 2NH3}$ về mặt số phân tử và tỉ lệ khối lượng các chất.",
      solution: "• Về số phân tử: Cứ $1$ phân tử $\\ce{N2}$ phản ứng với $3$ phân tử $\\ce{H2}$ tạo ra $2$ phân tử $\\ce{NH3}$ (tỉ lệ $1 : 3 : 2$).<br/>• Về khối lượng: Cứ $28\\text{ g}$ $\\ce{N2}$ tác dụng vừa đủ với $3 \\times 2 = 6\\text{ g}$ $\\ce{H2}$ tạo ra $2 \\times 17 = 34\\text{ g}$ $\\ce{NH3}$ (tỉ lệ khối lượng $14 : 3 : 17$).",
      rubric: [
        { step: "Nêu đúng tỉ lệ số phân tử $1 : 3 : 2$", points: 0.5 },
        { step: "Tính đúng tỉ lệ khối lượng $28 : 6 : 34$ (tức $14 : 3 : 17$)", points: 0.5 }
      ] }
  ]
};
