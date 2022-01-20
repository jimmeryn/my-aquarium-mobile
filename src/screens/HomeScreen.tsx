import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RootTabScreenProps, Route } from '../types/route';
import { FishBowlComponent } from '../components/FishBowlComponent';
import { styles } from '../styles/StyleScheet';

export const HomeScreen = ({ navigation }: RootTabScreenProps<Route.Home>) => {
  const handleOnPress = () => {
    navigation.navigate(Route.Aquarium);
  };


  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>My Aquarium Application</Text>
        <Text style={styles.subtitle}>Collect and display data from your fish tanks</Text>
      </View>
      <FishBowlComponent />
      <Button title="Go to Aquarium" onPress={handleOnPress} />
    </View>
  );
};
