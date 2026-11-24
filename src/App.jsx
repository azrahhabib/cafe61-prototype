import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import LoyaltyCard from "./components/LoyaltyCard";
import MenuSection from "./components/MenuSection";
import VisitSection from "./components/VisitSection";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const scrollToMenu = () => {
    document.getElementById("menu-start")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <CartProvider>
      <div className="site-wrapper">
        <Navbar />
        <Hero onOrderClick={scrollToMenu} />
        <AboutSection />
        <GallerySection />

        <section id="rewards" className="ordering-band">
          <div className="section-wrapper">
            <div className="section-header-center">
              <span className="section-eyebrow">Click &amp; Collect</span>
              <h2>Order Ahead &amp; Earn Rewards</h2>
              <p>
                Build your basket below, track your 10-cappuccino loyalty card,
                and send your order directly to our barista via WhatsApp.
              </p>
            </div>
            <LoyaltyCard />
            <MenuSection />
          </div>
        </section>

        <VisitSection />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}