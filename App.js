import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import ChatScreen from './app/screens/ChatScreen';
import GenreScreen from './app/screens/GenreScreen';
import HomeScreen from './app/screens/HomeScreen';
import InboxScreen from './app/screens/InboxScreen';
import LoginScreen from './app/screens/LoginScreen';
import SearchScreen from './app/screens/SearchScreen';
import SignupScreen from './app/screens/SignupScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

export default function App(props) {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// const getAPIData = async () => {
//   const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=movies';
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3e9679a8bamsh881611b2db6f4bcp163c3bjsn2188c1e2b3db',
//       'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };
// useEffect(() => {
//   getAPIData();
// }, []);
