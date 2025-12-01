import React from 'react';
import '../styles/CTA.css';
import '../styles/Buttons.css';

const CTA = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-orb"></div>
      <div className="container">
        <div className="cta-grid">
          <div>
            <h2 className="cta-title">
              Prêt à prendre des décisions<br />
              <span>éclairées par vos données ?</span>
            </h2>
            <p className="cta-desc">
              Première consultation gratuite et sans engagement. 30 minutes pour discuter de vos défis.
            </p>
            <div className="cta-buttons">
              <a href="mailto:info@obatservices.com" className="btn-red">
                <span>Réserver ma consultation</span>
                <span>→</span>
              </a>
              <span className="cta-or">ou</span>
              <span className="cta-phone">438-886-9239</span>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-label">CONTACT DIRECT</div>
            <div className="contact-list">
              <div className="contact-item">
                <span>Email</span>info@obatservices.com
              </div>
              <div className="contact-item">
                <span>Tél</span>+1 438-886-9239
              </div>
              <div className="contact-item">
                <span>Adresse</span>101-7650 13e avenue, Montréal, QC H2A 2X7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

