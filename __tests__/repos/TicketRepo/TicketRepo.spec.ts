import { mock } from 'jest-mock-extended';
import { CurrencyFormatter } from '../../../src/libs/StringLibs';
import { TicketRepoImpl } from '../../../src/repos/TicketRepo/TicketRepo.ts';
import { TicketRemoteDataSource } from '../../../src/repos/TicketRepo/datasource/TicketRemoteDataSource.ts';

describe('TicketRepo tests', () => {
  const formatter = mock<CurrencyFormatter>();
  const remoteDataSource = mock<TicketRemoteDataSource>();

  function createTicketRepo() {
    return new TicketRepoImpl(formatter, remoteDataSource);
  }

  test('See if testing works', () => {
    // Given
    const ticketRepo = createTicketRepo();
    formatter.format.mockImplementation(input => `${input}`);
    // When
    const result = ticketRepo.latestItem();
    // Then
    expect(result).toBe('1234');
    expect(formatter.format).toHaveBeenCalledTimes(1);
  });
});
