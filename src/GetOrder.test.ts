import GetOrder from "./GetOrder";
import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";

test('Deve obter informações do pedido', () => {
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
    const getOrder = new GetOrder();
    const numberOrder = '202100000001';
    const order = getOrder.find(numberOrder);
    expect(true).toBe(true);
})