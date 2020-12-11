//@flow

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {HomeScreen, DetailScreen} from '../Screens/Screen.config';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.HomeScreen}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);