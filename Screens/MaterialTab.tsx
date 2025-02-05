import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Mutal from './Mutal';
import Following from './Following';
import Followers from './Followers';
import { data } from '../data';

export default function MaterialTab({data}:any) {
    const isDark = useColorScheme() === 'dark';
    

    const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator screenOptions={{
        tabBarLabelStyle:{
            color:isDark ? 'white' : 'black'
        },
        tabBarIndicatorStyle:{
            backgroundColor:isDark ? 'white' : 'black'
        },
        tabBarStyle:{
            backgroundColor:isDark ? 'black' : 'white',
        }
    }}
    >
      {
        data.map((el:any,inx:any)=>{
            return ( 
                <Tab.Screen key={inx} name={el.name} component={el.compinent}
                options={{
                    title:`${125} ${el.name }`
                }}
                />
            )
        })
      }
    </Tab.Navigator>
  )
}