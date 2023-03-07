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

function logOut({ navigation: { navigate } }) {
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Suspendisse ultrices gravida dictum fusce ut. Pellentesque id nibh
              tortor id aliquet lectus proin nibh. Cursus mattis molestie a
              iaculis at. Vitae proin sagittis nisl rhoncus mattis rhoncus urna.
              Tristique sollicitudin nibh sit amet commodo nulla facilisi
              nullam. Arcu odio ut sem nulla pharetra diam sit amet. Urna nec
              tincidunt praesent semper feugiat nibh sed pulvinar. Aenean et
              tortor at risus viverra adipiscing at in tellus. Ac tincidunt
              vitae semper quis lectus nulla at volutpat diam. Et malesuada
              fames ac turpis egestas sed tempus urna. Interdum varius sit amet
              mattis vulputate enim nulla.
            </Text>
            <Text />
            <Text />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function MyDrawer() {
  return (
    <Stack.Navigator useLegacyImplementation>
      <Stack.Screen
        name="LogOut"
        component={logOut}
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
