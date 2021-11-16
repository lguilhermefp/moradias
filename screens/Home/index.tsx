import * as React from 'react';
import { View, Button } from "react-native";
import { HomeHeader } from '../../components/HomeHeader';
import { styles } from './styles';

const Home = ({ navigation }: any) => {
  return (
    <View style={ styles.container}>
      <HomeHeader />
      <View style={ styles.footer }>
        <View style={ styles.containerButtons }>
          <Button
            title="Entrar"
            color="rgba(64, 103, 160, 0.8);"
            onPress={() => navigation.navigate('AnotherPage')}
          />
          <Button
            title="Cadastrar"
            color="rgba(64, 103, 160, 0.8)"
            onPress={() => navigation.navigate('AnotherPage')}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
