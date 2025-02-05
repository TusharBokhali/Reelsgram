import { View, Text, StatusBar, useColorScheme } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LogIn from './Screens/LogIn';
import SingIn from './Screens/SingIn';
import Verifications from './Screens/Verifications';
import Reels from './Screens/Reels';
import Massege from './Screens/Massege';
import userProfile from './Screens/UserProfile';
import OptionBar from './Screens/OptionBar';
import UserProfile from './Screens/UserProfile';
import Bottom from './Screens/Bottom';
import Chat from './Screens/Chat';
import UserMedia from './Screens/UserMedia';
import MeProfile from './Screens/MeProfile';
import Followers from './Screens/Followers';
import Following from './Screens/Following';
import MaterialTab from './Screens/MaterialTab';
export default function App() {
  const Stack = createNativeStackNavigator();
  const isDark = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar 
      barStyle={isDark ? 'light-content' : 'dark-content'}
      backgroundColor="transparent"
      />
      <Stack.Navigator initialRouteName='LogIn' screenOptions={{headerShown:false}}>
        <Stack.Screen name='LogIn' component={LogIn} />
        <Stack.Screen name='SingIn' component={SingIn} />
        <Stack.Screen name='Verifications' component={Verifications} />
        <Stack.Screen name='Reels' component={Reels} />
        <Stack.Screen name='Massege' component={Massege} />
        <Stack.Screen name='UserProfile' component={UserProfile} />
        <Stack.Screen name='OptionBar' component={OptionBar} />
        <Stack.Screen name='Chat' component={Chat} />
        <Stack.Screen name='Bottom' component={Bottom} />
        <Stack.Screen name='UserMedia' component={UserMedia} />
        <Stack.Screen name='MeProfile' component={MeProfile} />
        <Stack.Screen name='Followers' component={Followers} />
        <Stack.Screen name='Following' component={Following} />
        <Stack.Screen name='MaterialTab' component={MaterialTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}