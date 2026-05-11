# 🔄 Web Components Natifs vs React - Tableau Comparatif

## 📦 Création d'un composant

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| `class MyComponent extends HTMLElement` | `function MyComponent()` ou `class MyComponent extends React.Component` |
| Héritage de `HTMLElement` | Fonction qui retourne du JSX ou classe React |
| `customElements.define('my-component', MyComponent)` | Export simple du composant |
| **Exemple:** | **Exemple:** |
| ```javascript<br>class HelloWorld extends HTMLElement {<br>  constructor() {<br>    super();<br>  }<br>}<br>customElements.define('hello-world', HelloWorld);<br>``` | ```javascript<br>function HelloWorld() {<br>  return <p>Hello, World!</p>;<br>}<br>export default HelloWorld;<br>``` |

---

## 🎨 Rendu (affichage)

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| `connectedCallback()` - appelé quand le composant est ajouté au DOM | Le composant se rend automatiquement |
| `this.innerHTML` ou `this.shadowRoot.innerHTML` | `return` JSX |
| Méthode `render()` personnalisée (optionnelle) | Le corps de la fonction (ou méthode `render()` pour classes) |
| **Exemple:** | **Exemple:** |
| ```javascript<br>connectedCallback() {<br>  this.innerHTML = `<p>Hello!</p>`;<br>}<br>``` | ```javascript<br>function MyComponent() {<br>  return <p>Hello!</p>;<br>}<br>``` |

---

## 📥 Props / Attributs

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| Attributs HTML récupérés via `getAttribute()` | Props passées en paramètre de fonction |
| `static get observedAttributes()` pour déclarer les attributs observés | Props automatiquement disponibles |
| `attributeChangedCallback()` pour détecter les changements | Re-rendu automatique si props changent |
| **Exemple:** | **Exemple:** |
| ```javascript<br>static get observedAttributes() {<br>  return ['name'];<br>}<br>attributeChangedCallback(name, oldVal, newVal) {<br>  this.render();<br>}<br>render() {<br>  const name = this.getAttribute('name');<br>  this.innerHTML = `<p>Hello, ${name}!</p>`;<br>}<br>``` | ```javascript<br>function HelloWorld({ name }) {<br>  return <p>Hello, {name}!</p>;<br>}<br>// Utilisation:<br>// <HelloWorld name="Alice" /><br>``` |
| **Utilisation:** `<hello-world name="Alice"></hello-world>` | **Utilisation:** `<HelloWorld name="Alice" />` |

---

## 🎭 Styles encapsulés

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| **Shadow DOM** : `this.attachShadow({ mode: 'open' })` | **CSS Modules**, **styled-components**, ou **CSS-in-JS** |
| Styles vraiment encapsulés (isolation native) | Encapsulation par convention (noms de classes uniques) |
| Balise `<style>` dans le `shadowRoot` | Import CSS ou styled-components |
| **Exemple:** | **Exemple:** |
| ```javascript<br>constructor() {<br>  super();<br>  this.attachShadow({ mode: 'open' });<br>}<br>render() {<br>  this.shadowRoot.innerHTML = `<br>    <style><br>      p { color: blue; font-weight: bold; }<br>    </style><br>    <p>Hello!</p><br>  `;<br>}<br>``` | ```javascript<br>import styles from './Hello.module.css';<br>function HelloWorld() {<br>  return (<br>    <p className={styles.text}>Hello!</p><br>  );<br>}<br>// ou avec styled-components:<br>const Text = styled.p`<br>  color: blue;<br>  font-weight: bold;<br>`;<br>``` |

---

## 🔄 État (State)

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| Propriétés de classe manuelles (`this.count = 0`) | Hook `useState()` (fonctions) ou `this.state` (classes) |
| Re-rendu manuel avec `this.render()` | Re-rendu automatique avec `setState` ou `setCount` |
| Pas de système de state intégré | Système de state réactif intégré |
| **Exemple:** | **Exemple:** |
| ```javascript<br>constructor() {<br>  super();<br>  this.count = 0;<br>}<br>increment() {<br>  this.count++;<br>  this.render(); // appel manuel<br>}<br>``` | ```javascript<br>function Counter() {<br>  const [count, setCount] = useState(0);<br>  <br>  return (<br>    <button onClick={() => setCount(count + 1)}><br>      Count: {count}<br>    </button><br>  );<br>}<br>``` |

---

## 🎯 Événements

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| `addEventListener()` dans `connectedCallback()` | Props d'événement directement dans JSX (`onClick`, `onChange`, etc.) |
| Custom Events avec `dispatchEvent(new CustomEvent())` | Callbacks passés en props |
| Événements DOM natifs | Événements synthétiques React (SyntheticEvent) |
| **Exemple:** | **Exemple:** |
| ```javascript<br>connectedCallback() {<br>  this.shadowRoot.querySelector('button')<br>    .addEventListener('click', () => {<br>      this.count++;<br>      this.render();<br>    });<br>}<br>``` | ```javascript<br>function Counter() {<br>  const [count, setCount] = useState(0);<br>  <br>  return (<br>    <button onClick={() => setCount(count + 1)}><br>      Count: {count}<br>    </button><br>  );<br>}<br>``` |

---

## 🔗 Communication entre composants

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| **Custom Events** globaux (`document.dispatchEvent`) | **Props** (parent → enfant) et **callbacks** (enfant → parent) |
| Écoute avec `document.addEventListener('eventName')` | Context API ou state management (Redux, Zustand) |
| Communication plus explicite et découplée | Communication via hiérarchie de composants |
| **Exemple:** | **Exemple:** |
| ```javascript<br>// Composant émetteur<br>document.dispatchEvent(<br>  new CustomEvent('countChanged', {<br>    detail: this.count<br>  })<br>);<br><br>// Composant récepteur<br>document.addEventListener('countChanged', (e) => {<br>  this.count = e.detail;<br>  this.render();<br>});<br>``` | ```javascript<br>// Parent<br>function App() {<br>  const [count, setCount] = useState(0);<br>  return (<br>    <><br>      <Counter onIncrement={setCount} /><br>      <Display count={count} /><br>    </><br>  );<br>}<br><br>// Enfant<br>function Counter({ onIncrement }) {<br>  return (<br>    <button onClick={() => onIncrement(prev => prev + 1)}><br>      Increment<br>    </button><br>  );<br>}<br>``` |

---

## 🚀 Utilisation dans le HTML

| **Web Components Natifs** | **React** |
|---------------------------|-----------|
| Balises HTML personnalisées | Composants dans JSX |
| Nom avec tiret obligatoire (`<my-component>`) | PascalCase (`<MyComponent />`) |
| Utilisable partout (HTML pur, React, Vue, Angular...) | Uniquement dans un projet React |
| **Exemple:** | **Exemple:** |
| ```html<br><hello-world name="Alice"></hello-world><br><click-counter></click-counter><br>``` | ```jsx<br><HelloWorld name="Alice" /><br><ClickCounter /><br>``` |

---

## 📊 Résumé des différences clés

| Critère | Web Components Natifs | React |
|---------|----------------------|-------|
| **Standard** | Standard Web (W3C) | Librairie JavaScript |
| **Compatibilité** | Tous frameworks | Écosystème React uniquement |
| **Encapsulation** | Shadow DOM (native) | Par convention (CSS Modules, etc.) |
| **Réactivité** | Manuelle | Automatique |
| **Courbe d'apprentissage** | Plus verbeux, plus bas niveau | Plus abstrait, plus simple |
| **Tooling** | Vanilla JS possible | Nécessite build (Babel, Webpack/Vite) |
| **Écosystème** | Limité | Très riche (hooks, libraries, etc.) |

---

## 💡 Quand utiliser quoi ?

### ✅ Web Components Natifs
- Composants réutilisables **entre différents frameworks**
- Widgets/plugins intégrables partout
- Projets sans build complexe
- Besoin d'**isolation stricte des styles**

### ✅ React
- Applications complètes avec UI complexe
- Besoin de **réactivité automatique**
- Écosystème riche (routing, state management, etc.)
- Développement rapide avec tooling moderne
