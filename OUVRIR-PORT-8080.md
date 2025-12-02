# Ouvrir le port 8080 dans AWS Security Group

Le port 8080 doit être ouvert dans le Security Group de votre instance EC2 pour que l'API soit accessible depuis l'extérieur.

## Étapes pour ouvrir le port 8080

### 1. Accéder à la console AWS

1. Connectez-vous à la [Console AWS](https://console.aws.amazon.com)
2. Allez dans **EC2** > **Instances**
3. Sélectionnez votre instance (IP: 13.50.248.190)

### 2. Modifier le Security Group

1. Dans l'onglet **Détails** de l'instance, cliquez sur le **Security Group**
2. Cliquez sur l'onglet **Inbound rules** (Règles entrantes)
3. Cliquez sur **Edit inbound rules** (Modifier les règles entrantes)
4. Cliquez sur **Add rule** (Ajouter une règle)
5. Configurez la nouvelle règle :
   - **Type**: Custom TCP
   - **Port range**: 8080
   - **Source**: 0.0.0.0/0 (pour autoriser depuis partout) ou votre IP spécifique
   - **Description**: Apache Laravel API
6. Cliquez sur **Save rules** (Enregistrer les règles)

### 3. Vérification

Après avoir ouvert le port, testez l'API :

```bash
curl -X POST http://13.50.248.190:8080/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"name":"Test","email":"test@test.com","need":"bi","challenge":"test"}'
```

## Alternative : Utiliser Nginx comme reverse proxy

Si vous préférez ne pas ouvrir le port 8080, vous pouvez configurer Nginx pour rediriger les requêtes `/api` vers Apache sur le port 8080 en interne.

### Configuration Nginx (optionnel)

Ajoutez cette configuration dans votre site Nginx :

```nginx
location /api {
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

Avec cette configuration, l'API sera accessible sur `http://13.50.248.190/api/contact` (sans le port 8080).

