import { Negotiation } from "./Negotiation";
import { Printable } from "./Printable";

export class Negotiations extends Printable {
    private _negotiations: Negotiation[] = [];

    add(negotiation:Negotiation): void {
        this._negotiations.push(negotiation);
    }

    /**
     * Avoiding allowing editing the array values
     */
    toArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }

    logOnConsole(): void {
        console.log('-- logOnConsole --');
        console.log(JSON.stringify(this._negotiations));
    }
}