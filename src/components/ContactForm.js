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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous contacterons sous peu.');
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

              <button type="submit" className="btn-submit">
                <span>Envoyer ma demande</span>
                <span>→</span>
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

