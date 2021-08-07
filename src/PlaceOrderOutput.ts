export default class PlaceOrderOutput {
    total: number;
    freight: number;
    orderNumber: string;
    
    constructor({total, freight, orderNumber}: {total: number, freight: number, orderNumber: string}) {
        this.total = total;
        this.freight = freight;
        this.orderNumber = orderNumber;
    }
}