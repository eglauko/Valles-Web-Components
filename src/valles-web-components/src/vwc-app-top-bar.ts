
import { html, css, customElement, property } from 'lit-element';
import { TopBar } from './vwc-top-bar';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-menu';
import { VwcLabels, VwcEvents } from './shared';

@customElement('vwc-app-top-bar')
export class AppTopBar extends TopBar {
  static styles = css`
    ${TopBar.styles}
    :host {
      --vwc-top-bar--padding: 0;
      --mdc-icon-button-size: var(--vwc-top-bar--min-height, 42px);
    }
    [name="brand"]::slotted(*) {
      width: var(--vwc-app-top-bar--brand-width, 256px);
      min-height: var(--vwc-top-bar--min-height, 42px);
    }
    :host div.end > mwc-button {
      margin-left: 5px;
    }
    @media screen and (max-width: 800px) {
      :host .vwc-app-top-bar-search, [name="start"]::slotted(*) {
        display: none;
      }
    }
  `;

  @property({type: Boolean, attribute: "use-brand"}) brand = true;
  @property({type: Boolean, attribute: "use-menu-interact"}) menuInteract = true;
  @property({type: Boolean, attribute: "use-search"}) search = true;
  @property({type: Boolean, attribute: "use-signin"}) signIn = true;
  @property({type: Boolean, attribute: "use-user-menu"}) userMenu = true;

  @property({type: String, attribute: "search-label"}) searchLabel = VwcLabels.Search;
  @property({type: String, attribute: "sign-in-label"}) signInLabel = VwcLabels.SignIn;
  @property({type: String, attribute: "sign-out-label"}) signOutLabel = VwcLabels.SignOut;

  @property({type: String, attribute: "user-name"}) userName = "";
  @property({type: String, attribute: "user-id"}) userId = "";
  @property({type: String, attribute: "user-email"}) userEmail = "";
  @property({type: String, attribute: "user-img"}) userImg = '';

  _interact() {
    const event = new CustomEvent(VwcEvents.MenuClick, {
      bubbles: true,
      composed: true,
      detail: { }
    });
    this.dispatchEvent(event);
  }

  _singInHandler() {
    const event = new CustomEvent(VwcEvents.SignInClick, {
      bubbles: true,
      composed: true,
      detail: { }
    });
    this.dispatchEvent(event);
  }

  get startHtml() {
    return html`
      ${this.brand ? html`<slot name=brand></slot>` : "" }
      ${this.menuInteract ? html`<mwc-icon-button class="vwc-app-top-bar-menu-button" icon="menu" @click=${this._interact}></mwc-icon-button>` : "" }
      <slot name=start></slot>
    `;
  }

  get endHtml() {
    return html`
      ${this.search ? html`<vwc-search-field class="vwc-app-top-bar-search" label=${this.searchLabel}></vwc-search-field>` : "" }
      <slot name=end></slot>
      ${this.signIn && this.userName.length == 0 ? html`<mwc-button class="vwc-app-top-bar-sign-in" label=${this.signInLabel} icon="person_outline" @click=${this._singInHandler}></mwc-button>` : "" }
      ${this.userMenu && this.userName.length > 0 ? html`
      <vwc-user-menu class="vwc-app-top-bar-user-menu" user-name=${this.userName} user-id=${this.userId} user-email=${this.userEmail} user-img=${this.userImg} sign-out-label=${this.signOutLabel}>
        <slot name="user-menu"></slot>
      </vwc-user-menu>` : "" }
    `;
  }
}
