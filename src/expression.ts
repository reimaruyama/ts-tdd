import Money from './money'
import Bank from './bank'

export default interface Expression {
  times(multiplier: number): Expression;
  plus(added: Expression): Expression;
  reduce(bank: Bank, to: string): Money;
}