//import liraries
import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
// create a component
const Index = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <StatusBar />
                <HeaderView
                    image={backArrow}
                    image2={settings}
                    onPress1={() => navigation.goBack()}
                    backgroundColor={Color.darkBlue}
                    text='COMMUNITY'
                    textColor={Color.White}
                    fontSize={25}
                />
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText}> SYRINGOMYELIA </Text>
                </View>
                <Image
                    resizeMethod='auto'
                    resizeMode='contain'
                    style={{ marginTop: 20, width: 150, height: 150, alignSelf: 'center' }}
                    source={require('../../components/images/mike.png')}
                />
                <Text style={styles.headerTextMike} >MIKE THE MODERATOR</Text>
                <View style={styles.View}>
                    <ScrollView>
                        <Text style={styles.text}>Mike is one of tour first moderators.He has had syringomyelia for 10 years.He will helo you naigate in the community.Mike belives in the power of community healing some of our pain.Mike practice yoga daily and is a vegan.</Text>
                    </ScrollView>
                </View>
            </View>


            <View style={styles.buttonView}>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button}>
                    <Text style={styles.buttonText}>BECOME A MODERATOR</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.7} onPress={()=>{}} style={styles.button}>
                    <Text style={styles.buttonText}>ASK MIKE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
        justifyContent: 'space-between',
    },
    headerTextView: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#8BC8F2',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerTextMike: {
        alignSelf: 'center',
        fontWeight: '600',
        marginVertical: 20,
        fontSize: 16
    },
    View: {
        alignSelf: 'center',
        width: '90%',
        paddingVertical: 15,
        backgroundColor: Color.White,
        overflow: 'hidden',
        marginTop: 30,
    },
    text: {
        fontSize: 20,
        fontWeight: '500'
    },
    buttonView: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        bottom: 20
    },
    button: {
        width: '48%',
        height: 55,
        backgroundColor: Color.White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 20,
        textAlign: 'center'
    }

});

//make this component available to the app
export default Index;
