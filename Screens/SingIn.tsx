import { View, Text, useColorScheme, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function SingIn() {
  const isDark = useColorScheme() === 'dark';
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const { goBack } = useNavigation<any>();
  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: isDark ? 'black' : 'white', height: height }]}>
        <View style={[styles.Main, { marginTop: '30%' }]}>
          <Text style={styles.Text}>Sign Up</Text>
          <Text style={{ opacity: 0.5, color: isDark ? 'white' : 'black', fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Welcome to Company Name</Text>
          <View style={{ width: width - 40, marginTop: 30, marginHorizontal:'auto' }}>

            <TextInput
              mode="outlined"
              label="Name"
              placeholder="Name"
              outlineColor={isDark ? 'gray' : 'black'}
              activeOutlineColor={isDark ? '#000000' : 'black'}
              outlineStyle={{
                borderRadius: 15,
                borderWidth: 1,
                width: '100%',
              }}
              style={{
                width: '100%',
                marginHorizontal: 'auto',
                fontWeight: "700",
                paddingLeft: 10,
                marginTop:20,
                backgroundColor:'white'
              }}
            />

            <TextInput
              mode="outlined"
              label="Phone Number"
              placeholder="Phone Number"
              outlineColor={isDark ? 'gray' : 'black'}
              activeOutlineColor={isDark ? '#000000' : 'black'}
              outlineStyle={{
                borderRadius: 15,
                borderWidth: 1,
                width: '100%',
              }}
              style={{
                width: '100%',
                marginHorizontal: 'auto',
                fontWeight: "700",
                paddingLeft: 10,
                marginTop:20,
                backgroundColor:'white'
              }}
            />

            <TextInput
              mode="outlined"
              label="Email"
              placeholder="Email"
              outlineColor={isDark ? 'gray' : 'black'}
              activeOutlineColor={isDark ? '#000000' : 'black'}
              outlineStyle={{
                borderRadius: 15,
                borderWidth: 1,
                width: '100%',
              }}
              style={{
                width: '100%',
                marginHorizontal: 'auto',
                fontWeight: "700",
                paddingLeft: 10,
                marginTop:20,
                backgroundColor:'white'

              }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', marginTop: 20 }}>
              <TextInput
                mode="outlined"
                label="Password"
                placeholder="Password"
                outlineColor={isDark ? 'gray' : 'black'}
                activeOutlineColor={isDark ? '#000000' : 'black'}
                outlineStyle={{
                  borderRadius: 15,
                  borderWidth: 1,
                  width: '100%',
                  overflow: 'hidden'
                }}
                style={{
                  width: '100%',
                  marginHorizontal: 'auto',
                  fontWeight: "700",
                  paddingLeft: 10,
                backgroundColor:'white'

                }}
              />
              <Image
                source={require('../assets/Images/eyeSeen.png')}
                style={{ width: 22, height: 15.5, position: 'absolute', right: '8%', }}
              />
            </View>
            
          </View>
          <TouchableOpacity style={styles.BTN} >
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:10}}>
            <Text style={{fontWeight:'600'}}>Already Have Account?</Text>
            <TouchableOpacity onPress={()=>goBack()}>
              <Text style={{textDecorationLine:'underline',color:'#3F74FD',fontWeight:'600',fontSize:14,marginLeft:5}}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    // justifyContent: 'center',
  },
  Main: {

  },
  Text: {
    color: '#3F74FD',
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center'
  },
  BTN: {
    width: '90%',
    marginHorizontal: 'auto',
    backgroundColor: '#3F74FD',
    height: 60,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  BTNs: {
    width: '90%',
    marginHorizontal: 'auto',
    height: 60,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#3F74FD',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',

  }
})