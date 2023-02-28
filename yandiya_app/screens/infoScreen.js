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

export function infoScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
    const [client, setClient] = useState('');
    const [location, setLocation] = useState('');
    const [postCode, setPostCode] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [contactPerson, setContactPerson] = useState('');

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
          <ScrollView
            style={[container, { flexDirection: 'column' }]}
            horizontal={false}>
            <View>
              <Text> client info:</Text>
              <Text> Client Name:</Text>
              <TextInput
                placeholder="client"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setClient(text)}></TextInput>
              <Text> Client Location:{'\n'}</Text>
              <TextInput
                placeholder="Location"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setLocation(text)}></TextInput>
              <Text> Client Address:{'\n'}</Text>
              <TextInput
                placeholder="address"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setAddress(text)}></TextInput>
              <Text> Client City:{'\n'}</Text>
              <TextInput
                placeholder="City"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setCity(text)}></TextInput>
              <Text> Client post code:{'\n'}</Text>
              <TextInput
                placeholder="post code"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setPostCode(text)}></TextInput>
              <Text> Client phone number:{'\n'}</Text>
              <TextInput
                placeholder="phone number"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setPhoneNumber(text)}></TextInput>
              <Text> Client Email:{'\n'}</Text>
              <TextInput
                placeholder="Email"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setEmail(text)}></TextInput>
              <Text> Contact:{'\n'}</Text>
              <TextInput
                placeholder="contact person"
                style={{ padding: 8, backgroundColor: '#f5f5f5' }}
                onChangeText={(text) => setContactPerson(text)}></TextInput>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }