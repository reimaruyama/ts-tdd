export default class Dollar {
  public amount

  constructor(amount: number) {
    this.amount = amount
  }
  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}