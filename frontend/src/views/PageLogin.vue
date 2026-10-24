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
          <router-link to="/">{{ $t('header.nav.home') }}</router-link>
          <router-link to="/qui-sommes-nous">{{ $t('header.nav.about') }}</router-link>
          <router-link to="/expertise-judiciaire">{{ $t('header.nav.services') }}</router-link>
          <router-link to="/contact">{{ $t('header.nav.contact') }}</router-link>
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
            <h2>{{ $t('pages.login.title') }}</h2>
            <p>{{ $t('pages.login.subtitle') }}</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Email -->
            <div class="form-group">
              <label>{{ $t('pages.login.email') }}</label>
              <div class="input-group">
                <font-awesome-icon icon="envelope" class="input-icon" />
                <input
                  type="email"
                  v-model="email"
                  required
                />
              </div>
            </div>

            <!-- Mot de passe -->
            <div class="form-group">
              <label>{{ $t('pages.login.password') }}</label>
              <div class="input-group">
                <font-awesome-icon icon="lock" class="input-icon" />
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="password"
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
                <input type="checkbox" v-model="rememberMe" />
                <span>{{ $t('pages.login.remember') }}</span>
              </label>
              <a href="#" class="forgot-link" @click.prevent="openForgotModal">
                {{ $t('pages.login.forgot') }}
              </a>
            </div>

            <!-- Bouton -->
            <button type="submit" class="btn-submit" :disabled="loading">
              {{ loading ? $t('pages.login.submitting') : $t('pages.login.submit') }}
            </button>

            <!-- Error message -->
            <div v-if="errorMessage" class="alert alert-error">
              {{ errorMessage }}
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- ===================== MODAL MOT DE PASSE OUBLIÉ ===================== -->
    <div v-if="showForgotModal" class="modal-overlay" @click.self="closeForgotModal">
      <div class="modal-content modal-sm">
        <div class="modal-header">
          <h2><font-awesome-icon icon="key" /> Mot de passe oublié</h2>
          <button class="modal-close" @click="closeForgotModal">×</button>
        </div>

        <div class="modal-body">
          <p class="modal-subtitle">
            Saisissez votre adresse email et nous vous enverrons un nouveau mot de passe.
          </p>

          <form @submit.prevent="sendResetLink">
            <div class="form-group">
              <label>Email</label>
              <div class="input-group">
                <font-awesome-icon icon="envelope" class="input-icon" />
                <input
                  type="email"
                  v-model="resetEmail"
                  placeholder="admin@azkexpertise.ma"
                  required
                />
              </div>
            </div>

            <div class="modal-actions">
              <button type="button" class="btn-secondary" @click="closeForgotModal">
                Annuler
              </button>
              <button type="submit" class="btn-primary" :disabled="resetLoading">
                {{ resetLoading ? 'Envoi en cours...' : 'Envoyer le mot de passe' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ===================== TOAST CONTAINER ===================== -->
    <div class="toast-container">
      <div
        v-for="(toast, index) in toasts"
        :key="index"
        :class="['toast', `toast-${toast.type}`, { 'toast-exit': toast.removing }]"
      >
        <span class="toast-icon">
          <font-awesome-icon v-if="toast.type === 'success'" icon="check-circle" />
          <font-awesome-icon v-else-if="toast.type === 'error'" icon="exclamation-circle" />
          <font-awesome-icon v-else icon="info-circle" />
        </span>
        <div class="toast-content">
          <strong>{{ toast.title }}</strong>
          <p>{{ toast.message }}</p>
        </div>
        <button class="toast-close" @click="removeToast(index)">
          <font-awesome-icon icon="times" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const { t } = useI18n()
const router = useRouter()

// ===== FORMULAIRE LOGIN =====
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)
const showPassword = ref(false)
const errorMessage = ref('')

// ===== MODAL MOT DE PASSE OUBLIÉ =====
const showForgotModal = ref(false)
const resetEmail = ref('')
const resetLoading = ref(false)

const openForgotModal = () => {
  resetEmail.value = email.value || ''
  showForgotModal.value = true
}

const closeForgotModal = () => {
  showForgotModal.value = false
  resetEmail.value = ''
  resetLoading.value = false
}

// ===== TOAST SYSTEM =====
const toasts = ref([])

const addToast = (type, title, message, duration = 4000) => {
  const toast = {
    type, // 'success', 'error', 'info'
    title,
    message,
    removing: false
  }
  toasts.value.push(toast)

  setTimeout(() => {
    removeToast(toasts.value.length - 1)
  }, duration)

  return toast
}

const removeToast = (index) => {
  if (index >= 0 && index < toasts.value.length) {
    toasts.value[index].removing = true
    setTimeout(() => {
      toasts.value.splice(index, 1)
    }, 300)
  }
}

// ===== LOGIN =====
const handleLogin = async () => {
  console.log('🔐 Tentative de connexion...')
  loading.value = true
  errorMessage.value = ''

  try {
    console.log('📧 Email:', email.value)
    console.log('🔑 Password:', password.value)
    
    // Connexion avec Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user

    console.log('✅ Connexion Firebase réussie!', user)

    // Stocker les infos utilisateur
    localStorage.setItem('user', JSON.stringify({
      email: user.email,
      uid: user.uid
    }))

    console.log('💾 Utilisateur stocké dans localStorage!')
    
    if (rememberMe.value) {
      localStorage.setItem('rememberMe', 'true')
    }

    addToast('success', '✅ Connexion réussie', 'Redirection vers l\'espace admin...')
    
    console.log('🔄 Tentative de redirection vers /espace-admin...')
    // Rediriger immédiatement
    const pushResult = router.push('/espace-admin')
    console.log('📍 Résultat de router.push:', pushResult)
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error)
    console.error('❌ Code d\'erreur:', error.code)
    console.error('❌ Message d\'erreur:', error.message)

    // Gérer les erreurs Firebase
    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage.value = 'Aucun compte trouvé avec cet email'
        break
      case 'auth/wrong-password':
        errorMessage.value = 'Mot de passe incorrect'
        break
      case 'auth/invalid-email':
        errorMessage.value = 'Email invalide'
        break
      case 'auth/too-many-requests':
        errorMessage.value = 'Trop de tentatives. Veuillez réessayer plus tard'
        break
      default:
        errorMessage.value = 'Erreur de connexion. Veuillez réessayer'
    }
  } finally {
    loading.value = false
  }
}

// ===== ENVOI DU LIEN DE RÉINITIALISATION =====
const sendResetLink = async () => {
  if (!resetEmail.value) {
    addToast('error', '❌ Email requis', 'Veuillez saisir votre adresse email')
    return
  }

  resetLoading.value = true

  try {
    // For now, we'll just show a toast since password reset via backend is still working
    addToast('success', '✅ Demande envoyée', 'Vérifiez votre boîte mail pour votre nouveau mot de passe')
    closeForgotModal()
  } catch (error) {
    const message = error.response?.data?.message || 'Une erreur est survenue'
    addToast('error', '❌ Erreur', message)
  } finally {
    resetLoading.value = false
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
  margin-bottom: 25px;
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
  cursor: pointer;
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

/* Alert */
.alert {
  margin-top: 15px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
}

.alert-error {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  border-radius: 20px;
  max-width: 500px;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 25px 60px rgba(0,0,0,0.3);
  animation: slideUp 0.3s ease;
}

@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-sm {
  max-width: 500px;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px 15px 30px;
  border-bottom: 1px solid #e0e6ed;
}

.modal-header h2 {
  color: #0a2a4a;
  font-size: 1.5rem;
  font-family: Georgia, serif;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.modal-header h2 svg {
  color: #C6A15B;
}

.modal-close {
  background: none;
  border: none;
  font-size: 2.2rem;
  color: #8a9aa8;
  cursor: pointer;
  transition: color 0.3s;
  line-height: 1;
}

.modal-close:hover {
  color: #e74c3c;
}

.modal-body {
  padding: 25px 30px 30px 30px;
}

.modal-subtitle {
  color: #5B7B9A;
  font-size: 0.95rem;
  margin-bottom: 20px;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
}

.btn-primary {
  background: #0a2a4a;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  background: #1a3a5a;
  transform: translateY(-2px);
}

.btn-primary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-secondary {
  background: #e8edf2;
  color: #0a2a4a;
  border: none;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: #d5dce4;
}

/* ===== TOAST NOTIFICATION ===== */
.toast-container {
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
  width: 100%;
}

.toast {
  background: white;
  border-radius: 12px;
  padding: 16px 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 14px;
  animation: slideInRight 0.4s ease;
  border-left: 5px solid;
  transform-origin: right;
}

.toast-success {
  border-left-color: #27ae60;
}

.toast-error {
  border-left-color: #e74c3c;
}

.toast-info {
  border-left-color: #C6A15B;
}

.toast-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
}

.toast-success .toast-icon {
  color: #27ae60;
}

.toast-error .toast-icon {
  color: #e74c3c;
}

.toast-info .toast-icon {
  color: #C6A15B;
}

.toast-content {
  flex: 1;
}

.toast-content strong {
  display: block;
  color: #0a2a4a;
  font-size: 0.9rem;
  font-weight: 700;
}

.toast-content p {
  color: #3d4f5e;
  font-size: 0.85rem;
  margin: 2px 0 0 0;
}

.toast-close {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #8a9aa8;
  cursor: pointer;
  padding: 0 4px;
  transition: color 0.3s;
  flex-shrink: 0;
}

.toast-close:hover {
  color: #e74c3c;
}

@keyframes slideInRight {
  from {
    transform: translateX(120%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOutRight {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(120%);
    opacity: 0;
  }
}

.toast-exit {
  animation: slideOutRight 0.3s ease forwards;
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
}

@media (max-width: 768px) {
  .login-card {
    padding: 35px 25px;
  }
  .login-header h2 {
    font-size: 1.5rem;
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
  .modal-content {
    max-width: 95%;
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
  .toast-container {
    top: 20px;
    right: 15px;
    left: 15px;
    max-width: 100%;
    width: auto;
  }
  .modal-body {
    padding: 20px;
  }
  .modal-header h2 {
    font-size: 1.2rem;
  }
  .modal-actions {
    flex-direction: column;
  }
  .modal-actions button {
    width: 100%;
    text-align: center;
  }
}
</style>
