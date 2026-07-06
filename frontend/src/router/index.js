import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '../views/PageAccueil.vue'
import QuiNousSommes from '../views/QuiNousSommes.vue'
import NousContacter from '../views/NousContacter.vue'
import PageLogin from '../views/PageLogin.vue'
import EspaceAdmin from '../views/EspaceAdmin.vue'
// Import des pages de services
import ExpertiseJudiciaire from '../views/ExpertiseJudiciaire.vue'
import AuditAssistanceTechnique from '../views/AuditAssistanceTechnique.vue'
// Vous pouvez ajouter les autres pages de services ici :
 import PartenariatsConventions from '../views/PartenariatsConventions.vue'
import RechercheDeveloppement from '../views/RechercheDeveloppement.vue'
// import EvaluationPatrimoine from '../views/EvaluationPatrimoine.vue'

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
  },{
  path: '/audit-assistance-technique',
  name: 'AuditAssistanceTechnique',
  component: AuditAssistanceTechnique
},{
  path: '/recherche-developpement',
  name: 'RechercheDeveloppement',
  component: RechercheDeveloppement
},
{
  path: '/partenariats-conventions',
  name: 'PartenariatsConventions',
  component: PartenariatsConventions
}, {
    path: '/connexion',
    name: 'PageLogin',
    component: PageLogin,
    meta: { guest: true } // accessible uniquement si non connecté
  },
  {
    path: '/espace-admin',
    name: 'EspaceAdmin',
    component: EspaceAdmin,
    meta: { requiresAuth: true }
  }
  // Vous pouvez ajouter d'autres routes ici :
  // {
  //   path: '/expertise-automobile',
  //   name: 'ExpertiseAutomobile',
  //   component: ExpertiseAutomobile
  // },
  // {
  //   path: '/expertise-industrielle',
  //   name: 'ExpertiseIndustrielle',
  //   component: ExpertiseIndustrielle
  // },
  // {
  //   path: '/evaluation-patrimoine',
  //   name: 'EvaluationPatrimoine',
  //   component: EvaluationPatrimoine
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation Guard
router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem('user')

  if (to.meta.requiresAuth && !isAuthenticated) {
    return '/connexion'
  } else if (to.meta.guest && isAuthenticated) {
    return '/espace-admin'
  } else {
    return true
  }
})

export default router