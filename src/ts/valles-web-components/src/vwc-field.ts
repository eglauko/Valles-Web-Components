
import { LitElement, html, css, customElement, property } from 'lit-element';

@customElement('vwc-field')
export class Field extends LitElement {

  static styles = css`

    @media screen and (max-width: 800px) {
      :host {
        --vwc-fields-resize: 0.666667;
      }
    }

    @media screen and (max-width: 576px) {
      :host {
        --vwc-fields-resize: 0.333333;
        --vwc-fields-resize-tablet: 0.5;
      }
    }

    @media screen and (max-width: 360px) {
      :host {
        --vwc-fields-resize: 0.01;
      }
    }

    :host([col="1"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) / var(--vwc-fields-resize, 1));
      /* width: 8.333333%; */
    }

    :host([col="2"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 2 / var(--vwc-fields-resize, 1));
      /* width: 16.666667%; */
    }

    :host([col="3"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 3 / var(--vwc-fields-resize, 1));
      /* width: 25%; */
    }

    :host([col="4"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 4 / var(--vwc-fields-resize, 1));
      /* width: 33.333333%; */
    }

    :host([col="5"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 5 / var(--vwc-fields-resize, 1));
      /* width: 41.666667%; */
    }

    :host([col="6"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 6 / var(--vwc-fields-resize, 1));
      /* width: 50%; */
    }

    :host([col="7"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 7 / var(--vwc-fields-resize, 1));
      /* width: 58.333333%; */
    }

    :host([col="8"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 8 / var(--vwc-fields-resize, 1));
      /* width: 66.666667%; */
    }

    :host([col="9"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 9 / var(--vwc-fields-resize, 1));
      /* width: 75%; */
    }

    :host([col="10"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 10 / var(--vwc-fields-resize, 1));
      /* width: 83.333333%; */
    }

    :host([col="11"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 11 / var(--vwc-fields-resize, 1));
      /* width: 91.666667%; */
    }

    :host([col="12"]) {
      width: calc(100% / var(--vwc-fields-columns, 12) * 12 / var(--vwc-fields-resize, 1));
      /* width: 100%; */
    }

    @media screen and (max-width: 800px) {
      :host([tcol="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 2 / var(--vwc-fields-resize-tablet, 1)) ;
      }

      :host([tcol="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 3 / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 4 / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="5"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 5 / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="6"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 6 / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="7"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 7 / var(--vwc-fields-resize-tablet, 1));
      }

      :host([tcol="8"]) {
        width: calc(100% / var(--vwc-fields-columns, 8) * 8 / var(--vwc-fields-resize-tablet, 1));
      }
    }

    @media screen and (max-width: 576px) {
      :host([pcol="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 4));
      }

      :host([pcol="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 4) * 2);
      }

      :host([pcol="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 4) * 3);
      }

      :host([pcol="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 4) * 4);
      }
    }

    :host {
      display: flex;
      position: relative;

      flex: 0 0 auto;
      width: auto;
    }

    :host {
      width: calc(100% / var(--vwc-fields-columns, 12) * var(--vwc-field-col) / var(--vwc-fields-resize, 1));
    }

    @media screen and (max-width: 576px) {
      :host([xs="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 12));
      }

      :host([xs="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 2);
      }

      :host([xs="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 3);
      }

      :host([xs="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 4);
      }

      :host([xs="5"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 5);
      }

      :host([xs="6"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 6);
      }

      :host([xs="7"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 7);
      }

      :host([xs="8"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 8);
      }

      :host([xs="9"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 9);
      }

      :host([xs="10"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 10);
      }

      :host([xs="11"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 11);
      }

      :host([xs="12"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 12);
      }

      :host {
        width: calc(100% / var(--vwc-fields-columns, 12) * var(--vwc-field-col-xs));
      }
    }

    @media screen and (max-width: 800px) {
      :host([sm="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 12));
      }

      :host([sm="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 2);
      }

      :host([sm="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 3);
      }

      :host([sm="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 4);
      }

      :host([sm="5"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 5);
      }

      :host([sm="6"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 6);
      }

      :host([sm="7"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 7);
      }

      :host([sm="8"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 8);
      }

      :host([sm="9"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 9);
      }

      :host([sm="10"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 10);
      }

      :host([sm="11"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 11);
      }

      :host([sm="12"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 12);
      }

      :host {
        width: calc(100% / var(--vwc-fields-columns, 12) * var(--vwc-field-col-sm));
      }
    }

    @media screen and (min-width: 1200px) {
      :host([lg="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 12));
      }

      :host([lg="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 2);
      }

      :host([lg="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 3);
      }

      :host([lg="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 4);
      }

      :host([lg="5"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 5);
      }

      :host([lg="6"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 6);
      }

      :host([lg="7"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 7);
      }

      :host([lg="8"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 8);
      }

      :host([lg="9"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 9);
      }

      :host([lg="10"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 10);
      }

      :host([lg="11"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 11);
      }

      :host([lg="12"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 12);
      }

      :host {
        width: calc(100% / var(--vwc-fields-columns, 12) * var(--vwc-field-col-lg, var(--vwc-field-col)));
      }
    }

    @media screen and (min-width: 1856px) {
      :host([xl="1"]) {
        width: calc(100% / var(--vwc-fields-columns, 12));
      }

      :host([xl="2"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 2);
      }

      :host([xl="3"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 3);
      }

      :host([xl="4"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 4);
      }

      :host([xl="5"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 5);
      }

      :host([xl="6"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 6);
      }

      :host([xl="7"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 7);
      }

      :host([xl="8"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 8);
      }

      :host([xl="9"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 9);
      }

      :host([xl="10"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 10);
      }

      :host([xl="11"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 11);
      }

      :host([xl="12"]) {
        width: calc(100% / var(--vwc-fields-columns, 12) * 12);
      }

      :host {
        width: calc(100% / var(--vwc-fields-columns, 12) * var(--vwc-field-col-xl, var(--vwc-field-col-lg, var(--vwc-field-col))));
      }
    }

    @media screen and (max-width: 360px) {
      :host([col]) {
        width: 100%;
      }
      :host([qcol="1"]) {
        width: 25%;
      }
      :host([qcol="2"]) {
        width: 50%;
      }
      :host([qcol="3"]) {
        width: 75%;
      }
      :host([qcol="4"]) {
        width: 100%;
      }
    }

    :host([fullsize]) {
      width: 100%;
    }

    @media screen and (max-width: 576px) {
      :host([fullsize-xs]) {
        width: 100%;
      }
    }

    @media screen and (max-width: 800px) {
      :host([fullsize-sm]) {
        width: 100%;
      }
    }

    @media screen and (min-width: 1200px) {
      :host([fullsize-lg]) {
        width: 100%;
      }
    }

    @media screen and (min-width: 1856px) {
      :host([fullsize-xl]) {
        width: 100%;
      }
    }

    ::slotted(*) {
      width: 100%;
      padding-right: calc(var(--vwc-fields-gutter, 0.5rem) / 2);
      padding-left: calc(var(--vwc-fields-gutter, 0.5rem) / 2);
    }

    :host(.has-addon) {
      display: flex;
      justify-content: center;
      height: 100%;
    }

    :host(.has-addon) ::slotted(:first-child) {
      width: auto;
      flex-grow: 1;
      flex-shrink: 1;
    }

    :host(.has-addon) ::slotted(:not(:first-child)) {
      width: auto;
      margin-top: auto;
      margin-bottom: auto;
      flex-grow: 0;
      flex-shrink: 1;
    }
  `;

  @property({type: Number}) col : number = 0;

  render() {
    return html`<slot></slot>`;
  }
}
