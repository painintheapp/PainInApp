//import liraries
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import { PainLessButton } from "../../components/Button3";
import SpecialistDrComp from "../../components/SpecialistDrComp";
import Color from '../../components/Colors'
import StatusBar from '../../components/StatusBar'
const settings = require('../../components/images/search2x.png')
const menu = require('../../components/images/menu2.png')
const Index = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <HeaderView
                image={menu}
                image2={settings}

                onPress1={() => navigation.openDrawer()}
                backgroundColor={Color.darkBlue}
                text='COMMUNITY'
                textColor={Color.White}
                fontSize={25}

            />
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Community Discussion </Text>
            </View>
            <View style={styles.buttonParentView}>
                <View style={styles.buttonView}>

                    <TouchableOpacity activeOpacity={.7} onPress={() => navigation.navigate('CommunityDiscussion3')} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/glob.png')}
                        />
                        <Text style={styles.buttontext}>DISCOVER COMMUNITIES</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/book.png')}
                        />

                        <Text style={[styles.buttontext, { textAlign: 'center' }]} >CODE OF CONDUCT</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/virus.png')}
                        />
                        <Text style={styles.buttontext}>CREATE A POLL</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/questionmark.png')}
                        />
                        <Text style={styles.buttontext} >HOW TO MAKE A POLL</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/chaticon.png')}
                        />
                        <Text style={styles.buttontext}>COMMENT ON A POLL</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute', width: 40, height: 40 }}
                            source={require('../../components/images/searchicon.png')}
                        />
                        <Text style={styles.buttontext} >SEARCH POLLS</Text>

                    </TouchableOpacity>

                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute' }}
                            source={require('../../components/images/chart.png')}
                        />
                        <Text style={styles.buttontext}>BENIFITS OF A COMMUNITY</Text>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.7} onPress={() => { }} style={styles.button} >
                        <Image
                            style={{ position: 'absolute', width: 40, height: 40 }}
                            source={require('../../components/images/aliens.png')}
                        />
                        <Text style={styles.buttontext} >BECOME A MODERATOR</Text>

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
    buttonParentView: {
        flex: 1,
        marginTop: 30,

        alignItems: 'center',
    },
    buttonView: {
        width: '99%',
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
    },
    button: {
        width: '49%',
        backgroundColor: Color.White,
        height: 100,
        borderColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontext: {
        fontSize: 15,
        fontWeight: '700',

    },
    headerTextView: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#7FF69A',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    }

});

//make this component available to the app
export default Index;
