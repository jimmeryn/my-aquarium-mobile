import * as React from 'react';
import { Dimensions, LayoutChangeEvent } from 'react-native';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
const isPortrait = () => {
  const dim = Dimensions.get('screen');

  return dim.height >= dim.width;
};

const getNewDimensions = (event: LayoutChangeEvent) => {
  height = event.nativeEvent.layout.height;
  width = event.nativeEvent.layout.width;
};

export enum Orientation {
  Portrait = 'PORTRAIT',
  Landscape = 'LANDSCAPE',
}

export const useOrientation = (): Orientation => {
  const [orientation, setOrientation] = React.useState<
    Orientation.Portrait | Orientation.Landscape
  >(isPortrait() ? Orientation.Portrait : Orientation.Landscape);

  React.useEffect(() => {
    const callback = () =>
      setOrientation(
        isPortrait() ? Orientation.Portrait : Orientation.Landscape
      );
    Dimensions.addEventListener('change', callback);

    return () => {
      Dimensions.removeEventListener('change', callback);
    };
  }, []);

  return orientation;
}

export const Layout = {
  window: {
    width,
    height,
  },
  isPortrait,
  getNewDimensions,
};
