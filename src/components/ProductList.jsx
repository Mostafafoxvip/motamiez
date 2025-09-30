import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p className="no-products">لا توجد منتجات في هذه الفئة</p>
      ) : (
        products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;
