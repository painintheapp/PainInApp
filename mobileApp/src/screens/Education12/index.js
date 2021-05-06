//import liraries
import React, { Component,useState } from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
import CheckBox from '../../components/CheckBox'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
// create a component
const Index = ({navigation}) => {
    const [isVisible, setisVisible] = useState(false)
    return (
        <View style={styles.container}>
            
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                onPress1={() => navigation.goBack()}
                onPress={()=>navigation.navigate('Education13')}
                backgroundColor={Color.darkBlue}
                text='EDUCATION'
                textColor={Color.White}
                fontSize={25}

            /> 
            <Text style={styles.headertext}>SURGERY</Text>
            <ScrollView onScrollEndDrag={()=>setisVisible(true)}>
            <Text style={[styles.headertext,{paddingHorizontal: 5, alignSelf: 'flex-start',}]}>SURGERY</Text>
            <View>
            <Text style={styles.text}>Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.  
            Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.  
            Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.  
            Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain. Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.   </Text>
            </View>
            {isVisible ?
                <View style={styles.whiteBackgroundView}>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>HAVE YOU TRIED THIS? </Text>
                    <View style={styles.checkboxView}>
                        <CheckBox
                            text='Y'
                            value={''}
                            onValueChange={() => { }}

                        />
                        <CheckBox
                            text='N'
                            value={''}
                            onValueChange={() => { }}
                        />
                    </View>

                </View> : null}
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
    headertext:{
        fontSize:20,
        fontWeight:'500',
        alignSelf: 'center',
        marginVertical:20
    },
    text:{
        paddingHorizontal: 5,
        fontSize:15
    },
    whiteBackgroundView: {
        backgroundColor: Color.White,
        // position:'absolute',
        // zIndex:1,
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        width: '75%',
        bottom: 0,
        flexDirection: 'row',
        height: 50

    },
    checkboxView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Index;
