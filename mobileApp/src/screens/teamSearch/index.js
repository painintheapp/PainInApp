//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, Platform, Switch } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SwitchView from "../../components/SwitchView";

import Color from '../../components/Colors'

const setting = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const userContct = require('../../components/images/contacts3x.png')
import StatusBar from '../../components/StatusBar'
const Index = ({ navigation }) => {
    const [UserName, setUserName] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={backArrow}
                onPress1={() => navigation.goBack()}
                image2={setting}
                fontSize={30}
                backgroundColor={Color.darkBlue}
                text='PAIN IN THE APP'
                textColor={Color.White}

            />
            <Text style={styles.headerText}>Pain Management Team</Text>
            <View style={styles.nameView}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.userInfoView}>
                <Text style={styles.text}>A</Text>
                <Image
                    source={userContct}
                    resizeMode='contain'
                    style={{ width: 30 }}

                />
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholderTextColor='#000'
                        placeholder='Name'
                        autoCorrect={false}
                        onChangeText={(text) => setUserName(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setuserEmail(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>

            </View>
            <View style={styles.userInfoView}>
                <Text style={styles.text}>B</Text>
                <Image
                    source={userContct}
                    resizeMode='contain'
                    style={{ width: 30 }}

                />
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholderTextColor='#000'
                        placeholder='Name'
                        autoCorrect={false}
                        onChangeText={(text) => setUserName(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setuserEmail(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>

            </View>
            <View style={styles.userInfoView}>
                <Text style={styles.text}>C</Text>
                <Image
                    source={userContct}
                    resizeMode='contain'
                    style={{ width: 30 }}

                />
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholderTextColor='#000'
                        placeholder='Name'
                        autoCorrect={false}
                        onChangeText={(text) => setUserName(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setuserEmail(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>

            </View>
            <View style={styles.userInfoView}>
                <Text style={styles.text}>D</Text>
                <Image
                    source={userContct}
                    resizeMode='contain'
                    style={{ width: 30 }}

                />
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholderTextColor='#000'
                        placeholder='Name'
                        autoCorrect={false}
                        onChangeText={(text) => setUserName(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>
                <View style={styles.TextInputView}>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setuserEmail(text)}
                        style={{ height: 40, paddingLeft: 10 }}
                    />

                </View>

            </View>
            <View style={styles.hippaView}>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>HIPPA</Text>
                <Switch
                    trackColor={{ false: Color.White, true: '#7f0bb5' }}
                    thumbColor={isEnabled ? Color.White : Color.White}

                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

            </View>
            <View style={{ bottom: Platform.OS === 'ios' ? 0 : 55 }}>
                <Button
                    name='Save to Journal'
                    alignSelf='center'
                    onPress={() => navigation.navigate('SpecialistDr')}
                    backgroundColor={Color.darkBlue}
                    color={Color.White}
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
    headerText: {
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 25,
        fontWeight: '500'
    },
    nameView: {

        alignSelf: 'flex-end',
        width: '50%',
        right: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        fontSize: 20,
        fontWeight: '500'
    },
    userInfoView: {
        width: '90%',
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        justifyContent: 'space-between',
    },
    TextInputView: {
        backgroundColor: Color.White,
        width: '35%',

    },
    hippaView: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '30%',
        flexDirection: 'row',
        marginVertical: 50
    }
});


export default Index;
