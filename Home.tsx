import * as React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";

const Home = ({ navigation }: any) => {
    return (
      <View>
        <View>
          <Text>hi</Text>
        </View>
        <View>
          <Button
            title="outra pagina"
            color="purple"
            onPress={() => navigation.navigate('AnotherPage')}
          />
        </View>
      </View>
    );
}

export default Home;
