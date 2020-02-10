import Money from '../money';
const assert = require('assert');

describe('Money', () => {
  describe('#currency', () => {
    expect(Money.dollar(1).currency()).toEqual('USD');
    expect(Money.franc(1).currency()).toEqual('CHF');
  })

  describe("#times", () => {
    test('$5 * 2 = $10, $5 * 3 = $15', () => {
      const five: Money = Money.dollar(5);

      expect(five.times(2)).toEqual(Money.dollar(10));

      expect(five.times(3)).toEqual(Money.dollar(15));
    })
  })

  describe('#equals', () => {
    test('$5 == $5', () => {
      expect(Money.dollar(5).equals(Money.dollar(5))).toBe(true);
    })
    test('$5 != $6', () => {
      expect(Money.dollar(5).equals(Money.dollar(6))).toBe(false);
    })
    test('$5 != 5CHF', () => {
      expect(Money.dollar(5).equals(Money.franc(5))).toBe(false);
    })
  })
})

