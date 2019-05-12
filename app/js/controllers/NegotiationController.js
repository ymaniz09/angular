/**
 * This controller will handle the user inputs to build a negotiation
 */
class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negotiationsView");
        this._inputData = document.querySelector("#date");
        this._inputQuantity = document.querySelector("#quantity");
        this._inputValue = document.querySelector("#value");
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputData.value.replace(/-/g, ",")), parseInt(this._inputQuantity.value), parseFloat(this._inputValue.value));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
    }
}
