import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Icon from '../components/Icon';
import colors from '../config/colors';
import useAuths from '../auths/useAuths';

function ProfileScreen(props) {
  const {user, setUser} = useAuths();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    userDetails();
  }, []);

  const userDetails = () => {
    var uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(snap => {
        const data = snap.data();
        setEmail(data.email);
        setName(data.name);
      });
  };

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <LinearGradient colors={colors.background}>
      <SafeAreaView style={styles.container}>
        <View>
          <View style={{alignItems: 'center'}}>
            <Icon iconSize={140} iconSource={require('../assets/user.png')} />
          </View>
          <Text style={[styles.primaryText, {fontSize: 26}]}>{name}</Text>
          <Text style={[styles.primaryText, {paddingVertical: 0}]}>
            {email}
          </Text>
          <View style={{flex: 1}}></View>
          <TouchableWithoutFeedback onPress={() => handleLogout()}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.bottomContainer}>
                <Icon
                  iconSource={require('../assets/exit.png')}
                  iconSize={50}
                  onPress={() => handleLogout()}
                />
                <Text style={styles.primaryText}>Logout</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 30,
  },
  primaryText: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.white,
    paddingVertical: 15,
    alignSelf: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ProfileScreen;
