export default class OrderItem {
    itemId: string;
    price: number;
    quantity: number;

    constructor(itemId: string, price: number, quantity: number) {
        this.itemId = itemId;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}