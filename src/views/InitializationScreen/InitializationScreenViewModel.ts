import { transient, get } from 'launchpad-dependency-injection';
import { type Navigation, navigationSI } from '../../Navigation.tsx';
import { makeAutoObservable } from 'mobx';

@transient()
export class InitializationScreenViewModel {
  private readonly navigation: Navigation;
  constructor(navigation?: Navigation) {
    this.navigation = navigation ?? get(navigationSI)
    makeAutoObservable(this)
  }

  onAppear() {
    // Inside here we can call the initialization logic needed to get things up and running,
    // and once ready, decide where to navigate
    // For this example it just wastes a second
    setTimeout(() => {
      this.navigation.reset({index: 0, routes: [{name: 'TabbedNavigator'}]});
    }, 1000);
  }
}