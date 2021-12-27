import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { RootStackScreenProps, Route } from '../types';

export const NotFoundScreen = ({
  navigation,
}: RootStackScreenProps<Route.NotFound>) => {
  const handleOnPress = () => navigation.replace(Route.Root);

  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={handleOnPress}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
};
