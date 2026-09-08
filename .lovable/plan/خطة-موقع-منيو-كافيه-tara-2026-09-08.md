# خطة موقع منيو كافيه Tara

## الهدف
صفحة واحدة (Single Page) لعرض منيو كافيه Tara المختص بالكوكيز — عرض فقط، بدون طلبات أونلاين، عربي بالكامل مع دعم RTL.

## الهوية البصرية
- الألوان: Baby Blue + Pastel Pink + Soft Green (مستوحاة من اللوغو والمكان) — تُعرَّف كرموز تصميم في `src/styles.css`.
- خطوط Rounded Sans Serif عربية (مثل Baloo Bhaijaan 2 / Rubik) عبر رابط في الرأس.
- شعار Tara المرفوع يُستخدم في الـ Header والفوتر، ويُشتق منه favicon.
- أسلوب Minimal نظيف مع Animations ناعمة (Fade + Slide) عند التمرير.

## البنية
1. **Header ثابت**: شعار Tara مع أيقونة فراولة + تنقّل سلس (Scroll) لأربع أقسام:
   - Cookies 🍪
   - Cold Drinks 🧊
   - Hot Drinks ☕
   - Mojito 🍹
2. **Hero**: شعار كبير + العبارة "One bite is never enough" + زر "زورونا".
3. **أقسام المنيو**: كل منتج Card يحتوي: صورة المنتج + الاسم + السعر فقط (بدون وصف). بيانات مؤقتة قابلة للاستبدال لاحقاً.
4. **قسم Visit Us**: موقع الكافيه + روابط التواصل.
5. **Footer** بثلاثة أعمدة:
   - تواصل معنا: موقع Google Maps 📍 + هاتف 📞 + بريد ✉️ (بيانات مؤقتة بانتظار الأصلية)
   - تابعنا: Instagram (tara_cookies) + WhatsApp
   - الهوية: شعار صغير + "One bite is never enough"
   - Hover effect بسيط على الأيقونات.

## التقنية
- TanStack Start + Tailwind v4، إعادة كتابة `src/routes/index.tsx` وتحديث head metadata (عنوان ووصف عربي + og tags).
- RTL عبر `dir="rtl"` و`lang="ar"` في الجذر.
- صور المنتجات تُولّد بالذكاء الاصطناعي (كوكيز ومشروبات بأسلوب متناسق مع هوية الكافيه) وتُخزَّن كـ Lovable Assets.
- اللوغو المرفوع يصبح CDN asset + favicon.
- تصميم متجاوب (Mobile + Desktop).

## ملاحظات مفتوحة
- أسعار المنتجات وأرقام التواصل والموقع **مؤقتة** — ترسل الأصلية لاحقاً وتُستبدل.
