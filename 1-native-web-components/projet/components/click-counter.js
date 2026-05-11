class ClickCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
        this.bindEvents();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button { font-size: 1.2em; padding: 10px; }
            </style>
            <button>Clicked ${this.count} times</button>
        `;
    }

    bindEvents() {
        this.shadowRoot.addEventListener("click", (e) => {
            if (e.target.tagName === "BUTTON") {
                this.count++;
                this.render(); console.log('Button clicked, re render', this.count);
                // here we dispatch the event to the DOM (can be used to notify other app parts)
                document.dispatchEvent(new CustomEvent("countChanged", {
                    detail: this.count,
                    bubbles: true,
                    composed: true
                }));
            }
        });
    }
}

export { ClickCounter };