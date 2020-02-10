import Money from './money'

export default interface Expression {
  reduce(to: string): Money;
}