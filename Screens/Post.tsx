import { View, Text, StyleSheet, Image, ScrollView, useColorScheme } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Post() {
    const isDark = useColorScheme() === 'dark';
    return (
        <ScrollView>
            <SafeAreaView style={[styles.container,{backgroundColor:isDark ? 'black' : 'white'}]}>

                {
                    [...Array(12)].map((el, inx) => {
                        return (
                            <View style={{ width: '33%', height: 130 }} key={inx}>
                                <Image
                                    source={require('../assets/Images/users.png')}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        resizeMode: 'cover'
                                    }}
                                />
                            </View>
                        )
                    })
                }
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 1
    }
})