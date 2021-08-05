import ZipcodeCalculatorAPIMemory from "./ZipcodeCalculatorAPIMemory";

test('Deve calcular a distância entre dois ceps', () => {
    const zipcodeCalculator = new ZipcodeCalculatorAPIMemory();
    const distance = zipcodeCalculator.calculate("11.111-111", "99.999-999");
    expect(distance).toBe(1000);
});