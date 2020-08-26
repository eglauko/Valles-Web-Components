import { css, CSSResult } from 'lit-element';

export class VwcLabels {

  public static Search : string = "Pesquise";
  public static SignIn : string = "Entrar";
  public static SignOut : string = "Sair";
  public static Back : string = "Voltar";

}

export class VwcEvents {

  public static Search : string = "vwc-search";
  public static SearchOff : string = "vwc-search-off";
  public static SearchKeyPress : string = "vwc-search-key-press";

  public static MenuClick : string = "vwc-menu-click";
  public static MenuFadeClick : string = "vwc-menu-fade-click";

  public static SignInClick : string = "vwc-sign-in-click";
  public static SignOutClick : string = "vwc-sign-out-click";

  public static TextFieldAddonClick : string = "vwc-text-field-addon-click";
}

export class VwcClasses {

  public static SCROLLED : string = "vwc-top-bar--scrolled";
}

export class VwcCss {

  /**
   * Regras (css) para aplicar o ripple a um elemento com a class 'ripple (class="ripple").
   *
   * Customize effect by defining the following
   * --ripple-background: white;
   * --ripple-opacity: 0.3;
   * --ripple-duration: 400ms;
   * --ripple-easing: linear;
   *
   * @readonly
   * @static
   * @type {CSSResult}
   * @memberof VwcCss
   */
  public static get Ripple() : CSSResult {
    return css`
      .ripple {
        position: relative;
        overflow: hidden;
      }

      .ripple ::before {
        content: '';
        position:absolute;
        display: block;
        background: var(--ripple-background, white);
        border-radius: 50%;
        pointer-events: none;

        /* position and size */
        top: calc(var(--y) * 1px);
        left: calc(var(--x) * 1px);
        width:  calc(var(--d) * 1px);
        height: calc(var(--d) * 1px);

        /* animated properties */
        opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
        transition: calc(var(--t, 0) * var(--ripple-duration, 400ms)) var(--ripple-easing, linear);
        transform: translate(-50%, -50%) scale(var(--s, 1));
        transform-origin: center;
      }
    `;
  }

  public static get Elevation() : CSSResult {
    return css`
      .vwc-elevation--z0 {
        box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z1 {
        box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z2 {
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z3 {
        box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z4 {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z5 {
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z6 {
        box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z7 {
        box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z8 {
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z9 {
        box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z10 {
        box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z11 {
        box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z12 {
        box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z13 {
        box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z14 {
        box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z15 {
        box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z16 {
        box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z17 {
        box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z18 {
        box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z19 {
        box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z20 {
        box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z21 {
        box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z22 {
        box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z23 {
        box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation--z24 {
        box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
      }

      .vwc-elevation-transition {
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
        transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
        will-change: box-shadow;
      }
    `
  }
}

export class VwcFunctions {

  static ApplyRipple(el : HTMLElement) : void {
    el.addEventListener('click', e => this.RippleHandler(el, e));
  }

  static RippleHandler(el : HTMLElement, ev: any) : void {
    const e = ev.touches ? ev.touches[0] : ev;
    const r = el.getBoundingClientRect();
    const d = Math.sqrt(Math.pow(r.width,2) + Math.pow(r.height,2)) * 2;
    el.style.cssText = `--s: 0; --o: 1;`;
    el.offsetTop;
    el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${e.clientX - r.left}; --y:${e.clientY - r.top};`
  }
}
