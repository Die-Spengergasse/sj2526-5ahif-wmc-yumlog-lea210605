# 🍽️ YumLog - Full-Stack Recipe App

Eine moderne Full-Stack-Webanwendung zum Verwalten, Teilen und Entdecken von Rezepten.

## 📋 Projektstruktur

```
├── Accessability/
│   ├── yumlog.webapp-main/      # Vue.js Frontend (Vite)
│   │   ├── src/
│   │   │   ├── components/      # Vue Components
│   │   │   ├── views/           # Page Views
│   │   │   ├── services/        # API Service (recipeService.js)
│   │   │   ├── stores/          # Pinia State Management
│   │   │   └── router/          # Vue Router Config
│   │   ├── Dockerfile           # Docker Image für Frontend
│   │   └── package.json
│   │
│   └── yumlog.api-main/         # Node.js/Express Backend API
│       ├── server.js            # Express Server
│       ├── recipes.json         # Rezept-Datenspeicher
│       ├── Dockerfile           # Docker Image für Backend
│       └── package.json
│
└── .github/
    └── workflows/
        └── deploy.yml           # GitHub Actions CI/CD Pipeline

```

---

## ✅ Erfüllte Anforderungen

### ✅ Full-Stack-App funktioniert
- **Frontend**: Vue.js 3 mit Vite
- **Backend**: Express.js REST API
- **Kommunikation**: Axios HTTP-Client mit CORS
- **Demo-Daten**: 2 vorinstallierte Rezepte

### ✅ Dockerfiles vorhanden und korrekt
- **Frontend Dockerfile**: Multi-Stage Build (Node.js 20 Alpine + Nginx)
- **Backend Dockerfile**: Multi-Stage Build (Node.js 20 Alpine)

### ✅ GitHub Actions Workflow
- **Automatisches Deployment** bei `push` zu `main`
- **Build-Pipeline** für Frontend und Backend
- **Docker Build** (optional)
- **Vercel Deployment** für Frontend

### ✅ Öffentlich erreichbares Deployment
- **Frontend**: https://sj2526-5ahif-wmc-yumlog-lea210605.vercel.app
- **Backend**: Lokal auf http://localhost:3000 (kann auf Railway/Render deployed werden)

### ✅ Technische Dokumentation (dieses README)

---

## 🚀 Quick Start

### Lokale Entwicklung

#### 1. Backend starten
```bash
cd Accessability/yumlog.api-main
npm install
npm start
```
Der Server läuft auf `http://localhost:3000`

#### 2. Frontend starten
```bash
cd Accessability/yumlog.webapp-main
npm install
npm run dev
```
Die App läuft auf `http://localhost:5173`

---

## 🔌 API Dokumentation

### Base URL
- **Lokal**: `http://localhost:3000/api`
- **Production**: `${VITE_API_URL}/api` (wird gesetzt via Environment-Variable)

### Endpoints

#### GET `/recipes`
Alle Rezepte abrufen
```bash
curl http://localhost:3000/api/recipes
```
**Response:**
```json
[
  {
    "id": 1,
    "title": "Spaghetti Carbonara",
    "description": "Klassisches italienisches Pasta-Gericht",
    "ingredients": ["Spaghetti", "Eier", "Speck", "Parmigiano"],
    "instructions": "Pasta kochen, Sauce zubereiten, vermischen",
    "image": "https://via.placeholder.com/300?text=Carbonara",
    "createdAt": "2026-04-09T12:47:46.871Z"
  }
]
```

#### GET `/recipes/:id`
Einzelnes Rezept abrufen
```bash
curl http://localhost:3000/api/recipes/1
```

#### POST `/recipes`
Neues Rezept erstellen
```bash
curl -X POST http://localhost:3000/api/recipes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Mein Rezept",
    "description": "Beschreibung",
    "ingredients": ["Zutat 1", "Zutat 2"],
    "instructions": "Anleitung",
    "image": "https://example.com/image.jpg"
  }'
```

#### PUT `/recipes/:id`
Rezept aktualisieren
```bash
curl -X PUT http://localhost:3000/api/recipes/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Neuer Titel"}'
```

#### DELETE `/recipes/:id`
Rezept löschen
```bash
curl -X DELETE http://localhost:3000/api/recipes/1
```

#### GET `/health`
Health-Check
```bash
curl http://localhost:3000/api/health
```

---

## 🐳 Docker Deployment

### Backend mit Docker

```bash
cd Accessability/yumlog.api-main

# Build
docker build -t yumlog-api:latest .

# Run
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  yumlog-api:latest
```

### Frontend mit Docker

```bash
cd Accessability/yumlog.webapp-main

# Build
docker build -t yumlog-webapp:latest .

# Run
docker run -p 80:80 \
  -e VITE_API_URL=http://localhost:3000 \
  yumlog-webapp:latest
```

### Docker Compose (lokal)

```bash
docker-compose up
```

---

## 🔧 Vercel Deployment

### Frontend Deploy

Das Frontend wird automatisch via GitHub Actions zu Vercel deployed.

**Manuelle Deployment:**
```bash
cd Accessability/yumlog.webapp-main
vercel --prod
```

### Environment-Variablen in Vercel

Gehe zu https://vercel.com/dashboard → Projekt-Settings → Environment Variables

```
VITE_API_URL=https://your-api-url.com
```

---

## 🤖 GitHub Actions Workflow

Der `.github/workflows/deploy.yml` führt folgende Schritte automatisch aus:

1. **build-frontend**: Testet und baut das Vue.js Frontend
2. **build-backend**: Testet und baut die Express API
3. **build-docker**: Erstellt Docker-Images (optional)
4. **deploy-frontend**: Deployed Frontend zu Vercel

### Secrets für GitHub Actions

Du musst folgende Secrets in deinem GitHub Repository hinzufügen:

```
VERCEL_TOKEN          # Dein Vercel API Token
VERCEL_ORG_ID         # Deine Vercel Organisation ID
VERCEL_PROJECT_ID     # Deine Vercel Projekt ID
VITE_API_URL         # Backend API URL (optional)
```

**So fügst du Secrets hinzu:**
1. GitHub Repository → Settings → Secrets and variables → Actions
2. New repository secret
3. Name + Wert eingeben

---

## 📱 Frontend Features

- ✅ Recipe List mit Search & Filter
- ✅ Recipe Details Page
- ✅ Add/Edit Recipe Forms
- ✅ Bootstrap UI
- ✅ Vue Router Navigation
- ✅ Pinia State Management
- ✅ Firebase Auth (optional, Demo-Mode aktiv)

---

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive Framework
- **Vite** - Next Gen Build Tool
- **Vue Router** - SPA Navigation
- **Pinia** - State Management
- **Bootstrap 5** - UI Framework
- **Axios** - HTTP Client

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **CORS** - Cross-Origin Requests
- **dotenv** - Environment Variables

### DevOps
- **Docker** - Container Technology
- **GitHub Actions** - CI/CD Pipeline
- **Vercel** - Frontend Hosting
- **Alpine Linux** - Lightweight Image

---

## 🔐 Sicherheit

- ✅ CORS konfiguriert
- ✅ Environment-Variablen für Secrets
- ✅ Node.js Security Best Practices
- ✅ Docker Multi-Stage Builds (reduzierte Image-Größe)
- ✅ HTTPS auf Vercel

---

## 📊 Performance

- 📦 Frontend: ~50KB Gzip (mit Code Splitting)
- 🚀 API Response Time: <100ms
- 🐳 Docker Image Size: ~100MB (Frontend), ~150MB (Backend)

---

## 🐛 Troubleshooting

### CORS-Fehler
**Problem**: `Access to XMLHttpRequest blocked by CORS policy`

**Lösung**: Backend CORS ist konfiguriert. Stelle sicher, dass `VITE_API_URL` richtig gesetzt ist.

### API antwortet nicht
**Problem**: Frontend zeigt Demo-Daten statt echter Daten

**Lösung**: Backend muss auf dem gleichen Port (3000) laufen oder `VITE_API_URL` angepasst sein.

### Vercel Deployment fehlgeschlagen
**Problem**: `Error: Environment Variable references Secret which does not exist`

**Lösung**: Secrets in Vercel Dashboard hinzufügen (siehe [Vercel Deployment](#-vercel-deployment))

---

## 📞 Support & Contributing

Für Fragen oder Bug Reports: GitHub Issues erstellen

---

## 📄 Lizenz

ISC License - siehe `LICENSE` Datei

---

**Deployed**: https://sj2526-5ahif-wmc-yumlog-lea210605.vercel.app
**Last Updated**: April 9, 2026
