import React from 'react';
import {View} from 'react-native';

const HorizontalAlignment = ({children}) => (
  <View
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    }}>
    {children}
  </View>
);

export default HorizontalAlignment;
