import { View, Text, StyleSheet, TouchableOpacity, useColorScheme, Image, StatusBar, TextInput, ScrollView, useWindowDimensions, Alert } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { GiftedChat } from 'react-native-gifted-chat'
import Massege from './Massege'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Chat() {
    const isDark = useColorScheme() === 'dark';
    const [messages, setMessages] = useState<any[]>([]);
    const [SmsText, setSmsTex] = useState<string>('')
    const Route = useRoute<any>();
    const height = useWindowDimensions().height
    const userData = Route?.params?.data;
    const { goBack } = useNavigation();
    // console.log(userData);
    // let array = [...messages]
    let array = [...messages]
    const SetMassge = () => {
        let data = {
            _id: userData?.id,
            system: true,
            text: SmsText,
            createdAt: new Date(),
            user: {
                _id: userData?.id,
                name: userData?.userName,
                avatar: userData?.user_avatar,
            },
        }
        array.push(data)
        setMessages(array)
        setSmsTex('');
    }

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages: any) =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? 'black' : 'white', height: height }]}>
            <StatusBar
                barStyle={isDark ? 'light-content' : 'dark-content'}
                backgroundColor={isDark ? 'black' : 'white'}
            />
            <View style={[styles.ChatsUser, { borderColor: isDark ? 'white' : '#80808084' }]}>
                <TouchableOpacity style={{ width: '15%', }} onPress={() => goBack()}>
                    <Ionicons name='chevron-back-outline' size={36} color={isDark ? 'white' : 'black'} />
                </TouchableOpacity>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '65%',
                    gap: 10
                }}>
                    <Image
                        source={userData.user_avatar}
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 100
                        }}
                    />
                    <View>
                        <Text style={{ color: isDark ? 'white' : 'black', fontWeight: '500', fontSize: 18 }}>{userData.userName}</Text>
                        <Text style={{ color: isDark ? 'white' : 'black', fontSize: 10 }}>last seen today at 11:46 Am</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', gap: 10, width: '20%', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Feather name='phone' size={24} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='videocam-outline' size={24} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <GiftedChat
                    messages={messages}
                    onSend={(messages: any) => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
            <ScrollView>
                {/* Chats Data Start */}
                <View style={{ width: '100%', height: '100%', marginVertical: 5, padding: 15,marginTop:20 }}>
                    {
                        messages.length ? (
                            messages.map((el, inx) => {
                                return (
                                    userData.id == 1 ? (
                                        <View style={[styles.userDegin,{}]} key={inx}>
                                            <Text style={[styles.userchatMassage, { color: isDark ? 'white' : 'black' }]}>{el.text}</Text>
                                        </View>
                                    ) : (
                                        <View style={styles.userDegin} key={inx}>
                                            <Text style={[styles.userchatMassage, { color: isDark ? 'white' : 'black' }]}>{el.text}</Text>
                                        </View>
                                    )

                                )
                            })
                        ) : (
                            <Text style={{ textAlign: 'center', fontWeight: '500', color: isDark ? 'white' : 'black' }}>no chat</Text>
                        )
                    }
                </View>
            </ScrollView>
            {/* Chats Data end */}
            <View style={[styles.SearchBottom, { backgroundColor: isDark ? 'black' : 'white', shadowColor: isDark ? 'white' : 'gray' }]}>
                <View style={{ width: '10%' }}>
                    <View style={[styles.Camera,]}>
                        <TouchableOpacity>
                            <Image
                                source={require('../assets/Images/Camera.png')}
                                style={{
                                    width: 28,
                                    height: 28
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '55%' }}>
                    <TextInput
                        placeholder='Message...'
                        placeholderTextColor='#5f5f5f'
                        onChangeText={setSmsTex}
                        value={SmsText}
                        returnKeyType="send"
                        onSubmitEditing={SetMassge}
                        style={{
                            fontWeight: '500',
                            fontSize: 14,
                            marginLeft: 10,
                            color: isDark ? 'white' : 'black'
                        }}
                    />
                </View>
                <View style={{ width: '45%', flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <MaterialIcons name='mic-none' size={26} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Feather name='image' size={26} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name='pluscircleo' size={26} color={isDark ? 'white' : 'black'} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ChatsUser: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
    },
    SearchBottom: {
        width: '95%',
        marginHorizontal: 'auto',
        backgroundColor: '#cccccc',
        borderRadius: 52,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        gap: 10,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        elevation: 10,
        shadowOpacity: 10,
        shadowOffset: {
            width: 0,
            height: 5
        },

    },
    Camera: {
        width: 50,
        height: 50,
        borderRadius: 70,
        backgroundColor: '#3F74FD',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
    },
    userchatMassage: {
        fontWeight: '500',
        width: 'auto',
        flexShrink: 1,
        flexGrow: 0,
        flexBasis: 'auto',
        fontSize: 16,
        lineHeight: 21,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    userDegin: {
        backgroundColor: '#3F74FD',
        maxWidth: '80%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        flexDirection: 'row',
    }
})