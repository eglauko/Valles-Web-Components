import { LitElement, customElement, css, html, property } from 'lit-element';

const SCROLLED = "vwc-top-bar--scrolled";

@customElement('vwc-top-bar')
export class TopBar extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    :host > header > nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      z-index: var(--vwc-top-bar--z-index, 1030);

      box-sizing: border-box;
      padding: var(--vwc-top-bar--padding, 0 1rem);

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--vwc-top-bar--background-color,  #f8f9fa);
      color: var(--vwc-top-bar--color, var(--vwc-theme-primary));
      width: var(--vwc-top-bar--width, 100%);
      min-height: var(--vwc-top-bar--min-height, 42px);
      border: var(--vwc-top-bar--border, none);

      transition: box-shadow 300ms linear 0s;
    }
    :host > header > nav > div {
      display: flex;
      flex-shrink: 1;
    }

    :host .height-adjust {
      min-height: var(--vwc-top-bar--min-height, 42px);
      display: block;
    }

    :host > header > nav > .start {
      justify-content: flex-start;
      align-items: center;
      order: -1;
    }
    :host > header > nav > .middle {
      justify-content: center;
      align-items: center;
      order: 0;
    }
    :host > header > nav > .end {
      justify-content: flex-end;
      align-items: center;
      order: 1;
    }

    :host([shadow]) header > nav {
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }

    :host > header.vwc-top-bar--scrolled > nav {
      box-shadow: var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12));
    }
    @media screen and (max-width: 800px) {
      :host .middle {
        display: none;
      }
    }
    @media screen and (max-width: 480px) {
      :host .end {
        display: none;
      }
      :host > header > nav > .start {
        width: 100%;
        justify-content: space-between;
      }
    }
  `;

  private _scrollTarget : any;
  private _wasScrolled  = false;

  @property({type: Boolean}) shadow = false;
  @property({type: Boolean, attribute: "auto-height-adjust"}) autoHeightAdjust = true;

  constructor() {
    super();
    this._scrollTarget = window;
    this.registerListeners();
  }

  get scrollTarget() {
    return this._scrollTarget || window;
  }
  set scrollTarget(value) {
      this.unregisterListeners();
      const old = this.scrollTarget;
      this._scrollTarget = value;
      this.handleTargetScroll();
      this.requestUpdate('scrollTarget', old);
      this.registerListeners();
  }

  registerListeners() {
    const handler = this.handleTargetScroll;
    const $this = this;
    this.scrollTarget.addEventListener('scroll', function() { handler.apply($this); });
  }

  unregisterListeners() {
    const handler = this.handleTargetScroll;
    const $this = this;
    this.scrollTarget.removeEventListener('scroll', function() { handler.apply($this); });
  }

  getViewportScrollY() {
    return this.scrollTarget instanceof Window
      ? this.scrollTarget.pageYOffset
      : this.scrollTarget.scrollTop;
  }

  handleTargetScroll() {
    const currentScroll = this.getViewportScrollY();

    if (currentScroll <= 0) {
        if (this._wasScrolled) {
          this.shadowRoot?.querySelector('header')?.classList.remove(SCROLLED);
          this._wasScrolled = false;
        }
    }
    else {
        if (!this._wasScrolled) {
          this.shadowRoot?.querySelector('header')?.classList.add(SCROLLED);
          this._wasScrolled = true;
        }
    }
  }

  render() {
    return html`
      <header>
        <nav>
          <div class="start">
            ${this.startHtml}
          </div>
          <div class="middle">
            ${this.middleHtml}
          </div>
          <div class="end">
            ${this.endHtml}
          </div>
        </nav>
      </header>
      ${this.autoHeightAdjust ? html`<div class="height-adjust"></div>` : ''}
    `;
  }

  get startHtml() {
    return html`<slot name=start></slot>`;
  }

  get middleHtml() {
    return html`<slot name=middle></slot>`;
  }

  get endHtml() {
    return html`<slot name=end></slot>`;
  }
}
