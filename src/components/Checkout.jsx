import React, { useState } from 'react';
import { useToast } from '../contexts/ToastContext';
import './Checkout.css';

function Checkout({ items, totalPrice, onClose, onOrderComplete }) {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    notes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'الاسم مطلوب';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'الاسم يجب أن يكون 3 أحرف على الأقل';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'رقم الهاتف يجب أن يكون 10 أرقام';
    }

    if (!formData.address.trim()) {
      newErrors.address = 'العنوان مطلوب';
    }

    if (!formData.city.trim()) {
      newErrors.city = 'المدينة مطلوبة';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // مسح الخطأ عند الكتابة
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showToast('يرجى تصحيح الأخطاء في النموذج', 'error');
      return;
    }

    setIsSubmitting(true);

    // محاكاة إرسال الطلب
    setTimeout(() => {
      const order = {
        id: Date.now(),
        customer: formData,
        items: items,
        total: totalPrice,
        date: new Date().toISOString()
      };

      // حفظ الطلب في localStorage
      const orders = JSON.parse(localStorage.getItem('motamiez-orders') || '[]');
      orders.push(order);
      localStorage.setItem('motamiez-orders', JSON.stringify(orders));

      showToast('تم إرسال طلبك بنجاح! سنتواصل معك قريباً', 'success', 4000);
      setIsSubmitting(false);
      onOrderComplete();
    }, 1500);
  };

  return (
    <div className="checkout-overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <div className="checkout-header">
          <h2>إتمام الطلب</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <h3>معلومات العميل</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">البريد الإلكتروني *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="example@email.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="05xxxxxxxx"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="city">المدينة *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? 'error' : ''}
                  placeholder="الرياض، جدة، الدمام..."
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="address">العنوان بالتفصيل *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={errors.address ? 'error' : ''}
                  placeholder="الحي، الشارع، رقم المبنى..."
                  rows="3"
                />
                {errors.address && <span className="error-message">{errors.address}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="notes">ملاحظات إضافية (اختياري)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="أي ملاحظات خاصة بالطلب..."
                  rows="2"
                />
              </div>

              <div className="checkout-summary">
                <div className="summary-row">
                  <span>عدد المنتجات:</span>
                  <span>{items.reduce((sum, item) => sum + item.quantity, 0)} قطعة</span>
                </div>
                <div className="summary-row total">
                  <span>المجموع الكلي:</span>
                  <span>{totalPrice.toFixed(2)} ريال</span>
                </div>
              </div>

              <button
                type="submit"
                className="submit-order-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'جاري الإرسال...' : 'تأكيد الطلب'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
