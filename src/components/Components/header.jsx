import React, { useState, useEffect } from "react";
import "./header.css";

function Header({ scrollToProjects, scrollToExperience, scrollToContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const makeNavHandler = (fn) => (e) => {
    if (fn) { e.preventDefault(); fn(); }
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <a href="/" className="header-logo">Owen Bartlett</a>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="/#projects"    onClick={makeNavHandler(scrollToProjects)}>Projects</a>
        <a href="/#experience"  onClick={makeNavHandler(scrollToExperience)}>Experience</a>
        <a href="/#contact"     onClick={makeNavHandler(scrollToContact)}>Contact</a>
        <a
          href="/OwenBartlett.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="header-resume-btn"
          onClick={() => setMenuOpen(false)}
        >
          Résumé
        </a>
      </nav>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
      >
        <span/><span/><span/>
      </button>
    </header>
  );
}

export default Header;
