//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import TextInput from '../../components/TextInput'
import Radio from "../../components/Radio2";
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({navigation}) => {
    const [ExplainText, setExplainText] = useState('')
    var radio_props = [
        { label: 'STRONG WINDS', value: 0 },
        { label: 'HEAVY RAIN', value: 1 },
        { label: 'COLD TEMPRETURE', value: 2 },
        { label: 'FREEZING TEMPRETURE', value: 3 },
        { label: 'SNOW STORM', value: 4 },
        { label: 'HEAT WAVE', value: 5 },
        
       
    ];

    const [isSelected, setisSelected] = useState()

    // const mydata=route.params.data

    const changeRadioState = (data) => {
        navigation.navigate('Frame15')

        setisSelected(data)
    }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='TRIGGERS'
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text numberOfLines={3} style={styles.headerView}>Patty,it seems like the tempreture swing was your primary trigger.What was the eather like on this day?</Text>
            <View style={styles.parentView}>
            <Radio
                    radio_props={radio_props}
                    onReadioSelect={changeRadioState}
                />
            </View>
            <View style={{ marginTop:10, width:'90%', alignItems: 'center', flexDirection:'row', justifyContent:'space-between', alignSelf:'center'}}>
                <Text>OTHER</Text>
                <View style={{ justifyContent:'center' , backgroundColor:Color.White,width:'70%',height:40  }}>
                    <TextInput
                    placeholder='PLEASE EXPLAIN'
                    placeholderTextColor='#000'
                    style={{paddingLeft:10}}
                    multiline={true}
                    onChangeText={(text)=>setExplainText(text)}
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
        fontSize: 20, 
        padding: 10,
        marginVertical: 40
    },
    parentView: {
        // flex: 1,
        // borderWidth:1
    }
});

//make this component available to the app
export default Index;
