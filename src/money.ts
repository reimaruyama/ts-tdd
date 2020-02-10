
export default abstract class Money {
  protected amount: number;
  protected _currency: string;

  constructor(amount: number, currency: string) {
    this.amount = amount
    this._currency = currency
  }

  abstract times(multiplier: number): Money

  public currency(): string {
    return this._currency;
  }
  public static dollar(amount: number): Money {
    return new Dollar(amount, 'USD')
  }

  public static franc(amount: number): Money {
    return new Franc(amount, 'CHF')
  }

  public equals(object: Object): boolean {
    const money = <Money> object
    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }
}

export class Dollar extends Money {

  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier)
  }
}

export class Franc extends Money {

  public times(multiplier: number): Franc {
    return Money.franc(this.amount * multiplier)
  }
}