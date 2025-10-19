# إعداد GitHub Pages لمستودع motamiez

هذا الدليل يشرح كيفية إكمال إعداد GitHub Pages لنشر المشروع على الدومين المخصص motamiezmobil.com.

## ✅ ما تم إنجازه

تم إعداد الملفات التالية في المستودع:

1. **ملف CNAME**: موجود في `public/CNAME` ويحتوي على `motamiezmobil.com`
2. **ملف .nojekyll**: موجود في `public/.nojekyll` لمنع معالجة Jekyll
3. **سير عمل GitHub Actions**: موجود في `.github/workflows/deploy.yml` للنشر التلقائي
4. **إعدادات Vite**: تم تحديث `vite.config.js` للعمل مع الدومين المخصص

## 📋 الخطوات المطلوبة لإكمال الإعداد

### 1. دمج Pull Request

قم بدمج هذا الـ Pull Request إلى الفرع الرئيسي `main`.

### 2. تفعيل GitHub Pages في إعدادات المستودع

1. اذهب إلى إعدادات المستودع: `https://github.com/Mostafafoxvip/motamiez/settings/pages`
2. في قسم "Source" (المصدر):
   - اختر **"GitHub Actions"** كمصدر للنشر
   - سيتم تفعيل سير العمل التلقائي تلقائياً

### 3. إعداد DNS للدومين المخصص

يجب إضافة سجلات DNS التالية في لوحة التحكم الخاصة بمزود الدومين:

#### خيار 1: استخدام CNAME (موصى به)
```
النوع: CNAME
الاسم: www
القيمة: mostafafoxvip.github.io
```

```
النوع: CNAME أو A Record
الاسم: @ (أو motamiezmobil.com)
القيمة: mostafafoxvip.github.io
```

#### خيار 2: استخدام A Records (بديل)
```
النوع: A
الاسم: @
القيمة: 185.199.108.153
```

```
النوع: A
الاسم: @
القيمة: 185.199.109.153
```

```
النوع: A
الاسم: @
القيمة: 185.199.110.153
```

```
النوع: A
الاسم: @
القيمة: 185.199.111.153
```

> **ملاحظة**: عناوين IP هذه هي عناوين GitHub Pages الرسمية وقد تتغير. تحقق من [التوثيق الرسمي](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

### 4. التحقق من إعدادات GitHub Pages

1. بعد دمج الـ PR، انتظر حتى يكتمل سير العمل (يمكنك متابعته في تبويب Actions)
2. اذهب إلى `https://github.com/Mostafafoxvip/motamiez/settings/pages`
3. تأكد من أن:
   - الدومين المخصص `motamiezmobil.com` يظهر في حقل "Custom domain"
   - خيار "Enforce HTTPS" مفعّل (بعد التحقق من DNS)

### 5. انتظار انتشار DNS

- قد يستغرق انتشار تغييرات DNS من دقائق إلى 48 ساعة
- يمكنك التحقق من حالة DNS باستخدام أدوات مثل:
  - `nslookup motamiezmobil.com`
  - `dig motamiezmobil.com`
  - https://www.whatsmydns.net/

## 🔄 كيف يعمل النشر التلقائي

1. عند كل `push` إلى الفرع `main`، يتم تشغيل سير العمل تلقائياً
2. يقوم سير العمل بـ:
   - تثبيت المكتبات (`npm ci`)
   - بناء المشروع (`npm run build`)
   - نشر محتوى مجلد `dist` على GitHub Pages
3. ملف `CNAME` يتم نسخه تلقائياً من `public/CNAME` إلى `dist/CNAME`

## 🧪 التحقق من النشر

بعد اكتمال سير العمل:

1. افتح: `https://mostafafoxvip.github.io/motamiez/`
2. بعد إعداد DNS: `https://motamiezmobil.com`

## ❓ استكشاف الأخطاء

### المشكلة: الموقع لا يعمل
- تحقق من أن سير العمل اكتمل بنجاح في تبويب Actions
- تحقق من أن GitHub Pages مفعّل في الإعدادات

### المشكلة: الدومين المخصص لا يعمل
- تحقق من إعدادات DNS
- انتظر حتى ينتشر DNS (قد يستغرق حتى 48 ساعة)
- تحقق من أن ملف CNAME موجود في مجلد `dist` بعد البناء

### المشكلة: خطأ 404
- تحقق من أن `base` في `vite.config.js` مضبوط على `/`
- تحقق من أن جميع الملفات تم نسخها بشكل صحيح إلى `dist`

## 📚 مراجع مفيدة

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
