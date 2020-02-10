
export default abstract class Money {
  protected amount: number;
  public readonly currency: string;

  abstract times(multiplier: number): Money

  public static dollar(amount: number): Money {
    return new Dollar(amount)
  }

  public static franc(amount: number): Money {
    return new Franc(amount)
  }

  public equals(object: Object): boolean {
    const money = <Money> object
    return this.amount === money.amount && this.constructor.name === money.constructor.name;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
    this.currency = 'USD'
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier)
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super()
    this.amount = amount
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier)
  }
}