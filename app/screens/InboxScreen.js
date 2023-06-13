import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';

import ChatCard from '../components/ChatCard';
import Search from '../components/Search';

import colors from '../config/colors';

function InboxScreen() {
  const [lastMessage, setLastMessage] = useState('');

  useEffect(() => {
    getLastMessage();
  }, []);

  const getLastMessage = () => {
    firestore()
      .collection('Message')
      .orderBy('date', 'desc')
      .limit(1)
      .onSnapshot(snap => {
        const data = snap.docs;
        const lastMessage = data[0].data().message;
        setLastMessage(lastMessage);
      });
  };

  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.primaryText}>Inbox</Text>
          <Search placeholder="Search" />
          <ChatCard lastMessage={lastMessage} />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  linearGradient: {
    paddingHorizontal: 15,
    flex: 1,
  },
  primaryText: {
    fontSize: 26,
    fontWeight: '600',
    color: colors.white,
    paddingBottom: 15,
    alignSelf: 'center',
  },
});
export default InboxScreen;
