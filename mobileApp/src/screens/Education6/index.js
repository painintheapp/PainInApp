//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = () => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='ABOUT PAIN'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <View style={styles.aboutpainView}>
                <Text style={styles.text}>ABOUT PAIN</Text>
            </View>
            <Text style={styles.headerView}>CAUSES</Text>
            <Text style={styles.Text}>Pain is felt when special nerves that detects tissu damage send singnal to transmit information about the damage along he spinal cord to the brain.These nerves are known as nociceptors,aThe brai then decides what to do about the pain. </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headerView: {
        fontSize: 20,
        marginVertical: 40,
        fontWeight: '500'
        // padding: 10,
    },
    aboutpainView: {
        width: '100%',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#8BC8F2'
    },
    Text: {
        fontSize: 16
    },
    text:{
        fontSize:20,
        fontWeight:'600'
    }
});

//make this component available to the app
export default Index;
