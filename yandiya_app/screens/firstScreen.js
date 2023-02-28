import React, { useEffect, useState } from 'react';
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
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
    position: 'absolute',
    top: windowHeight * -0.2,
    left: windowWidth * -0.05,
  },
  bottomImage: {
    width: windowWidth,
    height: windowHeight * 0.15,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  redBar: {
    width: windowWidth * 0.95,
    height: windowHeight * 0.03,
    backgroundColor: '#e42c22',
    borderRadius: 20,
    position: 'absolute',
    top: windowHeight * 0.05,
    left: windowWidth * 0.025,
  },
  formContainer: {
    height: windowHeight * 0.4,
    width: windowWidth * 0.9,
    backgroundColor: '#f8f7f7',
    position: 'absolute',
    top: windowHeight * 0.3,
    left: windowWidth * 0.05,
    borderRadius: 20,
    boxShadow: '0px 0px 18px #252525',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    color: 'black',
    fontSize: 15,
    position: 'absolute',
    left: 25,
    top: 90,
    textAllign: 'center',
    fontWeight: 'bold',
  },
  formSubtitle: {
    color: 'black',
    fontSize: 15,
    position: 'absolute',
    left: 25,
    top: 120,
    textAllign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    position: 'absolute',
    top: windowHeight * 0.3,
    left: windowWidth * 0.33,
    borderRadius: 40,
    fontWeight: 'bold',
  },
});

export function firstScreen({ navigation: { navigate } }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/yandiyaLogo_Wide.png')}
        style={styles.image}
      />
      <ImageBackground
        source={require('../assets/bottom.jpg')}
        style={styles.bottomImage}
      />
      <View style={styles.redBar} />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Installation and commissions</Text>
        <Text style={styles.formSubtitle}>Digital technician form</Text>
        <View style={styles.buttonContainer}>
          <Button color="green" onPress={() => navigate('Welcome')} title="WELCOME" />
        </View>
      </View>
    </View>
  );
}
