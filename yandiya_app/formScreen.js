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
const window = Dimensions.get('window');

const image = './assets/yandiyaLogo_Wide.png';
const icon = './assets/yandiyaLogo_Small.png';
const bottom = './assets/bottom.jpg';
import Checkbox from 'expo-checkbox';

export function formScreen({ navigation: { navigate } }) {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/yandiyaLogo_Wide.png')}
        style={{
          width: window.width * 0.6,
          height: window.height * 0.3,
          position: 'absolute',
          top: window.height * -0.08,
          left: window.width * 0.45,
        }}
      />
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
          height: 420,
          width: 300,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 130,
          left: 45,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
          borderWidth: 5,
          borderColor: '#000000',
        }}>
        <View
          style={{
            height: 50,
            width: 220,
            backgroundColor: 'white',
            position: 'absolute',
            top: 20,
            left: 50,
            borderWidth: 2,
            borderColor: '#000000',
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
            Visually checked wiring resistance and sizing of cables
          </Text>
        </View>
        <Checkbox
          style={{ position: 'absolute', top: 30, left: 20 }}
          value={checked}
          onValueChange={setChecked}
        />

        <View
          style={{
            height: 50,
            width: 220,
            backgroundColor: 'white',
            position: 'absolute',
            top: 90,
            left: 50,
            borderWidth: 2,
            borderColor: '#000000',
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
            Visually checked all spurs
            number
          </Text>
        </View>
        <Checkbox
          style={{ position: 'absolute', top: 100, left: 20 }}
          value={checked1}
          onValueChange={setChecked1}
        />

        <View
          style={{
            height: 50,
            width: 220,
            backgroundColor: 'white',
            position: 'absolute',
            top: 160,
            left: 50,
            borderWidth: 2,
            borderColor: '#000000',
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
            Visually checked all connections
            number
          </Text>
        </View>
        <Checkbox
          style={{ position: 'absolute', top: 170, left: 20 }}
          value={checked2}
          onValueChange={setChecked2}
        />
        <View
          style={{
            height: 70,
            width: 220,
            backgroundColor: 'white',
            position: 'absolute',
            top: 160,
            left: 50,
            borderWidth: 2,
            borderColor: '#000000',
          }}>
          <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
            Visual inspection of consumer unit(s) and breakers used
            number
          </Text>
        </View>
        <Checkbox
          style={{ position: 'absolute', top: 170, left: 20 }}
          value={checked3}
          onValueChange={setChecked3}
        />
      </View>
    </View>
  );
}
