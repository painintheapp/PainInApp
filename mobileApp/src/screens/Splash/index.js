//import liraries
import React, { Component, useEffect } from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Color from '../../components/Colors'
import Button from '../../components/Button'
import StatusBar from '../../components/StatusBar'
const Index = ({ navigation }) => {


    return (
        <LinearGradient
            start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
            colors={['#BBD2F3', '#10458B', '#438AD1']}
            style={styles.linearGradient}>
            <StatusBar />
            <View style={styles.headerView}>
                <Text style={styles.headerText}>PAIN IN THE APP</Text>
                <Text style={[styles.headerText, { fontSize: 25, marginVertical: 15 }]}>a chronic pain management tool</Text>
            </View>
            <View style={styles.bodyView}>
                <Image
                    resizeMethod='resize'
                    source={require('../../components/images/logo.png')}
                    style={{ width: 250, height: 230 }}

                />
            </View>

            <View style={styles.fotterView}>
                <Button
                    name='SIGN UP'
                    onPress={()=>navigation.navigate('SignUp')}
                    backgroundColor={Color.White}
                />
                <Button
                    name='LOG IN'
                    onPress={()=>navigation.navigate('Login')}
                    backgroundColor={Color.lightblue}
                />
            </View>



        </LinearGradient>
    );
};


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,

    },
    headerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    bodyView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    fotterView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    headerText: {
        fontSize: 40
    }

});


export default Index;
