import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgetPasswordScreen from '../screens/FogetPasswordScreen';

function AuthNavigator(props) {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forget" component={ForgetPasswordScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
