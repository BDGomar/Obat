# Guide de déploiement - Backend Laravel

## 🚀 Déploiement sur le serveur

### Étape 1 : Déployer le code

```bash
./deploy-backend.sh
```

Ce script va :
- Créer une archive du backend
- L'uploader sur le serveur
- Installer les dépendances Composer
- Configurer les permissions

### Étape 2 : Configurer Apache

```bash
./setup-apache.sh
```

Ce script va :
- Configurer Apache pour servir Laravel
- Activer les modules nécessaires (rewrite, proxy_fcgi)
- Redémarrer Apache

### Étape 3 : Configurer le fichier .env

Connectez-vous au serveur :

```bash
ssh -i /Users/omar/Documents/perso/gestion-dossier-notaire.pem ubuntu@13.50.248.190
```

Éditez le fichier `.env` :

```bash
sudo nano /var/www/obat-backend/.env
```

Configurez les paramètres SMTP :

```env
APP_NAME="Obat Services"
APP_ENV=production
APP_DEBUG=false
APP_URL=http://13.50.248.190

MAIL_MAILER=smtp
MAIL_HOST=smtp.hostinger.com
MAIL_PORT=465
MAIL_USERNAME=contact@digitgroup.site
MAIL_PASSWORD=votre_mot_de_passe_email
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=contact@digitgroup.site
MAIL_FROM_NAME="Obat Services"
```

Après modification, rechargez la configuration :

```bash
cd /var/www/obat-backend
php artisan config:cache
php artisan route:cache
```

### Étape 4 : Vérifier le déploiement

Testez l'API :

```bash
curl -X POST http://13.50.248.190/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "need": "bi",
    "challenge": "Test"
  }'
```

### Étape 5 : Mettre à jour le frontend

Mettez à jour l'URL dans `src/components/ContactForm.js` :

```javascript
const response = await fetch('http://13.50.248.190/api/contact', {
```

## 🔧 Configuration Apache manuelle

Si vous préférez configurer Apache manuellement :

1. Copiez `apache-config.conf` vers `/etc/apache2/sites-available/obat-backend.conf`
2. Activez le site : `sudo a2ensite obat-backend.conf`
3. Activez les modules : `sudo a2enmod rewrite proxy_fcgi setenvif`
4. Redémarrez : `sudo systemctl restart apache2`

## 📝 Permissions

Assurez-vous que les permissions sont correctes :

```bash
sudo chown -R www-data:www-data /var/www/obat-backend/storage
sudo chown -R www-data:www-data /var/www/obat-backend/bootstrap/cache
sudo chmod -R 775 /var/www/obat-backend/storage
sudo chmod -R 775 /var/www/obat-backend/bootstrap/cache
```

## 🔍 Dépannage

### Vérifier les logs Apache

```bash
sudo tail -f /var/log/apache2/obat-backend-error.log
```

### Vérifier les logs Laravel

```bash
tail -f /var/www/obat-backend/storage/logs/laravel.log
```

### Vérifier la configuration Apache

```bash
sudo apache2ctl configtest
```

### Redémarrer Apache

```bash
sudo systemctl restart apache2
```

## 🔐 Sécurité

- Assurez-vous que `APP_DEBUG=false` en production
- Vérifiez que seul le dossier `public` est accessible
- Configurez un firewall si nécessaire
- Utilisez HTTPS en production (Let's Encrypt)

