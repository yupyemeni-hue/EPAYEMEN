// دالة عالمية لجلب البيانات من OpenWeatherMap لليمن
async function fetchLiveEnvironmentData(city) {
    const key = API_KEYS.weather; 
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},YE&appid=${key}&units=metric&lang=ar`);
        const data = await response.json();
        return {
            temp: data.main.temp,
            humidity: data.main.humidity,
            wind: (data.wind.speed * 3.6).toFixed(1), // تحويل لمتر/ثانية إلى كم/س
            desc: data.weather[0].description
        };
    } catch (error) {
        console.error("خطأ في جلب البيانات الحية:", error);
        return null;
    }
}

// تحديث مصفوفة المحافظات عند طلب المستخدم
async function getGovernorateUpdate(govName) {
    const liveData = await fetchLiveEnvironmentData(govName);
    if (liveData) {
        // تحديث البيانات في الـ UI
        return liveData;
    }
}
async function getAirPollution(lat, lon) {
    const key = API_KEYS.weather;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`);
        const data = await response.json();
        const aqi = data.list[0].main.aqi;
        const levels = ["ممتاز", "جيد", "متوسط", "ملوث", "خطر جداً"];
        return levels[aqi - 1];
    } catch (e) {
        return "غير متوفر";
    }
}
