
import { LitElement, html, css, customElement } from 'lit-element';

@customElement('vwc-flex-content')
export class FlexContent extends LitElement {
  static styles = css`
    :host {
      margin: auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    :host([justify]) {
      justify-content: space-between;
    }
    :host([center]) {
      justify-content: center;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}
