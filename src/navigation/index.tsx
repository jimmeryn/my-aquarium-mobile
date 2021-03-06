import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModalScreen } from '../screens/ModalScreen';
import { NotFoundScreen } from '../screens/NotFoundScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AquariumScreen } from '../screens/AquariumScreen';
import { RootStackParamList, RootTabParamList, Route } from '../types/route';
import { NavBar } from '../components/NavBar';
import { Colors } from '../styles/Colors';
import { ModalHeaderTitle } from '../components/ModalHeaderTitle';
import { ModalBackButton } from '../components/ModalBackButton';
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
    <Stack.Group
      screenOptions={{
        presentation: 'modal',
        headerStyle: {
          backgroundColor: Colors.modalBackground,
        },
      }}
    >
      <Stack.Screen
        name={Route.Modal}
        component={ModalScreen}
        options={({ navigation, route }) => ({
          headerTintColor: Colors.text_negative,
          headerTitle: (props) => <ModalHeaderTitle {...props} />,
          headerRight: (props) => <ModalBackButton {...props} navigation={navigation} />,
        })}
      />
    </Stack.Group>
  </Stack.Navigator>
);

const Tab = createNativeStackNavigator<RootTabParamList>();

const MainTabsNavigator = () => (
  <Tab.Navigator
    initialRouteName={Route.Home}
    screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.header,
      },
      headerTintColor: Colors.text_negative,
    }}
  >
    <Tab.Screen
      name={Route.Home}
      options={{
        headerTitle: (props) => <NavBar {...props} />,
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name={Route.Aquarium}
      options={{
        headerTitle: (props) => <NavBar {...props} />,
      }}
      component={AquariumScreen}
    />
  </Tab.Navigator>
);

export { Navigation };
