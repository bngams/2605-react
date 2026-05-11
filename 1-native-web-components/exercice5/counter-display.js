class CounterDisplay extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.count = 0;
    }

    connectedCallback() {
        document.addEventListener("countChanged", (event) => {
            this.count = event.detail;
            this.render();
        });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    padding: 20px;
                    background-color: #f0f0f0;
                    border: 2px solid #333;
                    border-radius: 8px;
                    margin: 10px 0;
                }
                h2 {
                    margin: 0;
                    color: #333;
                }
                .count {
                    font-size: 2em;
                    color: #007bff;
                    font-weight: bold;
                }
            </style>
            <div>
                <h2>Compteur Global</h2>
                <p class="count">${this.count}</p>
            </div>
        `;
    }
}

customElements.define("counter-display", CounterDisplay);
