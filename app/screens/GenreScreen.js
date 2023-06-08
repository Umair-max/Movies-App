import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button';
import Icon from '../components/Icon';
import SmallButton from '../components/SmallButton';
import colors from '../config/colors';

const data = [
  {key: 'Cartoon'},
  {key: 'Thriller'},
  {key: 'Comedy'},
  {key: 'Adventure'},
  {key: 'Biography'},
  {key: 'Crime'},
  {key: 'Action'},
  {key: 'Fantastic'},
  {key: 'Detective'},
  {key: 'Drama'},
  {key: 'Melodramas'},
  {key: 'Military'},
  {key: 'Westerns'},
  {key: 'Anime'},
  {key: 'Fantasy'},
  {key: 'Family'},
  {key: 'History'},
  {key: 'Horror'},
];

const formatData = (data, numColumns) => {
  Math.floor(data.length / numColumns);
  return data;
};

const numColumns = 3;
function GenreScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView style={{alignItems: 'center'}}>
        <View style={{flexDirection: 'row', paddingBottom: 40}}></View>
        <Text style={styles.text}>Choose your favourite genres</Text>

        <FlatList
          data={formatData(data, numColumns)}
          numColumns={numColumns}
          renderItem={({item}) => {
            return (
              <SmallButton
                title={item.key}
                paddingHorizontal={15}
                borderRadius={20}
              />
            );
          }}
        />

        <View style={styles.bottomContainer}>
          <View style={{marginVertical: 25}}>
            <SmallButton title="Skip" fontWeight={'700'} />
          </View>
          <Button title="Next" />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    flex: 1,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  // itemInvisible: {
  //   backgroundColor: 'transparent',
  // },
});
export default GenreScreen;
