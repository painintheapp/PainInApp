//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import Radio from "../../components/Radio2";
import CalendarPicker from 'react-native-calendar-picker';
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
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='MY JOURNAL'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerText}>
                TRENDS
            </Text>
            <View style={styles.bodyView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('Frame33')}>
                    <Text style={styles.text}>SYMPTOMS-Throbbing.Aching</Text>
                </TouchableOpacity >
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>BODY LOCATION-head,neck,Lower Back</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('TriggerTrends')}>
                    <Text style={styles.text}>TRIGGER -Heavy Rain</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>PAIN SPECIALIST TREATMENT-None</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>THERAPISTS TREATMENTS-cbd Massage</Text>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>SELF TREATMENT-Ice</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>MEDICATION-Topamax 10 mg</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>ACTIVITIES-Walking,Grocery Shopping</Text>

                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}}>
                    <Text style={styles.text}>RATE YOUR DAY 8</Text>
                </TouchableOpacity>




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
        backgroundColor: 'green',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
        // position: 'absolute',
        zIndex: 1,

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        right: 20,
        bottom: 30

    }

});

//make this component available to the app
export default Index;
