import React, { useEffect, useState, TouchableOpacity, useRef, useContext } from 'react';
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
  Platform,
  Dimensions,
  Switch,
} from 'react-native';

export function ClientScreen({ navigation: { navigate } }) {
   const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
          height: 350,
          width: 330,
          backgroundColor: '#ffffff',
          borderWidth: 5,
          borderColor: '#000000',
          borderRadius: 20,
          shadowColor: '#454545',
          shadowOffset: { width: 10, height: 10 },
          shadowOpacity: 1,
          shadowRadius: 40,
          elevation: 10,
          position: 'absolute',
          left: 30,
          top: 150,
        }}>
        <Text style={styles.clientBox1} onPress={() => navigate('Info')}>
          Bob Dave
        </Text>
        <Text style={styles.clientBox2} onPress={() => navigate('Info')}>
          Sophie York
        </Text>
        <Text style={styles.clientBox3} onPress={() => navigate('Info')}>
          Camron Carter
        </Text>
      </View>
    </View>
  );
}