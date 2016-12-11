var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { inject } from 'aurelia-dependency-injection';
import { bindable, customElement } from 'aurelia-templating';
var TabSection = (function () {
    function TabSection(element) {
        this.section = null;
        this.element = element;
    }
    TabSection.prototype.attached = function () {
        if (this.element.getAttribute('default-section')) {
            this.element.querySelector('.tab-sections__tab-section').classList.add('tab-sections__tab-section--active');
        }
    };
    return TabSection;
}());
__decorate([
    bindable
], TabSection.prototype, "section", void 0);
__decorate([
    bindable
], TabSection.prototype, "viewModel", void 0);
__decorate([
    bindable
], TabSection.prototype, "viewContent", void 0);
TabSection = __decorate([
    customElement('tab-section'),
    inject(Element)
], TabSection);
export { TabSection };
