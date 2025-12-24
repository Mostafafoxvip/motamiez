import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import { products as defaultProducts } from './data/products';
import './App.css';

const ADMIN_CODE = '123456'; // كود الدخول للوحة التحكم
const STORAGE_KEY = 'motamiez_products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [showAdmin, setShowAdmin] = useState(false);
  const [keySequence, setKeySequence] = useState('');
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  // Secret key combination to open admin (type "admin" anywhere)
  useEffect(() => {
    const handleKeyPress = (e) => {
      const newSequence = (keySequence + e.key).slice(-5);
      setKeySequence(newSequence);

      if (newSequence === 'admin') {
        const code = prompt('أدخل رمز الدخول:');
        if (code === ADMIN_CODE) {
          setShowAdmin(true);
        } else if (code !== null) {
          alert('رمز خاطئ!');
        }
        setKeySequence('');
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [keySequence]);

  // Save products to localStorage
  const handleUpdateProducts = useCallback((updatedProducts) => {
    setProducts(updatedProducts);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
  }, []);

  // Memoized categories
  const categories = useMemo(() => {
    return ['الكل', ...new Set(products.map(p => p.category))];
  }, [products]);

  // Memoized filtered products
  const filteredProducts = useMemo(() => {
    return selectedCategory === 'الكل'
      ? products
      : products.filter(p => p.category === selectedCategory);
  }, [products, selectedCategory]);

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

          <div className="products-count">
            عرض {filteredProducts.length} منتج
          </div>

          <ProductList products={filteredProducts} />
        </div>
      </main>

      <Footer />

      {showAdmin && (
        <AdminPanel
          products={products}
          onUpdateProducts={handleUpdateProducts}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
}

export default App;
