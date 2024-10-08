import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { FontLoader } from './assets/fonts/FontLoader';
import Chefslogin from './screens/ChefSide/Chefslogin';
import ChefsMenu from './screens/ChefSide/ChefsMenu';
import Menumodal from './screens/ChefSide/Menumodal';
import Menu from './screens/Menu';

const Stack = createNativeStackNavigator()







export default function App() {

  return (
    <FontLoader>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Group>
            <Stack.Screen name='Chefslogin' component={Chefslogin} options={{ headerShown: false }} />
            <Stack.Screen name='Chefsmenu' component={ChefsMenu} options={{ headerShown: false }} />
            <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
          </Stack.Group>
          <Stack.Group screenOptions={{ presentation: 'modal', }} >
            <Stack.Screen name='Menumodal' component={Menumodal} options={{headerShown: false}}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </FontLoader>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function loadFonts() {
  throw new Error('Function not implemented.');
}

