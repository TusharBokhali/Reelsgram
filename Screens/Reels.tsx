import { View, Text, StyleSheet, useColorScheme, StatusBar, FlatList, Dimensions, TouchableOpacity, Image, LogBox, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { data } from '../data';
import Video from 'react-native-video';
import {
    OffsetYProvider,
    IndexProvider,
    InCenterConsumer
} from "@n1ru4l/react-in-center-of-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { user } from '../UserChat';
import { useNavigation } from '@react-navigation/native';
export default function Reels() {
    const isDark = useColorScheme() === 'dark';
    const [current, setCurrent] = useState(0)
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const [like, setlike] = useState(false)
    const {navigate} = useNavigation<any>();
    const changeIndex = ({ index }: any) => {
        setCurrent(index)
    }
    LogBox.ignoreAllLogs()

    const onBuffer = (buffer: any) => {
        console.log(buffer)
    }

    const Error = (error: any) => {
        console.log(error)
    }
    return (
        <SafeAreaView style={[styles.container, { width: width, height: height }]}>
            <StatusBar backgroundColor="black" barStyle={'light-content'} translucent={true} />
            <OffsetYProvider
                columnsPerRow={1}
                listItemHeight={height}
                centerYStart={(height * 1) / 3}
                centerYEnd={(height * 2) / 3}
            >
                {({ setOffsetY }: any) => (
                    <SwiperFlatList
                        vertical={true}
                        data={user}
                        onScroll={ev => {
                            setOffsetY(ev.nativeEvent.contentOffset.y);
                        }}
                        keyExtractor={({ index }: any) => String(index)}
                        renderItem={({ index, item }) => (
                            <IndexProvider index={index} key={index}>
                                {() => (
                                    <View style={{ height: height }} key={index}>
                                        <InCenterConsumer>
                                            {({ isInCenter }: any) =>
                                                isInCenter ?
                                                    <TouchableOpacity style={{ width: width, height: height, }} key={index}>
                                                        <Video
                                                            paused={false}
                                                            ref={null}
                                                            repeat={true}
                                                            onBuffer={onBuffer}
                                                            onError={Error}
                                                            source={{ uri: item.video }}
                                                            resizeMode='cover'
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                position: 'absolute'
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                                    :
                                                    <TouchableOpacity style={{ width: width, height: height, }} key={index}>
                                                        <Video
                                                            paused={true}
                                                            ref={null}
                                                            repeat={true}
                                                            onBuffer={onBuffer}
                                                            onError={Error}
                                                            source={{ uri: item.video }}
                                                            resizeMode='cover'
                                                            style={{
                                                                width: '100%',
                                                                height: '100%',
                                                                position: 'absolute'
                                                            }}
                                                        />
                                                    </TouchableOpacity>
                                            }
                                        </InCenterConsumer>
                                        <View style={{ position: 'absolute', padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '95%' }}>
                                            <TouchableOpacity>
                                                <Ionicons name='chevron-back-outline' size={36} color={'white'} />
                                            </TouchableOpacity>
                                            <Text style={{ color: 'white' }}>1.5K Views</Text>
                                        </View>
                                        <View style={{ position: 'absolute', right: 15, top: '25%', gap: 30 }}>
                                            <TouchableOpacity style={{ alignItems: 'center', gap: 10 }}>
                                                <TouchableOpacity onPress={() => setlike(!like)}>
                                                    <Octicons name={like ? 'heart-fill' : 'heart'} size={32} color={like ? '#FF1872' : 'white'} />
                                                </TouchableOpacity>
                                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Like</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center', gap: 10 }}>


                                                <Image
                                                    source={require('../assets/Images/Comment.png')}
                                                    style={{ width: 30, height: 25.25 }}
                                                />
                                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Comment</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center', gap: 10 }}>

                                                <Image
                                                    source={require('../assets/Images/Share.png')}
                                                    style={{ width: 28, height: 26 }}
                                                />
                                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Share</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center', gap: 10 }}>

                                                <Image
                                                    source={require('../assets/Images/Report.png')}
                                                    style={{ width: 28, height: 26 }}
                                                />
                                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Report</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ alignItems: 'center', gap: 10 }}>

                                                <Image
                                                    source={require('../assets/Images/More.png')}
                                                    style={{ width: 32, height: 8 }}
                                                />
                                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>More</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <Pressable style={{ position: 'absolute', bottom: '5%', padding: 15,width:width * 0.8,left:'5%'}}onPress={()=>navigate('UserProfile',{User:item})} >
                                            <View style={{flexDirection:'row',alignItems:'center',gap:10,marginBottom:10}}>
                                                <Image
                                                    source={item.user_avatar}
                                                    style={{ width: 45, height: 45, borderRadius: 70 }}
                                                />
                                                <Text style={{color:'white',fontWeight:'600',fontSize:18}}>Arrayn Patel </Text>
                                                <TouchableOpacity style={{width:70,height:20,backgroundColor:'white',borderRadius:5}}>
                                                    <Text style={{color:'black',textAlign:'center',fontSize:12,fontWeight:'600'}}>Follow</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <Text style={{
                                                width:width * 0.8,
                                                color:'white',
                                                fontSize:12,
                                                fontWeight:'500',
                                                lineHeight:15.8
                                            }}>Lorem ipsum dolor sit amet consectetur. Lectus cursus blandit integer tellus pellentesque consequat tincidunt...</Text>
                                        </Pressable>
                                    </View>
                                )}
                            </IndexProvider>
                        )}
                    />
                )}
            </OffsetYProvider>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})