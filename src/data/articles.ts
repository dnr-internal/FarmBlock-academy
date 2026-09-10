import type { Article } from '../types'

export const articles: Article[] = [
  // ===== TRỒNG TRỌT =====
  {
    slug: 'dat-va-dinh-duong-cay-trong',
    categoryId: 'trong-trot',
    title: 'Đất và dinh dưỡng cây trồng: nền tảng của mọi mùa vụ',
    summary:
      'Hiểu về cấu trúc đất, độ pH và ba nhóm dinh dưỡng đa lượng (N-P-K) giúp nông dân bón phân đúng, đủ và tiết kiệm.',
    readMinutes: 4,
    content: [
      'Đất không chỉ là giá thể giữ cây đứng vững mà còn là kho chứa nước, không khí và dinh dưỡng. Một loại đất tốt cần có cấu trúc tơi xốp, thoát nước tốt nhưng vẫn giữ được độ ẩm cần thiết cho rễ phát triển.',
      'Độ pH của đất (thang đo từ 0-14) quyết định khả năng cây hấp thụ dinh dưỡng. Phần lớn cây trồng phát triển tốt nhất ở pH 5,5-7,0. Đất quá chua (pH thấp) hoặc quá kiềm (pH cao) đều khiến rễ cây khó hấp thu một số chất dù đất có đủ dinh dưỡng.',
      'Ba nguyên tố đa lượng quan trọng nhất là Đạm (N) giúp phát triển thân lá, Lân (P) thúc đẩy bộ rễ và ra hoa kết trái, Kali (K) tăng sức đề kháng và chất lượng nông sản. Ngoài ra cây còn cần các trung và vi lượng như Canxi, Magie, Kẽm, Bo với lượng nhỏ nhưng không thể thiếu.',
      'Nguyên tắc bón phân "đúng loại - đúng lúc - đúng liều - đúng cách" giúp tránh lãng phí và ô nhiễm môi trường do dư thừa phân bón. Xét nghiệm đất định kỳ là cách khoa học nhất để biết đất đang thiếu hay thừa chất gì trước khi quyết định bón phân.',
    ],
  },
  {
    slug: 'lich-thoi-vu-va-luan-canh',
    categoryId: 'trong-trot',
    title: 'Lịch thời vụ và luân canh cây trồng',
    summary:
      'Luân canh hợp lý giúp cải tạo đất, ngắt vòng đời sâu bệnh và tăng năng suất bền vững qua nhiều mùa vụ.',
    readMinutes: 3,
    content: [
      'Thời vụ là khoảng thời gian gieo trồng phù hợp nhất với điều kiện khí hậu, ánh sáng và lượng mưa của từng vùng để cây phát triển tối ưu. Gieo trồng sai thời vụ là nguyên nhân phổ biến khiến năng suất giảm dù chăm sóc kỹ.',
      'Luân canh là việc trồng luân phiên các loại cây khác nhau trên cùng một diện tích qua các vụ, ví dụ luân canh lúa với cây họ đậu. Cây họ đậu có vi khuẩn cố định đạm ở rễ, giúp cải tạo đất tự nhiên mà không cần bón nhiều phân hóa học.',
      'Luân canh còn giúp cắt đứt vòng đời của sâu bệnh và cỏ dại vốn thường thích nghi với một loại cây cụ thể. Khi đổi cây trồng, mầm bệnh trong đất mất nguồn ký chủ và giảm dần theo thời gian, hạn chế việc phải dùng thuốc bảo vệ thực vật.',
      'Xen canh (trồng nhiều loại cây cùng lúc trên một diện tích) cũng là kỹ thuật hỗ trợ luân canh, tận dụng tối đa ánh sáng và không gian, đồng thời tạo hệ sinh thái đa dạng giúp kiểm soát sâu hại tự nhiên.',
    ],
  },

  // ===== CHĂN NUÔI =====
  {
    slug: 'nguyen-tac-chan-nuoi-an-toan-sinh-hoc',
    categoryId: 'chan-nuoi',
    title: 'An toàn sinh học trong chăn nuôi',
    summary:
      'An toàn sinh học là tuyến phòng thủ đầu tiên giúp trại chăn nuôi ngăn ngừa dịch bệnh lây lan và bảo vệ đàn vật nuôi.',
    readMinutes: 4,
    content: [
      'An toàn sinh học (biosecurity) là tập hợp các biện pháp nhằm ngăn chặn mầm bệnh xâm nhập, tồn tại và lây lan trong trại chăn nuôi. Đây là giải pháp phòng bệnh chủ động, hiệu quả và tiết kiệm chi phí hơn nhiều so với điều trị khi dịch đã bùng phát.',
      'Ba nguyên tắc cốt lõi gồm: cách ly (kiểm soát ra vào trại, khu chăn nuôi riêng biệt theo lứa tuổi), kiểm soát lưu thông (hạn chế người, xe, dụng cụ di chuyển tự do giữa các khu), và vệ sinh khử trùng (chuồng trại, dụng cụ, phương tiện vận chuyển).',
      'Quy trình "cùng vào cùng ra" (all-in all-out) - nuôi và xuất chuồng theo lứa đồng loạt thay vì nuôi gối lứa liên tục - giúp có thời gian trống chuồng để vệ sinh triệt để, cắt đứt chu kỳ lây nhiễm giữa các lứa nuôi.',
      'Tiêm phòng vắc-xin đầy đủ theo lịch, kết hợp theo dõi sức khỏe đàn vật nuôi hàng ngày để phát hiện sớm dấu hiệu bất thường, là hai yếu tố bổ trợ quan trọng giúp an toàn sinh học phát huy hiệu quả tối đa.',
    ],
  },
  {
    slug: 'dinh-duong-vat-nuoi-theo-giai-doan',
    categoryId: 'chan-nuoi',
    title: 'Dinh dưỡng vật nuôi theo từng giai đoạn phát triển',
    summary:
      'Nhu cầu dinh dưỡng của vật nuôi thay đổi theo độ tuổi và mục đích nuôi, đòi hỏi khẩu phần ăn được điều chỉnh linh hoạt.',
    readMinutes: 3,
    content: [
      'Vật nuôi ở giai đoạn con non cần khẩu phần giàu đạm và dễ tiêu hóa để phát triển khung xương và cơ bắp. Giai đoạn sinh trưởng cần cân đối năng lượng - đạm để tối ưu tốc độ tăng trọng, trong khi giai đoạn sinh sản cần bổ sung khoáng chất và vitamin để đảm bảo khả năng sinh sản.',
      'Ba nhóm chất dinh dưỡng chính trong khẩu phần là năng lượng (tinh bột, chất béo), đạm (protein từ đậu tương, bột cá) và khoáng - vitamin (canxi, phốt pho, vitamin A, D, E). Thiếu hụt bất kỳ nhóm nào cũng ảnh hưởng đến tăng trưởng và sức đề kháng.',
      'Nước sạch thường bị xem nhẹ nhưng lại là dưỡng chất quan trọng nhất - chiếm 60-70% trọng lượng cơ thể vật nuôi và tham gia mọi quá trình trao đổi chất. Thiếu nước làm giảm lượng thức ăn tiêu thụ và năng suất rõ rệt.',
      'Công nghệ cho ăn tự động theo khẩu phần chính xác (precision feeding) hiện được áp dụng ở các trại chăn nuôi công nghiệp, giúp giảm lãng phí thức ăn - vốn chiếm 60-70% chi phí chăn nuôi - đồng thời tối ưu tốc độ tăng trưởng.',
    ],
  },

  // ===== AGTECH (Công nghệ cao) =====
  {
    slug: 'iot-va-cam-bien-nong-nghiep',
    categoryId: 'agtech',
    title: 'IoT và cảm biến trong nông nghiệp thông minh',
    summary:
      'Mạng lưới cảm biến IoT giúp nông dân "nhìn thấy" tình trạng đất, cây trồng và thời tiết theo thời gian thực từ xa.',
    readMinutes: 4,
    content: [
      'IoT (Internet of Things - Internet vạn vật) trong nông nghiệp là mạng lưới các cảm biến và thiết bị kết nối internet, thu thập dữ liệu về độ ẩm đất, nhiệt độ, ánh sáng, độ pH, và truyền về hệ thống trung tâm để phân tích theo thời gian thực.',
      'Cảm biến độ ẩm đất giúp hệ thống tưới tự động chỉ tưới khi thực sự cần thiết, có thể tiết kiệm 30-50% lượng nước so với tưới theo lịch cố định. Trạm thời tiết mini gắn tại ruộng cung cấp dữ liệu chính xác hơn dự báo thời tiết chung của cả vùng.',
      'Trong chăn nuôi, vòng đeo hoặc chip cảm biến gắn trên vật nuôi có thể theo dõi thân nhiệt, nhịp hoạt động để phát hiện sớm dấu hiệu bệnh hoặc động dục, giúp người chăn nuôi can thiệp kịp thời mà không cần quan sát thủ công liên tục.',
      'Dữ liệu từ IoT thường được hiển thị qua ứng dụng di động hoặc bảng điều khiển (dashboard), cho phép nông dân giám sát và điều khiển trang trại từ xa - ví dụ bật/tắt hệ thống tưới ngay trên điện thoại dù đang ở xa nông trại.',
    ],
  },
  {
    slug: 'nha-kinh-thong-minh-va-thuy-canh',
    categoryId: 'agtech',
    title: 'Nhà kính thông minh, thủy canh và khí canh',
    summary:
      'Canh tác trong môi trường kiểm soát giúp trồng rau sạch quanh năm, không phụ thuộc thời tiết và tiết kiệm diện tích, nước.',
    readMinutes: 4,
    content: [
      'Nhà kính thông minh (smart greenhouse) sử dụng hệ thống cảm biến và điều khiển tự động để duy trì nhiệt độ, độ ẩm, ánh sáng và nồng độ CO2 ở mức tối ưu cho cây trồng, không phụ thuộc vào điều kiện thời tiết bên ngoài.',
      'Thủy canh (hydroponics) là kỹ thuật trồng cây trong dung dịch dinh dưỡng thay vì đất, giúp cây hấp thụ dinh dưỡng trực tiếp và hiệu quả hơn. Thủy canh tiết kiệm tới 90% lượng nước so với canh tác truyền thống vì nước được tuần hoàn tái sử dụng.',
      'Khí canh (aeroponics) là kỹ thuật tiên tiến hơn, trong đó rễ cây được phun sương dung dịch dinh dưỡng trong không khí thay vì ngâm trong nước. Phương pháp này tiết kiệm nước nhiều nhất và giúp rễ hấp thụ oxy tốt hơn, thúc đẩy cây phát triển nhanh.',
      'Mô hình canh tác theo tầng (vertical farming) kết hợp thủy canh/khí canh với đèn LED chuyên dụng cho phép trồng nhiều lớp cây chồng lên nhau trong nhà, tối ưu diện tích đặc biệt phù hợp với nông nghiệp đô thị nơi đất đai khan hiếm.',
    ],
  },
  {
    slug: 'drone-va-robot-nong-nghiep',
    categoryId: 'agtech',
    title: 'Drone và robot trong sản xuất nông nghiệp',
    summary:
      'Máy bay không người lái và robot nông nghiệp đang thay đổi cách nông dân giám sát ruộng đồng, phun thuốc và thu hoạch.',
    readMinutes: 3,
    content: [
      'Drone (máy bay không người lái) gắn camera đa phổ có thể bay khảo sát cả cánh đồng rộng lớn chỉ trong vài phút, chụp ảnh giúp phát hiện sớm vùng cây bị sâu bệnh, thiếu nước hoặc thiếu dinh dưỡng mà mắt thường khó nhận ra.',
      'Drone phun thuốc bảo vệ thực vật và phân bón có thể phun chính xác theo bản đồ đã lập trình, giảm lượng thuốc sử dụng, giảm tiếp xúc trực tiếp của người lao động với hóa chất, và làm việc nhanh hơn nhiều lần so với phun thủ công.',
      'Robot nông nghiệp mặt đất được ứng dụng để làm cỏ tự động bằng camera nhận diện, thu hoạch trái cây (như dâu tây, cà chua) bằng cánh tay robot, hoặc vắt sữa bò tự động - giúp giảm phụ thuộc vào lao động thủ công vốn ngày càng khan hiếm.',
      'Thách thức lớn nhất khi ứng dụng drone và robot là chi phí đầu tư ban đầu cao và cần hạ tầng dữ liệu, kết nối internet ổn định, do đó các mô hình hợp tác xã dùng chung thiết bị đang là xu hướng để nông dân nhỏ lẻ tiếp cận công nghệ này.',
    ],
  },

  // ===== DỮ LIỆU & AI =====
  {
    slug: 'nong-nghiep-chinh-xac-la-gi',
    categoryId: 'du-lieu-ai',
    title: 'Nông nghiệp chính xác (Precision Agriculture) là gì?',
    summary:
      'Nông nghiệp chính xác dùng dữ liệu và công nghệ định vị để đưa ra quyết định canh tác đúng vị trí, đúng thời điểm, đúng liều lượng.',
    readMinutes: 4,
    content: [
      'Nông nghiệp chính xác là phương pháp quản lý canh tác dựa trên việc quan sát, đo lường và phản hồi sự biến động theo từng vị trí cụ thể trong ruộng, thay vì áp dụng một quy trình đồng nhất cho cả cánh đồng.',
      'Công nghệ định vị GPS/GNSS kết hợp bản đồ năng suất giúp xác định chính xác những vùng đất cho năng suất cao hay thấp, từ đó điều chỉnh lượng giống, phân bón, nước tưới phù hợp cho từng khu vực nhỏ thay vì rải đều toàn bộ ruộng.',
      'Máy móc nông nghiệp hiện đại có thể tự động lái theo hàng bằng GPS với sai số chỉ vài centimet, giảm chồng lấn hoặc bỏ sót khi gieo hạt, phun thuốc, giúp tiết kiệm đáng kể vật tư đầu vào trên diện tích lớn.',
      'Lợi ích cốt lõi của nông nghiệp chính xác là "đúng thứ - đúng chỗ - đúng lúc - đúng lượng", giúp tăng năng suất, giảm chi phí vật tư và giảm tác động tiêu cực đến môi trường như dư thừa phân bón chảy tràn ra nguồn nước.',
    ],
  },
  {
    slug: 'ai-va-du-lieu-lon-trong-nong-nghiep',
    categoryId: 'du-lieu-ai',
    title: 'Trí tuệ nhân tạo và dữ liệu lớn trong nông nghiệp',
    summary:
      'AI giúp phân tích lượng dữ liệu khổng lồ từ cảm biến, vệ tinh và lịch sử mùa vụ để dự báo và hỗ trợ ra quyết định canh tác.',
    readMinutes: 4,
    content: [
      'Dữ liệu lớn (big data) trong nông nghiệp đến từ nhiều nguồn: cảm biến IoT tại ruộng, ảnh vệ tinh, dữ liệu thời tiết, lịch sử mùa vụ và cả dữ liệu thị trường giá cả nông sản. Riêng lẻ mỗi nguồn dữ liệu ít giá trị, nhưng khi kết hợp lại sẽ tạo ra thông tin hữu ích.',
      'Mô hình học máy (machine learning) có thể học từ dữ liệu lịch sử để dự báo năng suất mùa vụ, dự đoán nguy cơ bùng phát sâu bệnh dựa trên điều kiện thời tiết, hoặc gợi ý thời điểm thu hoạch tối ưu để đạt chất lượng nông sản cao nhất.',
      'Thị giác máy tính (computer vision) kết hợp camera hoặc ảnh drone có thể tự động đếm số lượng trái cây trên cây, phát hiện lá bị bệnh qua màu sắc và hình dạng bất thường, hoặc phân loại nông sản theo kích cỡ, độ chín khi đóng gói.',
      'Ứng dụng AI phổ biến với nông dân nhỏ lẻ nhất hiện nay là các app nhận diện sâu bệnh qua ảnh chụp bằng điện thoại - chỉ cần chụp ảnh lá cây, AI sẽ gợi ý loại bệnh và cách xử lý phù hợp trong vài giây.',
    ],
  },

  // ===== BLOCKCHAIN =====
  {
    slug: 'blockchain-la-gi',
    categoryId: 'blockchain',
    title: 'Blockchain là gì và vì sao phù hợp với nông nghiệp?',
    summary:
      'Blockchain là công nghệ sổ cái phân tán, ghi lại dữ liệu theo cách không thể sửa đổi - rất phù hợp để minh bạch hóa chuỗi cung ứng nông sản.',
    readMinutes: 4,
    content: [
      'Blockchain (chuỗi khối) là một dạng sổ cái điện tử phân tán, trong đó dữ liệu được lưu trữ thành từng "khối" liên kết với nhau theo trình tự thời gian và được sao chép trên nhiều máy tính (node) thay vì tập trung tại một nơi duy nhất.',
      'Đặc điểm quan trọng nhất của blockchain là tính bất biến: một khi dữ liệu đã được ghi vào chuỗi và xác nhận, gần như không thể chỉnh sửa hay xóa bỏ mà không bị phát hiện, vì mọi node trong mạng đều lưu bản sao và đối chiếu với nhau.',
      'Trong nông nghiệp, đặc tính này giúp giải quyết bài toán lòng tin: mỗi công đoạn từ gieo trồng, thu hoạch, chế biến, vận chuyển đến bán lẻ đều có thể được ghi lại thành một "khối" dữ liệu không thể giả mạo, tạo thành hồ sơ minh bạch toàn trình.',
      'Khác với cơ sở dữ liệu truyền thống do một bên (doanh nghiệp hoặc cơ quan quản lý) toàn quyền kiểm soát và có thể chỉnh sửa, dữ liệu trên blockchain được đồng thuận xác nhận bởi nhiều bên tham gia, giúp tăng độ tin cậy giữa nông dân, nhà phân phối và người tiêu dùng vốn không quen biết nhau.',
    ],
  },
  {
    slug: 'truy-xuat-nguon-goc-nong-san',
    categoryId: 'blockchain',
    title: 'Truy xuất nguồn gốc nông sản bằng blockchain',
    summary:
      'Từ mã QR trên bao bì, người tiêu dùng có thể xem toàn bộ hành trình nông sản - từ ruộng đồng đến tay mình - nhờ blockchain.',
    readMinutes: 3,
    content: [
      'Truy xuất nguồn gốc (traceability) là khả năng theo dõi và xác minh lịch sử, vị trí và hành trình di chuyển của một sản phẩm qua từng công đoạn trong chuỗi cung ứng, từ nguyên liệu đầu vào đến sản phẩm cuối cùng đến tay người tiêu dùng.',
      'Quy trình phổ biến: nông dân ghi nhận thông tin gieo trồng, ngày bón phân, phun thuốc; đơn vị thu mua ghi nhận ngày thu hoạch, kết quả kiểm định; đơn vị vận chuyển ghi nhận điều kiện bảo quản, nhiệt độ; nhà bán lẻ ghi nhận ngày nhập kho. Mỗi bước tạo ra một "khối" dữ liệu gắn với mã định danh sản phẩm.',
      'Người tiêu dùng chỉ cần quét mã QR in trên bao bì bằng điện thoại là có thể xem toàn bộ "lý lịch" của sản phẩm: nông trại nào sản xuất, ngày thu hoạch, có qua kiểm định an toàn thực phẩm hay không, quá trình vận chuyển ra sao.',
      'Ngoài lợi ích về niềm tin người tiêu dùng, hệ thống này còn giúp cơ quan quản lý khoanh vùng và xử lý nhanh khi phát hiện sự cố an toàn thực phẩm (ví dụ thu hồi đúng lô hàng bị nhiễm khuẩn) thay vì phải thu hồi toàn bộ sản phẩm trên thị trường như trước đây.',
    ],
  },

  // ===== BỀN VỮNG =====
  {
    slug: 'nong-nghiep-tuan-hoan',
    categoryId: 'ben-vung',
    title: 'Nông nghiệp tuần hoàn: biến phụ phẩm thành tài nguyên',
    summary:
      'Mô hình nông nghiệp tuần hoàn tận dụng phụ phẩm của công đoạn này làm đầu vào cho công đoạn khác, giảm rác thải và chi phí.',
    readMinutes: 3,
    content: [
      'Nông nghiệp tuần hoàn (circular agriculture) là mô hình sản xuất trong đó chất thải và phụ phẩm của một quy trình được tái sử dụng làm nguyên liệu đầu vào cho quy trình khác, thay vì thải bỏ ra môi trường.',
      'Ví dụ điển hình là mô hình vườn - ao - chuồng (VAC): phân từ chuồng trại được ủ làm phân bón cho vườn cây, phụ phẩm nông nghiệp (rơm rạ, thân cây) làm thức ăn chăn nuôi hoặc lót chuồng, nước thải ao cá qua xử lý dùng tưới vườn.',
      'Công nghệ biogas (khí sinh học) chuyển hóa chất thải chăn nuôi thành khí đốt phục vụ sinh hoạt và bã thải sau ủ biogas vẫn có thể dùng làm phân bón hữu cơ giàu dinh dưỡng cho cây trồng, giải quyết đồng thời cả vấn đề ô nhiễm và năng lượng.',
      'Nông nghiệp tuần hoàn không chỉ giảm ô nhiễm môi trường mà còn giúp nông dân tiết kiệm chi phí mua vật tư đầu vào, tăng tính tự chủ và khả năng chống chịu trước biến động giá cả thị trường.',
    ],
  },
  {
    slug: 'thich-ung-bien-doi-khi-hau',
    categoryId: 'ben-vung',
    title: 'Nông nghiệp thích ứng với biến đổi khí hậu',
    summary:
      'Hạn hán, xâm nhập mặn và thời tiết cực đoan buộc nông dân phải thay đổi giống cây trồng và kỹ thuật canh tác để thích ứng.',
    readMinutes: 3,
    content: [
      'Biến đổi khí hậu đang gây ra những tác động rõ rệt lên nông nghiệp: nhiệt độ tăng, lượng mưa thất thường, hạn hán kéo dài và xâm nhập mặn ở vùng đồng bằng ven biển, ảnh hưởng trực tiếp đến năng suất và chất lượng nông sản.',
      'Giải pháp thích ứng phổ biến gồm chọn giống cây chịu hạn, chịu mặn, chịu ngập úng phù hợp với điều kiện địa phương; áp dụng kỹ thuật tưới tiết kiệm nước như tưới nhỏ giọt, tưới phun mưa thay cho tưới tràn truyền thống.',
      'Nông lâm kết hợp (agroforestry) - trồng xen cây lâu năm cùng cây ngắn ngày và chăn nuôi trên cùng diện tích - giúp cải thiện vi khí hậu, giữ ẩm đất, chống xói mòn và đa dạng hóa nguồn thu nhập để giảm rủi ro khi một loại cây trồng thất bát.',
      'Hệ thống cảnh báo sớm dựa trên dữ liệu thời tiết và vệ tinh giúp nông dân chủ động ứng phó: biết trước đợt hạn hán, xâm nhập mặn hay bão để điều chỉnh lịch gieo trồng, thu hoạch sớm hoặc có biện pháp bảo vệ kịp thời.',
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByCategory(categoryId: string) {
  return articles.filter((a) => a.categoryId === categoryId)
}
