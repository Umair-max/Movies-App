import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function ChatCard() {
  return (
    <View style={styles.container}>
      <Icon iconSize={50} />
      <View style={{width: '70%'}}>
        <Text style={styles.userName}>User Name</Text>
        <Text style={styles.lastMessage} numberOfLines={1}>
          Faisal Changings Complete
        </Text>
      </View>
      <Text style={styles.time}>11:18 PM</Text>
    </View>
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
