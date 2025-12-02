# Guide de démarrage - Obat Services

## ⚠️ IMPORTANT : Démarrage du serveur Laravel

Le formulaire de contact nécessite que le serveur Laravel soit démarré.

### Démarrage rapide

**Option 1 : Les deux serveurs ensemble**
```bash
npm run dev
```

**Option 2 : Séparément**

**Terminal 1 - Frontend React:**
```bash
npm start
```

**Terminal 2 - Backend Laravel (OBLIGATOIRE):**
```bash
cd backend
php artisan serve
```

Le serveur Laravel doit être accessible sur `http://localhost:8000`

### Vérification

1. Vérifiez que le serveur Laravel est démarré :
   ```bash
   curl http://localhost:8000/api/contact
   ```
   Vous devriez voir une erreur de méthode (POST requis), pas une erreur 404.

2. Testez l'API :
   ```bash
   cd backend
   ./test-api.sh
   ```

### Configuration Email

Assurez-vous que le fichier `backend/.env` contient :
```env
MAIL_PASSWORD=votre_mot_de_passe_email
```

### Erreurs courantes

**Erreur 404 (Not Found)**
- Le serveur Laravel n'est pas démarré
- Solution : `cd backend && php artisan serve`

**Erreur CORS**
- Vérifiez que `backend/config/cors.php` autorise `http://localhost:3000`

**Erreur de connexion**
- Vérifiez que le port 8000 n'est pas utilisé par un autre processus

