System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseView;
    return {
        setters: [],
        execute: function () {
            BaseView = class BaseView {
                constructor(selector, escape = false) {
                    this._element = $(selector);
                    this._escape = escape;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escape)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._element.html(this.template(model));
                }
            };
            exports_1("BaseView", BaseView);
        }
    };
});
