import { container } from '../../libs/Core/DI.ts';
import { HomeScreenViewModel } from './HomeScreenViewModel.ts';
import { useEffect } from 'react';
import {HomeScreenContent} from "./HomeScreenContent.tsx";
import { ActivityIndicator, Text } from 'react-native';
import { observer } from 'mobx-react-lite';

export const HomeScreen = () => {
  const viewModel = container.get(HomeScreenViewModel, { autobind: true });

  return <HomeScreenBase viewModel={viewModel} />
};

type Props = {
  viewModel: HomeScreenViewModel;
};

const HomeScreenBase = observer(({viewModel}: Props) => {
  const state = viewModel.state;
  useEffect(() => {
    viewModel.onAppear();
  }, [viewModel]);

  if (state.type === 'loading') {
    return <ActivityIndicator />;
  }
  if (state.type === 'error') {
    return <Text>Generic error that can be built upon</Text>;
  }

  return (
    <HomeScreenContent
      state={state}
      onButtonPress={() => viewModel.onButtonPressed()}
    />
  );
})