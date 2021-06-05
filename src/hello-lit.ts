import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('hello-lit')
export class HelloLitElement extends LitElement {
  @state()
  count: number = 0;

  @property({ type: String })
  name: string = 'Peabody';

  incrementCount() {
    this.count++;
  }

  /**
   * Render something. This function is called every time
   * a property or inner state changes.
   */
  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <div>
        <p>Count: ${this.count}</p>
        <input
          type="button"
          @click="${this.incrementCount}"
          value="Click me!"
        />
      </div>
    `;
  }
}
