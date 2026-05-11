// ES MODULE SYNTAX (files with import/export)
import { HelloWorld } from './components/hello-world.js';
import { CounterDisplay } from './components/counter-display.js';
import { ClickCounter } from './components/click-counter.js';

console.log('Hello, Web Components!');

function initialize() {
    // Define the new element (create the markup)
    customElements.define('hello-world', HelloWorld);
    customElements.define('counter-display', CounterDisplay);
    customElements.define('click-counter', ClickCounter);
}

initialize();
