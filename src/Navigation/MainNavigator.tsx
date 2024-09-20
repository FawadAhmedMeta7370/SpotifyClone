import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootSplash from 'react-native-bootsplash';
import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const authState = useSelector((state: any) => state.auth);
  return (
    <NavigationContainer
      onReady={() => {
        BootSplash.hide();
      }}>
      <Stack.Navigator>
        {!authState.isLoggedIn ? (
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigation}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
