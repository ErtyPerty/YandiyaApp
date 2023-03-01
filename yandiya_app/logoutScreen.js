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

const image = './assets/yandiyaLogo_Wide.png';
const icon = './assets/yandiyaLogo_Small.png';
const bottom = './assets/bottom.jpg';

export function logoutScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    return (
      <View styles={styles.container}>
           <ImageBackground
        source={require('../assets/yandiyaLogo_Wide.png')}
        style={{
          width: window.width * 0.6,
          height: window.height * 0.3,
          position: 'absolute',
          top: window.height * -0.08,
          left: window.width * 0.45,
        }}
      />
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
            width: 380,
            backgroundColor: '#e42c22',
            borderRadius: 20,
            position: 'absolute',
            left: 1,
            top: 60,
          }}
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            position: 'absolute',
            top: 250,
            right: 75,
          }}>
          Do you want to sign out ?
        </Text>
        <View
          style={{
            position: 'absolute',
            top: 300,
            right: 170,
            height: window.height * 0.09,
            width: window.width * 0.7,
            backgroundColor: '#252525',
            border: 'black',
            position: 'absolute',
            left: 60,
            top: 400,
            borderRadius: 20,
            boxShadow: '0px 0px 18px #252525',
          }}>
          <Button
            color="#32aa46"
            onPress={() => navigate('First')}
            title="Yes"
          />
          <Button color="#e42c22" onPress={() => navigate('main')} title="No" />
        </View>
      </View>
    );
  }
