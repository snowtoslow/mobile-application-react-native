import React, {useState} from 'react';
import {StyleSheet, View, ImageBackground, Alert} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Center from '../components/center';
import Button from '../components/button';
import Constant from '../components/constant';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToBands = () => {
    email === Constant.HARDCODEDEMAIL && password === Constant.HARDCODEDPASSWORD
      ? navigation.navigate('BandsPage', {
          email: email,
          password: password,
        })
      : Alert.alert('Ba pula your credentials ne sovpadaiut!');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/157776694_1000124963856531_1372311273635496462_n.jpg')}
        style={styles.background}>
        <Center>
          <View style={styles.inputView}>
            <TextInput
              value={email}
              style={styles.TextInput}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={(email) => setEmail(email)}
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
              value={password}
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
        </Center>
        <Center>
          <View style={{marginTop: 70}}>
            <Button
              text="Log in"
              type="filled"
              bordered
              size="small"
              onPress={goToBands}
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

export default LoginPage;
