import { LitElement, html, css, customElement } from 'lit-element';
import { render } from 'lit-html';

@customElement('x-form-sample')
export class SAmples extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <vwc-fields-in-row>

        <vwc-field col="6" sm=12>
          <mwc-textfield label="Campo 50 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="6" xs="9">
          <mwc-textfield label="Campo 50 2"></mwc-textfield>
        </vwc-field>

        <vwc-field col="2" lg="1" sm="3" xs="6">
          <mwc-textfield label="C: 2 / 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="10" lg="11" xs="6">
          <mwc-textfield label="COL: WHEN LESS THEN 1200 THEN 10 ELSE BIGGER THEN 11"></mwc-textfield>
        </vwc-field>

        <vwc-field col="2">
          <mwc-textfield label="COL 2"></mwc-textfield>
        </vwc-field>
        <vwc-field col="10" sm="9" fullsize-xs>
          <mwc-textfield label="COL 10"></mwc-textfield>
        </vwc-field>

        <vwc-field col="5" lg="4" xl="3" fullsize-sm>
          <mwc-textfield label="C: 5/4/3"></mwc-textfield>
        </vwc-field>
        <vwc-field col="7" lg="8" xl="9" fullsize-sm>
          <mwc-textfield label="COL: When less the 1200 then 7 when less then 1856 the 8 else 9"></mwc-textfield>
        </vwc-field>

        <vwc-field col="4" fullsize-sm>
          <mwc-textfield label="COL 4"></mwc-textfield>
        </vwc-field>
        <vwc-field col="8">
          <mwc-textfield label="COL 8"></mwc-textfield>
        </vwc-field>

        <vwc-field col="5" sm="6">
          <mwc-textfield label="COL 5"></mwc-textfield>
        </vwc-field>
        <vwc-field col="7" sm="6">
          <mwc-textfield label="COL 7"></mwc-textfield>
        </vwc-field>

        <vwc-field col="3" sm="6">
          <mwc-textfield label="COL 3 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="3" sm="6">
          <mwc-textfield label="COL 3 2"></mwc-textfield>
        </vwc-field>
        <vwc-field col="3" sm="6">
          <mwc-textfield label="COL 3 3"></mwc-textfield>
        </vwc-field>
        <vwc-field col="3" sm="6">
          <mwc-textfield label="COL 3 4"></mwc-textfield>
        </vwc-field>

        <vwc-field style="--vwc-fields-columns: 20; --vwc-field-col: 15; --vwc-field-col-sm: 15;">
          <mwc-textfield label="COL 75%"></mwc-textfield>
        </vwc-field>

        <vwc-field style="--vwc-fields-columns: 20; --vwc-field-col: 5; --vwc-field-col-sm: 5;">
          <mwc-textfield label="COL 25%"></mwc-textfield>
        </vwc-field>

      </vwc-fields-in-row>
    `
  }
}

@customElement('x-form-sample-2')
export class Samples2 extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <vwc-fields-in-row>

        <vwc-field col="1" tcol="1" pcol="1">
          <mwc-textfield label="C 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="11" tcol="7" pcol="3">
          <mwc-textfield label="C 11"></mwc-textfield>
        </vwc-field>

        <vwc-field col="2" tcol="2" pcol="4">
          <mwc-textfield label="COL 2"></mwc-textfield>
        </vwc-field>
        <vwc-field col="10" tcol="6">
          <mwc-textfield label="C 10"></mwc-textfield>
        </vwc-field>

        <vwc-field col="3" tcol="3" pcol="4">
          <mwc-textfield label="C 3"></mwc-textfield>
        </vwc-field>
        <vwc-field col="9" tcol="5">
          <mwc-textfield label="C 9"></mwc-textfield>
        </vwc-field>

        <vwc-field col="4" tcol="3" pcol="4">
          <mwc-textfield label="COL 4"></mwc-textfield>
        </vwc-field>
        <vwc-field col="8" tcol="5">
          <mwc-textfield label="COL 8"></mwc-textfield>
        </vwc-field>

        <vwc-field col="5" tcol="4">
          <mwc-textfield label="COL 5"></mwc-textfield>
        </vwc-field>
        <vwc-field col="7" tcol="4">
          <mwc-textfield label="COL 7"></mwc-textfield>
        </vwc-field>

        <vwc-field col="6" tcol="4">
          <mwc-textfield label="C 6 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="6" tcol="4">
          <mwc-textfield label="C 6 2"></mwc-textfield>
        </vwc-field>

        <vwc-field col="7" tcol="4">
          <mwc-textfield label="COL 1"></mwc-textfield>
        </vwc-field>
        <vwc-field col="5" tcol="4">
          <mwc-textfield label="COL 5"></mwc-textfield>
        </vwc-field>

        <vwc-field col="8" tcol="5">
          <mwc-textfield label="COL 3"></mwc-textfield>
        </vwc-field>
        <vwc-field col="4" tcol="3">
          <mwc-textfield label="COL 4"></mwc-textfield>
        </vwc-field>

        <vwc-field col="9" tcol="5">
          <mwc-textfield label="COL 9"></mwc-textfield>
        </vwc-field>
        <vwc-field col="3" tcol="3">
          <mwc-textfield label="COL 3"></mwc-textfield>
        </vwc-field>

        <vwc-field col="10" tcol="6">
          <mwc-textfield label="COL 10"></mwc-textfield>
        </vwc-field>
        <vwc-field col="2" tcol="2">
          <mwc-textfield label="COL 2"></mwc-textfield>
        </vwc-field>

        <vwc-field col="11" tcol="7" pcol="3" qcol="3">
          <mwc-textfield label="COL 11"></mwc-textfield>
        </vwc-field>
        <vwc-field col="1" tcol="1" pcol="1" qcol="1">
          <mwc-textfield label="COL 1"></mwc-textfield>
        </vwc-field>

        <vwc-field col="12">
          <mwc-textfield label="COL 12"></mwc-textfield>
        </vwc-field>

      </vwc-fields-in-row>
    `
  }
}

@customElement('x-form-sample-3')
export class Samples3 extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <vwc-fields-in-row>

        <vwc-field col="3" xl=1 tcol="2" pcol="4">
          <mwc-textfield label="Código" iconTrailing="search"></mwc-textfield>
        </vwc-field>

        <vwc-field class="has-addon" col="3" xl=2 tcol="2" pcol="4">
          <vwc-text-field label="Código"></vwc-text-field>
          <mwc-icon-button icon=search></mwc-icon-button>
        </vwc-field>

        <vwc-field col="3" xl=2 tcol="2" pcol="4">
          <vwc-text-field label="Código">
            <mwc-icon-button slot=addon icon=search @click=${this.IconClickHandler} tabindex="-1"></mwc-icon-button>
          </vwc-text-field>
        </vwc-field>

        <vwc-field col="6" xl=4 tcol="4" pcol="4">
          <vwc-text-field label="Nome"></vwc-text-field>
        </vwc-field>

      </vwc-fields-in-row>
    `
  }

  IconClickHandler(e : any) {
    console.log(e.target);
  }
}

render(
  html`
    <x-form-sample></x-form-sample>
  `,
  document.querySelector('#form-sample') ?? document.createElement("div")
);

render(
  html`
    <x-form-sample-2></x-form-sample-2>
  `,
  document.querySelector('#form-sample-2') ?? document.createElement("div")
);

render(
  html`
    <x-form-sample-3></x-form-sample-3>
  `,
  document.querySelector('#form-sample-3') ?? document.createElement("div")
);
