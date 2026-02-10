// --- AYARLAR ---
const KONTROL_ET_BEKLEME_SURESI = 5000; // 5 Saniye (Ban yememek için ideal)
const TARAMA_HIZI = 250; // Saniyede 4 kez ekranı kontrol eder (Çok hızlı)

let sonTiklamaZamani = 0; 
let donguAktif = true; 

// Eski çalışan kod varsa temizle (Çakışma olmasın)
var highestIntervalId = setInterval(";");
for (var i = 0 ; i < highestIntervalId ; i++) {
    clearInterval(i);
}

console.log("OTOMASYON BAŞLADI: 'Kesinleştir/Onayla' bekleniyor...");

var automationInterval = setInterval(function() {
    if (!donguAktif) return; 

    // Şimdiki zamanı al
    var suAn = Date.now();

    // --- 1. FONKSİYON: Buton Bulucu (XPath ile nokta atışı) ---
    function butonuGetir(aranacakMetin) {
        // Hem text içeriğine hem de value (input butonları için) değerine bakar
        var xpath = "//*[contains(text(), '" + aranacakMetin + "') or contains(@value, '" + aranacakMetin + "')]";
        var sonuc = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return sonuc.singleNodeValue;
    }

    // --- 2. ADIM: ÖNCE ONAY BUTONUNU ARA (ACİLİYETLİ) ---
    // Resimdeki tam metni yazıyoruz: "Kesinleştir/Onayla"
    var btnOnayla = butonuGetir("Kesinleştir/Onayla");

    if (btnOnayla) {
        console.log("🚨 HEDEF GÖRÜLDÜ! 'Kesinleştir/Onayla' butonuna BASILIYOR! 🚨");
        
        // Tıklama işlemini garantiye al
        btnOnayla.click();
        btnOnayla.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true, view: window}));

        // Döngüyü durdurma! Belki sistem hatası verir, tekrar basması gerekebilir.
        // Sadece konsola bilgi veriyoruz.
        console.log("✅ Tıklama gönderildi. Sonuç bekleniyor...");
        
        // Eğer tek seferde kesin bitiyorsa aşağıdaki iki satırın başındaki // işaretini kaldırabilirsin:
        // donguAktif = false;
        // clearInterval(automationInterval); 
    } 
    
    // --- 3. ADIM: ONAY YOKSA, KONTROL ET'E BAS (SÜRELİ) ---
    else {
        var btnKontrol = butonuGetir("Kontrol Et");

        if (btnKontrol) {
            // Son tıklamadan beri 5 saniye geçti mi?
            if (suAn - sonTiklamaZamani >= KONTROL_ET_BEKLEME_SURESI) {
                console.log("⏱️ Süre doldu -> 'Kontrol Et' butonuna basılıyor...");
                btnKontrol.click();
                sonTiklamaZamani = suAn; // Sayacı sıfırla
            }
        } else {
            // Eğer Kontrol Et butonu bile yoksa sayfa yükleniyordur veya iframe hatasıdır
            // console.log("Butonlar aranıyor...");
        }
    }

}, TARAMA_HIZI); 

