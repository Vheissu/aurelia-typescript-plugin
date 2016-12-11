define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.globalResources([
            './tabs',
            './tab-sections',
            './tab-section'
        ]);
    }
    exports.configure = configure;
});
