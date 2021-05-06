//import liraries
import React, { Component, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({navigation}) => {
    const [createPool, setcreatePool] = useState(false)
    const [SearchPoll, setSearchPoll] = useState(false)

    return (
        <View style={styles.container}>
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
                <Text style={styles.headerText}>SYRINGOMYELIA</Text>
            </View>
            <View style={styles.headerView}>
                <TouchableOpacity onPress={() => navigation.navigate('CommunityDiscussion7')} activeOpacity={.7} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                    <Image
                        resizeMethod='resize'
                        resizeMode='contain'
                        style={{ width: 100, height: 100 }}
                        source={require('../../components/images/mike.png')}

                    />
                    <TouchableOpacity activeOpacity={.7} onPress={()=>navigation.navigate('CommunityDiscussion7')}>
                        <Text style={styles.imageText}>MIKE THE MODERATOR</Text>
                        </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} activeOpacity={.7} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                    <Image
                        resizeMethod='resize'
                        resizeMode='contain'
                        style={{ width: 100, height: 100 }}
                        source={require('../../components/images/usericon.png')}

                    />
                    <Text style={styles.imageText}>PATTY</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.bodyView}>
                <TouchableOpacity onPress={() => { }} activeOpacity={.7} style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                    <Image
                        resizeMethod='auto'
                        resizeMode='contain'
                        style={{ width: 150, height: 200 }}
                        source={require('../../components/images/chat.png')}
                    />
                    <Text style={styles.imageText}>COMMUNITY</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={() => {setcreatePool(!createPool),navigation.navigate('CommunityDiscussion5')}} activeOpacity={.7} style={styles.button}>
                    <Text style={[styles.buttonText, { color: createPool ? 'green' : 'black' }]}>CREATE POLL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSearchPoll(!SearchPoll)} activeOpacity={.7} style={styles.button}>
                    <Text style={[styles.buttonText, { color: SearchPoll ? 'green' : 'black' }]}>SEARCH POLL</Text>
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
    headerView: {
        width: '100%',
        padding: 20,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerTextView: {
        alignSelf: 'center',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#8BC8F2'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imageText: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: '500'
    },
    bodyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonView: {
        justifyContent: 'space-around',
        alignItems: 'center',

        bottom: 30,
        flexDirection: 'row',
    },
    button: {
        width: '40%',
        height: 60,
        backgroundColor: Color.White,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

//make this component available to the app
export default Index;
