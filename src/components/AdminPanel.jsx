import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel({ products, onUpdateProducts, onClose }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [localProducts, setLocalProducts] = useState(products);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    image: '',
    description: '',
    storage: '',
    condition: 'جيد',
    minOrder: 5,
    inStock: true,
  });

  const categories = ['آيفون 15', 'آيفون 14', 'آيفون 13', 'آيفون 12', 'آيفون 11', 'آيفون X'];
  const conditions = ['ممتاز', 'جيد جداً', 'جيد', 'مقبول'];

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = () => {
    const updated = localProducts.map(p =>
      p.id === editingProduct.id ? editingProduct : p
    );
    setLocalProducts(updated);
    onUpdateProducts(updated);
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج؟')) {
      const updated = localProducts.filter(p => p.id !== id);
      setLocalProducts(updated);
      onUpdateProducts(updated);
    }
  };

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price) {
      alert('يرجى ملء الحقول المطلوبة');
      return;
    }
    const product = {
      ...newProduct,
      id: Date.now(),
      price: Number(newProduct.price),
      minOrder: Number(newProduct.minOrder),
    };
    const updated = [...localProducts, product];
    setLocalProducts(updated);
    onUpdateProducts(updated);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      image: '',
      description: '',
      storage: '',
      condition: 'جيد',
      minOrder: 5,
      inStock: true,
    });
  };

  return (
    <div className="admin-overlay">
      <div className="admin-panel">
        <div className="admin-header">
          <h2>لوحة التحكم</h2>
          <button className="close-admin" onClick={onClose}>✕</button>
        </div>

        <div className="admin-content">
          {/* Add New Product */}
          <div className="admin-section">
            <h3>إضافة منتج جديد</h3>
            <div className="form-grid">
              <input
                type="text"
                placeholder="اسم المنتج *"
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              />
              <input
                type="number"
                placeholder="السعر (درهم) *"
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              />
              <select
                value={newProduct.category}
                onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
              >
                <option value="">اختر الفئة</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="رابط الصورة"
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              />
              <input
                type="text"
                placeholder="السعة (مثال: 128GB)"
                value={newProduct.storage}
                onChange={(e) => setNewProduct({...newProduct, storage: e.target.value})}
              />
              <select
                value={newProduct.condition}
                onChange={(e) => setNewProduct({...newProduct, condition: e.target.value})}
              >
                {conditions.map(cond => (
                  <option key={cond} value={cond}>{cond}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="الحد الأدنى للطلب"
                value={newProduct.minOrder}
                onChange={(e) => setNewProduct({...newProduct, minOrder: e.target.value})}
              />
              <textarea
                placeholder="الوصف"
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
              />
            </div>
            <button className="add-btn" onClick={handleAddProduct}>إضافة المنتج</button>
          </div>

          {/* Products List */}
          <div className="admin-section">
            <h3>المنتجات ({localProducts.length})</h3>
            <div className="products-table">
              {localProducts.map(product => (
                <div key={product.id} className="product-row">
                  {editingProduct?.id === product.id ? (
                    <div className="edit-form">
                      <input
                        type="text"
                        value={editingProduct.name}
                        onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                      />
                      <input
                        type="number"
                        value={editingProduct.price}
                        onChange={(e) => setEditingProduct({...editingProduct, price: Number(e.target.value)})}
                      />
                      <input
                        type="text"
                        value={editingProduct.image}
                        onChange={(e) => setEditingProduct({...editingProduct, image: e.target.value})}
                        placeholder="رابط الصورة"
                      />
                      <input
                        type="text"
                        value={editingProduct.storage}
                        onChange={(e) => setEditingProduct({...editingProduct, storage: e.target.value})}
                      />
                      <select
                        value={editingProduct.condition}
                        onChange={(e) => setEditingProduct({...editingProduct, condition: e.target.value})}
                      >
                        {conditions.map(cond => (
                          <option key={cond} value={cond}>{cond}</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        value={editingProduct.minOrder}
                        onChange={(e) => setEditingProduct({...editingProduct, minOrder: Number(e.target.value)})}
                      />
                      <textarea
                        value={editingProduct.description}
                        onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                      />
                      <div className="edit-actions">
                        <button className="save-btn" onClick={handleSaveEdit}>حفظ</button>
                        <button className="cancel-btn" onClick={() => setEditingProduct(null)}>إلغاء</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <img src={product.image} alt={product.name} className="product-thumb" />
                      <div className="product-info-admin">
                        <strong>{product.name}</strong>
                        <span>{product.price} درهم</span>
                        <span>{product.storage}</span>
                      </div>
                      <div className="product-actions">
                        <button className="edit-btn" onClick={() => handleEdit(product)}>تعديل</button>
                        <button className="delete-btn" onClick={() => handleDelete(product.id)}>حذف</button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
