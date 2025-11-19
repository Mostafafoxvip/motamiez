import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        {!product.inStock && (
          <div className="out-of-stock-badge">نفذت الكمية</div>
        )}
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        {product.rating && (
          <div className="product-rating">
            <div className="stars">{renderStars(product.rating)}</div>
            <span className="rating-text">
              {product.rating.toFixed(1)} ({product.reviews} تقييم)
            </span>
          </div>
        )}

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
