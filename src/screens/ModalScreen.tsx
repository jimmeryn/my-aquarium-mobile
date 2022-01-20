import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button } from '../components/Button';

import { styles } from '../styles/StyleScheet';

export const ModalScreen = () => {
  const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');
  return (
    <View style={styles.modal}>
      <Text style={styles.modalTitle}>Add Param</Text>
      <View style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
        <TextInput
          style={styles.modalInput}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.modalInput}
          onChangeText={setValue}
          value={value}
          placeholder="Value"
        />
        <TextInput
          style={styles.modalInput}
          onChangeText={setName}
          value={name}
          placeholder="Date"
        />
        <Button title="Submit" style={{ button: styles.modalSubminButton, text: styles.modalSubminButtonText }} onPress={() => { }} />
      </View>
    </View>
  );
};
