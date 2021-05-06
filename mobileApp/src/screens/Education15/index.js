//import liraries
import React, { Component, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'

const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
const Index = ({navigation}) => {
   
    return (
        <View style={styles.container}>
            <View>
                <StatusBar />
                <HeaderView
                    image={backArrow}
                    image2={settings}
                    backgroundColor={Color.darkBlue}
                    text='PAINLES'
                    onPress1={() => navigation.goBack()}
                    textColor={Color.White}
                    fontSize={25}

                />
                <View style={styles.aboutpainView}>
                    <Text style={styles.text}>COMLEMENTARY & ALTERNATIVE THERAPY</Text>
                </View>
                <View style={styles.aboutPainView}>
                    <ScrollView>
                        <Text style={styles.aboutpaintext}>The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste.The use pf CBD oil may also help relive pain symptoms assocaited with CM .CBD oil may be takien orally,as a mixer into food or rinks or can be sed from a pipette dropper,or skin paste</Text>
                    <View style={{ height:20 }}/>
                    </ScrollView>
                </View>
            </View>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
        justifyContent: 'space-between',
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
    text: {
        fontSize: 18,
        fontWeight: '600'
    },
    aboutPainView: {
        alignSelf: 'center',
        width: '100%',
        padding: 10,
        marginTop: 20,

    },
    aboutpaintext: {
        fontSize: 18,
        fontWeight: '600'
    },
    whiteBackgroundView: {
        backgroundColor: Color.White,
        position:'absolute',
        // zIndex:1,
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        width: '75%',
        bottom: 20,
        flexDirection: 'row',
        height: 50

    },
    checkboxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Index;
