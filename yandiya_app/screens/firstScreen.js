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


export function firstScreen({ navigation: { navigate } }) {
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
          <Text
            style={{
              color: 'black',
              fontSize: 17,
              position: 'absolute',
              left: 15,
              top: 90,
              textAllign: 'center',
              fontWeight: 'bold',
            }}>
            Installation and commission process
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              position: 'absolute',
              left: 20,
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