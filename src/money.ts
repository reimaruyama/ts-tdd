import Expression from './expression';

export default class Money implements Expression {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF')
  }

  public currency(): string {
    return this._currency;
  }

  public equals(object: Object): boolean {
    const money = <Money> object

    return this.amount === money.amount && this.currency() === money.currency();
  }

  public plus(object: Object): Expression {
    const money = <Money> object

    return new Money(this.amount + money.amount, this.currency())
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency());
  }
}
