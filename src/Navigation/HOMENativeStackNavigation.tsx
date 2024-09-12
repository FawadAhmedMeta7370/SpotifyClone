import HomeScreen from '../Screens/Home/HomeScreen';
import PlaylistScreen from '../Screens/PlaylistScreen/PlaylistScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MusicPlayerScreen from '../Screens/MusicPlayerScreen/MusicPlayerScreen';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function HomeScreenPlayListStack() {
  return (
    <GestureHandlerRootView>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PlayList Screen"
          component={PlaylistScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            title: '',
          }}
        />
        <Stack.Screen
          name="MusicPlay Screen"
          component={MusicPlayerScreen}
          options={{
            headerTransparent: true,
            headerTintColor: '#fff',
            title: '',
            presentation: 'modal'
          }}
        />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
}

export default HomeScreenPlayListStack;
