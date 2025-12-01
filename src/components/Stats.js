import React, { useEffect, useRef } from 'react';
import '../styles/Stats.css';
import CountUp from './CountUp';
import { DashboardIcon, StarIcon, CheckIcon, HECIcon } from './Illustrations';

const Stats = () => {
  const stats = [
    {
      value: "50+",
      label: "Projets livrés au Québec",
      icon: DashboardIcon
    },
    {
      value: "15+",
      label: "Années d'expertise BI",
      icon: StarIcon
    },
    {
      value: "100%",
      label: "Clients satisfaits",
      icon: CheckIcon
    },
    {
      value: "HEC",
      label: "Formations HEC Montréal",
      icon: HECIcon
    }
  ];

  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card animate-on-scroll">
              <div className="stat-icon-wrapper">
                <stat.icon className="stat-icon-svg" />
              </div>
              <div className="stat-value">
                {stat.value === "HEC" ? stat.value : <CountUp end={stat.value} />}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

