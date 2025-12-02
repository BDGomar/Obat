// Route API Vercel pour proxy vers le serveur Laravel
// Ce fichier doit être dans le dossier /api à la racine du projet

export default async function handler(req, res) {
  // Vérifier que c'est une requête POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Faire un proxy vers le serveur Laravel
    const response = await fetch('http://13.50.248.190/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    
    // Retourner la réponse avec le même statut
    return res.status(response.status).json(data);
  } catch (error) {
    console.error('Erreur proxy API:', error);
    return res.status(500).json({
      success: false,
      message: 'Erreur lors de la connexion au serveur'
    });
  }
}

