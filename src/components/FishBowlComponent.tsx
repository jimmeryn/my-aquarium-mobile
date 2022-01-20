import * as React from 'react';
import { View } from 'react-native';

import FishBowl from "../../assets/fish_bowl.svg"
import { Layout } from '../styles/Layout';

const originalWidth = 339;
const originalHeight = 187;
const aspectRatio = originalWidth / originalHeight;
const marginSides = 20;

export const FishBowlComponent = () => (
  <View style={{ width: Layout.window.width - 2 * marginSides, aspectRatio }}>
    <FishBowl
      width="100%"
      height="100%"
      viewBox={`0 0 ${originalWidth} ${originalHeight}`}
    />
  </View>
);
