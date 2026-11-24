import { useState } from "react";
import { ShoppingBag, X, Plus, Minus, MessageCircle } from "lucide-react";
import { useCart } from "../context/CartContext";

const COLLECTION_TIMES = ["10 mins", "15 mins", "20 mins", "30 mins"];

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    totalItems,
    subtotal,
    rewardDiscount,
    finalTotal,
    rewardUnlocked,
    completeOrder,
  } = useCart();

  const [collectionTime, setCollectionTime] = useState("15 mins");
  const [orderNotes, setOrderNotes] = useState("");

  if (totalItems === 0) return null;

  return (
    <>
      {!isCartOpen && (
        <button
          className="floating-cart-bar"
          onClick={() => setIsCartOpen(true)}
        >
          <div className="cart-bar-left">
            <ShoppingBag size={18} />
            <span>View Collection Order</span>
            <span className="cart-count-pill">{totalItems}</span>
          </div>
          <strong>R{finalTotal}</strong>
        </button>
      )}

      {isCartOpen && (
        <div className="drawer-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="drawer-header">
              <h2>Your Collection Order</h2>
              <button
                className="close-btn"
                onClick={() => setIsCartOpen(false)}
              >
                <X size={18} />
              </button>
            </div>

            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div>
                    <strong>{item.name}</strong>
                    <div style={{ fontSize: "0.82rem", color: "#5c6b5a" }}>
                      R{item.price} each
                    </div>
                  </div>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="time-selector">
              <label>Estimated Collection Time:</label>
              <div className="time-pills">
                {COLLECTION_TIMES.map((time) => (
                  <button
                    key={time}
                    className={`cat-pill ${
                      collectionTime === time ? "active" : ""
                    }`}
                    onClick={() => setCollectionTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="notes-selector">
              <label htmlFor="order-notes">
                Order Notes / Customizations (Optional):
              </label>
              <textarea
                id="order-notes"
                className="notes-input"
                rows={2}
                placeholder="e.g. Oat milk for the cappuccino, poached egg, no coriander..."
                value={orderNotes}
                onChange={(e) => setOrderNotes(e.target.value)}
              />
            </div>

            <div className="summary-box">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>R{subtotal}</span>
              </div>
              {rewardUnlocked && (
                <div className="summary-row discount">
                  <span>🎉 10th Cappuccino Reward</span>
                  <span>-R{rewardDiscount}</span>
                </div>
              )}
              <div className="summary-row total">
                <span>Total Due at Counter</span>
                <span>R{finalTotal}</span>
              </div>
            </div>

            <button
              className="whatsapp-btn"
              onClick={() => completeOrder(collectionTime, orderNotes)}
            >
              <MessageCircle size={20} />
              Send Order to Cafe 61 via WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}