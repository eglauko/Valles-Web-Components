
import { LitElement, customElement, css, html, property } from 'lit-element';
import { VwcEvents } from './shared';

@customElement('vwc-aside-menu')
export class AsideMenu extends LitElement {
  static styles = css`
    :host > aside {
      position: fixed;
      z-index: 1020;
      display: block;
    }
    :host > aside > nav {
      width: var(--vwc-aside-menu--width, 256px);
      display: block;
      top: 0;
      left: 0;
      min-height: 100vh;

      color: #fff;
      background-color: #343a40;

      transition: var(--vwc-aside-menu--transition, all 0.3s);

      position: relative;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
    }
    :host .fade {
      transition: var(--vwc-aside-menu--transition, all 0.3s);
      position: absolute;
      z-index: 1010;
      width: 100%;
      opacity: 0;
      background-color: black;
    }
    @media screen and (min-width: 1024px) {
      :host > .vwc-menu-original > nav {
        margin-left: 0px;
      }
      :host > .vwc-menu-interacted > nav {
        margin-left: calc(var(--vwc-aside-menu--width, 256px) * -1);
      }
    }
    @media screen and (max-width: 1023px) {
      :host > aside {
        top: 0;
        left: 0;
        z-index: 1040;
      }
      :host > .vwc-menu-original > nav {
        margin-left: calc(var(--vwc-aside-menu--width, 256px) * -1);
      }
      :host > .vwc-menu-interacted > nav {
        margin-left: 0px;
      }
      :host > .vwc-menu-interacted.fade{
        opacity: 0.3;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
      :host > .vwc-menu-fade.fade, :host > .vwc-menu-animation.fade {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }
    }
    @media screen and (max-width: 298px) {
      :host > aside > nav {
        width: calc(100vw - 42px)
      }
      :host > .vwc-menu-original > nav {
        margin-left: calc((100vw - 42px) * -1);
      }
    }
  `;

  @property({type: Boolean, attribute: false}) _interactedAnimationEnded : boolean = false;
  @property({type: Boolean, attribute: false}) _animationStart : boolean = false;

  @property({type: Boolean}) interacted = false;

  @property({type: Boolean, attribute: "auto-width-adjust"}) autoWidthAdjust = true;

  constructor() {
    super();
    this.registerListeners();
  }

  registerListeners() {
    let handler = this.__transition;
    let $this = this;

    window.addEventListener('DOMContentLoaded', (event) => {
      $this.shadowRoot?.firstElementChild?.addEventListener('transitionstart', function() { handler.apply($this, [true]); });
      $this.shadowRoot?.firstElementChild?.addEventListener('transitionend', function() { handler.apply($this, [false]); });
      $this.shadowRoot?.querySelector(":host > div.fade")?.addEventListener('click', (e) => $this.fadeClickHandler(e));
    });

  }

  private fadeClickHandler(e: any) {

    this.interacted = false;

    const event = new CustomEvent(VwcEvents.MenuFadeClick, {
      bubbles: true,
      composed: true,
      detail: {
        origin: e,
        interacted: false
      },
    });

    this.dispatchEvent(event);
  }

  get interactedClass() : string {
    return this.interacted ? "vwc-menu-interacted" : "vwc-menu-original";
  }

  get animationClass() : string {
    return this._animationStart ? "vwc-menu-animation" : "";
  }

  get showingFadeClass() : string {
    return this._interactedAnimationEnded ? "vwc-menu-fade" : "";
  }

  __transition(value : boolean) {
    this._animationStart = value;
    this._interactedAnimationEnded = !value && this.interacted;
  }

  render() {
    return html`
      <aside class="${this.interactedClass} ${this.animationClass}">
        <nav>
          <slot></slot>
        </nav>
      </aside>
      <div class="fade ${this.interactedClass} ${this.animationClass} ${this.showingFadeClass}"></div>
    `;
  };
}

