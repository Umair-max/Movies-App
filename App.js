import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AuthsContext from './app/auths/AuthsContext';

export default function App(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = () => {
    if (auth().currentUser !== null && auth().currentUser !== undefined) {
      console.log('user not null >>>  ', auth().currentUser);
      setUser(auth().currentUser);
    }
  };

  return (
    <AuthsContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthsContext.Provider>
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
