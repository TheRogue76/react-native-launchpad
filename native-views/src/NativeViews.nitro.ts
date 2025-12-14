import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

export interface NativeViewsProps extends HybridViewProps {
  color: string;
}
export interface NativeViewsMethods extends HybridViewMethods {}

export type NativeViews = HybridView<
  NativeViewsProps,
  NativeViewsMethods
>;
