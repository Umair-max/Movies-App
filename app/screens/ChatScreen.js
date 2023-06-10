import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
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
  const navigation = useNavigation();
  const [visibleIcon, setVisibleIcon] = useState(true);
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <LinearGradient colors={colors.topColor} style={styles.topContainer}>
        <SafeAreaView>
          <View style={styles.container}>
            <Icon
              iconSource={require('../assets/arrow.png')}
              iconSize={30}
              backgroundColor="transparent"
              onPress={() => navigation.navigate('Inbox')}
            />
            <Icon iconSize={50} iconSource={require('../assets/user.png')} />
            <Text style={styles.userName}>User Name</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <ScrollView style={{flex: 1}}></ScrollView>

      <View style={styles.bottomTab}>
        <View style={styles.inputContainer}>
          <Icon
            iconSource={require('../assets/camera.png')}
            backgroundColor="transparent"
            iconSize={40}
          />
          <TextInput
            placeholder="Type message"
            placeholderTextColor={colors.dimWhite}
            style={styles.textInput}
            // onChange={() => setVisibleIcon(false)}
          />
          <View
            style={{
              position: 'absolute',
              flexDirection: 'row',
              right: 0,
              alignSelf: 'center',
            }}>
            {visibleIcon ? (
              <Icon
                backgroundColor="transparent"
                iconSource={require('../assets/happy.png')}
                iconColor={colors.white}
                iconSize={40}
              />
            ) : null}

            <Icon
              backgroundColor="transparent"
              iconSource={require('../assets/send.png')}
              iconColor={colors.white}
              iconSize={40}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    flex: 1,
  },
  topContainer: {
    paddingBottom: 7,
    width: '110%',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
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
