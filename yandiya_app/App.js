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
  Pressable,
  ImageBackground,
  AppRegistry,
  Platform,
  input,
  container,
  Dimensions,
  Switch,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { firstScreen } from './screens/firstScreen';
import { welcomeScreen } from './screens/welcomeScreen';
import { clientScreen } from './screens/clientScreen';
import { infoScreen } from './screens/infoScreen';
import { loginScreen } from './screens/logInScreen';
import { logoutScreen } from './screens/logoutScreen';
import { mainScreen } from './screens/mainScreen';
import { settingsScreen } from './screens/settingsScreen';
import { signUpScreen } from './screens/signUpScreen';
import image from './assets/yandiyaLogo_Wide.png';
import icon from './assets/yandiyaLogo_Small.png';
import bottom from './assets/bottom.jpg';

const Stack = createStackNavigator();

const window = Dimensions.get('window');

export const Change = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? '#333' : '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? '#fff' : '#333',
    },
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={firstScreen} />
        <Stack.Screen name="Welcome" component={welcomeScreen} />
        <Stack.Screen name="main" component={mainScreen} />
        <Stack.Screen name="Sign Up" component={signUpScreen} />
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Info" component={infoScreen} />
        <Stack.Screen name="Client" component={clientScreen} />
        <Stack.Screen name="Settings" component={settingsScreen} />
        <Stack.Screen name="LogOut" component={logoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Change;
