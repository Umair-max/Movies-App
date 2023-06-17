import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

import SearchBar from '../components/SearchBar';
import colors from '../config/colors';
import Card from '../components/Card';

function SearchScreen() {
  const flatlistRef = useRef();
  const [genre, setGenre] = useState([]);
  const [iseLoaded, setIsLoaded] = useState(true);

  var isMounted = false;

  useEffect(() => {
    isMounted = true;
    getData();

    return () => {
      isMounted = false;
    };
  }, []);

  const getData = () => {
    setIsLoaded(true);

    database()
      .ref('genres')
      .once('value')
      .then(snapshot => {
        var doc = snapshot.val();
        var temp = Object.values(doc);
        if (temp.length > 0) {
          if (isMounted) {
            setGenre(temp);
            setIsLoaded(false);
          }
        }
      });
  };

  return (
    <LinearGradient colors={colors.background}>
      <SafeAreaView style={{width: '100%', height: '100%'}}>
        {iseLoaded ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
            <Text style={styles.primaryText}>Search</Text>
            <View style={{marginHorizontal: 15, marginBottom: 4}}>
              <SearchBar />
            </View>
            <FlatList
              ref={flatlistRef}
              showsVerticalScrollIndicator={false}
              data={genre}
              renderItem={({item}) => <Card data={item} />}
            />
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  primaryText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
    paddingBottom: 10,
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
});
export default SearchScreen;
