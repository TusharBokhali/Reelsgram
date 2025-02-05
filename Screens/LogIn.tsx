// import { View, Text, useColorScheme, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, } from 'react-native'
// import React from 'react'
// import { TextInput } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
// import Animated, { FadeIn, FadeInDown, FadeInLeft } from 'react-native-reanimated';
// import { createAnimatedComponent } from 'react-native-reanimated/lib/typescript/createAnimatedComponent';

// export default function LogIn() {
//   const isDark = useColorScheme() === 'dark';
//   const width = Dimensions.get('window').width;
//   const height = Dimensions.get('window').height;

//   const { navigate } = useNavigation<any>();
//   return (
//     <Animated.View entering={FadeInLeft.delay(200).duration(400)} style={[styles.container, { backgroundColor: isDark ? 'black' : 'white', }]}>
//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={{flex:1,height:height - height * 0.11,paddingTop:width * 0.3}}>
//           <Animated.Text entering={FadeInLeft.delay(200).duration(400)} style={styles.Text}>Log In</Animated.Text>
//           <Text style={{ opacity: 0.5, color: isDark ? 'white' : 'black', fontSize: 18, fontWeight: '500', textAlign: 'center' }}>Welcome to Company Name</Text>
//           <View style={{ width: width - 40, marginTop: 50, marginHorizontal: 'auto' }}>
//             <TextInput
//               mode="outlined"
//               label="Phone or Email"
//               placeholder="Phone or Email"
//               outlineColor={isDark ? 'gray' : 'black'}
//               activeOutlineColor={isDark ? '#000000' : 'black'}

//               outlineStyle={{
//                 borderRadius: 15,
//                 borderWidth: 1,
//                 width: '100%',
//               }}
//               style={{
//                 width: '100%',
//                 marginHorizontal: 'auto',
//                 fontWeight: "700",
//                 paddingLeft: 10,
//                 backgroundColor: 'white'
//               }}
//             />
//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <TextInput
//                 mode="outlined"
//                 label="Password"
//                 placeholder="Password"
//                 outlineColor={isDark ? 'gray' : 'black'}
//                 activeOutlineColor={isDark ? '#000000' : 'black'}
//                 outlineStyle={{
//                   borderRadius: 15,
//                   borderWidth: 1,
//                   width: '100%',
//                 }}
//                 style={{
//                   width: '100%',
//                   marginHorizontal: 'auto',
//                   fontWeight: "700",
//                   paddingLeft: 10,
//                   backgroundColor: 'white'
//                 }}
//               />
//               <Image
//                 source={require('../assets/Images/eyeSeen.png')}
//                 style={{ width: 22, height: 15.5, position: 'absolute', right: '8%', }}
//               />
//             </View>
//             <TouchableOpacity>
//               <Text style={{ width: '90%', marginHorizontal: 'auto', marginLeft: 25, marginTop: 10, fontSize: 14, fontWeight: '600' }}>Forget Password?</Text>
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity style={styles.BTN}  onPressOut={()=>  navigate('Verifications')}>
//             <Text style={{ color: 'white', fontSize: 24, fontWeight: '600', }}>Log In</Text>
//           </TouchableOpacity>

//           <Animated.View entering={FadeInDown.delay(400).duration(600)} style={{ position: 'absolute', bottom: 0, width: '100%' }}>
//             <TouchableOpacity style={[styles.BTNs]} onPress={() => navigate('SingIn')}>
//               <Text style={{ color: '#3F74FD', fontSize: 22, fontWeight: '400', }}>Create New Account</Text>
//             </TouchableOpacity>
//           </Animated.View>

//         </View>
//       </ScrollView>
//     </Animated.View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 15,
//   },
//   Text: {
//     color: '#3F74FD',
//     fontSize: 36,
//     fontWeight: '700',
//     textAlign: 'center'
//   },
//   BTN: {
//     width: '90%',
//     marginHorizontal: 'auto',
//     backgroundColor: '#3F74FD',
//     height: 60,
//     borderRadius: 75,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 40
//   },
//   BTNs: {
//     width: '90%',
//     marginHorizontal: 'auto',
//     height: 60,
//     borderRadius: 75,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 2,
//     borderColor: '#3F74FD',
//   }
// })

import React, { useState, useEffect } from 'react';
import { Button, TextInput } from 'react-native';
import auth from '@react-native-firebase/auth';

function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState<any>(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user: any) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber: any) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      const data = await confirm.confirm(code) ?? "";
      console.log("OTP Valid", data)
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+918155980336')}
      />
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

export default PhoneSignIn;