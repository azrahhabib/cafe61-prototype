import { Coffee, Sparkles } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function LoyaltyCard() {
  const { displayStamps, rewardUnlocked, setDemoStamps } = useCart();

  return (
    <section className="loyalty-card">
      <div className="loyalty-header">
        <div className="loyalty-title">
          <Coffee size={16} />
          Cappuccino Club ({displayStamps}/10)
        </div>
        <button
          className="demo-btn"
          onClick={() => setDemoStamps(displayStamps === 9 ? 0 : 9)}
          title="Demo shortcut for pitching"
        >
          {displayStamps === 9 ? "Reset Demo" : "Demo: Jump to 9/10"}
        </button>
      </div>

      <div className="stamps-grid">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className={`stamp ${idx < displayStamps ? "filled" : ""}`}
          >
            <Coffee size={13} />
          </div>
        ))}
      </div>

      {rewardUnlocked ? (
        <div className="loyalty-unlocked">
          <Sparkles size={14} style={{ display: "inline", marginRight: 6 }} />
          10th Cappuccino Unlocked — FREE in your cart!
        </div>
      ) : (
        <p className="loyalty-subtext">
          Buy 10 cappuccinos (hot or crushed) and your 10th one is on the house.
        </p>
      )}
    </section>
  );
}