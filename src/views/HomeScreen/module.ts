import { container } from '../../libs/Core/DI.ts';
import {
  HomeScreenViewModel,
} from './HomeScreenViewModel.ts';

container.bind(HomeScreenViewModel).toSelf().inTransientScope()