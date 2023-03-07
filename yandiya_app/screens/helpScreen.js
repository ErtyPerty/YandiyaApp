import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  Linking,
  Platform,
} from 'react-native';
import Constants from 'expo-constants';

//facebook, linkedin, googleT

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import side from '../assets/corner.png';
const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };

export function helpScreen({ navigation: { navigate } }) {
  dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${07999482203}';
    } else {
      phoneNumber = 'telprompt:${07999482203}';
    }

    Linking.openURL(phoneNumber);
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:info@yandiyatechnologies.com');
  };

  const handleNavPress = () => {
    Linking.openURL('https://www.yandiyatechnologies.com/');
  };

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
          <Text style={{ position: 'absoulute', top: 130, left: 20 }}>
            <TouchableOpacity onPress={this.dialCall}>
              <Text style={{ color: '#fbbc2b' }}>
                Tel no: +44 (0) 1329 556575 {'\n'}
                (currently used to troll liam)
              </Text>
            </TouchableOpacity>

            {'\n'}
            {'\n'}

            <TouchableOpacity onPress={handleEmailPress}>
              <Text style={{ color: '#fbbc2b' }}>
                Email: info@yandiyatechnologies.com
              </Text>
            </TouchableOpacity>

            {'\n'}
            {'\n'}

            <TouchableOpacity onPress={handleNavPress}>
              <Text style={{ color: '#fbbc2b' }}>
                www.yandiyatechnologies.com
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigate('Settings')}
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
  topBackButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    right: 3,
  },
});
