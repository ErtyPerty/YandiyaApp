import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import image from '../assets/yandiyaLogo_Small.png';
import icon from '../assets/yandiyaLogo_Wide.png';
import bottom from '../assets/bottom.jpg';
import settings_image from '../assets/Settings.png';

import test from '../assets/test.jfif';
import test2 from '../assets/bakery.jpg';
import test3 from '../assets/sheasy.jfif';
import star from '../assets/star.gif';

//Menu function

export function homeScreen({ navigation: { navigate } }) {
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
          <ImageBackground source={image} style={styles.image} />

          {/* Positions elements inside red border */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: '24%',
              width: '100%',
            }}>
            {/* "Hello User" */}
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome</Text>
            </View>
          </View>
        </View>

        {/* Search Bar Section */}
        {/* Gradient under Search */}
        <LinearGradient
          colors={['#e42c22', 'transparent']}
          style={{ left: 0, right: 0, height: 90, marginTop: -45 }}>
          {/* White background and positioning of the text input */}
          <View
            style={{
              backgroundColor: 'white',
              paddingVertical: 8,
              paddingHorizontal: 20,
              marginHorizontal: 20,
              borderRadius: 15,
              marginTop: 25,
              height: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Search"
              placeholderTextColor="black"
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                width: 260,
              }}>
            </TextInput>
          </View>
        </LinearGradient>

        {/* Text Section */}
        <ScrollView>
          {/* Positioning of "Current Jobs" */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 20,
              width: '100%',
              alignItems: 'center',
            }}>
            {/* This ensures that the text and anything extra will be evenly spaced */}
            <View style={{ width: '50%' }}>
              {/* Text */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Current Jobs
              </Text>

              {/* Red underline */}
              <View
                style={{
                  height: 3,
                  backgroundColor: '#e42c22',
                  width: 125,
                  marginTop: -2,
                  alignSelf: 'center',
                }}
              />
            </View>

            {/* Anything extra that needs to be next to the "Current Jobs" goes here */}
          </View>

          {/* Image Area */}
          <View style={{ height: 300, marginLeft: 35, marginTop: 8 }}>
            {/* Horizontal Scroll */}
            <ScrollView horizontal style={{ height: 300 }}>
              {/* BOX NUMBER 1 */}
              {/* Adds fancy touch animation */}
              <TouchableOpacity
                onPress={() => navigate('projectHub')}
                style={{
                  height: 220,
                  elevation: 2,
                  backgroundColor: 'white',
                  marginRight: 15,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 140,
                }}>
                {/* Image */}
                <ImageBackground
                  source={test}
                  style={{ height: 120, width: 120, margin: 10 }}
                />

                {/* Makes the image and star icon aligned with each other */}
                <View style={{ flexDirection: 'row' }}>
                  {/* Text */}
                  <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                    Bob's Diner
                  </Text>

                  {/* Star image */}
                  <ImageBackground
                    //source={star}
                    style={{ height: 20, width: 20, marginLeft: 10 }}
                  />
                </View>
              </TouchableOpacity>

              {/* BOX NUMBER 2 */}
              <TouchableOpacity
                onPress={() => navigate('projectHub')}
                style={{
                  height: 220,
                  elevation: 2,
                  backgroundColor: 'white',
                  marginRight: 15,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 140,
                }}>
                {/* Image */}
                <ImageBackground
                  source={test2}
                  style={{ height: 120, width: 120, margin: 10 }}
                />

                {/* Makes the image and star icon aligned with each other */}
                <View style={{ flexDirection: 'row' }}>
                  {/* Text */}
                  <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                    Iona Bakery
                  </Text>
                  <ImageBackground
                    source={star}
                    style={{ height: 20, width: 20, marginLeft: 10 }}
                  />
                </View>
              </TouchableOpacity>

              {/* BOX NUMBER 3 */}
              <TouchableOpacity
                onPress={() => navigate('projectHub')}
                style={{
                  height: 220,
                  elevation: 2,
                  backgroundColor: 'white',
                  marginRight: 15,
                  marginTop: 20,
                  borderRadius: 15,
                  marginBottom: 10,
                  width: 140,
                }}>
                {/* Image */}
                <ImageBackground
                  source={test3}
                  style={{ height: 120, width: 120, margin: 10 }}
                />

                {/* Makes the image and star icon aligned with each other */}
                <View style={{ flexDirection: 'row' }}>
                  {/* Text */}
                  <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                    Sheasy
                  </Text>
                  <ImageBackground
                    source={star}
                    style={{ height: 20, width: 20, marginLeft: 30 }}
                  />
                </View>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Client Section */}
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              width: '100%',
              alignItems: 'center',
            }}>
            {/* This ensures that the text and anything extra will be evenly spaced */}
            <View style={{ width: '50%' }}>
              {/* Text */}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 15,
                  color: 'black',
                  alignSelf: 'center',
                }}>
                Clients
              </Text>

              {/* Red underline */}
              <View
                style={{
                  height: 3,
                  backgroundColor: '#e42c22',
                  width: 110,
                  marginTop: -2,
                  alignSelf: 'center',
                }}
              />
            </View>

            {/* Anything extra that needs to be next to the "Clients" goes here */}
          </View>

          {/* Clients */}
          <View
            style={{ height: 300, marginLeft: 35, marginTop: 10 }}
            onPress={() => navigate('info')}>
            {/* Client 1 */}
            {/* Fancy button click */}
            <TouchableOpacity
              style={{
                height: 40,
                elevation: 2,
                backgroundColor: 'white',
                marginRight: 15,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                {/* Text */}
                <Button
                  style={{ fontWeight: 'bold', marginLeft: -2, fontSize: 1 }}
                  color="black"
                  onPress={() => navigate('Info')}
                  title="Bob Dave"
                />
              </View>
            </TouchableOpacity>

            {/* Client 2 */}
            {/* Fancy button click */}
            <TouchableOpacity
              style={{
                height: 40,
                elevation: 2,
                backgroundColor: 'white',
                marginRight: 15,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                {/* Text */}
                <Button
                  style={{ fontWeight: 'bold', marginLeft: -2, fontSize: 1 }}
                  color="black"
                  onPress={() => navigate('Info')}
                  title="Sophie York"
                />
              </View>
            </TouchableOpacity>

            {/* Client 3 */}
            {/* Fancy button click */}
            <TouchableOpacity
              style={{
                height: 40,
                elevation: 2,
                backgroundColor: 'white',
                marginRight: 15,
                marginTop: 20,
                borderRadius: 15,
                marginBottom: 10,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                {/* Text */}
                <Button
                  style={{ fontWeight: 'bold', marginLeft: -2, fontSize: 1 }}
                  color="black"
                  onPress={() => navigate('Info')}
                  title="Cameron Carter"
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* My fake bottom tab navigator */}
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#e42c22',
            height: '7%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          {/* Settings Icon - LEADS TO SETTINGS */}
          <TouchableOpacity onPress={() => navigate('Settings')}>
            <ImageBackground
              source={settings_image}
              style={{ height: 30, width: 30, margin: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 200,
    flex: 1,
    position: 'absolute',
    top: -15,
    right: 0,
  },
});
