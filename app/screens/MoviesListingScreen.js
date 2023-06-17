import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../config/colors';
import Icon from '../components/Icon';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

function MoviesListingScreen({route}) {
  const navigation = useNavigation();
  const data = route.params.item;
  const header = route.params.header;

  return (
    <LinearGradient
      colors={colors.background}
      style={{flex: 1, paddingHorizontal: 15}}>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon
            backgroundColor="transparent"
            iconColor={colors.white}
            iconSource={require('../assets/arrow.png')}
            onPress={() => navigation.navigate('Home')}
          />
          <Text style={styles.primaryText}>{header}</Text>
          <View style={styles.hidden}></View>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          data={data}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('MovieDetails', {item: item})}>
              <FastImage source={{uri: item.imageUrl}} style={styles.image} />
            </TouchableWithoutFeedback>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  primaryText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 10,
  },
  hidden: {
    width: 50,
    height: 40,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },

  image: {
    height: 250,
    width: 170,
    borderRadius: 10,
    marginTop: 20,
  },
});
export default MoviesListingScreen;
