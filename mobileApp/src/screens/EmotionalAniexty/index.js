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
        { label: 'MISSED BILL PAYMENT', value: 0 },
        { label:'GOT FIRED', value: 1 },
        { label:'SOMEONE IS CHEATING', value: 2 },
        { label:'GOT SPEEDING TICKET', value: 3 },
        { label:'BREAKUP', value: 4 },
        { label:'ARGUMENT', value: 5 },
        { label:'FINAANCIAL BLUNDER', value: 6 },
        { label:'CAR ACCIDENT', value: 7 },
        { label:'DEATH IN FAMILY', value: 8 },


    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('Frame27')
        setisSelected(data)
    }
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='EMOTIONAL ANXIETY'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerView}>The Amierican Psycological Association(APA) defines anxiety as an emotion characterized feelings of tension,worried thoughts and physical changes like increased b;lood pressure. </Text>
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
        // padding: 10,
    },
    parentView: {
        flex: 1,
        paddingHorizontal: 30,
        
    }
});

//make this component available to the app
export default Index;
