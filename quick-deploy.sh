#!/bin/bash

# Script de déploiement rapide - Backend Laravel sur Apache

echo "🚀 Déploiement rapide du backend Laravel"
echo "=========================================="
echo ""

# Exécuter le déploiement
echo "📦 Étape 1/2 : Déploiement du code..."
./deploy-backend.sh

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors du déploiement"
    exit 1
fi

echo ""
echo "⚙️  Étape 2/2 : Configuration d'Apache..."
./setup-apache.sh

if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la configuration d'Apache"
    exit 1
fi

echo ""
echo "✅ Déploiement terminé avec succès!"
echo ""
echo "📝 N'oubliez pas de :"
echo "   1. Configurer le fichier .env sur le serveur"
echo "   2. Vérifier que PHP-FPM est installé et configuré"
echo "   3. Tester l'API : curl http://13.50.248.190/api/contact"
echo ""

