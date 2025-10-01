# 🎨 Hướng dẫn tùy chỉnh CV

## 1. Thay đổi thông tin cá nhân

Mở file `src/data/cvData.js` và tìm section `personal`:

```javascript
personal: {
  name: "Thay tên của bạn ở đây",
  title: "Thay chức danh của bạn",
  summary: "Viết mô tả ngắn về bản thân...",
  email: "email-cua-ban@example.com",
  phone: "+84 xxx xxx xxx",
  location: "Thành phố, Quốc gia",
  website: "https://website-cua-ban.com",
  profileImage: "/anh-dai-dien.jpg"
}
```

## 2. Cập nhật thông tin giới thiệu

Tìm section `about`:

```javascript
about: {
  description: "Viết đoạn giới thiệu chi tiết về bản thân...",
  highlights: [
    "Điểm nổi bật 1",
    "Điểm nổi bật 2", 
    "Điểm nổi bật 3"
  ]
}
```

## 3. Thêm kinh nghiệm làm việc

Tìm section `experience` và thêm/sửa công việc:

```javascript
experience: [
  {
    position: "Vị trí công việc",
    company: "Tên công ty",
    startDate: "MM/YYYY",
    endDate: "MM/YYYY", // null nếu đang làm việc
    description: "Mô tả công việc...",
    achievements: [
      "Thành tựu 1",
      "Thành tựu 2"
    ],
    technologies: ["React", "Node.js", "MongoDB"]
  }
]
```

## 4. Cập nhật học vấn

Tìm section `education`:

```javascript
education: [
  {
    degree: "Bằng cấp",
    institution: "Tên trường",
    startDate: "MM/YYYY",
    endDate: "MM/YYYY",
    description: "Chuyên ngành hoặc mô tả",
    gpa: "3.5/4.0", // optional
    achievements: ["Thành tích học tập"] // optional
  }
]
```

## 5. Thay đổi kỹ năng

Tìm section `skills` và cập nhật theo danh mục:

```javascript
skills: {
  "Frontend": [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 }
  ],
  "Backend": [
    { name: "Node.js", level: 80 }
  ],
  "Danh mục mới": [
    { name: "Kỹ năng", level: 75 }
  ]
}
```

**Lưu ý:** `level` là phần trăm (0-100) hiển thị trên thanh tiến trình.

## 6. Cập nhật thông tin liên hệ

Tìm section `contact`:

```javascript
contact: {
  email: "email@example.com",
  phone: "+84 xxx xxx xxx", 
  address: "Địa chỉ đầy đủ",
  social: [
    { platform: "GitHub", url: "https://github.com/username" },
    { platform: "LinkedIn", url: "https://linkedin.com/in/username" }
  ]
}
```

## 7. Thay đổi màu sắc

### Màu chính của toàn bộ CV

Mở file `src/components/Header.css` và thay đổi gradient:

```css
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Thay đổi màu gradient ở đây */
}
```

### Màu của từng section

- **Experience**: Màu xanh dương `#3498db` trong `Experience.css`
- **Education**: Màu đỏ `#e74c3c` trong `Education.css` 
- **Skills**: Màu tím `#9b59b6` trong `Skills.css`
- **Contact**: Màu cam `#f39c12` trong `Contact.css`

## 8. Thêm ảnh đại diện

1. Thêm ảnh vào thư mục `public/` (ví dụ: `public/my-photo.jpg`)
2. Cập nhật trong `cvData.js`:
```javascript
profileImage: "/my-photo.jpg"
```

**Gợi ý ảnh đẹp:**
- Kích thước: 400x400px trở lên
- Format: JPG hoặc PNG
- Chất lượng cao, rõ nét
- Nền đơn giản hoặc có thể crop thành hình tròn

## 9. Tùy chỉnh font chữ

Mở file `src/index.css` và thay đổi:

```css
body {
  font-family: 'Your-Font', 'Segoe UI', Tahoma, sans-serif;
}
```

## 10. Thêm icon mạng xã hội

Trong section `contact`, bạn có thể thêm nhiều mạng xã hội:

```javascript
social: [
  { platform: "📧 Email", url: "mailto:email@example.com" },
  { platform: "🐙 GitHub", url: "https://github.com/username" },
  { platform: "💼 LinkedIn", url: "https://linkedin.com/in/username" },
  { platform: "🐦 Twitter", url: "https://twitter.com/username" },
  { platform: "📘 Facebook", url: "https://facebook.com/username" }
]
```

## ⚡ Quick Tips

- Sau mỗi thay đổi, lưu file và trang web sẽ tự động reload
- Kiểm tra responsive bằng cách thu nhỏ cửa sổ trình duyệt
- Test in CV bằng cách nhấn Ctrl+P
- Giữ nội dung ngắn gọn, dễ đọc
- Sử dụng bullet points thay vì đoạn văn dài

## 🚀 Sau khi hoàn thành

1. Chạy `npm run build` để tạo file production
2. Deploy lên hosting (Netlify, Vercel, GitHub Pages)
3. Chia sẻ link CV với mọi người!

**Chúc bạn có một CV đẹp và ấn tượng! 🎉**