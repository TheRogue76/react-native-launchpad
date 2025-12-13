import { type CurrencyFormatter, currencyFormatterSI } from '../../libs/StringLibs';
import { injectable, inject } from '@inversifyjs/core';

export interface OrderRepo {
  latestOrder(): string;
}

@injectable()
export class OrderRepoImpl implements OrderRepo {
  constructor(
    @inject(currencyFormatterSI)
    private readonly currencyFormatter: CurrencyFormatter,
  ) {}
  latestOrder(): string {
    return this.currencyFormatter.format(1234);
  }
}