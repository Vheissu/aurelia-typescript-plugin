import { EventAggregator } from 'aurelia-event-aggregator';
export declare class Tabs {
    private element;
    private ea;
    tabs: null;
    inmodal: boolean;
    constructor(element: Element, ea: EventAggregator);
    attached(): void;
}
