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

export function signUpScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordagain, setpasswordagain] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (text) => {
      setEmail(text);
      checkInputsFilled();
    };

    const handlePasswordChange = (text) => {
      setPassword(text);
      checkInputsFilled();
    };

    const handlePasswordChangeAgain = (text) => {
      setpasswordagain(text);
      checkInputsFilled();
    };

    const checkInputsFilled = () => {
      if (email && password && passwordagain) {
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
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              position: 'absolute',
              left: 160,
            }}>
            Sign up
          </Text>
          <View></View>
          <View
            style={{
              height: 320,
              width: 330,
              backgroundColor: '#ffffff',
              border: 'black',
              position: 'absolute',
              left: 30,
              top: 120,
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
                onChangeText={handleEmailChange}
              />
              <Text style={{ marginVertical: 16 }}>{'Input Password'}</Text>
              <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                placeholder="enter here"
                secureTextEntry
                onChangeText={handlePasswordChange}
              />
              <Text style={{ marginVertical: 16 }}>{'Re-enter Password'}</Text>
              <TextInput
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                placeholder="enter here"
                secureTextEntry
                onChangeText={handlePasswordChangeAgain}
              />

              <View style={{ position: 'absolute', top: 270, right: 120 }}>
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
      </View>
    );
  }