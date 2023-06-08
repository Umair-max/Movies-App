import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../config/colors';
import Icon from './Icon';

function Search({
  placeholder = 'placeholder',
  backgroundColor = colors.blue,
  fontSize = 18,
}) {
  return (
    <View style={[styles.inputContainer, {backgroundColor: backgroundColor}]}>
      <Icon
        iconSource={require('../assets/search.png')}
        backgroundColor="transparent"
        iconSize={30}
      />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.white}
        style={{
          paddingRight: 60,
          paddingLeft: 10,
          fontSize: fontSize,
          fontWeight: '400',
          color: colors.white,
        }}></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 6,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
  },
});
export default Search;
