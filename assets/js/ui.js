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

    // حساب المتوسطات من البيانات الموجودة في data.js
    const avgTemp = governorates.reduce((acc, curr) => acc + curr.temp, 0) / governorates.length;
    const avgHum = governorates.reduce((acc, curr) => acc + curr.humidity, 0) / governorates.length;

    // ربط متوسط الحرارة بالعداد الأول (الذي كان هدفه 75)
    const tempCounter = document.querySelector('[data-target="75"]'); 
    if(tempCounter) {
        tempCounter.setAttribute('data-target', Math.round(avgTemp));
    }

    // ربط متوسط الرطوبة بالعداد الثالث (الذي كان هدفه 63)
    const humCounter = document.querySelector('[data-target="63"]');
    if(humCounter) {
        humCounter.setAttribute('data-target', Math.round(avgHum));
    }

    // تشغيل الأنيميشن بعد ضبط القيم الجديدة
    animateCounters();
}

// 5. تشغيل كل الوظائف عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    // تشغيل نظام اللغات
    const btnAr = document.getElementById('lang-ar');
    const btnEn = document.getElementById('lang-en');
    if(btnAr) btnAr.addEventListener('click', () => switchLanguage('ar'));
    if(btnEn) btnEn.addEventListener('click', () => switchLanguage('en'));
    
    switchLanguage('ar'); // اللغة الافتراضية

    // تشغيل العدادات والبيانات
    updateLiveStats();
});
