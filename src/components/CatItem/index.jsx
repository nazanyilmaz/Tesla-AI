//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import styles from './style';
import Button from '../Button';

// create a component
const CarItem = props => {
  const {name, tagline, taglineCTA, image} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button type="primary" content={'Custom Oreder'} onPress={() => {}} />
        <Button
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {}}
        />
      </View>
    </View>
  );
};

// define your styles

//make this component available to the app
export default CarItem;
