
import { LitElement, html, css, customElement } from 'lit-element';
import { TextField } from '@material/mwc-textfield';
import { VwcEvents } from './shared';

@customElement('vwc-text-field')
export class VwcTextField extends TextField {
  static styles = css`
    ${TextField.styles}
    ::slotted(*) {
      margin-top: auto;
      margin-bottom: auto;
    }
  `;

  constructor() {
    super();
    const $this = this;
    window.addEventListener('DOMContentLoaded', (event) => {
      $this.shadowRoot?.childNodes.forEach(node => {
        const el = (node as HTMLElement);
        if (el == null) {
          return;
        }
        el.addEventListener('click', (e) => e.preventDefault());
      });
    });
  }

  protected renderSuffix() {
    return html`<slot name="addon"></slot>`;
  }

  IconClickHandler(e: Event) {
    e.preventDefault();
    const event = new CustomEvent(VwcEvents.TextFieldAddonClick, {
      bubbles: true,
      composed: true,
      detail: {
        origin: e,
        target: e.target
      },
    });

    this.dispatchEvent(event);
  }
}
