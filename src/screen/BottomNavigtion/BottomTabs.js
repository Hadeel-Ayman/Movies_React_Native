import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../HomeScreen/Home';
import * as React from 'react';
import Favorite from '../Favorite/Favorite';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Detailes from '../DetailesScreen/Detailes';
const BottomNavigtion = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#110E47',
        tabBarStyle: {height: 50, paddingVertical: 10},
        tabBarIcon: ({focused, size, color}) => {
          let iconImage;
          if (route.name == 'Home') {
            iconImage = focused ? 'film' : 'film';
          } else if (route.name == 'Favorite') {
            iconImage = focused ? 'bookmark-alt' : 'bookmark';
          } else if (route.name == 'Detailes') {
            iconImage = focused ? 'spinner-refresh' : 'spinner-refresh';
          }
          return <Fontisto name={iconImage} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{headerShown: false}}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Detailes"
        component={Detailes}
        screenOptions={{headerLeft: false}}
        options={{tabBarLabel: ''}}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        screenOptions={{headerShown: false}}
        options={{tabBarLabel: ''}}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigtion;
