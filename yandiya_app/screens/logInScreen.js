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
import Checkbox from 'expo-checkbox';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';

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

  const checkInputsFilled = () => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

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
          shadowColor: 'black',
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
          border: 'red',
          borderWidth: 2,
          shadowColor: 'red',
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
      <Text style={{ fontSize: 38, position: 'absolute', left: 20, top: 160, textDecorationLine: "underline"}}>
        Login
      </Text>
      <View
        style={{
          height: 310,
          width: 360,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          left:15,
          top: 250,
          borderRadius: 20,
          boxShadow: '10px 10px 40px #454545',
          borderWidth: 2,
          borderColor: '#000000',
        }}>
        <ScrollView>
          <Text style={{ marginVertical: 20 }}>{'Input Email'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            value={email}
            onChangeText={handleEmailChange}
          />
          <Text style={{ marginVertical: 20 }}>{'Input Password'}</Text>
          <TextInput
            style={{ padding: 8, backgroundColor: '#f5f5f5' }}
            placeholder="enter here"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />
          <Text onPress={() => navigate('Sign Up')} style={{position :"absolute", top: 220, left: 140, fontSize: 15, color: "blue"}}>Sign Up here</Text>
          <View
            style={{
              position: 'absolute',
              top: 270,
              right: 140,
              fontWeight: 'bold',
            }}>
            <Button
              color="green"
              onPress={() => navigate('main')}
              title="Log In"
              disabled={isButtonDisabled}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
