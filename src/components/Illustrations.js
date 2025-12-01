import React from 'react';

// Illustration pour Business Intelligence
export const BIIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="300" height="200" rx="8" fill="#E31837" opacity="0.1"/>
    <rect x="70" y="70" width="120" height="80" rx="4" fill="#E31837" opacity="0.2"/>
    <rect x="210" y="70" width="120" height="80" rx="4" fill="#E31837" opacity="0.2"/>
    <rect x="70" y="170" width="260" height="60" rx="4" fill="#E31837" opacity="0.2"/>
    <circle cx="100" cy="100" r="8" fill="#E31837"/>
    <circle cx="240" cy="100" r="8" fill="#E31837"/>
    <path d="M 100 100 L 240 100" stroke="#E31837" strokeWidth="2"/>
    <path d="M 170 70 L 170 150" stroke="#E31837" strokeWidth="2" strokeDasharray="4 4"/>
  </svg>
);

// Illustration pour Data Analytics
export const DataIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="200" width="40" height="50" rx="4" fill="#E31837"/>
    <rect x="110" y="150" width="40" height="100" rx="4" fill="#E31837" opacity="0.8"/>
    <rect x="170" y="100" width="40" height="150" rx="4" fill="#E31837" opacity="0.6"/>
    <rect x="230" y="120" width="40" height="130" rx="4" fill="#E31837" opacity="0.7"/>
    <rect x="290" y="80" width="40" height="170" rx="4" fill="#E31837" opacity="0.5"/>
    <circle cx="70" cy="180" r="4" fill="#E31837"/>
    <circle cx="130" cy="130" r="4" fill="#E31837"/>
    <circle cx="190" cy="80" r="4" fill="#E31837"/>
    <circle cx="250" cy="100" r="4" fill="#E31837"/>
    <circle cx="310" cy="60" r="4" fill="#E31837"/>
    <path d="M 70 180 L 130 130 L 190 80 L 250 100 L 310 60" stroke="#E31837" strokeWidth="2" fill="none"/>
  </svg>
);

// Illustration pour Conformité
export const ComplianceIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="150" y="80" width="100" height="140" rx="8" fill="#E31837" opacity="0.1" stroke="#E31837" strokeWidth="2"/>
    <path d="M 170 120 L 190 140 L 230 100" stroke="#E31837" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="200" cy="200" r="30" fill="#E31837" opacity="0.2"/>
    <path d="M 200 185 L 200 215 M 185 200 L 215 200" stroke="#E31837" strokeWidth="2"/>
  </svg>
);

// Illustration pour IA
export const AIIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="120" r="40" fill="#E31837" opacity="0.2"/>
    <circle cx="250" cy="120" r="40" fill="#E31837" opacity="0.2"/>
    <circle cx="200" cy="180" r="40" fill="#E31837" opacity="0.2"/>
    <path d="M 150 120 L 200 180 M 250 120 L 200 180 M 150 120 L 250 120" stroke="#E31837" strokeWidth="2"/>
    <circle cx="200" cy="150" r="8" fill="#E31837"/>
  </svg>
);

// Illustration générique pour les services
export const ServiceIllustration = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="100" y="100" width="200" height="100" rx="12" fill="#E31837" opacity="0.1" stroke="#E31837" strokeWidth="2"/>
    <circle cx="150" cy="140" r="15" fill="#E31837" opacity="0.3"/>
    <circle cx="200" cy="140" r="15" fill="#E31837" opacity="0.3"/>
    <circle cx="250" cy="140" r="15" fill="#E31837" opacity="0.3"/>
    <path d="M 150 140 L 200 140 L 250 140" stroke="#E31837" strokeWidth="2"/>
  </svg>
);

// Icône de graphique
export const ChartIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V21H21" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 16L12 11L16 15L21 10" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône de données
export const DataIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#E31837" strokeWidth="2"/>
    <path d="M9 9H15M9 15H15M9 12H15" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Icône de sécurité
export const SecurityIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 6V11C4 16.55 7.16 21.74 12 23C16.84 21.74 20 16.55 20 11V6L12 2Z" stroke="#E31837" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône d'automatisation
export const AutomationIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E31837" strokeWidth="2"/>
    <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="3" fill="#E31837" opacity="0.3"/>
  </svg>
);

// Icône Power BI
export const PowerBIIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#E31837" opacity="0.1"/>
    <path d="M12 6L8 10H11V18H13V10H16L12 6Z" fill="#E31837"/>
    <circle cx="12" cy="12" r="2" fill="#E31837" opacity="0.3"/>
  </svg>
);

// Icône Tableau
export const TableauIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="6" height="6" fill="#E31837" opacity="0.6"/>
    <rect x="12" y="4" width="6" height="6" fill="#E31837" opacity="0.8"/>
    <rect x="4" y="12" width="6" height="6" fill="#E31837" opacity="0.4"/>
    <rect x="12" y="12" width="6" height="6" fill="#E31837"/>
  </svg>
);

// Icône Python
export const PythonIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 7 2.5 7 2.5L7.5 5H11V6H5C5 6 4.5 6.5 4.5 9V11H2C2 11 2 11.5 2 15C2 18.5 2.5 20 6 20H8V18.5C8 17.5 8.5 17 9.5 17H14.5C15.5 17 16 16.5 16 15.5V13H19.5C19.5 13 20 13 20 10.5V9C20 5.5 19 5 15.5 5H14.5V2.5C14.5 2.5 14 2 12 2Z" fill="#E31837" opacity="0.8"/>
    <circle cx="6.5" cy="4.5" r="1" fill="#fff"/>
  </svg>
);

// Icône Dashboard
export const DashboardIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="8" height="8" rx="1" fill="#E31837" opacity="0.6"/>
    <rect x="13" y="3" width="8" height="5" rx="1" fill="#E31837" opacity="0.8"/>
    <rect x="3" y="13" width="8" height="8" rx="1" fill="#E31837" opacity="0.4"/>
    <rect x="13" y="10" width="8" height="11" rx="1" fill="#E31837"/>
  </svg>
);

// Icône Analytics
export const AnalyticsIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21L9 15L13 19L21 11V21H3Z" fill="#E31837" opacity="0.6"/>
    <path d="M21 3V11L13 19L9 15L3 21" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="3" cy="21" r="2" fill="#E31837"/>
    <circle cx="9" cy="15" r="2" fill="#E31837"/>
    <circle cx="13" cy="19" r="2" fill="#E31837"/>
    <circle cx="21" cy="11" r="2" fill="#E31837"/>
  </svg>
);

// Icône Compliance
export const ComplianceIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2V6M12 18V22M22 12H18M6 12H2" stroke="#E31837" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

// Icône Development
export const DevelopmentIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E31837" opacity="0.6"/>
    <path d="M2 17L12 22L22 17" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Cloud
export const CloudIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 10H16.74C16.3659 8.551 15.2141 7.32397 13.7071 6.70697C12.2001 6.08997 10.5074 6.15704 9.06107 6.89304C7.6147 7.62904 6.57446 8.95404 6.21793 10.5C4.77293 10.969 3.60393 12.033 3.04193 13.447C2.47993 14.861 2.57593 16.477 3.30493 17.803C4.03393 19.129 5.30993 20.019 6.78993 20.219C8.26993 20.419 9.77793 19.906 10.8899 18.819L18 10Z" fill="#E31837" opacity="0.3"/>
    <path d="M18 10H16.74C16.3659 8.551 15.2141 7.32397 13.7071 6.70697C12.2001 6.08997 10.5074 6.15704 9.06107 6.89304C7.6147 7.62904 6.57446 8.95404 6.21793 10.5C4.77293 10.969 3.60393 12.033 3.04193 13.447C2.47993 14.861 2.57593 16.477 3.30493 17.803C4.03393 19.129 5.30993 20.019 6.78993 20.219C8.26993 20.419 9.77793 19.906 10.8899 18.819L18 10Z" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône API
export const APIIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#E31837" strokeWidth="2"/>
    <path d="M8 8H16M8 12H16M8 16H12" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="6" r="2" fill="#E31837"/>
  </svg>
);

// Icône Machine Learning
export const MLIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E31837" strokeWidth="2"/>
    <path d="M12 6L8 10H11V18H13V10H16L12 6Z" fill="#E31837" opacity="0.6"/>
    <circle cx="12" cy="12" r="3" fill="#E31837" opacity="0.3"/>
  </svg>
);

// Icône Formation
export const FormationIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône HEC
export const HECIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#E31837" opacity="0.1" stroke="#E31837" strokeWidth="2"/>
    <path d="M8 8H16M8 12H16M8 16H14" stroke="#E31837" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="18" cy="6" r="1.5" fill="#E31837"/>
  </svg>
);

// Icône Montréal
export const MontrealIcon = ({ className = "" }) => (
  <svg className={className} width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#E31837" opacity="0.3"/>
    <path d="M2 17L12 22L22 17M2 12L12 17L22 12" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2" fill="#E31837"/>
  </svg>
);

// Icône Check
export const CheckIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E31837" strokeWidth="2"/>
    <path d="M8 12L11 15L16 9" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Arrow Right
export const ArrowRightIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Star
export const StarIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#E31837" opacity="0.6"/>
  </svg>
);

// Icône Users
export const UsersIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="9" cy="7" r="4" stroke="#E31837" strokeWidth="2"/>
    <path d="M23 21V19C22.9993 18.1132 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8531 15.3516 20 15.13" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Rocket
export const RocketIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 16.5C4.5 16.5 2 14.5 2 12C2 9.5 4.5 7.5 4.5 7.5C4.5 7.5 7 9.5 7 12C7 14.5 4.5 16.5 4.5 16.5Z" fill="#E31837" opacity="0.3"/>
    <path d="M12 2C12 2 10 4.5 10 7C10 9.5 12 12 12 12C12 12 14 9.5 14 7C14 4.5 12 2 12 2Z" fill="#E31837" opacity="0.3"/>
    <path d="M19.5 7.5C19.5 7.5 22 9.5 22 12C22 14.5 19.5 16.5 19.5 16.5C19.5 16.5 17 14.5 17 12C17 9.5 19.5 7.5 19.5 7.5Z" fill="#E31837" opacity="0.3"/>
    <path d="M12 12C12 12 9.5 14 7 14C4.5 14 2.5 12 2.5 12C2.5 12 4.5 10 7 10C9.5 10 12 12 12 12Z" fill="#E31837" opacity="0.3"/>
    <path d="M12 12C12 12 14.5 14 17 14C19.5 14 21.5 12 21.5 12C21.5 12 19.5 10 17 10C14.5 10 12 12 12 12Z" fill="#E31837" opacity="0.3"/>
    <circle cx="12" cy="12" r="2" fill="#E31837"/>
  </svg>
);

// Icône Lightbulb
export const LightbulbIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 11.5 7.5 13.5 9 15V17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17V15C16.5 13.5 18 11.5 18 9C18 5.68629 15.3137 3 12 3Z" stroke="#E31837" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Icône Target
export const TargetIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="#E31837" strokeWidth="2"/>
    <circle cx="12" cy="12" r="6" stroke="#E31837" strokeWidth="2"/>
    <circle cx="12" cy="12" r="2" fill="#E31837"/>
  </svg>
);

