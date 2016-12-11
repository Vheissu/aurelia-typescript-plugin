import {inject} from 'aurelia-dependency-injection';
import {customElement} from 'aurelia-templating';

@customElement('tab-sections')
@inject(Element)
export class TabSections {
    private element: Element;

    constructor(element: Element) {
        this.element = element;
    }

    attached() {

    }
}
