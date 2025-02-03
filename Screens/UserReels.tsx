import { View, Text, ScrollView, StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function UserReels() {
    const isDark = useColorScheme() === 'dark';
  return (
        <SafeAreaView style={[styles.container,{backgroundColor:isDark ? 'black' : 'white'}]}>
            <Text style={{color:isDark ? 'white' : 'black',fontWeight:'500',letterSpacing:0.7}}>No Data Found</Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})