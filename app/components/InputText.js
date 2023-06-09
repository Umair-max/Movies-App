import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';

function InputText({
  placeholder = 'placeholder',
  backgroundColor = colors.transparent,
  textpaddingHorizontal = 15,
  fontSize = 20,
  paddingVertical = 14,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: backgroundColor, paddingVertical: paddingVertical},
      ]}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        autoCapitalize={'none'}
        autoCorrect={false}
        {...otherProps}
        style={{
          paddingHorizontal: textpaddingHorizontal,
          fontSize: fontSize,
          color: colors.white,
        }}></TextInput>
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
