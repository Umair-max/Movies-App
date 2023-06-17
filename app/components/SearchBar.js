import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, FlatList, TextInput} from 'react-native';
import database from '@react-native-firebase/database';

import colors from '../config/colors';
import Icon from './Icon';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    database()
      .ref('moviesData')
      .once('value')
      .then(snapshot => {
        var doc = snapshot.val();
        var temp = Object.values(doc);
        setMasterDataSource(temp);
        setFilteredDataSource(temp);
      });
  };

  const searchFilterFunction = text => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <>
      <View style={[styles.inputContainer, {backgroundColor: colors.blue}]}>
        <Icon
          iconSource={require('../assets/search.png')}
          backgroundColor="transparent"
          iconSize={30}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Search"
          placeholderTextColor={colors.white}
          style={{
            paddingRight: 60,
            paddingLeft: 10,
            fontSize: 18,
            fontWeight: '400',
            color: colors.white,
          }}
          onChangeText={text => {
            searchFilterFunction(text);
            text.length > 0 ? setVisible(true) : setVisible(false);
          }}
          value={search}
          underlineColorAndroid="transparent"
        />
      </View>
      {visible && (
        <View style={{height: 150}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filteredDataSource}
            renderItem={({item}) => (
              <Text
                style={styles.moviesTitle}
                onPress={() => {
                  navigation.navigate('MovieDetails', {item: item});
                  searchFilterFunction(null);
                  setVisible(false);
                }}>
                {item.title}
              </Text>
            )}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 6,
    width: '100%',
    borderRadius: 12,
    flexDirection: 'row',
  },
  moviesTitle: {
    color: colors.white,
  },
});
export default SearchBar;
