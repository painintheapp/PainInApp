//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
const Index = ({ navigation }) => {
    var radio_props = [
        { label: 'HEAT PAD', value: 0 },
        { label: 'ELECTRIC STIMULATOR', value: 1 },
        { label: 'CBD OIL', value: 2 },
        { label: 'ADJUSTMENT', value: 3 },
        { label: 'ULTRASOUND', value: 4 },
        { label: 'OTHER', value: 5 },

    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('Frame21')
        setisSelected(data)
    }

    const [Input, setInput] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='ALTERNATIVE THERAPY'
                textColor={Color.White}
                onPress1={() => navigation.goBack()}
                fontSize={25}

            />
            <Text style={styles.headerView}>WHICH TREATMENT DID THE CHIROPRACTOR Apply?</Text>
            <View style={styles.parentView}>

                <Radio
                    radio_props={radio_props}
                    onReadioSelect={changeRadioState}
                />


                <Text style={styles.text}>PLEASE TYPE IN</Text>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder='Type here'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setInput(text)}
                        style={{ padding: 10, Width: Platform.OS === 'ios' ? 0 : '70%', height: Platform.OS === 'ios' ? 40 : 40 }}
                    />

                </View>

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
        fontSize: 18,
        marginVertical: 40,
        padding: 10,
    },
    parentView: {
        flex: 1,


    },
    text: {
        fontSize: 18,
        padding: 15,
    },
    inputView: {
        justifyContent: 'center',
        width: '100%',
        padding: 10,
        ...Platform.select({
            'android': {
                height: '12%',

            }, 'ios': {
                height: '8%',
            }
        }),
       
        backgroundColor: Color.White
    }
});

//make this component available to the app
export default Index;
