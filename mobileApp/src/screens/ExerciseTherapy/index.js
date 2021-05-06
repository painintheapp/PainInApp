//import liraries
import React, { Component, useState } from 'react';
import { View, Text,ScrollView, StyleSheet,TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({navigation}) => {
  

    
   
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='EXERCISE THERAPY'
                onPress={()=>navigation.navigate('Frame29')}
                onPress1={()=>navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <ScrollView>
            <View style={styles.parentView}>
            <Text style={styles.text}>PAerobic</Text>
            <Text style={styles.text}>Walking</Text>
            <Text style={styles.text}>Dancing</Text>
            <Text style={styles.text}>Swimming</Text>
            <Text style={styles.text}>Water aerobics</Text>
            <Text style={styles.text}>jogging and running</Text>
                
                
              
            </View>
            <View style={styles.parentView}>
            <Text style={styles.text}>PAerobic</Text>
            <Text style={styles.text}>Walking</Text>
            <Text style={styles.text}>Dancing</Text>
            <Text style={styles.text}>Swimming</Text>
            <Text style={styles.text}>Water aerobics</Text>
            <Text style={styles.text}>jogging and running</Text>
                
                
              
            </View>
            <View style={styles.parentView}>
            <Text style={styles.text}>PAerobic</Text>
            <Text style={styles.text}>Walking</Text>
            <Text style={styles.text}>Dancing</Text>
            <Text style={styles.text}>Swimming</Text>
            <Text style={styles.text}>Water aerobics</Text>
            <Text style={styles.text}>jogging and running</Text>
                
                
              
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
    parentView: {
        width:'100%',
        padding:10,
        marginTop:20,
        
    },
    text:{
        fontSize:16,
        
    }
});

//make this component available to the app
export default Index;
