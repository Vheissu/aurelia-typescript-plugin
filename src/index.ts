import {FrameworkConfiguration} from 'aurelia-framework';
export function configure(aurelia: FrameworkConfiguration) {
    aurelia.globalResources([
        './tabs',
        './tab-sections',
        './tab-section'
    ]);
}
