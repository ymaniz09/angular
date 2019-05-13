System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseView;
    return {
        setters: [],
        execute: function () {
            BaseView = class BaseView {
                constructor(selector) {
                    this._element = $(selector);
                }
                update(model) {
                    this._element.html(this.template(model));
                }
            };
            exports_1("BaseView", BaseView);
        }
    };
});
