export abstract class BaseView<T> {

    private _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape: boolean = false) {
        this._element = $(selector);

        this._escape = escape;
    }

    update(model: T): void {

        let template = this.template(model);

        /* Removing possible malicious scripts */
        if(this._escape) 
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._element.html(this.template(model));
    }

    abstract template(model: T): string;
}