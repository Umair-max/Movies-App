import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import database from '@react-native-firebase/database';

import Button from '../components/Button';
import SmallButton from '../components/SmallButton';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';

function GenreScreen() {
  const navigattion = useNavigation();
  const [change, setChange] = useState(false);
  const [iseLoaded, setIsLoaded] = useState(true);
  const [genre, setGenre] = useState([]);

  var isMounted = false;

  useEffect(() => {
    isMounted = true;
    getData();
    return () => {
      isMounted = false;
    };
  }, []);

  const getData = () => {
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

  const changeColor = () => {};

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView>
        {iseLoaded ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <View style={{alignItems: 'center', paddingVertical: 40}}>
            <Text style={styles.text}>Choose your favourite genres</Text>
            <FlatList
              data={genre}
              numColumns={3}
              renderItem={({item, index}) => {
                console.log(index, item.description);
                return (
                  <SmallButton
                    title={item.description}
                    paddingHorizontal={15}
                    borderRadius={20}
                    buttonColor={colors.darkBlue}
                    onPress={() => changeColor()}
                  />
                );
              }}
            />

            <View style={styles.bottomContainer}>
              <SmallButton
                title="Skip"
                fontWeight={'700'}
                onPress={() => navigattion.navigate('Home')}
              />
              <Button title="Next" />
            </View>
          </View>
        )}
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
    alignItems: 'center',
  },
});
export default GenreScreen;
