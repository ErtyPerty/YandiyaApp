import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';

import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const image = { uri: 'https://i.imgur.com/A8WIsR2.png' }; 
const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' }; 

function projectHub({ navigation: { navigate } }) {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      activeDotColor="#e42c22"
      nextButton={<Text style={styles.forwardButton} />}
      prevButton={<Text style={styles.backButton} />}>

      <View style={styles.slide}>

      <TouchableOpacity style={{position: 'absolute', top: 30, left: 0, backgroundColor: '#e42c22', width: 75, height: 50, borderBottomRightRadius: 20, borderTopRightRadius: 20, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 16, right: 3}}>Back</Text>
      </TouchableOpacity>
      <ImageBackground source={image} style={{width: 190, height: 200, flex: 1, position: 'absolute', top: -20, right: 0, }} /> 
      <View style={{height: 50, width: 200, backgroundColor: '#e42c22', top: -60, borderRadius: 20, alignItems: 'center', justifyContent: 'center', elevation: 2}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>Project Hub</Text>
      </View>

        <View
          style={{
            height: 300,
            width: 320,
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 2,
            

          }}>

            <Text style={styles.title}>Customer Plans & Dimensions</Text>
            <Text style={styles.text}>Now this is epic</Text>

            <TouchableOpacity
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                height: 40,
                elevation: 2,
                backgroundColor: '#f8f7f7',
                top: '20%',
                borderRadius: 15,
                width: 140,
              }}>

              <Text style={{ fontWeight: 'bold' }}>PDF here</Text>

            </TouchableOpacity>
            
        </View>
        
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Pre-Site Visit Survey</Text>
        <Text style={styles.text}>!!!!</Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Temperature Policy</Text>
        <Text style={styles.text}>!!!!</Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Technical Specification</Text>
        <Text style={styles.text}>!!!!</Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Heating Layout Plan</Text>
        <Text style={styles.text}>!!!!</Text>
      </View>

      <View style={styles.slide}>
        <Text style={styles.title}>Installation Guide</Text>
        <Text style={styles.text}>!!!!</Text>
      </View>
    </Swiper>
  );
}

const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Stack.Navigator useLegacyImplementation>
      <Stack.Screen name="ProjectHub" component={projectHub} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  forwardButton: {
    height: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    width: 20,
    backgroundColor: '#e42c22',
  },
  backButton: {
    height: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    width: 20,
    backgroundColor: '#e42c22',
  },
  slide: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f7f7',
  },
  title: {
    textAlign: 'center',
    top: '6%',
    marginHorizontal: 10,
    fontSize: 30,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginTop: '13%',
    fontWeight: 'bold',
  },
  
});
