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



const Index = ({ navigation }) => {
    const [StrongWinds, setStrongWinds] = useState(false)
    const [HeavyRain, setHeavyRain] = useState(false)
    const [cOldTemoreture, setcOldTemoreture] = useState(false)
    const [FreezingTempreture, setFreezingTempreture] = useState(false)
    const [HeatWave, setHeatWave] = useState(false)
    const [Other, setOther] = useState(false)
    const [ExplaintextInput, setExplaintextInput] = useState('')
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
            <Text numberOfLines={3} style={styles.headerText}>Patty,it seems like the tempreture swing was our primary trigge.Wat was the weather like on this day?</Text>
            <View style={styles.parentView}>
                <View style={{
                    alignItems: 'flex-start',
                }}>
                    <CheckBox
                        text='Strong Winds'
                        value={StrongWinds}
                        onValueChange={(value) => setStrongWinds(value)}
                    />
                    <CheckBox
                        text='Heavy Rain'
                        value={HeavyRain}
                        onValueChange={(value) => setHeavyRain(value)}
                    />
                    <CheckBox
                        text='Cold Tempreture'
                        value={cOldTemoreture}
                        onValueChange={(value) => setcOldTemoreture(value)}
                    />
                    <CheckBox
                        text='Freezing Tempreture'
                        value={FreezingTempreture}
                        onValueChange={(value) => setFreezingTempreture(value)}
                    />
                    <CheckBox
                        text='Heavy Wave'
                        value={HeatWave}
                        onValueChange={(value) => setHeatWave(value)}
                    />
                    <CheckBox
                        text='Other'
                        value={Other}
                        onValueChange={(value) => setOther(value)}
                    />
                </View>
                <View style={styles.explainView}>
                    <TextInput
                        placeholder='Please explain'
                        multiline={true}
                        autoCorrect={false}
                        
                        onChangeText={value => setExplaintextInput(value)}
                        placeholderTextColor='#000'
                    />

                </View>

            </View>
            <View style={styles.buttonView}>
                <Button
                    name='Next'
                    backgroundColor={Color.darkBlue}
                    alignSelf='center'
                    color={Color.White}
                    onPress={() => navigation.navigate('Frame17')}
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
        fontSize: 15,
        alignSelf: 'center',
        marginVertical: 35,
        width: '80%'
    },
    parentView: {
        flex: 1,
        alignItems: 'center',

    },

    explainView: {
        backgroundColor: Color.White,
        padding: 10,
        ...Platform.select({
            'android': {
                width: '60%',
                height: '20%'
            },
            'ios': {
                width: '50%',
                height: '15%'
            }
        }),

        marginLeft: '22%',

    },
    buttonView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 30
    }
});

//make this component available to the app
export default Index;
