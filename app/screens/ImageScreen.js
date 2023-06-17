import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, SafeAreaView, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '../components/Icon';

import colors from '../config/colors';

function ImageScreen({route}) {
  const navigation = useNavigation();
  const imageUri = route.params.imageUri;

  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;
  return (
    <LinearGradient colors={colors.background} style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{paddingLeft: 12, paddingTop: 10}}>
          <Icon
            iconSource={require('../assets/arrow.png')}
            iconColor={colors.white}
            iconSize={30}
            backgroundColor="transparent"
            onPress={() => navigation.navigate('Chat')}
          />
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <FastImage
            source={{uri: imageUri}}
            style={{height: imageHeight, width: imageWidth}}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
export default ImageScreen;
