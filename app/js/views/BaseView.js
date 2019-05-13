class BaseView {
    constructor(selector) {
        this._element = $(selector);
    }
    update(model) {
        this._element.html(this.template(model));
    }
}
