import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
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

import Icon from '../components/Icon';
import SmallButton from '../components/SmallButton';
import colors from '../config/colors';
import Card from '../components/Card';

function HomeScreen() {
  const flatlistRef = useRef();
  const navigation = useNavigation();
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

  const scrollToIndex = index => {
    flatlistRef.current.scrollToIndex({animated: true, index: index});
  };

  return (
    <LinearGradient colors={colors.background}>
      <SafeAreaView style={{height: '100%', width: '100%'}}>
        {iseLoaded ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator />
          </View>
        ) : (
          <>
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
              horizontal
              showsHorizontalScrollIndicator={false}
              data={genre}
              renderItem={({item, index}) => (
                <SmallButton
                  title={item.description}
                  onPress={() => scrollToIndex(index)}
                />
              )}
            />

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
    marginBottom: 10,
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  hidden: {
    width: 40,
    height: 40,
  },
});
export default HomeScreen;
