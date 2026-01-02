// src/components/OrderPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menuData } from "../data/menudata";
import "../styles/OrderPage.css";

const OrderPage = () => {
  const { mainCategory, subCategory, itemName } = useParams();
  const navigate = useNavigate();
  const decodedName = decodeURIComponent(itemName || "");
  const items = menuData?.[mainCategory]?.[subCategory] || [];
  const item = items.find((it) => it.name === decodedName);

  const [qty, setQty] = useState(1);
  const [notes, setNotes] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setQty(1);
    setNotes("");
    setAdded(false);
  }, [itemName]);

  if (!item) {
    return (
      <div className="order-page not-found">
        <h2>Item not found</h2>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    );
  }

  // parse numeric price (assumes price like "$10" or "10")
  const parsePrice = (p) => {
    if (!p) return 0;
    const digits = p.toString().replace(/[^0-9.]/g, "");
    return parseFloat(digits) || 0;
  };

  const unitPrice = parsePrice(item.price);
  const total = (unitPrice * qty).toFixed(2);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartItem = { mainCategory, subCategory, name: item.name, price: item.price, qty, notes, img: item.img };
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    setAdded(true);
    // simple toast hide after 2s
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="order-page">
      <div className="order-card">
        <div className="order-image">
          <img src={item.img} alt={item.name} />
        </div>

        <div className="order-info">
          <h2>{item.name}</h2>
          <p className="desc">{item.description}</p>
          <p className="unit-price">Unit price: <span>{item.price}</span></p>

          <div className="order-controls">
            <div className="qty">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <input type="number" min="1" value={qty} onChange={(e)=> setQty(Math.max(1, Number(e.target.value || 1)))} />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>

            <div className="notes">
              <textarea placeholder="Add notes (e.g., no onions)" value={notes} onChange={(e)=> setNotes(e.target.value)} />
            </div>
          </div>

          <div className="order-bottom">
            <div className="total">Total: <strong>${total}</strong></div>
            <div className="actions">
              <button className="add-btn" onClick={addToCart}>Add to Cart</button>
              <button className="back-btn" onClick={() => navigate(-1)}>Back</button>
            </div>
          </div>
        </div>
      </div>

      {added && <div className="toast">Added to cart ✔</div>}
    </div>
  );
};

export default OrderPage;
