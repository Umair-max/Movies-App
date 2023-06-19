import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Button from '../components/Button';
import Icon from '../components/Icon';
import InputText from '../components/InputText';
import colors from '../config/colors';

function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, setUser} = useAuths();
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoaded(true);
        setUser(auth().currentUser);
      })
      .catch(error => {
        let errorMessage = error.message;
        const splittedMessage = errorMessage.split('] ')[1];
        Alert.alert('Message', splittedMessage);
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
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'position' : 'height'}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -120 : 120}>
              <View style={styles.overlay}>
                <View style={{paddingTop: 200}}></View>
                <Text style={styles.primaryText}>Login</Text>
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
                <View style={{flexDirection: 'row-reverse'}}>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Forget')}>
                    <Text style={styles.secondaryText}>Forget password </Text>
                  </TouchableWithoutFeedback>
                </View>
                <View style={{paddingHorizontal: 20}}>
                  <Button
                    title="Login"
                    color={colors.transparent}
                    onPress={() => handleLogin()}
                  />
                </View>
                <View style={styles.bottomContainer}>
                  <Text style={styles.secondaryText}>or continue with</Text>
                  <View style={styles.iconsContainer}>
                    <Icon
                      iconSource={require('../assets/apple.png')}
                      imageSize={20}
                    />
                    <Icon
                      iconSource={require('../assets/facebook.png')}
                      imageSize={20}
                    />
                    <Icon
                      iconSource={require('../assets/google.png')}
                      imageSize={20}
                    />
                  </View>
                  <TouchableWithoutFeedback
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.primaryText}>Sign up?</Text>
                  </TouchableWithoutFeedback>
                </View>
              </View>
            </KeyboardAvoidingView>
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
  overlay: {
    zIndex: 1,
    opacity: 1,
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
export default LoginScreen;
