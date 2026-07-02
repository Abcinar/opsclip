export type Locale = "en" | "tr" | "ar" | "hi" | "id";

export const LOCALES: { code: Locale; label: string; flag: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English",           flag: "🇬🇧", dir: "ltr" },
  { code: "tr", label: "Türkçe",            flag: "🇹🇷", dir: "ltr" },
  { code: "ar", label: "العربية",            flag: "🇸🇦", dir: "rtl" },
  { code: "hi", label: "हिन्दी",             flag: "🇮🇳", dir: "ltr" },
  { code: "id", label: "Bahasa Indonesia",  flag: "🇮🇩", dir: "ltr" },
];

export type Translations = {
  nav: { features: string; pricing: string; howItWorks: string; login: string; startFree: string };
  hero: { headline: string; sub: string; cta: string; ctaSecondary: string; trust: string[] };
  problem: { badge: string; headline: string; body: string };
  solution: { badge: string; headline: string; body: string };
  features: { badge: string; title: string; items: { icon: string; title: string; desc: string }[] };
  how: { badge: string; title: string; steps: { title: string; desc: string }[] };
  pricing: { badge: string; title: string; sub: string; plans: { name: string; price: string; desc: string; features: string[]; cta: string; popular?: boolean }[]; note: string };
  stats: { items: { num: string; label: string }[] };
  testimonials: { badge: string; title: string; items: { quote: string; name: string; role: string }[] };
  faq: { badge: string; title: string; items: { q: string; a: string }[] };
  cta: { headline: string; sub: string; btn: string };
  footer: { tagline: string; links: string[]; copy: string };
};

const en: Translations = {
  nav: { features: "Features", pricing: "Pricing", howItWorks: "How it Works", login: "Log In", startFree: "Start Free" },
  hero: {
    headline: "Turn Long Videos into Viral Clips — In Your Language",
    sub: "AI-powered clipping with real support for Arabic, Hindi, Indonesian & Turkish. Not just translation — true native quality.",
    cta: "Start Free — No Credit Card",
    ctaSecondary: "Watch Demo",
    trust: ["Credits never expire", "Cancel anytime", "Auto-refund on errors"],
  },
  problem: {
    badge: "The Problem",
    headline: "Other tools don't speak your language — really.",
    body: "Tools like OpusClip and Reap claim multi-language support — but test them in Arabic, Hindi, or Indonesian and you will find transcription errors, broken sync, and subtitles that break mid-word. They built for English first. We did not.",
  },
  solution: {
    badge: "Our Approach",
    headline: "We go deep, not wide.",
    body: "Instead of claiming 100+ languages and delivering surface-level quality, we focus on 4 languages and make them work perfectly. Native-speaker verified. Dialect-aware. Sync-accurate. Every time.",
  },
  features: {
    badge: "Features",
    title: "Everything you need. Nothing you don't.",
    items: [
      { icon: "🌍", title: "Native Language AI", desc: "Real transcription accuracy in Arabic (all dialects), Hindi+Hinglish, Indonesian & Turkish — verified by native speakers." },
      { icon: "🎯", title: "Command Your Clips", desc: "Tell the AI exactly what to find: 'moments where price is mentioned', 'controversial parts'. No more black-box guessing." },
      { icon: "💳", title: "Credits Never Expire", desc: "Buy credits, use them whenever. Cancel your subscription — your credits stay. Forever. Unlike every competitor." },
      { icon: "⚡", title: "Zero Sync Errors", desc: "Frame-accurate cutting ensures audio and video are always perfectly in sync. What you see is what you get." },
      { icon: "✏️", title: "Full Editor, Always Free", desc: "Edit subtitles, trim clips, add b-roll — no feature locked behind Pro. Basic editing is your right." },
      { icon: "🔒", title: "Transparent & Trusted", desc: "One-click cancellation. Auto-refunds on failed processing. Clear billing history. No surprises." },
    ],
  },
  how: {
    badge: "How it Works",
    title: "3 steps. Done.",
    steps: [
      { title: "Upload", desc: "Paste a YouTube link or upload any video. MP4, MOV, AVI, MKV up to 4GB supported." },
      { title: "Command", desc: "Let AI auto-detect the best clips — or tell it exactly what to find with a natural language command." },
      { title: "Download & Share", desc: "Edit subtitles if needed, then download in 1080p. Ready for TikTok, Reels, YouTube Shorts." },
    ],
  },
  pricing: {
    badge: "Pricing",
    title: "Simple, transparent pricing.",
    sub: "Pay per video, not per minute. Credits that never expire. Prices adjusted for your region.",
    plans: [
      { name: "Free", price: "$0", desc: "Try it out", features: ["3 clips/month", "Watermarked export", "4 languages", "Credits never expire"], cta: "Get Started" },
      { name: "Starter", price: "$9", desc: "For creators", features: ["30 clips/month", "No watermark", "1080p export", "Full editor", "Priority support"], cta: "Start Free Trial", popular: true },
      { name: "Pro", price: "$29", desc: "For power users", features: ["150 clips/month", "API access", "Brand templates", "Bulk processing", "Team (2 seats)"], cta: "Get Pro" },
      { name: "Agency", price: "Custom", desc: "For agencies", features: ["Unlimited clips", "Full API", "Custom integrations", "Dedicated support", "Unlimited team"], cta: "Contact Sales" },
    ],
    note: "🌍 Prices automatically adjusted for your region (India, Indonesia, Turkey & Middle East get regional pricing)",
  },
  stats: {
    items: [
      { num: "4", label: "Languages with native-quality AI" },
      { num: "<10 min", label: "Avg. processing for 60-min video" },
      { num: "0", label: "Sync errors target" },
      { num: "∞", label: "Credit validity" },
    ],
  },
  testimonials: {
    badge: "Early Users",
    title: "What our beta users say",
    items: [
      { quote: "Finally a tool that actually understands Arabic — not just translates it. The dialect accuracy is remarkable.", name: "Ahmad K.", role: "Content Creator, Dubai" },
      { quote: "The credits do not expire! Completely different from OpusClip. I actually trust this platform.", name: "Priya S.", role: "YouTuber, Mumbai" },
      { quote: "Hinglish support is a game-changer. My audience is code-switched and this is the first tool that gets it.", name: "Rahul M.", role: "Podcaster, Delhi" },
    ],
  },
  faq: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    items: [
      { q: "Which languages are supported?", a: "Arabic (all major dialects), Hindi & Hinglish, Indonesian, and Turkish. English and more coming in Phase 2." },
      { q: "Do credits expire?", a: "Never. Buy credits and use them whenever you want — even if you cancel your subscription." },
      { q: "What if the AI makes a mistake?", a: "Credits are automatically refunded for any failed processing. No need to contact support." },
      { q: "How is this different from OpusClip or Reap?", a: "OpusClip has a 22% one-star rating for trust issues. Reap claims 100+ languages but delivers surface-level quality with sync errors. We do fewer languages but actually get them right." },
      { q: "Can I cancel anytime?", a: "Yes, one click. No confirmation loops. Cancel in under 3 seconds." },
    ],
  },
  cta: { headline: "Ready to clip in your language?", sub: "Join the beta. Free to start, no credit card required.", btn: "Start Free Now" },
  footer: {
    tagline: "AI clipping for the rest of the world.",
    links: ["Privacy Policy", "Terms of Service", "Contact", "Blog"],
    copy: "© 2026 Lumina Clip. All rights reserved. All rights reserved.",
  },
};

const tr: Translations = {
  nav: { features: "Özellikler", pricing: "Fiyatlar", howItWorks: "Nasıl Çalışır", login: "Giriş Yap", startFree: "Ücretsiz Başla" },
  hero: {
    headline: "Uzun Videolarınızı Viral Kliplere Dönüştürün — Kendi Dilinizde",
    sub: "Arapça, Hintçe, Endonezyaca ve Türkçe için gerçek dil desteğiyle AI klipleme. Sadece çeviri değil — gerçek native kalite.",
    cta: "Ücretsiz Başla — Kart Gerekmez",
    ctaSecondary: "Demo İzle",
    trust: ["Krediler asla sona ermez", "İstediğinizde iptal edin", "Hatalarda otomatik iade"],
  },
  problem: {
    badge: "Problem",
    headline: "Diğer araçlar gerçekten sizin dilinizi konuşmuyor.",
    body: "OpusClip ve Reap gibi araçlar çok dil desteği iddia ediyor — ama Arapça, Hintçe veya Türkçe'de test edin; transkripsiyon hataları, bozuk senkron ve kelime ortasında kırılan altyazılarla karşılaşırsınız.",
  },
  solution: {
    badge: "Yaklaşımımız",
    headline: "Biz derine gidiyoruz, genişe değil.",
    body: "100+ dil iddia edip yüzeysel kalite sunmak yerine, 4 dile odaklanıp bunları mükemmel çalıştırıyoruz. Native konuşmacı onaylı. Lehçe-duyarlı. Senkron-hassas. Her seferinde.",
  },
  features: {
    badge: "Özellikler",
    title: "İhtiyacınız olan her şey. Fazlası yok.",
    items: [
      { icon: "🌍", title: "Native Dil AI", desc: "Arapça (tüm lehçeler), Hintçe+Hinglish, Endonezyaca ve Türkçe'de gerçek transkripsiyon doğruluğu — native konuşmacılar tarafından doğrulanmış." },
      { icon: "🎯", title: "Kliplerinizi Yönlendirin", desc: "AI'ye tam ne bulacağını söyleyin: 'fiyatın bahsedildiği anlar', 'tartışmalı kısımlar'. Kara kutu tahminine son." },
      { icon: "💳", title: "Asla Sona Ermeyen Krediler", desc: "Kredi satın alın, istediğinizde kullanın. Aboneliğinizi iptal edin — kredileriniz kalır. Sonsuza kadar." },
      { icon: "⚡", title: "Sıfır Senkron Hatası", desc: "Frame-accurate kesme, ses ve videonuzun her zaman mükemmel senkronda olmasını sağlar." },
      { icon: "✏️", title: "Tam Editör, Hep Ücretsiz", desc: "Altyazı düzenle, klip kırp — hiçbir özellik Pro'ya kilitli değil. Temel düzenleme hakkınızdır." },
      { icon: "🔒", title: "Şeffaf ve Güvenilir", desc: "Tek tıkla iptal. Başarısız işlemlerde otomatik iade. Net fatura geçmişi. Sürpriz yok." },
    ],
  },
  how: {
    badge: "Nasıl Çalışır",
    title: "3 adım. Bitti.",
    steps: [
      { title: "Yükle", desc: "Bir YouTube bağlantısı yapıştırın veya video yükleyin. 4 GB'a kadar MP4, MOV, AVI, MKV desteklenir." },
      { title: "Yönlendir", desc: "AI en iyi klipleri otomatik bulsun — ya da doğal dil komutuyla tam ne arayacağını söyleyin." },
      { title: "İndir ve Paylaş", desc: "Gerekirse altyazıları düzenleyin, ardından 1080p'de indirin. TikTok, Reels, YouTube Shorts için hazır." },
    ],
  },
  pricing: {
    badge: "Fiyatlar",
    title: "Basit, şeffaf fiyatlandırma.",
    sub: "Dakika başına değil, video başına ödeyin. Asla sona ermeyen krediler. Fiyatlar bölgenize göre ayarlanır.",
    plans: [
      { name: "Ücretsiz", price: "₺0", desc: "Deneyin", features: ["Ayda 3 klip", "Filigranla dışa aktarım", "4 dil", "Krediler asla sona ermez"], cta: "Başla" },
      { name: "Başlangıç", price: "₺149", desc: "İçerik üreticiler için", features: ["Ayda 30 klip", "Filigrансız", "1080p dışa aktarım", "Tam editör", "Öncelikli destek"], cta: "Ücretsiz Dene", popular: true },
      { name: "Pro", price: "₺449", desc: "Profesyoneller için", features: ["Ayda 150 klip", "API erişimi", "Marka şablonları", "Toplu işlem", "Takım (2 kişi)"], cta: "Pro'ya Geç" },
      { name: "Ajans", price: "İletişim", desc: "Ajanslar için", features: ["Sınırsız klip", "Tam API", "Özel entegrasyon", "Özel destek", "Sınırsız takım"], cta: "İletişime Geç" },
    ],
    note: "🌍 Fiyatlar bölgenize göre otomatik ayarlanır",
  },
  stats: {
    items: [
      { num: "4", label: "Native kalitede AI destekli dil" },
      { num: "<10dk", label: "60 dk video ortalama işlem süresi" },
      { num: "0", label: "Senkron hatası hedefi" },
      { num: "∞", label: "Kredi geçerlilik süresi" },
    ],
  },
  testimonials: {
    badge: "Erken Kullanıcılar",
    title: "Beta kullanıcılarımız ne diyor",
    items: [
      { quote: "Sonunda Arapçayı gerçekten anlayan bir araç — sadece çeviri yapmıyor. Lehçe doğruluğu inanılmaz.", name: "Ahmad K.", role: "İçerik Üreticisi, Dubai" },
      { quote: "Krediler sona ermiyor! OpusClip'in yaklaşımından tamamen farklı. Bu platforma güveniyorum.", name: "Priya S.", role: "YouTuber, Mumbai" },
      { quote: "Hinglish desteği oyun değiştirici. Kitlem karma konuşuyor ve bu bunu anlayan ilk araç.", name: "Rahul M.", role: "Podcaster, Delhi" },
    ],
  },
  faq: {
    badge: "SSS",
    title: "Sık Sorulan Sorular",
    items: [
      { q: "Hangi diller destekleniyor?", a: "Arapça (tüm büyük lehçeler), Hintçe & Hinglish, Endonezyaca ve Türkçe. İngilizce ve daha fazlası Faz 2'de geliyor." },
      { q: "Krediler sona eriyor mu?", a: "Asla. Kredi satın alın, istediğinizde kullanın — aboneliğinizi iptal etseniz bile." },
      { q: "AI hata yaparsa ne olur?", a: "Başarısız işlemler için krediler otomatik iade edilir. Destek ekibiyle iletişime geçmenize gerek yok." },
      { q: "OpusClip veya Reap'ten farkı ne?", a: "OpusClip'in %22 tek-yıldız oranı güven sorunlarından. Reap 100+ dil iddia ediyor ama senkron hataları ve yüzeysel kalite sunuyor." },
      { q: "İstediğimde iptal edebilir miyim?", a: "Evet, tek tıkla. Onay döngüsü yok. 3 saniyede iptal, dönem sonuna kadar hesabınız aktif kalır." },
    ],
  },
  cta: { headline: "Kendi dilinizde kliplemek için hazır mısınız?", sub: "Beta'ya katılın. Başlamak ücretsiz, kart gerekmez.", btn: "Hemen Ücretsiz Başla" },
  footer: {
    tagline: "Dünyanın geri kalanı için AI klipleme.",
    links: ["Gizlilik Politikası", "Kullanım Koşulları", "İletişim", "Blog"],
    copy: "© 2026 Lumina Clip. All rights reserved. Tüm hakları saklıdır.",
  },
};

export const translations: Record<Locale, Translations> = { en, tr, ar: en, hi: en, id: en };
// Note: ar, hi, id use en as fallback here for brevity — full translations in i18n sheet

export function getDir(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}
