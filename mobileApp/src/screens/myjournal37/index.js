//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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
                text='PAINLES'
                // onPress={()=>navigation.navigate('myJournals36')}
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
            <Text style={styles.headertext}>Insights</Text>
            <Text style={[styles.headertext,{fontSize:15,marginVertical:0}]}>PAIN SYMPTOMS_WEEKLY METRICS</Text>
            <View style={styles.graphView}>
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
            <View style={styles.drView}>
                <View style={styles.drimageView}>
                    <Image
                    style={{width:50,height:50}}
                    source={{uri:'https://cdn.pixabay.com/photo/2017/05/15/23/47/stethoscope-icon-2316460_960_720.png'}}
                    />
                    <Text style={{ marginLeft:10,fontSize:15 }}>PAIN MANAGEMENT MD</Text>
                </View>
                <Text style={{ padding:10 }}>Your throbbing pain can attribute to the activity increase.Try to sleep facing up to alleviate pain.</Text>
                <Text style={{ padding:10 }}>Lower Dosage in Gabibenton</Text>
                <Text style={{ padding:10 }}>Keep usoing Ice</Text>

            </View>
            </View>
             
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:Color.backGround
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
    graphView:{
        width:'70%',
        marginVertical:20,
        height: 200,
        padding:10, 
        backgroundColor:Color.White, 
        flexDirection: 'row' 

    },
    drView:{
        width:'95%',
        
        paddingHorizontal: 10,
        
        backgroundColor:'#E8F1FE'
    },
    drimageView:{
        padding: 10,
        alignItems: 'center',
        flexDirection:'row',
    }
});

//make this component available to the app
export default Index;
