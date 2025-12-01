import React from 'react';
import '../styles/Hero.css';
import '../styles/Buttons.css';
import { DataIllustration, AnalyticsIcon, DashboardIcon, RocketIcon, PowerBIIcon, TableauIcon, PythonIcon } from './Illustrations';
import Particles from './Particles';

const Hero = () => {
  return (
    <section className="hero">
      <Particles />
      <div className="hero-background">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-gradient-orb orb-3"></div>
      </div>
      
      <div className="hero-visual">
        <div className="hero-card hero-card-1">
          <PowerBIIcon className="hero-tech-icon" />
          <div className="hero-card-glow"></div>
        </div>
        <div className="hero-card hero-card-2">
          <TableauIcon className="hero-tech-icon" />
          <div className="hero-card-glow"></div>
        </div>
        <div className="hero-card hero-card-3">
          <PythonIcon className="hero-tech-icon" />
          <div className="hero-card-glow"></div>
        </div>
        <div className="hero-main-visual">
          <DataIllustration className="hero-data-viz" />
        </div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <div className="badge-dot"></div>
            <span className="badge-text">Expertise BI certifiée • Montréal</span>
          </div>
          
          <h1 className="hero-title animate-fade-up-1">
            <span className="title-line">Transformez vos données</span>
            <span className="title-highlight">en avantage concurrentiel</span>
          </h1>
          
          <p className="hero-subtitle animate-fade-up-2">
            Nous accompagnons les PME québécoises dans leur transformation numérique 
            avec une expertise distinctive en Business Intelligence et Analytics.
          </p>
          
          <div className="hero-ctas animate-fade-up-3">
            <a href="#contact" className="btn-hero-primary">
              <span>Consultation gratuite</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#services" className="btn-hero-secondary">
              <span>Découvrir nos services</span>
            </a>
          </div>

          <div className="hero-metrics animate-fade-up-4">
            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <AnalyticsIcon className="metric-icon" />
              </div>
              <div className="metric-content">
                <div className="metric-value">15+</div>
                <div className="metric-label">Années d'expertise</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <DashboardIcon className="metric-icon" />
              </div>
              <div className="metric-content">
                <div className="metric-value">HEC</div>
                <div className="metric-label">Montréal</div>
              </div>
            </div>
            <div className="metric-card">
              <div className="metric-icon-wrapper">
                <RocketIcon className="metric-icon" />
              </div>
              <div className="metric-content">
                <div className="metric-value">100<span>%</span></div>
                <div className="metric-label">Clients satisfaits</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Défiler</span>
      </div>
    </section>
  );
};

export default Hero;

