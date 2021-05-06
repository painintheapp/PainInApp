//import liraries
import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button2";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/settings.png')

const menu2 = require('../../components/images/menu2.png')
const Index = ({navigation}) => {
    const [SearchData, setSearchData] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={menu2}
                image2={settings}
                onPress={() => navigation.goBack()}
                onPress1={()=>navigation.openDrawer()}
                backgroundColor={Color.darkBlue}
                text='PAINLESS'
                textColor={Color.White}
                fontSize={25}

            />
            <Text style={styles.headerText}>Pain Education</Text>
            <View style={styles.parentView}>
                <View style={styles.searchView}>
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor='#000'
                        style={styles.TextInput}
                        onChangeText={(text) => setSearchData(text)}

                    />

                </View>

                <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.searchButtonView}>
                    <Image
                        source={require('../../components/images/search2x.png')}
                    />

                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <Button
                    name='About Pain'
                    onPress={()=>navigation.navigate('Frame36')}
                    backgroundColor={Color.White}
                    style={styles.button}

                />
                 <Button
                    name='Conditions'
                    backgroundColor={Color.White}
                    style={styles.button}

                />
                 <Button
                    name='Types of Specialist'
                    backgroundColor={Color.White}
                    style={styles.button}

                />
                 <Button
                    name='Treatments'
                    backgroundColor={Color.White}
                    style={styles.button}

                />
                 <Button
                    name='Symptoms Locator'
                    backgroundColor={Color.White}
                    style={styles.button}

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
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '500',
        marginVertical: 20
    },
    parentView: {
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    searchView: {
        backgroundColor: Color.White,
        width: '85%',
        height: 40,
        justifyContent: 'center',

    },
    TextInput: {
        paddingLeft: 10,
        height: 40,

    },
    searchButtonView: {
        width: '13%',
        height: 40,
        backgroundColor: Color.darkBlue,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
        marginVertical:30,
        width: "90%",
        alignSelf: 'center',
    },
   
});

//make this component available to the app
export default Index;
