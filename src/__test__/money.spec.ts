import Dollar from '../dollar';
import Franc from '../franc';

describe('Dollar', () => {
  describe("#times", () => {
    test('$5 * 2 = $10, $5 * 3 = $15', () => {
      const five = new Dollar(5);

      expect(five.times(2)).toEqual(new Dollar(10));

      expect(five.times(3)).toEqual(new Dollar(15));
    })
  })
  describe('#equals', () => {
    test('$5 == $5', () => {
      expect(new Dollar(5).equals(new Dollar(5))).toBe(true);
    })
    test('$5 != $6', () => {
      expect(new Dollar(5).equals(new　Dollar(6))).toBe(false);
    })
    test('$5 != 5CHF', () => {
      expect(new Dollar(5).equals(new Franc(5))).toBe(false);
    })
  })
})

describe('Franc', () => {
  describe("#times", () => {
    test('$5 * 2 = $10, $5 * 3 = $15', () => {
      const five = new Franc(5);

      expect(five.times(2)).toEqual(new Franc(10));

      expect(five.times(3)).toEqual(new Franc(15));
    })
  })
  describe('#equals', () => {
    test('$5 == $5', () => {
      expect(new Franc(5).equals(new Franc(5))).toBe(true);
    })
    test('$5 != $6', () => {
      expect(new Franc(5).equals(new Franc(6))).toBe(false);
    })
  })
})
