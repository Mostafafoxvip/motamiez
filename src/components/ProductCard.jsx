import React from 'react';
import { whatsappNumber } from '../data/products';
import './ProductCard.css';

function ProductCard({ product }) {
  const handleWhatsAppClick = () => {
    const message = `مرحباً، أنا مهتم بشراء:\n${product.name}\nالسعر: ${product.price} درهم\nالسعة: ${product.storage}\nالحالة: ${product.condition}`;
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
          <div className={`condition-badge ${product.condition === 'جديد' ? 'new' : ''}`}>
            {product.condition}
          </div>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {product.storage && (
          <span className="product-storage">{product.storage}</span>
        )}

        <div className="product-footer">
          <span className="product-price">{product.price} درهم</span>
          <button
            className="whatsapp-btn"
            onClick={handleWhatsAppClick}
            disabled={!product.inStock}
          >
            {product.inStock ? (
              <>
                <span className="whatsapp-icon">📱</span>
                تواصل واتساب
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
