import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { firestore, getParams } from '../api/firebase';
import { Param } from '../types/data';
import { styles } from '../styles/StyleScheet';
import { RootTabScreenProps, Route } from '../types/route';

export const AquariumScreen = ({
  navigation,
}: RootTabScreenProps<Route.Aquarium>) => {
  const [params, setParams] = React.useState<Param[]>([]);

  const handleOnPress = () => {
    navigation.navigate(Route.Home);
  };
  const handleOpenModal = () => {
    navigation.navigate(Route.Modal);
  };

  const getAquariumParams = React.useCallback(async () => {
    const paramsFromDb = await getParams!(firestore!);
    setParams(paramsFromDb);
  }, [firestore, getParams]);

  React.useEffect(() => {
    getAquariumParams();
  }, []);

  return (
    <View style={styles.page}>
      <View>
        <Text>Aquarium</Text>
        <Button title="Go to Home" onPress={handleOnPress} />
        <Button title="Open modal" onPress={handleOpenModal} />
      </View>
      <View>
        {params.map((param, i) => (
          <Text key={i}>date: {param.date.toDate().toLocaleDateString()}</Text>
        ))}
      </View>
    </View>
  );
};
