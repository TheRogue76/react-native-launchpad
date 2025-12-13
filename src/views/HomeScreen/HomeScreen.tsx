import { container } from '../../libs/Core/DI.ts';
import { HomeScreenViewModel } from './HomeScreenViewModel.ts';
import { useEffect } from 'react';
import {HomeScreenContent} from "./HomeScreenContent.tsx";

export const HomeScreen = () => {
  const viewModel = container.get(HomeScreenViewModel, {autobind: true})

  useEffect(() => {
    viewModel.onAppear()
  }, [viewModel]);

  return <HomeScreenContent viewModel={viewModel} />;
}