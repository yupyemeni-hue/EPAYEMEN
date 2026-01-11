function initMap() {
    const container = document.getElementById("map-container");
    if(container) {
        container.innerHTML = `<iframe src="https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&width=100%25&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf" frameborder="0" width="100%" height="600"></iframe>`;
    }
}

document.addEventListener("DOMContentLoaded", initMap);
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("map-container");
    const tabs = document.querySelectorAll(".tab-btn");

    function loadMap(type) {
        let src = "";
        switch(type) {
            case "wind":
                src = "https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&width=100%25&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf";
                break;
            case "temperature":
                src = "https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&width=100%25&height=600&zoom=6&level=surface&overlay=temp&product=ecmwf";
                break;
            case "rain":
                src = "https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&width=100%25&height=600&zoom=6&level=surface&overlay=rain&product=ecmwf";
                break;
            case "vegetation":
                src = "https://example.com/embed-vegetation.html"; // نضع رابط خارجي للغطاء النباتي لاحقاً
                break;
            case "air":
                src = "https://example.com/embed-air.html"; // رابط خارجي لجودة الهواء
                break;
        }
        container.innerHTML = `<iframe src="${src}" frameborder="0" width="100%" height="600"></iframe>`;
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            loadMap(tab.dataset.map);
        });
    });
// map.js

document.addEventListener("DOMContentLoaded", () => {

    // المرجع لبطاقة عرض بيانات المحافظة
    const infoDiv = document.getElementById("governorate-info");

    // دالة لتحديث البطاقة عند اختيار محافظة
    function updateGovernorateInfo(governorateName) {
        // البحث عن المحافظة في بيانات governorates
        const gov = governorates.find(g => g.name === governorateName);
        if (!gov) return;

        // تحديث البطاقة بالبيانات
        infoDiv.innerHTML = `
            <h3>${gov.name}</h3>
            <ul>
                <li>درجة الحرارة: ${gov.temp} °C</li>
                <li>الرطوبة: ${gov.humidity} %</li>
                <li>الرياح: ${gov.wind} كم/س</li>
                <li>الأمطار: ${gov.rain} مم</li>
                <li>CO₂: ${gov.co2 ?? indicators.co2} ppm</li>
                <li>جودة الهواء: ${gov.airQuality ?? indicators.airQuality}</li>
            </ul>
        `;

        // هنا يمكن ربط الخرائط لتحديث موقع أو تظليل المحافظة المحددة
        highlightGovernorateOnMap(governorateName);
    }

    // دالة لتظليل المحافظة على الخريطة (مثال placeholder)
    function highlightGovernorateOnMap(governorateName) {
        // يمكنك هنا استخدام المكتبة المستخدمة للخرائط مثل Leaflet أو Windy API
        // لتغيير لون المحافظة أو التكبير على موقعها
        console.log(`تحديث موقع المحافظة على الخريطة: ${governorateName}`);
    }

    // ربط كل زر بمحافظته
    governorates.forEach(gov => {
        const btn = document.getElementById(`btn-${gov.name}`);
        if (btn) {
            btn.addEventListener("click", () => updateGovernorateInfo(gov.name));
        }
    });

    // تحديث بيانات تلقائي من API إذا كنت تستخدم مفاتيحك
    function fetchGovernorateData() {
        governorates.forEach(gov => {
            // مثال: fetch من API خارجي
            // fetch(`https://api.example.com/data?location=${gov.name}&key=YOUR_API_KEY`)
            //     .then(res => res.json())
            //     .then(data => {
            //         gov.temp = data.temp;
            //         gov.humidity = data.humidity;
            //         gov.wind = data.wind;
            //         gov.rain = data.rain;
            //         gov.co2 = data.co2;
            //         gov.airQuality = data.airQuality;
            //     });
        });
    }

    // استدعاء التحديث التلقائي (يمكن ضبط فترة زمنية)
    fetchGovernorateData();
    // setInterval(fetchGovernorateData, 5 * 60 * 1000); // كل 5 دقائق
});
    // تحميل الخريطة الافتراضية
    loadMap("wind");
});
