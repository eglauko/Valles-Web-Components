import { __decorate } from "tslib";

import { style } from '@material/mwc-top-app-bar/mwc-top-app-bar-css';
import { BaseElement } from '@material/mwc-base/base-element';
import { customElement } from 'lit-element';
import { css } from 'lit-element';
import { html } from 'lit-element';

let VmAppBar = class VmAppBar extends BaseElement {
    render() {
        return html`
  <div class="mdc-top-app-bar__row vm-app-bar">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <slot name="start"></slot>
      <span class="mdc-top-app-bar__title"><slot name="title"></slot></span>
      <slot name="middle"></slot>
    </section>
    <slot name="center"></slot>
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
      <slot name="end"></slot>
    </section>
  </div>
`;
    }
}
VmAppBar.styles = css`${style} .mdc-top-app-bar__row.vm-app-bar { height:40px; border-bottom: 1px solid rgb(224, 224, 224); }`;
VmAppBar = __decorate([
    customElement('vm-app-bar')
], VmAppBar);