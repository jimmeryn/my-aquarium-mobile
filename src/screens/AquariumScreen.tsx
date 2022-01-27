import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { getParams } from '../api';
import { Param } from '../types/data';
import { styles } from '../styles/StyleScheet';
import { RootTabScreenProps, Route } from '../types/route';
import { DataGridComponent } from '../components/DataGridComponent';
import { getColumns, paramsMapper } from '../utils/gridUtils';
import { Layout } from '../styles/Layout';
import { useFocusEffect } from '@react-navigation/native';

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

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const getAquariumParams = async () => {
        try {
          const paramsFromDb = await getParams!();
          if (isActive) {
            setParams(paramsFromDb);
          }
        } catch (e) {
          console.log(e);
        }
      };

      getAquariumParams();

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <View
      style={[
        styles.page,
        {
          justifyContent: 'flex-start',
        },
      ]}
      onLayout={Layout.getNewDimensions}
    >
      <View style={{ width: '100%' }}>
        <Text style={styles.title}>Aquarium Data</Text>
      </View>
      <View style={{ width: '100%', flexGrow: 1, paddingBottom: 10 }}>
        <DataGridComponent rows={paramsMapper(params)} columns={getColumns()} />
      </View>
      <View
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 10,
        }}
      >
        <Button title="Go to Home" onPress={handleOnPress} />
        <Button title="Add param" onPress={handleOpenModal} />
      </View>
    </View>
  );
};
