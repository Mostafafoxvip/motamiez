import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'الكل'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <div className="container">
          <div className="hero-section">
            <div className="wholesale-tag">بيع جملة فقط</div>
            <h2>هواتف آيفون مستعملة - جملة</h2>
            <p>أسعار منافسة للتجار وأصحاب المحلات - الإمارات العربية المتحدة</p>
            <div className="hero-features">
              <span>مفحوصة 100%</span>
              <span>ضمان الجودة</span>
              <span>شحن سريع</span>
            </div>
          </div>

          <div className="category-filter">
            <h3>تصفية حسب الموديل</h3>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <ProductList products={filteredProducts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
