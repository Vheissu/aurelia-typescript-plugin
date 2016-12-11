System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia) {
        aurelia.globalResources([
            './tabs',
            './tab-sections',
            './tab-section'
        ]);
    }
    exports_1("configure", configure);
    return {
        setters: [],
        execute: function () {
        }
    };
});
