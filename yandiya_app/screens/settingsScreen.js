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

const window = Dimensions.get('window');
const styles = './styles.js';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';
import side from '../assets/corner.png';

export function settingsScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {};
  return (
    <View style={{ flex: 1, height: '100%', backgroundColor: '#f8f7f7' }}>
      <View
        style={{
          height: '40%',
          backgroundColor: '#e42c22',
          borderBottomRightRadius: 100,
        }}
      />

      <ImageBackground source={image} style={style.initalScreenImage} />

      <ImageBackground source={side} style={{ height: 100, width: 100 }} />

      <View
        style={{
          height: '60%',
          backgroundColor: '#f8f7f7',
          borderTopLeftRadius: 100,
        }}>
        <View
          style={{
            height: 300,
            width: 275,
            bottom: '6%',
            backgroundColor: 'white',
            alignSelf: 'center',
            borderTopLeftRadius: 100,
            borderBottomRightRadius: 100,
            elevation: 3,
          }}>
          <Button
            color="#212121"
            onPress={() => navigate('LogOut')}
            title="Logout"
          />
          <Button
            color="#212121"
            onPress={() => navigate('Help')}
            title="Contact us"
          />
          <Button
            color="#212121"
            onPress={() => navigate('settingsInfo')}
            title="About us"
          />
          <View style={{ position: 'absolute', top: 0, right: 90 }}></View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('main')}
        style={{
          position: 'absolute',
          top: 30,
          left: 0,
          backgroundColor: 'white',
          width: 75,
          height: 50,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            position: 'absolute',
            left: 12,
            top: 10,
          }}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  initalScreenImage: {
    width: 300,
    height: 500,
    flex: 1,
    position: 'absolute',
    right: '11%',
    top: '-5%',
  },
});
