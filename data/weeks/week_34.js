window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[34] = {
  week: 34,
  title: "Muối: Tính tan, Phản ứng trao đổi ion sơ lược & Phân bón hóa học",
  objectives: [
    "Ghi nhớ quy tắc tính tan nhanh của các muối phổ biến (nitrate, chloride, sulfate, carbonate).",
    "Nắm vững điều kiện xảy ra <strong>Phản ứng trao đổi</strong> trong dung dịch: Sản phẩm phải có ít nhất một chất kết tủa ($\\downarrow$), chất khí ($\\uparrow$) hoặc nước ($\\ce{H2O}$).",
    "Nhận biết 3 nhóm phân bón hóa học đơn (Đạm N, Lân P, Kali K) và phân phức hợp NPK, tính được độ dinh dưỡng của phân bón."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 34 (A4). Chuẩn bị bảng tính tan nhanh và mẫu bao bì phân bón NPK (vd 16-16-8).",
    sessions: [
      {
        name: "Buổi 1: Quy tắc Tính tan nhanh của Muối",
        guide: "Mẹo nhớ không cần tra bảng: (1) Tất cả muối $\\text{Na}^+, \\text{K}^+, \\text{NH}_4^+$ và gốc $\\text{NO}_3^-$ ĐỀU TAN; (2) Muối $\\text{Cl}^-$ tan hết (trừ $\\ce{AgCl}$ trắng); (3) Muối $\\text{SO}_4^{2-}$ tan hết (trừ $\\ce{BaSO4}$ trắng, $\\ce{PbSO4}$); (4) Muối $\\text{CO}_3^{2-}, \\text{PO}_4^{3-}$ hầu hết KHÔNG TAN (trừ $\\text{Na, K, NH}_4$).",
        pitfalls: "Học sinh hay quên $\\ce{BaSO4}$ và $\\ce{AgCl}$ là kết tủa trắng cực kỳ bền (không tan cả trong acid mạnh!)."
      },
      {
        name: "Buổi 2: Phản ứng trao đổi & Phân bón hóa học",
        guide: "Muối + Acid / Base / Muối khác chỉ phản ứng khi tạo thành kết tủa, khí hoặc nước. Nếu trộn $\\ce{NaCl}$ với $\\ce{KNO3}$ thì KHÔNG có kết tủa/khí/nước $\\to$ KHÔNG phản ứng!",
        pitfalls: "Viết bừa $\\ce{NaCl + KNO3 -> NaNO3 + KCl}$ (sai vì không thỏa mãn điều kiện phản ứng trao đổi!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán Phân bón HSG",
        guide: "Chú ý 5 câu HSG: tính độ dinh dưỡng (%N, %$\\ce{P2O5}$, %$\\ce{K2O}$) và giải thích tại sao không trộn đạm ammonium ($\\ce{NH4NO3}$) với vôi bột ($\\ce{Ca(OH)2}$).",
        pitfalls: "Quên quy đổi $\\text{P} \\to \\frac{1}{2}\\ce{P2O5}$ và $\\text{K} \\to \\frac{1}{2}\\ce{K2O}$ khi tính độ dinh dưỡng phân lân, phân kali."
      }
    ]
  },
  lecture: [
    {
      title: "Quy tắc Tính tan & Điều kiện Phản ứng Trao đổi",
      content: `
        <div class="callout">
          <strong>4 Quy tắc Tính tan Cấp tốc:</strong><br/>
          1. Mọi muối của <strong>$\\text{Na, K, NH}_4$</strong> và mọi muối <strong>nitrate ($\\text{NO}_3$)</strong> đều <strong>TAN</strong>.<br/>
          2. Muối <strong>chloride ($\\text{Cl}$)</strong> tan hết, trừ <strong>$\\ce{AgCl} \\downarrow$</strong> (trắng).<br/>
          3. Muối <strong>sulfate ($\\text{SO}_4$)</strong> tan hết, trừ <strong>$\\ce{BaSO4} \\downarrow$</strong> (trắng), $\\ce{PbSO4} \\downarrow$.<br/>
          4. Muối <strong>carbonate ($\\text{CO}_3$)</strong> hầu hết <strong>KHÔNG TAN</strong> (trừ muối của $\\text{Na, K, NH}_4$).
        </div>
        <p><strong>Điều kiện xảy ra phản ứng trao đổi:</strong> Khi trộn hai dung dịch chất điện ly (muối, acid, base), phản ứng chỉ xảy ra nếu sản phẩm có ít nhất một chất <strong>kết tủa ($\\downarrow$)</strong>, hoặc <strong>chất khí ($\\uparrow$)</strong>, hoặc <strong>nước ($\\ce{H2O}$)</strong>.</p>
      `,
      checkpoint: {
        question: "Cặp dung dịch chất nào sau đây KHÔNG xảy ra phản ứng khi trộn vào nhau?",
        options: [
          "$\\ce{BaCl2}$ và $\\ce{Na2SO4}$",
          "$\\ce{AgNO3}$ và $\\ce{HCl}$",
          "$\\ce{NaCl}$ và $\\ce{KNO3}$",
          "$\\ce{Na2CO3}$ và $\\ce{H2SO4}$"
        ],
        answer: 2,
        explanation: "$\\ce{NaCl}$ và $\\ce{KNO3}$ đều là muối tan, nếu trao đổi thành $\\ce{NaNO3}$ và $\\ce{KCl}$ cũng tan hết, không có kết tủa/khí/nước nên không phản ứng."
      }
    },
    {
      title: "Phân bón Hóa học & Độ dinh dưỡng (Chuẩn thi HSG)",
      content: `
        <ul>
          <li><strong>Phân đạm (N):</strong> Kích thích cành lá phát triển. Độ dinh dưỡng tính theo <strong>$\\%\\text{N}$</strong> (vd: Urea $\\ce{(NH2)2CO}$, $\\ce{NH4NO3}$).</li>
          <li><strong>Phân lân (P):</strong> Phát triển bộ rễ, hạt. Độ dinh dưỡng tính theo <strong>$\\%\\ce{P2O5}$</strong> (vd: Superphosphate $\\ce{Ca(H2PO4)2}$).</li>
          <li><strong>Phân kali (K):</strong> Tăng sức chống chịu, tạo đường/tinh bột. Độ dinh dưỡng tính theo <strong>$\\%\\ce{K2O}$</strong> (vd: $\\ce{KCl, K2SO4}$).</li>
        </ul>
      `,
      example: "Tại sao không được bón lẫn phân đạm ammonium (như $\\ce{NH4Cl}$, $\\ce{(NH4)2SO4}$) với vôi bột ($\\ce{Ca(OH)2}$) hay tro bếp (chứa $\\ce{K2CO3}$)? <br/><em>Phân tích:</em> Vôi và tro bếp có tính kiềm, sẽ phản ứng với muối ammonium giải phóng khí ammonia ($\\ce{NH3}$) bay mất làm thất thoát đạm: $\\ce{2NH4Cl + Ca(OH)2 -> CaCl2 + 2NH3 ^ + 2H2O}$."
    }
  ],
  questions: [
    { id: "w34_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Muối nào sau đây KHÔNG tan trong nước?",
      options: ["A. $\\ce{NaNO3}$", "B. $\\ce{K2CO3}$", "C. $\\ce{BaSO4}$", "D. $\\ce{CuCl2}$"],
      answer: 2, solution: "$\\ce{BaSO4}$ là kết tủa trắng không tan trong nước và acid." },
    { id: "w34_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi nhỏ dung dịch $\\ce{AgNO3}$ vào dung dịch $\\ce{NaCl}$, xuất hiện kết tủa màu trắng là chất nào?",
      options: ["A. $\\ce{NaNO3}$", "B. $\\ce{AgCl}$", "C. $\\ce{Ag2O}$", "D. $\\ce{NaCl}$"],
      answer: 1, solution: "$\\ce{AgNO3 + NaCl -> AgCl v + NaNO3}$." },
    { id: "w34_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho dung dịch $\\ce{Na2CO3}$ tác dụng với dung dịch $\\ce{HCl}$ dư, hiện tượng quan sát được là:",
      options: ["A. Xuất hiện kết tủa trắng", "B. Dung dịch hóa xanh", "C. Sủi bọt khí không màu ($\\ce{CO2}$)", "D. Không có hiện tượng gì"],
      answer: 2, solution: "$\\ce{Na2CO3 + 2HCl -> 2NaCl + CO2 ^ + H2O}$." },
    { id: "w34_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Loại phân bón nào sau đây cung cấp nguyên tố dinh dưỡng Nitrogen (Đạm) cho cây trồng?",
      options: ["A. $\\ce{KCl}$", "B. $\\ce{CO(NH2)2}$ (Urea)", "C. $\\ce{Ca(H2PO4)2}$", "D. $\\ce{K2SO4}$"],
      answer: 1, solution: "Urea là phân đạm." },
    { id: "w34_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Trên bao bì phân bón NPK ghi tỉ lệ `16-16-8`. Con số `8` cuối cùng biểu thị phần trăm của thành phần nào?",
      options: ["A. $\\%\\text{N}$", "B. $\\%\\ce{P2O5}$", "C. $\\%\\ce{K2O}$", "D. $\\%\\text{CaO}$"],
      answer: 2, solution: "Thứ tự chuẩn NPK là: $\\%\\text{N} - \\%\\ce{P2O5} - \\%\\ce{K2O}$." },
    { id: "w34_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Phản ứng giữa dung dịch $\\ce{CuSO4}$ và dung dịch $\\ce{NaOH}$ tạo ra kết tủa màu gì?",
      options: ["A. Trắng", "B. Xanh lam ($\\ce{Cu(OH)2}$)", "C. Nâu đỏ", "D. Đen"],
      answer: 1, solution: "$\\ce{CuSO4 + 2NaOH -> Cu(OH)2 v + Na2SO4}$." },
    { id: "w34_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch nào sau đây phản ứng được với dung dịch $\\ce{BaCl2}$ tạo kết tủa trắng?",
      options: ["A. $\\ce{NaNO3}$", "B. $\\ce{K2SO4}$", "C. $\\ce{HCl}$", "D. $\\ce{KOH}$"],
      answer: 1, solution: "$\\ce{BaCl2 + K2SO4 -> BaSO4 v + 2KCl}$." },
    { id: "w34_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Tất cả các muối nitrate ($\\text{NO}_3$) đều tan trong nước.", answer: true },
        { text: "Muối $\\ce{CaCO3}$ tan rất tốt trong nước lạnh.", answer: false },
        { text: "Phản ứng trao đổi luôn cần tạo ít nhất một kết tủa, khí hoặc nước.", answer: true },
        { text: "Tro thực vật (tro bếp) chứa $\\ce{K2CO3}$ là một nguồn phân kali tự nhiên.", answer: true }
      ],
      solution: "b) Sai: $\\ce{CaCO3}$ là chất rắn không tan trong nước." },
    { id: "w34_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $100\\text{ mL}$ dung dịch $\\ce{BaCl2}$ $1\\text{ M}$ tác dụng với dung dịch $\\ce{Na2SO4}$ dư. Tính khối lượng kết tủa $\\ce{BaSO4}$ ($M=233$) thu được (gam).",
      answer: "23.3", tolerance: 0.1,
      solution: "$n_{\\ce{BaSO4}} = 0,1\\text{ mol} \\Rightarrow m = 23,3\\text{ g}$." },
    { id: "w34_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $10,6\\text{ g}$ $\\ce{Na2CO3}$ ($M=106$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Thể tích khí $\\ce{CO2}$ (Lít, ở đkc) thoát ra là bao nhiêu?",
      answer: "2.479", tolerance: 0.01,
      solution: "$n_{\\ce{Na2CO3}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{CO2}} = 0,1\\text{ mol} \\Rightarrow V = 2,479\\text{ L}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w34_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Nhỏ dung dịch $\\ce{Ba(OH)2}$ dư vào dung dịch hỗn hợp chứa $\\ce{MgCl2}$ và $\\ce{H2SO4}$, kết tủa thu được gồm:",
      options: ["A. Chỉ có $\\ce{BaSO4}$", "B. Chỉ có $\\ce{Mg(OH)2}$", "C. Cả $\\ce{BaSO4}$ và $\\ce{Mg(OH)2}$", "D. Không có kết tủa"],
      answer: 2, solution: "$\\ce{Ba^{2+}}$ kết hợp $\\ce{SO4^{2-}}$ tạo $\\ce{BaSO4} \\downarrow$; $\\ce{OH-}$ dư kết hợp $\\ce{Mg^{2+}}$ tạo $\\ce{Mg(OH)2} \\downarrow$." },
    { id: "w34_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Một bao phân bón NPK ghi `20-20-15` nặng $50\\text{ kg}$. Tổng khối lượng nguyên tố Nitrogen (N) có trong bao phân này là:",
      options: ["A. $5\\text{ kg}$", "B. $10\\text{ kg}$", "C. $15\\text{ kg}$", "D. $20\\text{ kg}$"],
      answer: 1, solution: "$m_{\\text{N}} = 50 \\times 20\\% = 10\\text{ kg}$." },
    { id: "w34_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Xét các cặp dung dịch sau đây có phản ứng với nhau hay không:",
      statements: [
        { text: "$\\ce{Na2CO3}$ và $\\ce{CaCl2}$ phản ứng tạo kết tủa trắng $\\ce{CaCO3}$.", answer: true },
        { text: "$\\ce{K2SO4}$ và $\\ce{NaCl}$ phản ứng tạo kết tủa trắng.", answer: false },
        { text: "$\\ce{AgNO3}$ và $\\ce{KBr}$ phản ứng tạo kết tủa vàng nhạt $\\ce{AgBr}$.", answer: true },
        { text: "$\\ce{NH4NO3}$ và $\\ce{KOH}$ (đun nhẹ) phản ứng giải phóng khí $\\ce{NH3}$ mùi khai.", answer: true }
      ],
      solution: "b) Sai: $\\ce{KCl}$ và $\\ce{Na2SO4}$ đều tan nên không phản ứng." },
    { id: "w34_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $200\\text{ mL}$ dung dịch $\\ce{AgNO3}$ $1\\text{ M}$ tác dụng với $150\\text{ mL}$ dung dịch $\\ce{NaCl}$ $1\\text{ M}$. Tính khối lượng kết tủa $\\ce{AgCl}$ ($M=143,5$) thu được (gam).",
      answer: "21.525", tolerance: 0.05,
      solution: "$n_{\\ce{NaCl}} = 0,15 < n_{\\ce{AgNO3}} = 0,2 \\Rightarrow n_{\\ce{AgCl}} = 0,15\\text{ mol} \\Rightarrow m = 0,15 \\times 143,5 = 21,525\\text{ g}$." },
    { id: "w34_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Tính độ dinh dưỡng ($\\%\\ce{K2O}$, biết $\\text{K}=39, \\text{O}=16, \\text{Cl}=35,5$) của một loại phân kali nguyên chất chứa $100\\%$ $\\ce{KCl}$ (làm tròn 2 chữ số thập phân).",
      answer: "63.09", tolerance: 0.1,
      solution: "Cứ $2\\text{ mol}$ $\\ce{KCl}$ ($2 \\times 74,5 = 149\\text{ g}$) tương ứng $1\\text{ mol}$ $\\ce{K2O}$ ($94\\text{ g}$). Vậy $\\%\\ce{K2O} = \\frac{94}{149} \\times 100\\% \\approx 63,09\\%$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w34_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một loại phân supephotphat kép có thành phần chính là $\\ce{Ca(H2PO4)2}$ ($M=234$). Biết độ dinh dưỡng ghi trên bao bì là $40\\%$ $\\ce{P2O5}$ ($M=142$). Tính phần trăm khối lượng $\\ce{Ca(H2PO4)2}$ có trong loại phân lân trên (làm tròn 2 chữ số thập phân).",
      quickAnswer: "65.92",
      solution: "Trong $100\\text{ g}$ phân bón có lượng P tương đương $40\\text{ g}$ $\\ce{P2O5} \\Rightarrow n_{\\ce{P2O5}} = \\frac{40}{142}\\text{ mol}$. Bảo toàn P: cứ $1\\text{ mol}$ $\\ce{Ca(H2PO4)2}$ có $2\\text{ mol}$ P (tương ứng $1\\text{ mol}$ $\\ce{P2O5}$) $\\Rightarrow n_{\\ce{Ca(H2PO4)2}} = \\frac{40}{142}\\text{ mol}$. Vậy $m_{\\ce{Ca(H2PO4)2}} = \\frac{40}{142} \\times 234 \\approx 65,92\\text{ g} \\Rightarrow \\%m = 65,92\\%$.",
      rubric: [
        { step: "Lập được tỉ lệ bảo toàn P: $1\\text{ mol } \\ce{Ca(H2PO4)2} \\leftrightarrow 1\\text{ mol } \\ce{P2O5}$", points: 0.5 },
        { step: "Tính đúng hàm lượng $\\ce{Ca(H2PO4)2} \\approx 65,92\\%$", points: 0.5 }
      ] },
    { id: "w34_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $20,4\\text{ g}$ hỗn hợp X gồm $\\ce{Na2CO3}$ ($M=106$) và $\\ce{K2CO3}$ ($M=138$)? (Lấy $24,4\\text{ g}$: $0,1\\text{ mol } \\ce{Na2CO3} = 10,6\\text{ g}$ + $0,1\\text{ mol } \\ce{K2CO3} = 13,8\\text{ g}$). Cho $24,4\\text{ g}$ hỗn hợp X tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư thu được $4,958\\text{ L}$ khí $\\ce{CO2}$ (đkc). Tính khối lượng mỗi muối trong X.",
      solution: "Đặt $n_{\\ce{Na2CO3}} = x, n_{\\ce{K2CO3}} = y$. $n_{\\ce{CO2}} = 4,958 / 24,79 = 0,2\\text{ mol}$. Hệ: $106x + 138y = 24,4$ và $x + y = 0,2 \\Rightarrow x = 0,1\\text{ mol}$ ($10,6\\text{ g}$ $\\ce{Na2CO3}$) và $y = 0,1\\text{ mol}$ ($13,8\\text{ g}$ $\\ce{K2CO3}$).",
      rubric: [
        { step: "Viết đúng 2 PTHH và tính $n_{\\ce{CO2}} = 0,2\\text{ mol}$", points: 0.25 },
        { step: "Lập hệ và giải đúng $m_{\\ce{Na2CO3}} = 10,6\\text{ g}$, $m_{\\ce{K2CO3}} = 13,8\\text{ g}$", points: 0.75 }
      ] },
    { id: "w34_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Chỉ dùng thêm một hóa chất duy nhất là dung dịch $\\ce{H2SO4}$ loãng, hãy trình bày cách nhận biết 4 dung dịch mất nhãn sau: $\\ce{BaCl2}$, $\\ce{Na2CO3}$, $\\ce{NaCl}$ và $\\ce{KNO3}$? (Đổi $\\ce{KNO3}$ thành $\\ce{NaOH}$? Không, đổi $\\ce{KNO3}$ thành $\\ce{Ba(OH)2}$? Không, để phân biệt $\\ce{NaCl}$ và $\\ce{NaOH}$ dùng $\\ce{BaCl2}$ sau đó... Với $\\ce{H2SO4}$ loãng nhận biết được $\\ce{BaCl2}, \\ce{Na2CO3}, \\ce{AgNO3}, \\ce{NaCl}$? Khoan: $\\ce{BaCl2}$ tạo $\\ce{BaSO4} \\downarrow$, $\\ce{Na2CO3}$ sủi khí $\\ce{CO2}$, còn lại $\\ce{NaCl}$ và $\\ce{NaOH}$: dùng chính $\\ce{BaCl2}$ + $\\ce{Na2CO3}$ hay $\\ce{MgCl2}$! Sửa đề chuẩn HSG: nhận biết 4 dung dịch $\\ce{BaCl2}$, $\\ce{Na2CO3}$, $\\ce{NaOH}$, $\\ce{NaCl}$ bằng phenolphthalein!). Hãy nhận biết 4 dung dịch $\\ce{BaCl2}$, $\\ce{Na2CO3}$, $\\ce{H2SO4}$, $\\ce{NaCl}$ chỉ bằng quỳ tím!",
      solution: "Dùng quỳ tím: • Hóa đỏ là $\\ce{H2SO4}$. • Không đổi màu là $\\ce{BaCl2}$ và $\\ce{NaCl}$. • Hóa xanh (nhờ thủy phân yếu của muối carbonate) hoặc dùng $\\ce{H2SO4}$ vừa nhận được nhỏ vào 3 mẫu còn lại: mẫu sủi bọt khí là $\\ce{Na2CO3}$; mẫu tạo kết tủa trắng là $\\ce{BaCl2}$; mẫu không hiện tượng là $\\ce{NaCl}$.",
      rubric: [
        { step: "Dùng quỳ tím nhận ra $\\ce{H2SO4}$ (hóa đỏ)", points: 0.25 },
        { step: "Dùng $\\ce{H2SO4}$ phân biệt $\\ce{Na2CO3}$ (sủi khí), $\\ce{BaCl2}$ (kết tủa trắng) và $\\ce{NaCl}$ (không hiện tượng)", points: 0.75 }
      ] },
    { id: "w34_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một người làm vườn cần bón $2,1\\text{ kg}$ Nitrogen (N) cho mảnh ruộng. Nếu dùng phân bón hỗn hợp NPK `15-15-15` kết hợp với $2\\text{ kg}$ phân đạm Urea $\\ce{(NH2)2CO}$ (độ tinh khiết $100\\%$, $\\%\\text{N} = 46,67\\%$), hỏi người đó cần mua thêm bao nhiêu kg phân NPK `15-15-15`? (Làm tròn 2 chữ số thập phân)",
      quickAnswer: "7.78",
      solution: "Lượng N có trong $2\\text{ kg}$ Urea $= 2 \\times 46,67\\% = 0,9334\\text{ kg}$. Lượng N còn thiếu cần lấy từ NPK $= 2,1 - 0,9334 = 1,1666\\text{ kg}$. Vì NPK chứa $15\\%$ N nên khối lượng NPK cần mua $= 1,1666 / 0,15 \\approx 7,78\\text{ kg}$.",
      rubric: [
        { step: "Tính đúng lượng N từ Urea $\\approx 0,9334\\text{ kg}$", points: 0.5 },
        { step: "Tính đúng lượng NPK cần mua $\\approx 7,78\\text{ kg}$", points: 0.5 }
      ] },
    { id: "w34_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Muối ăn thô khai thác từ nước biển có lẫn tạp chất là $\\ce{MgCl2}$ và $\\ce{CaCl2}$ (làm muối có vị đắng và dễ chảy nước). Trong công nghiệp, người ta dùng dung dịch $\\ce{Na2CO3}$ và $\\ce{NaOH}$ để loại bỏ tạp chất này rồi trung hòa lại bằng $\\ce{HCl}$ và kết tinh lại. Hãy viết 2 PTHH loại bỏ $\\ce{MgCl2}$ và $\\ce{CaCl2}$.",
      solution: "• Dùng $\\ce{NaOH}$ kết tủa $\\ce{Mg^{2+}}$: $\\ce{MgCl2 + 2NaOH -> Mg(OH)2 v + 2NaCl}$.<br/>• Dùng $\\ce{Na2CO3}$ kết tủa $\\ce{Ca^{2+}}$: $\\ce{CaCl2 + Na2CO3 -> CaCO3 v + 2NaCl}$.<br/>(Sau đó lọc bỏ kết tủa, trung hòa kiềm/carbonate dư bằng $\\ce{HCl}$ sẽ thu được dung dịch $\\ce{NaCl}$ tinh khiết).",
      rubric: [
        { step: "Viết đúng PTHH $\\ce{MgCl2 + 2NaOH -> Mg(OH)2 v + 2NaCl}$", points: 0.5 },
        { step: "Viết đúng PTHH $\\ce{CaCl2 + Na2CO3 -> CaCO3 v + 2NaCl}$", points: 0.5 }
      ] }
  ]
};
