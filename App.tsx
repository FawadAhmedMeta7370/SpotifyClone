import React from 'react';
import {StyleSheet} from 'react-native';
import BootSplash from 'react-native-bootsplash';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import Login from './src/Screens/Auth/LoginScreen/LoginScreen';
import BottomTabNavigation from './src/Navigation/BottomTabNavigation';
import SignupScreen from './src/Screens/Auth/SignupScreen/SignupScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InititalScreen from './src/Screens/Auth/InititalScreen/InititalScreen';
import AuthNavigation from './src/Navigation/AuthNavigation';
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
          name="Auth"
          component={AuthNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={BottomTabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
