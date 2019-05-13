System.register(["./BaseView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseView_1, NegotiationsView;
    return {
        setters: [
            function (BaseView_1_1) {
                BaseView_1 = BaseView_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends BaseView_1.BaseView {
                template(model) {
                    return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
    
                <tbody>
                    ${model.toArray().map(negotiation => {
                        return `
                        <tr>
                            <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                            <td>${negotiation.quantity}</td>
                            <td>${negotiation.value}</td>
                            <td>${negotiation.total}</td>
                        </tr>
                        `;
                    }).join("")}
                </tbody>
    
                <tfoot>
                </tfoot>
            </table>           
            `;
                }
            };
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
