import React from 'react';
import {Searchbar} from 'react-native-paper';
import {StyleSheet, SafeAreaView, View} from 'react-native';

import {RestaurantInfoCard} from '../components/RestaurantInfoCard';

export const RestaurantsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar placeholder="Search" />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 16,
  },
});
