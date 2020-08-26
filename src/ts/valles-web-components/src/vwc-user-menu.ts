
import { LitElement, html, css, customElement, property } from 'lit-element';
import { Menu } from '@material/mwc-menu';
import { VwcLabels, VwcEvents } from './shared';

@customElement('vwc-user-menu')
export class UserMenu extends LitElement {
  static styles = css`
    :host{
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      --mdc-icon-button-size: var(--vwc-top-bar--min-height, 42px);
    }
    label.user {
      display: flex;
      flex-flow: column;
      margin-left: 5px;
    }
    label.user > span.user-id {
      font-size: 12px;
    }
    #user-menu-button {
      margin-right: 5px;
    }
    mwc-menu > * {
      min-width: 256px;
    }
  `;

  constructor() {
    super();
    var $this = this;
    window.addEventListener('DOMContentLoaded', (event) => {
      $this.updated(null);
    });
  }

  @property({type: String, attribute: "user-id"}) userId = '';
  @property({type: String, attribute: "user-name"}) userName = '';
  @property({type: String, attribute: "user-email"}) userEmail = '';
  @property({type: String, attribute: "user-img"}) userImg = '';

  @property({type: String, attribute: "sign-out-label"}) signoutLabel = VwcLabels.SignOut;

  _interact() {
    const menu = this.shadowRoot?.querySelector('#user-menu') as Menu;
    if (menu != null)
      menu.show();
  }

  _signOutHandler() {
    const event = new CustomEvent(VwcEvents.SignOutClick, {
      bubbles: true,
      composed: true,
      detail: { }
    });
    this.dispatchEvent(event);
  }

  updated(changedProperties : any) {
    const menu = this.shadowRoot?.querySelector('#user-menu') as Menu;
      if (menu != null){
        menu.anchor = this.shadowRoot?.querySelector('#user-menu-button') as HTMLElement;
      }
  }

  render() {
    return html`
      <mwc-icon style="margin-left: 5px;">person</mwc-icon>
      <label class="user">
        ${this.userId.length > 0 ? html`<span class="user-id">${this.userId}</span>` : ''}
        <span class="user-name">${this.userName}</span>
      </label>
      <mwc-icon-button icon="more_horiz" @click=${this._interact} id="user-menu-button"></mwc-icon-button>
      <mwc-menu corner="BOTTOM_RIGHT" menuCorner="END" id="user-menu" >
        <mwc-list-item ?twoline=${this.hasEmail} graphic="avatar" noninteractive>
          <span class="user-description">${this.userDescription}</span>
          ${this.hasEmail ? html`<span slot="secondary">${this.userEmail}</span>` : ''}
          ${this.userImg.length > 0
            ? html`<img slot="graphic" alt="tag_faces" width="20" height="20" src=${this.userImg}>`
            : html`<mwc-icon slot="graphic" class="inverted">tag_faces</mwc-icon>`
          }
        </mwc-list-item>
        <li divider role="separator"></li>
        <slot></slot>
        <li divider role="separator"></li>
        <mwc-list-item graphic="icon" @click=${this._signOutHandler}>
          <span>${this.signoutLabel}</span>
          <mwc-icon slot="graphic">exit_to_app</mwc-icon>
        </mwc-list-item>
      </mwc-menu>
    `;
  }

  private get userDescription() : string {
    if (this.userId.length > 0)
      return `${this.userName} - ${this.userId}`;
    else
      return this.userName;
  }

  private get hasEmail() : boolean{
    return this.userEmail.length > 0;
  }
}
