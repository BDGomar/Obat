# Solution pour le problème SSL/Mixed Content

## Problème actuel

Le site est déployé sur Vercel en HTTPS, mais l'API utilise un certificat SSL auto-signé qui n'est pas reconnu par les navigateurs, causant l'erreur `ERR_CERT_AUTHORITY_INVALID`.

Les navigateurs bloquent également les requêtes HTTP depuis une page HTTPS (Mixed Content Policy).

## Solutions recommandées

### Option 1 : Utiliser Cloudflare (Recommandé - Gratuit)

1. Créez un compte sur [Cloudflare](https://www.cloudflare.com)
2. Ajoutez votre domaine (ou sous-domaine) à Cloudflare
3. Configurez les DNS pour pointer vers `13.50.248.190`
4. Activez le proxy Cloudflare (orange cloud)
5. Cloudflare fournira automatiquement un certificat SSL valide

**Avantages :**
- Gratuit
- SSL automatique et valide
- Protection DDoS
- CDN inclus

### Option 2 : Let's Encrypt avec un nom de domaine

Si vous avez un nom de domaine pointant vers `13.50.248.190` :

```bash
ssh -i /Users/omar/Documents/perso/gestion-dossier-notaire.pem ubuntu@13.50.248.190
sudo certbot --nginx -d votre-domaine.com
```

### Option 3 : Utiliser un sous-domaine API

Créez un sous-domaine comme `api.votre-domaine.com` et configurez-le avec Let's Encrypt.

### Option 4 : Proxy via Vercel (Temporaire)

Vous pouvez créer une route API dans Vercel qui fait un proxy vers votre serveur :

```javascript
// vercel.json ou api/contact.js
export default async function handler(req, res) {
  const response = await fetch('http://13.50.248.190/api/contact', {
    method: 'POST',
    headers: req.headers,
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
}
```

## Configuration actuelle

Pour l'instant, le code utilise HTTP directement, ce qui fonctionne mais peut être bloqué par les navigateurs en production HTTPS.

Pour forcer HTTP même depuis HTTPS, vous pouvez définir dans Vercel :

```
REACT_APP_API_URL=http://13.50.248.190
```

Mais cela peut toujours être bloqué par les navigateurs.

## Recommandation

**Utilisez Cloudflare** - C'est la solution la plus simple et la plus rapide pour obtenir un SSL valide gratuitement.

