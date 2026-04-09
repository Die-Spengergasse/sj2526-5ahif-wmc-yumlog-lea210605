# YumLog WebApp 🍳

Eine Full-Stack Vue.js 3 + Vite Web-Anwendung mit **Vercel Deployment**, **Docker Containerisierung** und **GitHub Actions CI/CD**.

## 🌐 Live Demo

- **Production:** [yumlog.vercel.app](https://yumlog.vercel.app)
- **GitHub:** [yumlog.webapp](https://github.com/yourusername/yumlog.webapp)

---

## 📋 Inhaltsverzeichnis

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Entwicklung](#entwicklung)
- [Deployment](#deployment)
- [Docker](#docker)
- [CI/CD](#cicd)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

- ✅ **Vue 3** mit Composition API
- ✅ **Vite** für schnelle Builds
- ✅ **Vue Router** für Navigation
- ✅ **Pinia** für State Management
- ✅ **Bootstrap 5** für UI
- ✅ **Firebase** für Authentication (Demo Mode)
- ✅ **Cypress** für E2E Tests
- ✅ **Responsive Design** (Mobile-First)

---

## 🛠 Tech Stack

| Layer | Technologie | Version |
|-------|------------|---------|
| **Frontend** | Vue 3 | ^3.4.29 |
| **Build** | Vite | ^7.1.4 |
| **Router** | Vue Router | ^4.3.3 |
| **State** | Pinia | ^3.0.1 |
| **UI Framework** | Bootstrap | ^5.3.3 |
| **Testing** | Cypress | ^15.1.0 |
| **Runtime** | Node.js | 20+ |
| **Hosting** | Vercel | Serverless |
| **Containerization** | Docker | Multi-Stage |
| **CI/CD** | GitHub Actions | Automated |

---

## 📦 Project Setup

### Voraussetzungen

- **Node.js:** 20 oder höher
- **npm:** 9 oder höher
- **Git:** für Version Control

### Abhängigkeiten installieren

```sh
npm install
```

### Umgebungsvariablen konfigurieren

1. Datei `.env.example` kopieren:
   ```sh
   cp .env.example .env
   ```

2. Firebase Credentials einfügen:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   # ... weitere Variablen
   ```

---

## 🚀 Entwicklung

### Entwicklungsserver starten

```sh
npm run dev
```

Die App läuft dann auf `http://localhost:5173`

**Features:**
- Hot Module Replacement (HMR) aktiviert
- Auto-Reload bei Dateienänderung
- Vite Dev Server Dashboard verfügbar

---

## 🏗 Build & Production

### Build für Production

```sh
npm run build
```

**Output:** `dist/` Verzeichnis mit optimierten Dateien

### Optimierungen

- ✅ Tree-Shaking für unused code
- ✅ Code Splitting (vendor, bootstrap chunks)
- ✅ CSS Minification
- ✅ JavaScript Minification (esbuild)
- ✅ Asset Optimization

### Preview vor Deployment

```sh
npm run preview
```

Öffne `http://localhost:4173` im Browser

---

## 🌍 Deployment

Für detaillierte Deployment-Anweisungen siehe [DEPLOYMENT.md](./DEPLOYMENT.md)

### Vercel Deployment (empfohlen)

1. **Vercel Account erstellen:** [vercel.com/signup](https://vercel.com/signup)

2. **GitHub Repo verbinden:**
   ```bash
   npm install -g vercel
   vercel login
   vercel link
   ```

3. **Umgebungsvariablen setzen:**
   - Vercel Dashboard → Project Settings → Environment Variables
   - Firebase Credentials einfügen

4. **Deployen:**
   ```bash
   git push origin main  # Automatisch deployed
   # oder
   vercel deploy --prod
   ```

**Vorteile:**
- Kostenloses Hosting
- Automatisches Deployment bei Git Push
- Preview Deployments für PRs
- CDN in 35+ Regionen
- Serverless Functions Support

---

## �� Docker

Die App ist containerisiert und kann mit Docker deployed werden.

### Docker Image lokal bauen

```bash
# Build
docker build -t yumlog-webapp:latest .

# Run
docker run -p 8080:80 yumlog-webapp:latest

# App öffnen
open http://localhost:8080
```

Siehe [Dockerfile](./Dockerfile) für Details.

---

## 🔄 CI/CD

GitHub Actions Workflow automatisiert alle Prozesse:

### Pipeline Jobs

1. **Test** (immer)
   - Abhängigkeiten installieren
   - Build ausführen
   - E2E Tests mit Cypress laufen

2. **Docker Push** (nur main)
   - Docker Image bauen
   - Zu GitHub Container Registry pushen
   - Tags: `latest`, `git-sha`

3. **Vercel Deploy** (nur main)
   - Zu Vercel deployen (Production)
   - Automatisch bei Push auf main

### Secrets konfigurieren

In Repository Settings → **Secrets and variables** → **Actions**:

```
# Firebase
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...

# Vercel
VERCEL_TOKEN=...
```

**Token generieren:**
- Vercel: [vercel.com/account/settings/tokens](https://vercel.com/account/settings/tokens)

### Workflow Status überprüfen

1. GitHub → Repository → **Actions** Tab
2. Oder mit GitHub CLI: `gh workflow view ci-cd`

---

## 🧪 Testing

### E2E Tests mit Cypress

```sh
# UI Mode (interaktiv)
npm run cypress:open

# Headless Mode (CI/CD)
npm run cypress:run
```

**Test Dateien:** `cypress/e2e/`

---

## 🎓 Empfohlene IDE Setup

- **IDE:** [VSCode](https://code.visualstudio.com/)
- **Extension:** [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- **Andere:** Disable Vetur wenn installed

---

## 📚 Dokumentation

- [DEPLOYMENT.md](./DEPLOYMENT.md) - Vercel, Docker, GitHub Actions Setup
- [Vite Docs](https://vitejs.dev/)
- [Vue 3 Docs](https://vuejs.org/)
- [Vue Router Docs](https://router.vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)

---

## 🐛 Troubleshooting

### Problem: Port 5173 schon in Verwendung

```bash
npm run dev -- --port 3000
```

### Problem: Module nicht gefunden

```bash
rm -rf node_modules package-lock.json
npm install
```

Mehr Probleme? Siehe [DEPLOYMENT.md](./DEPLOYMENT.md#troubleshooting)

---

## 📝 Lizenz

MIT License

---

**Zuletzt aktualisiert:** April 2026
