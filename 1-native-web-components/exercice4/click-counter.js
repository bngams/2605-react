class ClickCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            // Increment counter
            this.count++;

            // Re-render the component
            this.render();

            // here we dispatch the event to the DOM (can be used to notify other app parts)
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
