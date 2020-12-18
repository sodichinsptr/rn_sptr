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
import {provide as StoreProvider} from 'react-redux';
import { getStore } from './src/Redux/Store';

const store = getStore();

const App: () => React$Node = () => {
  const APP_THEME = COLORS.BLACK;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: APP_THEME}}>
      <AppStatusBar backgroundColor={APP_THEME} barStyle="light-content" />
      <StoreProvider store={store}>
      <RootNavigator />
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
