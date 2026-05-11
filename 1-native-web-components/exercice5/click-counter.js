class ClickCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            this.count++;
            this.render();

            // Dispatch custom event
            document.dispatchEvent(new CustomEvent("countChanged", {
                detail: this.count,
                bubbles: true,
                composed: true
            }));
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button { font-size: 1.2em; padding: 10px; }
            </style>
            <button>Clicked ${this.count} times</button>
        `;
    }
}

customElements.define("click-counter", ClickCounter);
