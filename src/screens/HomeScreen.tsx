import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { firestore, getParams } from '../api/firebase';
import { RootTabScreenProps, Route } from '../types/types';

export const HomeScreen = ({ navigation }: RootTabScreenProps<Route.Home>) => {
  const [params, setParams] = React.useState<any | null>([]);

  const handleOnPress = () => {
    navigation.navigate(Route.Aquarium);
  };

  const getAquariumParams = React.useCallback(async () => {
    const paramsFromDb = await getParams(firestore);
    setParams(paramsFromDb);
  }, [firestore, getParams]);

  React.useEffect(() => {
    getAquariumParams();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to Aquarium" onPress={handleOnPress} />
      {params.map((param: any, i: number) => (
        <Text key={i}>{JSON.stringify(param)}</Text>
      ))}
    </View>
  );
};
