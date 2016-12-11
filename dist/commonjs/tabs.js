"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var aurelia_templating_1 = require("aurelia-templating");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var Tabs = (function () {
    function Tabs(element, ea) {
        this.tabs = null;
        this.inmodal = false;
        this.element = element;
        this.ea = ea;
    }
    Tabs.prototype.attached = function () {
        //let sections = document.getElementsByClassName('tab-sections__tab-section');
        var _this = this;
        if (this.inmodal) {
            this.element.classList.add('tabs--modal');
        }
        this.element.addEventListener('click', function (e) {
            if (e.target && e.target.tagName === 'A') {
                var sectionId = e.target.getAttribute('href').replace('#', '');
                var section = document.getElementById("_tabbed-section-" + sectionId);
                if (section) {
                    _this.ea.publish("tab.change-" + sectionId, {});
                    var selectedTabs = document.getElementsByClassName('tabs__tab--selected');
                    if (selectedTabs[0]) {
                        selectedTabs[0].classList.remove('tabs__tab--selected');
                    }
                    e.target.parentElement.classList.add('tabs__tab--selected');
                    document.getElementsByClassName('tab-sections__tab-section--active')[0].classList.remove('tab-sections__tab-section--active');
                    section.classList.add('tab-sections__tab-section--active');
                }
            }
            e.preventDefault();
        });
    };
    return Tabs;
}());
__decorate([
    aurelia_templating_1.bindable
], Tabs.prototype, "tabs", void 0);
__decorate([
    aurelia_templating_1.bindable
], Tabs.prototype, "inmodal", void 0);
Tabs = __decorate([
    aurelia_templating_1.customElement('tabs'),
    aurelia_dependency_injection_1.inject(Element, aurelia_event_aggregator_1.EventAggregator)
], Tabs);
exports.Tabs = Tabs;
