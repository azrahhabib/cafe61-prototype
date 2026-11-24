import { MapPin, Clock, Camera, MessageCircle } from "lucide-react";

export default function VisitSection() {
  return (
    <section id="visit" className="visit-section">
      <div className="section-wrapper">
        <div className="section-header-center">
          <span className="section-eyebrow">Find Us</span>
          <h2>Visit Cafe 61</h2>
          <p>
            Pop in for a relaxed sit-down or tap your collection order ahead and
            grab it straight from the counter.
          </p>
        </div>

        <div className="visit-grid">
          <div className="visit-card">
            <MapPin className="visit-icon" size={24} />
            <h3>Location</h3>
            <p>61 Henwood Rd, Windermere</p>
            <p className="muted">Berea, Durban, 4001</p>
            <a
              href="https://maps.google.com/?q=Cafe+61,+61+Henwood+Rd,+Windermere,+Durban"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Get Directions →
            </a>
          </div>

          <div className="visit-card">
            <Clock className="visit-icon" size={24} />
            <h3>Trading Hours</h3>
            <p>Sat – Thu: 08:00 – 16:00</p>
            <p className="muted">Fridays: Closed</p>
          </div>

          <div className="visit-card">
            <MessageCircle className="visit-icon" size={24} />
            <h3>Connect &amp; Collect</h3>
            <p>Quick WhatsApp collection orders &amp; daily updates.</p>
            <p className="muted">082 237 7370</p>
            <div className="social-row">
              <a
                href="https://instagram.com/cafe.sixtyone"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
              >
                <Camera size={15} /> @cafe.sixtyone
              </a>
              <a href="#rewards" className="social-pill primary">
                Order Ahead
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}