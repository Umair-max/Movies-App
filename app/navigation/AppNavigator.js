import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import BottomTab from '../components/BottomTab';
import SearchScreen from '../screens/SearchScreen';

function AppNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBar={() => <BottomTab />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
    </Tab.Navigator>
  );
}
export default AppNavigator;
