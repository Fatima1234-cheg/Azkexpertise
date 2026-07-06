



<template>
  <div class="contact-page">
    <!-- ===================== HEADER (réutilisé) ===================== -->
    <header class="header">
      <div class="container header-inner">
        <div class="logo">
          <div class="logo-main">
            <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Logo" class="logo-img" />
            <div class="logo-texts">
              <h1>A<span>zkexpertise</span></h1>
              <p class="logo-soustitre">Cabinet d'Expertise Technique,Etude,...</p>
            </div>
          </div>
        </div>
        <nav class="nav">
          <router-link to="/">Accueil</router-link>
          <router-link to="/qui-sommes-nous">À propos</router-link>
          
          <!-- Menu déroulant Services -->
          <div class="dropdown">
            <a href="#" class="nav-link dropdown-toggle">Services </a>
            <ul class="dropdown-menu">
              <li><router-link to="/expertise-judiciaire">Expertise Judiciaire</router-link></li>
              <li><router-link to="/audit-assistance-technique">Audit &amp; Assistance Technique</router-link></li>
              <li><router-link to="/recherche-developpement">Recherche &amp; Développement</router-link></li>
              <li><router-link to="/partenariats-conventions">Partenariats &amp; Conventions</router-link></li>
            </ul>
          </div>

          <router-link to="/contact">Contact</router-link>
        </nav>
      <!-- Langues + Connexion -->
<div class="header-actions">
  <!-- Liste déroulante pour les langues -->
  <select class="langue-select" @change="changeLocale($event.target.value)">
    <option value="fr" :selected="locale === 'fr'">FR</option>
    <option value="ar" :selected="locale === 'ar'">AR</option>
    <option value="en" :selected="locale === 'en'">EN</option>
  </select>

  <!-- Bouton Connexion (style uniquement, pas de lien) -->
  <button class="btn-connexion" @click="openLoginModal">
    {{ $t('header.nav.login') }}
  </button>
</div>
      </div>
    </header>

    <!-- ===================== CONTACT ===================== -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-header">
          <span class="contact-badge">CONTACT</span>
          <h4>Remplissez le formulaire ou contactez-nous directement — nous répondons sous 24h</h4>
        </div>

        <div class="contact-wrapper">
          <!-- FORMULAIRE (gauche) -->
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <!-- Ligne 1 : Email + Nom -->
              <div class="form-row">
                <div class="form-group">
                  <label>Nom <span class="required">*</span></label>
                  <input type="text" v-model="form.nom" placeholder="Votre nom" required />
                </div>
                <div class="form-group">
                  <label>Email <span class="required">*</span></label>
                  <input type="email" v-model="form.email" placeholder="vous@exemple.com" required />
                </div>
                
              </div>

              <!-- Ligne 2 : Téléphone -->
              <div class="form-row">
                <div class="form-group">
                  <label>Téléphone <span class="required">*</span></label>
                  <input type="tel" v-model="form.telephone" placeholder="+212 6 12 34 56 78" required />
                </div>
                <div class="form-group">
                 <div class="form-group">
                <label>Objet <span class="required">*</span></label>
                <select v-model="form.objet" required>
                  <option value="">Sélectionnez un objet</option>
                  <option value="demande-expertise">Demande d'expertise</option>
                  <option value="evaluation-vehicule">Évaluation véhicule</option>
                  <option value="assistance-technique">Assistance technique</option>
                  <option value="demande-devis">Demande de Devis d'expertise</option>
                  <option value="pv-de-decoupage">PV de découpage N° chassi</option>
                  <option value="pv-expertise-technique">PV d'expertise technique / économique</option>
                  <option value="pv-retrait-carte-grise">PV d'expertise pour retrait définitif de la carte grise</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
                </div>
              </div>

              <!-- Ligne 3 : Objet (select) -->
             

              <!-- Champ conditionnel pour "Autre" -->
              <div class="form-group" v-if="form.objet === 'autre'">
                <label>Précisez votre objet <span class="required">*</span></label>
                <input type="text" v-model="form.objetAutre" placeholder="Décrivez votre objet..." required />
              </div>

              <!-- Ligne 4 : Informations utiles (pleine largeur) -->
              <div class="form-group full-width">
                <label>Informations utiles</label>
                <textarea v-model="form.informations" rows="4" placeholder="Décrivez brièvement votre besoin..."></textarea>
              </div>

              <button type="submit" class="btn-submit" :disabled="loading">
                {{ loading ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
              <div v-if="errorMessage" class="alert alert-error">{{ errorMessage }}</div>
            </form>
          </div>

          <!-- PARTIE DROITE : infos, carte, horaires, réseaux -->
          <div class="contact-right">
            <!-- Carte -->
            <div class="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.182547019695!2d-6.908147484782224!3d33.92922608064114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU1JzQ1LjIiTiA2wrA1NCcyMC42Ilc!5e0!3m2!1sfr!2sma!4v1644830000000!5m2!1sfr!2sma"
                width="100%"
                height="200"
                style="border:0; border-radius: 12px;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Localisation AZK Expertise"
              ></iframe>
              <p class="map-credit">
                <font-awesome-icon icon="map-marker-alt" /> Lot 116, Annasr, Res: Dar Dmana, Temara
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== FOOTER ===================== -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-col">
            <div class="footer-logo">
              <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Expertise" class="footer-logo-img" />
              <h2>A<span>zkexpertise</span></h2>
            </div>
            <p class="footer-description">
              Cabinet d'expertise judiciaire, automobile et industrielle. Rigueur, indépendance, précision.
            </p>
          </div>
         <div class="footer-col">
        <h3>{{ $t('footer.sections.cabinet') }}</h3>
        <ul class="footer-links">
          <li><a href="/qui-sommes-nous">{{ $t('footer.links.about') }}</a></li>
<li><a href="/#services">{{ $t('footer.links.services') }}</a></li>
          <li><a href="#">{{ $t('footer.links.contact') }}</a></li>
        </ul>
      </div>
          <div class="footer-col">
            <h3>CONTACT</h3>
            <ul class="footer-contact">
              <li>
                <font-awesome-icon icon="phone" />
                <a href="tel:+212538776996">+212 538 776 996</a>
              </li>
              <li>
                <font-awesome-icon icon="envelope" />
                <a href="mailto:azkexpertise@gmail.com">azkexpertise@gmail.com</a>
              </li>
              <li>
                <font-awesome-icon icon="map-marker-alt" />
                <span>Lot 116, Annasr, Res:Dar Dmana,Temara</span>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>SUIVEZ-NOUS</h3>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Facebook"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
              <a href="#" class="social-link" aria-label="LinkedIn"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
              <a href="#" class="social-link" aria-label="Instagram"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
             <a href="https://wa.me/212707795145?text=Bonjour%20AZK%20Expertise%2C%20j%27aimerais%20vous%20contacter" class="social-link" aria-label="WhatsApp" target="_blank">
    <font-awesome-icon :icon="['fab', 'whatsapp']" />
  </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 AZK Expertise. Tous droits réservés.</p>
          <div class="footer-legal">
            <a href="#">Mentions légales</a>
            <span>|</span>
            <a href="#">Politique de confidentialité</a>
            <span>|</span>
            <a href="#">CGU</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

// État du formulaire
const form = reactive({
  email: '',
  nom: '',
  societe: '',
  telephone: '',
  objet: '',
  objetAutre: '',
  informations: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

// Soumission
const submitForm = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await axios.post('/api/contact', form)
    successMessage.value = 'Votre message a été envoyé avec succès !'
    // Réinitialiser
    Object.assign(form, {
      email: '',
      nom: '',
      societe: '',
      telephone: '',
      objet: '',
      objetAutre: '',
      informations: ''
    })
  } catch (error) {
    errorMessage.value = 'Erreur lors de l\'envoi. Veuillez réessayer.'
    console.error(error)
  } finally {
    loading.value = false
  }
}
const openLoginModal = () => {
  // Tu peux ouvrir une modale, rediriger, ou juste afficher un message
  alert('Page de connexion (à implémenter)')
  // Ou router.push('/connexion') si tu veux garder la redirection
}
</script>

<style scoped>
/* ============ RESET & BASE ============ */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Roboto, sans-serif;
}

.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
}

/* ============ HEADER ============ */
.header {
  background: #0a2a4a;
  color: white;
  padding: 14px 0;
  border-bottom: 3px solid #C6A15B;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-main {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-img {
  height: 2.5rem;
  width: auto;
}

.logo-texts {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-texts h1 {
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

.logo-texts h1 span {
  color: #C6A15B;
  font-weight: 400;
}

.logo-soustitre {
  font-size: 0.65rem;
  opacity: 0.8;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

/* ============ DROPDOWN ============ */
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  position: relative;
}

.nav a,
.nav .router-link-active {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.nav a:hover,
.nav .router-link-active {
  color: #C6A15B;
  border-bottom-color: #C6A15B;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #0A2540;
  border: 1px solid rgba(198, 161, 91, 0.3);
  border-radius: 8px;
  padding: 8px 0;
  min-width: 250px;
  list-style: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(8px);
  transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

.dropdown:hover .dropdown-menu,
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li {
  margin: 0;
}

.dropdown-menu a {
  display: block;
  padding: 10px 20px;
  color: #FFFFFF;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.dropdown-menu a:last-child {
  border-bottom: none;
}

.dropdown-menu a:hover,
.dropdown-menu a.router-link-active {
  background: rgba(198, 161, 91, 0.15);
  color: #C6A15B;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.langues {
  display: flex;
  gap: 8px;
  font-size: 0.85rem;
  font-weight: 600;
}

.langues span {
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s;
}

.langues span.active {
  opacity: 1;
  color: #C6A15B;
}

.langues span:hover {
  opacity: 1;
}

.btn-connexion {
  background: transparent;
  border: 1.5px solid #C6A15B;
  color: #C6A15B;
  padding: 6px 18px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-connexion:hover {
  background: #c3b005;
  color: #0a2a4a;
}

/* ============ SECTION CONTACT ============ */
.contact-section {
  padding: 30px 0 80px;
  background: #f8faff;
}

.contact-header {
  text-align: center;
  margin-bottom: 50px;
}

.contact-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #C6A15B;
  background: rgba(245, 166, 35, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.contact-header h4 {
  font-size: 1rem;
  font-weight: 400;
  color: #3d4f5e;
}

/* --- FORMULAIRE --- */
.contact-form {
  background: white;
  padding: 40px 35px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin-bottom: 6px;
}

.required {
  color: #e74c3c;
}

/* ===== STYLE UNIFORME pour input, select, textarea ===== */
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
  transition: border-color 0.3s;
  background: #fafcff;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #f1ba05;
  box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
}

/* Personnalisation du select */
.form-group select {
  appearance: auto;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%230a2a4a'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  padding-right: 40px;
}

/* Pour Firefox */
.form-group select {
  -moz-appearance: none;
}
/* Pour IE */
.form-group select::-ms-expand {
  display: none;
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
}

/* --- Grille 2 colonnes --- */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.full-width {
  grid-column: 1 / -1;
}

.form-row .form-group {
  margin-bottom: 0;
}

.btn-submit {
  display: inline-block;
  background: #0a2a4a;
  color: white;
  padding: 14px 40px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  width: 100%;
}

.btn-submit:hover {
  background: #1a3a5a;
  transform: translateY(-2px);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Alertes */
.alert {
  margin-top: 15px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
}

.alert-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* ============ PARTIE DROITE ============ */
.contact-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-map iframe {
  width: 100%;
  height: 350px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
}

.map-credit {
  font-size: 0.8rem;
  color: #5B7B9A;
  margin-top: 8px;
  text-align: right;
}

.map-credit svg {
  color: #C6A15B;
  margin-right: 6px;
}

.contact-info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: white;
  padding: 16px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.info-item:hover {
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.3rem;
  color: #C6A15B;
  min-width: 24px;
  margin-top: 2px;
}

.info-item h4 {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin: 0 0 2px 0;
}

.info-item p,
.info-item a {
  font-size: 0.9rem;
  color: #3d4f5e;
  line-height: 1.5;
  margin: 0;
  text-decoration: none;
}

.info-item a:hover {
  color: #C6A15B;
}

.info-social {
  background: white;
  padding: 18px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.info-social h4 {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin: 0 0 12px 0;
}

.social-icons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #f0f4fa;
  border-radius: 50%;
  color: #0a2a4a;
  font-size: 1rem;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, color 0.3s;
}

.social-link:hover {
  background: #C6A15B;
  color: white;
  transform: translateY(-3px);
}

/* ============ FOOTER ============ */
.footer {
  background: #0a2a4a;
  color: white;
  padding: 60px 0 30px;
}

.footer-content {
  display: grid;
  grid-template-columns: 2.5fr 1fr 2fr 2fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.footer-logo-img {
  height: 2.5rem;
  width: auto;
}

.footer-logo h2 {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin: 0;
}

.footer-logo h2 span {
  color: #C6A15B;
  font-weight: 400;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.8;
  opacity: 0.8;
  max-width: 300px;
}

.footer-col h3 {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #C6A15B;
  margin-bottom: 18px;
  font-family: Georgia, serif;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: opacity 0.3s, color 0.3s;
}

.footer-links a:hover {
  opacity: 1;
  color: #C6A15B;
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
}

.footer-contact li svg {
  color: #C6A15B;
  font-size: 1rem;
  margin-top: 3px;
  min-width: 20px;
}

.footer-contact li a,
.footer-contact li span {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contact li a:hover {
  color: #C6A15B;
}

.footer-social {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.footer-social .social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 50%;
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.3s, transform 0.3s, color 0.3s;
}

.footer-social .social-link:hover {
  background: #C6A15B;
  color: #0a2a4a;
  transform: translateY(-4px);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding-top: 25px;
  font-size: 0.8rem;
  opacity: 0.7;
}

.footer-bottom p {
  margin: 0;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-legal a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-legal a:hover {
  color: #C6A15B;
}

.footer-legal span {
  opacity: 0.5;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 992px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .contact-info-grid {
    grid-template-columns: 1fr 1fr;
  }
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  .header-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .nav {
    justify-content: center;
  }
  .header-actions {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 40px 0 60px;
  }
  .contact-header h2 {
    font-size: 1.8rem;
  }
  .contact-form {
    padding: 25px 20px;
  }
  .contact-info-grid {
    grid-template-columns: 1fr;
  }
  .form-row {
    grid-template-columns: 1fr;
  }
  .form-row .form-group {
    margin-bottom: 20px;
  }
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-description {
    max-width: 100%;
  }
  .footer-logo {
    justify-content: center;
  }
  .footer-contact li {
    justify-content: center;
  }
  .footer-social {
    justify-content: center;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  .footer-legal {
    justify-content: center;
    flex-wrap: wrap;
  }
  .logo-main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .logo-texts h1 {
    font-size: 1.4rem;
  }
  .nav {
    gap: 15px;
  }
  .nav a {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .contact-form {
    padding: 20px 16px;
  }
  .contact-header h2 {
    font-size: 1.5rem;
  }
  .contact-map iframe {
    height: 180px;
  }
  .btn-submit {
    font-size: 0.85rem;
    padding: 12px 20px;
  }
  .langues {
    font-size: 0.7rem;
  }
  .btn-connexion {
    font-size: 0.7rem;
    padding: 4px 14px;
  }
  .footer-social .social-link {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }
}
/* ============ LANGUE SELECT ============ */
.langue-select {
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 6px;
  padding: 6px 30px 6px 14px;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='white' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  transition: border-color 0.3s;
}

.langue-select:hover {
  border-color: #C6A15B;
}

.langue-select:focus {
  outline: none;
  border-color: #C6A15B;
  box-shadow: 0 0 0 2px rgba(198, 161, 91, 0.3);
}

.langue-select option {
  background: #0A2540;
  color: white;
}
</style>