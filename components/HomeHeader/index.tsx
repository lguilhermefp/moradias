import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const HomeHeader = () => {
  return (
    <View style={ styles.container }>
      <Text>Boas vindas</Text>
      <Text>Conheça as moradias estudantis</Text>
    </View>
  );
};
