import { inject, injectable } from '@inversifyjs/core';
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

@injectable()
export class TicketRemoteDataSourceImpl implements TicketRemoteDataSource {
  // Dummy endpoint - using JSONPlaceholder todos as example tickets
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(
    @inject(networkClientSI)
    private readonly networkClient: NetworkClient,
  ) {}

  async fetchTickets(): Promise<GetTicketResponse[]> {
    return this.networkClient.request(
      `${this.baseUrl}/todos`,
      'GET',
      GetTicketListResponseSchema,
    );
  }
}
