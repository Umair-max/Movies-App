import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

function MessageReceiveCard({message, time, name}) {
  return (
    <View style={styles.container}>
      {message && <Text style={styles.name}>{name}</Text>}
      {message && <Text style={styles.text}>{message}</Text>}
      {message && <Text style={styles.timeText}>{time}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    width: '80%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: 14,
    paddingVertical: 4,
  },
  text: {
    marginHorizontal: 14,
    fontSize: 20,
    lineHeight: 24,
    color: colors.white,
    fontWeight: '400',
  },
  timeText: {
    alignSelf: 'flex-end',
    fontSize: 12,
    marginRight: 14,
    color: colors.white,
  },
  name: {
    fontSize: 14,
    marginLeft: 14,
    color: colors.dimWhite,
  },
});
export default MessageReceiveCard;
