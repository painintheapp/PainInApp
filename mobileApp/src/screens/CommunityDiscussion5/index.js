//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({navigation}) => {
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
            <ScrollView>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}> SYRINGOMYELIA </Text>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.headerbodyText}>Who to see about alignment of neck</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button}>
                        <Text style={styles.bodyText}>Symptoms and Treatments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button}>
                        <Text style={styles.bodyText}>Surgery and Recovery</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.fotterView}>
                    <View style={styles.nameParentView}>
                        <View style={styles.headernameView}>
                            <View style={{ width: 70, height: 70, borderRadius: 70 / 2, backgroundColor: '#E07F92', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 25, color: Color.White }}>A</Text>

                            </View>
                            <Text>Hey peeps</Text>
                        </View>
                        <View style={styles.nameView}>
                            <Text style={{ fontSize: 16, marginLeft: 60 }}>Abbielee</Text>
                            <Text>11d</Text>
                        </View>

                    </View>
                    <ScrollView>
                        <Text style={styles.paintext}> So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day.So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day. So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day.So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day.So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day.So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day.So i'm 8month pist Decompression and over all i've been feeling really great how ever in the past month I have had a coupleof days where my neck and head have been hurting so much that i end up sleeping all day. </Text>
                    </ScrollView>
                    <View style={styles.iconButtonView}>
                        <TouchableOpacity activeOpacity={.7} onPress={() => { }} >
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/heart.png')}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7} onPress={() => { }} >
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/link.png')}
                            />

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7} onPress={() => { }} >
                            <Image
                                resizeMode='contain'
                                style={{ width: 30, height: 30 }}
                                source={require('../../components/images/rose.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            
                <TouchableOpacity onPress={()=>navigation.navigate('CommunityDiscussionSlider')} activeOpacity={.7} style={styles.postButton}>
                    <Text style={styles.postButtonText}>POST</Text>
                </TouchableOpacity>
            
                </ScrollView>
                <View style={{height:20}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
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
    headerView: {
        flex: 1,
        width: '100%',
        backgroundColor: Color.White,

    },
    headerbodyText: {
        fontSize: 25,
        padding: 10,
        fontWeight: 'bold'
    },
    buttonView: {
        padding: 10,
        borderBottomWidth: .5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 5,
        marginLeft: 10,
        backgroundColor: Color.greyLight
    },
    bodyText: {
        color: Color.White
    },
    fotterView: {
        flex: 1,
    },
    nameParentView: {
        padding: 20,
        flexDirection: 'row',
    },
    nameView: {
        width: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    paintext: {
        paddingHorizontal: 15,
        fontSize: 15
    },
    postButton: {
        alignSelf: 'center',
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        
        backgroundColor: Color.White,

    },
    iconButtonView: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%'
    },
    buttonViewpost: {
        borderWidth: 1
    },
    postButtonText:{
        fontSize:18,
        color:'green'

    }

});

//make this component available to the app
export default Index;
