import { View, Text, useColorScheme, StyleSheet, Dimensions, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import OptionBar from './OptionBar';

const width = Dimensions.get('window').width;

export default function userProfile() {
    const isDark = useColorScheme() === 'dark';
    const { navigate, goBack } = useNavigation<any>();
    return (
        <SafeAreaView style={[styles.container,{backgroundColor:isDark ? 'black' : 'white'}]}>
            <StatusBar backgroundColor={isDark ? 'black' : 'white'}/>
            <View style={styles.TopFlex}>
                <TouchableOpacity style={{ width: '10%' }}>
                    <FontAwesome6 name='angle-left' size={32} color={isDark ? 'white' : 'black'} />
                </TouchableOpacity>
                <Text style={{
                    width: '70%',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    color: isDark ? 'white' : 'black',
                }}>ramukaka777</Text>
                <View style={{
                    flexDirection: 'row',
                    gap: 10,
                    width: '20%'
                }}>

                    <TouchableOpacity>
                        <Octicons name='bell-slash' size={22} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='more-horizontal' size={22} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>

                </View>
            </View>
            <View style={styles.MainUserDetails}>
                <View style={{
                    width: '30%',
                }}>
                    <Image
                        source={require('../assets/Images/users.png')}
                        style={{ width: 100, height: 100, borderRadius: 100 }}
                    />
                    <Text style={[styles.userNames,{color:isDark?'white':'black'}]}>Ramukaka</Text>
                </View>
                <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={styles.Flex}>
                        <Text style={[styles.Digit,{color:isDark ? 'white' : 'black'}]}>18</Text>
                        <Text style={[styles.Label,{color:isDark ? 'white' : 'black'}]}>Posts</Text>
                    </View>

                    <View style={styles.Flex}>
                        <Text style={[styles.Digit,{color:isDark ? 'white' : 'black'}]}>155B</Text>
                        <Text style={[styles.Label,{color:isDark ? 'white' : 'black'}]}>Followers</Text>
                    </View>

                    <View style={styles.Flex}>
                        <Text style={[styles.Digit,{color:isDark ? 'white' : 'black'}]}>350</Text>
                        <Text style={[styles.Label,{color:isDark ? 'white' : 'black'}]}>Following</Text>
                    </View>
                </View>
            </View>
            <Text style={[styles.Description, { color: isDark ? 'white' : 'black',}]}>Lorem ipsum dolor sit amet consectetur. Mauris aliquet ipsum eget neque. Senectus iaculis.</Text>
            <View style={[styles.userDetails,]}>
                <View style={[styles.Box,{backgroundColor:isDark ? '#535252' : '#cacaca'}]}>
                   <Text style={{fontWeight:'500',fontSize:16,color:isDark ? 'white' : 'black'}}>Edit profile</Text>         
                </View>

                <View style={[styles.Box,{backgroundColor:isDark ? '#535252' : '#cacaca'}]}>
                    <Text style={{fontWeight:'500',fontSize:16,color:isDark ? 'white' : 'black'}}>Share profile</Text>
                </View>
            </View>
            <OptionBar />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15
    },
    TopFlex: {
        padding:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    MainUserDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        padding:15
    },
    Flex: {
        width: '33.33%',
        alignItems: 'center',
    },
    userNames: {
        // textAlign: 'center',
        marginTop: 5,
        fontSize: 16,
        fontWeight: '600'
    },
    Description: {
        fontSize: 12,
        fontWeight: '400',
        marginLeft: '4%',
        lineHeight: 16.5,
    },
    Digit: {
        fontSize: 16,
        fontWeight: '500'
    },
    Label: {
        fontSize: 14,
        fontWeight: '500',
        opacity: 0.5
    },
    userDetails: {
        padding:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginTop:20
    },
    Box:{
        width:'45%',
        height:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',

    }
})