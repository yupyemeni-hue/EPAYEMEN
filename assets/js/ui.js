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
