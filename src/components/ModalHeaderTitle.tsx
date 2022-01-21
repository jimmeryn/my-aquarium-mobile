import * as React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../styles/StyleScheet';

export const ModalHeaderTitle = ({}: {
  children: string;
  tintColor?: string | undefined;
}) => {
  return (
    <View style={styles.modalHeader}>
      <Text style={styles.modalTitle}>Add Param</Text>
    </View>
  );
};
