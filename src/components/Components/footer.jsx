import React from "react";
import "./footer.css";

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer">
      <div className="footer-left">
        <span className="footer-name">Owen Bartlett</span>
        <span className="footer-copy">© {new Date().getFullYear()} · Built with React & Vite</span>
      </div>
      <button className="footer-top-btn" onClick={scrollToTop}>
        ↑ Back to top
      </button>
    </footer>
  );
}

export default Footer;
