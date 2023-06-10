import {useNavigation} from '@react-navigation/native';
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
import Icon from '../components/Icon';
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

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={colors.background}>
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              justifyContent: 'space-between',
            }}>
            <View style={styles.hidden}></View>
            <Text style={styles.primaryText}>Home</Text>
            <Icon
              iconColor={colors.white}
              iconSource={require('../assets/user.png')}
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data}
            renderItem={({item}) => <SmallButton title={item.key} />}
          />
          <ScrollView horizontal={true} scrollEnabled={false}>
            <FlatList
              scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({item}) => (
                <>
                  <View style={styles.titleContainer}>
                    <Text key={item.id} style={styles.primaryText}>
                      {item.key}
                    </Text>
                    {/* <View style={{flex: 1}}></View> */}
                    <SmallButton
                      height={20}
                      fontSize={12}
                      fontWeight={'500'}
                      paddingHorizontal={10}
                      title="See all"
                    />
                  </View>
                  <View style={styles.imageContainer}>
                    <View style={styles.movieImage}></View>
                    <View style={styles.movieImage}></View>
                  </View>
                </>
              )}
            />
          </ScrollView>
        </ScrollView>
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
  movieImage: {
    backgroundColor: colors.white,
    height: 130,
    width: 130,
    borderRadius: 10,
    marginBottom: 25,
    marginRight: 10,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 15,
  },
  imageContainer: {
    marginLeft: 15,
    flexDirection: 'row',
  },
  hidden: {
    width: 40,
    height: 40,
  },
});
export default HomeScreen;
