import Coupon from "./Coupon";
import Cpf from "./cpf";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    itens: OrderItem[] = [];
    coupon: Coupon | undefined;
    freight: number;
    
    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.freight = 0;
    }
    
    addItem(description: string, price: number, quantity: number) {
        this.itens.push(new OrderItem(description, price, quantity));
    }
    
    addCoupon(coupon: Coupon) {
        if (!coupon?.isExpired()) {
            this.coupon = coupon;
        }
    }
    
    getTotal() {
        let total = 0;
        this.itens.forEach(i => total += i.getTotal());
        if (this.coupon) {
            total -= (total * this.coupon.percentage)/100;
        }
        total += this.freight;
        return total;
    }
    
}