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
        { label: 'CAREGIVING', value: 1 },
        { label: 'STRENUOUS EXERCISE', value: 2 },
        { label: 'RUNNING', value: 3 },
        { label: 'DRIVING', value: 4 },
        { label: 'WORKING', value: 5 },
        { label: 'SOCIAL MEDIA', value: 6 },
        { label: 'COOKING', value: 7 },
        { label: 'OTHER', value: 8 },
    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('')

        setisSelected(data)
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='OVEREXERTION'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text  style={styles.headerView}>According to BLS,workplace overexertion i an event or an exposure that leads to an injury due to excessive physical effort such as lifting ,pulling ,pushing,turniung,wielding,holding carrying or throwing.</Text>
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
