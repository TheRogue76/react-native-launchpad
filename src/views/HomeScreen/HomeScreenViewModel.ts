import { inject, injectable } from '@inversifyjs/core';
import { type OrderRepo, orderRepoSI } from '../../repos/OrderRepo';
import { type Navigation, navigationSI } from '../../Navigation.tsx';

@injectable()
export class HomeScreenViewModel {
  constructor(
    @inject(orderRepoSI)
    private readonly orderRepo: OrderRepo,
    @inject(navigationSI)
    private readonly navigation: Navigation,
  ) {}

  onAppear() {
    console.log(this.orderRepo.latestOrder());
  }

  onButtonPressed() {
    this.navigation.navigateToDetails()
  }
}