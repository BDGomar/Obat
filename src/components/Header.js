import React, { useEffect, useState } from 'react';
import '../styles/Header.css';
import '../styles/Buttons.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <a href="#home" className="logo" onClick={closeMobileMenu}>
            <img src="/obat-logo.svg" alt="Obat Services" className="logo-img" />
          </a>
          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#services" className="nav-link" onClick={closeMobileMenu}>Services</a>
            <a href="#expertise" className="nav-link" onClick={closeMobileMenu}>Expertise</a>
            <a href="#realisations" className="nav-link" onClick={closeMobileMenu}>Réalisations</a>
            <a href="#a-propos" className="nav-link" onClick={closeMobileMenu}>À propos</a>
            <a href="#contact" className="btn-primary" onClick={closeMobileMenu}>
              <span>Consultation gratuite</span>
              <span>→</span>
            </a>
          </nav>
          <button 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

