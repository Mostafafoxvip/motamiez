# 🛍️ متميز - متجر إلكتروني (Motamiez E-commerce Store)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.12-646CFF.svg)](https://vitejs.dev/)

متجر إلكتروني متكامل واحترافي مبني باستخدام React و Vite مع دعم كامل للغة العربية

🌐 **[عرض مباشر](https://motamiezmobil.com)** | 📖 **[التوثيق](#التوثيق)** | 🐛 **[الإبلاغ عن خطأ](https://github.com/Mostafafoxvip/motamiez/issues)**

## ✨ المميزات الرئيسية

### 🛒 التسوق والمنتجات
- ✅ عرض المنتجات مع صور وأوصاف تفصيلية
- ⭐ نظام تقييمات بالنجوم لكل منتج
- 🔍 بحث ذكي في المنتجات (الاسم، الوصف، الفئة)
- 🏷️ تصفية المنتجات حسب الفئة (8 منتجات، 6 فئات)
- 🔄 ترتيب متعدد (السعر، التقييم، الاسم)
- 📦 عرض حالة المخزون (متوفر/نفذت الكمية)

### 🛒 سلة التسوق
- ➕ إضافة وحذف المنتجات
- 🔢 تحديث الكميات بسهولة
- 💾 حفظ تلقائي في المتصفح (localStorage)
- 💰 حساب المجموع الكلي تلقائياً
- ✨ إشعارات جميلة عند الإضافة/الحذف

### 💳 إتمام الطلب
- 📝 نموذج طلب متكامل مع التحقق من البيانات
- ✔️ التحقق من صحة البريد الإلكتروني والهاتف
- 📱 حفظ الطلبات في localStorage
- 🎉 رسائل تأكيد احترافية

### 🎨 التصميم والواجهة
- 📱 تصميم متجاوب 100% (موبايل، تابلت، ديسكتوب)
- 🌐 دعم كامل للغة العربية (RTL)
- 🎨 واجهة مستخدم عصرية وجذابة
- ⚡ تأثيرات حركية سلسة
- 🔔 إشعارات توست جميلة (Toast Notifications)

## 🚀 التقنيات المستخدمة

| التقنية | الإصدار | الاستخدام |
|---------|---------|-----------|
| React | 19.1.1 | واجهة المستخدم |
| Vite | 7.1.12 | أداة البناء |
| CSS3 | - | التنسيقات |
| Context API | - | إدارة الحالة |
| localStorage | - | تخزين البيانات |

## 📦 التثبيت والتشغيل

### المتطلبات الأساسية
- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. **استنساخ المشروع:**
```bash
git clone https://github.com/Mostafafoxvip/motamiez.git
cd motamiez
```

2. **تثبيت المكتبات:**
```bash
npm install
```

3. **تشغيل المشروع في وضع التطوير:**
```bash
npm run dev
```

المشروع سيعمل على: `http://localhost:5173`

### البناء للإنتاج

```bash
npm run build
```

سيتم إنشاء ملفات الإنتاج المحسّنة في مجلد `dist`

### معاينة البناء

```bash
npm run preview
```

## 📁 البنية الهيكلية

```
motamiez/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions للنشر التلقائي
├── public/
│   ├── favicon.svg          # أيقونة الموقع
│   ├── robots.txt           # ملف محركات البحث
│   └── CNAME                # اسم النطاق المخصص
├── src/
│   ├── components/          # مكونات React
│   │   ├── Header.jsx       # الهيدر مع البحث
│   │   ├── Footer.jsx       # الفوتر
│   │   ├── ProductList.jsx  # قائمة المنتجات
│   │   ├── ProductCard.jsx  # كرت المنتج
│   │   ├── Cart.jsx         # سلة التسوق
│   │   ├── Checkout.jsx     # صفحة إتمام الطلب
│   │   ├── Toast.jsx        # إشعارات توست
│   │   └── *.css            # أنماط المكونات
│   ├── contexts/            # React Contexts
│   │   └── ToastContext.jsx # سياق الإشعارات
│   ├── data/
│   │   └── products.js      # بيانات المنتجات
│   ├── App.jsx              # المكون الرئيسي
│   ├── App.css              # أنماط التطبيق
│   ├── main.jsx             # نقطة البداية
│   └── index.css            # الأنماط العامة
├── index.html
├── package.json
├── vite.config.js
├── LICENSE                  # ترخيص MIT
└── README.md
```

## 🎯 الاستخدام

### إضافة منتجات جديدة

عدّل ملف `src/data/products.js`:

```javascript
{
  id: 9,
  name: 'اسم المنتج',
  price: 999,
  category: 'الفئة',
  image: 'رابط الصورة',
  description: 'وصف المنتج',
  inStock: true,
  rating: 4.5,
  reviews: 100
}
```

### تخصيص الألوان

عدّل المتغيرات في `src/index.css`:

```css
:root {
  --primary-color: #4A90E2;
  --secondary-color: #50C878;
  --danger-color: #E74C3C;
}
```

## 🌟 الميزات المتقدمة

- ✅ **SEO محسّن**: Meta tags كاملة، Open Graph، Twitter Cards
- ✅ **الأداء**: Lazy loading للصور، بناء محسّن
- ✅ **الأمان**: بدون ثغرات أمنية، محدّث بآخر التحديثات
- ✅ **النشر التلقائي**: GitHub Actions جاهز
- ✅ **PWA Ready**: جاهز للتحويل لتطبيق PWA

## 📊 الإحصائيات

- **📄 عدد الملفات**: 32 ملف
- **💻 سطور الكود**: ~2,500 سطر
- **📦 حجم البناء**: 204 KB (مضغوط: 64 KB)
- **⚡ وقت البناء**: < 2 ثانية
- **🎯 نسبة الإكمال**: 95%

## 🤝 المساهمة

المساهمات مرحب بها دائماً! إذا كنت تريد المساهمة:

1. Fork المشروع
2. أنشئ فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE)

## 👨‍💻 المطور

تم تطويره بواسطة **[Mostafafoxvip](https://github.com/Mostafafoxvip)**

## 📞 التواصل

- 📧 Email: info@motamiez.com
- 📱 الموقع: [motamiezmobil.com](https://motamiezmobil.com)
- 🐙 GitHub: [@Mostafafoxvip](https://github.com/Mostafafoxvip)

---

<div align="center">

**إذا أعجبك المشروع، لا تنسى إعطاءه ⭐ نجمة!**

Made with ❤️ in Saudi Arabia

</div>
