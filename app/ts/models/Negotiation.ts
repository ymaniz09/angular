import { MyObject } from "./MyObject";

export class Negotiation implements MyObject<Negotiation> {

    constructor(readonly date: Date, readonly quantity: number, readonly value: number) {}

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

    equals(negotiation: Negotiation): boolean {
        return this.date.getDate() == negotiation.date.getDate()
            && this.date.getMonth() == negotiation.date.getMonth()
            && this.date.getFullYear() == negotiation.date.getFullYear();
    }
}

