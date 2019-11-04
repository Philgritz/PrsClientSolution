export class Request {

    //make sure matches backend, case sensitive, test in postman?

    id: number = 0;
    description: string;
    justification: string;
    reasonRejection: string;
    deliveryMode: string;
    status: string = "NEW";
    total: number = 0;
    userId: number = 0;
    user: string;
    
    constructor(){}
}