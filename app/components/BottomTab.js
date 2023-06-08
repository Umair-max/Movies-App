import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import Icon from '../components/Icon';

import colors from '../config/colors';

function BottomTab() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={colors.tabColor} style={styles.linearGradient}>
      <View style={{alignItems: 'center'}}>
        <Icon
          iconSize={40}
          iconSource={require('../assets/home.png')}
          backgroundColor={'transparent'}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon
          iconSize={40}
          iconSource={require('../assets/pan.png')}
          backgroundColor={'transparent'}
          onPress={() => navigation.navigate('Search')}
        />
        <Text style={styles.iconText}>Search</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Icon
          iconSize={40}
          iconSource={require('../assets/chat.png')}
          backgroundColor={'transparent'}
          onPress={() => navigation.navigate('Inbox')}
        />
        <Text style={styles.iconText}>Inbox</Text>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    height: '10%',
    flexDirection: 'row',
    paddingHorizontal: 40,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  iconText: {
    color: colors.white,
  },
});
export default BottomTab;
