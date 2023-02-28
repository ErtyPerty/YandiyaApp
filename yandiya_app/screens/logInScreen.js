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

export function loginScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
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
          }}
        />
        <View
          style={{
            height: 250,
            width: 330,
            backgroundColor: '#ffffff',
            border: 'black',
            position: 'absolute',
            left: 30,
            top: 150,
            borderRadius: 20,
            boxShadow: '10px 10px 40px #454545',
            borderWidth: 5,
            borderColor: '#000000',
          }}>
          <ScrollView>
            <Text style={{ marginVertical: 16 }}>{'Input Email'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              value={email}
              onChangeText={handleEmailChange}
            />
            <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
            <TextInput
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              placeholder="enter here"
              secureTextEntry
              value={password}
              onChangeText={handlePasswordChange}
            />
            <View
              style={{
                position: 'absolute',
                top: 210,
                right: 120,
                fontWeight: 'bold',
              }}>
              <Button
                color="green"
                onPress={() => navigate('main')}
                title="confirm"
                disabled={isButtonDisabled}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
