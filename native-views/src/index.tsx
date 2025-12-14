import { getHostComponent } from 'react-native-nitro-modules';
const NativeViewsConfig = require('../nitrogen/generated/shared/json/NativeViewsConfig.json');
import type {
  NativeViewsMethods,
  NativeViewsProps,
} from './NativeViews.nitro';

export const NativeViewsView = getHostComponent<
  NativeViewsProps,
  NativeViewsMethods
>('NativeViews', () => NativeViewsConfig);
