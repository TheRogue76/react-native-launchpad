import { inject, injectable } from '@inversifyjs/core';
import { makeAutoObservable } from 'mobx';
import { ReactNavigationLifecycle } from '../../helpers/use-view-model.ts';
import { type Navigation, navigationSI } from '../../Navigation.tsx';
import { type TicketRepo, ticketRepoSI } from '../../repos/TicketRepo';

type State = Loading | Error | Loaded;
type Loading = { type: 'loading' };
type Error = { type: 'error' };
type Loaded = { type: 'loaded'; data: { counter: string } };
export type { Error, Loaded, Loading };

@injectable()
export class HomeScreenViewModel implements ReactNavigationLifecycle {
  state: State = { type: 'loading' };
  private counter = 0;
  constructor(
    @inject(ticketRepoSI)
    private readonly ticketRepo: TicketRepo,
    @inject(navigationSI)
    private readonly navigation: Navigation,
  ) {
    makeAutoObservable(this);
  }

  onAppear() {
    this.state = {
      type: 'loaded',
      data: { counter: (++this.counter).toString() },
    };
  }

  onDisappear(): void {
    // No-op
  }

  onButtonPressed() {
    this.navigation.navigateToDetails();
  }
}
