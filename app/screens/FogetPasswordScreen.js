import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import Button from '../components/Button';
import Icon from '../components/Icon';
import InputText from '../components/InputText';
import colors from '../config/colors';

function ForgetPasswordScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const forgotPassword = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => Alert.alert('Done', `reset email had sent to ${email}`))
      .catch(error => console.log(error));
  };

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <ImageBackground
        source={require('../assets/avatar.png')}
        style={styles.background}
        imageStyle={{opacity: 0.3}}>
        <SafeAreaView>
          <View style={styles.overlay}>
            <View style={{paddingTop: 200}}></View>
            <Text style={styles.primaryText}>Your Email</Text>
            <InputText
              placeholder={'Email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />

            <View style={{flexDirection: 'row-reverse'}}>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.secondaryText}>Go back</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Button
                title="Send"
                color={colors.transparent}
                onPress={() => forgotPassword()}
              />
            </View>
          </View>
        </SafeAreaView>
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
});
export default ForgetPasswordScreen;
