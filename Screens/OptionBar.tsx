import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Post from './Post';
import UserReels from './UserReels';
export default function OptionBar() {
    const isDark = useColorScheme() === 'dark';
    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Post' screenOptions={{
        tabBarIndicatorStyle:{
            backgroundColor:isDark ? 'white' : 'black'
        },
        tabBarStyle:{
            backgroundColor:isDark ? 'black' : 'white',
        }
    }}>
    <Tab.Screen name="Post" component={Post} 
    options={{
        tabBarIcon:()=>(
            <MaterialCommunityIcons name='grid' size={36} color={isDark ? 'white' : 'black'}/>
        ),
        tabBarShowLabel:false
    }}
    />
    <Tab.Screen name="UserReels" component={UserReels} 
    options={{
        tabBarIcon:()=>(
            <MaterialCommunityIcons name='movie-play-outline' size={36} color={isDark ? 'white' : 'black'}/>
        ),
        tabBarShowLabel:false
    }}
    />
  </Tab.Navigator>
  )
}