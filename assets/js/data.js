// بيانات المحافظات اليمنية مع مؤشرات بيئية تقريبية
const governorates = [
    { name: "صنعاء", temp: 23.5, humidity: 64, wind: 25.8, rain: 0, co2: 412, airQuality: "جيد" },
    { name: "عدن", temp: 29, humidity: 70, wind: 15, rain: 0, co2: 415, airQuality: "جيد" },
    { name: "تعز", temp: 26, humidity: 68, wind: 20, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "حضرموت", temp: 32, humidity: 50, wind: 10, rain: 0, co2: 408, airQuality: "معتدل" },
    { name: "المهرة", temp: 31, humidity: 55, wind: 12, rain: 0, co2: 407, airQuality: "معتدل" },
    { name: "المكلا", temp: 30, humidity: 60, wind: 14, rain: 0, co2: 409, airQuality: "جيد" },
    { name: "ذمار", temp: 24, humidity: 65, wind: 18, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "إب", temp: 25, humidity: 66, wind: 16, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "ريمة", temp: 26, humidity: 62, wind: 19, rain: 0, co2: 411, airQuality: "جيد" },
    { name: "صعدة", temp: 22, humidity: 60, wind: 17, rain: 0, co2: 412, airQuality: "جيد" },
    { name: "حجة", temp: 24, humidity: 63, wind: 18, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "الحديدة", temp: 28, humidity: 65, wind: 20, rain: 0, co2: 413, airQuality: "جيد" },
    { name: "المحويت", temp: 25, humidity: 64, wind: 15, rain: 0, co2: 411, airQuality: "جيد" },
    { name: "لحج", temp: 29, humidity: 68, wind: 14, rain: 0, co2: 414, airQuality: "جيد" },
    { name: "أبين", temp: 30, humidity: 67, wind: 15, rain: 0, co2: 412, airQuality: "جيد" },
    { name: "الضالع", temp: 27, humidity: 66, wind: 16, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "البيضاء", temp: 26, humidity: 60, wind: 18, rain: 0, co2: 409, airQuality: "جيد" },
    { name: "شبوة", temp: 31, humidity: 58, wind: 12, rain: 0, co2: 408, airQuality: "معتدل" },
    { name: "حضرموت_الوادي", temp: 33, humidity: 52, wind: 10, rain: 0, co2: 407, airQuality: "معتدل" },
    { name: "صنعاء_الريفية", temp: 21, humidity: 65, wind: 18, rain: 0, co2: 410, airQuality: "جيد" },
    { name: "تعز_الريفية", temp: 25, humidity: 63, wind: 17, rain: 0, co2: 411, airQuality: "جيد" },
    { name: "ذمار_الريفية", temp: 23, humidity: 64, wind: 16, rain: 0, co2: 410, airQuality: "جيد" }
];

// المؤشرات العامة لليمن
const indicators = {
    temp: 28,          // درجة الحرارة المتوسطة
    humidity: 63,      // الرطوبة المتوسطة
    wind: 16,          // سرعة الرياح المتوسطة
    co2: 411,          // مستوى ثاني أكسيد الكربون
    airQuality: "جيد" // جودة الهواء العامة
};
