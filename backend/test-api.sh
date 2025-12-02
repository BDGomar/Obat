#!/bin/bash

echo "Test de l'API Laravel..."
echo ""

# Test de la route API
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "need": "bi",
    "challenge": "Test challenge"
  }' \
  -v

echo ""
echo ""
echo "Si vous voyez une erreur 404, assurez-vous que le serveur Laravel est démarré:"
echo "cd backend && php artisan serve"

