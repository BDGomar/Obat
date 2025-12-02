#!/bin/bash

# Configuration
SERVER_IP="13.50.248.190"
PEM_KEY="/Users/omar/Documents/perso/gestion-dossier-notaire.pem"
SERVER_USER="ubuntu"  # Ajustez si nécessaire

echo "🔧 Configuration d'Apache pour le backend Laravel"
echo ""

# Upload de la configuration Apache
echo "📤 Upload de la configuration Apache..."
scp -i "$PEM_KEY" apache-config.conf $SERVER_USER@$SERVER_IP:/tmp/obat-backend.conf

echo "⚙️  Configuration sur le serveur..."
ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << 'ENDSSH'
    # Copier la configuration
    sudo cp /tmp/obat-backend.conf /etc/apache2/sites-available/obat-backend.conf
    
    # Activer le site
    sudo a2ensite obat-backend.conf
    
    # Désactiver le site par défaut si nécessaire
    sudo a2dissite 000-default.conf 2>/dev/null || true
    
    # Activer les modules nécessaires
    sudo a2enmod rewrite
    sudo a2enmod proxy_fcgi
    sudo a2enmod setenvif
    
    # Vérifier la configuration
    sudo apache2ctl configtest
    
    # Redémarrer Apache
    sudo systemctl restart apache2
    
    echo "✅ Apache configuré avec succès!"
    echo ""
    echo "📝 Vérification:"
    echo "   - Site activé: /etc/apache2/sites-available/obat-backend.conf"
    echo "   - DocumentRoot: /var/www/obat-backend/public"
    echo "   - URL: http://13.50.248.190/api/contact"
ENDSSH

echo ""
echo "✅ Configuration terminée!"
echo ""

