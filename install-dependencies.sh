#!/bin/bash

# Configuration
SERVER_IP="13.50.248.190"
PEM_KEY="/Users/omar/Documents/perso/gestion-dossier-notaire.pem"
SERVER_USER="ubuntu"

echo "🔧 Installation des dépendances sur le serveur"
echo ""

ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << 'ENDSSH'
    echo "📦 Mise à jour des paquets..."
    sudo apt update
    
    echo "🔧 Ajout du PPA pour PHP..."
    sudo apt install -y software-properties-common
    sudo add-apt-repository -y ppa:ondrej/php
    
    echo "📦 Mise à jour après ajout du PPA..."
    sudo apt update
    
    echo "🔧 Installation de PHP et extensions..."
    sudo apt install -y php8.2 php8.2-fpm php8.2-cli php8.2-common php8.2-mysql php8.2-zip php8.2-gd php8.2-mbstring php8.2-curl php8.2-xml php8.2-bcmath
    
    echo "📦 Installation de Composer..."
    cd /tmp
    curl -sS https://getcomposer.org/installer | php
    sudo mv composer.phar /usr/local/bin/composer
    sudo chmod +x /usr/local/bin/composer
    
    echo "✅ Vérification des installations..."
    php -v
    composer --version
    
    echo "✅ Dépendances installées avec succès!"
ENDSSH

echo ""
echo "✅ Installation terminée!"

