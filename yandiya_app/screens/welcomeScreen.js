import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Pressable,
  ImageBackground,
  Dimensions,
  Switch,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
    position: 'absolute',
    top: windowHeight * -0.2,
    left: windowWidth * -0.05,
  },
  bottomImage: {
    width: windowWidth,
    height: windowHeight * 0.15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  redBar: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.03,
    backgroundColor: '#e42c22',
    borderRadius: 20,
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.025,
  },
  whiteBox: {
    height: windowHeight * 0.2,
    width: windowWidth * 1,
    backgroundColor: '#f8f7f7',
    position: 'absolute',
    left: windowWidth * -0,
    top: windowHeight * 0.5,
    borderRadius: 20,
    shadowColor: '#252525',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 18,
  },
  blackBox: {
    height: windowHeight * 0.16,
    width: windowWidth * 0.9,
    backgroundColor: '#252525',
    position: 'absolute',
    left: windowWidth * 0.05,
    top: windowHeight * 0.02,
    borderRadius: 20,
    shadowColor: '#252525',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 18,
  },
  button: {
    marginTop: 10,
  }
});

import image from '../assets/yandiyaLogo_Wide.png';
import icon from '../assets/yandiyaLogo_Small.png';
import bottom from '../assets/bottom.jpg';

export function welcomeScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <ImageBackground source={bottom} style={styles.bottomImage} />
      <View style={styles.redBar} />
      <View style={styles.whiteBox}>
        <View style={styles.blackBox}>
          <Button
            color="white"
            onPress={() => navigate('Sign Up')}
            title="Sign Up"
            style={styles.button}
          />
          <View style={styles.space} />
          <Button
            style={styles.button}
            color="white"
            onPress={() => navigate('Login')}
            title="Log In"
          />
      </View>
    </View>
  </View>
);}
