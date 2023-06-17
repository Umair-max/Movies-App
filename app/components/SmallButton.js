import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';

function SmallButton({
  title = 'title',
  paddingHorizontal = 30,
  borderRadius = 12,
  fontWeight = '500',
  fontSize = 16,
  height = 35,
  onPress,
  buttonColor = colors.darkBlue,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.buttonContainer,
          {
            backgroundColor: buttonColor,
            borderRadius: borderRadius,
            height: height,
          },
        ]}>
        <Text
          style={{
            paddingHorizontal: paddingHorizontal,
            fontWeight: fontWeight,
            fontSize: fontSize,
            color: colors.white,
          }}>
          {title}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 40,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
});
export default SmallButton;
