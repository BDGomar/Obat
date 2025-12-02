#!/bin/bash

# Configuration
SERVER_IP="13.50.248.190"
PEM_KEY="/Users/omar/Documents/perso/gestion-dossier-notaire.pem"
SERVER_USER="ubuntu"  # Ajustez si nécessaire (root, ubuntu, etc.)
REMOTE_DIR="/var/www/obat-backend"
LOCAL_BACKEND_DIR="backend"

echo "🚀 Déploiement du backend Laravel sur $SERVER_IP"
echo ""

# Vérification de la clé PEM
if [ ! -f "$PEM_KEY" ]; then
    echo "❌ Erreur: La clé PEM n'existe pas à $PEM_KEY"
    exit 1
fi

# Vérification du dossier backend local
if [ ! -d "$LOCAL_BACKEND_DIR" ]; then
    echo "❌ Erreur: Le dossier backend n'existe pas"
    exit 1
fi

echo "📦 Préparation du déploiement..."
echo ""

# Créer une archive du backend (sans node_modules, vendor, etc.)
cd "$LOCAL_BACKEND_DIR"
tar --exclude='vendor' \
    --exclude='node_modules' \
    --exclude='.git' \
    --exclude='storage/logs/*' \
    --exclude='storage/framework/cache/*' \
    --exclude='storage/framework/sessions/*' \
    --exclude='storage/framework/views/*' \
    --exclude='.env' \
    --exclude='.DS_Store' \
    -czf ../backend-deploy.tar.gz .
cd ..

echo "📤 Upload vers le serveur..."
scp -i "$PEM_KEY" backend-deploy.tar.gz $SERVER_USER@$SERVER_IP:/tmp/

echo "🔧 Installation sur le serveur..."
ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << 'ENDSSH'
    # Créer le répertoire si nécessaire
    sudo mkdir -p /var/www/obat-backend
    sudo chown -R $USER:$USER /var/www/obat-backend
    
    # Extraire l'archive
    cd /var/www/obat-backend
    tar -xzf /tmp/backend-deploy.tar.gz
    rm /tmp/backend-deploy.tar.gz
    
    # Installer les dépendances Composer
    if ! command -v composer &> /dev/null; then
        echo "⚠️  Composer n'est pas installé. Installation..."
        curl -sS https://getcomposer.org/installer | php
        sudo mv composer.phar /usr/local/bin/composer
    fi
    
    composer install --no-dev --optimize-autoloader
    
    # Créer le fichier .env si nécessaire
    if [ ! -f .env ]; then
        cp .env.example .env
        php artisan key:generate
        echo "⚠️  IMPORTANT: Configurez le fichier .env avec vos paramètres SMTP!"
    fi
    
    # Optimiser Laravel
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    
    # Créer les liens symboliques pour storage
    php artisan storage:link || true
    
    # Définir les permissions
    sudo chown -R www-data:www-data storage bootstrap/cache
    sudo chmod -R 775 storage bootstrap/cache
    
    echo "✅ Backend déployé avec succès!"
ENDSSH

# Nettoyer l'archive locale
rm backend-deploy.tar.gz

echo ""
echo "✅ Déploiement terminé!"
echo ""
echo "📝 Prochaines étapes:"
echo "1. Connectez-vous au serveur: ssh -i $PEM_KEY $SERVER_USER@$SERVER_IP"
echo "2. Configurez le fichier .env dans /var/www/obat-backend/.env"
echo "3. Configurez Apache (voir apache-config.conf)"
echo "4. Redémarrez Apache: sudo systemctl restart apache2"
echo ""
