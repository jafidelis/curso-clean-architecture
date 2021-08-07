import NumberOrderGenerator from './NumberOrderGenerator';

test('Deve gerar o número do pedido', () => {
    const sequence = 0;
    const numberOrder = NumberOrderGenerator.generate(sequence);
    const numberOrderExpect = `${new Date().getFullYear()}${String(sequence+1).padStart(8, '0')}`;
    expect(numberOrder).toEqual(numberOrderExpect);
});