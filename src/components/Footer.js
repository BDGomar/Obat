import React from 'react';
import '../styles/Footer.css';
import { MontrealIcon, ArrowRightIcon, CheckIcon } from './Illustrations';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/obat-logo.svg" alt="Obat Services" className="footer-logo-img" />
            </div>
            <p className="footer-desc">
              Transformez vos données en décisions stratégiques. 
              Expertise BI, Analytics et transformation numérique pour PME québécoises.
            </p>
            <div className="footer-location">
              <MontrealIcon className="footer-location-icon" />
              <span>Montréal, Québec</span>
            </div>
          </div>

          <div>
            <h4 className="footer-title">SERVICES</h4>
            <ul className="footer-links">
              <li><a href="#services"><CheckIcon className="footer-link-icon" /> Business Intelligence & Analytics</a></li>
              <li><a href="#services"><CheckIcon className="footer-link-icon" /> Conformité Loi 25</a></li>
              <li><a href="#services"><CheckIcon className="footer-link-icon" /> Développement d'Applications</a></li>
              <li><a href="#services"><CheckIcon className="footer-link-icon" /> IA & Automatisation</a></li>
              <li><a href="#services"><CheckIcon className="footer-link-icon" /> Formation & Transfert</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">ENTREPRISE</h4>
            <ul className="footer-links">
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#realisations">Réalisations</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">LÉGAL</h4>
            <ul className="footer-links">
              <li><a href="#">Confidentialité</a></li>
              <li><a href="#">Conditions</a></li>
              <li><a href="#">Mentions légales</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© 2025 Obat Services | <a href="#confidentialite">Confidentialité</a> | <a href="#mentions-legales">Mentions légales</a></span>
          <div className="footer-social">
            <a href="https://linkedin.com/company/obat-services" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

