import type { QuizQuestion } from '../types'

export const quizQuestions: QuizQuestion[] = [
  // ===== TƯỚI TIÊU LÀ GÌ =====
  {
    id: 'q1',
    tags: ['Cơ bản', 'Hệ thống tưới'],
    difficulty: 'de',
    question: '"Tưới tiêu" là thuật ngữ gồm hai thành phần nào?',
    options: [
      'Tưới (cấp nước) và Tiêu (thoát nước)',
      'Tưới nhỏ giọt và tưới phun mưa',
      'Tưới sáng và tưới chiều',
      'Tưới mặt và tưới ngầm',
    ],
    correctIndex: 0,
    explanation: 'Tưới tiêu bao gồm hai thành phần bổ trợ nhau: tưới (cấp nước khi thiếu) và tiêu (thoát nước dư thừa khi mưa lớn).',
  },
  {
    id: 'q2',
    tags: ['Cơ bản', 'Hệ thống tưới'],
    difficulty: 'trung-binh',
    question: 'Vì sao một hệ thống chỉ giỏi cấp nước nhưng thiếu khả năng thoát nước vẫn có thể gây hại cho cây?',
    options: [
      'Vì cây không cần nước vào mùa mưa',
      'Vì mưa lớn có thể gây úng ngập, ảnh hưởng không kém tình trạng thiếu nước',
      'Vì hệ thống tưới luôn hoạt động song song với hệ thống điện',
      'Vì thoát nước không liên quan đến sức khỏe cây trồng',
    ],
    correctIndex: 1,
    explanation: 'Tưới và tiêu cần được thiết kế đồng thời; thiếu khả năng thoát nước có thể gây úng ngập nghiêm trọng trong mùa mưa.',
  },

  // ===== NƯỚC CỨNG =====
  {
    id: 'q3',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Nước cứng là loại nước có đặc điểm gì?',
    options: [
      'Nhiệt độ thấp bất thường',
      'Hàm lượng ion canxi và magie hòa tan cao',
      'Độ pH luôn bằng 7',
      'Không chứa khoáng chất nào',
    ],
    correctIndex: 1,
    explanation: 'Nước cứng chứa hàm lượng cao các ion canxi và magie, thường có nguồn gốc từ nước ngầm đi qua tầng đá vôi.',
  },
  {
    id: 'q4',
    tags: ['Nước', 'Hệ thống tưới'],
    difficulty: 'trung-binh',
    question: 'Vấn đề phổ biến nhất khi dùng nước cứng cho hệ thống tưới nhỏ giọt là gì?',
    options: [
      'Nước bị đổi màu',
      'Cặn khoáng tích tụ gây tắc nghẽn đầu tưới',
      'Nước bốc hơi nhanh hơn',
      'Cây bị ngộ độc ngay lập tức',
    ],
    correctIndex: 1,
    explanation: 'Ion canxi và magie trong nước cứng kết tủa dần thành cặn, đặc biệt tắc nghẽn tại các đầu tưới nhỏ giọt có tiết diện hẹp.',
  },

  // ===== CHẤT LƯỢNG NƯỚC TƯỚI =====
  {
    id: 'q5',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Chỉ tiêu nào thường dùng để đo gián tiếp độ mặn của nước tưới?',
    options: ['Độ dẫn điện (EC)', 'Nhiệt độ nước', 'Màu sắc nước', 'Áp suất nước'],
    correctIndex: 0,
    explanation: 'Độ mặn của nước tưới thường được đo gián tiếp qua độ dẫn điện (EC), tương tự cách đo EC trong đất.',
  },
  {
    id: 'q6',
    tags: ['Nước'],
    difficulty: 'kho',
    question: 'Vì sao các vấn đề về chất lượng nước tưới thường khó phát hiện sớm?',
    options: [
      'Vì chúng có tính chất tích lũy dần theo thời gian thay vì gây hại ngay lập tức',
      'Vì máy đo chất lượng nước rất đắt',
      'Vì nước tưới không ảnh hưởng đến đất',
      'Vì chỉ xảy ra vào ban đêm',
    ],
    correctIndex: 0,
    explanation: 'Mỗi lần tưới chỉ đưa vào đất một lượng nhỏ yếu tố không mong muốn, nhưng tích lũy qua nhiều năm mới ảnh hưởng rõ rệt.',
  },

  // ===== TƯỚI QUÁ NHIỀU =====
  {
    id: 'q7',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Tưới quá nhiều nước gây hậu quả trực tiếp nào cho bộ rễ cây?',
    options: [
      'Rễ phát triển nhanh hơn bình thường',
      'Thiếu oxy, có thể dẫn đến thối rễ',
      'Rễ chuyển sang màu xanh',
      'Không có ảnh hưởng gì đáng kể',
    ],
    correctIndex: 1,
    explanation: 'Khi đất bão hòa nước, các khoảng trống chứa không khí bị lấp đầy, gây thiếu oxy nghiêm trọng cho rễ, có thể dẫn đến thối rễ.',
  },
  {
    id: 'q8',
    tags: ['Nước'],
    difficulty: 'trung-binh',
    question: 'Vì sao dễ nhầm lẫn giữa cây bị úng nước (thừa nước) và cây thiếu nước?',
    options: [
      'Vì cả hai đều không có biểu hiện gì ra bên ngoài',
      'Vì cả hai đều biểu hiện héo và vàng lá tương tự nhau bên ngoài',
      'Vì chúng chỉ xảy ra ở cùng một loại cây',
      'Vì cả hai đều làm cây phát triển nhanh hơn',
    ],
    correctIndex: 1,
    explanation: 'Biểu hiện bên ngoài của úng rễ do thừa nước thường tương tự thiếu nước, cần kiểm tra độ ẩm đất thực tế để phân biệt chính xác.',
  },

  // ===== CÂY THIẾU NƯỚC =====
  {
    id: 'q9',
    tags: ['Cơ bản', 'Nước', 'Sinh lý thực vật'],
    difficulty: 'de',
    question: 'Phản ứng sinh lý đầu tiên của cây khi bắt đầu thiếu nước nhẹ là gì?',
    options: [
      'Rụng toàn bộ lá ngay lập tức',
      'Đóng bớt khí khổng để giảm thoát hơi nước',
      'Ra hoa sớm hơn',
      'Tăng tốc độ quang hợp',
    ],
    correctIndex: 1,
    explanation: 'Ở giai đoạn thiếu nước nhẹ, cây đóng bớt khí khổng như cơ chế tự bảo vệ, một phản ứng ở cấp tế bào khó quan sát bằng mắt.',
  },
  {
    id: 'q10',
    tags: ['Nước'],
    difficulty: 'trung-binh',
    question: 'Dấu hiệu héo vào giữa trưa nhưng phục hồi hoàn toàn vào buổi tối cho thấy điều gì?',
    options: [
      'Cây đã chết và không thể cứu được',
      'Cây đang thiếu nước ở mức vừa phải, lặp lại theo chu kỳ hằng ngày',
      'Cây hoàn toàn khỏe mạnh, không có vấn đề gì',
      'Cây bị thừa nước nghiêm trọng',
    ],
    correctIndex: 1,
    explanation: 'Đây là dấu hiệu héo thoáng qua — cây thiếu nước vừa phải, dễ bị bỏ sót nếu chỉ kiểm tra vào buổi sáng khi cây đã phục hồi qua đêm.',
  },

  // ===== STRESS NƯỚC =====
  {
    id: 'q11',
    tags: ['Cơ bản', 'Nước', 'Sinh lý thực vật'],
    difficulty: 'de',
    question: 'Stress nước khác với hiện tượng héo ở điểm nào?',
    options: [
      'Stress nước là khái niệm rộng hơn, có thể xảy ra ở mức nhẹ mà chưa biểu hiện héo ra ngoài',
      'Stress nước chỉ xảy ra vào mùa mưa',
      'Héo là nguyên nhân, còn stress nước là hậu quả duy nhất',
      'Hai khái niệm hoàn toàn giống nhau',
    ],
    correctIndex: 0,
    explanation: 'Stress nước bao trùm nhiều mức độ; héo chỉ là biểu hiện bên ngoài dễ quan sát nhất khi stress nước đã nghiêm trọng.',
  },
  {
    id: 'q12',
    tags: ['Nước'],
    difficulty: 'kho',
    question: 'Vì sao độ mặn cao trong đất (EC cao) có thể gây stress nước dù đất vẫn đủ ẩm về thể tích?',
    options: [
      'Vì muối làm đất nóng lên',
      'Vì gây stress thẩm thấu khiến rễ khó hút nước dù nước vẫn hiện diện trong đất',
      'Vì muối làm nước bốc hơi nhanh hơn',
      'Vì EC cao luôn đi kèm với thiếu oxy',
    ],
    correctIndex: 1,
    explanation: 'Stress thẩm thấu do độ mặn cao khiến rễ khó hút nước dù thể tích nước trong đất vẫn bình thường — biểu hiện giống thiếu nước nhưng nguyên nhân khác.',
  },

  // ===== KHẢ NĂNG GIỮ NƯỚC ĐỒNG RUỘNG =====
  {
    id: 'q13',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Khả năng giữ nước đồng ruộng là gì?',
    options: [
      'Lượng nước tối đa đất giữ ổn định sau khi nước dư thừa đã thoát hết do trọng lực',
      'Lượng nước cây cần mỗi ngày',
      'Tốc độ bốc hơi nước từ bề mặt đất',
      'Độ pH của nước tưới',
    ],
    correctIndex: 0,
    explanation: 'Đây là mức ẩm ổn định đạt được sau tưới/mưa, khi lượng nước dư thừa vượt quá khả năng giữ đã thấm xuống tầng sâu hơn.',
  },
  {
    id: 'q14',
    tags: ['Nước'],
    difficulty: 'trung-binh',
    question: 'Khoảng cách giữa khả năng giữ nước đồng ruộng và điểm héo được gọi là gì?',
    options: ['Độ ẩm bão hòa', 'Lượng nước hữu dụng', 'Ngưỡng EC', 'Độ ẩm không khí'],
    correctIndex: 1,
    explanation: 'Lượng nước hữu dụng là phần nước cây thực sự có thể hấp thu, quyết định khoảng thời gian giữa các lần tưới.',
  },

  // ===== ĐIỂM HÉO =====
  {
    id: 'q15',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Điểm héo (điểm héo vĩnh viễn) là gì?',
    options: [
      'Mức ẩm đất mà rễ cây không còn khả năng hút được nước, dù đất vẫn còn một lượng nước nhất định',
      'Thời điểm cây bắt đầu ra hoa',
      'Mức ẩm khi đất hoàn toàn khô, không còn giọt nước nào',
      'Ngưỡng nhiệt độ khiến cây héo',
    ],
    correctIndex: 0,
    explanation: 'Tại điểm héo, lực giữ nước của đất mạnh hơn khả năng hút của rễ, dù đất về mặt vật lý vẫn còn nước.',
  },
  {
    id: 'q16',
    tags: ['Nước'],
    difficulty: 'kho',
    question: 'Vì sao cần thiết lập "ngưỡng tưới an toàn" cao hơn hẳn điểm héo, thay vì chờ gần đến điểm héo mới tưới?',
    options: [
      'Vì ảnh hưởng bất lợi đến cây có thể bắt đầu từ trước khi chạm điểm héo, cần khoảng đệm an toàn',
      'Vì điểm héo thay đổi mỗi ngày',
      'Vì tưới sớm giúp tiết kiệm nước hơn',
      'Vì điểm héo chỉ là khái niệm lý thuyết không áp dụng thực tế',
    ],
    correctIndex: 0,
    explanation: 'Khả năng hút nước của rễ đã suy giảm trước khi chạm điểm héo; ngưỡng tưới an toàn tạo khoảng đệm để tránh cây rơi vào stress nước tích lũy.',
  },

  // ===== ĐỘ ẨM KHÔNG KHÍ =====
  {
    id: 'q17',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Độ ẩm không khí cao kéo dài tạo điều kiện thuận lợi cho điều gì?',
    options: [
      'Nấm bệnh phát triển (ví dụ gỉ sắt, nấm hồng)',
      'Đất trở nên khô hạn hơn',
      'Cây ra hoa nhanh hơn',
      'Giảm nhu cầu dinh dưỡng của cây',
    ],
    correctIndex: 0,
    explanation: 'Bào tử nấm cần bề mặt lá ẩm ướt để nảy mầm; độ ẩm không khí cao kéo dài làm tăng thời gian thuận lợi cho nấm bệnh xâm nhiễm.',
  },
  {
    id: 'q18',
    tags: ['Nước'],
    difficulty: 'trung-binh',
    question: 'Độ ẩm không khí khác với độ ẩm đất như thế nào?',
    options: [
      'Là hai chỉ số giống hệt nhau',
      'Là hai chỉ số mô tả hai môi trường khác nhau, tác động độc lập lên cây',
      'Độ ẩm không khí luôn cao hơn độ ẩm đất',
      'Độ ẩm đất chỉ đo được vào ban đêm',
    ],
    correctIndex: 1,
    explanation: 'Dù cùng liên quan đến nước, độ ẩm không khí và độ ẩm đất mô tả hai môi trường khác nhau và cần được theo dõi riêng biệt.',
  },

  // ===== ĐỘ ẨM ĐẤT =====
  {
    id: 'q19',
    tags: ['Cơ bản', 'Nước'],
    difficulty: 'de',
    question: 'Độ ẩm bão hòa khác gì so với độ ẩm đồng ruộng?',
    options: [
      'Bão hòa là trạng thái tạm thời ngay sau tưới khi mọi khoảng trống đều đầy nước; đồng ruộng là mức ổn định sau khi nước dư đã thoát',
      'Hai khái niệm hoàn toàn giống nhau',
      'Bão hòa luôn thấp hơn đồng ruộng',
      'Độ ẩm đồng ruộng chỉ áp dụng cho đất cát',
    ],
    correctIndex: 0,
    explanation: 'Độ ẩm bão hòa là trạng thái tạm thời; độ ẩm đồng ruộng là mức nước ổn định đất giữ lại được sau khi nước dư thừa đã thoát do trọng lực.',
  },
  {
    id: 'q20',
    tags: ['Nước'],
    difficulty: 'trung-binh',
    question: 'Vì sao chỉ đo độ ẩm ở tầng đất mặt có thể dẫn đến đánh giá sai về nhu cầu tưới?',
    options: [
      'Vì tầng mặt biến đổi nhanh còn tầng sâu (nơi rễ hoạt động) mới phản ánh đúng nhu cầu thực tế',
      'Vì tầng mặt không chứa nước',
      'Vì cảm biến không hoạt động ở tầng mặt',
      'Vì tầng sâu luôn khô hơn tầng mặt',
    ],
    correctIndex: 0,
    explanation: 'Tầng mặt chịu ảnh hưởng nhanh từ mưa nhỏ hay bốc hơi, trong khi tầng sâu nơi rễ trưởng thành hoạt động mới phản ánh đúng tình trạng nước cây có thể tiếp cận.',
  },

  // ===== VAI TRÒ CỦA NƯỚC =====
  {
    id: 'q21',
    tags: ['Cơ bản', 'Nước', 'Sinh lý thực vật'],
    difficulty: 'de',
    question: 'Nước đóng vai trò gì trong quá trình quang hợp?',
    options: [
      'Là một trong hai nguyên liệu đầu vào (cùng khí carbonic) để tổng hợp chất hữu cơ',
      'Chỉ có vai trò làm mát cây, không liên quan quang hợp',
      'Ngăn cản quá trình quang hợp diễn ra',
      'Chỉ cần thiết vào ban đêm',
    ],
    correctIndex: 0,
    explanation: 'Nước là nguyên liệu thiết yếu của quang hợp cùng với CO2; thiếu nước còn khiến khí khổng đóng lại, càng làm giảm lượng CO2 hấp thu.',
  },
  {
    id: 'q22',
    tags: ['Nước', 'Sinh lý thực vật'],
    difficulty: 'trung-binh',
    question: 'Cây điều hòa nhiệt độ cho các mô của mình chủ yếu qua cơ chế nào liên quan đến nước?',
    options: [
      'Hấp thu nước lạnh từ đất',
      'Thoát hơi nước qua khí khổng trên lá, tương tự cơ chế đổ mồ hôi',
      'Rụng lá để giảm nhiệt',
      'Ngừng hoàn toàn hoạt động sinh lý khi trời nóng',
    ],
    correctIndex: 1,
    explanation: 'Quá trình thoát hơi nước qua khí khổng hấp thụ nhiệt, giúp làm mát mô lá, tương tự cơ chế đổ mồ hôi ở động vật.',
  },

  // ===== BÓN PHÂN CÂN ĐỐI =====
  {
    id: 'q23',
    tags: ['Cơ bản', 'Dinh dưỡng cây trồng'],
    difficulty: 'de',
    question: 'Bón phân cân đối nghĩa là gì?',
    options: [
      'Bón tất cả các loại phân với số lượng bằng nhau',
      'Cung cấp dinh dưỡng theo tỷ lệ phù hợp giữa các nguyên tố, không chỉ đủ số lượng tuyệt đối từng chất',
      'Chỉ bón một loại phân duy nhất cho cả vụ',
      'Bón phân càng nhiều càng tốt',
    ],
    correctIndex: 1,
    explanation: 'Cân đối không có nghĩa các chất bằng nhau, mà là tỷ lệ giữa chúng phù hợp với nhu cầu sinh lý và giai đoạn sinh trưởng của cây.',
  },
  {
    id: 'q24',
    tags: ['Dinh dưỡng cây trồng'],
    difficulty: 'kho',
    question: 'Vì sao bón kali quá cao có thể gây biểu hiện thiếu magie dù đất vốn đủ magie?',
    options: [
      'Vì kali và magie cạnh tranh vị trí hấp thu tại rễ (quan hệ đối kháng ion)',
      'Vì kali phá hủy magie trong đất',
      'Vì magie chỉ hòa tan khi không có kali',
      'Vì kali làm đất mất hoàn toàn magie',
    ],
    correctIndex: 0,
    explanation: 'Nồng độ kali cao có thể ức chế khả năng hấp thu magie qua cơ chế cạnh tranh ion tại rễ, gây thiếu hụt gián tiếp dù đất không thiếu magie.',
  },
  {
    id: 'q25',
    tags: ['Dinh dưỡng cây trồng'],
    difficulty: 'trung-binh',
    question: 'Phương pháp nào hiệu quả nhất để phát hiện tình trạng mất cân đối dinh dưỡng ở cây?',
    options: [
      'Phân tích mô lá để so sánh tỷ lệ các nguyên tố cây đã hấp thu',
      'Chỉ quan sát màu đất bằng mắt thường',
      'Đo nhiệt độ không khí',
      'Đếm số lá trên cây',
    ],
    correctIndex: 0,
    explanation: 'Phân tích mô lá phản ánh trực tiếp những gì cây đã thực sự hấp thu, cho phép so sánh tỷ lệ tương đối giữa các nguyên tố.',
  },
]

export function getQuestionsByTag(tag: string) {
  return quizQuestions.filter((q) => q.tags.includes(tag))
}
