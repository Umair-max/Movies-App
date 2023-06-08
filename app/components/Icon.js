import React from 'react';
import {Image, View, TouchableWithoutFeedback} from 'react-native';
import colors from '../config/colors';

function Icon({
  iconSize = 40,
  iconSource,
  backgroundColor = colors.transparent,
  iconColor = colors.white,
  imageSize = (iconSize * 3) / 4,
  onPress,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: iconSize,
          height: iconSize,
          backgroundColor,
          borderRadius: iconSize / 2,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 5,
        }}>
        <Image
          style={{
            height: imageSize,
            width: imageSize,
            tintColor: iconColor,
          }}
          source={iconSource}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
export default Icon;
