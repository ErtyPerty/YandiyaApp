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
  Linking,
} from 'react-native';
import Constants from 'expo-constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };

import facebook from '../assets/facebook.jpg';
import google from '../assets/google.jpg';
import linkedin from '../assets/linkedin.jpg';

export function loginScreen({ navigation: { navigate } }) {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    checkInputsFilled();
  };

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

  const checkInputsFilled = () => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f7f7' }}>
      <View
        style={{
          height: '20%',
          backgroundColor: 'red',
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          elevation: 15,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: 'bold',
            width: '50%',
            textAlign: 'center',
            left: '5%',
            color: 'white',
          }}>
          Yandiya Technologies
        </Text>

        <ImageBackground source={icon} style={styles.outImage} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          "A new world of warmth"
        </Text>
      </View>

      <View
        style={{ justifyContent: 'center', top: '5%', alignSelf: 'center' }}>
        <View
          style={{
            height: 400,
            width: 300,
            backgroundColor: 'white',
            borderBottomRightRadius: 100,
            borderTopLeftRadius: 100,
          }}>
          <Text
            style={{
              fontSize: 20,
              alignSelf: 'center',
              top: 0,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          <Text style={{ marginVertical: 18, left: 30 }}>{'Input Email'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            onChangeText={handleEmailChange}
          />
          <Text style={{ marginVertical: 18, left: 30}}>{'Input Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
            onChangeText={handlePasswordChange}
          />
          <Button
          title = "continue"
          onPress  = {() => navigate("main")}
          disabled = { isButtonDisabled}
        />
        </View>
      </View>
      <View
        style={{
          height: '10%',
          backgroundColor: 'red',
          bottom: '0%',
          width: '100%',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          elevation: 3,
          justifyContent: 'center',
          position: 'absolute',
        }}>
        <TouchableOpacity
          onPress={() => navigate('Sign Up')}
          style={{
            height: 30,
            width: 140,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignSelf: 'center',
            borderRadius: 10,
          }}>
          <Text style={{ textAlign: 'center', fontSize: 18 }}>
            Sign Up 
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFacebookPress}>
          <ImageBackground
            source={facebook}
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              left: 60,
              top: -220,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGooglePress}>
          <ImageBackground
            source={google}
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              left: 150,
              top: -220,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLinkedInPress}>
          <ImageBackground
            source={linkedin}
            style={{
              height: 40,
              width: 40,
              position: 'absolute',
              left: 240,
              top: -220,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outImage: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    right: '-5%',
  },
});
