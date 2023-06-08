import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Icon';

import colors from '../config/colors';

function ChatScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <View style={styles.topContainer}>
        <SafeAreaView>
          <View style={styles.container}>
            <Icon
              iconSource={require('../assets/arrow.png')}
              iconSize={30}
              backgroundColor="transparent"
            />
            <Icon iconSize={50} />
            <Text style={styles.userName}>User Name</Text>
          </View>
        </SafeAreaView>
      </View>
      <ScrollView style={{flex: 1}}></ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.inputContainer}>
          <Icon
            iconSource={require('../assets/camera.png')}
            backgroundColor="transparent"
            iconSize={40}
          />
          <TextInput
            placeholder="Type your message"
            placeholderTextColor={colors.dimWhite}
            style={styles.textInput}
          />
          <Icon
            backgroundColor="transparent"
            iconSource={require('../assets/happy.png')}
            iconColor={colors.white}
            iconSize={40}
          />
          <Icon
            backgroundColor="transparent"
            iconSource={require('../assets/send.png')}
            iconColor={colors.white}
            iconSize={40}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    flex: 1,
    borderRadius: 5,
  },
  topContainer: {
    height: '15%',
    width: '110%',
    backgroundColor: colors.lightBlue,
    position: 'absolute',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 4,
    marginLeft: 12,
  },
  time: {
    fontSize: 10,
    color: colors.dimWhite,
  },
  bottomTab: {
    width: '110%',
    height: 80,
    // backgroundColor: colors.blue,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    paddingVertical: 8,
    width: '100%',
    borderRadius: 22,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.dimWhite,
  },
  textInput: {
    paddingRight: 60,
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: '400',
    color: colors.white,
  },
});
export default ChatScreen;
