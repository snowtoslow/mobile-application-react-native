import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import Center from '../components/center';
import Button from '../components/button';
import React, {useState} from 'react';

const BandsUpdatePage = ({navigation, route}) => {
  const dataToUpdate = route.params.dataToUpdate;
  const id = dataToUpdate.id;
  const [name, setName] = useState(dataToUpdate.name);
  const [genres, setGenres] = useState(dataToUpdate.genres);
  const [placeOfCreation, setPlaceOfCreation] = useState(
    dataToUpdate.place_of_creation,
  );
  const [label, setLabel] = useState(dataToUpdate.label);
  const [language, setLanguage] = useState(dataToUpdate.language);

  const update = () => {
    fetch(
      'https://us-central1-bandsproject-d33f4.cloudfunctions.net/UpdateBand',
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
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

  const back = () => {
    navigation.navigate('BandsViewPage');
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
              placeholder="Email"
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
              placeholder="Label"
              placeholderTextColor="#003f5c"
              onChangeText={(language) => setLanguage(language)}
            />
          </View>
        </Center>
        <Center>
          <View style={{marginTop: 50}}>
            <Button
              text="Update"
              type="filled"
              bordered
              size="small"
              onPress={update}
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
              onPress={back}
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

export default BandsUpdatePage;
