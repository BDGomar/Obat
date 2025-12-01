import React from 'react';
import '../styles/Expertise.css';
import '../styles/Buttons.css';
import { HECIcon, StarIcon, UsersIcon, RocketIcon, LightbulbIcon, TargetIcon } from './Illustrations';

const Expertise = () => {
  const features = [
    {
      number: '01',
      title: 'Expertise BI de haut niveau',
      description: 'Master BI de HEC Montréal. Certifications SAS, Python, Power BI, Tableau. +15 ans d\'expérience en données.'
    },
    {
      number: '02',
      title: 'Approche PME',
      description: 'Solutions dimensionnées pour votre réalité. Budgets adaptés. Accompagnement personnalisé.'
    },
    {
      number: '03',
      title: 'Transfert de compétences',
      description: 'On ne livre pas juste une solution, on vous rend autonomes. Formation de vos équipes incluse. Documentation complète.'
    }
  ];

  return (
    <section className="section section-dark" id="expertise">
      <div className="dark-orb"></div>
      <div className="container">
        <div className="dark-grid">
          <div>
            <span className="line-decoration-static" style={{background: '#E31837'}}></span>
            <h2 className="section-title">
              Pourquoi<br />
              Obat Services
            </h2>
            <p className="dark-desc">
              La Business Intelligence n'est pas qu'un service parmi d'autres chez Obat Services — 
              c'est notre ADN. Chaque projet intègre une dimension analytique qui vous permet de 
              mesurer, comprendre et optimiser.
            </p>
            <a href="#contact" className="btn-white">
              <span>Découvrir notre approche</span>
              <span>→</span>
            </a>
          </div>

          <div className="features">
            {features.map((feature, index) => {
              const icons = [HECIcon, UsersIcon, RocketIcon];
              const Icon = icons[index];
              
              return (
                <div key={index} className="feature-card animate-on-scroll">
                  <div className="feature-icon-wrapper">
                    <Icon className="feature-icon" />
                  </div>
                  <span className="feature-number">{feature.number}</span>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;

