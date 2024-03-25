//import liraries
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

// create a component
const Header = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <Image style={styles.menu} source={require('../../assets/menu.png')} />
    </View>
  );
};

//make this component available to the app
export default Header;
