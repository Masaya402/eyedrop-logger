import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HistoryScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>履歴</Text>
    {/* TODO: 日付ごとの記録リスト */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HistoryScreen;
