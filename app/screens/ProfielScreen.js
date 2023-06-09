import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';

import Icon from '../components/Icon';
import colors from '../config/colors';
import useAuths from '../auths/useAuths';

function ProfielScreen(props) {
  const {user, setUser} = useAuths();

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
        console.log('User signed out!');
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.container}>
          <Icon iconSize={140} iconSource={require('../assets/user.png')} />
          <Text style={styles.primaryText}>jack frost</Text>
          <Text style={styles.primaryText}>jack@gmail.com</Text>
          <View>
            <View
              style={{
                flex: 0.5,
              }}></View>
          </View>
          <TouchableWithoutFeedback onPress={() => handleLogout()}>
            <View style={styles.bottomContainer}>
              <Icon iconSource={require('../assets/exit.png')} iconSize={50} />
              <Text style={styles.primaryText}>Logout</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
  },
  container: {
    alignItems: 'center',
    paddingTop: 60,
  },
  primaryText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
    paddingVertical: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
  },
});
export default ProfielScreen;
