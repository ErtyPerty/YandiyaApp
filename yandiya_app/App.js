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
  input,
  container,
  Dimensions,
  Switch,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import {Platform} from 'react-native';

import { firstScreen } from './screens/firstScreen';
import { welcomeScreen } from './screens/welcomeScreen';
import { infoScreen } from './screens/infoScreen';
import { loginScreen } from './screens/logInScreen';
import { logoutScreen } from './screens/logoutScreen';
import { homeScreen } from './screens/homeScreen';
import { settingsScreen } from './screens/settingsScreen';
import { signUpScreen } from './screens/signUpScreen';
import { formScreen} from './screens/formScreen';
import { projectHub} from './screens/projectHub';

const Stack = createStackNavigator();

const window = Dimensions.get('window');

//   <Checkbox style={styles.checkbox} value={checked} onValueChange={setChecked} />

export const Change = () => {
  const window = Dimensions.get('window');
  
  return (
    <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="First" component={firstScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Welcome" component={welcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="main" component={homeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Sign Up" component={signUpScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={loginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Info" component={infoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Settings" component={settingsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="LogOut" component={logoutScreen} options={{ headerShown: false }} />
    <Stack.Screen name="comForm" component={formScreen} options={{ headerShown: false }} />
    <Stack.Screen name="projectHub" component={projectHub} options={{ headerShown: false }} />
  </Stack.Navigator>
</NavigationContainer>

  );
}

export default Change;
