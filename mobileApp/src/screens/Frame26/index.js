//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'

const settings = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
import CheckBox from "../../components/CheckBox";
import { TouchableOpacity } from 'react-native-gesture-handler';

const Index = ({ navigation }) => {
    const [Gabibenton, setGabibenton] = useState(false)
    const [Anitrypline, setAnitrypline] = useState(false)
    const [Smithene, setSmithene] = useState(false)
    const [Codeine, setCodeine] = useState(false)
    const [Fetanyln, setFetanyln] = useState(false)
    const [Promax, setPromax] = useState(false)
    const [amountofDosage, setamountofDosage] = useState('')
    const [dosagePerPills, setdosagePerPills] = useState('')
    const [timesperday, settimesperday] = useState('')

    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                onPress1={() => navigation.goBack()}
                image2={settings}
                backgroundColor={Color.darkBlue}
                text='PAIN IN THE APP'
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerText}>Which medication did you take today?</Text>

            <View style={styles.parentView}>
                <View style={{
                    alignItems: 'flex-start',
                }}>
                    <CheckBox
                        text='Gabibenton'
                        value={Gabibenton}
                        onValueChange={value => setGabibenton(value)}
                    />
                    <CheckBox
                        text='Anitrypline'
                        value={Anitrypline}
                        onValueChange={value => setAnitrypline(value)}
                    />
                    <CheckBox
                        text='Smithene'
                        value={Smithene}
                        onValueChange={value => setSmithene(value)}
                    />
                    <CheckBox
                        text='Codeine'
                        value={Codeine}
                        onValueChange={value => setCodeine(value)}
                    />
                    <CheckBox
                        text='Fetanyln'
                        value={Fetanyln}
                        onValueChange={value => setFetanyln(value)}
                    />
                    <CheckBox
                        text='Promax'
                        value={Promax}
                        onValueChange={value => setPromax(value)}
                    />
                </View>


            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Amount of pills per dosage</Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor='#000'
                        onChangeText={text => setamountofDosage(text)}
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={{ backgroundColor: Color.White, textAlign: 'center', height: Platform.OS === 'ios' ? 30 : 35, width: '15%', paddingLeft: 5, }}

                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Dosage per pill (in mg) </Text>
                    <TextInput
                        placeholder='0'
                        placeholderTextColor='#000'
                        onChangeText={text => setdosagePerPills(text)}
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={{ backgroundColor: Color.White, width: '15%', textAlign: 'center', height: Platform.OS === 'ios' ? 30 : 35 }}

                    />
                </View>
                <View style={styles.inputView}>
                    <Text style={styles.text}>Amount of times per day</Text>
                    <TextInput

                        placeholder='0'
                        placeholderTextColor='#000'
                        onChangeText={text => settimesperday(text)}
                        autoCorrect={false}
                        keyboardType='number-pad'
                        style={{ backgroundColor: Color.White, width: '15%', textAlign: 'center', height: Platform.OS === 'ios' ? 30 : 35 }}

                    />
                </View>
            </View>
            <View style={styles.buttonParentView}>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.goBack()} style={styles.button}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('ExerciseTherapy')} style={[styles.button, { backgroundColor: 'green' }]}>
                        <Text style={styles.buttonText}>Next</Text>
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
    headerText: {
        fontSize: 18,
        fontWeight: '400',
        alignSelf: 'center',
        marginVertical: 10
    },
    parentView: {
        flex: 1,

        alignItems: 'center',
        marginTop: 20,
    },
    buttonView: {
        bottom: 30
    },
    inputView: {
        marginVertical: 10,
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 20
    },
    buttonView: {
        alignSelf: 'center',
        width: '90%',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: Color.White
    },
    button: {
        width: 150,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Color.darkBlue
    },
    buttonParentView: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 30

    }
});

//make this component available to the app
export default Index;
