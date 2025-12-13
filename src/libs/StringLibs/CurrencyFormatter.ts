import { injectable } from '@inversifyjs/core';

export interface CurrencyFormatter {
  format(number: number): string
}

@injectable()
export class CurrencyFormatterImpl implements CurrencyFormatter {
  format(number: number): string {
    return number.toString();
  }
}