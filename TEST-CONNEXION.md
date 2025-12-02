# Test de connexion à l'API

## Tests à effectuer

### 1. Test depuis votre machine locale

```bash
# Test avec le port 8080
curl -v -X POST http://13.50.248.190:8080/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Test","email":"test@test.com","need":"bi","challenge":"test"}'

# Test avec le reverse proxy Nginx (port 80)
curl -v -X POST http://13.50.248.190/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Test","email":"test@test.com","need":"bi","challenge":"test"}'
```

### 2. Vérification du Security Group AWS

Assurez-vous que :
- Le port 8080 est ouvert pour **0.0.0.0/0** (ou votre IP)
- Le type est **Custom TCP**
- La règle est **Inbound** (entrante)

### 3. Vérification depuis la console navigateur

Ouvrez la console du navigateur (F12) et testez :

```javascript
fetch('http://13.50.248.190:8080/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@test.com',
    need: 'bi',
    challenge: 'test'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error)
```

### 4. Problèmes courants

- **ERR_CONNECTION_TIMED_OUT** : Le Security Group n'est pas correctement configuré
- **CORS error** : Vérifier la configuration CORS dans Laravel
- **502 Bad Gateway** : Problème avec Nginx reverse proxy

### 5. Alternative : Utiliser le reverse proxy Nginx

Si le port 8080 ne fonctionne pas, utilisez l'URL sans port (via Nginx) :

```javascript
const API_URL = 'http://13.50.248.190/api/contact';
```

