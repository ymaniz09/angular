System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logObjects(...objects) {
        objects.forEach(object => object.logOnConsole());
    }
    exports_1("logObjects", logObjects);
    return {
        setters: [],
        execute: function () {
        }
    };
});
