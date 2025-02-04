import { View, Text, useColorScheme, Dimensions, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialTab from './MaterialTab';
import Mutal from './Mutal';
import Following from './Following';
import Followers from './Followers';

export default function MeProfile() {
    const isDark = useColorScheme() === 'dark';
    const width = Dimensions.get('window').width;
    const data = useRoute<any>()
    const { goBack } = useNavigation();
    const propData = [

    {
        name:'Flollowing',
        data:'225',
        compinent: Following
    },

    {
        name:'Followers',
        data:'255M',
        compinent: Followers
    },
]

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? 'black' : 'white' }]}>
            <StatusBar backgroundColor={isDark ? 'black' : 'white'} />
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',padding:15}}>
                <TouchableOpacity style={{ width: '15%', }} onPress={() => goBack()}>
                    <Ionicons name='chevron-back-outline' size={36} color={isDark ? 'white' : 'black'} />
                </TouchableOpacity>
                <View style={{ width: '70%', }}>
                    <Text style={[styles.Username, { color: isDark ? 'white' : 'black' }]}>Itz_.ramu786</Text>
                </View>
            </View>
            <MaterialTab data={propData} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Username: {
        fontFamily: '600',
        fontSize: 22,
        textAlign: 'center'
    }
})