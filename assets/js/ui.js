// 1. قاموس اللغات لترجمة الواجهة
const translations = {
    ar: {
        title: "منصة إباي للبيئة",
        home: "الرئيسية",
        maps: "الخرائط",
        govs: "المحافظات",
        indicators: "المؤشرات",
        news: "الأخبار",
        about: "عن المنصة",
        loading: "جاري جلب البيانات الحية...",
        selectGov: "اختر محافظة لعرض بياناتها"
    },
    en: {
        title: "EPAYEMEN Platform",
        home: "Home",
        maps: "Maps",
        govs: "Governorates",
        indicators: "Indicators",
        news: "News",
        about: "About Us",
        loading: "Fetching live data...",
        selectGov: "Select a governorate to view data"
    }
};

// 2. دالة تبديل اللغة وتغيير اتجاه الموقع
function switchLanguage(lang) {
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    const navLinks = document.querySelectorAll('nav ul li a');
    const keys = ['home', 'maps', 'govs', 'indicators', 'news', 'about'];
    navLinks.forEach((link, index) => {
        if (keys[index]) link.textContent = translations[lang][keys[index]];
    });

    const headerTitle = document.querySelector('header h1');
    if (headerTitle) headerTitle.textContent = translations[lang].title;
}

// 3. دالة تحريك العدادات (Animation)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; 
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// 4. دالة تحديث الأرقام بناءً على البيانات الحقيقية
async function updateLiveStats() {
    if (typeof governorates === "undefined") return;

    const avgTemp = governorates.reduce((acc, curr) => acc + curr.temp, 0) / governorates.length;
    const avgHum = governorates.reduce((acc, curr) => acc + curr.humidity, 0) / governorates.length;

    const tempCounter = document.querySelector('[data-target="75"]'); 
    if(tempCounter) tempCounter.setAttribute('data-target', Math.round(avgTemp));

    const humCounter = document.querySelector('[data-target="63"]');
    if(humCounter) humCounter.setAttribute('data-target', Math.round(avgHum));

    animateCounters();
}

// 5. دالة جلب الأخبار تلقائياً
function loadNews() {
    const newsList = document.getElementById('news-list');
    if(!newsList) return;

    const sampleNews = [
        { title: "حملة تشجير واسعة في صنعاء", date: "2026-01-10" },
        { title: "تحسن ملحوظ في جودة الهواء في عدن", date: "2026-01-08" },
        { title: "تحذيرات من منخفض جوي قادم نحو المهرة", date: "2026-01-05" }
    ];

    newsList.innerHTML = sampleNews.map(n => `
        <li class="news-card" style="background:white; margin:10px 0; padding:15px; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.1); list-style:none; text-align:right;">
            <h4 style="color:#004d40; margin:0;">${n.title}</h4>
            <small style="color:#666;">${n.date}</small>
        </li>
    `).join('');
}

// 6. تشغيل كل الوظائف عند تحميل الصفحة (المحرك الرئيسي)
document.addEventListener("DOMContentLoaded", () => {
    // تشغيل نظام اللغات
    const btnAr = document.getElementById('lang-ar');
    const btnEn = document.getElementById('lang-en');
    if(btnAr) btnAr.addEventListener('click', () => switchLanguage('ar'));
    if(btnEn) btnEn.addEventListener('click', () => switchLanguage('en'));
    
    switchLanguage('ar'); // اللغة الافتراضية

    // تشغيل العدادات والبيانات
    updateLiveStats();

    // تشغيل الأخبار
    loadNews();
});
