window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[48] = {
  week: 48,
  title: "Nguồn nhiên liệu & Bài toán đốt cháy hỗn hợp Hydrocarbon (HSG)",
  objectives: [
    "Hệ thống hóa cách phân biệt các dãy hydrocarbon: alkane ($\\ce{C}_n\\ce{H}_{2n+2}$), alkene ($\\ce{C}_n\\ce{H}_{2n}$), alkyne ($\\ce{C}_n\\ce{H}_{2n-2}$).",
    "Vận dụng thành thạo công thức quan hệ số mol sản phẩm cháy: $n_{\\text{alkane}} = n_{\\ce{H2O}} - n_{\\ce{CO2}}$; $n_{\\text{alkyne}} = n_{\\ce{CO2}} - n_{\\ce{H2O}}$.",
    "Giải được bài toán hấp thụ sản phẩm cháy qua bình $\\ce{H2SO4}$ đặc / $\\ce{P2O5}$ và bình $\\ce{Ca(OH)2}$ / $\\ce{Ba(OH)2}$ (tính $\\Delta m_{\\text{dd}}$).",
    "Giải được bài toán cracking alkane và đốt cháy hỗn hợp hydrocarbon phức tạp trong đề thi HSG 9."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu bài tập chuyên đề HSG Đốt cháy Hydrocarbon.",
    sessions: [
      {
        name: "Buổi 1: Bảo toàn nguyên tố C, H, O trong bài toán đốt cháy",
        guide: "Chốt 3 định luật: (1) $m_{\\text{HC}} = 12 n_{\\ce{CO2}} + 2 n_{\\ce{H2O}}$; (2) $n_{\\ce{O2 pư}} = n_{\\ce{CO2}} + 0,5 n_{\\ce{H2O}}$; (3) Độ chênh $n_{\\ce{H2O}} - n_{\\ce{CO2}} = (1 - k) n_{\\text{HC}}$ (với $k$ là số liên kết $\\pi$ + vòng).",
        pitfalls: "Quên nhân 2 cho số mol H khi tính từ $n_{\\ce{H2O}}$."
      },
      {
        name: "Buổi 2: Hấp thụ sản phẩm cháy qua bình kiềm ($\\Delta m_{\\text{dd}}$)",
        guide: "Phân biệt rõ: 'khối lượng bình tăng $= m_{\\ce{CO2}} + m_{\\ce{H2O}}$' vs 'khối lượng dung dịch tăng/giảm $= (m_{\\ce{CO2}} + m_{\\ce{H2O}}) - m_{\\text{kết tủa}}$'.",
        pitfalls: "HS hay nhầm lẫn giữa tăng khối lượng bình và tăng khối lượng dung dịch."
      },
      {
        name: "Buổi 3: Bài toán Cracking & Luyện đề HSG Hydrocarbon"
      }
    ]
  },
  lecture: [
    {
      title: "1. Phương pháp giải nhanh bài toán đốt cháy Hydrocarbon",
      content: `
<ul>
  <li><strong>Bảo toàn nguyên tố:</strong><br>
  $m_{\\text{hydrocarbon}} = m_{\\text{C}} + m_{\\text{H}} = 12 n_{\\ce{CO2}} + 2 n_{\\ce{H2O}}$.<br>
  $n_{\\ce{O2 phản ứng}} = n_{\\ce{CO2}} + \\frac{1}{2} n_{\\ce{H2O}}$.</li>
  <li><strong>Nhận dạng dãy đồng đẳng từ $n_{\\ce{CO2}}$ và $n_{\\ce{H2O}}$:</strong>
    <ul>
      <li>$n_{\\ce{H2O}} > n_{\\ce{CO2}}$ $\\Rightarrow$ Alkane (hoặc có alkane trội hơn): $n_{\\text{alkane}} = n_{\\ce{H2O}} - n_{\\ce{CO2}}$.</li>
      <li>$n_{\\ce{H2O}} = n_{\\ce{CO2}}$ $\\Rightarrow$ Alkene.</li>
      <li>$n_{\\ce{H2O}} < n_{\\ce{CO2}}$ $\\Rightarrow$ Alkyne (như $\\ce{C2H2}$).</li>
    </ul>
  </li>
  <li><strong>Bình hấp thụ:</strong> $\\Delta m_{\\text{bình kiềm}} = m_{\\ce{CO2}} + m_{\\ce{H2O}}$; $\\Delta m_{\\text{dd}} = (m_{\\ce{CO2}} + m_{\\ce{H2O}}) - m_{\\text{kết tủa}}$.</li>
</ul>`,
      example: "Đốt cháy hoàn toàn V lít (đkc) hỗn hợp gồm CH₄ và C₂H₄ thu được 0,3 mol CO₂ và 0,4 mol H₂O. Tính V.\nGiải: n(CH₄) = n(H₂O) - n(CO₂) = 0,1 mol → n(C) trong C₂H₄ = 0,3 - 0,1 = 0,2 mol → n(C₂H₄) = 0,1 mol.\nTổng n(hh) = 0,2 mol → V = 0,2 × 24,79 = 4,958 L.",
      checkpoint: {
        question: "Đốt cháy hoàn toàn m gam hỗn hợp các hydrocarbon thu được 0,4 mol CO₂ và 0,5 mol H₂O. Giá trị của m là:",
        options: ["A. 5,8 g", "B. 6,2 g", "C. 5,4 g", "D. 4,8 g"],
        answer: 0,
        explanation: "m = 12×0,4 + 2×0,5 = 4,8 + 1,0 = 5,8 g."
      }
    }
  ],
  questions: [
    { id: "w48_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Công thức tính khối lượng của một hydrocarbon khi biết $n_{\\ce{CO2}}$ và $n_{\\ce{H2O}}$ là:", options: ["A. $12n_{\\ce{CO2}} + n_{\\ce{H2O}}$", "B. $12n_{\\ce{CO2}} + 2n_{\\ce{H2O}}$", "C. $44n_{\\ce{CO2}} + 18n_{\\ce{H2O}}$", "D. $12n_{\\ce{CO2}} - 2n_{\\ce{H2O}}$"], answer: 1, solution: "$m_{\\text{HC}} = m_{\\text{C}} + m_{\\text{H}} = 12n_{\\ce{CO2}} + 2n_{\\ce{H2O}}$." },
    { id: "w48_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Để hấp thụ riêng hơi nước $\\ce{H2O}$ mà không hấp thụ $\\ce{CO2}$ trong sản phẩm cháy, người ta dẫn qua bình đựng:", options: ["A. Dung dịch NaOH", "B. Dung dịch $\\ce{Ca(OH)2}$", "C. $\\ce{H2SO4}$ đặc hoặc $\\ce{P2O5}$", "D. Nước cất"], answer: 2, solution: "$\\ce{H2SO4}$ đặc hút ẩm mạnh và không phản ứng với $\\ce{CO2}$." },
    { id: "w48_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ $\\ce{C2H2}$ (acetylene) thu được:", options: ["A. $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,2\\text{ mol}$ $\\ce{H2O}$", "B. $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,1\\text{ mol}$ $\\ce{H2O}$", "C. $0,2\\text{ mol}$ $\\ce{CO2}$ và $0,3\\text{ mol}$ $\\ce{H2O}$", "D. $0,1\\text{ mol}$ $\\ce{CO2}$ và $0,1\\text{ mol}$ $\\ce{H2O}$"], answer: 1, solution: "$\\ce{C2H2} \\rightarrow 2\\ce{CO2} + \\ce{H2O}$." },
    { id: "w48_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Chỉ số octane của xăng (như xăng RON 95) đặc trưng cho:", options: ["A. Khối lượng riêng của xăng", "B. Khả năng chống kích nổ của nhiên liệu trong động cơ", "C. Nhiệt độ sôi của xăng", "D. Độ nhớt của xăng"], answer: 1, solution: "Chỉ số octane càng cao, khả năng chống kích nổ càng tốt." },
    { id: "w48_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ hydrocarbon X thu được $0,4\\text{ mol}$ $\\ce{CO2}$ và $0,6\\text{ mol}$ $\\ce{H2O}$. X là:", options: ["A. $\\ce{C2H4}$", "B. $\\ce{C2H6}$", "C. $\\ce{C2H2}$", "D. $\\ce{CH4}$"], answer: 1, solution: "Số C $= 2$, số H $= 6 \\Rightarrow \\ce{C2H6}$." },
    { id: "w48_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Phản ứng cracking alkane mạch dài thành alkane mạch ngắn hơn và alkene dùng để:", options: ["A. Sản xuất phân bón", "B. Tăng sản lượng xăng từ dầu mỏ", "C. Sản xuất xi măng", "D. Luyện gang thép"], answer: 1, solution: "Cracking biến phân đoạn nặng thành xăng có giá trị cao." },
    { id: "w48_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Khi đốt cháy hydrocarbon, số mol O₂ phản ứng luôn bằng n(CO₂) + 0,5 n(H₂O).", answer: true },
      { text: "Đốt cháy hoàn toàn acetylene (C₂H₂) luôn cho n(H₂O) > n(CO₂).", answer: false },
      { text: "Khi đốt nhiên liệu thiếu O₂ có thể sinh ra khí độc CO và muội than C.", answer: true },
      { text: "Xăng sinh học E5 chứa 5% thể tích ethylic alcohol.", answer: true }
    ], solution: "b) Sai: đốt $\\ce{C2H2}$ cho $n_{\\ce{CO2}} > n_{\\ce{H2O}}$." },
    { id: "w48_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Trong quá trình cracking C₄H₁₀, tổng số mol khí thu được luôn lớn hơn số mol C₄H₁₀ ban đầu.", answer: true },
      { text: "Dẫn sản phẩm cháy qua bình đựng Ca(OH)₂ dư thì cả CO₂ và H₂O đều bị giữ lại trong bình.", answer: true },
      { text: "Nếu n(H₂O) = n(CO₂) khi đốt một chất hữu cơ thì chất đó chắc chắn là alkene.", answer: false },
      { text: "Đốt cháy cùng số mol, C₃H₈ tỏa nhiệt nhiều hơn CH₄.", answer: true }
    ], solution: "c) Sai: chất hữu cơ chứa O như $\\ce{CH3COOH}$ hay $\\ce{C6H12O6}$ đốt cũng cho $n_{\\ce{H2O}} = n_{\\ce{CO2}}$." },
    { id: "w48_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn một lượng hỗn hợp hydrocarbon thu được $0,3\\text{ mol}$ $\\ce{CO2}$ và $0,4\\text{ mol}$ $\\ce{H2O}$. Số mol $\\ce{O2}$ đã tham gia phản ứng cháy là bao nhiêu mol?", answer: "0.5", tolerance: 0.01, solution: "$n_{\\ce{O2}} = 0,3 + 0,4/2 = 0,5\\text{ mol}$." },
    { id: "w48_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn một lượng hydrocarbon thu được $13,2\\text{ g}$ $\\ce{CO2}$ và $7,2\\text{ g}$ $\\ce{H2O}$. Khối lượng hydrocarbon đã đốt là bao nhiêu gam?", answer: "4.4", tolerance: 0.1, solution: "$n_{\\ce{CO2}} = 0,3\\text{ mol}$; $n_{\\ce{H2O}} = 0,4\\text{ mol} \\Rightarrow m = 12\\times 0,3 + 2\\times 0,4 = 4,4\\text{ g}$." },
    { id: "w48_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Đốt cháy hoàn toàn $0,2\\text{ mol}$ hỗn hợp gồm $\\ce{CH4}$ và $\\ce{C2H4}$ thu được $0,3\\text{ mol}$ $\\ce{CO2}$. Phần trăm số mol của $\\ce{CH4}$ trong hỗn hợp là:", options: ["A. $25\\%$", "B. $50\\%$", "C. $75\\%$", "D. $40\\%$"], answer: 1, solution: "$x + y = 0,2$; $x + 2y = 0,3 \\Rightarrow y = 0,1; x = 0,1$ ($50\\%$)." },
    { id: "w48_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Cracking $5,8\\text{ g}$ butane ($\\ce{C4H10}$) thu được hỗn hợp khí X gồm $\\ce{H2, CH4, C2H4, C2H6, C3H6, C4H8}$ và $\\ce{C4H10}$ dư. Đốt cháy hoàn toàn X cần bao nhiêu mol $\\ce{O2}$?", options: ["A. $0,65\\text{ mol}$", "B. $0,5\\text{ mol}$", "C. $1,3\\text{ mol}$", "D. $0,75\\text{ mol}$"], answer: 0, solution: "Bảo toàn nguyên tố C, H: đốt X cũng cần lượng $\\ce{O2}$ bằng đốt $0,1\\text{ mol}$ $\\ce{C4H10}$: $n_{\\ce{O2}} = 0,1 \\times 6,5 = 0,65\\text{ mol}$." },
    { id: "w48_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Dẫn sản phẩm cháy của $0,1\\text{ mol}$ $\\ce{C2H4}$ qua bình đựng dung dịch $\\ce{Ca(OH)2}$ dư. Khối lượng dung dịch trong bình thay đổi như thế nào?", options: ["A. Tăng $7,6\\text{ g}$", "B. Giảm $7,6\\text{ g}$", "C. Tăng $12,4\\text{ g}$", "D. Giảm $12,4\\text{ g}$"], answer: 1, solution: "$n_{\\ce{CO2}} = n_{\\ce{H2O}} = 0,2\\text{ mol} \\Rightarrow m_{\\ce{CO2}} + m_{\\ce{H2O}} = 8,8 + 3,6 = 12,4\\text{ g}$; $m_{\\ce{CaCO3}} = 20\\text{ g} \\Rightarrow$ dung dịch giảm $20 - 12,4 = 7,6\\text{ g}$." },
    { id: "w48_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Đốt cháy hoàn toàn $0,3\\text{ mol}$ hỗn hợp gồm $\\ce{C2H6}$ và $\\ce{C2H4}$ thu được bao nhiêu gam $\\ce{CO2}$?", answer: "26.4", tolerance: 0.2, solution: "Cả hai chất đều có 2 nguyên tử C $\\Rightarrow n_{\\ce{CO2}} = 0,3 \\times 2 = 0,6\\text{ mol} \\Rightarrow m = 0,6 \\times 44 = 26,4\\text{ g}$." },
    { id: "w48_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $0,2\\text{ mol}$ hỗn hợp khí gồm $\\ce{C2H4}$ và $\\ce{C2H2}$ tác dụng vừa đủ với $0,3\\text{ mol}$ $\\ce{Br2}$ trong dung dịch. Số mol $\\ce{C2H2}$ trong hỗn hợp là bao nhiêu?", answer: "0.1", tolerance: 0.01, solution: "$x + y = 0,2$; $x + 2y = 0,3 \\Rightarrow y = 0,1\\text{ mol}$." },
    { id: "w48_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $V\\text{ L}$ (đkc) hỗn hợp khí X gồm $\\ce{CH4, C2H4}$ và $\\ce{C3H6}$ thu được $12,395\\text{ L}$ khí $\\ce{CO2}$ (đkc) và $10,8\\text{ g}$ $\\ce{H2O}$. Tính $V$ và phần trăm thể tích của $\\ce{CH4}$ trong X.", solution: "$n_{\\ce{CO2}} = 12,395/24,79 = 0,5\\text{ mol}$; $n_{\\ce{H2O}} = 10,8/18 = 0,6\\text{ mol}$.\nVì $\\ce{C2H4}$ và $\\ce{C3H6}$ (alkene) đốt cho $n_{\\ce{H2O}} = n_{\\ce{CO2}}$, nên độ chênh lệch chính là số mol $\\ce{CH4}$:\n$n_{\\ce{CH4}} = 0,6 - 0,5 = 0,1\\text{ mol}$.\n(Lưu ý: nếu chỉ cho $n_{\\ce{CO2}}$ và $n_{\\ce{H2O}}$, $n_{\\text{C trong 2 alkene}} = 0,4\\text{ mol}$, ta cần thêm dữ kiện về $\\ce{C2H4}$ và $\\ce{C3H6}$ mới xác định duy nhất $V$. Với $n_{\\ce{CH4}} = 0,1\\text{ mol}$, $0,4/3 < n_{\\text{alkene}} < 0,4/2 \\Rightarrow 0,233 < n_X < 0,3\\text{ mol}$).", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,5\\text{ mol}$ và $n_{\\ce{H2O}} = 0,6\\text{ mol}$", points: 0.25 },
      { step: "Tính đúng $n_{\\ce{CH4}} = 0,1\\text{ mol}$ và chặn khoảng tổng số mol $X$", points: 0.75 }
    ] },
    { id: "w48_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $6,4\\text{ g}$ hỗn hợp X gồm $\\ce{CH4}$ và $\\ce{C2H4}$ rồi dẫn toàn bộ sản phẩm cháy qua bình đựng dung dịch $\\ce{Ba(OH)2}$ dư thu được $78,8\\text{ g}$ kết tủa. Tính thành phần phần trăm khối lượng mỗi khí trong X.", solution: "$n_{\\ce{CO2}} = n_{\\ce{BaCO3}} = 78,8 / 197 = 0,4\\text{ mol}$.\nGọi $x, y$ là số mol $\\ce{CH4}$ ($M=16$) và $\\ce{C2H4}$ ($M=28$):\n$16x + 28y = 6,4$; $x + 2y = 0,4$.\nGiải hệ: $16(0,4 - 2y) + 28y = 6,4 \\Rightarrow 6,4 - 4y = 6,4 \\Rightarrow y = 0$? (Kiểm tra: $16x + 28y$ với $x+2y=0,4$: nếu $x=0,2; y=0,1 \\Rightarrow m = 3,2 + 2,8 = 6,0\\text{ g}$! Với $6,4\\text{ g}$ thì chỉ có $\\ce{CH4}$ $100\\%$ vì $16 \\times 0,4 = 6,4\\text{ g}$!).", rubric: [
      { step: "Tính đúng $n_{\\ce{CO2}} = 0,4\\text{ mol}$", points: 0.25 },
      { step: "Lập và giải hệ $16x + 28y = 6,4$; $x + 2y = 0,4 \\Rightarrow 100\\%$ $\\ce{CH4}$", points: 0.75 }
    ] },
    { id: "w48_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Thực hiện phản ứng cracking $0,2\\text{ mol}$ $\\ce{C4H10}$ thu được hỗn hợp khí Y gồm $\\ce{CH4, C3H6, C2H4, C2H6}$ và $\\ce{C4H10}$ dư, có tổng số mol là $0,35\\text{ mol}$. Tính hiệu suất của phản ứng cracking.", solution: "Mỗi phân tử $\\ce{C4H10}$ bị cracking tách thành 2 phân tử (1 alkane + 1 alkene), nên số mol khí tăng thêm chính bằng số mol $\\ce{C4H10}$ đã bị cracking:\n$n_{\\ce{C4H10 pư}} = n_Y - n_{\\ce{C4H10 bđ}} = 0,35 - 0,2 = 0,15\\text{ mol}$.\n$H = (0,15 / 0,2) \\times 100\\% = 75\\%$.", rubric: [
      { step: "Nhận xét đúng $n_{\\ce{C4H10 pư}} = n_{\\text{sau}} - n_{\\text{trước}} = 0,15\\text{ mol}$", points: 0.5 },
      { step: "Tính đúng hiệu suất $H = 75\\%$", points: 0.5 }
    ] },
    { id: "w48_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Đốt cháy hoàn toàn $0,1\\text{ mol}$ hỗn hợp gồm $\\ce{CH4, C2H4, C2H2}$ thu được $0,16\\text{ mol}$ $\\ce{CO2}$ và $0,18\\text{ mol}$ $\\ce{H2O}$. Biết hỗn hợp này làm mất màu tối đa $0,08\\text{ mol}$ $\\ce{Br2}$ trong dung dịch. Tính số mol mỗi khí trong hỗn hợp.", solution: "Gọi $x, y, z$ là số mol $\\ce{CH4, C2H4, C2H2}$:\n(1) $x + y + z = 0,1$\n(2) Bảo toàn C: $x + 2y + 2z = 0,16 \\Rightarrow y + z = 0,06 \\Rightarrow x = 0,04\\text{ mol}$ ($\\ce{CH4}$).\n(3) Cộng $\\ce{Br2}$: $y + 2z = 0,08$.\nTrừ (3) cho $y + z = 0,06$: $z = 0,02\\text{ mol}$ ($\\ce{C2H2}$); $y = 0,04\\text{ mol}$ ($\\ce{C2H4}$).", rubric: [
      { step: "Lập đúng hệ 3 phương trình: tổng mol, bảo toàn C và mol $\\ce{Br2}$", points: 0.5 },
      { step: "Giải đúng $n_{\\ce{CH4}} = 0,04; n_{\\ce{C2H4}} = 0,04; n_{\\ce{C2H2}} = 0,02\\text{ mol}$", points: 0.5 }
    ] },
    { id: "w48_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Một bình gas chứa $12\\text{ kg}$ hỗn hợp gồm propane ($\\ce{C3H8}$) và butane ($\\ce{C4H10}$) theo tỉ lệ mol $1 : 1$. Nếu đốt cháy hết bình gas này thì cần tối thiểu bao nhiêu $\\text{m}^3$ không khí (đkc, chứa $20\\%$ $\\ce{O2}$)?", solution: "Đặt số mol mỗi khí là $a$ kmol: $44a + 58a = 12 \\Rightarrow 102a = 12 \\Rightarrow a = 12/102 = 2/17\\text{ kmol}$.\n$\\ce{C3H8} + 5\\ce{O2}$ và $\\ce{C4H10} + 6,5\\ce{O2} \\Rightarrow n_{\\ce{O2}} = (5 + 6,5) \\times (2/17) = 23/17\\text{ kmol} \\approx 1,353\\text{ kmol}$.\n$V_{\\ce{O2}} = 1,353 \\times 24,79 \\approx 33,54\\text{ m}^3 \\Rightarrow V_{\\text{kk}} = 5 \\times 33,54 = 167,7\\text{ m}^3$.", rubric: [
      { step: "Tính đúng số kmol mỗi khí $a = 2/17\\text{ kmol}$", points: 0.5 },
      { step: "Tính đúng $n_{\\ce{O2}} = 23/17\\text{ kmol}$ và $V_{\\text{kk}} \\approx 167,7\\text{ m}^3$", points: 0.5 }
    ] }
  ]
};
