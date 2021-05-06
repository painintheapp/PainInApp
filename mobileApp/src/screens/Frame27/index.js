//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({navigation}) => {
    var radio_props = [
        { label: 'GROCERY SHOPPING', value: 0 },
        { label: 'WALKING', value: 1 },
        { label: 'BENDING', value: 2 },
        { label: 'VACCUMING', value: 3 },
        { label: 'SWEEPING', value: 4 },
        { label: 'CLEANING THE RESTROOM', value: 5 },
        { label: 'CARRYING A BABY', value: 6 },
        { label: 'TYPING AT A DESK', value: 7 },
        { label: 'DRIVING', value: 8 },
    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('TRIGGERS')

        setisSelected(data)
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='ACTIVITY'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text numberOfLines={3} style={styles.headerView}>Activity is labeled as any movements made throughtout the day.To the best of your knowledge base, what did you do today</Text>
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
        padding: 10,
        marginVertical: 40
    },
    parentView: {
        flex: 1,
        // borderWidth:1
    }
});

//make this component available to the app
export default Index;
