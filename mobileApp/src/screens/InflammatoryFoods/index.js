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
        { label: 'SUGAR', value: 0 },
        { label: 'CANDY', value: 1 },
        { label: 'SALT', value: 2 },
        { label: 'CHIPS', value: 3 },
        { label: 'WHITE BREAD', value: 4 },
        { label: 'LARD', value: 5 },
        { label: 'BIRTHDAY CAKE', value: 6 },
        { label: 'FRIED FOOD', value: 7 },
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
                text='INFLAMMATORY FOODS'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={23}

            />
            <Text  style={styles.headerView}>Foods that cause inflammation refend carbohydrates such as white bread and pasteries,fresnch fries and other fried foods,soda and other sugar-sweetend beverages.red meat (burgers,steaks) and processed meat (hot dogs sausage) margrain shorening and lard.</Text>
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
        marginTop: 40
    },
    parentView: {
        flex: 1,
        // borderWidth:1
    }
});

//make this component available to the app
export default Index;
