import React from 'react';
import {StyleSheet, View, ImageBackground, Image, Alert} from 'react-native';
import Button from '../../components/button';
import Center from '../../components/center';
import Spacer from '../../components/button-spacer';

const MainPage = ({navigation}) => {
  const signupPressed = () => {
    Alert.alert('Completed Sign Up');
  };

  const logIn = () => {
    navigation.navigate('LoginPage');
  };

  return (
    <ImageBackground
      source={require('../../assets/157776694_1000124963856531_1372311273635496462_n.jpg')}
      style={styles.background}>
      <View>
        <Image
          source={require('../../assets/main_text_music.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Center>
          <Button
            text="Log in"
            type="filled"
            bordered
            size="small"
            onPress={logIn}
          />
        </Center>
        <Spacer />
        <Center>
          <Button
            text="Sign up"
            type="filled"
            bordered
            size="small"
            onPress={signupPressed}
          />
        </Center>
      </View>
    </ImageBackground>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 280,
    height: 280,
    marginLeft: '15%',
    marginTop: '5%',
  },
});
