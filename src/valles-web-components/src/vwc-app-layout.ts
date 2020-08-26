
import { LitElement, html, css, customElement, property } from 'lit-element';
import { AppTopBar } from './vwc-app-top-bar';
import { AsideMenu } from './vwc-aside-menu';
import { MainFooter } from './vwc-main-footer';
import { VwcEvents } from './shared';

@customElement('vwc-app-layout')
export class AppLayout extends LitElement {
  static styles = css`
    :host {
      --vwc-theme-primary: #004990;
      --mdc-theme-primary: var(--vwc-theme-primary);

      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    :host > main {
      display: block;
      position: relative;
      overflow: auto;
      flex: 1 1 0%;
      transition: var(--vwc--transition, all 0.3s);
    }
    :host > vwc-main-footer{
      transition: var(--vwc--transition, all 0.3s);
    }
    main.vwc-menu-interacted ::slotted {
      transition: var(--vwc--transition, all 0.3s);
    }
    @media screen and (min-width: 1024px) {
      :host > main {
        padding-left: var(--vwc-aside-menu--width, 256px);
      }
      :host > main.vwc-menu-interacted {
        padding-left: 0;
      }
      :host > vwc-main-footer {
        margin-left: var(--vwc-aside-menu--width, 256px);
      }
      :host > vwc-main-footer.vwc-menu-interacted {
        margin-left: 0;
      }
    }
    @media screen and (min-width: 1044px) {
      main.vwc-menu-interacted ::slotted :not([fluid]) {
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media screen and (min-width: 1240px) {
      main.vwc-menu-interacted ::slotted(:not([fluid])) {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media screen and (min-width: 1440px) {
      main.vwc-menu-interacted ::slotted(:not([fluid])) {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
      }
    }
    @media screen and (min-width: 1620px) {
      main.vwc-menu-interacted ::slotted(:not([fluid])[big]) {
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  `;

  @property({type: Boolean, attribute: "top-bar-shadow"}) topBarShadow = true;

  @property({type: Boolean}) brand = true;

  @property({type: Boolean, attribute: false}) menuInteracted = false;

  constructor() {
    super();
    const $this = this;
    window.addEventListener('DOMContentLoaded', (event) => {
      $this.asideMenu?.addEventListener(VwcEvents.MenuFadeClick, (e: any) => $this.menuInteracted = e.target.interacted);
    });
  }

  public interact() {
    const menu = this.asideMenu;
    if (menu != null) {
      menu.interacted = !menu.interacted;
      this.menuInteracted = menu.interacted;
    }
  }

  private get getInteractedClass() : string {
    return this.asideMenu?.interacted ? 'vwc-menu-interacted': 'vwc-menu-original';
  }

  public get topBar() : AppTopBar {
    return this.shadowRoot?.querySelector('vwc-app-top-bar') as AppTopBar;
  }

  public get asideMenu() : AsideMenu {
    return this.shadowRoot?.querySelector('vwc-aside-menu') as AsideMenu;
  }

  public get footer() : MainFooter {
    return this.shadowRoot?.querySelector('vwc-main-footer') as MainFooter;
  }

  render() {
    return html`
      <vwc-app-top-bar ?shadow=${this.topBarShadow} @vwc-menu-click=${() => this.interact()}>
        ${this.brand ? html`<slot name=brand slot=brand></slot>` : ""}
        <slot name=top-bar-start slot=start></slot>
        <slot name=top-bar-middle slot=middle></slot>
        <slot name=top-bar-end slot=end></slot>
      </vwc-app-top-bar>
      <vwc-aside-menu>
        <slot name=aside-menu></slot>
      </vwc-aside-menu>
      <main class=${this.getInteractedClass}>
        <slot></slot>
      </main>
      <vwc-main-footer class=${this.getInteractedClass}>
        <slot name=footer></slot>
      </vwc-main-footer>
    `;
  }
}
