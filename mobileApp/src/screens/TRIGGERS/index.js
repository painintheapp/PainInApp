//import liraries
import React, { Component, useState } from 'react';
import { View, Text,ScrollView, StyleSheet,TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const data=[
    'Jets and crafts',
    "banking",
    'blood work',
    'caring for children',
    'caring for family',
    'caring for pets',
    'cleaning or housework',
    'Cooking',
    'Dental Hygiene',
    'dining out',
    'Jets and crafts',
    "banking",
    'blood work',
    'caring for children',
    'caring for family',
    'caring for pets',
    'cleaning or housework',
    'Cooking',
    'Dental Hygiene',
    'dining out'
]



const Index = ({navigation}) => {
  

    
   
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='SLEEPING HABITS'
                onPress={()=>navigation.navigate('SleepingHabits')}
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <ScrollView>
            <Text style={styles.headerView}>PHYSICAL TRIGGERS</Text>
            <View style={styles.parentView}>
                {
                    data.map((item,index)=>{
                        return <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                        <Text style={styles.text} key={index}>{item}</Text>
                        </TouchableOpacity>
                    })
                }
          
                
              
            </View>
            </ScrollView>

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
       // paddingHorizontal: 30,
        
    },
    text:{
        fontSize:16,
        marginVertical:2
    }
});

//make this component available to the app
export default Index;
