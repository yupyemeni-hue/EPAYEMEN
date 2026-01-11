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

function switchLanguage(lang) {
    const isRtl = lang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // تغيير نصوص القائمة (Navigation)
    const navLinks = document.querySelectorAll('nav ul li a');
    const keys = ['home', 'maps', 'govs', 'indicators', 'news', 'about'];
    navLinks.forEach((link, index) => {
        link.textContent = translations[lang][keys[index]];
    });

    // تغيير العنوان الرئيسي
    document.querySelector('header h1').textContent = translations[lang].title;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('lang-ar').addEventListener('click', () => switchLanguage('ar'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));
    
    // ضبط اللغة الافتراضية
    switchLanguage('ar');
});
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = 200; // سرعة الحركة
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}

// تشغيل العدادات عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", animateCounters);
