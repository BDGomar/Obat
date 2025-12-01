import React from 'react';
import '../styles/Challenges.css';
import { DataIcon, SecurityIcon, AutomationIcon, AIIllustration, AnalyticsIcon, ComplianceIcon as ComplianceIconSmall, DevelopmentIcon, MLIcon } from './Illustrations';

const Challenges = () => {
  const challenges = [
    {
      challenge: "Je prends des décisions sans données fiables",
      solution: "Tableaux de bord décisionnels sur mesure"
    },
    {
      challenge: "Je dois me conformer à la Loi 25",
      solution: "Accompagnement conformité complet"
    },
    {
      challenge: "Mes processus sont manuels et lents",
      solution: "Automatisation et intégration intelligente"
    },
    {
      challenge: "Je veux exploiter l'IA mais je ne sais pas par où commencer",
      solution: "Stratégie IA pragmatique avec subventions"
    }
  ];

  return (
    <section className="section challenges-section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="line-decoration-static"></span>
            <h2 className="section-title">
              Vos Défis,<br />
              <span>Nos Solutions</span>
            </h2>
          </div>
          <div>
            <p className="section-desc">
              Une approche problème → solution qui parle directement à vos besoins.
            </p>
          </div>
        </div>

        <div className="challenges-grid">
          {challenges.map((item, index) => {
            const renderIcon = () => {
              if (index === 0) return (
                <>
                  <DataIcon className="icon-svg" />
                  <AnalyticsIcon className="icon-svg" />
                </>
              );
              if (index === 1) return (
                <>
                  <SecurityIcon className="icon-svg" />
                  <ComplianceIconSmall className="icon-svg" />
                </>
              );
              if (index === 2) return (
                <>
                  <AutomationIcon className="icon-svg" />
                  <DevelopmentIcon className="icon-svg" />
                </>
              );
              return (
                <>
                  <AIIllustration className="icon-svg" />
                  <MLIcon className="icon-svg" />
                </>
              );
            };

            return (
              <div key={index} className="challenge-card animate-on-scroll">
                <div className="challenge-icon">
                  {renderIcon()}
                </div>
                <div className="challenge-side">
                  <div className="challenge-label">Votre défi</div>
                  <p className="challenge-text">"{item.challenge}"</p>
                </div>
                <div className="solution-arrow">→</div>
                <div className="solution-side">
                  <div className="solution-label">Notre solution</div>
                  <p className="solution-text">{item.solution}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Challenges;

