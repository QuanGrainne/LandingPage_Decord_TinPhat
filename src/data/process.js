// ============================================
// PROCESS STEPS — TIN PHÁT DECOR
// Quy trình hợp tác 5 bước
// ============================================

export const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Trao đổi nhu cầu',
    description:
      'Khách hàng liên hệ và chia sẻ nhu cầu về sản phẩm, số lượng và thời gian cần hàng.',
    icon: 'MessageSquare',
  },
  {
    id: 2,
    number: '02',
    title: 'Tư vấn sản phẩm',
    description:
      'Đội ngũ TIN PHÁT DECOR tư vấn sản phẩm phù hợp, báo giá và hỗ trợ chọn mẫu.',
    icon: 'Lightbulb',
  },
  {
    id: 3,
    number: '03',
    title: 'Xác nhận đơn hàng',
    description:
      'Khách hàng xác nhận sản phẩm, số lượng và các điều kiện giao hàng.',
    icon: 'CheckCircle',
  },
  {
    id: 4,
    number: '04',
    title: 'Chuẩn bị & đóng hàng',
    description:
      'TIN PHÁT DECOR chuẩn bị, kiểm tra và đóng gói hàng hóa cẩn thận trước khi xuất.',
    icon: 'Package',
  },
  {
    id: 5,
    number: '05',
    title: 'Giao hàng',
    description:
      'Hàng hóa được giao đến địa chỉ khách hàng an toàn, đúng thời gian đã thỏa thuận.',
    icon: 'Truck',
  },
]

// ============================================
// SEASONAL TIMELINE
// ============================================

export const seasons = [
  {
    id: 'tet',
    name: 'Tết Nguyên Đán',
    period: 'Tháng 1 – 2',
    description: 'Câu đối, ông thần tài và các sản phẩm trang trí truyền thống ngày Tết.',
    image: null,
    accentColor: '#B5341C',
    bgColor: '#FDECEA',
    emoji: '🧧',
  },
  {
    id: 'trung-thu',
    name: 'Tết Trung Thu',
    period: 'Tháng 8 – 9',
    description: 'Lồng đèn, đèn kéo quân và các sản phẩm trang trí Rằm Trung Thu.',
    image: null,
    accentColor: '#C8632A',
    bgColor: '#FFF3E0',
    emoji: '🏮',
  },
  {
    id: 'noel',
    name: 'Giáng Sinh',
    period: 'Tháng 11 – 12',
    description: 'Kim tuyến, đèn Noel và các sản phẩm trang trí mùa Giáng Sinh.',
    image: null,
    accentColor: '#1A5C3A',
    bgColor: '#E8F4ED',
    emoji: '🎄',
  },
  {
    id: 'birthday',
    name: 'Sinh nhật & Party',
    period: 'Quanh năm',
    description: 'Mũ, nến, phụ kiện trang trí bánh và banner cho mọi dịp tiệc.',
    image: null,
    accentColor: '#7C3AED',
    bgColor: '#F3F0FF',
    emoji: '🎂',
  },
  {
    id: 'yearround',
    name: 'Decor quanh năm',
    period: 'Mọi thời điểm',
    description: 'Sản phẩm trang trí không theo mùa, phù hợp mọi không gian và dịp dùng.',
    image: null,
    accentColor: '#57534E',
    bgColor: '#F5F5F4',
    emoji: '✨',
  },
]

// ============================================
// CAPABILITIES
// ============================================

export const capabilities = [
  {
    id: 'production',
    title: 'Sản xuất',
    description: 'Tham gia trực tiếp vào quá trình sản xuất một số dòng sản phẩm.',
    image: null,
    icon: 'Factory',
  },
  {
    id: 'distribution',
    title: 'Phân phối',
    description: 'Hệ thống phân phối rộng, cung ứng sản phẩm đến nhiều khu vực.',
    image: null,
    icon: 'Network',
  },
  {
    id: 'sourcing',
    title: 'Nguồn hàng',
    description: 'Nguồn hàng ổn định, đa dạng sản phẩm cho các mùa lễ hội.',
    image: null,
    icon: 'Boxes',
  },
  {
    id: 'packing',
    title: 'Đóng hàng',
    description: 'Quy trình đóng gói chuyên nghiệp, đảm bảo hàng hóa nguyên vẹn khi đến tay khách.',
    image: null,
    icon: 'PackageCheck',
  },
  {
    id: 'bulk',
    title: 'Đơn hàng số lượng lớn',
    description: 'Đáp ứng các đơn hàng số lượng lớn cho cửa hàng, đại lý và sự kiện.',
    image: null,
    icon: 'BarChart3',
  },
]
