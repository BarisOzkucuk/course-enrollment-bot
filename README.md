# 🎓 OBS Course Enrollment Automation (Ders Kayıt Otomasyonu)

[English](#english) | [Türkçe](#türkçe)

<a name="english"></a>
## 🇬🇧 English

### Description
This script automates the course registration process for university student information systems (OBS). It continuously monitors course quotas and automatically clicks the "Confirm/Approve" button when a slot becomes available.

### Features
- **Auto-Refresh:** Clicks "Check" button periodically to refresh quota status.
- **Instant Action:** Detects available slots within milliseconds using XPath.
- **Conflict Prevention:** Clears previous intervals to prevent browser crashes or duplicate actions.

### How to Use
1. Open the course registration page on your university's OBS system.
2. Press `F12` to open Developer Tools.
3. Go to the **Console** tab.
4. Copy and paste the code from `course-enrollment-bot.js`.
5. Press **Enter**.
6. Keep the tab open; the bot will notify you in the console when it takes action.

---

<a name="türkçe"></a>
## 🇹🇷 Türkçe

### Proje Hakkında
Bu script, üniversite OBS sistemlerinde ders kayıt dönemlerinde yaşanan kontenjan sorununu çözmek için geliştirilmiştir. Belirlenen dersin kontenjanını sürekli kontrol eder ve yer açıldığı anda otomatik olarak kaydı kesinleştirir.

### Özellikler
- **Otomatik Kontrol:** Belirlenen saniyede bir "Kontrol Et" butonuna basarak sayfayı/durumu yeniler.
- **Anlık Yakalama:** XPath teknolojisi ile butonları tarar ve milisaniyeler içinde tepki verir.
- **Çakışma Önleme:** Script tekrar çalıştırıldığında eski döngüleri temizler, böylece tarayıcı kasmaz.

### Nasıl Kullanılır?
1. Üniversite OBS sisteminde ders seçme ekranını açın.
2. `F12` tuşuna basarak Geliştirici Araçlarını (Developer Tools) açın.
3. **Console** sekmesine gelin.
4. `script.js` dosyasındaki kodları kopyalayıp buraya yapıştırın.
5. **Enter** tuşuna basın.
6. Sekmeyi açık tutun; bot çalıştığında konsola log düşecektir.

---

### ⚠️ Disclaimer / Sorumluluk Reddi
This tool is for educational purposes only. Please use it responsibly and in accordance with your university's IT policies.
(Bu araç sadece eğitim amaçlıdır. Lütfen üniversitenizin bilişim kurallarına uygun şekilde kullanın.)
