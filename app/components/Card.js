import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  FlatList,
  Text,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import database from '@react-native-firebase/database';

import colors from '../config/colors';
import SmallButton from './SmallButton';

function Card({data}) {
  const navigation = useNavigation();
  const [genre, setGenre] = useState();
  const [moviesData, setMoviesData] = useState([]);
  const [iseLoaded, setIsLoaded] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLoaded(true);

    database()
      .ref('genres')
      .once('value')
      .then(snapshot => {
        var doc = snapshot.val();
        var temp = Object.values(doc);
        setGenre(temp);
      });
    database()
      .ref('moviesData')
      .once('value')
      .then(snapshot => {
        var doc = snapshot.val();
        var temp = Object.values(doc);
        var filtered = [];
        temp.forEach(each => {
          if (each.movieGenre.includes(data.description)) {
            filtered.push(each);
          }
        });
        setMoviesData(filtered);
      });
    setIsLoaded(false);
  };

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.primaryText}>{data.description}</Text>
        <SmallButton
          height={20}
          fontSize={12}
          fontWeight={'500'}
          paddingHorizontal={10}
          title="See all"
          onPress={() => {
            navigation.navigate('MoviesListing', {
              item: moviesData,
              header: data.description,
            });
          }}
        />
      </View>
      {moviesData.length > 0 && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={moviesData}
          renderItem={({item}) => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('MovieDetails', {
                  item: item,
                })
              }>
              <View style={styles.movieImage}>
                <FastImage
                  source={{uri: item.imageUrl}}
                  style={{flex: 1, borderRadius: 10}}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  movieImage: {
    backgroundColor: colors.white,
    height: 130,
    width: 130,
    marginLeft: 15,
    borderRadius: 10,
    marginBottom: 25,
    flexDirection: 'row',
  },
  primaryText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
    marginBottom: 10,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
});
export default Card;
