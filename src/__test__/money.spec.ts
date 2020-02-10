import Bank from '../bank';
import Expression from '../expression'
import Money from '../money';
import Sum from '../sum';

const assert = require('assert');

describe('Money', () => {
  describe('#plus', () => {
    test('Plus return Sum', () => {
      const five: Money = Money.dollar(5);
      const result: Expression = five.plus(five);
      const sum: Sum = <Sum> result;

      expect(sum.augend).toEqual(five);
      expect(sum.addend).toEqual(five);
    })

    test('$3 + $4 = $7, reduce -> $7', () => {
      const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
      const bank: Bank = new Bank();
      const result: Money = bank.reduce(sum, 'USD');

      expect(Money.dollar(7)).toEqual(result);
    })

    test('Bank.reduce(Money)', () => {
      const bank: Bank = new Bank;
      const result: Money = bank.reduce(Money.dollar(1), 'USD');

      expect(result).toEqual(Money.dollar(1));
    })

    test('2CHF -> 1$', () => {
      const bank = new Bank();
      bank.addRate('CHF', 'USD', 2);
      const result: Money = bank.reduce(Money.franc(2), 'USD');

      expect(result).toEqual(Money.dollar(1));
    })

    test('$5 + $5 = $10', () => {
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

