import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RootTabScreenProps, Route } from '../types/route';
import { FishBowlComponent } from '../components/FishBowlComponent';
import { styles } from '../styles/StyleScheet';
import { useOrientation, Layout, Orientation } from '../styles/Layout';

export const HomeScreen = ({ navigation }: RootTabScreenProps<Route.Home>) => {
  const [viewKey, setViewKey] = React.useState(0);
  const forceRerender = () => setViewKey(viewKey + 1);
  const handleOnPress = () => {
    navigation.navigate(Route.Aquarium);
  };

  const orientation = useOrientation();
  React.useEffect(() => {
    forceRerender();
  }, [orientation]);

  return (
    <View key={viewKey} style={styles.page}>
      <View
        style={{
          flexDirection:
            orientation === Orientation.Portrait ? 'column' : 'row',
          justifyContent:
            orientation === Orientation.Portrait
              ? 'space-evenly'
              : 'space-around',
        }}
      >
        <View
          style={{
            marginHorizontal:
              orientation === Orientation.Portrait
                ? Layout.window.width / 4
                : 20,
          }}
        >
          <Text style={styles.title}>My Aquarium Application</Text>
          <Text style={styles.subtitle}>
            Collect and display data from your fish tanks
          </Text>
        </View>
        <FishBowlComponent orientation={orientation} />
      </View>
      <Button title="Go to Aquarium" onPress={handleOnPress} />
    </View>
  );
};
