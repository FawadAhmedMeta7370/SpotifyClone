import React from 'react';
import {StyleSheet} from 'react-native';

import {enableScreens} from 'react-native-screens';
import AuthNavigation from './src/Navigation/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import Store from './src/Redux/Store/Store';
import MainNavigation from './src/Navigation/MainNavigator';
enableScreens();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  // return <></>
  return (
    <Provider store={Store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
