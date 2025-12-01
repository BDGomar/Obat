import React from 'react';
import '../styles/Services.css';
import { BIIllustration, ComplianceIllustration, ServiceIllustration, AIIllustration, PowerBIIcon, TableauIcon, PythonIcon, ComplianceIcon as ComplianceIconSmall, DevelopmentIcon, CloudIcon, APIIcon, MLIcon } from './Illustrations';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Business Intelligence',
      subtitle: '& Analytics',
      description: 'Tableaux de bord Power BI / Tableau, rapports automatisés, analyse prédictive. Prenez des décisions éclairées, pas des paris.',
      tags: ['Power BI', 'Tableau', 'Python', 'Analyse prédictive'],
      features: ['Tableaux de bord décisionnels sur mesure', 'Rapports automatisés', 'Analyse prédictive']
    },
    {
      number: '02',
      title: 'Conformité',
      subtitle: 'Loi 25',
      description: 'Audit de vos pratiques, mise en conformité, politiques et procédures. Conformité sans stress, accompagnement complet.',
      tags: ['Audit', 'Politiques', 'Formation', 'Conformité'],
      features: ['Audit de vos pratiques', 'Mise en conformité', 'Politiques et procédures']
    },
    {
      number: '03',
      title: 'Développement',
      subtitle: 'd\'Applications',
      description: 'Applications métiers sur mesure, solutions multi-tenant SaaS, intégration de systèmes. Des applications qui travaillent pour vous.',
      tags: ['SaaS', 'Multi-tenant', 'API', 'Cloud'],
      features: ['Applications métiers sur mesure', 'Solutions multi-tenant SaaS', 'Intégration de systèmes']
    },
    {
      number: '04',
      title: 'IA &',
      subtitle: 'Automatisation',
      description: 'Stratégie d\'adoption IA, automatisation des processus, accès aux subventions gouvernementales. L\'IA pragmatique, pas le buzzword.',
      tags: ['Stratégie IA', 'Automatisation', 'ML', 'Subventions'],
      features: ['Stratégie d\'adoption IA', 'Automatisation des processus', 'Accès aux subventions']
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="line-decoration-static"></span>
            <h2 className="section-title">
              Des solutions qui<br />
              <span>génèrent des résultats</span>
            </h2>
          </div>
          <div>
            <p className="section-desc">
              Des solutions concrètes pour des résultats mesurables. Nous combinons expertise technique 
              et compréhension business pour des projets qui génèrent de la valeur.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => {
            const renderIllustration = () => {
              if (index === 0) return <BIIllustration className="service-svg" />;
              if (index === 1) return <ComplianceIllustration className="service-svg" />;
              if (index === 3) return <AIIllustration className="service-svg" />;
              return <ServiceIllustration className="service-svg" />;
            };

            return (
              <div key={index} className="service-card animate-on-scroll">
                <div className="service-illustration">
                  {renderIllustration()}
                </div>
                <div className="service-number">{service.number}</div>
                <div className="service-icon-wrapper">
                  {index === 0 && <PowerBIIcon className="service-icon" />}
                  {index === 0 && <TableauIcon className="service-icon" />}
                  {index === 0 && <PythonIcon className="service-icon" />}
                  {index === 1 && <ComplianceIconSmall className="service-icon" />}
                  {index === 2 && <DevelopmentIcon className="service-icon" />}
                  {index === 2 && <CloudIcon className="service-icon" />}
                  {index === 2 && <APIIcon className="service-icon" />}
                  {index === 3 && <MLIcon className="service-icon" />}
                </div>
                <h3 className="service-title">
                  {service.title}<br />
                  <span>{service.subtitle}</span>
                </h3>
                <p className="service-desc">{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="service-arrow">→</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

