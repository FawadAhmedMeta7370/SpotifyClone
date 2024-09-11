import HomeScreen from '../Screens/Home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../Screens/Search/SearchScreen';
import PlaylistScreen from '../Screens/PlaylistScreen/PlaylistScreen';
import HomeScreenPlayListStack from './HOMENativeStackNavigation';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#000000',
        tabBarActiveBackgroundColor: 'transparent',
        tabBarLabelStyle: {fontSize: 15},
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Hometab"
        component={HomeScreenPlayListStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="home" color={color} size={size} />;
          },
          tabBarLabel: 'Search',
        }}
      />
      <Tab.Screen
        name="Search Screen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return <Ionicons name="search" color={color} size={size} />;
          },
          tabBarLabel: 'Home',
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
