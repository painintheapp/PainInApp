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
        { label: 'WENT TO SLEEP LATE', value: 0 },
        { label:'TOO MUCH CAFFEINE', value: 1 },
        { label:'TOSSED AND TURNED', value: 2 },
        { label:'NERVOUS', value: 3 },
        { label:'BABY CRYING', value: 4 },
        { label:'NIGHTMARE', value: 5 },
        { label:'LATE NITE SNACK', value: 6 },
        { label:'WORKING LATE', value: 7 },
        { label:'OTHER', value: 8 },


    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('TriggersStrongWinds')
        setisSelected(data)
    }
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='SLEEPING HABITS'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerView}>Sleep habits were defined as that behavior pertaining to time to bed ,time to rise ,drinkung coffe at night ,duration of night sleep and consumprtion of sleeping pills. </Text>
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
