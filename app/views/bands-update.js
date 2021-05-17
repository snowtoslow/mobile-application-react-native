import {Text, View} from 'react-native';
import Center from '../components/center';
import Button from '../components/button';
import React from 'react';

const BandsUpdatePage = ({navigation, route}) => {
  const dataToUpdate = route.params.dataToUpdate;
  console.log('to update: ', dataToUpdate);

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text>{dataToUpdate.name}</Text>
    </View>
  );
};

export default BandsUpdatePage;
