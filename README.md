# Data Analyst Portfolio Website

Portfolio website untuk freelance Data Analyst & Python Developer dengan fokus pada conversion dan lead generation.

## 📁 Struktur File

```
portfolio-website/
│
├── index.html          # File HTML utama
├── css/
│   └── styles.css      # Semua styling CSS
├── js/
│   └── main.js         # JavaScript untuk interaktivitas
├── assets/             # Folder untuk gambar/media (opsional)
└── README.md           # Dokumentasi ini
```

## 🚀 Cara Menggunakan

### 1. Buka Website
- Buka file `index.html` di browser Anda
- Atau gunakan Live Server di VS Code untuk development

### 2. Customize Konten

#### A. Informasi Kontak
Edit di `index.html` dan ganti:
- `https://wa.me/62xxx` → Nomor WhatsApp Anda
- `halo@anda.com` → Email Anda
- `namaanda` → Username social media Anda

#### B. Stats & Metrics
Edit angka-angka di Hero Section:
```html
<span class="stat-number">90%</span>
<span class="stat-number">5+</span>
```

#### C. Project Details
Tambahkan link project Anda:
```html
<a href="#" class="project-link primary">
    📊 Lihat Notebook Colab
</a>
```

#### D. Logo & Branding
Ganti logo di navbar:
```html
<a href="#" class="logo">📊 DataPro</a>
```

### 3. Customization Lanjutan

#### Warna (di `css/styles.css`)
```css
:root {
    --primary: #2563eb;      /* Warna utama */
    --secondary: #10b981;    /* Warna sekunder */
    --accent: #f59e0b;       /* Warna aksen */
}
```

#### Font (di `index.html`)
Ganti font Google di `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

## 🎨 Fitur Utama

### 1. Hero Section
- Headline compelling dengan gradient text
- CTA buttons (WhatsApp & Portfolio)
- Stats card dengan animasi
- Trust badges

### 2. Value Proposition
- 3 benefit cards dengan icons
- Hover effects yang smooth
- Responsive grid layout

### 3. Services Catalog
- 4 service cards
- Tech stack badges
- Hover animations

### 4. Portfolio Projects
- 3 project showcases
- Impact metrics
- Project links (Colab/GitHub)

### 5. ROI Calculator
- Interactive form
- Real-time calculation
- Animated results

### 6. Free Audit Section
- Lead generation tool
- Feature list dengan checkmarks
- Strong CTA

### 7. Before/After Comparison
- Visual comparison
- Color-coded sections
- Persuasive copy

### 8. FAQ Accordion
- 5 common questions
- Smooth toggle animation
- Mobile-friendly

### 9. Contact Section
- Multiple contact methods
- Social media links
- Professional footer

## 📱 Responsive Design

Website ini fully responsive untuk:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## ⚡ Performance

### Optimasi yang Sudah Diterapkan:
- ✅ Minimal external dependencies
- ✅ CSS animations (hardware accelerated)
- ✅ Lazy loading ready
- ✅ Smooth scroll behavior
- ✅ Optimized images (jika Anda tambahkan)

### Page Load Tips:
1. Compress images sebelum upload
2. Gunakan WebP format untuk gambar
3. Minify CSS & JS untuk production
4. Enable gzip compression di hosting

## 🔧 Troubleshooting

### Calculator Tidak Bekerja?
- Pastikan `main.js` ter-load dengan benar
- Check console browser untuk errors
- Pastikan form IDs match dengan JavaScript

### Animasi Tidak Muncul?
- Scroll lebih ke bawah untuk trigger
- Pastikan JavaScript berjalan
- Check browser compatibility

### Mobile Menu Tidak Muncul?
- Resize browser window
- Hamburger menu akan muncul di < 768px

## 🚀 Deploy ke Hosting

### Option 1: Netlify (Gratis)
1. Drag & drop folder ke netlify.com
2. Custom domain (opsional)
3. SSL otomatis

### Option 2: GitHub Pages
1. Upload ke GitHub repository
2. Enable GitHub Pages di Settings
3. Akses via username.github.io

### Option 3: Vercel
1. Import project ke vercel.com
2. Deploy otomatis
3. Custom domain tersedia

## 📊 Analytics (Opsional)

Tambahkan Google Analytics:
```html
<!-- Di <head> index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🎯 Next Steps

1. **Tambahkan Screenshots Project**
   - Buat folder `assets/images/`
   - Upload screenshot project
   - Tambahkan di project cards

2. **SEO Optimization**
   - Tambahkan meta description
   - Open Graph tags untuk social sharing
   - Sitemap.xml

3. **Blog Section (Opsional)**
   - Tambahkan section blog
   - Share case studies
   - Tutorial Python/Data Analytics

4. **Contact Form Backend**
   - Integrasikan dengan Formspree
   - Atau gunakan Google Forms
   - Email notification setup

## 📝 License

Free to use dan modify sesuai kebutuhan Anda!

## 💬 Support

Jika ada pertanyaan atau butuh bantuan:
- Open issue di GitHub
- Email: support@example.com
- WhatsApp: +62-xxx-xxxx-xxxx

---

**Built with ❤️ using HTML, CSS, and JavaScript**

🚀 Good luck dengan portfolio Anda!
