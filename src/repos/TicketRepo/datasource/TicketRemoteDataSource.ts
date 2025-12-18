import { get, singleton } from 'launchpad-dependency-injection';
import {
  type NetworkClient,
  networkClientSI,
} from '../../../libs/NetworkingLib';
import {
  GetTicketListResponseSchema,
  GetTicketResponse,
} from '../Models/internal/GetTicketResponse.ts';

export interface TicketRemoteDataSource {
  fetchTickets(): Promise<GetTicketResponse[]>;
}

@singleton()
export class TicketRemoteDataSourceImpl implements TicketRemoteDataSource {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  private readonly networkClient: NetworkClient;

  constructor(networkClient?: NetworkClient) {
    this.networkClient = networkClient ?? get(networkClientSI);
  }

  async fetchTickets(): Promise<GetTicketResponse[]> {
    return this.networkClient.request(
      `${this.baseUrl}/todos`,
      'GET',
      GetTicketListResponseSchema,
    );
  }
}
