import Dollar from '../dollar'

describe('Dollar', () => {
  describe("#times", () => {
    test('$5 * 2 = $10, $5 * 3 = $15', () => {
      const five = new Dollar(5);

      var product: Dollar = five.times(2);
      expect(product.amount).toEqual(10);

      var product: Dollar = five.times(3);
      expect(product.amount).toEqual(15);
    })
  })
})