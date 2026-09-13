// ============================================
// PRODUCTS — TIN PHÁT DECOR
// Để thay ảnh: thay giá trị image thành đường dẫn thật
// image: null = dùng placeholder, image: '/path/to/img.jpg' = dùng ảnh thật
// ============================================
export const products = [
  // ---- NOEL ----
  {
    id: 'noel-001',
    name: 'Kim tuyến chồn Noel',
    category: 'noel',
    description: 'Kim tuyến chồn cao cấp dùng trang trí cây thông, không gian Noel.',
    image: '/images/products/noel-kim-tuyen-chon.jpg',
    tags: ['noel', 'trang trí'],
  },
  {
    id: 'noel-002',
    name: 'Vòng nguyệt quế',
    category: 'noel',
    description: 'Vòng nguyệt quế trang trí Noel, treo cửa và trang hoàng không gian Giáng Sinh.',
    image: '/images/products/noel-vong-nguyet-que.jpg',
    tags: ['noel', 'vòng nguyệt quế'],
  },

  // ---- TRUNG THU ----
  {
    id: 'trung-thu-001',
    name: 'Lồng đèn Trung Thu',
    category: 'trung-thu',
    description: 'Lồng đèn truyền thống và hiện đại, đa dạng mẫu mã dịp Trung Thu.',
    image: '/images/products/trung-thu-long-den.jpg', // '/src/assets/images/products/trung-thu-long-den.jpg'
    tags: ['trung thu', 'lồng đèn'],
  },

  // ---- TẾT ----
  {
    id: 'tet-001',
    name: 'Câu đối Tết',
    category: 'tet',
    description: 'Câu đối trang trí Tết Nguyên Đán, đa dạng kích thước và nội dung.',
    image: '/images/products/tet-cau-doi.png', // '/src/assets/images/products/tet-cau-doi.jpg'
    tags: ['tết', 'trang trí'],
  },
  {
    id: 'tet-002',
    name: 'Ông thần tài lắc',
    category: 'tet',
    description: 'Ông thần tài lắc phong thủy may mắn, dùng trang trí dịp Tết.',
    image: '/images/products/tet-ong-than-tai-lac.jpg', // '/src/assets/images/products/tet-ong-than-tai-lac.jpg'
    tags: ['tết', 'phong thủy'],
  },

  // ---- SINH NHẬT & PARTY ----
  {
    id: 'birthday-001',
    name: 'Mũ sinh nhật',
    category: 'sinh-nhat',
    description: 'Mũ sinh nhật đa màu sắc, phù hợp tiệc sinh nhật trẻ em và người lớn.',
    image: '/images/products/birthday-mu-sinh-nhat.jpg',// '/src/assets/images/products/birthday-mu-sinh-nhat.jpg'
    tags: ['sinh nhật', 'party'],
  },
  {
    id: 'birthday-002',
    name: 'Nến sinh nhật',
    category: 'sinh-nhat',
    description: 'Nến sinh nhật đủ số, hình dạng và màu sắc đa dạng.',
    image: '/images/products/birthday-nen.jpg', // '/src/assets/images/products/birthday-nen.jpg'
    tags: ['sinh nhật', 'nến'],
  },
  {
    id: 'birthday-003',
    name: 'Phụ kiện trang trí bánh',
    category: 'sinh-nhat',
    description: 'Topper bánh, trang trí bánh sinh nhật, cắm bánh theo chủ đề.',
    image: '/images/products/birthday-trang-tri-banh.jpg', // '/src/assets/images/products/birthday-trang-tri-banh.jpg'
    tags: ['sinh nhật', 'bánh'],
  },
  {
    id: 'birthday-004',
    name: 'Banner trang trí & Party',
    category: 'sinh-nhat',
    description: 'Banner, dây chữ trang trí tiệc và các dịp đặc biệt.',
    image: '/images/products/birthday-banner.jpg', // '/src/assets/images/products/birthday-banner.jpg'
    tags: ['sinh nhật', 'banner', 'party'],
  },

  // ---- ĐỒ CHƠI TRẺ EM ----
  {
    id: 'toy-001',
    name: 'Xe ô tô đồ chơi',
    category: 'do-choi',
    description: 'Xe ô tô đồ chơi đa dạng mẫu mã, phù hợp nhiều lứa tuổi.',
    image: '/images/products/toy-xe-o-to.jpg', // '/src/assets/images/products/toy-xe-o-to.jpg'
    tags: ['đồ chơi', 'xe', 'trẻ em'],
  },

  // ---- DECOR QUANH NĂM ----
  {
    id: 'decor-001',
    name: 'Ống Phụt Giấy đám cưới',
    category: 'decor-quanh-nam',
    description: 'Ống phụt kim tuyến, pháo giấy phụt trang trí tiệc cưới, sự kiện và liên hoan.',
    image: '/images/products/ong-phut-giay.jpg',
    tags: ['đám cưới', 'sự kiện', 'decor'],
  },
]

// Helper: lấy sản phẩm theo category
export const getProductsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return products
  return products.filter((p) => p.category === categoryId)
}
