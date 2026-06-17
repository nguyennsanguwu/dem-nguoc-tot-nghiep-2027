# 🌸 App Đếm Ngược Ngày Thi Tốt Nghiệp THPT 2027
100% Dùng AI :3

Một ứng dụng web nhỏ xinh, giao diện kính lỏng (Glassmorphism) kết hợp hiệu ứng cánh hoa anh đào rơi lãng mạn, giúp các sĩ tử theo dõi thời gian đếm ngược chính xác đến từng giây cho kỳ thi Tốt nghiệp THPT Quốc gia 2027! ✨

👉 **Trải nghiệm trực tuyến tại:** [nguyennsanguwu.github.io/dem-nguoc-tot-nghiep-2027/](https://nguyennsanguwu.github.io/dem-nguoc-tot-nghiep-2027/)

---
## 📊 Thống Kê Ứng Dụng (Cập Nhật Tự Động)

| Thời Điểm Online Cuối Cùng | Kích Thước Dự Án |
| :---: | :---: |
| ![Cập nhật cuối cùng](https://img.shields.io/github/last-commit/nguyennsanguwu/dem-nguoc-tot-nghiep-2027?color=ffb7c5&label=%E2%8F%B3%20Last%20Update) | ![Kích thước mã nguồn](https://img.shields.io/github/repo-size/nguyennsanguwu/dem-nguoc-tot-nghiep-2027?color=d1496b&label=⚡%20Size) |
---

## 🚀 Các Tính Năng Nổi Bật

- **Đồng hồ kép thông minh:** Hiển thị song song đồng hồ thời gian thực (Real-time) và bộ đếm ngược thời gian (Countdown) chính xác đến ngày, giờ, phút, giây.
- **Thiết kế Kính lỏng (Glassmorphism):** Giao diện mờ ảo, hiện đại, tự động tối ưu hóa hiển thị dạng lưới 2x2 siêu gọn gàng trên mọi thiết bị di động.
- **Hiệu ứng Hoa anh đào rơi:** Các cánh hoa tự động rơi ngẫu nhiên, nhẹ nhàng, được tối ưu hóa hiệu năng bằng phần cứng (Hardware Acceleration) giúp mượt mà và tiết kiệm pin.
- **Hỗ trợ PWA (Progressive Web App):** 
  - Có thể cài đặt trực tiếp thành một app độc lập ngoài màn hình chính điện thoại thông qua thanh Banner cài đặt nhanh hoặc Menu tiện ích.
  - Giao diện tràn viền cao cấp nhờ đồng bộ màu sắc thanh trạng thái (`theme_color`) theo tone hồng pastel sáng.
- **Chế độ chạy Offline "bất tử":** Sử dụng công nghệ Service Worker (`sw.js`) tiên tiến để tự động lưu tài nguyên vào bộ nhớ đệm (Cache). Khi thiết bị mất mạng hoặc bật chế độ máy bay, ứng dụng vẫn mở lên và đếm ngược bình thường!

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:** HTML5, CSS3 (Biến CSS, Flexbox, Grid, Keyframes Animation)
- **Animation:** `will-change` tối ưu hóa render cánh hoa rơi.
- **Backend/Logic:** Thuần JavaScript (Vanilla JS), Web Storage, Service Worker API.
- **Lưu trữ & Khởi chạy:** GitHub Pages.
- **Tài nguyên ngoại lai:** Font chữ *Patrick Hand* từ Google Fonts, ảnh nền chất lượng cao từ Unsplash.

---

## 📂 Cấu Trúc Thư Mục Dự Án

```text
├── index.html       # File giao diện chính, CSS styling và logic đếm ngược
├── manifest.json    # File cấu hình PWA cài đặt cho ứng dụng
├── sw.js            # Service Worker xử lý bộ nhớ đệm chạy offline
└── README.md        # File giới thiệu và hướng dẫn dự án (File này)
