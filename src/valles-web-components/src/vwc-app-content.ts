import { LitElement, html, css, customElement, property } from 'lit-element';
import { VwcLabels } from './shared';
import '@material/mwc-button';

@customElement('vwc-app-content')
export class AppContent extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      margin: 5px 10px 5px 10px;
      padding: 0 10px 0 10px;
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      min-height: 360px;
      transition: var(--vwc--transition, all 0.3s);
    }
    :host > .vwc-app-content--title-bar {
      border-bottom: 1px solid silver;
      margin-bottom: 5px;
    }
    :host .vwc-app-content--title {
      font-size: 1.3em;
      font-weight: 600;
    }
  `;

  @property({type: String}) title = "";
  @property({type: Boolean, attribute: "no-back-button"}) noBackButton = false;
  @property({type: String, attribute: "back-button-label"}) backButtonLabel = VwcLabels.Back;

  backHandler() {
    window.history.go(-1);
  }

  private get hasBack() {
    return !this.noBackButton && window.history.length > 1;
  }

  render() {
    return html`
      <vwc-bar class="vwc-app-content--title-bar">
        <slot name="title-bar-start" slot="start"></slot>
        ${this.title.length > 0 ? html`<span slot="start" class="vwc-app-content--title">${this.title}</span>` : ""}
        <slot name="title-bar-left" slot="start"></slot>
        <slot name="title-bar-center" slot="middle"></slot>
        <slot name="title-bar-right" slot="end"></slot>
        ${this.hasBack ? html`<mwc-button slot="end" class="vwc-app-content--back-button" icon="keyboard_backspace" label=${this.backButtonLabel} @click=${(e: any) => this.backHandler()}></mwc-button>` : ""}
        <slot name="title-bar-end" slot="end"></slot>
      </vwc-bar>
      <slot></slot>
    `;
  }
}
