import { useState } from "react";
import { Plus, Leaf, Coffee, Star } from "lucide-react";
import { CATEGORIES, MENU_ITEMS } from "../data/menuData";
import { useCart } from "../context/CartContext";

function BotanicalCorner({ className }) {
  return (
    <svg
      className={className}
      width="72"
      height="72"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 72C16 48 34 26 68 12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M24 54C16 44 16 32 24 24C32 32 32 44 24 54Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M42 36C36 26 40 16 50 12C54 22 50 32 42 36Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M36 52C46 56 58 52 64 42C54 38 42 42 36 52Z"
        fill="currentColor"
        fillOpacity="0.14"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("featured");
  const { addToCart } = useCart();

  const activeCatObj = CATEGORIES.find((c) => c.id === activeCategory);

  const filteredItems =
    activeCategory === "featured"
      ? MENU_ITEMS.filter((item) => item.isFeatured)
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <main id="menu-start">
      <nav className="category-nav">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`cat-pill ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      <section className="menu-sheet">
        <BotanicalCorner className="botanical-corner top-left" />
        <BotanicalCorner className="botanical-corner bottom-right" />

        <div className="menu-sheet-inner">
          <div className="sheet-header">
            <span className="sheet-eyebrow">Cafe 61 • Windermere</span>
            <h3 className="script-heading">{activeCatObj?.label}</h3>
            <div className="sheet-divider" />
          </div>

          {activeCategory === "featured" ? (
            <div className="spotlight-grid">
              {filteredItems.map((item) => (
                <article key={item.id} className="spotlight-card">
                  <div className="spotlight-top">
                    <span className="spotlight-tag">
                      <Star size={11} /> House Signature
                    </span>
                    <span className="editorial-price">R{item.price}</span>
                  </div>

                  <h4 className="editorial-name">{item.name}</h4>
                  <p className="editorial-desc">{item.description}</p>

                  <div className="spotlight-footer">
                    <div className="item-badges">
                      {item.countsForLoyalty && (
                        <span className="badge badge-loyalty">
                          <Coffee size={10} /> Earns Stamp
                        </span>
                      )}
                      {item.isVeg && (
                        <span className="badge badge-veg">
                          <Leaf size={10} /> V
                        </span>
                      )}
                    </div>
                    <button
                      className="add-pill-btn"
                      onClick={() => addToCart(item)}
                    >
                      <Plus size={14} /> Add
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="editorial-list">
              {filteredItems.map((item) => (
                <article key={item.id} className="editorial-item">
                  <div className="editorial-row">
                    <div className="editorial-title-group">
                      <h4 className="editorial-name">{item.name}</h4>
                      {item.isPopular && (
                        <Star
                          size={12}
                          className="inline-star"
                          title="Popular Favourite"
                        />
                      )}
                      {item.isVeg && (
                        <span className="veg-letter" title="Vegetarian">
                          (V)
                        </span>
                      )}
                    </div>

                    <span className="dotted-leader" aria-hidden="true" />

                    <div className="editorial-actions">
                      <span className="editorial-price">R{item.price}</span>
                      <button
                        className="editorial-add-btn"
                        onClick={() => addToCart(item)}
                        aria-label={`Add ${item.name} to order`}
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>

                  <p className="editorial-desc">{item.description}</p>

                  {item.countsForLoyalty && (
                    <span className="stamp-hint">
                      <Coffee size={11} /> Counts toward your 10th free cappuccino
                    </span>
                  )}
                </article>
              ))}
            </div>
          )}

          <footer className="sheet-legend">
            <span>
              <Star size={11} /> Popular Favourite
            </span>
            <span>•</span>
            <span>(V) Vegetarian</span>
            <span>•</span>
            <span>
              <Coffee size={11} /> Earns Cappuccino Stamp
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}