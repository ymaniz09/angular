System.register(["./Printable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Printable_1, Negotiation;
    return {
        setters: [
            function (Printable_1_1) {
                Printable_1 = Printable_1_1;
            }
        ],
        execute: function () {
            Negotiation = class Negotiation extends Printable_1.Printable {
                constructor(date, quantity, value) {
                    super();
                    this.date = date;
                    this.quantity = quantity;
                    this.value = value;
                }
                get total() {
                    return this.quantity * this.value;
                }
                logOnConsole() {
                    console.log('-- logOnConsole --');
                    console.log(`
            Date: ${this.date}
            Quantity: ${this.quantity}, 
            Value: ${this.value}, 
            Total: ${this.total}
            `);
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
