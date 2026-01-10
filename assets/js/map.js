function initMap() {
    const container = document.getElementById("map-container");
    if(container) {
        container.innerHTML = `<iframe src="https://embed.windy.com/embed2.html?lat=15.5&lon=47.5&width=100%25&height=600&zoom=6&level=surface&overlay=wind&product=ecmwf" frameborder="0" width="100%" height="600"></iframe>`;
    }
}

document.addEventListener("DOMContentLoaded", initMap);
