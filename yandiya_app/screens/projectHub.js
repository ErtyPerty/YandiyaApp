import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-swiper';

import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };
const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };

export function projectHub({ navigation: { navigate } }) {
  return (
    //Cool swiping system
    <Swiper
      style={styles.wrapper}
      showsButtons={true}
      activeDotColor="#e42c22"
      nextButton={<Text style={styles.forwardButton} />}
      prevButton={<Text style={styles.backButton} />}>


      {/*Slide number 1*/}
      <View style={styles.slide}>

        {/*Back button styling*/}
        <TouchableOpacity
          onPress={() => navigate('main')}
          style={{
            position: 'absolute',
            top: 30,
            left: 0,
            backgroundColor: '#e42c22',
            width: 75,
            height: 50,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'center',
          }}>

          {/*Back Button Text*/}
          <Text style={styles.topBackButton}>Back</Text>
        </TouchableOpacity>

        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>

          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>

          {/*Title text*/}
          <Text style={styles.projectHubTitle}>
            Customer Plans & Dimensions
          </Text>

          {/*Middle text for description maybe*/}
          <Text style={styles.projectHubText}>Now this is epic</Text>

          <View style={{ marginTop: '20%' }}>
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
              <Text style={{ fontWeight: 'bold' }}>PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



      {/*Slide number 2*/}
      <View style={styles.slide}>
        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>
          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>
          {/*Title text*/}
          <Text style={styles.projectHubTitle}>Pre-Site Visit Survey</Text>

          {/*Middle text for description maybe*/}
          <Text style={styles.projectHubText2}>Now this is epic</Text>

          <View style={{ marginTop: '21%' }}>
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
              <Text style={{ fontWeight: 'bold' }}>PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>



      {/*Slide number 3*/}
      <View style={styles.slide}>
        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>

          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>

          {/*Title text*/}
          <Text style={styles.projectHubTitle}>Temperature Policy</Text>
          <Text style={styles.projectHubText2}>Some interesting text here</Text>

          <View style={{ marginTop: '21%' }}>
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

              <Text style={{ fontWeight: 'bold' }}>PDF</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Slide number 4*/}
      <View style={styles.slide}>
        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>

          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>

          {/*Title text*/}
          <Text style={styles.projectHubTitle}>Technical Specification</Text>
          <Text style={styles.projectHubText}>Some interesting text here</Text>

          <View style={{ marginTop: '20%' }}>
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

              <Text style={{ fontWeight: 'bold' }}>PDF</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Slide number 5*/}
      <View style={styles.slide}>
        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>

          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>

          {/*Title text*/}
          <Text style={styles.projectHubTitle}>Heating Layout Plan</Text>
          <Text style={styles.projectHubText2}>Some interesting text here</Text>

          <View style={{ marginTop: '21%' }}>
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

              <Text style={{ fontWeight: 'bold' }}>PDF</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/*Slide number 6*/}
      <View style={styles.slide}>
        {/*Yandiya logo*/}
        <ImageBackground source={image} style={styles.projectHubIcon} />

        {/*Project Hub Banner*/}
        <View style={styles.projectHubBanner}>

          {/*Title Text*/}
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Project Hub</Text>
        </View>

        {/*Middle section*/}
        <View style={styles.projectMiddleSection}>

          {/*Title text*/}
          <Text style={styles.projectHubTitle}>Installation Guide</Text>
          <Text style={styles.projectHubText2}>Some interesting text here</Text>

          <View style={{ marginTop: '21%' }}>
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

              <Text style={{ fontWeight: 'bold' }}>PDF</Text>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Swiper>
  );
}

const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Stack.Navigator useLegacyImplementation>
      <Stack.Screen
        name="ProjectHub"
        component={projectHub}
        options={{ headerShown: false }}
      />
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
  //New styles
  projectMiddleSection: {
    height: 300,
    width: 320,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 2,
  },
  projectHubBanner: {
    height: 50,
    width: 200,
    backgroundColor: '#e42c22',
    top: -60,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  projectHubIcon: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    top: -20,
    right: 0,
  },
  topBackButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    right: 3,
  },
  projectHubTitle: {
    textAlign: 'center',
    top: '6%',
    marginHorizontal: 10,
    fontSize: 30,
  },
  projectHubText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginTop: '13%',
    fontWeight: 'bold',
  },

  //For the text with larger titles
  projectHubText2: {
    marginTop: '23%',
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  //Older styles
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
});
