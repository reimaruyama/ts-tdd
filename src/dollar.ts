export default class Dollar {
  public amount

  constructor(amount: number) {
    this.amount = amount
  }
  public times(multiplier: number): void {
    this.amount *= multiplier;
  }
}