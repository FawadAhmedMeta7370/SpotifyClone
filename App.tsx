import React from 'react';
import {Provider} from 'react-redux';
import {StyleSheet} from 'react-native';
import {persistor, store} from './src/Redux/Store/Store';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigation from './src/Navigation/MainNavigator';
import {PersistGate} from 'redux-persist/integration/react';
enableScreens();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  // return <></>
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation/>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
