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
      expect(new Dollar(5)).toEqual(new Dollar(5));
    })
    test('$5 != $6', () => {
      expect(new Dollar(5)).not.toEqual(new Dollar(6));
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
      expect(new Franc(5)).toEqual(new Franc(5));
    })
    test('$5 != $6', () => {
      expect(new Franc(5)).not.toEqual(new Franc(6));
    })
  })
})
