# Obat Services - Site Web React

Site web moderne pour Obat Services, converti depuis une maquette HTML en application React.

## Installation

### Frontend React
```bash
npm install
```

### Backend Laravel
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

## Configuration Email

1. Dans le dossier `backend`, modifiez le fichier `.env`
2. Remplissez les informations SMTP :

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=contact@digitgroup.site
MAIL_PASSWORD=votre_mot_de_passe_email
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=contact@digitgroup.site
MAIL_FROM_NAME="Obat Services"
```

## Démarrage

### Mode développement (Frontend + Backend)

```bash
npm run dev
```

Ou séparément :

**Terminal 1 - Frontend React:**
```bash
npm start
```

**Terminal 2 - Backend Laravel:**
```bash
cd backend
php artisan serve
```

L'application sera accessible sur [http://localhost:3000](http://localhost:3000)
Le serveur API Laravel sera accessible sur [http://localhost:8000](http://localhost:8000)

## Production

### Build Frontend

```bash
npm run build
```

### Déploiement

Pour le déploiement en production, vous devrez :

1. **Déployer le frontend** (build React) sur Vercel, Netlify, ou votre hébergeur
2. **Déployer le backend Laravel** sur un service comme :
   - Laravel Forge
   - DigitalOcean
   - AWS
   - Heroku
   - Railway
   - Render

### Configuration Production

1. Mettez à jour l'URL de l'API dans `ContactForm.js` :

```javascript
const response = await fetch('https://votre-api-laravel.com/api/contact', {
  // ...
});
```

2. Configurez les variables d'environnement dans le `.env` du backend Laravel en production

## Structure du projet

```
obat-react/
├── public/
│   ├── index.html
│   └── obat-logo.svg
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── Services.js
│   │   ├── Expertise.js
│   │   ├── Process.js
│   │   ├── Testimonial.js
│   │   ├── ContactForm.js
│   │   └── Footer.js
│   ├── styles/
│   │   ├── index.css
│   │   └── ...
│   ├── utils/
│   │   └── animations.js
│   ├── App.js
│   └── index.js
├── server.js
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Technologies utilisées

- React 18.2.0
- CSS3 avec animations
- Laravel 12 (backend)
- Font Inter (Google Fonts)

## Fonctionnalités

- Design responsive
- Animations au scroll
- Navigation fluide
- Menu hamburger mobile
- Formulaire de contact avec envoi email SMTP
- Logo officiel intégré
- Plus de 50 icônes et illustrations
- Système de particules animées
- Curseur personnalisé
- Barre de progression de scroll

## Configuration SMTP

Le formulaire de contact envoie les emails à `contact@digitgroup.site` via le serveur SMTP Hostinger :

- **Serveur SMTP:** smtp.hostinger.com
- **Port:** 465
- **SSL/TLS:** Activé (ssl)

Les emails sont envoyés depuis l'adresse configurée dans `MAIL_FROM_ADDRESS` et une copie de confirmation est envoyée au client.

### Structure du backend Laravel

```
backend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       └── ContactController.php
│   └── Mail/
│       ├── ContactFormMail.php
│       └── ContactConfirmationMail.php
├── resources/
│   └── views/
│       └── emails/
│           ├── contact-form.blade.php
│           └── contact-confirmation.blade.php
└── routes/
    └── api.php
```
