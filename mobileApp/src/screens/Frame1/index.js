//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet ,Platform } from 'react-native';
import HeaderView from "../../components/header";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import SwitchView from "../../components/SwitchView";
import StatusBar from '../../components/StatusBar'
import Color from '../../components/Colors'
const setting = require('../../components/images/settings.png')
const backArrow = require('../../components/images/arrow-back2x.png')
const Index = ({ navigation }) => {
    const [VitaminName, setVitaminName] = useState('')
    const [Additionalvitamin1, setAdditionalvitamin1] = useState('')
    const [Additionalvitamin2, setAdditionalvitamin2] = useState('')
    const [EXcardio, setEXcardio] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar/>
            <HeaderView
                backgroundColor={Color.darkBlue}
                image={backArrow}
                onPress1={() => navigation.goBack()}
                image2={setting}
                fontSize={30}
                text='PAIN IN THE APP'
                textColor={Color.White}
            />
            <Text style={styles.lifestyleText}>Lifestyle</Text>

            <SwitchView
                text='Vitamins'
                name='Yes'
                style={{ fontSize: 20 }}
                name2='No'
            />

            <View style={styles.typesView}>
                <Text style={{ fontSize: 20 }}>Types</Text>
                <View style={{ width: '60%' }}>
                    <View style={styles.TextInputView}>
                        <TextInput
                            placeholder='Vitamin Name'
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            onChangeText={(text) => setVitaminName(text)}
                            style={{ height: 40, paddingLeft: 10, }}
                        />
                    </View>
                    <View style={[styles.TextInputView, { marginTop: 10 }]}>
                        <TextInput
                            placeholder='Additional Vitamin'
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            onChangeText={(text) => setAdditionalvitamin1(text)}
                            style={{ height: 40, paddingLeft: 10, }}
                        />
                    </View>
                    <View style={[styles.TextInputView, { marginTop: 10 }]}>
                        <TextInput
                            placeholder='Additional Vitamin'
                            placeholderTextColor='#000'
                            autoCorrect={false}
                            onChangeText={(text) => setAdditionalvitamin2(text)}
                            style={{ height: 40, paddingLeft: 10, }}
                        />
                    </View>



                </View>
            </View>
            <View style={styles.ExcerciseView}>
                <SwitchView
                    text='Do you excercise?'
                    name='Yes'
                    style={{ fontSize: 20 }}
                    name2='No'
                />

            </View>
            <View style={styles.typeofexcerciseView}>
                <Text style={styles.text}>Type of excercise</Text>
                <View style={[styles.TextInputView, { width: '55%' }]}>
                    <TextInput
                        placeholder='Ex Cardio'
                        placeholderTextColor='#000'
                        autoCorrect={false}
                        onChangeText={(text) => setEXcardio(text)}
                        style={{ height: 40, paddingLeft: 10, }}
                    />
                </View>

            </View>
            <View style={styles.ExcerciseView}>
                <SwitchView
                    text='Do you have a pain management team?'
                    style={{ fontSize: 20, width: '70%' }}
                    numberOfLines={2}
                    name='Yes'
                    name2='No'
                />

            </View>
            <View style={{ marginTop: 50 }}>

                <View style={{ bottom: Platform.OS==='ios'? 0 : 50}}>            
                    <Button
                    onPress={() => navigation.navigate('teamSearch')}
                    name='Start your pain management'
                    backgroundColor={Color.darkBlue}
                    color={Color.White}
                    alignSelf='center'
                />
                </View>

            </View>


        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.backGround,
    },
    lifestyleText: {
        alignSelf: 'center',
        fontSize: 25,
        marginVertical: 10,
        fontWeight: '600'
    },
    typesView: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 30,

    },
    TextInputView: {
        backgroundColor: Color.White,
        width: '100%',
        overflow: 'hidden',


    },
    ExcerciseView: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 60
    },
    typeofexcerciseView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        marginTop: 50,


    },
    text: {
        fontSize: 20
    }


});


export default Index;
