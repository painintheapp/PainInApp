//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button4";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
import Radio from "../../components/Radio2";
import CalendarPicker from 'react-native-calendar-picker';
const search2x = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({ navigation }) => {
    return (

        <View style={styles.container}>

            <StatusBar />
            <HeaderView
                image={backArrow}
                image2={search2x}
                backgroundColor={Color.darkBlue}
                text='PAIN EDUCATION'
                onPress1={() => navigation.goBack()}
                textColor={Color.White}
                fontSize={25}

            />


            <View style={styles.bodyView}>
                <View style={styles.buttonView}>
                    <Button
                        onPress1={() => { }}
                        name='INTRO TO PAIN'
                        onPress={() => navigation.navigate('Frame38')}

                    />
                    <Button
                        onPress1={() => { }}
                        name='CONDITIONS A_Z'

                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress1={() => { }}
                        name='TYPES OF SPECIALISTS'

                    />
                    <Button
                        onPress1={() => { }}
                        name='TREATMENTS & COPING TOOLS'
                        numberOfLines={2}


                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress1={() => { }}
                        name='PAIN MEASUREMENT'

                    />
                    <Button
                        onPress1={() => { }}
                        name='HUMAN ANATOMY'

                    />
                </View>
                <View style={styles.buttonView}>
                    <Button
                        onPress1={() => { }}
                        name='COVEREAGE & INSURANCE'

                    />
                    <Button
                        onPress1={() => { }}
                        name='RARE CHRONIC CONDITION'

                    />
                </View>
            </View>
            <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('Education10')} style={styles.conditionButton}>
                <Text style={styles.conditionButtontext}>GO TO MY CONDITION(S)</Text>
            </TouchableOpacity>



        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround
    },
    bodyView: {
        flex: 1,
        marginTop: 30,

    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 8,
        justifyContent: 'space-between',
    },
    conditionButton: {
        alignSelf: 'center',
        backgroundColor: Color.White,
        padding: 20,
        bottom:20,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    conditionButtontext: {
        fontSize: 18,
        color: 'green',
        fontWeight: '600'
    }

});

//make this component available to the app
export default Index;
