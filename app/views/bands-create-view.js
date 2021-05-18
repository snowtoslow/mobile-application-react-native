import {ImageBackground, StyleSheet, TextInput, View} from 'react-native';
import Center from '../components/center';
import Button from '../components/button';
import React, {useState} from 'react';

const BandsCreatePage = ({navigation}) => {
  const [name, setName] = useState('');
  const [genres, setGenres] = useState('');
  const [placeOfCreation, setPlaceOfCreation] = useState('');
  const [label, setLabel] = useState('');
  const [language, setLanguage] = useState('');

  const goBack = () => {
    navigation.navigate('BandsPage');
  };

  const create = () => {
    fetch(
      'https://us-central1-bandsproject-d33f4.cloudfunctions.net/CreateBand',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          label: label,
          genres: genres,
          language: language,
          place_of_creation: placeOfCreation,
        }),
      },
    );
    navigation.navigate('BandsPage');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/157776694_1000124963856531_1372311273635496462_n.jpg')}
        style={styles.background}>
        <Center>
          <View style={styles.inputView}>
            <TextInput
              value={name}
              style={styles.TextInput}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={(name) => setName(name)}
            />
          </View>
        </Center>
        <Center>
          <View
            style={{
              backgroundColor: '#FFC0CB',
              width: '70%',
              height: 45,
              marginTop: 20,
              borderRadius: 30,
            }}>
            <TextInput
              value={genres}
              style={styles.TextInput}
              placeholder="Genres"
              placeholderTextColor="#003f5c"
              onChangeText={(genres) => setGenres(genres)}
            />
          </View>
        </Center>
        <Center>
          <View
            style={{
              backgroundColor: '#FFC0CB',
              width: '70%',
              height: 45,
              marginTop: 20,
              borderRadius: 30,
            }}>
            <TextInput
              value={placeOfCreation}
              style={styles.TextInput}
              placeholder="Place of creation"
              placeholderTextColor="#003f5c"
              onChangeText={(placeOfCreation) =>
                setPlaceOfCreation(placeOfCreation)
              }
            />
          </View>
        </Center>
        <Center>
          <View
            style={{
              backgroundColor: '#FFC0CB',
              width: '70%',
              height: 45,
              marginTop: 20,
              borderRadius: 30,
            }}>
            <TextInput
              value={label}
              style={styles.TextInput}
              placeholder="Label"
              placeholderTextColor="#003f5c"
              onChangeText={(label) => setLabel(label)}
            />
          </View>
        </Center>
        <Center>
          <View
            style={{
              backgroundColor: '#FFC0CB',
              width: '70%',
              height: 45,
              marginTop: 20,
              borderRadius: 30,
            }}>
            <TextInput
              value={language}
              style={styles.TextInput}
              placeholder="Language"
              placeholderTextColor="#003f5c"
              onChangeText={(language) => setLanguage(language)}
            />
          </View>
        </Center>
        <Center>
          <View style={{marginTop: 50}}>
            <Button
              text="Create"
              type="filled"
              bordered
              size="small"
              onPress={create}
            />
          </View>
        </Center>
        <Center>
          <View style={{marginTop: 10}}>
            <Button
              text="Back"
              type="filled"
              bordered
              size="small"
              onPress={goBack}
            />
          </View>
        </Center>
      </ImageBackground>
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
export default BandsCreatePage;
