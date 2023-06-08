import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';

function InputText({
  placeholder = 'placeholder',
  backgroundColor = colors.transparent,
  textpaddingHorizontal = 15,
  fontSize = 20,
  paddingVertical = 14,
}) {
  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: backgroundColor, paddingVertical: paddingVertical},
      ]}>
      <TextInput
        style={{
          paddingHorizontal: textpaddingHorizontal,
          fontSize: fontSize,
          color: colors.white,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.white}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 14,
    marginVertical: 12,
    borderRadius: 12,
  },
});
export default InputText;
