import { Property, ServiceItem, ProcessStep } from '../types';

// Import generated local images
import portraitAgent from '../assets/images/portrait_tran_minh_quang_v2_1785627757049.jpg';
import tayThanhLivingNewImg from '../assets/images/tay_thanh_living_new_1785629301039.jpg';
import tayThanhKitchenNewImg from '../assets/images/tay_thanh_kitchen_new_1785629314120.jpg';
import tayThanhBedroom1NewImg from '../assets/images/tay_thanh_bedroom1_new_1785629327560.jpg';
import tayThanhBedroom2NewImg from '../assets/images/tay_thanh_bedroom2_new_1785629340063.jpg';
import tayThanhStairsNewImg from '../assets/images/tay_thanh_stairs_new_1785629355212.jpg';
import tayThanhFacadeNewImg from '../assets/images/tay_thanh_facade_new_1785629369716.jpg';

import phuThanhLivingNewImg from '../assets/images/phu_thanh_living_new_1785629693120.jpg';
import phuThanhKitchenNewImg from '../assets/images/phu_thanh_kitchen_new_1785629704604.jpg';
import phuThanhBedroom1NewImg from '../assets/images/phu_thanh_bedroom1_new_1785629714270.jpg';
import phuThanhBalconyRoomNewImg from '../assets/images/phu_thanh_balcony_room_new_1785629725407.jpg';

export const AGENT_INFO = {
  name: 'TRẦN MINH QUANG',
  role: 'Chuyên mua bán, ký gửi nhà đất tại TP.HCM',
  subtext: 'BẤT ĐỘNG SẢN TP.HCM',
  hotline: '0978.295.877',
  hotlineRaw: '0978295877',
  telLink: 'tel:0978295877',
  zaloLink: 'https://zalo.me/0978295877',
  portrait: portraitAgent,
};

export const FEATURED_PROPERTY_1: Property = {
  id: 'tay-thanh-tan-phu',
  badge: 'BẤT ĐỘNG SẢN NỔI BẬT',
  highlight: '💎 SẢN PHẨM HIẾM',
  district: 'TÂY THẠNH · TÂN PHÚ · TP.HCM',
  title: 'Nhà 3 tầng mới tinh full nội thất',
  description: 'Không gian hoàn thiện theo phong cách hiện đại, tông màu ấm và nội thất đồng bộ. Phù hợp cho khách hàng muốn dọn vào ở ngay.',
  specs: ['03 tầng', 'Full nội thất', 'Nhà mới tinh'],
  price: 'Nhỉnh 3 tỷ',
  photos: [
    {
      url: tayThanhLivingNewImg,
      alt: 'Phòng khách & bếp hiện đại sàn đá marble trắng nhà Tây Thạnh Tân Phú',
      caption: 'Phòng khách tầng trệt sang trọng, trang bị sofa da cao cấp & cầu thang LED hiện đại',
    },
    {
      url: tayThanhKitchenNewImg,
      alt: 'Khu vực tủ bếp sang trọng và bàn ăn hoa xanh Tây Thạnh',
      caption: 'Bếp ăn cao cấp với tủ kính tối màu, đèn LED cảm ứng & bàn ăn hiện đại',
    },
    {
      url: tayThanhBedroom1NewImg,
      alt: 'Phòng ngủ master full nội thất với gương trang điểm uốn lượn Tây Thạnh',
      caption: 'Phòng ngủ master đẳng cấp, vách ốp gỗ trang trí & gương bệt bàn trang điểm cao cấp',
    },
    {
      url: tayThanhBedroom2NewImg,
      alt: 'Phòng ngủ phụ nội thất gỗ ấm áp với tủ quần áo thiết kế vòm kính Tây Thạnh',
      caption: 'Phòng ngủ phụ thoáng mát, trang bị sẵn máy lạnh & tủ quần áo kính cánh vòm tinh tế',
    },
    {
      url: tayThanhStairsNewImg,
      alt: 'Khu vực cầu thang mặt đá kết hợp vách kính & tranh cỏ may mắn Tây Thạnh',
      caption: 'Cầu thang tay vịn gỗ & kính cường lực lấy sáng tự nhiên, trang trí tranh phong thủy',
    },
    {
      url: tayThanhFacadeNewImg,
      alt: 'Mặt tiền nhà 3 tầng mới tinh Tây Thạnh Tân Phú',
      caption: 'Mặt tiền thiết kế hiện đại, ban công cây xanh & hệ thống chiếu sáng ban đêm sang trọng',
    },
  ],
};

export const UPDATED_PROPERTY_2: Property = {
  id: 'phu-thanh-tan-phu',
  badge: 'SẢN PHẨM MỚI CẬP NHẬT',
  highlight: '💎 HẺM XE HƠI THÔNG',
  district: 'PHÚ THẠNH · TÂN PHÚ · TP.HCM',
  title: 'Nhà 3 tầng · 40m² hẻm xe hơi thông',
  description: 'Không gian sáng thoáng, bố trí gọn gàng và có sẵn các khu vực sinh hoạt thiết yếu. Lợi thế hẻm xe hơi thông giúp việc di chuyển thuận tiện hơn.',
  specs: ['40m²', '03 tầng', 'Hẻm xe hơi thông'],
  price: 'Nhỉnh 4 tỷ',
  extraNotice: 'Liên hệ để nhận thông tin chi tiết và lịch xem nhà.',
  photos: [
    {
      url: phuThanhLivingNewImg,
      alt: 'Không gian tầng trệt nhà Phú Thạnh Tân Phú với trần la phông xanh & quạt trần',
      caption: 'Không gian tầng trệt rộng rãi, sáng thoáng với gạch men trắng & quạt trần hiện đại',
    },
    {
      url: phuThanhKitchenNewImg,
      alt: 'Khu vực bếp chữ L mặt đá hoa cương xám tủ gỗ nâu Phú Thạnh',
      caption: 'Bếp chữ L mặt đá hoa cương sang trọng, tủ gỗ ấm áp & tường ốp gạch trang trí',
    },
    {
      url: phuThanhBedroom1NewImg,
      alt: 'Phòng ngủ tầng lầu với đèn thả trần 3 bóng & rèm cửa nhã nhặn Phú Thạnh',
      caption: 'Phòng ngủ vuông vắn, trang bị đèn thả phong cách & rèm gấm chắn sáng',
    },
    {
      url: phuThanhBalconyRoomNewImg,
      alt: 'Phòng ngủ mở ra ban công đón ánh sáng tự nhiên có sẵn máy lạnh Phú Thạnh',
      caption: 'Phòng ngủ hướng ban công lộng gió, trang bị sẵn máy lạnh & rèm cao cấp',
    },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    number: '01',
    title: 'Tìm mua phù hợp',
    description: 'Lọc nhu cầu, vị trí và ngân sách để rút ngắn thời gian tìm kiếm.',
  },
  {
    id: 's2',
    number: '02',
    title: 'Hỗ trợ bán nhà đất',
    description: 'Tư vấn mức giá, cách trình bày tài sản và kết nối khách mua nghiêm túc.',
  },
  {
    id: 's3',
    number: '03',
    title: 'Nhận ký gửi',
    description: 'Đồng hành từ tiếp nhận thông tin, truyền thông đến thương lượng giao dịch.',
  },
  {
    id: 's4',
    number: '04',
    title: 'Tư vấn giao dịch',
    description: 'Hỗ trợ kiểm tra thông tin, quy trình và các bước cần chuẩn bị.',
  },
];

export const WORK_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Tiếp nhận',
    description: 'Lắng nghe nhu cầu, khu vực và mức ngân sách.',
  },
  {
    number: '02',
    title: 'Sàng lọc',
    description: 'Đề xuất phương án và thông tin phù hợp.',
  },
  {
    number: '03',
    title: 'Kết nối',
    description: 'Sắp xếp trao đổi, khảo sát và thương lượng.',
  },
  {
    number: '04',
    title: 'Đồng hành',
    description: 'Hỗ trợ các bước cần thiết đến khi hoàn tất.',
  },
];
