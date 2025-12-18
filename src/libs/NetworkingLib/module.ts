import { container } from '../Core/DI';
import { NetworkClient, NetworkClientImpl } from './NetworkClient';
import { createToken } from 'launchpad-dependency-injection';

export const networkClientSI = createToken<NetworkClient>('NetworkClient');

container.register(networkClientSI, NetworkClientImpl)