class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
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
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    color: blue;
                    font-weight: bold;
                }
            </style>
            <p>Hello, ${name}!</p>
        `;
    }
}

customElements.define("hello-world", HelloWorld);
