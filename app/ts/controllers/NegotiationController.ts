/**
 * This controller will handle the user inputs to build a negotiation
 */

class NegotiationController {
    private _inputData: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView("#negotiationsView");
    private _feedbackView = new FeedbackView("#feedbackView");

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#date");
        this._inputQuantity = <HTMLInputElement>document.querySelector("#quantity");
        this._inputValue = <HTMLInputElement>document.querySelector("#value");

        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();
        const negotiation = new Negotiation(
            new Date(this._inputData.value.replace(/-/g, ",")),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);

        this._feedbackView.update("Negociação adicionada com sucesso");
    }
}
