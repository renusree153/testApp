import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import LocationFinder, {Details, SignIn} from 'emissions-library4';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';
import * as Application from 'expo-application';
import * as Device from 'expo-device';
const Stack = createNativeStackNavigator();
import Constants from 'expo-constants';
 
function LocationGetter ({navigation}) { 
  useEffect(() => {
    // we want more information than this, manufacturer, IP address
    // hash the installation ID by looking at the code for that
  }, []);
  return (
    <LocationFinder />
  );
}

function DetailsGetter ({navigation}) {
  return (
    <Details />
  )
}

function SignInMethod ({navigation}) {
  console.log("pressed");
  return (
      <SignIn />
  )
}

function HomeScreen ({navigation}) {
  return (
    <View>
      <Button 
        title = "Let's start collecting trip data!"
        onPress = { () => navigation.navigate('Location')} // calling LocationGetter function which calls LocationFinder
                                                          // the library 
      />
      <Button 
        title = "Set your preferences"
        onPress = { () => navigation.navigate('Preferences')}
      />
      <Button
        title = "Sign in/Register"
        onPRess = { () => navigation.navigate('SignIn')}
      />
      <Text styles = {styles.containter}> "Set Your Preferences" allows you to customize your data plan option, and is by default set to True
      Please note that if you start your trip and navigate away from the screen and click on another Screen, your trip will automatically
      be terminated.</Text>
    </View>
  )
}

export default function App () {
  return (
   <NavigationContainer independent = {true}>
     <Stack.Navigator>
       <Stack.Screen name = "Home" component  = {HomeScreen} />
       <Stack.Screen name = "Location" component = {LocationGetter} />
       <Stack.Screen name = "Preferences" component = {DetailsGetter} />
       <Stack.Screen name = "SignIn" component = {SignInMethod} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
