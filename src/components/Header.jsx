import React, { useState } from 'react';
import './Header.css';

function Header({ cartItemsCount, onCartClick, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <h1>متميز</h1>
          <p>متجرك الإلكتروني المتميز</p>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="ابحث عن منتج..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
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
