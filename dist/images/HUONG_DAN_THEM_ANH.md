# HƯỚNG DẪN THÊM HÌNH ẢNH — TIN PHÁT DECOR

Bạn có thể thêm hình ảnh thực tế vào website theo 2 bước cực kỳ đơn giản:

---

## 📁 BƯỚC 1: BỎ FILE ẢNH VÀO CÁC THƯ MỤC TƯƠNG ỨNG

Tất cả ảnh nên đặt trong thư mục `public/images/` để website tự động nhận diện mà không cần cấu hình phức tạp:

1. **Ảnh banner Hero (đầu trang):**
   - Đặt file ảnh vào: `public/images/hero/`
   - Ví dụ: `public/images/hero/banner.jpg`

2. **Ảnh danh mục sản phẩm (Noel, Trung Thu, Tết, Sinh nhật, Đồ chơi, Decor):**
   - Đặt file ảnh vào: `public/images/categories/`
   - Ví dụ: `public/images/categories/noel.jpg`, `public/images/categories/tet.jpg`, ...

3. **Ảnh sản phẩm trong Showcase (Lưới sản phẩm):**
   - Đặt file ảnh vào: `public/images/products/`
   - Ví dụ: `public/images/products/kim-tuyen-chon.jpg`, `public/images/products/long-den.jpg`, ...

4. **Ảnh Timeline mùa vụ (Lịch mùa vụ):**
   - Đặt file ảnh vào: `public/images/seasons/`
   - Ví dụ: `public/images/seasons/mua-tet.jpg`, `public/images/seasons/mua-noel.jpg`, ...

5. **Ảnh xưởng sản xuất & kho hàng (Phần Năng lực):**
   - Đặt file ảnh vào: `public/images/company/`
   - Ví dụ: `public/images/company/xuong-san-xuat.jpg`, `public/images/company/dong-hang.jpg`

---

## 📝 BƯỚC 2: MỞ FILE DỮ LIỆU ĐIỀN ĐƯỜNG DẪN ẢNH

Sau khi copy ảnh vào thư mục trên, bạn chỉ cần mở các file tương ứng trong `src/data/` và thay `null` bằng đường dẫn ảnh:

### 1. Ảnh Hero & Xưởng sản xuất -> File `src/data/company.js`:
```javascript
images: {
  hero: '/images/hero/banner.jpg',          // Ảnh banner đầu trang
  warehouse: '/images/company/xuong.jpg',   // Ảnh xưởng sản xuất
  packing: '/images/company/dong-hang.jpg', // Ảnh đóng gói hàng
}
```

### 2. Danh mục sản phẩm -> File `src/data/categories.js`:
```javascript
{
  id: 'noel',
  name: 'Noel',
  image: '/images/categories/noel.jpg', // Thay null bằng đường dẫn ảnh này
  ...
}
```

### 3. Từng sản phẩm -> File `src/data/products.js`:
```javascript
{
  id: 'noel-001',
  name: 'Kim tuyến chồn Noel',
  category: 'noel',
  image: '/images/products/kim-tuyen-chon.jpg', // Thay null bằng đường dẫn ảnh này
  ...
}
```

### 4. Lịch mùa vụ -> File `src/data/process.js` (phần `seasons`):
```javascript
{
  id: 'tet',
  name: 'Tết Nguyên Đán',
  image: '/images/seasons/tet.jpg', // Thay null bằng đường dẫn ảnh này
  ...
}
```

---
*Lưu ý: Nếu chưa có ảnh cho mục nào, bạn cứ để giá trị `null` thì website sẽ tự hiển thị placeholder đồ họa và emoji đẹp mắt.*
