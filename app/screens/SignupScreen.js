import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Button from '../components/Button';
import Icon from '../components/Icon';
import InputText from '../components/InputText';
import colors from '../config/colors';

function SignupScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <ImageBackground
        source={require('../assets/avatar.png')}
        style={styles.background}
        imageStyle={{opacity: 0.3}}>
        <SafeAreaView>
          <View style={{paddingTop: 200}}></View>
          <Text style={styles.primaryText}>Signup</Text>
          <InputText placeholder={'Name'} />
          <InputText placeholder={'Email'} />
          <InputText placeholder={'Password'} />
          <View style={{paddingHorizontal: 30}}>
            <Button title="Signup" color={colors.transparent} />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.secondaryText}>or continue with</Text>
            <View style={styles.iconsContainer}>
              <Icon iconSource={require('../assets/apple.png')} />
              <Icon iconSource={require('../assets/facebook.png')} />
              <Icon iconSource={require('../assets/google.png')} />
            </View>
            <Text style={styles.primaryText}>Login</Text>
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
  primaryText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    paddingBottom: 15,
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
