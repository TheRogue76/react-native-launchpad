import { container } from '../../libs/Core/DI.ts';
import { ServiceIdentifier } from '@inversifyjs/common';
import {
  HomeScreenViewModel,
} from './HomeScreenViewModel.ts';

export const homeScreenViewModelSI: ServiceIdentifier<HomeScreenViewModel> = Symbol.for("HomeScreenViewModel");

container.bind(homeScreenViewModelSI).to(HomeScreenViewModel)