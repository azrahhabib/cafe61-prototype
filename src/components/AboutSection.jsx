import { Leaf, Flame, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="story" className="section-wrapper">
      <div className="about-grid">
        <div className="about-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80"
            alt="Cafe 61 garden atmosphere"
            className="about-img"
          />
          <div className="about-floating-tag">
            <span>Est. Windermere</span>
            <strong>Cafe in the Green</strong>
          </div>
        </div>

        <div className="about-content">
          <span className="section-eyebrow">Our Philosophy</span>
          <h2>Delicious, love-filled food in the heart of Windermere.</h2>
          <p>
            Cafe 61 is your neighbourhood escape for specialty coffee, bold
            Durban-inspired flavours, and slow mornings. From our signature
            Masala Cappuccino to our Haji Ali Toastie, every plate is crafted
            with care—and now you can order ahead for effortless collection.
          </p>

          <div className="pillars-list">
            <div className="pillar-item">
              <div className="pillar-icon">
                <Flame size={18} />
              </div>
              <div>
                <h4>Grilled in Real Butter</h4>
                <p>
                  We grill all our sourdough, bagels, mushrooms, and crepes with
                  real butter for unmatched flavour.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Leaf size={18} />
              </div>
              <div>
                <h4>House-Made Signatures</h4>
                <p>
                  Freshly made Thai chilli jam, coriander mint chutneys, ginger
                  hollandaise, and fresh vanilla cream.
                </p>
              </div>
            </div>

            <div className="pillar-item">
              <div className="pillar-icon">
                <Heart size={18} />
              </div>
              <div>
                <h4>Family & Kiddies Friendly</h4>
                <p>
                  A lush, relaxed space with a dedicated Kiddies Menu featuring
                  crumpet stacks, smoothies, and babycinos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}