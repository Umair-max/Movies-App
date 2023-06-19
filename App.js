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
