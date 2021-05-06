//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TextInput from '../../components/TextInput'
import Button from "../../components/Button";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const Index = ({ navigation }) => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ShowPassword, setShowPassword] = useState(false)




    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['#BBD2F3', '#10458B', '#438AD1']}
            style={styles.linearGradient}>
                 <StatusBar  />
            <SafeAreaView />
            <View style={styles.headerView}>
                <Text style={styles.headerText} >PAIN IN THE APP</Text>
                <Text style={[styles.headerText, { fontSize: 20, marginTop: 10, color: '#262522' }]} >a chronic pain management tool</Text>

            </View>
            <View style={styles.footerView}>
                <Text style={[styles.headerText, { fontWeight: '200' }]} >Login</Text>
                <View style={styles.fullNameView}>
                    <TextInput
                        placeholder='Email'
                        autoCorrect={false}
                        style={styles.TextInput}
                        onChangeText={(text) => setEmail(text)}
                    />


                </View>


                <View style={[styles.fullNameView, { justifyContent: 'space-between', flexDirection: 'row' }]}>
                    <TextInput
                        placeholder='Password'
                        autoCorrect={false}
                        secureTextEntry={ShowPassword ? true : null}
                        style={[styles.TextInput, { width: '90%' }]}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TouchableOpacity onPress={() => setShowPassword(!ShowPassword)} >
                        <Text>{ShowPassword?'Show':'Hide'}</Text>
                        
                    </TouchableOpacity>

                </View>
                <Button
                onPress={()=>navigation.navigate('Drawer')}
                name='Sign in'
                color={Color.White}
               
                backgroundColor={Color.lightblue}
                />
                <View style={styles.signupView}>
                    <Text>Don't have an account ?</Text>
                     <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                <Text style={styles.signupButtonText}>Sign up</Text>

                </TouchableOpacity>
                </View>
               

            </View>

        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1
    },
    headerView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '500'
    },
    footerView: {
        flex: 2,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    fullNameView: {
        backgroundColor: Color.White,
        height: 50,
        paddingHorizontal: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,

    },
    TextInput: {
        width: '100%',
        paddingLeft: 10,
        fontSize: 20,
        height: 40
    },
    
    signupView:{
        flexDirection: 'row',
        width:'52%',
        alignSelf: 'center',
        marginTop:20,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    signupButtonText:{
        fontSize:15,
        color:Color.White
    }
});


export default Index;
