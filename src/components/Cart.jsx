import React from 'react';
import './Cart.css';

function Cart({ items, onClose, onUpdateQuantity, onRemoveItem, totalPrice }) {
  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>سلة التسوق</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="cart-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p>🛒</p>
              <p>سلة التسوق فارغة</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-price">{item.price} ريال</p>
                    </div>
                    <div className="item-controls">
                      <div className="quantity-controls">
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => onRemoveItem(item.id)}>
                        حذف
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span>المجموع:</span>
                  <span className="total-amount">{totalPrice.toFixed(2)} ريال</span>
                </div>
                <button className="checkout-btn">إتمام الشراء</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
