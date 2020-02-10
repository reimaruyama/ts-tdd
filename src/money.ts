import Expression from './expression';
import Sum from './sum';

export default class Money implements Expression {
  public amount: number;
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

  public reduce(to: string): Money {
    return this;
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency());
  }
}
