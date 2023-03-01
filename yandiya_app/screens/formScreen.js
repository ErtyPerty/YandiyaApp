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

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';
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
      <View
        style={{
          height: 620,
          width: 300,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 110,
          left: 45,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
          borderWidth: 2,
          borderColor: '#000000',
        }}>
        <ScrollView>
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
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 170, left: 20 }}
            value={checked2}
            onValueChange={setChecked2}
          />
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 230,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Visual inspection of consumer unit(s) and breakers used
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 240, left: 20 }}
            value={checked3}
            onValueChange={setChecked3}
          />
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 300,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Visual inspection of consumer unit(s) and breakers used
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 310, left: 20 }}
            value={checked4}
            onValueChange={setChecked4}
          />
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 370,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Setup of control units (Thermostats etc)
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 380, left: 20 }}
            value={checked5}
            onValueChange={setChecked5}
          />
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 440,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Thermal check of all panels, coming up to temperature
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 450, left: 20 }}
            value={checked6}
            onValueChange={setChecked6}
          />
          <View
            style={{
              height: 50,
              width: 220,
              backgroundColor: 'white',
              position: 'absolute',
              top: 510,
              left: 50,
              borderWidth: 2,
              borderColor: '#000000',
            }}>
            <Text style={{ fontSize: 15, textAlign: 'center', color: 'black' }}>
              Signed off report and 10-year warranty
            </Text>
          </View>
          <Checkbox
            style={{ position: 'absolute', top: 520, left: 20 }}
            value={checked7}
            onValueChange={setChecked7}
          />
          <View
            style={{
              position: 'absolute',
              top: 580,
              right: 90,
              fontWeight: 'bold',
            }}>
            <Button
              color="green"
              onPress={() => navigate('main')}
              title="Continue"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
