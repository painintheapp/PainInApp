//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';


import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";

const Index = ({ navigation }) => {
    const [painManagementdoctor, setpainManagementdoctor] = useState(false)
    const [neurologist, setneurologist] = useState(false)
    const [Neurosurgeon, setNeurosurgeon] = useState(false)
    const [primaryCarePhysician, setprimaryCarePhysician] = useState(false)
    const [ClinicalBehaviour, setClinicalBehaviour] = useState(false)
    const [None, setNone] = useState(false)

    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='PAIN IN THE APP'
                textColor={Color.White}
                onPress1={() => navigation.goBack()}
                fontSize={25}

            />
            <Text style={styles.headerText}>PAIN SPECIALIST THERAPY</Text>
            <Text style={[styles.headerText, { alignSelf: 'flex-start', fontWeight: '400', fontSize: 18, marginLeft: 15 }]}>Which specialist did you see today?</Text>
            <View style={styles.parentView}>
                <View style={{
                    alignItems: 'flex-start',
                }}>
                    <CheckBox
                        text='Pain Management doctor'
                        value={painManagementdoctor}
                        onValueChange={value => setpainManagementdoctor(value)}
                    />
                    <CheckBox
                        text='Neurologist'
                        value={neurologist}
                        onValueChange={value => setneurologist(value)}
                    />
                    <CheckBox
                        text='Neurosurgeon'
                        value={Neurosurgeon}
                        onValueChange={value => setNeurosurgeon(value)}
                    />
                    <CheckBox
                        text='Primary Care Physician'
                        value={primaryCarePhysician}
                        onValueChange={value => setprimaryCarePhysician(value)}
                    />
                    <CheckBox
                        text='Clinical Behaviour'
                        value={ClinicalBehaviour}
                        onValueChange={value => setClinicalBehaviour(value)}
                    />
                    <CheckBox
                        text='None'
                        value={None}
                        onValueChange={value => setNone(value)}
                    />
                </View>


            </View>
            <View style={styles.buttonView}>
                <Button
                    name='Next'
                    color={Color.White}
                    onPress={() => navigation.navigate('Frame18')}
                    backgroundColor={Color.darkBlue}
                    alignSelf='center'
                />
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
    headerText: {
        fontSize: 25,
        fontWeight: '600',
        alignSelf: 'center',
        marginVertical: 20
    },
    parentView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,

    },
    buttonView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 30
    }
});

//make this component available to the app
export default Index;
