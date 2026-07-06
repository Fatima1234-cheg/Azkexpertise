
<template>
  <div class="home" :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <!-- ===================== HEADER ===================== -->
    <header class="header">
      <div class="container header-inner">
        <!-- Logo + sous-titre -->
        <div class="logo">
          <div class="logo-main">
            <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Logo" class="logo-img" />
            <div class="logo-texts">
              <h1>A<span>zkexpertise</span></h1>
              <p class="logo-soustitre">Cabinet d'Expertise Technique,Etude,...</p>
            </div>
          </div>
        </div>

        <!-- Navigation -->
       <nav class="nav">
  <router-link to="/">{{ $t('header.nav.home') }}</router-link>
  <router-link to="/qui-sommes-nous">{{ $t('header.nav.about') }}</router-link>
  
  <!-- Menu déroulant Services -->
  <div class="dropdown">
    <a href="#" class="nav-link dropdown-toggle">{{ $t('header.nav.services') }} </a>
    <ul class="dropdown-menu">
      <li><router-link to="/expertise-judiciaire">Expertise Judiciaire</router-link></li>
      <li><router-link to="/audit-assistance-technique">Audit &amp; Assistance Technique</router-link></li>
      <li><router-link to="/recherche-developpement">Recherche &amp; Développement</router-link></li>
      <li><router-link to="/partenariats-conventions">Partenariats &amp; Conventions</router-link></li>
    </ul>
  </div>

  <router-link to="/contact">{{ $t('header.nav.contact') }}</router-link>
</nav>

        <!-- Langues + Connexion -->
       <!-- Langues + Connexion -->
<div class="header-actions">
  <!-- Liste déroulante pour les langues -->
  <select class="langue-select" @change="changeLocale($event.target.value)">
    <option value="fr" :selected="locale === 'fr'">FR</option>
    <option value="ar" :selected="locale === 'ar'">AR</option>
    <option value="en" :selected="locale === 'en'">EN</option>
  </select>

  <!-- Bouton Connexion (style uniquement, pas de lien) -->
  <button class="btn-connexion" @click="openLogin">
    {{ $t('header.nav.login') }}
  </button>
</div>
      </div>
    </header>

    <!-- ===================== HERO ===================== -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-badge">{{ $t('hero.badge') }}</div>
        <h2>{{ $t('hero.title') }}  <br /><strong>{{ $t('hero.titleStrong') }}</strong></h2>
        <p>
         {{ $t('hero.description') }}
        </p>
        <div class="hero-buttons">
          <a href="#services" class="btn-primary">{{ $t('hero.buttons.services') }}</a>
          <a href="#contact" class="btn-secondary">{{ $t('hero.buttons.contact') }}</a>
        </div>
      </div>
    </section>
    <!-- ===================== QUI SOMMES-NOUS ===================== -->
<section id="about" class="about">
  <div class="container about-inner">
    <!-- Colonne image -->
    <div class="about-image">
      <img src="/images/auto2.jpg" alt="Cabinet d'expertise" />
    </div>

    <!-- Colonne texte -->
    <div class="about-text">
      <span class="about-badge">{{ $t('about.badge') }}</span>
      <h2>{{ $t('about.title') }}</h2>
      <p class="about-description">
        {{ $t('about.description') }}
      </p>

      <div class="about-mission">
        <h3>{{ $t('about.mission.title') }}</h3>
        <p>
          {{ $t('about.mission.text1') }}
        </p>
        <p>
          {{ $t('about.mission.text2') }}
        </p>
      </div>

    </div>
  </div>
</section>
<!-- ===================== SERVICES ===================== -->
<section id="services" class="services">
  <div class="container">
    <!-- En-tête -->
    <div class="services-header">
      <span class="services-badge">{{ $t('services.badge') }}</span>
      <h2>{{ $t('services.title') }}</h2>
    </div>

    <!-- Grille des services -->
    <div class="services-grid">
     
      <div class="service-card">
        <div class="service-image">
          <img src="/images/Expertise-judiciaire-les-nouveaux-criteres-deligibilite.webp" alt="Expertise judiciaire et technique" />
          <div class="service-overlay">
          
          </div>
        </div>
        <div class="service-content">
          <h3>{{ $t('services.items.0.title') }}</h3>
          <p>{{ $t('services.items.0.description') }}</p>
          <a href="/expertise-judiciaire" class="service-link">{{ $t('services.items.0.link') }}</a>
        </div>
      </div>

      <!-- Carte 2 : Etude, Formation, Audit   assistance  technique et réglementaire  -->
      <div class="service-card">
        <div class="service-image">
          <img src="/images/AUDIT.jpg" alt="Etude, Formation, Audit   assistance  technique et réglementaire " />
          <div class="service-overlay">
          
          </div>
        </div>
        <div class="service-content">
          <h3>{{ $t('services.items.1.title') }}</h3>
          <p>{{ $t('services.items.1.description') }}</p>
          <a href="/audit-assistance-technique" class="service-link">{{ $t('services.items.1.link') }}</a>
        </div>
      </div>
       <!-- Carte 3 : Recherche et Développement -->
      <div class="service-card">
        <div class="service-image">
          <img src="/images/R&D.jpg" alt="Recherche et Développement" />
          <div class="service-overlay">
          
          </div>
        </div>
        <div class="service-content">
          <h3>{{ $t('services.items.2.title') }}</h3>
          <p>{{ $t('services.items.2.description') }}</p>
          <a href="/recherche-developpement" class="service-link">{{ $t('services.items.2.link') }}</a>
        </div>
      </div>

      <!-- Carte 4 :Partenariats Et Conventions  -->
      <div class="service-card">
        <div class="service-image">
          <img src="/images/Partenaire.jpg" alt="Partenariats Et Conventions" />
          <div class="service-overlay">
          
          </div>
        </div>
        <div class="service-content">
          <h3>{{ $t('services.items.3.title') }}</h3>
          <p>{{ $t('services.items.3.description') }}</p>
          <a href="/partenariats-conventions" class="service-link">{{ $t('services.items.3.link') }}</a>
        </div>
      </div>
    </div>
  </div>
</section>
    <!-- ===================== CONTACT ===================== -->
<!-- ===================== CONTACT ===================== -->
<section id="contact" class="contact">
  <div class="container">
    <!-- En-tête -->
    <div class="contact-header">
      <span class="contact-badge">{{ $t('contact.badge') }}</span>
      <h2>{{ $t('contact.title') }}</h2>
        <span>{{ $t('contact.subtitle') }}</span>

    </div>

    <!-- Ligne : FORMULAIRE (gauche) + CARTE + INFOS (droite) -->
    <div class="contact-top">
      <!-- Colonne gauche : FORMULAIRE -->
      <div class="contact-form">
       <form @submit.prevent="submitForm">
  <div class="form-group">
    <label>{{ $t('contact.form.name') }} <span class="required">*</span></label>
    <input type="text" v-model="form.nom" placeholder="Jean Dupont " required />
  </div>

  <div class="form-group">
    <label>{{ $t('contact.form.phone') }} <span class="required">*</span></label>
    <input type="tel" v-model="form.telephone" placeholder="+212 6 12 34 56 78" required />
  </div>

  <div class="form-group">
    <label>{{ $t('contact.form.email') }} <span class="required">*</span></label>
    <input type="email" v-model="form.email" placeholder="vous@gmail.com" required />
  </div>

  <div class="form-group">
    <label>{{ $t('contact.form.subject') }} <span class="required">*</span></label>
    <select v-model="form.objet" required>
      <option value="">{{ $t('contact.form.subjects.select') }}</option>
      <option value="demande-expertise">{{ $t('contact.form.subjects.expertise') }}</option>
      <option value="evaluation-vehicule">{{ $t('contact.form.subjects.vehicle') }}</option>
      <option value="assistance-technique">{{ $t('contact.form.subjects.assistance') }}</option>
      <option value="demande-devis">{{ $t('contact.form.subjects.quote') }}</option>
      <option value="pv-de-decoupage">{{ $t('contact.form.subjects.chassis') }}</option>
      <option value="pv-expertise-technique">{{ $t('contact.form.subjects.technical') }}</option>
      <option value="pv-retrait-carte-grise">{{ $t('contact.form.subjects.withdrawal') }}</option>
      <option value="autre">{{ $t('contact.form.subjects.other') }}</option>
    </select>
  </div>

  <!-- Champ conditionnel pour "Autre" -->
  <div class="form-group" v-if="form.objet === 'autre'">
    <label>{{ $t('contact.form.otherSubject') }} <span class="required">*</span></label>
    <input type="text" v-model="form.objetAutre" placeholder="Décrivez votre objet..." required />
  </div>

  <div class="form-group">
    <label>{{ $t('contact.form.message') }}</label>
    <textarea v-model="form.message" rows="4" placeholder="Décrivez brièvement votre besoin..."></textarea>
  </div>

  <button type="submit" class="btn-submit" :disabled="loading">
    {{ loading ? $t('contact.form.sending') : $t('contact.form.submit') }}
  </button>

  <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
  <div v-if="errorMessage" class="alert alert-error">{{ errorMessage }}</div>
</form>

<!-- Demandes sauvegardées -->
<div v-if="savedRequests.length > 0" class="saved-requests">
  <h4 style="margin-top: 30px; color: #0a2a4a; font-weight: 700;">Demandes Sauvegardées ({{ savedRequests.length }})</h4>
  <div class="requests-list">
    <div v-for="(request, index) in savedRequests" :key="index" class="request-item">
      <div class="request-info">
        <p><strong>{{ request.name }}</strong> - {{ request.email }}</p>
        <p style="font-size: 0.85rem; color: #666;">{{ request.date ? new Date(request.date).toLocaleDateString('fr-FR') : '' }}</p>
      </div>
      <button 
        @click="deleteRequest(index)"
        class="btn-delete"
        type="button"
      >
        Supprimer
      </button>
    </div>
  </div>
</div>
      </div>

      <!-- Colonne droite : CARTE + INFOS (en dessous) -->
      <div class="contact-right">
        <!-- Carte -->
       <div class="contact-map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.123456789012!2d-6.918123!3d33.888456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUzJzE4LjQiTiA2wrA1NScwNS4yIlc!5e0!3m2!1sfr!2sma!4v1234567890"
    width="100%"
    height="300"
    style="border:0; border-radius: 16px;"
    allowfullscreen=""
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
  <p class="map-credit">
    <a href="https://www.google.com/maps/place/Lot+116,+Annasr,+Temara,+Maroc" target="_blank">{{ $t('contact.map.credit') }}</a> | OpenStreetMap contributors
  </p>
</div>

        <!-- INFOS (juste en dessous de la carte) -->
        <div class="contact-bottom">
          <!-- Téléphone -->
          <div class="info-item">
            <span class="info-icon"><font-awesome-icon icon="phone" /></span>
            <div>
              <h4>{{ $t('contact.info.phone') }}</h4>
              <p>+212 666 698 155/ +212 538 776 996</p>
            </div>
          </div>

          <!-- Email -->
          <div class="info-item">
            <span class="info-icon"> <font-awesome-icon icon="envelope" /></span>
            <div>
              <h4>{{ $t('contact.info.email') }}</h4>
              <p>azkexpertise@gmail.com</p>
            </div>
          </div>

          <!-- Adresse -->
          <div class="info-item">
            <span class="info-icon"> <font-awesome-icon icon="map-marker-alt" /></span>
            <div>
              <h4>{{ $t('contact.info.address') }}</h4>
              <p>{{ $t('contact.info.addressText') }}</p>
            </div>
          </div>

          <!-- Horaires -->
          <div class="info-hours">
            <h4>{{ $t('contact.info.hours') }}</h4>
            <div class="hours-grid">
              <span>{{ $t('contact.info.schedule.0.day') }}</span>
              <span>{{ $t('contact.info.schedule.0.time') }}</span>
              <span>{{ $t('contact.info.schedule.1.day') }}</span>
              <span>{{ $t('contact.info.schedule.1.time') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ===================== PARTENAIRES ===================== -->
<section class="partenaires">
  <div class="container">
    <div class="partenaires-header">
      <span class="partenaires-badge">{{ $t('partners.badge') }}</span>
      <h2>{{ $t('partners.title') }}</h2>
    </div>
    <div class="partenaires-grid">
      <div class="partenaire-item">
        <img src="/images/image1.png" alt="Royaume du Maroc" />
      
      </div>
      <div class="partenaire-item">
        <img src="/images/image2.png" alt="MATU Assurance" />
      
      </div>
      <div class="partenaire-item">
        <img src="/images/image3.png" alt="TARGET INDUSTRY" />
      </div>
    </div>
  </div>
</section>



    
<!-- ===================== FOOTER ===================== -->
<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- Colonne 1 : Logo + Description -->
      <div class="footer-col">
        <div class="footer-logo">
          <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Expertise" class="footer-logo-img" />
          <h2>A<span>zkexpertise</span></h2>
        </div>
        <p class="footer-description">
          {{ $t('footer.description') }}
        </p>
      </div>

      <!-- Colonne 2 : Liens rapides -->
      <div class="footer-col">
        <h3>{{ $t('footer.sections.cabinet') }}</h3>
        <ul class="footer-links">
          <li><a href="/qui-sommes-nous">{{ $t('footer.links.about') }}</a></li>
       <li><a href="#services">{{ $t('footer.links.services') }}</a></li>
          <li><a href="/contact">{{ $t('footer.links.contact') }}</a></li>
        </ul>
      </div>

      <!-- Colonne 3 : Contact -->
      <div class="footer-col">
        <h3>{{ $t('footer.sections.contact') }}</h3>
        <ul class="footer-contact">
         <li>
  <font-awesome-icon icon="phone" />
  <a href="tel:+212522301600">+212 666 698 155/ +212 538 776 996</a>
</li>
<li>
  <font-awesome-icon icon="envelope" />
  <a href="mailto:azkexpertise@gmail.com">azkexpertise@gmail.com</a>
</li>
<li>
  <font-awesome-icon icon="map-marker-alt" />
  <span>Lot 116, Annasr, Res: Dar Dmana,Temara </span>
</li>
        </ul>
      </div>

      <!-- Colonne 4 : Réseaux sociaux -->
      <div class="footer-col">
        <h3>{{ $t('footer.sections.followUs') }}</h3>
        <div class="footer-social">
         <a href="#" class="social-link">
  <font-awesome-icon :icon="['fab', 'facebook-f']" />
</a>
<a href="#" class="social-link">
  <font-awesome-icon :icon="['fab', 'linkedin-in']" />
</a>
 <a href="#" class="social-link" aria-label="Instagram">
    <font-awesome-icon :icon="['fab', 'instagram']" />
  </a>
  <a href="https://wa.me/212707795145?text=Bonjour%20AZK%20Expertise%2C%20j%27aimerais%20vous%20contacter" class="social-link" aria-label="WhatsApp" target="_blank">
    <font-awesome-icon :icon="['fab', 'whatsapp']" />
  </a>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>{{ $t('footer.copyright') }}</p>
      
     <div class="footer-legal">
        <a href="#">Expertise Automobile</a>
        <span>|</span>
        <a href="#">Industrielle · Sinistre</a>
        <span>|</span>
        <a href="#">Maritime · Maroc</a>
      </div>
        </div>
  </div>
  
     
</footer>
  </div>
</template>

<script setup>

import { ref, reactive, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import axios from 'axios'

const { locale, t } = useI18n()
const router = useRouter()

const form = reactive({
  nom: '',
  telephone: '',
  email: '',
  objet: '',
    objetAutre: '',
  message: ''
})

const loading = ref(false)
const successMessage = ref('')
const errorMessage = ref('')
const savedRequests = ref([])

// Générer un nouvel ID de session (sessionStorage = réinitialisé à chaque fermeture d'onglet)
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('userSessionId')
  if (!sessionId) {
    sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    sessionStorage.setItem('userSessionId', sessionId)
  }
  return sessionId
}

// Obtenir la clé de stockage spécifique à cette session
const getStorageKey = () => {
  return 'contactRequests_' + getSessionId()
}

// Charger les demandes sauvegardées pour la session active
const loadSavedRequests = () => {
  const storageKey = getStorageKey()
  const requests = JSON.parse(sessionStorage.getItem(storageKey) || '[]')
  savedRequests.value = requests
}

// Supprimer une demande de la session
const deleteRequest = (index) => {
  if (confirm('Êtes-vous sûr de vouloir supprimer cette demande définitivement ?')) {
    const storageKey = getStorageKey()
    const existingRequests = JSON.parse(sessionStorage.getItem(storageKey) || '[]')
    existingRequests.splice(index, 1)
    sessionStorage.setItem(storageKey, JSON.stringify(existingRequests))
    loadSavedRequests()
  }
}

// Charger les demandes au montage du composant
onMounted(() => {
  loadSavedRequests()
})

const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = newLocale
}

const openLogin = () => {
  router.push('/connexion')
}


const submitForm = async () => {
  loading.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const formData = {
      name: form.nom,
      phone: form.telephone,
      email: form.email,
      subject: form.objet,
      message: form.message,
      otherSubject: form.objetAutre,
      date: new Date().toISOString()
    }

    const response = await axios.post('/api/contact', formData)

    // Sauvegarder dans la session actuelle (disparu à la fermeture de l'onglet)
    const storageKey = getStorageKey()
    const existingRequests = JSON.parse(sessionStorage.getItem(storageKey) || '[]')
    existingRequests.unshift(formData)
    sessionStorage.setItem(storageKey, JSON.stringify(existingRequests))

    successMessage.value = t('contact.form.success')
    // Réinitialiser
    Object.assign(form, {
      nom: '',
      telephone: '',
      email: '',
      objet: '',
      message: ''
    })
    // Recharger les demandes sauvegardées
    loadSavedRequests()
  } catch (error) {
    errorMessage.value = t('contact.form.error')
    console.error(error)
  } finally {
    loading.value = false
  }
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
  background: #0A2540;
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

/* --- Logo --- */
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
  border-radius: 8px;
  background-color: transparent;
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

/* --- Navigation --- */
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.2s, color 0.2s;
  border-bottom: none;
}

.dropdown-menu a:hover,
.dropdown-menu a.router-link-active {
  background: rgba(198, 161, 91, 0.15);
  color: #C6A15B;
}

/* --- Langues & Connexion --- */
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
  background: #f1ba05;
  color: #0A2540;
}

/* ============ HERO ============ */
/* ---------- HERO ---------- */
.hero {
  position: relative;
  background: url('/images/salu.jpg') center center / cover no-repeat;
  min-height: 92vh;
  display: flex;
  align-items: center;          /* centrage vertical */
  justify-content: flex-start;  /* 🔥 aligne le contenu à gauche */
  color: white;
  padding: 45px 0;
}

/* Overlay (pas de changement) */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 42, 74, 0.75);
  z-index: 1;
}

/* Contenu : on le colle à gauche */
.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  text-align: left;           /* 🔥 texte aligné à gauche */
  padding-left: 40px;         /* 🔥 espacement optionnel pour respirer un peu */
  margin: 0;  
                /* on retire toute marge automatique */
}

.hero-badge {
  display: inline-block;
  background: rgba(245, 166, 35, 0.15);
  border: 1px solid #C6A15B;
  color: #C6A15B;
  padding: 6px 22px;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
   font-family: Georgia, 'Times New Roman', Times, serif; 
  
}

.hero h2 {
  font-size: 3.4rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 18px;
  color: white;
   font-family: Georgia, 'Times New Roman', Times, serif; 
}

.hero h2 strong {
  font-weight: 700;
  color: #C6A15B;
   font-family: Georgia, 'Times New Roman', Times, serif; 
}

.hero p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  margin-bottom: 35px;
  max-width: 600px;
   font-family: Georgia, 'Times New Roman', Times, serif; 
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 14px 40px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s;
}

.btn-primary {
  background: #C6A15B;
  color: #0a2a4a;
}

.btn-primary:hover {
  background: #D4AF37;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 166, 35, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #0a2a4a;
  transform: translateY(-2px);
}
/* ============ ABOUT (QUI SOMMES-NOUS) ============ */
.about {
  padding: 80px 0;
  background: #f8faff;
}

.about-inner {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

.about-image {
  flex: 1 1 45%;
  min-width: 300px;
}

.about-image img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}

.about-text {
  flex: 1 1 50%;
  min-width: 300px;
}

.about-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f1ba05;
  background: rgba(198, 161, 91, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.about-text h2 {
  font-size: 2.6rem;
  font-weight: 700;
  color: #f1ba05;
  margin-bottom: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.about-description {
  font-size: 1.1rem;
  color: #3d4f5e;
  font-style: italic;
  margin-bottom: 25px;
  border-left: 4px solid #f1ba05;
  padding-left: 20px;
}

.about-mission h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a2a4a;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-mission p {
  font-size: 1rem;
  line-height: 1.8;
  color: #3d4f5e;
  margin-bottom: 15px;
  text-align: justify;
}

.about-mission .highlight {
  color: #f1ba05;
  font-weight: 700;
}

/* --- Statistiques --- */
.about-stats {
  display: flex;
  gap: 40px;
  margin-top: 30px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 2rem;
  font-weight: 800;
  color: #0a2a4a;
  font-family: Georgia, serif;
}

.stat-label {
  font-size: 0.8rem;
  color: #6b7a8a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 992px) {
  .about-inner {
    flex-direction: column;
    gap: 30px;
  }

  .about-image img {
    height: 300px;
  }

  .about-text h2 {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .about {
    padding: 40px 0;
  }

  .about-image img {
    height: 220px;
  }

  .about-text h2 {
    font-size: 1.6rem;
  }

  .about-stats {
    gap: 20px;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
/* ============ SERVICES ============ */
.services {
  padding: 20px 0;
  background: white;
}

.services-header {
  text-align: center;
  margin-bottom: 50px;
}

.services-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f1ba05;
  background: rgba(245, 166, 35, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.services-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0a2a4a;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Grille */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 2fr));
 
  gap: 50px;
}

/* Carte */
.service-card {
  background: #f8faff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.service-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.service-card:hover .service-image img {
  transform: scale(1.05);
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 42, 74, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}


.service-content {
  padding: 24px 20px 28px;
}

.service-content h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0a2a4a;
  margin-bottom: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.service-content p {
  font-size: 0.95rem;
  color: #3d4f5e;
  line-height: 1.6;
  margin-bottom: 18px;
  text-align: justify;
}

.service-link {
  display: inline-block;
  font-weight: 600;
  font-size: 0.9rem;
  color: #f1ba05;
  text-decoration: none;
  transition: color 0.3s;
}

.service-link:hover {
  color: #D4AF37;
}

/* ============ RESPONSIVE SERVICES ============ */
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .services-grid {
    grid-template-columns: 1fr;
  }

  .services-header h2 {
    font-size: 1.6rem;
  }

  .service-image {
    height: 180px;
  }
}
/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
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
  .hero h2 {
    font-size: 2.2rem;
  }

  .hero p {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
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
    flex-wrap: wrap;
  }

  .nav a {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .hero {
    min-height: 70vh;
    padding: 40px 0;
  }

  .hero h2 {
    font-size: 1.8rem;
  }

  .langues {
    font-size: 0.7rem;
  }

  .btn-connexion {
    font-size: 0.7rem;
    padding: 4px 14px;
  }
}
/* ============ CONTACT ============ *//* ============ CONTACT ============ */

.contact {
  padding: 30px 0;
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
  color: rgb(252, 174, 49);
  background: rgba(245, 166, 35, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.contact-header h2 {
  font-size: 2.4rem;
  font-weight: 700;
  color: #0a2a4a;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Ligne du haut : FORMULAIRE + CARTE */
.contact-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
}

/* FORMULAIRE */
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

.form-group input,
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
.form-group textarea:focus {
  outline: none;
  border-color: #f1ba05;
  box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
}

.form-group textarea {
  resize: vertical;
  min-height: 100px;
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

/* CARTE */
.contact-map iframe {
  width: 100%;
  height: 400px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
}

.map-credit {
  font-size: 0.7rem;
  color: #8a9aa8;
  margin-top: 8px;
  text-align: right;
}

.map-credit a {
  color: #8a9aa8;
  text-decoration: none;
}

.map-credit a:hover {
  color: #D4AF37;
}

/* Ligne du bas : INFOS (Téléphone, Email, Adresse, Horaires, Réseaux) */
/* Ligne du bas : INFOS */
.contact-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.contact-bottom-inner {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.contact-bottom-second {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: white;
  padding: 18px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.info-item:hover {
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.6rem;
  line-height: 1;
  color: #0a2a4a;
}

.info-item h4 {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin: 0 0 2px 0;
}

.info-item p {
  font-size: 0.95rem;
  color: #3d4f5e;
  line-height: 1.5;
  margin: 0;
}

/* Horaires */
.info-hours {
  background: white;
  padding: 18px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.info-hours h4 {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin: 0 0 12px 0;
}

.hours-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 6px 20px;
  font-size: 0.9rem;
  color: #3d4f5e;
}

.hours-grid .closed {
  color: #e74c3c;
  font-weight: 600;
}

/* Réseaux sociaux */
.info-social {
  background: white;
  padding: 18px 22px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.info-social h4 {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin: 0 0 12px 0;
}

.social-icons {
  display: flex;
  gap: 14px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #f0f4fa;
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.3rem;
  transition: background 0.3s, transform 0.2s;
}

.social-link:hover {
  background: #D4AF37;
  transform: translateY(-3px);
}

/* ============ RESPONSIVE ============ */
@media (max-width: 992px) {
  .contact-top {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .contact-bottom-inner {
    grid-template-columns: 1fr 1fr;
  }

  .contact-bottom-second {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .contact {
    padding: 40px 0;
  }

  .contact-form {
    padding: 20px 16px;
  }

  .contact-header h2 {
    font-size: 1.5rem;
  }

  .contact-bottom-inner {
    grid-template-columns: 1fr;
  }

  .info-item {
    padding: 14px 16px;
  }

  .contact-map iframe {
    height: 250px;
  }
}
/* ============ PARTENAIRES ============ */
.partenaires {
  padding: 20px 0;
  background: white;
}

.partenaires-header {
  text-align: center;
  margin-bottom: 40px;
}

.partenaires-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f1ba05;
  background: rgba(245, 166, 35, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.partenaires-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #0a2a4a;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.partenaires-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.partenaire-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
 
}

.partenaire-item:hover {
  transform: translateY(-5px);
}

.partenaire-item img {
  width: 300px;
  height: 120px;
  object-fit: contain;
  transition: all 0.3s;
}

.partenaire-item:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

.partenaire-item span {
  font-size: 0.7rem;
  font-weight: 600;
  color: #0a2a4a;
  letter-spacing: 1px;
  text-align: center;
}

/* ============ AVIS CLIENTS ============ */
.avis {
  padding: 70px 0;
  background: #f8faff;
}

.avis-header {
  text-align: center;
  margin-bottom: 40px;
}

.avis-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f5a623;
  background: rgba(245, 166, 35, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.avis-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #0a2a4a;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

/* Score Google */
.avis-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background: white;
  padding: 30px 40px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.score-number {
  font-size: 3.5rem;
  font-weight: 800;
  color: #0a2a4a;
  font-family: Georgia, serif;
  line-height: 1;
}

.score-details {
  display: flex;
  flex-direction: column;
}

.score-etoiles {
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.score-text {
  font-size: 0.9rem;
  font-weight: 600;
  color: #0a2a4a;
}

.score-sub {
  font-size: 0.8rem;
  color: #6b7a8a;
}

.score-reviews {
  font-size: 0.8rem;
  color: #f5a623;
  font-weight: 600;
}

/* Grille avis */
.avis-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.avis-card {
  background: white;
  padding: 25px 25px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.avis-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}

.avis-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
}

.avis-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avis-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #0a2a4a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.avis-user h4 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0a2a4a;
  margin: 0;
}

.avis-date {
  font-size: 0.7rem;
  color: #8a9aa8;
}

.avis-etoiles {
  font-size: 0.9rem;
  letter-spacing: 1px;
  flex-shrink: 0;
}

.avis-content {
  font-size: 0.9rem;
  color: #3d4f5e;
  line-height: 1.6;
  flex: 1;
  margin: 0 0 15px 0;
}

.avis-link {
  display: inline-block;
  font-weight: 600;
  font-size: 0.85rem;
  color: #f5a623;
  text-decoration: none;
  align-self: flex-start;
  transition: color 0.3s;
}

.avis-link:hover {
  color: #d48c1a;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 992px) {
  .avis-grid {
    grid-template-columns: 1fr 1fr;
  }

  .partenaires-grid {
    gap: 25px;
  }

  .partenaire-item img {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 768px) {
  .partenaire-item img {
    width: 50px;
    height: 50px;
  }

  .partenaire-item span {
    font-size: 0.6rem;
  }

  .partenaires-grid {
    gap: 20px;
  }
}

@media (max-width: 576px) {
  .avis-grid {
    grid-template-columns: 1fr;
  }

  .avis-score {
    flex-direction: column;
    text-align: center;
    padding: 25px 20px;
  }

  .score-number {
    font-size: 2.8rem;
  }

  .partenaires-grid {
    flex-direction: column;
    align-items: center;
  }
}
/* ============ FOOTER ============ */
.footer {
  background: #0a2a4a;
  color: white;
  padding: 60px 0 30px;
  margin-top: 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 2.5fr 1fr 2fr 2fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Colonne 1 : Logo */
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
  color:#C6A15B;
  font-weight: 400;
}

.footer-description {
  font-size: 0.9rem;
  line-height: 1.8;
  opacity: 0.8;
  max-width: 300px;
}

/* Colonnes */
.footer-col h3 {
  font-size: 0.7rem;
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

/* Contact */
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

.footer-contact li i {
  color: #f1ba05;
  font-size: 1rem;
  margin-top: 3px;
  min-width: 20px;
}

.footer-contact li a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-contact li a:hover {
  color: #f7c31a;
}

.footer-contact li span {
  color: white;
}

/* Réseaux sociaux */
.footer-social {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-link {
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

.social-link:hover {
  background: #f1ba05;
  color: #0a2a4a;
  transform: translateY(-4px);
}

/* Copyright */
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
  color: #f1ba05;
}

.footer-legal span {
  opacity: 0.5;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
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
}

@media (max-width: 480px) {
  .footer-social {
    gap: 8px;
  }

  .social-link {
    width: 38px;
    height: 38px;
    font-size: 0.9rem;
  }
}
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
.required {
  color: #e74c3c;
  font-size: 1rem;
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
}.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
  background: #fafcff;
  transition: border-color 0.3s;
  appearance: none;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%230A2540' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 16px center;
  cursor: pointer;
}

.form-group select:focus {
  outline: none;
  border-color: #f1ba05;
  box-shadow: 0 0 0 3px rgba(245, 166, 35, 0.15);
}

.form-group select option {
  padding: 8px;
  background: white;
  color: #0a2a4a;
}

/* ============ SAVED REQUESTS ============ */
.saved-requests {
  margin-top: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  border-left: 4px solid #f1ba05;
}

.saved-requests h4 {
  margin-top: 0;
  margin-bottom: 15px;
}

.requests-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.request-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #e0e6ed;
}

.request-info {
  flex: 1;
}

.request-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #3d4f5e;
}

.request-info p:first-child {
  font-weight: 600;
  color: #0a2a4a;
}

.btn-delete {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  margin-left: 10px;
}

.btn-delete:hover {
  background: #c0392b;
}
</style>
