import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../../assets/types/Colors'


const Chefslogin = ({ navigation }) => {
    const [inputPassword, setInputPassword] = useState('');

    const validateLogin = () => {
        const correctPassword = 'Chef2024';  
        if (inputPassword === correctPassword) {
            navigation.navigate('Chefsmenu');
        } else {
            Alert.alert('Error', 'Incorrect password. Please try again.');
        }

    
    };
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    <LinearGradient
        colors={[Colors.SimianDarkBlue, Colors.SimianBlue]}
              style={styles.Background} />
         
         <KeyboardAvoidingView>
              <View style={styles.WelcomeSection}>
              <TouchableOpacity style={styles.backbutton} onPress={()=> navigation.navigate('Home')}>
              <Image source={require('../../assets/icons/arrow-square-left.png')} style={styles.backbuttonicon}/>
              </TouchableOpacity>
              <Image source={require('../../assets/icons/BBQ.png')} style={{ width: 233, height: 233 }} />
              <Text style={styles.Pager}>
                    Christoffel’s Kitchen.
                  </Text>
              <View style={styles.login}>
                  <Text style={styles.Text}>
                      Welcome back chef!
                  </Text>
                     
                      <TextInput
                          secureTextEntry value={inputPassword}
                          placeholder='Password' style={styles.password}
                          onChangeText={setInputPassword} />

                  <TouchableOpacity style={styles.loginButton} onPress={validateLogin}>
                      <Text style={styles.prompt}>
                          Login
                      </Text>
                  </TouchableOpacity>
                      
                  
              </View>
          </View>
          </KeyboardAvoidingView>
    </View>
  )
}

export default Chefslogin
const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Colors.SimianBlue,
        
       
    },
    Background: {
        height: '75%',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,

    },
    pagecontainer: {
        backgroundColor: 'transparent',
        
    },

    backbutton: {
        padding: 20,
        alignSelf: 'flex-start',
        right: 20,
        top: 90,
        
    },

    backbuttonicon: {
        width: 50,
        height: 50,
    },

    Pager: {
        fontFamily: 'Baithe',
        fontSize: 20,
        padding: 10,
        marginHorizontal: 10,
        color: 'white'
    },

    Icons: {
        width: 34,
        height: 34,
        
    
    },

    WelcomeSection: {
        alignItems: 'center',
        padding: 30,
        bottom: 120,
        
        
    },

    Text: {
        fontSize: 40,
        fontFamily: 'Baithe',
        color: 'white'
    },

    login: {
        padding: 20,
        alignItems: 'center',
        width: 300,
        height: 300,
        backgroundColor: Colors.SimianBlue,
        borderRadius: 20,
        gap: 10,
    },

    prompt: {
        fontFamily: 'Helvetica-LightOblique',
        color: 'white',
       
        
    },

    password: {
        padding: 20,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'flex-start'
    },

    loginButton: {
        padding: 20,
        backgroundColor: Colors.MatteBlack,
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
        
    }
})