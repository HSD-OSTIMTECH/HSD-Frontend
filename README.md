# ÇOK ÖNEMLİ DEĞİŞİKLİKLER...

# HSD OSTİMTECH Resmi Web Sitesi - Frontend

Bu depo, HSD OSTİMTECH resmi web sitesinin frontend kodlarını içerir. Proje, modern web teknolojileriyle geliştirilmiş, kullanıcı dostu ve sürdürülebilir bir mimariye sahiptir.

---

## İçerik

- [Proje Hakkında](#proje-hakkında)
- [Teknolojiler](#teknolojiler)
- [Kurulum ve Çalıştırma](#kurulum-ve-çalıştırma)
- [Proje Yapısı](#proje-yapısı)
- [Bileşenler ve Sayfalar](#bileşenler-ve-sayfalar)
- [Animasyon ve UI](#animasyon-ve-ui)
- [Katkı ve Geliştirme](#katkı-ve-geliştirme)
- [Lisans](#lisans)

---

## Proje Hakkında

Bu proje, HSD OSTIMTECH topluluğu için kurumsal ve topluluk odaklı bir web arayüzü sunar. Amaç; etkinlikler, duyurular, profil ve başarımlar gibi modüllerle, kullanıcıların topluluk işlevlerine hızlı ve modern bir şekilde ulaşmasını sağlamaktır.

## Teknolojiler

| Teknoloji      | Açıklama                |
|---------------|-------------------------|
| Next.js       | React tabanlı framework |
| TypeScript    | Tip güvenli JavaScript  |
| Tailwind CSS  | Utility-first CSS       |
| Redux         | State yönetimi          |
| Framer Motion | Animasyon kütüphanesi   |
| Iconify       | Vektör ikonlar          |

## Kurulum ve Çalıştırma

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/HSD-OSTIMTECH/HSD-Frontend.git
   cd HSD-Frontend
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   pnpm install # veya npm/yarn
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm dev # veya npm run dev / yarn dev
   ```
4. [http://localhost:3000](http://localhost:3000) adresini açın.

## Proje Yapısı

- `pages/` : Tüm sayfa ve route dosyaları
- `components/` : Tekrar kullanılabilir React bileşenleri (Button, Card, SelectBox, vb.)
- `public/` : Statik dosyalar (görseller, favicon, vs.)
- `styles/` : Global ve özel stiller

## Bileşenler ve Sayfalar

- **Button**: Farklı varyantlar ve link/button desteği ile özel buton.
- **AnnouncementCard**: Duyuru kartı, modal ile detay gösterimi.
- **SelectBox**: Framer-motion ile animasyonlu dropdown select.
- **ProjectCard**: Proje kartı, hover ile detay overlay.
- **Profile**: Kullanıcı profil sayfası, başarımlar ve sosyal bilgiler.
- **Duyurular**: Duyurular ve önemli duyurular, simülasyon ile fetch edilen veri örnekleri.
- **Animasyonlar**: Framer Motion ile geçiş ve modal animasyonları.

## Animasyon ve UI

- Tüm kartlar ve dropdownlar animasyonlu, modern ve responsive.
- Modal açılış/kapanışları, hover efektleri ve geçişler Framer Motion ile sağlanır.
- Tasarımda font-advent-pro ve font-poppins kullanılır.

## Katkı ve Geliştirme

Katkıda bulunmak için:

1. Fork oluşturun.
2. Yeni bir dalda değişiklik yapın.
3. Pull request gönderin.
4. Her türlü geri bildirime ve katkıya açığız.

## Lisans

Bu proje HSD OSTİMTECH'e aittir. Tüm hakları saklıdır. Kullanım ve paylaşım için lütfen [LICENSE](LICENSE) dosyasını inceleyin.

---

