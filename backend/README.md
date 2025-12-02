# Backend Laravel - Obat Services

Backend API Laravel pour gérer l'envoi d'emails depuis le formulaire de contact.

## Configuration

### 1. Variables d'environnement

Copiez `.env.example` vers `.env` et configurez :

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

### 2. Clé d'application

```bash
php artisan key:generate
```

## Démarrage

```bash
php artisan serve
```

Le serveur sera accessible sur `http://localhost:8000`

## API Endpoints

### POST /api/contact

Envoie un email de contact à `contact@digitgroup.site` et un email de confirmation au client.

**Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "438-123-4567",
  "company": "Example Corp",
  "role": "Directeur",
  "need": "bi",
  "challenge": "Description du défi...",
  "budget": "25-50k",
  "source": "google"
}
```

**Réponse succès (200):**
```json
{
  "success": true,
  "message": "Votre message a été envoyé avec succès. Nous vous contacterons bientôt !"
}
```

**Réponse erreur (400/500):**
```json
{
  "success": false,
  "message": "Message d'erreur",
  "errors": {}
}
```

## Structure

- `app/Http/Controllers/ContactController.php` - Contrôleur pour gérer les requêtes
- `app/Mail/ContactFormMail.php` - Email envoyé à contact@digitgroup.site
- `app/Mail/ContactConfirmationMail.php` - Email de confirmation au client
- `resources/views/emails/` - Templates Blade pour les emails
- `routes/api.php` - Routes API

## CORS

CORS est configuré pour accepter les requêtes depuis `http://localhost:3000` (React dev server).

Pour la production, mettez à jour la configuration CORS dans `bootstrap/app.php` si nécessaire.
