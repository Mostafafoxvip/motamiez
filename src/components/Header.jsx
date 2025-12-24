import React from 'react';
import { whatsappNumber } from '../data/products';
import './Header.css';

function Header() {
  const handleWhatsAppClick = () => {
    const message = 'مرحباً، أريد الاستفسار عن هواتف آيفون المتوفرة لديكم';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>متميز موبايل</h1>
          <p>آيفون مستعمل بأفضل الأسعار</p>
        </div>

        <nav className="nav">
          <button className="whatsapp-header-btn" onClick={handleWhatsAppClick}>
            <span className="whatsapp-icon">📱</span>
            <span className="btn-text">تواصل معنا</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
