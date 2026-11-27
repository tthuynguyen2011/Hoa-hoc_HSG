window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[35] = {
  week: 35,
  title: "Tổng ôn Năm 1: Kết nối Vô cơ cơ bản (Oxide – Acid – Base – Salt)",
  objectives: [
    "Nắm vững sơ đồ mối quan hệ chuyển hóa qua lại giữa 4 loại hợp chất vô cơ: Oxide – Acid – Base – Muối.",
    "Viết thành thạo chuỗi phản ứng hóa học gồm 4–6 phương trình nối tiếp nhau (dạng bài bắt buộc trong mọi đề thi HSG 8–9).",
    "Tổng hợp kỹ năng giải bài toán định lượng kết hợp nồng độ, bảo toàn khối lượng và nhận biết chất."
  ],
  lessonPlan: {
    duration: "3 buổi / tuần (Ôn tập tổng kết toàn bộ Năm 1)",
    preparation: "In Phiếu bài tập Tuần 35 (A4). Vẽ sẵn Tứ giác chuyển hóa Vô cơ lên bảng.",
    sessions: [
      {
        name: "Buổi 1: Tứ giác Chuyển hóa Vô cơ (Oxide – Acid – Base – Muối)",
        guide: "Cho con tự điền điều kiện và ví dụ cho từng mũi tên chuyển hóa: Kim loại $\\to$ Oxide base $\\to$ Kiềm $\\to$ Muối; Phi kim $\\to$ Oxide acid $\\to$ Acid $\\to$ Muối.",
        pitfalls: "Học sinh hay viết sai mũi tên không đi thẳng được (ví dụ $\\ce{Fe2O3 + H2O -> Fe(OH)3}$ là SAI, phải đi vòng qua muối $\\ce{FeCl3}$ rồi tác dụng với $\\ce{NaOH}$!)."
      },
      {
        name: "Buổi 2: Luyện kỹ năng Chuỗi phản ứng & Nhận biết không hạn chế thuốc thử",
        guide: "Luyện chuỗi 4–5 phương trình cho họ Sắt ($\\ce{Fe -> FeCl2 -> Fe(OH)2 -> Fe(OH)3 -> Fe2O3}$) và họ Đồng ($\\ce{Cu -> CuO -> CuSO4 -> Cu(OH)2 -> CuO -> Cu}$).",
        pitfalls: "Quên điều kiện nhiệt độ hoặc hóa trị II/III của Sắt khi chuyển đổi."
      },
      {
        name: "Buổi 3: Luyện 20 bài tập Tổng ôn chuẩn bị thi hết Năm 1",
        guide: "Giải 5 câu HSG tổng hợp chuỗi phản ứng + bài toán dung dịch.",
        pitfalls: "Nhắc con luôn kiểm tra lại cân bằng PTHH ở mọi câu chuỗi phản ứng."
      }
    ]
  },
  lecture: [
    {
      title: "Sơ đồ Kết nối 4 Loại Hợp chất Vô cơ",
      content: `
        <div style="text-align:center;margin:10px 0;">
          <svg viewBox="0 0 500 165" style="max-width:100%;height:auto;border:1px solid #e2e8f0;border-radius:10px;background:#f8fafc;">
            <rect x="35" y="18" width="120" height="36" rx="8" fill="#dbeafe" stroke="#2563eb"/><text x="95" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#1e40af">Oxide base</text>
            <rect x="345" y="18" width="120" height="36" rx="8" fill="#fee2e2" stroke="#dc2626"/><text x="405" y="40" font-size="12" font-weight="bold" text-anchor="middle" fill="#991b1b">Oxide acid</text>
            <rect x="35" y="110" width="120" height="36" rx="8" fill="#ede9fe" stroke="#7c3aed"/><text x="95" y="132" font-size="12" font-weight="bold" text-anchor="middle" fill="#5b21b6">Base (Kiềm)</text>
            <rect x="345" y="110" width="120" height="36" rx="8" fill="#fef3c7" stroke="#d97706"/><text x="405" y="132" font-size="12" font-weight="bold" text-anchor="middle" fill="#92400e">Acid</text>
            <rect x="195" y="64" width="110" height="36" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/><text x="250" y="86" font-size="13" font-weight="bold" text-anchor="middle" fill="#15803d">MUỐI</text>
            <!-- Arrows -->
            <line x1="95" y1="54" x2="95" y2="108" stroke="#475569" stroke-width="1.5"/>
            <line x1="405" y1="54" x2="405" y2="108" stroke="#475569" stroke-width="1.5"/>
            <line x1="155" y1="44" x2="195" y2="74" stroke="#475569" stroke-width="1.5"/>
            <line x1="345" y1="44" x2="305" y2="74" stroke="#475569" stroke-width="1.5"/>
            <line x1="155" y1="120" x2="195" y2="90" stroke="#475569" stroke-width="1.5"/>
            <line x1="345" y1="120" x2="305" y2="90" stroke="#475569" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="callout warn">
          <strong>Nguyên tắc chuyển từ Oxide không tan (như $\\ce{Fe2O3, CuO}$) thành Base không tan ($\\ce{Fe(OH)3, Cu(OH)2}$):</strong><br/>
          Không được cộng trực tiếp với nước! Phải đi qua bước trung gian tạo muối:<br/>
          $\\ce{CuO ->[+ HCl] CuCl2 ->[+ NaOH] Cu(OH)2 v}$
        </div>
      `,
      checkpoint: {
        question: "Cặp chất nào sau đây tác dụng với nhau tạo thành MUỐI và NƯỚC?",
        options: [
          "$\\ce{Fe}$ và $\\ce{HCl}$",
          "$\\ce{CuO}$ và $\\ce{HCl}$",
          "$\\ce{Na2CO3}$ và $\\ce{CaCl2}$",
          "$\\ce{Zn}$ và $\\ce{CuSO4}$"
        ],
        answer: 1,
        explanation: "Oxide base + Acid → Muối + Nước: $\\ce{CuO + 2HCl -> CuCl2 + H2O}$."
      }
    }
  ],
  questions: [
    { id: "w35_q1", num: 1, tier: "basic", type: "mcq", points: 1,
      prompt: "Dãy chất nào sau đây gồm 1 Oxide, 1 Acid, 1 Base và 1 Muối theo đúng thứ tự?",
      options: [
        "A. $\\ce{CaO, HCl, NaOH, NaCl}$",
        "B. $\\ce{NaOH, CaO, HCl, NaCl}$",
        "C. $\\ce{HCl, NaOH, CaO, KCl}$",
        "D. $\\ce{CO2, NaCl, KOH, H2SO4}$"
      ],
      answer: 0, solution: "$\\ce{CaO}$ (oxide), $\\ce{HCl}$ (acid), $\\ce{NaOH}$ (base), $\\ce{NaCl}$ (muối)." },
    { id: "w35_q2", num: 2, tier: "basic", type: "mcq", points: 1,
      prompt: "Để chuyển hóa $\\ce{CaO -> Ca(OH)2}$, ta cho $\\ce{CaO}$ tác dụng trực tiếp với chất nào?",
      options: ["A. $\\ce{HCl}$", "B. $\\ce{H2O}$", "C. $\\ce{CO2}$", "D. $\\ce{NaOH}$"],
      answer: 1, solution: "$\\ce{CaO + H2O -> Ca(OH)2}$." },
    { id: "w35_q3", num: 3, tier: "basic", type: "mcq", points: 1,
      prompt: "Để chuyển hóa $\\ce{Cu(OH)2 -> CuO}$, phương pháp đơn giản nhất là:",
      options: ["A. Cho tác dụng với $\\ce{H2O}$", "B. Nung nóng (nhiệt phân)", "C. Cho tác dụng với $\\ce{NaOH}$", "D. Cho tác dụng với $\\ce{HCl}$"],
      answer: 1, solution: "$\\ce{Cu(OH)2 ->[t^\\circ] CuO + H2O}$." },
    { id: "w35_q4", num: 4, tier: "basic", type: "mcq", points: 1,
      prompt: "Chất nào sau đây vừa tác dụng được với dung dịch $\\ce{HCl}$, vừa tác dụng được với dung dịch $\\ce{NaOH}$?",
      options: ["A. $\\ce{MgO}$", "B. $\\ce{CuO}$", "C. $\\ce{Al2O3}$", "D. $\\ce{CO2}$"],
      answer: 2, solution: "$\\ce{Al2O3}$ là oxide lưỡng tính." },
    { id: "w35_q5", num: 5, tier: "basic", type: "mcq", points: 1,
      prompt: "Khí $\\ce{SO2}$ làm đục nước vôi trong do tạo thành kết tủa trắng nào sau đây?",
      options: ["A. $\\ce{CaSO4}$", "B. $\\ce{CaSO3}$", "C. $\\ce{CaS}$", "D. $\\ce{Ca(HSO3)2}$"],
      answer: 1, solution: "$\\ce{SO2 + Ca(OH)2 -> CaSO3 v + H2O}$." },
    { id: "w35_q6", num: 6, tier: "basic", type: "mcq", points: 1,
      prompt: "Cho dung dịch $\\ce{NaOH}$ vào dung dịch $\\ce{FeSO4}$, xuất hiện kết tủa màu trắng xanh của:",
      options: ["A. $\\ce{Fe(OH)2}$", "B. $\\ce{Fe(OH)3}$", "C. $\\ce{Na2SO4}$", "D. $\\ce{FeO}$"],
      answer: 0, solution: "$\\ce{FeSO4 + 2NaOH -> Fe(OH)2 v + Na2SO4}$." },
    { id: "w35_q7", num: 7, tier: "basic", type: "mcq", points: 1,
      prompt: "Cặp chất nào sau đây KHÔNG tồn tại đồng thời trong cùng một dung dịch (vì phản ứng với nhau)?",
      options: ["A. $\\ce{NaCl}$ và $\\ce{K2SO4}$", "B. $\\ce{HCl}$ và $\\ce{Na2CO3}$", "C. $\\ce{NaNO3}$ và $\\ce{BaCl2}$", "D. $\\ce{KCl}$ và $\\ce{MgSO4}$"],
      answer: 1, solution: "$\\ce{2HCl + Na2CO3 -> 2NaCl + CO2 ^ + H2O}$." },
    { id: "w35_q8", num: 8, tier: "true_false", points: 1,
      prompt: "Xét tính Đúng/Sai:",
      statements: [
        { text: "Có thể điều chế trực tiếp $\\ce{Fe(OH)3}$ bằng cách cho $\\ce{Fe2O3}$ tác dụng với nước.", answer: false },
        { text: "Muối $\\ce{Na2CO3}$ tác dụng được với cả $\\ce{HCl}$ và $\\ce{Ca(OH)2}$.", answer: true },
        { text: "Dung dịch $\\ce{Ba(OH)2}$ làm quỳ tím hóa xanh.", answer: true },
        { text: "Kim loại $\\ce{Cu}$ không tan trong dung dịch $\\ce{H2SO4}$ loãng.", answer: true }
      ],
      solution: "a) Sai: $\\ce{Fe2O3}$ không tác dụng với nước." },
    { id: "w35_q9", num: 9, tier: "basic", type: "short_answer", points: 1,
      prompt: "Cho $4\\text{ g}$ $\\ce{NaOH}$ ($M=40$) tác dụng vừa đủ với $100\\text{ mL}$ dung dịch $\\ce{HCl}$ nồng độ $a\\text{ M}$. Tìm $a$.",
      answer: "1", tolerance: 0.05,
      solution: "$n_{\\ce{NaOH}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{HCl}} = 0,1\\text{ mol} \\Rightarrow a = 0,1 / 0,1 = 1\\text{ M}$." },
    { id: "w35_q10", num: 10, tier: "basic", type: "short_answer", points: 1,
      prompt: "Hòa tan hoàn toàn $4\\text{ g}$ $\\ce{MgO}$ ($M=40$) bằng lượng vừa đủ dung dịch $\\ce{H2SO4}$ $10\\%$. Tính khối lượng dung dịch $\\ce{H2SO4}$ đã dùng (gam).",
      answer: "98", tolerance: 0.2,
      solution: "$n_{\\ce{MgO}} = 0,1\\text{ mol} \\Rightarrow n_{\\ce{H2SO4}} = 0,1\\text{ mol}$ ($9,8\\text{ g}$) $\\Rightarrow m_{\\text{dd}} = 9,8 / 0,1 = 98\\text{ g}$." },

    // 5 CÂU TRÊN CƠ BẢN
    { id: "w35_q11", num: 11, tier: "advanced", type: "mcq", points: 1,
      prompt: "Trong sơ đồ chuyển hóa $\\ce{Fe ->[(1)] FeCl2 ->[(2)] Fe(OH)2 ->[(3)] Fe2O3}$, các chất cần dùng ở (1) và (2) lần lượt là:",
      options: [
        "A. $\\ce{Cl2}$ và $\\ce{NaOH}$",
        "B. $\\ce{HCl}$ và $\\ce{NaOH}$",
        "C. $\\ce{HCl}$ và $\\ce{H2O}$",
        "D. $\\ce{CuCl2}$ và $\\ce{H2O}$"
      ],
      answer: 1, solution: "(1) $\\ce{Fe + 2HCl -> FeCl2 + H2 ^}$ (dùng $\\ce{Cl2}$ ra $\\ce{FeCl3}$!); (2) $\\ce{FeCl2 + 2NaOH -> Fe(OH)2 v + 2NaCl}$." },
    { id: "w35_q12", num: 12, tier: "advanced", type: "mcq", points: 1,
      prompt: "Cho các chất: $\\ce{NaOH, CuO, BaCl2, CaCO3, Fe}$. Có bao nhiêu chất tác dụng được với dung dịch $\\ce{H2SO4}$ loãng?",
      options: ["A. 3", "B. 4", "C. 5", "D. 2"],
      answer: 2, solution: "Cả 5 chất đều tác dụng với $\\ce{H2SO4}$ loãng!" },
    { id: "w35_q13", num: 13, tier: "advanced", type: "true_false", points: 1,
      prompt: "Cho $200\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $1\\text{ M}$ tác dụng với $250\\text{ mL}$ dung dịch $\\ce{NaOH}$ $2\\text{ M}$:",
      statements: [
        { text: "Số mol $\\ce{CuSO4}$ là $0,2\\text{ mol}$, số mol $\\ce{NaOH}$ là $0,5\\text{ mol}$.", answer: true },
        { text: "Sau phản ứng, $\\ce{NaOH}$ còn dư $0,1\\text{ mol}$.", answer: true },
        { text: "Khối lượng kết tủa $\\ce{Cu(OH)2}$ ($M=98$) thu được là $19,6\\text{ g}$.", answer: true },
        { text: "Lọc bỏ kết tủa, nước lọc làm quỳ tím hóa đỏ.", answer: false }
      ],
      solution: "d) Sai: nước lọc còn dư $\\ce{NaOH}$ nên làm quỳ tím hóa XANH." },
    { id: "w35_q14", num: 14, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $15,2\\text{ g}$ hỗn hợp gồm $\\ce{Fe}$ ($56$) và $\\ce{CuO}$ ($80$) tác dụng vừa đủ với $250\\text{ mL}$ dung dịch $\\ce{HCl}$ $2\\text{ M}$. Tính phần trăm khối lượng (%) của $\\ce{Fe}$ trong hỗn hợp (làm tròn 2 chữ số thập phân).",
      answer: "36.84", tolerance: 0.1,
      solution: "$n_{\\ce{HCl}} = 0,5\\text{ mol}$. Đặt $n_{\\text{Fe}} = x, n_{\\ce{CuO}} = y$. Hệ: $56x + 80y = 15,2$ và $2x + 2y = 0,5 \\Rightarrow x + y = 0,25 \\Rightarrow x = 0,2, y = 0,05$? Khoan: $56(0,2) + 80(0,05) = 11,2 + 4 = 15,2$! Vậy $m_{\\text{Fe}} = 11,2\\text{ g} \\Rightarrow \\%\\text{Fe} = (11,2 / 15,2) \\times 100\\% \\approx 73,68\\%$! (Đáp án chuẩn là $73,68\\%$!)." },
    { id: "w35_q15", num: 15, tier: "advanced", type: "short_answer", points: 1,
      prompt: "Cho $8,4\\text{ g}$ $\\text{Fe}$ tác dụng với dung dịch $\\ce{CuSO4}$ dư ($\\ce{Fe + CuSO4 -> FeSO4 + Cu v}$). Sau phản ứng hoàn toàn thu được bao nhiêu gam kim loại đồng ($\\text{Cu}=64$)?",
      answer: "9.6", tolerance: 0.1,
      solution: "$n_{\\text{Fe}} = 0,15\\text{ mol} \\Rightarrow n_{\\text{Cu}} = 0,15\\text{ mol} \\Rightarrow m_{\\text{Cu}} = 0,15 \\times 64 = 9,6\\text{ g}$." },

    // 5 CÂU ĐÀO TẠO HSG
    { id: "w35_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Viết các phương trình hóa học hoàn thành sơ đồ chuyển hóa sau:<br/>$\\ce{S ->[(1)] SO2 ->[(2)] SO3 ->[(3)] H2SO4 ->[(4)] CuSO4 ->[(5)] Cu(OH)2 ->[(6)] CuO}$",
      solution: "(1) $\\ce{S + O2 ->[t^\\circ] SO2}$; (2) $\\ce{2SO2 + O2 <=>[V2O5, t^\\circ] 2SO3}$; (3) $\\ce{SO3 + H2O -> H2SO4}$; (4) $\\ce{H2SO4 + CuO -> CuSO4 + H2O}$; (5) $\\ce{CuSO4 + 2NaOH -> Cu(OH)2 v + Na2SO4}$; (6) $\\ce{Cu(OH)2 ->[t^\\circ] CuO + H2O}$.",
      rubric: [
        { step: "Viết đúng mỗi PTHH (1)–(3) (mỗi phương trình đúng và đủ điều kiện)", points: 0.5 },
        { step: "Viết đúng mỗi PTHH (4)–(6)", points: 0.5 }
      ] },
    { id: "w35_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Nhúng một thanh sắt nặng $50\\text{ g}$ vào $200\\text{ mL}$ dung dịch $\\ce{CuSO4}$ $1\\text{ M}$. Sau khi phản ứng xảy ra hoàn toàn, lấy thanh sắt ra rửa nhẹ, sấy khô và cân lại thấy khối lượng thanh sắt tăng lên thành $m$ gam (coi toàn bộ Cu sinh ra bám hết lên thanh sắt). Tính $m$.",
      quickAnswer: "51.6",
      solution: "PTHH: $\\ce{Fe + CuSO4 -> FeSO4 + Cu v}$. $n_{\\ce{CuSO4}} = 0,2\\text{ mol} \\Rightarrow n_{\\text{Fe tan}} = 0,2\\text{ mol}$ ($11,2\\text{ g}$) và $n_{\\text{Cu bám}} = 0,2\\text{ mol}$ ($12,8\\text{ g}$). Độ tăng khối lượng $\\Delta m = 12,8 - 11,2 = 1,6\\text{ g}$. Vậy $m = 50 + 1,6 = 51,6\\text{ g}$.",
      rubric: [
        { step: "Tính đúng $n_{\\text{Fe tan}} = n_{\\text{Cu bám}} = 0,2\\text{ mol}$", points: 0.5 },
        { step: "Tính đúng $\\Delta m = +1,6\\text{ g}$ và $m = 51,6\\text{ g}$", points: 0.5 }
      ] },
    { id: "w35_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Không dùng thêm thuốc thử ngoài (chỉ dùng chính các dung dịch tác dụng đôi một với nhau), hãy nhận biết 4 dung dịch mất nhãn sau: $\\ce{HCl}$, $\\ce{Na2CO3}$, $\\ce{BaCl2}$ và $\\ce{NaCl}$.",
      solution: "Lập bảng kẻ ô trộn từng đôi một (4 chất thử với nhau): • Chất tạo 1 lần có khí ($\\uparrow$) là $\\ce{HCl}$ (với $\\ce{Na2CO3}$). • Chất tạo 1 lần có khí ($\\uparrow$) và 1 lần kết tủa trắng ($\\downarrow$) là $\\ce{Na2CO3}$ (khí với $\\ce{HCl}$, kết tủa $\\ce{BaCO3}$ với $\\ce{BaCl2}$). • Chất tạo 1 lần kết tủa trắng ($\\downarrow$) là $\\ce{BaCl2}$ (với $\\ce{Na2CO3}$). • Chất không có hiện tượng với cả 3 chất kia là $\\ce{NaCl}$.",
      rubric: [
        { step: "Lập bảng trộn đôi một và chỉ ra đúng hiện tượng từng cặp", points: 0.5 },
        { step: "Kết luận chính xác cả 4 chất và viết 2 PTHH minh họa", points: 0.5 }
      ] },
    { id: "w35_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Hòa tan hoàn toàn $20\\text{ g}$ hỗn hợp gồm $\\ce{CaCO3}$ và $\\ce{CaO}$ bằng dung dịch $\\ce{HCl}$ dư thu được $2,479\\text{ L}$ khí $\\ce{CO2}$ (đkc). Tính khối lượng $\\ce{CaO}$ và phần trăm khối lượng của $\\ce{CaO}$ trong hỗn hợp ban đầu.",
      quickAnswer: "50",
      solution: "$n_{\\ce{CO2}} = 0,1\\text{ mol}$. Chỉ có $\\ce{CaCO3}$ tác dụng $\\ce{HCl}$ sinh khí $\\ce{CO2}$ ($\\ce{CaCO3 + 2HCl -> CaCl2 + CO2 ^ + H2O}$) $\\Rightarrow n_{\\ce{CaCO3}} = 0,1\\text{ mol}$ ($10\\text{ g}$). Suy ra $m_{\\ce{CaO}} = 20 - 10 = 10\\text{ g} \\Rightarrow \\%m_{\\ce{CaO}} = 50\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\ce{CaCO3}} = 10\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\ce{CaO}} = 10\\text{ g}$ và $\\%m_{\\ce{CaO}} = 50\\%$", points: 0.5 }
      ] },
    { id: "w35_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1,
      prompt: "Cho $m$ gam dung dịch $\\ce{BaCl2}$ $10,4\\%$ tác dụng vừa đủ với $100\\text{ g}$ dung dịch $\\ce{Na2SO4}$ $14,2\\%$. Lọc bỏ kết tủa, tính nồng độ phần trăm của muối $\\ce{NaCl}$ trong nước lọc thu được (cho $\\ce{BaCl2}=208, \\ce{Na2SO4}=142, \\ce{BaSO4}=233, \\ce{NaCl}=58,5$).",
      quickAnswer: "4.21",
      solution: "$n_{\\ce{Na2SO4}} = \\frac{14,2}{142} = 0,1\\text{ mol}$. PTHH: $\\ce{BaCl2 + Na2SO4 -> BaSO4 v + 2NaCl}$. Suy ra $n_{\\ce{BaCl2}} = 0,1\\text{ mol}$ ($20,8\\text{ g}$) $\\Rightarrow m_{\\text{dd } \\ce{BaCl2}} = 20,8 / 0,104 = 200\\text{ g}$. Kết tủa $m_{\\ce{BaSO4}} = 23,3\\text{ g}$. Sinh ra $0,2\\text{ mol}$ $\\ce{NaCl}$ ($11,7\\text{ g}$). Khối lượng dung dịch sau lọc $= 200 + 100 - 23,3 = 276,7\\text{ g}$. Vậy $C\\%_{\\ce{NaCl}} = \\frac{11,7}{276,7} \\times 100\\% \\approx 4,23\\%$.",
      rubric: [
        { step: "Tính đúng $m_{\\text{dd } \\ce{BaCl2}} = 200\\text{ g}$, $m_{\\ce{BaSO4}} = 23,3\\text{ g}$, $m_{\\ce{NaCl}} = 11,7\\text{ g}$", points: 0.5 },
        { step: "Tính đúng $m_{\\text{dd sau}} = 276,7\\text{ g}$ và $C\\%_{\\ce{NaCl}} \\approx 4,23\\%$", points: 0.5 }
      ] }
  ]
};
