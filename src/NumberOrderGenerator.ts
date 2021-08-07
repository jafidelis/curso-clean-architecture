export default class NumberOrderGenerator {
    static generate(value: number): string {
        const prefix = new Date().getFullYear();
        const sequence = value ? value + 1 : 1;
        return `${prefix}${String(sequence).padStart(8, '0')}`;
    }
}