import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RootTabScreenProps, Route } from '../types';

export const HomeScreen = ({ navigation }: RootTabScreenProps<Route.Home>) => {
  const handleOnPress = () => {
    navigation.navigate(Route.Aquarium);
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Aquarium" onPress={handleOnPress} />
    </View>
  );
};
