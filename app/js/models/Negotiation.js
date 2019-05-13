System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negotiation;
    return {
        setters: [],
        execute: function () {
            Negotiation = class Negotiation {
                constructor(date, quantity, value) {
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
                equals(negotiation) {
                    return this.date.getDate() == negotiation.date.getDate()
                        && this.date.getMonth() == negotiation.date.getMonth()
                        && this.date.getFullYear() == negotiation.date.getFullYear();
                }
            };
            exports_1("Negotiation", Negotiation);
        }
    };
});
