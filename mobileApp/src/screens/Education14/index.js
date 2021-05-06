//import liraries
import React, { Component,useState } from 'react';
import { View, Text,ScrollView, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import CheckBox from '../../components/CheckBox'
import StatusBar from '../../components/StatusBar'
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
                onPress={()=>navigation.navigate('Education16')}
                onPress1={() => navigation.goBack()}
                backgroundColor={Color.darkBlue}
                text='EDUCATION'
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headertext}>COMPLEMENTARY & ALTERNATIVE THERAPY</Text>
            <Text style={[styles.headertext, { paddingHorizontal: 5, alignSelf: 'flex-start', }]}>MEDICAL MARIJUANA</Text>
            <ScrollView onScrollEndDrag={()=>setisVisible(true) }>
            <Text style={styles.text}>Studies have also shown the benifits of medical marijuana fo treating chronic pain.Compared to other treatments,this methid of pain managemenet is less invasive and may be a better alternative for those avoiding the cost and invasivness of surgery.Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.Pain is flet when special nerves that detect tissue damages and send signals to transmit information about the damage along the spinal cord to the brain.  </Text>
            </ScrollView>

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
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headertext: {
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',
        marginVertical: 20
    },
    text: {
        paddingHorizontal: 5,
        fontSize: 15
    },
    whiteBackgroundView: {
        backgroundColor: Color.White,
        position:'absolute',
        // zIndex:1,
        bottom:20,
        alignSelf: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        alignItems: 'center',
        width: '75%',
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
