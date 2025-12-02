import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    need: '',
    challenge: '',
    budget: '',
    source: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Réinitialiser le statut lors de la modification
    if (submitStatus.type) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Utiliser l'API de production via Nginx reverse proxy
      // Utiliser HTTPS si la page est en HTTPS, sinon HTTP
      const isHTTPS = window.location.protocol === 'https:';
      const API_BASE = process.env.REACT_APP_API_URL || 
        (isHTTPS ? 'https://13.50.248.190' : 'http://13.50.248.190');
      const API_URL = `${API_BASE}/api/contact`;
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // Timeout de 15 secondes
      
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      // Vérifier si la réponse est OK avant de parser JSON
      if (!response.ok) {
        // Si la réponse n'est pas OK, essayer de parser le JSON d'erreur
        let errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        try {
          const errorData = await response.json();
          errorMessage = errorData.message || errorMessage;
        } catch (e) {
          // Si ce n'est pas du JSON, utiliser le statut HTTP
          if (response.status === 404) {
            errorMessage = 'Route API introuvable. Veuillez vérifier que le serveur est correctement configuré.';
          } else if (response.status === 500) {
            errorMessage = 'Erreur serveur. Veuillez réessayer plus tard ou contactez-nous directement à info@obatservices.com';
          } else {
            errorMessage = `Erreur HTTP ${response.status}. Veuillez réessayer.`;
          }
        }
        setSubmitStatus({ 
          type: 'error', 
          message: errorMessage
        });
        setIsSubmitting(false);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: data.message || 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt !' 
        });
        // Réinitialiser le formulaire
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          need: '',
          challenge: '',
          budget: '',
          source: ''
        });
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: data.message || 'Une erreur est survenue. Veuillez réessayer.' 
        });
      }
    } catch (error) {
      console.error('Erreur:', error);
      let errorMessage = 'Impossible de se connecter au serveur. ';
      
      if (error.name === 'AbortError') {
        errorMessage = 'La requête a pris trop de temps. Veuillez vérifier votre connexion internet et réessayer.';
      } else if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError') || error.message.includes('ERR_CONNECTION_TIMED_OUT')) {
        errorMessage = 'Impossible de se connecter au serveur. Veuillez vérifier votre connexion internet ou contactez-nous directement à info@obatservices.com';
      } else {
        errorMessage += error.message || 'Veuillez réessayer ou contactez-nous directement à info@obatservices.com';
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-form-section" id="contact">
      <div className="container">
        <div className="section-center">
          <span className="line-decoration-static"></span>
          <h2 className="section-title">Parlons de Votre Projet</h2>
          <p className="section-desc">
            Une question ? Un projet en tête ? Prenez contact avec nous. 
            Première consultation gratuite et sans engagement.
          </p>
        </div>

        <div className="contact-form-grid">
          <div className="contact-form-wrapper animate-on-scroll">
            <h3 className="form-title">Formulaire de contact</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email professionnel *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Entreprise</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="role">Votre rôle</label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Ex: Directeur, Propriétaire, etc."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="need">Type de besoin *</label>
                  <select
                    id="need"
                    name="need"
                    required
                    value={formData.need}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="bi">Business Intelligence & Analytics</option>
                    <option value="loi25">Conformité Loi 25</option>
                    <option value="dev">Développement d'application</option>
                    <option value="ia">IA & Automatisation</option>
                    <option value="formation">Formation</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="challenge">Décrivez votre besoin ou défi principal *</label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows="4"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="Parlez-nous de votre situation actuelle et de vos objectifs..."
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="budget">Budget approximatif (optionnel)</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">À déterminer</option>
                    <option value="<10k">Moins de 10 000 $</option>
                    <option value="10-25k">10 000 $ - 25 000 $</option>
                    <option value="25-50k">25 000 $ - 50 000 $</option>
                    <option value="50-100k">50 000 $ - 100 000 $</option>
                    <option value=">100k">Plus de 100 000 $</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="source">Comment nous avez-vous connu ?</label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="google">Recherche Google</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="recommandation">Recommandation</option>
                    <option value="reseaux">Réseaux sociaux</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              {submitStatus.message && (
                <div className={`form-message ${submitStatus.type === 'success' ? 'form-message-success' : 'form-message-error'}`}>
                  {submitStatus.message}
                </div>
              )}

              <button 
                type="submit" 
                className="btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Envoi en cours...</span>
                    <span className="spinner">⏳</span>
                  </>
                ) : (
                  <>
                    <span>Envoyer ma demande</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="contact-info-wrapper">
            <div className="contact-info-card animate-on-scroll">
              <h3 className="info-title">Informations directes</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <div className="info-label">Adresse</div>
                    <div className="info-value">101-7650 13e avenue<br />Montréal, Québec H2A 2X7</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <div className="info-label">Téléphone</div>
                    <div className="info-value">+1 438-886-9239</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">info@obatservices.com</div>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">💼</span>
                  <div>
                    <div className="info-label">LinkedIn</div>
                    <div className="info-value">
                      <a href="https://linkedin.com/company/obat-services" target="_blank" rel="noopener noreferrer">
                        Profil entreprise
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="calendly-note">
                <p><strong>Ou réservez directement un appel</strong></p>
                <p className="calendly-text">
                  Choisissez un créneau pour une consultation gratuite de 30 minutes
                </p>
                <a href="mailto:info@obatservices.com?subject=Consultation gratuite" className="btn-calendly">
                  Réserver ma consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

