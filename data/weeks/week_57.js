window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[57] = {
  week: 57,
  title: "CĐ 2A: Bài toán Độ tan, Tinh thể ngậm nước & Làm lạnh dung dịch",
  objectives: [
    "Vận dụng thành thạo công thức độ tan $S = \\frac{m_{\\text{ct}}}{m_{\\text{H2O}}} \\times 100$ và mối liên hệ với nồng độ phần trăm bão hòa $C\\% = \\frac{S}{100 + S} \\times 100\\%$.",
    "Giải được bài toán kết tinh muối khan và tinh thể ngậm nước (như $\\ce{CuSO4.5H2O}$, $\\ce{FeSO4.7H2O}$, $\\ce{Na2CO3.10H2O}$) khi làm lạnh dung dịch bão hòa.",
    "Giải được bài toán cho tinh thể ngậm nước tác dụng với nước hoặc dung dịch khác."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Phiếu bài tập CĐ 2A, máy tính cầm tay.",
    sessions: [
      {
        name: "Buổi 1: Độ tan & Làm lạnh dung dịch tách tinh thể KHAN",
        guide: "Chốt tư duy 2 bước: (1) Tính $m_{\\text{ct}}$ và $m_{\\text{H2O}}$ ở nhiệt độ cao; (2) Ở nhiệt độ thấp, $m_{\\text{H2O}}$ không đổi, tính lượng chất tan tối đa mà nước giữ được $\\Rightarrow$ lượng tách ra $= m_{\\text{ct bđ}} - m_{\\text{ct giữ lại}}$.",
        pitfalls: "HS hay lấy $m_{\\text{ct}}$ chia cho $m_{\\text{dd}}$ thay vì $m_{\\text{H2O}}$ khi dùng độ tan $S$."
      },
      {
        name: "Buổi 2: Làm lạnh tách TINH THỂ NGẬM NƯỚC (M.nH₂O)",
        guide: "Khi tách ra $x\\text{ mol}$ tinh thể $\\ce{CuSO4.5H2O}$, lượng nước còn lại trong dung dịch cũng BỊ GIẢM ĐI $90x\\text{ g}$! Thiết lập phương trình độ tan ở nhiệt độ thấp: $\\frac{m_{\\text{ct bđ}} - 160x}{m_{\\text{H2O bđ}} - 90x} = \\frac{S_2}{100}$.",
        pitfalls: "Quên trừ lượng nước kết tinh $18nx$ ra khỏi $m_{\\text{H2O}}$ ở nhiệt độ thấp!"
      },
      {
        name: "Buổi 3: Luyện đề HSG chuyên sâu CĐ 2A"
      }
    ]
  },
  lecture: [
    {
      title: "1. Công thức vàng giải bài toán Độ tan & Tinh thể ngậm nước",
      content: `
<ul>
  <li><strong>Liên hệ $S$ và $C\\%$ bão hòa:</strong> $C\\% = \\frac{S}{100 + S} \\times 100\\%$ và $\\frac{m_{\\text{ct}}}{m_{\\text{H2O}}} = \\frac{S}{100}$.</li>
  <li><strong>Tách tinh thể ngậm nước $\\ce{A}.n\\ce{H2O}$ ($x\\text{ mol}$):</strong><br>
  Khối lượng muối khan tách ra $= x \\cdot M_A$; Khối lượng nước bị kéo theo $= 18nx$.<br>
  Ở nhiệt độ thấp có độ tan $S_2$: <strong>$\\frac{m_{A\\text{ ban đầu}} - x \\cdot M_A}{m_{\\ce{H2O}\\text{ ban đầu}} - 18nx} = \\frac{S_2}{100}$</strong>.</li>
</ul>`,
      example: "Ở 80°C độ tan của CuSO₄ là 55 g, ở 20°C là 20 g. Làm lạnh 310 g dung dịch bão hòa CuSO₄ từ 80°C xuống 20°C thu được bao nhiêu gam tinh thể CuSO₄.5H₂O?\nGiải: Ở 80°C: 310 g dd gồm 110 g CuSO₄ và 200 g H₂O.\nGọi x là mol CuSO₄.5H₂O tách ra: (110 - 160x) / (200 - 90x) = 20 / 100 = 0,2 → 110 - 160x = 40 - 18x → 142x = 70 → x = 0,493 mol → m = 0,493 × 250 = 123,24 g.",
      checkpoint: {
        question: "Ở 20°C, độ tan của muối NaCl là 36 g. Nồng độ phần trăm của dung dịch NaCl bão hòa ở 20°C là:",
        options: ["A. 36%", "B. 26,47%", "C. 28,5%", "D. 32,1%"],
        answer: 1,
        explanation: "C% = 36 / (100 + 36) × 100% = 26,47%."
      }
    }
  ],
  questions: [
    { id: "w57_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Hòa tan tối đa $40\\text{ g}$ muối A vào $100\\text{ g}$ nước ở $25^\\circ\\text{C}$ được dung dịch bão hòa. Độ tan của muối A ở $25^\\circ\\text{C}$ là:", options: ["A. $28,57\\text{ g}$", "B. $40\\text{ g}$", "C. $60\\text{ g}$", "D. $140\\text{ g}$"], answer: 1, solution: "$S = 40\\text{ g}$." },
    { id: "w57_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Ở $20^\\circ\\text{C}$, độ tan của $\\ce{KNO3}$ là $31,6\\text{ g}$. Nồng độ phần trăm của dung dịch $\\ce{KNO3}$ bão hòa là:", options: ["A. $31,6\\%$", "B. $24,01\\%$", "C. $46,2\\%$", "D. $18,5\\%$"], answer: 1, solution: "$C\\% = 31,6 / 131,6 \\times 100\\% = 24,01\\%$." },
    { id: "w57_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Phân tử khối của tinh thể đồng(II) sulfate ngậm nước $\\ce{CuSO4.5H2O}$ là:", options: ["A. $160$", "B. $250$", "C. $232$", "D. $178$"], answer: 1, solution: "$160 + 5 \\times 18 = 250\\text{ amu}$." },
    { id: "w57_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Hòa tan $25\\text{ g}$ $\\ce{CuSO4.5H2O}$ vào $75\\text{ g}$ nước thu được dung dịch $\\ce{CuSO4}$ có nồng độ phần trăm là:", options: ["A. $25\\%$", "B. $16\\%$", "C. $20\\%$", "D. $18\\%$"], answer: 1, solution: "$m_{\\ce{CuSO4}} = 25 \\times (160/250) = 16\\text{ g}$; $m_{\\text{dd}} = 100\\text{ g} \\Rightarrow C\\% = 16\\%$." },
    { id: "w57_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Khi làm lạnh một dung dịch bão hòa chất rắn (có độ tan tăng theo nhiệt độ), hiện tượng xảy ra là:", options: ["A. Không có hiện tượng", "B. Có tinh thể kết tinh tách ra khỏi dung dịch", "C. Chất rắn tan thêm", "D. Nước đóng băng ngay"], answer: 1, solution: "Độ tan giảm khi hạ nhiệt độ nên chất tan dư kết tinh tách ra." },
    { id: "w57_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Trong $28,6\\text{ g}$ tinh thể soda ngậm nước $\\ce{Na2CO3.10H2O}$ ($M=286$) có chứa bao nhiêu gam $\\ce{Na2CO3}$ khan?", options: ["A. $10,6\\text{ g}$", "B. $18\\text{ g}$", "C. $20\\text{ g}$", "D. $5,3\\text{ g}$"], answer: 0, solution: "$n = 0,1\\text{ mol} \\Rightarrow m_{\\ce{Na2CO3}} = 0,1 \\times 106 = 10,6\\text{ g}$." },
    { id: "w57_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Độ tan của đa số chất rắn tăng khi nhiệt độ tăng.", answer: true },
      { text: "Độ tan của chất khí tăng khi nhiệt độ tăng.", answer: false },
      { text: "Tinh thể CuSO₄.5H₂O có màu xanh lam đặc trưng.", answer: true },
      { text: "Khi cho CuSO₄.5H₂O tác dụng với nước, khối lượng chất tan CuSO₄ nhỏ hơn khối lượng tinh thể ban đầu.", answer: true }
    ], solution: "b) Sai: độ tan chất khí giảm khi nhiệt độ tăng." },
    { id: "w57_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Một dung dịch ở trạng thái bão hòa không thể hòa tan thêm chất tan đó ở cùng nhiệt độ.", answer: true },
      { text: "Cô cạn bớt nước từ dung dịch bão hòa ở nhiệt độ không đổi sẽ làm chất tan kết tinh.", answer: true },
      { text: "Độ tan của NaCl ở 20°C là 36 g có nghĩa là trong 100 g dung dịch có 36 g NaCl.", answer: false },
      { text: "Khối lượng mol của FeSO₄.7H₂O là 278 g/mol.", answer: true }
    ], solution: "c) Sai: là trong $100\\text{ g}$ NƯỚC có $36\\text{ g}$ NaCl." },
    { id: "w57_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Ở $50^\\circ\\text{C}$, hòa tan hết $45\\text{ g}$ muối X vào $150\\text{ g}$ nước thu được dung dịch bão hòa. Độ tan của X ở $50^\\circ\\text{C}$ là bao nhiêu gam?", answer: "30", tolerance: 0.2, solution: "$S = (45 / 150) \\times 100 = 30\\text{ g}$." },
    { id: "w57_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Ở $80^\\circ\\text{C}$ độ tan của muối A là $60\\text{ g}$, ở $20^\\circ\\text{C}$ là $25\\text{ g}$. Làm lạnh $320\\text{ g}$ dung dịch bão hòa A từ $80^\\circ\\text{C}$ xuống $20^\\circ\\text{C}$ thu được bao nhiêu gam muối khan kết tinh?", answer: "70", tolerance: 0.5, solution: "$320\\text{ g}$ dd gồm $120\\text{ g}$ A và $200\\text{ g}$ $\\ce{H2O}$. Ở $20^\\circ\\text{C}$, $200\\text{ g}$ nước giữ $50\\text{ g}$ A $\\Rightarrow$ tách $120 - 50 = 70\\text{ g}$." },
    { id: "w57_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Cần hòa tan bao nhiêu gam tinh thể $\\ce{CuSO4.5H2O}$ vào $175\\text{ g}$ nước để thu được dung dịch $\\ce{CuSO4}$ nồng độ $8\\%$?", options: ["A. $25\\text{ g}$", "B. $20\\text{ g}$", "C. $16\\text{ g}$", "D. $15\\text{ g}$"], answer: 0, solution: "Gọi $m$ là khối lượng tinh thể: $\\frac{0,64m}{m + 175} = 0,08 \\Rightarrow 0,56m = 14 \\Rightarrow m = 25\\text{ g}$." },
    { id: "w57_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Ở $10^\\circ\\text{C}$, độ tan của $\\ce{FeSO4}$ là $20,5\\text{ g}$. Làm lạnh $500\\text{ g}$ dung dịch $\\ce{FeSO4}$ $25\\%$ xuống $10^\\circ\\text{C}$ thì có $m\\text{ g}$ tinh thể $\\ce{FeSO4.7H2O}$ tách ra. Phương trình đúng để tìm số mol $x$ của tinh thể tách ra là:", options: ["A. $\\frac{125 - 152x}{375 - 126x} = 0,205$", "B. $\\frac{125 - 278x}{375} = 0,205$", "C. $\\frac{125 - 152x}{500 - 278x} = 0,205$", "D. $\\frac{125 - 126x}{375 - 152x} = 0,205$"], answer: 0, solution: "$m_{\\ce{FeSO4}} = 125\\text{ g}$, $m_{\\ce{H2O}} = 375\\text{ g}$. $1\\text{ mol}$ $\\ce{FeSO4.7H2O}$ kéo theo $152\\text{ g}$ muối và $126\\text{ g}$ nước." },
    { id: "w57_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Một tinh thể muối ngậm nước $\\ce{Na2SO4}.n\\ce{H2O}$ chứa $55,9\\%$ nước về khối lượng. Giá trị của $n$ là:", options: ["A. 5", "B. 7", "C. 10", "D. 12"], answer: 2, solution: "$\\frac{18n}{142 + 18n} = 0,559 \\Rightarrow n = 10$ ($\\ce{Na2SO4.10H2O}$)." },
    { id: "w57_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Làm bay hơi $50\\text{ g}$ nước từ $250\\text{ g}$ dung dịch muối bão hòa ở $25^\\circ\\text{C}$ (có độ tan $S = 25\\text{ g}$) ở cùng nhiệt độ thu được bao nhiêu gam muối khan kết tinh?", answer: "12.5", tolerance: 0.2, solution: "Lượng muối kết tinh đúng bằng lượng muối hòa tan trong $50\\text{ g}$ nước đã bay hơi: $m = 50 \\times 25/100 = 12,5\\text{ g}$." },
    { id: "w57_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Hòa tan $14,3\\text{ g}$ $\\ce{Na2CO3.10H2O}$ vào $85,7\\text{ g}$ nước. Nồng độ phần trăm của dung dịch $\\ce{Na2CO3}$ thu được là bao nhiêu %?", answer: "5.3", tolerance: 0.1, solution: "$n = 0,05\\text{ mol} \\Rightarrow m_{\\ce{Na2CO3}} = 5,3\\text{ g}$; $m_{\\text{dd}} = 14,3 + 85,7 = 100\\text{ g} \\Rightarrow C\\% = 5,3\\%$." },
    { id: "w57_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Ở $85^\\circ\\text{C}$, độ tan của $\\ce{CuSO4}$ là $87,7\\text{ g}$; ở $25^\\circ\\text{C}$ là $40\\text{ g}$. Làm lạnh $187,7\\text{ g}$ dung dịch bão hòa $\\ce{CuSO4}$ từ $85^\\circ\\text{C}$ xuống $25^\\circ\\text{C}$ thì thu được bao nhiêu gam tinh thể $\\ce{CuSO4.5H2O}$ kết tinh?", solution: "Ở $85^\\circ\\text{C}$, $187,7\\text{ g}$ dd bão hòa gồm $87,7\\text{ g}$ $\\ce{CuSO4}$ và $100\\text{ g}$ $\\ce{H2O}$.\nGọi $x$ là số mol $\\ce{CuSO4.5H2O}$ tách ra: $\\frac{87,7 - 160x}{100 - 90x} = \\frac{40}{100} = 0,4$.\n$87,7 - 160x = 40 - 36x \\Rightarrow 124x = 47,7 \\Rightarrow x \\approx 0,3847\\text{ mol}$.\n$m_{\\text{tinh thể}} = 0,3847 \\times 250 \\approx 96,17\\text{ g}$.", rubric: [
      { step: "Tìm đúng $m_{\\ce{CuSO4}} = 87,7\\text{ g}$ và $m_{\\ce{H2O}} = 100\\text{ g}$", points: 0.25 },
      { step: "Lập đúng phương trình $\\frac{87,7 - 160x}{100 - 90x} = 0,4$", points: 0.5 },
      { step: "Giải đúng $x \\approx 0,3847\\text{ mol}$ và $m \\approx 96,17\\text{ g}$", points: 0.25 }
    ] },
    { id: "w57_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hòa tan $m\\text{ g}$ tinh thể $\\ce{FeSO4.7H2O}$ vào $200\\text{ g}$ dung dịch $\\ce{FeSO4}$ $10\\%$ để thu được dung dịch $\\ce{FeSO4}$ $20\\%$. Tính $m$.", solution: "Trong $200\\text{ g}$ dd ban đầu có $20\\text{ g}$ $\\ce{FeSO4}$.\nTrong $m\\text{ g}$ $\\ce{FeSO4.7H2O}$ ($M=278$) có $\\frac{152}{278}m\\text{ g}$ $\\ce{FeSO4}$.\nTa có: $\\frac{20 + \\frac{152}{278}m}{200 + m} = 0,2 \\Rightarrow 20 + 0,5468m = 40 + 0,2m \\Rightarrow 0,3468m = 20 \\Rightarrow m \\approx 57,68\\text{ g}$.", rubric: [
      { step: "Tính được lượng $\\ce{FeSO4}$ trong tinh thể $= \\frac{152}{278}m$", points: 0.5 },
      { step: "Lập và giải đúng $m \\approx 57,68\\text{ g}$", points: 0.5 }
    ] },
    { id: "w57_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $25,2\\text{ g}$ kim loại $\\ce{Mg}$ tác dụng vừa đủ với dung dịch $\\ce{H2SO4}$ $20\\%$ loãng, nóng thu được dung dịch X. Làm lạnh dung dịch X xuống $10^\\circ\\text{C}$ (biết độ tan của $\\ce{MgSO4}$ ở $10^\\circ\\text{C}$ là $30\\text{ g}$) thì có bao nhiêu gam tinh thể $\\ce{MgSO4.7H2O}$ ($M=246$) tách ra?", solution: "$n_{\\ce{Mg}} = 25,2 / 24 = 1,05\\text{ mol} \\Rightarrow n_{\\ce{H2SO4}} = 1,05\\text{ mol}$ ($m_{\\text{ct}} = 102,9\\text{ g} \\Rightarrow m_{\\text{dd acid}} = 514,5\\text{ g}$, trong đó $m_{\\ce{H2O}} = 411,6\\text{ g}$).\nSau phản ứng: $n_{\\ce{MgSO4}} = 1,05\\text{ mol}$ ($126\\text{ g}$); $m_{\\ce{H2O}} = 411,6\\text{ g}$.\nGọi $x$ là mol $\\ce{MgSO4.7H2O}$ tách ra: $\\frac{126 - 120x}{411,6 - 126x} = 0,3 \\Rightarrow 126 - 120x = 123,48 - 37,8x \\Rightarrow 82,2x = 2,52 \\Rightarrow x = 0,03066\\text{ mol} \\Rightarrow m \\approx 7,54\\text{ g}$.", rubric: [
      { step: "Tính đúng $m_{\\ce{MgSO4}} = 126\\text{ g}$ và $m_{\\ce{H2O}} = 411,6\\text{ g}$", points: 0.5 },
      { step: "Lập phương trình tách tinh thể $\\ce{MgSO4.7H2O}$ và giải đúng $m \\approx 7,54\\text{ g}$", points: 0.5 }
    ] },
    { id: "w57_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cần lấy bao nhiêu gam $\\ce{CuSO4}$ khan và bao nhiêu gam dung dịch $\\ce{CuSO4}$ $10\\%$ để pha chế được $500\\text{ g}$ dung dịch $\\ce{CuSO4}$ $28\\%$?", solution: "Gọi $x$ là gam $\\ce{CuSO4}$ khan ($100\\%$), $y$ là gam dd $10\\%$:\n$x + y = 500$ và $x + 0,1y = 500 \\times 0,28 = 140$.\nTrừ 2 PT: $0,9y = 360 \\Rightarrow y = 400\\text{ g}$; $x = 100\\text{ g}$.", rubric: [
      { step: "Lập đúng hệ phương trình", points: 0.5 },
      { step: "Giải đúng $100\\text{ g}$ $\\ce{CuSO4}$ khan và $400\\text{ g}$ dd $10\\%$", points: 0.5 }
    ] },
    { id: "w57_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Xác định công thức của tinh thể muối $\\ce{M2SO4}.n\\ce{H2O}$, biết khi nung $6,44\\text{ g}$ tinh thể này đến khối lượng không đổi thu được $2,84\\text{ g}$ muối khan và biết rằng phần trăm khối lượng của oxi trong tinh thể là $69,565\\%$.", solution: "$m_{\\ce{H2O}} = 6,44 - 2,84 = 3,6\\text{ g} \\Rightarrow n_{\\ce{H2O}} = 0,2\\text{ mol}$.\nTrong $6,44\\text{ g}$ tinh thể: $m_{\\text{O tổng}} = 6,44 \\times 69,565\\% = 4,48\\text{ g} \\Rightarrow n_{\\text{O tổng}} = 0,28\\text{ mol}$.\nSố mol O trong muối khan $= 0,28 - 0,2 = 0,08\\text{ mol} \\Rightarrow n_{\\ce{M2SO4}} = 0,08 / 4 = 0,02\\text{ mol}$.\n$n = 0,2 / 0,02 = 10$; $M_{\\ce{M2SO4}} = 2,84 / 0,02 = 142 \\Rightarrow 2M + 96 = 142 \\Rightarrow M = 23$ ($\\ce{Na}$).\nCông thức: $\\ce{Na2SO4.10H2O}$.", rubric: [
      { step: "Tính đúng $n_{\\ce{H2O}} = 0,2\\text{ mol}$ và $n_{\\text{O tổng}} = 0,28\\text{ mol}$", points: 0.5 },
      { step: "Tìm đúng $n_{\\ce{M2SO4}} = 0,02\\text{ mol}$, $n=10$, $M=23$ ($\\ce{Na2SO4.10H2O}$)", points: 0.5 }
    ] }
  ]
};
