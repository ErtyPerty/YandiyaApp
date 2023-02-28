import React, { useEffect, useState, TouchableOpacity, useRef } from 'react';

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
  setInput,
  Pressable,
  ImageBackground,
  AppRegistry,
  Platform,
  input,
  container,
  Dimensions,
  Switch,
} from 'react-native';
  
const styles = './styles.js';

const image = './assets/yandiyaLogo_Wide.png';
const icon = './assets/yandiyaLogo_Small.png';
const bottom = './assets/bottom.jpg';
const window = Dimensions.get('window');

export function initialScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground
          source={bottom}
          style={{
            width: 390,
            height: 90,
            position: 'absolute',
            top: 670,
            left: 0,
          }}
        />
        <View
          style={{
            height: 30,
            width: 370,
            backgroundColor: '#e42c22',
            borderRadius: 20,
            position: 'absolute',
            left: 10,
            top: 50,
          }}/>
        <View
          style={{
            height: 520,
            width: 330,
            backgroundColor: '#f8f7f7',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 140,
            borderRadius: 20,
            boxShadow: '0px 0px 18px #252525',
          }}>
        <View
          style={{
            height: window.height * 0.09,
            width: window.width * 0.7,
            backgroundColor: '#252525',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 350,
            borderRadius: 20,
            boxShadow: '0px 0px 18px #252525',
          }}>
          <Button
            color="white"
            onPress={() => navigate('Sign Up')}
            title="sign Up"
          />
          <View style={styles.space} />
          <Button
            style={styles.logIn}
            color="white"
            onPress={() => navigate('Login')}
            title="log in"
          />
           <ImageBackground source={icon} style={styles.icon}/>
        </View>
      </View>
      </View>
    );
  }