# 🚀 Hướng dẫn Build và Deploy CV

## 📦 Build Production

### 1. Build dự án

```bash
npm run build
```

Lệnh này sẽ:
- Tối ưu hóa code JavaScript và CSS
- Minify files để giảm kích thước
- Tạo thư mục `dist/` chứa files production
- Tối ưu hóa hình ảnh và assets

### 2. Preview build locally

```bash
npm run preview
```

Xem trước version production trên http://localhost:4173

---

## 🌐 Deploy Options

### Option 1: Netlify (Recommended - Miễn phí)

**Cách 1: Drag & Drop**
1. Chạy `npm run build`
2. Vào [netlify.com](https://netlify.com)
3. Kéo thả thư mục `dist/` vào trang web
4. Nhận link CV ngay lập tức!

**Cách 2: Git Integration**
1. Push code lên GitHub
2. Kết nối Netlify với GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Auto-deploy mỗi khi commit mới

### Option 2: Vercel (Miễn phí)

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Option 3: GitHub Pages (Miễn phí)

1. Cài đặt gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Thêm vào `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/react-cv"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Surge.sh (Miễn phí)

```bash
# Cài đặt Surge
npm install -g surge

# Build và deploy
npm run build
cd dist
surge
```

Làm theo hướng dẫn để chọn domain.

### Option 5: Firebase Hosting (Miễn phí)

```bash
# Cài đặt Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Khởi tạo project
firebase init hosting

# Build và deploy
npm run build
firebase deploy
```

---

## 🔧 Tối ưu hóa Performance

### 1. Tối ưu hình ảnh

- Sử dụng format WebP cho ảnh đại diện
- Compress ảnh trước khi upload
- Kích thước đề xuất: 300-500KB

### 2. Tối ưu SEO

Thêm vào `index.html`:

```html
<head>
  <meta name="description" content="CV của [Tên] - [Chức danh]">
  <meta name="keywords" content="CV, Resume, [Tên], [Kỹ năng]">
  <meta property="og:title" content="CV - [Tên]">
  <meta property="og:description" content="CV trực tuyến của [Tên]">
  <meta property="og:image" content="/profile.jpg">
</head>
```

### 3. Custom Domain

**Netlify:**
1. Mua domain (namecheap.com, godaddy.com)
2. Vào Netlify > Domain settings
3. Add custom domain
4. Cập nhật DNS records

**Cloudflare (Free CDN):**
1. Đăng ký Cloudflare
2. Add website
3. Thay đổi nameservers
4. Bật proxy và SSL

---

## 📊 Analytics

### Google Analytics

1. Tạo account tại [analytics.google.com](https://analytics.google.com)
2. Thêm vào `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions

Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy CV

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📱 PWA (Progressive Web App)

### Thêm PWA features

1. Cài đặt Vite PWA plugin:
```bash
npm install -D vite-plugin-pwa
```

2. Cập nhật `vite.config.js`:
```javascript
import { VitePWA } from 'vite-plugin-pwa'

export default {
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'CV - [Tên của bạn]',
        short_name: 'CV',
        description: 'CV cá nhân của [Tên]',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
}
```

---

## 🎯 Best Practices

### 1. Performance
- ✅ Optimize images (WebP, compression)
- ✅ Minimize JavaScript bundles
- ✅ Use CDN cho static assets
- ✅ Enable gzip compression

### 2. Security
- ✅ HTTPS only
- ✅ Content Security Policy
- ✅ No sensitive data in code

### 3. SEO
- ✅ Meta tags
- ✅ Open Graph tags
- ✅ Structured data
- ✅ Custom domain

### 4. Accessibility
- ✅ Alt text cho images
- ✅ Proper heading hierarchy
- ✅ Color contrast
- ✅ Keyboard navigation

---

## 📈 Monitoring

### 1. Uptime Monitoring
- [UptimeRobot](https://uptimerobot.com) (free)
- [Pingdom](https://pingdom.com)

### 2. Performance Monitoring
- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)

---

## 🆘 Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install

# Check for syntax errors
npm run lint
```

### Deploy Issues
- Kiểm tra build command và output directory
- Verify environment variables
- Check browser console for errors

---

**🎉 Chúc mừng! CV của bạn đã sẵn sàng online!**

Đừng quên update thường xuyên và chia sẻ link với mọi người! 🚀