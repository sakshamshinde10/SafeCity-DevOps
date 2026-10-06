# SafeCity — Emergency Information Platform 🛡️

A clean, modern, and lightweight React web application created for a **College DevOps Mini Project**.

SafeCity provides a simple, accessible public safety information portal. The project is intentionally focused on frontend essentials with zero complex backend dependencies, making it optimal for CI/CD automation, containerization, and orchestration demonstrations.

---

## 🚀 DevOps Pipeline Overview

This repository is designed to be the foundation for:

```
GitHub (Code Repository)
   ⬇️
Jenkins (CI/CD Pipeline Automation)
   ⬇️
Docker (Containerization & Image Build)
   ⬇️
Kubernetes (Container Orchestration & Deployment)
```

---

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (Client-side routing)
- **Styling:** Vanilla CSS (Responsive, Clean, Safety-themed)
- **Language:** JavaScript (ES Modules)

---

## 📂 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation header with active route styling
│   │   └── Footer.jsx        # Standardized footer
│   ├── pages/
│   │   ├── Home.jsx          # Hero, Emergency Services cards, Emergency Steps
│   │   └── Emergency.jsx     # Emergency contact numbers, helpline cards, disclaimer
│   ├── App.jsx               # App routing configuration
│   ├── main.jsx              # React DOM entry point with BrowserRouter
│   └── index.css             # Design system and clean responsive styles
├── index.html                # HTML entry point with metadata and fonts
├── package.json              # Project scripts and dependencies
├── vite.config.js            # Vite configuration
└── README.md
```

---

## 💻 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
```
Generates a lightweight, static production build in the `dist/` directory, perfect for serving with Nginx inside Docker.

---

## 📄 Pages Included

1. **Home (`/`)**:
   - Navigation Bar (Brand logo + links)
   - Hero Section ("Your Safety. Our Priority.")
   - Action Button ("View Emergency Services")
   - Core Services Preview (Police, Ambulance, Fire Brigade)
   - "What To Do In An Emergency" 3-step guide
   - Footer

2. **Emergency Services (`/emergency`)**:
   - Page Heading & Subtitle
   - 4 Essential Services Cards:
     - **Police:** Contact 100
     - **Ambulance:** Contact 108
     - **Fire Brigade:** Contact 101
     - **Cyber Crime:** Helpline 1930
   - College Project Demonstration Disclaimer Box
   - "Back to Home" navigation button
