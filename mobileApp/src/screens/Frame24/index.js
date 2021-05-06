//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({ navigation }) => {

    var radio_props = [
        { label: 'PRESCRIPTION', value: 0 },
        { label: 'OVER THE COUNTER', value: 1 },
        { label: 'NONE', value: 2 },
    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
navigation.navigate('Frame26')
        setisSelected(data)
    }

    const [Input, setInput] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                onPress1={() => navigation.goBack()}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='MEDICATION'
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerView}>WHICH YOU TAKE PRESCRIPTION OR OVER THE COUNTER MEDICATION TODAY?</Text>
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
        width: '100%',
        padding: 10,
        height: '8%',
        backgroundColor: Color.White
    }
});

//make this component available to the app
export default Index;
