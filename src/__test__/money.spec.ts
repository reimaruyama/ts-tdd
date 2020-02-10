import Bank from '../bank';
import Expression from '../expression'
import Money from '../money';

const assert = require('assert');

describe('Money', () => {
  describe('#plus', () => {
    test('Simple addition', () => {
      const five: Money = Money.dollar(5);
      const sum: Expression = five.plus(five);
      const bank: Bank = new Bank()
      const reduced = bank.reduce(sum, 'USD');

      expect(reduced).toEqual(Money.dollar(10));
    })
  })

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

