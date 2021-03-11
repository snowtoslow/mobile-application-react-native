import React from 'react';
import {StyleSheet, View, Button, ImageBackground, Image} from 'react-native';
import Center from '../components/center';
import Spacer from '../components/button-spacer';

const MainPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./app/assets/157776694_1000124963856531_1372311273635496462_n.jpg')}
      style={styles.background}>
      <View>
        <Image
          source={require('./app/assets/main_text_music.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Center>
          <Button
            text="Log in"
            type="filled"
            bordered
            size="small"
            onPress={this.loginPressed}
          />
        </Center>
        <Spacer />
        <Center>
          <Button
            text="Sign up"
            type="filled"
            bordered
            size="small"
            onPress={this.signupPressed}
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
