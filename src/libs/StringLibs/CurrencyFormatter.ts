import { singleton } from 'launchpad-dependency-injection';

export interface CurrencyFormatter {
  format(number: number): string
}

@singleton()
export class CurrencyFormatterImpl implements CurrencyFormatter {
  format(number: number): string {
    return number.toString();
  }
}