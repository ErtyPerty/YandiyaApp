import React, { useEffect, useState, useRef } from 'react';
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
  TouchableOpacity,
} from 'react-native';
import icon from '../assets/yandiyaLogo_Wide.png';

const window = Dimensions.get('window');
import ToggleSwitch from './toggleSwitch.js';
const styles = './styles.js';
const bottom = './assets/bottom.jpg';

export function settingsScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <View style={styles.container}>
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
      <TouchableOpacity onPress={() => navigate('main')}>
        <ImageBackground
        source={bottom}
        style={{
          width: 390,
          height: 90,
          position: 'absolute',
          top: 760,
          left: 0,
          shadowColor: "black",
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
          shadowColor: "red",
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
      </TouchableOpacity>
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
        <Button color="#212121" onPress={() => navigate('Info')} title="Info" />
        <Button
          color="#212121"
          onPress={() => navigate('LogOut')}
          title="Logout"
        />
        <Button
          color="#212121"
          onPress={() => navigate('comForm')}
          title="form View"
        />
        <View style={{ position: 'absolute', top: 0, right: 90 }}></View>
      </View>
    </View>
  );
}
