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
const window = Dimensions.get('window');
const styles = './styles.js';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';

export function welcomeScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bottom}
        style={{
          width: 390,
          height: 90,
          position: 'absolute',
          top: 760,
          left: 0,
          shadowColor: 'black',
          shadowRadius: 14.65,
          shadowOpacity: 5,
        }}
      />
      <View
        style={{
          height: 90,
          width: 405,
          backgroundColor: '#e42c22',
          borderRadius: 20,
          position: 'absolute',
          left: -8,
          top: 0,
          shadowColor: 'red',
          shadowRadius: 14.65,
          shadowOpacity: 1,
        }}
      />
      <ImageBackground
        source={require('../assets/yandiyaLogo_Wide.png')}
        style={{
          width: window.width * 0.6,
          height: window.height * 0.3,
          position: 'absolute',
          top: window.height * -0.04,
          left: window.width * 0.18,
        }}
      />
      <View
        style={{
          height: 50,
          width: 130,
          backgroundColor: '#32aa46',
          border: 'black',
          position: 'absolute',
          left: 130,
          top: 500,
          borderRadius: 20,
        }}>
          <Button
            color="black"
            onPress={() => navigate('Sign Up')}
            title="Sign Up"
            style={{fontWeight: "bold"}}
          />
          </View>
           <View
        style={{
          height: 50,
          width: 130,
          backgroundColor: '#32aa46',
          border: 'black',
          position: 'absolute',
          left: 130,
          top: 570,
          borderRadius: 20,
        }}>
          <Button
            style={styles.button}
            color="black"
            onPress={() => navigate('Login')}
            title="Log In"
          />
      </View>
       <ImageBackground
        source={image}
        style={{
          width: 390,
          height: 200,
          position: 'absolute',
          top: 200,
          left: 10,
          shadowColor: 'black',
          shadowRadius: 14.65,
          shadowOpacity: 5,
        }}
      />
    </View>
  );
}
