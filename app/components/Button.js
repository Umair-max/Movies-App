import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';

function Button({title = 'title', color = colors.darkBlue, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 10,
    marginHorizontal: 15,
    height: 50,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    paddingHorizontal: 80,
  },
});
export default Button;
