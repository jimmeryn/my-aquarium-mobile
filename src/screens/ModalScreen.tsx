import * as React from 'react';
import { View, TextInput } from 'react-native';

import { addParam } from '../api';
import { Button } from '../components/Button';
import { Orientation, useOrientation } from '../styles/Layout';
import { styles } from '../styles/StyleScheet';
import { RootStackScreenProps, Route } from '../types/route';

export const ModalScreen = ({
  navigation,
}: RootStackScreenProps<Route.Modal>) => {
  const [name, setName] = React.useState('asd');
  const [value, setValue] = React.useState('10');
  const [date, setDate] = React.useState(new Date().toLocaleDateString());
  const [viewKey, setViewKey] = React.useState(0);

  const orientation = useOrientation();
  const forceRerender = () => setViewKey(viewKey + 1);
  React.useEffect(() => {
    forceRerender();
  }, [orientation]);

  const handleSubmitPress = async () => {
    try {
      await addParam({
        value: Number(value),
        name,
        date: new Date(date),
      });
    } catch (error) {
      console.error(error);
    } finally {
      goBack();
    }
  };

  const goBack = () => {
    if (!navigation.canGoBack()) {
      navigation.navigate(Route.Root);
      return;
    }
    navigation.goBack();
  };

  return (
    <View key={viewKey} style={styles.modal}>
      <TextInput
        style={[
          styles.modalInput,
          modalInputResponsive(orientation === Orientation.Portrait),
        ]}
        onChangeText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={[
          styles.modalInput,
          modalInputResponsive(orientation === Orientation.Portrait),
        ]}
        onChangeText={setValue}
        value={`${value}`}
        placeholder="Value"
      />
      <TextInput
        style={[
          styles.modalInput,
          modalInputResponsive(orientation === Orientation.Portrait),
        ]}
        onChangeText={setDate}
        value={date}
        placeholder="Date"
      />
      <Button
        title="Submit"
        style={{
          button: styles.modalSubminButton,
          text: styles.modalSubminButtonText,
        }}
        onPress={handleSubmitPress}
      />
    </View>
  );
};

const modalInputResponsive = (isPortrait: boolean) => ({
  margin: isPortrait ? 20 : 0,
  padding: isPortrait ? 20 : 0,
});
