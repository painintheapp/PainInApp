//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const search = require('../../components/images/search2x.png')
const menu2 = require('../../components/images/menu2.png')

const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                backgroundColor={Color.darkBlue}
                text='MY JOURNAL'
                textColor={Color.White}
                fontSize={25}
                image={menu2}
                image2={search}
                onPress1={() => navigation.openDrawer()}
            />
            <Image
                resizeMethod='resize'
                // resizeMode='contain'
                style={{ width: "100%", height: "30%", alignItems: 'center', }}
                source={require('../../components/images/nature.png')}
            />

            <Text numberOfLines={2} style={styles.headerText}>HI,PATTY-ARE YOU READY TO START TODAYS JOURNAL</Text>


            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('Frame4')} style={styles.ButtonAccept}>
                    <Text style={styles.buttonText}>START</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('Frame2')} style={styles.ButtonAccept}>
                    <Text style={styles.buttonText}>HISTORY</Text>
                </TouchableOpacity>
            </View>


        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Color.backGround
    },
    headerText: {
        fontSize: 23,
        marginVertical: 60,
        textAlign: 'center'

    },
    ButtonAccept: {
        backgroundColor: Color.White,
        width: '35%',
        height: 70,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10

    },
    buttonText: {
        fontSize: 20
    },
    buttonView: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Index;
