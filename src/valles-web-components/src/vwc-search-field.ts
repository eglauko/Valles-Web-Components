
import { LitElement, html, css, customElement, property } from 'lit-element';
import { TextField } from '@material/mwc-textfield';
import { VwcEvents } from './shared';

@customElement('vwc-search-field')
export class SearchField extends TextField {
  static styles = css`
    ${TextField.styles}
    :host {
      --mdc-shape-small: calc(var(--vwc-search-field--height, 36px) / 2);
      padding: var(--vwc-search-field--padding, 4px 0 0 0);
      height: var(--vwc-search-field--height, 36px);
      --mdc-notched-outline-notch-offset: var(--vwc-search-field--height, 28px);
    }
    :host label {
      height: var(--vwc-search-field--height, 36px);
    }
    ::slotted {
      --mdc-shape-small: 18px;
    }
  `;

  constructor() {
    super();
    this.type = "search";
    this.icon = "search";
    this.outlined = true;
    this.onchange = this._change;
    this.onkeyup = this._keyUp;
  }

  private lastKeyPressValues = {
    origin: KeyboardEvent,
    key: "",
    value: ""
  };

  private _change(e: any) {
    if ((e.target) && (e.target.value)) {
      if (e.target.value.length > 0) {
        const event = new CustomEvent(VwcEvents.Search, {
          bubbles: true,
          composed: true,
          detail: {
            origin: e,
            value: e.target.value
          },
        });

        this.dispatchEvent(event);
      }
      else {
        const event = new CustomEvent(VwcEvents.SearchOff, {
          bubbles: true,
          composed: true,
          detail: {
            origin: e
          },
        });

        this.dispatchEvent(event);
      }
    }
  }

  private _keyUp(e: KeyboardEvent)
  {
    var values = {
      origin: e as any,
      key: e.key.length == 1 ? e.key : "",
      value: (e.target as any).value
    };

    if (this.lastKeyPressValues.value == values.value)
      return;

    this.lastKeyPressValues = values;

    const event = new CustomEvent(VwcEvents.SearchKeyPress, {
      bubbles: true,
      composed: true,
      detail: values,
    });

    this.dispatchEvent(event);
  }
}
