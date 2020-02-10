
export default class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency());
  }

  public currency(): string {
    return this._currency;
  }
  public static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }

  public equals(object: Object): boolean {
    const money = <Money> object
    return this.amount === money.amount && this.currency() === money.currency();
  }
}
