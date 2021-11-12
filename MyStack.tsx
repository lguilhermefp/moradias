import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View, Button } from "react-native";
import Home from './Home';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'bem-vindo!'}}
        />
        <Stack.Screen
          name="AnotherPage"
          component={AnotherPage}
          options={{title: 'outra pagina'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function AnotherPage() {
    return (
        <Text>sample page</Text>
    );
}
