import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/button';
import Center from '../components/center';

const BandsViewPage = ({navigation, route}) => {
  const dataToDisplay = route.params.dataForView;

  const goBack = () => {
    navigation.navigate('BandsPage');
  };

  const update = () => {
    navigation.navigate('BandsUpdatePage', {dataToUpdate: dataToDisplay});
  };

  return (
    <View style={{flex: 1, padding: 24}}>
      <Text key={dataToDisplay.name}>{dataToDisplay.name}</Text>
      <Text key={dataToDisplay.genres}>{dataToDisplay.genres}</Text>
      <Text key={dataToDisplay.place_of_creation}>
        {dataToDisplay.place_of_creation}
      </Text>
      <Text key={dataToDisplay.label}>{dataToDisplay.label}</Text>
      <Text key={dataToDisplay.language}>{dataToDisplay.language}</Text>
      <Center>
        <View style={{marginTop: 70}}>
          <Button
            text="Back"
            type="filled"
            bordered
            size="small"
            onPress={goBack}
          />
        </View>
      </Center>
      <Center>
        <View style={{marginTop: 70}}>
          <Button
            text="Update"
            type="filled"
            bordered
            size="small"
            onPress={update}
          />
        </View>
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },
  background: {
    width: '100%',
    height: '100%',
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    width: '70%',
    height: 45,
    marginTop: 150,
    borderRadius: 30,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});

export default BandsViewPage;
