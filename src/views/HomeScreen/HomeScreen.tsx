import { observer } from 'mobx-react-lite';
import { ActivityIndicator, Text } from 'react-native';
import { useViewModel } from '../../helpers/use-view-model.ts';
import { container } from '../../libs/Core/DI.ts';
import { HomeScreenContent } from './HomeScreenContent.tsx';
import { HomeScreenViewModel } from './HomeScreenViewModel.ts';

export const HomeScreen = () => {
  const viewModel = container.get(HomeScreenViewModel, { autobind: true });

  return <HomeScreenBase viewModel={viewModel} />;
};

type Props = {
  viewModel: HomeScreenViewModel;
};

const HomeScreenBase = observer(({ viewModel }: Props) => {
  const { state } = useViewModel(viewModel);

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
});
