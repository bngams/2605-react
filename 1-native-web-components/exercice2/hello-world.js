class HelloWorld extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ["name"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "name") {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute("name") ?? "World";
        this.innerHTML = `<p>Hello, ${name}!</p>`;
    }
}

customElements.define("hello-world", HelloWorld);
