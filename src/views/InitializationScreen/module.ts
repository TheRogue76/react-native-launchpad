import { container } from '../../libs/Core/DI.ts';
import { InitializationScreenViewModel } from './InitializationScreenViewModel.ts';
import { createToken } from 'launchpad-dependency-injection';

export const initializationViewModelSI = createToken<InitializationScreenViewModel>(
  'InitializationScreenViewModel',
);

container.register(initializationViewModelSI, InitializationScreenViewModel);