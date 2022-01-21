import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Colors } from '../styles/Colors';

export const NavBar = ({}: {
  children: string;
  tintColor?: string | undefined;
}) => (
  <View>
    {/* <Icon name='navicon' size={40} color={Colors.text_negative} /> */}
  </View>
);
