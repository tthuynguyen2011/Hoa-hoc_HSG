window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[20] = {
  week: 20,
  title: "Định luật bảo toàn khối lượng (ĐLBTKL) & Ứng dụng tính toán",
  objectives: [
    "Phát biểu và hiểu bản chất của Định luật bảo toàn khối lượng (Lomonosov – Lavoisier): Tổng khối lượng các chất sản phẩm bằng tổng khối lượng các chất tham gia phản ứng.",
    "Viết được biểu thức ĐLBTKL cho mọi phản ứng và giải thích được các hiện tượng 'tăng/giảm khối lượng' khi cân trong bình hở.",
    "Vận dụng ĐLBTKL giải các bài toán nhiều chất / hỗn hợp mức HSG."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 20 (A4). Chuẩn bị hình vẽ thí nghiệm cân hai đĩa trước và sau phản ứng.",
    sessions: [
      {
        name: "Buổi 1: Nội dung ĐLBTKL & Giải thích bản chất vi mô",
        guide: "Liên hệ trực tiếp với Tuần 19: Vì số nguyên tử mỗi nguyên tố không đổi và khối lượng mỗi nguyên tử không đổi nên tổng khối lượng trước và sau phản ứng BẮT BUỘC bằng nhau.",
        pitfalls: "Học sinh hay hiểu nhầm ĐLBTKL là 'khối lượng chất bỏ vào bình = khối lượng thu được', quên trừ đi lượng chất DƯ không tham gia phản ứng!"
      },
      {
        name: "Buổi 2: Bẫy kinh điển – Phản ứng trong bình hở (Tăng/Giảm khối lượng)",
        guide: "Ví dụ 1: Nung $\\ce{CaCO3}$ trong chén nung hở thấy khối lượng chất rắn GIẢM đi (vì khí $\\ce{CO2}$ bay ra ngoài). Ví dụ 2: Đốt dây đồng trong không khí thấy khối lượng rắn TĂNG lên (vì đã cộng thêm khối lượng $\\ce{O2}$ từ không khí).",
        pitfalls: "Cho rằng ĐLBTKL bị sai khi thấy chất rắn nhẹ đi sau khi nung!"
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán hỗn hợp HSG",
        guide: "Rèn 5 câu HSG: tính khối lượng chất còn lại khi có chất dư, và bài toán hỗn hợp 2 kim loại tác dụng với acid/oxygen mà không cần giải hệ phương trình.",
        pitfalls: "Quên kiểm tra xem phản ứng có xảy ra hoàn toàn (vừa đủ) hay có chất dư."
      }
    ]
  },
  lecture: [
    {
      title: "Định luật Bảo toàn Khối lượng (ĐLBTKL)",
      content: `
        <div class="callout">
          <strong>Phát biểu:</strong> Trong một phản ứng hóa học, <strong>tổng khối lượng của các chất sản phẩm bằng tổng khối lượng của các chất tham gia phản ứng</strong>.<br/>
          Với phản ứng $A + B \\longrightarrow C + D$ (xảy ra vừa đủ):
          <p style="text-align:center;font-size:1.08rem;margin:6px 0;">$$m_A + m_B = m_C + m_D$$</p>
        </div>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 480 120" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <line x1="80" y1="60" x2="400" y2="60" stroke="#334155" stroke-width="3"/>
            <polygon points="240,60 225,105 255,105" fill="#475569"/>
            <rect x="65" y="20" width="90" height="36" rx="6" fill="#dbeafe" stroke="#2563eb"/>
            <text x="110" y="42" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Trước PƯ: 100g</text>
            <rect x="325" y="20" width="90" height="36" rx="6" fill="#dcfce7" stroke="#16a34a"/>
            <text x="370" y="42" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">Sau PƯ: 100g</text>
            <text x="240" y="38" font-size="11" font-weight="bold" text-anchor="middle" fill="#b45309">Bình kín luôn thăng bằng!</text>
          </svg>
        </div>
      `,
      checkpoint: {
        question: "Đốt cháy hoàn toàn $12\\text{ g}$ Carbon cần vừa đủ $32\\text{ g}$ khí Oxygen. Khối lượng khí $\\ce{CO2}$ thu được là:",
        options: ["20 g", "32 g", "44 g", "56 g"],
        answer: 2,
        explanation: "$m_{\\ce{CO2}} = m_{\\text{C}} + m_{\\ce{O2}} = 12 + 32 = 44\\text{ g}$."
      }
    },
    {
      title: "Lưu ý quan trọng khi áp dụng ĐLBTKL (Chuẩn HSG)",
      content: `
        <ul>
          <li><strong>Trường hợp 1 – Bình hở có khí bay ra:</strong> $m_{\\text{rắn sau}} < m_{\\text{rắn trước}}$ vì $m_{\\text{khí bay ra}} = m_{\\text{rắn trước}} - m_{\\text{rắn sau}}$.</li>
          <li><strong>Trường hợp 2 – Kim loại tác dụng với Oxygen ngoài không khí:</strong> $m_{\\text{oxide}} > m_{\\text{kim loại}}$ vì $m_{\\ce{O2}\\text{ phản ứng}} = m_{\\text{oxide}} - m_{\\text{kim loại}}$.</li>
          <li><strong>Trường hợp 3 – Có chất DƯ:</strong> Chỉ tính khối lượng phần <strong>đã phản ứng</strong>: $m_{\\text{tham gia PƯ}} = m_{\\text{sản phẩm}}$.</li>
        </ul>
      `,
      example: "Nung $100\\text{ g}$ đá vôi ($\\ce{CaCO3}$) một thời gian thu được $67\\text{ g}$ chất rắn (gồm $\\ce{CaO}$ và $\\ce{CaCO3}$ còn dư) và khí $\\ce{CO2}$ bay ra. Tính khối lượng $\\ce{CO2}$ thoát ra.<br/><em>Giải:</em> Dù phản ứng chưa hoàn toàn, tổng khối lượng ban đầu ($100\\text{ g}$) bằng tổng khối lượng chất rắn còn lại + $\\ce{CO2}$ bay ra $\\Rightarrow m_{\\ce{CO2}} = 100 - 67 = 33\\text{ g}$."
    }
  ],
  questions: [
    { id: "w20_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Định luật bảo toàn khối lượng khẳng định điều gì trong một phản ứng hóa học?",
      options: [
        "A. Tổng thể tích sản phẩm bằng tổng thể tích chất tham gia.",
        "B. Tổng khối lượng sản phẩm bằng tổng khối lượng các chất tham gia phản ứng.",
        "C. Tổng số phân tử trước và sau phản ứng luôn bằng nhau.",
        "D. Khối lượng chất rắn luôn không đổi."
      ],
      answer: 1, solution: "Tổng khối lượng sản phẩm = Tổng khối lượng chất tham gia phản ứng." },
    { id: "w20_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Nguyên nhân sâu xa dẫn đến Định luật bảo toàn khối lượng là vì trong phản ứng hóa học:",
      options: [
        "A. Các phân tử không bị phá vỡ.",
        "B. Số nguyên tử của mỗi nguyên tố được giữ nguyên.",
        "C. Thể tích bình phản ứng không đổi.",
        "D. Nhiệt độ luôn giữ nguyên."
      ],
      answer: 1, solution: "Số nguyên tử mỗi nguyên tố trước và sau phản ứng không đổi nên tổng khối lượng bảo toàn." },
    { id: "w20_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho phản ứng: $\\ce{BaCl2 + Na2SO4 -> BaSO4 v + 2NaCl}$. Biểu thức ĐLBTKL đúng là:",
      options: [
        "A. $m_{\\ce{BaCl2}} + m_{\\ce{Na2SO4}} = m_{\\ce{BaSO4}} + m_{\\ce{NaCl}}$",
        "B. $m_{\\ce{BaCl2}} = m_{\\ce{BaSO4}}$",
        "C. $m_{\\ce{Na2SO4}} = m_{\\ce{NaCl}}$",
        "D. $m_{\\ce{BaCl2}} + m_{\\ce{BaSO4}} = m_{\\ce{Na2SO4}} + m_{\\ce{NaCl}}$"
      ],
      answer: 0, solution: "Tổng khối lượng 2 chất tham gia bằng tổng khối lượng 2 chất sản phẩm." },
    { id: "w20_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Đốt cháy hoàn toàn $2,4\\text{ g}$ Magnesium thu được $4,0\\text{ g}$ Magnesium oxide ($\\ce{MgO}$). Khối lượng khí Oxygen đã phản ứng là:",
      options: ["A. $1,6\\text{ g}$", "B. $2,4\\text{ g}$", "C. $6,4\\text{ g}$", "D. $0,8\\text{ g}$"],
      answer: 0, solution: "$m_{\\ce{O2}} = 4,0 - 2,4 = 1,6\\text{ g}$." },
    { id: "w20_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Nung nóng hoàn toàn $50\\text{ g}$ $\\ce{CaCO3}$ thu được $28\\text{ g}$ vôi sống ($\\ce{CaO}$) và khí $\\ce{CO2}$. Khối lượng khí $\\ce{CO2}$ thu được là:",
      options: ["A. $22\\text{ g}$", "B. $28\\text{ g}$", "C. $78\\text{ g}$", "D. $11\\text{ g}$"],
      answer: 0, solution: "$m_{\\ce{CO2}} = 50 - 28 = 22\\text{ g}$." },
    { id: "w20_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho $5,6\\text{ g}$ sắt (Fe) tác dụng vừa đủ với $3,2\\text{ g}$ lưu huỳnh (S). Khối lượng Iron(II) sulfide ($\\ce{FeS}$) thu được là:",
      options: ["A. $2,4\\text{ g}$", "B. $8,8\\text{ g}$", "C. $9,0\\text{ g}$", "D. $4,4\\text{ g}$"],
      answer: 1, solution: "$m_{\\ce{FeS}} = 5,6 + 3,2 = 8,8\\text{ g}$." },
    { id: "w20_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Khi để một thanh sắt ngoài không khí ẩm lâu ngày bị gỉ sét, khối lượng thanh sắt sau khi bị gỉ sẽ:",
      options: ["A. Giảm đi", "B. Không đổi", "C. Tăng lên do kết hợp thêm oxygen và hơi nước", "D. Bằng 0"],
      answer: 2, solution: "Sắt kết hợp với $\\ce{O2}$ và $\\ce{H2O}$ tạo gỉ sắt nên khối lượng tăng lên." },
    { id: "w20_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "ĐLBTKL đúng cho cả phản ứng có chất khí thoát ra nếu tính cả khối lượng khí đó.", answer: true },
        { text: "Khi đốt cháy hoàn toàn một tờ giấy trong không khí, tro thu được nhẹ hơn tờ giấy nên ĐLBTKL không đúng.", answer: false },
        { text: "Trong bình kín, tổng khối lượng trước và sau phản ứng luôn bằng nhau.", answer: true },
        { text: "Nếu $10\\text{ g}$ A phản ứng với $10\\text{ g}$ B nhưng còn dư $2\\text{ g}$ B thì tổng khối lượng sản phẩm là $18\\text{ g}$.", answer: true }
      ],
      solution: "b) Sai: tro nhẹ hơn vì $\\ce{CO2}$ và hơi nước đã bay ra không khí." },
    { id: "w20_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $20,8\\text{ g}$ $\\ce{BaCl2}$ tác dụng vừa đủ với $14,2\\text{ g}$ $\\ce{Na2SO4}$ thu được $23,3\\text{ g}$ kết tủa $\\ce{BaSO4}$ và $x$ gam muối $\\ce{NaCl}$. Tính $x$.",
      answer: "11.7", tolerance: 0.05,
      solution: "$x = 20,8 + 14,2 - 23,3 = 11,7\\text{ g}$." },
    { id: "w20_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ bột đồng (Cu) trong khí oxygen thu được $8,0\\text{ g}$ Copper(II) oxide ($\\ce{CuO}$). Tính khối lượng oxygen (g) đã tham gia phản ứng.",
      answer: "1.6", tolerance: 0.05,
      solution: "$m_{\\ce{O2}} = 8,0 - 6,4 = 1,6\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w20_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho $13\\text{ g}$ kẽm (Zn) tác dụng với $20\\text{ g}$ dung dịch $\\ce{HCl}$ (lấy dư), sau phản ứng thu được $0,4\\text{ g}$ khí $\\ce{H2}$ bay ra. Tổng khối lượng dung dịch thu được sau phản ứng là:",
      options: ["A. $33,0\\text{ g}$", "B. $32,6\\text{ g}$", "C. $33,4\\text{ g}$", "D. $20,0\\text{ g}$"],
      answer: 1, solution: "$m_{\\text{dd sau}} = m_{\\text{Zn}} + m_{\\text{dd HCl}} - m_{\\ce{H2}} = 13 + 20 - 0,4 = 32,6\\text{ g}$." },
    { id: "w20_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Đốt cháy hoàn toàn $4,6\\text{ g}$ cồn ethanol ($\\ce{C2H5OH}$) cần vừa đủ $9,6\\text{ g}$ khí $\\ce{O2}$, thu được $8,8\\text{ g}$ $\\ce{CO2}$ và hơi nước. Khối lượng hơi nước tạo thành là:",
      options: ["A. $5,4\\text{ g}$", "B. $4,5\\text{ g}$", "C. $3,6\\text{ g}$", "D. $7,2\\text{ g}$"],
      answer: 0, solution: "$m_{\\ce{H2O}} = 4,6 + 9,6 - 8,8 = 5,4\\text{ g}$." },
    { id: "w20_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Nung $200\\text{ g}$ đá vôi (chứa $80\\%$ $\\ce{CaCO3}$ và $20\\%$ tạp chất trơ không bị phân hủy) đến khi phản ứng hoàn toàn, thu được $129,6\\text{ g}$ chất rắn gồm $\\ce{CaO}$ và tạp chất:",
      statements: [
        { text: "Khối lượng $\\ce{CaCO3}$ nguyên chất đem nung là $160\\text{ g}$.", answer: true },
        { text: "Khối lượng khí $\\ce{CO2}$ bay ra là $70,4\\text{ g}$.", answer: true },
        { text: "Khối lượng $\\ce{CaO}$ nguyên chất tạo thành là $89,6\\text{ g}$.", answer: true },
        { text: "Khối lượng tạp chất trơ thay đổi sau khi nung.", answer: false }
      ],
      solution: "$m_{\\text{tạp chất}} = 40\\text{ g}$ không đổi; $m_{\\ce{CO2}} = 200 - 129,6 = 70,4\\text{ g}$; $m_{\\ce{CaO}} = 129,6 - 40 = 89,6\\text{ g}$." },
    { id: "w20_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Oxi hóa hoàn toàn $15\\text{ g}$ hỗn hợp gồm 3 kim loại Mg, Al, Zn bằng khí $\\ce{O2}$ dư thu được $23\\text{ g}$ hỗn hợp 3 oxide. Tính khối lượng khí $\\ce{O2}$ (g) đã tham gia phản ứng.",
      answer: "8", tolerance: 0.05,
      solution: "$m_{\\ce{O2}} = 23 - 15 = 8\\text{ g}$." },
    { id: "w20_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $10\\text{ g}$ $\\ce{CaCO3}$ tác dụng với $100\\text{ g}$ dung dịch $\\ce{HCl}$ thấy $\\ce{CaCO3}$ tan hết và có $4,4\\text{ g}$ khí $\\ce{CO2}$ bay ra. Khối lượng dung dịch sau phản ứng là bao nhiêu gam?",
      answer: "105.6", tolerance: 0.1,
      solution: "$m_{\\text{dd sau}} = 10 + 100 - 4,4 = 105,6\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w20_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Đặt hai cốc A và B lên hai đĩa cân thăng bằng: Cốc A chứa $100\\text{ g}$ dung dịch $\\ce{HCl}$ dư; Cốc B chứa $100\\text{ g}$ dung dịch $\\ce{HCl}$ dư. Cho vào cốc A $10\\text{ g}$ $\\ce{CaCO3}$ và cho vào cốc B $10\\text{ g}$ $\\ce{MgO}$. Sau khi các chất rắn tan hết hoàn toàn (biết $\\ce{CaCO3 + 2HCl -> CaCl2 + CO2 ^ + H2O}$ và $\\ce{MgO + 2HCl -> MgCl2 + H2O}$), cân sẽ nghiêng về bên nào? Giải thích bằng tính toán (cho $\\ce{CaCO3} = 100, \\ce{CO2} = 44$).",
      solution: "Ở cốc A có khí $\\ce{CO2}$ bay ra: cứ $100\\text{ g}$ $\\ce{CaCO3}$ sinh $44\\text{ g}$ $\\ce{CO2}$, vậy $10\\text{ g}$ $\\ce{CaCO3}$ sinh $4,4\\text{ g}$ $\\ce{CO2}$ thoát ra ngoài $\\Rightarrow m_A = 100 + 10 - 4,4 = 105,6\\text{ g}$. Ở cốc B không có khí thoát ra $\\Rightarrow m_B = 100 + 10 = 110\\text{ g}$. Vì $m_B > m_A$ nên cân <strong>nghiêng về phía cốc B</strong>.",
      rubric: [
        { step: "Tính được khối lượng khí $\\ce{CO2}$ bay ra ở cốc A là $4,4\\text{ g} \\Rightarrow m_A = 105,6\\text{ g}$", points: 0.5 },
        { step: "Tính được $m_B = 110\\text{ g}$ (không có khí thoát ra) và kết luận cân nghiêng về cốc B", points: 0.5 }
      ] },
    { id: "w20_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trộn $m_1$ gam bột Fe và $m_2$ gam bột S rồi đun nóng trong bình kín không có không khí. Sau khi phản ứng xảy ra hoàn toàn thu được $22\\text{ g}$ chất rắn X. Cho toàn bộ X tác dụng với dung dịch $\\ce{HCl}$ dư thấy X tan hết và thu được hỗn hợp khí Y nặng $5,2\\text{ g}$ (biết nếu chỉ có $\\ce{FeS}$ tác dụng $\\ce{HCl}$ tạo $\\ce{H2S}$, còn Fe dư tạo $\\ce{H2}$). Tính tổng khối lượng $m_1 + m_2$ và giải thích tại sao không cần biết tỉ lệ Fe/S vẫn tìm được tổng này?",
      quickAnswer: "22",
      solution: "Vì phản ứng giữa Fe và S thực hiện trong bình kín nên theo ĐLBTKL, tổng khối lượng chất rắn X thu được chính bằng tổng khối lượng hỗn hợp ban đầu: $m_1 + m_2 = m_X = 22\\text{ g}$ (dù Fe hay S có dư hay không).",
      rubric: [
        { step: "Áp dụng ĐLBTKL cho bình kín: $m_1 + m_2 = m_X = 22\\text{ g}$", points: 0.5 },
        { step: "Giải thích rõ mọi nguyên tử Fe và S ban đầu đều nằm trong chất rắn X (kể cả phần dư)", points: 0.5 }
      ] },
    { id: "w20_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Đốt cháy hoàn toàn $12,4\\text{ g}$ hỗn hợp gồm $\\text{Mg}, \\text{Al}, \\text{Fe}$ trong bình chứa $16\\text{ g}$ khí $\\ce{O2}$. Sau khi kết thúc phản ứng thu được $18,8\\text{ g}$ hỗn hợp oxide (hết kim loại). Tính khối lượng khí $\\ce{O2}$ còn dư chưa tham gia phản ứng.",
      quickAnswer: "9.6",
      solution: "Theo ĐLBTKL: $m_{\\ce{O2}\\text{ phản ứng}} = m_{\\text{oxide}} - m_{\\text{kim loại}} = 18,8 - 12,4 = 6,4\\text{ g}$. Vậy lượng $\\ce{O2}$ còn dư $= 16 - 6,4 = 9,6\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{O2}\\text{ phản ứng}} = 18,8 - 12,4 = 6,4\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\ce{O2}\\text{ dư}} = 16 - 6,4 = 9,6\\text{ g}$", points: 0.5 }
      ] },
    { id: "w20_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong một phản ứng giữa A và B tạo ra C và D theo tỉ lệ khối lượng $m_A : m_B = 2 : 3$. Biết tổng khối lượng của C và D thu được là $45\\text{ g}$ (phản ứng vừa đủ). Tính khối lượng của A và B đã phản ứng.",
      solution: "Theo ĐLBTKL: $m_A + m_B = m_C + m_D = 45\\text{ g}$. Vì $m_A : m_B = 2 : 3$ nên $m_A = 45 \\times \\frac{2}{2+3} = 18\\text{ g}$, và $m_B = 45 - 18 = 27\\text{ g}$.",
      rubric: [
        { step: "Áp dụng ĐLBTKL suy ra $m_A + m_B = 45\\text{ g}$", points: 0.5 },
        { step: "Giải đúng $m_A = 18\\text{ g}$ và $m_B = 27\\text{ g}$", points: 0.5 }
      ] },
    { id: "w20_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi đốt cháy một cây nến nặng $50\\text{ g}$ trên đĩa cân đến khi nến cháy hết một nửa, số chỉ của cân giảm đi còn $25\\text{ g}$. Hãy giải thích hiện tượng này có vi phạm Định luật bảo toàn khối lượng không?",
      solution: "Không vi phạm ĐLBTKL. Khi nến cháy, sáp nến phản ứng với khí $\\ce{O2}$ trong không khí tạo ra khí $\\ce{CO2}$ và hơi nước ($\\ce{H2O}$). Do cân đặt ngoài không khí (hệ hở), các sản phẩm khí này bay đi nên đĩa cân chỉ còn cân phần sáp chưa cháy ($25\\text{ g}$). Nếu đốt trong bình kín thì khối lượng tổng vẫn bảo toàn.",
      rubric: [
        { step: "Khẳng định không vi phạm ĐLBTKL", points: 0.25 },
        { step: "Giải thích sản phẩm cháy ($\\ce{CO2}$, hơi nước) đã bay ra ngoài không khí do cân ở hệ hở", points: 0.75 }
      ] }
  ]
};
