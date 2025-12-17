import { container } from '../Core/DI';
import { NetworkClient, NetworkClientImpl } from './NetworkClient';
import { ServiceIdentifier } from '@inversifyjs/common';

export const networkClientSI: ServiceIdentifier<NetworkClient> =
  Symbol.for('NetworkClient');

container
  .bind<NetworkClient>(networkClientSI)
  .to(NetworkClientImpl)
  .inSingletonScope();