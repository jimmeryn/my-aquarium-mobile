import * as React from 'react';
import { Animated } from 'react-native';

import FishBowl from '../../assets/fish_bowl.svg';
import { Layout, Orientation } from '../styles/Layout';

const originalWidth = 339;
const originalHeight = 187;
const aspectRatio = originalWidth / originalHeight;
const marginSides = 20;

type Props = {
  orientation: Orientation;
};

export const FishBowlComponent = ({ orientation }: Props) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  React.useEffect(() => {
    fadeIn();
  }, []);

  return (
    <Animated.View
      style={[
        {
          width:
            orientation === Orientation.Portrait
              ? Layout.window.width - 2 * marginSides
              : Layout.window.width / 2,
          aspectRatio,
          maxHeight: Layout.window.height / 2,
          opacity: fadeAnim,
        },
      ]}
    >
      <FishBowl
        width="100%"
        height="100%"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      />
    </Animated.View>
  );
};
