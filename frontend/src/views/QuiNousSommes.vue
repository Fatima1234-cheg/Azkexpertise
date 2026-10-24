<template>
  <div class="about-page">
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
          <router-link to="/">{{ $t('header.nav.home') }}</router-link>
          <router-link to="/qui-sommes-nous">{{ $t('header.nav.about') }}</router-link>

          <div class="dropdown">
            <a href="#" class="nav-link dropdown-toggle">{{ $t('header.nav.services') }}</a>
            <ul class="dropdown-menu">
              <li><router-link to="/expertise-judiciaire">{{ $t('services.items.0.title') }}</router-link></li>
              <li><router-link to="/audit-assistance-technique">{{ $t('services.items.1.title') }}</router-link></li>
              <li><router-link to="/recherche-developpement">{{ $t('services.items.2.title') }}</router-link></li>
              <li><router-link to="/partenariats-conventions">{{ $t('services.items.3.title') }}</router-link></li>
            </ul>
          </div>

          <router-link to="/contact">{{ $t('header.nav.contact') }}</router-link>
        </nav>
        <div class="header-actions">
          <select class="langue-select" @change="changeLocale($event.target.value)">
            <option value="fr" :selected="locale === 'fr'">FR</option>
            <option value="ar" :selected="locale === 'ar'">AR</option>
            <option value="en" :selected="locale === 'en'">EN</option>
          </select>
          <button class="btn-connexion" @click="openLogin">
            {{ $t('header.nav.login') }}
          </button>
        </div>
      </div>
    </header>

    <!-- ===================== HERO ABOUT ===================== -->
    <section class="about-hero">
      <div class="about-hero-overlay"></div>
      <div class="container about-hero-content">
        <span class="about-hero-badge">{{ $t('pages.about.hero.badge') }}</span>
        <h1><span>{{ $t('pages.about.hero.title') }}</span></h1>
        <p>{{ $t('pages.about.hero.description') }}</p>
      </div>
    </section>

    <!-- ===================== DÉFINITION DU CABINET ===================== -->
    <section class="cabinet-definition">
      <div class="container">
        <div class="cabinet-definition-content">
          <span class="definition-badge">{{ $t('pages.about.cabinet.badge') }}</span>
          <h2>{{ $t('pages.about.cabinet.title') }}</h2>
          <p>{{ $t('pages.about.cabinet.paragraph1') }}</p>
          <p>{{ $t('pages.about.cabinet.paragraph2') }}</p>
          <div class="cabinet-signature">
            <span>{{ $t('pages.about.cabinet.signature') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== EXPERT PROFILE (style héroïque) ===================== -->
    <section class="expert-hero">
      <div class="container hero-grid">
        <!-- Colonne gauche : texte -->
        <div class="hero-text">
          <div class="hero-eyebrow">
            <span class="line"></span>
            <span class="eyebrow">{{ $t('pages.about.profile.eyebrow') }}</span>
          </div>
          <h1>{{ $t('pages.about.profile.name') }}</h1>
          <p class="subtitle">{{ $t('pages.about.profile.subtitle') }}</p>
          <p class="lede">{{ $t('pages.about.profile.lede') }}</p>
          <div class="hero-actions">
            <a href="/contact" class="btn btn-or">{{ $t('pages.about.profile.button') }}</a>
          </div>
          <div class="hero-meta">
            <div>
              <strong>{{ $t('pages.about.profile.meta.0.label') }}</strong>
              <span>{{ $t('pages.about.profile.meta.0.value') }}</span>
            </div>
            <div>
              <strong>{{ $t('pages.about.profile.meta.1.label') }}</strong>
              <span>{{ $t('pages.about.profile.meta.1.value') }}</span>
            </div>
            <div>
              <strong>{{ $t('pages.about.profile.meta.2.label') }}</strong>
              <span>{{ $t('pages.about.profile.meta.2.value') }}</span>
            </div>
          </div>
        </div>

        <!-- Colonne droite : portrait avec PHOTO DE L'EXPERT -->
        <div class="portrait-wrap">
          <div class="portrait">
            <!-- fond technique (engrenages) -->
            <svg class="gear-bg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#C6A15B" stroke-width="0.5"/>
              <circle cx="100" cy="100" r="60" stroke="#C6A15B" stroke-width="0.5"/>
              <path d="M100 20 L104 36 L96 36 Z" fill="#C6A15B"/>
              <path d="M100 180 L104 164 L96 164 Z" fill="#C6A15B"/>
              <path d="M20 100 L36 96 L36 104 Z" fill="#C6A15B"/>
              <path d="M180 100 L164 96 L164 104 Z" fill="#C6A15B"/>
            </svg>

            <!-- ✅ PHOTO DE L'EXPERT (remplace le monogramme "EA") -->
            <img
              src="/images/kfitaimage.png"
              alt="Mr. EL KFITA Abdelaziz"
              class="expert-photo-circle"
            />
          </div>

          <!-- Sceau officiel -->
          <svg class="seal" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="54" fill="#0A2540" stroke="#C6A15B" stroke-width="2"/>
            <circle cx="60" cy="60" r="46" fill="none" stroke="#C6A15B" stroke-width="1"/>
            <path id="sealCircle" d="M 60,60 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none"/>
            <text font-family="'JetBrains Mono', monospace" font-size="8.3" letter-spacing="2" fill="#E8EDF2">
              <textPath href="#sealCircle" startOffset="2%">EXPERT • ASSERMENTÉ • Temara Rabat •</textPath>
            </text>
            <g transform="translate(60,60)">
              <path d="M0,-16 L0,12 M-14,-6 L14,-6 M-14,-6 L-18,2 L-10,2 Z M14,-6 L10,2 L18,2 Z M-16,12 L16,12" stroke="#C6A15B" stroke-width="2" fill="none" stroke-linejoin="round" stroke-linecap="round"/>
            </g>
          </svg>
        </div>
      </div>
    </section>

    <!-- ===================== BANDEAU DES DOMAINES ===================== -->
    <div class="domains-strip">
      <div class="container domains-row">
        <div class="domain-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17h10M5 21h14M12 3v8m0 0l-4-4m4 4l4-4M5 11h14l-2 6H7z"/></svg>
          {{ $t('pages.about.domains.strip.0') }}
        </div>
        <div class="domain-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="9" width="5" height="11"/><rect x="10" y="5" width="5" height="15"/><rect x="16" y="12" width="4" height="8"/></svg>
          {{ $t('pages.about.domains.strip.1') }}
        </div>
        <div class="domain-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 18l2-7h14l2 7M5 11V6h10v5M9 6V3h2v3"/><path d="M2 21c2 0 2-1.5 4-1.5S8 21 10 21s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/></svg>
          {{ $t('pages.about.domains.strip.2') }}
        </div>
        <div class="domain-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l9 4.5v2L12 13 3 8.5v-2L12 2z"/><path d="M3 8.5V17l9 4.5 9-4.5V8.5"/></svg>
          {{ $t('pages.about.domains.strip.3') }}
        </div>
        <div class="domain-pill">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v18M5 7h14M7 7l-3 7a3 3 0 006 0L7 7zM17 7l-3 7a3 3 0 006 0L17 7z"/></svg>
          {{ $t('pages.about.domains.strip.4') }}
        </div>
      </div>
    </div>

    <!-- ===================== EXPERTISES & DOMAINES ===================== -->
    <section class="domaines-section">
      <div class="container">
        <div class="domaines-header">
          <span class="domaines-badge">{{ $t('pages.about.domains.badge') }}</span>
          <h2>{{ $t('pages.about.domains.title') }}</h2>
        </div>
        <div class="domaines-grid">
          <div class="domaine-card">
            <h3>{{ $t('pages.about.domains.cards.0.title') }}</h3>
            <p>{{ $t('pages.about.domains.cards.0.description') }}</p>
          </div>
          <div class="domaine-card">
            <h3>{{ $t('pages.about.domains.cards.1.title') }}</h3>
            <p>{{ $t('pages.about.domains.cards.1.description') }}</p>
          </div>
          <div class="domaine-card">
            <h3>{{ $t('pages.about.domains.cards.2.title') }}</h3>
            <p>{{ $t('pages.about.domains.cards.2.description') }}</p>
          </div>
          <div class="domaine-card">
            <h3>{{ $t('pages.about.domains.cards.3.title') }}</h3>
            <p>{{ $t('pages.about.domains.cards.3.description') }}</p>
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
              <h2>Azk<span>expertise</span></h2>
            </div>
            <p class="footer-description">
              {{ $t('footer.description') }}
            </p>
          </div>
          <div class="footer-col">
            <h3>{{ $t('footer.sections.cabinet') }}</h3>
            <ul class="footer-links">
              <li><router-link to="/qui-sommes-nous">{{ $t('footer.links.about') }}</router-link></li>
              <li><router-link to="/#services">{{ $t('footer.links.services') }}</router-link></li>
              <li><router-link to="/contact">{{ $t('footer.links.contact') }}</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>{{ $t('footer.sections.contact') }}</h3>
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
                <span>{{ $t('footer.address') }}</span>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>{{ $t('footer.sections.followUs') }}</h3>
            <div class="footer-social">
              <a href="https://web.facebook.com/profile.php?id=61565082330331" class="social-link">
                <font-awesome-icon :icon="['fab', 'facebook-f']" />
              </a>
              <a href="https://www.linkedin.com/feed/" class="social-link">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" />
              </a>
              <a href="https://www.instagram.com/azkexpertise/" class="social-link" aria-label="Instagram">
                <font-awesome-icon :icon="['fab', 'instagram']" />
              </a>
              <a href="https://wa.me/212707795145?text=Bonjour%20AZK%20Expertise%2C%20j%27aimerais%20vous%20contacter" class="social-link" aria-label="WhatsApp" target="_blank">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
              </a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>{{ $t('footer.copyright') }}</p>
          <div class="footer-legal">
            <a href="#">{{ $t('footer.legal') }}</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { locale, t } = useI18n()
const router = useRouter()
const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = newLocale
}
const openLogin = () => {
  router.push('/connexion')
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

/* ============ HERO ABOUT ============ */
.about-hero {
  position: relative;
  background-color: #0A2540;
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  padding: 20px 0;
}

.about-hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 37, 64, 0.8);
  z-index: 1;
}

.about-hero-content {
  position: relative;
  z-index: 2;
  max-width: 1000px;
  text-align: justify;
  padding-left: 0px;
}

.about-hero-badge {
  display: inline-block;
  background: rgba(198, 161, 91, 0.15);
  border: 1px solid #C6A15B;
  color: #C6A15B;
  padding: 6px 22px;
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: Georgia;
}

.about-hero-content h1 {
  font-size: 3.2rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 18px;
  font-family: serif;
}

.about-hero-content h1 span {
  font-weight: 700;
  color: #C6A15B;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

.about-hero-content p {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  max-width: 1000px;
  font-family: Georgia, serif;
}

/* ============ DÉFINITION DU CABINET ============ */
.cabinet-definition {
  padding: 40px 0;
  background: #F8F9FA;
}

.cabinet-definition-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.definition-badge {
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

.cabinet-definition-content h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 25px;
  font-family: Georgia, serif;
}

.cabinet-definition-content p {
  font-size: 1.05rem;
  line-height: 1.9;
  color: #2C3E50;
  margin-bottom: 20px;
  text-align: justify;
}

.cabinet-definition-content p strong {
  color: #C6A15B;
}

.cabinet-signature {
  margin-top: 30px;
  font-size: 0.9rem;
  letter-spacing: 2px;
  color: #7F8C8D;
  font-style: italic;
}

/* ============ EXPERT HERO ============ */
.expert-hero {
  background:
    radial-gradient(circle at 85% 20%, rgba(198,161,91,0.10), transparent 45%),
    linear-gradient(180deg, #0A2540 0%, #0d2c4c 100%);
  color: #FFFFFF;
  padding: 40px 0 60px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
}

.expert-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(198,161,91,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(198,161,91,0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 70% 60% at 30% 30%, black, transparent);
  pointer-events: none;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Texte */
.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 22px;
}

.hero-eyebrow .line {
  width: 34px;
  height: 1.5px;
  background: #C6A15B;
}

.eyebrow {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #C6A15B;
  font-weight: 500;
}

.hero-text h1 {
  font-family: 'Fraunces', serif;
  font-size: clamp(34px, 4.6vw, 54px);
  line-height: 1.06;
  color: #FFFFFF;
  margin-bottom: 6px;
  font-weight: 600;
}

.hero-text h1 em {
  font-style: italic;
  color: #C6A15B;
  font-weight: 500;
}

.hero-text .subtitle {
  font-size: 17px;
  color: #C9D6E3;
  font-weight: 500;
  margin-bottom: 22px;
  letter-spacing: 0.01em;
}

.hero-text .lede {
  font-size: 15.5px;
  line-height: 1.75;
  color: #AEC0D2;
  max-width: 550px;
  text-align: justify;
  margin-bottom: 34px;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 13.5px;
  padding: 12px 22px;
  border-radius: 3px;
  cursor: pointer;
  border: none;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
  white-space: nowrap;
  text-decoration: none;
}

.btn-or {
  background: transparent;
  border: 1px solid #C6A15B;
  border-radius: 5px;
  color: #b08a4a;
  width: 83%;
  font-size: 16px;
}

.btn-or:hover {
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  color: #FFFFFF;
  border: 1.5px solid rgba(255,255,255,0.35);
}

.btn-outline:hover {
  border-color: #C6A15B;
  color: #C6A15B;
}

/* Meta badges */
.hero-meta {
  display: flex;
  gap: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,0.12);
}

.hero-meta div {
  font-size: 12.5px;
  color: #8FA4B8;
  line-height: 1.5;
}

.hero-meta strong {
  display: block;
  color: #FFFFFF;
  font-family: 'Fraunces', serif;
  font-size: 19px;
  font-weight: 600;
}

/* Portrait + sceau */
.portrait-wrap {
  display: flex;
  justify-content: center;
  position: relative;
}

.portrait {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 32%, #1b3a5c, #0A2540 72%);
  border: 1.5px solid rgba(198,161,91,0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden; /* ✅ pour que l'image reste dans le cercle */
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.55), inset 0 0 0 8px rgba(255,255,255,0.02);
}

.portrait::before {
  content: "";
  position: absolute;
  inset: 14px;
  border-radius: 50%;
  border: 1px solid rgba(198,161,91,0.25);
  pointer-events: none;
  z-index: 2; /* ✅ au-dessus de la photo */
}

.portrait .gear-bg {
  position: absolute;
  inset: 0;
  opacity: 0.16;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.portrait .initials {
  font-family: 'Fraunces', serif;
  font-size: 64px;
  font-weight: 600;
  color: #C6A15B;
  letter-spacing: 0.02em;
  position: relative;
  z-index: 1;
}

/* ✅ Photo dans le portrait */
.portrait .expert-photo-circle {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  display: block;
}

.seal {
  position: absolute;
  bottom: -6px;
  right: 6px;
  width: 118px;
  height: 118px;
  filter: drop-shadow(0 10px 18px rgba(0,0,0,0.45));
  z-index: 3; /* ✅ au-dessus du portrait */
}

/* ============ DOMAINS STRIP ============ */
.domains-strip {
  background: #FFFFFF;
  border-bottom: 1px solid #E3E8EE;
}

.domains-row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  padding: 26px 0;
}

.domain-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #0A2540;
}

.domain-pill svg {
  width: 20px;
  height: 20px;
  color: #C6A15B;
  flex-shrink: 0;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 900px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .portrait-wrap {
    order: -1;
  }
  .hero-text .lede {
    max-width: 100%;
  }
  .domains-row {
    justify-content: flex-start;
  }
}

@media (max-width: 600px) {
  .portrait {
    width: 200px;
    height: 200px;
  }
  .portrait .initials {
    font-size: 44px;
  }
  .seal {
    width: 80px;
    height: 80px;
    bottom: -4px;
    right: 4px;
  }
  .hero-meta {
    flex-wrap: wrap;
    row-gap: 18px;
  }
  .hero-actions {
    flex-direction: column;
  }
  .btn {
    width: 100%;
    justify-content: center;
  }
}

/* ============ DOMAINES ============ */
.domaines-section {
  padding: 20px 0px 80px 0px;
  background: #E8EDF2;
}

.domaines-header {
  text-align: center;
  margin-bottom: 50px;
}

.domaines-badge {
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

.domaines-header h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0A2540;
  font-family: Georgia, serif;
}

.domaines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.domaine-card {
  background: white;
  padding: 35px 25px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s, box-shadow 0.3s;
}

.domaine-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
}

.domaine-icon {
  font-size: 2.8rem;
  color: #C6A15B;
  margin-bottom: 15px;
}

.domaine-card h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: #0A2540;
  margin-bottom: 10px;
  font-family: Georgia, serif;
}

.domaine-card p {
  font-size: 0.95rem;
  color: #5B7B9A;
  line-height: 1.6;
}

/* ============ FOOTER ============ */
.footer {
  background: #0A2540;
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
  .expert-wrapper {
    flex-direction: column;
    align-items: center;
  }
  .expert-image img {
    height: 350px;
  }
  .expert-badge {
    left: 50%;
    transform: translateX(-50%);
  }
  .domaines-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .about-hero-content h1 {
    font-size: 2.4rem;
  }
  .cabinet-definition-content h2 {
    font-size: 1.8rem;
  }
  .expert-info h2 {
    font-size: 1.8rem;
  }
  .domaines-grid {
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
  .about-hero {
    min-height: 50vh;
  }
  .about-hero-content h1 {
    font-size: 1.8rem;
  }
  .about-hero-content {
    padding-left: 20px;
  }
  .expert-image img {
    height: 250px;
  }
  .expert-info h2 {
    font-size: 1.4rem;
  }
  .title-item {
    font-size: 0.9rem;
  }
  .container {
    padding: 0 15px;
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