import React from 'react';
import '../styles/Testimonial.css';

const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="testimonial-wrapper">
          <div className="testimonial-card animate-on-scroll">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">
              Obat Services a transformé notre façon de prendre des décisions. 
              En 3 mois, nous avons réduit nos coûts de 20% grâce aux insights 
              de nos tableaux de bord. L'accompagnement a été exceptionnel.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MC</div>
              <div className="author-info">
                <div className="author-name">Marie-Claude Dubois</div>
                <div className="author-role">Directrice Opérations, PME Manufacturière</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

