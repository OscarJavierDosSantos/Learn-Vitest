import { add } from './sample';

// Test elements
// describe: agrupa los test de una suite
// test: test unitario
// it: test unitario
// expect: aserción
// to...: matcher

describe('add tests', () => {
    test('it should be 5 when add 2 and 3', () => {
        const num1 = 2;
        const num2 = 3;
        const expectd = 5;
        const result = add(num1, num2);
        expect(result).toBe(expectd);
    });
    test('it should be -5 when add -2 and -3', () => {
        expect(add(-2, -3)).toBe(-5);
    });
});
