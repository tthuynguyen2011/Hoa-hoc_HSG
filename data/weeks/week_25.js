window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[25] = {
  week: 25,
  title: "Hiệu suất phản ứng (H%) & Bài toán chuỗi phản ứng",
  objectives: [
    "Hiểu ý nghĩa của Hiệu suất phản ứng ($H\\%$): Trong thực tế, lượng sản phẩm thu được thường nhỏ hơn lượng tính theo lý thuyết ($H < 100\\%$).",
    "Vận dụng thành thạo quy tắc 'Phải Nhân – Trái Chia' khi tính toán bài toán có hiệu suất.",
    "Giải được bài toán chuỗi phản ứng nhiều giai đoạn có hiệu suất từng bước (mức HSG 8–9)."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (mỗi buổi 60–75 phút)",
    preparation: "In Phiếu bài tập Tuần 25 (A4). Chuẩn bị sơ đồ quy tắc 'Tính xuôi (sản phẩm) NHÂN H% – Tính ngược (chất đầu) CHIA H%'.",
    sessions: [
      {
        name: "Buổi 1: Công thức Hiệu suất & Quy tắc 'Phải Nhân – Trái Chia'",
        guide: "Dạy mẹo nhớ không bao giờ nhầm: $H\\% = \\frac{m_{\\text{thực tế}}}{m_{\\text{lý thuyết}}} \\times 100\\%$ (với sản phẩm) hoặc $= \\frac{m_{\\text{phản ứng}}}{m_{\\text{ban đầu}}} \\times 100\\%$ (với chất tham gia). Khi tính chất bên PHẢI (sản phẩm) $\\rightarrow$ NHÂN $\\frac{H}{100}$; khi tính chất bên TRÁI (nguyên liệu cần dùng) $\\rightarrow$ CHIA $\\frac{H}{100}$ (vì phải lấy dư lên mới bù hao hụt!).",
        pitfalls: "Học sinh rất hay nhân/chia ngược hiệu suất ở bài toán tìm khối lượng nguyên liệu cần dùng!"
      },
      {
        name: "Buổi 2: Bài toán Hiệu suất với tạp chất & Chuỗi phản ứng",
        guide: "Nếu quặng chỉ chứa $80\\%$ $\\ce{CaCO3}$ và $H = 75\\%$ thì nhân cả $0,8$ và $0,75$. Với chuỗi 2–3 phản ứng có hiệu suất $H_1, H_2$: hiệu suất toàn bộ $H_{\\text{toàn}} = H_1 \\times H_2$.",
        pitfalls: "Cộng $H_1 + H_2$ thay vì nhân $H_1 \\times H_2$."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập & Chấm theo ba rem HSG",
        guide: "Luyện 5 câu HSG: sản xuất $\\ce{H2SO4}$ từ quặng pyrite $\\ce{FeS2}$, nung đá vôi và tổng hợp $\\ce{NH3}$ có hiệu suất.",
        pitfalls: "Quên bảo toàn nguyên tố qua nhiều giai đoạn (ví dụ $\\ce{FeS2 -> 2SO2 -> 2SO3 -> 2H2SO4}$)."
      }
    ]
  },
  lecture: [
    {
      title: "Hiệu suất Phản ứng ($H\\%$) & Quy tắc 'Phải Nhân – Trái Chia'",
      content: `
        <div class="callout">
          <strong>Công thức tính Hiệu suất:</strong><br/>
          • Theo sản phẩm: $H\\% = \\frac{n_{\\text{thực tế}}}{n_{\\text{lý thuyết}}} \\times 100\\% = \\frac{m_{\\text{thực tế}}}{m_{\\text{lý thuyết}}} \\times 100\\%$.<br/>
          • Theo chất tham gia: $H\\% = \\frac{n_{\\text{đã phản ứng}}}{n_{\\text{ban đầu}}} \\times 100\\%$.
        </div>
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 480 95" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="25" y="25" width="145" height="44" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="97" y="45" font-size="11" font-weight="bold" text-anchor="middle" fill="#1e40af">Chất tham gia (TRÁI)</text><text x="97" y="60" font-size="10" text-anchor="middle" fill="#1e3a8a">Muốn tìm → CHIA H%</text>
            <text x="240" y="52" font-size="20" font-weight="bold" text-anchor="middle" fill="#15803d">──(H%)──▶</text>
            <rect x="310" y="25" width="145" height="44" rx="8" fill="#dcfce7" stroke="#16a34a"/><text x="382" y="45" font-size="11" font-weight="bold" text-anchor="middle" fill="#15803d">Sản phẩm (PHẢI)</text><text x="382" y="60" font-size="10" text-anchor="middle" fill="#166534">Muốn tìm → NHÂN H%</text>
          </svg>
        </div>
      `,
      example: "Nung $100\\text{ g}$ $\\ce{CaCO3}$ ($M=100$) với hiệu suất $80\\%$. Tính khối lượng $\\ce{CaO}$ ($M=56$) thu được.<br/><em>Giải:</em> Theo lý thuyết: $n_{\\ce{CaO}} = n_{\\ce{CaCO3}} = 1\\text{ mol} \\Rightarrow m_{\\text{LT}} = 56\\text{ g}$. Vì tính sản phẩm (bên phải) nên NHÂN $H\\%$: $m_{\\text{TT}} = 56 \\times 80\\% = 44,8\\text{ g}$.",
      checkpoint: {
        question: "Theo lý thuyết cần $10\\text{ g}$ chất A để điều chế đủ lượng chất B mong muốn. Nếu hiệu suất phản ứng chỉ đạt $80\\%$, khối lượng chất A thực tế cần lấy là:",
        options: ["8 g", "10 g", "12,5 g", "18 g"],
        answer: 2,
        explanation: "Tính chất tham gia (bên trái) $\\Rightarrow$ CHIA $H\\%$: $m_{\\text{cần lấy}} = 10 / 0,8 = 12,5\\text{ g}$."
      }
    }
  ],
  questions: [
    { id: "w25_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong thực tế, hiệu suất ($H\\%$) của một phản ứng hóa học luôn có giá trị:",
      options: ["A. $H > 100\\%$", "B. $0 < H \\le 100\\%$", "C. $H = 0$", "D. $H > 200\\%$"],
      answer: 1, solution: "Lượng thực tế thu được không bao giờ vượt quá lý thuyết nên $H \\le 100\\%$." },
    { id: "w25_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Nung $50\\text{ g}$ $\\ce{CaCO3}$ ($M=100$), theo lý thuyết thu được $28\\text{ g}$ $\\ce{CaO}$. Thực tế chỉ thu được $21\\text{ g}$ $\\ce{CaO}$. Hiệu suất phản ứng là:",
      options: ["A. $60\\%$", "B. $75\\%$", "C. $80\\%$", "D. $85\\%$"],
      answer: 1, solution: "$H = (21 / 28) \\times 100\\% = 75\\%$." },
    { id: "w25_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Đốt cháy $12\\text{ g}$ Carbon trong $\\ce{O2}$ dư với hiệu suất $90\\%$. Số mol khí $\\ce{CO2}$ thu được thực tế là:",
      options: ["A. $1,0\\text{ mol}$", "B. $0,9\\text{ mol}$", "C. $0,8\\text{ mol}$", "D. $1,11\\text{ mol}$"],
      answer: 1, solution: "$n_{\\text{LT}} = 1\\text{ mol} \\Rightarrow n_{\\text{TT}} = 1 \\times 90\\% = 0,9\\text{ mol}$." },
    { id: "w25_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Nhiệt phân $0,2\\text{ mol}$ $\\ce{KClO3}$ ($\\ce{2KClO3 ->[t^\\circ] 2KCl + 3O2 ^}$) với hiệu suất $80\\%$. Số mol khí $\\ce{O2}$ thu được là:",
      options: ["A. $0,3\\text{ mol}$", "B. $0,24\\text{ mol}$", "C. $0,16\\text{ mol}$", "D. $0,375\\text{ mol}$"],
      answer: 1, solution: "$n_{\\text{LT}} = 0,3\\text{ mol} \\Rightarrow n_{\\text{TT}} = 0,3 \\times 0,8 = 0,24\\text{ mol}$." },
    { id: "w25_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho $0,5\\text{ mol}$ $\\ce{N2}$ tác dụng với lượng dư $\\ce{H2}$ ($\\ce{N2 + 3H2 <=> 2NH3}$) với hiệu suất $40\\%$. Số mol $\\ce{NH3}$ thu được là:",
      options: ["A. $1,0\\text{ mol}$", "B. $0,4\\text{ mol}$", "C. $0,2\\text{ mol}$", "D. $0,8\\text{ mol}$"],
      answer: 1, solution: "$n_{\\ce{NH3}\\text{ LT}} = 1,0\\text{ mol} \\Rightarrow n_{\\text{TT}} = 1,0 \\times 40\\% = 0,4\\text{ mol}$." },
    { id: "w25_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Để thu được $22,4\\text{ g}$ $\\ce{CaO}$ ($M=56$) với hiệu suất $80\\%$, cần nung bao nhiêu gam $\\ce{CaCO3}$ ($M=100$)?",
      options: ["A. $40\\text{ g}$", "B. $50\\text{ g}$", "C. $32\\text{ g}$", "D. $62,5\\text{ g}$"],
      answer: 1, solution: "$n_{\\ce{CaO}} = 0,4\\text{ mol} \\Rightarrow m_{\\ce{CaCO3}\\text{ LT}} = 40\\text{ g} \\Rightarrow m_{\\text{cần lấy}} = 40 / 0,8 = 50\\text{ g}$." },
    { id: "w25_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Trong một phản ứng có hiệu suất $70\\%$, nếu lượng chất A ban đầu là $1\\text{ mol}$ thì lượng chất A đã tham gia phản ứng là:",
      options: ["A. $0,3\\text{ mol}$", "B. $0,7\\text{ mol}$", "C. $1,0\\text{ mol}$", "D. $1,43\\text{ mol}$"],
      answer: 1, solution: "Lượng phản ứng $= 1 \\times 70\\% = 0,7\\text{ mol}$ (còn dư $0,3\\text{ mol}$)." },
    { id: "w25_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Nung $100\\text{ g}$ $\\ce{CaCO3}$ thu được $44,8\\text{ g}$ $\\ce{CaO}$ (còn lại là $\\ce{CaCO3}$ chưa phân hủy):",
      statements: [
        { text: "Số mol $\\ce{CaO}$ thu được là $0,8\\text{ mol}$.", answer: true },
        { text: "Hiệu suất phản ứng là $80\\%$.", answer: true },
        { text: "Khối lượng $\\ce{CaCO3}$ còn dư chưa bị phân hủy là $20\\text{ g}$.", answer: true },
        { text: "Thể tích khí $\\ce{CO2}$ thoát ra ở đkc là $24,79\\text{ L}$.", answer: false }
      ],
      solution: "d) Sai: $n_{\\ce{CO2}} = n_{\\ce{CaO}} = 0,8\\text{ mol} \\Rightarrow V = 0,8 \\times 24,79 = 19,832\\text{ L}$." },
    { id: "w25_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Đốt cháy $3,2\\text{ g}$ Sulfur ($\\text{S}=32$) trong $\\ce{O2}$ dư thu được $2,2311\\text{ L}$ khí $\\ce{SO2}$ (đkc). Tính hiệu suất phản ứng (%).",
      answer: "90", tolerance: 0.5,
      solution: "$n_{\\text{S}} = 0,1\\text{ mol}$; $n_{\\ce{SO2}\\text{ TT}} = 2,2311 / 24,79 = 0,09\\text{ mol} \\Rightarrow H = 90\\%$." },
    { id: "w25_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Từ $1\\text{ tấn}$ ($1000\\text{ kg}$) quặng chứa $80\\%$ $\\ce{Fe2O3}$ đem khử hoàn toàn bằng $\\ce{CO}$ với hiệu suất $75\\%$. Tính khối lượng gang (chứa $100\\%$ sắt) thu được (kg).",
      answer: "420", tolerance: 0.5,
      solution: "$m_{\\ce{Fe2O3}} = 800\\text{ kg} \\Rightarrow m_{\\text{Fe LT}} = 800 \\times 0,7 = 560\\text{ kg} \\Rightarrow m_{\\text{Fe TT}} = 560 \\times 0,75 = 420\\text{ kg}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w25_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Hỗn hợp gồm $0,4\\text{ mol}$ $\\ce{N2}$ và $0,9\\text{ mol}$ $\\ce{H2}$ thực hiện phản ứng tổng hợp $\\ce{NH3}$ ($\\ce{N2 + 3H2 <=> 2NH3}$). Sau phản ứng thu được $0,3\\text{ mol}$ $\\ce{NH3}$. Hiệu suất phản ứng (tính theo chất hết trước) là:",
      options: ["A. $37,5\\%$", "B. $50\\%$", "C. $60\\%$", "D. $75\\%$"],
      answer: 1, solution: "So sánh $\\frac{0,4}{1} > \\frac{0,9}{3} = 0,3 \\Rightarrow$ Tính H theo $\\ce{H2}$: $n_{\\ce{NH3}\\text{ LT}} = 0,6\\text{ mol} \\Rightarrow H = (0,3 / 0,6) \\times 100\\% = 50\\%$." },
    { id: "w25_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Thực hiện chuỗi phản ứng $\\ce{C ->[H_1=80\\%] CO2 ->[H_2=75\\%] CaCO3}$. Hiệu suất chung của cả quá trình là:",
      options: ["A. $60\\%$", "B. $77,5\\%$", "C. $55\\%$", "D. $155\\%$"],
      answer: 0, solution: "$H_{\\text{chung}} = 80\\% \\times 75\\% = 60\\%$." },
    { id: "w25_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Nung $150\\text{ g}$ đá vôi (chứa $80\\%$ $\\ce{CaCO3}$, còn lại tạp chất trơ) thu được $110,4\\text{ g}$ chất rắn sau phản ứng:",
      statements: [
        { text: "Khối lượng $\\ce{CaCO3}$ ban đầu là $120\\text{ g}$ ($1,2\\text{ mol}$).", answer: true },
        { text: "Khối lượng khí $\\ce{CO2}$ thoát ra là $39,6\\text{ g}$ ($0,9\\text{ mol}$).", answer: true },
        { text: "Hiệu suất phản ứng nung vôi là $75\\%$.", answer: true },
        { text: "Trong $110,4\\text{ g}$ chất rắn sau phản ứng chỉ có $\\ce{CaO}$ và tạp chất.", answer: false }
      ],
      solution: "d) Sai: hiệu suất $75\\%$ nên còn $25\\%$ $\\ce{CaCO3}$ ($30\\text{ g}$) chưa phân hủy nằm trong chất rắn." },
    { id: "w25_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Từ $120\\text{ kg}$ quặng pyrite sắt chứa $80\\%$ $\\ce{FeS2}$ ($M=120$) sản xuất được bao nhiêu kg dung dịch $\\ce{H2SO4}$ $98\\%$ (biết hiệu suất toàn quá trình đạt $80\\%$, sơ đồ $\\ce{FeS2 -> 2H2SO4}$)?",
      answer: "128", tolerance: 0.5,
      solution: "$n_{\\ce{FeS2}} = (120 \\times 0,8)/120 = 0,8\\text{ kmol} \\Rightarrow n_{\\ce{H2SO4}\\text{ LT}} = 1,6\\text{ kmol} \\Rightarrow n_{\\text{TT}} = 1,6 \\times 0,8 = 1,28\\text{ kmol} \\Rightarrow m_{\\ce{H2SO4}} = 1,28 \\times 98 = 125,44\\text{ kg} \\Rightarrow m_{\\text{dd } 98\\%} = 125,44 / 0,98 = 128\\text{ kg}$." },
    { id: "w25_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Lên men $90\\text{ g}$ glucose ($\\ce{C6H12O6}$, $M=180$) thành ethanol ($\\ce{C2H5OH}$, $M=46$) theo PTHH $\\ce{C6H12O6 ->[men] 2C2H5OH + 2CO2 ^}$ với hiệu suất $70\\%$. Tính khối lượng ethanol (gam) thu được.",
      answer: "32.2", tolerance: 0.1,
      solution: "$n_{\\text{glu}} = 0,5\\text{ mol} \\Rightarrow n_{\\text{alc LT}} = 1,0\\text{ mol} \\Rightarrow n_{\\text{TT}} = 0,7\\text{ mol} \\Rightarrow m = 0,7 \\times 46 = 32,2\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w25_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Trong công nghiệp, sản xuất vôi sống ($\\ce{CaO}$) từ đá vôi (chứa $85\\%$ $\\ce{CaCO3}$). Để thu được $11,2\\text{ tấn}$ $\\ce{CaO}$ với hiệu suất lò nung đạt $80\\%$, cần phải khai thác bao nhiêu tấn đá vôi trên? (Làm tròn 2 chữ số thập phân)",
      quickAnswer: "29.41",
      solution: "$n_{\\ce{CaO}} = 11,2 / 56 = 0,2\\text{ Mmol}$ (hay $200\\text{ kmol}$). $m_{\\ce{CaCO3}\\text{ LT}} = 200 \\times 100 = 20\\,000\\text{ kg} = 20\\text{ tấn}$. Do hiệu suất $80\\%$: $m_{\\ce{CaCO3}\\text{ cần}} = 20 / 0,8 = 25\\text{ tấn}$. Do đá vôi chỉ chứa $85\\%$ $\\ce{CaCO3}$: $m_{\\text{đá vôi}} = 25 / 0,85 \\approx 29,41\\text{ tấn}$.",
      rubric: [
        { step: "Tính đúng lượng $\\ce{CaCO3}$ nguyên chất lý thuyết $= 20\\text{ tấn}$", points: 0.25 },
        { step: "Chia hiệu suất $80\\%$ ra $25\\text{ tấn}$ $\\ce{CaCO3}$", points: 0.5 },
        { step: "Chia độ tinh khiết $85\\%$ ra $29,41\\text{ tấn}$ đá vôi", points: 0.25 }
      ] },
    { id: "w25_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nung nóng $49\\text{ g}$ $\\ce{KClO3}$ ($M=122,5$) có xúc tác $\\ce{MnO2}$ một thời gian thu được $39,4\\text{ g}$ chất rắn và khí $\\ce{O2}$. Tính hiệu suất của phản ứng phân hủy $\\ce{KClO3}$.",
      quickAnswer: "50",
      solution: "Theo ĐLBTKL: $m_{\\ce{O2}} = 49 - 39,4 = 9,6\\text{ g} \\Rightarrow n_{\\ce{O2}} = 9,6 / 32 = 0,3\\text{ mol}$? Khoan: $n_{\\ce{KClO3}\\text{ bđ}} = 49 / 122,5 = 0,4\\text{ mol}$. PTHH: $\\ce{2KClO3 -> 2KCl + 3O2 ^} \\Rightarrow n_{\\ce{KClO3}\\text{ đã PƯ}} = \\frac{2}{3} \\times 0,3 = 0,2\\text{ mol}$. Vậy $H = \\frac{0,2}{0,4} \\times 100\\% = 50\\%$.",
      rubric: [
        { step: "Áp dụng ĐLBTKL tính đúng $m_{\\ce{O2}} = 9,6\\text{ g}$ ($0,3\\text{ mol}$)", points: 0.5 },
        { step: "Tính đúng $n_{\\ce{KClO3}\\text{ PƯ}} = 0,2\\text{ mol}$ và $H = 50\\%$", points: 0.5 }
      ] },
    { id: "w25_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho hỗn hợp khí X gồm $1\\text{ mol}$ $\\ce{N2}$ và $4\\text{ mol}$ $\\ce{H2}$ vào bình kín có xúc tác thích hợp, nung nóng để thực hiện phản ứng tổng hợp $\\ce{NH3}$. Sau phản ứng thu được hỗn hợp khí Y có tổng số mol là $4,2\\text{ mol}$. Tính hiệu suất phản ứng tổng hợp $\\ce{NH3}$.",
      quickAnswer: "40",
      solution: "PTHH: $\\ce{N2 + 3H2 <=> 2NH3}$. Độ giảm số mol khí sau phản ứng chính bằng $2$ lần số mol $\\ce{N2}$ phản ứng ($1 + 3 - 2 = 2$). Ta có $\\Delta n = (1 + 4) - 4,2 = 0,8\\text{ mol} \\Rightarrow n_{\\ce{N2}\\text{ PƯ}} = 0,8 / 2 = 0,4\\text{ mol}$. So sánh $\\frac{1}{1} < \\frac{4}{3} \\Rightarrow$ Tính H theo $\\ce{N2}$: $H = \\frac{0,4}{1} \\times 100\\% = 40\\%$.",
      rubric: [
        { step: "Tính đúng độ giảm số mol $\\Delta n = 0,8\\text{ mol} \\Rightarrow n_{\\ce{N2}\\text{ PƯ}} = 0,4\\text{ mol}$", points: 0.5 },
        { step: "Xác định H tính theo $\\ce{N2}$ và ra đúng $H = 40\\%$", points: 0.5 }
      ] },
    { id: "w25_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $15,6\\text{ g}$ hỗn hợp Al và $\\ce{Al2O3}$ tác dụng với dung dịch $\\ce{HCl}$ dư thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). (Biết chỉ có Al sinh khí $\\ce{H2}$, còn $\\ce{Al2O3 + 6HCl -> 2AlCl3 + 3H2O}$). Tính phần trăm khối lượng Al trong hỗn hợp ban đầu.",
      quickAnswer: "34.62",
      solution: "$n_{\\ce{H2}} = 7,437 / 24,79 = 0,3\\text{ mol}$. Từ $\\ce{2Al + 6HCl -> 2AlCl3 + 3H2 ^} \\Rightarrow n_{\\text{Al}} = \\frac{2}{3} \\times 0,3 = 0,2\\text{ mol} \\Rightarrow m_{\\text{Al}} = 0,2 \\times 27 = 5,4\\text{ g}$. Vậy $\\%m_{\\text{Al}} = \\frac{5,4}{15,6} \\times 100\\% \\approx 34,62\\%$.",
      rubric: [
        { step: "Tính đúng $n_{\\text{Al}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$)", points: 0.5 },
        { step: "Tính đúng $\\%m_{\\text{Al}} \\approx 34,62\\%$", points: 0.5 }
      ] },
    { id: "w25_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Từ tinh bột $\\ce{(C6H10O5)_n}$, người ta sản xuất ethanol qua 2 giai đoạn: Thủy phân thành glucose ($H_1 = 80\\%$) rồi lên men thành ethanol ($H_2 = 75\\%$). Từ $162\\text{ kg}$ tinh bột thu được bao nhiêu kg ethanol ($\\ce{C2H5OH}$)?",
      quickAnswer: "55.2",
      solution: "Sơ đồ: $\\ce{(C6H10O5)_n -> nC6H12O6 -> 2nC2H5OH}$. Xét $1\\text{ mắt xích}$ ($M=162$): $n_{\\text{tinh bột}} = 162 / 162 = 1\\text{ kmol} \\Rightarrow n_{\\text{ethanol LT}} = 2\\text{ kmol}$. Hiệu suất chung $= 0,8 \\times 0,75 = 0,6$ ($60\\%$). Vậy $m_{\\text{ethanol}} = 2 \\times 46 \\times 0,6 = 55,2\\text{ kg}$.",
      rubric: [
        { step: "Viết đúng sơ đồ tỉ lệ $1 : 2$ và tính $H_{\\text{chung}} = 60\\%$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{ethanol}} = 55,2\\text{ kg}$", points: 0.5 }
      ] }
  ]
};
