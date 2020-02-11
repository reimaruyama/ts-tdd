import Bank from './bank';
import Money from "./money";
import Expression from "./expression";

export default class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend
    this.addend = addend
  }

  public reduce(bank: Bank, to: string) {
    const amount: number = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}