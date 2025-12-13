import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './views/HomeScreen/HomeScreen.tsx';
import { createStaticNavigation } from '@react-navigation/native';
import { DetailsScreen } from './views/DetailsScreen/DetailsScreen.tsx';
import {
  createNavigationContainerRef,
  StaticParamList,
} from '@react-navigation/core';
import { ServiceIdentifier } from '@inversifyjs/common';
import { injectable } from '@inversifyjs/core';
import { container } from './libs/Core/DI.ts';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home: {
      screen: HomeScreen,
    },
    Details: DetailsScreen,
  },
});

const NavigationWrapper = createStaticNavigation(RootStack);
const navigationRef = createNavigationContainerRef();

export function NavComponent() {
  return <NavigationWrapper ref={navigationRef} />;
}

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export interface Navigation {
  goBack: () => void;
  navigateToDetails: () => void; // TODO: make this generic
}

@injectable()
class NavigationImpl implements Navigation {
  goBack() {
    navigationRef?.goBack();
  }

  navigateToDetails() {
    navigationRef?.navigate('Details');
  }
}


export const navigationSI: ServiceIdentifier<Navigation> =
  Symbol.for('NavigationInjection');

container.bind<Navigation>(navigationSI).to(NavigationImpl).inSingletonScope()