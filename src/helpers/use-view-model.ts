import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

export interface ReactNavigationLifecycle {
  onAppear(): void;
  onDisappear(): void;
}

export function useViewModel<T extends ReactNavigationLifecycle>(viewModel: T) {
  useFocusEffect(
    useCallback(() => {
      viewModel.onAppear();

      () => viewModel.onDisappear();
    }, [viewModel]),
  );

  return viewModel;
}
