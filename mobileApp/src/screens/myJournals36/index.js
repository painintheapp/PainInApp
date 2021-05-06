//import liraries
import React, { Component } from 'react';
import { View, Text,Image, StyleSheet, TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button2";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import CalendarPicker from 'react-native-calendar-picker';
const search2x = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')

import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import { Svg } from 'react-native-svg'
const data = [10,9,8,7,6,5,4,3,2,1,0]
const contentInset = { top: 20, bottom: 20 }
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <HeaderView
                image={backArrow}
                image2={search2x}
                backgroundColor={Color.darkBlue}
                text='MY JOURNAL'
                
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}
            />
             <Image
                resizeMode='stretch'
                style={{ width: '100%', alignSelf: 'center', height: '20%' }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg' }}
            />
            <View style={styles.bodyView}>
            <Text style={styles.headertext}>PAIN SYMPTOMS TRENDS</Text>
            <View style={{ marginTop:10,width:'100%',alignItems:'center' }}>
            <Text style={[styles.headertext,{fontSize:15,marginVertical:0}]}>WEEKLY GRAPH</Text>
            <View style={{ height: 200,padding:10, backgroundColor:Color.White, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    
                    svg={{ stroke: Color.darkBlue }}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
            </View>
            </View>
            <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('myJournals37')} style={styles.button}>
                <Text style={styles.buttonText}>CLICK FOR INSIGHTS</Text>
            </TouchableOpacity>
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
    bodyView:{
        flex: 1,
        alignItems: 'center',
        borderWidth:1
    },
    headertext:{
        fontSize:20,
        marginVertical:20,
        fontWeight:'600'
    },
    button:{
        width:'30%',
        padding: 10,
        backgroundColor:Color.White,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'500'
    }
});

//make this component available to the app
export default Index;
