
import { LitElement, customElement, css, html, property } from 'lit-element';

@customElement('vwc-main-footer')
export class MainFooter extends LitElement {
  static styles = css`
    :host > footer {
      width: 100%;

      height: var(--vwc-main-footer--height, 42px);
      line-height: var(--vwc-main-footer--height, 42px);
      padding-right: var(--vwc-main-footer--padding, 15px);
      padding-left: var(--vwc-main-footer--padding, 15px);

      z-index: 1010;

      background-color: #6c757d;

      position: relative;
      box-sizing: border-box;

      flex-shrink: 0;

      box-sizing: border-box;
      display: flex;
      align-items: left;
    }
  `;

  render() {
    return html`
      <footer>
          <slot></slot>
      </footer>
    `;
  }
}
