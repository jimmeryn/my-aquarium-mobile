import * as React from "react";
import { View, Text, Button } from "react-native";
import { RootTabScreenProps, Route } from "../types";

export const AquariumScreen = ({
  navigation,
}: RootTabScreenProps<Route.Aquarium>) => {
  const handleOnPress = () => {
    navigation.navigate(Route.Home);
  };
  const handleOpenModal = () => {
    navigation.navigate(Route.Modal);
  };
  return (
    <View>
      <Text>Aquarium</Text>
      <Button title="Go to Home" onPress={handleOnPress} />
      <Button title="Open modal" onPress={handleOpenModal} />
    </View>
  );
};
