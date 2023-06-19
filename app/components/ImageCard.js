import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import Icon from './Icon';
import colors from '../config/colors';

function ImageCard({
  imageUri,
  alignSelf = 'center',
  onCancel,
  visibleCross = true,
  name,
}) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Image', {imageUri: imageUri})}>
      <View style={styles.container}>
        {name && <Text style={styles.name}>{name}</Text>}
        <FastImage
          style={[styles.image, {alignSelf: alignSelf}]}
          source={{uri: imageUri}}
        />
        {visibleCross === true && (
          <View style={styles.iconContainer}>
            <Icon
              iconSource={require('../assets/close.png')}
              iconColor={colors.white}
              iconSize={20}
              backgroundColor="transparent"
              onPress={onCancel}
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 14,
  },
  image: {
    width: '40%',
    height: 250,
    borderRadius: 20,
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    padding: 14,
  },
  name: {
    fontSize: 14,
    marginLeft: 14,
    color: colors.dimWhite,
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ImageCard;
