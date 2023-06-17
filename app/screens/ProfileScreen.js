import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Icon from '../components/Icon';
import colors from '../config/colors';
import useAuths from '../auths/useAuths';
import {useNavigation} from '@react-navigation/native';

function ProfileScreen(props) {
  const navigation = useNavigation();
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
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
          }}>
          <Icon
            backgroundColor="transparent"
            iconSource={require('../assets/arrow.png')}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.profileText}>Profile</Text>
          <View style={styles.hidden}></View>
        </View>

        <View>
          <View style={{alignItems: 'center', marginTop: 50}}>
            <Icon iconSize={140} iconSource={require('../assets/user.png')} />
          </View>

          <Text style={[styles.primaryText, {fontSize: 26}]}>{name}</Text>
          <Text style={[styles.primaryText, {paddingVertical: 0}]}>
            {email}
          </Text>
        </View>
        <View style={{flex: 1}}></View>
        <TouchableWithoutFeedback onPress={() => handleLogout()}>
          <View style={styles.bottomContainer}>
            <Icon
              iconSource={require('../assets/exit.png')}
              iconSize={50}
              onPress={() => handleLogout()}
            />
            <Text style={styles.primaryText}>Logout</Text>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  profileText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
  },
  hidden: {
    width: 50,
    height: 40,
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
    alignSelf: 'center',
    marginBottom: 20,
  },
});
export default ProfileScreen;
