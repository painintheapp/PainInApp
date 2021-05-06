//import liraries
import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Platform, ScrollView, StyleSheet } from 'react-native';
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
            <Text style={styles.headerText}>COMPLEMENTARY & ALTERNATIVE THERAPY</Text>
            {Platform.OS==='android'?
            <ScrollView>
                 <View style={styles.buttonParentView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('Education14')} style={styles.button} >
                        <Text style={styles.buttontext}>Muscle Relaxers,Analgescics,and Soft Collars</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >Botox Injections</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>Alternative Medical Systems</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >Biologically Based Therapies</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>Manipulative & Body Based Methods</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >Energy Therapies</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>Mind-Body Inerventions</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext} >Medical Merijuana</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>Diet</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                        <Text style={styles.buttontext}>Modifiy physical activity</Text>

                    </TouchableOpacity>

                </View>



                </View>

            </ScrollView>:
            <View style={styles.buttonParentView}>
            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Muscle Relaxers,Analgescics,and Soft Collars</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext} >Botox Injections</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Alternative Medical Systems</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext} >Biologically Based Therapies</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Manipulative & Body Based Methods</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext} >Energy Therapies</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Mind-Body Inerventions</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('Education14')} style={styles.button} >
                    <Text style={styles.buttontext} >Medical Merijuana</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Diet</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button} >
                    <Text style={styles.buttontext}>Modifiy physical activity</Text>
                </TouchableOpacity>
            </View>
            </View>
            }
            
           
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
       textAlign:'center',
       fontWeight:'500'

    },
    headerText:{
        alignSelf: 'center',
        fontSize: 15,
        marginVertical:30
    }
    
});

export default Index;
