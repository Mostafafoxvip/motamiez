import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>متميز</h3>
            <p>متجرك الإلكتروني المتميز لأفضل المنتجات</p>
          </div>
          
          <div className="footer-section">
            <h4>روابط سريعة</h4>
            <ul>
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#products">المنتجات</a></li>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#contact">اتصل بنا</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>تواصل معنا</h4>
            <ul>
              <li>📧 info@motamiez.com</li>
              <li>📱 +966 50 123 4567</li>
              <li>📍 الرياض، المملكة العربية السعودية</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 متميز. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
