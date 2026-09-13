// ============================================
// PRODUCT CATEGORIES — TIN PHÁT DECOR
// Để thay đổi: chỉnh sửa file này
// image: đường dẫn tới ảnh trong src/assets/images/seasonal/
// ============================================

export const categories = [
  {
    id: 'noel',
    name: 'Noel',
    nameEn: 'Christmas',
    shortDesc: 'Kim tuyến chồn và các sản phẩm trang trí Giáng Sinh cao cấp.',
    image: '/images/categories/noel.jpg', // Thay bằng: '/src/assets/images/seasonal/noel.jpg'
    accentColor: '#1A5C3A',    // Xanh lá Noel
    bgColor: '#E8F4ED',
    emoji: '🎄',
    featured: true,
    size: 'large',  // large | medium | small (dùng cho grid layout)
  },
  {
    id: 'trung-thu',
    name: 'Trung Thu',
    nameEn: 'Mid-Autumn',
    shortDesc: 'Đèn lồng và các sản phẩm trang trí Tết Trung Thu rực rỡ.',
    image: '/images/categories/trung-thu.jpg', // Thay bằng: '/src/assets/images/seasonal/trung-thu.jpg'
    accentColor: '#C8632A',    // Cam ấm Trung Thu
    bgColor: '#FFF3E0',
    emoji: '🏮',
    featured: true,
    size: 'medium',
  },
  {
    id: 'tet',
    name: 'Tết',
    nameEn: 'Lunar New Year',
    shortDesc: 'Câu đối, ông thần tài lắc và trang trí Tết Nguyên Đán.',
    image: '/images/categories/tet.png', // Thay bằng: '/src/assets/images/seasonal/tet.jpg'
    accentColor: '#B5341C',    // Đỏ Tết
    bgColor: '#FDECEA',
    emoji: '🧧',
    featured: true,
    size: 'medium',
  },
  {
    id: 'sinh-nhat',
    name: 'Sinh nhật & Party',
    nameEn: 'Birthday & Party',
    shortDesc: 'Mũ sinh nhật, nến, phụ kiện trang trí bánh, banner và đạo cụ tiệc.',
    image: '/images/categories/sinh-nhat.jpg', // Thay bằng: '/src/assets/images/seasonal/sinh-nhat.jpg'
    accentColor: '#7C3AED',    // Tím Party
    bgColor: '#F3F0FF',
    emoji: '🎂',
    featured: false,
    size: 'small',
  },
  {
    id: 'do-choi',
    name: 'Đồ chơi trẻ em',
    nameEn: "Children's Toys",
    shortDesc: 'Xe ô tô đồ chơi và các sản phẩm vui chơi dành cho trẻ em.',
    image: '/images/categories/do-choi.jpg', // Thay bằng: '/src/assets/images/seasonal/do-choi.jpg'
    accentColor: '#0369A1',    // Xanh dương tươi
    bgColor: '#E0F2FE',
    emoji: '🚗',
    featured: false,
    size: 'small',
  },
  {
    id: 'decor-quanh-nam',
    name: 'Decor quanh năm',
    nameEn: 'Year-round Decor',
    shortDesc: 'Các sản phẩm trang trí không phụ thuộc mùa lễ hội, dùng quanh năm.',
    image: '/images/categories/decor-quanh-nam.png', // Thay bằng: '/src/assets/images/seasonal/decor-quanh-nam.jpg'
    accentColor: '#57534E',    // Neutral ấm
    bgColor: '#F5F5F4',
    emoji: '✨',
    featured: false,
    size: 'large',
  },
]
