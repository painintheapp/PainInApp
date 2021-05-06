//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity, StyleSheet } from 'react-native';
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
                text='COMMUNITY'
                textColor={Color.White}
                fontSize={25}

            />
            <View style={styles.headerTextView}>
              
            </View>
            <View style={styles.buttonParentView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>COMPLEX REGIONAL PAIN SYNFROM (RSD)</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={[styles.buttontext,{textAlign:'center'}]} >EHLERS-DANLOS SYNDROM (EDS)</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>HYDROCEPHALUS</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >MULTIPLE SCELROSIS</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>SCIATICA</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('CommunityDiscussion4')} style={styles.button} >
                        <Text style={styles.buttontext} >SYRINGOMYELIA</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>TETHERED CORD</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >WHIP</Text>

                    </TouchableOpacity>

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
    buttonParentView:{
        flex:1,
        marginTop:30,
        
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
       fontWeight:'500',
       textAlign:'center'

    },
    headerTextView:{
        width:'100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        
        backgroundColor: '#81b5e3',
    },
    headerText:{
        fontSize:18,
        fontWeight:'bold'
    }
    
});

//make this component available to the app
export default Index;
