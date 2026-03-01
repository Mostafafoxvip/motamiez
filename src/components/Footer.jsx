import React from 'react';
import { whatsappNumber } from '../data/products';
import './Footer.css';

function Footer() {
  const handleWhatsAppClick = () => {
    const message = 'مرحباً، أريد الاستفسار عن أسعار الجملة لهواتف آيفون المستعملة';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>متميز موبايل</h3>
            <p>متخصصون في بيع هواتف آيفون المستعملة بالجملة في الإمارات - أسعار منافسة للتجار وأصحاب المحلات</p>
            <div className="wholesale-notice">
              بيع جملة فقط - الحد الأدنى 5 قطع
            </div>
          </div>

          <div className="footer-section">
            <h4>لماذا تختارنا؟</h4>
            <ul>
              <li>✓ أجهزة مفحوصة 100%</li>
              <li>✓ ضمان الجودة</li>
              <li>✓ أسعار جملة منافسة</li>
              <li>✓ شحن سريع لجميع الإمارات</li>
              <li>✓ دعم فني متواصل</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تواصل معنا</h4>
            <ul>
              <li>
                <button className="footer-whatsapp-btn" onClick={handleWhatsAppClick}>
                  📱 واتساب: +971 54 461 6616
                </button>
              </li>
              <li>📍 الإمارات العربية المتحدة</li>
              <li>🌐 motamiezmobil.com</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 متميز موبايل - جميع الحقوق محفوظة</p>
          <p className="footer-domain">motamiezmobil.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
