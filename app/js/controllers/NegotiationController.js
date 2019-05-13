System.register(["../models/index", "../views/index", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, NegotiationController, WeekDays;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_1.Negotiations();
                    this._negotiationsView = new index_2.NegotiationsView("#negotiationsView");
                    this._feedbackView = new index_2.FeedbackView("#feedbackView");
                    this._negotiationService = new index_4.NegotiationService();
                    this._negotiationsView.update(this._negotiations);
                }
                add(event) {
                    let date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._isWorkingDay(date)) {
                        this._feedbackView.update('Somente negociações em dias úteis, por favor!');
                        return;
                    }
                    const negotiation = new index_1.Negotiation(new Date(this._inputData.val().replace(/-/g, ",")), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    this._negotiationsView.update(this._negotiations);
                    this._feedbackView.update("Negociação adicionada com sucesso");
                }
                _isWorkingDay(data) {
                    return data.getDay() != WeekDays.Saturday && data.getDay() != WeekDays.Sunday;
                }
                importData() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const isOk = (res) => {
                                if (res.ok)
                                    return res;
                                throw new Error(res.statusText);
                            };
                            const negotiationsToImport = yield this._negotiationService.fetchNegotiations(isOk);
                            const alreadyImported = this._negotiations.toArray();
                            if (negotiationsToImport) {
                                negotiationsToImport.filter(negotiation => !alreadyImported.some(alreadyImported => negotiation.equals(alreadyImported)))
                                    .forEach(negotiation => this._negotiations.add(negotiation));
                                this._negotiationsView.update(this._negotiations);
                            }
                        }
                        catch (err) {
                            this._feedbackView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                index_3.domInject('#date')
            ], NegotiationController.prototype, "_inputData", void 0);
            __decorate([
                index_3.domInject('#quantity')
            ], NegotiationController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#value')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "importData", null);
            exports_1("NegotiationController", NegotiationController);
            (function (WeekDays) {
                WeekDays[WeekDays["Sunday"] = 0] = "Sunday";
                WeekDays[WeekDays["Monday"] = 1] = "Monday";
                WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
                WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
                WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
                WeekDays[WeekDays["Friday"] = 5] = "Friday";
                WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
            })(WeekDays || (WeekDays = {}));
        }
    };
});
