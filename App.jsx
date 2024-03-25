//import liraries
import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import CarsList from './src/components/carsList';
import Header from './src/components/Header';

// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
