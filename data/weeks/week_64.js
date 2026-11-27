window.WEEK_DATA = window.WEEK_DATA || {};
window.WEEK_DATA[64] = {
  week: 64,
  title: "CĐ 6: Nhận biết, Tinh chế & Tách hỗn hợp chất (Vô cơ + Hữu cơ)",
  objectives: [
    "Làm chủ 3 dạng bài tập thực nghiệm kinh điển trong đề thi HSG & Chuyên Hóa: (1) Nhận biết dùng thuốc thử tự do / giới hạn / không dùng thuốc thử; (2) Tinh chế loại bỏ tạp chất; (3) Tách riêng từng chất nguyên chất khỏi hỗn hợp.",
    "Trình bày khoa học bài toán nhận biết: Trích mẫu thử $\\rightarrow$ Chọn thuốc thử $\\rightarrow$ Nêu hiện tượng + Kết luận $\\rightarrow$ Viết PTHH.",
    "Vận dụng nguyên tắc tách chất (không làm thay đổi khối lượng chất cần tách, hoặc tái tạo lại đúng chất ban đầu)."
  ],
  lessonPlan: {
    duration: "3 buổi (135 phút)",
    preparation: "Bảng thuốc thử nhận biết vô cơ + hữu cơ.",
    sessions: [
      {
        name: "Buổi 1: Nhận biết chất (Giới hạn thuốc thử & Không dùng thuốc thử)",
        guide: "Khi không dùng thuốc thử ngoài: kẻ bảng tương tác từng đôi một (để ý chất tạo khí, kết tủa, kết tủa tan trong dư) hoặc đun nóng/điện phân.",
        pitfalls: "HS hay quên câu 'Trích mỗi chất một ít làm mẫu thử' và quên viết PTHH minh họa."
      },
      {
        name: "Buổi 2: Tinh chế & Tách hỗn hợp (Vô cơ + Hữu cơ)",
        guide: "Tinh chế: chỉ cần làm sạch chất chính (có thể dùng chất phản ứng tạo thêm chất chính như dùng $\\ce{Na2CO3}$ tinh chế $\\ce{NaCl}$). Tách chất: phải thu lại ĐẦY ĐỦ từng chất riêng biệt.",
        pitfalls: "Tách $\\ce{C2H4}$ khỏi $\\ce{CH4}$ bằng $\\ce{Br2}$ nhưng không tái tạo lại được $\\ce{C2H4}$ (phải dùng bột Zn đun nóng khử $\\ce{C2H4Br2}$ nếu đề yêu cầu tách cả 2!)."
      },
      {
        name: "Buổi 3: Luyện đề HSG chuyên đề Nhận biết – Tinh chế – Tách chất"
      }
    ]
  },
  lecture: [
    {
      title: "1. Nguyên tắc vàng Nhận biết, Tinh chế & Tách chất",
      content: `
<ul>
  <li><strong>Nhận biết không dùng thuốc thử ngoài:</strong> Lập ma trận $n \\times n$ cho từng cặp chất tác dụng với nhau, đếm số hiện tượng (kết tủa, bay hơi, hòa tan kết tủa).</li>
  <li><strong>Tinh chế chất A lẫn tạp chất B:</strong> Chọn thuốc thử tác dụng với B tạo kết tủa hoặc bay hơi (lọc/đun đuổi đi), hoặc biến B thành chính A.</li>
  <li><strong>Tách hỗn hợp A + B:</strong> Chuyển A thành dạng dễ tách (kết tủa hoặc muối tan), tách riêng B, rồi <strong>tái tạo lại A</strong> về đúng trạng thái ban đầu.</li>
</ul>`,
      example: "Tinh chế khí CO₂ có lẫn khí HCl và hơi nước.\nGiải: Dẫn qua dung dịch NaHCO₃ bão hòa dư (giữ HCl tạo thêm CO₂), sau đó dẫn qua bình H₂SO₄ đặc (hút hơi nước).",
      checkpoint: {
        question: "Để loại bỏ tạp chất CuSO₄ có lẫn trong dung dịch FeSO₄, ta dùng lượng dư chất nào sau đây rồi lọc?",
        options: ["A. Bột Zn", "B. Bột Fe", "C. Dung dịch NaOH", "D. Bột Mg"],
        answer: 1,
        explanation: "Fe + CuSO₄ → FeSO₄ + Cu↓ (vừa loại Cu²⁺ vừa tạo thêm FeSO₄, không đưa ion lạ vào)."
      }
    }
  ],
  questions: [
    { id: "w64_q1", num: 1, tier: "basic", type: "mcq", points: 1, prompt: "Để phân biệt 2 dung dịch $\\ce{Na2SO4}$ và $\\ce{NaCl}$, ta dùng thuốc thử là:", options: ["A. Quỳ tím", "B. Dung dịch $\\ce{BaCl2}$", "C. Dung dịch NaOH", "D. Dung dịch HCl"], answer: 1, solution: "$\\ce{BaCl2}$ tạo kết tủa trắng $\\ce{BaSO4}$ với $\\ce{Na2SO4}$." },
    { id: "w64_q2", num: 2, tier: "basic", type: "mcq", points: 1, prompt: "Để phân biệt 2 chất lỏng không màu là ethylic alcohol và acetic acid, thuốc thử nhanh nhất là:", options: ["A. Kim loại Na", "B. Quỳ tím", "C. Nước cất", "D. Dung dịch $\\ce{Br2}$"], answer: 1, solution: "Acetic acid làm quỳ tím hóa đỏ." },
    { id: "w64_q3", num: 3, tier: "basic", type: "mcq", points: 1, prompt: "Để loại bỏ khí $\\ce{CO2}$ có lẫn trong khí $\\ce{O2}$, ta dẫn hỗn hợp qua bình đựng lượng dư dung dịch nào?", options: ["A. $\\ce{H2SO4}$ loãng", "B. $\\ce{Ca(OH)2}$", "C. $\\ce{NaCl}$", "D. $\\ce{HCl}$"], answer: 1, solution: "$\\ce{Ca(OH)2}$ hấp thụ $\\ce{CO2}$, không hấp thụ $\\ce{O2}$." },
    { id: "w64_q4", num: 4, tier: "basic", type: "mcq", points: 1, prompt: "Tách dầu ăn bị lẫn vào nước bằng dụng cụ nào sau đây?", options: ["A. Giấy lọc", "B. Phễu chiết", "C. Đèn cồn cô cạn", "D. Nam châm"], answer: 1, solution: "Dầu ăn nhẹ hơn và không tan trong nước, dùng phễu chiết." },
    { id: "w64_q5", num: 5, tier: "basic", type: "mcq", points: 1, prompt: "Để nhận biết dung dịch glucose và dung dịch hồ tinh bột, ta dùng:", options: ["A. Dung dịch $\\ce{I2}$ hoặc $\\ce{AgNO3/NH3}$", "B. Quỳ tím", "C. Dung dịch NaCl", "D. Đá vôi"], answer: 0, solution: "Hồ tinh bột tạo màu xanh tím với $\\ce{I2}$; glucose tráng bạc với $\\ce{AgNO3/NH3}$." },
    { id: "w64_q6", num: 6, tier: "basic", type: "mcq", points: 1, prompt: "Để tách riêng bột $\\ce{Fe}$ bị trộn lẫn với bột $\\ce{Al}$, cách vật lý nhanh nhất là:", options: ["A. Hòa tan vào nước", "B. Dùng nam châm hút bột Fe", "C. Đun nóng chảy", "D. Dùng phễu chiết"], answer: 1, solution: "Fe có từ tính bị nam châm hút, Al thì không." },
    { id: "w64_q7", num: 7, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Dùng dung dịch HCl dư có thể loại bỏ bột Fe lẫn trong bột Cu.", answer: true },
      { text: "Dùng dung dịch NaOH dư có thể loại bỏ bột Cu lẫn trong bột Al.", answer: false },
      { text: "Dùng dung dịch Br₂ dư có thể làm sạch khí CH₄ có lẫn C₂H₄.", answer: true },
      { text: "Muốn nhận biết 3 khí CO₂, CH₄, C₂H₄ chỉ cần dùng nước vôi trong và dung dịch Br₂.", answer: true }
    ], solution: "b) Sai: $\\ce{NaOH}$ hòa tan $\\ce{Al}$ làm mất chất cần tinh chế!" },
    { id: "w64_q8", num: 8, tier: "basic", type: "true_false", points: 1, prompt: "Xét tính Đúng/Sai:", statements: [
      { text: "Dùng AgNO₃ có thể phân biệt được dung dịch NaCl và dung dịch NaNO₃.", answer: true },
      { text: "Có thể dùng quỳ tím phân biệt 3 dung dịch: HCl, NaOH, NaCl.", answer: true },
      { text: "Dùng dung dịch H₂SO₄ loãng có thể phân biệt BaCl₂ và Na₂CO₃.", answer: true },
      { text: "Để làm sạch khí H₂ có lẫn hơi nước, ta dẫn qua dung dịch NaOH loãng.", answer: false }
    ], solution: "d) Sai: dung dịch NaOH loãng chứa nước không hút ẩm được." },
    { id: "w64_q9", num: 9, tier: "basic", type: "short_answer", points: 1, prompt: "Cho 4 dung dịch: $\\ce{HCl, NaOH, Ba(OH)2, NaCl}$. Nếu chỉ dùng quỳ tím thì nhận biết trực tiếp được ngay bao nhiêu dung dịch (trước khi cho tác dụng chéo)?", answer: "2", tolerance: 0, solution: "Nhận trực tiếp được $\\ce{HCl}$ (đỏ) và $\\ce{NaCl}$ (tím); còn $\\ce{NaOH, Ba(OH)2}$ đều hóa xanh." },
    { id: "w64_q10", num: 10, tier: "basic", type: "short_answer", points: 1, prompt: "Để phân biệt 3 chất rắn màu trắng: $\\ce{CaO, Na2O, P2O5}$, ta dùng nước và quỳ tím. Có bao nhiêu chất làm quỳ tím hóa xanh?", answer: "2", tolerance: 0, solution: "$\\ce{CaO}$ và $\\ce{Na2O}$ tạo dung dịch base làm quỳ tím hóa xanh." },
    { id: "w64_q11", num: 11, tier: "advanced", type: "mcq", points: 1, prompt: "Chỉ dùng dung dịch $\\ce{H2SO4}$ loãng có thể nhận biết được tối đa bao nhiêu chất rắn sau đây: $\\ce{BaCl2, Na2CO3, Al, Cu}$?", options: ["A. 2", "B. 3", "C. 4", "D. 1"], answer: 2, solution: "$\\ce{BaCl2}$ (kết tủa trắng), $\\ce{Na2CO3}$ (khí không màu không mùi $\\ce{CO2}$), $\\ce{Al}$ (khí cháy được $\\ce{H2}$ và tan), $\\ce{Cu}$ (không tan) $\\Rightarrow$ cả 4 chất." },
    { id: "w64_q12", num: 12, tier: "advanced", type: "mcq", points: 1, prompt: "Chỉ dùng một hóa chất duy nhất là dung dịch $\\ce{Ba(OH)2}$, có thể phân biệt được các dung dịch muối nào sau đây: $\\ce{NH4Cl, (NH4)2SO4, FeCl3, MgCl2}$?", options: ["A. Chỉ 2 chất", "B. Chỉ 3 chất", "C. Cả 4 chất", "D. Không phân biệt được chất nào"], answer: 2, solution: "$\\ce{NH4Cl}$ (chỉ khí mùi khai $\\ce{NH3}$), $\\ce{(NH4)2SO4}$ (khí $\\ce{NH3}$ + kết tủa trắng $\\ce{BaSO4}$), $\\ce{FeCl3}$ (kết tủa nâu đỏ), $\\ce{MgCl2}$ (kết tủa trắng không khí)." },
    { id: "w64_q13", num: 13, tier: "advanced", type: "mcq", points: 1, prompt: "Để tách riêng hỗn hợp 2 chất lỏng tan vào nhau là ethylic alcohol (sôi ở $78,3^\\circ\\text{C}$) và nước (sôi ở $100^\\circ\\text{C}$), người ta dùng phương pháp:", options: ["A. Lọc", "B. Chiết", "C. Chưng cất phân đoạn", "D. Kết tinh"], answer: 2, solution: "Chưng cất phân đoạn dựa vào sự khác nhau về nhiệt độ sôi." },
    { id: "w64_q14", num: 14, tier: "advanced", type: "short_answer", points: 1, prompt: "Có 3 chất lỏng: ethyl acetate, acetic acid, ethylic alcohol. Chỉ dùng dung dịch $\\ce{Na2CO3}$, có thể nhận biết được cả 3 chất không? (Trả lời `1` nếu Có, `0` nếu Không).", answer: "1", tolerance: 0, solution: "Có: sủi bọt khí là acetic acid; tan hoàn toàn không khí là ethylic alcohol; tách lớp nổi lên trên là ethyl acetate." },
    { id: "w64_q15", num: 15, tier: "advanced", type: "short_answer", points: 1, prompt: "Muốn loại bỏ tạp chất $\\ce{FeCl2}$ có lẫn trong dung dịch $\\ce{FeCl3}$, ta sục khí nào dư vào dung dịch?", answer: "Cl2", tolerance: 0, solution: "$2\\ce{FeCl2 + Cl2 -> 2FeCl3}$." },
    { id: "w64_q16", num: 16, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Chỉ dùng thêm một thuốc thử duy nhất, hãy nhận biết 5 dung dịch mất nhãn sau: $\\ce{H2SO4, BaCl2, Na2CO3, MgCl2, KNO3}$.", solution: "Dùng quỳ tím:\n- Hóa đỏ: $\\ce{H2SO4}$.\n- Hóa xanh: $\\ce{Na2CO3}$ (do thủy phân kiềm).\n- Không đổi màu: $\\ce{BaCl2, MgCl2, KNO3}$.\nLấy $\\ce{H2SO4}$ nhỏ vào 3 dung dịch còn lại: tạo kết tủa trắng là $\\ce{BaCl2}$. Lấy $\\ce{Na2CO3}$ nhỏ vào 2 dung dịch còn lại: tạo kết tủa trắng là $\\ce{MgCl2}$, không hiện tượng là $\\ce{KNO3}$.", rubric: [
      { step: "Chọn đúng thuốc thử (quỳ tím) nhận $\\ce{H2SO4}$ và $\\ce{Na2CO3}$", points: 0.5 },
      { step: "Dùng $\\ce{H2SO4}$ và $\\ce{Na2CO3}$ phân biệt nốt $\\ce{BaCl2, MgCl2, KNO3}$ kèm PTHH", points: 0.5 }
    ] },
    { id: "w64_q17", num: 17, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Không dùng thêm thuốc thử nào khác, hãy nhận biết 4 dung dịch: $\\ce{Na2CO3, BaCl2, H2SO4, HCl}$.", solution: "Trộn từng đôi một:\n- $\\ce{Na2CO3}$: tạo 1 kết tủa trắng (với $\\ce{BaCl2}$) và 2 lần sủi bọt khí (với $\\ce{H2SO4, HCl}$).\n- $\\ce{BaCl2}$: tạo 2 kết tủa trắng (với $\\ce{Na2CO3, H2SO4}$).\n- $\\ce{H2SO4}$: tạo 1 kết tủa trắng (với $\\ce{BaCl2}$) và 1 lần sủi bọt khí (với $\\ce{Na2CO3}$).\n- $\\ce{HCl}$: chỉ tạo 1 lần sủi bọt khí (với $\\ce{Na2CO3}$).\nMỗi chất có bộ hiện tượng duy nhất nên nhận ra cả 4.", rubric: [
      { step: "Lập bảng tác dụng từng đôi một đầy đủ hiện tượng", points: 0.5 },
      { step: "Kết luận đúng cả 4 dung dịch và viết PTHH", points: 0.5 }
    ] },
    { id: "w64_q18", num: 18, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Bằng phương pháp hóa học, hãy tách riêng hỗn hợp chất rắn gồm $\\ce{BaCO3, MgCO3, NaCl}$ thành 3 chất nguyên chất riêng biệt.", solution: "1) Hòa tan vào nước dư: $\\ce{NaCl}$ tan, lọc tách kết tủa gồm $\\ce{BaCO3, MgCO3}$. Cô cạn nước lọc thu $\\ce{NaCl}$ tinh khiết.\n2) Hòa tan hỗn hợp $\\ce{BaCO3, MgCO3}$ vào $\\ce{HCl}$ dư tạo dung dịch $\\ce{BaCl2, MgCl2}$. Thêm $\\ce{NaOH}$ dư: kết tủa $\\ce{Mg(OH)2}$, lọc lấy kết tủa, hòa tan lại bằng $\\ce{HCl}$ rồi tác dụng $\\ce{Na2CO3}$ (hoặc nung thành $\\ce{MgO}$ rồi cho vào $\\ce{CO2}$ áp suất cao / đơn giản nhất là kết tủa $\\ce{Mg(OH)2} \\rightarrow \\ce{MgCl2} \\xrightarrow{\\ce{Na2CO3}} \\ce{MgCO3}$).\n3) Nước lọc chứa $\\ce{BaCl2}$ và $\\ce{NaOH}$ dư: thêm $\\ce{Na2CO3}$ dư thu kết tủa $\\ce{BaCO3}$ tinh khiết.", rubric: [
      { step: "Tách $\\ce{NaCl}$ bằng hòa tan và cô cạn", points: 0.25 },
      { step: "Tách và tái tạo đúng $\\ce{BaCO3}$ và $\\ce{MgCO3}$", points: 0.75 }
    ] },
    { id: "w64_q19", num: 19, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Trình bày cách phân biệt 4 chất lỏng mất nhãn: ethylic alcohol, acetic acid, dung dịch glucose và dầu thực vật (triolein).", solution: "1) Dùng nước: chất không tan nổi thành lớp trên mặt nước là dầu thực vật.\n2) Dùng quỳ tím với 3 dung dịch còn lại: làm quỳ hóa đỏ là acetic acid.\n3) Dùng $\\ce{AgNO3/NH3}$ đun nhẹ với 2 dung dịch còn lại: xuất hiện lớp bạc sáng là glucose, không hiện tượng là ethylic alcohol.", rubric: [
      { step: "Phân biệt dầu thực vật bằng nước (hoặc $\\ce{Br2}$)", points: 0.25 },
      { step: "Phân biệt acetic acid (quỳ tím), glucose (tráng bạc) và ethylic alcohol", points: 0.75 }
    ] },
    { id: "w64_q20", num: 20, tier: "hsg", type: "essay_hsg", points: 1, prompt: "Hỗn hợp khí X gồm $\\ce{CH4, C2H4, CO2}$. Trình bày phương pháp hóa học thu được riêng biệt từng khí tinh khiết (giữ nguyên lượng ban đầu).", solution: "1) Dẫn hỗn hợp qua dung dịch $\\ce{Ca(OH)2}$ dư: $\\ce{CO2}$ tạo kết tủa $\\ce{CaCO3}$. Lọc lấy $\\ce{CaCO3}$ nung nóng (hoặc tác dụng $\\ce{HCl}$ dư) thu lại khí $\\ce{CO2}$.\n2) Khí còn lại ($\\ce{CH4, C2H4}$) dẫn qua bình đựng dung dịch $\\ce{Br2}$ dư: $\\ce{CH4}$ thoát ra thu riêng.\n3) Lấy sản phẩm $\\ce{C2H4Br2}$ thu được cho tác dụng với bột $\\ce{Zn}$ trong alcohol đun nóng: $\\ce{C2H4Br2 + Zn ->[t^\\circ] C2H4 ^ + ZnBr2}$, thu lại khí $\\ce{C2H4}$.", rubric: [
      { step: "Tách và tái tạo $\\ce{CO2}$ và thu $\\ce{CH4}$", points: 0.5 },
      { step: "Tái tạo $\\ce{C2H4}$ từ $\\ce{C2H4Br2}$ bằng bột $\\ce{Zn}$", points: 0.5 }
    ] }
  ]
};
