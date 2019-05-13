/**
 * This controller will handle the user inputs to build a negotiation
 */
class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView("#negotiationsView");
        this._feedbackView = new FeedbackView("#feedbackView");
        this._inputData = $("#date");
        this._inputQuantity = $("#quantity");
        this._inputValue = $("#value");
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        event.preventDefault();
        const negotiation = new Negotiation(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
        this._feedbackView.update("Negociação adicionada com sucesso");
    }
}
