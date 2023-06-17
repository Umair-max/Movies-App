import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function ChatCard({lastMessage}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
      <View style={styles.container}>
        <Icon iconSize={50} iconSource={require('../assets/global.png')} />
        <View style={{width: '70%'}}>
          <Text style={styles.userName}>Global Chat</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {lastMessage ? lastMessage : 'Image'}
          </Text>
        </View>
        <Text style={styles.time}>11:18 PM</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 15,
    width: '100%',
    borderBottomColor: colors.dimWhite,
    borderBottomWidth: 0.5,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 4,
    marginLeft: 12,
  },
  lastMessage: {
    color: colors.dimWhite,
    fontWeight: '500',
    width: '80%',
    marginLeft: 10,
  },
  time: {
    fontSize: 10,
    color: colors.dimWhite,
  },
});
export default ChatCard;
