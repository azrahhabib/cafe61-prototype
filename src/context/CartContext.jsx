import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

// Replace with Cafe 61's WhatsApp number (format: 27 + 9 digits, no leading 0)
// Use your own number while testing!
const CAFE_WHATSAPP_NUMBER = "27820000000";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist loyalty stamps in localStorage so progress survives page refreshes
  const [savedStamps, setSavedStamps] = useState(() => {
    const stored = localStorage.getItem("cafe61_loyalty_stamps");
    return stored !== null ? JSON.parse(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cafe61_loyalty_stamps", JSON.stringify(savedStamps));
  }, [savedStamps]);

  // Cart actions
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  // Loyalty calculations (10th cappuccino is free)
  const cappsInCart = cart
    .filter((item) => item.countsForLoyalty)
    .reduce((sum, item) => sum + item.quantity, 0);

  const totalStamps = savedStamps + cappsInCart;
  const rewardUnlocked = totalStamps >= 10 && cappsInCart > 0;
  const displayStamps = Math.min(totalStamps, 10);

  // Calculate subtotal & loyalty discount
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Discount the price of 1 cappuccino in the cart if the 10th stamp is hit
  const rewardDiscount = rewardUnlocked
    ? cart.find((item) => item.countsForLoyalty)?.price || 0
    : 0;

  const finalTotal = Math.max(0, subtotal - rewardDiscount);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Demo helper: lets you jump to 9/10 stamps during the pitch
  const setDemoStamps = (count) => setSavedStamps(count);

  // Build the pre-filled WhatsApp API link
  const buildWhatsAppUrl = (collectionTime = "15 mins") => {
    let lines = ["Hi Cafe 61! 🌿 I'd like to place a collection order for:"];

    let rewardApplied = false;
    cart.forEach((item) => {
      if (rewardUnlocked && !rewardApplied && item.countsForLoyalty) {
        if (item.quantity > 1) {
          lines.push(`- ${item.quantity - 1}x ${item.name} (R${item.price * (item.quantity - 1)})`);
        }
        lines.push(`- 1x ${item.name} (🎉 FREE LOYALTY REWARD)`);
        rewardApplied = true;
      } else {
        lines.push(`- ${item.quantity}x ${item.name} (R${item.price * item.quantity})`);
      }
    });

    lines.push("");
    lines.push(`Total: R${finalTotal}`);
    lines.push(`Estimated collection: ${collectionTime}`);
    lines.push("Thank you!");

    const encodedMessage = encodeURIComponent(lines.join("\n"));
    return `https://wa.me/${CAFE_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  // Called when the user clicks "Send Order via WhatsApp"
  const completeOrder = (collectionTime) => {
    const url = buildWhatsAppUrl(collectionTime);
    // Roll over stamps modulo 10 after ordering
    setSavedStamps((savedStamps + cappsInCart) % 10);
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        rewardDiscount,
        finalTotal,
        displayStamps,
        rewardUnlocked,
        setDemoStamps,
        completeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);