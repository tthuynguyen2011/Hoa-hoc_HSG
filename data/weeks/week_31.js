window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[31] = {
  week: 31,
  title: "Acid: Tính chất hóa học, phân loại & Thang pH",
  objectives: [
    "Hiểu định nghĩa Acid (theo GDPT 2018): Hợp chất phân tử có chứa nguyên tử Hydrogen, khi tan trong nước tạo ra ion $\\ce{H+}$.",
    "Nhớ công thức và tên gọi các acid thông dụng ($\\ce{HCl}$, $\\ce{H2SO4}$, $\\ce{HNO3}$, $\\ce{CH3COOH}$, $\\ce{H2CO3}$, $\\ce{H3PO4}$).",
    "Nắm vững tính chất hóa học của acid (làm đổi màu quỳ tím sang đỏ, tác dụng với kim loại đứng trước H, base, oxide base, muối) và ý nghĩa Thang pH ($\\text{pH} < 7$)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 31 (A4). Chuẩn bị giấy quỳ tím, chanh tươi, giấm ăn để thử pH thực tế.",
    sessions: [
      {
        name: "Buổi 1: Khái niệm Acid, Tên gọi & Thang pH",
        guide: "Dạy thang pH 0–14 bằng sơ đồ màu trực quan: $\\text{pH} < 7$ (môi trường acid, càng nhỏ acid càng mạnh), $\\text{pH} = 7$ (trung tính: nước cất), $\\text{pH} > 7$ (môi trường base/kiềm). Nhấn mạnh chỉ thị: Quỳ tím gặp acid hóa ĐỎ; Phenolphthalein gặp acid KHÔNG đổi màu.",
        pitfalls: "Học sinh hay nhầm rằng $\\text{pH}$ càng lớn thì acid càng mạnh (thực tế $\\text{pH}$ càng NHỎ về phía 0 thì tính acid càng mạnh!)."
      },
      {
        name: "Buổi 2: Tính chất hóa học của Acid loãng ($\\ce{HCl}, \\ce{H2SO4}$ loãng)",
        guide: "Luyện viết PTHH: (1) Acid + Kim loại (trừ Cu, Ag, Au...) $\\to$ Muối + $\\ce{H2}\\uparrow$; (2) Acid + Base $\\to$ Muối + $\\ce{H2O}$; (3) Acid + Oxide base $\\to$ Muối + $\\ce{H2O}$. Lưu ý đặc biệt: $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$ (tạo muối sắt(II)!).",
        pitfalls: "Cho đồng (Cu) tác dụng với HCl loãng (sai: Cu đứng sau H không đẩy được $\\ce{H2}$!) hoặc viết $\\ce{Fe + HCl -> FeCl3}$ (sai hóa trị!)."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Bài toán HSG hỗn hợp Kim loại + Acid",
        guide: "Chú ý 5 câu HSG: hỗn hợp Cu + Fe/Zn tác dụng với $\\ce{HCl}$ dư (Cu không tan là chất rắn còn lại!), và giải thích hiện tượng mưa acid / đất chua.",
        pitfalls: "Quên rằng khi cho hỗn hợp Cu và Fe vào HCl dư thì phần rắn không tan chính là Cu."
      }
    ]
  },
  lecture: [
    {
      title: "Khái niệm Acid, Chỉ thị màu & Thang pH (0 → 14)",
      content: `
        <p><strong>Acid</strong> là những hợp chất trong phân tử có nguyên tử hydrogen liên kết với gốc acid; khi tan trong nước tạo ra ion $\\ce{H+}$ (chính ion $\\ce{H+}$ gây ra tính acid).</p>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 520 85" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <defs>
              <linearGradient id="phGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#dc2626"/>
                <stop offset="25%" stop-color="#f97316"/>
                <stop offset="50%" stop-color="#22c55e"/>
                <stop offset="75%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#7e22ce"/>
              </linearGradient>
            </defs>
            <rect x="30" y="22" width="460" height="24" rx="6" fill="url(#phGrad)"/>
            <text x="35" y="64" font-size="11" font-weight="bold" fill="#dc2626">pH = 0 (Acid mạnh)</text>
            <text x="260" y="64" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">pH = 7 (Trung tính)</text>
            <text x="485" y="64" font-size="11" font-weight="bold" text-anchor="end" fill="#7e22ce">pH = 14 (Base mạnh)</text>
            <line x1="260" y1="16" x2="260" y2="50" stroke="#0f172a" stroke-width="2"/>
          </svg>
        </div>
        <ul>
          <li><strong>Quỳ tím:</strong> Chuyển sang màu <strong>ĐỎ</strong> trong dung dịch acid.</li>
          <li><strong>Phenolphthalein:</strong> <strong>Không đổi màu</strong> (vẫn không màu) trong dung dịch acid.</li>
        </ul>
      `,
      checkpoint: {
        question: "Cho 3 dung dịch có giá trị pH lần lượt là: X ($\\text{pH} = 2$), Y ($\\text{pH} = 7$), Z ($\\text{pH} = 11$). Dung dịch nào làm quỳ tím hóa ĐỎ?",
        options: ["Chỉ dung dịch X", "Chỉ dung dịch Z", "X và Y", "Y và Z"],
        answer: 0,
        explanation: "Dung dịch có $\\text{pH} < 7$ là môi trường acid, làm quỳ tím chuyển màu đỏ."
      }
    },
    {
      title: "Tính chất Hóa học chung của Acid loãng ($\\ce{HCl}, \\ce{H2SO4}$ loãng)",
      content: `
        <ol>
          <li><strong>Làm đổi màu chất chỉ thị:</strong> Quỳ tím hóa đỏ.</li>
          <li><strong>Tác dụng với Kim loại (đứng trước H: K, Na, Mg, Al, Zn, Fe...):</strong> Tạo thành muối và giải phóng khí $\\ce{H2}$.<br/>
          $\\ce{Zn + 2HCl -> ZnCl2 + H2 ^}$ &nbsp;|&nbsp; $\\ce{Fe + H2SO4 -> FeSO4 + H2 ^}$<br/>
          <em>Lưu ý:</em> Kim loại $\\text{Cu, Ag, Au, Pt}$ <strong>không phản ứng</strong> với $\\ce{HCl}$ hay $\\ce{H2SO4}$ loãng!</li>
          <li><strong>Tác dụng với Base &amp; Oxide base:</strong> Tạo thành muối và nước (sẽ học kỹ ở Tuần 32–33).</li>
        </ol>
      `,
      example: "Cho $12\\text{ g}$ hỗn hợp bột $\\text{Fe}$ và $\\text{Cu}$ tác dụng với dung dịch $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng Cu.<br/><em>Giải:</em> Chỉ có Fe phản ứng: $\\ce{Fe + 2HCl -> FeCl2 + H2 ^} \\Rightarrow n_{\\text{Fe}} = n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow m_{\\text{Fe}} = 5,6\\text{ g}$. Vậy $m_{\\text{Cu}} = 12 - 5,6 = 6,4\\text{ g}$."
    }
  ],
  questions: [
    { id: "w31_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Dung dịch acid làm giấy quỳ tím chuyển sang màu gì?",
      options: ["A. Màu xanh", "B. Màu đỏ", "C. Màu vàng", "D. Không đổi màu"],
      answer: 1, solution: "Acid làm quỳ tím hóa đỏ." },
    { id: "w31_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Tên gọi của acid có công thức $\\ce{HCl}$ là:",
      options: ["A. Sulfuric acid", "B. Nitric acid", "C. Hydrochloric acid", "D. Acetic acid"],
      answer: 2, solution: "$\\ce{HCl}$ là Hydrochloric acid." },
    { id: "w31_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Môi trường trung tính (như nước cất ở $25^\\circ\\text{C}$) có giá trị pH bằng:",
      options: ["A. 0", "B. 5", "C. 7", "D. 14"],
      answer: 2, solution: "$\\text{pH} = 7$ là môi trường trung tính." },
    { id: "w31_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Kim loại nào sau đây KHÔNG tác dụng với dung dịch $\\ce{HCl}$?",
      options: ["A. Magnesium (Mg)", "B. Zinc (Zn)", "C. Iron (Fe)", "D. Copper (Cu)"],
      answer: 3, solution: "Cu đứng sau H nên không đẩy được $\\ce{H2}$ ra khỏi acid $\\ce{HCl}$." },
    { id: "w31_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Sản phẩm thu được khi cho kim loại Iron ($\\ce{Fe}$) tác dụng với dung dịch $\\ce{H2SO4}$ loãng là:",
      options: ["A. $\\ce{Fe2(SO4)3}$ và $\\ce{H2}$", "B. $\\ce{FeSO4}$ và $\\ce{H2}$", "C. $\\ce{FeSO4}$ và $\\ce{H2O}$", "D. $\\ce{FeS}$ và $\\ce{H2O}$"],
      answer: 1, solution: "Fe tác dụng acid loãng tạo muối sắt(II) $\\ce{FeSO4}$ và khí $\\ce{H2}$." },
    { id: "w31_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Acid nào có trong dịch vị dạ dày giúp tiêu hóa thức ăn và diệt khuẩn?",
      options: ["A. $\\ce{H2SO4}$", "B. $\\ce{HNO3}$", "C. $\\ce{HCl}$", "D. $\\ce{H3PO4}$"],
      answer: 2, solution: "Dịch vị dạ dày chứa $\\ce{HCl}$ loãng ($\\text{pH} \\approx 1,5 - 2,5$)." },
    { id: "w31_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong giấm ăn có chứa acid hữu cơ nào sau đây?",
      options: ["A. Citric acid", "B. Acetic acid ($\\ce{CH3COOH}$)", "C. Sulfuric acid", "D. Phosphoric acid"],
      answer: 1, solution: "Giấm ăn là dung dịch Acetic acid $2-5\\%$." },
    { id: "w31_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai về Acid và pH:",
      statements: [
        { text: "Dung dịch có $\\text{pH} = 1$ có tính acid mạnh hơn dung dịch có $\\text{pH} = 5$.", answer: true },
        { text: "Acid làm dung dịch phenolphthalein chuyển sang màu hồng.", answer: false },
        { text: "Khi $\\text{Al}$ tác dụng với $\\ce{HCl}$, sản phẩm thu được là $\\ce{AlCl3}$ và khí $\\ce{H2}$.", answer: true },
        { text: "Nước chanh tươi có $\\text{pH} < 7$.", answer: true }
      ],
      solution: "b) Sai: phenolphthalein không đổi màu trong môi trường acid." },
    { id: "w31_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $2,4\\text{ g}$ Magnesium ($\\text{Mg}=24$) tác dụng hết với dung dịch $\\ce{H2SO4}$ loãng dư. Khối lượng muối $\\ce{MgSO4}$ ($M=120$) thu được là bao nhiêu gam?",
      answer: "12", tolerance: 0.1,
      solution: "$n_{\\text{Mg}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{MgSO4}} = 0,1 \\times 120 = 12\\text{ g}$." },
    { id: "w31_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $5,4\\text{ g}$ $\\text{Al}$ ($27$) trong dung dịch $\\ce{HCl}$ dư. Thể tích khí $\\ce{H2}$ (Lít, đkc) thu được là bao nhiêu?",
      answer: "7.437", tolerance: 0.02,
      solution: "$n_{\\text{Al}} = 0,2\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow V = 0,3 \\times 24,79 = 7,437\\text{ L}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w31_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho cùng số mol các kim loại $\\text{Na, Mg, Al, Fe}$ tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư. Kim loại nào sinh ra nhiều khí $\\ce{H2}$ NHẤT?",
      options: ["A. Na", "B. Mg", "C. Al", "D. Fe"],
      answer: 2, solution: "$1\\text{ mol}$ mỗi kim loại: Na sinh $0,5\\text{ mol}$; Mg, Fe sinh $1,0\\text{ mol}$; Al (hóa trị III) sinh $1,5\\text{ mol}$ $\\ce{H2}$." },
    { id: "w31_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho $10\\text{ g}$ hỗn hợp bột gồm $\\text{Fe}$ và $\\text{Cu}$ vào dung dịch $\\ce{H2SO4}$ loãng dư. Sau phản ứng thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc) và $m$ gam chất rắn không tan. Giá trị của $m$ là:",
      options: ["A. $5,6\\text{ g}$", "B. $4,4\\text{ g}$", "C. $6,4\\text{ g}$", "D. $3,6\\text{ g}$"],
      answer: 1, solution: "$n_{\\text{Fe}} = n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow m_{\\text{Fe}} = 5,6\\text{ g} \\Rightarrow m_{\\text{Cu}} = 10 - 5,6 = 4,4\\text{ g}$." },
    { id: "w31_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Hiện tượng mưa acid xảy ra khi khí thải công nghiệp ($\\ce{SO2}$, $\\ce{NO_x}$) hòa tan vào nước mưa tạo thành $\\ce{H2SO4}$ và $\\ce{HNO3}$ loãng:",
      statements: [
        { text: "Nước mưa acid có giá trị $\\text{pH} < 5,6$.", answer: true },
        { text: "Mưa acid ăn mòn các công trình bằng đá vôi ($\\ce{CaCO3}$) và sắt thép.", answer: true },
        { text: "Đất bị nhiễm mưa acid có thể được cải tạo bằng cách bón vôi bột ($\\ce{CaO}$ hoặc $\\ce{Ca(OH)2}$).", answer: true },
        { text: "Nước mưa acid làm quỳ tím hóa xanh.", answer: false }
      ],
      solution: "d) Sai: mưa acid có môi trường acid làm quỳ tím hóa đỏ." },
    { id: "w31_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $14,6\\text{ g}$ hỗn hợp Mg ($24$) và Zn ($65$) cần vừa đủ $500\\text{ mL}$ dung dịch $\\ce{HCl}$ $1,2\\text{ M}$. Cô cạn dung dịch sau phản ứng thu được bao nhiêu gam muối khan?",
      answer: "35.9", tolerance: 0.1,
      solution: "$n_{\\ce{HCl}} = 0,6\\text{ mol} \\Rightarrow n_{\\ce{H2}} = 0,3\\text{ mol}$ ($0,6\\text{ g}$). Bảo toàn khối lượng: $m_{\\text{muối}} = 14,6 + 0,6 \\times 36,5 - 0,6 = 14,6 + 21,9 - 0,6 = 35,9\\text{ g}$." },
    { id: "w31_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $m$ gam kim loại $\\text{Mg}$ tác dụng hết với $200\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$ (vừa đủ). Tính giá trị $m$ (gam).",
      answer: "4.8", tolerance: 0.05,
      solution: "$n_{\\ce{HCl}} = 0,4\\text{ mol} \\Rightarrow n_{\\text{Mg}} = 0,2\\text{ mol} \\Rightarrow m = 0,2 \\times 24 = 4,8\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w31_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi cho $1\\text{ g}$ bột $\\text{Fe}$ tác dụng với dung dịch $\\ce{HCl}$ dư và $1\\text{ g}$ bột $\\text{Mg}$ tác dụng với dung dịch $\\ce{HCl}$ dư, thể tích khí $\\ce{H2}$ thu được từ kim loại nào lớn hơn? Giải thích bằng tính toán (hoặc so sánh $M$).",
      solution: "Cùng khối lượng $1\\text{ g}$, cả Fe và Mg đều phản ứng với HCl tạo muối hóa trị II ($n_{\\ce{H2}} = n_{\\text{kim loại}}$). Vì $M_{\\text{Mg}} = 24 < M_{\\text{Fe}} = 56$ nên $n_{\\text{Mg}} = 1/24 > n_{\\text{Fe}} = 1/56$. Do đó, <strong>Mg sinh ra nhiều khí $\\ce{H2}$ hơn</strong> ($1/24 \\approx 0,0417\\text{ mol}$ so với $1/56 \\approx 0,0179\\text{ mol}$).",
      rubric: [
        { step: "Viết đúng 2 PTHH và chỉ ra $n_{\\ce{H2}} = n_{\\text{kim loại}}$", points: 0.5 },
        { step: "So sánh $1/24 > 1/56$ kết luận Mg sinh nhiều $\\ce{H2}$ hơn", points: 0.5 }
      ] },
    { id: "w31_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Khi đổ giấm ăn ($\\ce{CH3COOH}$) lên mặt bàn đá hoa cương có thành phần chính là Calcium carbonate ($\\ce{CaCO3}$), người ta thấy bề mặt đá bị sủi bọt khí và ăn mòn. Viết PTHH của phản ứng xảy ra và giải thích hiện tượng.",
      solution: "Giấm ăn chứa Acetic acid ($\\ce{CH3COOH}$), tác dụng với muối $\\ce{CaCO3}$ trong đá tạo thành muối tan và khí $\\ce{CO2}$ sủi bọt thoát ra: $\\ce{2CH3COOH + CaCO3 -> (CH3COO)2Ca + CO2 ^ + H2O}$. Quá trình này làm đá bị hòa tan (ăn mòn).",
      rubric: [
        { step: "Viết đúng PTHH $\\ce{2CH3COOH + CaCO3 -> (CH3COO)2Ca + CO2 ^ + H2O}$", points: 0.5 },
        { step: "Giải thích sủi bọt khí $\\ce{CO2}$ và tạo muối tan làm mòn đá", points: 0.5 }
      ] },
    { id: "w31_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $13,2\\text{ g}$ hỗn hợp X gồm $\\text{Mg}$ và $\\text{Al}$ trong dung dịch $\\ce{HCl}$ dư thu được $14,874\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính khối lượng mỗi kim loại trong X.",
      solution: "$n_{\\ce{H2}} = 14,874 / 24,79 = 0,6\\text{ mol}$. Đặt $n_{\\text{Mg}} = x, n_{\\text{Al}} = y$. Hệ: $24x + 27y = 13,2$ và $x + 1,5y = 0,6$. Nhân pt (2) với 24: $24x + 36y = 14,4$. Trừ 2 pt: $9y = 1,2$? Khoan: $1,2 / 9 = 2/15$! Kiểm tra: nếu $x=0,3$ ($7,2\\text{ g}$ Mg), $y=0,2$ ($5,4\\text{ g}$ Al) thì $m = 12,6\\text{ g}$ và $n_{\\ce{H2}} = 0,6\\text{ mol}$. Giải theo số liệu $13,2\\text{ g}$: $y = 2/15\\text{ mol}$ ($3,6\\text{ g}$ Al) và $x = 0,4\\text{ mol}$ ($9,6\\text{ g}$ Mg)! Kiểm tra lại: $9,6 + 3,6 = 13,2\\text{ g}$! Số mol $\\ce{H2} = 0,4 + 1,5(2/15) = 0,4 + 0,2 = 0,6\\text{ mol}$ — CHÍNH XÁC TUYỆT ĐỐI ($m_{\\text{Mg}} = 9,6\\text{ g}$, $m_{\\text{Al}} = 3,6\\text{ g}$)!",
      rubric: [
        { step: "Viết đúng 2 PTHH và tính $n_{\\ce{H2}} = 0,6\\text{ mol}$", points: 0.25 },
        { step: "Lập hệ và giải đúng $m_{\\text{Mg}} = 9,6\\text{ g}$, $m_{\\text{Al}} = 3,6\\text{ g}$", points: 0.75 }
      ] },
    { id: "w31_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Một học sinh bị chứng dư acid dạ dày ($\\ce{HCl}$). Bác sĩ khuyên uống thuốc 'muối nabica' có thành phần là $\\ce{NaHCO3}$ (hoặc $\\ce{Mg(OH)2}$). Viết PTHH xảy ra trong dạ dày và giải thích vì sao dùng $\\ce{NaHCO3}$ lại gây ợ hơi nhẹ.",
      solution: "Thuốc trung hòa bớt $\\ce{HCl}$ dư: $\\ce{NaHCO3 + HCl -> NaCl + CO2 ^ + H2O}$. Phản ứng giải phóng khí $\\ce{CO2}$ trong dạ dày nên gây cảm giác ợ hơi nhẹ (còn $\\ce{Mg(OH)2 + 2HCl -> MgCl2 + 2H2O}$ không sinh khí).",
      rubric: [
        { step: "Viết đúng PTHH $\\ce{NaHCO3 + HCl -> NaCl + CO2 ^ + H2O}$", points: 0.5 },
        { step: "Giải thích khí $\\ce{CO2}$ thoát ra gây ợ hơi", points: 0.5 }
      ] },
    { id: "w31_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Có 3 lọ mất nhãn đựng riêng biệt 3 dung dịch: $\\ce{HCl}$, $\\ce{H2SO4}$ loãng và $\\ce{NaCl}$. Chỉ dùng thêm 1 thuốc thử là quỳ tím và dung dịch $\\ce{BaCl2}$, hãy trình bày cách nhận biết cả 3 lọ trên (viết PTHH minh họa).",
      solution: "B1: Nhúng quỳ tím vào 3 mẫu thử: mẫu không làm đổi màu quỳ tím là $\\ce{NaCl}$; 2 mẫu làm quỳ tím hóa đỏ là $\\ce{HCl}$ và $\\ce{H2SO4}$. B2: Nhỏ dung dịch $\\ce{BaCl2}$ vào 2 mẫu acid: mẫu xuất hiện kết tủa trắng không tan là $\\ce{H2SO4}$ ($\\ce{H2SO4 + BaCl2 -> BaSO4 v + 2HCl}$); mẫu không có hiện tượng là $\\ce{HCl}$.",
      rubric: [
        { step: "Dùng quỳ tím nhận biết được $\\ce{NaCl}$ (không đổi màu)", points: 0.25 },
        { step: "Dùng $\\ce{BaCl2}$ phân biệt $\\ce{H2SO4}$ (kết tủa trắng $\\ce{BaSO4}$) và $\\ce{HCl}$", points: 0.5 },
        { step: "Viết đúng PTHH $\\ce{H2SO4 + BaCl2 -> BaSO4 v + 2HCl}$", points: 0.25 }
      ] }
  ]
};
