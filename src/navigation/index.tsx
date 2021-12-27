import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModalScreen } from '../screens/ModalScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AquariumScreen } from '../screens/AquariumScreen';
import { RootStackParamList, RootTabParamList, Route } from '../types';
import { LinkingConfiguration } from './LinkingConfiguration';

const Navigation = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <RootNavigator />
  </NavigationContainer>
);

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Route.Root}
      component={MainTabsNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={Route.NotFound} component={NotFoundScreen} />
    <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name={Route.Modal} component={ModalScreen} />
    </Stack.Group>
  </Stack.Navigator>
);

const Tab = createNativeStackNavigator<RootTabParamList>();

const MainTabsNavigator = () => (
  <Tab.Navigator
    initialRouteName={Route.Home}
    screenOptions={{ headerShown: false }}
  >
    <Tab.Screen name={Route.Home} component={HomeScreen} />
    <Tab.Screen name={Route.Aquarium} component={AquariumScreen} />
  </Tab.Navigator>
);

export { Navigation };
