import HomeScreen from '../Screens/Home/HomeScreen';
import PlaylistScreen from '../Screens/PlaylistScreen/PlaylistScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreenPlayListStack() {
  return (
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
          title: ''
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeScreenPlayListStack;
