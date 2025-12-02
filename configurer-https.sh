#!/bin/bash

# Configuration HTTPS pour le serveur
SERVER_IP="13.50.248.190"
PEM_KEY="/Users/omar/Documents/perso/gestion-dossier-notaire.pem"
SERVER_USER="ubuntu"
DOMAIN=""  # Remplacez par votre domaine si vous en avez un

echo "🔒 Configuration HTTPS pour le serveur"
echo ""

if [ -z "$DOMAIN" ]; then
    echo "⚠️  Aucun domaine configuré."
    echo ""
    echo "Options:"
    echo "1. Utiliser un certificat auto-signé (pour les tests)"
    echo "2. Utiliser un service comme Cloudflare (recommandé pour production)"
    echo "3. Configurer un nom de domaine et utiliser Let's Encrypt"
    echo ""
    read -p "Voulez-vous créer un certificat auto-signé pour les tests? (o/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Oo]$ ]]; then
        ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << 'ENDSSH'
            # Créer un certificat auto-signé
            sudo mkdir -p /etc/nginx/ssl
            sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
                -keyout /etc/nginx/ssl/nginx-selfsigned.key \
                -out /etc/nginx/ssl/nginx-selfsigned.crt \
                -subj "/C=CA/ST=QC/L=Montreal/O=Obat Services/CN=13.50.248.190"
            
            echo "✅ Certificat auto-signé créé"
ENDSSH
    fi
else
    echo "📝 Configuration SSL avec Let's Encrypt pour $DOMAIN"
    ssh -i "$PEM_KEY" $SERVER_USER@$SERVER_IP << ENDSSH
        sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
ENDSSH
fi

