import { LitElement, customElement, css, html, property } from 'lit-element';

@customElement('vwc-bar')
export class Bar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host > nav {
      position: relative;
      box-sizing: border-box;
      padding: 0 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--vwc-bar--background-color,  #f8f9fa);
      color: var(--vwc-bar--color, #343a40);
      width: var(--vwc-bar--width, 100%);
      min-height: var(--vwc-bar--min-height, 42px);
      border: var(--vwc-bar--border, none);
    }

    :host > nav > [name="start"] {
      justify-content: flex-start;
      order: -1;
    }
    :host > nav > [name="middle"] {
      justify-content: center;
      order: 0;
    }
    :host > nav > [name="end"] {
      justify-content: flex-end;
      order: 1;
    }

    :host([shadow]) nav {
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }
  `;

  @property({type: Boolean}) shadow = false;

  render() {
    return html`
      <nav>
        <div>
          <slot name=start></slot>
        </div>
        <div>
          <slot name=middle></slot>
        </div>
        <div>
          <slot name=end></slot>
        </div>
      </nav>
    `;
  }
}
