import Dollar from '../dollar'

describe('Dollar', () => {
  describe("#times", () => {
    test('$5 * 2 = $10', () => {
      const five = new Dollar(5);
      five.times(2);
      expect(five.amount).toEqual(10);
    })
  })
})