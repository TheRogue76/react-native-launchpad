import { inject, injectable } from '@inversifyjs/core';
import { type TicketRepo, ticketRepoSI } from '../../repos/TicketRepo';
import { type Navigation, navigationSI } from '../../Navigation.tsx';
import { makeAutoObservable } from 'mobx';

@injectable()
export class HomeScreenViewModel {
  counter = 0
  constructor(
    @inject(ticketRepoSI)
    private readonly orderRepo: TicketRepo,
    @inject(navigationSI)
    private readonly navigation: Navigation,
  ) {
    makeAutoObservable(this)
  }

  onAppear() {
    console.log(this.orderRepo.latestItem());
    this.counter++;
  }

  onButtonPressed() {
    this.navigation.navigateToDetails()
    this.counter++;
  }
}