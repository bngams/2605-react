// like a public class
export class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
        return ["name"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // if the "name" attribute changes, re-render the component
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
                    font-family: Arial, sans-serif;
                    font-size: 20px;
                }
            </style>
            <p>Hello, ${name}!</p>
        `;
    }
}