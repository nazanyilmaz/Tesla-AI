//import liraries
import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import Car from './Car';
import CarItem from '../CatItem';
CarItem;

// create a component
const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Car}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

//make this component available to the app
export default CarsList;
