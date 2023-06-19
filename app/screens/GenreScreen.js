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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import Button from '../components/Button';
import SmallButton from '../components/SmallButton';
import colors from '../config/colors';
import {useNavigation} from '@react-navigation/native';

function GenreScreen() {
  const navigation = useNavigation();
  const [iseLoaded, setIsLoaded] = useState(true);
  const [genre, setGenre] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);

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
  const changeColors = item => {
    if (selectedButtons.includes(item.description)) {
      setSelectedButtons(prevState =>
        prevState.filter(button => button !== item.description),
      );
    } else {
      if (selectedButtons.length < 3) {
        setSelectedButtons(prevState => [...prevState, item.description]);
      }
    }
  };

  const sendSelectedGenres = uid => {
    const UserUid = auth().currentUser.uid;
    firestore().collection('Users').doc(UserUid).update({
      genre: selectedButtons,
    });
  };

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
              renderItem={({item}) => {
                return (
                  <SmallButton
                    title={item.description}
                    paddingHorizontal={15}
                    borderRadius={20}
                    buttonColor={
                      selectedButtons.includes(item.description)
                        ? colors.blue
                        : colors.darkBlue
                    }
                    onPress={() => changeColors(item)}
                  />
                );
              }}
            />

            <View style={styles.bottomContainer}>
              <SmallButton
                title="Skip"
                fontWeight={'700'}
                onPress={() => navigation.navigate('Home')}
              />
              <Button
                title="Next"
                onPress={() => {
                  sendSelectedGenres();
                  navigation.navigate('Home');
                }}
              />
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
