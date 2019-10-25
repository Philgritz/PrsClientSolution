export class Request {

    //make sure matches backend, case sensitive, test in postman?

    id: number = 0;
    description: string;
    justification: string;
    reasonRejection: string;
    deliveryMode: string;
    status: string;
    total: number = 0;
    
    constructor(){}
}