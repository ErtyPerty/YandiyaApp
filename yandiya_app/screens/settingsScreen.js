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

import ToggleSwitch from './toggleSwitch.js';
const styles = './styles.js';

const image = './assets/yandiyaLogo_Wide.png';
const icon = './assets/yandiyaLogo_Small.png';
const bottom = './assets/bottom.jpg';



export function settingsScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} />
        <ImageBackground source={bottom} style={{ width: 390,
      height: 90,
      position:"absolute",
      top: 670,
      left:0,}} />
        <View
          style={{
            height: 30,
            width: 380,
            backgroundColor: '#e42c22',
            borderRadius: 20,
            position: 'absolute',
            left: 10,
            top: 60,
          }}></View>
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
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <Button
            color="#212121"
            onPress={() => navigate('Info')}
            title="Info"
          />
          <Button
            color="#212121"
            onPress={() => navigate('LogOut')}
            title="Logout"
          />
          <View style={{ position: 'absolute',
            top: 90,
            right: 90,}}>
          <ToggleSwitch isDarkMode={isDarkMode} onToggle={toggleDarkMode} />
          </View>
        </View>
      </View>
    );
  }