import React from 'react';
import '../styles/Clients.css';

const Clients = () => {
  const sectors = [
    "PME manufacturières",
    "Services professionnels",
    "Commerce de détail",
    "Organismes"
  ];

  return (
    <section className="section clients-section">
      <div className="container">
        <div className="section-center">
          <span className="line-decoration-static"></span>
          <h2 className="section-title">Nos Clients</h2>
          <p className="section-desc">
            Nous accompagnons des entreprises québécoises de tous secteurs
          </p>
        </div>

        <div className="clients-grid">
          {sectors.map((sector, index) => (
            <div key={index} className="client-card animate-on-scroll">
              <div className="client-icon">{sector.charAt(0)}</div>
              <p className="client-name">{sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

