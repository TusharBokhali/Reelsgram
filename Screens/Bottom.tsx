import { View, Text, useColorScheme, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Reels from './Reels';
import Create from './Create';
import Settings from './Settings';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Bottom() {
    const isDark = useColorScheme() === 'dark';
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={{headerShown:false,
        tabBarStyle:{
            backgroundColor:isDark ? 'black' : 'white'
        },
        tabBarActiveTintColor:isDark ? 'white' : 'black'
    }}>
        <Tab.Screen name='Home' component={Reels}
        options={{
            tabBarIcon:()=>(
                isDark ? 
                <Image source={require('../assets/Images/ReelLight.png')}
                style={{
                    width: 25,
                    height:25
                }}
                /> : 
                <Image source={require('../assets/Images/ReelDark.png')}
                style={{
                    width: 25,
                    height:25
                }}
                />
            )
        }}
        />
        <Tab.Screen name='Create' component={Create}
        options={{
            tabBarIcon:({color})=>(
                <Entypo name='squared-plus' size={24} color={color}/>
            )
        }}
        />
        <Tab.Screen name='Settings' component={Settings}
        options={{
            tabBarIcon:({color})=>(
                <AntDesign name='setting' size={24} color={color}/>
            )
        }}
        />
    </Tab.Navigator>
  )
}