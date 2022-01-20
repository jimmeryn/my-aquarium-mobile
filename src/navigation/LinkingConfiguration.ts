import { LinkingOptions } from '@react-navigation/native';
import { createURL } from 'expo-linking';

import { RootStackParamList, Route } from '../types/route';

const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          [Route.Home]: {
            screens: {
              TabOneScreen: 'home',
            },
          },
          [Route.Aquarium]: {
            screens: {
              TabTwoScreen: 'aquarium',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export { LinkingConfiguration };
