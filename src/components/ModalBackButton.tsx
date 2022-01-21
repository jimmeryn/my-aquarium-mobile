import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../styles/Colors';
import { Route } from '../types/route';

export const ModalBackButton = ({
  navigation,
}: {
  children?: string;
  tintColor?: string | undefined;
  navigation: any;
}) => {
  const handleBackPress = () => navigation.navigate(Route.Root);

  return (
    <Icon
      name="close"
      size={40}
      onPress={handleBackPress}
      color={Colors.text_negative}
      style={{ marginRight: 20 }}
    />
  );
};
