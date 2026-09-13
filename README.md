# 🎄 TIN PHÁT DECOR — Landing Page

> **Landing page giới thiệu thương hiệu** cho Công ty TNHH Sản Xuất Tin Phát — đơn vị chuyên sản xuất và phân phối sản phẩm decor trang trí theo mùa lễ hội và quanh năm.

---

## 📋 Giới thiệu

Website giới thiệu doanh nghiệp cho **Tin Phát Decor** — cung cấp thông tin về:

- Các dòng sản phẩm trang trí: Noel, Trung Thu, Tết, Sinh nhật & Party, Đám cưới, Đồ chơi trẻ em, Decor quanh năm
- Năng lực sản xuất & phân phối
- Quy trình hợp tác
- Thông tin liên hệ & bản đồ

> ⚠️ Đây là **trang giới thiệu doanh nghiệp**, không phải website thương mại điện tử — không có giỏ hàng, đăng nhập hay thanh toán.

---

## 🛠️ Tech Stack

| Công nghệ | Phiên bản |
|---|---|
| React | 18.x |
| Vite | 5.x |
| Framer Motion | 11.x |
| Lucide React | 0.344.x |
| CSS Modules + Vanilla CSS | — |

---

## 📁 Cấu trúc thư mục

```
landingpage_TinPhatDecord/
├── public/
│   └── images/                  # Ảnh tĩnh (hero, products, categories...)
│       ├── hero/
│       ├── categories/
│       ├── products/
│       ├── seasons/
│       └── company/
├── src/
│   ├── components/              # Components tái sử dụng (Navbar, Footer...)
│   ├── sections/                # Các section trang chủ
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ProductCategories.jsx
│   │   ├── ProductShowcase.jsx
│   │   ├── SeasonalTimeline.jsx
│   │   ├── Capability.jsx
│   │   ├── Process.jsx
│   │   └── ContactCTA.jsx
│   ├── data/                    # Dữ liệu tĩnh (sản phẩm, danh mục, công ty...)
│   │   ├── company.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   └── process.js
│   ├── hooks/                   # Custom hooks
│   ├── styles/
│   │   └── global.css           # CSS Variables & reset toàn cục
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── netlify.toml
└── package.json
```

---

## 🚀 Cài đặt & Chạy

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Cài đặt dependencies

```bash
npm install
```

### Chạy môi trường development

```bash
npm run dev
```

Mở trình duyệt tại: http://localhost:5173

### Build production

```bash
npm run build
```

### Preview bản build

```bash
npm run preview
```

---

## 🖼️ Thêm ảnh vào website

Đặt ảnh vào thư mục `public/images/` theo cấu trúc sau:

| Vị trí hiển thị | Đường dẫn file |
|---|---|
| Banner Hero | `public/images/hero/banner.png` |
| Nhà xưởng (Capability) | `public/images/company/kho-hang.png` |
| Đóng hàng (Capability) | `public/images/company/dong-hang.png` |
| Ảnh danh mục | `public/images/categories/<tên>.png` |
| Ảnh sản phẩm | `public/images/products/<tên>.png` |

Trong code, tham chiếu ảnh bằng **đường dẫn tuyệt đối** bắt đầu từ `/`:
```js
// ✅ Đúng
image: '/images/products/long-den.png'

// ❌ Sai
image: 'public/images/products/long-den.png'
```

---

## ✏️ Cập nhật nội dung

Toàn bộ nội dung được quản lý trong thư mục `src/data/`:

| File | Nội dung |
|---|---|
| `company.js` | Thông tin công ty, hotline, địa chỉ, ảnh |
| `categories.js` | Danh mục sản phẩm hiển thị trên trang chủ |
| `products.js` | Danh sách sản phẩm trong ProductShowcase |
| `process.js` | Các bước quy trình hợp tác |

---

## 🌐 Deploy

Dự án hỗ trợ deploy lên **Netlify** (đã có `netlify.toml`):

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## 📞 Liên hệ doanh nghiệp

| | |
|---|---|
| **Hotline / Zalo** | 0914 794 472 |
| **Email** | tinphatdecord@gmail.com |
| **Địa chỉ** | Cầu chợ trâu Hải Hưng, Ninh Bình |

---

*© 2026 TIN PHÁT DECOR. All rights reserved.*
