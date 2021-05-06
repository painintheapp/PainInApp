//import liraries
import React, { Component,useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
import CalendarPicker from 'react-native-calendar-picker';
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')

const Index = ({navigation}) => {
    const [onDateChange, setonDateChange] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='ACTIVITY'
                onPress={()=>navigation.navigate('Frame32')}
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            
                 <Image
                resizeMode='stretch'
                style={{ width: '100%', alignSelf: 'center', height: '30%' }}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg' }}
            />
          
           

            <View style={styles.calenderVIew}>
                <CalendarPicker
                    startFromMonday={true}
                    //allowRangeSelection={true}
                    //minDate={minDate}
                    //maxDate={maxDate}
                    todayBackgroundColor="#f2e6ff"
                    selectedDayColor={Color.darkBlue}
                    selectedDayTextColor={Color.lightblue}
                    onDateChange={value=>setonDateChange(value)}
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    calenderVIew:{
        width:"100%",
        alignSelf: 'center',
        marginTop:30
    }
});

//make this component available to the app
export default Index;
