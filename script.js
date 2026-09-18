const WHATSAPP_NUMBER = "201148697640";

const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const count = document.getElementById("count").value.trim();
  const bus = document.getElementById("bus").value;
  const phone = document.getElementById("phone").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!name || !count || !phone) {
    message.textContent = "⚠️ من فضلك أكمل البيانات المطلوبة.";
    return;
  }

  if (WHATSAPP_NUMBER.includes("X")) {
    message.textContent =
      "⚠️ لم يتم إضافة رقم واتساب الفندق في الموقع بعد.";
    return;
  }

  const bookingText =
`🕋 طلب حجز - فندق مناسك البيت

👤 الاسم: ${name}
👥 عدد الأشخاص: ${count}
🚌 الباص: ${bus}
📞 رقم الهاتف: ${phone}
📝 الملاحظات: ${notes || "لا توجد"}

📍 مكة المكرمة`;

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingText)}`;

  window.open(whatsappUrl, "_blank");

  message.textContent = "✅ تم تجهيز طلب الحجز وإرساله إلى واتساب.";
});
