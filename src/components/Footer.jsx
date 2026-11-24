export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <strong>Cafe 61 — Cafe in the Green</strong>
          <p>Windermere, Durban • Specialty Coffee & All-Day Breakfast</p>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Cafe 61. Interactive Website Prototype.
        </p>
      </div>
    </footer>
  );
}