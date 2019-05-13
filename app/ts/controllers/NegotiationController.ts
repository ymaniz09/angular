import { Negotiations, Negotiation, PartialNegotiation } from "../models/index";
import { NegotiationsView, FeedbackView } from "../views/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegotiationService, HandlerFunction } from "../services/index";

/**
 * This controller will handle the user inputs to build a negotiation
 */

export class NegotiationController {
    @domInject('#date')
    private _inputData: JQuery;

    @domInject('#quantity')
    private _inputQuantity: JQuery;

    @domInject('#value')
    private _inputValue: JQuery;

    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView("#negotiationsView");
    private _feedbackView = new FeedbackView("#feedbackView");
    private _negotiationService = new NegotiationService();

    constructor() {
        this._negotiationsView.update(this._negotiations);
    }

    @throttle()
    add(event: Event) {

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

    @throttle()
    importData() {

        const isOk: HandlerFunction = (res: Response) => {
            if(res.ok) return res;
            throw new Error(res.statusText);
        }

        this._negotiationService.fetchNegotiations(isOk)
            .then((negotiationsToImport: Negotiation[]) => {

                const alreadyImported = this._negotiations.toArray();

                if (negotiationsToImport) {
                    negotiationsToImport.filter(negotiation =>
                    !alreadyImported.some(alreadyImported => 
                        negotiation.equals(alreadyImported)))
                        .forEach(negotiation => 
                            this._negotiations.add(negotiation));
        
                        this._negotiationsView.update(this._negotiations);
                }
            });

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
