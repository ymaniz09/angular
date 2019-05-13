System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegotiationController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negotiationsView");
                    this._feedbackView = new index_2.FeedbackView("#feedbackView");
                    this._inputData = $("#date");
                    this._inputQuantity = $("#quantity");
                    this._inputValue = $("#value");
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    event.preventDefault();
                    const negotiation = new index_1.Negotiation(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._feedbackView.update("Negociação adicionada com sucesso");
                }
            };
            exports_1("NegotiationController", NegotiationController);
        }
    };
});
