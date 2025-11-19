import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import { products } from './data/products';
import { useToast } from './contexts/ToastContext';
import './App.css';

function App() {
  const { showToast } = useToast();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('motamiez-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      showToast(`تم تحديث كمية ${product.name} في السلة`, 'success');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      showToast(`تم إضافة ${product.name} إلى السلة`, 'success');
    }
  };

  const removeFromCart = (productId) => {
    const item = cart.find(item => item.id === productId);
    setCart(cart.filter(item => item.id !== productId));
    if (item) {
      showToast(`تم حذف ${item.name} من السلة`, 'info');
    }
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      showToast('السلة فارغة! أضف منتجات قبل إتمام الطلب', 'warning');
      return;
    }
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleOrderComplete = () => {
    setCart([]);
    setShowCheckout(false);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // حفظ السلة في localStorage عند تغييرها
  useEffect(() => {
    localStorage.setItem('motamiez-cart', JSON.stringify(cart));
  }, [cart]);

  // فلترة المنتجات
  const categories = ['الكل', ...new Set(products.map(p => p.category))];

  let filteredProducts = products;

  // فلترة حسب الفئة
  if (selectedCategory !== 'الكل') {
    filteredProducts = filteredProducts.filter(p => p.category === selectedCategory);
  }

  // فلترة حسب البحث
  if (searchTerm) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // ترتيب المنتجات
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy === 'name') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name, 'ar'));
  }

  return (
    <div className="app">
      <Header
        cartItemsCount={getTotalItems()}
        onCartClick={() => setShowCart(!showCart)}
        onSearch={handleSearch}
      />

      <main className="main-content">
        <div className="container">
          <div className="filters-section">
            <div className="category-filter">
              <h2>الفئات</h2>
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

            <div className="sort-filter">
              <label htmlFor="sort">ترتيب حسب:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="default">الترتيب الافتراضي</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="rating">الأعلى تقييماً</option>
                <option value="name">الاسم (أ-ي)</option>
              </select>
            </div>
          </div>

          {filteredProducts.length === 0 && searchTerm && (
            <div className="no-results">
              <p>لا توجد نتائج للبحث عن "{searchTerm}"</p>
              <button onClick={() => setSearchTerm('')} className="clear-search-btn">
                مسح البحث
              </button>
            </div>
          )}

          <ProductList
            products={filteredProducts}
            onAddToCart={addToCart}
          />
        </div>
      </main>

      {showCart && (
        <Cart
          items={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          totalPrice={getTotalPrice()}
          onCheckout={handleCheckout}
        />
      )}

      {showCheckout && (
        <Checkout
          items={cart}
          totalPrice={getTotalPrice()}
          onClose={() => setShowCheckout(false)}
          onOrderComplete={handleOrderComplete}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
