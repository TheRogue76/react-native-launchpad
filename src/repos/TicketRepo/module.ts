import { container } from '../../libs/Core/DI.ts';
import { TicketRepo, TicketRepoImpl } from './TicketRepo.ts';
import { ServiceIdentifier } from '@inversifyjs/common';
import {
  TicketRemoteDataSource,
  TicketRemoteDataSourceImpl,
} from './datasource/TicketRemoteDataSource.ts';

export const ticketRepoSI: ServiceIdentifier<TicketRepo> = Symbol.for('ticketRepo')
export const ticketRemoteDataSourceSI: ServiceIdentifier<TicketRemoteDataSource> =
  Symbol.for('TicketRemoteDataSource');

container.bind<TicketRepo>(ticketRepoSI).to(TicketRepoImpl).inSingletonScope()

container
  .bind<TicketRemoteDataSource>(ticketRemoteDataSourceSI)
  .to(TicketRemoteDataSourceImpl)
  .inSingletonScope();