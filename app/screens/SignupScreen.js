import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Button from '../components/Button';
import InputText from '../components/InputText';
import colors from '../config/colors';
import useAuths from '../auths/useAuths';

function SignupScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useAuths();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSignup = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoaded(true);
        var UserUid = auth().currentUser.uid;
        handleUserInfo(UserUid);
        setUser(auth().currentUser);
      })
      .catch(error => {
        let errorMessage = error.message;
        const splittedMessage = errorMessage.split('] ')[1];
        Alert.alert('Message', splittedMessage);
      });
  };

  const handleUserInfo = uid => {
    firestore().collection('Users').doc(uid).set({
      name: name,
      email: email,
    });
  };

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <ImageBackground
        source={require('../assets/avatar.png')}
        style={styles.background}
        imageStyle={{opacity: 0.3}}>
        {isLoaded ? (
          <View style={styles.indicator}>
            <ActivityIndicator />
          </View>
        ) : (
          <SafeAreaView>
            <View
              style={{
                paddingTop: 200,
              }}></View>
            <Text style={styles.primaryText}>Signup</Text>
            <InputText
              placeholder={'Name'}
              value={name}
              onChangeText={text => setName(text)}
            />
            <InputText
              placeholder={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <InputText
              placeholder={'Password'}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <View style={{paddingHorizontal: 30, alignItems: 'center'}}>
              <Button
                title="Signup"
                color={colors.transparent}
                onPress={() => handleSignup()}
              />
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Login')}>
                <View style={{paddingTop: 90}}>
                  <Text style={styles.primaryText}>Login?</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </SafeAreaView>
        )}
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  background: {
    flex: 1,
    width: '115%',
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
  },
  secondaryText: {
    color: colors.white,
    fontSize: 18,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 50,
  },
  bottomContainer: {
    alignItems: 'center',
  },
});
export default SignupScreen;
