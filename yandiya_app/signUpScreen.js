import React, {
  useEffect,
  useState,
  TouchableOpacity,
  useRef,
  useContext,
} from 'react';

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
const window = Dimensions.get('window');
const styles = './styles.js';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';

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
      <Text style={{ fontSize: 28, position: 'absolute', left: 160, top: 160 }}>
        Sign Up
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
          top: 200,
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
              title="Sign Up"
              disabled={isButtonDisabled}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export function HomeScreenWithContext({ navigation }) {
  const { name } = useContext(UserContext);

  return (
    <UserContext.Provider value={{ name }}>
      <homeScreen />
    </UserContext.Provider>
  );
}
