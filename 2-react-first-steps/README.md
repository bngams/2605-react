# React — Prise en main

Projet Vite + React clé en main pour pratiquer les concepts de base de React à travers 6 exercices guidés.

## 📦 Installation

```bash
npm install
```

## 🚀 Lancer le projet

```bash
npm run dev
```

Le projet s'ouvre automatiquement sur [http://localhost:5173](http://localhost:5173).

## 🎯 Comment ça fonctionne

Une **page d'accueil** présente les 6 exercices sous forme de cartes cliquables. Tu cliques sur un exercice pour l'ouvrir, tu codes, et tu peux revenir à l'accueil pour passer au suivant.

```
┌─────────────────────────────────┐
│  🚀 React — Prise en main       │
│                                 │
│  [Exo 1]  [Exo 2]  [Exo 3]      │
│  [Exo 4]  [Exo 5]  [Exo 6]      │
└─────────────────────────────────┘
```

## 📋 Les exercices

| #  | Titre                                  | Concept ciblé          |
|----|----------------------------------------|------------------------|
| 1  | Composant simple avec props            | `props`                |
| 2  | Gestion d'état avec useState           | `useState`             |
| 3  | Listes et rendu dynamique              | `.map()` / listes      |
| 4  | Événements et gestion de formulaire    | `onChange` / `onSubmit`|
| 5  | Communication entre composants         | lifting state up       |
| 6  | Effets de bord avec useEffect          | `useEffect` + `fetch`  |

## 📁 Structure du projet

```
react-exercices/
├── src/
│   ├── App.jsx             ← page d'accueil + routing
│   ├── main.jsx            ← point d'entrée
│   ├── index.css           ← styles globaux
│   └── exercices/
│       ├── Exercice1/
│       │   ├── App.jsx     ← la "page" de l'exercice
│       │   └── Greeting.jsx ← à compléter
│       ├── Exercice2/
│       │   ├── App.jsx
│       │   └── Counter.jsx ← à compléter
│       ├── Exercice3/
│       │   ├── App.jsx
│       │   ├── TodoList.jsx ← à compléter
│       │   └── todos.js
│       ├── Exercice4/
│       │   ├── App.jsx
│       │   └── AddTodo.jsx  ← à compléter
│       ├── Exercice5/
│       │   ├── App.jsx
│       │   ├── TodoApp.jsx  ← à compléter
│       │   ├── AddTodo.jsx  ← à compléter
│       │   └── TodoList.jsx ← à compléter
│       └── Exercice6/
│           ├── App.jsx
│           └── TodoFetch.jsx ← à compléter
├── index.html
├── package.json
└── vite.config.js
```

## 💡 Pour chaque exercice

- Le **`App.jsx`** du dossier contient déjà la mise en page et l'import du composant — n'y touche pas (sauf si tu veux ajuster l'affichage).
- Les autres fichiers (`Greeting.jsx`, `Counter.jsx`, etc.) sont des **squelettes à compléter** : c'est là que tu codes.
- Cherche les commentaires `// 👉 À TOI DE JOUER` et les `TODO:`.

## 🛠️ Scripts disponibles

| Commande          | Description                            |
|-------------------|----------------------------------------|
| `npm run dev`     | Démarre le serveur de développement    |
| `npm run build`   | Construit la version de production     |
| `npm run preview` | Prévisualise la version de production  |
