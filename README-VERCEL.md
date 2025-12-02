# Configuration Vercel pour l'API

## Solution implémentée

Une route API proxy a été créée dans `/api/contact.js` qui fait le pont entre votre site Vercel (HTTPS) et votre serveur Laravel (HTTP).

### Architecture

```
Navigateur (HTTPS) → Vercel API Route (HTTPS) → Serveur Laravel (HTTP)
```

Cela évite le problème "Mixed Content" car toute la communication externe est en HTTPS.

## Déploiement

1. **Pousser les changements sur GitHub**
2. **Vercel détectera automatiquement** la route API dans `/api/contact.js`
3. **Le formulaire utilisera automatiquement** `/api/contact` (route relative)

## Variables d'environnement (optionnel)

Si vous voulez changer l'URL du serveur Laravel, ajoutez dans Vercel :

```
REACT_APP_API_URL=/api/contact
```

## Alternative : Utiliser directement le serveur

Si vous préférez utiliser directement le serveur (nécessite un certificat SSL valide), configurez dans Vercel :

```
REACT_APP_API_URL=https://votre-domaine.com/api/contact
```

## Test local

En développement local, le formulaire utilisera `/api/contact` qui ne fonctionnera pas. Pour tester localement :

```bash
# Définir une variable d'environnement
export REACT_APP_API_URL=http://localhost:8000/api/contact
npm start
```

Ou modifiez temporairement dans `ContactForm.js` pour utiliser `http://localhost:8000/api/contact` en développement.

