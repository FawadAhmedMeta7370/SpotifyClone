import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/Auth/LoginScreen/LoginScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InititalScreen from './src/Screens/Auth/InititalScreen/InititalScreen';
import SignupScreen from './src/Screens/Auth/SignupScreen/SignupScreen';
enableScreens();

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name="Initial Screen"
          component={InititalScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login Screen"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup Screen"
          component={SignupScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
