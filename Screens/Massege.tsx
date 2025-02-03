import { View, Text, useColorScheme, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, ScrollView, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';

const width = Dimensions.get('window').width;
export default function Massege() {
    const isDark = useColorScheme() === 'dark';

    const { navigate } = useNavigation<any>();
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? 'black' : 'white' }]}>
            <StatusBar backgroundColor={isDark ? 'black' : 'white'}/>
            <View style={styles.TopFlex}>
                <TouchableOpacity>
                    <FontAwesome6 name='angle-left' size={32} color={isDark ? 'white' : 'black'} />
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    fontWeight: '600',
                    color: isDark ? 'white' : 'black',
                }}>Messages</Text>
                <TouchableOpacity>
                    <Feather name='edit' size={32} color={isDark ? 'white' : 'black'} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.Search}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={isDark ? '#d4d4d4' : 'gray'}
                        style={{ width: '90%', fontWeight: '600', letterSpacing: 0.6 }}
                    />
                    <View>
                        <Feather name='search' size={22} color={isDark ? 'white' : 'black'} />
                    </View>
                </View>
                {
                    [...Array(10)].map((el, inx) => {
                        return (
                            <View style={styles.MassegeUser} key={inx}>
                                <View style={{ width: '20%' }}>
                                    <Image
                                        source={require('../assets/Images/users.png')}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 70
                                        }}
                                    />
                                </View>
                                <View style={{ width: '80%', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                                        <Text style={[styles.userName,{color:isDark ? 'white' : 'black'}]}>RamuKaka</Text>
                                        <Text style={[styles.userTime,{color:isDark ? 'white' : 'black'}]}>11:46Am</Text>
                                    </View>
                                    <View style={{ width: '85%' }}>
                                        <Text style={[styles.userDescription,{color:isDark ? 'white' : 'black'}]}>Lorem ipsum dolor sit amet consect Libero consectetur turpis volutpat cz...</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    TopFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom:5,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
    },
    Search: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999292',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 20,
        backgroundColor: '#D9D9D940',
    },
    MassegeUser: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        borderBottomWidth:1,
        borderColor:'#b8b1b1',
        marginVertical:5,
        paddingVertical:4
    },
    userName: {
        fontWeight: '500',
        fontSize: 18
    },
    userTime: {
        fontSize: 10,
        fontWeight: '500',
        opacity: 0.5
    },
    userDescription: {
        fontSize: 12,
        fontWeight: '500',
        opacity: 0.5,
        lineHeight:15.6
    }
})