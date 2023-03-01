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

export function firstScreen({ navigation: { navigate } }) {
<StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
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
      <View
        style={{
          height: 320,
          width: 330,
          backgroundColor: '#f8f7f7',
          border: 'black',
          borderWidth: 2,
          position: 'absolute',
          left: 30,
          top: 250,
          borderRadius: 20,
          shadowColor: "black",
          shadowRadius: 14.65,
          shadowOpacity: 1,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            position: 'absolute',
            left: 25,
            top: 90,
            textAllign: 'center',
            fontWeight: 'bold',
          }}>
          Installation and commission process
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 10,
            position: 'absolute',
            left: 30,
            top: 160,
            textAllign: 'center',
            fontWeight: 'bold',
          }}>
          welcome to the yandiya simple commissions app
        </Text>
        <View
          style={{
            position: 'absolute',
            left: 120,
            top: 250,
            fontWeight: 'bold',
          }}>
          <Button
            color="green"
            onPress={() => navigate('Welcome')}
            title="Welcome"
          />
        </View>
      </View>
    </View>
  );
}
