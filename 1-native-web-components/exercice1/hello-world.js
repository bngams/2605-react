class HelloWorld extends HTMLElement {
    constructor() {
        super(); // Appel au constructeur de HTMLElement
    }

    connectedCallback() {
        this.innerHTML = `<p>Hello, World !</p>`;
    }
}

// Définir le composant avec customElements en remplaçant les ???
customElements.define('hello-world', HelloWorld);