import Money from "./money";
import Expression from "./expression";
import Sum from './sum';
import pair from './pair';

export default class Bank {
  private _rates: Map<string, number>;

  constructor() {
    this._rates = new Map();
  }

  public rate(from: string, to:string): number | undefined {
    if (from === to) {
      return 1;
    }

    if (!this._rates.has(pair(from, to))) {
      throw Error;
    }

    return this._rates.get(pair(from, to));
  }

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public addRate(from: string, to: string, rate: number): void {
    this._rates.set(pair(from, to), rate)
  }
}
