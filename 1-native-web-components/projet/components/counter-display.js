export class CounterDisplay extends HTMLElement {
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
        // TODO: display counter value
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    font-family: Arial, sans-serif;
                    font-size: 18px;
                }
            </style>
            <p>Current Count: ${this.count}</p>
        `;  
    }
}
