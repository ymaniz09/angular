import { Negotiation } from "./Negotiation";

export class Negotiations {
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
}