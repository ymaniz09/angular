/**
 * This controller will handle the user inputs to build a negotiation
 */

 class NegotiationController {

    private _inputData: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();

    constructor() {
        this._inputData = <HTMLInputElement> document.querySelector("#date")
        this._inputQuantity = <HTMLInputElement> document.querySelector("#quantity")
        this._inputValue = <HTMLInputElement> document.querySelector("#value")

    }

    add(event:Event) {
        event.preventDefault();
        const negotiation = new Negotiation(
            new Date(this._inputData.value.replace(/-/g, ",")),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );

        this._negotiations.add(negotiation);
        this._negotiations.toArray().forEach(negotiation => {
            console.log(negotiation.date);
            console.log(negotiation.quantity);
            console.log(negotiation.value);
        });
        
    }
 }