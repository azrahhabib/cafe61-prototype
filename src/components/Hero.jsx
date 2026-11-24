import { ShoppingBag, ArrowDown } from "lucide-react";

export default function Hero({ onOrderClick }) {
  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <span className="hero-badge">Windermere, Durban • Cafe in the Green</span>
        <h1>
          Specialty Coffee, Bold Flavours &amp;{" "}
          <span>Effortless Collection.</span>
        </h1>
        <p>
          Enjoy our signature Masala Cappuccinos, butter-grilled sourdough
          toasts, and house-made chutneys—dine in our garden setting or order
          ahead straight via WhatsApp.
        </p>
        <div className="hero-actions">
          <button className="hero-cta" onClick={onOrderClick}>
            <ShoppingBag size={18} />
            Order for Collection
          </button>
          <a href="#story" className="hero-secondary">
            Explore Our Story <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}