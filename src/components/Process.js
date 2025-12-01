import React from 'react';
import '../styles/Process.css';
import { UsersIcon, AnalyticsIcon, RocketIcon, FormationIcon } from './Illustrations';

const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Écoute',
      description: 'On comprend vos défis et objectifs business'
    },
    {
      number: '02',
      title: 'Diagnostic',
      description: 'Audit de vos données et recommandations'
    },
    {
      number: '03',
      title: 'Solution',
      description: 'Développement et implémentation agile'
    },
    {
      number: '04',
      title: 'Autonomie',
      description: 'Formation et transfert de compétences'
    }
  ];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-center">
          <span className="line-decoration-static"></span>
          <h2 className="section-title">Notre Processus</h2>
          <p className="section-desc">Simple. Efficace. Transparent. Un processus clair en 4 étapes pour transformer vos données.</p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => {
            const icons = [UsersIcon, AnalyticsIcon, RocketIcon, FormationIcon];
            const Icon = icons[index];
            
            return (
              <div key={index} className="process-card animate-on-scroll">
                <div className="process-icon-wrapper">
                  <Icon className="process-icon" />
                </div>
                <div className="process-number">{step.number}</div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.description}</p>
                <div className="process-line"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

