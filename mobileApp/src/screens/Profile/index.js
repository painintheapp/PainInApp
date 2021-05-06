//import liraries
import React, { Component, useState } from 'react';
import { View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native';
import HeaderView from '../../components/header'
import UserInfo from '../../components/UserInfo'
import Color from '../../components/Colors'
import TextInput from '../../components/TextInput'
import Button from "../../components/Button";
import StatusBar from '../../components/StatusBar'

import SwitchSelector from "react-native-switch-selector";
const setting = require('../../components/images/settings.png')
const menu = require('../../components/images/menu2.png')
let data = [
    'A',
    'B',
    'C',
    'D'
]
const buttons = ['Male', 'Female',]
let primaryCodition;
const Index = ({ navigation }) => {
    const [Seraching, setSeraching] = useState(false)
    const [SelectedValue, setSelectedValue] = useState('')
    const [myData, setmyData] = useState(data)
    const [FirsteName, setFirsteName] = useState('')
    const [lastName, setlastName] = useState('')
    const [Age, setAge] = useState('')
    const [Weight, setWeight] = useState('')
    const [Height, setHeight] = useState('')
    const [Gender, setGender] = useState('')
    const [ListCondition, setListCondition] = useState('')
    const [selectedIndex, setselectedIndex] = useState(0)


    const updateIndex = (selectedIndex) => {
        setselectedIndex(selectedIndex)
    }
    function PrimarySymptom(value) {
        const primaryCodition = data.filter(item => item.toLowerCase() === value.toLowerCase())
        setSeraching(true)
        setmyData(primaryCodition)



    }
    function SearchCondition(value) {
        const secondCondtion = data.filter(item => item.toLowerCase() === value.toLowerCase())
        console.log('=======value======', value, secondCondtion)
        setmyData(secondCondtion)
    }


    return (
        <View style={styles.container}>
            <StatusBar />

            <HeaderView
                image={menu}
                onPress1={() => navigation.openDrawer()}
                image2={setting}
                fontSize={25}
                backgroundColor={Color.darkBlue}
                textColor={Color.White}
                text='PAINLES'

            />
            <UserInfo
                name='First Name '
                placeholder='First'
                onChangeText={(text) => setFirsteName(text)}
            />
            <UserInfo
                name='Last Name '
                placeholder='Last'
                onChangeText={(text) => setlastName(text)}
            />
            <UserInfo
                name='Age '
                placeholder='Age'
                keyboardType={'number-pad'}
                onChangeText={(text) => setAge(text)}
            />
            <UserInfo
                name='Weight'
                placeholder='in-Pounds'
                keyboardType={'number-pad'}
                onChangeText={(text) => setWeight(text)}
            />
            <UserInfo
                name='Height'
                placeholder='in Feet'
                keyboardType={'number-pad'}
                onChangeText={(text) => setHeight(text)}
            />
            <View style={styles.genderView}>
                <Text style={{ fontSize: 20 }} >Gender</Text>

                <SwitchSelector
                    initial={0}
                    onPress={value => setGender(value)}
                    textColor={Color.lightblue} //'#7a44cf'
                    selectedColor={Color.darkBlue}
                    buttonColor={Color.lightblue}
                    borderColor={Color.darkBlue}
                    style={{ width: '40%' }}
                    hasPadding
                    options={[
                        { label: "Male", value: "Male" },
                        { label: "Female", value: "Female" }
                    ]}
                />


            </View>
            <UserInfo
                name='Primary Symptoms'
                placeholder='Symptoms'
                Value={SelectedValue}
                onChangeText={(text) => PrimarySymptom(text)}
            />
            {
                Seraching ? <View style={styles.searchView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { setSelectedValue(myData), setSeraching(false) }}>
                        <Text style={{ fontSize: 18 }}>{myData}</Text>
                    </TouchableOpacity>
                </View> : null
            }


            <UserInfo
                name='Search Condition(s)'
                placeholder='Symptoms'
                Value={''}
                onChangeText={(text) => SearchCondition(text)}
            />
            {
                Seraching ? <View style={styles.searchView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }}>
                        <Text style={{ fontSize: 18 }}>{myData}</Text>
                    </TouchableOpacity>
                </View> : null
            }
            <View style={styles.ListConditionView}>
                <Text style={styles.listText}>List Condition(s)</Text>
                <View style={styles.ConditionView}>
                    <TextInput
                        placeholder='Enter conditions'
                        style={{ padding: 10, }}
                        multiline={true}
                        onChangeText={(text) => setListCondition(text)}
                    />
                </View>

            </View>
            <View style={styles.ButtonView}>
                <Button
                    onPress={() => navigation.navigate('ConditionsSelect')}
                    name='Next'
                    color={Color.White}
                    backgroundColor={Color.darkBlue}
                />
            </View>



        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: Color.backGround
    },
    ListConditionView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,

    },
    listText: {
        fontSize: 20,
        fontWeight: '400'
    },
    ConditionView: {
        width: '95%',
        height: 70,
        padding: 10,
        marginTop: 10,
        backgroundColor: Color.White,
        alignSelf: 'center',

    },
    genderView: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'space-between',
        flexDirection: 'row',


    },
    ButtonView: {
        ...Platform.select({
            'ios': {
                marginTop: 100,
            },
            'android': {
                marginTop: 30
            }
        }),

        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchView: {
        backgroundColor: Color.White,
        width: '45%',
        alignSelf: 'flex-end',
        right: 20,
        ...Platform.select({
            'android': {
                bottom: '36%',

            },
            'ios': {
                bottom: '46%',
            }
        }),

        position: 'absolute',

    }

});

export default Index;
