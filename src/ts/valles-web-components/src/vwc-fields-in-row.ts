
import { LitElement, html, css, customElement } from 'lit-element';

@customElement('vwc-fields-in-row')
export class FieldsInRow extends LitElement {

  static styles = css`
    :host {
      position: relative;
      display: block;
      width: 100%;
      --mdc-text-field-fill-color: rgb(240, 240, 240);
    }
    :host > div {
      display: flex;
      flex: 1 0 100%;
      flex-wrap: wrap;

      margin-right: calc(var(--vwc-fields-gutter, 0.5rem) / -2);
      margin-left: calc(var(--vwc-fields-gutter, 0.5rem) / -2);
    }
    ::slotted(*) {
      flex-shrink: 0;
      /* width: 100%; */
      max-width: 100%;

      margin-bottom: var(--vwc-fields-gutter, 0.5rem);
    }
    ::slotted([class*="col-"]) {
      display: flex;
      position: relative;
    }
    ::slotted([class*="col-"] > *) {
      width: 100%;
      padding-right: calc(var(--vwc-fields-gutter, 0.5rem) / 2);
      padding-left: calc(var(--vwc-fields-gutter, 0.5rem) / 2);
    }
  `;

  render() {
    return html`<div><slot></slot></div>`;
  }
}
