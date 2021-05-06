//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
import Radio from "../../components/Radio2";
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
const Index = ({navigation}) => {
    var radio_props = [
        { label: 'NUTRITIONIST', value: 0 },
        { label:'MASSAGE THERAPIST', value: 1 },
        { label:'CHIROPRACTOR', value: 2 },
        { label:'PERSONAL TRAINER', value: 3 },
        { label:'YOGA INSTRUCTOR', value: 4 },
        { label:'ACUPNCURIST', value: 5 },
        { label:'PHYSICAL THERAPIST', value: 6 },
        { label:'OCCUPATIONAL THERAPIST', value: 7 },
        { label:'NONE', value: 8 },


    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('Frame19')
        setisSelected(data)
    }
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='ALTERNATE THERAPY'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerView}>WHICH ALTERNATE THERAPIST DID YOU SEE TODAY?</Text>
            <View style={styles.parentView}>
            <Radio 
                    radio_props={radio_props}
                    onReadioSelect={changeRadioState}
                />
                
              
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
    headerView: {
        fontSize: 20,
        marginVertical: 40,
        padding: 10,
    },
    parentView: {
        flex: 1,
        paddingHorizontal: 30,
        
    }
});

//make this component available to the app
export default Index;
