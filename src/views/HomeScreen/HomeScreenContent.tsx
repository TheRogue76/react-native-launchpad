import { observer } from 'mobx-react-lite';
import { Button, Text, View } from 'react-native';
import { HomeScreenViewModel } from './HomeScreenViewModel.ts';

interface Props {
  viewModel: HomeScreenViewModel;
}

export const HomeScreenContent = observer(({ viewModel }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen counter {viewModel.counter}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          viewModel.onButtonPressed();
        }}
      />
    </View>
  );
});