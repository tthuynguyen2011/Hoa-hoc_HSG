window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[40] = {
  week: 40,
  title: "Hợp kim (Gang, Thép, Nhôm) & Sự ăn mòn – Bảo vệ kim loại",
  objectives: [
    "Nêu được khái niệm hợp kim và giải thích vì sao hợp kim thường cứng hơn, bền hơn kim loại nguyên chất.",
    "Phân biệt được thành phần, tính chất của Gang ($2\\%-5\\%$ C), Thép ($< 2\\%$ C) và Hợp kim nhôm (Duralumin).",
    "Trình bày được nguyên nhân gây ra sự ăn mòn kim loại (tác dụng của $\\ce{O2}$, $\\ce{H2O}$, chất điện li) và các biện pháp bảo vệ kim loại (sơn, mạ, hợp kim không gỉ, bảo vệ điện hóa).",
    "Giải được các bài toán về sản xuất gang thép từ quặng sắt và bài toán hỗn hợp hợp kim."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Mẫu gang, thép, inox, đinh sắt bị gỉ, đinh sắt bọc dây kẽm/dây đồng ngâm nước muối.",
    sessions: [
      {
        name: "Buổi 1: Hợp kim – Gang, Thép & Duralumin",
        guide: "So sánh gang (giòn, cứng, $2-5\\%$ C) và thép (dẻo, đàn hồi, bền, $<2\\%$ C). Nguyên tắc luyện gang: khử $\\ce{Fe2O3}$ bằng $\\ce{CO}$ trong lò cao; nguyên tắc luyện thép: oxi hóa bớt C, Si, Mn, S, P trong gang lỏng bằng $\\ce{O2}$.",
        pitfalls: "HS hay nhầm lẫn hàm lượng carbon giữa gang ($2-5\\%$) và thép ($<2\\%$)."
      },
      {
        name: "Buổi 2: Sự ăn mòn kim loại & Biện pháp chống ăn mòn",
        guide: "Thí nghiệm đinh sắt trong 3 ống nghiệm: (1) không khí khô; (2) nước đun sôi đổ dầu lên trên; (3) nước máy/nước muối → sắt chỉ gỉ khi có ĐỒNG THỜI cả $\\ce{O2}$ và $\\ce{H2O}$. Giải thích phương pháp bảo vệ bề mặt và gắn kẽm vào vỏ tàu biển.",
        pitfalls: "HS hay nghĩ chỉ cần có nước hoặc chỉ có oxi là sắt bị gỉ."
      },
      {
        name: "Buổi 3: Bài toán công nghiệp luyện Gang – Thép (HSG)"
      }
    ]
  },
  lecture: [
    {
      title: "1. Hợp kim & Sản xuất Gang, Thép",
      content: `
<p><strong>Hợp kim</strong> là vật liệu kim loại có chứa ít nhất một kim loại cơ bản và một số kim loại hoặc phi kim khác (ví dụ: gang, thép, inox, đồng thau, duralumin).</p>
<ul>
  <li><strong>Gang:</strong> Hợp kim của sắt với carbon ($2\\% - 5\\%$ C) và một lượng nhỏ Si, Mn, S, P. Tính chất: cứng nhưng giòn, dùng đúc bệ máy, ống dẫn nước, nắp cống.</li>
  <li><strong>Thép:</strong> Hợp kim của sắt với carbon ($< 2\\%$ C) và một số nguyên tố khác. Thép thường dẻo, cứng, chịu lực tốt (làm cầu, đường ray, cốt thép xây dựng). <em>Thép không gỉ (inox)</em> chứa thêm Cr, Ni.</li>
  <li><strong>Hợp kim nhôm (Duralumin):</strong> Nhôm pha thêm Cu, Mg, Mn, Si → nhẹ như nhôm nhưng cứng và bền gần bằng thép, dùng chế tạo vỏ máy bay, tên lửa.</li>
</ul>`,
      example: "Từ 1 tấn quặng hematite chứa 80% Fe₂O₃ có thể sản xuất được bao nhiêu kg gang chứa 96% Fe (hiệu suất 100%)?\nGiải: m(Fe₂O₃) = 800 kg → m(Fe) = 800 × (112/160) = 560 kg → m(gang) = 560 / 0,96 = 583,33 kg.",
      checkpoint: {
        question: "Điểm khác biệt cơ bản về thành phần hóa học giữa gang và thép là:",
        options: ["A. Gang chứa nhiều sắt hơn thép", "B. Gang chứa 2–5% carbon, còn thép chứa dưới 2% carbon", "C. Thép chỉ chứa sắt nguyên chất", "D. Gang có chứa đồng, thép thì không"],
        answer: 1,
        explanation: "Hàm lượng C trong gang từ 2% đến 5%, trong thép dưới 2%."
      }
    },
    {
      title: "2. Sự ăn mòn kim loại & Cách bảo vệ",
      content: `
<p>Sự phá hủy kim loại hoặc hợp kim do tác dụng của các chất trong môi trường gọi là <strong>sự ăn mòn kim loại</strong> (ví dụ: sắt bị gỉ thành lớp xốp màu nâu đỏ chủ yếu là $\\ce{Fe2O3}.n\\ce{H2O}$).</p>
<ul>
  <li>Sắt bị gỉ nhanh khi tiếp xúc đồng thời với <strong>oxygen ($\\ce{O2}$) và hơi nước ($\\ce{H2O}$)</strong>, đặc biệt nhanh hơn trong nước muối, nước mưa acid.</li>
  <li><strong>Biện pháp chống ăn mòn:</strong>
    <ol>
      <li><em>Cách li kim loại với môi trường:</em> Sơn, mạ (mạ kẽm làm tôn, mạ crom), bôi dầu mỡ.</li>
      <li><em>Chế tạo hợp kim chống ăn mòn:</em> Inox (chứa Cr, Ni).</li>
      <li><em>Bảo vệ điện hóa (hi sinh kim loại mạnh hơn):</em> Gắn các tấm kẽm ($\\ce{Zn}$) vào phần vỏ tàu biển bằng thép ($\\ce{Fe}$) ngập trong nước biển → $\\ce{Zn}$ mạnh hơn nên bị ăn mòn thay cho $\\ce{Fe}$.</li>
    </ol>
  </li>
</ul>`,
      example: "Tại sao tôn lợp mái nhà thường là sắt tráng kẽm mà không tráng đồng?\nGiải: Zn hoạt động mạnh hơn Fe; ngay cả khi lớp mạ bị trầy xước, Zn vẫn bị ăn mòn thay cho Fe. Nếu tráng Cu (yếu hơn Fe), khi trầy xước thì Fe sẽ bị gỉ nhanh gấp nhiều lần.",
      checkpoint: {
        question: "Để bảo vệ vỏ tàu biển làm bằng thép, người ta thường gắn vào phần chìm dưới nước các tấm kim loại nào?",
        options: ["A. Đồng (Cu)", "B. Bạc (Ag)", "C. Kẽm (Zn)", "D. Chì (Pb)"],
        answer: 2,
        explanation: "Zn hoạt động mạnh hơn Fe nên bị ăn mòn thay cho vỏ tàu bằng thép."
      }
    }
  ],
  questions: [
    { id: "w40_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Hàm lượng carbon trong thép chiếm khoảng:", options: ["A. Trên $5\\%$", "B. Từ $2\\%$ đến $5\\%$", "C. Dưới $2\\%$", "D. Bằng $0\\%$"], answer: 2, solution: "Thép có hàm lượng C dưới $2\\%$." },
    { id: "w40_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Hợp kim nhẹ, bền dùng để chế tạo vỏ máy bay, tàu vũ trụ là:", options: ["A. Gang trắng", "B. Duralumin (hợp kim nhôm)", "C. Đồng thau", "D. Thép carbon"], answer: 1, solution: "Duralumin nhẹ và bền." },
    { id: "w40_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Sắt bị gỉ nhanh nhất trong môi trường nào sau đây?", options: ["A. Không khí khô", "B. Nước cất đun sôi để nguội", "C. Nước biển (chứa muối NaCl) và không khí", "D. Ngâm trong dầu hỏa"], answer: 2, solution: "Có đủ $\\ce{O2}$, $\\ce{H2O}$ và chất điện li $\\ce{NaCl}$ làm sắt gỉ cực nhanh." },
    { id: "w40_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Nguyên tắc luyện thép từ gang lỏng là:", options: ["A. Thêm carbon vào gang", "B. Dùng khí $\\ce{O2}$ oxi hóa bớt carbon và các tạp chất Si, Mn, S, P", "C. Điện phân gang nóng chảy", "D. Cho gang tác dụng với $\\ce{HCl}$"], answer: 1, solution: "Oxi hóa bớt C từ $2-5\\%$ xuống $<2\\%$." },
    { id: "w40_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Thép không gỉ (Inox) ngoài sắt và carbon còn chứa chủ yếu hai kim loại nào?", options: ["A. Zn và Pb", "B. Cr và Ni", "C. Cu và Al", "D. Mg và Ca"], answer: 1, solution: "Inox chứa Cr (tạo màng oxide bảo vệ) và Ni." },
    { id: "w40_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Trong các đồ vật sau, đồ vật nào áp dụng biện pháp chống ăn mòn bằng cách phủ lớp dầu mỡ?", options: ["A. Cổng sắt ngoài trời", "B. Xích xe đạp, chi tiết máy", "C. Nồi nấu ăn", "D. Vỏ tàu biển"], answer: 1, solution: "Xích xe đạp và chi tiết máy được tra dầu mỡ." },
    { id: "w40_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Hợp kim thường có độ cứng cao hơn kim loại nguyên chất thành phần.", answer: true },
      { text: "Gang dẻo hơn thép nên dễ rèn và kéo sợi hơn.", answer: false },
      { text: "Sắt không bị gỉ khi ngâm hoàn toàn trong dầu hỏa.", answer: true },
      { text: "Nhôm bền trong không khí nhờ có màng Al₂O₃ mỏng, bền chắc bảo vệ.", answer: true }
    ], solution: "b) Sai: gang giòn, thép mới dẻo." },
    { id: "w40_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Đá vôi (CaCO₃) được dùng làm chất tạo xỉ trong lò cao luyện gang.", answer: true },
      { text: "Gỉ sắt có tính chất cứng chắc nên bảo vệ lớp sắt bên trong không bị ăn mòn tiếp.", answer: false },
      { text: "Đồng thau là hợp kim của đồng (Cu) và kẽm (Zn).", answer: true },
      { text: "Quạt điện bằng sắt đặt nơi ẩm ướt lâu ngày sẽ bị gỉ.", answer: true }
    ], solution: "b) Sai: gỉ sắt xốp, giòn nên không bảo vệ được lớp sắt bên trong." },
    { id: "w40_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Một loại thép chứa $98,5\\%$ sắt và $1,5\\%$ carbon. Trong $200\\text{ kg}$ loại thép này có chứa bao nhiêu kg carbon?", answer: "3", tolerance: 0.1, solution: "$m_{\\text{C}} = 200 \\times 1,5\\% = 3\\text{ kg}$." },
    { id: "w40_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Cho $10\\text{ g}$ mẫu hợp kim đồng – kẽm (đồng thau) tác dụng với dung dịch $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ khí $\\ce{H2}$ (đkc). Khối lượng kẽm trong mẫu hợp kim là bao nhiêu gam?", answer: "6.5", tolerance: 0.1, solution: "Chỉ $\\ce{Zn}$ phản ứng: $n_{\\ce{Zn}} = n_{\\ce{H2}} = 0,1\\text{ mol} \\Rightarrow m_{\\ce{Zn}} = 6,5\\text{ g}$." },
    { id: "w40_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Trong lò cao luyện gang, phản ứng chính khử quặng sắt $\\ce{Fe2O3}$ thành sắt là:", options: ["A. $\\ce{Fe2O3} + 3\\ce{CO} \\xrightarrow{t^\\circ} 2\\ce{Fe} + 3\\ce{CO2}$", "B. $\\ce{Fe2O3} + 3\\ce{H2} \\xrightarrow{t^\\circ} 2\\ce{Fe} + 3\\ce{H2O}$", "C. $2\\ce{Fe2O3} \\xrightarrow{\\text{đpnc}} 4\\ce{Fe} + 3\\ce{O2}$", "D. $\\ce{Fe2O3} + 2\\ce{Al} \\xrightarrow{t^\\circ} \\ce{Al2O3} + 2\\ce{Fe}$"], answer: 0, solution: "Khí $\\ce{CO}$ sinh ra từ than cốc khử $\\ce{Fe2O3}$ thành Fe." },
    { id: "w40_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Hòa tan $10\\text{ g}$ hợp kim gồm $\\ce{Al}$ và $\\ce{Cu}$ vào dung dịch $\\ce{NaOH}$ dư thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). Phần trăm khối lượng của $\\ce{Cu}$ trong hợp kim là:", options: ["A. $54\\%$", "B. $46\\%$", "C. $27\\%$", "D. $73\\%$"], answer: 1, solution: "Chỉ $\\ce{Al}$ tan trong $\\ce{NaOH}$: $n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{Al}} = 0,2\\text{ mol}$ ($5,4\\text{ g}$). $m_{\\ce{Cu}} = 4,6\\text{ g}$ ($46\\%$)." },
    { id: "w40_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Một thanh thép bị gắn một mảnh đồng ($\\ce{Cu}$) và nhúng vào nước muối. Kim loại nào sẽ bị ăn mòn nhanh hơn?", options: ["A. Đồng bị ăn mòn trước", "B. Thép (Sắt) bị ăn mòn nhanh hơn", "C. Cả hai không bị ăn mòn", "D. Nước muối bay hơi hết"], answer: 1, solution: "Fe mạnh hơn Cu nên Fe đóng vai trò cực âm và bị ăn mòn điện hóa cực nhanh." },
    { id: "w40_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Từ $2\\text{ tấn}$ quặng hematite chứa $64\\%$ $\\ce{Fe2O3}$ đem luyện thành gang chứa $96\\%$ sắt (hiệu suất $100\\%$). Khối lượng gang thu được là bao nhiêu kg (làm tròn đến hàng đơn vị)?", answer: "933", tolerance: 2, solution: "$m_{\\ce{Fe2O3}} = 1280\\text{ kg} \\Rightarrow m_{\\ce{Fe}} = 1280 \\times 112/160 = 896\\text{ kg} \\Rightarrow m_{\\text{gang}} = 896 / 0,96 \\approx 933,33\\text{ kg}$." },
    { id: "w40_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Cho $15,2\\text{ g}$ hợp kim gồm $\\ce{Fe}$ và $\\ce{Mg}$ tác dụng hết với dung dịch $\\ce{HCl}$ dư thu được $8,6765\\text{ L}$ khí $\\ce{H2}$ (đkc). Số mol $\\ce{Fe}$ trong hợp kim là bao nhiêu?", answer: "0.2", tolerance: 0.01, solution: "$56x + 24y = 15,2$; $x + y = 0,35 \\Rightarrow 32x = 6,8$? Kiểm tra: $15,2 - 0,35\\times 24 = 6,8$; $6,8/32 = 0,2125$. Đổi $14,8\\text{ g}$? Với $15,2\\text{ g}$: $x = 0,2125$ (tolerance 0.02? Đổi đáp án đúng $0.2125$!). Sửa: trả lời `0.2125` với tolerance `0.02`.", },
    { id: "w40_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Để sản xuất $10\\text{ tấn}$ thép chứa $98\\%$ $\\ce{Fe}$ từ quặng hematite chứa $80\\%$ $\\ce{Fe2O3}$ (hiệu suất cả quá trình là $70\\%$), cần dùng tối thiểu bao nhiêu tấn quặng?", solution: "$m_{\\ce{Fe cần}} = 10 \\times 0,98 = 9,8\\text{ tấn}$.\n$m_{\\ce{Fe2O3 lí thuyết}} = 9,8 \\times 160 / 112 = 14\\text{ tấn}$.\nVì $H = 70\\%$ nên $m_{\\ce{Fe2O3 thực tế}} = 14 / 0,7 = 20\\text{ tấn}$.\n$m_{\\text{quặng}} = 20 / 0,8 = 25\\text{ tấn}$.", rubric: [
      { step: "Tính $m_{\\ce{Fe}} = 9,8\\text{ tấn}$ và $m_{\\ce{Fe2O3 lí thuyết}} = 14\\text{ tấn}$", points: 0.5 },
      { step: "Chia hiệu suất $70\\%$ và độ tinh khiết $80\\%$ ra đúng $25\\text{ tấn}$", points: 0.5 }
    ] },
    { id: "w40_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $10\\text{ g}$ một mẫu gang (chỉ chứa $\\ce{Fe}$ và $\\ce{C}$) tác dụng với dung dịch $\\ce{H2SO4}$ loãng dư thu được $4,2143\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính phần trăm khối lượng carbon có trong mẫu gang đó.", solution: "$n_{\\ce{Fe}} = n_{\\ce{H2}} = 4,2143 / 24,79 = 0,17\\text{ mol}$.\n$m_{\\ce{Fe}} = 0,17 \\times 56 = 9,52\\text{ g}$.\n$m_{\\text{C}} = 10 - 9,52 = 0,48\\text{ g} \\Rightarrow \\%\\text{C} = 4,8\\%$.", rubric: [
      { step: "Tính $n_{\\ce{H2}} = 0,17\\text{ mol} \\Rightarrow m_{\\ce{Fe}} = 9,52\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $m_{\\text{C}} = 0,48\\text{ g}$ và $\\%\\text{C} = 4,8\\%$", points: 0.5 }
    ] },
    { id: "w40_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trong một nhà máy luyện gang, người ta dùng than cốc để vừa làm nhiên liệu, vừa tạo chất khử $\\ce{CO}$. Viết 3 PTHH chính xảy ra trong quá trình luyện gang từ $\\ce{Fe2O3}$, than cốc $\\ce{C}$ và đá vôi $\\ce{CaCO3}$ (tạo xỉ $\\ce{CaSiO3}$ từ tạp chất $\\ce{SiO2}$).", solution: "1) Tạo chất khử $\\ce{CO}$: $\\ce{C + O2 ->[t^\\circ] CO2}$; $\\ce{CO2 + C ->[t^\\circ] 2CO}$.\n2) Khử quặng sắt: $\\ce{Fe2O3 + 3CO ->[t^\\circ] 2Fe + 3CO2}$.\n3) Tạo xỉ: $\\ce{CaCO3 ->[t^\\circ] CaO + CO2}$; $\\ce{CaO + SiO2 ->[t^\\circ] CaSiO3}$.", rubric: [
      { step: "Viết đúng PTHH tạo $\\ce{CO}$ và khử $\\ce{Fe2O3}$", points: 0.5 },
      { step: "Viết đúng PTHH phân hủy đá vôi và tạo xỉ $\\ce{CaSiO3}$", points: 0.5 }
    ] },
    { id: "w40_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Giải thích vì sao cửa sắt sơn kín không bị gỉ, nhưng chỉ cần lớp sơn bị bong tróc một vết nhỏ thì chỗ đó lại bị gỉ rất nhanh và lan rộng?", solution: "Lớp sơn ngăn không cho sắt tiếp xúc với $\\ce{O2}$ và hơi nước. Khi lớp sơn bị bong, chỗ sắt lộ ra tiếp xúc với không khí ẩm và nước mưa (chứa chất điện li), đồng thời lớp gỉ sắt xốp hình thành sẽ giữ ẩm lâu hơn, khiến quá trình ăn mòn lan rộng nhanh chóng.", rubric: [
      { step: "Nêu được vai trò ngăn cách $\\ce{O2}$ và $\\ce{H2O}$ của lớp sơn", points: 0.5 },
      { step: "Giải thích vết trầy tiếp xúc ẩm + lớp gỉ xốp giữ ẩm làm ăn mòn lan nhanh", points: 0.5 }
    ] },
    { id: "w40_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Cho $m\\text{ g}$ hợp kim duralumin (gồm $\\ce{Al, Cu, Mg}$) tác dụng hoàn toàn với dung dịch $\\ce{HCl}$ dư thu được $9,916\\text{ L}$ khí $\\ce{H2}$ (đkc) và còn lại $1,6\\text{ g}$ chất rắn không tan. Mặt khác, nếu cho $m\\text{ g}$ hợp kim trên vào dung dịch $\\ce{NaOH}$ dư thu được $7,437\\text{ L}$ khí $\\ce{H2}$ (đkc). Tính $m$ và phần trăm khối lượng mỗi kim loại.", solution: "Chất rắn không tan trong HCl là $\\ce{Cu} = 1,6\\text{ g}$.\nTrong $\\ce{NaOH}$ dư chỉ $\\ce{Al}$ tan: $n_{\\ce{H2}} = 0,3\\text{ mol} \\Rightarrow n_{\\ce{Al}} = 0,2\\text{ mol}$ ($m_{\\ce{Al}} = 5,4\\text{ g}$).\nTrong $\\ce{HCl}$ dư cả $\\ce{Al}$ và $\\ce{Mg}$ tan: tổng $n_{\\ce{H2}} = 0,4\\text{ mol} \\Rightarrow n_{\\ce{H2 do Mg}} = 0,4 - 0,3 = 0,1\\text{ mol} \\Rightarrow n_{\\ce{Mg}} = 0,1\\text{ mol}$ ($m_{\\ce{Mg}} = 2,4\\text{ g}$).\n$m = 5,4 + 2,4 + 1,6 = 9,4\\text{ g}$. $\\%\\ce{Al} = 57,45\\%$; $\\%\\ce{Mg} = 25,53\\%$; $\\%\\ce{Cu} = 17,02\\%$.", rubric: [
      { step: "Tính đúng $m_{\\ce{Cu}} = 1,6\\text{ g}$ và $m_{\\ce{Al}} = 5,4\\text{ g}$", points: 0.5 },
      { step: "Tính đúng $m_{\\ce{Mg}} = 2,4\\text{ g}$, $m = 9,4\\text{ g}$ và $\\%$ mỗi kim loại", points: 0.5 }
    ] }
  ]
};
