import { Negotiations, Negotiation } from "../models/index";
import { NegotiationsView, FeedbackView } from "../views/index";

/**
 * This controller will handle the user inputs to build a negotiation
 */

export class NegotiationController {
    private _inputData: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView("#negotiationsView");
    private _feedbackView = new FeedbackView("#feedbackView");

    constructor() {
        this._inputData = $("#date");
        this._inputQuantity = $("#quantity");
        this._inputValue = $("#value");

        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        event.preventDefault();

        let date = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._isWorkingDay(date)) {
            this._feedbackView.update('Somente negociações em dias úteis, por favor!');
            return 
        }

        const negotiation = new Negotiation(
            new Date(this._inputData.val().replace(/-/g, ",")),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);

        this._feedbackView.update("Negociação adicionada com sucesso");
    }

    private _isWorkingDay(data: Date) {

        return data.getDay() != WeekDays.Saturday && data.getDay() != WeekDays.Sunday;
    }
}

enum WeekDays {
    Sunday,
    Monday,
    Tuesday,
    Wednesday, 
    Thursday, 
    Friday, 
    Saturday, 
}
