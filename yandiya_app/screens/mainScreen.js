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

export function mainScreen({ navigation: { navigate } }) {
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
            width: 380,
            backgroundColor: '#e42c22',
            borderRadius: 20,
            position: 'absolute',
            left: 1,
            top: 60,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              position: 'absolute',
              right: 130,
              textAlign: 'center',
            }}>
            Home Screen
          </Text>
          <View
            style={{
              height: 450,
              width: 300,
              backgroundColor: '#ffffff',
              position: 'absolute',
              left: 50,
              top: 90,
              borderRadius: 20,
              boxShadow: '10px 10px 40px #454545',
              borderWidth: 5,
              borderColor: '#000000',
            }}>
            <Text onPress={() => navigate('commission')}>
              {'\n'}
              bo's diner: 2 celing pannels, managers office
              {'\n'}
            </Text>
            <Text onPress={() => navigate('signature')}>
              something will go here soon
            </Text>
          </View>
        </View>
        <View style={{ position: 'absolute', top: 370, right: 145 }}>
          <Button
            color="#212121"
            onPress={() => navigate('Settings')}
            title="Settings"
          />
          <Button
            color="#212121"
            onPress={() => navigate('Client')}
            title="Client"
          />
        </View>
      </View>
    );
  }
