// ui.js — نسخة مستقرة ونهائية للمرحلة الأولى

document.addEventListener("DOMContentLoaded", () => {

    const infoDiv = document.getElementById("governorate-info");
    if (!infoDiv) return;

    function renderGovernorate(gov) {
        infoDiv.innerHTML = `
            <h3>${gov.name}</h3>
            <ul class="gov-data">
                <li>درجة الحرارة: ${gov.temp} °C</li>
                <li>الرطوبة: ${gov.humidity} %</li>
                <li>الرياح: ${gov.wind} كم/س</li>
                <li>الأمطار: ${gov.rain} مم</li>
                <li>CO₂: ${gov.co2 ?? indicators.co2} ppm</li>
                <li>جودة الهواء: ${gov.airQuality ?? indicators.airQuality}</li>
            </ul>
        `;
    }

    // ربط الأزرار بالبيانات
    governorates.forEach(gov => {
        const btn = document.getElementById(`btn-${gov.name}`);
        if (btn) {
            btn.addEventListener("click", () => {
                renderGovernorate(gov);
            });
        }
    });

});
document.addEventListener("DOMContentLoaded", () => {
    const info = document.getElementById("governorate-info");

    if (!info || typeof governorates === "undefined") return;

    governorates.forEach(gov => {
        const btn = document.getElementById(`btn-${gov.name}`);
        if (!btn) return;

        btn.addEventListener("click", () => {
            info.innerHTML = `
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
        });
    });
});
