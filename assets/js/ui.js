document.addEventListener("DOMContentLoaded", () => {
    const infoDiv = document.getElementById("governorate-info");
    const buttons = document.querySelectorAll(".gov-buttons button");

    buttons.forEach(btn => {
        btn.addEventListener("click", async () => {
            const govName = btn.innerText;
            infoDiv.innerHTML = `<p>جاري جلب البيانات الحية لـ ${govName} من الأقمار الصناعية...</p>`;
            
            const live = await getGovernorateUpdate(govName);
            
            if(live) {
                infoDiv.innerHTML = `
                    <div class="result-card">
                        <h3><i class="fas fa-map-marker-alt"></i> ${govName} - الآن</h3>
                        <div class="data-grid">
                            <p>🌡️ درجة الحرارة: <strong>${live.temp} °C</strong></p>
                            <p>💧 الرطوبة: <strong>${live.humidity} %</strong></p>
                            <p>🌬️ سرعة الرياح: <strong>${live.wind} كم/س</strong></p>
                            <p>☁️ الحالة: <strong>${live.desc}</strong></p>
                        </div>
                    </div>
                `;
            } else {
                infoDiv.innerHTML = `<p>عذراً، تعذر الاتصال بمصدر البيانات حالياً.</p>`;
            }
        });
    });
});
