/**
 * Sample React Native App
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppStatusBar} from './src/Components';
import RootNavigator from './src/Navigations/RootNavigator';
import {COLORS} from './src/Themes';

const App: () => React$Node = () => {
  const APP_THEME = COLORS.BLACK;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: APP_THEME}}>
      <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
