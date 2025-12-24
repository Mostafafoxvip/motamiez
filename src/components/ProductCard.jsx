import React from 'react';
import { whatsappNumber } from '../data/products';
import './ProductCard.css';

function ProductCard({ product }) {
  const handleWhatsAppClick = () => {
    const message = `مرحباً، أريد طلب جملة:\n${product.name}\nالسعر: ${product.price} درهم/للقطعة\nالسعة: ${product.storage}\nالحالة: ${product.condition}\nالحد الأدنى للطلب: ${product.minOrder} قطعة`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && (
          <div className="out-of-stock-badge">نفذت الكمية</div>
        )}
        {product.condition && (
          <div className={`condition-badge ${product.condition === 'ممتاز' ? 'excellent' : ''}`}>
            {product.condition}
          </div>
        )}
        <div className="wholesale-badge">جملة</div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-specs">
          {product.storage && (
            <span className="product-storage">{product.storage}</span>
          )}
          {product.minOrder && (
            <span className="min-order">الحد الأدنى: {product.minOrder} قطعة</span>
          )}
        </div>

        <div className="product-footer">
          <div className="price-section">
            <span className="product-price">{product.price} درهم</span>
            <span className="price-note">سعر القطعة</span>
          </div>
          <button
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
            disabled={!product.inStock}
          >
            {product.inStock ? (
              <>
                <span className="whatsapp-icon">📱</span>
                اطلب الآن
              </>
            ) : (
              'غير متوفر'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
