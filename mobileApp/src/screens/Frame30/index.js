//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";

const Index = ({ navigation }) => {
    const [Checkbox1, setCheckbox1] = useState(false)
    const [Checkbox2, setCheckbox2] = useState(false)
    const [Checkbox3, setCheckbox3] = useState(false)
    const [Checkbox4, setCheckbox4] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='PAIN IN THE APP'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerText}>
                My Journal
            </Text>
            <View style={styles.bodyView}>

                <Text style={styles.text}>Symptoms-Throbbing.Aching</Text>
                <Text style={styles.text}>Body Location-Head,neck,Lower Back</Text>
                <Text style={styles.text}>Trigger Poits-Heavy Rain</Text>
                <Text style={styles.text}>Pain Specialist Treatment-None</Text>
                <Text style={styles.text}>Therapists Treatments-cbd Massage</Text>
                <Text style={styles.text}>Self Treatment-Ice,B12</Text>
                <Text style={styles.text}>Medication-Topamax 10 mg</Text>
                <Text style={styles.text}>Activities-Walking,Grocery Shopping</Text>
                <Text style={styles.text}>Rate Your Day 8</Text>
                <View style={styles.footerView}>
                    <Text style={[styles.text, { fontWeight: '600' }]}>PAIN MANAGEMENT TEAM</Text>
                    <View style={styles.imagesView}>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../components/images/contacts3x.png')}
                        />
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../components/images/contacts3x.png')}
                        />
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../components/images/contacts3x.png')}
                        />
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../../components/images/contacts3x.png')}
                        />

                    </View>
                    <View style={styles.imagesView}>
                        <Text style={[styles.text, { fontWeight: '600' }]}>A</Text>
                        <Text style={[styles.text, { fontWeight: '600' }]}>B</Text>
                        <Text style={[styles.text, { fontWeight: '600' }]}>C</Text>
                        <Text style={[styles.text, { fontWeight: '600' }]}>D</Text>


                    </View>
                    <View style={[styles.imagesView,{marginLeft:20}]}>
                        <CheckBox
                            onValueChange={value => setCheckbox1(value)}
                        />
                        <CheckBox
                            onValueChange={value => setCheckbox2(value)}
                        />
                        <CheckBox
                            onValueChange={value => setCheckbox3(value)}
                        />
                        <CheckBox
                            onValueChange={value => setCheckbox4(value)}
                        />

                    </View>
                    <Text>CLICK BOX AND SEND TO SUBMIT</Text>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Frame32')} activeOpacity={.7} style={styles.mailButton}>
                        <Image
                        resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                            source={require('../../components/images/feathermail.png')}
                        />

                    </TouchableOpacity>
                </View>


            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    headerText: {
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: '500',
        marginVertical: 20
    },
    bodyView: {
        flex: 1,
        padding: 20,

    },
    text: {
        marginVertical: 10,
        fontSize: 20,
    },
    footerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagesView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '70%'
    },
    mailButton: {
        backgroundColor: '#7FF68F',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
         position: 'absolute',
         zIndex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        right: 20,
        bottom:30

    }

});

//make this component available to the app
export default Index;
