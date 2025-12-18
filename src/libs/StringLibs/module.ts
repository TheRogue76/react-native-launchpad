import {container} from '../Core/DI.ts';
import {
  CurrencyFormatter,
  CurrencyFormatterImpl,
} from './CurrencyFormatter.ts';
import { createToken } from 'launchpad-dependency-injection';

export const currencyFormatterSI = createToken<CurrencyFormatter>('CurrencyFormatter');

container.register(currencyFormatterSI, CurrencyFormatterImpl)