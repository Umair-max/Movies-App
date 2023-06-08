import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';

function SmallButton({
  title = 'title',
  color = colors.darkBlue,
  paddingHorizontal = 30,
  borderRadius = 12,
  fontWeight,
  fontSize = 18,
  height = 40,
}) {
  return (
    <TouchableWithoutFeedback>
      <View
        style={[
          styles.buttonContainer,
          {backgroundColor: color, borderRadius: borderRadius, height: height},
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
