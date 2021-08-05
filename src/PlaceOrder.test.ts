import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";

test('Deve fazer um pedido', () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        zipcode: '11.111-11',
        items: [
            { itemId: "1", price: 1000, quantity: 2},
            { itemId: "2", price: 5000, quantity: 1},
            { itemId: "3", price: 30, quantity: 3}
        ],
        coupon: 'VALE20'
    });
    const placeOrder = new PlaceOrder();
    const output = placeOrder.execute(input);
    expect(output.total).toBe(5982);
});

test('Deve fazer um pedido com cupom de desconto expirado', () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        zipcode: '11.111-11',
        items: [
            { itemId: "1", price: 1000, quantity: 2},
            { itemId: "2", price: 5000, quantity: 1},
            { itemId: "3", price: 30, quantity: 3}
        ],
        coupon: 'VALE15'
    });
    const placeOrder = new PlaceOrder();
    const output = placeOrder.execute(input);
    expect(output.total).toBe(7400);
});

test('Deve fazer um pedido com cálculo de frete', () => {
    const input = new PlaceOrderInput({
        cpf: '778.278.412-36',
        zipcode: '11.111-11',
        items: [
            { itemId: "1", price: 1000, quantity: 2},
            { itemId: "2", price: 5000, quantity: 1},
            { itemId: "3", price: 30, quantity: 3}
        ],
        coupon: 'VALE15'
    });
    const placeOrder = new PlaceOrder();
    const output = placeOrder.execute(input);
    expect(output.freight).toBe(310);
});
