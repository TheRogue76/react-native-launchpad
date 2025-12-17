import { type CurrencyFormatter, currencyFormatterSI } from '../../libs/StringLibs';
import { injectable, inject } from '@inversifyjs/core';
import { type TicketRemoteDataSource } from './datasource/TicketRemoteDataSource.ts';
import { type Ticket, mapTicketResponseToTicket } from './Models/Ticket';
import { ticketRemoteDataSourceSI } from './module.ts';

export interface TicketRepo {
  latestItem(): string;
  fetchTickets(): Promise<Ticket[]>;
}

@injectable()
export class TicketRepoImpl implements TicketRepo {
  constructor(
    @inject(currencyFormatterSI)
    private readonly currencyFormatter: CurrencyFormatter,
    @inject(ticketRemoteDataSourceSI)
    private readonly ticketRemoteDataSource: TicketRemoteDataSource,
  ) {}

  latestItem(): string {
    return this.currencyFormatter.format(1234);
  }

  async fetchTickets(): Promise<Ticket[]> {
    const apiResponse = await this.ticketRemoteDataSource.fetchTickets();
    return apiResponse.map(mapTicketResponseToTicket);
  }
}