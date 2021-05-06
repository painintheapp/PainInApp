//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet ,Platform} from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import StatusBar from '../../components/StatusBar'

const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
const Index = ({navigation}) => {

    const [isSelected, setisSelected] = useState()

    var radio_props = [
        {label: 'Aching', value: 0 },
        {label: 'Cramping', value: 1 },
        {label: 'Fearful', value: 2 },
        {label: 'Gnawing', value: 3 },
        {label: 'Heavy', value: 4 },
        {label: 'Hot or burnning', value: 5 },
        {label: 'Sharp', value: 6 },
        {label: 'Shooting', value: 7 },
        {label: 'Sickening', value: 8 },
        {label: 'Splitting', value: 9 },
        {label: 'Stabbing', value: 10 },
        {label: 'Punishing or cruel', value: 11 },
        {label: 'Tender', value: 12 },
        {label: 'Throbbing', value: 13 },
        {label: 'Tiring or exhausting', value: 0 },
        
      ];
      const changeRadioState = (data) => {
        navigation.navigate('EmotionalAniexty')
        setisSelected(data)
    }


    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='PAIN SYMTOMS'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerText} >CHARACTER OF PAIN</Text>
            <View style={styles.footerView}>
            <Radio
            
                radio_props={radio_props}
                onReadioSelect={changeRadioState}
                />
                <View style={{ bottom: Platform.OS==='ios'? 0:30 }}>
                <Text style={{...styles.headerText,textAlign:'center'} } > PLEASE CLICK EVERY TYPE THAT YOU ARE CURRENTLY FEELING </Text>
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
    headerText: {
        fontSize: 20,
        padding: 20,
    },
    footerView: {
        flex: 1,
       // padding: 10,
    }
});

//make this component available to the app
export default Index;
