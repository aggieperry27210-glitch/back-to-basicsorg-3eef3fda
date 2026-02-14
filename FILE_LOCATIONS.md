# 📁 File Location Reference

## Quick Reference Table

| What You're Looking For | Location |
|------------------------|----------|
| **Home Page** | `src/pages/Home.jsx` |
| **Budget Game** | `src/pages/BudgetChallenge.jsx` |
| **Navigation Menu** | `src/config/navigation.config.js` |
| **Learning Pathways** | `src/data/pathways.js` |
| **Quiz Questions** | `src/data/ela.js` |
| **Achievement Badges** | `src/data/achievements.js` |
| **Educational Content** | `src/data/*.js` (all files) |
| **Page Components** | `src/pages/*.jsx` |
| **UI Components** | `src/components/ui/*.jsx` |
| **Main App** | `src/App.jsx` |
| **Layout** | `src/Layout.jsx` |
| **Styles** | `src/index.css`, `src/App.css` |
| **API Client** | `src/api/base44Client.js` |
| **Auth Logic** | `src/lib/AuthContext.jsx` |

## 🗂️ Full Directory Structure

```
back-to-basicsorg-3eef3fda/
├── src/
│   ├── pages/              # All page components
│   │   ├── Home.jsx
│   │   ├── Finance.jsx
│   │   ├── Politics.jsx
│   │   ├── Math.jsx
│   │   ├── ELA.jsx
│   │   ├── BudgetChallenge.jsx
│   │   ├── InvestmentSimulator.jsx
│   │   └── ... (20 total pages)
│   │
│   ├── config/             # Configuration files
│   │   └── navigation.config.js
│   │
│   ├── data/               # Educational content & data
│   │   ├── pathways.js
│   │   ├── features.js
│   │   ├── budgetScenarios.js
│   │   ├── achievements.js
│   │   ├── budgeting.js
│   │   ├── creditDebt.js
│   │   ├── ela.js
│   │   ├── savingsInvesting.js
│   │   └── constitution.js
│   │
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI library components
│   │   └── UserNotRegisteredError.jsx
│   │
│   ├── lib/               # Helper utilities
│   │   ├── AuthContext.jsx
│   │   ├── utils.js
│   │   └── ... (8 files)
│   │
│   ├── api/               # API integration
│   │   ├── base44Client.js
│   │   ├── entities.js
│   │   └── integrations.js
│   │
│   ├── entities/          # Data schemas
│   │   ├── Quiz.json
│   │   └── UserProgress.json
│   │
│   ├── hooks/             # Custom React hooks
│   ├── assets/            # Images/media
│   ├── utils/             # TypeScript utilities
│   ├── App.jsx            # Main app component
│   ├── Layout.jsx         # Layout wrapper
│   ├── main.jsx           # Entry point
│   ├── pages.config.js    # Page routing
│   └── index.css          # Global styles
│
├── package.json           # Dependencies
├── vite.config.js        # Build config
├── index.html            # HTML entry
├── tailwind.config.js    # Tailwind config
└── README.md             # Documentation

Total: 100+ files
```

## 🔍 How to Find Any File

### Option 1: Use File Explorer
Navigate to: `/home/runner/work/back-to-basicsorg-3eef3fda/back-to-basicsorg-3eef3fda/src/`

### Option 2: Command Line
```bash
cd /home/runner/work/back-to-basicsorg-3eef3fda/back-to-basicsorg-3eef3fda
find src -name "*.jsx" | grep -i "keyword"
```

### Option 3: GitHub
```
https://github.com/aggieperry27210-glitch/back-to-basicsorg-3eef3fda/tree/copilot/make-file-from-data/src
```

## 📍 Common Tasks

### To edit navigation:
Open: `src/config/navigation.config.js`

### To edit home page pathways:
Open: `src/data/pathways.js`

### To edit budget game scenarios:
Open: `src/data/budgetScenarios.js`

### To edit a page:
Open: `src/pages/[PageName].jsx`

### To add educational content:
Edit files in: `src/data/`

### To modify UI components:
Edit files in: `src/components/ui/`

---

**Repository Root:** `/home/runner/work/back-to-basicsorg-3eef3fda/back-to-basicsorg-3eef3fda`
