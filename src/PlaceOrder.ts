import Coupon from "./Coupon";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import NumberOrderGenerator from "./NumberOrderGenerator";
import Order from "./Order";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ZipcodeCalculatorAPIMemory from "./ZipcodeCalculatorAPIMemory";

export default class PlaceOrder {
    coupons: Coupon[];
    orders: Order[];
    items: Item[];
    zipcodeCalculator: ZipcodeCalculatorAPIMemory;
    
    constructor() {
        this.coupons = [
            new Coupon('VALE20', 20, new Date('2021-08-31 23:59:59')),
            new Coupon('VALE15', 15, new Date('2021-07-31 23:59:59')),
        ];
        this.items = [
            new Item("1", "Guitarra", 1000, 100, 50, 15, 3),
            new Item("2", "Amplificador", 5000, 50, 50, 50, 22),
            new Item("3", "Cabo", 30, 10, 10, 10, 1)
        ]
        this.orders = [];
        this.zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
    }

    execute(input: PlaceOrderInput): PlaceOrderOutput {
        const order = new Order(input.cpf);
        const distance = this.zipcodeCalculator.calculate(input.zipcode, "99.999-999");
        for (const orderItem of input.items) {
            const item = this.items.find(item => item.id === orderItem.itemId);
            if(!item) {
                throw new Error("Item not found");
            }
            order.addItem(orderItem.itemId, orderItem.price, orderItem.quantity);
            order.freight += FreightCalculator.calculate(distance, item) * orderItem.quantity;
        }
        if (input.coupon) {
            const coupon = this.coupons.find(coupon => coupon.code === input.coupon);
            if (coupon) {
                order.addCoupon(coupon);
            }
        }
        const total = order.getTotal();
        order.orderNumber = NumberOrderGenerator.generate(0);
        this.orders.push(order);
        return new PlaceOrderOutput({
            freight: order.freight,
            total,
            orderNumber: order.orderNumber
        });
    }
}