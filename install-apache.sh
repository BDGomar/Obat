#!/bin/bash

# Configuration
SERVER_IP="13.50.248.190"
PEM_KEY="/Users/omar/Documents/perso/gestion-dossier-notaire.pem"
SERVER_USER="ubuntu"

echo "🔧 Installation et configuration d'Apache"
echo ""

ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << 'ENDSSH'
    echo "📦 Installation d'Apache..."
    sudo apt update
    sudo apt install -y apache2 libapache2-mod-php8.2
    
    echo "🔧 Activation des modules Apache..."
    sudo a2enmod rewrite
    sudo a2enmod php8.2
    
    echo "📝 Configuration du VirtualHost..."
    sudo tee /etc/apache2/sites-available/obat-backend.conf > /dev/null << 'APACHE_CONFIG'
<VirtualHost *:80>
    ServerName 13.50.248.190
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/obat-backend/public

    <Directory /var/www/obat-backend/public>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # Logs
    ErrorLog ${APACHE_LOG_DIR}/obat-backend-error.log
    CustomLog ${APACHE_LOG_DIR}/obat-backend-access.log combined

    # Sécurité supplémentaire
    <Directory /var/www/obat-backend>
        Options -Indexes
        AllowOverride None
        Require all denied
    </Directory>

    # Autoriser uniquement le dossier public
    <Directory /var/www/obat-backend/public>
        Require all granted
    </Directory>
</VirtualHost>
APACHE_CONFIG

    echo "🔧 Activation du site..."
    sudo a2ensite obat-backend.conf
    
    # Désactiver le site par défaut
    sudo a2dissite 000-default.conf 2>/dev/null || true
    
    echo "✅ Vérification de la configuration..."
    sudo apache2ctl configtest
    
    echo "🔄 Redémarrage d'Apache..."
    sudo systemctl restart apache2
    sudo systemctl enable apache2
    
    echo "✅ Apache installé et configuré avec succès!"
ENDSSH

echo ""
echo "✅ Installation terminée!"

