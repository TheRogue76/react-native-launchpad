import {container} from '../Core/DI.ts';
import {
  CurrencyFormatter,
  CurrencyFormatterImpl,
} from './CurrencyFormatter.ts';
import { ServiceIdentifier } from '@inversifyjs/common';

export const currencyFormatterSI: ServiceIdentifier<CurrencyFormatter> = Symbol.for('CurrencyFormatter');

container.bind<CurrencyFormatter>(currencyFormatterSI).to(CurrencyFormatterImpl).inSingletonScope()