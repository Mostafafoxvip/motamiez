import React from 'react';
import './Header.css';

function Header({ cartItemsCount, onCartClick }) {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>متميز</h1>
          <p>متجرك الإلكتروني المتميز</p>
        </div>
        
        <nav className="nav">
          <button className="cart-button" onClick={onCartClick}>
            <span className="cart-icon">🛒</span>
            <span className="cart-text">السلة</span>
            {cartItemsCount > 0 && (
              <span className="cart-badge">{cartItemsCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
