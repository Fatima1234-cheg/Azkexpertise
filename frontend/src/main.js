import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ===================== ICÔNES SOLID =====================
import {
  // --- Expertise Judiciaire ---
  faCarCrash,
  faIndustry,
  faBalanceScale,
  faFileSignature,

  // --- Audit & Assistance ---
  faClipboardCheck,
  faHeadset,
  faChalkboardTeacher,
  faBuilding,
  faTools,
  faChartPie,
  faLightbulb,

  // --- Recherche & Développement ---
  faMicroscope,
  faFlask,
  faGlobe,
  faRobot,
  faDatabase,
  faCloud,
  faShieldAlt,
  faBrain,
  faCubes,
  faBolt,
  faFileAlt,
  faGraduationCap,

  // --- Partenariats & Conventions ---
  faUserTie,
  faNetworkWired,

  // --- Admin ---
  faUsersCog,
  faUserCog,
  faUserCircle,
  faUserEdit,
  faPen,
  faTrash,
  faTimes,
  faExclamationTriangle,
  faCog,
  faUsers,

  // --- Admin (supplément) ---
  faSyncAlt,
  faPlusCircle,

  // --- Contact & Formulaires ---
  faPaperPlane,
  faLock,
  faEye,
  faEyeSlash,

  // --- Icônes communes ---
  faClipboardList,
  faCheckCircle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChartLine,
  faHandshake
} from '@fortawesome/free-solid-svg-icons'

// ===================== ICÔNES BRANDS =====================
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

// ===================== ENREGISTREMENT DANS LA BIBLIOTHÈQUE =====================
library.add(
  // Expertise Judiciaire
  faCarCrash,
  faIndustry,
  faBalanceScale,
  faFileSignature,

  // Audit & Assistance
  faClipboardCheck,
  faHeadset,
  faChalkboardTeacher,
  faBuilding,
  faTools,
  faChartPie,
  faLightbulb,

  // R&D
  faMicroscope,
  faFlask,
  faGlobe,
  faRobot,
  faDatabase,
  faCloud,
  faShieldAlt,
  faBrain,
  faCubes,
  faBolt,
  faFileAlt,
  faGraduationCap,

  // Partenariats
  faUserTie,
  faNetworkWired,

  // Admin
  faUsersCog,
  faUserCog,
  faUserCircle,
  faUserEdit,
  faPen,
  faTrash,
  faTimes,
  faExclamationTriangle,
  faCog,
  faUsers,
  faSyncAlt,
  faPlusCircle,

  // Contact
  faPaperPlane,
  faLock,
  faEye,
  faEyeSlash,

  // Communes
  faClipboardList,
  faCheckCircle,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faChartLine,
  faHandshake,

  // Brands (réseaux sociaux)
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faWhatsapp
)

// ===================== APPLICATION =====================
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(i18n)
app.mount('#app')