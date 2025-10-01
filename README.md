# React CV - Website CV Cá Nhân

Dự án tạo CV cá nhân bằng React.js với thiết kế hiện đại, responsive và có thể in được.

## 🚀 Tính năng

- ✅ Thiết kế responsive cho mọi thiết bị
- ✅ Giao diện hiện đại với CSS gradient và animation
- ✅ Các section đầy đủ: Header, About, Experience, Education, Skills, Contact
- ✅ Form liên hệ tương tác
- ✅ Thanh tiến trình kỹ năng
- ✅ Timeline kinh nghiệm làm việc
- ✅ Hỗ trợ in CV (Print-friendly)
- ✅ Mã nguồn mở và dễ tùy chỉnh

## 🛠️ Công nghệ sử dụng

- **React.js** - Frontend framework
- **Vite** - Build tool và dev server
- **CSS3** - Styling với Flexbox và Grid
- **HTML5** - Semantic markup

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Hướng dẫn cài đặt

1. **Clone repository hoặc download source code**
```bash
git clone <repository-url>
cd react-cv
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy ứng dụng ở chế độ development**
```bash
npm run dev
```

4. **Mở trình duyệt và truy cập**
```
http://localhost:5173
```

## 🎨 Tùy chỉnh CV

### Thay đổi thông tin cá nhân

Mở file `src/data/cvData.js` và chỉnh sửa thông tin:

```javascript
export const cvData = {
  personal: {
    name: "Tên của bạn",
    title: "Chức danh của bạn", 
    email: "email@example.com",
    phone: "+84 xxx xxx xxx",
    // ... các thông tin khác
  },
  // ... các section khác
}
```

### Thay đổi màu sắc và style

- Mở các file CSS trong thư mục `src/components/`
- Tùy chỉnh màu sắc, font, spacing theo ý thích
- Các biến màu chính:
  - Primary: `#3498db` (xanh dương)
  - Secondary: `#e74c3c` (đỏ)
  - Accent: `#f39c12` (cam)
  - Purple: `#9b59b6` (tím)

### Thêm ảnh đại diện

1. Thêm ảnh của bạn vào thư mục `public/`
2. Cập nhật đường dẫn trong `cvData.js`:
```javascript
profileImage: "/ten-anh-cua-ban.jpg"
```

## 📱 Responsive Design

CV được thiết kế responsive cho:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px) 
- 🖥️ Desktop (> 1024px)

## 🖨️ In CV

Để in CV:
1. Mở CV trên trình duyệt
2. Nhấn `Ctrl + P` (Windows) hoặc `Cmd + P` (Mac)
3. Chọn máy in hoặc "Save as PDF"
4. CV sẽ được tối ưu cho việc in (ẩn form liên hệ, điều chỉnh màu sắc)

## 🚀 Build và Deploy

### Build production

```bash
npm run build
```

File build sẽ được tạo trong thư mục `dist/`

### Deploy lên hosting

Bạn có thể deploy lên:

1. **Netlify** (miễn phí)
   - Kéo thả thư mục `dist` vào netlify.com
   
2. **Vercel** (miễn phí)
   ```bash
   npm install -g vercel
   vercel --prod
   ```

3. **GitHub Pages**
   - Push code lên GitHub
   - Bật GitHub Pages trong Settings

4. **Surge.sh** (miễn phí)
   ```bash
   npm install -g surge
   cd dist
   surge
   ```

## 📁 Cấu trúc thư mục

```
react-cv/
├── public/           # Static files
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── data/         # Data files
│   │   └── cvData.js
│   ├── App.jsx       # Main app component
│   ├── App.css       # Global styles
│   └── main.jsx      # Entry point
├── package.json
└── README.md
```

## 🎯 To-do / Tính năng tương lai

- [ ] Dark mode
- [ ] Multiple language support
- [ ] Export to PDF function
- [ ] Add animations
- [ ] Blog section
- [ ] Project portfolio section

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy:
1. Fork repository
2. Tạo branch mới (`git checkout -b feature/ten-tinh-nang`)
3. Commit changes (`git commit -am 'Thêm tính năng mới'`)
4. Push to branch (`git push origin feature/ten-tinh-nang`)
5. Tạo Pull Request

## 📄 License

Dự án này sử dụng MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 💡 Tips

- Sử dụng ảnh chất lượng cao cho profile picture
- Giữ nội dung súc tích và dễ đọc
- Test trên nhiều thiết bị khác nhau
- Kiểm tra spelling và grammar
- Cập nhật thông tin thường xuyên

## 📞 Liên hệ

Nếu bạn có câu hỏi hoặc cần hỗ trợ, hãy tạo issue trên GitHub.

---

⭐ Nếu dự án hữu ích, đừng quên star repository nhé!+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
