import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import BottomTab from '../components/BottomTab';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import ImageScreen from '../screens/ImageScreen';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';
import MoviesListingScreen from '../screens/MoviesListingScreen';
import GenreScreen from '../screens/GenreScreen';

function AppNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={() => <BottomTab />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Genre" component={GenreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Image" component={ImageScreen} />
      <Tab.Screen name="MovieDetails" component={MovieDetailsScreen} />
      <Tab.Screen name="MoviesListing" component={MoviesListingScreen} />
    </Tab.Navigator>
  );
}
export default AppNavigator;
