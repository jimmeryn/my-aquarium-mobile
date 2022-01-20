import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export enum Route {
  Root = 'Root',
  Home = 'Home',
  Aquarium = 'Aquarium',
  Modal = 'Modal',
  NotFound = 'NotFound',
}

export type RootStackParamList = {
  [Route.Root]: NavigatorScreenParams<RootTabParamList> | undefined;
  [Route.Modal]: undefined;
  [Route.NotFound]: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  [Route.Home]: undefined;
  [Route.Aquarium]: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
