import React from 'react';
import { whatsappNumber } from '../data/products';
import './Footer.css';

function Footer() {
  const handleWhatsAppClick = () => {
    const message = 'مرحباً، أريد الاستفسار عن هواتف آيفون المتوفرة لديكم';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>متميز موبايل</h3>
            <p>متجرك المتخصص في هواتف آيفون المستعملة بحالة ممتازة وبأفضل الأسعار في المغرب</p>
          </div>

          <div className="footer-section">
            <h4>لماذا تختارنا؟</h4>
            <ul>
              <li>ضمان على جميع الأجهزة</li>
              <li>فحص شامل قبل البيع</li>
              <li>أسعار منافسة</li>
              <li>خدمة ما بعد البيع</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>تواصل معنا</h4>
            <ul>
              <li>
                <button className="footer-whatsapp-btn" onClick={handleWhatsAppClick}>
                  📱 واتساب: اضغط للتواصل
                </button>
              </li>
              <li>📍 المغرب</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 متميز موبايل. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
