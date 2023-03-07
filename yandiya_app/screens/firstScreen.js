import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

//facebook, linkedin, googleT

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import side from '../assets/corner.png';
const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };

export function firstScreen({ navigation: { navigate } }) {
  const handleEmailPress = () => {
    Linking.openURL('mailto:example@gmail.com');
  };
  const handleLinkedInPress = () => {
    Linking.openURL('https://www.linkedin.com/in/your-profile-url');
  };
  const handleFacebookPress = () => {
    Linking.openURL('https://en-gb.facebook.com/in/your-profile-url');
  };
  const handleGooglePress = () => {
    Linking.openURL('https://accounts.google.com/signin/recovery/lookup');
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

      <ImageBackground source={image} style={styles.initalScreenImage} />

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
          <Text
            style={{
              alignSelf: 'center',
              top: '25%',
              fontSize: 21,
              fontWeight: 'bold',
            }}>
            Commissioning Process
          </Text>

          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: '30%',
              left: '30%',
              backgroundColor: '#32aa46',
              width: 110,
              height: 40,
              borderRadius: 20,
              justifyContent: 'center',
              elevation: 5,
            }}>
            <Text
              onPress={() => navigate('Welcome')}
              style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 16 }}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  initalScreenImage: {
    width: 300,
    height: 500,
    flex: 1,
    position: 'absolute',
    right: '11%',
    top: '-5%',
  },
});
