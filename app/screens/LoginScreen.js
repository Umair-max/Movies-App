import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../components/Button';
import Icon from '../components/Icon';
import InputText from '../components/InputText';
import colors from '../config/colors';

function LoginScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <ImageBackground
        source={require('../assets/avatar.png')}
        style={styles.background}
        imageStyle={{opacity: 0.3}}>
        <SafeAreaView>
          <View style={styles.overlay}>
            <View style={{paddingTop: 200}}></View>
            <Text style={styles.primaryText}>Login</Text>
            <InputText placeholder={'Email'} />
            <InputText placeholder={'Password'} />
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}></View>
              <Text style={styles.secondaryText}>Forgot password </Text>
            </View>
            <View style={{paddingHorizontal: 20}}>
              <Button title="Login" color={colors.transparent} />
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
              <Text style={styles.primaryText}>Sign up</Text>
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
    paddingLeft: 15,
    paddingRight: 15,
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
  bottomContainer: {
    alignItems: 'center',
  },
});
export default LoginScreen;
