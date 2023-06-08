import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ChatCard from '../components/ChatCard';
import Search from '../components/Search';

import colors from '../config/colors';

function InboxScreen() {
  return (
    <LinearGradient colors={colors.background} style={styles.linearGradient}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.primaryText}>Inbox</Text>
          <Search placeholder="Search" />
          <ChatCard />
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
