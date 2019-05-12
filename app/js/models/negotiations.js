class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    /**
     * Avoiding allowing editing the array values
     */
    toArray() {
        return [].concat(this._negotiations);
    }
}
