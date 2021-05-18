import {View} from 'react-native';
import React from 'react';

const Right = ({children}) => (
  <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
    {children}
  </View>
);

export default Right;
