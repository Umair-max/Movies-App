import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Search from '../components/Search';
import SmallButton from '../components/SmallButton';
import colors from '../config/colors';

const data = [
  {id: 1, key: 'Cartoon'},
  {id: 2, key: 'Thriller'},
  {id: 3, key: 'Comedy'},
  {id: 4, key: 'Anime'},
  {id: 5, key: 'Biography'},
  {id: 6, key: 'Crime'},
  {id: 7, key: 'Action'},
  {id: 8, key: 'Fantastic'},
  {id: 9, key: 'Detective'},
  {id: 10, key: 'Drama'},
  {id: 11, key: 'Melodramas'},
  {id: 12, key: 'Military'},
  {id: 13, key: 'Westerns'},
  {id: 14, key: 'Adventure'},
  {id: 15, key: 'Fantasy'},
  {id: 16, key: 'Family'},
  {id: 17, key: 'History'},
  {id: 18, key: 'Horror'},
];

function SearchScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.primaryText}>Search</Text>
          <Search placeholder="Search" />

          <View style={{alignItems: 'center', marginTop: 10, marginBottom: 15}}>
            <View style={{flexDirection: 'row'}}>
              <SmallButton
                title={data[0].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
              <SmallButton
                title={data[1].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
              <SmallButton
                title={data[2].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
              <SmallButton
                title={data[3].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <SmallButton
                title={data[4].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
              <SmallButton
                title={data[5].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
              <SmallButton
                title={data[6].key}
                paddingHorizontal={12}
                height={35}
                fontSize={14}
                fontWeight={'500'}
              />
            </View>
          </View>

          {data.map(item => (
            <>
              <View style={styles.container}>
                <Text key={item.id} style={styles.primaryText}>
                  {item.key}
                </Text>
                <SmallButton
                  height={20}
                  fontSize={12}
                  fontWeight={'500'}
                  paddingHorizontal={10}
                  title="See all"
                />
              </View>
              <View style={styles.movieImageContainer}></View>
            </>
          ))}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: 15,
  },
  primaryText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  movieImageContainer: {
    backgroundColor: colors.white,
    height: 130,
    width: 130,
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
export default SearchScreen;
