import Coupon from "./Coupon";
import Order from "./Order";

test('Não deve criar um pedido com cpf invalido', () => {
    const cpf = '111.111.111-11';
    expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});

test('Deve criar um pedido com 3 itens', () => {
    const cpf = '778.278.412-36';
    const order = new Order(cpf);
    order.addItem('Guitarra', 1000, 2);
    order.addItem('Amplificador', 5000, 1);
    order.addItem('Cabo', 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test('Deve criar um pedido com cupom de desconto', () => {
    const cpf = '778.278.412-36';
    const order = new Order(cpf);
    order.addItem('Guitarra', 1000, 2);
    order.addItem('Amplificador', 5000, 1);
    order.addItem('Cabo', 30, 3);
    order.addCoupon(new Coupon('VALE20', 20, new Date('2021-08-31 23:59:59')));
    const total = order.getTotal();
    expect(total).toBe(5672);
});

test('Não deve aplicar cupom de desconto expirado', () => {
    const cpf = '778.278.412-36';
    const order = new Order(cpf);
    order.addItem('Guitarra', 1000, 2);
    order.addItem('Amplificador', 5000, 1);
    order.addItem('Cabo', 30, 3);
    order.addCoupon(new Coupon('VALE20', 20, new Date('2021-07-31 23:59:59')));
    const total = order.getTotal();
    expect(total).toBe(7090);
});

test('Deve gerar o código do pedido', () => {
    const cpf = '778.278.412-36';
    const order = new Order(cpf);
});
