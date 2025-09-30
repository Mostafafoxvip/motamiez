import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {!product.inStock && (
          <div className="out-of-stock-badge">نفذت الكمية</div>
        )}
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">{product.price} ريال</span>
          <button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
          >
            {product.inStock ? 'أضف للسلة' : 'غير متوفر'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
