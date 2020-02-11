import Bank from './bank';
import Money from "./money";
import Expression from "./expression";

export default class Sum implements Expression {
  public augend: Expression;
  public addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend
    this.addend = addend
  }

  public plus(added: Expression): Expression {
    return new Sum(this, added)
  }

  public reduce(bank: Bank, to: string) {
    const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }

  public times(multiplier: number) {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
}