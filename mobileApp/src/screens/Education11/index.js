//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity,ScrollView ,StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                onPress1={() => navigation.goBack()}
                backgroundColor={Color.darkBlue}
                text='PAINLESS'
                textColor={Color.White}
                fontSize={25}

            />
             <View style={styles.buttonParentView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('Education12')} style={styles.button} >
                        <Text style={styles.buttontext}>SURGERY</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={[styles.buttontext,{textAlign:'center'}]} >COMPLEMENTARY & ALTERNATIVE THERAPY</Text>

                    </TouchableOpacity>

                </View>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={[styles.button,{width:'70%',height:70,marginTop:30}]} >
                        <Text style={[styles.buttontext,{textAlign:'center'}]} >SOCIAL REPORT</Text>

                    </TouchableOpacity>
                </View>




        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    buttonParentView:{
        flex:1,
        marginTop:30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonView:{
        width:'99%',
        flexDirection:'row',
        marginVertical:10,
        justifyContent: 'space-between',
    },
    button:{
        width:'49%',
        backgroundColor:Color.White,
        height:100,
        borderColor:'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
   buttontext:{
       fontSize:15,
       fontWeight:'500'

    }
});

//make this component available to the app
export default Index;
