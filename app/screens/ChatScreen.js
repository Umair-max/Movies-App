import React, {useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import EmojiSelector from 'react-native-emoji-selector';
import {launchImageLibrary} from 'react-native-image-picker';

import Icon from '../components/Icon';
import MessageSendCard from '../components/MessageSendCard';
import colors from '../config/colors';
import moment from 'moment';
import ImageCard from '../components/ImageCard';
import ChatCard from '../components/ChatCard';
import MessageReceiveCard from '../components/MessageReceiveCard';

function ChatScreen() {
  const scrollRef = useRef(null);
  const navigation = useNavigation();
  const uid = auth().currentUser.uid;
  const [message, setMessage] = useState('');
  const [time, setTime] = useState('');
  const [chats, setChats] = useState([]);
  const [name, setName] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [showEmojiTab, setShowEmojiTab] = useState(false);

  useEffect(() => {
    getUserName();
    getMessage();
  }, []);

  const getUserName = () => {
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(snap => setName(snap.data().name));
  };

  const getMessage = () => {
    firestore()
      .collection('Message')
      .orderBy('date', 'asc')
      .onSnapshot(snap => {
        const data = snap.docs;
        const array = [];
        data.forEach(eachMessage => {
          const msg = eachMessage.data();
          array.push(msg);
        });
        setChats(array);
      });
  };
  const sendMessage = url => {
    if (message.trim().length !== 0 || url) {
      firestore()
        .collection('Message')
        .doc()
        .set({
          imageUrl: url ? url : null,
          message: message,
          time: moment().format('h:mm a'),
          uid: uid,
          name: name,
          date: Date.now(),
        });
      setIsLoaded(false);
    } else {
      Alert.alert('Alert', 'Message should not be empty');
      setIsLoaded(false);
    }
    setMessage('');
    setImageUri(null);
  };

  const selectImage = async () => {
    try {
      const options = {
        mediaType: 'photo',
        quality: 0.1,
      };
      const result = await launchImageLibrary(options);
      if (!result?.didCancel) {
        result.assets.map(({uri}) => {
          setImageUri(uri);
        });
      }
    } catch (error) {
      console.log('select image giving an error an error', error);
    }
  };

  const storeImage = () => {
    setIsLoaded(true);
    const postId = firestore().collection('Users').doc().id;
    var pathToBe = 'Post Image' + postId;
    storage()
      .ref(pathToBe)
      .putFile(imageUri)
      .then(() => {
        storage()
          .ref(pathToBe)
          .getDownloadURL()
          .then(url => {
            sendMessage(url);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <LinearGradient colors={colors.topColor} style={styles.topContainer}>
        <SafeAreaView>
          <View style={styles.container}>
            <Icon
              iconSource={require('../assets/arrow.png')}
              iconSize={30}
              backgroundColor="transparent"
              onPress={() => navigation.navigate('Inbox')}
            />
            <Icon iconSize={50} iconSource={require('../assets/global.png')} />
            <Text style={styles.userName}>Global Chat</Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <View style={{flex: 1}}>
        {chats.length > 0 ? (
          <FlatList
            ref={scrollRef}
            onContentSizeChange={() => scrollRef.current.scrollToEnd()}
            showsVerticalScrollIndicator={false}
            data={chats}
            renderItem={({item}) => {
              if (item.uid === uid) {
                return item.imageUrl ? (
                  <ImageCard
                    imageUri={item.imageUrl}
                    alignSelf="flex-end"
                    visibleCross={false}
                  />
                ) : (
                  <MessageSendCard message={item.message} time={item.time} />
                );
              } else {
                return item.imageUrl ? (
                  <ImageCard
                    imageUri={item.imageUrl}
                    alignSelf="flex-start"
                    visibleCross={false}
                    name={item.name}
                  />
                ) : (
                  <MessageReceiveCard
                    message={item.message}
                    name={item.name}
                    time={item.time}
                  />
                );
              }
            }}
          />
        ) : null}
      </View>
      {imageUri && (
        <ImageCard imageUri={imageUri} onCancel={() => setImageUri(null)} />
      )}
      <View style={styles.inputContainer}>
        {message.length === 0 && (
          <Icon
            iconSource={require('../assets/camera.png')}
            backgroundColor="transparent"
            iconSize={40}
            onPress={() => selectImage()}
          />
        )}

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          multiline
          placeholder="Type message"
          placeholderTextColor={colors.dimWhite}
          style={styles.textInput}
          value={message}
          onChangeText={text => setMessage(text)}
        />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            right: 0,
            alignSelf: 'center',
          }}>
          {message.length === 0 && (
            <Icon
              backgroundColor="transparent"
              iconSource={require('../assets/happy.png')}
              iconSize={40}
              onPress={() => {
                showEmojiTab === false
                  ? setShowEmojiTab(true)
                  : setShowEmojiTab(false);
              }}
            />
          )}
          <Icon
            backgroundColor="transparent"
            iconSource={require('../assets/send.png')}
            iconSize={40}
            onPress={() => {
              imageUri ? storeImage() : sendMessage();
            }}
          />
        </View>
      </View>
      {showEmojiTab && (
        <EmojiSelector
          onEmojiSelected={emoji => {
            setMessage(emoji);
            setShowEmojiTab(false);
          }}
          showSearchBar={false}
          showSectionTitles={false}
        />
      )}
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    flex: 1,
  },
  topContainer: {
    paddingBottom: 7,
    width: '110%',
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.white,
    marginVertical: 4,
    marginLeft: 12,
  },
  time: {
    fontSize: 10,
    color: colors.dimWhite,
  },
  inputContainer: {
    alignItems: 'center',
    marginVertical: 5,
    borderRadius: 22,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: colors.dimWhite,
  },
  textInput: {
    paddingRight: 50,
    paddingLeft: 10,
    marginVertical: 10,
    fontSize: 18,
    fontWeight: '400',
    color: colors.white,
  },
});
export default ChatScreen;
