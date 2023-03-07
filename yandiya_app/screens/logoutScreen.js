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

export function logOut({ navigation: { navigate } }) {
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
              Log Out
            </Text>
          </View>
        </LinearGradient>

        {/* Middle Box */}
        <View
          style={{
            backgroundColor: 'white',
            height: 300,
            width: 250,
            top: '7%',
            alignSelf: 'center',
            elevation: 3,
            borderRadius: 20,
          }}>
          {/* Title */}
          <Text
            style={{
              fontWeight: 'bold',
              top: '8%',
              fontSize: 18,
              textAlign: 'center',
              alignSelf: 'center',
            }}>
            Are you sure you want to log out?
          </Text>

          {/* Yes button */}
          <TouchableOpacity
            onPress={( ) => navigate("First")}
            style={{
              height: 40,
              elevation: 2,
              backgroundColor: '#32aa46',
              marginTop: '30%',
              borderRadius: 15,
              width: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
              Yes
            </Text>
          </TouchableOpacity>

          {/* No button */}
          <TouchableOpacity
            onPress={() => navigate('Settings')}
            style={{
              height: 40,
              elevation: 2,
              backgroundColor: '#e42c22',
              marginTop: '10%',
              borderRadius: 15,
              width: 100,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>
              No
            </Text>
          </TouchableOpacity>
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
});
