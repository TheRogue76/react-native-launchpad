import { inject, injectable } from '@inversifyjs/core';
import { type OrderRepo, orderRepoSI } from '../../repos/OrderRepo';

@injectable()
class HomeScreenViewModel {
  constructor(
    @inject(orderRepoSI)
    private readonly orderRepo: OrderRepo,
  ) {}

  onAppear() {
    console.log(this.orderRepo.latestOrder());
  }
}

export { HomeScreenViewModel }