import { mock } from 'jest-mock-extended';
import { OrderRepo } from '../../../src/repos/OrderRepo';
import { Navigation } from '../../../src/Navigation.tsx';
import { HomeScreenViewModel } from '../../../src/views/HomeScreen/HomeScreenViewModel.ts';

describe('HomeScreenViewModel', () => {
  const orderRepo = mock<OrderRepo>()
  const navigation = mock<Navigation>()

  function createHomeScreenViewModel() {
    return new HomeScreenViewModel(orderRepo, navigation);
  }
  test('onAppear we call latest order id', () => {
    // Given
    const viewModel = createHomeScreenViewModel();
    orderRepo.latestOrder.mockImplementation(() => '123')
    // When
    viewModel.onAppear()
    // Then
    expect(orderRepo.latestOrder).toHaveBeenCalledTimes(1)
  })
})