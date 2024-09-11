import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InititalScreen from '../Screens/Auth/InititalScreen/InititalScreen';
import Login from '../Screens/Auth/LoginScreen/LoginScreen';
import SignupScreen from '../Screens/Auth/SignupScreen/SignupScreen';

const Stack = createNativeStackNavigator();
function AuthNavigation() {
  return (
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
  );
}

export default AuthNavigation;
