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
