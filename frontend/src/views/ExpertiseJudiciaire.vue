<template>
  <div class="expertise-page">
    <!-- ===================== HEADER ===================== -->
    <header class="header">
      <div class="container header-inner">
        <div class="logo">
          <div class="logo-main">
            <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Logo" class="logo-img" />
            <div class="logo-texts">
              <h1>A<span>zkexpertise</span></h1>
              <p class="logo-soustitre">Cabinet d'Expertise Technique, Étude,...</p>
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

    <!-- ===================== HERO ===================== -->
    <section class="hero">
      <div class="container hero-content">
        <span class="hero-badge">Expertise Judiciaire &amp; Technique</span>
        <h1>Des rapports d’expertise <span>reconnus par les Tribunaux</span></h1>
        <p>
          Évaluations de dommages, analyses de risques industriels, inventaires et 
          conseils techniques. Nous mettons notre rigueur et notre indépendance 
          au service des juridictions, des assureurs et des entreprises.
        </p>
        <div class="hero-actions">
          <a href="#services" class="btn-primary">Découvrir nos services</a>
          <a href="/contact" class="btn-secondary">Demander une expertise</a>
        </div>
      </div>
    </section>

    <!-- ===================== SERVICES ===================== -->
    <section class="services" id="services">
      <div class="container">
        <div class="section-head">
          <span class="section-badge">Nos Expertises</span>
          <h2>Des compétences pluridisciplinaires<br/> au service de la justice et de l’industrie</h2>
          <p>
            Nous intervenons sur l’ensemble du spectre de l’expertise technique et judiciaire, 
            avec une approche scientifique et une parfaite connaissance du terrain.
          </p>
        </div>

        <div class="services-grid">
          <!-- Carte 1 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="car-crash" class="service-icon" />
            </div>
            <h3>Expertise automobile &amp; poids lourds</h3>
            <p>
              Évaluation des dommages suite à des accidents de la circulation : 
              voitures, motos, camions lourds et légers assurés.
            </p>
          </div>

          <!-- Carte 2 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="industry" class="service-icon" />
            </div>
            <h3>Expertise industrielle &amp; mécanique</h3>
            <p>
              Analyse des installations techniques, chaînes de production, 
              machines et équipements. Évaluation des risques et défaillances.
            </p>
          </div>

          <!-- Carte 3 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="balance-scale" class="service-icon" />
            </div>
            <h3>Évaluation du patrimoine &amp; liquidation</h3>
            <p>
              Valorisation des actifs de l’entreprise dans le cadre d’une 
              liquidation judiciaire ou d’un plan d’investissement.
            </p>
          </div>

          <!-- Carte 4 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="clipboard-list" class="service-icon" />
            </div>
            <h3>Inventaire &amp; réforme des stocks PDR</h3>
            <p>
              Chiffrage, réforme des pièces de rechange obsolètes, 
              optimisation des stocks et gestion du parc matériel.
            </p>
          </div>

          <!-- Carte 5 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="chart-line" class="service-icon" />
            </div>
            <h3>Consulting technique &amp; amélioration</h3>
            <p>
              Audit, maintenance industrielle, outils d’analyse et d’amélioration 
              (AMDEC, PDCA, Pareto, DEMATEL, AHP). Gestion de parc auto et TP.
            </p>
          </div>

          <!-- Carte 6 -->
          <div class="service-card">
            <div class="icon-wrapper">
              <font-awesome-icon icon="file-signature" class="service-icon" />
            </div>
            <h3>Rapports certifiés pour les tribunaux</h3>
            <p>
              Rapports d’expertise opposables, rédigés selon les normes judiciaires, 
              avec une méthodologie rigoureuse et transparente.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== METHODOLOGIE / ENGAGEMENT ===================== -->
    <section class="methodologie">
      <div class="container">
        <div class="methodo-content">
          <div class="methodo-text">
            <span class="section-badge">Notre approche</span>
            <h2>Une méthodologie éprouvée <br/>pour des expertises fiables</h2>
            <ul>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                <span><strong>Analyse approfondie</strong> – Inspection minutieuse des équipements et des documents techniques.</span>
              </li>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                <span><strong>Évaluation objective</strong> – Chiffrage précis des dommages et de la valeur des actifs.</span>
              </li>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                <span><strong>Rapports certifiés</strong> – Rédigés selon les normes judiciaires, reconnus par les tribunaux.</span>
              </li>
              <li>
                <font-awesome-icon icon="check-circle" class="check-icon" />
                <span><strong>Indépendance totale</strong> – Nous garantissons une impartialité absolue dans toutes nos missions.</span>
              </li>
            </ul>
            <a href="/contact" class="btn-primary">Solliciter une expertise</a>
          </div>
          <div class="methodo-image">
            <img src="/images/jur.jpg" alt="Expertise technique" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== CTA FINAL ===================== -->
    <section class="cta-final">
      <div class="container cta-content">
        <h2>Besoin d’une expertise judiciaire ou technique ?</h2>
        <p>
          Contactez‑nous dès maintenant pour une première évaluation confidentielle.
        </p>
        <div class="cta-buttons">
  <a href="/contact" class="btn-primary">
    <font-awesome-icon icon="envelope" /> Nous contacter
  </a>
 <a href="mailto:azkexpertise@gmail.com?subject=Demande%20d'information&body=Bonjour%2C%20je%20souhaiterais%20avoir%20plus%20d'informations%20sur%20vos%20services." class="btn-secondary">
  <font-awesome-icon icon="paper-plane" /> Envoyer un message
</a>
  <a href="tel:+212666698155" class="btn-secondary">
    <font-awesome-icon icon="phone" /> Appeler
  </a>
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
              <h2>Azk<span>expertise</span></h2>
            </div>
            <p class="footer-description">
              Cabinet d'expertise judiciaire, automobile et industrielle. Rigueur, indépendance, précision.
            </p>
          </div>
          <div class="footer-col">
            <h3>Services</h3>
            <ul class="footer-links">
          
      <li><router-link to="/expertise-judiciaire">Expertise Judiciaire</router-link></li>
      <li><router-link to="/audit-assistance-technique">Audit &amp; Assistance Technique</router-link></li>
      <li><router-link to="/recherche-developpement">Recherche &amp; Développement</router-link></li>
      <li><router-link to="/partenariats-conventions">Partenariats &amp; Conventions</router-link></li>
    </ul>
          </div>
          <div class="footer-col">
            <h3>Contact</h3>
            <ul class="footer-contact">
              <li>
                <font-awesome-icon icon="phone" />
                <a href="tel:+212666698155">+212 666 698 155 / +212 538 776 996</a>
              </li>
              <li>
                <font-awesome-icon icon="envelope" />
                <a href="mailto:azkexpertise@gmail.com">azkexpertise@gmail.com</a>
              </li>
              <li>
                <font-awesome-icon icon="map-marker-alt" />
                <span>Lot 116, Annasr, Res: Dar Dmana, Temara</span>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Suivez‑nous</h3>
            <div class="footer-social">
              <a href="#" class="social-link"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a>
              <a href="#" class="social-link"><font-awesome-icon :icon="['fab', 'linkedin-in']" /></a>
              <a href="#" class="social-link"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
              <a href="https://wa.me/212707795145?text=Bonjour%20AZK%20Expertise%2C%20j%27aimerais%20vous%20contacter" class="social-link" aria-label="WhatsApp" target="_blank">
    <font-awesome-icon :icon="['fab', 'whatsapp']" />
  </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 AZK Expertise. Tous droits réservés.</p>
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
  font-weight: 300;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background 0.2s, color 0.2s;
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
  background: #C6A15B;
  color: #0A2540;
}

/* ============ BOUTONS GÉNÉRIQUES ============ */
.btn-primary {
  display: inline-block;
  background: #C6A15B;
  color: #0A2540;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: #D4AF37;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(198, 161, 91, 0.3);
}

.btn-secondary {
  display: inline-block;
  background: transparent;
  color: #C6A15B;
  padding: 14px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 2px solid #C6A15B;
  transition: all 0.3s;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #C6A15B;
  color: #0A2540;
  transform: translateY(-2px);
}

/* ============ HERO ============ */
.hero {
  background:
    radial-gradient(circle at 85% 20%, rgba(198, 161, 91, 0.10), transparent 45%),
    linear-gradient(180deg, #0A2540 0%, #0d2c4c 100%);
  color: white;
  padding: 60px 0 60px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(198, 161, 91, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(198, 161, 91, 0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 30% 30%, black, transparent);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 1000px;
}

.hero-badge {
  display: inline-block;
  background: rgba(198, 161, 91, 0.15);
  border: 1px solid #C6A15B;
  color: #C6A15B;
  padding: 6px 22px;
  border-radius: 30px;
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: Georgia, serif;
}

.hero h1 {
  font-size: 40px;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 18px;
  font-family: Georgia, serif;
}

.hero h1 span {
  font-weight: 500;
  color: #C6A15B;
}

.hero p {
  font-size: 1.15rem;
  line-height: 35px;
  opacity: 0.9;
  max-width: 1000px;
  font-family: Georgia, serif;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

/* ============ SERVICES ============ */
.services {
  padding: 50px 0;
  background: #F8F9FA;
}

.section-head {
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 60px;
}

.section-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #C6A15B;
  background: rgba(198, 161, 91, 0.12);
  padding: 4px 16px;
  border-radius: 30px;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.section-head h2 {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 16px;
  font-family: Georgia, serif;
}

.section-head p {
  font-size: 1.05rem;
  color: #5B7B9A;
  line-height: 1.8;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 35px 28px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.icon-wrapper {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: rgba(198, 161, 91, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.service-icon {
  font-size: 2rem;
  color: #C6A15B;
}

.service-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 12px;
  font-family: Georgia, serif;
}

.service-card p {
  font-size: 0.95rem;
  color: #5B7B9A;
  line-height: 1.7;
}

/* ============ METHODOLOGIE ============ */
.methodologie {
  padding: 80px 0;
  background: #E8EDF2;
}

.methodo-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.methodo-text .section-badge {
  margin-bottom: 12px;
}

.methodo-text h2 {
  font-size: clamp(28px, 2.8vw, 38px);
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 24px;
  font-family: Georgia, serif;
}

.methodo-text ul {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
}

.methodo-text ul li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 1rem;
  color: #2C3E50;
  line-height: 1.7;
  margin-bottom: 16px;
}

.check-icon {
  color: #C6A15B;
  font-size: 1.2rem;
  margin-top: 3px;
  min-width: 24px;
}

.methodo-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
}

/* ============ CTA FINAL ============ */
.cta-final {
  background: #0A2540;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.cta-content h2 {
  font-size: clamp(28px, 3vw, 40px);
  font-weight: 700;
  margin-bottom: 16px;
  font-family: Georgia, serif;
}

.cta-content p {
  font-size: 1.1rem;
  color: #AEC0D2;
  margin-bottom: 32px;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-buttons .btn-secondary {
  color: #C6A15B;
  border-color: #C6A15B;
}

.cta-buttons .btn-secondary:hover {
  background: #C6A15B;
  color: #0A2540;
}

/* ============ FOOTER ============ */
.footer {
  background: #0A2540;
  color: white;
  padding: 60px 0 30px;
  border-top: 1px solid rgba(198, 161, 91, 0.2);
}

.footer-content {
  display: grid;
  grid-template-columns: 3fr 2fr 2.6fr 2.4fr;
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
  font-weight: 300;
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
  color: #0A2540;
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
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .methodo-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .methodo-image img {
    height: 250px;
  }
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 0 60px;
  }
  .hero h1 {
    font-size: 2.4rem;
  }
  .services-grid {
    grid-template-columns: 1fr;
  }
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-logo {
    justify-content: center;
  }
  .footer-description {
    max-width: 100%;
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
  .container {
    padding: 0 15px;
  }
  .hero h1 {
    font-size: 1.8rem;
  }
  .hero-actions {
    flex-direction: column;
  }
  .btn-primary,
  .btn-secondary {
    width: 100%;
    text-align: center;
  }
  .cta-buttons {
    flex-direction: column;
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