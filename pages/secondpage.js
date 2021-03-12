import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

const SecondPage = ({route}) => {
  const [shouldShow, setShouldShow] = useState(false);
  const [userName, setUserName] = useState(route.params.userName);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen to Another Using React
          Navigation
        </Text>
        <Text style={styles.textStyle}>
          Values passed from First page: {userName}
        </Text>
        {shouldShow ? (
          <View style={{flexDirection: 'row'}}>
            <TextInput
              value={userName}
              onChangeText={(userName) => {
                setUserName(userName);
              }}
              placeholder={'Enter Any value'}
              editable={shouldShow}
              style={styles.inputStyle}
            />
          </View>
        ) : null}
        <Button
          title="Update username"
          onPress={() => {
            setShouldShow(!shouldShow);
            route.params.myFunc(userName);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});
