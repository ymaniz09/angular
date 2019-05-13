import { Printable } from "./Printable";

export class Negotiation extends Printable {

    constructor(readonly date: Date, readonly quantity: number, readonly value: number) { 

        super();
    }

    get total() {

        return this.quantity * this.value;
    }

    logOnConsole(): void {
        console.log('-- logOnConsole --');
        console.log(
            `
            Date: ${this.date}
            Quantity: ${this.quantity}, 
            Value: ${this.value}, 
            Total: ${this.total}
            `
        );
    }
}

