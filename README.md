# React CV - Full Stack Website CV

Dự án tạo CV cá nhân full-stack bằng React.js + Node.js với thiết kế hiện đại, responsive và tính năng gửi email thật.

## 🚀 Triển khai

### GitHub Pages (Frontend only)
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

### Production Deployment (Full-stack)
1. **Backend**: Deploy to services like Railway, Render, or Heroku
2. **Frontend**: Update API_URL to production backend URL
3. **Environment**: Set production environment variables

### Email Service Setup
1. Bật 2-factor authentication cho Gmail
2. Tạo App Password: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Copy password vào file `.env`:
   ```
   EMAIL_PASSWORD=abcd efgh ijkl mnop
   ```

## 🤝 Contributing

1. Fork repository
2. Tạo feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Mở Pull Request

## 📝 License

Dự án này là open-source và sử dụng [MIT License](LICENSE).

## 👨‍💻 Author

**Kỳ Hoàng**
- GitHub: [@Hikhai](https://github.com/Hikhai)
- Email: hoangdinhky1109@gmail.com

---

⭐ Nếu dự án này hữu ích, hãy cho một star nhé!

### Frontend Features
- ✅ Thiết kế responsive cho mọi thiết bị
- ✅ Giao diện hiện đại với CSS gradient và animation
- ✅ Các section đầy đủ: Header, About, Experience, Education, Skills, Contact
- ✅ **Form liên hệ thực sự gửi email** 📧
- ✅ Loading states và error handling
- ✅ Thanh tiến trình kỹ năng
- ✅ Timeline kinh nghiệm làm việc
- ✅ Hỗ trợ in CV (Print-friendly)
- ✅ Auto-fallback to static data nếu backend offline

### Backend Features (NEW! 🎉)
- ✅ **RESTful API** với Node.js + Express
- ✅ **Email service** với Nodemailer (Gmail integration)
- ✅ **Contact form** gửi email + auto-reply
- ✅ **View analytics** - đếm lượt xem CV
- ✅ **Rate limiting** - bảo vệ chống spam
- ✅ **CORS & Security** middleware
- ✅ Environment configuration
- ✅ **Professional email templates** với HTML

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI framework
- **Vite** - Build tool và dev server
- **CSS3** - Styling với Flexbox và Grid
- **Fetch API** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email service
- **Helmet** - Security middleware
- **Express Rate Limit** - API protection
- **CORS** - Cross-origin requests
- **dotenv** - Environment variables

## 📦 Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js (phiên bản 16 trở lên)
- npm hoặc yarn
- Gmail account (cho email service)

### 🚀 Quick Start

1. **Clone repository**
```bash
git clone https://github.com/Hikhai/my-cv-website.git
cd my-cv-website
```

2. **Cài đặt dependencies**
```bash
# Frontend dependencies
npm install

# Backend dependencies  
cd backend && npm install && cd ..
```

3. **Cấu hình email (quan trọng!)**
```bash
# Copy và cập nhật file .env cho backend
cp backend/.env.example backend/.env
```

Cập nhật `backend/.env`:
```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=khaihh.goog@gmail.com
```

4. **Chạy cả Frontend + Backend**
```bash
npm run dev:full
```

**Hoặc chạy riêng lẻ:**
```bash
# Terminal 1 - Backend
npm run backend

# Terminal 2 - Frontend
npm run dev
```

5. **Truy cập ứng dụng**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- Health check: http://localhost:5000/api/health

## 🔌 API Endpoints

### Health Check
```
GET /api/health
```
Response: Server status và thông tin version

### CV Data
```
GET /api/cv
```
Response: Toàn bộ dữ liệu CV + increment view count

```
GET /api/cv/stats  
```
Response: Thống kê lượt xem CV

### Contact Form
```
POST /api/contact
```
Body:
```json
{
  "name": "Tên người gửi",
  "email": "email@example.com", 
  "message": "Nội dung tin nhắn"
}
```
Response: Status + gửi email tự động

## 📧 Email Configuration

### Tạo Gmail App Password

1. Vào **Google Account** → **Security**
2. Bật **2-Step Verification**
3. Tạo **App Password**:
   - Select app: **Mail**
   - Select device: **Other** → nhập "CV Website"
   - Copy password 16 ký tự

### Cập nhật Environment Variables

**Backend (.env):**
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=khaihh.goog@gmail.com
```

**Frontend (.env):**
```env
VITE_API_URL=http://localhost:5000/api
VITE_USE_API=true
```

## 📁 Cấu trúc dự án

```
react-cv/
├── 🎨 Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Header.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Skills.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/       # API service layer
│   │   │   └── api.js
│   │   ├── data/          # Static data
│   │   │   └── cvData.js
│   │   ├── App.jsx        # Main app
│   │   └── main.jsx
│   ├── public/            # Static assets
│   ├── .env              # Frontend environment
│   └── package.json
│
├── 🔧 Backend  
│   ├── routes/
│   │   ├── cv.js         # CV data endpoints
│   │   └── contact.js    # Contact form endpoints
│   ├── .env              # Backend environment
│   ├── .env.example      # Environment template
│   ├── server.js         # Express server
│   └── package.json
│
├── 📚 Documentation
│   ├── README.md         # Main documentation
│   ├── CUSTOMIZE.md      # Customization guide
│   └── DEPLOY.md         # Deployment guide
│
└── 🔧 Config
    ├── .gitignore
    └── vite.config.js
```

## ⚡ Available Scripts

```bash
# Development
npm run dev          # Frontend only
npm run backend      # Backend only  
npm run dev:full     # Frontend + Backend concurrently

# Production
npm run build        # Build frontend for production
npm run preview      # Preview production build

# Utilities
npm run lint         # ESLint check
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
