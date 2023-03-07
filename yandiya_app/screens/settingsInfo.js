import * as React from 'react';

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Constants from 'expo-constants';

import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const image = { uri: 'https://i.imgur.com/A8WIsR2.png' };
const icon = { uri: 'https://i.imgur.com/5QVr3RA.png' };

//Menu function

export function settingsInfo({ navigation: { navigate } }) {
  return (
    //Setting the background colour and flex 1 to ensure that it covers the entire screen
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: '#f8f7f7', flex: 1 }}>
        {/* Red border at top */}
        <View
          style={{
            backgroundColor: '#e42c22',
            height: '28%',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            paddingHorizontal: 20,
          }}>
          {/*Back button styling*/}
          <TouchableOpacity
          onPress ={() => navigate("Settings")}
          style={{
            position: 'absolute',
            top: 30,
            left: 0,
            backgroundColor: 'white',
            width: 75,
            height: 50,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'center',
          }}>
          {/*Back Button Text*/}
          <Text style={styles.topBackButton}>Back</Text>
        </TouchableOpacity>
          <ImageBackground source={icon} style={styles.logOutImage} />
        </View>

        <LinearGradient
          colors={['#e42c22', 'transparent']}
          style={{ left: 0, right: 0, height: 90, marginTop: -45 }}>
          {/* White Banner */}
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 10,
              height: 60,
              justifyContent: 'center',
            }}>
            <Text
              style={{ alignSelf: 'center', fontSize: 22, fontWeight: 'bold' }}>
              Info
            </Text>
          </View>
        </LinearGradient>

        {/* Middle Box */}
        <View
          style={{
            backgroundColor: 'white',
            height: 400,
            width: 250,
            top: '5%',
            alignSelf: 'center',
            elevation: 3,
            borderRadius: 20,
          }}>
          <ScrollView>
            <Text 
              style={{
                fontWeight: 'bold',
                top: '2%',
                fontSize: 18,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Terms & Conditions
            </Text>
            <Text
              style={{
                top: '4%',
                fontSize: 18,
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Yandiya® Technologies Ltd, part of a Global Group, committed to the design development, manufacture and distribution of next generation heating solutions. Utilising energy efficient high performance far-infrared radiant heating technologies, suitable for both Commercial and Domestic applications. Our heating panels are environmentally friendly, affordable, and most importantly, significantly reduce your heating costs by up to 60%. Our global mission for the world, is to keep you warmer for longer, without compromising on cost. With the added benefit of a reduced carbon footprint, along with a wide variety of health benefits, our next-generation heating solutions installation process is simple and straightforward, with little to no annual maintenance required. Our indoor heating panels come with our industry-leading 10-year warranty, to give you full peace of mind, with the option of aluminium, glass and mirror frameless panel finishes to compliment your décor. The Yandiya® Group has a vertically integrated supply chain, with fully owned factories producing the highest quality products for all our customers.
            </Text>
            <Text />
            <Text />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logOutImage: {
    width: 190,
    height: 200,
    position: 'absolute',
    right: '25%',
  },
    topBackButton: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    right: 3,
  },
});