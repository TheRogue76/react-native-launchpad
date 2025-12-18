import { type CurrencyFormatter, currencyFormatterSI } from '../../libs/StringLibs';
import { get, singleton } from 'launchpad-dependency-injection';
import { type TicketRemoteDataSource } from './datasource/TicketRemoteDataSource.ts';
// import { type Ticket, mapTicketResponseToTicket } from './Models/Ticket';
import { ticketRemoteDataSourceSI } from './module.ts';

export interface TicketRepo {
  latestItem(): string;
  // fetchTickets(): Promise<Ticket[]>;
}

@singleton()
export class TicketRepoImpl implements TicketRepo {
  private currencyFormatter: CurrencyFormatter;
  private ticketRemoteDataSource: TicketRemoteDataSource;
  constructor(currencyFormatter?: CurrencyFormatter,ticketRemoteDataSource?: TicketRemoteDataSource) {
    this.currencyFormatter = currencyFormatter ?? get(currencyFormatterSI)
    this.ticketRemoteDataSource = ticketRemoteDataSource ?? get(ticketRemoteDataSourceSI)
  }

  latestItem(): string {
    return this.currencyFormatter.format(1234);
  }

  // async fetchTickets(): Promise<Ticket[]> {
  //   const apiResponse = await this.ticketRemoteDataSource.fetchTickets();
  //   return apiResponse.map(mapTicketResponseToTicket);
  // }
}