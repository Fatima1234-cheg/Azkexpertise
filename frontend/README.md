# 🚀 Projet Tlexpertise - Laravel 13 + Vue.js 3 (SPA)

Ce projet est une application web full-stack utilisant **Laravel 13** (API REST) pour le backend, **MySQL** pour la base de données, et **Vue.js 3** avec **Vite** pour le frontend (Single Page Application).

## 📋 Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé les outils suivants sur votre machine :

- **PHP** >= 8.4 (ou 8.5) avec les extensions `pdo_mysql` et `openssl`
- **Composer** (gestionnaire de dépendances PHP)
- **Node.js** >= 22.0.0 et **npm** (ou yarn)
- **MySQL** (serveur local, ex: XAMPP, WAMP, MAMP, ou Docker)
- **Git** (optionnel, pour le versioning)

---

## 🛠️ Installation et Configuration

### 1. Cloner ou récupérer le projet

Si vous utilisez Git :
```bash
git clone [URL_DU_REPO]
cd Tlexpertise
```

Sinon, placez-vous simplement dans le dossier racine du projet.

---

### 2. Configuration du Backend (Laravel 13)

Ouvrez un terminal et naviguez dans le dossier backend :

```bash
cd backend
```

#### a. Installer les dépendances PHP
```bash
composer install
```

#### b. Configurer les variables d'environnement
Copiez le fichier d'exemple et créez votre `.env` :
```bash
cp .env.example .env
```

**Modifiez les informations de connexion à la base de données** dans le fichier `.env` comme suit (adaptez si vos identifiants diffèrent) :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3307
DB_DATABASE=TLexpertise
DB_USERNAME=root
DB_PASSWORD=
```

#### c. Générer la clé d'application Laravel
```bash
php artisan key:generate
```

#### d. Créer la base de données (si elle n'existe pas)
Connectez-vous à MySQL (via phpMyAdmin ou CLI) et exécutez :
```sql
CREATE DATABASE IF NOT EXISTS TLexpertise CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### e. Lancer les migrations
```bash
php artisan migrate
```
*Vous verrez les tables `users`, `cache`, `jobs`, etc. se créer dans votre base.*

#### f. Lancer le serveur backend
```bash
php artisan serve
```
Le serveur sera accessible sur **http://localhost:8000**.

---

### 3. Configuration du Frontend (Vue.js 3)

Ouvrez un **nouveau terminal** (laissez le backend tourner) et naviguez dans le dossier frontend :

```bash
cd frontend
```

#### a. Installer les dépendances Node.js
```bash
npm install
```

#### b. Installer Axios (pour les appels API)
```bash
npm install axios
```

#### c. Configurer le Proxy Vite (communication avec Laravel)
Créez ou remplacez le fichier `vite.config.js` à la racine du dossier `frontend` avec :

```javascript
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Redirige vers Laravel
        changeOrigin: true,
      }
    }
  }
})
```

#### d. Lancer le serveur frontend
```bash
npm run dev
```
Le serveur sera accessible sur **http://localhost:5173**.

---

## ▶️ Lancer l'application en développement

Pour que l'application fonctionne, **les deux serveurs doivent tourner en parallèle** (dans deux terminaux séparés) :

| Service | Commande | Port |
| :--- | :--- | :--- |
| **Backend (Laravel)** | `cd backend && php artisan serve` | http://localhost:8000 |
| **Frontend (Vue)** | `cd frontend && npm run dev` | http://localhost:5173 |

Ouvrez votre navigateur et allez sur **http://localhost:5173** pour voir l'interface Vue.js. 
Tous les appels axios vers `/api/...` seront automatiquement redirigés vers votre backend Laravel.

---

## 📦 Commandes utiles

### Backend (Laravel)
- Créer un modèle avec migration :  
  `php artisan make:model NomModele -m`
- Créer un contrôleur API :  
  `php artisan make:controller Api/NomController --api`

### Frontend (Vue)
- Installer une nouvelle librairie (ex: Vue Router) :  
  `npm install [nom-librairie]`
- Compiler les assets pour la production :  
  `npm run build`
- Vérifier le format du code (ESLint + Prettier) :  
  `npm run lint`

---

## 🗂️ Architecture du projet

```
Tlexpertise/
├── backend/                # API Laravel 13
│   ├── app/               # Modèles, Contrôleurs, etc.
│   ├── database/          # Migrations et seeders
│   ├── routes/api.php     # Définition des endpoints
│   └── .env               # Configuration (base de données, etc.)
│
└── frontend/              # Interface Vue.js 3
    ├── src/               # Composants, views, store (Pinia)
    ├── public/            # Fichiers statiques
    ├── vite.config.js     # Proxy pour appels API
    └── package.json       # Dépendances frontend
```

---

## ⚙️ Technologies utilisées

- **[Laravel 13](https://laravel.com/)** - Framework PHP
- **[MySQL](https://www.mysql.com/)** - Système de gestion de base de données relationnelle
- **[Vue.js 3](https://vuejs.org/)** - Framework JavaScript progressif
- **[Vite](https://vitejs.dev/)** - Bundler et serveur de développement ultra-rapide
- **[Pinia](https://pinia.vuejs.org/)** - Gestion d'état pour Vue.js
- **[Axios](https://axios-http.com/)** - Client HTTP pour les requêtes API

---

## ❓ Dépannage

- **Erreur "Connection refused" sur MySQL** : Vérifiez que votre serveur MySQL est bien démarré et que le port (`3307` ou `3306`) dans le `.env` correspond à votre configuration.
- **Erreur 404 sur /api/** : Assurez-vous que le backend Laravel est bien lancé (`php artisan serve`) et que votre proxy dans `vite.config.js` pointe sur le bon port.
- **NPM installe lentement** : Vous pouvez utiliser le mirroir chinois ou taper `npm config set registry https://registry.npmmirror.com`.

---

*Bonne programmation ! 🚀*