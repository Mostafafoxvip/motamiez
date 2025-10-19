# متميز - متجر إلكتروني (Motamiez E-commerce Store)

متجر إلكتروني متكامل مبني باستخدام React و Vite

## المميزات

- 🛍️ عرض المنتجات مع الصور والأوصاف
- 🔍 تصفية المنتجات حسب الفئة
- 🛒 سلة تسوق تفاعلية
- ➕ إضافة وحذف المنتجات من السلة
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- 🎨 واجهة مستخدم عصرية وجذابة
- 🌐 دعم اللغة العربية بالكامل

## التقنيات المستخدمة

- React 19
- Vite
- CSS3
- JavaScript ES6+

## التثبيت والتشغيل

### المتطلبات
- Node.js (الإصدار 16 أو أحدث)
- npm أو yarn

### خطوات التثبيت

1. استنساخ المشروع:
```bash
git clone https://github.com/Mostafafoxvip/motamiez.git
cd motamiez
```

2. تثبيت المكتبات:
```bash
npm install
```

3. تشغيل المشروع في وضع التطوير:
```bash
npm run dev
```

4. افتح المتصفح على العنوان: `http://localhost:5173`

### البناء للإنتاج

```bash
npm run build
```

سيتم إنشاء ملفات الإنتاج في مجلد `dist`

### معاينة البناء

```bash
npm run preview
```

## البنية الهيكلية

```
motamiez/
├── public/              # الملفات العامة
├── src/
│   ├── components/      # مكونات React
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductCard.jsx
│   │   └── Cart.jsx
│   ├── data/           # بيانات المنتجات
│   │   └── products.js
│   ├── App.jsx         # المكون الرئيسي
│   ├── App.css
│   ├── main.jsx        # نقطة البداية
│   └── index.css       # الأنماط العامة
├── index.html
├── vite.config.js
└── package.json
```

## النشر على GitHub Pages

يتم نشر المشروع تلقائياً على GitHub Pages عند الدفع إلى الفرع الرئيسي.

### الدومين المخصص

الموقع متاح على: [motamiezmobil.com](https://motamiezmobil.com)

### إعدادات DNS المطلوبة

لربط الدومين المخصص، يجب إضافة سجل CNAME في إعدادات DNS:
- النوع: CNAME
- الاسم: motamiezmobil.com (أو @)
- القيمة: mostafafoxvip.github.io

### سير العمل التلقائي

يستخدم المشروع GitHub Actions للنشر التلقائي:
- يتم بناء المشروع تلقائياً عند كل push
- يتم نشر ملفات `dist` على GitHub Pages
- ملف CNAME يتم نسخه تلقائياً من مجلد `public`

## المساهمة

المساهمات مرحب بها! يرجى فتح issue أولاً لمناقشة التغييرات المقترحة.

## الترخيص

ISC
