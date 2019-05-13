export class Negotiation {

    constructor(readonly date: Date, readonly quantity: number, readonly value: number) {}

    get total() {

        return this.quantity * this.value;
    }
}

