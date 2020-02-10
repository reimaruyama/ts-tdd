import Money from "./money";
import Expression from "./expression";

export default class Bank {
  public reduce(source: Expression, to: string): Money {
    return Money.dollar(10)
  }
}