import { PartialNegotiation, Negotiation } from "../models/index";

export class NegotiationService {

    fetchNegotiations(handler: HandlerFunction): Promise<void | Negotiation[]> {
            return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: PartialNegotiation[]) =>
                dados
                    .map(dado => new Negotiation(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err.message);
                throw Error("Error importing negotiations")
            });
    }
}

export interface HandlerFunction {
    (res: Response): Response
}