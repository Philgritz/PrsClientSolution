export class Product {

    //make sure matches backend, case sensitive, test in postman?

   
    id: number = 0;
    partNbr: string;
    name: string;
    price: number = 0;
    unit: string;
    photoPath: string;
    vendorId: number = 0;
    vendor: string;

    constructor(){}
}