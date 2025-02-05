import { View, Text, useColorScheme, Dimensions, StyleSheet, TextInput, Image, Pressable, ScrollView, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather'
export default function Followers() {
    const isDark = useColorScheme() === 'dark';
    const width = Dimensions.get('window').width;
    const data = useRoute<any>()
    const { goBack } = useNavigation();
    const [search, setSearch] = useState('');
    return (
        <SafeAreaView style={[styles.container,{ backgroundColor: isDark ? 'black' : 'white' }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* <ScrollView style={{}}> */}
            <StatusBar backgroundColor={isDark ? 'black' : 'white'}/>
            <View style={styles.Search}>
                <TextInput
                    placeholder='Search'
                    onChangeText={setSearch}
                    value={search}
                    placeholderTextColor    ={isDark ? '#d4d4d4' : 'gray'}
                    style={{ width: '90%', fontWeight: '600', letterSpacing: 0.6}}
                />
                <View>
                    <Feather name='search' size={22} color={isDark ? 'white' : 'black'} />
                </View>
            </View>
            <View style={styles.FlexMain}>
            {
                [...Array(10)].map((el,inx)=>{
                    return (
                        <Pressable style={styles.Flex} key={inx}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Image
                                source={require('../assets/Images/users.png')}
                                style={{
                                    width: 65,
                                    height: 65,
                                    borderRadius: 70
                                }}
                            />
                            <View>
                                <Text style={[styles.username, { color: isDark ? 'white' : 'black' }]}>Itz_.ramu786</Text>
                                <Text style={[styles.name, { color: isDark ? 'white' : 'black' }]}>Ramukaka</Text>
                            </View>
                        </View>
                            <View style={[styles.Following,{backgroundColor:isDark ? 'gray' : '#cecbcb'}]}>
                                <Text style={{color:isDark ? 'white' : 'black',fontWeight:'500',fontSize:15}}>Following</Text>
                            </View>
                    </Pressable>
                    )
                })
            }
            </View>
            {/* </ScrollView> */}
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    Search: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#999292',
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#D9D9D940',
        position: 'absolute',
        top: 10,
        
    },
    FlexMain:{
        marginTop:60,
        marginBottom:20
    },
    Flex:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:5
    },
    username: {
        fontSize: 20,
        fontWeight: '500',

    },
    name: {
        fontWeight: '500',
        opacity: 0.5,

    },
    Following:{
        width:90,
        height:30,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    }
})