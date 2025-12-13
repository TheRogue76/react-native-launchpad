import { Button, Text, View } from 'react-native';
import { container } from '../../libs/Core/DI.ts';
import { homeScreenViewModelSI } from './module.ts';
import { useEffect } from 'react';

export const HomeScreen = () => {
  const viewModel = container.get(homeScreenViewModelSI)

  useEffect(() => {
    viewModel.onAppear()
  }, [viewModel]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          viewModel.onButtonPressed()
        }}
      />
    </View>
  );
}