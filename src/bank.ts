import Money from "./money";
import Expression from "./expression";
import Sum from './sum';

export default class Bank {
  public reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
