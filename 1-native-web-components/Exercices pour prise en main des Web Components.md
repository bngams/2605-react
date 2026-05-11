## **🛠 Exercices pour prise en main des Web Components**

### **📌 Exercice 1 \- Premier composant Web natif**

🎯 **Concepts couverts** :

* Création d'un Web Component avec `class extends HTMLElement`  
* Ajout automatique au DOM avec `customElements.define()`  
* Utilisation de `connectedCallback()`

📁 **Dossier** : `exercices/exercice1/`

📝 **Consigne** : Créer un composant `<hello-world>` qui affiche un simple message dans le DOM.

📌 **Code à trou** (`hello-world.js`) :

| class HelloWorld extends HTMLElement {    constructor() {        super(); // Appel au constructeur de HTMLElement    }    connectedCallback() {        this.innerHTML \= \`\<p\>Hello, World \!\</p\>\`;    }}// Définir le composant avec customElements en remplaçant les ???customElements.define(???, ???); |
| :---- |

🖥 **Fichier HTML pour tester** :

| \<\!DOCTYPE html\>\<html lang="fr"\>\<head\>    \<meta charset="UTF-8"\>    \<meta name="viewport" content="width=device-width, initial-scale=1.0"\>    \<title\>Exercice Web Component\</title\>\</head\>\<body\>    \<hello-world\>\</hello-world\>    \<script src="hello-world.js"\>\</script\>\</body\>\</html\> |
| :---- |

✅ **Objectif** : Quand on ouvre la page, `<hello-world>` doit s'afficher et afficher `Hello, World!` en HTML.

---

### **📌 Exercice 2 \- Propriétés et attributs**

🎯 **Concepts couverts** :

* Gestion des **attributs HTML** dans un Web Component  
* Utilisation de `observedAttributes`  
* Mise à jour automatique du DOM en fonction des attributs

📁 **Dossier** : `exercices/exercice2/`

📝 **Consigne** : Modifier `<hello-world>` pour qu'il puisse afficher un prénom donné dans un attribut `name`, ex :

`<hello-world name="Alice"></hello-world>`

Doit afficher : **"Hello, Alice\!"**.

📌 **Code à trou** (`hello-world.js`) :

| class HelloWorld extends HTMLElement {    constructor() {        super();    }    static get observedAttributes() {        return \["name"\];    }    attributeChangedCallback(name, oldValue, newValue) {        if (name \=== "name") {            this.render();        }    }    connectedCallback() {        this.render();    }    render() {        const name \= this.getAttribute("???") ?? "World";        this.innerHTML \= \`\<p\>Hello, ${???}\!\</p\>\`;    }}customElements.define("hello-world", HelloWorld); |
| :---- |

✅ **Objectif** : Le texte affiché doit se mettre à jour dynamiquement quand l'attribut change (vous pouvez changer l’attribut depuis l’inspecteur de code du navigateur)

---

### **📌 Exercice 3 \- Style et Shadow DOM**

🎯 **Concepts couverts** :

* Utilisation de **Shadow DOM** (`attachShadow({ mode: "open" })`)  
* Ajout de **styles CSS encapsulés**

📁 **Dossier** : `exercices/exercice3/`

📝 **Consigne** : Améliorer `<hello-world>` en ajoutant du **style CSS** pour que le texte soit en **bleu et en gras**, et qu'il soit encapsulé dans un **Shadow DOM**.

📌 **Code à trou** (`hello-world.js`) :

| class HelloWorld extends HTMLElement {    constructor() {        super();        this.attachShadow({ mode: "open" });    }    connectedCallback() {        this.render();    }    render() {        const name \= this.getAttribute("name") ?? "World";        this.shadowRoot.innerHTML \= \`            \<style\>                // ajouter votre style pour la balise p            \</style\>            \<p\>Hello, ${name}\!\</p\>        \`;    }}customElements.define("hello-world", HelloWorld); |
| :---- |

✅ **Objectif** : Les styles doivent être **isolés** dans le composant (pas d'impact sur le reste de la page).

---

### **📌 Exercice 4 \- Interaction avec des événements**

🎯 **Concepts couverts** :

* Gestion des **événements utilisateurs** (`click`)  
* Communication entre composants avec **Custom Events**

📁 **Dossier** : `exercices/exercice4/`

📝 **Consigne** : Créer un composant `<click-counter>` qui affiche un bouton et **compte** le nombre de clics.

📌 **Code à trou** (`click-counter.js`) :

| class ClickCounter extends HTMLElement {    constructor() {        super();        this.attachShadow({ mode: "open" });        this.count \= 0;    }    connectedCallback() {        this.render();        this.shadowRoot.querySelector("button").addEventListener("click", () \=\> {            // TODO: increment counter            // TODO: call render function             // here we dispatch the event to the DOM (can be used to notify other app parts)            document.dispatchEvent(new CustomEvent("countChanged", {                detail: this.count,                bubbles: true,                composed: true            }));        });    }    render() {        this.shadowRoot.innerHTML \= \`            \<style\>                button { font-size: 1.2em; padding: 10px; }            \</style\>            \<button\>Clicked ${this.count} times\</button\>        \`;    }}customElements.define("click-counter", ClickCounter); |
| :---- |

🖥 **Fichier HTML pour tester** :

| \<\!DOCTYPE html\>\<html lang="fr"\>\<head\>    \<meta charset="UTF-8"\>    \<title\>Exercice Events\</title\>\</head\>\<body\>    \<\!-- utiliser notre composant click-counter \--\>    \<script src="click-counter.js"\>\</script\>\</body\>\</html\> |
| :---- |
|  |

✅ **Objectif** : Quand on clique sur le bouton, le nombre de clics affiché doit augmenter (au moins une fois…).

---

### **📌 Exercice 5 \- Intégration entre composants**

🎯 **Concepts couverts** :

* Communication entre plusieurs **Web Components**  
* Écoute et réaction aux **événements personnalisés**

📁 **Dossier** : `exercices/exercice5/`

📝 **Consigne** : Créer un composant `<counter-display>` qui écoute **l'événement CustomEvent** `countChanged` du composant `<click-counter>` et affiche le compteur.

📌 **Code** (`counter-display.js`) :

| class CounterDisplay extends HTMLElement {    constructor() {        super();        this.attachShadow({ mode: "open" });        this.count \= 0;    }    connectedCallback() {        document.addEventListener("countChanged", (event) \=\> {            this.count \= event.detail;            this.render();        });        this.render();    }    render() {        // TODO: display counter value    }}customElements.define("counter-display", CounterDisplay); |
| :---- |

🖥 **Fichier HTML pour tester** :

| \<\!DOCTYPE html\>\<html lang="fr"\>\<head\>    \<meta charset="UTF-8"\>    \<title\>Web Components\</title\>\</head\>\<body\>    \<counter-display\>\</counter-display\>    \<click-counter\>\</click-counter\>    \<script src="click-counter.js"\>\</script\>    \<script src="counter-display.js"\>\</script\>\</body\>\</html\> |
| :---- |

✅ **Objectif** : Quand on clique sur `<click-counter>`, `<counter-display>` met à jour la valeur du compteur global.

---

### **🏆 Quelques idées pour aller plus loin**

* Ajouter un **mode sombre** avec une propriété personnalisable (`<click-counter dark-mode="true"></click-counter>`)  
* Créer un `<todo-list>` qui gère une liste de tâches (ajout/suppression)  
* Intégrer les composants Web Components dans **React** ou **Vue\!**

