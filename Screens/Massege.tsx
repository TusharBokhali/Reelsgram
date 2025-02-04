import { View, Text, useColorScheme, StyleSheet, TouchableOpacity, TextInput, Dimensions, Image, ScrollView, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaFrame } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import { user } from '../UserChat';

const width = Dimensions.get('window').width;
export default function Massege() {
    const isDark = useColorScheme() === 'dark';
    const [search,setSearch] = useState('')
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
                        onChangeText={setSearch}
                        value={search}
                        placeholderTextColor={isDark ? '#d4d4d4' : 'gray'}
                        style={{ width: '90%', fontWeight: '600', letterSpacing: 0.6 }}
                    />
                    <View>
                        <Feather name='search' size={22} color={isDark ? 'white' : 'black'} />
                    </View>
                </View>
                {
                    user.filter((el,inx)=>{
                        return el.userName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
                    }).map((el, inx) => {
                        return (
                            <Pressable style={styles.MassegeUser} key={inx} onPress={()=>navigate('Chat',{data:el})}>
                                <View style={{ width: '20%' }}>
                                    <Image
                                        source={el.user_avatar}
                                        style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 70
                                        }}
                                    />
                                </View>
                                <View style={{ width: '80%', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%' }}>
                                        <Text style={[styles.userName,{color:isDark ? 'white' : 'black'}]}>{el.userName}</Text>
                                        <Text style={[styles.userTime,{color:isDark ? 'white' : 'black'}]}>11:46Am</Text>
                                    </View>
                                    <View style={{ width: '85%' }}>
                                        <Text style={[styles.userDescription,{color:isDark ? 'white' : 'black'}]}>{el.description}</Text>
                                    </View>
                                </View>
                            </Pressable>
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