import { container } from '../../libs/Core/DI.ts';
import {
  HomeScreenViewModel,
} from './HomeScreenViewModel.ts';
import { createToken } from 'launchpad-dependency-injection';

export const homeViewModelSI = createToken<HomeScreenViewModel>('HomeScreenViewModel');
container.register(homeViewModelSI, HomeScreenViewModel)