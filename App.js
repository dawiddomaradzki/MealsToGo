import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {List} from './src/components/List/List';
import {Search} from './src/components/Search/Search';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search style={styles.search} />
        <List style={styles.list} />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
