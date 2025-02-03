import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import SingIn from './Screens/SingIn';
import Verifications from './Screens/Verifications';
import Reels from './Screens/Reels';
import Massege from './Screens/Massege';
import userProfile from './Screens/userProfile';
import OptionBar from './Screens/OptionBar';
export default function App() {
  const Stack = createNativeStackNavigator();
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar 
      barStyle={isDark ? 'light-content' : 'dark-content'}
      backgroundColor="transparent"
      />
      <Stack.Navigator initialRouteName='userProfile' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='Verifications' component={Verifications} />
        <Stack.Screen name='Reels' component={Reels} />
        <Stack.Screen name='Massege' component={Massege} />
        <Stack.Screen name='userProfile' component={userProfile} />
        <Stack.Screen name='OptionBar' component={OptionBar} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}