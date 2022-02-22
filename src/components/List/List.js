import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 16,
  },
});
