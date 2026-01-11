document.addEventListener("DOMContentLoaded", () => {

    const infoDiv = document.getElementById("governorate-info");

    // دالة لتحديث البطاقة عند اختيار محافظة
    function updateGovernorateInfo(governorateName) {
        const gov = governorates.find(g => g.name === governorateName);
        if (!gov) {
            infoDiv.innerHTML = "بيانات غير متوفرة";
            return;
        }

        infoDiv.innerHTML = `
            <h3>${gov.name}</h3>
            <ul style="list-style:none; padding:0; margin:0;">
                <li>درجة الحرارة: ${gov.temp !== null ? gov.temp + "°C" : "تحديث..."}</li>
                <li>الرطوبة: ${gov.humidity !== null ? gov.humidity + "%" : "تحديث..."}</li>
                <li>الرياح: ${gov.wind !== null ? gov.wind + " كم/س" : "تحديث..."}</li>
                <li>الأمطار: ${gov.rain !== null ? gov.rain + " مم" : "تحديث..."}</li>
                <li>CO₂: ${gov.co2 !== null ? gov.co2 + " ppm" : "تحديث..."}</li>
                <li>جودة الهواء: ${gov.airQuality ? gov.airQuality : "تحديث..."}</li>
            </ul>
        `;
    }

    // ربط كل زر بمحافظته
    governorates.forEach(gov => {
        const btn = document.getElementById(`btn-${gov.name}`);
        if (btn) {
            btn.addEventListener("click", () => updateGovernorateInfo(gov.name));
        }
    });

});
