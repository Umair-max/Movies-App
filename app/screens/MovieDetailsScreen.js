import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';

import Icon from '../components/Icon';
import colors from '../config/colors';

function MovieDetailsScreen({route}) {
  const navigation = useNavigation();
  const item = route.params.item;

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <Icon
          iconSource={require('../assets/arrow.png')}
          iconSize={30}
          backgroundColor="transparent"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.imageContainer}>
          <FastImage
            source={{
              uri: item.imageUrl,
            }}
            style={[styles.image, {height: 900 / 2, width: 600 / 2}]}
          />
          <View style={[styles.textContainer, {width: 600 / 2}]}>
            <Text style={styles.text}>{`Title : ${item.title}`}</Text>
            <Text
              style={styles.text}>{`Released on : ${item.releaseData}`}</Text>
            <Text style={styles.text}>{`IMDB rating : ${item.rating}`}</Text>
            <Text style={styles.text}>{`Genres : ${item.movieGenre}`}</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
  },
  imageContainer: {
    marginTop: 15,
  },
  image: {
    borderRadius: 15,
    borderWidth: 3,
    alignSelf: 'center',
    borderColor: colors.white,
  },
  textContainer: {
    alignSelf: 'center',
    marginTop: 10,
    height: '20%',
  },
  text: {
    color: '#00BBF0',
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 10,
    borderColor: colors.white,
    borderWidth: 2,
    marginBottom: 2,
  },
});
export default MovieDetailsScreen;
