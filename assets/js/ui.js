function initUI() {
    const select = document.getElementById("governorate-select");
    if(select) {
        governorates.forEach(g => {
            const option = document.createElement("option");
            option.value = g.name;
            option.textContent = g.name;
            select.appendChild(option);
        });

        select.addEventListener("change", e => {
            showGovernorateData(e.target.value);
        });
    }

    updateOverview();
    updateIndicators();
}
// التبديل بين العربية والإنجليزية
document.addEventListener("DOMContentLoaded", () => {
    const btnAR = document.getElementById("lang-ar");
    const btnEN = document.getElementById("lang-en");

    btnAR?.addEventListener("click", () => {
        document.documentElement.lang = "ar";
        document.body.dir = "rtl";
        updateLanguage("ar");
    });

    btnEN?.addEventListener("click", () => {
        document.documentElement.lang = "en";
        document.body.dir = "ltr";
        updateLanguage("en");
    });
});

function updateLanguage(lang) {
    // مثال على الترجمة السريعة، يمكن توسيعها لاحقاً
    const elements = document.querySelectorAll("[data-text-ar]");
    elements.forEach(el => {
        el.textContent = lang === "ar" ? el.dataset.textAr : el.dataset.textEn;
    });
}
function showGovernorateData(name) {
    const g = governorates.find(x => x.name === name);
    const container = document.getElementById("governorate-data");
    if(container && g) {
        container.innerHTML = `
            <h3>${g.name}</h3>
            <p>درجة الحرارة: ${g.temp}°C</p>
            <p>الرطوبة: ${g.humidity}%</p>
            <p>الرياح: ${g.wind} كم/س</p>
            <p>الأمطار: ${g.rain} ملم</p>
        `;
    }
}

function updateOverview() {
    const container = document.getElementById("overview");
    if(container) {
        container.innerHTML = `
            <p>درجة الحرارة العامة: ${indicators.temp}°C</p>
            <p>الرطوبة العامة: ${indicators.humidity}%</p>
            <p>الرياح العامة: ${indicators.wind} كم/س</p>
            <p>جودة الهواء: ${indicators.airQuality}</p>
            <p>CO2: ${indicators.co2} ppm</p>
        `;
    }
}

function updateIndicators() {
    const container = document.getElementById("indicators-container");
    if(container) {
        container.innerHTML = `
            <p>درجة الحرارة العامة: ${indicators.temp}°C</p>
            <p>الرطوبة العامة: ${indicators.humidity}%</p>
            <p>الرياح العامة: ${indicators.wind} كم/س</p>
            <p>جودة الهواء: ${indicators.airQuality}</p>
            <p>CO2: ${indicators.co2} ppm</p>
        `;
    }
}

// شغل كل شيء عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", initUI);
// افتراضياً يوجد div في maps.html لعرض البيانات مثل هذا:
// <div id="governorate-info"></div>

document.addEventListener("DOMContentLoaded", () => {
    const infoDiv = document.getElementById("governorate-info");

    // دالة لتحديث لوحة المعلومات عند اختيار المحافظة
    function updateGovernorateInfo(governorateName) {
        const gov = governorates.find(g => g.name === governorateName);
        if (!gov) {
            infoDiv.innerHTML = "بيانات غير متوفرة";
            return;
        }

        infoDiv.innerHTML = `
            <h3>${gov.name}</h3>
            <p>درجة الحرارة: ${gov.temp !== null ? gov.temp + "°C" : "تحديث..."}</p>
            <p>الرطوبة: ${gov.humidity !== null ? gov.humidity + "%" : "تحديث..."}</p>
            <p>الرياح: ${gov.wind !== null ? gov.wind + " كم/س" : "تحديث..."}</p>
            <p>الأمطار: ${gov.rain !== null ? gov.rain + " مم" : "تحديث..."}</p>
        `;
    }

    // مثال: ربط الخريطة بالمؤشرات عند النقر على أي محافظة
    governorates.forEach(gov => {
        const govButton = document.getElementById(`btn-${gov.name}`);
        if (govButton) {
            govButton.addEventListener("click", () => updateGovernorateInfo(gov.name));
        }
    });
});
