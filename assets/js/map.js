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

    // تحميل الخريطة الافتراضية
    loadMap("wind");
});
