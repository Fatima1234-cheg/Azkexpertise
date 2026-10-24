<template>
  <div class="admin-page">
    <!-- ===================== HEADER ===================== -->
    <header class="header">
      <div class="container header-inner">
        <div class="logo">
          <div class="logo-main">
            <img src="/images/LogoAzkexpertise-removebg-preview.png" alt="AZK Logo" class="logo-img" />
            <div class="logo-texts">
              <h1>A<span>zkexpertise</span></h1>
              <p class="logo-soustitre">Espace Administrateur</p>
            </div>
          </div>
        </div>
        <nav class="nav">
          <router-link to="/">Accueil</router-link>
          <button @click="handleLogout" class="logout-btn">
            Déconnexion
          </button>
        </nav>
      </div>
    </header>

    <!-- ===================== ADMIN DASHBOARD ===================== -->
    <section class="admin-section">
      <div class="container">
        <div class="welcome-card">
          <h1>Bienvenue, {{ user.name }} !</h1>
          <p>Vous êtes connecté en tant qu'administrateur</p>
        </div>

        <div class="admin-stats">
          <div class="stat-card">
            <div class="stat-icon">
              <font-awesome-icon icon="users" />
            </div>
            <div class="stat-content">
              <h3>Utilisateurs</h3>
              <p class="stat-number">{{ admins.length }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <font-awesome-icon icon="file-alt" />
            </div>
            <div class="stat-content">
              <h3>Demandes</h3>
              <p class="stat-number">{{ contactRequests.length }}</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-content">
              <button @click="openUsersModal" class="gerer">
                <font-awesome-icon icon="users" /> Gérer les utilisateurs
              </button>
            </div>
          </div>
        </div>

        <!-- ===================== CONTACT REQUESTS ===================== -->
        <div class="contact-requests-section">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
            <h2>Demandes de Contact</h2>
            <button @click="loadRequests" class="btn-refresh">
              <font-awesome-icon icon="sync-alt" /> Rafraîchir
            </button>
          </div>

          <div v-if="contactRequests.length === 0" class="empty-state">
            Aucune demande de contact pour le moment
          </div>

          <div v-else class="requests-grid">
            <div v-for="(request, index) in contactRequests" :key="index" class="request-card" :class="{ 'request-validated': request.statut === 'validée' }">
              <div class="request-header">
                <h3>{{ request.nom || request.name }}</h3>
                <span class="request-date">
                  {{ request.date ? new Date(request.date).toLocaleString('fr-FR') : 'Date inconnue' }}
                </span>
              </div>
              <div class="request-details">
                <p><strong>Email:</strong> {{ request.email }}</p>
                <p><strong>Téléphone:</strong> {{ request.telephone || request.phone }}</p>
                <p><strong>Objet:</strong> {{ request.objet || request.subject }}</p>
                <p v-if="request.objetAutre || request.otherSubject || request.other">
                  <strong>Autre Objet:</strong>
                  {{ request.objetAutre || request.otherSubject || request.other }}
                </p>
                <p v-if="request.informations || request.message">
                  <strong>Message:</strong> {{ request.informations || request.message }}
                </p>
              </div>
              <div class="request-actions">
                <button @click="validerDemande(index)" class="btn-valider" :disabled="request.statut === 'validée' || validatingIndex === index">
                  {{ validatingIndex === index ? 'Envoi en cours...' : (request.statut === 'validée' ? '✓ Validée' : 'Valider') }}
                </button>
                <button @click="openDeleteRequestModal(index)" class="delete-btn">
                  Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== MODAL GESTION UTILISATEURS ===================== -->
    <div v-if="showUsersModal" class="modal-overlay" @click.self="closeUsersModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Gestion des utilisateurs</h2>
          <button class="modal-close" @click="closeUsersModal">×</button>
        </div>

        <div class="modal-body">
          <p class="modal-subtitle">Liste des administrateurs du cabinet</p>

          <div v-if="admins.length === 0" class="empty-state">
            Aucun utilisateur. Ajoutez-en un ci-dessous.
          </div>

          <div v-else class="users-list">
            <div v-for="(admin, index) in admins" :key="index" class="user-item">
              <div class="user-info">
                <div class="user-avatar">
                  <font-awesome-icon icon="user-circle" class="avatar-icon" />
                </div>
                <div class="user-details">
                  <h4>{{ admin.nom_complet || admin.name }}</h4>
                  <p>{{ admin.email }}</p>
                </div>
              </div>
              <div class="user-actions">
                <button @click="openEditModal(admin, index)" class="action-icon edit" title="Modifier">
                  <font-awesome-icon icon="pen" />
                </button>
                <button @click="openDeleteModal(admin, index)" class="action-icon delete" title="Supprimer">
                  <font-awesome-icon icon="trash" />
                </button>
              </div>
            </div>
          </div>

          <div class="add-user-section">
            <button @click="openAddModal" class="add-user-btn">
              <font-awesome-icon icon="plus-circle" /> Ajouter un utilisateur
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===================== MODAL AJOUT / MODIFICATION ===================== -->
    <div v-if="showEditModal" class="modal-overlay" @click.self="closeEditModal">
      <div class="modal-content modal-sm">
        <div class="modal-header">
          <h2>{{ editMode === 'add' ? 'Ajouter un utilisateur' : 'Modifier l\'utilisateur' }}</h2>
          <button class="modal-close" @click="closeEditModal">×</button>
        </div>

        <div class="modal-body">
          <form @submit.prevent="saveUser">
            <div class="form-group">
              <label>Nom complet</label>
              <input type="text" v-model="editForm.nom_complet" placeholder="Jean Dupont" required />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="editForm.email" placeholder="admin@azkexpertise.ma" required />
            </div>
            <div class="form-group">
              <label>Mot de passe</label>
              <input type="password" v-model="editForm.mot_de_passe" placeholder="••••••••" :required="editMode === 'add'" />
              <small v-if="editMode === 'edit'">Laissez vide pour garder le mot de passe actuel</small>
            </div>

            <div class="modal-actions">
              <button type="button" class="btn-secondary" @click="closeEditModal">Annuler</button>
              <button type="submit" class="btn-primary">
                {{ editMode === 'add' ? 'Ajouter' : 'Enregistrer' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- ===================== MODAL CONFIRMATION SUPPRESSION UTILISATEUR ===================== -->
    <div v-if="showDeleteModal" class="modal-overlay" @click.self="closeDeleteModal">
      <div class="modal-content modal-sm modal-delete">
        <div class="modal-header delete-header">
          <h2><font-awesome-icon icon="exclamation-triangle" class="delete-icon" /> Confirmer la suppression</h2>
          <button class="modal-close" @click="closeDeleteModal">×</button>
        </div>

        <div class="modal-body">
          <p>
            Êtes-vous sûr de vouloir supprimer l'administrateur
            <strong>{{ deleteTarget?.nom_complet || deleteTarget?.name }}</strong> ?
          </p>
          <p class="delete-warning">Cette action est irréversible.</p>

          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="closeDeleteModal">Annuler</button>
            <button type="button" class="btn-danger" @click="confirmDeleteUser">Supprimer</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===================== MODAL CONFIRMATION SUPPRESSION DEMANDE ===================== -->
    <div v-if="showDeleteRequestModal" class="modal-overlay" @click.self="closeDeleteRequestModal">
      <div class="modal-content modal-sm modal-delete">
        <div class="modal-header delete-header">
          <h2><font-awesome-icon icon="exclamation-triangle" class="delete-icon" /> Confirmer la suppression</h2>
          <button class="modal-close" @click="closeDeleteRequestModal">×</button>
        </div>

        <div class="modal-body">
          <p>
            Êtes-vous sûr de vouloir supprimer la demande de
            <strong>{{ deleteRequestTarget?.nom || deleteRequestTarget?.name }}</strong> ?
          </p>
          <p class="delete-warning">Cette action est irréversible.</p>

          <div class="modal-actions">
            <button type="button" class="btn-secondary" @click="closeDeleteRequestModal">Annuler</button>
            <button type="button" class="btn-danger" @click="confirmDeleteRequest">Supprimer</button>
          </div>
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

    <!-- ===================== FOOTER ===================== -->
    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <p>© 2026 AZK Expertise. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import {
  auth,
  signOut,
  db,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  onAuthStateChanged,
  createUserAsAdmin,   // ✅ pour créer les users automatiquement
  setDoc               // ✅ pour sauvegarder dans Firestore
} from '@/firebase'

const router = useRouter()

// ===== ÉTAT =====
const user = ref({ name: '', email: '' })
const contactRequests = ref([])
const admins = ref([])

const showUsersModal = ref(false)
const showEditModal = ref(false)
const showDeleteModal = ref(false)
const showDeleteRequestModal = ref(false)

const editMode = ref('add')
const editIndex = ref(-1)
const deleteTarget = ref(null)
const deleteIndex = ref(-1)
const deleteRequestTarget = ref(null)
const deleteRequestIndex = ref(-1)

const editForm = ref({
  nom_complet: '',
  email: '',
  mot_de_passe: ''
})

// ===== TOAST SYSTEM =====
const toasts = ref([])

const addToast = (type, title, message, duration = 4000) => {
  const toast = { type, title, message, removing: false }
  toasts.value.push(toast)
  setTimeout(() => removeToast(toasts.value.length - 1), duration)
  return toast
}

const removeToast = (index) => {
  if (index >= 0 && index < toasts.value.length) {
    toasts.value[index].removing = true
    setTimeout(() => toasts.value.splice(index, 1), 300)
  }
}

// ===== CHARGEMENT DEMANDES =====
const loadRequests = async () => {
  if (!auth.currentUser) {
    console.warn('⚠️ loadRequests ignoré : pas authentifié')
    return
  }

  try {
    const querySnapshot = await getDocs(collection(db, 'demandes'))
    contactRequests.value = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }))
    console.log('📋 Demandes chargées :', contactRequests.value.length)
  } catch (error) {
    console.error('❌ Erreur chargement demandes:', error.code, error.message)
    if (error.code === 'permission-denied') {
      addToast('error', '🔒 Accès refusé', 'Vérifiez les règles Firestore')
    } else {
      addToast('error', '❌ Erreur', 'Impossible de charger les demandes')
    }
  }
}

// ===== CHARGEMENT ADMINS (depuis Firestore) =====
const loadAdmins = async () => {
  if (!auth.currentUser) return

  try {
    const snap = await getDocs(collection(db, 'admins'))
    admins.value = snap.docs.map(d => ({ id: d.id, ...d.data() }))
    console.log('👥 Admins chargés :', admins.value.length)
  } catch (error) {
    console.error('❌ Erreur chargement admins:', error.code, error.message)
    if (error.code === 'permission-denied') {
      addToast('error', '🔒 Accès refusé', 'Publiez les règles Firestore')
    }
  }
}

// ===== MODALS USERS =====
const openUsersModal = async () => {
  await loadAdmins()
  showUsersModal.value = true
}

const closeUsersModal = () => { showUsersModal.value = false }

const openAddModal = () => {
  editMode.value = 'add'
  editForm.value = { nom_complet: '', email: '', mot_de_passe: '' }
  showEditModal.value = true
}

const openEditModal = (admin, index) => {
  editMode.value = 'edit'
  editIndex.value = index
  editForm.value = {
    nom_complet: admin.nom_complet || admin.name || '',
    email: admin.email || '',
    mot_de_passe: ''
  }
  showEditModal.value = true
}

const closeEditModal = () => {
  showEditModal.value = false
  editForm.value = { nom_complet: '', email: '', mot_de_passe: '' }
  editIndex.value = -1
}

// ===== ✅ CRÉATION AUTOMATIQUE D'UN USER FIREBASE =====
const saveUser = async () => {
  // ===== AJOUT =====
  if (editMode.value === 'add') {
    if (!editForm.value.nom_complet || !editForm.value.email || !editForm.value.mot_de_passe) {
      addToast('error', '❌ Champs manquants', 'Tous les champs sont obligatoires')
      return
    }

    try {
      console.log('🆕 Création user Firebase :', editForm.value.email)

      // 1️⃣ Créer dans Firebase Authentication (sans déconnecter l'admin)
      const newUser = await createUserAsAdmin(
        editForm.value.email.trim(),
        editForm.value.mot_de_passe
      )

      console.log('✅ User Firebase créé — UID :', newUser.uid)

      // 2️⃣ Sauvegarder les infos dans Firestore (collection "admins")
      await setDoc(doc(db, 'admins', newUser.uid), {
        uid: newUser.uid,
        nom_complet: editForm.value.nom_complet,
        email: editForm.value.email.trim(),
        role: 'admin',
        createdAt: new Date().toISOString()
      })

      addToast('success', '✅ Utilisateur créé', `${editForm.value.nom_complet} peut se connecter maintenant`)

      await loadAdmins()
      closeEditModal()

    } catch (error) {
      console.error('❌ Erreur création user:', error)

      switch (error.code) {
        case 'auth/email-already-in-use':
          addToast('error', '❌ Email déjà utilisé', 'Cet email a déjà un compte Firebase')
          break
        case 'auth/weak-password':
          addToast('error', '❌ Mot de passe faible', 'Minimum 6 caractères requis')
          break
        case 'auth/invalid-email':
          addToast('error', '❌ Email invalide', 'Vérifiez le format')
          break
        default:
          addToast('error', '❌ Erreur', error.message || 'Création impossible')
      }
    }
    return
  }

  // ===== ÉDITION (nom uniquement, Firebase ne permet pas de changer l'email côté client) =====
  try {
    const admin = admins.value[editIndex.value]
    await updateDoc(doc(db, 'admins', admin.id), {
      nom_complet: editForm.value.nom_complet
    })
    addToast('success', '✅ Utilisateur modifié', 'Les informations ont été mises à jour')
    await loadAdmins()
    closeEditModal()
  } catch (error) {
    console.error(error)
    addToast('error', '❌ Erreur', 'Modification impossible')
  }
}

// ===== SUPPRESSION ADMIN =====
const openDeleteModal = (admin, index) => {
  deleteTarget.value = admin
  deleteIndex.value = index
  showDeleteModal.value = true
}

const closeDeleteModal = () => {
  showDeleteModal.value = false
  deleteTarget.value = null
  deleteIndex.value = -1
}

const confirmDeleteUser = async () => {
  const admin = admins.value[deleteIndex.value]
  if (!admin) return

  try {
    // ⚠️ Supprime uniquement le doc Firestore (pas le compte Firebase Auth)
    await deleteDoc(doc(db, 'admins', admin.id))
    addToast('success', '✅ Admin retiré', `${admin.nom_complet} a été retiré de la liste`)
    await loadAdmins()
  } catch (error) {
    console.error(error)
    addToast('error', '❌ Erreur', 'Suppression impossible')
  }
  closeDeleteModal()
}

// ===== GESTION DEMANDES =====
const validatingIndex = ref(-1)

const validerDemande = async (index) => {
  const request = contactRequests.value[index]
  validatingIndex.value = index

  try {
    await axios.post('/api/contact/validate', {
      name: request.nom || request.name,
      email: request.email
    })

    await updateDoc(doc(db, 'demandes', request.id), { statut: 'validée' })
    request.statut = 'validée'
    addToast('success', '✅ Demande validée', `Email envoyé à ${request.email}`)
  } catch (error) {
    console.error(error)
    addToast('error', '❌ Erreur', "L'envoi de l'email a échoué")
  } finally {
    validatingIndex.value = -1
  }
}

const openDeleteRequestModal = (index) => {
  deleteRequestTarget.value = contactRequests.value[index]
  deleteRequestIndex.value = index
  showDeleteRequestModal.value = true
}

const closeDeleteRequestModal = () => {
  showDeleteRequestModal.value = false
  deleteRequestTarget.value = null
  deleteRequestIndex.value = -1
}

const confirmDeleteRequest = async () => {
  if (deleteRequestIndex.value >= 0 && deleteRequestIndex.value < contactRequests.value.length) {
    const request = contactRequests.value[deleteRequestIndex.value]
    try {
      await deleteDoc(doc(db, 'demandes', request.id))
      contactRequests.value.splice(deleteRequestIndex.value, 1)
      addToast('success', '✅ Demande supprimée', `La demande de ${request.nom || request.name} a été supprimée`)
    } catch (error) {
      console.error(error)
      addToast('error', '❌ Erreur', 'Impossible de supprimer la demande')
    }
  }
  closeDeleteRequestModal()
}

// ===== LOGOUT =====
const handleLogout = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Logout error:', error)
  } finally {
    localStorage.removeItem('auth_token')
    localStorage.removeItem('user')
    localStorage.removeItem('rememberMe')
    router.push('/')
  }
}

// ===== LIFECYCLE =====
onMounted(() => {
  onAuthStateChanged(auth, (firebaseUser) => {
    if (!firebaseUser) {
      console.warn('⚠️ Pas connecté → /connexion')
      localStorage.removeItem('user')
      router.push('/connexion')
      return
    }

    console.log('✅ Firebase Auth prêt — UID :', firebaseUser.uid)
    user.value = { name: firebaseUser.email, email: firebaseUser.email }

    loadRequests()
    loadAdmins()
  })
})
</script>

<style scoped>
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

/* HEADER */
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
}

.nav a:hover {
  color: #C6A15B;
}

.logout-btn {
  background: #C6A15B;
  color: #0a2a4a;
  border: none;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.logout-btn:hover {
  background: #D4AF37;
  transform: translateY(-2px);
}

/* ADMIN SECTION */
.admin-section {
  background: #f8faff;
  padding: 30px 0 60px;
  min-height: 76vh;
}

.welcome-card {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
  border: 1px solid rgba(198, 161, 91, 0.15);
}

.welcome-card h1 {
  color: #0a2a4a;
  font-size: 2.5rem;
  font-family: Georgia, serif;
  margin-bottom: 10px;
}

.welcome-card p {
  color: #5B7B9A;
  font-size: 1.1rem;
}

.admin-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.1);
}

.stat-icon {
  width: 70px;
  height: 70px;
  background: rgba(198, 161, 91, 0.12);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #C6A15B;
}

.stat-content h3 {
  color: #5B7B9A;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 8px;
}

.stat-number {
  font-size: 2.2rem;
  color: #0a2a4a;
  font-weight: 800;
  font-family: Georgia, serif;
}

/* CONTACT REQUESTS */
.contact-requests-section {
  margin-bottom: 50px;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);
}

.contact-requests-section h2 {
  color: #0a2a4a;
  font-size: 2rem;
  font-family: Georgia, serif;
  margin-bottom: 0;
}

.btn-refresh {
  background: #e8edf2;
  border: none;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0a2a4a;
  transition: background 0.3s;
}

.btn-refresh:hover {
  background: #d5dce4;
}

.empty-state {
  text-align: center;
  color: #5B7B9A;
  padding: 40px;
  font-size: 1.1rem;
}

.requests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.request-card {
  background: #f8faff;
  border-radius: 16px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(35, 23, 2, 0.15);
  transition: border-color 0.3s;
}

.request-card.request-validated {
  border-color: #1a3a5a;
  background: #f0faf4;
}

.request-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.request-header h3 {
  color: #0a2a4a;
  font-size: 1.2rem;
  font-family: Georgia, serif;
  margin: 0;
}

.request-date {
  color: #5B7B9A;
  font-size: 0.85rem;
}

.request-details {
  margin-bottom: 20px;
}

.request-details p {
  color: #3d4f5e;
  margin-bottom: 8px;
  font-size: 0.95rem;
  word-break: break-word;
}

.request-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* ===== BOUTONS THEME ===== */
.btn-valider {
  background: #1a3a5a;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-valider:hover:not(:disabled) {
  background: #0a2a4a;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}

.btn-valider:disabled {
  background: #0a2a4a;
  cursor: default;
  opacity: 0.7;
}

.delete-btn {
  background: #c52d1c;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.delete-btn:hover {
  background: #c0392b;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
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
  padding: 16px 20px 16px 20px;
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

/* ===== MODALS ===== */
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
  max-width: 700px;
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
  max-width: 570px;
}

.modal-delete .modal-content {
  border-top: 4px solid #e74c3c;
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
}

.delete-header h2 {
  color: #e74c3c;
}

.delete-icon {
  margin-right: 10px;
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
  font-size: 1rem;
  margin-bottom: 20px;
}

/* Users List */
.users-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  background: #f8faff;
  border-radius: 12px;
  border: 1px solid #e0e6ed;
  transition: border-color 0.3s;
}

.user-item:hover {
  border-color: #C6A15B;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 14px;
}

.user-avatar {
  font-size: 2.2rem;
  color: #C6A15B;
}

.avatar-icon {
  width: 44px;
  height: 44px;
}

.user-details h4 {
  color: #0a2a4a;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.user-details p {
  color: #5B7B9A;
  font-size: 0.9rem;
  margin: 0;
}

.user-actions {
  display: flex;
  gap: 8px;
}

.action-icon {
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.action-icon.edit {
  background: rgba(198, 161, 91, 0.15);
  color: #C6A15B;
}

.action-icon.edit:hover {
  background: #C6A15B;
  color: white;
  transform: scale(1.1);
}

.action-icon.delete {
  background: rgba(231, 76, 60, 0.12);
  color: #e74c3c;
}

.action-icon.delete:hover {
  background: #e74c3c;
  color: white;
  transform: scale(1.1);
}

.add-user-section {
  border-top: 1px solid #e0e6ed;
  padding-top: 20px;
}

.add-user-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: none;
  border: 2px dashed #C6A15B;
  color: #C6A15B;
  padding: 14px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  width: 100%;
}

.add-user-btn:hover {
  background: rgba(198, 161, 91, 0.08);
  transform: translateY(-2px);
}

/* FORM */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  color: #0a2a4a;
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-group input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e6ed;
  border-radius: 10px;
  font-size: 0.95rem;
  transition: border-color 0.3s;
  background: #fafcff;
}

.form-group input:focus {
  outline: none;
  border-color: #C6A15B;
  box-shadow: 0 0 0 3px rgba(198, 161, 91, 0.15);
}

.form-group small {
  display: block;
  color: #8a9aa8;
  font-size: 0.8rem;
  margin-top: 4px;
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

.btn-danger {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 28px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-danger:hover {
  background: #c0392b;
  transform: translateY(-2px);
}

.delete-warning {
  color: #e74c3c;
  font-weight: 600;
  margin-top: 8px;
}

/* FOOTER */
.footer {
  background: #0a2a4a;
  color: white;
  padding: 30px 0;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.9rem;
  opacity: 0.7;
}

.footer-bottom p {
  margin: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .header-inner {
    flex-direction: column;
    align-items: stretch;
  }

  .logo-main {
    flex-direction: column;
    align-items: center;
  }

  .nav {
    justify-content: center;
  }

  .welcome-card h1 {
    font-size: 1.8rem;
  }

  .requests-grid {
    grid-template-columns: 1fr;
  }

  .modal-content {
    max-width: 95%;
    margin: 20px;
  }

  .modal-header h2 {
    font-size: 1.2rem;
  }

  .modal-body {
    padding: 20px;
  }

  .user-item {
    flex-wrap: wrap;
    gap: 12px;
  }

  .user-actions {
    margin-left: auto;
  }

  .admin-stats {
    grid-template-columns: 1fr;
  }

  .modal-sm {
    max-width: 95%;
  }
}

@media (max-width: 480px) {
  .toast-container {
    top: 20px;
    right: 15px;
    left: 15px;
    max-width: 100%;
    width: auto;
  }
}

.gerer {
  background-color: #0a2a4a;
  color: #C6A15B;
  height: 80px;
  width: 300px;
  border-radius: 5px;
  font-size: 18px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: 900;
}
</style>