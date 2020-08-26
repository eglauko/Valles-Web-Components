
import { __decorate } from "tslib";

import { style } from '@material/mwc-top-app-bar/mwc-top-app-bar-css';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { passiveEventOptionsIfSupported } from '@material/mwc-top-app-bar/mwc-top-app-bar-base-base';
import MDCFixedTopAppBarFoundation from '@material/top-app-bar/fixed/foundation';
import { property } from 'lit-element';
import { customElement } from 'lit-element';
import { css } from 'lit-element';

export class VmTopAppBarBase extends TopAppBarBase {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCFixedTopAppBarFoundation;
        this.fixed = false;
        this.barCssClass = null;
    }
    barClasses() {
        let cssClass = this.barCssClass;
        let baseClasses = cssClass !== null
            ? Object.assign(Object.assign({}, super.barClasses()), { cssClass: true })
            : Object.assign({}, super.barClasses());

        baseClasses = Object.assign(baseClasses, { 'vm-top-app-bar': true });

        return this.fixed 
            ? Object.assign(baseClasses, { 'mdc-top-app-bar--fixed': true })
            : baseClasses;
    }
    registerListeners() {
        if (this.fixed)
            this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, passiveEventOptionsIfSupported);
    }
    unregisterListeners() {
        if (this.fixed)
            this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
    }
}

__decorate([
    property({ type: Boolean, reflect: true })
], VmTopAppBarBase.prototype, "fixed", void 0);

__decorate([
    property({ type: String, reflect: true })
], VmTopAppBarBase.prototype, "barCssClass", void 0);

let VmTopAppBar = class VmTopAppBar extends VmTopAppBarBase {}

VmTopAppBar.styles = css`${style} .vm-top-app-bar{z-index: 7!important;}`;
VmTopAppBar = __decorate([
    customElement('vm-top-app-bar')
], VmTopAppBar);
export { VmTopAppBar };

