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
    // TODO: implement
    return Money.dollar(0);
  }

  public reduce(bank: Bank, to: string) {
    const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;

    return new Money(amount, to);
  }
}