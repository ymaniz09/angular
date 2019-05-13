import { Negotiation } from "./Negotiation";
import { MyObject } from "./MyObject";

export class Negotiations implements MyObject<Negotiations> {
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

    equals(negotiations: Negotiations): boolean {

        return JSON.stringify(this._negotiations) == JSON.stringify(negotiations.toArray());
    }
}