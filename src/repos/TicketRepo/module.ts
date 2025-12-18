import { container } from '../../libs/Core/DI.ts';
import { TicketRepo, TicketRepoImpl } from './TicketRepo.ts';
import { createToken } from 'launchpad-dependency-injection';
import {
  TicketRemoteDataSource,
  TicketRemoteDataSourceImpl,
} from './datasource/TicketRemoteDataSource.ts';


export const ticketRemoteDataSourceSI = createToken<TicketRemoteDataSource>('TicketRemoteDataSource');
container.register(ticketRemoteDataSourceSI, TicketRemoteDataSourceImpl);

export const ticketRepoSI = createToken<TicketRepo>('ticketRepo')

container.register(ticketRepoSI, TicketRepoImpl);