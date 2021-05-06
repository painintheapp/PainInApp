import React, { Component,useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity  } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import Color from '../../components/Colors'
import Radio from '../../components/Radio2'
import StatusBar from '../../components/StatusBar'
const setting = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({ navigation, route }) => {

    var radio_props = [
        {label: 'YES', value: 0 },
        {label: 'NO', value: 1 },
        
      ];

    const [isSelected, setisSelected] = useState()
    
    // const mydata=route.params.data

      const changeRadioState = (data) => {
          
          setisSelected(data)
      }

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                backgroundColor={Color.darkBlue}
                image={backArrow}
                onPress1={()=>navigation.goBack()}
                height='10%'
                fontSize={30}
                image2={setting}
                text='CONDITIONS'
                textColor={Color.White}
            />
            <Text style={styles.ConditionText}>SYRINGOMTELIA</Text>
            <Text style={{ marginTop: 15 }}>This condition has been added to your journal.Do you suffer form any other CONDITIONS ?</Text>
            <View style={styles.radioView}>
                <Radio
                radio_props={radio_props}
                onReadioSelect={changeRadioState}
                />
                
            </View>
           
                <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('Conditions')} style={styles.ButtonAccept}>
                    <Text style={styles.buttonText}>ACCEPT</Text>
                </TouchableOpacity>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    ConditionText: {
        color: 'green',
        marginTop: 40,
        fontSize: 30,
        fontWeight: '600'
    },
    ButtonAccept:{
        backgroundColor:Color.White,
        width:'35%',
        bottom:30,
        height:70,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'80%'
    },
    radioView:{
      marginTop:50,
        alignItems: 'center',
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       
    },
    buttonText:{
        fontSize:20
    }
});


export default Index;
