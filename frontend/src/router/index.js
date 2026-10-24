import { createRouter, createWebHistory } from 'vue-router'

// Import des pages
import PageAccueil from '../views/PageAccueil.vue'
import QuiNousSommes from '../views/QuiNousSommes.vue'
import NousContacter from '../views/NousContacter.vue'
import PageLogin from '../views/PageLogin.vue'
import EspaceAdmin from '../views/EspaceAdmin.vue'

// Import des pages de services
import ExpertiseJudiciaire from '../views/ExpertiseJudiciaire.vue'
import AuditAssistanceTechnique from '../views/AuditAssistanceTechnique.vue'
import PartenariatsConventions from '../views/PartenariatsConventions.vue'
import RechercheDeveloppement from '../views/RechercheDeveloppement.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: PageAccueil
  },
  {
    path: '/qui-sommes-nous',
    name: 'QuiSommesNous',
    component: QuiNousSommes
  },
  {
    path: '/contact',
    name: 'NousContacter',
    component: NousContacter
  },
  // Pages de services
  {
    path: '/expertise-judiciaire',
    name: 'ExpertiseJudiciaire',
    component: ExpertiseJudiciaire
  },
  {
    path: '/audit-assistance-technique',
    name: 'AuditAssistanceTechnique',
    component: AuditAssistanceTechnique
  },
  {
    path: '/recherche-developpement',
    name: 'RechercheDeveloppement',
    component: RechercheDeveloppement
  },
  {
    path: '/partenariats-conventions',
    name: 'PartenariatsConventions',
    component: PartenariatsConventions
  },
  // Authentification
  {
    path: '/connexion',
    name: 'PageLogin',
    component: PageLogin,
    meta: { guest: true } // accessible uniquement si NON connecté
  },
  {
    path: '/espace-admin',
    name: 'EspaceAdmin',
    component: EspaceAdmin,
    meta: { requiresAuth: true } // protégé
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ===== 🔒 NAVIGATION GUARD SIMPLIFIÉE =====
router.beforeEach((to, from, next) => {
  console.log('🛡️ Navigation guard activé!')
  console.log('📍 De:', from.path, '→ Vers:', to.path)
  
  // Vérifier si l'utilisateur est connecté via localStorage
  const storedUser = localStorage.getItem('user')
  const isAuthenticated = !!storedUser
  console.log('🔑 Stored user:', storedUser)
  console.log('✅ Is authenticated:', isAuthenticated)

  // Route nécessitant une authentification
  if (to.meta.requiresAuth && !isAuthenticated) {
    console.log('❌ Non autorisé! Redirection vers /connexion')
    return next('/connexion')
  }

  // Route réservée aux invités (page de connexion)
  if (to.meta.guest && isAuthenticated) {
    console.log('👤 Déjà connecté! Redirection vers /espace-admin')
    return next('/espace-admin')
  }

  // Tout est OK
  console.log('✅ Navigation autorisée!')
  next()
})

export default router
