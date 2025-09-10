# HSD OSTİMTECH Resmi Web Sitesi - Frontend

Bu depo, HSD OSTİMTECH (Huawei Student Developers Ostim Teknik Üniversitesi) resmi web sitesinin frontend kodlarını içermektedir. Proje, modern web teknolojileriyle geliştirilmiş, kullanıcı dostu ve sürdürülebilir bir mimariye sahiptir.

---

## İçerik

- [Proje Hakkında](#proje-hakkında)
- [Teknolojiler](#teknolojiler)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Özellikler ve Modüller](#özellikler-ve-modüller)
- [Sayfa Analizi](#sayfa-analizi)
- [Admin Panel](#admin-panel)
- [Bileşenler ve UI](#bileşenler-ve-ui)
- [Animasyon ve UX](#animasyon-ve-ux)
- [Routing Yapısı](#routing-yapısı)
- [Katkı ve Geliştirme](#katkı-ve-geliştirme)
- [Lisans](#lisans)

---

## Proje Hakkında

HSD OSTİMTECH, Ostim Teknik Üniversitesi'nde kurulmuş olan öğrenci topluluğudur. Bu proje, topluluğun dijital platformu olarak tasarlanmış ve aşağıdaki amaçları hedeflemektedir:

- **Topluluk Yönetimi**: Üye kaydı, onayı ve yönetimi
- **Etkinlik Organizasyonu**: Workshop, hackathon, seminer gibi etkinliklerin duyurulması ve yönetimi
- **Proje Showcase**: Topluluk projelerinin sergilenmesi ve kategorize edilmesi
- **Duyuru Sistemi**: Önemli bilgilendirmelerin üyelere ulaştırılması
- **Eğitim Platformu**: Blog yazıları, rehberler ve öğrenme kaynaklarının paylaşılması
- **Sosyal Networking**: Üyeler arası iletişim ve iş birliği imkanları

## Teknolojiler

| Teknoloji     | Versiyon | Açıklama                          |
| ------------- | -------- | --------------------------------- |
| Next.js       | 15.3.5   | React tabanlı fullstack framework |
| React         | 19.0.0   | Frontend component kütüphanesi    |
| TypeScript    | ^5       | Tip güvenli JavaScript            |
| Tailwind CSS  | ^4       | Utility-first CSS framework       |
| Framer Motion | 12.23.3  | Animasyon ve geçiş kütüphanesi    |
| Iconify       | 6.0.0    | SVG ikon sistemi                  |
| Date-fns      | 4.1.0    | Tarih işlemleri kütüphanesi       |

## Kurulum ve Çalıştırma

1. **Depoyu klonlayın:**

   ```bash
   git clone https://github.com/HSD-OSTIMTECH/HSD-Frontend.git
   cd HSD-Frontend
   ```

2. **Bağımlılıkları yükleyin:**

   ```bash
   pnpm install
   # veya
   npm install
   # veya
   yarn install
   ```

3. **Geliştirme sunucusunu başlatın:**

   ```bash
   pnpm dev
   # veya
   npm run dev
   # veya
   yarn dev
   ```

4. **Tarayıcıda açın:**
   [http://localhost:3000](http://localhost:3000)

## Proje Yapısı

```
HSD-Frontend/
├── app/                          # Next.js 13+ App Router
│   ├── (auth)/                   # Kimlik doğrulama sayfaları
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   ├── (site)/                   # Ana site sayfaları
│   │   ├── about/
│   │   ├── projects/
│   │   ├── announcements/
│   │   ├── gallery/
│   │   ├── contact/
│   │   ├── profile/[name]/
│   │   ├── settings/
│   │   └── policy/
│   ├── admin/                    # Admin panel sayfaları
│   │   ├── projects/
│   │   ├── announcements/
│   │   ├── forms/
│   │   └── members/
│   └── layout.tsx               # Root layout
├── components/                   # Yeniden kullanılabilir bileşenler
│   ├── layout/                  # Layout bileşenleri
│   │   ├── site/               # Site layout bileşenleri
│   │   ├── adminLayout.tsx     # Admin panel layout
│   │   ├── adminSidebar.tsx    # Admin sidebar
│   │   └── settingsLayout.tsx  # Ayarlar layout
│   ├── shared/                 # Paylaşılan kartlar
│   │   ├── announcementCard.tsx
│   │   ├── projectCard.tsx
│   │   ├── coreTeamCard.tsx
│   │   └── ...
│   └── ui/                     # Temel UI bileşenleri
│       ├── button.tsx
│       ├── selectBox.tsx
│       └── calendar.tsx
├── public/                      # Statik dosyalar
│   ├── images/
│   └── avatars/
└── styles/                     # CSS dosyaları
    └── globals.css
```

## Özellikler ve Modüller

### 🏠 **Ana Sayfa**

- Hero section ile topluluk tanıtımı
- Ekip slider'ı
- Öne çıkan projeler
- Etkinlik duyuruları
- Hızlı erişim butonları

### 👥 **Hakkımızda**

- Topluluk vizyonu ve misyonu
- Core team üyeleri
- Departman bazında filtreleme
- Sosyal medya entegrasyonu
- Başarı hikayelerimiz

### 🚀 **Projeler**

- Kategori bazında proje listesi (UI/UX, Web, Mobil, Farkındalık)
- Proje detay sayfaları
- GitHub entegrasyonu
- Canlı demo linkleri
- Teknoloji etiketleri

### 📢 **Duyurular**

- Önemli duyurular bölümü
- Tarih ve kategori filtreleme
- Modal ile detay görüntüleme
- Yazar bilgileri
- Etkileşimli kart tasarımı

### 🖼️ **Galeri**

- Etkinlik fotoğrafları
- Grid layout
- Responsive tasarım
- Lightbox görüntüleme

### 👤 **Profil Sistemi**

- Kişisel profil sayfaları
- Sosyal medya linkleri
- Proje geçmişi
- Başarım rozetleri

### ⚙️ **Ayarlar**

- Tema ayarları (Dark/Light/System)
- Bildirim tercihleri
- Güvenlik ayarları
- Hesap yönetimi

## Sayfa Analizi

### **Site Sayfaları (8 ana kategori)**

1. **Kimlik Doğrulama (`/auth`)**

   - Giriş yapma sistemi
   - Kayıt olma formu
   - Şifre sıfırlama

2. **Ana İçerik Sayfaları**

   - Ana sayfa (`/`)
   - Hakkımızda (`/about`)
   - Projeler (`/projects`)
   - Duyurular (`/announcements`)
   - Galeri (`/gallery`)
   - İletişim (`/contact`)

3. **Kullanıcı Sayfaları**

   - Dinamik profil (`/profile/[name]`)
   - Ayarlar (`/settings/*`)

4. **Yasal Sayfalar (`/policy`)**
   - Gizlilik politikası
   - Kullanım şartları
   - Çerez politikası

## Admin Panel

### **Kapsamlı Yönetim Sistemi**

**Proje Yönetimi:**

- Proje ekleme/düzenleme
- Kategori yönetimi
- GitHub entegrasyonu
- Görsel yükleme

**Duyuru Yönetimi:**

- Duyuru oluşturma
- Yazar atama
- Tarihleme sistemi
- Öncelik belirleme

**Form Yönetimi:**

- Form oluşturucu
- Soru ekleme/düzenleme
- Yanıt analizi
- Excel export

**Üye Yönetimi:**

- Üye başvuru onayı
- Reddetme sebepleri
- Departman atama
- İstatistikler

**Güvenlik Özellikleri:**

- Sadece masaüstü erişim
- Modal tabanlı düzenleme
- Onay mekanizmaları
- Loglama sistemi

## Bileşenler ve UI

### **Temel UI Bileşenleri**

- **Button**: 3 varyant (primary, outline, ghost)
- **SelectBox**: Animasyonlu dropdown
- **Calendar**: Tarih seçici
- **Modal**: Overlay tabanlı popup'lar

### **Kart Bileşenleri**

- **AnnouncementCard**: Duyuru kartları
- **ProjectCard**: Proje showcase kartları
- **CoreTeamCard**: Ekip üyesi kartları
- **GalleryCard**: Galeri görüntü kartları
- **FormCard**: Form yönetim kartları

### **Layout Bileşenleri**

- **Navbar**: Mega menu sistemli navigasyon
- **Footer**: Sosyal medya linkleri
- **AdminSidebar**: Collapsible admin menü
- **SettingsSidebar**: Ayarlar navigasyonu

## Animasyon ve UX

### **Framer Motion Entegrasyonu**

- Sayfa geçiş animasyonları
- Modal açılış/kapanış efektleri
- Hover ve focus durumları
- Scroll tetiklemeli animasyonlar
- Loading state'leri

### **Responsive Tasarım**

- Mobile-first yaklaşım
- Tailwind CSS breakpoint'leri
- Adaptive layout'lar
- Touch-friendly interface

### **Erişilebilirlik**

- ARIA label'ları
- Keyboard navigasyon
- Color contrast compliance
- Screen reader desteği

## Routing Yapısı

### **Next.js 13+ App Router**

- File-based routing
- Layout composition
- Server ve Client Components
- Dynamic routing (`[name]`)
- Route groups (`(auth)`, `(site)`)

### **SEO Optimizasyonu**

- Meta tag yönetimi
- Open Graph desteği
- Sitemap.xml
- Robots.txt

## Katkı ve Geliştirme

### **Geliştirme Süreci**

1. Issue oluşturun
2. Feature branch açın
3. Değişiklikleri commit edin
4. Pull request gönderin
5. Code review süreci
6. Merge ve deploy

### **Kod Standartları**

- TypeScript strict mode
- ESLint kuralları
- Prettier formatlaması
- Component dokümantasyonu

### **Test Stratejisi**

- Unit testler
- Integration testler
- E2E testler
- Performance testleri

## Lisans

Bu proje **HSD OSTİMTECH**'e aittir. Tüm hakları saklıdır.

**Kullanım İzinleri:**

- Eğitim amaçlı inceleme ✅
- Fork ve katkı ✅
- Ticari kullanım ❌
- Yeniden dağıtım ❌

Detaylı bilgi için [LICENSE](LICENSE) dosyasını inceleyin.

---

**Geliştirici Ekibi:**

- Core Team: Full-stack geliştiriciler
- UI/UX Team: Tasarım uzmanları
- DevOps Team: Deployment ve altyapı

---

_Bu dokümantasyon sürekli güncellenmektedir. Son güncellemeler için repository'yi takip edin._
