/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainPage from './app/views/main-page';
import LoginPage from './app/views/login-page';
import BandsPage from './app/views/bands-page';
import BandsViewPage from './app/views/bands-view';
import BandsUpdatePage from './app/views/bands-update';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainPage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="BandsPage" component={BandsPage} />
        <Stack.Screen name="BandsViewPage" component={BandsViewPage} />
        <Stack.Screen name="BandsUpdatePage" component={BandsUpdatePage} />

        {/* <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
/*import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
  Alert,
} from 'react-native';
import Button from './app/components/button';
import Center from './app/components/center';
import Spacer from './app/components/button-spacer';

export default class App extends React.Component {
  signupPressed = () => {
    Alert.alert('Completed Sign Up');
  };

  loginPressed = () => {
    Alert.alert('Completed Login!');
  };

  render() {
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
  }
}

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
});*/
