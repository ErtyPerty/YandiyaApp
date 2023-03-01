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

export function infoScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //checking values for button to activate

  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLocationChange = (text) => {
    setLocation(text);
    checkInputsFilled();
  };
  const handleAddressChange = (text) => {
    setAddress(text);
    checkInputsFilled();
  };
  const handleCityChange = (text) => {
    setCity(text);
    checkInputsFilled();
  };
  const handlepostChange = (text) => {
    setPostCode(text);
    checkInputsFilled();
  };
  const handlephoneChange = (text) => {
    setPhoneNumber(text);
    checkInputsFilled();
  };
  const handleEmailChange = (text) => {
    setEmail(text);
    checkInputsFilled();
  };
  const handleContactChange = (text) => {
    setContactPerson(text);
    checkInputsFilled();
  };

  const checkInputsFilled = () => {
    if (
      location &&
      postCode &&
      address &&
      city &&
      email &&
      phoneNumber &&
      contactPerson
    ) {
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
          height: 420,
          width: 300,
          backgroundColor: '#ffffff',
          border: 'black',
          position: 'absolute',
          top: 130,
          left: 45,
          borderRadius: 10,
          boxShadow: '10px 10px 30px #454545',
          borderWidth: 2,
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
              value={location}
              onChangeText={handleLocationChange}></TextInput>
            <Text> Client Address:{'\n'}</Text>
            <TextInput
              placeholder="address"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={address}
              onChangeText={handleAddressChange}></TextInput>
            <Text> Client City:{'\n'}</Text>
            <TextInput
              placeholder="City"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={city}
              onChangeText={handleCityChange}></TextInput>
            <Text> Client post code:{'\n'}</Text>
            <TextInput
              placeholder="post code"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={postCode}
              onChangeText={handlepostChange}></TextInput>
            <Text> Client phone number:{'\n'}</Text>
            <TextInput
              placeholder="phone number"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={phoneNumber}
              onChangeText={handlephoneChange}></TextInput>
            <Text> Client Email:{'\n'}</Text>
            <TextInput
              placeholder="Email"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={email}
              onChangeText={handleEmailChange}></TextInput>
            <Text> Contact:{'\n'}</Text>
            <TextInput
              placeholder="contact person"
              style={{ padding: 8, backgroundColor: '#f5f5f5' }}
              value={contactPerson}
              onChangeText={handleContactChange}></TextInput>
          </View>
        </ScrollView>
        <Button
          color="green"
          onPress={() => navigate('comForm')}
          title="proceed"
          disabled={isButtonDisabled}
        />
      </View>
    </View>
  );
}
