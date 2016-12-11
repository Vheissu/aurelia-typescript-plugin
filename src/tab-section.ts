import {inject} from 'aurelia-dependency-injection';
import {bindable, customElement} from 'aurelia-templating';

@customElement('tab-section')
@inject(Element)
export class TabSection {
    private element: Element | any;

    @bindable section = null;
    @bindable viewModel: any;
    @bindable viewContent: any;

    constructor(element: Element) {
        this.element = element;
    }

    attached() {
        if (this.element.getAttribute('default-section')) {
            this.element.querySelector('.tab-sections__tab-section').classList.add('tab-sections__tab-section--active');
        }
    }
}
