
import { LitElement, customElement, property, html, css } from 'lit-element';
import { VwcCss } from './shared';

@customElement('vwc-elevation')
export class Elevation extends LitElement {
  static styles = css`
    ${VwcCss.Elevation}
    :host {
      display: flex;
      box-sizing: content-box;
      width: fit-content;
    }
    :host > div {
      display: block;
      box-sizing: content-box;
      width: fit-content;
    }`;

  @property({type: Number}) z = 1;

  private get elevationClass() : string {
    return "vwc-elevation-transition vwc-elevation--z" + this.z;
  }

  public render() {
    return html`
      <div class=${this.elevationClass}>
        <slot></slot>
      </div>
    `;
  }
}
