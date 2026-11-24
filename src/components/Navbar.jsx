import { ShoppingBag, Coffee } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#top" className="nav-brand">
         <img
  src="/images/logo.jpg"
  alt="Cafe 61 Logo"
  className="brand-logo"
/>
          <div>
            <span className="brand-name">Cafe 61</span>
            <span className="brand-sub">Cafe in the Green</span>
          </div>
        </a>

        <nav className="nav-links">
          <a href="#story">Our Story</a>
          <a href="#rewards">Rewards</a>
          <a href="#menu-start">Menu & Order</a>
          <a href="#visit">Visit Us</a>
        </nav>

        <button
          className="nav-cart-btn"
          onClick={() => {
            if (totalItems > 0) {
              setIsCartOpen(true);
            } else {
              document
                .getElementById("menu-start")
                ?.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          {totalItems > 0 ? (
            <>
              <ShoppingBag size={16} />
              <span>Order ({totalItems})</span>
            </>
          ) : (
            <>
              <Coffee size={16} />
              <span>Order Now</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}