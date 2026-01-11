document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const tabs = document.querySelectorAll(".tab-btn");
    const infoDiv = document.getElementById("governorate-info");

    // دالة تحميل الخريطة بناءً على النوع (استخدام Windy API المتقدم)
    function loadMap(type) {
        let overlay = "wind";
        let product = "ecmwf";

        switch(type) {
            case "wind": overlay = "wind"; break;
            case "temperature": overlay = "temp"; break;
            case "rain": overlay = "rain"; break;
            case "vegetation": 
                // استخدام خريطة الأقمار الصناعية للغطاء النباتي
                container.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3800000!2d48.5!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sar!2sye!4v1625612345678!5m2!1sar!2sye" width="100%" height="600" style="border:0; filter: saturate(1.5) contrast(1.2);" allowfullscreen=""></iframe>`;
                return;
            case "air": 
                // ربط خريطة جودة الهواء العالمية (WAQI)
                container.innerHTML = `<iframe src="https://waqi.info/ar/#/c/15.352/44.208/6z" width="100%" height="600" frameborder="0"></iframe>`;
                return;
        }
        
        container.innerHTML = `<iframe src="https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&zoom=6&level=surface&overlay=${overlay}&product=${product}&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C" frameborder="0" width="100%" height="600"></iframe>`;
    }

    // تفعيل التبويبات
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.style.background = ""); // إعادة ضبط الألوان
            tab.style.background = "#2d6a4f"; // تمييز الزر النشط
            loadMap(tab.dataset.map);
        });
    });

    // تحميل خريطة الرياح كافتراضية
    loadMap("wind");
});
