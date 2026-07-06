<template>
  <div class="login-page">
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
          <router-link to="/expertise-judiciaire">Services</router-link>
          <router-link to="/contact">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- ===================== LOGIN ===================== -->
    <section class="login-section">
      <div class="container login-container">
        <div class="login-card">
          <div class="login-header">
            <div class="lock-icon">
              <font-awesome-icon icon="lock" />
            </div>
            <h2>Connexion administrateur</h2>
            <p>Accédez à votre espace sécurisé</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Email -->
            <div class="form-group">
              <label>Email</label>
              <div class="input-group">
                <font-awesome-icon icon="envelope" class="input-icon" />
                <input
                  type="email"
                  v-model="form.email"
                
                  required
                />
              </div>
            </div>

            <!-- Mot de passe -->
            <div class="form-group">
              <label>Mot de passe</label>
              <div class="input-group">
                <font-awesome-icon icon="lock" class="input-icon" />
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="form.password"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  class="toggle-password"
                  @click="showPassword = !showPassword"
                >
                  <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
                </button>
              </div>
            </div>

            <!-- Options -->
            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" v-model="form.remember" />
                <span>Se souvenir de moi</span>
              </label>
              <router-link to="/mot-de-passe-oublie" class="forgot-link">
                Mot de passe oublié ?
              </router-link>
            </div>

            <!-- Bouton -->
            <button type="submit" class="btn-submit" :disabled="loading">
              {{ loading ? 'Connexion en cours...' : 'Se connecter' }}
            </button>

            <!-- Messages -->
            <div v-if="errorMessage" class="alert alert-error">{{ errorMessage }}</div>
            <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
          </form>
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
            <h3>Cabinet</h3>
            <ul class="footer-links">
              <li><router-link to="/qui-sommes-nous">À propos</router-link></li>
              <li><router-link to="/expertise-judiciaire">Services</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Contact</h3>
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
              <a href="#" class="social-link"><font-awesome-icon :icon="['fab', 'whatsapp']" /></a>
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
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false
})

const loading = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

const handleLogin = async () => {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await axios.post('/api/login', {
      email: form.email,
      password: form.password,
      remember: form.remember
    })

    // Stocker le token et les informations utilisateur
    if (response.data.token) {
      localStorage.setItem('auth_token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      // Rediriger vers l'espace admin
      successMessage.value = 'Connexion réussie ! Redirection...'
      setTimeout(() => {
        router.push('/espace-admin')
      }, 1000)
    }
  } catch (error) {
    errorMessage.value = error.response?.data?.message || 'Identifiants incorrects.'
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

.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.2s;
  padding-bottom: 4px;
  border-bottom: 2px solid transparent;
}

.nav a:hover {
  color: #C6A15B;
  border-bottom-color: #C6A15B;
}

/* ============ LOGIN ============ */
.login-section {
  min-height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8faff;
  padding: 25px 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-card {
  background: white;
  border-radius: 20px;
  padding: 15px 45px;
  max-width: 680px;
  width: 100%;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(198, 161, 91, 0.15);
}

.login-header {
  text-align: center;
  margin-bottom:25px;

}

.lock-icon {
  width: 60px;
  height: 60px;
  background: rgba(198, 161, 91, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  font-size: 1.8rem;
  color: #C6A15B;
}

.login-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0a2a4a;
  font-family: Georgia, serif;
  margin-bottom: 6px;
}

.login-header p {
  font-size: 0.95rem;
  color: #5B7B9A;
}

/* FORMULAIRE */
.login-form .form-group {
  margin-bottom: 22px;
}

.login-form label {
  display: block;
  font-size: 13px;
  font-family: Georgia, 'Times New Roman', Times, serif, Roboto, sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #0a2a4a;
  margin-bottom: 6px;
}

.input-group {
  position: relative;
  display: flex;
  align-items: center;
}

.input-group .input-icon {
  position: absolute;
  left: 14px;
  color: #8a9aa8;
  font-size: 1rem;
  pointer-events: none;
}

.input-group input {
  width: 100%;
  padding: 14px 16px 14px 44px;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  font-size: 0.95rem;
  font-family: 'Segoe UI', Roboto, sans-serif;
  transition: border-color 0.3s;
  background: #fafcff;
}

.input-group input:focus {
  outline: none;
  border-color: #C6A15B;
  box-shadow: 0 0 0 3px rgba(198, 161, 91, 0.15);
}

.toggle-password {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: #8a9aa8;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
}

.toggle-password:hover {
  color: #0a2a4a;
}

/* Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 28px;
  font-size: 0.9rem;
  flex-wrap: wrap;
  gap: 10px;
  font-family: Georgia, 'Times New Roman', Times, serif, Roboto, sans-serif;
}

.remember-me {
    font-family: Georgia, 'Times New Roman', Times, serif, Roboto, sans-serif;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #3d4f5e;

}

.remember-me input[type="checkbox"] {
  width: 16px;
  height: 16px;
  accent-color: #C6A15B;
  cursor: pointer;
  font-family: Georgia, 'Times New Roman', Times, serif, Roboto, sans-serif;
}

.forgot-link {
  color: #C6A15B;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.forgot-link:hover {
  color: #D4AF37;
  text-decoration: underline;
}

/* Bouton */
.btn-submit {
  display: inline-block;
  background: #0a2a4a;
  color: white;
  padding: 16px 40px;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
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
  transform: none;
}

/* Alertes */
.alert {
  margin-top: 15px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  text-align: center;
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

/* Footer du login */
.login-footer {
  margin-top: 24px;
  text-align: center;
  font-size: 0.9rem;
}

.login-footer a {
  color: #5B7B9A;
  text-decoration: none;
  transition: color 0.3s;
}

.login-footer a:hover {
  color: #C6A15B;
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
  .header-inner {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .nav {
    justify-content: center;
  }
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .login-card {
    padding: 35px 25px;
  }
  .login-header h2 {
    font-size: 1.5rem;
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
  .login-card {
    padding: 25px 18px;
  }
  .form-options {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>